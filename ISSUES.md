# ISSUES

Running list of friction, footguns, and small fixes surfaced by design-system consumers. Newest at the top. Mark resolved with `~~strikethrough~~` and a one-line note.

---

## 2026-10-14 — follow-ups from agento's migration (via gos-ui)

### ~~1. `base.css` should carry the `[hidden]` rule~~

Resolved 2026-11-20: rule added to `tokens/base.css`; agento can drop its copy from `app.css`.

Consumers run without Tailwind preflight, and `.ds-toast { display: flex }` beats the user-agent `[hidden] { display: none }`. agento adds `[hidden]:where(:not([hidden="until-found"])) { display: none !important; }` in its `app.css`; `base.css` is where it belongs.

### ~~2. ASCII fallback `^` is shared by three marks~~

Resolved 2026-11-20: `m-warm` keeps `^` (pairs with `m-cool` `v`); `m-upload` -> `up`, `m-external` -> `ext`, and `m-download` -> `dn` (it shared `v` with `m-cool`).

`tokens/marks.edn` gives `m-warm` (line 41), `m-upload` (line 59) and `m-external` (line 74) the same `:ascii "^"`, so they are indistinguishable in ASCII rendering.
