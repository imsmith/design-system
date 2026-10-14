import React from "react";

/**
 * Heatmap — the signature status-at-scale grid. Cells colored by deviation from
 * green via the diverging spectrum, with a required legend, per-cell values, and
 * the m-critical glyph on critical-end cells.
 *
 * @startingPoint section="Data" subtitle="Status-at-scale spectrum grid" viewport="700x320"
 */
export interface HeatmapCell {
  id?: string;
  /** Signed deviation from nominal (0 = green). */
  value: number;
  /** Human label for the cell (shown in the tooltip + a11y name). */
  label?: string;
}
export interface HeatmapProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The cells, in row-major order. */
  cells: HeatmapCell[];
  /** Column count (defaults to a near-square grid). */
  columns?: number;
  /** Legend end magnitude (default 5). */
  range?: number;
  /** Signed value at/above which a cell shows the m-critical glyph (default 4). */
  criticalAt?: number;
  /** Unit suffix in tooltips. */
  unit?: string;
  /** Cell click handler — receives the cell. */
  onSelect?: (cell: HeatmapCell) => void;
  /** Show the spectrum legend (required by the pattern; default true). */
  showLegend?: boolean;
}

export function Heatmap(props: HeatmapProps): JSX.Element;
