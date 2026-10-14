import React from "react";

/**
 * DivergingMeter — signed deviation from a nominal center (green at 0), colored
 * by the diverging spectrum at the signed magnitude. Always shows the signed
 * number + diverging mark.
 *
 * @startingPoint section="Data" subtitle="Signed deviation meter on the spectrum" viewport="700x120"
 */
export interface DivergingMeterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Signed value; 0 = nominal/green. Positive = warm/over, negative = cool/under. */
  value: number;
  /** Max absolute magnitude for scaling the bar (default 5). */
  range?: number;
  /** Caption label. */
  label?: React.ReactNode;
  /** Unit suffix on the value. */
  unit?: string;
  /** Show the signed value + diverging mark. Default true. */
  showValue?: boolean;
}

export function DivergingMeter(props: DivergingMeterProps): JSX.Element;
