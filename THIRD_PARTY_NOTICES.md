# Third-Party Notices

This repository's own code (the `bpmn-mapper` skill instructions, reference
docs, and scripts) is licensed under the MIT License — see `LICENSE`.

One file, `skill/scripts/vendor/bpmn-core.mjs`, is a compiled and minified
(esbuild) bundle: it is not hand-written, it is generated from
[`rwspatin/mermaid`](https://github.com/rwspatin/mermaid) (branch
`feat/bpmn-diagram`, a fork of [mermaid-js/mermaid](https://github.com/mermaid-js/mermaid))
by `skill/scripts/lib/build-core.mts`, and it embeds source from that fork
plus several of its runtime dependencies so that `validate.mjs` and
`export-xml.mjs` can run standalone, offline, with no build step. This
document lists every third-party package actually embedded in that bundle,
as verified against an esbuild `metafile` analysis of the build (the bundle
itself is minified, so it no longer carries the per-module source-path
comments an unminified esbuild bundle would; `metafile`, produced by the
same `build()` call with `metafile: true`, lists every input module and its
size independently of minification) cross-checked against the fork's
installed dependency versions. `legalComments: 'eof'` is set on the build so
license banners esbuild finds in bundled files (currently DOMPurify's and
lodash-es's) are preserved verbatim at the end of `bpmn-core.mjs` — see them
there. Nothing is listed here unless it is really present in the bundle.

## Bundled in `skill/scripts/vendor/bpmn-core.mjs`

### Mermaid (fork)

- **What**: the BPMN diagram source this skill's DSL is built on — parser,
  lexer, visitor (`packages/mermaid/src/diagrams/bpmn/**`), the BPMN
  semantic validator (`bpmnValidate.ts`), the BPMN 2.0 XML exporter
  (`export/**`), plus shared Mermaid infra pulled in transitively (config,
  themes, common db/parser helpers, logger).
- **Source**: https://github.com/rwspatin/mermaid (branch `feat/bpmn-diagram`),
  a fork of https://github.com/mermaid-js/mermaid.
- **License**: MIT.
- **Copyright**: Copyright (c) 2014 - 2022 Knut Sveidqvist.
- **Note**: the `bpmn` diagram type itself is the fork's addition and is not
  (yet) part of upstream Mermaid — see "Status & upstream tracking" in
  `README.md`. Everything else in this bundle (chevrotain, dayjs, dompurify,
  khroma, lodash-es) is an unmodified runtime dependency of Mermaid, pulled
  in because the bundled Mermaid modules import them. One exception:
  `skill/scripts/lib/build-core.mts` replaces Mermaid's `themes/index.js`
  (which eagerly imports all ~11 built-in colour themes, ~200KB) with a stub
  that keeps the real `theme-default` module unmodified — the only theme
  this bundle's code paths actually evaluate (see the comment at the top of
  that file) — and no-ops the other 10 themes' `getThemeVariables`, which
  `validate.mjs`/`lint.mjs`/`export-xml.mjs`/`diff-map.mjs` never call. Only
  `theme-default` still imports `khroma` (for its colour computations), so
  `khroma` stays bundled, just far smaller than before — it no longer also
  carries the colour logic the other 10 themes used.

### Chevrotain (+ `@chevrotain/gast`, `@chevrotain/regexp-to-ast`, `@chevrotain/utils`)

- **What**: the parser-generation toolkit used to build the BPMN grammar
  (lexer/parser). Version `11.1.2`.
- **Source**: https://github.com/Chevrotain/chevrotain
- **License**: Apache License 2.0.
- **Copyright**: Copyright (c) Chevrotain contributors (Shahar Soel and
  others).
- **Apache-2.0 NOTICE requirement**: Chevrotain's published packages do not
  ship a `NOTICE` file, so there is no upstream notice text to reproduce
  beyond the copyright and license above. If a future release of Chevrotain
  adds one, it must be reproduced here alongside this entry.

### dayjs

- **What**: date/time handling used by Mermaid's shared infrastructure.
  Version `1.11.21`.
- **Source**: https://github.com/iamkun/dayjs
- **License**: MIT.
- **Copyright**: Copyright (c) 2018-present, iamkun.

### dompurify

- **What**: HTML sanitization, pulled in transitively via Mermaid's common
  helpers. Version `3.4.12`.
- **Source**: https://github.com/cure53/DOMPurify
- **License**: dual-licensed `(MPL-2.0 OR Apache-2.0)`; this notice reproduces
  the Apache-2.0 option.
- **Copyright**: Copyright (c) 2015 Mario Heiderich.

### khroma

- **What**: color parsing/manipulation used by Mermaid's theme engine.
  Version `2.1.0`.
- **Source**: https://github.com/fabiospampinato/khroma
- **License**: MIT.
- **Copyright**: Copyright (c) 2019-present Fabio Spampinato, Andrew Maney.

### lodash-es

- **What**: general-purpose utility functions used throughout Mermaid's
  shared infrastructure. Version `4.17.23`.
- **Source**: https://github.com/lodash/lodash
- **License**: MIT.
- **Copyright**: Copyright OpenJS Foundation and other contributors
  (https://openjsf.org/). Based on Underscore.js, copyright Jeremy Ashkenas,
  DocumentCloud and Investigative Reporters & Editors.

## Full license texts

The license texts above (MIT and Apache-2.0) are standard; the canonical
copies are linked from each project's repository. This notices file
reproduces the required copyright/attribution lines rather than the full
license bodies, per standard practice for MIT (which requires the notice be
included, not necessarily the license text itself, in downstream notices
documents) and Apache-2.0 (which requires the License and, if present, a
NOTICE file — see the Chevrotain entry above).

## Not bundled

`skill/scripts/render.mjs` drives the fork's full, *built* Mermaid renderer
(via Playwright/headless Chromium) directly from a local checkout of
`rwspatin/mermaid` — it does not embed that code in this repository. That
renderer, its full dependency tree, and Playwright itself are therefore not
covered by this notices file; they remain under the fork's own licensing and
are only required (and only ever run from the user's own separately-cloned
copy) if you use `render.mjs`.
