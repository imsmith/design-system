# 08 · Motion

> **Status:** Drafted.

Motion is **minimal and functional**: it exists only to clarify a change — where a
thing came from, what just happened — never to decorate. This is Principle 1 again:
a calm, legible interface that doesn't move unless movement helps.

- Values: `tokens/motion.edn`

## 1 · Duration scale

| Token | ms | Use |
| --- | --- | --- |
| `instant` | 0 | state with no travel (focus ring) |
| `fast` | 120 | hover, small toggles |
| `moderate` | 200 | most transitions — menus, expand/collapse |
| `deliberate` | 320 | larger entrances — modal, panel, drawer |

Nothing in normal UI runs longer than `deliberate`. If something needs more, it's
probably a loading state, not an animation.

## 2 · Easing

| Token | Curve | Use |
| --- | --- | --- |
| `standard` | `cubic-bezier(0.2, 0, 0, 1)` | most transitions |
| `enter` | `cubic-bezier(0, 0, 0, 1)` | elements entering (decelerate) |
| `exit` | `cubic-bezier(0.4, 0, 1, 1)` | elements leaving (accelerate) |
| `linear` | `linear` | spinners only |

## 3 · What moves, what doesn't

**Moves:** hover/active feedback, focus (instant), menus and disclosures
(`moderate`), modals and panels entering/leaving (`deliberate` with `enter`/`exit`).

**Does not move:**

- **Glow** — steady, never flickers ([05 · Material & Texture](05-material-texture.md) §5).
- **Data** — values update in place; no sliding/animated numbers that obscure the
  reading. A heatmap recolors; it does not animate cell-by-cell.
- **Anything decorative** — there is no motion whose only job is to look alive.

## 4 · Status motion (the one exception)

A **critical or live** element may **pulse** — a slow opacity/glow cycle
(`period 1500ms`) — to pull the eye. Strict limits:

- **Reinforcement only.** The critical color and the `m-critical` glyph already
  carry the signal ([10 · Accessibility](10-accessibility.md) §4); the pulse adds
  salience, it is never the sole cue.
- **Critical/live only.** Lower severities do not pulse — if everything pulses,
  nothing does.
- **Off under reduced motion** (§5).

## 5 · Reduced motion

`prefers-reduced-motion: reduce` is honored everywhere:

- Transitions collapse to `instant`.
- The critical **pulse** becomes static (the color/glyph remain — nothing is lost).
- Spinners stop spinning; a loading state shows a static busy indicator + `aria-busy`
  instead.

Because every motion in this system is reinforcement, **removing all motion removes
no information**. That is the test a new animation must pass before it's added.

## 6 · Terminal motion

- **Spinner:** a braille/`m-refresh` cycle for indeterminate waits.
- **Blink:** reserved for critical, used sparingly (terminal blink is harsh).
- Cell changes are discrete — no smooth transitions in a character grid.
- Reduced-motion analog: a static marker and the status glyph, no spin/blink.

## 7 · Usage rules

**Do**

- Use the duration/easing tokens; never ad-hoc timings.
- Animate only to clarify a change.
- Pair `enter`/`exit` with entrances/exits; keep everything ≤ `deliberate`.

**Don't**

- Don't animate glow, data values, or anything purely decorative.
- Don't pulse anything below critical.
- Don't ship motion that breaks (or hides information) under reduced-motion.

## Relation to other chapters

- Honors the steady-glow rule of [05 · Material & Texture](05-material-texture.md).
- The critical pulse reinforces, never replaces, the cues of
  [10 · Accessibility](10-accessibility.md).
- Animates the states of [06 · Components & States](06-components-states.md) and the
  alerts of [07 · Patterns](07-patterns.md).
