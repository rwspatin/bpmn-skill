# Security policy

## Reporting a vulnerability

Please report security issues privately through GitHub's
[private vulnerability reporting](https://github.com/rwspatin/bpmn-skill/security/advisories/new)
for this repository, not in a public issue. Include the affected script or
file, the version from `.claude-plugin/plugin.json`, and steps to reproduce.

You can expect an acknowledgement within 7 days. Fixes are released as a new
plugin version and noted in `CHANGELOG.md`.

## Supported versions

Only the latest released version receives fixes.

## What the skill executes

The skill's scripts run locally with Node and never send data over the network.

- `validate.mjs`, `lint.mjs`, `export-xml.mjs` and `diff-map.mjs` read the
  `.mmd` files you pass and write only the output file you name.
- `changed-since.mjs` runs read-only git commands (`diff`, `rev-parse`, `cat-file`,
  `merge-base`, `ls-files`) in the repositories you pass with
  `--repo`. It uses `execFileSync`/`spawnSync` with argument arrays, so no shell is involved,
  and it validates commit SHAs before using them.
- `render.mjs` starts a local HTTP server bound to the loopback interface and a
  headless Chromium from the Mermaid fork you point it at with
  `BPMN_MERMAID_FORK`, to render one SVG.

`skill/scripts/vendor/bpmn-core.mjs` is a generated bundle; its source commit,
build settings and SHA-256 are in `skill/scripts/vendor/README.md`, so you can
rebuild it and compare.
