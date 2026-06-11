# 03 · Space & Grid

> **Status:** Drafted.

The rhythm everything sits on — spacing, density, and layout structure. Built on
one base unit so every gap is a multiple of the same root, the way the type scale
is built on one base size.

- Values: `tokens/space.edn`

## 1 · Base unit & scale

**Base = 8px (0.5rem)**, with a **4px half-step** for tight cases. The scale is
curated near-geometric on the 8px grid:

| Token | px | rem | Role |
| --- | --- | --- | --- |
| `space-half` | 4 | 0.25 | half-step, tight adjustments |
| `space-1` | 8 | 0.5 | base unit |
| `space-2` | 16 | 1.0 | default gap |
| `space-3` | 24 | 1.5 | gutter, section gap |
| `space-4` | 32 | 2.0 | — |
| `space-5` | 48 | 3.0 | — |
| `space-6` | 64 | 4.0 | — |
| `space-7` | 96 | 6.0 | — |
| `space-8` | 128 | 8.0 | major section / page rhythm |

Use scale tokens, never arbitrary pixel values. The half-step exists for genuine
tight cases (icon-to-label, dense table cells) — reach for it sparingly, not as a
default.

## 2 · Density modes

Vertical row / control padding has three named modes. They change *density*, never
the scale — each mode just selects a different spacing token:

| Mode | Padding | Use |
| --- | --- | --- |
| **comfortable** | `space-2` (16px) | default reading density |
| **compact** | `space-1` (8px) | dashboards, denser UI |
| **dense** | `space-half` (4px) | telemetry / log tables where rows must pack |

A surface picks one mode; it does not mix. Dense is for data tables, not for
controls a finger has to hit — those keep their target size from
[10 · Accessibility](10-accessibility.md) §8 regardless of density.

## 3 · Web grid

A **12-column** responsive grid.

- **Gutter** and outer **margin**: `space-3` (24px).
- **Breakpoints** (min-width): `xs` 0 · `sm` 640 · `md` 768 · `lg` 1024 ·
  `xl` 1280 · `2xl` 1536.

Twelve columns divides cleanly for the dashboard layouts this system targets
(halves, thirds, quarters, sixths). Dashboards span the full grid; reading views
constrain to the measure (§4).

## 4 · Measure

Long-form text is capped at the reading measure, shared with
[02 · Typography](02-typography.md) §4: **72ch** (within a 60–75ch range). This is
a content-width cap, independent of the 12-column grid — a prose column inside a
wide layout still honors it. Data rows are never wrapped to a measure.

## 5 · Terminal cell grid

In a terminal the px scale **does not apply**. Space is counted in **mono cells**:

- 1 column ≈ 1 character (`1ch`) horizontal; 1 row vertical.
- Spacing is **integer cells** — gaps measured in columns, vertical rhythm in rows.
- **80 columns** is the reference width (the classic terminal heritage); **120**
  for wide layouts.

This is the spatial half of the terminal story whose typographic half is in
[02 · Typography](02-typography.md) §5: there, hierarchy from case/weight/rules;
here, layout from the cell grid.

## 6 · Usage rules

### Do

- Use scale tokens for all margin / padding / gap.
- Pick one density mode per surface.
- Constrain prose to the measure; let data tables run full width.
- In terminal, lay out in whole cells.

### Don't

- Don't use off-scale pixel values.
- Don't lean on the half-step as a default unit.
- Don't shrink interactive targets below their accessible size just to hit a
  density mode.

## Relation to other chapters

- Shares its base/measure with [02 · Typography](02-typography.md).
- Density and target size are bounded by [10 · Accessibility](10-accessibility.md).
- Grid, density, and spacing tokens are consumed by [06 · Components & States](06-components-states.md)
  and [07 · Patterns](07-patterns.md).
