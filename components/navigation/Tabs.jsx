import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Tabs — a row of labels over a content area (manual/06 · tabs). Selected =
 * accent underline + text; others muted. One selected at a time. Keyboard
 * accessible (roving via native buttons + arrow keys). Controlled or uncontrolled.
 */


export function Tabs({ tabs = [], value, defaultValue, onChange, className = "", ...rest }) {
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
