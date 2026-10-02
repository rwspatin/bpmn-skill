#!/usr/bin/env node
/**
 * validate.mjs <file.mmd>
 *
 * Parses a BPMN DSL file with the real Mermaid-BPMN parser + semantic validator.
 * Prints "VALID" (exit 0) or the self-correcting error catalogue (exit 1) so an
 * agent can repair the DSL from the messages and re-run until clean.
 *
 * Requires Node >= 22. Uses the vendored, self-contained parser bundle — no build
 * or network needed. Regenerate the bundle against the fork with:
 *   node scripts/lib/rebuild.mjs
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const file = process.argv[2];
if (!file) {
  console.error('usage: validate.mjs <file.mmd>');
  process.exit(2);
}

const { parser } = await import(pathToFileURL(resolve(here, 'vendor/bpmn-core.mjs')).href);

const source = readFileSync(file, 'utf8');
try {
  await parser.parse(source);
  console.log('VALID');
  process.exit(0);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
}
