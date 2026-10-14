import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Alert / banner — full-width message keyed to CAP severity (manual/06 · alert,
 * manual/07 §4). Status glyph + left rule in the ramp color + title/body +
 * optional action + dismiss. Color + glyph + text — never color alone. Placement
 * (banner) signals scope, never severity. Wording follows the voice rules:
 * what happened · why · what to do.
 */

/* The glyph sits on a FILL chip (step background, on-status glyph) so the
 * status color is never a bare foreground — the ramp fails as a foreground on
 * light surfaces (manual/01 §3 treatment rule). The left rule is a non-text
 * reinforcement and may stay in the raw step color.
 */
const STEP = {
  critical: { color: "var(--status-critical)", on: "var(--on-status-critical)", glyph: "m-critical" },
  high:     { color: "var(--status-high)",     on: "var(--on-status-high)",     glyph: "m-high" },
  medium:   { color: "var(--status-medium)",   on: "var(--on-status-medium)",   glyph: "m-medium" },
  low:      { color: "var(--status-low)",      on: "var(--on-status-low)",      glyph: "m-low" },
  unknown:  { color: "var(--status-unknown)",  on: "var(--on-status-unknown)",  glyph: "m-unknown" },
  info:     { color: "var(--accent)",          on: "var(--on-accent)",          glyph: "m-info" },
};

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-alert";
  el.textContent = `
.ds-alert{
  display:flex; gap:var(--space-2); align-items:flex-start;
  font-family:var(--font-mono); background:var(--surface); color:var(--text);
  border:var(--border-width) solid var(--border); border-left:3px solid var(--_c);
  border-radius:var(--radius-md); padding:var(--space-2) var(--space-3);
}
.ds-alert__icon{ color:var(--_on); background:var(--_c); display:inline-flex; padding:3px; border-radius:var(--radius-sm); }
.ds-alert__body{ flex:1; min-width:0; display:flex; flex-direction:column; gap:2px; }
.ds-alert__title{ font-size:var(--text-small); font-weight:var(--weight-medium); letter-spacing:var(--tracking-tight); }
.ds-alert__msg{ font-size:var(--text-caption); color:var(--muted); line-height:var(--leading-snug); }
.ds-alert__actions{ display:flex; align-items:center; gap:var(--space-1); margin-top:var(--space-1); }
.ds-alert__x{ background:none; border:none; color:var(--muted); cursor:pointer; padding:2px; display:inline-flex; border-radius:var(--radius-sm); }
.ds-alert__x:hover{ color:var(--text); }
.ds-alert__x:focus-visible{ outline:2px solid var(--text); outline-offset:1px; }
`;
  document.head.appendChild(el);
}

export function Alert({
  severity = "info",
  title,
  children,
  actions,
  onDismiss,
  pulse = false,
  className = "",
  ...rest
}) {
  ensureStyles();
  const s = STEP[severity] || STEP.info;
  return (
    <div
      className={`ds-alert${pulse ? " ds-pulse" : ""} ${className}`.trim()}
      style={{ "--_c": s.color, "--_on": s.on }}
      data-severity={severity}
      role={severity === "critical" || severity === "high" ? "alert" : "status"}
      {...rest}
    >
      <span className="ds-alert__icon">
        <Mark name={s.glyph} size={18} label={`${severity}`} />
      </span>
      <div className="ds-alert__body">
        {title && <div className="ds-alert__title">{title}</div>}
        {children && <div className="ds-alert__msg">{children}</div>}
        {actions && <div className="ds-alert__actions">{actions}</div>}
      </div>
      {onDismiss && (
        <button type="button" className="ds-alert__x" aria-label="Dismiss" onClick={onDismiss}>
          <Mark name="m-close" size={16} />
        </button>
      )}
    </div>
  );
}
