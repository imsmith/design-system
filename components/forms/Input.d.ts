import React from "react";

/**
 * Input — labelled text field with helper/error states. Error is shown with the
 * m-critical glyph + message (color + glyph + text).
 *
 * @startingPoint section="Forms" subtitle="Text field with label + validation" viewport="700x180"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Caption label above the field. */
  label?: React.ReactNode;
  /** Leading mark id (e.g. "m-search"). */
  icon?: string;
  /** Error message — switches the field to the critical/error state. */
  error?: React.ReactNode;
  /** Helper text shown below when there is no error. */
  helper?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
