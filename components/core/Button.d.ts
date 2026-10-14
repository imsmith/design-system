import React from "react";

/**
 * Button — the action control. Composes chrome roles + the mark system.
 *
 * @startingPoint section="Core" subtitle="Action control — primary, ghost, text, danger" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = accent fill (large/heavy label only); ghost = body-size actions;
   *  text = no border/fill; danger = destructive primary (critical fill). */
  variant?: "primary" | "ghost" | "text" | "danger";
  /** Control size. Default "md". */
  size?: "sm" | "md" | "lg";
  /** Leading mark id (e.g. "m-add"). */
  icon?: string;
  /** Trailing mark id (e.g. "m-chevron"). */
  iconEnd?: string;
  /** Loading state — swaps label for an animated m-refresh, sets aria-busy. */
  loading?: boolean;
}

export function Button(props: ButtonProps): JSX.Element;
