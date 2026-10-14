import React from "react";

/* Mark — icon primitive rendering one glyph from the canonical sprite sheet
 * (assets/marks/sprite.svg) with currentColor and the monoline-outline style. */
export interface MarkProps extends React.SVGProps<SVGSVGElement> {
  /** Sprite id without the `#`, e.g. "m-search", "m-critical". See tokens/marks.edn. */
  name: string;
  /** Pixel size (square). Default 20. */
  size?: number;
  /** Override the sprite URL base for an external sheet. Default: same-document #id (provide the symbols via sprite-inject.js). */
  sprite?: string;
  /** Accessible label. When omitted the mark is decorative (aria-hidden). */
  label?: string;
  /** Override stroke width (default 2, from the mark style spec). */
  strokeWidth?: number;
}

export function Mark(props: MarkProps): JSX.Element;
