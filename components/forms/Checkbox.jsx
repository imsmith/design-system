import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Checkbox — small control; checked = accent box with the m-low check glyph
 * (manual/06 · checkbox/radio/toggle). Focus ring per the state matrix. The
 * check glyph means the state reads without color.
 */


export function Checkbox({ label, className = "", ...rest }) {
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
