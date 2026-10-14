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
  ['text', 'surface-raised', 'body text/surface-raised', 75],
  ['muted', 'surface-raised', 'muted/surface-raised', 60],
  ['muted', 'bg', 'muted/bg', 60],
  ['muted', 'surface', 'muted/surface', 60],
  ['border', 'surface', 'border/surface', 30],
  ['border', 'bg', 'border/bg', 30],
  ['accent', 'bg', 'accent fill/bg', 30],
  ['on-accent', 'accent', 'on-accent label/accent', 45],
];

// Data color is theme-invariant. Status is measured as a fill (on-status label)
// and as an outline on every dark theme — both hard. TLP on black is advisory
// only: the values are locked by the standard.
const hexes = (p) => [...readFileSync(resolve(here, p), 'utf8').matchAll(/:(?:step|name)\s+:?"?([A-Za-z:+-]+)"?[^\n]*?:hex24\s+"(#[0-9A-Fa-f]+)"(?:\s+:on-status\s+"(#[0-9A-Fa-f]+)")?/g)].map(m => [m[1], m[2], m[3]]);
const statusRamp = hexes('../../tokens/color/status.edn');
const tlp = hexes('../../tokens/color/markings.edn');
const tlpBg = readFileSync(resolve(here, '../../tokens/color/markings.edn'), 'utf8').match(/:background\s+"(#[0-9A-Fa-f]+)"/)[1];
if (statusRamp.length !== 5 || tlp.length !== 5) {
  console.error(`Expected 5 status steps and 5 TLP markings, found ${statusRamp.length}/${tlp.length}.`);
  process.exit(2);
}

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
// Status FILL treatment (hard): on-status label on each step, legal everywhere.
console.log(`\n== status fill: on-status label / step ==`);
for (const [step, hex, on] of statusRamp) {
  if (!on) { console.log(`  ${pad(step, 24)} (missing :on-status)`); fails++; continue; }
  const v = mag(on, hex), ok = v >= 45;
  if (!ok) fails++;
  console.log(`  ${pad(step, 24)} Lc ${pad(v.toFixed(0), 4)} need 45  ${ok ? 'PASS' : '**FAIL**'}`);
}

// Status OUTLINE treatment (hard): every step as text/border on every DARK
// variant's bg and surface. Light surfaces are fill-only, so not measured.
for (const [name, roles] of Object.entries(variants)) {
  if (!name.endsWith('/dark')) continue;
  console.log(`\n== status outline on ${name} ==`);
  for (const [step, hex] of statusRamp) for (const br of ['bg', 'surface']) {
    const v = mag(hex, roles[br]), ok = v >= 45;
    if (!ok) fails++;
    console.log(`  ${pad(step + '/' + br, 24)} Lc ${pad(v.toFixed(0), 4)} need 45  ${ok ? 'PASS' : '**FAIL**'}`);
  }
}

let warns = 0;
const advise = (lbl, v) => { const ok = v >= 45; if (!ok) warns++; console.log(`  ${pad(lbl, 24)} Lc ${pad(v.toFixed(0), 4)} ref  45  ${ok ? 'ok' : 'WARN'}`); };
console.log(`\n== advisory: TLP on ${tlpBg} (locked by standard) ==`);
for (const [name, hex] of tlp) advise(name, mag(hex, tlpBg));

console.log(`\nTotal failures: ${fails}   (advisory warnings: ${warns})`);
process.exit(fails ? 1 : 0);
