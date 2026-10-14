import React from "react";

/** Radio — checked = accent circle with a filled dot (state reads without color). */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}
export function Radio(props: RadioProps): JSX.Element;
