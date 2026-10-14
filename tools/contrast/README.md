# Contrast verifier

Checks the theme chrome values in `tokens/color/themes.edn` against the APCA
thresholds adopted in `manual/10-accessibility.md`, using the
[`apca-w3`](https://github.com/Myndex/apca-w3) reference implementation.

It reads the `edn` directly, so it always verifies the committed source of truth —
it cannot drift from the tokens.

## Run

This is JS tooling and **runs inside a distrobox**, never on the host (the host
stays Elixir/Tcl/Go). `node_modules/` is gitignored.

```bash
# one-time: a node-capable distrobox
distrobox create --name design-system --image docker.io/library/node:22 --yes

# run the check
distrobox enter design-system -- bash -lc \
  'cd "$(git rev-parse --show-toplevel)/tools/contrast" && npm install && node verify.mjs'
```

Exits non-zero if any pair falls below its threshold.

## Thresholds (magnitude of APCA Lc)

| Pair | Min |Lc| |
| --- | --- |
| body text vs bg / surface | 75 |
| muted vs bg / surface | 60 |
| border vs surface / bg | 30 |
| accent fill vs bg | 30 |
| on-accent label vs accent | 45 (large/heavy text only) |

APCA is the draft WCAG 3 contrast method; see `manual/10-accessibility.md` §1 for
the rationale and the caveat about WCAG 2.x conformance.

## Note

This is the first piece of `tools/` — the deliberately-deferred serialization
layer. It is a verifier, not a generator. The generator (edn → CSS/ANSI/SVG) is
built per consumer when needed, per `manual/11-usage-governance.md`.

## Status treatment

The status ramp has two treatments (`manual/01-color.md` §3):

- **fill** — `on-status` label on the step. **Hard** check, Lc 45, every step.
- **outline** — step as text/border on the theme surface. Dark surfaces only,
  and `critical` is always fill, so the verifier reports the other four steps
  on the three dark variants as **advisory** (`WARN`, never fails).

TLP markings on TLP black are also advisory: the values are locked by the
standard.
