import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Heatmap — the signature status-at-scale pattern (manual/07 §5). A dense grid
 * of cells, each a diverging-spectrum stop by its deviation from green (nominal).
 * Green = nominal, warm = over, cool = under; the far warm end reads critical.
 * MANDATORY non-color encoding: a legend is required, every cell is inspectable
 * for its value (title + accessible label), and critical-end cells carry the
 * m-critical glyph. The color is the gestalt; the value is the truth.
 */

const STOP = {
  "5": "var(--spectrum-plumb)", "4": "var(--spectrum-red)", "3": "var(--spectrum-pink)",
  "2": "var(--spectrum-orange)", "1": "var(--spectrum-yellow)", "0": "var(--spectrum-green)",
  "-1": "var(--spectrum-seafoam)", "-2": "var(--spectrum-turquoise)", "-3": "var(--spectrum-teal)",
  "-4": "var(--spectrum-blue)", "-5": "var(--spectrum-indigo)", "-6": "var(--spectrum-purple)",
};
function stopColor(v) {
  const i = Math.max(-6, Math.min(5, Math.round(v)));
  return STOP[String(i)];
}


export function Heatmap({
  cells = [],
  columns,
  range = 5,
  criticalAt = 4,
  unit = "",
  onSelect,
  showLegend = true,
  className = "",
  ...rest
}) {
  const cols = columns || Math.ceil(Math.sqrt(cells.length)) || 1;
  return (
    <div className={`ds-heat ${className}`.trim()} {...rest}>
      <div className="ds-heat__grid" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}>
        {cells.map((c, idx) => {
          const isCrit = c.value >= criticalAt;
          const title = `${c.label || c.id || idx}: ${c.value > 0 ? "+" : c.value < 0 ? "−" : "±"}${Math.abs(c.value)}${unit}`;
          return (
            <button
              type="button"
              key={c.id || idx}
              className="ds-heat__cell"
              style={{ background: stopColor(c.value) }}
              title={title}
              aria-label={title}
              onClick={onSelect ? () => onSelect(c) : undefined}
            >
              {isCrit && <Mark name="m-critical" size={12} />}
            </button>
          );
        })}
      </div>
      {showLegend && (
        <div className="ds-heat__legend" aria-hidden="true">
          <span className="ds-heat__legend-end">cool −{range}</span>
          <span className="ds-heat__bar" />
          <span className="ds-heat__legend-end">warm +{range}</span>
          <span className="ds-heat__crit">
            <Mark name="m-critical" size={12} /> crit
          </span>
        </div>
      )}
    </div>
  );
}
