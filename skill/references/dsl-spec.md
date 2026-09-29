# BPMN DSL — condensed spec + error catalogue

This is the reference the mapper writes against. Part 1 is the prompt-ready spec
(paste it into a system prompt when delegating generation). Part 2 is the complete
semantic-error catalogue — each error already tells you the fix, so the loop is:
generate → `validate.mjs` → paste the errors back → regenerate → repeat until VALID.
Part 3 lists the style-lint warnings. Part 4 defines the provenance/evidence
comments that make incremental updates possible.

---

## Part 1 — prompt-ready spec (paste verbatim)

```
You write Mermaid BPMN diagrams. Output ONLY a ```mermaid code block, no prose.

Start with: bpmn LR      (or TB for top-down)

ELEMENTS (one per line, form: TYPE id "Label"):
  start id "..."                 start event (creates an instance)
  start message id "..."         message start (catches a named incoming message)
  start timer id "..."           timer start (schedule initiates an instance)
  intermediate message id "..."  catch a named message during an instance
  intermediate timer id "..."    wait for business time during an instance
  end id "..."                   end event (a business outcome)
  task id "..."                  task    (task:user / task:service / task:script)
  xor id "..."                   exclusive gateway (a decision; needs >=2 branches)
  and id                         parallel gateway (fork/join; NO conditions)
  or id "..."                    inclusive gateway
  data id "..."                  data object

CONTAINERS (indent members under them):
  pool "Name"                    a participant / organization
    lane "Name"                  a role inside the pool
      <elements...>

FLOWS:
  a --> b                        sequence flow (same pool only)
  a -- "Yes" --> b               conditional flow (ONLY from xor/or gateways)
  a -->|default| b                default branch of a data-based xor/or
  a ==>|"Order"| b               named message flow (ONLY between different pools)
  a -.- d1                       association to a data object
  chains ok: a --> b --> c

VALIDATOR RULES (violating these is an error):
  1. Every node must reach an end event, and be reachable from a start.
  2. start = no incoming; end = no outgoing.
  3. A diverging xor/or needs >=2 outgoing flows; put the condition on the FLOW.
  4. Parallel (and) gateways take NO conditions.
  5. Conditions/labels-as-conditions come only from xor/or gateways.
  6. Message flow (==>) ONLY between pools; sequence flow (-->) ONLY within a pool.
  7. Every id is unique; every flow references a declared id.

MODEL STYLE (review manually as well as validating):
  - One pool is one participant; lanes are roles inside it. A sequence flow may
    cross lanes but never pools. A message flow must name the business message.
  - Tasks are imperative verb-object phrases. XOR labels are questions; outgoing
    branches state their answer/end state. End events are achieved business outcomes.
  - Give a data-based xor/or one default path unless cases are demonstrably exhaustive.
    The DSL spells a default only as |default|, so it cannot also show "No" on that
    same flow; make the default target unambiguous and label the other answers.
  - An and/or fork that has a shared continuation must have a matching and/or join;
    do not send each branch directly to the same next task/end. An XOR merge is
    optional only when paths simply converge and no synchronization is needed.
  - Use intermediate message/timer events only to wait in an existing process.
    Boundary events, message throw events, timer definitions/durations, and
    subprocesses are unsupported: add a %% comment instead of inventing syntax.

LABELS ARE BUSINESS LANGUAGE, never function or table names.

EXAMPLE:
bpmn LR
  pool "Shop"
    start message s1 "Receive order"
    task:user     t1 "Review order"
    xor           g1 "Approved?"
    task:service  t2 "Charge card"
    end           e1 "Order approved"
    end           e2 "Order rejected"
  s1 --> t1 --> g1
  g1 -- "Yes" --> t2 --> e1
  g1 -->|default| e2
```

The grammar is tolerant: keywords are case-insensitive and accept synonyms
(`decision`→`xor`, `usertask`→`task:user`, `activity`→`task`, `→`→`-->`),
indentation is optional (containment is resolved by statement order), and blank
lines / `%%` comments are fine. Output is deterministic (same source → same
diagram), so it is safe to diff in version control.

---

## Part 2 — semantic error catalogue (each message contains its own fix)

`validate.mjs` prints these verbatim, one per violation. Read the message, apply
the stated fix, re-validate. The `<id>` / `<label>` placeholders are filled with
the real offending values at runtime.

**Reachability**
- `node '<id>' has no path to an end event.` → add an outgoing sequence flow from
  `<id>` toward an end, or connect it to a node that already reaches one.
- `node '<id>' is unreachable — no start event leads to it.` → add an incoming
  sequence flow from the start chain, or remove `<id>`.

**Start / end direction**
- `start event '<id>' has an incoming sequence flow from '<src>'.` → a start event
  cannot be a flow target; make it an `intermediate` event, or turn `<id>` into a
  task.
- `end event '<id>' has an outgoing sequence flow to '<dst>'.` → an end event
  cannot have outgoing flows; use an `intermediate` event, or start the flow from
  an earlier node.

**Gateways**
- `<kind> gateway '<id>' has 1 outgoing flow. A diverging gateway needs 2 or more…`
  → add another branch (`<id> -- no --> …`), or replace the gateway with a task if
  nothing is actually decided here.
- `parallel gateway '<id>' has a condition '<cond>' on the flow to '<dst>'.` →
  parallel gateways fire all branches unconditionally; remove the condition, or
  change the gateway to `xor` / `or`.
- `<kind> gateway '<id>' has N default flows …` → keep `default` on exactly one
  branch; give the others real conditions.

**Conditions**
- `the flow '<src> -- "<label>" --> <dst>' has a condition but '<src>' is a
  <task|event>.` → conditions belong on flows leaving an `xor`/`or` gateway; insert
  a gateway (`<src> --> g1`, then `g1 -- <label> --> <dst>`). (This only fires when
  `<src>` actually branches — a single named flow is allowed.)

**Pools / lanes / message flows**
- `message flow '<src> ==> <dst>' connects two nodes in the same pool '<pool>'.` →
  message flows only cross pool boundaries; use `-->` within a pool, or move an
  endpoint to another pool.
- `sequence flow '<src> --> <dst>' crosses from pool '<a>' to pool '<b>'.` →
  sequence flows stay inside one pool; use a message flow `==>` between pools.
- `lane '<label>' is declared outside any pool.` → wrap it in a `pool "…"`.

**Ids**
- `flow references unknown node '<id>'. … did you mean '<x>'?` → declare `<id>` or
  fix the typo.
- `duplicate id '<id>' (first declared on line N).` → rename one; ids must be
  unique.

---

## Part 3 — style lint (warnings)

`lint.mjs` runs *after* `validate.mjs` (a diagram that does not pass `validate.mjs`
cannot be linted — it exits 2 and tells you to fix validation first). It prints
`CLEAN`, or one **warning** per style issue in the same self-correcting format —
`<rule>  <element>: <what is wrong>. Fix: <concrete fix>.` — exiting 1 if any fire
(`--json` prints an array of `{rule, elementId, message, fix}`). Warnings are advisory
method/style checks, not hard validation errors; clear them or keep each as a
deliberate, documented exception. Heuristics are deliberately conservative to avoid
false positives.

- **L1** — a diverging `xor`/`or` gateway's label is not a question (does not end
  with `?`). → phrase the decision as a question so its branches read as answers.
- **L2** — a non-default outgoing branch of a diverging `xor`/`or` gateway has no
  label. → label it with the answer/end state, or mark it `|default|`.
- **L3** — a *binary* diverging data-based `xor`/`or` gateway (exactly two branches)
  has no `default` flow and its two answers are not a complementary pair (Yes/No or
  True/False). → add a `|default|` branch, or keep the two answers complementary.
  Gateways that enumerate 3+ distinct labeled outcomes are treated as an exhaustive
  outcome set and are not flagged; event-based gateways are exempt (the DSL has none).
- **L4** — parallel pairing: an `and` split's branches do not reconverge at a single
  matching `and` join before an end event or shared continuation (they end
  separately, or merge at a non-`and` node), or an `and` join does not synchronize
  branches from one common `and` split. → fork with `and` and join with `and`.
- **L5** — an end event has no label or a generic terminator (`done`, `end`,
  `finish(ed)`, `complete(d)`, `stop`, `success`, `fail(ed)`, `error`, `exit`). →
  name the achieved business outcome (e.g. "Order shipped").
- **L6** — a message flow (`==>`) has no name. → name the business message.
- **L7** — a start event has no label or a generic trigger (`start`, `begin`,
  `init`). → name the business trigger that creates the instance.
- **L8** — a task/gateway/event label looks like a code identifier (`_`, `()`, `::`,
  a dotted.path, camelCase/PascalCase with no spaces) or equals its own element id.
  → use plain business language, not function/table/variable names.

---

## Part 4 — map provenance & evidence (for update mode)

A **map** is a directory of diagrams for one codebase: `NN-capability.mmd` (+ the
optional `.svg` / `.bpmn` / `.png` renders) and, optionally, a `RULES.md` catalogue of
the business rules the diagrams draw. Two conventions let `changed-since.mjs` work
out which diagrams a code change touches, so a re-run edits only those (see
"Update mode" in `SKILL.md`). Both are plain `%%` comments: the parser ignores
them, so they never change validation, lint, the export, or `diff-map.mjs`.

**Provenance (required on every new map).** In each `.mmd` header, one line per
source repo the diagram was traced from:

```
%% source: <repo-name> <full-commit-sha> <YYYY-MM-DD>
%% source: order-service 3f2a9c1e8b7d6a5f4e3d2c1b0a9f8e7d6c5b4a39 2026-09-26
```

- `<repo-name>` is a stable short name (usually the repo's directory/remote name);
  it is what `--repo <name>=<path>` and the evidence below refer to.
- `<full-commit-sha>` is `git rev-parse HEAD` of that repo when you traced it
  (40 hex chars; a 7+ char prefix is accepted but full is preferred). It is the
  authoritative "since" point. Uncommitted work is not captured — trace from a
  committed state.
- `<YYYY-MM-DD>` is the date you traced it (human context only).
- A diagram with no `%% source:` line inherits the union of the map's other source
  lines (with a warning). Free-text lines such as `%% Source: OrderController…`
  are fine — only `source: <name> <hex-sha>` is read as provenance.

**Evidence.** Where the code backs each element. Either or both:

1. In the diagram, one comment per element (or diagram-wide without an id):
   ```
   %% evidence t1: order-service:src/orders/review.ts:12-40
   %% evidence g1: order-service:src/orders/stock.ts:8; src/orders/policy.ts:3
   %% evidence: order-service:src/orders/router.ts
   ```
2. In `RULES.md` — a markdown table whose header has an **Evidence** (or Source /
   Code / Where) column and, ideally, a **Diagram** column. One row per rule:
   ```
   | ID  | Rule                     | Diagram · element | Evidence |
   |-----|--------------------------|-------------------|----------|
   | R-1 | Orders are reviewed      | 01 · t1           | `order-service:src/orders/review.ts:12-40` |
   | R-2 | Only in-stock items ship | 01 · g1 → t3      | `order-service` `src/orders/stock.ts:8`; `policy.ts:3` |
   ```
   - **Rule id:** the first cell when it looks like an id (`R-1`, `BR12`), else
     `RULES.md:<line>`.
   - **Diagram link:** the diagram basename anywhere in the row (in backticks, or
     bare if it contains a digit/`-`/`_`), or in the Diagram column either the
     basename or its numeric prefix (`01` → `01-client-and-limits.mmd`). Ids in the
     Diagram column that exist in that diagram are reported as affected
     elements. Rows with no link inherit a diagram named in the enclosing
     heading (e.g. a heading ending in the backticked basename `01-checkout`);
     rows under a heading with none are "unlinked" (still checked, reported
     separately). A backticked repo name in a heading sets the default repo for
     the paths below it.
   - List items and paragraphs with evidence are read too (as unlinked rules unless
     they or their heading name a diagram).

Accepted evidence forms (backtick each reference in markdown):

| Form | Example | Repo resolved from |
|---|---|---|
| `repo:path[:lines]` | `order-service:src/orders/review.ts:12-40` | the prefix — only when it is a known repo (a `%% source:` or `--repo` name); the path may start with anything, digits included |
| `repo` then `path[:lines]` | `order-service` `src/a.ts:3`; `b.ts:9` | the preceding repo span (applies to the rest of the cell) |
| `path[:lines]` | `src/orders/review.ts:12` | a repo in backticks in the enclosing heading, else the only source repo, else any source repo |

Paths name **files** (they need an extension, e.g. `.ts`, `.cs`, `.json`, or a
glob) and match as a suffix on segment boundaries: `review.ts`, `orders/review.ts`
and `src/orders/review.ts` all match `src/orders/review.ts`. A multi-segment path
may also start after a `.` in a segment, so the common .NET abbreviation
`Domain/Orders/Order.cs` matches `src/Core/Acme.Orders.Domain/Orders/Order.cs`.
`...` or `**` match any run of directories (`Infrastructure/.../Store.cs`), `*`
matches inside one segment, `{A,B}` is an alternation
(`Api/{Orders,Quotes}Controller.cs`). Line suffixes (`:12`, `:12-40,55`, `:120+`,
`#L12`) are recorded for humans; matching is per file. Evidence that matches no
tracked file at HEAD is listed by `changed-since.mjs` so you can fix it.

When a map's diagrams record **different** shas for one repo (re-traced diagrams
were bumped, the others kept theirs), each diagram is checked from its own sha.
Changed files that match no evidence are listed only since the descendant-most
recorded sha (decided by git ancestry, not dates) — earlier changes were
reviewed by the update that recorded it. If the recorded shas are on divergent
histories (rebase, force-push, another branch), the list is the union from all
of them and `changed-since.mjs` warns that it may repeat reviewed changes.
