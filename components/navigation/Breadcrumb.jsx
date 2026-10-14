import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Breadcrumb (manual/06 · breadcrumb). Muted ancestor links separated by
 * m-chevron; the current page is text, not a link.
 * items: [{ label, href?, onClick? }] — the last item is the current page.
 */
export function Breadcrumb({ items = [], className = "", ...rest }) {
  return (
    <nav aria-label="Breadcrumb" className={className} {...rest}>
      <ol className="ds-crumbs">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="ds-crumb" aria-current={last ? "page" : undefined}>
              {last || (!it.href && !it.onClick) ? (
                <span>{it.label}</span>
              ) : (
                <a href={it.href || "#"} onClick={it.onClick}>{it.label}</a>
              )}
              {!last && <span className="ds-crumb__sep"><Mark name="m-chevron" size={12} /></span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
