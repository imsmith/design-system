import React from "react";

/**
 * SequentialMeter — magnitude 0→max with warn/crit thresholds. Accent fill that
 * adopts the alert-ramp color + word on crossing a threshold.
 *
 * @startingPoint section="Data" subtitle="0→max meter with warn/crit thresholds" viewport="700x120"
 */
export interface SequentialMeterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current value. */
  value: number;
  /** Maximum (default 100). */
  max?: number;
  /** Warn threshold — fill/value turn medium and read "WARN" at/above it. */
  warn?: number;
  /** Crit threshold — fill/value turn critical and read "CRIT" at/above it. */
  crit?: number;
  /** Caption label. */
  label?: React.ReactNode;
  /** Unit suffix on the value (default "%"). */
  unit?: string;
  /** Show the numeric value + threshold word. Default true. */
  showValue?: boolean;
}

export function SequentialMeter(props: SequentialMeterProps): JSX.Element;
