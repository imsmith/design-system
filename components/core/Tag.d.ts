import React from "react";

/** Tag — small neutral metadata/label chip (chrome color, never status/data color). */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Optional leading mark id. */
  icon?: string;
  /** Use the accent treatment instead of muted/neutral. */
  accent?: boolean;
  /** Show a dismiss button and call this on click. */
  onRemove?: () => void;
}

export function Tag(props: TagProps): JSX.Element;
