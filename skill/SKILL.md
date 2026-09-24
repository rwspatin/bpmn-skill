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

1. **Discover** the business flows in the codebase. Scan routes/controllers, queue
   producers/consumers, cron/schedules, `status`/`state` enums and the code that
   changes them, webhook handlers, and clients for payment/email/SMS/3rd-party
   APIs. Map each signal to a BPMN construct using the table in
   `references/mapping-playbook.md` (§1).
2. **Model** — one diagram per business capability. System-under-study = one pool;
   each external party = its own pool reached only by message flows. Roles = lanes.
   Decisions → `xor`/`and`/`or` gateways with real condition labels; waits/retries/
   TTLs → `timer` events; awaited webhooks → `message` events. Procedure in
   `references/mapping-playbook.md` (§2), with two full worked examples (Express
   checkout; subscription lifecycle from a status enum + webhooks).
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
  `BPMN_MERMAID_FORK=/path/to/mermaid` (default: `~/git/personal/mermaid`).
- To regenerate the vendored bundle after the DSL/validator/exporter changes in the
  fork: `BPMN_MERMAID_FORK=/path/to/mermaid node scripts/lib/rebuild.mjs`.

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

The DSL covers BPMN Level 1 Descriptive + intermediate message/timer events:
start/end events, user/service/script tasks, exclusive/parallel/inclusive gateways,
pools/lanes, sequence/conditional/default flows, message flows, data objects. For
anything richer (boundary events, sub-processes, event-based gateways), note it as a
comment rather than forcing it — and keep the diagram valid.
