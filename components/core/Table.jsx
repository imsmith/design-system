import React from "react";
import { Mark } from "./Mark.jsx";

/* Table — the workhorse (manual/06 · table). Caption header row (muted,
 * uppercase), density modes (comfortable/compact/dense), numeric columns
 * right-aligned in tabular mono, sortable headers carry a chevron, status cells
 * use StatusBadge, selected row = accent tint + left rule.
 *
 * columns: [{ key, label, num?, sortable?, render?(row) }]
 * rows:    objects; rowKey(row) or row.id identifies them.
 */
export function Table({
  columns = [],
  rows = [],
  rowKey,
  density = "comfortable",
  sort,          // { key, dir: "ascending" | "descending" }
  onSort,        // (key) => void
  selected,      // row key
  onSelect,      // (row) => void
  caption,
  className = "",
  ...rest
}) {
  const keyOf = (r, i) => (rowKey ? rowKey(r) : r.id != null ? r.id : i);
  const cls = ["ds-table", density !== "comfortable" ? `ds-table--${density}` : "", className].filter(Boolean).join(" ");
  return (
    <table className={cls} {...rest}>
      {caption && <caption className="ds-table__caption">{caption}</caption>}
      <thead>
        <tr>
          {columns.map((c) => (
            <th
              key={c.key}
              scope="col"
              className={`ds-table__th${c.num ? " ds-table__th--num" : ""}`}
              aria-sort={sort && sort.key === c.key ? sort.dir : c.sortable ? "none" : undefined}
            >
              {c.sortable ? (
                <button type="button" className="ds-table__sort" onClick={() => onSort && onSort(c.key)}>
                  <span>{c.label}</span>
                  <Mark name="m-chevron" size={12} />
                </button>
              ) : (
                c.label
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => {
          const k = keyOf(r, i);
          const isSel = selected != null && selected === k;
          return (
            <tr
              key={k}
              className={`ds-table__row${onSelect ? " ds-table__row--interactive" : ""}`}
              aria-selected={onSelect ? (isSel ? "true" : "false") : undefined}
              tabIndex={onSelect ? 0 : undefined}
              onClick={onSelect ? () => onSelect(r) : undefined}
              onKeyDown={onSelect ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelect(r); } } : undefined}
            >
              {columns.map((c) => (
                <td key={c.key} className={`ds-table__td${c.num ? " ds-table__td--num" : ""}`}>
                  {c.render ? c.render(r) : r[c.key]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
