# design.md — instructions for digital agents

You are building something from this design system. This file is your contract.
Read it before you emit color, type, spacing, marks, motion, or copy. It is a
condensed, agent-facing index of the manual — not a replacement for it. When a
decision matters, open the cited chapter and `edn` file and use the canonical
value. Do not invent values that the system already names.

## Authority chain

1. **`manual/*.md`** is the authority for MEANING and rules.
2. **`tokens/**/*.edn`** is the authority for VALUES. Generated serializations:
   `tokens/*.css` (custom properties; `styles.css` is the one file a web
   consumer links) and `tokens/design_system_tokens.ex` (the same data for the
   BEAM). Never edit generated files — edit the `edn` and run `make gen`. For
   anything not yet serialized, read the `edn` directly.
3. **Your code is a downstream serialization.** It is obligated to honor 1 and 2.
   If your output and the manual disagree, the manual wins and your output is the
   bug.

Never hardcode a value you could pull from a token. If you must inline one
(because no build step exists), copy it verbatim from the `edn` and cite the
source file in a comment.

## The three principles (in priority order)

1. **Data-legible first.** Every choice is judged by whether it helps a person
   read data correctly and fast. When a pretty choice and a legible choice
   conflict, legibility wins.
2. **Rooted in CRT/terminal material.** The felt quality descends from three real
   displays: Tron cyan (`#00E5FF`), Matrix green (`#03A062`), Compaq amber
   (`#FF8A00`). Honor the lineage; never let it override legibility.
3. **Anchored to real standards.** Semantic scales bind to published vocabularies
   (OASIS CAP, STIX `opinion`, STIX TLP). A color claims a meaning only when a
   standard backs the claim.

## Hard invariants — do not break these

- **Data color is theme-invariant.** The spectrum, the status ramp, and the TLP
  markings mean the same thing in every theme and mode. Green means nominal in
  every skin. A theme may touch *chrome only*: `:bg :surface :text :muted :border :edge
  :surface-raised :accent :on-accent :glow :accent-tint`. Nothing else.
- **Never color alone.** Status is *always also* encoded by shape, label, or
  position — because some readers can't distinguish hues and some media can't
  render them. Color + glyph + text. See `manual/10-accessibility.md`.
- **The five status sign-shapes are reserved.** UI marks must not reuse the
  octagon/triangle/diamond/circle/square status silhouettes.
- **Spectrum is diverging, not categorical.** Never use spectrum stops as a
  categorical palette for unrelated series. Green is the center (zero/nominal);
  distance from center is magnitude of deviation.
- **Glow is the only adopted material effect**, dark surfaces only. Never on body
  text, data color fills, muted, or borders. Scanlines, per-theme flavor, and
  plasma bloom were considered and rejected — do not add them.
- **Respect `prefers-reduced-motion`.** All non-essential motion is suppressed;
  the critical pulse goes static.

## Color

### Chrome — per theme (`tokens/color/themes.edn`)

Three anchors, each with `:dark` and `:light`. Pick one theme; do not mix. APCA
thresholds: text 75 (on `surface` and `surface-raised` too), muted 60, border 30,
on-accent 45 (`on-accent` is rated for large/heavy text only). `edge` is the
quiet container outline and is exempt; controls keep `border`. `accent-tint` is
not a color: it is the alpha applied to `accent` for selected/active tints.

| Role | Tron dark | Matrix dark | Compaq dark |
| --- | --- | --- | --- |
| `bg` | `#05080a` | `#020a02` | `#160f04` |
| `surface` | `#0a141a` | `#061206` | `#20160a` |
| `surface-raised` | `#0e1c24` | `#0a1c0a` | `#2a1e0d` |
| `text` | `#cfeff5` | `#7dffae` | `#ffd9a0` |
| `muted` | `#a2bdc3` | `#63cb89` | `#d5b484` |
| `border` | `#6d8288` | `#438b5c` | `#947b58` |
| `edge` | `#15262e` | `#0f2610` | `#34261a` |
| `accent` | `#00E5FF` | `#03A062` | `#FF8A00` |
| `on-accent` | `#000000` | `#ffffff` | `#000000` |
| `glow` | `#00E5FF` | `#03A062` | `#FF8A00` |
| `accent-tint` (alpha on accent) | 0.12 | 0.14 | 0.13 |

Light variants live in the `edn` — read them there; `accent` is darkened for
contrast on light, `glow` keeps the raw anchor. Do not interpolate or guess.

### Data color — invariant, theme-independent

- **Spectrum** (`tokens/color/spectrum.edn`) — diverging temperature scale, green
  center. Warm pole = positive deviation (`yellow #eedd00` → `plumb #881177`),
  cool pole = negative (`seafoam #44dd88` → `purple #663399`). Muted, continuous.
  Use for temperature, error-vs-baseline, gauges, charts.
- **Status ramp** (`tokens/color/status.edn`) — vivid, attention-grabbing,
  ordered: `critical #ff6472`, `high #ff7a00`, `medium #ffd400`, `low #2fd44e`,
  `unknown #9ca2ac`. Bound to OASIS CAP severity/urgency (alarm-valenced).
  CAP *certainty* is ordinal — do not render red→green; encode by intensity.
  **Treatment rule:** `fill` (step as background + `on-status` label: white for
  critical/high/unknown, black for medium/low) is legal everywhere; `outline`
  (step as text + border) is **dark surfaces only**. Every step clears Lc 45
  both ways on dark — no per-step exceptions. `on-status` is for labels, never
  body text.
- **STIX `opinion`** (`tokens/color/opinion.edn`) — discrete diverging Likert on
  the muted spectrum; disagree=warm, agree=cool (flippable but state it).
- **STIX TLP** (`tokens/color/markings.edn`) — `RED #FF2B2B`, `AMBER #FFC000`,
  `GREEN #33FF00`, `CLEAR #FFFFFF`, on black. Prescribed by the standard, locked.
  Beware: TLP green ("shareable") is the *opposite* valence of spectrum green
  ("neutral") — keep markings visually separate from data color.

## Typography (`tokens/typography.edn`)

A duo. **Mono is the voice** — headings, labels, data, code, UI: MartianMono Nerd
Font (`MartianMono Nerd Font Mono` in terminals, strict single-width). **Prose**
is its proportional sibling Martian Grotesk, for long-form running text ONLY.

Scale (base 16px = 1rem, ratio 1.25): `display 40` · `h1 32` · `h2 24` · `h3 20`
· `lead 18` · `body 16` · `small 14` · `caption 12` · `micro 11`. Weights 400 /
500 / 700. Line height: tight 1.15 (headings), snug 1.4 (mono/data), normal 1.6
(prose). Tracking: `label 0.08em` (UPPERCASE labels/headings), `tight -0.01em`
(display). Measure: prose 60–75ch, data unwrapped.

In the terminal the scale collapses to one cell; hierarchy comes from UPPERCASE,
weight, reverse video, letter-spacing, rule lines, and Nerd Font icon glyphs.

## Space & grid (`tokens/space.edn`)

8px base (0.5rem), 4px half-step. Scale: `half 4` · `1 8` · `2 16` · `3 24` ·
`4 32` · `5 48` · `6 64` · `7 96` · `8 128`. Default gap is `space-2`; gutters/
section gaps `space-3`. Density (row/control padding): comfortable 16, compact 8,
dense 4. Web grid: 12 columns, 24px gutter/margin, breakpoints sm 640 / md 768 /
lg 1024 / xl 1280 / 2xl 1536. Prose measure ~72ch.

Edges: border width 1px; radius `none 0` · `sm 2` · `md 4` (default control) ·
`lg 6` (cards/panels). Nothing rounder.

Terminal layouts **do not use the px scale** — spacing is integer mono cells (1
col ≈ 1ch, vertical rhythm in rows). Reference 80 cols, wide 120.

## Marks (`tokens/marks.edn`, `assets/marks/sprite.svg`)

24×24 grid, 2px stroke, round caps/joins, monoline outline, `currentColor`.
Reference by `id` from the sprite. Fallback order richest→poorest: `:svg :nerd
:unicode :ascii`. Status and diverging marks MUST carry both unicode and ascii
fallbacks (accessibility-critical).

- **Status** (reserved shapes): `m-critical` ✖ octagon, `m-high` ▲ triangle,
  `m-medium` ◆ diamond, `m-low` ● circle, `m-unknown` □ square.
- **Diverging** (carry the sign; magnitude stays in value/position): `m-warm` ⌃,
  `m-neutral` –, `m-cool` ⌄.
- **UI**: nav/action/object starter set; `m-chevron` rotates for four directions.
  Use a Unicode glyph fallback where a clean one exists, else a text label.

## Material (`tokens/material.edn`)

Glow only, two levels, dark surfaces only. `ambient` (resting) and `active`
(state). Color = theme `:glow` role; the tokens define blur/alpha shape only.
`:text` → text-shadow (headings, accent text); `:box` → box-shadow (fills,
controls). Suppressed on light surfaces. Never on body text, data fills, muted,
borders.

## Motion (`tokens/motion.edn`)

Minimal/functional — clarifies a change, never decorates. Durations: `instant 0`
(focus ring), `fast 120` (hover/toggle), `moderate 200` (menu/expand),
`deliberate 320` (modal/panel). Easing: standard `cubic-bezier(0.2,0,0,1)`, enter
`(0,0,0,1)`, exit `(0.4,0,1,1)`, linear (spinners only). One status motion: the
`pulse` (opacity + glow, 1500ms period) for critical/live elements only;
reinforcement, since color + glyph already signal. Static under reduced-motion.

## Components & states (`tokens/components.edn`)

Components compose existing tokens; they introduce no new primitive values. Honor
the state matrix:

- `default` surface/text; `border` on controls, quiet `edge` on containers; no glow.
- `hover` outlined → border to accent; filled → brighten accent; containers →
  edge to accent; ambient glow.
- `focus` outline in `text`, 4px offset, active glow. The outline is the signal.
- `active` fill `accent`, foreground `on-accent`, pressed/inset.
- `disabled` muted text, 0.5 opacity, non-interactive, no glow.
- `loading` animated `m-refresh`, `aria-busy`, content hidden.
- `error` `status/critical` border + text + `m-critical` glyph + message —
  color + glyph + text, never color alone. (The field keeps its surface; this is
  the one place critical is used as an outline, and it is reinforced by the
  glyph and message.)
- `selected` accent tint at low alpha + accent rule (left/underline).
- `read-only` no border, editable false, selectable true.

Gauges: `diverging` (spectrum at signed magnitude, signed label always shown) vs
`sequential` (accent fill, per-instance warn/crit thresholds via the alert ramp)
— never interchanged. Charts/sparklines are Tufte by default; for many series use
small-multiples, never a categorical color palette. No-data is `muted` +
`m-unknown` + "UNK". Overlays (modal/toast/tooltip/menu) follow the shared
behavior block (focus trap, aria-live, dismissal). Destructive primary actions
are the only place that breaks the accent norm: `status/critical`, a verb label
naming the act, copy that names the target and states irreversibility, ghost
cancel.

## Voice & content (`tokens/voice.edn`)

Terse/operational: direct, precise, no filler, no fake reassurance — reads like
an ops tool. Message shape, in order, dropping unknown parts (never padding):
**what happened · why (if known) · what to do.**

Status lexicon — display synonym MUST map to the step: `critical`→`DOWN`,
`high`→`ALERT`, `medium`→`WARN`, `low`→`OK`, `unknown`→`UNK`. The OASIS value is
the data; the display word is the chrome.

## Before you finish

- Did you use a token value, or invent one? Invented values are bugs.
- Is every status encoded by more than color?
- Does data color stay invariant across the theme you chose?
- Does the copy follow what-happened/why/what-to-do and the status lexicon?
- Terminal target: did you drop the px scale for cells and supply mark fallbacks?
- Run `make check` (edn parse, hex drift, links, APCA, markdownlint).
- If you changed `tokens/`, run `make specimen` and look at `specimen.html`.
