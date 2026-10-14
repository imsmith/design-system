import React from "react";

/* Tooltip (manual/06 · tooltip). A caption bubble on an anchor with a dotted-
 * underline cue; shown on hover AND focus, hidden on blur. Never the sole
 * carrier of essential information. CSS-driven; `tabIndex` makes the anchor
 * focusable when the child is not.
 */
export function Tooltip({ text, children, className = "", ...rest }) {
  const id = React.useId();
  return (
    <span className={`ds-tip ${className}`.trim()} tabIndex={0} aria-describedby={id} {...rest}>
      {children}
      <span className="ds-tip__bubble" role="tooltip" id={id}>{text}</span>
    </span>
  );
}
