# Vendored parser bundle

`bpmn-core.mjs` is a minified esbuild bundle of the `bpmn` diagram's parser,
semantic validator and BPMN 2.0 XML exporter. It lets `validate.mjs`,
`lint.mjs`, `export-xml.mjs`, `changed-since.mjs` and `diff-map.mjs` run offline
with no install. `render.mjs` does not use it: it drives the fork's full renderer.

It is generated, not hand-written. The readable source is public.

## Provenance

| | |
|---|---|
| Source repository | https://github.com/rwspatin/mermaid |
| Branch | `feat/bpmn-diagram` |
| Commit | `1e2054fb1b4715c74dfc0cb05b90f2510989a822` |
| Bundler | esbuild 0.25.12 (from the fork's `node_modules`) |
| Build script | `../lib/build-core.mts`, run by `../lib/rebuild.mjs` |
| SHA-256 | `bc6fc887872513749418c3a6443ada7557f3360b634dfb7aadf9bc49cf066d69` |

Build settings (see `build-core.mts`): ESM, `platform: node`, `target: node22`,
`minify: true`, `legalComments: 'eof'` (license notices are kept at the end of
the file). Mermaid's `themes/index.js` is replaced by a stub that keeps only the
default theme: the other themes only affect rendering colours, which this bundle
never does. Bundled third-party packages and their licenses are listed in
`../../../THIRD_PARTY_NOTICES.md`.

## Reproduce it

Requires Node >= 22 and pnpm.

```sh
git clone https://github.com/rwspatin/mermaid.git
cd mermaid
git checkout 1e2054fb1b4715c74dfc0cb05b90f2510989a822
pnpm install
cd <path to bpmn-skill>
BPMN_MERMAID_FORK=<path to mermaid> node skill/scripts/lib/rebuild.mjs
```

`rebuild.mjs` overwrites `bpmn-core.mjs` and prints the fork commit and the
file's SHA-256. The same commit and `pnpm install` give the SHA-256 above; if it
differs, check that the fork's lockfile installed the same esbuild version.

When the bundle is rebuilt from a newer fork commit, update the commit and
SHA-256 in this file in the same change.
