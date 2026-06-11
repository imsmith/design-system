# 06 · Components & States

> **Status:** Stub. Structure defined; content pending a dedicated drafting cycle.

## Purpose

The first chapter of the UX-manual lineage. Governs the catalog of components,
their anatomy, and the state matrix every interactive element must satisfy.

## What this chapter will define

- **State matrix** — the states every interactive component must define: default,
  hover, focus, active, disabled, loading, error. Each state maps to chrome roles
  and (where relevant) the status ramp.
- **Component anatomy** — parts, spacing, and which tokens each part references.
- **Data-bearing components** — gauges, meters, status badges, charts: how they
  consume the spectrum (muted) vs. the alert ramp (vivid).
- **Terminal equivalents** — the TUI form of each component where one exists.

## Open questions

- Component scope for v1 — the minimal set worth specifying first?
- Are components specified abstractly (token-referencing anatomy) or with reference
  implementations? If implementations, in what (HEEx, since Phoenix is a consumer)?

## Relation to other chapters

- States consume chrome from [01 · Color](01-color.md) §6 and status from §3.
- Compositions of components live in [07 · Patterns](07-patterns.md).
- Focus/disabled rules answer to [10 · Accessibility](10-accessibility.md).
