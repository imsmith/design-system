---
name: gridops-design
description: Use this skill to generate well-branded interfaces and assets for GRID·OPS — a CRT/terminal-rooted design system for data-dense operations tooling (NOC dashboards, telemetry consoles, alerting, threat-intel) — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, the mark sprite, and a UI kit of React components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view. If working on production code, copy
assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Orientation

- **`README.md`** — the design guide: principles, hard invariants, content & visual
  foundations, iconography, fonts, and a full file manifest. Start here.
- **`styles.css`** — the single stylesheet to link; it `@import`s every token + font
  file under `tokens/`.
- **`tokens/`** — CSS custom properties: chrome themes + invariant data color
  (`colors.css`), the type duo + scale (`typography.css`), spacing/radius
  (`spacing.css`), glow + motion (`effects.css`), element defaults (`base.css`).
- **`assets/marks/`** — `sprite.svg` (24×24 monoline icon sheet, `currentColor`) and
  `sprite-inject.js` (include once so `<use href="#m-…">` resolves when served).
- **`components/`** — React primitives, exposed at runtime as
  `window.DesignSystem_019de4` after loading `_ds_bundle.js`. Each has a
  `.prompt.md` with usage.
- **`guidelines/`** — small specimen cards for the foundations.
- **`ui_kits/operations-console/`** — a complete interactive product recreation to copy
  patterns from.

## Non-negotiables (see README for the full list)

- Pick **one** theme (`data-theme` on `<html>`); data color (spectrum / status ramp /
  TLP) is theme-invariant. Green = nominal everywhere.
- **Never color alone** — status is always color + glyph + text. The five status
  silhouettes are reserved.
- Mono is the voice; prose only for long-form. UPPERCASE labels, sentence-case
  messages, no emoji, no filler. Status lexicon: DOWN / ALERT / WARN / OK / UNK.
- Glow only on dark surfaces, never on body text / data fills / muted / borders.
  Respect `prefers-reduced-motion`.

## Quick start (HTML artifact)

```html
<html data-theme="tron">
<link rel="stylesheet" href="styles.css" />
<script src="assets/marks/sprite-inject.js"></script>
<!-- React 18 + Babel (pinned), then: -->
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, StatusBadge, Card, Heatmap } = window.DesignSystem_019de4;
  // compose…
</script>
```

Fonts: the canonical MartianMono Nerd Font + Martian Grotesk are not bundled (Google
Fonts substitutes Martian Mono + Space Grotesk). Ask the user for the real font files
to upgrade.
