---
name: bpmn-mapper
description: Reconstruct an application's BUSINESS processes from its code and emit validated BPMN as Mermaid `bpmn` DSL (+ optional SVG render and BPMN 2.0 XML for bpmn.io). Reads routes/controllers, queue consumers, cron jobs, status/state enums, webhooks and payment/auth/email flows, and recovers the business process behind them (actors→pools/lanes, decisions→gateways, waits/timeouts→timer events, inbound webhooks→message events). Use for: "mapear fluxos/processos da aplicação", "gerar BPMN do código", "diagrama de processo de negócio", "business process from code", "map application flows to BPMN", "reverse-engineer the workflow".
---

# BPMN Mapper

Turn a codebase into **business** BPMN diagrams. The output is our Mermaid `bpmn`
DSL, always run through a real parser+validator (structural correctness) and a
style linter, plus optional SVG and BPMN 2.0 XML (opens laid-out in bpmn.io /
Camunda Modeler). Whether it models the right process still needs human review.

This is **reconstruction, not transcription** — recover the business process, don't
diagram the call graph. Labels are business language ("Charge card", "Awaiting
payment"), never function or table names.

## Workflow

0. **Map already exists?** If the target map directory already has `.mmd` diagrams
   for this codebase, **do not regenerate it from scratch** — follow
   [Update mode](#update-mode-map-already-exists) instead: re-trace only what the
   code changes touched and keep every existing id and unchanged label as-is.
   Steps 1–6 below are for a new map (or for a new diagram update mode asks for).
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
5. **Lint the style.** Once VALID, run `scripts/lint.mjs <file.mmd>`. It prints
   `CLEAN` or method/style **warnings** (rules L1–L8, same self-correcting format as
   the validator: rule id, element, problem, fix). Fix each warning and re-run until
   `CLEAN`, **or** each remaining warning is a deliberate, documented exception.
6. **Deliver** `.mmd`, and when asked: `scripts/render.mjs` for a `.svg` preview and
   `scripts/export-xml.mjs` for a `.bpmn` file the user can open in bpmn.io.
   Every delivered `.mmd` **must** carry provenance in its header — one
   `%% source: <repo-name> <full-commit-sha> <YYYY-MM-DD>` line per source repo
   (`git -C <repo> rev-parse HEAD`) — and should carry evidence for its elements
   (`%% evidence <id>: repo:path:line` comments, and/or a `RULES.md` table with an
   Evidence column); see `references/dsl-spec.md` Part 4. Without them the next
   run cannot update the map incrementally.

## Update mode (map already exists)

Goal: a re-run produces a **small, meaningful diff** — only flows the code change
touched move, everything else stays byte-identical. Never renumber, rename or
re-sort what already exists.

1. **Scout.** `node scripts/changed-since.mjs <map-dir> --repo <name>=<path> …`
   (one `--repo` per `%% source:` repo). It diffs each recorded sha against HEAD
   (read-only git) and lists AFFECTED diagrams (+ the rules/elements whose
   evidence changed), POSSIBLY AFFECTED diagrams (no evidence to narrow it down),
   STALE rules (evidence file deleted/renamed), changed files matching no rule,
   and evidence that matches no file. Exit 0 = up to date → stop and say so.
   If the map has no `%% source:` lines (legacy map), ask for or find the commit
   it was traced at (e.g. `git log --before=<map date> -1`), add the lines, and
   re-run; if that is unknowable, say so and treat every diagram as possibly
   affected.
2. **Re-trace only affected diagrams/rules** against the new code (the playbook
   §2 trace, scoped to the changed files and the elements listed). Unaffected
   diagrams are left **byte-identical** — do not reformat, re-comment or
   re-render them.
3. **Investigate unmatched changed files.** For each cluster that looks like a
   business entry point (new route/consumer/cron/webhook/status), decide whether
   it introduces a new flow or branch. Say so explicitly: extend an existing
   diagram, propose a new one (new diagrams go through steps 1–6), or state that
   it is plumbing.
4. **Edit the existing `.mmd` minimally.** Keep the old version for step 6
   (`git show HEAD:<file>` if the map is versioned, else copy it first).
   - Never renumber or rename existing ids; keep unchanged labels **verbatim**.
   - New elements get **new** ids (next free number in the diagram's scheme).
   - Behaviour that was removed from the code is removed from the diagram; a
     changed decision/outcome is a relabel or a rewired flow on the same ids.
   - Keep declaration/flow order and comments; add new lines next to related ones.
5. **Validate + lint** (`validate.mjs`, `lint.mjs`) until VALID and CLEAN.
6. **Semantic diff.** `node scripts/diff-map.mjs <old.mmd> <new.mmd>` lists nodes
   added/removed/relabelled/retyped/moved and flows added/removed/relabelled/
   default-changed. Check that **every** reported change is intended and backed
   by the code change. Id-churn lines are **hints** (a node removed and one added
   with the same type + label) — review every one: `ID CHURN` (same pool/lane
   and a shared predecessor/successor) almost always means the element was
   re-created, so restore the old id; `POSSIBLE CHURN` (different place or
   neighbours) may be a genuinely different element. Restore the old id only
   when it really is the same element. Flows have no ids, so identical flows on
   the same endpoints are matched first and only the rest is reported as a
   relabel/default change.
7. **Update provenance and evidence.** Set the `%% source:` line(s) of each
   re-traced diagram to the new HEAD sha and today's date. Unaffected diagrams
   keep their old line (it is still true, and they stay byte-identical);
   `changed-since.mjs` diffs each diagram from its own sha. In `RULES.md` /
   `%% evidence` comments, update rows whose evidence changed — **line numbers
   move**, re-check them — fix or drop STALE rows, and add rows for new elements.
8. **Re-render only changed diagrams**: regenerate `.svg` / `.bpmn` (and `.png` if
   the project keeps them) for the diagrams whose `.mmd` changed, nothing else.
9. **Report the semantic diff** to the user per diagram (from `diff-map.mjs`),
   plus unmatched files you judged to be new flows or plumbing, and anything left
   unverified.

## Scripts

Node >= 22 (the fork's toolchain needs it). From `skill/`:

```sh
node scripts/validate.mjs   path/to/flow.mmd            # -> "VALID" (exit 0) or catalogue errors (exit 1)
node scripts/lint.mjs       path/to/flow.mmd [--json]   # -> "CLEAN" (exit 0) or style warnings L1-L8 (exit 1); exit 2 if it fails validate first
node scripts/export-xml.mjs path/to/flow.mmd out.bpmn   # -> BPMN 2.0 XML with BPMNDI (bpmn.io-ready)
node scripts/render.mjs     path/to/flow.mmd out.svg    # -> headless SVG (real glyphs/swimlanes)
node scripts/changed-since.mjs <map-dir> --repo <name>=<path> [--json]  # -> diagrams/rules touched since each '%% source:' sha (exit 0 none / 1 affected / 2 error)
node scripts/diff-map.mjs   old.mmd new.mmd [--json]    # -> semantic diff by id + id-churn hints (exit 0 none / 1 changes / 2 parse error)
```

- `validate.mjs`, `lint.mjs`, `export-xml.mjs` and `diff-map.mjs` use a **vendored, self-contained parser
  bundle** (`scripts/vendor/bpmn-core.mjs`) — no build, no network, works offline.
- `changed-since.mjs` needs `git` and only runs read-only git commands
  (`rev-parse`, `cat-file`, `merge-base --is-ancestor`, `diff`, `ls-files`); it never
  checks out, pulls or stashes.
- `render.mjs` needs the Mermaid fork checked out **and built**
  (`cd <fork> && pnpm build:mermaid`) because rendering uses the full renderer in
  headless Chromium (via the fork's Playwright). Point it at the fork with
  `BPMN_MERMAID_FORK=/path/to/mermaid` (required — there is no default). If it
  fails to launch the browser on a new machine, run
  `pnpm exec playwright install chromium` in the fork.
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

**What `lint.mjs` now checks automatically** (run it after validate): the style
rules above are enforced deterministically as warnings L1–L8 — L1 xor/or labels are
questions; L2 non-default branches are labeled; L3 a *binary* data-based xor/or
has a `default` unless its two answers are complementary (3+-outcome gateways are
treated as exhaustive); L4 `and` splits pair with `and` joins; L5 end
events are named business outcomes (not generic terminators); L6 message flows are
named; L7 start events are named business triggers; L8 labels are business language,
not code identifiers. See `references/dsl-spec.md` for the exact messages. What lint
**cannot** judge and still needs human review: whether the diagram models the *right*
business capability, whether a pool is a real participant vs. an internal module,
whether a decision is truly mutually exclusive (`xor`) vs. one-or-more (`or`), whether
a wait is genuinely a business timer vs. a faked activity timeout, and whether every
business alternative (exception/timeout/cancellation) is actually represented.

## References

- `references/dsl-spec.md` — the prompt-ready condensed DSL spec + the full
  self-correcting error catalogue (every message with its fix), the lint rules,
  and (Part 4) the `%% source:` / evidence conventions used by update mode.
- `references/mapping-playbook.md` — code→BPMN heuristics per stack signal, the
  step-by-step modeling procedure, and two worked examples.

## Examples

`examples/` holds validated artifacts you can study or reuse:
`order-fulfillment.mmd` (+ `.bpmn`, `.svg`) — pools, lanes, message flow;
`broken-example.mmd` — deliberately invalid, run `validate.mjs` on it to see the
catalogue in action; `media-viewer-upload.mmd` (+ `.bpmn`, `.svg`) — a real flow
mapped end-to-end from an Express app, with `%% source:` provenance and
`%% evidence` comments.

## Scope

The DSL covers BPMN Level 1 Descriptive + intermediate message/timer catch events:
start/end events, user/service/script tasks, exclusive/parallel/inclusive gateways,
pools/lanes, sequence/conditional/default flows, message flows, data objects. For
anything richer (boundary events, sub-processes, event-based gateways, message throw
events, timer duration/definition), note it as a comment rather than forcing it —
and keep the diagram valid. Labels document the timer/message; the export does not
make those details executable.
