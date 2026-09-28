#!/usr/bin/env node
/**
 * lint.mjs <file.mmd> [--json]
 *
 * Deterministic BPMN *style* linter. Runs AFTER validate.mjs: it first parses +
 * validates with the vendored parser (a diagram that does not pass validate.mjs
 * cannot be linted), then runs the method/style rules (L1-L8) from SKILL.md over
 * the parsed model and prints WARNINGS in the same self-correcting style as the
 * validator catalogue — rule id, element id, what is wrong, and a concrete fix.
 *
 *   exit 0  -> CLEAN (no warnings)
 *   exit 1  -> one or more style warnings
 *   exit 2  -> usage error, or the diagram does not parse/validate (run validate.mjs)
 *
 * --json prints a machine-readable array of {rule, elementId, message, fix}.
 *
 * Requires Node >= 22. Uses the vendored, self-contained parser bundle — no build
 * or network needed. This script never edits the vendored bundle; it only reads
 * the parsed model (nodes, flows, pools, lanes) it exposes.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const jsonOut = args.includes('--json');
const file = args.find((a) => !a.startsWith('--'));
if (!file) {
  console.error('usage: lint.mjs <file.mmd> [--json]');
  process.exit(2);
}

const { parser, db } = await import(resolve(here, 'vendor/bpmn-core.mjs'));

const source = readFileSync(file, 'utf8');

// Must pass validate.mjs first: parser.parse throws on parse OR semantic errors.
try {
  await parser.parse(source);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  console.error('\nlint.mjs only runs on a diagram that passes validate.mjs — fix the above first.');
  process.exit(2);
}

const model = db.getModel();
const nodes = model.nodes ?? [];
const flows = model.flows ?? [];
const nodeById = new Map(nodes.map((n) => [n.id, n]));

const seqOut = new Map(); // id -> sequence flows leaving it
const seqIn = new Map(); // id -> sequence flows entering it
for (const n of nodes) {
  seqOut.set(n.id, []);
  seqIn.set(n.id, []);
}
for (const f of flows) {
  if (f.kind !== 'sequence') continue;
  seqOut.get(f.sourceId)?.push(f);
  seqIn.get(f.targetId)?.push(f);
}
const messageFlows = flows.filter((f) => f.kind === 'message');

const warnings = [];
const warn = (rule, elementId, message, fix) => warnings.push({ rule, elementId, message, fix });

const isGateway = (n) => n && n.kind === 'gateway';
const isDataBasedGw = (n) => isGateway(n) && (n.gateway === 'exclusive' || n.gateway === 'inclusive');
const isParallelGw = (n) => isGateway(n) && n.gateway === 'parallel';
// The DSL has no event-based gateway (only xor/and/or -> exclusive/parallel/inclusive),
// but guard anyway so L3 stays correct if one is ever added.
const isEventBasedGw = (n) => isGateway(n) && n.gateway === 'eventBased';
const label = (n) => (n && typeof n.label === 'string' ? n.label.trim() : '');
const kindWord = (n) => (n.gateway === 'exclusive' ? 'xor' : n.gateway === 'inclusive' ? 'or' : n.gateway === 'parallel' ? 'and' : n.kind);

// ---- L1: xor/or gateway label should be a question ------------------------
for (const n of nodes) {
  if (!isDataBasedGw(n)) continue;
  if ((seqOut.get(n.id) ?? []).length < 2) continue; // only diverging decisions
  const l = label(n);
  if (l && !l.endsWith('?')) {
    warn('L1', n.id,
      `${kindWord(n)} gateway '${n.id}' label "${l}" is not phrased as a question.`,
      `end the decision label with "?" (e.g. "${l}?"), so the branch answers read as replies to it.`);
  }
}

// ---- L2: each non-default outgoing flow of a diverging xor/or has a label --
for (const n of nodes) {
  if (!isDataBasedGw(n)) continue;
  const outs = seqOut.get(n.id) ?? [];
  if (outs.length < 2) continue;
  for (const f of outs) {
    if (f.isDefault) continue;
    if (!label({ label: f.label })) {
      warn('L2', n.id,
        `${kindWord(n)} gateway '${n.id}' has an unlabeled branch to '${f.targetId}'.`,
        `label the flow with the answer/end state, e.g. '${n.id} -- "Yes" --> ${f.targetId}', or mark it '|default|'.`);
    }
  }
}

// ---- L3: diverging data-based xor/or needs a default unless exhaustive -----
const exhaustivePairs = [new Set(['yes', 'no']), new Set(['true', 'false'])];
const sameSet = (a, b) => a.size === b.size && [...a].every((x) => b.has(x));
for (const n of nodes) {
  if (!isDataBasedGw(n) || isEventBasedGw(n)) continue;
  const outs = seqOut.get(n.id) ?? [];
  if (outs.length < 2) continue;
  if (outs.some((f) => f.isDefault)) continue; // already has a default
  // Conservative: only a *binary* decision reliably signals a missing fallback.
  // A gateway that enumerates 3+ distinct labeled outcomes (e.g. filled / timeout /
  // malformed / rejected) is an explicit exhaustive outcome set — exactly the
  // "make every alternative explicit" modeling the method recommends — so demanding
  // a catch-all default there would be a false positive.
  if (outs.length !== 2) continue;
  const labels = outs.map((f) => (typeof f.label === 'string' ? f.label.trim().toLowerCase() : '')).filter(Boolean);
  const labelSet = new Set(labels);
  const exhaustive = outs.length === labels.length && exhaustivePairs.some((p) => sameSet(labelSet, p));
  if (!exhaustive) {
    warn('L3', n.id,
      `${kindWord(n)} gateway '${n.id}' has no default flow and its branches are not demonstrably exhaustive.`,
      `mark the fallback branch '|default|' (e.g. '${n.id} -->|default| ${outs[outs.length - 1].targetId}'), or keep the answers exhaustive (a complementary Yes/No pair).`);
  }
}

// ---- L4: parallel pairing (and split reconverges at an and join) -----------
function walkForwardToConvergence(startId) {
  let current = startId;
  const seen = new Set();
  while (true) {
    if (seen.has(current)) return { type: 'loop', stop: current };
    seen.add(current);
    const node = nodeById.get(current);
    if (!node) return { type: 'dangling', stop: current };
    const ins = seqIn.get(current) ?? [];
    const outs = seqOut.get(current) ?? [];
    if (node.kind === 'event' && node.position === 'end') return { type: 'end', stop: current };
    if (ins.length >= 2) return { type: isParallelGw(node) ? 'join' : 'merge', stop: current };
    if (outs.length === 0) return { type: 'dangling', stop: current };
    if (outs.length > 1) return { type: 'nested', stop: current }; // nested split — too complex, bail
    current = outs[0].targetId;
  }
}
function walkBackwardToDivergence(startId) {
  let current = startId;
  const seen = new Set();
  while (true) {
    if (seen.has(current)) return { type: 'loop', stop: current };
    seen.add(current);
    const node = nodeById.get(current);
    if (!node) return { type: 'dangling', stop: current };
    const ins = seqIn.get(current) ?? [];
    const outs = seqOut.get(current) ?? [];
    if (node.kind === 'event' && node.position === 'start') return { type: 'start', stop: current };
    if (outs.length >= 2) return { type: isParallelGw(node) ? 'split' : 'branch', stop: current };
    if (ins.length === 0) return { type: 'dangling', stop: current };
    if (ins.length > 1) return { type: 'nested', stop: current }; // nested merge — bail
    current = ins[0].sourceId;
  }
}

for (const n of nodes) {
  if (!isParallelGw(n)) continue;
  const outs = seqOut.get(n.id) ?? [];
  if (outs.length < 2) continue; // this is a join (or trivial), not a split
  const results = outs.map((f) => walkForwardToConvergence(f.targetId));
  if (results.some((r) => r.type === 'nested' || r.type === 'loop' || r.type === 'dangling')) continue; // too complex — stay conservative
  if (results.some((r) => r.type === 'end')) {
    warn('L4', n.id,
      `and (parallel) split '${n.id}' has a branch that reaches an end event without a join.`,
      `route every parallel branch into a matching 'and' join (2+ incoming flows) before any end event or shared continuation.`);
    continue;
  }
  const stops = results.map((r) => r.stop);
  const allSame = stops.every((s) => s === stops[0]);
  if (!allSame) {
    warn('L4', n.id,
      `and (parallel) split '${n.id}' branches reconverge at different nodes (${[...new Set(stops)].map((s) => `'${s}'`).join(', ')}).`,
      `merge all parallel branches at a single 'and' join before continuing.`);
    continue;
  }
  const joinNode = nodeById.get(stops[0]);
  if (!isParallelGw(joinNode)) {
    warn('L4', n.id,
      `and (parallel) split '${n.id}' branches merge at non-parallel node '${stops[0]}'.`,
      `synchronize parallel branches with an 'and' join, not an ${kindWord(joinNode)} node.`);
  }
}

// and-join whose branches don't trace back to a common and-split (cheap check)
for (const n of nodes) {
  if (!isParallelGw(n)) continue;
  const ins = seqIn.get(n.id) ?? [];
  if (ins.length < 2) continue; // this is a split (or trivial), not a join
  const results = ins.map((f) => walkBackwardToDivergence(f.sourceId));
  if (results.some((r) => r.type === 'nested' || r.type === 'loop' || r.type === 'dangling' || r.type === 'start')) continue;
  const splits = results.filter((r) => r.type === 'split').map((r) => r.stop);
  const commonSplit = splits.length === results.length && splits.every((s) => s === splits[0]);
  if (!commonSplit) {
    warn('L4', n.id,
      `and (parallel) join '${n.id}' does not synchronize branches from a single common 'and' split.`,
      `ensure the branches it joins were forked by one matching 'and' split, or use an ${'xor'}/merge if they are alternatives.`);
  }
}

// ---- L5: end events are named business outcomes ----------------------------
const genericEnd = new Set(['done', 'end', 'finish', 'finished', 'complete', 'completed', 'stop', 'success', 'fail', 'failed', 'error', 'exit']);
for (const n of nodes) {
  if (n.kind !== 'event' || n.position !== 'end') continue;
  const l = label(n);
  if (!l) {
    warn('L5', n.id,
      `end event '${n.id}' has no label.`,
      `name the achieved business outcome (e.g. "Order shipped"), not a generic terminator.`);
  } else if (genericEnd.has(l.toLowerCase())) {
    warn('L5', n.id,
      `end event '${n.id}' label "${l}" is a generic terminator, not a business outcome.`,
      `rename it to the achieved business outcome (e.g. "Order shipped", "Payment refused").`);
  }
}

// ---- L6: every message flow has a name/label -------------------------------
for (const f of messageFlows) {
  if (!label({ label: f.label })) {
    warn('L6', `${f.sourceId}==>${f.targetId}`,
      `message flow '${f.sourceId} ==> ${f.targetId}' has no name.`,
      `name the business message, e.g. '${f.sourceId} ==>|"Order"| ${f.targetId}'.`);
  }
}

// ---- L7: start events have a named business trigger ------------------------
const genericStart = new Set(['start', 'begin', 'init']);
for (const n of nodes) {
  if (n.kind !== 'event' || n.position !== 'start') continue;
  const l = label(n);
  if (!l) {
    warn('L7', n.id,
      `start event '${n.id}' has no label.`,
      `name the business trigger that creates the instance (e.g. "Order received").`);
  } else if (genericStart.has(l.toLowerCase())) {
    warn('L7', n.id,
      `start event '${n.id}' label "${l}" is a generic trigger.`,
      `rename it to the business trigger (e.g. "Order received", "Payment due").`);
  }
}

// ---- L8: business language (no code-identifier labels) ---------------------
function looksLikeCode(text) {
  if (text.includes('_')) return true; // snake_case
  if (text.includes('::')) return true; // namespaced
  if (/[A-Za-z0-9]\(/.test(text) || /\(\s*\)/.test(text)) return true; // foo() call
  if (/\w\.\w/.test(text)) return true; // dotted.path
  if (!/\s/.test(text) && /[a-z][A-Z]/.test(text)) return true; // camelCase / PascalCase, no spaces
  return false;
}
for (const n of nodes) {
  if (!(n.kind === 'task' || n.kind === 'gateway' || n.kind === 'event')) continue;
  const l = label(n);
  if (!l) continue; // emptiness handled by L5/L7 where relevant
  if (l === n.id) {
    warn('L8', n.id,
      `${n.kind} '${n.id}' uses its own id as the label.`,
      `replace it with a business phrase (imperative verb-object for tasks, a question for gateways, an outcome for events).`);
  } else if (looksLikeCode(l)) {
    warn('L8', n.id,
      `${n.kind} '${n.id}' label "${l}" looks like a code identifier, not business language.`,
      `use plain business language (e.g. "Charge card"), not function/table/variable names.`);
  }
}

// ---- output ---------------------------------------------------------------
warnings.sort((a, b) => a.rule.localeCompare(b.rule));
if (jsonOut) {
  console.log(JSON.stringify(warnings, null, 2));
} else if (warnings.length === 0) {
  console.log('CLEAN');
} else {
  for (const w of warnings) {
    console.log(`${w.rule}  ${w.elementId}: ${w.message} Fix: ${w.fix}`);
  }
}
process.exit(warnings.length === 0 ? 0 : 1);
