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

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-button";
  el.textContent = `
.ds-btn{
  --_pad-y: var(--space-1); --_pad-x: var(--space-3); --_fs: var(--text-small);
  display:inline-flex; align-items:center; justify-content:center; gap:var(--space-1);
  font-family:var(--font-mono); font-size:var(--_fs); font-weight:var(--weight-medium);
  line-height:1; text-transform:uppercase; letter-spacing:var(--tracking-label);
  padding:var(--_pad-y) var(--_pad-x); border-radius:var(--radius-md);
  border:var(--border-width) solid transparent; background:transparent; color:var(--text);
  cursor:pointer; user-select:none; white-space:nowrap; position:relative;
  min-height:36px; transition:background var(--dur-fast) var(--ease-standard),
    border-color var(--dur-fast) var(--ease-standard),
    box-shadow var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard);
}
.ds-btn--sm{ --_pad-y:var(--space-half); --_pad-x:var(--space-2); --_fs:var(--text-caption); min-height:28px; }
.ds-btn--lg{ --_pad-y:var(--space-2); --_pad-x:var(--space-4); --_fs:var(--text-body); min-height:44px; }

.ds-btn--primary{ background:var(--accent); color:var(--on-accent); border-color:var(--accent); }
.ds-btn--primary:hover{ filter:brightness(1.12); box-shadow:var(--glow-box-ambient); }
.ds-btn--primary:active{ filter:brightness(0.92); }

.ds-btn--ghost{ border-color:var(--accent); color:var(--text); }
.ds-btn--ghost:hover{ box-shadow:var(--glow-box-ambient); background:var(--accent-tint); }
.ds-btn--ghost:active{ background:var(--accent-tint); transform:translateY(1px); }

.ds-btn--text{ color:var(--accent); padding-left:var(--space-1); padding-right:var(--space-1); }
.ds-btn--text:hover{ text-decoration:underline; }

.ds-btn--danger{ background:var(--status-critical); color:#fff; border-color:var(--status-critical); }
.ds-btn--danger:hover{ filter:brightness(1.1); }
.ds-btn--danger:active{ filter:brightness(0.9); }

.ds-btn:focus-visible{ outline:2px solid var(--text); outline-offset:var(--space-half); box-shadow:var(--glow-box-active); }
.ds-btn[disabled],.ds-btn[aria-disabled="true"]{ opacity:0.5; cursor:not-allowed; box-shadow:none; filter:none; }
.ds-btn[data-loading="true"]{ cursor:progress; }
.ds-btn[data-loading="true"] .ds-btn__label{ visibility:hidden; }
.ds-btn__spin{ position:absolute; display:inline-flex; animation:ds-btn-spin 900ms linear infinite; }
@keyframes ds-btn-spin{ to{ transform:rotate(360deg); } }
@media (prefers-reduced-motion: reduce){ .ds-btn__spin{ animation-duration:0s; } }
`;
  document.head.appendChild(el);
}

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
  ensureStyles();
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
