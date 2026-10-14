import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Select — input-like trigger with a trailing m-chevron (manual/06 · select).
 * Wraps a native <select> for real keyboard/selection behavior, styled to match
 * the Input field. Same state set as Input.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-select";
  el.textContent = `
.ds-field{ display:flex; flex-direction:column; gap:var(--space-half); min-width:0; }
.ds-field__label{ font-family:var(--font-mono); font-size:var(--text-caption); font-weight:var(--weight-medium); text-transform:uppercase; letter-spacing:var(--tracking-label); color:var(--muted); }
.ds-field__msg{ display:flex; align-items:center; gap:var(--space-half); font-family:var(--font-mono); font-size:var(--text-caption); color:var(--muted); }
.ds-field--error .ds-field__msg{ color:var(--status-critical); }
.ds-select__wrap{ position:relative; display:flex; align-items:center; }
.ds-select{
  appearance:none; -webkit-appearance:none; width:100%;
  font-family:var(--font-mono); font-size:var(--text-small); color:var(--text);
  background:var(--bg); border:var(--border-width) solid var(--border); border-radius:var(--radius-md);
  padding:var(--space-1) calc(var(--space-2) + 18px) var(--space-1) var(--space-2);
  line-height:1.4; min-height:36px; cursor:pointer;
  transition:border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);
}
.ds-select:focus{ outline:none; border-color:var(--accent); box-shadow:var(--glow-box-ambient); }
.ds-select:focus-visible{ outline:2px solid var(--text); outline-offset:var(--space-half); box-shadow:var(--glow-box-active); }
.ds-select:disabled{ color:var(--muted); opacity:0.5; cursor:not-allowed; }
.ds-select__chevron{ position:absolute; right:var(--space-1); color:var(--muted); pointer-events:none; display:inline-flex; transform:rotate(90deg); }
.ds-field--error .ds-select{ border-color:var(--status-critical); }
.ds-select option{ background:var(--surface); color:var(--text); }
`;
  document.head.appendChild(el);
}

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
  ensureStyles();
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
