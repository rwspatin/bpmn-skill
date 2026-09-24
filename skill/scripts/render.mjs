#!/usr/bin/env node
/**
 * render.mjs <file.mmd> <out.svg>
 *
 * Headless SVG render of a BPMN DSL file using the fork's *built* Mermaid bundle
 * (event/gateway glyphs, swimlanes, themed edges — the real on-canvas look).
 *
 * Unlike validate/export (which use the vendored self-contained parser bundle),
 * rendering needs the full renderer + a browser, so this serves the fork's built
 * `dist/` over a short-lived local HTTP server (so ESM chunk imports resolve
 * same-origin — Chromium blocks file:// module imports) and drives headless
 * Chromium via the fork's Playwright.
 *
 * Requirements:
 *   - Node >= 22
 *   - The fork checked out and BUILT: cd <fork> && pnpm build:mermaid
 *   - BPMN_MERMAID_FORK env var, or the default path below.
 */
import { readFileSync, writeFileSync, createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { resolve, join, normalize, extname } from 'node:path';
import { pathToFileURL } from 'node:url';

const FORK = process.env.BPMN_MERMAID_FORK || '/Users/rwspatin/git/personal/mermaid';
const [file, out] = process.argv.slice(2);
if (!file || !out) {
  console.error('usage: render.mjs <file.mmd> <out.svg>');
  process.exit(2);
}

const dist = resolve(FORK, 'packages/mermaid/dist');
if (!existsSync(join(dist, 'mermaid.esm.mjs'))) {
  console.error(`Built Mermaid not found at ${dist}. Run: cd ${FORK} && pnpm build:mermaid`);
  process.exit(2);
}

const source = readFileSync(file, 'utf8');

const MIME = { '.mjs': 'text/javascript', '.js': 'text/javascript', '.html': 'text/html', '.map': 'application/json', '.css': 'text/css' };
const HTML = `<!doctype html><html><body><div id="root"></div>
  <script type="module">
    import mermaid from '/mermaid.esm.mjs';
    window.__render = async (src) => {
      await mermaid.initialize({ startOnLoad: false, securityLevel: 'loose' });
      const { svg } = await mermaid.render('bpmnRender', src, document.getElementById('root'));
      return svg;
    };
    window.__ready = true;
  </script></body></html>`;

const server = createServer((req, res) => {
  const url = decodeURIComponent((req.url || '/').split('?')[0]);
  if (url === '/' || url === '/index.html') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(HTML);
    return;
  }
  const filePath = normalize(join(dist, url));
  if (!filePath.startsWith(dist) || !existsSync(filePath) || !statSync(filePath).isFile()) {
    res.writeHead(404);
    res.end('not found');
    return;
  }
  res.writeHead(200, { 'content-type': MIME[extname(filePath)] || 'application/octet-stream' });
  createReadStream(filePath).pipe(res);
});

await new Promise((r) => server.listen(0, '127.0.0.1', r));
const port = server.address().port;

const pw = await import(pathToFileURL(resolve(FORK, 'node_modules/playwright/index.js')).href);
const chromium = pw.chromium ?? pw.default?.chromium;
if (!chromium) {
  console.error('Could not load Playwright chromium from the fork.');
  process.exit(2);
}

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e.message || e)));
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'load' });
  await page.waitForFunction('window.__ready === true', { timeout: 20000 }).catch(() => {
    throw new Error('mermaid failed to load' + (errors.length ? `: ${errors[0]}` : ''));
  });
  const svg = await page.evaluate((src) => window.__render(src), source);
  if (!svg || !svg.includes('<svg')) {
    throw new Error('render produced no SVG' + (errors.length ? `: ${errors[0]}` : ''));
  }
  writeFileSync(out, svg);
  console.log(`wrote ${out} (${svg.length} bytes)`);
} finally {
  await browser.close();
  server.close();
}
