import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Input — text field (manual/06 · input). Parts: label (caption), field (mono,
 * border), helper/error text. States: default, focus (accent border + outline +
 * active glow), error (critical border + m-critical message), disabled,
 * read-only. Error is color + glyph + text, never color alone.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-input";
  el.textContent = `
.ds-field{ display:flex; flex-direction:column; gap:var(--space-half); min-width:0; }
.ds-field__label{
  font-family:var(--font-mono); font-size:var(--text-caption); font-weight:var(--weight-medium);
  text-transform:uppercase; letter-spacing:var(--tracking-label); color:var(--muted);
}
.ds-field__wrap{ position:relative; display:flex; align-items:center; }
.ds-field__icon{ position:absolute; left:var(--space-1); color:var(--muted); display:inline-flex; pointer-events:none; }
.ds-input{
  width:100%; font-family:var(--font-mono); font-size:var(--text-small); color:var(--text);
  background:var(--bg); border:var(--border-width) solid var(--border); border-radius:var(--radius-md);
  padding:var(--space-1) var(--space-2); line-height:1.4; min-height:36px;
  transition:border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);
}
.ds-input::placeholder{ color:var(--muted); opacity:0.7; }
.ds-input--has-icon{ padding-left:calc(var(--space-2) + 18px); }
.ds-input:focus{ outline:none; border-color:var(--accent); box-shadow:var(--glow-box-ambient); }
.ds-input:focus-visible{ outline:2px solid var(--text); outline-offset:var(--space-half); box-shadow:var(--glow-box-active); }
.ds-field--error .ds-input{ border-color:var(--status-critical); }
.ds-input:disabled{ color:var(--muted); opacity:0.5; cursor:not-allowed; }
.ds-input[readonly]{ border-color:transparent; background:var(--surface); }
.ds-field__msg{
  display:flex; align-items:center; gap:var(--space-half);
  font-family:var(--font-mono); font-size:var(--text-caption); color:var(--muted);
}
.ds-field--error .ds-field__msg{ color:var(--status-critical); }
`;
  document.head.appendChild(el);
}

export function Input({
  label,
  icon,
  error,
  helper,
  id,
  className = "",
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
