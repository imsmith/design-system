import React from "react";

/* Mark — the icon primitive. Renders one glyph from the canonical sprite
 * (assets/marks/sprite.svg) as an inline <svg><use>. Monoline outline, 24×24,
 * currentColor — so the mark inherits its context's color (text, accent,
 * on-accent, or a status hue). This is the richest mark tier; terminal contexts
 * fall back to Nerd Font / Unicode / ASCII per tokens/marks.edn.
 *
 * Sprite location: set window.DS_SPRITE_BASE to the correct relative path from
 * the host page, or pass `sprite`. Defaults to "assets/marks/sprite.svg".
 */

export function Mark({
  name,
  size = 20,
  sprite,
  label,
  strokeWidth,
  style,
  className,
  ...rest
}) {
  // Default to a same-document reference (#id), provided by sprite-inject.js —
  // the external-file form is blocked when served. Pass `sprite` to force an
  // external sheet URL if you have one that resolves.
  const href = sprite ? `${sprite}#${name}` : `#${name}`;

  const decorative = !label;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={label}
      focusable="false"
      className={className}
      style={{
        display: "inline-block",
        flex: "none",
        verticalAlign: "text-bottom",
        ...(strokeWidth ? { strokeWidth } : null),
        ...style,
      }}
      {...rest}
    >
      <use href={href} />
    </svg>
  );
}
