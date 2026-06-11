# 02 · Typography

> **Status:** Drafted.

Type is the system's voice. The identity is monospace — the terminal/CRT lineage —
extended just far enough to stay readable in long form.

- Values: `tokens/typography.edn`

## 1 · Families — a duo

| Role | Family | Used for |
| --- | --- | --- |
| **Voice** (mono) | **MartianMono Nerd Font** | headings, labels, data, code, all UI |
| **Prose** (proportional) | **Martian Grotesk** | long-form running text only |

Both are SIL OFL, both from Evil Martians' single family — Martian Grotesk is the
proportional sibling of Martian Mono, so the two share DNA and never clash. The
mono is the **Nerd Font** patch: visually identical to plain Martian Mono for
text, but carrying thousands of icon glyphs at PUA codepoints — which is what lets
terminal contexts render real iconography (see §5 and
[04 · Marks & Iconography](04-marks-iconography.md)).

**Variants & delivery:**

- `MartianMono Nerd Font` — general/web use.
- `MartianMono Nerd Font Mono` — strict single-width cells, for terminals.
- The Nerd Font ships from the Nerd Fonts release (OFL retained); **self-host** for
  web. Where it isn't self-hosted, plain **Martian Mono** (Google Fonts) is the web
  fallback — the icon glyphs simply won't be present, which is fine on the web
  because icons come from the SVG sprite there.
- **Prose has no Nerd Font** — Nerd Fonts patch only monospaced fonts, and prose
  never needs icon glyphs. Martian Grotesk falls back to Space Grotesk, then system
  sans.

The hard rule: **mono is the default**; the proportional face is the *exception*,
used only for paragraphs of running prose. Data, labels, and UI are always mono.

## 2 · Scale

Modular scale, base 16px = 1rem, headings on a ~1.25 (major third) ratio.

| Token | px | rem | Role |
| --- | --- | --- | --- |
| `display` | 40 | 2.5 | hero / display |
| `h1` | 32 | 2.0 | page title |
| `h2` | 24 | 1.5 | section heading |
| `h3` | 20 | 1.25 | subsection heading |
| `lead` | 18 | 1.125 | lead paragraph |
| `body` | 16 | 1.0 | base running text |
| `small` | 14 | 0.875 | secondary text |
| `caption` | 12 | 0.75 | captions / labels |
| `micro` | 11 | 0.6875 | dense data / fine print |

`micro` and `caption` exist for the data-dense displays this system targets; use
them for tables and telemetry, not body copy.

## 3 · Weights

Three only: **Regular 400** (body, data), **Medium 500** (labels, emphasis),
**Bold 700** (headings). Martian Mono offers more, but a constrained set keeps
hierarchy legible and the terminal mapping honest (a terminal has roughly
regular / bold / dim to work with).

## 4 · Measure & leading

| Context | Line-height | Measure |
| --- | --- | --- |
| Headings | 1.15 (tight) | — |
| Mono UI / data | 1.4 (snug) | unwrapped — never wrap data rows |
| Prose | 1.6 (normal) | 60–75 characters |

Long mono prose is the worst case for reading, which is exactly why prose escapes
to Martian Grotesk (§1). Never set a paragraph of running text in mono just to keep
it "on brand" — the brand is the *voice*, and the voice doesn't include body copy.

## 5 · Terminal degradation

In a terminal the scale collapses — every character is one cell, one size. Hierarchy
is rebuilt from the channels a terminal does have:

1. **UPPERCASE** for headings/labels
2. **weight** — bold and dim
3. **reverse video** for emphasis/selection
4. **letter-spacing** and **rule lines** (box-drawing) for structure
5. **Nerd Font icon glyphs** — the rich mark tier

Because the mono is a Nerd Font, the terminal gets actual icons, not just ASCII.
This makes `MartianMono Nerd Font Mono` the bridge between this chapter and the
terminal fallbacks in [04 · Marks & Iconography](04-marks-iconography.md) §5: where
that chapter lists Unicode/ASCII fallbacks, a Nerd-Font terminal can render the
mark glyph directly. (Wiring specific Nerd Font codepoints into `tokens/marks.edn`
is a follow-up.)

## 6 · Usage rules

**Do**

- Default to mono. Reach for Martian Grotesk *only* for running prose.
- Use the named scale tokens; don't invent sizes.
- Keep to the three weights.
- Respect the measure — wrap prose at 60–75ch, never wrap data rows.

**Don't**

- Don't set data, labels, or UI in the proportional face.
- Don't set long body copy in mono.
- Don't rely on size alone for hierarchy where it must survive a terminal — pair it
  with case, weight, or rules.

## Relation to other chapters

- Shares its modular root (base 16, ratio) with [03 · Space & Grid](03-space-grid.md).
- The Nerd Font enables the terminal mark tier of [04 · Marks & Iconography](04-marks-iconography.md).
- Contrast minimums for text come from [10 · Accessibility](10-accessibility.md).
- Type tokens are consumed by [06 · Components & States](06-components-states.md).
