import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Menu / nav (manual/06 · menu). A surface list — popover (default) or
 * sidebar. Items take hover/focus/selected/disabled, optional leading mark,
 * trailing m-chevron for submenus, a muted hint (shortcut, count). Keyboard:
 * arrow keys move, Enter/Space select, Esc closes (onClose).
 * items: [{ id, label, icon?, hint?, href?, disabled?, submenu?, separator?, heading? }]
 */
export function Menu({ items = [], selected, onSelect, onClose, variant = "popover", label, className = "", ...rest }) {
  const ref = React.useRef(null);
  const onKey = (e) => {
    const els = [...ref.current.querySelectorAll(".ds-menu__item:not([disabled])")];
    const i = els.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); (els[i + 1] || els[0]).focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); (els[i - 1] || els[els.length - 1]).focus(); }
    else if (e.key === "Home") { e.preventDefault(); els[0] && els[0].focus(); }
    else if (e.key === "End") { e.preventDefault(); els[els.length - 1] && els[els.length - 1].focus(); }
    else if (e.key === "Escape" && onClose) { e.preventDefault(); onClose(); }
  };
  return (
    <ul ref={ref} className={`ds-menu ds-menu--${variant} ${className}`.trim()} role={variant === "sidebar" ? "navigation" : "menu"} aria-label={label} onKeyDown={onKey} {...rest}>
      {items.map((it, i) => {
        if (it.separator) return <li key={i} className="ds-menu__sep" role="separator" />;
        if (it.heading) return <li key={i} className="ds-menu__heading" role="presentation">{it.heading}</li>;
        const isSel = selected != null && selected === it.id;
        const Tag = it.href ? "a" : "button";
        return (
          <li key={it.id || i} role="none">
            <Tag
              className="ds-menu__item"
              role={variant === "sidebar" ? undefined : "menuitem"}
              href={it.href}
              type={it.href ? undefined : "button"}
              disabled={it.href ? undefined : it.disabled}
              aria-disabled={it.href && it.disabled ? "true" : undefined}
              aria-current={isSel ? (it.href ? "page" : "true") : undefined}
              onClick={(e) => { if (it.disabled) { e.preventDefault(); return; } onSelect && onSelect(it); }}
            >
              {it.icon && <Mark name={it.icon} size={14} />}
              <span className="ds-menu__label">{it.label}</span>
              {it.hint != null && <span className="ds-menu__hint">{it.hint}</span>}
              {it.submenu && <span className="ds-menu__sub"><Mark name="m-chevron" size={12} /></span>}
            </Tag>
          </li>
        );
      })}
    </ul>
  );
}
