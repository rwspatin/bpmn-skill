#!/usr/bin/env node
/**
 * changed-since.mjs <map-dir> --repo <name>=<path> [--repo ...] [--json]
 *
 * Update-mode scout. A map directory holds one or more `.mmd` diagrams (+ an
 * optional RULES.md). Each diagram records where it was traced from with
 * provenance header comments, one per source repo:
 *
 *   %% source: <repo-name> <commit-sha> <YYYY-MM-DD>
 *
 * For every recorded (repo, sha) this script runs `git diff --name-status
 * <sha> HEAD` in the repo passed with `--repo <name>=<path>` and reports:
 *   - per repo: current HEAD and the changed files (A/M/D/R/...);
 *   - AFFECTED diagrams: a changed file matches evidence of a RULES.md rule linked
 *     to the diagram, or a `%% evidence:` comment inside the diagram;
 *   - POSSIBLY AFFECTED diagrams: the diagram has no evidence at all (no linked
 *     rules, no evidence comments) and one of its source repos changed;
 *   - STALE rules: an evidence file was deleted or renamed away;
 *   - affected rules that are not linked to any diagram;
 *   - changed files matching NO evidence (possible new flows to consider), since
 *     the newest recorded sha of each repo (older changes were already reviewed);
 *   - evidence refs that match no tracked file at HEAD (typos / stale paths);
 *   - unaffected diagrams (leave them byte-identical).
 *
 * Only read-only git commands are used (rev-parse, cat-file, log, diff, ls-files). The map and
 * the repos are never modified.
 *
 *   exit 0 -> nothing affected
 *   exit 1 -> at least one diagram or rule affected (or stale)
 *   exit 2 -> usage error, missing --repo mapping, no provenance, or git error
 *
 * Evidence forms understood (RULES.md tables, list items, paragraphs, and
 * `%% evidence:` comments):
 *   `repo:path/to/File.ts:12-40`          repo-qualified, with or without lines
 *   `repo` `path/to/File.ts:12`; `Other.ts:3`   repo span, then paths inheriting it
 *   `path/to/File.ts:12`                  repo from the row / section heading, or
 *                                          the only source repo, else any repo
 * Paths are matched as a suffix on path-segment boundaries, so `File.ts` or
 * `to/File.ts` match `src/path/to/File.ts`; a multi-segment path may also start
 * after a '.' in a segment (`Domain/X.cs` matches `src/Acme.Domain/X.cs`, the usual
 * .NET project abbreviation). `...` and `**` match anything, `*` matches within
 * one segment, `{A,B}` is an alternation. Evidence must name files, not folders.
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, resolve, basename } from 'node:path';
import { execFileSync } from 'node:child_process';

// ---------------------------------------------------------------- args -------
const argv = process.argv.slice(2);
const usage = 'usage: changed-since.mjs <map-dir> --repo <name>=<path> [--repo <name>=<path> ...] [--json]';
let mapDir = null;
let jsonOut = false;
const repoPaths = new Map();
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--json') jsonOut = true;
  else if (a === '--repo' || a.startsWith('--repo=')) {
    const spec = a === '--repo' ? argv[++i] : a.slice('--repo='.length);
    const eq = spec ? spec.indexOf('=') : -1;
    if (eq <= 0) fail(`bad --repo '${spec ?? ''}', expected <name>=<path>`);
    repoPaths.set(spec.slice(0, eq), resolve(spec.slice(eq + 1)));
  } else if (a.startsWith('--')) fail(`unknown option ${a}`);
  else if (!mapDir) mapDir = resolve(a);
  else fail(`unexpected argument ${a}`);
}
if (!mapDir) fail('missing <map-dir>');
if (!existsSync(mapDir) || !statSync(mapDir).isDirectory()) fail(`map dir not found: ${mapDir}`);

function fail(msg) {
  console.error(`changed-since: ${msg}\n${usage}`);
  process.exit(2);
}

const warnings = [];

// --------------------------------------------------------- diagrams ----------
const SOURCE_RE = /^\s*%%\s*source:\s*(\S+)\s+([0-9a-f]{7,40})\b(?:\s+(\d{4}-\d{2}-\d{2}))?/i;
const EVIDENCE_COMMENT_RE = /^\s*%%\s*evidence(?:\s+([A-Za-z_][\w-]*))?\s*:\s*(.+)$/i;
const NODE_DECL_RE = /^\s*(?:start|end|intermediate|task(?::\w+)?|usertask|servicetask|scripttask|activity|xor|and|or|decision|data)\b(?:\s+(?:message|timer))?\s+([A-Za-z_][\w-]*)/i;

const mmdFiles = readdirSync(mapDir).filter((f) => f.endsWith('.mmd')).sort();
if (mmdFiles.length === 0) fail(`no .mmd files in ${mapDir}`);

const diagrams = mmdFiles.map((file) => {
  const text = readFileSync(join(mapDir, file), 'utf8');
  const sources = [];
  const evidenceComments = [];
  const nodeIds = new Set();
  text.split('\n').forEach((line, idx) => {
    const s = line.match(SOURCE_RE);
    if (s) sources.push({ repo: s[1], sha: s[2], date: s[3] ?? null, line: idx + 1 });
    const e = line.match(EVIDENCE_COMMENT_RE);
    if (e) evidenceComments.push({ element: e[1] ?? null, text: e[2], line: idx + 1 });
    const n = line.match(NODE_DECL_RE);
    if (n) nodeIds.add(n[1]);
  });
  const name = basename(file, '.mmd');
  const prefix = name.match(/^(\d+)[-_ ]/)?.[1] ?? null;
  return { name, file, prefix, sources, evidenceComments, nodeIds, ownSources: sources.length > 0 };
});

// Diagrams without their own provenance inherit the map-level union.
const mapSources = new Map(); // repo -> Set(sha)
for (const d of diagrams) for (const s of d.sources) {
  if (!mapSources.has(s.repo)) mapSources.set(s.repo, new Set());
  mapSources.get(s.repo).add(s.sha);
}
if (mapSources.size === 0) {
  fail(`no '%% source: <repo> <sha> <date>' lines in any .mmd in ${mapDir} — record provenance first (see references/dsl-spec.md)`);
}
for (const d of diagrams) {
  if (d.ownSources) continue;
  warnings.push(`${d.file} has no '%% source:' line — using the map-level sources`);
  for (const [repo, shas] of mapSources) for (const sha of shas) d.sources.push({ repo, sha, date: null, inherited: true });
}
const knownRepos = new Set([...mapSources.keys()]);
for (const r of repoPaths.keys()) if (!knownRepos.has(r)) warnings.push(`--repo ${r} is not a source of this map (ignored)`);
for (const r of knownRepos) if (!repoPaths.has(r)) fail(`no --repo given for source repo '${r}' (pass --repo ${r}=<path>)`);

// ------------------------------------------------------------- git -----------
function git(repoDir, args) {
  try {
    return execFileSync('git', ['-C', repoDir, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024 });
  } catch (error) {
    const msg = (error.stderr || error.message || '').toString().trim().split('\n')[0];
    throw new Error(msg);
  }
}

const repos = new Map(); // name -> { path, head, diffs: Map(sha -> changes[]) }
for (const [name, shas] of mapSources) {
  const path = repoPaths.get(name);
  let head;
  try {
    if (git(path, ['rev-parse', '--is-inside-work-tree']).trim() !== 'true') throw new Error('not a work tree');
    head = git(path, ['rev-parse', 'HEAD']).trim();
  } catch (error) {
    fail(`repo '${name}' at ${path} is not a git repository (${error.message})`);
  }
  const diffs = new Map();
  for (const sha of shas) {
    try {
      git(path, ['cat-file', '-e', `${sha}^{commit}`]);
    } catch {
      fail(`repo '${name}': unknown commit ${sha} recorded in '%% source:' (fetch it, or fix the sha)`);
    }
    let out;
    try {
      out = git(path, ['diff', '--name-status', '-M', '-z', sha, 'HEAD']);
    } catch (error) {
      fail(`repo '${name}': git diff ${sha} HEAD failed (${error.message})`);
    }
    diffs.set(sha, parseNameStatusZ(out));
  }
  // Newest recorded sha (by committer time): changes before it were already
  // reviewed by the update that recorded it, so "unmatched" files start there.
  let newest = null;
  let newestTime = -1;
  for (const sha of shas) {
    const t = Number(git(path, ['log', '-1', '--format=%ct', sha]).trim());
    if (t > newestTime) { newest = sha; newestTime = t; }
  }
  repos.set(name, { name, path, head, diffs, newest });
}

function parseNameStatusZ(out) {
  const parts = out.split('\0');
  const changes = [];
  for (let i = 0; i < parts.length && parts[i]; ) {
    const status = parts[i++];
    const code = status[0];
    if (code === 'R' || code === 'C') {
      const oldPath = parts[i++];
      const path = parts[i++];
      changes.push({ status: code, path, oldPath });
    } else {
      changes.push({ status: code, path: parts[i++] });
    }
  }
  return changes;
}

// Union of all changes for a repo (dedupe by status+path).
function unionChanges(repoName) {
  const r = repos.get(repoName);
  const seen = new Map();
  for (const changes of r.diffs.values()) for (const c of changes) seen.set(`${c.status}\t${c.oldPath ?? ''}\t${c.path}`, c);
  return [...seen.values()];
}
// Changes relevant to diagram d for repo: its own sha when it has one, else the union.
function changesFor(d, repoName) {
  const shas = d.sources.filter((s) => s.repo === repoName).map((s) => s.sha);
  if (shas.length === 0) return unionChanges(repoName);
  const r = repos.get(repoName);
  const seen = new Map();
  for (const sha of shas) for (const c of r.diffs.get(sha)) seen.set(`${c.status}\t${c.oldPath ?? ''}\t${c.path}`, c);
  return [...seen.values()];
}

// -------------------------------------------------------- evidence -----------
const LINE_SUFFIX_RE = /(?::(?:L?\d[\d\s,+\-–]*)|#L\d[\dL\-]*)$/;
// Evidence points at FILES: the last segment needs a lowercase-initial extension
// (`.ts`, `.cs`, `.json`, `.{ts,tsx}`...), a glob, or a well-known extensionless
// name. That rejects prose that merely contains '/' (branch names, routes such as
// `/orders`, dates) and member access like `Policy.Decide`.
const EXTENSIONLESS = /^(Dockerfile|Makefile|Procfile|Gemfile|Rakefile|Jenkinsfile|Containerfile)$/;
function looksLikePath(p) {
  if (!p || /\s/.test(p)) return false;
  if (!/^[\w.\-/{}*,+@[\]$~]+$/.test(p)) return false;
  const last = p.split('/').pop();
  return /\.[a-z][A-Za-z0-9]{0,9}$/.test(last) || /\.\{[a-z]/.test(last) || /\*/.test(last) || EXTENSIONLESS.test(last);
}
function stripLines(s) {
  return s.replace(LINE_SUFFIX_RE, '');
}
// Parse a single token (backtick span or plain word) into an evidence ref, or
// a repo marker, or nothing.
// strict (plain-text words, no backticks): require a '/', a :line suffix or a
// repo: prefix, so prose like "Node.js" is not taken for a path.
function parseToken(tok, strict = false) {
  const t = tok.trim().replace(/^\.\//, '');
  if (!t) return null;
  if (knownRepos.has(t)) return { repoMarker: t };
  // repo:path[:lines]
  const m = t.match(/^([\w.-]+):(.+)$/);
  if (m && !m[1].includes('/') && !/^\d/.test(m[2])) {
    const p = stripLines(m[2]);
    if (looksLikePath(p) && (knownRepos.has(m[1]) || !/\.[A-Za-z]/.test(m[1]))) return { repo: m[1], pattern: p };
  }
  const p = stripLines(t);
  if (looksLikePath(p) && (!strict || p.includes('/') || p !== t)) return { repo: null, pattern: p };
  return null;
}
// Extract evidence refs from free text. Backtick spans are atomic tokens; if the
// text has none, scan plain words (repo:path:line or path:line forms).
function extractEvidence(text, contextRepo) {
  const refs = [];
  let current = contextRepo;
  const spans = [...text.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const strict = spans.length === 0;
  const tokens = strict ? text.split(/[\s;()]+/).map((w) => w.replace(/[,.]+$/, '')).filter(Boolean) : spans;
  for (const tok of tokens) {
    const r = parseToken(tok, strict);
    if (!r) continue;
    if (r.repoMarker) {
      current = r.repoMarker;
      continue;
    }
    refs.push({ repo: r.repo ?? current ?? null, pattern: r.pattern, raw: tok });
  }
  return refs;
}
function globToRegex(pattern) {
  const p = pattern.replace(/^\/+/, '');
  let out = '';
  for (let i = 0; i < p.length; ) {
    if (p.startsWith('...', i)) { out += '.*'; i += 3; continue; }
    if (p.startsWith('**', i)) { out += '.*'; i += 2; continue; }
    const ch = p[i];
    if (ch === '*') { out += '[^/]*'; i++; continue; }
    if (ch === '{') {
      const close = p.indexOf('}', i);
      if (close > i) {
        out += `(?:${p.slice(i + 1, close).split(',').map(escapeRe).join('|')})`;
        i = close + 1;
        continue;
      }
    }
    out += escapeRe(ch);
    i++;
  }
  // A multi-segment path may start inside a dotted segment: .NET-style evidence
  // abbreviates `src/Core/Acme.Orders.Domain/Quotes/Quote.cs` as `Domain/Quotes/Quote.cs`.
  // A bare file name must match a whole segment (`service.ts` != `order.service.ts`).
  const lead = p.includes('/') ? '(?:^|/|\\.)' : '(?:^|/)';
  return new RegExp(`${lead}${out}$`);
}
function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ---------------------------------------------------------- RULES.md ---------
const rules = [];
const rulesPath = join(mapDir, 'RULES.md');
const hasRules = existsSync(rulesPath);
const diagramByName = new Map(diagrams.map((d) => [d.name, d]));
const diagramByPrefix = new Map();
for (const d of diagrams) if (d.prefix !== null) {
  const key = String(Number(d.prefix));
  if (diagramByPrefix.has(key)) diagramByPrefix.set(key, null); // ambiguous
  else diagramByPrefix.set(key, d);
}
// A diagram is named by its basename in backticks anywhere, or bare when the name
// is distinctive (has a digit, '-' or '_') or when `bare` is set (diagram column),
// so a plain word like "order" in prose does not link a rule to diagram order.mmd.
function diagramsNamedIn(text, bare = false) {
  const found = [];
  for (const d of diagrams) {
    const name = escapeRe(d.name);
    const ticked = new RegExp('`' + name + '(?:\\.mmd)?`');
    const plain = new RegExp(`(?:^|[^\\w-])${name}(?:\\.mmd)?(?![\\w-])`);
    if (ticked.test(text) || ((bare || /[\d_-]/.test(d.name)) && plain.test(text))) found.push(d);
  }
  return found;
}
function repoNamedIn(text) {
  for (const m of text.matchAll(/`([^`]+)`/g)) if (knownRepos.has(m[1].trim())) return m[1].trim();
  return null;
}
const splitRow = (line) => {
  const cells = [];
  let cur = '';
  let inTick = false;
  const body = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    if (ch === '`') inTick = !inTick;
    if (ch === '\\' && body[i + 1] === '|') { cur += '|'; i++; continue; }
    if (ch === '|' && !inTick) { cells.push(cur.trim()); cur = ''; continue; }
    cur += ch;
  }
  cells.push(cur.trim());
  return cells;
};
const isSeparatorRow = (line) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(line);
const RULE_ID_RE = /^\**([A-Z][A-Z0-9]{0,5}-?\d+[a-z]?)\**$/;

if (hasRules) {
  const lines = readFileSync(rulesPath, 'utf8').split('\n');
  const section = []; // stack by heading level: { level, diagrams, repo }
  let table = null; // { evidenceCols, diagramCols }
  let inFence = false;
  const sectionContext = () => {
    let ds = [];
    let repo = null;
    for (const s of section) {
      if (s.diagrams.length) ds = s.diagrams;
      if (s.repo) repo = s.repo;
    }
    return { diagrams: ds, repo };
  };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNo = i + 1;
    if (/^\s*```/.test(line)) { inFence = !inFence; continue; }
    if (inFence) continue;
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      while (section.length && section[section.length - 1].level >= level) section.pop();
      section.push({ level, diagrams: diagramsNamedIn(h[2]), repo: repoNamedIn(h[2]) });
      table = null;
      continue;
    }
    const ctx = sectionContext();
    if (/^\s*\|/.test(line)) {
      if (isSeparatorRow(line)) continue;
      if (lines[i + 1] !== undefined && isSeparatorRow(lines[i + 1])) {
        const headers = splitRow(line).map((c) => c.toLowerCase());
        table = {
          evidenceCols: headers.map((c, k) => (/evidence|source|code|where|ref/.test(c) ? k : -1)).filter((k) => k >= 0),
          diagramCols: headers.map((c, k) => (/diagram|bpmn|flow/.test(c) ? k : -1)).filter((k) => k >= 0),
        };
        continue;
      }
      const cells = splitRow(line);
      const evText = table && table.evidenceCols.length ? table.evidenceCols.map((k) => cells[k] ?? '').join(' ; ') : line;
      const evidence = extractEvidence(evText, ctx.repo); // repo spans in the cell switch the repo inline
      if (evidence.length === 0) continue;
      const id = cells[0]?.match(RULE_ID_RE)?.[1] ?? `RULES.md:${lineNo}`;
      let linked = diagramsNamedIn(line);
      const elements = new Set();
      if (table) for (const k of table.diagramCols) {
        const cell = cells[k] ?? '';
        linked.push(...diagramsNamedIn(cell, true));
        const pm = cell.match(/^\s*`?(\d+)\b/);
        if (pm && diagramByPrefix.get(String(Number(pm[1])))) linked.push(diagramByPrefix.get(String(Number(pm[1]))));
        for (const w of cell.replace(/"[^"]*"/g, ' ').matchAll(/[A-Za-z_][\w-]*/g)) elements.add(w[0]);
      }
      if (linked.length === 0) linked = ctx.diagrams;
      linked = [...new Set(linked)];
      const elementsByDiagram = {};
      for (const d of linked) {
        const ids = [...elements].filter((e) => d.nodeIds.has(e));
        if (ids.length) elementsByDiagram[d.name] = ids;
      }
      rules.push({ id, line: lineNo, diagrams: linked, elementsByDiagram, evidence });
      continue;
    }
    table = null;
    if (!line.trim()) continue;
    const evidence = extractEvidence(line, ctx.repo);
    if (evidence.length === 0) continue;
    const linked = diagramsNamedIn(line);
    rules.push({ id: `RULES.md:${lineNo}`, line: lineNo, diagrams: linked.length ? linked : ctx.diagrams, elementsByDiagram: {}, evidence });
  }
}

// Evidence comments inside diagrams act as rules linked to that diagram.
for (const d of diagrams) for (const c of d.evidenceComments) {
  const evidence = extractEvidence(c.text, null);
  if (evidence.length === 0) {
    warnings.push(`${d.file}:${c.line} '%% evidence:' comment has no recognisable path`);
    continue;
  }
  rules.push({ id: `${d.file}:${c.line}`, line: c.line, diagrams: [d], elementsByDiagram: c.element ? { [d.name]: [c.element] } : {}, evidence, comment: true });
}

// Resolve refs: which source repos can each ref belong to.
const singleRepo = knownRepos.size === 1 ? [...knownRepos][0] : null;
let unknownRepoRefs = 0;
for (const r of rules) for (const ev of r.evidence) {
  ev.regex = globToRegex(ev.pattern);
  if (ev.repo && !knownRepos.has(ev.repo)) {
    ev.repos = [];
    unknownRepoRefs++;
  } else {
    ev.repos = ev.repo ? [ev.repo] : singleRepo ? [singleRepo] : [...knownRepos];
  }
}
if (unknownRepoRefs) warnings.push(`${unknownRepoRefs} evidence ref(s) name a repo with no '%% source:' line — not checked`);

// ------------------------------------------------------------ matching -------
const matchesChange = (ev, c) => ev.regex.test(c.path) || (c.oldPath && ev.regex.test(c.oldPath));
const goneStatus = (ev, c) => c.status === 'D' || (c.status === 'R' && c.oldPath && ev.regex.test(c.oldPath) && !ev.regex.test(c.path));

const affected = new Map(); // diagram name -> { diagram, reasons: [], elements: Set }
const affectedRules = new Map(); // rule id -> { rule, hits: [] }
const staleRules = new Map();
const matchedChangeKeys = new Set();
const changeKey = (repo, c) => `${repo}\t${c.status}\t${c.oldPath ?? ''}\t${c.path}`;

for (const rule of rules) {
  const targets = rule.diagrams.length ? rule.diagrams : [null];
  for (const d of targets) for (const ev of rule.evidence) for (const repo of ev.repos) {
    const changes = d ? changesFor(d, repo) : unionChanges(repo);
    for (const c of changes) {
      if (!matchesChange(ev, c)) continue;
      matchedChangeKeys.add(changeKey(repo, c));
      const hit = { repo, status: c.status, path: c.path, oldPath: c.oldPath ?? null, evidence: ev.raw };
      if (!affectedRules.has(rule.id)) affectedRules.set(rule.id, { rule, hits: [] });
      const ar = affectedRules.get(rule.id);
      if (!ar.hits.some((h) => h.repo === hit.repo && h.path === hit.path && h.status === hit.status)) ar.hits.push(hit);
      if (goneStatus(ev, c)) {
        if (!staleRules.has(rule.id)) staleRules.set(rule.id, { rule, hits: [] });
        const sr = staleRules.get(rule.id);
        if (!sr.hits.some((h) => h.path === hit.path)) sr.hits.push(hit);
      }
      if (d) {
        if (!affected.has(d.name)) affected.set(d.name, { diagram: d, rules: new Set(), elements: new Set(), files: new Set() });
        const a = affected.get(d.name);
        a.rules.add(rule.id);
        for (const e of rule.elementsByDiagram[d.name] ?? []) a.elements.add(e);
        a.files.add(`${repo}:${c.path}`);
      }
    }
  }
}
// Also mark changes matched by rules for repos they were not diffed against (e.g.
// a diagram-scoped sha) so the "unmatched" list uses all evidence, not only hits.
for (const [repo] of repos) for (const c of unionChanges(repo)) {
  if (matchedChangeKeys.has(changeKey(repo, c))) continue;
  if (rules.some((r) => r.evidence.some((ev) => ev.repos.includes(repo) && matchesChange(ev, c)))) matchedChangeKeys.add(changeKey(repo, c));
}

// Evidence refs that match no tracked file at HEAD: typo, parsing noise, or a file
// that was already gone before the recorded sha. Informational (exit code unchanged).
const trackedFiles = new Map();
for (const [name, r] of repos) {
  try {
    trackedFiles.set(name, git(r.path, ['ls-files', '-z']).split('\0').filter(Boolean));
  } catch (error) {
    fail(`repo '${name}': git ls-files failed (${error.message})`);
  }
}
const unresolvedEvidence = [];
for (const rule of rules) for (const ev of rule.evidence) {
  if (ev.repos.length === 0) continue;
  const found = ev.repos.some((repo) => trackedFiles.get(repo).some((f) => ev.regex.test(f)));
  if (!found) unresolvedEvidence.push({ rule: rule.id, line: rule.line, repo: ev.repo, evidence: ev.raw });
}

const diagramHasEvidence = (d) => rules.some((r) => r.diagrams.includes(d));
const possiblyAffected = [];
for (const d of diagrams) {
  if (affected.has(d.name) || diagramHasEvidence(d)) continue;
  const changedRepos = [...new Set(d.sources.map((s) => s.repo))]
    .map((repo) => ({ repo, count: changesFor(d, repo).length }))
    .filter((x) => x.count > 0);
  if (changedRepos.length) possiblyAffected.push({ diagram: d, changedRepos });
}
const unlinkedAffectedRules = [...affectedRules.values()].filter((a) => a.rule.diagrams.length === 0);
const unmatched = [];
for (const [repo, r] of repos) for (const c of r.diffs.get(r.newest)) {
  if (!matchedChangeKeys.has(changeKey(repo, c))) unmatched.push({ repo, ...c });
}
const unaffected = diagrams.filter((d) => !affected.has(d.name) && !possiblyAffected.some((p) => p.diagram === d));

// ------------------------------------------------------------- output --------
const evidenceCount = rules.reduce((n, r) => n + r.evidence.length, 0);
const tableRules = rules.filter((r) => !r.comment);
const result = {
  map: mapDir,
  rulesFile: hasRules ? rulesPath : null,
  stats: {
    diagrams: diagrams.length,
    rules: tableRules.length,
    rulesLinkedToDiagram: tableRules.filter((r) => r.diagrams.length).length,
    evidenceComments: rules.length - tableRules.length,
    evidenceRefs: evidenceCount,
    evidenceRefsResolved: evidenceCount - unresolvedEvidence.length - unknownRepoRefs,
  },
  repos: [...repos.values()].map((r) => {
    const changes = unionChanges(r.name);
    return { name: r.name, path: r.path, base: [...r.diffs.keys()], head: r.head, changes };
  }),
  affected: [...affected.values()].map((a) => ({
    diagram: a.diagram.name,
    file: a.diagram.file,
    rules: [...a.rules],
    elements: [...a.elements],
    files: [...a.files],
  })),
  possiblyAffected: possiblyAffected.map((p) => ({
    diagram: p.diagram.name,
    file: p.diagram.file,
    reason: 'no evidence linked to this diagram; a source repo changed',
    changedRepos: p.changedRepos,
  })),
  affectedRules: [...affectedRules.values()].map((a) => ({ id: a.rule.id, line: a.rule.line, diagrams: a.rule.diagrams.map((d) => d.name), hits: a.hits })),
  unlinkedAffectedRules: unlinkedAffectedRules.map((a) => ({ id: a.rule.id, line: a.rule.line, hits: a.hits })),
  staleRules: [...staleRules.values()].map((s) => ({ id: s.rule.id, line: s.rule.line, diagrams: s.rule.diagrams.map((d) => d.name), hits: s.hits })),
  unmatchedChanges: unmatched,
  unresolvedEvidence,
  unaffected: unaffected.map((d) => d.name),
  warnings,
};
const somethingAffected = result.affected.length + result.possiblyAffected.length + result.affectedRules.length > 0;

if (jsonOut) {
  console.log(JSON.stringify(result, null, 2));
} else {
  const short = (s) => s.slice(0, 10);
  const fmtChange = (c) => (c.status === 'R' || c.status === 'C' ? `${c.status}  ${c.oldPath} -> ${c.path}` : `${c.status}  ${c.path}`);
  console.log(`map ${mapDir}`);
  console.log(`  ${result.stats.diagrams} diagram(s); ${hasRules ? `${result.stats.rules} rule(s) with evidence in RULES.md (${result.stats.rulesLinkedToDiagram} linked to a diagram)` : 'no RULES.md'}; ${result.stats.evidenceComments} evidence comment(s); ${evidenceCount} evidence ref(s)`);
  for (const r of result.repos) {
    const counts = {};
    for (const c of r.changes) counts[c.status] = (counts[c.status] ?? 0) + 1;
    const summary = Object.entries(counts).map(([k, v]) => `${k}${v}`).join(' ') || 'no changes';
    console.log(`repo ${r.name}  ${r.base.map(short).join(',')}..${short(r.head)}  ${r.changes.length} file(s) changed (${summary})`);
  }
  if (result.affected.length) {
    console.log('\nAFFECTED diagrams (re-trace these):');
    for (const a of result.affected) {
      console.log(`  ${a.file}  rules: ${a.rules.join(', ')}${a.elements.length ? `  elements: ${a.elements.join(', ')}` : ''}`);
      for (const f of a.files) console.log(`      changed: ${f}`);
    }
  }
  if (result.possiblyAffected.length) {
    console.log('\nPOSSIBLY AFFECTED diagrams (no evidence to narrow it down — review against the diff):');
    for (const p of result.possiblyAffected) console.log(`  ${p.file}  ${p.changedRepos.map((x) => `${x.repo}: ${x.count} file(s)`).join('; ')}`);
  }
  if (result.staleRules.length) {
    console.log('\nSTALE rules (evidence file deleted or renamed — update or remove the row):');
    for (const s of result.staleRules) for (const h of s.hits) console.log(`  ${s.id} (RULES line ${s.line})  ${h.repo}  ${fmtChange(h)}`);
  }
  if (result.unlinkedAffectedRules.length) {
    console.log('\nAffected rules not linked to any diagram (update RULES.md):');
    for (const u of result.unlinkedAffectedRules) console.log(`  ${u.id}  ${u.hits.map((h) => `${h.repo}:${h.path}`).join(', ')}`);
  }
  if (result.unmatchedChanges.length) {
    console.log(`\nChanged files matching NO rule (${result.unmatchedChanges.length}) — check whether they introduce a new flow:`);
    if (result.unmatchedChanges.length <= 40) {
      for (const u of result.unmatchedChanges) console.log(`  ${u.repo}  ${fmtChange(u)}`);
    } else {
      // Too many to list usefully: group by repo + directory (--json has the full list).
      const groups = new Map();
      for (const u of result.unmatchedChanges) {
        const dir = u.path.includes('/') ? u.path.slice(0, u.path.lastIndexOf('/') + 1) : './';
        const key = `${u.repo}  ${dir}`;
        if (!groups.has(key)) groups.set(key, {});
        groups.get(key)[u.status] = (groups.get(key)[u.status] ?? 0) + 1;
      }
      for (const [key, counts] of groups) console.log(`  ${key}  (${Object.entries(counts).map(([k, v]) => `${k}${v}`).join(' ')})`);
      console.log('  (grouped by directory; --json lists every file)');
    }
  }
  if (unresolvedEvidence.length) {
    console.log(`\nEvidence refs matching no file at HEAD (${unresolvedEvidence.length}) — fix the path, or drop it if not a path:`);
    for (const u of unresolvedEvidence) console.log(`  ${u.rule}  ${u.repo ? `${u.repo}: ` : ''}${u.evidence}`);
  }
  console.log(`\nunaffected (leave byte-identical): ${result.unaffected.join(', ') || '(none)'}`);
  for (const w of warnings) console.log(`warning: ${w}`);
  console.log(somethingAffected ? '\nAFFECTED' : '\nUP TO DATE');
}
process.exit(somethingAffected ? 1 : 0);
