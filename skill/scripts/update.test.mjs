/**
 * update.test.mjs — node --test
 *
 * Update mode: changed-since.mjs against throwaway git repos (one per test, built
 * in a temp dir), and diff-map.mjs against the fixtures in
 * scripts/test-fixtures/diff/.
 */
import { test, after } from 'node:test';
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

// -------------------------------------------------------------- helpers ------
const tmpRoots = [];
after(() => {
  for (const d of tmpRoots) rmSync(d, { recursive: true, force: true });
});

/** A fresh, isolated git repo per test. `files` are committed as the initial commit. */
function makeRepo(files = {}) {
  const root = mkdtempSync(join(tmpdir(), 'bpmn-update-'));
  tmpRoots.push(root);
  const dir = join(root, 'shop');
  mkdirSync(dir);
  const git = (args, env = {}) =>
    execFileSync('git', ['-C', dir, '-c', 'user.name=t', '-c', 'user.email=t@example.com', '-c', 'commit.gpgsign=false', ...args], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, ...env },
    }).trim();
  const put = (rel, text = `// ${rel}\n`) => {
    mkdirSync(dirname(join(dir, rel)), { recursive: true });
    writeFileSync(join(dir, rel), text);
  };
  const commit = (msg, env = {}) => {
    git(['add', '-A']);
    git(['commit', '-q', '--allow-empty', '-m', msg], env);
    return git(['rev-parse', 'HEAD']);
  };
  git(['init', '-q', '-b', 'main']);
  for (const [rel, text] of Object.entries(files)) put(rel, text);
  const sha0 = commit('initial');
  /** A map dir next to the repo; `diagrams` = { name: mmdText }, optional RULES.md text. */
  const makeMap = (name, diagrams, rules) => {
    const m = join(root, name);
    mkdirSync(m, { recursive: true });
    for (const [n, text] of Object.entries(diagrams)) writeFileSync(join(m, `${n}.mmd`), text);
    if (rules) writeFileSync(join(m, 'RULES.md'), rules);
    return m;
  };
  const scan = (map, extra = []) => runJson(changedSince, [map, '--repo', `shop=${dir}`, ...extra]);
  return { root, dir, git, put, commit, sha0, makeMap, scan, rm: (rel) => unlinkSync(join(dir, rel)) };
}

const orderMmd = (sha, extra = '') => `%% Order handling.
%% source: shop ${sha} 2026-09-01
${extra}bpmn LR
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
const tinyMmd = (sha, extra = '') => `%% source: shop ${sha} 2026-09-01
${extra}bpmn LR
  pool "P"
    start a "Thing requested"
    end b "Thing done"
  a --> b
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
const shopFiles = {
  'src/orders/review.ts': 'export const review = 1;\n',
  'src/orders/dispatch.ts': 'export const dispatch = 1;\n',
  'src/orders/stock.ts': 'export const stock = 1;\n',
  'src/billing/charge.ts': 'export const charge = 1;\n',
};
const shopMap = (r, name, { sha = r.sha0, rules = true, billingExtra = '' } = {}) =>
  r.makeMap(name, { order: orderMmd(sha), billing: billingMmd(sha, billingExtra) }, rules ? rulesMd : null);

// ------------------------------------------------------------ changed-since --
test('changed-since: nothing changed -> exit 0, all diagrams unaffected', () => {
  const r = makeRepo(shopFiles);
  const map = shopMap(r, 'map');
  const { code, json } = r.scan(map);
  assert.equal(code, 0);
  assert.deepEqual(json.affected, []);
  assert.deepEqual(json.possiblyAffected, []);
  assert.deepEqual(json.unaffected.sort(), ['billing', 'order']);
  assert.equal(json.stats.rules, 3);
  assert.equal(json.stats.rulesLinkedToDiagram, 3);
  assert.equal(json.stats.evidenceRefsResolved, json.stats.evidenceRefs);
  assert.equal(json.repos[0].head, r.sha0);
  assert.match(run(changedSince, [map, '--repo', `shop=${r.dir}`]).stdout, /UP TO DATE/);
});

test('changed-since: modified + deleted evidence and an unrelated new file', () => {
  const r = makeRepo(shopFiles);
  const map = shopMap(r, 'map');
  r.put('src/orders/review.ts', 'export const review = 2;\n');
  r.rm('src/orders/dispatch.ts');
  r.put('src/refunds/refund.ts');
  r.commit('change orders, add refunds');

  const { code, json } = r.scan(map);
  assert.equal(code, 1);
  assert.deepEqual(json.affected.map((a) => a.diagram), ['order']);
  assert.deepEqual(json.affected[0].rules.sort(), ['R-1', 'R-2']);
  assert.deepEqual(json.affected[0].elements.sort(), ['g1', 't1', 't3']);
  assert.deepEqual(json.unaffected, ['billing']);
  assert.deepEqual(json.staleRules.map((s) => s.id), ['R-2']);
  assert.equal(json.staleRules[0].hits[0].status, 'D');
  assert.deepEqual(json.unmatchedChanges.map((u) => `${u.status} ${u.path}`), ['A src/refunds/refund.ts']);

  const human = run(changedSince, [map, '--repo', `shop=${r.dir}`]);
  assert.equal(human.code, 1);
  assert.match(human.stdout, /AFFECTED diagrams/);
  assert.match(human.stdout, /STALE rules/);
  assert.match(human.stdout, /matching NO rule[\s\S]*src\/refunds\/refund\.ts/);
});

test('changed-since: a renamed evidence file makes the rule stale and its diagram affected', () => {
  const r = makeRepo(shopFiles);
  const map = shopMap(r, 'map');
  r.git(['mv', 'src/billing/charge.ts', 'src/billing/payments.ts']);
  r.commit('rename charge');
  const { code, json } = r.scan(map);
  assert.equal(code, 1);
  assert.deepEqual(json.affected.map((a) => a.diagram), ['billing']);
  const r3 = json.staleRules.find((s) => s.id === 'R-3');
  assert.ok(r3, 'R-3 is stale');
  assert.equal(r3.hits[0].status, 'R');
  assert.equal(r3.hits[0].oldPath, 'src/billing/charge.ts');
});

test('changed-since: without RULES.md, diagrams of a changed repo are possibly affected', () => {
  const r = makeRepo(shopFiles);
  const map = shopMap(r, 'map', { rules: false });
  r.put('src/other.ts');
  r.commit('other');
  const { code, json } = r.scan(map);
  assert.equal(code, 1);
  assert.deepEqual(json.affected, []);
  assert.deepEqual(json.possiblyAffected.map((p) => p.diagram).sort(), ['billing', 'order']);
  assert.deepEqual(json.unmatchedChanges.map((u) => u.path), ['src/other.ts']);
});

test('changed-since: %% evidence comments narrow a diagram without RULES.md', () => {
  const r = makeRepo(shopFiles);
  const map = shopMap(r, 'map', { rules: false, billingExtra: '%% evidence b1: shop:src/orders/review.ts:1\n' });
  r.put('src/orders/review.ts', 'changed\n');
  r.commit('review');
  const { code, json } = r.scan(map);
  assert.equal(code, 1);
  assert.deepEqual(json.affected.map((a) => a.diagram), ['billing']);
  assert.deepEqual(json.affected[0].elements, ['b1']);
  assert.deepEqual(json.possiblyAffected.map((p) => p.diagram), ['order']); // no evidence at all
});

test('changed-since: repo-qualified evidence whose path starts with a digit', () => {
  const r = makeRepo({ '2026/orders/review.ts': 'a\n', 'src/x.ts': 'x\n' });
  const map = r.makeMap('map', {
    order: orderMmd(r.sha0, '%% evidence t1: shop:2026/orders/review.ts:12\n'),
    other: tinyMmd(r.sha0, '%% evidence a: shop:src/x.ts\n'),
  });
  r.put('2026/orders/review.ts', 'b\n');
  r.commit('touch');
  const { code, json } = r.scan(map);
  assert.equal(code, 1);
  assert.deepEqual(json.affected.map((a) => `${a.diagram}:${a.elements}`), ['order:t1']);
  assert.deepEqual(json.unaffected, ['other']);
  assert.equal(json.stats.evidenceRefsResolved, 2);
});

test('changed-since: an unknown name: prefix is not taken as a repo', () => {
  const r = makeRepo({ 'src/a.ts': 'a\n' });
  // `lib:src/a.ts` — 'lib' is not a source/--repo name, so this is not a repo-qualified ref.
  const map = r.makeMap('map', { d: tinyMmd(r.sha0, '%% evidence a: lib:src/a.ts\n') });
  const { json } = r.scan(map);
  assert.equal(json.stats.evidenceRefs, 0);
  assert.ok(json.warnings.some((w) => /no recognisable path/.test(w)));
});

test('changed-since: suffix, folder-boundary, glob, brace and elision matching', () => {
  const r = makeRepo({
    'src/order.service.ts': '1\n',
    'src/review.ts': '1\n',
    'src/api/QuotesController.cs': '1\n',
    'src/Infrastructure/Persistence/Store.cs': '1\n',
    'src/Core/Acme.Orders.Domain/Order.cs': '1\n',
    'src/jobs/nightly.job.ts': '1\n',
    'src/service.ts': '1\n',
    'src/view.ts': '1\n',
  });
  const ev = (p) => `%% evidence a: shop:${p}\n`;
  const map = r.makeMap('map', {
    'd-service': tinyMmd(r.sha0, ev('service.ts')), // must NOT match order.service.ts
    'd-boundary': tinyMmd(r.sha0, ev('view.ts')), // must NOT match review.ts
    'd-brace': tinyMmd(r.sha0, ev('api/{Orders,Quotes}Controller.cs:10')),
    'd-elide': tinyMmd(r.sha0, ev('Infrastructure/.../Store.cs')),
    'd-dotnet': tinyMmd(r.sha0, ev('Domain/Order.cs:3-9')),
    'd-glob': tinyMmd(r.sha0, ev('src/jobs/*.job.ts')),
    'd-suffix': tinyMmd(r.sha0, ev('api/QuotesController.cs')),
  });
  for (const f of ['src/order.service.ts', 'src/review.ts', 'src/api/QuotesController.cs', 'src/Infrastructure/Persistence/Store.cs', 'src/Core/Acme.Orders.Domain/Order.cs', 'src/jobs/nightly.job.ts']) {
    r.put(f, '2\n');
  }
  r.commit('touch many');
  const { code, json } = r.scan(map);
  assert.equal(code, 1);
  assert.deepEqual(json.affected.map((a) => a.diagram).sort(), ['d-brace', 'd-dotnet', 'd-elide', 'd-glob', 'd-suffix']);
  assert.deepEqual(json.unaffected.sort(), ['d-boundary', 'd-service']);
  assert.deepEqual(json.unmatchedChanges.map((u) => u.path).sort(), ['src/order.service.ts', 'src/review.ts']);
});

test('changed-since: map recorded at HEAD is up to date', () => {
  const r = makeRepo(shopFiles);
  r.put('src/new.ts');
  const head = r.commit('new');
  assert.equal(r.scan(shopMap(r, 'map', { sha: head })).code, 0);
});

test('changed-since: per-diagram shas — re-traced diagram at HEAD, unmatched starts at the newest sha', () => {
  const r = makeRepo(shopFiles);
  r.put('src/orders/review.ts', 'changed\n');
  r.put('src/refunds/refund.ts');
  const head = r.commit('change');
  const map = r.makeMap('map', { order: orderMmd(r.sha0), billing: billingMmd(head) }, rulesMd);
  const { code, json } = r.scan(map);
  assert.equal(code, 1);
  assert.deepEqual(json.affected.map((a) => a.diagram), ['order']); // order still at sha0
  assert.deepEqual(json.unaffected, ['billing']); // billing's own sha is HEAD
  assert.deepEqual(json.unmatchedChanges, []); // already reviewed when billing was bumped
});

test('changed-since: newest sha is chosen by ancestry, not timestamp or file order', () => {
  const tie = { GIT_COMMITTER_DATE: '2026-09-01T12:00:00Z', GIT_AUTHOR_DATE: '2026-09-01T12:00:00Z' };
  const r = makeRepo({ 'src/a.ts': 'a\n' });
  r.put('src/a.ts', 'b\n');
  r.put('src/reviewed.ts');
  const shaA = r.commit('A', tie);
  r.put('src/between.ts');
  const shaB = r.commit('B (child of A, same timestamp)', tie);
  r.put('src/fresh.ts');
  r.commit('C = HEAD');
  assert.equal(r.git(['log', '-1', '--format=%ct', shaA]), r.git(['log', '-1', '--format=%ct', shaB]));
  // Both file orders: the older sha sorts first, then last.
  for (const [first, second] of [[shaA, shaB], [shaB, shaA]]) {
    const map = r.makeMap(`map-${first.slice(0, 7)}`, { a: tinyMmd(first), b: tinyMmd(second) });
    const { json } = r.scan(map);
    assert.deepEqual(json.unmatchedChanges.map((u) => u.path), ['src/fresh.ts'], `order ${first.slice(0, 7)} first`);
    assert.ok(!json.warnings.some((w) => /divergent/.test(w)));
  }
});

test('changed-since: divergent provenance commits -> union of unmatched + warning', () => {
  const r = makeRepo({ 'src/a.ts': 'a\n' });
  r.git(['checkout', '-q', '-b', 'side']);
  r.put('src/side.ts');
  const side = r.commit('side');
  r.git(['checkout', '-q', 'main']);
  r.put('src/main.ts');
  const main = r.commit('main');
  const map = r.makeMap('map', { a: tinyMmd(side), b: tinyMmd(main) });
  const { json } = r.scan(map);
  assert.ok(json.warnings.some((w) => /divergent/.test(w)), JSON.stringify(json.warnings));
  // From main (HEAD): nothing. From side: side.ts deleted + main.ts added.
  assert.deepEqual(json.unmatchedChanges.map((u) => `${u.status} ${u.path}`).sort(), ['A src/main.ts', 'D src/side.ts']);
});

test('changed-since: unknown sha -> exit 2', () => {
  const r = makeRepo(shopFiles);
  const { code, stderr } = run(changedSince, [shopMap(r, 'map', { sha: 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeef' }), '--repo', `shop=${r.dir}`]);
  assert.equal(code, 2);
  assert.match(stderr, /unknown commit/);
});

test('changed-since: --repo that is not a git repo -> exit 2', () => {
  const r = makeRepo(shopFiles);
  const notRepo = join(r.root, 'not-a-repo');
  mkdirSync(notRepo);
  const { code, stderr } = run(changedSince, [shopMap(r, 'map'), '--repo', `shop=${notRepo}`]);
  assert.equal(code, 2);
  assert.match(stderr, /not a git repository/);
});

test('changed-since: missing --repo mapping / no provenance / no args -> exit 2', () => {
  const r = makeRepo(shopFiles);
  assert.equal(run(changedSince, [shopMap(r, 'map')]).code, 2);
  const bare = r.makeMap('bare', { x: readFileSync(examples('order-fulfillment.mmd'), 'utf8').replace(/^%% source:.*\n/gm, '') });
  const res = run(changedSince, [bare, '--repo', `shop=${r.dir}`]);
  assert.equal(res.code, 2);
  assert.match(res.stderr, /no '%% source:/);
  assert.equal(run(changedSince, []).code, 2);
});

// ----------------------------------------------------------------- diff-map --
const diff = (a, b) => runJson(diffMap, [diffFixture(a), diffFixture(b)]);

test('diff-map: semantically identical (comments/order/indent differ) -> exit 0', () => {
  const { code, json } = diff('base.mmd', 'reformatted.mmd');
  assert.equal(code, 0);
  assert.deepEqual(json.changes, []);
  assert.equal(run(diffMap, [diffFixture('base.mmd'), diffFixture('reformatted.mmd')]).stdout.trim(), 'NO SEMANTIC CHANGES');
});

test('diff-map: relabel is reported by id', () => {
  const { code, json } = diff('base.mmd', 'relabel.mmd');
  assert.equal(code, 1);
  assert.deepEqual(json.changes, [{ type: 'node-relabelled', id: 't1', nodeType: 'task:user', from: 'Review order', to: 'Check order' }]);
  assert.deepEqual(json.idChurn, []);
});

test('diff-map: added task + rewired flows', () => {
  const { code, json } = diff('base.mmd', 'added-task.mmd');
  assert.equal(code, 1);
  const types = json.changes.map((c) => `${c.type} ${c.id ?? c.flow}`).sort();
  assert.deepEqual(types, ['flow-added t3 --> t4', 'flow-added t4 --> e1', 'flow-removed t3 --> e1', 'node-added t4']);
  assert.equal(json.changes.find((c) => c.type === 'node-added').container, 'Shop / Warehouse');
});

test('diff-map: duplicate flows on the same endpoints are matched as a multiset', () => {
  // old: g1 -"Yes"-> g2, g1 -"No"-> g2, g2 -default-> e2, g2 -"Pickup"-> e2
  // new: g1 -"No"-> g2, g1 -default-> g2, g2 -default-> e2
  const { code, json } = diff('dup-old.mmd', 'dup-new.mmd');
  assert.equal(code, 1);
  const got = json.changes.map((c) => `${c.type} ${c.flow}${c.label ? ` ${c.label}` : ''}${'from' in c ? ` ${JSON.stringify(c.from)}->${JSON.stringify(c.to)}` : ''}`).sort();
  assert.deepEqual(got, [
    'flow-default-changed g1 --> g2 false->true', // the unpaired "Yes" flow became the default
    'flow-relabelled g1 --> g2 "Yes"->""',
    'flow-removed g2 --> e2 "Pickup"', // not a bogus relabel of the default flow
  ]);
  // "No" is untouched, and the default g2 -> e2 is untouched.
  assert.ok(!json.changes.some((c) => c.type === 'flow-relabelled' && (c.from === 'No' || c.to === 'No')));
});

test('diff-map: default flow changed to a labelled answer', () => {
  const { code, json } = diff('base.mmd', 'default-change.mmd');
  assert.equal(code, 1);
  assert.deepEqual(json.changes, [
    { type: 'flow-default-changed', flow: 'g1 --> e2', from: true, to: false },
    { type: 'flow-relabelled', flow: 'g1 --> e2', from: '', to: 'No' },
  ]);
});

test('diff-map: lane move is reported as node-moved', () => {
  const { code, json } = diff('base.mmd', 'lane-move.mmd');
  assert.equal(code, 1);
  assert.deepEqual(json.changes, [{ type: 'node-moved', id: 't3', from: 'Shop / Warehouse', to: 'Shop / Sales' }]);
});

test('diff-map: id churn in the same place is a strong hint with the old id to reuse', () => {
  const { code, json } = diff('base.mmd', 'churn.mmd');
  assert.equal(code, 1);
  assert.equal(json.idChurn.length, 1);
  assert.deepEqual([json.idChurn[0].oldId, json.idChurn[0].newId, json.idChurn[0].confidence], ['t2', 'p1', 'strong']);
  assert.match(run(diffMap, [diffFixture('base.mmd'), diffFixture('churn.mmd')]).stdout, /! ID CHURN .*'t2' removed and 'p1' added/);
});

test('diff-map: same label elsewhere (other pool, no shared neighbours) is only a possible churn', () => {
  const { code, json } = diff('base.mmd', 'churn-false.mmd');
  assert.equal(code, 1);
  assert.equal(json.idChurn.length, 1);
  assert.deepEqual([json.idChurn[0].oldId, json.idChurn[0].newId, json.idChurn[0].confidence], ['t3', 'c3', 'possible']);
  const human = run(diffMap, [diffFixture('base.mmd'), diffFixture('churn-false.mmd')]).stdout;
  assert.match(human, /\? POSSIBLE CHURN/);
  assert.doesNotMatch(human, /! ID CHURN/);
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
