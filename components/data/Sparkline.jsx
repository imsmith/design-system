import React from "react";

/* Sparkline — compact, axis-less trend (manual/06 · chart/sparkline). Tufte by
 * default: high data-ink, no gridlines, latest point marked + labeled. Two
 * modes mirror the gauge split:
 *   plain     — a single neutral/accent series, no semantic value.
 *   threshold — accent line; crossing warn/crit makes the endpoint + label adopt
 *               the alert-ramp color and word (the threshold is a dashed line).
 */


export function Sparkline({
  data = [],
  width = 96,
  height = 24,
  mode = "plain",
  warn,
  crit,
  unit = "",
  showEnd = true,
  className = "",
  ...rest
}) {
  const n = data.length;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pad = 2;
  const pts = data.map((v, i) => {
    const x = n <= 1 ? 0 : (i / (n - 1)) * (width - pad * 2) + pad;
    const y = height - pad - ((v - min) / span) * (height - pad * 2);
    return [x, y];
  });
  const path = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const last = data[n - 1];

  let color = mode === "plain" ? "var(--accent)" : "var(--accent)";
  let word = null;
  if (mode === "threshold") {
    if (crit != null && last >= crit) { color = "var(--status-critical)"; word = "CRIT"; }
    else if (warn != null && last >= warn) { color = "var(--status-medium)"; word = "WARN"; }
  }
  const end = pts[n - 1] || [0, 0];
  const threshLine = (t, c) => {
    if (t == null) return null;
    const y = height - pad - ((t - min) / span) * (height - pad * 2);
    return <line x1={0} y1={y} x2={width} y2={y} stroke={c} strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />;
  };

  return (
    <span className={`ds-spark ${className}`.trim()} {...rest}>
      <svg className="ds-spark__svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
        {mode === "threshold" && threshLine(warn, "var(--status-medium)")}
        {mode === "threshold" && threshLine(crit, "var(--status-critical)")}
        <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
        {n > 0 && <circle cx={end[0]} cy={end[1]} r="2.2" fill={color} />}
      </svg>
      {showEnd && (
        <span className="ds-spark__end" style={{ "--_c": color }}>
          <span>{last}{unit}</span>
          {word && <span className="ds-spark__word">{word}</span>}
        </span>
      )}
    </span>
  );
}
