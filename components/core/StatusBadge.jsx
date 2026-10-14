import React from "react";
import { Mark } from "./Mark.jsx";

/* StatusBadge — the "never color alone" showcase (manual/06 · status badge).
 * Alert-ramp color + status glyph + word, always together. The step drives all
 * three so they can never disagree (tokens/voice.edn status-lexicon).
 */

const STEPS = {
  critical: { color: "var(--status-critical)", glyph: "m-critical", word: "DOWN", oasis: "Extreme" },
  high:     { color: "var(--status-high)",     glyph: "m-high",     word: "ALERT", oasis: "Severe" },
  medium:   { color: "var(--status-medium)",   glyph: "m-medium",   word: "WARN", oasis: "Moderate" },
  low:      { color: "var(--status-low)",       glyph: "m-low",      word: "OK",   oasis: "Minor" },
  unknown:  { color: "var(--status-unknown)",   glyph: "m-unknown",  word: "UNK",  oasis: "Unknown" },
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
.ds-badge--solid{ color:#000; background:var(--_c); border-color:var(--_c); }
.ds-badge--plain{ background:transparent; border-color:transparent; padding-left:0; padding-right:0; }
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
    <span className={cls} style={{ "--_c": s.color }} role="status" {...rest}>
      <Mark name={s.glyph} size={size} label={`${step} status`} />
      <span>{text}</span>
    </span>
  );
}
