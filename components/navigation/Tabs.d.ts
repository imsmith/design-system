import React from "react";

/**
 * Tabs — a row of labels; selected = accent underline + text, others muted.
 *
 * @startingPoint section="Navigation" subtitle="Tab row — accent underline" viewport="700x100"
 */
export interface TabItem {
  id: string;
  label: React.ReactNode;
  /** Optional leading mark id. */
  icon?: string;
  /** Optional trailing count. */
  count?: number;
  disabled?: boolean;
}
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: TabItem[];
  /** Controlled selected id. */
  value?: string;
  /** Uncontrolled initial id (defaults to the first tab). */
  defaultValue?: string;
  /** Called with the newly-selected id. */
  onChange?: (id: string) => void;
}

export function Tabs(props: TabsProps): JSX.Element;
