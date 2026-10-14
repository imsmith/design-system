import React from "react";

/** Tooltip — caption bubble on hover and focus; dotted-underline cue; never essential. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: React.ReactNode;
  children: React.ReactNode;
}
export function Tooltip(props: TooltipProps): JSX.Element;
