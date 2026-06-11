# 04 · Marks & Iconography

> **Status:** Stub. Structure defined; content pending a dedicated drafting cycle.

## Purpose

Governs symbols: status glyphs, icons, and any identity marks. Critical because
icons are the system's primary **non-color** status channel.

## What this chapter will define

- **Status glyph set** — a shape per status step, so status survives without color
  (colorblind readers, monochrome print, plain terminals). Pairs with the alert
  ramp in [01 · Color](01-color.md).
- **Icon style** — stroke vs. fill, grid, corner treatment; aligned to the CRT
  vector lineage.
- **Rendering targets** — SVG for web/print, Unicode/box-drawing for terminal.
- **Identity marks** — if any wordmark or system mark is needed.

## Open questions

- Adopt an existing open icon set tuned to the style, or draw a minimal bespoke set?
- Which Unicode glyphs are the terminal fallbacks for each status?

## Relation to other chapters

- The status-glyph contract is the non-color half of [01 · Color](01-color.md) §3
  and [10 · Accessibility](10-accessibility.md).
- Vector/glow treatment governed by [05 · Material & Texture](05-material-texture.md).
