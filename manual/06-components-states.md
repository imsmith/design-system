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
| **default** | `surface` bg, `text`; controls take `border`, containers the quiet `edge`; no glow |
| **hover** | outlined: `border`→`accent`; filled: brighten accent; containers: `edge`→`accent`; ambient glow |
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

- A `surface` container with a quiet `edge`, padding from the density mode,
  optional header/footer. Hover promotes the edge to `accent` with ambient glow
  (every resting container does this); only an interactive card also takes
  focus/selected.
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
- **Variants:** `fill` (step as background, `on-status` label) and `outline` (step
  as text + border). Outline is **dark surfaces only**; on light the badge renders
  as fill regardless of the requested variant. Pick one variant per page.
- **Terminal:** `glyph LABEL` using the Nerd Font / Unicode mark tier; fill maps to
  reverse video, outline to colored text.

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

### Chart / sparkline

Series and trend data — the gauge extended to time. It inherits the gauge's split
(diverging uses the spectrum; sequential uses accent + alert-ramp thresholds) and is
**Tufte by default**: high data-ink, direct labels, no legends or chartjunk
([00 · Principles](00-principles.md)).

**Forms:**

- *Sparkline* — compact, axis-less, inline (table cells, stat tiles, small
  multiples); latest point marked and labeled.
- *Line / area* — full chart with minimal axes; area fill at low alpha.
- *Bar* — categorical or bucketed-over-time.

**Semantic coloring** (mirrors the gauge):

- *Diverging trend* — colored by deviation from a dashed nominal baseline (green/0):
  warm above, cool below ([01 · Color](01-color.md) §2).
- *Threshold trend* — `accent` line; crossing warn/crit makes the endpoint and label
  adopt the alert-ramp color and word ([01 · Color](01-color.md) §3); the threshold
  is a dashed ramp-colored line.
- *Plain trend* — a single series with no semantic value: a neutral `text`/`accent`
  line.

**Many series → small multiples.** The preferred answer to "many entities" is a grid
of single-series sparklines with status-colored endpoints, **not** one multi-line
chart. Genuine overlay is capped at ~2–3 series using a mono-ramp (`accent` solid,
`muted` dashed) + line style + **direct end-labels** — never a categorical color
legend. The spectrum is diverging, not categorical
([01 · Color](01-color.md) §7).

**Anatomy:** plot area; optional dashed nominal/threshold line; a latest-point
marker with end-label; minimal-to-no axes; no gridlines beyond the baseline;
crosshair/hover for exact values.

**States:** default; no-data (`muted`, `m-unknown`, `UNK`); loading (skeleton);
error. Hover/focus reveals point values.

**Accessibility:** the endpoint value is always labeled; trend direction and
threshold state are echoed in words; never color alone. Lines and markers meet the
[10 · Accessibility](10-accessibility.md) floors.

**Terminal:** a block/braille sparkline — `cpu ▂▃▅▆▇█ 94% CRIT`; diverging draws a
baseline row; small multiples stack as a column.

### Modal / dialog

The most behavior-heavy control.

- **Anatomy:** a dimming **scrim**, the dialog `surface` (border, `deliberate`
  shadow), header (title + `m-close`), body, footer actions right-aligned (primary +
  ghost).
- **Behavior:** focus is **trapped** while open and **returns to the trigger** on
  close; `Esc` and scrim-click dismiss (except a blocking/destructive confirm);
  `aria-modal`, labelled by the title. Enters `deliberate`/`enter`, exits `exit`
  ([08 · Motion](08-motion.md) §1).
- **Sizes:** small (confirm), medium (form) — constrained to the measure, never
  full-bleed on desktop.
- **Destructive confirm:** the primary action is the **`critical` color, not
  `accent`** — the one place a primary button leaves accent. Its label is a **verb
  that names the act** (`DELETE`), the target is named, and irreversibility is stated
  ([09 · Voice](09-voice-content.md) §3); Cancel is the ghost. This destructive rule
  applies to any destructive primary action, not only in modals.
- **Terminal:** a centered bordered box over a dimmed screen; key-navigated, `Esc`
  cancels.

### Tabs

- **Anatomy:** a row of labels over a content area; selected = `accent` underline +
  `text`, others `muted`.
- **States:** default/hover/focus/**selected**/disabled; one selected at a time.
- **Terminal:** a label row, active item bracketed or reverse-video.

### Tooltip

- **Anatomy:** a small `surface` bubble (`border`, `caption` text) on an anchor with
  a dotted-underline cue.
- **Behavior:** on hover **and** focus; dismiss on blur/`Esc`. **Never** the sole
  carrier of essential information ([10 · Accessibility](10-accessibility.md)).
- **Terminal:** a status-line hint, or omitted.

### Toast / notification

- **Anatomy:** a transient `surface` card — severity left-rule + glyph, message,
  `m-close`; stacks in a corner.
- **Behavior:** auto-dismiss on a timer (longer for higher severity; **critical
  persists** until acknowledged); `m-bell` is the notification affordance;
  `aria-live` polite, assertive for critical. Wording per [09 · Voice](09-voice-content.md).
- **Terminal:** a transient bottom line, severity glyph + message.

### Menu / nav

- **Anatomy:** a `surface` popover or sidebar list; items take hover/focus/selected/
  disabled; optional leading mark, trailing `m-chevron` for submenus.
- **Behavior:** keyboard-navigable; selected = accent tint + rule; dismiss on
  select/blur/`Esc`.
- **Terminal:** a bordered list; arrow-key nav, selected reverse-video.

### Breadcrumb

- **Anatomy:** `muted` ancestor links separated by `m-chevron`; the current page is
  `text`, not a link.
- **Terminal:** `Grid › Sector 12 › node-13`.

### Pagination

- **Anatomy:** prev/next `m-chevron` controls + numbered pages; current page =
  `accent` tint; `…` for elision.
- **States:** prev/next disabled at the ends; current is selected.
- **Terminal:** `‹ 1 ·2· 3 … 9 ›`.

## 4 · Catalog (specs to follow)

The v1 set, the data-bearing trio (status badge, gauge/meter, chart/sparkline), and
the conventional catalog (modal, tabs, tooltip, toast, menu, breadcrumb, pagination)
are now specified.

**Progress bar** needs no spec: a *determinate* progress bar is the
[sequential meter](#gauge--meter) (magnitude 0→100%); an *indeterminate* one is the
[loading](#1--the-state-matrix) state. Compose those.

The v2 set below came from building the Operations Console: each is something
the kit had to hand-roll from primitives.

### App shell

- **Anatomy:** a fixed header (brand wordmark in `accent` with ambient glow ·
  status summary · meta such as the clock and freshness · actions) over a
  sidebar nav ([menu](#menu--nav), sidebar variant) and a scrolling main area.
  The header and nav are `surface`; main is `bg`.
- **Rules:** the status summary is a row of [status badges](#status-badge) with
  counts; `critical` pulses. The shell carries no data of its own.
- **Terminal:** a top status line and a left pane; `F`-keys or digits switch panes.

### Stat tile

- **Anatomy:** `caption` label, a large tabular-numeric value with a `muted`
  unit, an optional signed delta carrying a diverging mark (`m-warm`/`m-cool`),
  and a foot row for a [sparkline](#chart--sparkline) and/or a status badge.
- **Color:** the value may take a [status step](01-color.md#3--the-vivid-status-set-alert-ramp)
  as an outline on dark surfaces only; on light the value stays `text` and the
  badge carries the status (the treatment rule).
- **Terminal:** `LABEL  97%  ▲ +2` on one line.

### Key-value list

- **Anatomy:** a two-column definition list — `caption`/`muted` keys, `text`
  values, numeric values right-aligned in tabular mono, row rules in `border`.
  Density modes as for tables. Values may hold a badge, tag, or link.
- **Terminal:** `key ........ value`, dot leaders.

### Log view

- **Anatomy:** a `bg` well of monospaced lines: `muted` timestamp, severity
  word with its glyph, message. Critical lines get a faint critical tint across
  the row. Follows the tail; scrolling up pauses following and shows a
  `PAUSED · n new` affordance that resumes.
- **Color:** severity words use the outline treatment on dark and the fill chip
  on light. Never color alone: the word and glyph are always present.
- **Voice:** every line follows what happened · why · what to do.
- **Terminal:** this *is* the terminal; `tail -f` semantics.

### Freshness indicator

- **Anatomy:** a dot and a word — `LIVE`, `PAUSED`, `STALE`, `OFFLINE` — with the
  last-update timestamp in `micro` tabular mono.
- **Color:** live = `low` green and the pulse (a live element); stale = `medium`;
  offline = `critical`; paused = `muted`. The word is the signal, the dot the
  reinforcement.
- **Terminal:** the same word in the status line.

### Stepper

- **Anatomy:** an ordered row of steps — a numbered disc (or `m-low` check when
  done, `m-critical` when blocked), a label, connectors between. One step is
  current (`aria-current="step"`): `accent` disc, `text` label. Done steps are
  `muted` with the check; upcoming are `muted`; blocked carries the critical glyph.
- **Rules:** the wizard pattern's spine. Steps are never color-only: the glyph
  and the number carry state.
- **Terminal:** `[✓] Scope  [2] Targets  [ ] Review`.

### Textarea · Fieldset

- **Textarea:** the [input](#input-text-field) at multi-line: same label, field,
  helper/error anatomy and states; vertical resize only.
- **Fieldset:** a group of fields under a `caption`/`muted` legend with an
  optional hint, `space-2` between fields. Groups are the form pattern's unit.
- **Terminal:** a titled box around the fields.

### Drawer

- **Anatomy:** the [modal](#modal--dialog) anchored to an edge (right by
  default): scrim, a full-height `surface` panel with header (title + `m-close`),
  scrolling body, footer. Same behavior as the modal — focus trapped and
  returned, `Esc` and scrim dismiss unless blocking. Enters from its edge.
- **Use:** the detail view beside a dashboard, so the heatmap stays in view.
- **Terminal:** a right-hand pane.

### Timeline

- **Anatomy:** an ordered list of events down a rule: each event has a dot in
  its severity color (with the status glyph for ramp steps), a `muted` time, a
  title, an optional body. Newest first unless stated.
- **Use:** alert history, audit trails. Wording per the voice rules.
- **Terminal:** `02:14:31Z ✖ DOWN  Uplink down — sector 12.` per line.

### Segmented control · Theme picker · Mode picker

- **Segmented control:** a pill (`radius` full) radio group on `bg` with a quiet
  `edge`: each segment is a pill button, icon and/or `caption` label, `muted` at
  rest, `text` + accent tint + accent inset ring when checked. One is always
  checked. `role="radiogroup"` with `role="radio"` segments; arrow keys move.
- **Mode picker:** the segmented control with three marks — `m-screen` (follow
  the OS via `prefers-color-scheme`), `m-sun` (light), `m-moon` (dark).
- **Theme picker:** the segmented control whose segments are the three **theme
  emblems** — `m-tron`, `m-matrix`, `m-compaq` — each drawn in its own anchor
  color (`--_c`), dimmed at rest, full and glowing when checked. The emblem is
  the only place a non-active theme's accent appears in the chrome.
- **Terminal:** `(system) [light] (dark)` with the checked item bracketed.

### Slider (range)

- The native `<input type="range">`, styled: a `bg` track with a `border` edge,
  `accent` fill up to the thumb, a `surface` thumb ringed in `accent` with
  ambient glow. Focus is the `text` outline on the thumb. Pair it with a visible
  numeric value — the thumb position is never the only readout.
- **Terminal:** `[=====|-----] 42`.

### Rating · Bookmark

- **Rating:** five `m-star` marks as a radio group; stars up to the chosen one
  fill in `accent`, the rest stay `muted` outlines. Hover previews. A read-only
  rating drops the hover and the pointer. Always accompany with the numeric
  value or count — fill is not a readout.
- **Bookmark:** a pressed toggle (`aria-pressed`) carrying `m-bookmark`:
  `muted` outline at rest, `accent` fill when saved, with ambient glow on dark.
- **Terminal:** `★★★☆☆ 3/5` · `[bk]` / `[BK]`.

### Share

- A ghost [button](#button) carrying `m-share` whose action opens a popover
  [menu](#menu--nav) of destinations (copy link, export, send). Share is an
  action, not a state: it never fills or stays pressed.
- **Terminal:** `[shr]` opening a bordered list.

### Tree view

- **Anatomy:** nested `<details>`: each branch row is the summary with a
  rotating `m-chevron` twist, an optional object mark, and a label; leaves are
  rows indented past the twist. Children hang off a vertical `edge` rule. The
  current node takes the **selected** treatment.
- **Rules:** the tree *is* the keyboard model — native disclosure, `Enter`/`Space`
  toggles. Depth beyond four levels wants a different view.
- **Terminal:** `▸ branch` / `▾ branch` with two-space indents.

### Accordion

- A stack of `<details>` on one `surface` with a quiet `edge`, hairline `edge`
  rules between sections. Each summary is a `caption`-style label with the
  `m-chevron` twist; the body is `muted` prose. Any number may be open; use
  the [tabs](#tabs) when exactly one view should show at a time.
- **Terminal:** `▸ SECTION` rows.

### Field extras: required · trailing control · character count

- A **required** field marks its label with `*` in `status/critical` *and* says
  so in the helper or legend — the mark alone is color. A **trailing control**
  (password reveal `m-eye`, clear `m-close`, number stepper chevrons) sits inside
  the field at the right edge; the field pads for it. A **character count**
  rides the message row, right-aligned, and turns `status/critical` past the
  limit while the field takes the error state.
- **Number:** the native spinner is hidden; the stepper is two stacked
  chevron buttons in the trail, keyboard arrows still step. **Password:** the
  reveal is a pressed toggle; shown state is announced, never only drawn.
- **Date · time:** the native inputs, styled with the field's chrome and
  `color-scheme` matched to the mode so the native picker is not a white flash.
  Prefer a **preset row** ([segmented control](#segmented-control--theme-picker--mode-picker):
  15 min · 1 h · 24 h · 7 d · custom) to a calendar; the calendar is the
  custom case.

### Combobox (autocomplete)

- The [input](#input-text-field) with a filtered [menu](#menu--nav) popover
  beneath it: typing filters, the match is emphasized in `accent`, arrows move,
  `Enter` picks, `Esc` closes. For short static lists the native `<datalist>`
  variant needs no script. Use when the list is long, remote, or free text is
  also legal; use the [select](#select) when it is short and closed.
- **Terminal:** the input with a bordered list of matches below it.

### File drop

- A dashed `border` target around a native file input: `m-upload`, a title,
  a hint line (what types, what size). Hover, focus, and drag-over promote the
  edge to `accent` with ambient glow; drag-over also tints. Chosen files list
  beneath with a remove `m-close`; progress is the [progress bar](#progress-bar).
  The input stays a real `<input type=file>`, so keyboard and screen readers get
  the native dialog.
- **Terminal:** a path prompt.

### Checkbox group · Select-all

- A `fieldset` of [checks](#checkbox--radio--toggle) under a `caption` legend.
  A **head check** above an `edge` rule selects all and shows **indeterminate**
  (an `accent` box with a dash) when some are checked. Tables use the same head
  check in the first column with a **bulk bar** (count in `accent` + actions) in
  place of the caption while anything is selected.
- **Terminal:** `[x] [-] [ ]` with the dash for partial.

### Avatar · Identity

- A circle of `surface-raised` with a quiet `edge` holding an image, initials
  (`mono`, medium), or `m-user`. Three sizes (24 · 32 · 48). An **agent** takes
  the rounded square. An optional **presence dot** at the lower right carries a
  status step; it never carries meaning alone — the identity row beside it says
  the word. A **stack** overlaps avatars by a third, bordered in `surface`.
- **Identity:** avatar + name (`text`) + a `muted` sub-line (role, host, last
  seen). The shell header's user control is an identity.
- **Terminal:** `@name` and the status word.

### Divider · Link

- **Divider:** an `edge` hairline (quiet; `--strong` uses `border`), optionally
  carrying a `micro` uppercase `muted` label at center. A vertical divider
  separates inline groups in toolbars.
- **Link:** `accent`, underline on hover; `m-external` after a link that leaves
  the app. A `--text` link in running prose keeps `text` with a `muted`
  underline so a paragraph is not a wall of accent. A `--muted` link is for
  secondary chrome (breadcrumbs, footers). Disabled links are `aria-disabled`
  at 50%, not removed.

### Code block · Copy button

- **Code block:** a `bg` well with a quiet `edge`, `caption` mono, optional
  head row (language or filename, `micro` uppercase) with the copy button at
  the right; without a head the copy button floats top-right. `--lines` adds
  `muted` line numbers that do not select. Hover promotes the edge.
- **Copy button:** `m-copy` + "copy"; on success it swaps to `m-check` +
  "copied" in `accent` for about two seconds and announces it. The swap is
  glyph + word, never color alone.
- **Terminal:** a bordered block; copy is the terminal's own.

### Popover · Hover card

- **Popover:** an anchored `surface-raised` panel with a quiet `edge`, shadow,
  and ambient glow, opened by click or keyboard and closed by `Esc`, outside
  click, or its own action. Placement below by default; above, right, or
  end-aligned as space demands. It carries content richer than a
  [tooltip](#tooltip) and lighter than a [modal](#modal--dialog); it never traps
  focus.
- **Hover card:** the popover on hover or focus of an identity, host, or
  reference — a detail preview. Opens after a deliberate delay, closes when the
  pointer leaves. Hover is a preview only; the same content must be reachable
  by click.

### Button group · Split button

- **Button group:** adjacent [ghost buttons](#button) joined edge to edge, outer
  corners rounded, sharing borders. For a set of *actions* (back · forward ·
  refresh). An `aria-pressed` member takes the selected treatment; for an
  exclusive *choice* use the [segmented control](#segmented-control--theme-picker--mode-picker).
- **Split button:** a primary action with a narrow chevron half that opens a
  [menu](#menu--nav) of alternatives (Deploy ▾ → deploy with canary, dry run).
  The main half never changes what it does.

### Progress bar

- The native `<progress>`, styled: `bg` track, `border` edge, `accent` value.
  For **jobs and transfers** (uploads, rollouts, batch runs) with a row above
  carrying the label and the value or ETA in `text`. **Indeterminate** sweeps a
  soft accent band; static under reduced motion. Capacity against a limit is
  not a progress bar — that is the [sequential meter](#gauge--meter) with its
  thresholds.
- **Terminal:** `[=====>    ] 54% · 1m 20s left`.

### Table states · Selection · Sticky · Resize

- **States:** empty, loading, and error render as one full-width row holding
  the [state panel](#4--catalog-specs-to-follow) (loading may instead be three
  skeleton rows). The header stays so columns keep their meaning.
- **Selection:** a head check in the first column with indeterminate for
  partial; selected rows take the selected treatment; a **bulk bar** replaces
  the toolbar while anything is selected.
- **Sticky:** inside a scrolling wrap the header pins to the top on `surface`.
- **Resize:** headers are natively resizable (`resize: horizontal`); the
  current widths are the consumer's to persist.

### Command palette

- The [modal](#modal--dialog), docked near the top, composed of a search
  [input](#input-text-field) (`m-search`, no border, body size), a
  [menu](#menu--nav) of matched commands with `micro` hints and [kbd](#skip-link--kbd)
  chords, and a foot of key hints (↑↓ move · ↵ run · esc close). Opens on
  `⌘K`; the first match is selected; typing filters. Groups by heading
  (navigate · actions · recent). Everything here is an existing component;
  the palette is only the layout.
- **Terminal:** the same list at the prompt.

### Diff view

- Unified by default; split side by side when width allows. Each line has
  old/new line numbers (`muted`, unselectable), a sign column, and the code.
  Additions tint and sign in the **cool pole** (`spectrum-teal`), removals in
  the **warm pole** (`spectrum-orange`) with a faint strike — spectrum, not
  status, because a removal is not an alert. A head row counts `+n −m`;
  hunk headers are `muted` on a faint band. Use for config changes and plan
  previews before apply.
- **Terminal:** `+`/`-` prefixed lines in the same two colors.

### Data viewer (JSON · edn)

- The [tree view](#tree-view) with typed leaves: keys `muted`, keywords and
  numbers `accent`, strings `text`, booleans `spectrum-teal`, nil `muted`
  italic. Collapsed branches show their count. A bar above offers expand-all,
  collapse-all, and copy. Depth is unbounded here, unlike the nav tree.
- **Terminal:** pretty-printed with two-space indents.

### Terminal pane

- The [log view](#log-view) with a head (session name, freshness) and an
  input row: an `accent` prompt, a borderless input, a blinking block cursor
  (static under reduced motion). Commands echo in `accent`, errors in
  `status/critical`. Focus-within promotes the pane's edge. For attaching to a
  live session or running a one-off; not a replacement for the real terminal.

### Inline confirm

- A destructive action that expands **in place** instead of raising a modal:
  the trigger is a ghost button; open, it turns `status/critical` and a panel
  with a critical edge drops beneath — what will be destroyed (named, in
  `status/critical`), that it cannot be undone, an input that must match the
  target's name, and the [danger button](#button) that stays disabled until it
  does. Cancel collapses. Use when the action is one of many on a page (a row,
  a card); use the [modal](#modal--dialog) when it is the page's one decision.
- **Terminal:** `type the name to confirm: _`.

### Skip link · Kbd

- **Skip link:** the first focusable thing on a page, visually hidden until
  focused, jumping to `#main`. Required by [10 · Accessibility](10-accessibility.md).
- **Kbd:** a small `surface` chip for a key name; combinations are chips joined
  with `+`. Used in menus and help, never as the only way to discover an action.

## 5 · Usage rules

### Do

- Define a component's states from the matrix; reference tokens, never ad-hoc values.
- Use chrome roles for the component, the alert ramp only for status.
- Keep targets accessible regardless of density mode.
- Give every component its terminal form, or state it has none.

### Don't

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
