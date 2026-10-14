import React from "react";

/**
 * Toast — transient severity notification; auto-dismisses by severity,
 * critical persists until acknowledged.
 *
 * @startingPoint section="Feedback" subtitle="Corner notifications" viewport="700x240"
 */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  severity?: "critical" | "high" | "medium" | "low" | "unknown" | "info";
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Called on close click and when the timer elapses. */
  onDismiss?: () => void;
  /** Override the auto-dismiss ms (0 = persist). Defaults by severity; critical = 0. */
  duration?: number;
}
export function Toast(props: ToastProps): JSX.Element;

export interface ToastStackProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "bottom-right" | "top-right";
  children?: React.ReactNode;
}
export function ToastStack(props: ToastStackProps): JSX.Element;
