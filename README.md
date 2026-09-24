# bpmn-mapper

A Claude Code skill that reconstructs an application's **business processes** from
its code and emits validated BPMN as Mermaid `bpmn` DSL — plus optional SVG render
and BPMN 2.0 XML that opens laid-out in [bpmn.io](https://bpmn.io) / Camunda Modeler.

It reads routes/controllers, queue consumers, cron jobs, status/state enums,
webhooks and payment/auth/email flows, and recovers the business process behind
them (actors → pools/lanes, decisions → gateways, waits/timeouts → timer events,
inbound webhooks → message events). Labels are business language, never function
or table names.

## Layout

- `skill/` — the skill (symlink `~/.claude/skills/bpmn-mapper` → this dir).
  - `SKILL.md` — name, triggers (PT + EN), workflow.
  - `references/dsl-spec.md` — prompt-ready DSL spec + full self-correcting error catalogue.
  - `references/mapping-playbook.md` — code→BPMN heuristics + two worked examples.
  - `scripts/` — `validate.mjs`, `export-xml.mjs`, `render.mjs` (+ `vendor/bpmn-core.mjs`, `lib/rebuild.mjs`).
  - `examples/` — validated `.mmd` (+ `.bpmn`, `.svg`), including a deliberately broken file and a real end-to-end mapping.

## Requirements

- Node >= 22.
- `validate.mjs` / `export-xml.mjs` are self-contained (vendored parser bundle) — no build/network.
- `render.mjs` needs the Mermaid fork (`rwspatin/mermaid`, branch `feat/bpmn-diagram`)
  checked out and built (`pnpm build:mermaid`); point it at the fork via
  `BPMN_MERMAID_FORK=/path/to/mermaid`.

The BPMN DSL, parser, validator and XML exporter live in the fork; this skill
vendors a bundle of them and adds the code→BPMN mapping intelligence.
