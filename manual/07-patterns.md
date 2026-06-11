# 07 · Patterns

> **Status:** Drafted (full set).

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
  with `m-critical` and message). Summarize at the top only for cross-field errors.
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

## 7 · Catalog patterns

The recurring compositions beyond the core set. Each follows the rules above —
components on the grid, the unhappy-path triad where data is shown.

### Detail view

**Inspect and act on one record.** Breadcrumb + a record header (title, status
badge, primary action + overflow `m-more`) over sections: a property grid beside
data-bearing panels (sparkline/gauge), then related tables or activity. Each
section carries its own loading/error/empty; the record itself has a not-found
state. **Terminal:** header line over sectioned panes.

### Wizard / multi-step

**A task too large for one screen, with order.** A stepper (done = `m-low` check,
current = `accent`, upcoming = `muted`) + the current step's content + Back (ghost)
/ Next (primary); the final step's action is the primary commit. Validate each step
before advancing; preserve progress on Back. Cancelling a dirty wizard prompts the
destructive-confirm flow. **Terminal:** numbered-step header + form + `[Back][Next]`.

### Settings

**Configure persistent options.** A left `menu`/nav of sections beside grouped
forms; explicit Save (or clearly-marked inline-save). An **unsaved-changes guard**
on navigate-away; a Reset per section. **Terminal:** a sectioned key-value editor.

### Search results

**Find among many.** A search input + filters toolbar above a results table/list,
result count, and pagination. Defines **empty** ("No matches — widen the query or
clear filters") and loading explicitly. **Terminal:** query line over result rows.

### Onboarding / first-run

**Nothing exists yet.** The empty state elevated: the system explained in one
sentence and a single primary action to create the first thing (optionally a short
wizard). Terse, no marketing copy ([09 · Voice](09-voice-content.md)). **Terminal:**
a banner + a prompt.

### Destructive-confirm flow

**An irreversible action.** The destructive button (`critical`) opens a
[modal](06-components-states.md#modal--dialog) that names the target, states the
irreversibility, and offers a verb button (`critical`) + ghost Cancel; completion
emits a toast. High-stakes deletions require **typing the target name** to enable
the button. Wording per [09 · Voice](09-voice-content.md) §3. **Terminal:**
`Delete sector 12? This can't be undone. [y/N]`.

## 8 · Usage rules

### Do

- Compose patterns from components and the grid; introduce no new tokens.
- Define the empty/loading/error triad for every data surface.
- Keep forms single-column to the measure; keep tables/dashboards dense.
- Require a legend and per-cell values for any status-at-scale view.

### Don't

- Don't signal severity by alert *placement* — placement is scope.
- Don't leave a data view without its unhappy-path states.
- Don't rely on color alone in a heatmap.

## Relation to other chapters

- Composes [06 · Components & States](06-components-states.md) on the
  [03 · Space & Grid](03-space-grid.md) grid.
- Surfaces [01 · Color](01-color.md) §2–§3 status and spectrum at scale.
- Bound by [10 · Accessibility](10-accessibility.md); animated by
  [08 · Motion](08-motion.md); worded by [09 · Voice & Content](09-voice-content.md).
