import React from "react";

/**
 * Menu / nav — surface list (popover or sidebar); keyboard navigable; selected =
 * accent tint + left rule.
 *
 * @startingPoint section="Navigation" subtitle="Popover menu and sidebar nav" viewport="700x260"
 */
export interface MenuItem {
  id?: string;
  label?: React.ReactNode;
  icon?: string;
  /** Muted trailing hint (shortcut, count). */
  hint?: React.ReactNode;
  href?: string;
  disabled?: boolean;
  /** Trailing chevron. */
  submenu?: boolean;
  separator?: boolean;
  heading?: React.ReactNode;
}
export interface MenuProps extends Omit<React.HTMLAttributes<HTMLUListElement>, "onSelect"> {
  items: MenuItem[];
  selected?: string;
  onSelect?: (item: MenuItem) => void;
  /** Called on Escape. */
  onClose?: () => void;
  variant?: "popover" | "sidebar";
  /** Accessible name. */
  label?: string;
}
export function Menu(props: MenuProps): JSX.Element;
