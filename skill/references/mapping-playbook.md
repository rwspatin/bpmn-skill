# Mapping playbook — code → business BPMN

The job is **reconstruction, not transcription**. You are recovering the business
process a codebase implements, then drawing it in BPMN — not diagramming the call
graph. A reader who doesn't know the codebase (a PM, an auditor) must understand
the diagram.

## 0. Golden rules

- **One process per business capability**, not per file/route. "Checkout",
  "Refund", "Subscription lifecycle" — each is its own `bpmn` diagram.
- **Labels are business language.** `chargeCard()` → "Charge card". `orders` table
  status `awaiting_payment` → "Awaiting payment". Never leak function/table/column
  names into labels.
- **Actors become pools/lanes.** The system under study is one pool; each external
  party it talks to (customer, payment provider, email service, another service)
  is its own pool, reached only by **message flows** (`==>`).
- **Every diagram must pass `validate.mjs`.** Generate, validate, self-correct from
  the catalogue, repeat until VALID. Then export XML / render.

## 1. Discovery heuristics (per stack signal)

Scan for these signals; each maps to a BPMN construct.

| Code signal | BPMN construct |
|---|---|
| HTTP route + handler that starts a user-visible action (`POST /checkout`) | a **start event** (or **message start** if triggered by an external caller/webhook) |
| Inbound **webhook** endpoint (`POST /webhooks/stripe`) | **message event** (start if it kicks off a process, intermediate if the process waits for it) |
| Handler calls another handler / service function | **sequence flow** between tasks |
| `if / switch` on a status, role, amount, or result | **exclusive gateway** (`xor`), one branch per case, condition on the flow |
| `Promise.all` / parallel jobs / "do A and B" with no ordering | **parallel gateway** (`and`) fork, join before the next step |
| "any of these can happen" / multiple optional notifications | **inclusive gateway** (`or`) |
| Call to an external API (payment, email/SMS, 3rd-party) | a **task:service** that emits a **message flow** to an **external pool** for that provider |
| Queue producer → consumer (`queue.add` / `worker.process`) | a **task** followed by the consumer **task** (same pool) or a message flow if the consumer is a separate service/pool |
| Cron job / scheduled retry / `setTimeout` / TTL / "after N days" | **timer** event (start if the job initiates the process, intermediate if the process waits) |
| Status/`enum` field with a set of values | the **states** the process moves through; transitions between them are sequence flows, and the code that changes the status names the task that causes it |
| `try/catch` with a compensating action (refund on failure) | a branch to a separate **end** (e.g. "Payment failed") — model the failure path, don't hide it |
| `role`/`auth` checks gating a step | put the step in the **lane** of the role that performs it |

**Where to look, fast:** route tables / controllers, queue & worker definitions,
cron/schedule config, `status`/`state` enums + the code that assigns them, webhook
handlers, and any client for a payment/email/SMS/3rd-party API.

## 2. Modeling procedure

1. **Name the capability** and its trigger (user action? inbound webhook? schedule?).
2. **List the actors.** System-under-study = one pool; each external party = a pool.
   Roles inside the system that do distinct work = lanes.
3. **Walk the happy path** as tasks in order; give each a business verb-phrase label.
4. **Insert gateways** at every branch you found; label each outgoing flow with the
   real condition (`"amount > 100"`, `"in stock"`, `"payment declined"`).
5. **Add waits**: timers for delays/retries/TTLs, message events for awaited
   webhooks/callbacks.
6. **Add external pools + message flows** for each 3rd-party call.
7. **Close every path** with a meaningful end event ("Shipped", "Rejected",
   "Refunded"). Every node must reach one.
8. **Validate → fix → repeat.** Then export `.bpmn` and/or render `.svg`.

Keep the first cut to BPMN Level 1 Descriptive (this is what the DSL covers):
start/end, tasks, xor/and/or gateways, pools/lanes, message flows, plus
message/timer intermediate events. Note anything richer as a comment rather than
forcing it.

---

## Worked example A — e-commerce checkout (Express routes)

**Code observed (sketch):**
```js
app.post('/checkout', async (req, res) => {
  const order = await createOrder(req.body);         // status: 'pending'
  const stock = await inventory.reserve(order);      // if/else on stock
  if (!stock.ok) { await markBackordered(order); return res.json({state:'backordered'}); }
  const pay = await stripe.charge(order.total, req.body.card);  // external API
  if (pay.status !== 'succeeded') { await markFailed(order); return res.json({state:'payment_failed'}); }
  await Promise.all([ sendConfirmationEmail(order), warehouse.enqueuePick(order) ]); // parallel
  await markPaid(order);                              // status: 'paid'
});
// worker: warehouse.process('pick', async (order) => { await pickAndPack(order); await markShipped(order); })
```

**Signals → BPMN:** `POST /checkout` = start; `if (!stock.ok)` = xor; `stripe.charge`
= service task + message flow to a **Payment provider** pool; `Promise.all` = parallel
gateway; `sendConfirmationEmail` = service task + message flow to an **Email service**
pool; the pick worker = a task in a **Warehouse** lane; each failure path = its own end.

**DSL (validates clean):**
```
bpmn LR
  pool "Shop"
    lane "Checkout"
      start s1 "Checkout requested"
      task:service t1 "Reserve inventory"
      xor g1 "In stock?"
      task:service t2 "Charge card"
      xor g2 "Payment ok?"
      and g3
      task:service t3 "Send confirmation"
      end e2 "Backordered"
      end e3 "Payment failed"
    lane "Warehouse"
      task t4 "Pick & pack"
      end e1 "Shipped"
  pool "Payment provider"
    task tp "Process charge"
  pool "Email service"
    task te "Deliver email"
  s1 --> t1 --> g1
  g1 -- "in stock" --> t2
  g1 -->|default| e2
  t2 --> g2
  g2 -- "succeeded" --> g3
  g2 -->|default| e3
  g3 --> t3 --> e1
  g3 --> t4 --> e1
  t2 ==> tp
  t3 ==> te
```

## Worked example B — subscription lifecycle (status enum + webhooks)

**Code observed (sketch):**
```ts
type SubStatus = 'trialing' | 'active' | 'past_due' | 'canceled';
// POST /webhooks/stripe
switch (event.type) {
  case 'invoice.paid':          setStatus(sub, 'active'); break;
  case 'invoice.payment_failed':setStatus(sub, 'past_due'); scheduleRetry(sub, '3d'); break;
  case 'customer.subscription.deleted': setStatus(sub, 'canceled'); break;
}
// cron daily: if (sub.status==='past_due' && daysPastDue > 7) cancel(sub);
```

**Signals → BPMN:** trial start = start event; the Stripe webhook = **message**
events (the process waits for billing events → intermediate message); the
`past_due` retry `scheduleRetry(…, '3d')` and the 7-day dunning cron = **timer**
events; the status enum values are the states the process passes through; Stripe is
an external pool sending message flows in.

**DSL (validates clean):**
```
bpmn LR
  pool "Billing system"
    start s1 "Trial started"
    intermediate timer i1 "Trial ends"
    task:service t1 "Attempt first charge"
    xor g1 "Charge result?"
    task t2 "Activate subscription"
    intermediate timer i2 "Wait for retry (3 days)"
    task:service t3 "Retry charge"
    xor g2 "Retry result?"
    intermediate timer i3 "Grace period (7 days)"
    task t4 "Cancel subscription"
    end e1 "Active"
    end e2 "Canceled"
  pool "Payment provider"
    task tp "Billing events"
  s1 --> i1 --> t1 --> g1
  g1 -- "paid" --> t2 --> e1
  g1 -->|default| i2
  i2 --> t3 --> g2
  g2 -- "paid" --> t2
  g2 -->|default| i3
  i3 --> t4 --> e2
  t1 ==> tp
  t3 ==> tp
```

Both examples were run through `validate.mjs` and export cleanly to bpmn.io. When
your first draft fails validation, the catalogue message names the exact fix —
apply it and re-run; do not guess.
