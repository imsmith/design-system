# 10 · Accessibility

> **Status:** Drafted. Cross-cutting — every other chapter answers to this one.

The floor below which no other decision may fall. Where aesthetics and legibility
conflict, this chapter is how Principle 1 (*data-legible first*) wins in concrete,
measurable terms.

## 1 · Contrast model — APCA

The system is held to **APCA** (Accessible Perceptual Contrast Algorithm, the
contrast method developed for WCAG 3). APCA is chosen over WCAG 2.x contrast
ratios deliberately: the WCAG 2.x math is known to misjudge dark backgrounds, and
this system's anchor identities (Tron, Matrix, Compaq) are dark-CRT themes — the
exact case WCAG 2.x handles worst. APCA models perceived lightness contrast and is
the right tool for the job.

**Caveat, recorded honestly:** APCA is part of the draft WCAG 3 and is not yet a
ratified or legally-recognized standard. Where a contract or jurisdiction requires
WCAG 2.x AA conformance, that must be checked separately; APCA conformance does not
automatically satisfy it. The system's position is that APCA produces *more
legible* results for this aesthetic, and legibility is the goal.

**Polarity.** APCA reports a signed `Lc` value: positive for dark text on light
backgrounds, negative for light on dark. Thresholds below are stated as
**magnitudes** (|Lc|). **AAA enhancement:** add Lc 15 to any threshold.

## 2 · Adopted thresholds

Per role, the minimum |Lc| an element must clear. Derived from the APCA readability
guidance (Lc 90 preferred body, 75 minimum body, 60 non-body, 45 large/heavy, 30
solid non-text, 15 discernible floor).

| Role / use | Min |Lc| | APCA tier |
| --- | --- | --- |
| Body text | **75** | minimum for columns of body text |
| Muted / secondary text | **60** | non-body content text |
| Border, functional UI outline | **30** | solid semantic non-text |
| `on-accent` label (large/heavy only) | **45** | large/heavy text & fine pictograms |
| Accent as fill (vs. background) | **30** | solid non-text element |
| Decorative hairline (non-essential) | 15 | discernibility floor |
| Disabled / placeholder | 30 | placeholder/disabled tier |

**Role policy decisions** (these set how strict each role is):

- **Muted is readable secondary text** (Lc 60), not a disabled tier — it may carry
  real content (timestamps, captions, help).
- **Borders are functional** (Lc 30) — they outline inputs, cards, and focus
  targets and must be clearly seen, not hairline dividers.
- **The accent is a fill / large-element color**, never body text. The anchor hues
  stay pure (e.g. `#03A062` *is* Matrix green); they are not brightened to pass as
  text. Body emphasis uses the `text` role.

## 3 · Verification

Theme chrome values are verified with the **`apca-w3` reference implementation** —
not a reimplementation of the algorithm — per the project rule to validate against
real ecosystem tools. The verifier and its inputs live in `tools/contrast/`; the
check is reproducible (`node tools/contrast/verify.mjs`).

The first run against the authored theme values found **21 failures**, all in the
chrome layer:

- Dark-mode **muted** text was far too dim (Lc 26–36 against a needed 60).
- **Borders** in dark mode were below the perceptibility clamp (Lc 0.0 —
  effectively invisible); light-mode borders sat at Lc 23.
- Mid-tone **accents** failed as text, and naive "theme-bg as button label"
  failed on 4 of 6 variants.

The fixes raised only `muted` and `border` (keeping each theme's hue), added an
`on-accent` foreground, and converted the accent-label problem into a rule (§ below
and [01 · Color](01-color.md) §6). After correction the suite reports **0
failures**. Body text, anchors, backgrounds, surfaces, and glow were unchanged.

**Residual constraint.** `on-accent` is rated for large/heavy text only (Lc 45).
Body-size text on a solid accent fill is disallowed; use a ghost/outline button.

## 4 · Never color alone

The binding rule of the experience canon: **any meaning conveyed by color is also
conveyed by a second channel** — shape, label, or position. Required because some
readers cannot distinguish hues, and some media (monochrome print, plain
terminals) cannot render them.

- Every status step in the alert ramp ([01 · Color](01-color.md) §3) has a
  corresponding **glyph**, supplied by [04 · Marks & Iconography](04-marks-iconography.md).
- Status is never communicated by a color swatch alone — it carries its glyph
  and/or its text label.
- Diverging data ([01 · Color](01-color.md) §2, §4) pairs the spectrum with a
  numeric value or labeled axis; the hue is a reinforcement, not the sole signal.

## 5 · Focus visibility

- Every interactive element has a focus indicator that is visible in **all** themes
  and both modes.
- The indicator does not rely on the accent alone (an accent ring can collide with
  an accent-filled control). The default is a 2px outline in the `text` role with a
  2px offset, which clears Lc 30 against any surface in the verified themes.
- Focus is never removed without an equivalent replacement.

## 6 · Monochrome & terminal fallbacks

Status and meaning must survive where color does not.

- **Monochrome / print** — status reads from glyph and label; the design is checked
  once in greyscale.
- **Plain terminal (no color / 16-color)** — status maps to glyph + text; the
  diverging spectrum degrades to a labeled scale or ASCII ramp, not raw color.
- **Screen readers** — every status has a text equivalent; color is decorative to
  assistive tech and never the only carrier.

## 7 · Motion safety

Honors `prefers-reduced-motion`: any motion that carries meaning has a non-motion
fallback. Specified in [08 · Motion](08-motion.md); this chapter holds the
requirement that meaning never depends on motion alone.

## 8 · Target size

APCA covers contrast, not hit-area. Interactive targets follow WCAG 2.2 target-size
guidance (minimum 24×24 CSS px, 44×44 preferred for primary actions), reconciled
with the character-cell grid in terminal contexts. Detailed per-component sizing is
set in [06 · Components & States](06-components-states.md).

## Open questions

- Do we also publish a WCAG 2.x AA report for jurisdictions that require it, or
  state APCA-only and handle AA on demand?
- AAA (threshold + Lc 15) as an opt-in mode for high-stakes data displays?

## Relation to other chapters

- Constrains the chrome values in [01 · Color](01-color.md) §6 (verified here).
- Requires the status-glyph set from [04 · Marks & Iconography](04-marks-iconography.md).
- Bounds [05 · Material & Texture](05-material-texture.md) and [08 · Motion](08-motion.md).
- Sets focus/size obligations for [06 · Components & States](06-components-states.md).
