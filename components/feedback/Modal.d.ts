import React from "react";

/**
 * Modal / dialog — scrim, focus trap, Esc/scrim dismiss, right-aligned footer
 * actions. `destructive` for the critical-colored confirm flow.
 *
 * @startingPoint section="Feedback" subtitle="Dialog + destructive confirm" viewport="700x320"
 */
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose?: () => void;
  title: React.ReactNode;
  /** sm = confirm (default), md = form. Never full-bleed. */
  size?: "sm" | "md";
  /** Destructive confirm: critical header rule; role=alertdialog. Pair with a danger Button. */
  destructive?: boolean;
  /** Blocking: no close button, Esc and scrim do not dismiss. */
  blocking?: boolean;
  children?: React.ReactNode;
  /** Footer actions, right-aligned: primary/danger + ghost cancel. */
  footer?: React.ReactNode;
}
export function Modal(props: ModalProps): JSX.Element | null;
