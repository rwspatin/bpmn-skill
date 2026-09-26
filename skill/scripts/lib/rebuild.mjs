#!/usr/bin/env node
/**
 * Regenerates the vendored, self-contained parser/export bundle
 * (`scripts/vendor/bpmn-core.mjs`) from the Mermaid fork. Run this whenever the
 * BPMN DSL, validator, or exporter changes in the fork.
 *
 *   BPMN_MERMAID_FORK=/path/to/mermaid node scripts/lib/rebuild.mjs
 *
 * Requires Node >= 22 and the fork's node_modules installed.
 */
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';
import { existsSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));
const FORK = process.env.BPMN_MERMAID_FORK;
if (!FORK) {
  console.error(
    'BPMN_MERMAID_FORK is not set. Point it at a checkout of ' +
      'https://github.com/rwspatin/mermaid (branch feat/bpmn-diagram) with ' +
      '`pnpm install` already run.'
  );
  process.exit(2);
}
const out = resolve(here, '../vendor/bpmn-core.mjs');
const builder = resolve(here, 'build-core.mts');
const tsxCli = resolve(FORK, 'node_modules/tsx/dist/cli.mjs');

if (!existsSync(tsxCli)) {
  console.error(`tsx not found at ${tsxCli}. Set BPMN_MERMAID_FORK to the fork and run \`pnpm install\` there.`);
  process.exit(2);
}

// Use the current Node (>=22) so the fork's build tooling runs on a supported runtime.
execFileSync(process.execPath, [tsxCli, builder, FORK, out], {
  cwd: FORK,
  stdio: 'inherit',
});
void pathToFileURL;
