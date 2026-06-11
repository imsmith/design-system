# 04 · Marks & Iconography

> **Status:** Drafted.

Marks are the system's primary **non-color** channel. The Color chapter's status
ramp and the Accessibility chapter's "never color alone" rule both depend on a
shape that means something on its own — this chapter supplies it.

Three families: **status glyphs** (the load-bearing set), **diverging marks** (for
reading the temperature spectrum without color), and a **functional starter set**
(everyday UI icons). All share one style and live in one sprite.

- Geometry: `assets/marks/sprite.svg` (SVG `<symbol>` sheet)
- Registry: `tokens/marks.edn` (ids, categories, terminal fallbacks)

## 1 · Style spec

One style governs every mark:

| Property | Value |
| --- | --- |
| Grid | 24×24 keyline |
| Stroke | 2px |
| Caps / joins | round |
| Construction | monoline **outline** — no fills (filled dots/`?` excepted) |
| Color | `currentColor` — the mark inherits the element's text/accent color |
| Active state | optional accent **glow** (see [05 · Material & Texture](05-material-texture.md)) |

This is the Tron-vector lineage: crisp strokes, no solid fills. Using
`currentColor` means a mark placed in body text is the text color, a mark on an
accent fill is the `on-accent` color, and status marks tint with the alert ramp —
all without per-mark color tokens.

**Usage:** `<svg><use href="assets/marks/sprite.svg#m-search"/></svg>`, with
`color` set on the SVG or an ancestor.

## 2 · Status glyphs (sign-shape semantics)

Five shapes, one per alert step. The shapes are **distinguishable by silhouette
alone** — the requirement that lets status survive for colorblind readers, in
monochrome print, and in plain terminals. The silhouettes are drawn from road /
ISO 3864 sign conventions so each already carries meaning (Principle 3).

| Step | Shape | Inner | Sprite id | Unicode | ASCII |
| --- | --- | --- | --- | --- | --- |
| critical | octagon (stop) | ✕ | `m-critical` | ✖ | `[X]` |
| high | triangle (warning) | ! | `m-high` | ▲ | `[!]` |
| medium | diamond (caution) | ! | `m-medium` | ◆ | `[*]` |
| low | circle | ✓ | `m-low` | ● | `[+]` |
| unknown | square | ? | `m-unknown` | □ | `[?]` |

These map 1:1 to the alert ramp and its OASIS CAP bindings in
[01 · Color](01-color.md) §3. Color is **reinforcement**; the shape is the signal.
The five status shapes are **reserved** — no functional icon may reuse them.

## 3 · Diverging marks (temperature direction)

For reading the diverging spectrum ([01 · Color](01-color.md) §2) where color
can't be trusted. Chevrons, deliberately distinct from the warning triangle so
data-direction is never mistaken for a status. The mark carries the **sign**;
**magnitude** stays in the numeric value or bar position.

| Pole | Mark | Sprite id | Unicode | ASCII |
| --- | --- | --- | --- | --- |
| warm / over (+) | up chevron | `m-warm` | ⌃ | `^` |
| neutral (0) | dash | `m-neutral` | – | `-` |
| cool / under (−) | down chevron | `m-cool` | ⌄ | `v` |

## 4 · Functional starter set

Nineteen everyday marks, same style. The chevron rotates 90°/180°/270° for the
four directions rather than shipping four symbols.

- **Nav/control:** `m-close`, `m-menu`, `m-chevron`, `m-more`
- **Actions:** `m-search`, `m-add`, `m-remove`, `m-edit`, `m-delete`,
  `m-refresh`, `m-filter`, `m-download`, `m-upload`
- **Objects:** `m-settings`, `m-info`, `m-help`, `m-user`, `m-lock`, `m-bell`

This is a *starter* set, not the final library — extensions follow the style spec
and register in `tokens/marks.edn`. What it deliberately omits (copy, save,
external-link, calendar, etc.) is noted here as future work, not coverage.

## 5 · Terminal & monochrome fallbacks

Every mark degrades, in this order:

1. **SVG** — the sprite, full fidelity.
2. **Unicode** — a single glyph for terminals that render it (`tokens/marks.edn`
   `:unicode`). Status and diverging marks always have one.
3. **ASCII** — a last-resort token (`:ascii`) for pure-ASCII terminals, e.g.
   `[X]` / `[!]` / `[?]` for status, `^` / `-` / `v` for direction.

Status and diverging marks are guaranteed at all three levels — they are
accessibility-critical. Functional marks fall back to a Unicode glyph where a
clean one exists, otherwise to a text label in terminal contexts.

## 6 · Usage rules

**Do**

- Pair every status color with its status glyph — never a bare color swatch.
- Use `currentColor`; let the mark inherit its context's color.
- Keep new icons on the 24×24 / 2px / round / outline style.

**Don't**

- Don't reuse the five status shapes for functional icons.
- Don't fill the outlines (the small inner dots and `?` are the only fills).
- Don't use the diverging chevrons where a warning triangle (status) is meant, or
  vice versa.

## Relation to other chapters

- Supplies the non-color channel required by [10 · Accessibility](10-accessibility.md) §4.
- Realizes the status set and diverging scale of [01 · Color](01-color.md) §2–§3.
- Glow/active treatment governed by [05 · Material & Texture](05-material-texture.md).
- Consumed by [06 · Components & States](06-components-states.md).
