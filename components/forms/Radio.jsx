import React from "react";

/* Radio — one of a set; checked = accent ring with a filled dot (manual/06 ·
 * checkbox/radio/toggle). The dot, not just color, carries the state.
 */
export function Radio({ label, className = "", ...rest }) {
  return (
    <label className={`ds-radio ${className}`.trim()}>
      <input type="radio" className="ds-radio__input" {...rest} />
      <span className="ds-radio__dot" aria-hidden="true" />
      {label && <span>{label}</span>}
    </label>
  );
}
