import React from "react";
import { Mark } from "./Mark.jsx";

/* Button — the primary action control (manual/06 §3).
 *
 * Variants:
 *   primary — accent fill, on-accent label. The accent-label rule: a primary
 *             button's label is large/heavy ONLY. For body-size actions use ghost.
 *   ghost   — accent border, text label. The body-size action variant.
 *   text    — no border/fill.
 *   danger  — the destructive primary: status/critical fill, not accent. Its
 *             label should be a verb that names the act (DELETE).
 *
 * States: default, hover (brighten/ambient glow), focus (text outline + active
 * glow, via :focus-visible), active (pressed/inset), disabled (muted, 0.5,
 * non-interactive), loading (animated m-refresh, aria-busy, content hidden).
 */


export function Button({
  variant = "ghost",
  size = "md",
  icon,
  iconEnd,
  loading = false,
  disabled = false,
  children,
  className = "",
  ...rest
}) {
  const cls = [
    "ds-btn",
    `ds-btn--${variant}`,
    size !== "md" ? `ds-btn--${size}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconSize = size === "sm" ? 14 : size === "lg" ? 20 : 16;

  return (
    <button
      type="button"
      className={cls}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      data-loading={loading || undefined}
      {...rest}
    >
      {loading && (
        <span className="ds-btn__spin" aria-hidden="true">
          <Mark name="m-refresh" size={iconSize} />
        </span>
      )}
      <span
        className="ds-btn__label"
        style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-1)" }}
      >
        {icon && <Mark name={icon} size={iconSize} />}
        {children}
        {iconEnd && <Mark name={iconEnd} size={iconSize} />}
      </span>
    </button>
  );
}
