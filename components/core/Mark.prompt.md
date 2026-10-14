**Mark** renders a single icon glyph from the canonical sprite (`assets/marks/sprite.svg`) in the monoline-outline style, inheriting color via `currentColor`. Use it anywhere the system needs an icon — it is the SVG (richest) tier of the mark system.

```jsx
<Mark name="m-search" size={18} />
<Mark name="m-critical" label="Critical" style={{ color: "var(--status-critical)" }} />
```

Sprite ids come from `tokens/marks.edn`: status (`m-critical` `m-high` `m-medium` `m-low` `m-unknown`), diverging (`m-warm` `m-neutral` `m-cool`), and the UI set (`m-close` `m-menu` `m-chevron` `m-more` `m-search` `m-add` `m-remove` `m-edit` `m-delete` `m-refresh` `m-filter` `m-download` `m-upload` `m-settings` `m-info` `m-help` `m-user` `m-lock` `m-bell`).

Notes
- Include `assets/marks/sprite-inject.js` once per page (it injects the sprite so marks resolve via same-document `#id`). Pass `sprite="…"` only if you have an external sheet URL that resolves.
- Color it by setting `color` on the SVG or an ancestor — never hard-code a per-mark color.
- The five status silhouettes are reserved; do not reuse them for functional icons.
- Pass `label` for a meaningful icon (sets `role=img` + `aria-label`); omit for decorative.
