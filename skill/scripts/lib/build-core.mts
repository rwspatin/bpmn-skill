/**
 * Bundles the fork's BPMN parser + validator + XML exporter into a single
 * standalone Node ESM (`.cache/bpmn-core.mjs`) that the skill scripts import.
 *
 * Why a bundle: the fork's source imports `config.schema.yaml?only-defaults=true`
 * (a build-time transform), so the modules cannot be imported by plain Node. We
 * reuse the fork's own esbuild plugin to resolve that, then bundle everything the
 * parse/export path needs (Chevrotain, common db) into one file. No DOM / renderer
 * code is in this graph, so it runs headless.
 *
 * Run with the fork's tsx (it resolves the TS plugin + deps):
 *   cd <fork> && node_modules/.bin/tsx <this file> <fork-abs> <out-abs>
 */
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const fork = process.argv[2];
const outfile = process.argv[3];
if (!fork || !outfile) {
  console.error('usage: build-core.mts <fork-abs-path> <out-abs-path>');
  process.exit(2);
}

// esbuild and the schema plugin are resolved from the fork's node_modules, since
// this script lives outside the fork.
const { build } = await import(pathToFileURL(resolve(fork, 'node_modules/esbuild/lib/main.js')).href);
const pluginMod = await import(
  pathToFileURL(resolve(fork, '.esbuild/jsonSchemaPlugin.ts')).href
);
const jsonSchemaPlugin = pluginMod.jsonSchemaPlugin ?? pluginMod.default;

const bpmn = `${fork}/packages/mermaid/src/diagrams/bpmn`;

await build({
  stdin: {
    contents: `
      export { parser } from '${bpmn}/parser/bpmn.chevrotain.js';
      export { db } from '${bpmn}/bpmnDb.js';
      export { validateBpmn } from '${bpmn}/bpmnValidate.js';
      export { toBpmnXml } from '${bpmn}/export/index.js';
    `,
    resolveDir: fork,
    loader: 'ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outfile,
  plugins: [jsonSchemaPlugin],
  logLevel: 'error',
});

console.log('built', outfile);
