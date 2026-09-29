/**
 * Bundles the fork's BPMN parser + validator + XML exporter into a single
 * standalone Node ESM (`vendor/bpmn-core.mjs`) that the skill scripts import.
 *
 * Why a bundle: the fork's source imports `config.schema.yaml?only-defaults=true`
 * (a build-time transform), so the modules cannot be imported by plain Node. We
 * reuse the fork's own esbuild plugin to resolve that, then bundle everything the
 * parse/export path needs (Chevrotain, common db) into one file. No DOM / renderer
 * code is in this graph, so it runs headless.
 *
 * Size: the entry pulls in `themes/index.js` transitively (via `config.ts` and
 * `defaultConfig.ts`), which eagerly imports all ~11 of Mermaid's built-in colour
 * themes (~200KB) even though this bundle never renders anything. Only
 * `theme-default`'s `getThemeVariables()` actually executes in the validate/lint/
 * export/diff code paths (`defaultConfig.ts` calls it eagerly at module load to
 * seed `DEFAULT_CONFIG.themeVariables`); the other themes' `getThemeVariables` are
 * only invoked from `config.ts`'s `setSiteConfig`/`updateCurrentConfig`, which
 * nothing in this bundle's call graph (`parser.parse`, `db`, `validateBpmn`,
 * `toBpmnXml`) ever calls. `themeStubPlugin` below replaces the `themes/index.js`
 * module with a stub that keeps the real `theme-default` (so `DEFAULT_CONFIG` is
 * byte-for-byte the same) and no-ops the other themes' `getThemeVariables`,
 * dropping their source (and `khroma`, which only those other themes use) from
 * the bundle. See `skill/scripts/lib/rebuild.mjs` usage docs and the "Releasing"
 * notes in README.md for how to verify this after changing the fork.
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
const themeDefaultPath = resolve(fork, 'packages/mermaid/src/themes/theme-default.js');

/**
 * Replaces `themes/index.js` (imported by `config.ts` and `defaultConfig.ts`)
 * with a stub carrying the same 11 keys. `default` re-exports the fork's real
 * `theme-default.js` unmodified (its `getThemeVariables()` runs eagerly at
 * `defaultConfig.ts` load time and its output is real config, so it must stay
 * byte-identical). The other 10 themes' `getThemeVariables` are replaced with a
 * no-op: nothing in `parser.parse` / `db` / `validateBpmn` / `toBpmnXml` ever
 * calls `setSiteConfig`/`updateCurrentConfig` with a non-default theme, so
 * those functions are unreachable here and only their *keys* (for
 * `Object.hasOwn(theme, name)` checks in `config.ts`) need to exist.
 */
const themeStubPlugin = {
  name: 'bpmn-core-theme-stub',
  setup(buildApi: { onResolve: Function; onLoad: Function }) {
    buildApi.onResolve({ filter: /themes\/index\.js$/ }, () => ({
      path: 'bpmn-core-theme-stub',
      namespace: 'bpmn-core-theme-stub',
    }));
    buildApi.onLoad({ filter: /.*/, namespace: 'bpmn-core-theme-stub' }, () => ({
      loader: 'js',
      resolveDir: fork,
      contents: `
        import { getThemeVariables as defaultThemeVariables } from ${JSON.stringify(themeDefaultPath)};
        const noThemeVariables = () => ({});
        export default {
          base: { getThemeVariables: noThemeVariables },
          dark: { getThemeVariables: noThemeVariables },
          default: { getThemeVariables: defaultThemeVariables },
          forest: { getThemeVariables: noThemeVariables },
          neutral: { getThemeVariables: noThemeVariables },
          neo: { getThemeVariables: noThemeVariables },
          'neo-dark': { getThemeVariables: noThemeVariables },
          redux: { getThemeVariables: noThemeVariables },
          'redux-dark': { getThemeVariables: noThemeVariables },
          'redux-color': { getThemeVariables: noThemeVariables },
          'redux-dark-color': { getThemeVariables: noThemeVariables },
        };
      `,
    }));
  },
};

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
  target: 'node22',
  outfile,
  plugins: [jsonSchemaPlugin, themeStubPlugin],
  logLevel: 'error',
  minify: true,
  // Keep license/copyright comments (collected at end of file) so
  // THIRD_PARTY_NOTICES.md stays verifiable against the actual bundle.
  legalComments: 'eof',
});

console.log('built', outfile);
