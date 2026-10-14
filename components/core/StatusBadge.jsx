import React from "react";
import { Mark } from "./Mark.jsx";

/* StatusBadge — the "never color alone" showcase (manual/06 · status badge).
 * Alert-ramp color + status glyph + word, always together. The step drives all
 * three so they can never disagree (tokens/voice.edn status-lexicon).
 *
 * Treatment rule (manual/01 §3, tokens/color/status.edn :treatment):
 *   solid        = FILL   — step as background, on-status label. Legal everywhere.
 *   soft / plain = OUTLINE — step as foreground. Dark surfaces only.
 * On [data-mode="light"] every variant renders as fill; `critical` is always
 * fill. Both are enforced in CSS below, not left to the caller.
 */

const STEPS = {
  critical: { color: "var(--status-critical)", on: "var(--on-status-critical)", glyph: "m-critical", word: "DOWN", oasis: "Extreme" },
  high:     { color: "var(--status-high)",     on: "var(--on-status-high)",     glyph: "m-high",     word: "ALERT", oasis: "Severe" },
  medium:   { color: "var(--status-medium)",   on: "var(--on-status-medium)",   glyph: "m-medium",   word: "WARN", oasis: "Moderate" },
  low:      { color: "var(--status-low)",      on: "var(--on-status-low)",      glyph: "m-low",      word: "OK",   oasis: "Minor" },
  unknown:  { color: "var(--status-unknown)",  on: "var(--on-status-unknown)",  glyph: "m-unknown",  word: "UNK",  oasis: "Unknown" },
};


export function StatusBadge({
  step = "unknown",
  label,
  variant = "soft",
  pulse = false,
  size = 14,
  className = "",
  ...rest
}) {
  const s = STEPS[step] || STEPS.unknown;
  const text = label != null ? label : s.word;
  const cls = [
    "ds-badge",
    variant === "solid" ? "ds-badge--solid" : "",
    variant === "plain" ? "ds-badge--plain" : "",
    pulse ? "ds-pulse" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={cls} data-step={step} style={{ "--_c": s.color, "--_on": s.on }} role="status" {...rest}>
      <Mark name={s.glyph} size={size} label={`${step} status`} />
      <span>{text}</span>
    </span>
  );
}
