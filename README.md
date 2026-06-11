# Design System

A normative reference for visual identity and user experience — the child of a
**graphic standards manual** (color, type, grid, marks, material) and a **UX
manual** (components, patterns, motion, voice). It documents shared, named design
decisions and the rules for using them, so that everything built from it agrees.

It is not a component library, a CSS framework, or a drawing tool. It is the set
of decisions those things are obligated to honor.

## How this is organized

- `manual/` — the chapters. Human-readable, normative, illustrated with usage rules.
- `tokens/` — the machine-readable backbone: the canonical decisions as `edn`
  data. A human reads it; later, if a consumer needs CSS, ANSI, or SVG, something
  can serialize it. That bridge is crossed when reached, not before.
- `assets/` — canonical visual assets. Currently `assets/marks/sprite.svg`, the
  mark/icon library as an SVG symbol sheet (`currentColor`).
- `tools/` — verification only, run inside a distrobox (never the host). Currently
  `tools/contrast/`, the APCA verifier for the theme tokens. Not a generator.

## Status

| Chapter | State |
| --- | --- |
| 00 · Principles | Drafted |
| 01 · Color | **Drafted (complete)** |
| 02 · Typography | Stub |
| 03 · Space & Grid | Stub |
| 04 · Marks & Iconography | **Drafted** |
| 05 · Material & Texture | Stub |
| 06 · Components & States | Stub |
| 07 · Patterns | Stub |
| 08 · Motion | Stub |
| 09 · Voice & Content | Stub |
| 10 · Accessibility | **Drafted** |
| 11 · Usage & Governance | Stub |

## Backbone

Color decisions are authored as `edn` under `tokens/color/`:

- `spectrum.edn` — the diverging temperature spectrum (the data color scale).
- `status.edn` — the vivid alert ramp and its OASIS CAP mappings.
- `opinion.edn` — the STIX `opinion` diverging mapping.
- `markings.edn` — the STIX TLP fixed marking palette.
- `themes.edn` — the three anchor themes (chrome roles, light and dark).
