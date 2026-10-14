import React from "react";
import { Mark } from "../core/Mark.jsx";

/* StatePanel — the empty / loading / error triad (manual/07 §6). Every data
 * view defines all three; a raw blank, a spinner forever, or an unhandled
 * failure is a defect. Empty explains why and offers the next action; loading
 * shows a spinner (or use <Skeleton/>) with aria-busy; error is m-critical on
 * a fill chip + plain-language message + a retry action.
 */
const MODE = {
  empty:   { mark: "m-unknown", role: "status" },
  loading: { mark: "m-refresh", role: "status" },
  error:   { mark: "m-critical", role: "alert" },
};

export function StatePanel({ mode = "empty", mark, title, children, action, className = "", ...rest }) {
  const m = MODE[mode] || MODE.empty;
  return (
    <div
      className={`ds-state ds-state--${mode} ${className}`.trim()}
      role={m.role}
      aria-busy={mode === "loading" ? "true" : undefined}
      {...rest}
    >
      <span className="ds-state__mark"><Mark name={mark || m.mark} size={24} label={mode} /></span>
      {title && <div className="ds-state__title">{title}</div>}
      {children && <div className="ds-state__msg">{children}</div>}
      {action && <div className="ds-state__action">{action}</div>}
    </div>
  );
}

/* Skeleton — muted surface blocks standing in for loading content. */
export function Skeleton({ lines = 3, width, height, className = "", ...rest }) {
  if (lines <= 1) {
    return <span className={`ds-skeleton ${className}`.trim()} style={{ width, height }} aria-hidden="true" {...rest} />;
  }
  return (
    <div className={className} aria-hidden="true" {...rest}>
      {Array.from({ length: lines }).map((_, i) => <span key={i} className="ds-skeleton ds-skeleton--text" />)}
    </div>
  );
}
