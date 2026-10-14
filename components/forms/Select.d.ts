import React from "react";

/** Select — labelled dropdown (native select styled to match Input), trailing m-chevron. */
export interface SelectOption {
  value: string;
  label: string;
}
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Caption label above the trigger. */
  label?: React.ReactNode;
  /** Options as strings or {value,label}. Ignored if children are provided. */
  options?: (string | SelectOption)[];
  /** Error message — critical/error state. */
  error?: React.ReactNode;
  /** Helper text below when no error. */
  helper?: React.ReactNode;
}

export function Select(props: SelectProps): JSX.Element;
