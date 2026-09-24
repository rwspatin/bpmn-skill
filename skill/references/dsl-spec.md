# BPMN DSL — condensed spec + error catalogue

This is the reference the mapper writes against. Part 1 is the prompt-ready spec
(paste it into a system prompt when delegating generation). Part 2 is the complete
semantic-error catalogue — each error already tells you the fix, so the loop is:
generate → `validate.mjs` → paste the errors back → regenerate → repeat until VALID.

---

## Part 1 — prompt-ready spec (paste verbatim)

```
You write Mermaid BPMN diagrams. Output ONLY a ```mermaid code block, no prose.

Start with: bpmn LR      (or TB for top-down)

ELEMENTS (one per line, form: TYPE id "Label"):
  start id "..."                 start event
  start message id "..."         message start (waits for a message)
  start timer id "..."           timer start
  intermediate message id "..."  waits mid-process for a message
  intermediate timer id "..."    waits/delays mid-process
  end id "..."                   end event
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
  a -- "yes" --> b               conditional flow (ONLY from xor/or gateways)
  a -->|default| b               default branch of a gateway
  a ==> b                        message flow (ONLY between different pools)
  a -.- d1                       association to a data object
  chains ok: a --> b --> c

RULES (violating these is an error):
  1. Every node must reach an end event, and be reachable from a start.
  2. start = no incoming; end = no outgoing.
  3. A diverging xor/or needs >=2 outgoing flows; put the condition on the FLOW.
  4. Parallel (and) gateways take NO conditions.
  5. Conditions/labels-as-conditions come only from xor/or gateways.
  6. Message flow (==>) ONLY between pools; sequence flow (-->) ONLY within a pool.
  7. Every id is unique; every flow references a declared id.

LABELS ARE BUSINESS LANGUAGE, never function or table names.

EXAMPLE:
bpmn LR
  pool "Shop"
    start message s1 "Order received"
    task:user     t1 "Review order"
    xor           g1 "Approved?"
    task:service  t2 "Charge card"
    end           e1 "Shipped"
    end           e2 "Rejected"
  s1 --> t1 --> g1
  g1 -- "approved" --> t2 --> e1
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
