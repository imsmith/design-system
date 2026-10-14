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

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-status-badge";
  el.textContent = `
.ds-badge{
  display:inline-flex; align-items:center; gap:var(--space-1);
  font-family:var(--font-mono); font-size:var(--text-caption); font-weight:var(--weight-medium);
  text-transform:uppercase; letter-spacing:var(--tracking-label);
  padding:2px var(--space-1); border-radius:var(--radius-sm); line-height:1.4;
  border:var(--border-width) solid color-mix(in srgb, var(--_c) 45%, transparent);
  color:var(--_c); background:color-mix(in srgb, var(--_c) 12%, transparent);
}
.ds-badge--plain{ background:transparent; border-color:transparent; padding-left:0; padding-right:0; }
/* fill: requested (solid), forced on light surfaces, forced for critical. Last so it wins. */
.ds-badge--solid,
[data-mode="light"] .ds-badge,
.ds-badge[data-step="critical"]{
  color:var(--_on); background:var(--_c); border-color:var(--_c);
  padding-left:var(--space-1); padding-right:var(--space-1);
}
`;
  document.head.appendChild(el);
}

export function StatusBadge({
  step = "unknown",
  label,
  variant = "soft",
  pulse = false,
  size = 14,
  className = "",
  ...rest
}) {
  ensureStyles();
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
