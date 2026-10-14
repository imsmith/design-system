import React from "react";
import { Mark } from "./Mark.jsx";

/* Tag — a small neutral label chip for metadata/categories (NOT status; for
 * status use StatusBadge). Chrome-only color so it never reads as data color.
 * Optional leading mark and a dismiss affordance.
 */


export function Tag({
  children,
  icon,
  accent = false,
  onRemove,
  className = "",
  ...rest
}) {
  const cls = ["ds-tag", accent ? "ds-tag--accent" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls} {...rest}>
      {icon && <Mark name={icon} size={12} />}
      <span>{children}</span>
      {onRemove && (
        <button
          type="button"
          className="ds-tag__x"
          aria-label="Remove"
          onClick={onRemove}
        >
          <Mark name="m-close" size={12} />
        </button>
      )}
    </span>
  );
}
