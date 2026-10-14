import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Toast / notification (manual/06 · toast). A transient surface card: severity
 * left rule, glyph on a fill chip, message, m-close; stacks in a corner. Auto-
 * dismisses on a timer that grows with severity; CRITICAL PERSISTS until
 * acknowledged. aria-live polite, assertive for critical.
 */
const STEP = {
  critical: { c: "var(--status-critical)", on: "var(--on-status-critical)", glyph: "m-critical", ms: 0 },
  high:     { c: "var(--status-high)",     on: "var(--on-status-high)",     glyph: "m-high",     ms: 12000 },
  medium:   { c: "var(--status-medium)",   on: "var(--on-status-medium)",   glyph: "m-medium",   ms: 8000 },
  low:      { c: "var(--status-low)",      on: "var(--on-status-low)",      glyph: "m-low",      ms: 5000 },
  unknown:  { c: "var(--status-unknown)",  on: "var(--on-status-unknown)",  glyph: "m-unknown",  ms: 5000 },
  info:     { c: "var(--accent)",          on: "var(--on-accent)",          glyph: "m-info",     ms: 5000 },
};

export function Toast({ severity = "info", title, children, onDismiss, duration, className = "", ...rest }) {
  const s = STEP[severity] || STEP.info;
  const ms = duration != null ? duration : s.ms;
  React.useEffect(() => {
    if (!ms || !onDismiss) return;
    const t = setTimeout(onDismiss, ms);
    return () => clearTimeout(t);
  }, [ms, onDismiss]);
  const critical = severity === "critical";
  return (
    <div
      className={`ds-toast ${className}`.trim()}
      style={{ "--_c": s.c, "--_on": s.on }}
      data-severity={severity}
      role={critical || severity === "high" ? "alert" : "status"}
      aria-live={critical ? "assertive" : "polite"}
      {...rest}
    >
      <span className="ds-toast__icon"><Mark name={s.glyph} size={14} label={severity} /></span>
      <div className="ds-toast__body">
        {title && <div className="ds-toast__title">{title}</div>}
        {children}
      </div>
      {onDismiss && (
        <button type="button" className="ds-toast__x" aria-label="Dismiss" onClick={onDismiss}>
          <Mark name="m-close" size={14} />
        </button>
      )}
    </div>
  );
}

/* ToastStack — the fixed corner container. Children are <Toast>s. */
export function ToastStack({ position = "bottom-right", children, className = "", ...rest }) {
  return <div className={`ds-toasts ds-toasts--${position} ${className}`.trim()} {...rest}>{children}</div>;
}
