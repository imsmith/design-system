import React from "react";

/** Pagination — prev/next chevrons + numbered pages with elision; current page = accent tint. */
export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  page: number;
  total: number;
  onChange?: (page: number) => void;
}
export function Pagination(props: PaginationProps): JSX.Element;
