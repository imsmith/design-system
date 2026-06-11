# 11 · Usage & Governance

> **Status:** Drafted.

Governs the system itself — how it is read, used, extended, versioned, and kept
honest. The capstone: it generalizes the per-chapter rules into one process.

## 1 · Source of truth

The manual and the `edn` backbone are authoritative for different things:

- **Prose (the chapters) is authoritative for MEANING** — what a token *is for*,
  the rules and the rationale.
- **`edn` (`tokens/**`) is authoritative for VALUES** — the literal colors, sizes,
  codepoints.

When they disagree, that is a **defect**. Resolve it by fixing the `edn` to match
the decision recorded in the chapter, or by amending the chapter deliberately —
never by letting them drift. Where a value can be *verified* (contrast), a tool in
`tools/` is the tiebreaker: it reads the `edn` and proves or disproves the claim.

## 2 · Do / don't plates

In the graphic-standards tradition, normative rules are taught with worked
**correct-and-incorrect** examples, not prose alone. Every chapter carries its own
§Usage rules; [01 · Color](01-color.md) §7 is the model. The practice is required:
a new rule ships with at least one do and one don't.

## 3 · Extension rules

Adding to the system follows fixed gates:

- **New semantic color** — must **bind to a standard** (OASIS or equivalent) or
  record its rationale in [01 · Color](01-color.md). No free-floating meanings. Then
  it must pass the contrast floor in [10 · Accessibility](10-accessibility.md).
- **New mark** — follows the [04 · Marks](04-marks-iconography.md) style spec
  (24×24 / 2px / outline / `currentColor`), registers in `tokens/marks.edn` with
  Nerd Font / Unicode / ASCII fallbacks, and must not reuse the reserved status
  shapes.
- **New component** — implements the [06 · Components](06-components-states.md) state
  matrix and anatomy conventions; composes existing tokens, inventing none.
- **New pattern** — composes components on the grid ([07 · Patterns](07-patterns.md));
  defines its empty/loading/error triad.
- **New chapter** — takes a number, follows the chapter shape, and links its
  relations both ways.

Every addition updates **both** the chapter and the `edn`, in the same change.

## 4 · Versioning

**SemVer** — `major.minor.patch`:

- **major** — a breaking change: a token renamed or removed, a value changed in a
  way that alters rendering or meaning, a component/mark removed, a semantic
  redefined.
- **minor** — additive and backward-compatible: a new token, mark, component,
  pattern, or chapter.
- **patch** — a fix that does **not** change meaning: a typo, a clarified rule, or a
  value corrected *toward* its already-documented intent (note it).

The APCA contrast correction of the theme tokens, for example, was a corrective
change toward the documented legibility intent — recorded, and the kind of thing a
`minor`/`patch` note exists for.

## 5 · Serialization policy

The `edn` backbone is the single source; per-medium artifacts (CSS custom
properties, ANSI tables, SVG, a Tailwind/theme config) are **generated per consumer,
when a real consumer needs them** — never maintained speculatively. This is the
deliberately-deferred generator, and it stays deferred until there is a concrete
need.

`tools/` is **verification-first**: the contrast verifier
([10 · Accessibility](10-accessibility.md) §3) is the precedent — a tool that proves
the tokens, not one that ships them. Any JS/other-stack tooling runs **inside a
distrobox**, never on the host; `node_modules` is never committed. A generator, when
built, joins `tools/` under the same rules.

## 6 · Licensing

Multi-licensed by content type (`LICENSE.md` is authoritative):

| Content | License |
| --- | --- |
| Code / tooling (`tools/**`) | `AGPL-3.0-or-later` |
| Manual prose (`manual/**`) | `CC-BY-NC-SA-4.0` |
| Tokens & assets (`tokens/**`, `assets/**`) | `CC-BY-NC-SA-4.0` |
| Fonts (third-party, not vendored) | `OFL-1.1` |

## 7 · Amendment process

1. Decide the change against the relevant chapter (brainstorm if non-trivial).
2. Update the chapter **and** its `edn` together.
3. Re-run any verifier the change touches (e.g. contrast).
4. Bump the version per §4; note corrections.
5. Ship the do/don't if a rule changed.

## Relation to other chapters

- Generalizes the §Usage rules of every chapter.
- Owns the serialization policy that [01 · Color](01-color.md) and the token files
  defer to.
- Enforces the standards-anchoring of [01 · Color](01-color.md) and the floors of
  [10 · Accessibility](10-accessibility.md).
