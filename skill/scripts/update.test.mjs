/**
 * update.test.mjs — node --test
 *
 * Update mode: changed-since.mjs against a throwaway git repo built in a temp dir,
 * and diff-map.mjs against the fixtures in scripts/test-fixtures/diff/.
 */
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync, execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, unlinkSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const changedSince = resolve(here, 'changed-since.mjs');
const diffMap = resolve(here, 'diff-map.mjs');
const diffFixture = (f) => resolve(here, 'test-fixtures', 'diff', f);
const examples = (f) => resolve(here, '..', 'examples', f);

const run = (script, args) => {
  const r = spawnSync(process.execPath, [script, ...args], { encoding: 'utf8' });
  return { code: r.status, stdout: r.stdout, stderr: r.stderr };
};
const runJson = (script, args) => {
  const r = run(script, [...args, '--json']);
  return { ...r, json: r.stdout ? JSON.parse(r.stdout) : null };
};

// ------------------------------------------------------------ changed-since --
let tmp;
let repo;
let sha0;
const git = (...args) =>
  execFileSync('git', ['-C', repo, '-c', 'user.name=t', '-c', 'user.email=t@example.com', '-c', 'commit.gpgsign=false', ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
const put = (rel, text) => {
  mkdirSync(dirname(join(repo, rel)), { recursive: true });
  writeFileSync(join(repo, rel), text);
};

const orderMmd = (sha) => `%% Order handling.
%% source: shop ${sha} 2026-09-01
bpmn LR
  pool "Shop"
    start s1 "Order received"
    task:user t1 "Review order"
    xor g1 "Items available?"
    task:user t3 "Dispatch order"
    end e1 "Order shipped"
    end e2 "Order backordered"
  s1 --> t1 --> g1
  g1 -- "Yes" --> t3 --> e1
  g1 -->|default| e2
`;
const billingMmd = (sha, extra = '') => `%% source: shop ${sha} 2026-09-01
${extra}bpmn LR
  pool "Billing"
    start timer b0 "Invoice due"
    task:service b1 "Charge card"
    end b2 "Invoice paid"
  b0 --> b1 --> b2
`;
const rulesMd = `# Rules

| ID | Rule | Diagram · element | Evidence |
|---|---|---|---|
| R-1 | Orders are reviewed by a person | order · t1 | \`shop:src/orders/review.ts:3-9\` |
| R-2 | Only available items ship | order · g1 → t3 | \`shop\` \`src/orders/dispatch.ts:1\`; \`src/orders/stock.ts:4\` |

## Billing (\`billing\`)

| ID | Rule | Evidence |
|---|---|---|
| R-3 | Invoices are charged when due | \`charge.ts:2\` |
`;

function makeMap(name, { sha = sha0, rules = true, billingExtra = '' } = {}) {
  const dir = join(tmp, name);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'order.mmd'), orderMmd(sha));
  writeFileSync(join(dir, 'billing.mmd'), billingMmd(sha, billingExtra));
  if (rules) writeFileSync(join(dir, 'RULES.md'), rulesMd);
  return dir;
}

before(() => {
  tmp = mkdtempSync(join(tmpdir(), 'bpmn-update-'));
  repo = join(tmp, 'shop');
  mkdirSync(repo);
  git('init', '-q');
  put('src/orders/review.ts', 'export const review = 1;\n');
  put('src/orders/dispatch.ts', 'export const dispatch = 1;\n');
  put('src/orders/stock.ts', 'export const stock = 1;\n');
  put('src/billing/charge.ts', 'export const charge = 1;\n');
  git('add', '-A');
  git('commit', '-q', '-m', 'initial');
  sha0 = git('rev-parse', 'HEAD');
});
after(() => rmSync(tmp, { recursive: true, force: true }));

test('changed-since: nothing changed -> exit 0, all diagrams unaffected', () => {
  const map = makeMap('map-clean');
  const { code, json } = runJson(changedSince, [map, '--repo', `shop=${repo}`]);
  assert.equal(code, 0);
  assert.deepEqual(json.affected, []);
  assert.deepEqual(json.possiblyAffected, []);
  assert.deepEqual(json.unaffected.sort(), ['billing', 'order']);
  assert.equal(json.stats.rules, 3);
  assert.equal(json.stats.rulesLinkedToDiagram, 3);
  assert.equal(json.repos[0].head, sha0);
  const human = run(changedSince, [map, '--repo', `shop=${repo}`]);
  assert.match(human.stdout, /UP TO DATE/);
});

test('changed-since: modified + deleted evidence and an unrelated new file', () => {
  const map = makeMap('map-changed');
  put('src/orders/review.ts', 'export const review = 2;\n');
  unlinkSync(join(repo, 'src/orders/dispatch.ts'));
  put('src/refunds/refund.ts', 'export const refund = 1;\n');
  git('add', '-A');
  git('commit', '-q', '-m', 'change orders, add refunds');

  const { code, json } = runJson(changedSince, [map, '--repo', `shop=${repo}`]);
  assert.equal(code, 1);
  assert.deepEqual(json.affected.map((a) => a.diagram), ['order']);
  const order = json.affected[0];
  assert.deepEqual(order.rules.sort(), ['R-1', 'R-2']);
  assert.deepEqual(order.elements.sort(), ['g1', 't1', 't3']);
  assert.deepEqual(json.unaffected, ['billing']);
  assert.deepEqual(json.staleRules.map((s) => s.id), ['R-2']);
  assert.equal(json.staleRules[0].hits[0].status, 'D');
  assert.deepEqual(json.unmatchedChanges.map((u) => `${u.status} ${u.path}`), ['A src/refunds/refund.ts']);

  const human = run(changedSince, [map, '--repo', `shop=${repo}`]);
  assert.equal(human.code, 1);
  assert.match(human.stdout, /AFFECTED diagrams/);
  assert.match(human.stdout, /STALE rules/);
  assert.match(human.stdout, /matching NO rule[\s\S]*src\/refunds\/refund\.ts/);
});

test('changed-since: a renamed evidence file makes the rule stale and its diagram affected', () => {
  const map = makeMap('map-renamed');
  git('mv', 'src/billing/charge.ts', 'src/billing/payments.ts');
  git('commit', '-q', '-m', 'rename charge');
  const { code, json } = runJson(changedSince, [map, '--repo', `shop=${repo}`]);
  assert.equal(code, 1);
  assert.ok(json.affected.some((a) => a.diagram === 'billing'), 'billing is affected');
  const r3 = json.staleRules.find((s) => s.id === 'R-3');
  assert.ok(r3, 'R-3 is stale');
  assert.equal(r3.hits[0].status, 'R');
  assert.equal(r3.hits[0].oldPath, 'src/billing/charge.ts');
});

test('changed-since: without RULES.md, diagrams of a changed repo are possibly affected', () => {
  const map = makeMap('map-norules', { rules: false });
  const { code, json } = runJson(changedSince, [map, '--repo', `shop=${repo}`]);
  assert.equal(code, 1);
  assert.deepEqual(json.affected, []);
  assert.deepEqual(json.possiblyAffected.map((p) => p.diagram).sort(), ['billing', 'order']);
  assert.ok(json.unmatchedChanges.length > 0);
});

test('changed-since: %% evidence comments narrow a diagram without RULES.md', () => {
  // billing's evidence (review.ts) changed -> affected; order has none -> possibly affected
  const map = makeMap('map-comments', { rules: false, billingExtra: '%% evidence b1: shop:src/orders/review.ts:1\n' });
  const { code, json } = runJson(changedSince, [map, '--repo', `shop=${repo}`]);
  assert.equal(code, 1);
  assert.deepEqual(json.affected.map((a) => a.diagram), ['billing']);
  assert.deepEqual(json.affected[0].elements, ['b1']);
  assert.deepEqual(json.possiblyAffected.map((p) => p.diagram), ['order']);
});

test('changed-since: map recorded at HEAD is up to date', () => {
  const map = makeMap('map-head', { sha: git('rev-parse', 'HEAD') });
  const { code } = runJson(changedSince, [map, '--repo', `shop=${repo}`]);
  assert.equal(code, 0);
});

test('changed-since: per-diagram shas — re-traced diagram at HEAD, unmatched starts at newest sha', () => {
  const map = makeMap('map-mixed');
  writeFileSync(join(map, 'billing.mmd'), billingMmd(git('rev-parse', 'HEAD')));
  const { code, json } = runJson(changedSince, [map, '--repo', `shop=${repo}`]);
  assert.equal(code, 1);
  assert.deepEqual(json.affected.map((a) => a.diagram), ['order']); // order still at sha0
  assert.deepEqual(json.unaffected, ['billing']); // billing's own sha is HEAD
  assert.deepEqual(json.unmatchedChanges, []); // already reviewed when billing was bumped
});

test('changed-since: unknown sha -> exit 2', () => {
  const map = makeMap('map-badsha', { sha: 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeef' });
  const { code, stderr } = run(changedSince, [map, '--repo', `shop=${repo}`]);
  assert.equal(code, 2);
  assert.match(stderr, /unknown commit/);
});

test('changed-since: --repo that is not a git repo -> exit 2', () => {
  const map = makeMap('map-notrepo');
  const notRepo = mkdtempSync(join(tmpdir(), 'bpmn-notrepo-'));
  try {
    const { code, stderr } = run(changedSince, [map, '--repo', `shop=${notRepo}`]);
    assert.equal(code, 2);
    assert.match(stderr, /not a git repository/);
  } finally {
    rmSync(notRepo, { recursive: true, force: true });
  }
});

test('changed-since: missing --repo mapping / no provenance / no args -> exit 2', () => {
  const map = makeMap('map-norepo');
  assert.equal(run(changedSince, [map]).code, 2);
  const bare = join(tmp, 'map-bare');
  mkdirSync(bare);
  writeFileSync(join(bare, 'x.mmd'), readFileSync(examples('order-fulfillment.mmd'), 'utf8').replace(/^%% source:.*\n/gm, ''));
  const r = run(changedSince, [bare, '--repo', `shop=${repo}`]);
  assert.equal(r.code, 2);
  assert.match(r.stderr, /no '%% source:/);
  assert.equal(run(changedSince, []).code, 2);
});

// ----------------------------------------------------------------- diff-map --
test('diff-map: semantically identical (comments/order/indent differ) -> exit 0', () => {
  const { code, json } = runJson(diffMap, [diffFixture('base.mmd'), diffFixture('reformatted.mmd')]);
  assert.equal(code, 0);
  assert.deepEqual(json.changes, []);
  const human = run(diffMap, [diffFixture('base.mmd'), diffFixture('reformatted.mmd')]);
  assert.equal(human.stdout.trim(), 'NO SEMANTIC CHANGES');
});

test('diff-map: relabel is reported by id', () => {
  const { code, json } = runJson(diffMap, [diffFixture('base.mmd'), diffFixture('relabel.mmd')]);
  assert.equal(code, 1);
  assert.deepEqual(json.changes, [{ type: 'node-relabelled', id: 't1', nodeType: 'task:user', from: 'Review order', to: 'Check order' }]);
  assert.deepEqual(json.idChurn, []);
});

test('diff-map: added task + rewired flows', () => {
  const { code, json } = runJson(diffMap, [diffFixture('base.mmd'), diffFixture('added-task.mmd')]);
  assert.equal(code, 1);
  const types = json.changes.map((c) => `${c.type} ${c.id ?? c.flow}`).sort();
  assert.deepEqual(types, ['flow-added t3 --> t4', 'flow-added t4 --> e1', 'flow-removed t3 --> e1', 'node-added t4']);
  assert.equal(json.changes.find((c) => c.type === 'node-added').container, 'Shop / Warehouse');
});

test('diff-map: id churn is flagged with the old id to reuse', () => {
  const { code, json, stdout } = runJson(diffMap, [diffFixture('base.mmd'), diffFixture('churn.mmd')]);
  assert.equal(code, 1);
  assert.equal(json.idChurn.length, 1);
  assert.equal(json.idChurn[0].oldId, 't2');
  assert.equal(json.idChurn[0].newId, 'p1');
  const human = run(diffMap, [diffFixture('base.mmd'), diffFixture('churn.mmd')]);
  assert.match(human.stdout, /ID CHURN .*'t2' removed and 'p1' added/);
  assert.ok(stdout);
});

test('diff-map: parse/validation error -> exit 2', () => {
  const { code, stderr } = run(diffMap, [diffFixture('base.mmd'), diffFixture('parse-error.mmd')]);
  assert.equal(code, 2);
  assert.match(stderr, /validate\.mjs/);
});

test('diff-map: usage error -> exit 2', () => {
  assert.equal(run(diffMap, [diffFixture('base.mmd')]).code, 2);
});

test('diff-map: shipped examples diff cleanly against themselves', () => {
  for (const ex of ['order-fulfillment.mmd', 'media-viewer-upload.mmd']) {
    assert.equal(run(diffMap, [examples(ex), examples(ex)]).code, 0, ex);
  }
});
