#!/usr/bin/env node
/**
 * export-xml.mjs <file.mmd> <out.bpmn>
 *
 * Parses + validates the DSL, then writes BPMN 2.0 XML (with a BPMNDI section that
 * carries layout coordinates) so the diagram opens laid-out in bpmn.io / Camunda
 * Modeler. Exits non-zero (with the catalogue errors) if the DSL is invalid.
 *
 * Requires Node >= 22. Uses the vendored parser/export bundle — no build needed.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const [file, out] = process.argv.slice(2);
if (!file || !out) {
  console.error('usage: export-xml.mjs <file.mmd> <out.bpmn>');
  process.exit(2);
}

const { toBpmnXml } = await import(resolve(here, 'vendor/bpmn-core.mjs'));

const source = readFileSync(file, 'utf8');
try {
  const xml = await toBpmnXml(source);
  writeFileSync(out, xml);
  console.log(`wrote ${out} (${xml.length} bytes)`);
  process.exit(0);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
}
