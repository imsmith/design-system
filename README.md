# GRID·OPS Design System

A CRT/terminal-rooted design system for **data-dense operations tooling** — NOC
dashboards, telemetry consoles, alerting surfaces, threat-intel views. Its whole
job is to help a person read data correctly and fast, in the visual language of
three real phosphor displays.

This project is a **runtime + asset library** compiled from the canonical
**imsmith/design-system** manual. It turns that manual's `edn` tokens and prose
rules into CSS custom properties, React components, foundation specimen cards, and
a full UI-kit recreation of the product the manual implies.

## Sources

- **GitHub — `imsmith/design-system`** (`main`): https://github.com/imsmith/design-system
  - The authority. A normative graphic-standards + UX manual. Chapters in
    `manual/00..11`, machine-readable values in `tokens/**/*.edn`, the mark sprite in
    `assets/marks/sprite.svg`, agent contract in `design.md`.
  - Explore it directly to go deeper than this system does — every value here is
    traceable to a token file, every rule to a manual chapter.

There is **no shipping product UI** in the source — it is a pure design manual. The
Operations Console UI kit here is a faithful composition of the documented components
and patterns into the surface the manual keeps citing (`Grid › Sector 12 › node-13`),
not an invented product.

## The three principles (priority order)

1. **Data-legible first.** When a pretty choice and a legible choice conflict,
   legibility wins.
2. **Rooted in CRT/terminal material.** The feel descends from three displays:
   Tron cyan `#00E5FF`, Matrix green `#03A062`, Compaq amber `#FF8A00`.
3. **Anchored to real standards.** Semantic scales bind to OASIS CAP, STIX
   `opinion`, STIX TLP — a color claims a meaning only when a standard backs it.

## Hard invariants (do not break)

- **Data color is theme-invariant.** A theme touches *chrome only* (`bg surface text
  muted border accent on-accent glow`). The spectrum, status ramp, and TLP markings
  mean the same thing in every skin. Green = nominal everywhere.
- **Never color alone.** Status = color **+** glyph **+** text/position, always.
- **The five status silhouettes are reserved** (octagon / triangle / diamond /
  circle / square). UI icons must not reuse them.
- **Spectrum is diverging, not categorical.** Green is center (0); distance =
  magnitude of deviation. Never a categorical palette.
- **Glow is the only material effect** — dark surfaces only; never on body text,
  data fills, muted, or borders. No scanlines, no plasma bloom.
- **Respect `prefers-reduced-motion`** — the critical pulse goes static.

---

## Content fundamentals

The system speaks like what it is: **a competent operations tool.** Terse, precise,
honest. It names the problem and states the action.

- **Register:** terse / operational. Direct ("Uplink down." not "It looks like there
  may be a problem"). Precise — exact nouns and numbers ("4 nodes unreachable for 4m.").
- **Person:** impersonal/operator-facing. No "we", no "I". The tool reports; it does
  not editorialize ("Everything's fine!" is banned).
- **No filler:** cut *please / just / simply / oops / successfully*. No exclamation
  points. **No emoji** — ever.
- **Casing:** UPPERCASE for labels/chips/units-of-state (`NODE`, `P99`, `DOWN`);
  **sentence case** for messages and prose; Title Case is avoided.
- **Message shape**, in order, dropping unknown parts (never padding): **what
  happened · why (if known) · what to do.**
  - Error: `Write failed — disk full on node-12. Free space or reroute.`
  - Warning: `Latency 41ms on node-13, above 40ms threshold.`
  - Destructive confirm: `Delete sector 12? This can't be undone.` (buttons are
    verbs — `Delete` / `Cancel`, never `OK` / `Yes`)
  - Empty: `No events in range. Widen the window or clear filters.`
  - Success: the shortest true statement — `Saved.` `Rebooted node-12.`
- **Status lexicon** (display synonym must map to the step): `critical→DOWN`,
  `high→ALERT`, `medium→WARN`, `low→OK`, `unknown→UNK`. The OASIS value
  (Extreme/Severe/Moderate/Minor/Unknown) is the data; the display word is chrome.
- **Numbers & units:** digits + unit, mono, thousands-separated (`1,204 req/s`,
  `38ms`) — never spelled out. One term per concept (`node`, not host/server).

## Visual foundations

**Vibe.** A dark phosphor terminal: near-black background, a single luminous accent,
crisp monoline vectors, tabular data, restrained glow. Reads like an instrument, not
a website.

- **Color.** Eight chrome roles per theme, one accent. Three CRT anchors (Tron cyan
  default, Matrix green, Compaq amber), each with dark + light variants; pick one,
  never mix. Data color is a separate, invariant layer: the 12-stop diverging
  **spectrum** (green center), the 5-step vivid **status ramp**, **STIX opinion**, and
  the locked **TLP** markings. APCA-verified (text 75 / muted 60 / border 30 /
  on-accent 45). Light mode darkens `accent` for contrast.
- **Type.** A duo. **Mono is the voice** — Martian Mono for headings, labels, data,
  code, UI. **Prose** (Martian Grotesk) is for long-form running text only. Modular
  scale 40→11 (ratio 1.25). Hierarchy also comes from UPPERCASE, weight, tracking,
  and rule lines (the terminal-hierarchy channels). Tabular numerics for data.
- **Spacing.** 8px base, 4px half-step; scale 4→128. Default gap 16, gutter 24.
  Density modes — comfortable 16 / compact 8 / dense 4 — dashboards run compact,
  telemetry tables dense. 12-col web grid, 24px gutter.
- **Backgrounds.** Flat near-black surfaces (`bg` darkest, `surface` one step up,
  `surface-raised` for nested panels). **No gradients, no imagery, no textures, no
  patterns** — the only "texture" is glow. Light mode is near-white flat surfaces.
- **Borders & radii.** Hairline 1px borders in the `border` role. Crisp Tron-vector
  rounding: 2 / 4 (default control) / 6 (card) px. No heavy rounding, no pills except
  meters/toggles.
- **Cards.** A `surface` fill, 1px `border`, `radius-lg` (6px), density padding, an
  UPPERCASE caption header. **No drop shadows** as decoration — depth comes from the
  border + surface step, not elevation. (Modals are the one place a real cast shadow
  appears.)
- **Shadow / glow system.** Glow is the only effect, two levels (ambient resting /
  active state), tinted by the theme `glow` anchor. `text-shadow` on accent text and
  headings; `box-shadow` on accent fills and controls. Suppressed in light mode.
  Glow only *adds* — every element passes contrast without it.
- **Hover.** Outlined controls → border to `accent` + ambient glow; filled → brighten
  accent + ambient glow; rows/cells → a `text`-color outline. Tabs/nav → muted lifts
  to `text`.
- **Press / active.** Filled controls darken (`brightness(0.92)`) and shift inset;
  ghost controls take the accent tint and a 1px nudge. The pressed state is a
  fill/inset shift, not a scale bounce.
- **Focus.** The signal is a **2px `text`-color outline at a 4px offset**, plus active
  glow as reinforcement (dark only). The outline alone is always sufficient.
- **Selected.** Accent low-alpha tint + an accent rule (left inset or underline) —
  tint + rule, never tint alone.
- **Transparency & blur.** Used sparingly: low-alpha accent **tints** (selected/zone
  fills), `color-mix` for translucent borders/badges, and the modal scrim
  (`rgba(0,0,0,0.6)`). **No backdrop-blur, no glassmorphism.**
- **Imagery.** None native to the brand. If a product needs it, keep it cool/dark and
  let chrome dominate; data color must never be confused with photographic color.
- **Motion.** Minimal/functional. Durations 0 / 120 (hover) / 200 (menu, expand) /
  320 (modal) ms; standard easing `cubic-bezier(.2,0,0,1)`. The **one** decorative-ish
  motion is the critical **pulse** (opacity, 1500ms) on critical/live elements —
  reinforcement only, static under reduced-motion. No bounces, no parallax, no
  infinite spinners except `m-refresh` loading.

## Iconography

- **One mark system**, shipped as an SVG `<symbol>` sheet:
  `assets/marks/sprite.svg`. Style is fixed: **24×24 grid, 2px stroke, round
  caps/joins, monoline outline, `currentColor`** (the Tron-vector lineage — crisp
  strokes, no fills except small status dots and `?`).
- **Three families.** *Status* (5 reserved silhouettes — octagon/triangle/diamond/
  circle/square, the load-bearing non-color channel); *diverging* (`m-warm` ⌃,
  `m-neutral` –, `m-cool` ⌄ — read the spectrum without color); *functional* (19
  everyday UI marks: nav, actions, objects; `m-chevron` rotates for four directions).
- **No emoji. No unicode glyphs as primary icons** — Unicode/ASCII exist only as
  terminal fallbacks (`[X] [!] [?]`, `^ - v`). Color comes from context via
  `currentColor`, never a per-mark color token.
- **Use in web/HTML:** include `assets/marks/sprite-inject.js` once (it injects the
  sheet so marks resolve via same-document `<use href="#m-…">` — the external-file
  form is blocked when served), or render `<Mark name="m-…">`. In React, `Mark` does
  this for you.
- **Fallback tiers** (richest→poorest): SVG → Nerd Font glyph → Unicode → ASCII. The
  Nerd Font tier (MartianMono Nerd Font) is a terminal feature and is **not**
  self-hosted here — see Fonts.

## Fonts — substitutions (please replace)

The canonical faces are **MartianMono Nerd Font** (mono voice) and **Martian Grotesk**
(prose), both SIL OFL. Neither is published on a CDN in usable form, so this system
currently loads, from Google Fonts:

- **Martian Mono** (plain) for the mono voice — the Nerd Font icon-glyph patch is not
  self-hosted; icons come from the SVG sprite (the richer tier anyway).
- **Space Grotesk** for prose, as the closest geometric-grotesque match to Martian
  Grotesk.

The token stacks still name the real families first, so dropping in self-hosted
`@font-face` files for **MartianMono Nerd Font** and **Martian Grotesk** upgrades the
system with no other change. **Action: upload those font files when you have them.**

---

## Index / manifest

Root
- `styles.css` — the single entry point consumers link. `@import`s only.
- `README.md` — this guide. `SKILL.md` — Agent-Skill front matter for Claude Code.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — generated; do not edit.

`tokens/` — global CSS (reached from `styles.css`)
- `fonts.css` · `colors.css` (chrome themes + invariant data color) · `typography.css`
  · `spacing.css` (+ radius/border) · `effects.css` (glow + motion) · `base.css`.

`assets/marks/`
- `sprite.svg` — the canonical mark sheet. `sprite-inject.js` — runtime injector for
  reliable same-document mark references.

`components/` (React primitives — `window.DesignSystem_019de4`)
- **core/** — `Mark`, `Button`, `StatusBadge`, `Card`, `Tag`
- **forms/** — `Input`, `Select`, `Checkbox`, `Toggle`
- **data/** — `SequentialMeter`, `DivergingMeter`, `Sparkline`, `Heatmap`
- **feedback/** — `Alert`  ·  **navigation/** — `Tabs`
- Each dir has `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md` and one `@dsCard` demo.

`guidelines/` — foundation specimen cards (Design System tab): Colors (chrome, themes,
spectrum, status ramp, TLP+opinion), Type (mono scale, the duo), Spacing (scale,
density+radius), Brand (glow, motion, voice, marks).

`ui_kits/operations-console/` — the GRID·OPS NOC recreation: `index.html` (interactive)
+ `LoginScreen` / `Shell` / `GridDashboard` / `NodeDetail` / `AlertsView` / `App` +
`data.js`. See its `README.md`.

## Using the system

- **Pick a theme** with `data-theme="tron|matrix|compaq"` on `<html>` (+ optional
  `data-mode="light"`). Default is Tron dark.
- **Web/CSS:** link `styles.css`, use the custom properties (`var(--accent)`,
  `var(--space-3)`, `var(--status-critical)`, …). Include `sprite-inject.js` for marks.
- **React:** load `_ds_bundle.js`, then `const { Button, Heatmap, … } =
  window.DesignSystem_019de4`.
- **When in doubt, use a token.** Inventing a value is a bug — trace it to
  `tokens/**/*.edn` in the source repo.

## Verify

```bash
make css        # regenerate tokens/{colors,typography,spacing,effects}.css from the edn
make specimen   # regenerate specimen.html
make check      # edn parse + hex drift + links + css freshness (host), APCA + markdownlint (distrobox)
```

`tokens/**/*.edn` is the authority. The four token CSS files are **generated**
by `tools/css.tcl`; `check` fails if they are stale, so edit the `edn`, run
`make css`, commit both. `fonts.css` and `base.css` are hand-authored.
`check` exits non-zero on any failure. Host side needs only `tclsh`; the Node
steps run inside the `design-system` distrobox (see the Makefile header).
