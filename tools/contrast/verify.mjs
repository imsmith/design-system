#!/usr/bin/env node
// Contrast verifier — checks tokens/color/themes.edn against the adopted APCA
// thresholds using the apca-w3 reference implementation.
//
//   cd tools/contrast && npm install && node verify.mjs
//
// Reads the edn directly so it can never drift from the source of truth.
// Exits non-zero on any failure (CI-friendly).

import { calcAPCA } from 'apca-w3';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const ednPath = resolve(here, '../../tokens/color/themes.edn');
const edn = readFileSync(ednPath, 'utf8');

// Parse the flat :dark / :light role maps in document order:
// tron(dark,light), matrix(dark,light), compaq(dark,light).
const order = [
  ['tron', 'dark'], ['tron', 'light'],
  ['matrix', 'dark'], ['matrix', 'light'],
  ['compaq', 'dark'], ['compaq', 'light'],
];
const blocks = [...edn.matchAll(/:(?:dark|light)\s*\{([^}]*)\}/g)].map(m => m[1]);
if (blocks.length !== 6) {
  console.error(`Expected 6 variant maps, found ${blocks.length}. Parser/edn mismatch.`);
  process.exit(2);
}
const variants = {};
blocks.forEach((body, i) => {
  const roles = {};
  for (const m of body.matchAll(/:([a-z-]+)\s+"(#[0-9A-Fa-f]+)"/g)) roles[m[1]] = m[2];
  variants[order[i].join('/')] = roles;
});

// role, against, label, minLc
const pairs = [
  ['text', 'bg', 'body text/bg', 75],
  ['text', 'surface', 'body text/surface', 75],
  ['muted', 'bg', 'muted/bg', 60],
  ['muted', 'surface', 'muted/surface', 60],
  ['border', 'surface', 'border/surface', 30],
  ['border', 'bg', 'border/bg', 30],
  ['accent', 'bg', 'accent fill/bg', 30],
  ['on-accent', 'accent', 'on-accent label/accent', 45],
];

const mag = (c, bg) => Math.abs(calcAPCA(c, bg));
const pad = (s, n) => String(s).padEnd(n);
let fails = 0;

for (const [name, roles] of Object.entries(variants)) {
  console.log(`\n== ${name} ==`);
  for (const [tr, br, lbl, min] of pairs) {
    if (!roles[tr] || !roles[br]) { console.log(`  ${pad(lbl, 24)} (missing role)`); fails++; continue; }
    const v = mag(roles[tr], roles[br]);
    const ok = v >= min;
    if (!ok) fails++;
    console.log(`  ${pad(lbl, 24)} Lc ${pad(v.toFixed(0), 4)} need ${pad(min, 3)} ${ok ? 'PASS' : '**FAIL**'}`);
  }
}
console.log(`\nTotal failures: ${fails}`);
process.exit(fails ? 1 : 0);
