# 08 · Motion

> **Status:** Stub. Structure defined; content pending a dedicated drafting cycle.

## Purpose

Governs animation and transition — duration, easing, and what motion is allowed
to mean.

## What this chapter will define

- **Duration scale** — a small named set (instant / fast / moderate / deliberate).
- **Easing set** — the permitted curves.
- **Meaningful motion** — what state changes animate and why; motion as a status
  channel (e.g. pulsing for live/critical) and its limits.
- **Reduced motion** — honoring `prefers-reduced-motion`; the static fallback.
- **Terminal motion** — what, if anything, animates in a TUI (spinners, blink).

## Open questions

- Is the CRT lineage expressed in motion (flicker, sweep) or kept still for calm?
- Does motion ever carry meaning that must survive `prefers-reduced-motion`? If so
  it needs a non-motion fallback.

## Relation to other chapters

- Reduced-motion compliance answers to [10 · Accessibility](10-accessibility.md).
- Live/critical pulsing ties to [01 · Color](01-color.md) §3 and
  [05 · Material & Texture](05-material-texture.md).
