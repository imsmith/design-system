import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Checkbox — small control; checked = accent box with the m-low check glyph
 * (manual/06 · checkbox/radio/toggle). Focus ring per the state matrix. The
 * check glyph means the state reads without color.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-checkbox";
  el.textContent = `
.ds-check{ display:inline-flex; align-items:center; gap:var(--space-1); cursor:pointer; font-family:var(--font-mono); font-size:var(--text-small); color:var(--text); user-select:none; }
.ds-check__input{ position:absolute; opacity:0; width:0; height:0; }
.ds-check__box{
  width:18px; height:18px; flex:none; border:var(--border-width) solid var(--border);
  border-radius:var(--radius-sm); background:var(--bg); display:inline-flex; align-items:center; justify-content:center;
  color:var(--on-accent); transition:background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard);
}
.ds-check__mark{ opacity:0; transform:scale(0.6); transition:opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard); }
.ds-check__input:checked + .ds-check__box{ background:var(--accent); border-color:var(--accent); }
.ds-check__input:checked + .ds-check__box .ds-check__mark{ opacity:1; transform:scale(1); }
.ds-check__input:focus-visible + .ds-check__box{ outline:2px solid var(--text); outline-offset:var(--space-half); box-shadow:var(--glow-box-active); }
.ds-check__input:disabled ~ *{ opacity:0.5; }
.ds-check:has(.ds-check__input:disabled){ cursor:not-allowed; }
`;
  document.head.appendChild(el);
}

export function Checkbox({ label, className = "", ...rest }) {
  ensureStyles();
  return (
    <label className={`ds-check ${className}`.trim()}>
      <input type="checkbox" className="ds-check__input" {...rest} />
      <span className="ds-check__box" aria-hidden="true">
        <Mark name="m-low" size={14} className="ds-check__mark" />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
