# 01 · Color

> **Status:** Drafted (complete).

The fully-drafted chapter. Color is the first canon because every other layer
references it.

Color in this system divides into two worlds that must never be confused:

- **Data color** — universal, fixed, meaningful. The spectrum, the status ramp,
  and the markings. These never change with theme. Green means nominal whether
  you are looking at a Tron dashboard or a printed report.
- **Chrome color** — the skin. Background, surface, text, border, and the single
  accent. This is what a *theme* owns, and the only thing it may touch.

This separation is the load-bearing rule of the whole system. Everything below
elaborates it.

## 1 · The primitive palette

The source hues are a 12-stop, 12-bit rainbow — four-character hex, suitable for
CSS or SVG. The 24-bit column is each nibble doubled (`#817` → `#881177`) and is
provided so the colors render true on full-depth displays.

| Name | 12-bit | 24-bit | Role in the spectrum |
| --- | --- | --- | --- |
| plumb | `#817` | `#881177` | warm pole, far |
| red | `#a35` | `#aa3355` | warm |
| pink | `#c66` | `#cc6666` | warm |
| orange | `#e95` | `#ee9955` | warm |
| yellow | `#ed0` | `#eedd00` | warm, near center |
| **green** | `#9d5` | `#99dd55` | **center (zero)** |
| seafoam | `#4d8` | `#44dd88` | cool, near center |
| turquoise | `#2cb` | `#22ccbb` | cool |
| teal | `#0bc` | `#00bbcc` | cool |
| blue | `#09c` | `#0099cc` | cool |
| indigo | `#36b` | `#3366bb` | cool |
| purple | `#639` | `#663399` | cool pole, far |

These twelve are *primitives*: raw material. They acquire meaning only when a
scale below assigns it. Canonical values: `tokens/color/spectrum.edn`.

## 2 · The data color spectrum (diverging temperature scale)

The spectrum is **diverging**, not sequential and not categorical. Read it as
**temperature, not a status code**.

- **Green is the center — zero, nominal, ideal.**
- Moving away from green in either direction is **deviation**. Distance from
  center is the **magnitude** of the deviation.
- The two directions are **signed**:
  - **Warm pole** (yellow → orange → pink → red → plumb): positive deviation —
    *hot / high / excess / over*.
  - **Cool pole** (seafoam → turquoise → teal → blue → indigo → purple):
    negative deviation — *cold / low / deficit / under*.

```text
  warm pole (+, excess)        center        cool pole (−, deficit)
  plumb  red  pink  orange  yellow │ green │ seafoam  turq  teal  blue  indigo  purple
   +5    +4    +3     +2      +1    │   0   │   −1     −2    −3    −4     −5      −6
```

The scale is slightly asymmetric — five warm stops, six cool. Treat **plumb** as
the warm overflow / off-the-top stop; the usable symmetric range is roughly ±5.
The far ends are extremes, not "bad": a reading deep in the cool pole is as
notable as one deep in the warm pole. The spectrum measures *how far from
nominal*, signed — it does not, by itself, say which direction is undesirable.
That judgment belongs to the consumer.

The spectrum is the **continuous, muted** form. For discrete diverging data, use
the STIX `opinion` mapping (§4). For attention-grabbing status, use the vivid
ramp (§3) — a different intensity for a different job.

Canonical values: `tokens/color/spectrum.edn`.

## 3 · The vivid status set (alert ramp)

A separate family from the spectrum, because its job is different: **grab
attention**. It reuses the spectrum hues but **boosts** them — pushed toward high
saturation and brightness so they read as alerts, not data.

The ramp is **ordered** and four steps deep plus an off-scale **unknown**:

| Step | Hue source | Vivid value | Meaning |
| --- | --- | --- | --- |
| critical | red | `#ff2740` | most severe / most urgent |
| high | orange | `#ff7a00` | |
| medium | yellow | `#ffd400` | |
| low | green | `#2fd44e` | least severe / nominal |
| unknown | — (neutral) | `#8a8f99` | off-scale; not a spectrum hue |

`unknown` is deliberately a neutral grey, not a hue: "unknown" is *off* the
scale, not a point on it. It tracks the theme's muted chrome value.

### OASIS mappings

The ramp binds to published OASIS CAP vocabularies so the steps carry standard
meaning. CAP gives three ordered scales, each four values plus `Unknown`.

**Severity** (alarm-valenced — maps directly):

| CAP value | Ramp step |
| --- | --- |
| Extreme | critical |
| Severe | high |
| Moderate | medium |
| Minor | low |
| Unknown | unknown |

**Urgency** (alarm-valenced — maps directly): Immediate → critical, Expected →
high, Future → medium, Past → low, Unknown → unknown.

**Certainty** (ordinal, *not* alarm-valenced): Observed / Likely / Possible /
Unlikely / Unknown. High certainty is not "bad," so do **not** render certainty
as red→green by default — that would imply alarm where there is none. Prefer to
encode certainty by *intensity* (opacity / weight) over the spectrum, or pair it
with severity rather than coloring it on the alert ramp. Mapping by ordinal
position is permitted only when the consumer explicitly wants an ordered ramp and
has labeled it so.

Canonical values and mappings: `tokens/color/status.edn`.

## 4 · Diverging meaning — STIX `opinion`

The STIX `opinion` enumeration is a five-point diverging Likert and is the
exemplar for putting *discrete* diverging data onto the spectrum. Neutral lands
on the green center; the poles spread outward.

| `opinion` value | Spectrum stop | 24-bit |
| --- | --- | --- |
| strongly-disagree | red (warm, far) | `#aa3355` |
| disagree | orange (warm) | `#ee9955` |
| **neutral** | **green (center)** | `#99dd55` |
| agree | turquoise (cool) | `#22ccbb` |
| strongly-agree | blue (cool, far) | `#0099cc` |

Convention: **disagreement runs warm** (toward alert/red), **agreement runs cool**
(toward calm/blue). This is a convention, not a law of the spectrum — a consumer
may flip the poles, but must do so explicitly and consistently. Uses the muted
spectrum, never the vivid ramp: an opinion is data, not an alarm.

Canonical values: `tokens/color/opinion.edn`.

## 5 · Markings — STIX TLP (fixed palette)

Traffic Light Protocol colors are **prescribed by the standard**. They are not
ours to recolor and they are **theme-invariant** like all data color. Reproduced
here as a locked palette; per the TLP standard they are shown on a black
background.

| Marking | Value |
| --- | --- |
| TLP:RED | `#FF2B2B` |
| TLP:AMBER | `#FFC000` |
| TLP:AMBER+STRICT | `#FFC000` |
| TLP:GREEN | `#33FF00` |
| TLP:CLEAR | `#FFFFFF` |

Note the collision hazard: TLP green means "freely shareable" (good), which is
the *opposite* valence of the spectrum's green-as-neutral. Keep TLP markings
visually separate from data color — they are a labeling system, not a scale.

Canonical values: `tokens/color/markings.edn`.

## 6 · Themes (chrome only)

A theme is a **skin**. It owns exactly the chrome roles below and **nothing else**
— it may not touch the spectrum, the status ramp, or the markings. Three anchor
identities, each with a **light** and a **dark** variant.

### Chrome roles

| Role | What it colors |
| --- | --- |
| `bg` | page background |
| `surface` | panels, cards, raised areas |
| `text` | primary foreground |
| `muted` | secondary text; also the `unknown` grey |
| `border` | dividers, outlines |
| `accent` | the single anchor color — the one branded hue |
| `on-accent` | the black/white foreground placed atop the accent fill |
| `glow` | accent glow for CRT material (see chapter 05) |

All chrome values are **APCA-verified** against the thresholds adopted in
[10 · Accessibility](10-accessibility.md): body text Lc 75, muted Lc 60, border
Lc 30, on-accent Lc 45 (large/heavy only). Anchors and body text are unchanged
from their authored values; `muted` and `border` were raised to clear threshold.

### Tron — accent `#00E5FF`

| Role | Dark | Light |
| --- | --- | --- |
| bg | `#05080a` | `#eef7f9` |
| surface | `#0a141a` | `#ffffff` |
| text | `#cfeff5` | `#07232a` |
| muted | `#a2bdc3` | `#6d7d81` |
| border | `#6d8288` | `#adb6b9` |
| accent | `#00E5FF` | `#008c9e` |
| on-accent | `#000000` | `#ffffff` |
| glow | `#00E5FF` | `#00E5FF` |

### Matrix — accent `#03A062`

| Role | Dark | Light |
| --- | --- | --- |
| bg | `#020a02` | `#f0f7f1` |
| surface | `#061206` | `#ffffff` |
| text | `#7dffae` | `#06250f` |
| muted | `#63cb89` | `#6c7e71` |
| border | `#438b5c` | `#afb9b2` |
| accent | `#03A062` | `#027a4a` |
| on-accent | `#ffffff` | `#ffffff` |
| glow | `#03A062` | `#03A062` |

### Compaq — accent `#FF8A00`

| Role | Dark | Light |
| --- | --- | --- |
| bg | `#160f04` | `#fbf4ea` |
| surface | `#20160a` | `#ffffff` |
| text | `#ffd9a0` | `#2a1a06` |
| muted | `#d5b484` | `#837a6f` |
| border | `#947b58` | `#bbb6af` |
| accent | `#FF8A00` | `#c96a00` |
| on-accent | `#000000` | `#ffffff` |
| glow | `#FF8A00` | `#FF8A00` |

The light-mode `accent` is darkened from the raw anchor where the raw value would
fail contrast on a light surface; the `glow` keeps the raw anchor because glow
sits on dark material regardless. Canonical values: `tokens/color/themes.edn`.

**Accent-fill label rule.** `on-accent` is rated for **large or heavy text only**
(APCA Lc 45 tier). Body-size text on an accent fill fails the Lc 75 bar on the
mid-tone accents (Matrix dark, Compaq dark, Tron light). For body-size buttons or
labels, use a **ghost/outline** treatment — text in the `text` role, `accent` as
the border — rather than a solid accent fill. See
[10 · Accessibility](10-accessibility.md).

## 7 · Usage rules

**Do**

- Use the **muted spectrum** for data, the **vivid ramp** for alerts. They are
  different intensities for different jobs; do not substitute one for the other.
- Keep green as center/nominal in every diverging use.
- Let themes change only chrome. If you find yourself re-tinting the spectrum per
  theme, stop — that breaks cross-theme comparability.
- Pair every status color with a non-color cue (label, icon, position). See
  [10 · Accessibility](10-accessibility.md).

**Don't**

- Don't read the spectrum as "good → bad." It is signed deviation from nominal,
  not a quality judgment.
- Don't use the spectrum as a categorical palette. The hues imply order and a
  center; using them for unordered categories misleads.
- Don't recolor TLP markings, and don't place them where their green collides
  with spectrum-green meaning.
- Don't introduce new semantic colors without binding them to a standard or
  recording the decision in this chapter.

## 8 · Token reference

Canonical data lives in `tokens/color/`. The prose here is authoritative for
*meaning*; the `edn` is authoritative for *values*. They must agree; if they
drift, fix the `edn` to match the decision recorded here, or amend here
deliberately.

- `spectrum.edn` — §2
- `status.edn` — §3
- `opinion.edn` — §4
- `markings.edn` — §5
- `themes.edn` — §6
