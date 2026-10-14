import React from "react";

/* Card / Panel — a surface container with border and density-based padding
 * (manual/06 · card/panel). The dashboard panel building block: optional header
 * (caption/muted title + actions) over content. Usually non-interactive; pass
 * `interactive` for hover/focus, `selected` for the accent-tint + left-rule.
 */


export function Card({
  title,
  actions,
  footer,
  density = "comfortable",
  interactive = false,
  selected = false,
  flush = false,
  children,
  className = "",
  ...rest
}) {
  const cls = [
    "ds-card",
    density === "compact" ? "ds-card--compact" : "",
    density === "dense" ? "ds-card--dense" : "",
    interactive ? "ds-card--interactive" : "",
    selected ? "ds-card--selected" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={cls}
      tabIndex={interactive ? 0 : undefined}
      aria-current={selected || undefined}
      {...rest}
    >
      {(title || actions) && (
        <header className="ds-card__head">
          {title && <h3 className="ds-card__title">{title}</h3>}
          {actions && <div className="ds-card__actions">{actions}</div>}
        </header>
      )}
      <div className={`ds-card__body${flush ? " ds-card__body--flush" : ""}`}>
        {children}
      </div>
      {footer && <footer className="ds-card__foot">{footer}</footer>}
    </section>
  );
}
