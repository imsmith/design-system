import React from "react";
import { Mark } from "./Mark.jsx";

/* Tag — a small neutral label chip for metadata/categories (NOT status; for
 * status use StatusBadge). Chrome-only color so it never reads as data color.
 * Optional leading mark and a dismiss affordance.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-tag";
  el.textContent = `
.ds-tag{
  display:inline-flex; align-items:center; gap:var(--space-half);
  font-family:var(--font-mono); font-size:var(--text-caption); font-weight:var(--weight-regular);
  text-transform:uppercase; letter-spacing:var(--tracking-label); line-height:1.4;
  padding:2px var(--space-1); border-radius:var(--radius-sm);
  border:var(--border-width) solid var(--border); color:var(--muted); background:transparent;
}
.ds-tag--accent{ color:var(--accent); border-color:color-mix(in srgb, var(--accent) 50%, transparent); background:var(--accent-tint); }
.ds-tag__x{
  display:inline-flex; align-items:center; cursor:pointer; color:inherit; opacity:0.7;
  background:none; border:none; padding:0; margin-left:2px;
}
.ds-tag__x:hover{ opacity:1; }
`;
  document.head.appendChild(el);
}

export function Tag({
  children,
  icon,
  accent = false,
  onRemove,
  className = "",
  ...rest
}) {
  ensureStyles();
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
