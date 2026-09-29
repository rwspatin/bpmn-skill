#!/usr/bin/env node
/**
 * diff-map.mjs <old.mmd> <new.mmd> [--json]
 *
 * Semantic diff of two BPMN DSL diagrams, via the vendored parser (so comments,
 * whitespace, indentation and statement order do not count as changes). Reports:
 *   - nodes added / removed / relabelled / retyped / moved (pool or lane), by id;
 *   - flows added / removed / relabelled / default-changed, keyed by
 *     (kind, source, target) — flows have no user ids in the DSL;
 *   - pools / lanes added / removed (by label), direction change;
 *   - likely ID CHURN: a node removed and another added with the same type and
 *     label — reuse the old id so the diff (and any links to it) stays stable.
 *
 * Both files must pass validate.mjs (the parser rejects invalid diagrams).
 *
 *   exit 0 -> no semantic changes
 *   exit 1 -> semantic changes (printed)
 *   exit 2 -> usage error, or a file does not parse/validate
 *
 * --json prints { changes: [...], idChurn: [...], summary: {...} }.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const jsonOut = args.includes('--json');
const files = args.filter((a) => !a.startsWith('--'));
if (files.length !== 2 || args.some((a) => a.startsWith('--') && a !== '--json')) {
  console.error('usage: diff-map.mjs <old.mmd> <new.mmd> [--json]');
  process.exit(2);
}

const { parser, db } = await import(resolve(here, 'vendor/bpmn-core.mjs'));

async function load(file) {
  let source;
  try {
    source = readFileSync(file, 'utf8');
  } catch (error) {
    console.error(`diff-map: cannot read ${file}: ${error.message}`);
    process.exit(2);
  }
  try {
    await parser.parse(source);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`diff-map: ${file} does not parse/validate — run validate.mjs on it first.\n${message}`);
    process.exit(2);
  }
  return structuredClone(db.getModel());
}

const oldM = await load(files[0]);
const newM = await load(files[1]);

// ------------------------------------------------------------ helpers --------
const GW = { exclusive: 'xor', parallel: 'and', inclusive: 'or' };
function typeOf(n) {
  if (n.kind === 'task') return n.subtype && n.subtype !== 'abstract' ? `task:${n.subtype}` : 'task';
  if (n.kind === 'gateway') return GW[n.gateway] ?? n.gateway;
  if (n.kind === 'event') return n.trigger && n.trigger !== 'none' ? `${n.position} ${n.trigger}` : n.position;
  return n.kind;
}
const norm = (s) => (typeof s === 'string' ? s.trim().replace(/\s+/g, ' ') : '');
function containerOf(model, n) {
  const pool = model.pools.find((p) => p.id === n.poolId);
  const lane = model.lanes.find((l) => l.id === n.laneId);
  return [pool?.label, lane?.label].filter(Boolean).join(' / ');
}
const q = (s) => JSON.stringify(s ?? '');
const ARROW = { sequence: '-->', message: '==>', association: '-.-' };
function flowKey(f) {
  return `${f.kind}|${f.sourceId}|${f.targetId}`;
}
function indexFlows(model) {
  const map = new Map();
  for (const f of model.flows) {
    let k = flowKey(f);
    let i = 2;
    while (map.has(k)) k = `${flowKey(f)}#${i++}`; // parallel duplicate flows
    map.set(k, f);
  }
  return map;
}
const flowText = (f) => `${f.sourceId} ${ARROW[f.kind] ?? `-${f.kind}->`} ${f.targetId}`;
const flowLabel = (f) => (f.isDefault ? '|default|' : norm(f.label) ? q(norm(f.label)) : '');

// ------------------------------------------------------------- nodes ---------
const changes = [];
const oldNodes = new Map(oldM.nodes.map((n) => [n.id, n]));
const newNodes = new Map(newM.nodes.map((n) => [n.id, n]));

if (oldM.direction !== newM.direction) changes.push({ type: 'direction-changed', from: oldM.direction, to: newM.direction });

const poolLabels = (m) => new Set(m.pools.map((p) => p.label));
const laneLabels = (m) => new Set(m.lanes.map((l) => `${m.pools.find((p) => p.id === l.poolId)?.label ?? '?'} / ${l.label}`));
for (const [kind, getter] of [['pool', poolLabels], ['lane', laneLabels]]) {
  const a = getter(oldM);
  const b = getter(newM);
  for (const x of a) if (!b.has(x)) changes.push({ type: `${kind}-removed`, label: x });
  for (const x of b) if (!a.has(x)) changes.push({ type: `${kind}-added`, label: x });
}

for (const [id, n] of oldNodes) {
  if (!newNodes.has(id)) changes.push({ type: 'node-removed', id, nodeType: typeOf(n), label: norm(n.label), container: containerOf(oldM, n) });
}
for (const [id, n] of newNodes) {
  const o = oldNodes.get(id);
  if (!o) {
    changes.push({ type: 'node-added', id, nodeType: typeOf(n), label: norm(n.label), container: containerOf(newM, n) });
    continue;
  }
  if (typeOf(o) !== typeOf(n)) changes.push({ type: 'node-retyped', id, from: typeOf(o), to: typeOf(n) });
  if (norm(o.label) !== norm(n.label)) changes.push({ type: 'node-relabelled', id, nodeType: typeOf(n), from: norm(o.label), to: norm(n.label) });
  const oc = containerOf(oldM, o);
  const nc = containerOf(newM, n);
  if (oc !== nc) changes.push({ type: 'node-moved', id, from: oc, to: nc });
}

// ------------------------------------------------------------- flows ---------
const oldFlows = indexFlows(oldM);
const newFlows = indexFlows(newM);
for (const [k, f] of oldFlows) {
  if (!newFlows.has(k)) changes.push({ type: 'flow-removed', flow: flowText(f), kind: f.kind, sourceId: f.sourceId, targetId: f.targetId, label: flowLabel(f) });
}
for (const [k, f] of newFlows) {
  const o = oldFlows.get(k);
  if (!o) {
    changes.push({ type: 'flow-added', flow: flowText(f), kind: f.kind, sourceId: f.sourceId, targetId: f.targetId, label: flowLabel(f) });
    continue;
  }
  if (Boolean(o.isDefault) !== Boolean(f.isDefault)) changes.push({ type: 'flow-default-changed', flow: flowText(f), from: Boolean(o.isDefault), to: Boolean(f.isDefault) });
  if (norm(o.label) !== norm(f.label)) changes.push({ type: 'flow-relabelled', flow: flowText(f), from: norm(o.label), to: norm(f.label) });
}

// ----------------------------------------------------------- id churn --------
const removed = changes.filter((c) => c.type === 'node-removed');
const added = changes.filter((c) => c.type === 'node-added');
const idChurn = [];
const usedAdded = new Set();
for (const r of removed) {
  const match = added.find((a) => !usedAdded.has(a.id) && a.nodeType === r.nodeType && a.label.toLowerCase() === r.label.toLowerCase());
  if (!match) continue;
  usedAdded.add(match.id);
  idChurn.push({
    oldId: r.id,
    newId: match.id,
    nodeType: r.nodeType,
    label: r.label,
    fix: `rename '${match.id}' back to '${r.id}' in the new diagram (declaration and flows) — same ${r.nodeType} "${r.label}", only the id changed.`,
  });
}

// ------------------------------------------------------------- output --------
const summary = {};
for (const c of changes) summary[c.type] = (summary[c.type] ?? 0) + 1;

if (jsonOut) {
  console.log(JSON.stringify({ old: files[0], new: files[1], changes, idChurn, summary }, null, 2));
} else if (changes.length === 0) {
  console.log('NO SEMANTIC CHANGES');
} else {
  const where = (c) => (c.container ? `  [${c.container}]` : '');
  for (const c of changes) {
    switch (c.type) {
      case 'direction-changed': console.log(`~ direction       ${c.from} -> ${c.to}`); break;
      case 'pool-added': console.log(`+ pool            ${q(c.label)}`); break;
      case 'pool-removed': console.log(`- pool            ${q(c.label)}`); break;
      case 'lane-added': console.log(`+ lane            ${q(c.label)}`); break;
      case 'lane-removed': console.log(`- lane            ${q(c.label)}`); break;
      case 'node-added': console.log(`+ node            ${c.id}  ${c.nodeType} ${q(c.label)}${where(c)}`); break;
      case 'node-removed': console.log(`- node            ${c.id}  ${c.nodeType} ${q(c.label)}${where(c)}`); break;
      case 'node-relabelled': console.log(`~ node relabelled ${c.id}  ${q(c.from)} -> ${q(c.to)}`); break;
      case 'node-retyped': console.log(`~ node retyped    ${c.id}  ${c.from} -> ${c.to}`); break;
      case 'node-moved': console.log(`~ node moved      ${c.id}  [${c.from}] -> [${c.to}]`); break;
      case 'flow-added': console.log(`+ flow            ${c.flow}${c.label ? `  ${c.label}` : ''}`); break;
      case 'flow-removed': console.log(`- flow            ${c.flow}${c.label ? `  ${c.label}` : ''}`); break;
      case 'flow-relabelled': console.log(`~ flow relabelled ${c.flow}  ${q(c.from)} -> ${q(c.to)}`); break;
      case 'flow-default-changed': console.log(`~ flow default    ${c.flow}  ${c.from ? 'default' : 'not default'} -> ${c.to ? 'default' : 'not default'}`); break;
      default: console.log(`? ${JSON.stringify(c)}`);
    }
  }
  for (const ch of idChurn) console.log(`! ID CHURN        '${ch.oldId}' removed and '${ch.newId}' added as the same ${ch.nodeType} ${q(ch.label)}. Fix: ${ch.fix}`);
  console.log(`\n${changes.length} semantic change(s)${idChurn.length ? `, ${idChurn.length} likely id churn` : ''}.`);
}
process.exit(changes.length === 0 ? 0 : 1);
