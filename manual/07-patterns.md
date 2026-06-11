# 07 · Patterns

> **Status:** Drafted (core + showcase set; catalog continues).

Patterns are recurring **compositions** — how the components of
[06 · Components & States](06-components-states.md) arrange into the views people
actually use. Like components, they introduce no new tokens; they compose existing
ones on the [03 · Space & Grid](03-space-grid.md) grid. Each is specified by the
problem it solves, its structure, the components it uses, its edge cases, and its
terminal form.

## 1 · Dashboard

**Problem:** monitor many things at once.

- **Structure:** a header shell (brand · nav · actions) over a 12-column grid of
  **panels**. Each panel is a [card](06-components-states.md#card--panel) with a
  `caption`/`muted` header and one content type: table, heatmap, stat, or gauge.
- **Density:** `compact` by default — dashboards trade whitespace for information.
- **Responsive:** panels span grid columns and reflow at the
  [breakpoints](03-space-grid.md#3--web-grid); single column below `md`.
- **Terminal:** box-drawing panes (a TUI), navigable by key.

## 2 · Data-table view

**Problem:** browse, sort, and act on a list.

- **Structure:** a toolbar (search · filter · density toggle) above a
  [table](06-components-states.md#table), with pagination below.
- **Behavior:** sortable headers (`m-chevron`), selectable rows (selected =
  accent tint + left rule), status cells as **badges**, numeric columns
  right-aligned in mono.
- **Edge cases:** must define the empty / loading / error triad (§6).
- **Terminal:** full-width table, key-navigated; the workhorse view.

## 3 · Form

**Problem:** collect and validate input.

- **Structure:** a **single column** constrained to the prose measure (~72ch),
  fields grouped into labeled sections. Actions sit bottom-right: primary +
  ghost ([button](06-components-states.md#button)).
- **Validation:** inline at the field — the input **error** state (critical border
  + `m-critical` + message). Summarize at the top only for cross-field errors.
- **Submit:** primary button enters **loading**; the form is `aria-busy`.
- **Don't:** no dense multi-column forms — legibility over density here, unlike
  tables.
- **Terminal:** one field per row, error on the following row.

## 4 · Alerting

**Problem:** surface a status event at the right scope and urgency. One severity
model (CAP, via the alert ramp + status glyph); **three placements**:

| Placement | Scope | Lifetime |
| --- | --- | --- |
| **Banner** | page or section | persistent until resolved/dismissed |
| **Toast** | transient, corner | auto-dismiss on a timer; stacks; `m-bell` |
| **Inline** | a field or row | tied to the element (form error, bad cell) |

Every alert carries **color + glyph + text** ([10 · Accessibility](10-accessibility.md)
§4) — placement signals scope, never severity. A critical alert may pulse
([08 · Motion](08-motion.md)) with a reduced-motion fallback. Wording follows
[09 · Voice & Content](09-voice-content.md).

## 5 · Status-at-scale (heatmap) — signature pattern

**Problem:** read the health of *many* entities in one glance.

- **Structure:** a dense grid of cells, each a **diverging-spectrum** stop by its
  deviation from green ([01 · Color](01-color.md) §2). Green = nominal; warm = over,
  cool = under; the far warm end reads as critical.
- **Mandatory non-color encoding:** a **legend** is required, every cell is
  inspectable for its underlying value (hover/focus/label), and cells at the
  critical end may carry the `m-critical` glyph. The color is the gestalt; the value
  is the truth. Never color alone, even — especially — at scale.
- **Variants:** sparkline/trend cells; row/column summaries.
- **Terminal:** a grid of truecolor cells, or severity glyphs where color is
  unavailable.

This is the pattern the whole color system was built for: the universal data
spectrum doing real work across a field of data.

## 6 · Empty / loading / error triad

**Problem:** the unhappy paths every data surface must handle — and usually doesn't.

- **Empty:** explain *why* it's empty and offer the next action (a primary button);
  a `muted` mark, never a blank void.
- **Loading:** a skeleton (muted `surface` blocks) or an `m-refresh` spinner;
  `aria-busy`. Never an indefinite blank.
- **Error:** `m-critical` + a plain-language message + a retry action (`m-refresh`) —
  the page-level analog of the input error state.

**Rule:** every data view (table, dashboard panel, detail) defines **all three**.
A raw blank, a spinner-forever, or an unhandled failure is a defect, not a state.

## 7 · Catalog (patterns to follow)

Named now, specified later, each following the composition rules above: **detail
view**, **multi-step / wizard**, **settings**, **search results**, **onboarding**,
**confirmation / destructive-action** flow.

## 8 · Usage rules

**Do**

- Compose patterns from components and the grid; introduce no new tokens.
- Define the empty/loading/error triad for every data surface.
- Keep forms single-column to the measure; keep tables/dashboards dense.
- Require a legend and per-cell values for any status-at-scale view.

**Don't**

- Don't signal severity by alert *placement* — placement is scope.
- Don't leave a data view without its unhappy-path states.
- Don't rely on color alone in a heatmap.

## Relation to other chapters

- Composes [06 · Components & States](06-components-states.md) on the
  [03 · Space & Grid](03-space-grid.md) grid.
- Surfaces [01 · Color](01-color.md) §2–§3 status and spectrum at scale.
- Bound by [10 · Accessibility](10-accessibility.md); animated by
  [08 · Motion](08-motion.md); worded by [09 · Voice & Content](09-voice-content.md).
