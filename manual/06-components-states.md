# 06 · Components & States

> **Status:** Drafted (v1 set; catalog continues).

The first chapter of the experience canon, and the integrator: components are where
color, type, space, marks, material, and accessibility finally combine into things
a person operates.

Specs here are **abstract and token-referencing** — anatomy plus a state table, in
terms of the tokens, not any one medium. Web (Phoenix), terminal, and diagrams each
*derive* from these; the implementations are deferred serialization
([11 · Usage & Governance](11-usage-governance.md)). Components introduce **no new
token values** — they compose existing ones. The single reusable artifact, the
state matrix, is in `tokens/components.edn`.

## 1 · The state matrix

Every interactive component defines its states from this matrix (the ones that
apply to it). Treatments reference tokens, never ad-hoc values.

| State | Treatment |
| --- | --- |
| **default** | `surface` bg, `text`, `border`; no glow |
| **hover** | outlined: `border`→`accent`; filled: brighten accent; ambient glow |
| **focus** | `text`-role outline, `space-half` offset + **active glow**. The outline is the signal; glow reinforces ([10 · Accessibility](10-accessibility.md) §5) |
| **active** | `accent` fill, `on-accent` label, pressed/inset shift |
| **disabled** | `muted` text, 50% opacity, no glow, non-interactive |
| **loading** | animated `m-refresh`, `aria-busy`, content hidden |
| **error** | `status/critical` border + text, message with `m-critical` glyph — color **and** glyph **and** text |
| **selected** | `accent` low-alpha tint + `accent` left/underline rule; no glow |
| **read-only** | no border emphasis, `surface` bg, not editable but selectable |

Two rules bind the whole matrix:

- **Never one channel.** Error is border + glyph + text; selected is tint + rule;
  focus is outline + glow. Remove color (or glow) and the state still reads.
- **Glow only adds.** Per [05 · Material & Texture](05-material-texture.md), the
  underlying element passes contrast without glow; glow never carries a state alone.

## 2 · Anatomy conventions

Every component spec follows the same shape:

- **Parts** — named regions, each referencing tokens (e.g. label = `caption`/`mono`,
  padding = density token).
- **Spacing** — from the [03 · Space & Grid](03-space-grid.md) scale and the
  surface's density mode; never off-scale.
- **Type** — from the [02 · Typography](02-typography.md) scale; mono by default.
- **Color** — chrome roles for the component; the alert ramp **only** for status.
- **Target size** — interactive targets meet [10 · Accessibility](10-accessibility.md)
  §8 (≥24px, 44px preferred) regardless of density.
- **Terminal form** — the cell-grid equivalent, or "none" where there isn't one.

## 3 · v1 component specs

### Button

- **Variants:** *primary* (`accent` fill, `on-accent` label), *ghost* (`accent`
  border, `text` label), *text* (no border/fill).
- **The accent-label rule:** a primary button's label is **large/heavy only**
  (Color §6). For body-size actions use the **ghost** variant — body text never
  sits on an accent fill.
- **States:** default, hover, focus, active, disabled, loading. Loading swaps the
  label for an animated `m-refresh` and sets `aria-busy`.
- **Terminal:** `[ ENGAGE ]` with reverse-video for focus/active, dim for disabled.

### Input (text field)

- **Parts:** label (`caption`), field (`mono`, `border`), helper/error text.
- **States:** default, focus (accent border + outline + active glow), error
  (`critical` border + message with `m-critical`), disabled (`muted`), read-only.
- **Terminal:** labeled field on one row; error on the next, prefixed with the
  critical mark.

### Select

- Input-like trigger + trailing `m-chevron`; menu is a `surface` popover of options
  with the **selected** state (accent tint + rule). Same state set as Input.
- **Terminal:** trigger shows `‹value ›`; menu is a bordered list, selected row
  reverse-video.

### Checkbox · Radio · Toggle

- Small controls; **selected/checked** uses `accent` with a check (`m-low` glyph for
  checkbox, filled dot for radio, knob shift for toggle). Focus ring per the matrix.
- **Terminal:** `[x]` / `( )` / `[on ]`.

### Card / Panel

- A `surface` container with `border`, padding from the density mode, optional
  header/footer. Usually non-interactive; if it is, it takes hover/focus/selected.
- **Terminal:** a box-drawing frame with an optional title in the top rule.

### Table

- Header row (`caption`, `muted`), body rows, **density** modes from
  [03 · Space & Grid](03-space-grid.md) §2. Numeric columns right-align in mono.
  Sortable headers carry a `m-chevron`; status cells use the **status badge**;
  **selected** row = accent tint + left rule.
- **Terminal:** box-drawing grid; the workhorse of the terminal UI.

### Status badge

- The non-color-alone showcase: alert-ramp color + **status glyph** + label, mapping
  CAP severity ([01 · Color](01-color.md) §3, [04 · Marks](04-marks-iconography.md) §2).
- **Terminal:** `glyph LABEL` using the Nerd Font / Unicode mark tier.

### Alert / banner

- Full-width message keyed to CAP **severity**: status glyph, left rule in the ramp
  color, title, body, optional action, dismiss (`m-close`).
- **Terminal:** a bordered block, severity mark in the leading cell.

### Gauge / meter

The data-bearing component, and the most system-specific. **Two semantic types
that are never interchanged:**

**Diverging meter** — signed deviation from a nominal center.

- **Anatomy:** track, green center marker (0), fill growing from center toward the
  value, signed value label, diverging mark (`m-warm`/`m-neutral`/`m-cool`).
- **Color:** the **diverging spectrum** stop at the value's signed magnitude
  ([01 · Color](01-color.md) §2); green at 0. Never the alert ramp.
- **Non-color:** the sign mark and signed number are always shown; fill direction
  and position carry the value without color.
- **Use:** temperature, error-vs-baseline, the STIX `opinion` scale.

**Sequential meter** — magnitude 0→max with optional threshold zones.

- **Anatomy:** track (0→max), fill from 0, warn/crit threshold ticks, value label,
  optional faint zone tints.
- **Color:** `accent` fill; on crossing a threshold the fill and value adopt the
  **alert-ramp** color (warn→`medium`, crit→`critical`, [01 · Color](01-color.md)
  §3). **Not** the spectrum — green-at-zero is meaningless for "0% CPU".
- **Thresholds** are per-instance configuration (e.g. warn 70%, crit 90%), a domain
  choice, not a system token.
- **Use:** CPU, disk, memory, throughput, quota.

**Both types:**

- **Forms:** *linear* (the many-at-once workhorse, aligns to table rows) and
  *radial/arc* (one prominent metric — diverging arc puts green at top/0, warm
  clockwise, cool counter-clockwise).
- **States:** default; **no-data** (`muted`, `m-unknown`, `UNK`); loading
  (skeleton); error. Hover/focus reveals the exact value.
- **Accessibility:** the value is always labeled; the threshold/severity state is
  echoed in words ([09 · Voice](09-voice-content.md) display synonym); never color
  alone. Fills and labels meet the [10 · Accessibility](10-accessibility.md) floors.
- **Terminal:** diverging → a center-anchored block bar with sign + value
  (`node-13 [··│███▸ ] ⌃+2`); sequential → a left-fill bar with a threshold marker
  (`cpu [████████░░] 82% WARN`).

## 4 · Catalog (specs to follow)

Named now so the set is bounded, detailed in later cycles — each will follow §2 and
the matrix: **tabs**, **modal/dialog**, **tooltip**, **toast/notification**
(`m-bell`), **menu/nav**, **breadcrumb**, **progress bar**, **pagination**,
**chart/sparkline**.

`chart/sparkline` is the natural next spec — it extends the gauge's data-bearing
role to series data.

## 5 · Usage rules

**Do**

- Define a component's states from the matrix; reference tokens, never ad-hoc values.
- Use chrome roles for the component, the alert ramp only for status.
- Keep targets accessible regardless of density mode.
- Give every component its terminal form, or state it has none.

**Don't**

- Don't convey a state by color (or glow) alone.
- Don't put body-size text on an accent fill — use the ghost button.
- Don't invent component-local colors or spacing; compose the tokens.

## Relation to other chapters

- Composes [01 · Color](01-color.md), [02 · Typography](02-typography.md),
  [03 · Space & Grid](03-space-grid.md), [04 · Marks](04-marks-iconography.md),
  [05 · Material](05-material-texture.md).
- Bound by [10 · Accessibility](10-accessibility.md) (focus, target size, never-one-channel).
- Composed into layouts by [07 · Patterns](07-patterns.md); animated by
  [08 · Motion](08-motion.md); worded by [09 · Voice & Content](09-voice-content.md).
