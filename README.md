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
- `specimen.html` — the rendered proof: every token on one page, with a theme
  and mode switch. Generated from `tokens/` by `tools/specimen.tcl`; never edited
  by hand. Open it in a browser.
- `tools/` — the checks and the one generator. `check.tcl` (edn parse, hex drift,
  links) and `specimen.tcl` need only `tclsh` on the host. `contrast/` is the
  APCA verifier and runs inside a distrobox, never the host.

## Verify

```bash
make check      # edn parse + hex drift + links (host), APCA + markdownlint (distrobox)
make specimen   # regenerate specimen.html after editing tokens/
```

`check` exits non-zero on any failure. The distrobox is `design-system`, built
from `docker.io/library/node:22`; the Makefile header shows how to create it.

## Status

| Chapter | State |
| --- | --- |
| 00 · Principles | Drafted |
| 01 · Color | **Drafted (complete)** |
| 02 · Typography | **Drafted** |
| 03 · Space & Grid | **Drafted** |
| 04 · Marks & Iconography | **Drafted** |
| 05 · Material & Texture | **Drafted** |
| 06 · Components & States | **Drafted (full catalog)** |
| 07 · Patterns | **Drafted (full set)** |
| 08 · Motion | **Drafted** |
| 09 · Voice & Content | **Drafted** |
| 10 · Accessibility | **Drafted** |
| 11 · Usage & Governance | **Drafted** |

## Backbone

The canonical decisions are authored as `edn` under `tokens/`:

- `color/spectrum.edn` — the diverging temperature spectrum (the data color scale).
- `color/status.edn` — the vivid alert ramp and its OASIS CAP mappings.
- `color/opinion.edn` — the STIX `opinion` diverging mapping.
- `color/markings.edn` — the STIX TLP fixed marking palette.
- `color/themes.edn` — the three anchor themes (chrome roles, light and dark; APCA-verified).
- `typography.edn` — the duo, scale, weights, terminal degradation.
- `space.edn` — base unit, scale, density modes, grid, terminal cells.
- `marks.edn` — the mark registry (SVG ids, Nerd Font / Unicode / ASCII fallbacks).
- `material.edn` — glow levels.
- `components.edn` — the state matrix.
- `motion.edn` — durations, easing, the critical pulse.
- `voice.edn` — register and the status lexicon.

Geometry for marks lives in `assets/marks/sprite.svg`.

## License

Multi-licensed by content type — see [`LICENSE.md`](LICENSE.md). Code/tooling is
`AGPL-3.0-or-later`; the manual, tokens, and assets are `CC-BY-NC-SA-4.0`; fonts are
third-party (`OFL-1.1`).
