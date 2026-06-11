# 11 · Usage & Governance

> **Status:** Stub. Structure defined; content pending a dedicated drafting cycle.

## Purpose

Governs the system itself: how it is used, extended, versioned, and kept honest.

## What this chapter will define

- **Do / don't plates** — worked correct-and-incorrect examples, in the tradition
  of the graphic standards manual. (The Color chapter already carries its own;
  this chapter generalizes the practice.)
- **Extension rules** — how to add a token, a component, or a chapter; the
  requirement that new semantic colors bind to a standard or record their rationale.
- **Source of truth** — prose is authoritative for meaning, `edn` for values; how
  to resolve drift between them.
- **Versioning** — how changes are numbered and what counts as breaking.
- **Serialization policy** — when and how the `edn` backbone is turned into CSS,
  ANSI, or SVG. Built per consumer, on demand — not maintained speculatively.

## Open questions

- Versioning scheme (semver-like? date-based?).
- Who/what arbitrates a prose-vs-`edn` conflict, and how is it recorded?

## Relation to other chapters

- Generalizes the usage rules in [01 · Color](01-color.md) §7.
- The serialization policy is the deliberately-deferred generator question.
