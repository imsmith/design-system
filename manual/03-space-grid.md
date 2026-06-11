# 03 · Space & Grid

> **Status:** Stub. Structure defined; content pending a dedicated drafting cycle.

## Purpose

Governs spacing, sizing, and layout structure — the rhythm everything sits on.

## What this chapter will define

- **Spacing scale** — a base unit and a stepped scale (likely powers/multiples of
  a single root), used for margin, padding, and gaps.
- **Grid** — column structure and breakpoints for web; character-cell grid for
  terminal.
- **Density modes** — comfortable vs. compact, since dashboards and TUIs need
  tighter rhythm than prose.
- **Alignment rules** — how the character grid and the pixel grid reconcile.

## Open questions

- Base unit: 4px? 8px? Or define in terms of the type scale's root?
- Do terminal cells and web spacing share one logical scale or two reconciled ones?

## Relation to other chapters

- Shares its modular root with [02 · Typography](02-typography.md).
- Drives component anatomy in [06 · Components & States](06-components-states.md).
