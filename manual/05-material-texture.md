# 05 · Material & Texture

> **Status:** Stub. Structure defined; content pending a dedicated drafting cycle.

## Purpose

Governs the CRT/terminal material qualities that give the anchors their feel —
glow, scanlines, plasma bloom — and, crucially, the limits on them.

## What this chapter will define

- **Glow** — how the theme `glow` role is applied (radius, intensity) to accents
  and emphasis, per [01 · Color](01-color.md) §6.
- **Scanline / texture** — optional overlays for the dark CRT themes; when on/off.
- **Plasma bloom** — the Compaq amber's characteristic spread.
- **Restraint rules** — effects may never reduce legibility or contrast; they are
  garnish on chrome, never applied to data color or body text at the cost of
  reading. This is where Principle 1 polices Principle 2.

## Open questions

- Are effects purely decorative chrome, or can they carry meaning (e.g. glow =
  active/live)? If meaningful, they must be specified, not just styled.
- Light-mode behavior: does material mostly disable in light variants?

## Relation to other chapters

- Bounded by [00 · Principles](00-principles.md) (legibility first) and
  [10 · Accessibility](10-accessibility.md).
- Consumes the `glow` role from [01 · Color](01-color.md) §6.
