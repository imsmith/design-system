# 10 · Accessibility

> **Status:** Stub. Structure defined; content pending a dedicated drafting cycle.
> Cross-cutting: every other chapter answers to this one.

## Purpose

Governs the floor below which no other decision may fall: contrast, non-color
encoding, focus, and motion safety.

## What this chapter will define

- **Contrast minimums** — target ratios for text and UI on each theme variant
  (light and dark), and the requirement that theme values be chosen to meet them.
- **Never color alone** — the binding rule: every status conveyed by color is
  *also* conveyed by shape, label, or position. This is why
  [04 · Marks & Iconography](04-marks-iconography.md) must supply a glyph per
  status step.
- **Focus visibility** — focus indicators that survive every theme.
- **Motion safety** — `prefers-reduced-motion` handling, per [08 · Motion](08-motion.md).
- **Terminal/print** — how status survives in monochrome and plain text.

## Open questions

- Target conformance level (WCAG AA vs. AAA where feasible)?
- Do the current theme values in [01 · Color](01-color.md) §6 all pass at the chosen
  level, or do some need tuning? (Verify, don't assume.)

## Relation to other chapters

- Constrains color values in [01 · Color](01-color.md) §6.
- Requires the glyph set in [04 · Marks & Iconography](04-marks-iconography.md).
- Bounds [05 · Material & Texture](05-material-texture.md) and [08 · Motion](08-motion.md).
