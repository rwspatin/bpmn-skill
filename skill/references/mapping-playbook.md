# Mapping playbook — code → business BPMN

Reconstruct the business process, not the call graph. Code is evidence; a diagram is
the smallest collaboration that explains a business trigger, work, decisions, waits,
and outcomes to someone who has not read the code.

## 0. Decide what deserves a diagram

- **Business process:** changes a customer/order/case/contract state, commits money
  or inventory, fulfils a promise, applies a policy, or communicates a business
  result. Show the business action and outcome.
- **Technical plumbing:** routing, DTO validation, auth middleware, serialization,
  retries hidden inside an SDK, logging, metrics, cache, database reads, queue
  acknowledgement, and internal helper calls. Normally omit it. Promote it only
  when it creates a business decision, deadline, hand-off, or observable outcome.
- **One capability per diagram:** `Checkout`, `Refund payment`, `Onboard merchant`,
  `Recover failed subscription payment`—not “orders service” or one endpoint.
  Split when a path has its own trigger/outcomes, another audience/owner, or would
  make the main happy path hard to read. Link diagrams by a named business
  message/outcome; do not put every lifecycle transition on one canvas.

## 1. Find evidence by architecture signal

| Look for | Treat it as BPMN evidence | Usually model it as |
|---|---|---|
| REST/GraphQL command controller (`POST`, mutation) | A user/partner starts a business action. A `GET` normally does not. | Start; message start only when the caller is a separate participant and the message is shown. |
| Queue/topic consumer | A business event may start or resume work. Queue mechanics alone do not. | Message start if it creates a new instance; intermediate message if it correlates to one already waiting. |
| Queue producer | An asynchronous hand-off or published business fact. | A business task; use a named message flow only across participant pools. Keep an internal queue inside the pool. |
| Saga/orchestrator | Coordination and compensating business outcomes across services. | Business tasks/gateways/messages, not “call step 3.” Model compensation as its business action/outcome; note unsupported boundary/compensation semantics in a comment. |
| State machine/status enum | Candidate states and allowed transitions; inspect every writer and trigger. A stored status is not a task. | Tasks that cause transitions, XORs for alternative transitions, timer/message waits that cause later transitions. |
| Cron/scheduler/TTL | Scheduled business initiation or an elapsed business deadline. | Timer start for an independent scheduled process; intermediate timer for a wait in the instance. Do not turn transport retry backoff into a business timer. |
| Webhook | An inbound message from another participant. Check whether it has a correlation key. | Message start when it begins/reconciles a new process; intermediate message when it resolves a known pending request. |
| Payment/FIX/email/SMS/partner adapter | The adapter boundary reveals a business request, confirmation, rejection, or settlement. Protocol parsing/serialization is plumbing. | Service task plus named message flows to a participant only when that participant matters to the reader. |
| `if`/`switch` on policy/result | A distinct business result with a different next step. | XOR question with answer/end-state flow labels; default for the otherwise case. |
| fan-out/join, `Promise.all`, workflow barrier | Work must all complete, or one-or-more selected paths must complete. | `and` fork **and matching join**; use `or` only for genuine one-or-more selection and join it correspondingly. |

Search quickly: route registrations and command handlers; consumer/subscriber and
producer/publisher definitions; scheduler configuration; status/state declarations
and assignments; webhook handlers; adapters/clients; and tests that assert an
outcome. Follow the identifiers named there, not only imports.

## 2. Trace one flow across services

Start from a business command/event and make a small evidence table: **message or
command**, **business key** (order/subscription/payment ID), **correlation/causation
ID**, **producer**, **topic/endpoint**, **consumer**, **state changed**, **outcome**.
Follow the same key through logs, payload schemas, outbox records, queue headers,
and test fixtures. A correlation ID tells you whether a webhook/consumer resumes an
existing instance (intermediate message) or creates a new one (message start).

Do not make every microservice a pool. A pool represents a business participant
with an independently meaningful process. Services that collectively perform work
for the same company/capability normally stay in one pool; use lanes only for real
roles/departments, not Kubernetes deployments. Use another pool when the diagram
needs to show a customer, bank/payment provider, carrier, or independently owned
partner process. Message flows are named business messages, never topic names.

## 3. Discovery procedure

1. **Inventory entry points.** List commands, inbound business events/webhooks,
   schedules, and manual operations; discard reads and plumbing.
2. **Cluster by capability.** Group entry points that share the same business object,
   goal, and outcomes. Select one diagram-sized capability and state its boundary.
3. **Trace the happy path.** Follow one business key across service calls, events,
   queues, state changes, and partner interactions until an outcome is committed.
4. **Add decisions and exceptions.** For each observed branch, identify the business
   question, answer/end state, timeout, rejection, cancellation, or recovery. Do
   not infer branches merely from generic error handling.
5. **Place waits and participants.** Distinguish a received message from a sent
   request; use correlation evidence. Add only meaningful participants and roles.
6. **Name and close outcomes.** Give tasks verb–object labels and each end an
   achieved business state. Split a separate capability when its trigger/outcome
   no longer belongs to this instance. Then validate the DSL and perform the style
   checklist in `SKILL.md`.

## 4. Modeling guardrails

- A **pool** is a participant; a **lane** is a role within one participant.
  Sequence flow may cross lanes but never pools. Message flow is named and crosses
  pools only. An internal service call or queue is not, by itself, a participant.
- A **start** event creates an instance. An **intermediate message** waits for an
  expected correlated response during one. An **intermediate timer** is business
  elapsed time during one. This DSL has catch events only: do not imply message
  throws, boundary timers, duration expressions, or executable correlation rules.
- An XOR gateway is a question with mutually exclusive outcomes. Label each
  non-default branch with its answer/end state and give the data-based decision a
  default unless exhaustive. The fixed grammar renders a default only as
  `|default|`, so it cannot also render `No`; make its target self-explanatory.
- Pair parallel/inclusive forks with the matching join before a continuation that
  requires all/selected work. A merge XOR is only needed when it clarifies a
  convergence; never use a parallel join to merge alternatives.
- Tasks are imperative verb–object phrases ("Reserve inventory"). Events name what
  happened/is awaited ("Receive payment result"). Ends name achieved business
  outcomes ("Order shipped"), not "Done", HTTP responses, or screen navigation.

## Worked example A — checkout with external payment and email

The code evidence is a checkout command, stock and payment results, a fan-out to
confirmation and fulfilment, and payment/email adapters. The provider processes are
shown only because the messages are material to the business collaboration.

```mermaid
bpmn LR
  pool "Customer"
    start c0 "Checkout needed"
    task:user c1 "Submit checkout"
    end c2 "Checkout submitted"
  pool "Shop"
    lane "Sales"
      start message s1 "Receive checkout request"
      task:service t1 "Reserve inventory"
      xor g1 "Items available?"
      task:service t2 "Request payment"
      intermediate message i1 "Receive payment result"
      xor g2 "Payment approved?"
      and g3
      task:service t3 "Send order confirmation"
      end e2 "Order backordered"
      end e3 "Payment rejected"
    lane "Fulfilment"
      task:user t4 "Pick and pack order"
      and g4
      task:user t5 "Dispatch order"
      end e1 "Order shipped"
  pool "Payment provider"
    start message ps1 "Receive payment request"
    task:service pt1 "Process payment"
    end pe1 "Payment result sent"
  pool "Email service"
    start message es1 "Receive confirmation request"
    task:service et1 "Deliver confirmation"
    end ee1 "Confirmation delivered"
  c0 --> c1 --> c2
  c1 ==>|"Checkout request"| s1
  s1 --> t1 --> g1
  g1 -- "Yes" --> t2 --> i1 --> g2
  g1 -->|default| e2
  g2 -- "Yes" --> g3
  g2 -->|default| e3
  g3 --> t3 --> g4
  g3 --> t4 --> g4
  g4 --> t5 --> e1
  t2 ==>|"Payment request"| ps1
  pt1 ==>|"Payment result"| i1
  ps1 --> pt1 --> pe1
  t3 ==>|"Confirmation request"| es1
  es1 --> et1 --> ee1
```

## Worked example B — recover a failed subscription payment

The status enum supplies states, but the process is derived from the writers:
scheduled invoice due, request/reply with the provider, dunning delay, retry, and
cancellation. The repeated wait is one correlated payment-result event, not a new
unrelated webhook process.

```mermaid
bpmn LR
  pool "Billing system"
    start timer s1 "Invoice due"
    task:service t1 "Request charge"
    intermediate message i1 "Receive payment result"
    xor g1 "Payment received?"
    task:service t2 "Activate subscription"
    intermediate timer i2 "Wait 3 days"
    xor g2 "Within dunning window?"
    task:service t3 "Retry charge"
    task:service t4 "Cancel subscription"
    end e1 "Subscription active"
    end e2 "Subscription canceled"
  pool "Payment provider"
    start message ps1 "Receive charge request"
    task:service pt1 "Process charge"
    end pe1 "Payment result sent"
  s1 --> t1 --> i1 --> g1
  g1 -- "Yes" --> t2 --> e1
  g1 -->|default| i2 --> g2
  g2 -- "Yes" --> t3 --> i1
  g2 -->|default| t4 --> e2
  t1 ==>|"Charge request"| ps1
  t3 ==>|"Charge request"| ps1
  pt1 ==>|"Payment result"| i1
  ps1 --> pt1 --> pe1
```

Both are intended to be valid fixed-DSL examples. The validator checks structural
rules; it cannot prove that a timer duration, correlation key, gateway question, or
participant boundary is semantically correct—review those against the code evidence.
