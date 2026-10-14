import React from "react";

/* Card / Panel — a surface container with border and density-based padding
 * (manual/06 · card/panel). The dashboard panel building block: optional header
 * (caption/muted title + actions) over content. Usually non-interactive; pass
 * `interactive` for hover/focus, `selected` for the accent-tint + left-rule.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-card";
  el.textContent = `
.ds-card{
  --_pad: var(--space-3);
  background:var(--surface); color:var(--text);
  border:var(--border-width) solid var(--border); border-radius:var(--radius-lg);
  display:flex; flex-direction:column; min-width:0;
}
.ds-card--compact{ --_pad: var(--space-2); }
.ds-card--dense{ --_pad: var(--space-1); }
.ds-card__head{
  display:flex; align-items:center; gap:var(--space-2);
  padding:var(--_pad); padding-bottom:var(--space-1);
}
.ds-card__title{
  font-family:var(--font-mono); font-size:var(--text-caption); font-weight:var(--weight-medium);
  text-transform:uppercase; letter-spacing:var(--tracking-label); color:var(--muted); margin:0;
}
.ds-card__actions{ margin-left:auto; display:flex; align-items:center; gap:var(--space-1); }
.ds-card__body{ padding:var(--_pad); padding-top:var(--space-2); flex:1; min-width:0; }
.ds-card__body--flush{ padding-top:var(--_pad); }
.ds-card__foot{
  padding:var(--_pad); padding-top:var(--space-1);
  border-top:var(--border-width) solid var(--border); margin-top:auto;
}
.ds-card--interactive{ cursor:pointer; transition:border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard); }
.ds-card--interactive:hover{ border-color:var(--accent); box-shadow:var(--glow-box-ambient); }
.ds-card--interactive:focus-visible{ outline:2px solid var(--text); outline-offset:var(--space-half); box-shadow:var(--glow-box-active); }
.ds-card--selected{ border-color:var(--accent); background:linear-gradient(var(--accent-tint),var(--accent-tint)),var(--surface); box-shadow:inset 3px 0 0 var(--accent); }
`;
  document.head.appendChild(el);
}

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
  ensureStyles();
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
