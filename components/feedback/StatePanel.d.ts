import React from "react";

/**
 * StatePanel — the empty / loading / error triad every data view must define.
 *
 * @startingPoint section="Feedback" subtitle="Empty · loading · error states" viewport="700x240"
 */
export interface StatePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "empty" | "loading" | "error";
  /** Override the mark (defaults: m-unknown / m-refresh / m-critical). */
  mark?: string;
  /** Short uppercase title — what happened. */
  title?: React.ReactNode;
  /** Why, and what to do. */
  children?: React.ReactNode;
  /** The next action (a Button) — retry for error, create/import for empty. */
  action?: React.ReactNode;
}
export function StatePanel(props: StatePanelProps): JSX.Element;

/** Skeleton — muted surface blocks for loading content. */
export interface SkeletonProps extends React.HTMLAttributes<HTMLElement> {
  /** Number of text lines (1 = a single block sized by width/height). */
  lines?: number;
  width?: string | number;
  height?: string | number;
}
export function Skeleton(props: SkeletonProps): JSX.Element;
