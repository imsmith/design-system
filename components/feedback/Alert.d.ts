import React from "react";

/**
 * Alert / banner — full-width message keyed to CAP severity: status glyph + left
 * rule + title/body + optional actions + dismiss.
 *
 * @startingPoint section="Feedback" subtitle="Severity banner — color + glyph + text" viewport="700x140"
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** CAP severity step (or "info" for the accent/neutral notice). */
  severity?: "critical" | "high" | "medium" | "low" | "unknown" | "info";
  /** Bold first line — what happened. */
  title?: React.ReactNode;
  /** Body — why / what to do. */
  children?: React.ReactNode;
  /** Action controls (e.g. ghost buttons). */
  actions?: React.ReactNode;
  /** Show a dismiss (m-close) and call this on click. */
  onDismiss?: () => void;
  /** Apply the critical pulse (critical/live only). */
  pulse?: boolean;
}

export function Alert(props: AlertProps): JSX.Element;
