import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Pagination (manual/06 · pagination). Prev/next chevrons + numbered pages;
 * current = accent tint; … for elision; prev/next disabled at the ends.
 */
function pages(page, total, around = 1) {
  const set = new Set([1, total, page]);
  for (let d = 1; d <= around; d++) { set.add(page - d); set.add(page + d); }
  const list = [...set].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out = [];
  list.forEach((p, i) => { if (i && p - list[i - 1] > 1) out.push("…"); out.push(p); });
  return out;
}

export function Pagination({ page = 1, total = 1, onChange, className = "", ...rest }) {
  const go = (p) => { if (p >= 1 && p <= total && p !== page && onChange) onChange(p); };
  return (
    <nav className={`ds-pager ${className}`.trim()} aria-label="Pagination" {...rest}>
      <button type="button" className="ds-pager__btn ds-pager__btn--prev" aria-label="Previous page" disabled={page <= 1} onClick={() => go(page - 1)}>
        <Mark name="m-chevron" size={14} />
      </button>
      {pages(page, total).map((p, i) =>
        p === "…" ? (
          <span key={`gap${i}`} className="ds-pager__gap" aria-hidden="true">…</span>
        ) : (
          <button key={p} type="button" className="ds-pager__page" aria-current={p === page ? "page" : undefined} aria-label={`Page ${p}`} onClick={() => go(p)}>
            {p}
          </button>
        )
      )}
      <button type="button" className="ds-pager__btn ds-pager__btn--next" aria-label="Next page" disabled={page >= total} onClick={() => go(page + 1)}>
        <Mark name="m-chevron" size={14} />
      </button>
    </nav>
  );
}
