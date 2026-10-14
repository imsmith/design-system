import React from "react";

/** Toggle — switch; checked = accent track + knob shift (position carries the state, not just color). */
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Text label beside the switch. */
  label?: React.ReactNode;
  /** Show an ON/OFF text indicator. */
  showState?: boolean;
}
export function Toggle(props: ToggleProps): JSX.Element;
