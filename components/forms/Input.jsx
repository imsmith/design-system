import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Input — text field (manual/06 · input). Parts: label (caption), field (mono,
 * border), helper/error text. States: default, focus (accent border + outline +
 * active glow), error (critical border + m-critical message), disabled,
 * read-only. Error is color + glyph + text, never color alone.
 */


export function Input({
  label,
  icon,
  error,
  helper,
  id,
  className = "",
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
      <div className="ds-field__wrap">
        {icon && (
          <span className="ds-field__icon">
            <Mark name={icon} size={16} />
          </span>
        )}
        <input
          id={fid}
          className={`ds-input${icon ? " ds-input--has-icon" : ""}`}
          aria-invalid={error ? "true" : undefined}
          {...rest}
        />
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
