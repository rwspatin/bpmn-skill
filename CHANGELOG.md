# Changelog

All notable changes to this project are documented in this file. The format
is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and
this project uses [Semantic Versioning](https://semver.org/).

## [1.0.1] - 2026-10-02

### Fixed

- `validate.mjs`, `lint.mjs`, `diff-map.mjs` and `export-xml.mjs` crashed on
  Windows (`ERR_UNSUPPORTED_ESM_URL_SCHEME`): the vendored bundle was imported by
  a raw filesystem path; it is now imported through a `file://` URL.

### Added

- CI runs the tests on Windows and macOS as well as Linux.
- `skill/scripts/vendor/README.md`: where the vendored parser bundle comes from
  (fork commit, esbuild version, build settings), its SHA-256, and how to
  reproduce it byte for byte.
- `lib/rebuild.mjs` now prints the fork commit and the bundle's SHA-256.
- `SECURITY.md`: how to report a vulnerability privately and what each script
  executes.
- CI: a plugin security scan (HOL plugin scanner, min score 80, fails on high
  findings) and the test suite plus example validate/lint run on every push and
  pull request. Dependabot keeps the pinned GitHub Actions up to date.

## [1.0.0] - 2026-09-29

First versioned release. Everything below already existed at this point;
this entry captures where the plugin stood before version tracking started.

### Added

- **BPMN mapping skill** (`skill/SKILL.md`): reconstructs an application's
  business processes from its source code (routes/controllers, queue
  consumers, cron jobs, status enums, webhooks, payment/auth/email flows)
  and emits them as Mermaid `bpmn` DSL, per the modeling rules in
  `skill/references/mapping-playbook.md` and the DSL spec in
  `skill/references/dsl-spec.md`.
- **Validation with self-correcting errors** (`scripts/validate.mjs`): parses
  a diagram with the real Mermaid-BPMN parser and semantic validator and
  prints a catalogue of errors an agent can repair from and re-run until
  clean.
- **Style linting** (`scripts/lint.mjs`): a deterministic linter for the BPMN
  method/style rules (L1–L8 — question-labeled gateways, labeled and default
  branches, parallel split/join pairing, named start/end events and message
  flows, business-language labels), with `--json` output.
- **BPMN 2.0 XML export** (`scripts/export-xml.mjs`): exports a diagram as
  BPMN 2.0 XML with layout (BPMNDI), ready to open in bpmn.io or Camunda
  Modeler.
- **SVG rendering** (`scripts/render.mjs`): headless preview via the real
  Mermaid renderer (Playwright/Chromium) from a local checkout of the
  author's Mermaid fork (`rwspatin/mermaid`, branch `feat/bpmn-diagram`).
- **Incremental update mode**: `scripts/changed-since.mjs` diffs a map's
  recorded source commits against `HEAD` and reports which diagrams/rules a
  codebase change affects; `scripts/diff-map.mjs` semantically diffs two
  diagram versions by id (including "id churn" hints) so incremental
  re-traces stay reviewable instead of full regenerations.
- **Vendored parser bundle** (`scripts/vendor/bpmn-core.mjs`): a standalone,
  offline esbuild bundle of the fork's parser/validator/exporter, generated
  by `scripts/lib/rebuild.mjs` + `scripts/lib/build-core.mts`, so
  `validate.mjs`, `lint.mjs`, `export-xml.mjs`, `diff-map.mjs` and
  `changed-since.mjs` run with no build step and no network. Third-party
  code embedded in it is listed in `THIRD_PARTY_NOTICES.md`.
- **Claude Code plugin packaging**: `.claude-plugin/plugin.json` +
  `.claude-plugin/marketplace.json` make this repo installable as
  `bpmn-mapper@rwspatin` via `claude plugin marketplace add` +
  `claude plugin install`, with `plugin.json`'s `skills` field pointing at
  `./skill/` directly so no files move between the plugin and manual-symlink
  install paths.

### Changed

- Bundle size: `scripts/vendor/bpmn-core.mjs` is now built with esbuild
  `minify: true` (with `legalComments: 'eof'` so license notices survive)
  and `target: 'node22'`, and a build-time stub drops Mermaid's ~200KB of
  unused built-in colour themes (only `theme-default` is ever evaluated by
  this bundle's code paths — see the comment in
  `scripts/lib/build-core.mts`). This shrank the committed bundle from
  ~722KB to well under the 256KB size the plugin directory holds for manual
  review, with byte-identical `validate`/`lint`/`export-xml` output verified
  against the pre-minification baseline.

## Releasing

1. Bump `version` in `.claude-plugin/plugin.json` (semver — see the code
   comment there for what would make it a major bump, e.g. migrating the DSL
   to Mermaid's `bpmn-beta` syntax).
2. Add a new entry at the top of this file describing what changed.
3. Commit and push to `main`.
4. Optionally, tag the release so other plugins can pin to it:
   `claude plugin tag --push` (run from the plugin directory; creates and
   pushes a `bpmn-mapper--v<version>` git tag). Not required for users to
   get the update — `claude plugin update bpmn-mapper@rwspatin` (or
   auto-update, if a user has it on for this marketplace) picks up the new
   `version` as soon as it's pushed to `main`.
