import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Tabs — a row of labels over a content area (manual/06 · tabs). Selected =
 * accent underline + text; others muted. One selected at a time. Keyboard
 * accessible (roving via native buttons + arrow keys). Controlled or uncontrolled.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-tabs";
  el.textContent = `
.ds-tabs__list{ display:flex; gap:var(--space-1); border-bottom:var(--border-width) solid var(--border); }
.ds-tab{
  position:relative; background:none; border:none; cursor:pointer;
  font-family:var(--font-mono); font-size:var(--text-small); font-weight:var(--weight-medium);
  text-transform:uppercase; letter-spacing:var(--tracking-label); color:var(--muted);
  padding:var(--space-1) var(--space-2); display:inline-flex; align-items:center; gap:var(--space-1);
  border-bottom:2px solid transparent; margin-bottom:-1px;
  transition:color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard);
}
.ds-tab:hover{ color:var(--text); }
.ds-tab[aria-selected="true"]{ color:var(--text); border-bottom-color:var(--accent); }
.ds-tab:focus-visible{ outline:2px solid var(--text); outline-offset:-2px; }
.ds-tab:disabled{ opacity:0.5; cursor:not-allowed; }
.ds-tab__count{ font-size:var(--text-micro); color:var(--muted); }
`;
  document.head.appendChild(el);
}

export function Tabs({ tabs = [], value, defaultValue, onChange, className = "", ...rest }) {
  ensureStyles();
  const first = defaultValue ?? (tabs[0] && tabs[0].id);
  const [internal, setInternal] = React.useState(first);
  const active = value != null ? value : internal;
  const select = (id) => {
    if (value == null) setInternal(id);
    onChange && onChange(id);
  };
  return (
    <div className={`ds-tabs ${className}`.trim()} {...rest}>
      <div className="ds-tabs__list" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={active === t.id}
            disabled={t.disabled}
            className="ds-tab"
            onClick={() => select(t.id)}
          >
            {t.icon && <Mark name={t.icon} size={14} />}
            <span>{t.label}</span>
            {t.count != null && <span className="ds-tab__count">{t.count}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
