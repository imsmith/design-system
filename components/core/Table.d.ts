import React from "react";

/**
 * Table — caption header, density modes, right-aligned numerics, sortable
 * headers with a chevron, selected row = accent tint + left rule.
 *
 * @startingPoint section="Core" subtitle="Data table — density, sort, selection" viewport="700x260"
 */
export interface TableColumn<Row = any> {
  key: string;
  label: React.ReactNode;
  /** Right-align in tabular mono. */
  num?: boolean;
  /** Render a sort button in the header. */
  sortable?: boolean;
  /** Custom cell renderer (e.g. a StatusBadge). */
  render?: (row: Row) => React.ReactNode;
}
export interface TableProps<Row = any> extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: TableColumn<Row>[];
  rows: Row[];
  /** Identify a row (defaults to row.id, then index). */
  rowKey?: (row: Row) => string | number;
  density?: "comfortable" | "compact" | "dense";
  /** Current sort, mirrored into aria-sort. */
  sort?: { key: string; dir: "ascending" | "descending" };
  onSort?: (key: string) => void;
  /** Selected row key. */
  selected?: string | number;
  /** Row click handler; makes rows interactive. */
  onSelect?: (row: Row) => void;
  caption?: React.ReactNode;
}
export function Table<Row = any>(props: TableProps<Row>): JSX.Element;
