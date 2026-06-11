# 09 · Voice & Content

> **Status:** Drafted.

The system speaks like what it is: a competent operations tool. Terse, precise, and
honest — it names the problem and states the action. No filler, no fake reassurance,
no exclamation points.

- Values: `tokens/voice.edn`

## 1 · Voice

Six principles:

- **Direct** — say the thing. "Uplink down." not "It looks like there may be a
  problem with the uplink."
- **Precise** — exact nouns and numbers. "4 nodes unreachable for 4m." not "some
  nodes are having issues."
- **No filler** — cut "please", "just", "simply", "oops", "successfully".
- **Name the problem** — lead with what's wrong, not an apology.
- **State the action** — tell the operator what to do or what happens next.
- **No fake reassurance** — don't say "Everything's fine!" The status colors and
  glyphs report state; the words don't editorialize it.

| Don't | Do |
| --- | --- |
| "Oops! Something went wrong 😕" | "Write failed: disk full on node-12." |
| "Please wait while we load your data…" | "Loading telemetry…" |
| "Successfully saved!" | "Saved." |
| "Are you sure you really want to do this?" | "Delete sector 12? This can't be undone." |

## 2 · Status language

Status words are bound to the alert ramp so prose, color, and glyph always agree.
The **OASIS value is canonical** (it's the data); the **display synonym** is the
terse UI word. Both map to the same step.

| Step | OASIS (canonical) | UI display | Glyph |
| --- | --- | --- | --- |
| critical | Extreme | `DOWN` | `m-critical` |
| high | Severe | `ALERT` | `m-high` |
| medium | Moderate | `WARN` | `m-medium` |
| low | Minor | `OK` | `m-low` |
| unknown | Unknown | `UNK` | `m-unknown` |

Rules:

- Data and APIs carry the **OASIS** value; the UI may show the **display** synonym.
  They must never disagree about which step a thing is in.
- Display synonyms are conventional and may be tuned per domain (`DOWN` vs `OFFLINE`),
  but a synonym always maps to exactly one step.
- The word must match the color and glyph — a green badge never says `WARN`.

## 3 · Message structure

Messages follow one terse skeleton, in order — **what happened · why (if known) ·
what to do** — dropping any part that's unknown rather than padding it.

- **Error:** `Write failed — disk full on node-12. Free space or reroute.`
- **Warning:** `Latency 41ms on node-13, above 40ms threshold.`
- **Confirm (destructive):** `Delete sector 12? This can't be undone.` — name the
  target and the irreversibility; buttons are verbs (`Delete` / `Cancel`), never
  `OK` / `Yes`.
- **Empty:** `No events in range. Widen the window or clear filters.`
- **Success:** the shortest true statement. `Saved.` `Rebooted node-12.`

## 4 · Terminology

- **One term per concept.** Pick `node`, not `node`/`host`/`server` interchangeably.
  A controlled vocabulary lives with the product; the manual requires that one
  exist and be honored.
- **Match the system's own names.** A state called `read-only`
  ([06 · Components](06-components-states.md)) is "read-only" in copy, not "locked".
  A `m-refresh` action is "Refresh", not "Reload".
- **Units are explicit and mono** — `38ms`, `1,204 req/s` — set in
  [Martian Mono](02-typography.md), never spelled out.

## 5 · Format conventions

- **Labels / chips:** UPPERCASE (the [terminal hierarchy](02-typography.md) §5):
  `NODE`, `P99`, `DOWN`.
- **Sentence case** for messages and prose; **Title Case** avoided.
- **Numbers:** digits and units, mono, thousands-separated (`1,204`).
- **No terminal punctuation on labels**; messages take a period.

## 6 · Usage rules

**Do**

- Lead with the problem; follow with the action.
- Use the status lexicon; keep word, color, and glyph in agreement.
- Make destructive-confirm buttons verbs that name the act.

**Don't**

- Don't pad with "please/just/successfully" or emoji.
- Don't editorialize status ("Don't worry…").
- Don't let a display synonym drift from its OASIS step.

## Relation to other chapters

- Words the status of [01 · Color](01-color.md) §3 and the glyphs of
  [04 · Marks](04-marks-iconography.md), keeping all three in agreement.
- Supplies the copy for the alerts and unhappy-paths of [07 · Patterns](07-patterns.md).
- Capitalization/units follow [02 · Typography](02-typography.md).
