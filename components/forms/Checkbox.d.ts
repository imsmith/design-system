import React from "react";

/** Checkbox — checked state uses accent fill + the m-low check glyph (state reads without color). */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Text label beside the box. */
  label?: React.ReactNode;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
