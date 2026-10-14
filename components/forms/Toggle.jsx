import React from "react";

/* Toggle — switch control; checked = accent track with a knob shift (manual/06 ·
 * checkbox/radio/toggle). The knob position (not just color) carries the state.
 * Optional on/off text labels reinforce it further.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-toggle";
  el.textContent = `
.ds-toggle{ display:inline-flex; align-items:center; gap:var(--space-1); cursor:pointer; font-family:var(--font-mono); font-size:var(--text-small); color:var(--text); user-select:none; }
.ds-toggle__input{ position:absolute; opacity:0; width:0; height:0; }
.ds-toggle__track{
  width:40px; height:22px; flex:none; border-radius:999px; position:relative;
  border:var(--border-width) solid var(--border); background:var(--bg);
  transition:background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard);
}
.ds-toggle__knob{
  position:absolute; top:2px; left:2px; width:16px; height:16px; border-radius:999px;
  background:var(--muted); transition:transform var(--dur-moderate) var(--ease-standard), background var(--dur-fast) var(--ease-standard);
}
.ds-toggle__input:checked + .ds-toggle__track{ background:var(--accent); border-color:var(--accent); box-shadow:var(--glow-box-ambient); }
.ds-toggle__input:checked + .ds-toggle__track .ds-toggle__knob{ transform:translateX(18px); background:var(--on-accent); }
.ds-toggle__input:focus-visible + .ds-toggle__track{ outline:2px solid var(--text); outline-offset:var(--space-half); box-shadow:var(--glow-box-active); }
.ds-toggle__input:disabled ~ *{ opacity:0.5; }
.ds-toggle__state{ font-size:var(--text-caption); text-transform:uppercase; letter-spacing:var(--tracking-label); color:var(--muted); min-width:3ch; }
@media (prefers-reduced-motion: reduce){ .ds-toggle__knob{ transition-duration:0s; } }
`;
  document.head.appendChild(el);
}

export function Toggle({ label, showState = false, checked, defaultChecked, className = "", ...rest }) {
  ensureStyles();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked != null;
  const on = isControlled ? checked : internal;
  return (
    <label className={`ds-toggle ${className}`.trim()}>
      <input
        type="checkbox"
        role="switch"
        className="ds-toggle__input"
        checked={on}
        onChange={(e) => {
          if (!isControlled) setInternal(e.target.checked);
          rest.onChange && rest.onChange(e);
        }}
        {...(() => { const { onChange, ...r } = rest; return r; })()}
      />
      <span className="ds-toggle__track" aria-hidden="true">
        <span className="ds-toggle__knob" />
      </span>
      {showState && <span className="ds-toggle__state">{on ? "ON" : "OFF"}</span>}
      {label && <span>{label}</span>}
    </label>
  );
}
