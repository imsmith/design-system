import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Select — input-like trigger with a trailing m-chevron (manual/06 · select).
 * Wraps a native <select> for real keyboard/selection behavior, styled to match
 * the Input field. Same state set as Input.
 */


export function Select({
  label,
  options = [],
  error,
  helper,
  id,
  className = "",
  children,
  ...rest
}) {
  const fid = id || (label ? `ds-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const msg = error || helper;
  return (
    <div className={`ds-field${error ? " ds-field--error" : ""} ${className}`.trim()}>
      {label && (
        <label className="ds-field__label" htmlFor={fid}>
          {label}
        </label>
      )}
      <div className="ds-select__wrap">
        <select id={fid} className="ds-select" aria-invalid={error ? "true" : undefined} {...rest}>
          {children ||
            options.map((o) => {
              const opt = typeof o === "string" ? { value: o, label: o } : o;
              return (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              );
            })}
        </select>
        <span className="ds-select__chevron">
          <Mark name="m-chevron" size={16} />
        </span>
      </div>
      {msg && (
        <div className="ds-field__msg">
          {error && <Mark name="m-critical" size={12} label="Error" />}
          <span>{msg}</span>
        </div>
      )}
    </div>
  );
}
