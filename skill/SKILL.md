---
name: bpmn-mapper
description: Reconstruct an application's BUSINESS processes from its code and emit validated BPMN as Mermaid `bpmn` DSL (+ optional SVG render and BPMN 2.0 XML for bpmn.io). Reads routes/controllers, queue consumers, cron jobs, status/state enums, webhooks and payment/auth/email flows, and recovers the business process behind them (actors→pools/lanes, decisions→gateways, waits/timeouts→timer events, inbound webhooks→message events). Use for: "mapear fluxos/processos da aplicação", "gerar BPMN do código", "diagrama de processo de negócio", "business process from code", "map application flows to BPMN", "reverse-engineer the workflow".
---

# BPMN Mapper

Turn a codebase into **business** BPMN diagrams. The output is our Mermaid `bpmn`
DSL, always run through a real parser+validator so it is guaranteed correct, plus
optional SVG and BPMN 2.0 XML (opens laid-out in bpmn.io / Camunda Modeler).

This is **reconstruction, not transcription** — recover the business process, don't
diagram the call graph. Labels are business language ("Charge card", "Awaiting
payment"), never function or table names.

## Workflow

1. **Discover** the business flows in the codebase. Inventory business entry points,
   cluster them by capability, then trace a happy path and its decisions/outcomes
   across controllers, consumers, schedulers, state transitions, webhooks, and
   external adapters. Use `references/mapping-playbook.md` (§1–§3).
2. **Model** — one diagram per business capability. A pool is a participant, not a
   deployment unit; lanes are roles within that participant. Cross a participant
   boundary only with a named message flow. Model business decisions, waits, and
   outcomes—not queues, caches, auth middleware, or function calls. Apply the
   checklist below and the procedure in `references/mapping-playbook.md`.
3. **Emit** the DSL following `references/dsl-spec.md` (Part 1 is prompt-ready and
   can be pasted into a sub-prompt if you delegate generation).
4. **Validate & self-correct.** Run `scripts/validate.mjs <file.mmd>`. It prints
   `VALID` or the semantic-error catalogue — each message contains the exact fix
   (`references/dsl-spec.md` Part 2). Apply the fix, re-run, repeat until VALID.
   **Never ship un-validated DSL.**
5. **Deliver** `.mmd`, and when asked: `scripts/render.mjs` for a `.svg` preview and
   `scripts/export-xml.mjs` for a `.bpmn` file the user can open in bpmn.io.

## Scripts

Node >= 22 (the fork's toolchain needs it). From `skill/`:

```sh
node scripts/validate.mjs   path/to/flow.mmd            # -> "VALID" (exit 0) or catalogue errors (exit 1)
node scripts/export-xml.mjs path/to/flow.mmd out.bpmn   # -> BPMN 2.0 XML with BPMNDI (bpmn.io-ready)
node scripts/render.mjs     path/to/flow.mmd out.svg    # -> headless SVG (real glyphs/swimlanes)
```

- `validate.mjs` and `export-xml.mjs` use a **vendored, self-contained parser
  bundle** (`scripts/vendor/bpmn-core.mjs`) — no build, no network, works offline.
- `render.mjs` needs the Mermaid fork checked out **and built**
  (`cd <fork> && pnpm build:mermaid`) because rendering uses the full renderer in
  headless Chromium (via the fork's Playwright). Point it at the fork with
  `BPMN_MERMAID_FORK=/path/to/mermaid` (required — there is no default).
- To regenerate the vendored bundle after the DSL/validator/exporter changes in the
  fork: `BPMN_MERMAID_FORK=/path/to/mermaid node scripts/lib/rebuild.mjs`.

## BPMN method & style rules (must follow)

- Model a single business capability and name its business trigger and end-state
  outcomes. Tasks use imperative verb–object labels; end events use achieved
  business outcomes (for example, "Order shipped"), never generic "Done".
- A pool is one participant; a lane is a role/department inside that participant.
  Sequence flow stays inside a pool (it may cross lanes); named message flow goes
  only between pools. Do not create a pool merely because code calls another
  module, queue, or internal microservice.
- Use an `xor` for one mutually exclusive result, `and` to start **and join** work
  that must all finish, and `or` only when one-or-more paths may be selected (and
  join it correspondingly). Label XOR gateways as questions; label non-default
  outgoing flows with the answer/end state. Give data-based XOR/OR a default path
  unless the alternatives are demonstrably exhaustive.
- A start event creates the process instance; an intermediate message/timer event
  waits during an existing instance. Use message events for named inter-participant
  communications and timer events for business time; do not fake an activity
  timeout as a sequential timer. Boundary events are unsupported by this DSL—add a
  comment rather than changing the meaning.
- Make every business alternative explicit: normal result through a gateway,
  exception/timeout/cancellation as a distinct outcome or a documented unsupported
  boundary-event requirement. Merge alternatives before a shared continuation when
  its semantics require it.

The fixed DSL represents a default flow only as `|default|`; it cannot also display
an answer label on that same flow. Use a question gateway, label the non-default
answers, and make the default target unambiguous. Do not invent extra syntax.

## References

- `references/dsl-spec.md` — the prompt-ready condensed DSL spec + the full
  self-correcting error catalogue (every message with its fix).
- `references/mapping-playbook.md` — code→BPMN heuristics per stack signal, the
  step-by-step modeling procedure, and two worked examples.

## Examples

`examples/` holds validated artifacts you can study or reuse:
`order-fulfillment.mmd` (+ `.bpmn`, `.svg`) — pools, lanes, message flow;
`broken-example.mmd` — deliberately invalid, run `validate.mjs` on it to see the
catalogue in action; `media-viewer-upload.mmd` (+ `.bpmn`, `.svg`) — a real flow
mapped end-to-end from an Express app.

## Scope

The DSL covers BPMN Level 1 Descriptive + intermediate message/timer catch events:
start/end events, user/service/script tasks, exclusive/parallel/inclusive gateways,
pools/lanes, sequence/conditional/default flows, message flows, data objects. For
anything richer (boundary events, sub-processes, event-based gateways, message throw
events, timer duration/definition), note it as a comment rather than forcing it —
and keep the diagram valid. Labels document the timer/message; the export does not
make those details executable.
