import React from "react";
import { Mark } from "../core/Mark.jsx";

/* DivergingMeter — signed deviation from a nominal center (manual/06 ·
 * gauge/meter). Green center marker at 0; fill grows from center toward the
 * value; color is the DIVERGING SPECTRUM stop at the value's signed magnitude
 * (warm = over, cool = under). The signed number and the diverging mark
 * (m-warm/m-neutral/m-cool) are always shown — the value reads without color.
 * Use for temperature, error-vs-baseline, the STIX opinion scale.
 */

// Spectrum stops by signed index (tokens/color/spectrum.edn).
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


export function DivergingMeter({
  value,
  range = 5,
  label,
  unit = "",
  showValue = true,
  className = "",
  ...rest
}) {
  const clamped = Math.max(-range, Math.min(range, value));
  const halfPct = (Math.abs(clamped) / range) * 50;
  const positive = clamped > 0;
  const zero = Math.round(clamped) === 0;
  const color = stopColor(clamped);
  const signGlyph = zero ? "m-neutral" : positive ? "m-warm" : "m-cool";
  const signStr = zero ? "±0" : `${positive ? "+" : "−"}${Math.abs(value)}`;

  return (
    <div className={`ds-dmeter ${className}`.trim()} {...rest}>
      <div className="ds-dmeter__top">
        {label && <span className="ds-dmeter__label">{label}</span>}
        {showValue && (
          <span className="ds-dmeter__val" style={{ "--_c": color }}>
            <Mark name={signGlyph} size={14} label={zero ? "neutral" : positive ? "over" : "under"} />
            <span>
              {signStr}
              {unit}
            </span>
          </span>
        )}
      </div>
      <div
        className="ds-dmeter__track"
        role="meter"
        aria-valuenow={value}
        aria-valuemin={-range}
        aria-valuemax={range}
        aria-label={label}
      >
        <div className="ds-dmeter__center" aria-hidden="true" />
        <div
          className="ds-dmeter__fill"
          style={{
            "--_c": color,
            width: `${halfPct}%`,
            left: positive ? "50%" : `${50 - halfPct}%`,
          }}
        />
      </div>
    </div>
  );
}
