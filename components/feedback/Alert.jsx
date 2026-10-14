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
