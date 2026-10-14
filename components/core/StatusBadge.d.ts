import React from "react";

/**
 * StatusBadge — the canonical "never color alone" control: alert-ramp color +
 * status glyph + word, all driven by one `step` so they cannot disagree.
 *
 * @startingPoint section="Core" subtitle="Status chip — color + glyph + word" viewport="700x140"
 */
export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Alert-ramp step. Drives color, glyph, and the default display word. */
  step: "critical" | "high" | "medium" | "low" | "unknown";
  /** Override the display word (defaults: DOWN/ALERT/WARN/OK/UNK). */
  label?: string;
  /** soft = tinted (default); solid = filled ramp color; plain = glyph + word only. */
  variant?: "soft" | "solid" | "plain";
  /** Apply the critical pulse (critical/live only). Static under reduced-motion. */
  pulse?: boolean;
  /** Glyph size in px. Default 14. */
  size?: number;
}

export function StatusBadge(props: StatusBadgeProps): JSX.Element;
