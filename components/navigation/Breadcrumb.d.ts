import React from "react";

/** Breadcrumb — muted ancestor links with chevron separators; current page is plain text. */
export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Ancestors first; the last item is the current page. */
  items: BreadcrumbItem[];
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
