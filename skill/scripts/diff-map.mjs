#!/usr/bin/env node
/**
 * diff-map.mjs <old.mmd> <new.mmd> [--json]
 *
 * Semantic diff of two BPMN DSL diagrams, via the vendored parser (so comments,
 * whitespace, indentation and statement order do not count as changes). Reports:
 *   - nodes added / removed / relabelled / retyped / moved (pool or lane), by id;
 *   - flows added / removed / relabelled / default-changed. Flows have no ids in
 *     the DSL, so they are matched as multisets: identical flows (kind, source,
 *     target, default, label) pair first; only the unpaired rest is paired by
 *     (kind, source, target) to report relabels / default changes;
 *   - pools / lanes added / removed (by label), direction change;
 *   - id-churn HINTS: a node removed and another added with the same type and
 *     label. 'ID CHURN' (strong) when it is also in the same pool/lane and shares
 *     a predecessor/successor (by ids present in both) — restore the old id;
 *     otherwise 'possible id churn' — review, it may be a genuinely different
 *     element.
 *
 * Both files must pass validate.mjs (the parser rejects invalid diagrams).
 *
 *   exit 0 -> no semantic changes
 *   exit 1 -> semantic changes (printed)
 *   exit 2 -> usage error, or a file does not parse/validate
 *
 * --json prints { changes: [...], idChurn: [{..., confidence: strong|possible}], summary }.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const jsonOut = args.includes('--json');
const files = args.filter((a) => !a.startsWith('--'));
if (files.length !== 2 || args.some((a) => a.startsWith('--') && a !== '--json')) {
  console.error('usage: diff-map.mjs <old.mmd> <new.mmd> [--json]');
  process.exit(2);
}

const { parser, db } = await import(pathToFileURL(resolve(here, 'vendor/bpmn-core.mjs')).href);

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
const endpoints = (f) => `${f.kind}|${f.sourceId}|${f.targetId}`;
const exactKey = (f) => `${endpoints(f)}|${f.isDefault ? 'default' : ''}|${norm(f.label)}`;
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
// Flows have no ids and several may share endpoints (g -- "Yes" --> e plus
// g -- "No" --> e), so match them as multisets: first pair flows that are
// identical (endpoints + default + label); only the unpaired remainder is then
// paired by endpoints (-> relabel / default change); the rest is added/removed.
function pairBy(olds, news, key) {
  const pairs = [];
  const pool = new Map();
  for (const f of news) {
    const k = key(f);
    if (!pool.has(k)) pool.set(k, []);
    pool.get(k).push(f);
  }
  const restOld = [];
  for (const f of olds) {
    const cands = pool.get(key(f));
    if (cands && cands.length) pairs.push([f, cands.shift()]);
    else restOld.push(f);
  }
  const restNew = [...pool.values()].flat();
  restNew.sort((a, b) => news.indexOf(a) - news.indexOf(b));
  return { pairs, restOld, restNew };
}
const exact = pairBy(oldM.flows, newM.flows, exactKey);
const byEnds = pairBy(exact.restOld, exact.restNew, endpoints);
for (const f of byEnds.restOld) {
  changes.push({ type: 'flow-removed', flow: flowText(f), kind: f.kind, sourceId: f.sourceId, targetId: f.targetId, label: flowLabel(f) });
}
for (const f of byEnds.restNew) {
  changes.push({ type: 'flow-added', flow: flowText(f), kind: f.kind, sourceId: f.sourceId, targetId: f.targetId, label: flowLabel(f) });
}
for (const [o, f] of byEnds.pairs) {
  if (Boolean(o.isDefault) !== Boolean(f.isDefault)) changes.push({ type: 'flow-default-changed', flow: flowText(f), from: Boolean(o.isDefault), to: Boolean(f.isDefault) });
  if (norm(o.label) !== norm(f.label)) changes.push({ type: 'flow-relabelled', flow: flowText(f), from: norm(o.label), to: norm(f.label) });
}

// ----------------------------------------------------------- id churn --------
// Same type + label under a new id is only a HINT: a task can legitimately be
// removed in one place and an identical one added elsewhere. It is reported as
// strong 'ID CHURN' only when the context also matches — same pool/lane AND at
// least one shared predecessor/successor among ids present in both diagrams;
// otherwise as 'possible id churn' for review.
const removed = changes.filter((c) => c.type === 'node-removed');
const added = changes.filter((c) => c.type === 'node-added');
const stableIds = new Set([...oldNodes.keys()].filter((id) => newNodes.has(id)));
function neighbours(model, id) {
  const preds = new Set();
  const succs = new Set();
  for (const f of model.flows) {
    if (f.kind !== 'sequence') continue;
    if (f.targetId === id && stableIds.has(f.sourceId)) preds.add(f.sourceId);
    if (f.sourceId === id && stableIds.has(f.targetId)) succs.add(f.targetId);
  }
  return { preds, succs };
}
const overlaps = (a, b) => [...a].some((x) => b.has(x));
const idChurn = [];
const usedAdded = new Set();
for (const r of removed) {
  const same = added.filter((a) => !usedAdded.has(a.id) && a.nodeType === r.nodeType && a.label.toLowerCase() === r.label.toLowerCase());
  if (same.length === 0) continue;
  const on = neighbours(oldM, r.id);
  const scored = same.map((a) => {
    const nn = neighbours(newM, a.id);
    const sameContainer = a.container === r.container;
    const sharedNeighbour = overlaps(on.preds, nn.preds) || overlaps(on.succs, nn.succs);
    return { a, sameContainer, sharedNeighbour, strong: sameContainer && sharedNeighbour };
  });
  scored.sort((x, y) => Number(y.strong) - Number(x.strong) || Number(y.sharedNeighbour) - Number(x.sharedNeighbour) || Number(y.sameContainer) - Number(x.sameContainer));
  const best = scored[0];
  usedAdded.add(best.a.id);
  const why = [
    best.sameContainer ? `same container [${r.container}]` : `container differs ([${r.container}] -> [${best.a.container}])`,
    best.sharedNeighbour ? 'shares a predecessor/successor' : 'no shared predecessor/successor',
  ].join(', ');
  idChurn.push({
    oldId: r.id,
    newId: best.a.id,
    nodeType: r.nodeType,
    label: r.label,
    confidence: best.strong ? 'strong' : 'possible',
    context: why,
    fix: best.strong
      ? `rename '${best.a.id}' back to '${r.id}' in the new diagram (declaration and flows) — same ${r.nodeType} "${r.label}" in the same place, only the id changed.`
      : `review: if '${best.a.id}' is the same element as the removed '${r.id}', restore the old id '${r.id}'; if it is genuinely a different element (${why}), keep both changes.`,
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
  for (const ch of idChurn) {
    const tag = ch.confidence === 'strong' ? '! ID CHURN       ' : '? POSSIBLE CHURN ';
    console.log(`${tag} '${ch.oldId}' removed and '${ch.newId}' added as the same ${ch.nodeType} ${q(ch.label)} (${ch.context}). Fix: ${ch.fix}`);
  }
  const strong = idChurn.filter((c) => c.confidence === 'strong').length;
  const possible = idChurn.length - strong;
  const churnNote = [strong ? `${strong} id churn` : '', possible ? `${possible} possible id churn to review` : ''].filter(Boolean).join(', ');
  console.log(`\n${changes.length} semantic change(s)${churnNote ? `, ${churnNote}` : ''}.`);
}
process.exit(changes.length === 0 ? 0 : 1);
