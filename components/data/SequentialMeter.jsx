import React from "react";

/* SequentialMeter — magnitude 0→max with optional threshold zones (manual/06 ·
 * gauge/meter). Accent fill; on crossing warn/crit the fill AND value adopt the
 * alert-ramp color (warn→medium, crit→critical) and the threshold state is
 * echoed in words (the display synonym). NOT the spectrum — green-at-zero is
 * meaningless for "0% CPU". Use for CPU, disk, memory, throughput, quota.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-seq-meter";
  el.textContent = `
.ds-meter{ display:flex; flex-direction:column; gap:var(--space-half); font-family:var(--font-mono); min-width:0; }
.ds-meter__top{ display:flex; align-items:baseline; justify-content:space-between; gap:var(--space-2); }
.ds-meter__label{ font-size:var(--text-caption); text-transform:uppercase; letter-spacing:var(--tracking-label); color:var(--muted); }
.ds-meter__val{ font-size:var(--text-small); font-variant-numeric:tabular-nums; color:var(--_c,var(--text)); display:inline-flex; align-items:baseline; gap:var(--space-1); }
.ds-meter__word{ font-size:var(--text-micro); letter-spacing:var(--tracking-label); }
.ds-meter__track{ position:relative; height:8px; background:var(--bg); border:var(--border-width) solid var(--border); border-radius:999px; overflow:hidden; }
.ds-meter__fill{ position:absolute; top:0; left:0; bottom:0; background:var(--_c,var(--accent)); border-radius:999px; transition:width var(--dur-moderate) var(--ease-standard); }
.ds-meter__tick{ position:absolute; top:-2px; bottom:-2px; width:2px; }
.ds-meter__tick--warn{ background:var(--status-medium); }
.ds-meter__tick--crit{ background:var(--status-critical); }
`;
  document.head.appendChild(el);
}

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
  ensureStyles();
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
