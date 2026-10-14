import React from "react";

/* Toggle — switch control; checked = accent track with a knob shift (manual/06 ·
 * checkbox/radio/toggle). The knob position (not just color) carries the state.
 * Optional on/off text labels reinforce it further.
 */


export function Toggle({ label, showState = false, checked, defaultChecked, className = "", ...rest }) {
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
