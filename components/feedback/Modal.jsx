import React from "react";
import { Mark } from "../core/Mark.jsx";

/* Modal / dialog (manual/06 · modal). Scrim + surface dialog: header (title +
 * m-close), body, footer actions right-aligned (primary + ghost). Focus is
 * trapped while open and returns to the trigger on close; Esc and scrim-click
 * dismiss unless `blocking`. Enters deliberate/enter, exits exit.
 *
 * Destructive confirm: pass `destructive` and make the primary action a
 * <Button variant="danger"> whose label is a verb naming the act; name the
 * target and state irreversibility in the body; Cancel is the ghost.
 */
export function Modal({
  open,
  onClose,
  title,
  size = "sm",
  destructive = false,
  blocking = false,
  children,
  footer,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  const id = React.useId();

  React.useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    const el = ref.current;
    const focusables = () => el.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])');
    const first = focusables()[0];
    (first || el).focus();
    const onKey = (e) => {
      if (e.key === "Escape" && !blocking) { e.preventDefault(); onClose && onClose(); }
      if (e.key === "Tab") {
        const f = focusables(); if (!f.length) return;
        const a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); prev && prev.focus && prev.focus(); };
  }, [open, blocking, onClose]);

  if (!open) return null;
  return (
    <div className="ds-scrim" onMouseDown={(e) => { if (!blocking && e.target === e.currentTarget) onClose && onClose(); }}>
      <div
        ref={ref}
        className={["ds-modal", `ds-modal--${size}`, destructive ? "ds-modal--destructive" : "", className].filter(Boolean).join(" ")}
        role={destructive || blocking ? "alertdialog" : "dialog"}
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        tabIndex={-1}
        {...rest}
      >
        <div className="ds-modal__head">
          <h2 className="ds-modal__title" id={`${id}-title`}>{title}</h2>
          {!blocking && (
            <button type="button" className="ds-modal__x" aria-label="Close" onClick={onClose}>
              <Mark name="m-close" size={16} />
            </button>
          )}
        </div>
        <div className="ds-modal__body">{children}</div>
        {footer && <div className="ds-modal__foot">{footer}</div>}
      </div>
    </div>
  );
}
