# 00 · Principles

The thesis the rest of the manual serves. Three commitments, in priority order.

## 1 · Data-legible first

Every decision is judged first by whether it helps a person read data correctly
and fast. Aesthetics serve legibility, never the reverse. When a pretty choice
and a legible choice conflict, legibility wins.

A direct consequence: the **data color spectrum is invariant**. Its meaning does
not change with theme, mode, or fashion. Green means nominal in every skin. A
color that means different things in different contexts is not a data color.

## 2 · Rooted in CRT/terminal material

The system's felt quality comes from three real displays, each an anchor identity:

- **Tron** — the cyan vector grid (`#00E5FF`).
- **Matrix** — phosphor green (`#03A062`).
- **Compaq Portable III** — amber gas-plasma (`#FF8A00`).

These are not arbitrary brand colors; they are the lineage. The material chapter
(glow, scanline, plasma bloom) exists to honor that lineage without letting it
override legibility.

## 3 · Anchored to real standards

Status and meaning are not invented where a standard already exists. The system
binds its semantic scales to published vocabularies so that "severity" or
"opinion" mean what the wider world already agreed they mean:

- **OASIS CAP** — severity, urgency, certainty (ordered alert scales).
- **OASIS STIX `opinion`** — a diverging agree/disagree scale.
- **STIX TLP** — fixed, standard-prescribed marking colors.

Borrowing the vocabulary keeps the system honest: a color claims a meaning only
when a standard backs the claim.

## What follows from these

- **Invariance vs. chrome.** Data colors (spectrum, status, markings) are
  universal and fixed. Themes may only touch *chrome* — background, surface,
  text, border, and the single accent. See [01 · Color](01-color.md).
- **Never color alone.** Because some readers cannot distinguish hues and some
  media cannot render them, status is always *also* encoded by shape, label, or
  position. See [10 · Accessibility](10-accessibility.md).
- **Decisions are written down.** Canonical values live as `edn` data; the prose
  chapters explain and constrain them. The manual is the authority; code is a
  downstream serialization.
