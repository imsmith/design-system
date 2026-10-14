import React from "react";

/** Sparkline — compact axis-less trend with a labelled endpoint (Tufte). */
export interface SparklineProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Series values. */
  data: number[];
  /** SVG width / height in px. Default 96×24. */
  width?: number;
  height?: number;
  /** plain = neutral accent line; threshold = endpoint adopts alert ramp on crossing. */
  mode?: "plain" | "threshold";
  /** Warn/crit thresholds (threshold mode) — drawn as dashed lines. */
  warn?: number;
  crit?: number;
  /** Unit suffix on the endpoint value. */
  unit?: string;
  /** Show the endpoint value + word. Default true. */
  showEnd?: boolean;
}

export function Sparkline(props: SparklineProps): JSX.Element;
