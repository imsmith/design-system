import React from "react";

/**
 * Card / Panel — surface container with border + density padding. The dashboard
 * panel building block.
 *
 * @startingPoint section="Core" subtitle="Surface panel with header + body" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Optional header title (rendered as an UPPERCASE caption label). */
  title?: React.ReactNode;
  /** Header actions, right-aligned (e.g. icon buttons). */
  actions?: React.ReactNode;
  /** Footer content above a top border. */
  footer?: React.ReactNode;
  /** Padding density. Dashboards default to "compact". */
  density?: "comfortable" | "compact" | "dense";
  /** Make the card hoverable/focusable (hover → accent border + ambient glow). */
  interactive?: boolean;
  /** Selected treatment: accent tint + left rule. */
  selected?: boolean;
  /** Remove the body's top padding (e.g. when the body is a flush table). */
  flush?: boolean;
}

export function Card(props: CardProps): JSX.Element;
