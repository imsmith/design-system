import React from "react";

/* SequentialMeter — magnitude 0→max with optional threshold zones (manual/06 ·
 * gauge/meter). Accent fill; on crossing warn/crit the fill AND value adopt the
 * alert-ramp color (warn→medium, crit→critical) and the threshold state is
 * echoed in words (the display synonym). NOT the spectrum — green-at-zero is
 * meaningless for "0% CPU". Use for CPU, disk, memory, throughput, quota.
 */


export function SequentialMeter({
  value,
  max = 100,
  warn,
  crit,
  label,
  unit = "%",
  showValue = true,
  className = "",
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  let color = "var(--accent)";
  let word = null;
  if (crit != null && value >= crit) {
    color = "var(--status-critical)";
    word = "CRIT";
  } else if (warn != null && value >= warn) {
    color = "var(--status-medium)";
    word = "WARN";
  }
  return (
    <div className={`ds-meter ${className}`.trim()} {...rest}>
      <div className="ds-meter__top">
        {label && <span className="ds-meter__label">{label}</span>}
        {showValue && (
          <span className="ds-meter__val" style={{ "--_c": color }}>
            <span>
              {value}
              {unit}
            </span>
            {word && <span className="ds-meter__word">{word}</span>}
          </span>
        )}
      </div>
      <div
        className="ds-meter__track"
        role="meter"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div className="ds-meter__fill" style={{ width: `${pct}%`, "--_c": color }} />
        {warn != null && (
          <div className="ds-meter__tick ds-meter__tick--warn" style={{ left: `${(warn / max) * 100}%` }} />
        )}
        {crit != null && (
          <div className="ds-meter__tick ds-meter__tick--crit" style={{ left: `${(crit / max) * 100}%` }} />
        )}
      </div>
    </div>
  );
}
