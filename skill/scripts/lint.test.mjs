/**
 * lint.test.mjs — node --test
 *
 * One fixture per style rule (L1-L8) that triggers exactly that warning, plus a
 * fully clean fixture, plus the shipped examples (which must all lint CLEAN), plus
 * the broken example (which must be rejected before linting). Fixtures live under
 * scripts/test-fixtures/.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const lint = resolve(here, 'lint.mjs');
const fixtures = (f) => resolve(here, 'test-fixtures', f);
const examples = (f) => resolve(here, '..', 'examples', f);

function runLint(file, json = false) {
  const args = [lint, file];
  if (json) args.push('--json');
  const r = spawnSync(process.execPath, args, { encoding: 'utf8' });
  return { code: r.status, stdout: r.stdout, stderr: r.stderr };
}

// Each single-rule fixture must exit 1 and emit exactly one warning, for its rule.
const singleRule = {
  L1: 'l1-not-question.mmd',
  L2: 'l2-unlabeled-branch.mmd',
  L3: 'l3-no-default.mmd',
  L4: 'l4-branches-end-separately.mmd',
  L5: 'l5-generic-end.mmd',
  L6: 'l6-unlabeled-message.mmd',
  L7: 'l7-generic-start.mmd',
  L8: 'l8-code-label.mmd',
};

for (const [rule, file] of Object.entries(singleRule)) {
  test(`${rule}: fixture triggers exactly ${rule}`, () => {
    const { code, stdout } = runLint(fixtures(file), true);
    assert.equal(code, 1, `expected exit 1 for ${file}`);
    const parsed = JSON.parse(stdout);
    assert.equal(parsed.length, 1, `expected exactly one warning, got ${JSON.stringify(parsed)}`);
    assert.equal(parsed[0].rule, rule);
    assert.ok(parsed[0].elementId, 'warning has an element id');
    assert.ok(parsed[0].message && parsed[0].fix, 'warning has message + fix');
  });
}

test('clean fixture lints CLEAN (exit 0)', () => {
  const { code, stdout } = runLint(fixtures('clean.mmd'));
  assert.equal(code, 0);
  assert.equal(stdout.trim(), 'CLEAN');
});

test('clean fixture --json is an empty array', () => {
  const { code, stdout } = runLint(fixtures('clean.mmd'), true);
  assert.equal(code, 0);
  assert.deepEqual(JSON.parse(stdout), []);
});

for (const ex of ['order-fulfillment.mmd', 'media-viewer-upload.mmd']) {
  test(`shipped example ${ex} lints CLEAN`, () => {
    const { code, stdout } = runLint(examples(ex));
    assert.equal(code, 0, `expected ${ex} to be CLEAN, got:\n${stdout}`);
    assert.equal(stdout.trim(), 'CLEAN');
  });
}

test('broken example is rejected before linting (exit 2)', () => {
  const { code, stderr } = runLint(examples('broken-example.mmd'));
  assert.equal(code, 2);
  assert.match(stderr, /validate\.mjs/);
});

test('missing argument is a usage error (exit 2)', () => {
  const r = spawnSync(process.execPath, [lint], { encoding: 'utf8' });
  assert.equal(r.status, 2);
  assert.match(r.stderr, /usage/);
});
