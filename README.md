# bpmn-mapper

A [Claude Code](https://claude.com/claude-code) skill that has an AI agent map
your application's **business processes** — not its call graph — from your
source code, and emit the result as valid BPMN 2.0. Point it at a codebase
(routes/controllers, queue consumers, cron jobs, status enums, webhooks,
payment/auth/email flows) and it reconstructs the business process behind
them: actors become pools/lanes, decisions become gateways, waits/timeouts
become timer events, inbound webhooks become message events. The diagram is
always run through a real parser and semantic validator before it's handed
back, so it passes structural checks (reachability, start/end rules, pool
crossing, known ids). Whether it models your process correctly still needs a
human review against the code. You can open it directly in
[bpmn.io](https://demo.bpmn.io/) or Camunda Modeler.

## Example

`skill/examples/order-fulfillment.mmd` — a small order-fulfillment flow with
two pools, lanes, and a message flow between them:

```
bpmn LR
  pool "Customer"
    start c0 "Order needed"
    task:user c1 "Submit order"
    end c2 "Order submitted"
  pool "Shop"
    lane "Sales"
      start message s1 "Receive order"
      task:user t1 "Review order"
      xor g1 "Items available?"
    lane "Warehouse"
      task:user t2 "Pick and pack order"
      task:user t3 "Dispatch order"
      end e1 "Order shipped"
      end e2 "Order backordered"
  c0 --> c1 --> c2
  s1 --> t1 --> g1
  g1 -- "Yes" --> t2 --> t3 --> e1
  g1 -->|default| e2
  c1 ==>|"Order"| s1
```

Rendered (`skill/examples/order-fulfillment.svg`):

![order-fulfillment](skill/examples/order-fulfillment.svg)

`skill/examples/order-fulfillment.bpmn` is the same flow exported as BPMN 2.0
XML with layout (BPMNDI) — open it in bpmn.io or Camunda Modeler.
`skill/examples/media-viewer-upload.mmd` is a second, real example mapped
end-to-end from an Express app. `skill/examples/broken-example.mmd` is
deliberately invalid — run it through `validate.mjs` to see the
self-correcting error catalogue in action.

## Install

1. Clone this repo:
   ```sh
   git clone https://github.com/rwspatin/bpmn-skill.git
   ```
2. Make the skill visible to Claude Code by symlinking (or copying) `skill/`
   into your skills directory:
   ```sh
   ln -s "$(pwd)/bpmn-skill/skill" ~/.claude/skills/bpmn-mapper
   ```
3. Requires **Node >= 22**.
   - `validate.mjs`, `lint.mjs` and `export-xml.mjs` are self-contained (they
     use a vendored, pre-built parser/exporter bundle) and work fully offline —
     nothing further to install for those three.
   - `render.mjs` (SVG preview) needs the Mermaid fork this skill's `bpmn`
     DSL comes from, checked out and built, because it drives the real
     renderer in headless Chromium:
     ```sh
     git clone https://github.com/rwspatin/mermaid.git
     cd mermaid
     git checkout feat/bpmn-diagram
     pnpm install
     pnpm build:mermaid
     pnpm exec playwright install chromium   # browser used for headless rendering
     export BPMN_MERMAID_FORK="$(pwd)"   # required — render.mjs has no default path
     ```

## Usage

From `skill/`:

```sh
node scripts/validate.mjs   path/to/flow.mmd            # -> "VALID" (exit 0) or catalogue errors (exit 1)
node scripts/lint.mjs       path/to/flow.mmd [--json]   # -> "CLEAN" (exit 0) or style warnings L1-L8 (exit 1)
node scripts/export-xml.mjs path/to/flow.mmd out.bpmn   # -> BPMN 2.0 XML with BPMNDI (bpmn.io-ready)
node scripts/render.mjs     path/to/flow.mmd out.svg    # -> headless SVG preview (needs BPMN_MERMAID_FORK, see above)
```

`lint.mjs` is a deterministic style linter that runs after `validate.mjs`: it
checks the BPMN method/style rules (question-labeled gateways, labeled and
default branches, parallel split/join pairing, named start/end events and
message flows, business-language labels) and prints self-correcting warnings,
so those checks live in the CLI rather than only in the skill's prose.

As a Claude Code skill, the normal path is conversational: ask Claude to map
a codebase's business flows to BPMN, and it follows `skill/SKILL.md`'s
workflow — discover flows, model them per `skill/references/mapping-playbook.md`,
emit the DSL per `skill/references/dsl-spec.md`, validate and self-correct
with `validate.mjs`, then optionally render/export. See `skill/SKILL.md` for
the full workflow and modeling rules.

## Layout

- `skill/` — the skill itself (this is what you symlink into
  `~/.claude/skills/bpmn-mapper`).
  - `SKILL.md` — name, triggers (PT + EN), workflow, modeling rules.
  - `references/dsl-spec.md` — prompt-ready DSL spec + the full
    self-correcting error catalogue.
  - `references/mapping-playbook.md` — code→BPMN heuristics + worked
    examples.
  - `scripts/` — `validate.mjs`, `lint.mjs` (+ `lint.test.mjs`,
    `test-fixtures/`), `export-xml.mjs`, `render.mjs`, plus
    `vendor/bpmn-core.mjs` (the vendored parser bundle) and
    `lib/rebuild.mjs` (regenerates that bundle from the fork).
  - `examples/` — validated `.mmd` files (+ `.bpmn`, `.svg`).

## Status & upstream tracking

The `bpmn` diagram DSL, parser, semantic validator, and XML exporter live in
the author's Mermaid fork, **not upstream Mermaid** — `feat/bpmn-diagram` on
[`rwspatin/mermaid`](https://github.com/rwspatin/mermaid). This skill vendors
a compiled bundle of that fork's parser/validator/exporter
(`skill/scripts/vendor/bpmn-core.mjs`, see `THIRD_PARTY_NOTICES.md`) so
`validate.mjs`/`export-xml.mjs` run standalone, and calls the fork's real
built renderer for `render.mjs`.

Two upstream PRs track getting BPMN, and this skill's AI-first layer, into Mermaid:

- [mermaid-js/mermaid#8313](https://github.com/mermaid-js/mermaid/pull/8313)
  — the author's draft PR adding this `bpmn` diagram type and its XML export
  directly to mermaid-js/mermaid. Kept open as a draft reference.
- [filipsajdak/mermaid#1](https://github.com/filipsajdak/mermaid/pull/1) —
  the author's PR into Filip Sajdak's `bpmn-beta` stack, adding tolerant
  keywords, opt-in `bpmn.strict` semantic validation, and a prompt-ready
  spec. `bpmn-beta` is tracked upstream as
  [mermaid-js/mermaid#8160](https://github.com/mermaid-js/mermaid/issues/8160);
  the diagram PR for that stack is
  [mermaid-js/mermaid#8166](https://github.com/mermaid-js/mermaid/pull/8166);
  the original BPMN support request is
  [mermaid-js/mermaid#2623](https://github.com/mermaid-js/mermaid/issues/2623).

Plan: migrate this skill to `bpmn-beta` syntax if/when that stack merges
upstream. Where the BPMN 2.0 XML export ends up living (in-repo vs. a
separate package) is still an open question, pending a maintainer decision on
#2623. Until then, this skill depends on the fork directly, as described
above.

## License

This repository's own code is MIT — see `LICENSE`. The vendored bundle
(`skill/scripts/vendor/bpmn-core.mjs`) embeds third-party code (Mermaid,
Chevrotain, and their dependencies) under their own licenses — see
`THIRD_PARTY_NOTICES.md`.
