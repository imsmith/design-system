# 05 · Material & Texture

> **Status:** Drafted.

The CRT material layer — and, more importantly, its limits. This is where
Principle 1 (*data-legible first*) polices Principle 2 (*rooted in CRT material*):
the system takes exactly enough of the CRT to feel right, and no more.

The single adopted effect is **glow**. Scanlines, per-theme flavor, and plasma
bloom were considered and **deliberately not adopted** (see §4) — glow alone
carries the lineage without the legibility cost.

- Values: `tokens/material.edn`
- Color source: the theme `glow` role ([01 · Color](01-color.md) §6)

## 1 · Glow

Two levels, both tinted by the theme's `glow` role (the raw anchor color):

| Level | Use | Shape (from `material.edn`) |
| --- | --- | --- |
| **ambient** | resting glow on accents and headings — the baseline CRT feel | text: 0/0/6px @40%; box: 0/0/8px @33% |
| **active** | active / live / focused elements | text: 0/0/10px @80%; box: 0/0/16px @67% + 0/0/4px @100% |

`text` layers are `text-shadow` (headings, accent-colored text); `box` layers are
`box-shadow` (accent fills, controls). The physics are **uniform across themes** —
only the color changes (Tron cyan, Matrix green, Compaq amber). There is no
per-theme glow behavior; the identity comes from the anchor color, not the effect.

## 2 · Glow as a state signal

Glow may **reinforce** state — active, live, focused — but never as the only cue.
The `active` level always accompanies a non-glow signal:

- **Focus** pairs active glow with the focus outline required by
  [10 · Accessibility](10-accessibility.md) §5. The outline is the signal; the
  glow is reinforcement. Remove the glow and focus is still fully visible.
- **Live / active** pairs active glow with a label, color, or the `m-*` active
  state in [04 · Marks & Iconography](04-marks-iconography.md) §1.

This satisfies "never rely on one channel": a viewer who cannot perceive the glow
(low-glow display, light mode, reduced-transparency settings) loses nothing.

## 3 · Where glow may and may not go

**May:** accent text and headings, accent fills and controls, active/live/focus
states, the active state of marks.

**Must not:**

- **Body text** — never. Glow on running text destroys legibility.
- **Data color** — never on spectrum or status fills; a glowing status chip
  distorts the color's meaning and its measured contrast.
- **Muted text, borders** — never; these are already at their contrast floor and
  glow would blur them below it.

**The contrast invariant:** glow only *adds*. Any element must already pass its
APCA threshold ([10 · Accessibility](10-accessibility.md) §2) **without** the glow.
Glow is never load-bearing for contrast.

## 4 · Light mode and what we left out

**Light mode.** Glow is a dark-surface effect; on light surfaces it washes out and
can reduce contrast. Glow is therefore **suppressed in light variants**. Light-mode
active/focus states use outline and weight instead — the non-glow cues from §2,
which were always present anyway.

**Deliberately not adopted** (recorded so the absence reads as a decision, not an
oversight):

- **Scanlines** — the horizontal CRT overlay. Strong period feel, but a measurable
  legibility cost on dense data. Left out.
- **Per-theme material flavor** — distinct glow physics per anchor (sharp / phosphor
  / plasma). Rejected in favor of uniform physics; the anchor color alone carries
  identity.
- **Plasma bloom / phosphor persistence** — subsumed by the above.

Any of these may be revisited, but adoption requires a deliberate amendment here
and a legibility check, per [11 · Usage & Governance](11-usage-governance.md).

## 5 · Motion

Glow does not animate by default — no flicker, no pulse. Steady glow is a property
of the surface, not an event. Where a live element *does* pulse (e.g. a critical
alert), that motion is specified in [08 · Motion](08-motion.md) and honors
`prefers-reduced-motion`; the steady glow remains as the non-motion floor.

## Relation to other chapters

- Consumes the `glow` role from [01 · Color](01-color.md) §6.
- Reinforces (never replaces) the focus/state cues of [10 · Accessibility](10-accessibility.md).
- Supplies the active-state treatment used by [04 · Marks & Iconography](04-marks-iconography.md)
  and [06 · Components & States](06-components-states.md).
- Pulsing/animated glow, if any, is governed by [08 · Motion](08-motion.md).
