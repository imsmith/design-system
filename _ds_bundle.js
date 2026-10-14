/* @ds-bundle: {"format":3,"namespace":"DesignSystem_019de4","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Mark","sourcePath":"components/core/Mark.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DivergingMeter","sourcePath":"components/data/DivergingMeter.jsx"},{"name":"Heatmap","sourcePath":"components/data/Heatmap.jsx"},{"name":"SequentialMeter","sourcePath":"components/data/SequentialMeter.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"assets/marks/sprite-inject.js":"5a5d74914289","components/core/Button.jsx":"e9d614028173","components/core/Card.jsx":"24ddc414fa46","components/core/Mark.jsx":"ae112ec59efc","components/core/StatusBadge.jsx":"435dbe670b04","components/core/Tag.jsx":"05e288874223","components/data/DivergingMeter.jsx":"0174513c5c32","components/data/Heatmap.jsx":"58ce59839e5f","components/data/SequentialMeter.jsx":"552760eef2c8","components/data/Sparkline.jsx":"3ef457f2b07b","components/feedback/Alert.jsx":"70405afe80a4","components/forms/Checkbox.jsx":"feaa27c0d4a1","components/forms/Input.jsx":"84e3ad37c44a","components/forms/Select.jsx":"ebe07d316f34","components/forms/Toggle.jsx":"95f7ba32d20b","components/navigation/Tabs.jsx":"88adf91bf5b4","ui_kits/operations-console/AlertsView.jsx":"82da2d585bac","ui_kits/operations-console/App.jsx":"7d56c2e6f3ff","ui_kits/operations-console/GridDashboard.jsx":"a89c30b281fc","ui_kits/operations-console/LoginScreen.jsx":"c2729dc4a06f","ui_kits/operations-console/NodeDetail.jsx":"4f3574647a49","ui_kits/operations-console/Shell.jsx":"c6fdc9491548","ui_kits/operations-console/data.js":"fb919dbc6d92"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_019de4 = window.DesignSystem_019de4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/marks/sprite-inject.js
try { (() => {
/* sprite-inject.js — injects the canonical mark sprite into the document so
 * marks can be referenced with reliable same-document <use href="#m-..."> (the
 * external-file form <use href="sprite.svg#id"> is blocked when served). Include
 * this once per page (before anything that renders marks). Idempotent.
 */
(function () {
  if (typeof document === "undefined") return;
  if (document.getElementById("ds-mark-sprite")) return;
  var MARKUP = "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\">\n  \n\n  \n  <symbol id=\"m-critical\" viewBox=\"0 0 24 24\">\n    <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <polygon points=\"8,2 16,2 22,8 22,16 16,22 8,22 2,16 2,8\"></polygon>\n      <line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line>\n    </g>\n  </symbol>\n  <symbol id=\"m-high\" viewBox=\"0 0 24 24\">\n    <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <polygon points=\"12,3 22,21 2,21\"></polygon>\n      <line x1=\"12\" y1=\"10\" x2=\"12\" y2=\"15\"></line>\n      <circle cx=\"12\" cy=\"18\" r=\"1\" fill=\"currentColor\" stroke=\"none\"></circle>\n    </g>\n  </symbol>\n  <symbol id=\"m-medium\" viewBox=\"0 0 24 24\">\n    <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <polygon points=\"12,2 22,12 12,22 2,12\"></polygon>\n      <line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"14\"></line>\n      <circle cx=\"12\" cy=\"17\" r=\"1\" fill=\"currentColor\" stroke=\"none\"></circle>\n    </g>\n  </symbol>\n  <symbol id=\"m-low\" viewBox=\"0 0 24 24\">\n    <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n      <polyline points=\"7,12 11,16 17,8\"></polyline>\n    </g>\n  </symbol>\n  <symbol id=\"m-unknown\" viewBox=\"0 0 24 24\">\n    <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"3\"></rect>\n      <text x=\"12\" y=\"17\" font-size=\"13\" font-family=\"monospace\" fill=\"currentColor\" stroke=\"none\" text-anchor=\"middle\">?</text>\n    </g>\n  </symbol>\n\n  \n  <symbol id=\"m-warm\" viewBox=\"0 0 24 24\">\n    <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <polyline points=\"6,15 12,8 18,15\"></polyline>\n    </g>\n  </symbol>\n  <symbol id=\"m-neutral\" viewBox=\"0 0 24 24\">\n    <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <line x1=\"6\" y1=\"12\" x2=\"18\" y2=\"12\"></line>\n    </g>\n  </symbol>\n  <symbol id=\"m-cool\" viewBox=\"0 0 24 24\">\n    <g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <polyline points=\"6,9 12,16 18,9\"></polyline>\n    </g>\n  </symbol>\n\n  \n  <symbol id=\"m-close\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line></g></symbol>\n  <symbol id=\"m-menu\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"4\" y1=\"7\" x2=\"20\" y2=\"7\"></line><line x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\"></line><line x1=\"4\" y1=\"17\" x2=\"20\" y2=\"17\"></line></g></symbol>\n  <symbol id=\"m-chevron\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9,5 16,12 9,19\"></polyline></g></symbol>\n  <symbol id=\"m-more\" viewBox=\"0 0 24 24\"><g stroke=\"none\" fill=\"currentColor\"><circle cx=\"6\" cy=\"12\" r=\"1.4\"></circle><circle cx=\"12\" cy=\"12\" r=\"1.4\"></circle><circle cx=\"18\" cy=\"12\" r=\"1.4\"></circle></g></symbol>\n  <symbol id=\"m-search\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"10\" cy=\"10\" r=\"6\"></circle><line x1=\"14.5\" y1=\"14.5\" x2=\"20\" y2=\"20\"></line></g></symbol>\n  <symbol id=\"m-add\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></g></symbol>\n  <symbol id=\"m-remove\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></g></symbol>\n  <symbol id=\"m-edit\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 20v-4L16 4l4 4L8 20z\"></path><line x1=\"14\" y1=\"6\" x2=\"18\" y2=\"10\"></line></g></symbol>\n  <symbol id=\"m-delete\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"4,7 20,7\"></polyline><path d=\"M9 7V5h6v2\"></path><path d=\"M6 7l1 14h10l1-14\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></g></symbol>\n  <symbol id=\"m-refresh\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"21 4 21 9 16 9\"></polyline><path d=\"M18.7 14a7.5 7.5 0 1 1-1.77-7.8L21 9\"></path></g></symbol>\n  <symbol id=\"m-filter\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"3,5 21,5 14,13 14,19 10,16 10,13 3,5\"></polyline></g></symbol>\n  <symbol id=\"m-download\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"15\"></line><polyline points=\"8,11 12,15 16,11\"></polyline><polyline points=\"5,18 5,20 19,20 19,18\"></polyline></g></symbol>\n  <symbol id=\"m-upload\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"9\"></line><polyline points=\"8,13 12,9 16,13\"></polyline><polyline points=\"5,6 5,4 19,4 19,6\"></polyline></g></symbol>\n  <symbol id=\"m-settings\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 9.5 21.8 10.1 21.8 13.9 18 14.5 20.3 17.6 17.6 20.3 14.5 18 13.9 21.8 10.1 21.8 9.5 18 6.4 20.3 3.7 17.6 6 14.5 2.2 13.9 2.2 10.1 6 9.5 3.7 6.4 6.4 3.7 9.5 6 10.1 2.2 13.9 2.2 14.5 6 17.6 3.7 20.3 6.4Z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></g></symbol>\n  <symbol id=\"m-info\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"></line><circle cx=\"12\" cy=\"7.5\" r=\"1\" fill=\"currentColor\" stroke=\"none\"></circle></g></symbol>\n  <symbol id=\"m-help\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><circle cx=\"12\" cy=\"17\" r=\"1\" fill=\"currentColor\" stroke=\"none\"></circle></g></symbol>\n  <symbol id=\"m-user\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"8\" r=\"4\"></circle><path d=\"M5 20a7 7 0 0 1 14 0\"></path></g></symbol>\n  <symbol id=\"m-lock\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"9\" rx=\"2\"></rect><path d=\"M8 11V8a4 4 0 0 1 8 0v3\"></path><circle cx=\"12\" cy=\"15.5\" r=\"1.2\" fill=\"currentColor\" stroke=\"none\"></circle></g></symbol>\n  <symbol id=\"m-bell\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></g></symbol>\n</svg>";
  function inject() {
    if (document.getElementById("ds-mark-sprite")) return;
    var holder = document.createElement("div");
    holder.id = "ds-mark-sprite";
    holder.setAttribute("aria-hidden", "true");
    holder.style.cssText = "position:absolute;width:0;height:0;overflow:hidden";
    holder.innerHTML = MARKUP;
    document.body.insertBefore(holder, document.body.firstChild);
  }
  if (document.body) inject();else document.addEventListener("DOMContentLoaded", inject);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/marks/sprite-inject.js", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
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
  const cls = ["ds-card", density === "compact" ? "ds-card--compact" : "", density === "dense" ? "ds-card--dense" : "", interactive ? "ds-card--interactive" : "", selected ? "ds-card--selected" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("section", _extends({
    className: cls,
    tabIndex: interactive ? 0 : undefined,
    "aria-current": selected || undefined
  }, rest), (title || actions) && /*#__PURE__*/React.createElement("header", {
    className: "ds-card__head"
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "ds-card__title"
  }, title), actions && /*#__PURE__*/React.createElement("div", {
    className: "ds-card__actions"
  }, actions)), /*#__PURE__*/React.createElement("div", {
    className: `ds-card__body${flush ? " ds-card__body--flush" : ""}`
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    className: "ds-card__foot"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Mark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Mark — the icon primitive. Renders one glyph from the canonical sprite
 * (assets/marks/sprite.svg) as an inline <svg><use>. Monoline outline, 24×24,
 * currentColor — so the mark inherits its context's color (text, accent,
 * on-accent, or a status hue). This is the richest mark tier; terminal contexts
 * fall back to Nerd Font / Unicode / ASCII per tokens/marks.edn.
 *
 * Sprite location: set window.DS_SPRITE_BASE to the correct relative path from
 * the host page, or pass `sprite`. Defaults to "assets/marks/sprite.svg".
 */

function Mark({
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
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    role: decorative ? "presentation" : "img",
    "aria-hidden": decorative ? "true" : undefined,
    "aria-label": label,
    focusable: "false",
    className: className,
    style: {
      display: "inline-block",
      flex: "none",
      verticalAlign: "text-bottom",
      ...(strokeWidth ? {
        strokeWidth
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("use", {
    href: href
  }));
}
Object.assign(__ds_scope, { Mark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Mark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Button — the primary action control (manual/06 §3).
 *
 * Variants:
 *   primary — accent fill, on-accent label. The accent-label rule: a primary
 *             button's label is large/heavy ONLY. For body-size actions use ghost.
 *   ghost   — accent border, text label. The body-size action variant.
 *   text    — no border/fill.
 *   danger  — the destructive primary: status/critical fill, not accent. Its
 *             label should be a verb that names the act (DELETE).
 *
 * States: default, hover (brighten/ambient glow), focus (text outline + active
 * glow, via :focus-visible), active (pressed/inset), disabled (muted, 0.5,
 * non-interactive), loading (animated m-refresh, aria-busy, content hidden).
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-button";
  el.textContent = `
.ds-btn{
  --_pad-y: var(--space-1); --_pad-x: var(--space-3); --_fs: var(--text-small);
  display:inline-flex; align-items:center; justify-content:center; gap:var(--space-1);
  font-family:var(--font-mono); font-size:var(--_fs); font-weight:var(--weight-medium);
  line-height:1; text-transform:uppercase; letter-spacing:var(--tracking-label);
  padding:var(--_pad-y) var(--_pad-x); border-radius:var(--radius-md);
  border:var(--border-width) solid transparent; background:transparent; color:var(--text);
  cursor:pointer; user-select:none; white-space:nowrap; position:relative;
  min-height:36px; transition:background var(--dur-fast) var(--ease-standard),
    border-color var(--dur-fast) var(--ease-standard),
    box-shadow var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard);
}
.ds-btn--sm{ --_pad-y:var(--space-half); --_pad-x:var(--space-2); --_fs:var(--text-caption); min-height:28px; }
.ds-btn--lg{ --_pad-y:var(--space-2); --_pad-x:var(--space-4); --_fs:var(--text-body); min-height:44px; }

.ds-btn--primary{ background:var(--accent); color:var(--on-accent); border-color:var(--accent); }
.ds-btn--primary:hover{ filter:brightness(1.12); box-shadow:var(--glow-box-ambient); }
.ds-btn--primary:active{ filter:brightness(0.92); }

.ds-btn--ghost{ border-color:var(--accent); color:var(--text); }
.ds-btn--ghost:hover{ box-shadow:var(--glow-box-ambient); background:var(--accent-tint); }
.ds-btn--ghost:active{ background:var(--accent-tint); transform:translateY(1px); }

.ds-btn--text{ color:var(--accent); padding-left:var(--space-1); padding-right:var(--space-1); }
.ds-btn--text:hover{ text-decoration:underline; }

.ds-btn--danger{ background:var(--status-critical); color:#fff; border-color:var(--status-critical); }
.ds-btn--danger:hover{ filter:brightness(1.1); }
.ds-btn--danger:active{ filter:brightness(0.9); }

.ds-btn:focus-visible{ outline:2px solid var(--text); outline-offset:var(--space-half); box-shadow:var(--glow-box-active); }
.ds-btn[disabled],.ds-btn[aria-disabled="true"]{ opacity:0.5; cursor:not-allowed; box-shadow:none; filter:none; }
.ds-btn[data-loading="true"]{ cursor:progress; }
.ds-btn[data-loading="true"] .ds-btn__label{ visibility:hidden; }
.ds-btn__spin{ position:absolute; display:inline-flex; animation:ds-btn-spin 900ms linear infinite; }
@keyframes ds-btn-spin{ to{ transform:rotate(360deg); } }
@media (prefers-reduced-motion: reduce){ .ds-btn__spin{ animation-duration:0s; } }
`;
  document.head.appendChild(el);
}
function Button({
  variant = "ghost",
  size = "md",
  icon,
  iconEnd,
  loading = false,
  disabled = false,
  children,
  className = "",
  ...rest
}) {
  ensureStyles();
  const cls = ["ds-btn", `ds-btn--${variant}`, size !== "md" ? `ds-btn--${size}` : "", className].filter(Boolean).join(" ");
  const iconSize = size === "sm" ? 14 : size === "lg" ? 20 : 16;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled || loading,
    "aria-busy": loading || undefined,
    "data-loading": loading || undefined
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "ds-btn__spin",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: "m-refresh",
    size: iconSize
  })), /*#__PURE__*/React.createElement("span", {
    className: "ds-btn__label",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1)"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: icon,
    size: iconSize
  }), children, iconEnd && /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: iconEnd,
    size: iconSize
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
const { Mark } = __ds_scope;
const STEPS = {
  critical: { color: "var(--status-critical)", on: "var(--on-status-critical)", glyph: "m-critical", word: "DOWN", oasis: "Extreme" },
  high: { color: "var(--status-high)", on: "var(--on-status-high)", glyph: "m-high", word: "ALERT", oasis: "Severe" },
  medium: { color: "var(--status-medium)", on: "var(--on-status-medium)", glyph: "m-medium", word: "WARN", oasis: "Moderate" },
  low: { color: "var(--status-low)", on: "var(--on-status-low)", glyph: "m-low", word: "OK", oasis: "Minor" },
  unknown: { color: "var(--status-unknown)", on: "var(--on-status-unknown)", glyph: "m-unknown", word: "UNK", oasis: "Unknown" }
};
let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-status-badge";
  el.textContent = `
.ds-badge{
  display:inline-flex; align-items:center; gap:var(--space-1);
  font-family:var(--font-mono); font-size:var(--text-caption); font-weight:var(--weight-medium);
  text-transform:uppercase; letter-spacing:var(--tracking-label);
  padding:2px var(--space-1); border-radius:var(--radius-sm); line-height:1.4;
  border:var(--border-width) solid color-mix(in srgb, var(--_c) 45%, transparent);
  color:var(--_c); background:color-mix(in srgb, var(--_c) 12%, transparent);
}
.ds-badge--plain{ background:transparent; border-color:transparent; padding-left:0; padding-right:0; }
/* fill: requested (solid), forced on light surfaces, forced for critical. Last so it wins. */
.ds-badge--solid,
[data-mode="light"] .ds-badge,
.ds-badge[data-step="critical"]{
  color:var(--_on); background:var(--_c); border-color:var(--_c);
  padding-left:var(--space-1); padding-right:var(--space-1);
}
`;
  document.head.appendChild(el);
}
function StatusBadge({
  step = "unknown",
  label,
  variant = "soft",
  pulse = false,
  size = 14,
  className = "",
  ...rest
}) {
  ensureStyles();
  const s = STEPS[step] || STEPS.unknown;
  const text = label != null ? label : s.word;
  const cls = [
    "ds-badge",
    variant === "solid" ? "ds-badge--solid" : "",
    variant === "plain" ? "ds-badge--plain" : "",
    pulse ? "ds-pulse" : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ React.createElement("span", { className: cls, "data-step": step, style: { "--_c": s.color, "--_on": s.on }, role: "status", ...rest }, /* @__PURE__ */ React.createElement(Mark, { name: s.glyph, size, label: `${step} status` }), /* @__PURE__ */ React.createElement("span", null, text));
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }
// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tag — a small neutral label chip for metadata/categories (NOT status; for
 * status use StatusBadge). Chrome-only color so it never reads as data color.
 * Optional leading mark and a dismiss affordance.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-tag";
  el.textContent = `
.ds-tag{
  display:inline-flex; align-items:center; gap:var(--space-half);
  font-family:var(--font-mono); font-size:var(--text-caption); font-weight:var(--weight-regular);
  text-transform:uppercase; letter-spacing:var(--tracking-label); line-height:1.4;
  padding:2px var(--space-1); border-radius:var(--radius-sm);
  border:var(--border-width) solid var(--border); color:var(--muted); background:transparent;
}
.ds-tag--accent{ color:var(--accent); border-color:color-mix(in srgb, var(--accent) 50%, transparent); background:var(--accent-tint); }
.ds-tag__x{
  display:inline-flex; align-items:center; cursor:pointer; color:inherit; opacity:0.7;
  background:none; border:none; padding:0; margin-left:2px;
}
.ds-tag__x:hover{ opacity:1; }
`;
  document.head.appendChild(el);
}
function Tag({
  children,
  icon,
  accent = false,
  onRemove,
  className = "",
  ...rest
}) {
  ensureStyles();
  const cls = ["ds-tag", accent ? "ds-tag--accent" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: icon,
    size: 12
  }), /*#__PURE__*/React.createElement("span", null, children), onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ds-tag__x",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: "m-close",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DivergingMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* DivergingMeter — signed deviation from a nominal center (manual/06 ·
 * gauge/meter). Green center marker at 0; fill grows from center toward the
 * value; color is the DIVERGING SPECTRUM stop at the value's signed magnitude
 * (warm = over, cool = under). The signed number and the diverging mark
 * (m-warm/m-neutral/m-cool) are always shown — the value reads without color.
 * Use for temperature, error-vs-baseline, the STIX opinion scale.
 */

// Spectrum stops by signed index (tokens/color/spectrum.edn).
const STOP = {
  "5": "var(--spectrum-plumb)",
  "4": "var(--spectrum-red)",
  "3": "var(--spectrum-pink)",
  "2": "var(--spectrum-orange)",
  "1": "var(--spectrum-yellow)",
  "0": "var(--spectrum-green)",
  "-1": "var(--spectrum-seafoam)",
  "-2": "var(--spectrum-turquoise)",
  "-3": "var(--spectrum-teal)",
  "-4": "var(--spectrum-blue)",
  "-5": "var(--spectrum-indigo)",
  "-6": "var(--spectrum-purple)"
};
function stopColor(v) {
  const i = Math.max(-6, Math.min(5, Math.round(v)));
  return STOP[String(i)];
}
let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-div-meter";
  el.textContent = `
.ds-dmeter{ display:flex; flex-direction:column; gap:var(--space-half); font-family:var(--font-mono); min-width:0; }
.ds-dmeter__top{ display:flex; align-items:baseline; justify-content:space-between; gap:var(--space-2); }
.ds-dmeter__label{ font-size:var(--text-caption); text-transform:uppercase; letter-spacing:var(--tracking-label); color:var(--muted); }
.ds-dmeter__val{ font-size:var(--text-small); font-variant-numeric:tabular-nums; color:var(--_c,var(--text)); display:inline-flex; align-items:center; gap:var(--space-half); }
.ds-dmeter__track{ position:relative; height:10px; background:var(--bg); border:var(--border-width) solid var(--border); border-radius:var(--radius-sm); overflow:hidden; }
.ds-dmeter__center{ position:absolute; top:-2px; bottom:-2px; left:50%; width:2px; background:var(--spectrum-green); transform:translateX(-1px); }
.ds-dmeter__fill{ position:absolute; top:0; bottom:0; background:var(--_c); transition:width var(--dur-moderate) var(--ease-standard), left var(--dur-moderate) var(--ease-standard); }
`;
  document.head.appendChild(el);
}
function DivergingMeter({
  value,
  range = 5,
  label,
  unit = "",
  showValue = true,
  className = "",
  ...rest
}) {
  ensureStyles();
  const clamped = Math.max(-range, Math.min(range, value));
  const halfPct = Math.abs(clamped) / range * 50;
  const positive = clamped > 0;
  const zero = Math.round(clamped) === 0;
  const color = stopColor(clamped);
  const signGlyph = zero ? "m-neutral" : positive ? "m-warm" : "m-cool";
  const signStr = zero ? "±0" : `${positive ? "+" : "−"}${Math.abs(value)}`;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-dmeter ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-dmeter__top"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ds-dmeter__label"
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    className: "ds-dmeter__val",
    style: {
      "--_c": color
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: signGlyph,
    size: 14,
    label: zero ? "neutral" : positive ? "over" : "under"
  }), /*#__PURE__*/React.createElement("span", null, signStr, unit))), /*#__PURE__*/React.createElement("div", {
    className: "ds-dmeter__track",
    role: "meter",
    "aria-valuenow": value,
    "aria-valuemin": -range,
    "aria-valuemax": range,
    "aria-label": label
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-dmeter__center",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ds-dmeter__fill",
    style: {
      "--_c": color,
      width: `${halfPct}%`,
      left: positive ? "50%" : `${50 - halfPct}%`
    }
  })));
}
Object.assign(__ds_scope, { DivergingMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DivergingMeter.jsx", error: String((e && e.message) || e) }); }

// components/data/Heatmap.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Heatmap — the signature status-at-scale pattern (manual/07 §5). A dense grid
 * of cells, each a diverging-spectrum stop by its deviation from green (nominal).
 * Green = nominal, warm = over, cool = under; the far warm end reads critical.
 * MANDATORY non-color encoding: a legend is required, every cell is inspectable
 * for its value (title + accessible label), and critical-end cells carry the
 * m-critical glyph. The color is the gestalt; the value is the truth.
 */

const STOP = {
  "5": "var(--spectrum-plumb)",
  "4": "var(--spectrum-red)",
  "3": "var(--spectrum-pink)",
  "2": "var(--spectrum-orange)",
  "1": "var(--spectrum-yellow)",
  "0": "var(--spectrum-green)",
  "-1": "var(--spectrum-seafoam)",
  "-2": "var(--spectrum-turquoise)",
  "-3": "var(--spectrum-teal)",
  "-4": "var(--spectrum-blue)",
  "-5": "var(--spectrum-indigo)",
  "-6": "var(--spectrum-purple)"
};
function stopColor(v) {
  const i = Math.max(-6, Math.min(5, Math.round(v)));
  return STOP[String(i)];
}
let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-heatmap";
  el.textContent = `
.ds-heat{ display:flex; flex-direction:column; gap:var(--space-2); font-family:var(--font-mono); }
.ds-heat__grid{ display:grid; gap:3px; }
.ds-heat__cell{
  position:relative; aspect-ratio:1; border-radius:var(--radius-sm); border:none; padding:0; cursor:pointer;
  display:flex; align-items:center; justify-content:center; color:#000;
  transition:outline-color var(--dur-fast) var(--ease-standard);
  outline:2px solid transparent; outline-offset:1px;
}
.ds-heat__cell:hover{ outline-color:var(--text); }
.ds-heat__cell:focus-visible{ outline:2px solid var(--text); box-shadow:var(--glow-box-active); }
.ds-heat__legend{ display:flex; align-items:center; gap:var(--space-2); font-size:var(--text-caption); color:var(--muted); }
.ds-heat__bar{ height:10px; flex:1; min-width:120px; border-radius:999px; border:var(--border-width) solid var(--border);
  background:linear-gradient(90deg, var(--spectrum-purple), var(--spectrum-teal), var(--spectrum-green), var(--spectrum-yellow), var(--spectrum-red), var(--spectrum-plumb)); }
.ds-heat__legend-end{ text-transform:uppercase; letter-spacing:var(--tracking-label); white-space:nowrap; }
.ds-heat__crit{ display:inline-flex; align-items:center; gap:var(--space-half); color:var(--status-critical); }
`;
  document.head.appendChild(el);
}
function Heatmap({
  cells = [],
  columns,
  range = 5,
  criticalAt = 4,
  unit = "",
  onSelect,
  showLegend = true,
  className = "",
  ...rest
}) {
  ensureStyles();
  const cols = columns || Math.ceil(Math.sqrt(cells.length)) || 1;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-heat ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-heat__grid",
    style: {
      gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`
    }
  }, cells.map((c, idx) => {
    const isCrit = c.value >= criticalAt;
    const title = `${c.label || c.id || idx}: ${c.value > 0 ? "+" : c.value < 0 ? "−" : "±"}${Math.abs(c.value)}${unit}`;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: c.id || idx,
      className: "ds-heat__cell",
      style: {
        background: stopColor(c.value)
      },
      title: title,
      "aria-label": title,
      onClick: onSelect ? () => onSelect(c) : undefined
    }, isCrit && /*#__PURE__*/React.createElement(__ds_scope.Mark, {
      name: "m-critical",
      size: 12
    }));
  })), showLegend && /*#__PURE__*/React.createElement("div", {
    className: "ds-heat__legend",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-heat__legend-end"
  }, "cool \u2212", range), /*#__PURE__*/React.createElement("span", {
    className: "ds-heat__bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-heat__legend-end"
  }, "warm +", range), /*#__PURE__*/React.createElement("span", {
    className: "ds-heat__crit"
  }, /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: "m-critical",
    size: 12
  }), " crit")));
}
Object.assign(__ds_scope, { Heatmap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Heatmap.jsx", error: String((e && e.message) || e) }); }

// components/data/SequentialMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* SequentialMeter — magnitude 0→max with optional threshold zones (manual/06 ·
 * gauge/meter). Accent fill; on crossing warn/crit the fill AND value adopt the
 * alert-ramp color (warn→medium, crit→critical) and the threshold state is
 * echoed in words (the display synonym). NOT the spectrum — green-at-zero is
 * meaningless for "0% CPU". Use for CPU, disk, memory, throughput, quota.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-seq-meter";
  el.textContent = `
.ds-meter{ display:flex; flex-direction:column; gap:var(--space-half); font-family:var(--font-mono); min-width:0; }
.ds-meter__top{ display:flex; align-items:baseline; justify-content:space-between; gap:var(--space-2); }
.ds-meter__label{ font-size:var(--text-caption); text-transform:uppercase; letter-spacing:var(--tracking-label); color:var(--muted); }
.ds-meter__val{ font-size:var(--text-small); font-variant-numeric:tabular-nums; color:var(--_c,var(--text)); display:inline-flex; align-items:baseline; gap:var(--space-1); }
.ds-meter__word{ font-size:var(--text-micro); letter-spacing:var(--tracking-label); }
.ds-meter__track{ position:relative; height:8px; background:var(--bg); border:var(--border-width) solid var(--border); border-radius:999px; overflow:hidden; }
.ds-meter__fill{ position:absolute; top:0; left:0; bottom:0; background:var(--_c,var(--accent)); border-radius:999px; transition:width var(--dur-moderate) var(--ease-standard); }
.ds-meter__tick{ position:absolute; top:-2px; bottom:-2px; width:2px; }
.ds-meter__tick--warn{ background:var(--status-medium); }
.ds-meter__tick--crit{ background:var(--status-critical); }
`;
  document.head.appendChild(el);
}
function SequentialMeter({
  value,
  max = 100,
  warn,
  crit,
  label,
  unit = "%",
  showValue = true,
  className = "",
  ...rest
}) {
  ensureStyles();
  const pct = Math.max(0, Math.min(100, value / max * 100));
  let color = "var(--accent)";
  let word = null;
  if (crit != null && value >= crit) {
    color = "var(--status-critical)";
    word = "CRIT";
  } else if (warn != null && value >= warn) {
    color = "var(--status-medium)";
    word = "WARN";
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-meter ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-meter__top"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ds-meter__label"
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    className: "ds-meter__val",
    style: {
      "--_c": color
    }
  }, /*#__PURE__*/React.createElement("span", null, value, unit), word && /*#__PURE__*/React.createElement("span", {
    className: "ds-meter__word"
  }, word))), /*#__PURE__*/React.createElement("div", {
    className: "ds-meter__track",
    role: "meter",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    "aria-label": label
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-meter__fill",
    style: {
      width: `${pct}%`,
      "--_c": color
    }
  }), warn != null && /*#__PURE__*/React.createElement("div", {
    className: "ds-meter__tick ds-meter__tick--warn",
    style: {
      left: `${warn / max * 100}%`
    }
  }), crit != null && /*#__PURE__*/React.createElement("div", {
    className: "ds-meter__tick ds-meter__tick--crit",
    style: {
      left: `${crit / max * 100}%`
    }
  })));
}
Object.assign(__ds_scope, { SequentialMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SequentialMeter.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Sparkline — compact, axis-less trend (manual/06 · chart/sparkline). Tufte by
 * default: high data-ink, no gridlines, latest point marked + labeled. Two
 * modes mirror the gauge split:
 *   plain     — a single neutral/accent series, no semantic value.
 *   threshold — accent line; crossing warn/crit makes the endpoint + label adopt
 *               the alert-ramp color and word (the threshold is a dashed line).
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-sparkline";
  el.textContent = `
.ds-spark{ display:inline-flex; align-items:center; gap:var(--space-1); font-family:var(--font-mono); }
.ds-spark__svg{ display:block; overflow:visible; }
.ds-spark__end{ font-size:var(--text-caption); font-variant-numeric:tabular-nums; color:var(--_c,var(--text)); display:inline-flex; align-items:baseline; gap:var(--space-half); }
.ds-spark__word{ font-size:var(--text-micro); letter-spacing:var(--tracking-label); }
`;
  document.head.appendChild(el);
}
function Sparkline({
  data = [],
  width = 96,
  height = 24,
  mode = "plain",
  warn,
  crit,
  unit = "",
  showEnd = true,
  className = "",
  ...rest
}) {
  ensureStyles();
  const n = data.length;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pad = 2;
  const pts = data.map((v, i) => {
    const x = n <= 1 ? 0 : i / (n - 1) * (width - pad * 2) + pad;
    const y = height - pad - (v - min) / span * (height - pad * 2);
    return [x, y];
  });
  const path = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const last = data[n - 1];
  let color = mode === "plain" ? "var(--accent)" : "var(--accent)";
  let word = null;
  if (mode === "threshold") {
    if (crit != null && last >= crit) {
      color = "var(--status-critical)";
      word = "CRIT";
    } else if (warn != null && last >= warn) {
      color = "var(--status-medium)";
      word = "WARN";
    }
  }
  const end = pts[n - 1] || [0, 0];
  const threshLine = (t, c) => {
    if (t == null) return null;
    const y = height - pad - (t - min) / span * (height - pad * 2);
    return /*#__PURE__*/React.createElement("line", {
      x1: 0,
      y1: y,
      x2: width,
      y2: y,
      stroke: c,
      strokeWidth: "1",
      strokeDasharray: "2 2",
      opacity: "0.7"
    });
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ds-spark ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("svg", {
    className: "ds-spark__svg",
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    "aria-hidden": "true"
  }, mode === "threshold" && threshLine(warn, "var(--status-medium)"), mode === "threshold" && threshLine(crit, "var(--status-critical)"), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), n > 0 && /*#__PURE__*/React.createElement("circle", {
    cx: end[0],
    cy: end[1],
    r: "2.2",
    fill: color
  })), showEnd && /*#__PURE__*/React.createElement("span", {
    className: "ds-spark__end",
    style: {
      "--_c": color
    }
  }, /*#__PURE__*/React.createElement("span", null, last, unit), word && /*#__PURE__*/React.createElement("span", {
    className: "ds-spark__word"
  }, word)));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const { Mark } = __ds_scope;
const STEP = {
  critical: { color: "var(--status-critical)", on: "var(--on-status-critical)", glyph: "m-critical" },
  high: { color: "var(--status-high)", on: "var(--on-status-high)", glyph: "m-high" },
  medium: { color: "var(--status-medium)", on: "var(--on-status-medium)", glyph: "m-medium" },
  low: { color: "var(--status-low)", on: "var(--on-status-low)", glyph: "m-low" },
  unknown: { color: "var(--status-unknown)", on: "var(--on-status-unknown)", glyph: "m-unknown" },
  info: { color: "var(--accent)", on: "var(--on-accent)", glyph: "m-info" }
};
let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-alert";
  el.textContent = `
.ds-alert{
  display:flex; gap:var(--space-2); align-items:flex-start;
  font-family:var(--font-mono); background:var(--surface); color:var(--text);
  border:var(--border-width) solid var(--border); border-left:3px solid var(--_c);
  border-radius:var(--radius-md); padding:var(--space-2) var(--space-3);
}
.ds-alert__icon{ color:var(--_on); background:var(--_c); display:inline-flex; padding:3px; border-radius:var(--radius-sm); }
.ds-alert__body{ flex:1; min-width:0; display:flex; flex-direction:column; gap:2px; }
.ds-alert__title{ font-size:var(--text-small); font-weight:var(--weight-medium); letter-spacing:var(--tracking-tight); }
.ds-alert__msg{ font-size:var(--text-caption); color:var(--muted); line-height:var(--leading-snug); }
.ds-alert__actions{ display:flex; align-items:center; gap:var(--space-1); margin-top:var(--space-1); }
.ds-alert__x{ background:none; border:none; color:var(--muted); cursor:pointer; padding:2px; display:inline-flex; border-radius:var(--radius-sm); }
.ds-alert__x:hover{ color:var(--text); }
.ds-alert__x:focus-visible{ outline:2px solid var(--text); outline-offset:1px; }
`;
  document.head.appendChild(el);
}
function Alert({
  severity = "info",
  title,
  children,
  actions,
  onDismiss,
  pulse = false,
  className = "",
  ...rest
}) {
  ensureStyles();
  const s = STEP[severity] || STEP.info;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `ds-alert${pulse ? " ds-pulse" : ""} ${className}`.trim(),
      style: { "--_c": s.color, "--_on": s.on },
      "data-severity": severity,
      role: severity === "critical" || severity === "high" ? "alert" : "status",
      ...rest
    },
    /* @__PURE__ */ React.createElement("span", { className: "ds-alert__icon" }, /* @__PURE__ */ React.createElement(Mark, { name: s.glyph, size: 18, label: `${severity}` })),
    /* @__PURE__ */ React.createElement("div", { className: "ds-alert__body" }, title && /* @__PURE__ */ React.createElement("div", { className: "ds-alert__title" }, title), children && /* @__PURE__ */ React.createElement("div", { className: "ds-alert__msg" }, children), actions && /* @__PURE__ */ React.createElement("div", { className: "ds-alert__actions" }, actions)),
    onDismiss && /* @__PURE__ */ React.createElement("button", { type: "button", className: "ds-alert__x", "aria-label": "Dismiss", onClick: onDismiss }, /* @__PURE__ */ React.createElement(Mark, { name: "m-close", size: 16 }))
  );
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }
// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Checkbox — small control; checked = accent box with the m-low check glyph
 * (manual/06 · checkbox/radio/toggle). Focus ring per the state matrix. The
 * check glyph means the state reads without color.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-checkbox";
  el.textContent = `
.ds-check{ display:inline-flex; align-items:center; gap:var(--space-1); cursor:pointer; font-family:var(--font-mono); font-size:var(--text-small); color:var(--text); user-select:none; }
.ds-check__input{ position:absolute; opacity:0; width:0; height:0; }
.ds-check__box{
  width:18px; height:18px; flex:none; border:var(--border-width) solid var(--border);
  border-radius:var(--radius-sm); background:var(--bg); display:inline-flex; align-items:center; justify-content:center;
  color:var(--on-accent); transition:background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard);
}
.ds-check__mark{ opacity:0; transform:scale(0.6); transition:opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard); }
.ds-check__input:checked + .ds-check__box{ background:var(--accent); border-color:var(--accent); }
.ds-check__input:checked + .ds-check__box .ds-check__mark{ opacity:1; transform:scale(1); }
.ds-check__input:focus-visible + .ds-check__box{ outline:2px solid var(--text); outline-offset:var(--space-half); box-shadow:var(--glow-box-active); }
.ds-check__input:disabled ~ *{ opacity:0.5; }
.ds-check:has(.ds-check__input:disabled){ cursor:not-allowed; }
`;
  document.head.appendChild(el);
}
function Checkbox({
  label,
  className = "",
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: `ds-check ${className}`.trim()
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: "ds-check__input"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ds-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: "m-low",
    size: 14,
    className: "ds-check__mark"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Input — text field (manual/06 · input). Parts: label (caption), field (mono,
 * border), helper/error text. States: default, focus (accent border + outline +
 * active glow), error (critical border + m-critical message), disabled,
 * read-only. Error is color + glyph + text, never color alone.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-input";
  el.textContent = `
.ds-field{ display:flex; flex-direction:column; gap:var(--space-half); min-width:0; }
.ds-field__label{
  font-family:var(--font-mono); font-size:var(--text-caption); font-weight:var(--weight-medium);
  text-transform:uppercase; letter-spacing:var(--tracking-label); color:var(--muted);
}
.ds-field__wrap{ position:relative; display:flex; align-items:center; }
.ds-field__icon{ position:absolute; left:var(--space-1); color:var(--muted); display:inline-flex; pointer-events:none; }
.ds-input{
  width:100%; font-family:var(--font-mono); font-size:var(--text-small); color:var(--text);
  background:var(--bg); border:var(--border-width) solid var(--border); border-radius:var(--radius-md);
  padding:var(--space-1) var(--space-2); line-height:1.4; min-height:36px;
  transition:border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);
}
.ds-input::placeholder{ color:var(--muted); opacity:0.7; }
.ds-input--has-icon{ padding-left:calc(var(--space-2) + 18px); }
.ds-input:focus{ outline:none; border-color:var(--accent); box-shadow:var(--glow-box-ambient); }
.ds-input:focus-visible{ outline:2px solid var(--text); outline-offset:var(--space-half); box-shadow:var(--glow-box-active); }
.ds-field--error .ds-input{ border-color:var(--status-critical); }
.ds-input:disabled{ color:var(--muted); opacity:0.5; cursor:not-allowed; }
.ds-input[readonly]{ border-color:transparent; background:var(--surface); }
.ds-field__msg{
  display:flex; align-items:center; gap:var(--space-half);
  font-family:var(--font-mono); font-size:var(--text-caption); color:var(--muted);
}
.ds-field--error .ds-field__msg{ color:var(--status-critical); }
`;
  document.head.appendChild(el);
}
function Input({
  label,
  icon,
  error,
  helper,
  id,
  className = "",
  ...rest
}) {
  ensureStyles();
  const fid = id || (label ? `ds-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const msg = error || helper;
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-field${error ? " ds-field--error" : ""} ${className}`.trim()
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ds-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "ds-field__wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "ds-field__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: `ds-input${icon ? " ds-input--has-icon" : ""}`,
    "aria-invalid": error ? "true" : undefined
  }, rest))), msg && /*#__PURE__*/React.createElement("div", {
    className: "ds-field__msg"
  }, error && /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: "m-critical",
    size: 12,
    label: "Error"
  }), /*#__PURE__*/React.createElement("span", null, msg)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Select — input-like trigger with a trailing m-chevron (manual/06 · select).
 * Wraps a native <select> for real keyboard/selection behavior, styled to match
 * the Input field. Same state set as Input.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-select";
  el.textContent = `
.ds-field{ display:flex; flex-direction:column; gap:var(--space-half); min-width:0; }
.ds-field__label{ font-family:var(--font-mono); font-size:var(--text-caption); font-weight:var(--weight-medium); text-transform:uppercase; letter-spacing:var(--tracking-label); color:var(--muted); }
.ds-field__msg{ display:flex; align-items:center; gap:var(--space-half); font-family:var(--font-mono); font-size:var(--text-caption); color:var(--muted); }
.ds-field--error .ds-field__msg{ color:var(--status-critical); }
.ds-select__wrap{ position:relative; display:flex; align-items:center; }
.ds-select{
  appearance:none; -webkit-appearance:none; width:100%;
  font-family:var(--font-mono); font-size:var(--text-small); color:var(--text);
  background:var(--bg); border:var(--border-width) solid var(--border); border-radius:var(--radius-md);
  padding:var(--space-1) calc(var(--space-2) + 18px) var(--space-1) var(--space-2);
  line-height:1.4; min-height:36px; cursor:pointer;
  transition:border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);
}
.ds-select:focus{ outline:none; border-color:var(--accent); box-shadow:var(--glow-box-ambient); }
.ds-select:focus-visible{ outline:2px solid var(--text); outline-offset:var(--space-half); box-shadow:var(--glow-box-active); }
.ds-select:disabled{ color:var(--muted); opacity:0.5; cursor:not-allowed; }
.ds-select__chevron{ position:absolute; right:var(--space-1); color:var(--muted); pointer-events:none; display:inline-flex; transform:rotate(90deg); }
.ds-field--error .ds-select{ border-color:var(--status-critical); }
.ds-select option{ background:var(--surface); color:var(--text); }
`;
  document.head.appendChild(el);
}
function Select({
  label,
  options = [],
  error,
  helper,
  id,
  className = "",
  children,
  ...rest
}) {
  ensureStyles();
  const fid = id || (label ? `ds-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const msg = error || helper;
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-field${error ? " ds-field--error" : ""} ${className}`.trim()
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ds-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "ds-select__wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "ds-select",
    "aria-invalid": error ? "true" : undefined
  }, rest), children || options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    className: "ds-select__chevron"
  }, /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: "m-chevron",
    size: 16
  }))), msg && /*#__PURE__*/React.createElement("div", {
    className: "ds-field__msg"
  }, error && /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: "m-critical",
    size: 12,
    label: "Error"
  }), /*#__PURE__*/React.createElement("span", null, msg)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Toggle — switch control; checked = accent track with a knob shift (manual/06 ·
 * checkbox/radio/toggle). The knob position (not just color) carries the state.
 * Optional on/off text labels reinforce it further.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-toggle";
  el.textContent = `
.ds-toggle{ display:inline-flex; align-items:center; gap:var(--space-1); cursor:pointer; font-family:var(--font-mono); font-size:var(--text-small); color:var(--text); user-select:none; }
.ds-toggle__input{ position:absolute; opacity:0; width:0; height:0; }
.ds-toggle__track{
  width:40px; height:22px; flex:none; border-radius:999px; position:relative;
  border:var(--border-width) solid var(--border); background:var(--bg);
  transition:background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard);
}
.ds-toggle__knob{
  position:absolute; top:2px; left:2px; width:16px; height:16px; border-radius:999px;
  background:var(--muted); transition:transform var(--dur-moderate) var(--ease-standard), background var(--dur-fast) var(--ease-standard);
}
.ds-toggle__input:checked + .ds-toggle__track{ background:var(--accent); border-color:var(--accent); box-shadow:var(--glow-box-ambient); }
.ds-toggle__input:checked + .ds-toggle__track .ds-toggle__knob{ transform:translateX(18px); background:var(--on-accent); }
.ds-toggle__input:focus-visible + .ds-toggle__track{ outline:2px solid var(--text); outline-offset:var(--space-half); box-shadow:var(--glow-box-active); }
.ds-toggle__input:disabled ~ *{ opacity:0.5; }
.ds-toggle__state{ font-size:var(--text-caption); text-transform:uppercase; letter-spacing:var(--tracking-label); color:var(--muted); min-width:3ch; }
@media (prefers-reduced-motion: reduce){ .ds-toggle__knob{ transition-duration:0s; } }
`;
  document.head.appendChild(el);
}
function Toggle({
  label,
  showState = false,
  checked,
  defaultChecked,
  className = "",
  ...rest
}) {
  ensureStyles();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked != null;
  const on = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    className: `ds-toggle ${className}`.trim()
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    className: "ds-toggle__input",
    checked: on,
    onChange: e => {
      if (!isControlled) setInternal(e.target.checked);
      rest.onChange && rest.onChange(e);
    }
  }, (() => {
    const {
      onChange,
      ...r
    } = rest;
    return r;
  })())), /*#__PURE__*/React.createElement("span", {
    className: "ds-toggle__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-toggle__knob"
  })), showState && /*#__PURE__*/React.createElement("span", {
    className: "ds-toggle__state"
  }, on ? "ON" : "OFF"), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tabs — a row of labels over a content area (manual/06 · tabs). Selected =
 * accent underline + text; others muted. One selected at a time. Keyboard
 * accessible (roving via native buttons + arrow keys). Controlled or uncontrolled.
 */

let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === "undefined") return;
  _injected = true;
  const el = document.createElement("style");
  el.id = "ds-tabs";
  el.textContent = `
.ds-tabs__list{ display:flex; gap:var(--space-1); border-bottom:var(--border-width) solid var(--border); }
.ds-tab{
  position:relative; background:none; border:none; cursor:pointer;
  font-family:var(--font-mono); font-size:var(--text-small); font-weight:var(--weight-medium);
  text-transform:uppercase; letter-spacing:var(--tracking-label); color:var(--muted);
  padding:var(--space-1) var(--space-2); display:inline-flex; align-items:center; gap:var(--space-1);
  border-bottom:2px solid transparent; margin-bottom:-1px;
  transition:color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard);
}
.ds-tab:hover{ color:var(--text); }
.ds-tab[aria-selected="true"]{ color:var(--text); border-bottom-color:var(--accent); }
.ds-tab:focus-visible{ outline:2px solid var(--text); outline-offset:-2px; }
.ds-tab:disabled{ opacity:0.5; cursor:not-allowed; }
.ds-tab__count{ font-size:var(--text-micro); color:var(--muted); }
`;
  document.head.appendChild(el);
}
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  className = "",
  ...rest
}) {
  ensureStyles();
  const first = defaultValue ?? (tabs[0] && tabs[0].id);
  const [internal, setInternal] = React.useState(first);
  const active = value != null ? value : internal;
  const select = id => {
    if (value == null) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-tabs ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ds-tabs__list",
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    type: "button",
    role: "tab",
    "aria-selected": active === t.id,
    disabled: t.disabled,
    className: "ds-tab",
    onClick: () => select(t.id)
  }, t.icon && /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    name: t.icon,
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, t.label), t.count != null && /*#__PURE__*/React.createElement("span", {
    className: "ds-tab__count"
  }, t.count)))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-console/AlertsView.jsx
try { (() => {
/* AlertsView.jsx — the alerting pattern: active alerts as severity banners over
 * a dense alert table. Wording follows the voice rules (what happened · why ·
 * what to do). Acknowledge clears a banner.
 */
const {
  Card,
  Alert,
  Button,
  StatusBadge,
  Mark,
  Tag
} = window.DesignSystem_019de4;
function AlertsView({
  data,
  onSelectNode
}) {
  const [acked, setAcked] = React.useState([]);
  const active = data.alerts.filter(a => !acked.includes(a.id));
  const ack = id => setAcked(x => [...x, id]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-h2)",
      margin: 0
    }
  }, "Active alerts"), /*#__PURE__*/React.createElement(Tag, {
    accent: true
  }, active.length), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "m-bell"
  }, "Mute 30m"))), active.length === 0 ? /*#__PURE__*/React.createElement(Card, {
    density: "comfortable"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-1)",
      padding: "var(--space-4)",
      color: "var(--muted)",
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    name: "m-low",
    size: 28,
    style: {
      color: "var(--status-low)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)"
    }
  }, "No active alerts. Grid nominal."))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, active.map(a => /*#__PURE__*/React.createElement(Alert, {
    key: a.id,
    severity: a.severity,
    pulse: a.severity === "critical",
    title: a.title,
    onDismiss: () => ack(a.id),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      icon: "m-search",
      onClick: () => onSelectNode(a.node)
    }, "Inspect ", a.node), /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      size: "sm",
      onClick: () => ack(a.id)
    }, "Acknowledge"))
  }, a.body))), /*#__PURE__*/React.createElement(Card, {
    title: "Alert log",
    density: "compact",
    flush: true
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-small)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: "left",
      color: "var(--muted)",
      fontSize: "var(--text-caption)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: c()
  }, "ID"), /*#__PURE__*/React.createElement("th", {
    style: c()
  }, "Severity"), /*#__PURE__*/React.createElement("th", {
    style: c()
  }, "Node"), /*#__PURE__*/React.createElement("th", {
    style: c()
  }, "Message"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...c(),
      textAlign: "right"
    }
  }, "Age"))), /*#__PURE__*/React.createElement("tbody", null, data.alerts.map(a => /*#__PURE__*/React.createElement("tr", {
    key: a.id,
    style: {
      borderTop: "1px solid color-mix(in srgb, var(--border) 40%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...d(),
      color: "var(--muted)"
    }
  }, a.id), /*#__PURE__*/React.createElement("td", {
    style: d()
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    step: a.severity,
    variant: "plain",
    size: 13
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...d(),
      color: "var(--accent)",
      cursor: "pointer"
    },
    onClick: () => onSelectNode(a.node)
  }, a.node), /*#__PURE__*/React.createElement("td", {
    style: {
      ...d(),
      color: "var(--text)",
      maxWidth: 360,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, a.title), /*#__PURE__*/React.createElement("td", {
    style: {
      ...d(),
      textAlign: "right",
      color: "var(--muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, a.age)))))));
}
function c() {
  return {
    padding: "var(--space-1) var(--space-2)",
    fontWeight: 500
  };
}
function d() {
  return {
    padding: "var(--space-1) var(--space-2)"
  };
}
Object.assign(window, {
  AlertsView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-console/AlertsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-console/App.jsx
try { (() => {
/* App.jsx — Operations Console orchestrator. Fake auth + nav + theme state ties
 * the screens together. Mounts into #root.
 */
const {
  Card,
  Button,
  Mark,
  StatusBadge
} = window.DesignSystem_019de4;
function Placeholder({
  title,
  line
}) {
  return /*#__PURE__*/React.createElement(Card, {
    density: "comfortable"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-1)",
      padding: "var(--space-5)",
      color: "var(--muted)",
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    name: "m-unknown",
    size: 28
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-h3)",
      color: "var(--text)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)"
    }
  }, line)));
}
function Toast({
  toast,
  onClose
}) {
  if (!toast) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: "var(--space-3)",
      bottom: "var(--space-3)",
      zIndex: 60,
      width: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderLeft: "3px solid var(--status-low)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    name: "m-low",
    size: 16,
    style: {
      color: "var(--status-low)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-small)",
      color: "var(--text)"
    }
  }, toast), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      marginLeft: "auto",
      background: "none",
      border: "none",
      color: "var(--muted)",
      cursor: "pointer",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    name: "m-close",
    size: 14
  }))));
}
function App() {
  const data = window.OPS_DATA;
  const [authed, setAuthed] = React.useState(true);
  const [theme, setTheme] = React.useState("tron");
  const [nav, setNav] = React.useState("grid");
  const [sel, setSel] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);
  if (!authed) return /*#__PURE__*/React.createElement(window.LoginScreen, {
    onAuth: () => setAuthed(true)
  });
  const selectNode = id => {
    setSel(id);
    setNav("grid");
  };
  const node = sel && data.nodes.find(n => n.id === sel);
  let screen;
  if (nav === "grid") {
    screen = node ? /*#__PURE__*/React.createElement(window.NodeDetail, {
      node: node,
      onBack: () => setSel(null),
      onDrain: n => {
        setSel(null);
        setToast("Drained " + n.id + ".");
      }
    }) : /*#__PURE__*/React.createElement(window.GridDashboard, {
      data: data,
      onSelectNode: selectNode
    });
  } else if (nav === "alerts") {
    screen = /*#__PURE__*/React.createElement(window.AlertsView, {
      data: data,
      onSelectNode: selectNode
    });
  } else if (nav === "nodes") {
    screen = /*#__PURE__*/React.createElement(window.GridDashboard, {
      data: data,
      onSelectNode: selectNode
    });
  } else if (nav === "policy") {
    screen = /*#__PURE__*/React.createElement(Placeholder, {
      title: "Policy",
      line: "No policy changes in window. Pattern omitted from this kit."
    });
  } else {
    screen = /*#__PURE__*/React.createElement(Placeholder, {
      title: "Settings",
      line: "Sectioned key-value editor. Pattern omitted from this kit."
    });
  }
  return /*#__PURE__*/React.createElement(window.Shell, {
    active: nav,
    onNav: n => {
      setNav(n);
      if (n !== "grid") setSel(null);
    },
    summary: data.summary,
    theme: theme,
    onTheme: setTheme,
    onLogout: () => {
      setAuthed(false);
      setSel(null);
      setNav("grid");
    }
  }, screen, /*#__PURE__*/React.createElement(Toast, {
    toast: toast,
    onClose: () => setToast(null)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-console/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-console/GridDashboard.jsx
try { (() => {
/* GridDashboard.jsx — the signature dashboard: status-at-scale heatmap + stat
 * tiles + a dense node table. Compact density. Composes DS data components.
 */
const {
  Card,
  Heatmap,
  SequentialMeter,
  Sparkline,
  StatusBadge,
  Mark,
  Button,
  Tag
} = window.DesignSystem_019de4;
function StatTile({
  label,
  value,
  accent,
  spark,
  sparkMode,
  warn,
  crit
}) {
  return /*#__PURE__*/React.createElement(Card, {
    density: "compact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      color: "var(--muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-h1)",
      fontWeight: 700,
      color: accent || "var(--text)",
      lineHeight: 1,
      fontVariantNumeric: "tabular-nums"
    }
  }, value), spark && /*#__PURE__*/React.createElement(Sparkline, {
    data: spark,
    mode: sparkMode || "plain",
    warn: warn,
    crit: crit,
    showEnd: false,
    width: 140,
    height: 20
  })));
}
function GridDashboard({
  data,
  onSelectNode
}) {
  const {
    nodes,
    summary
  } = data;
  const cells = nodes.map(n => ({
    id: n.id,
    value: n.dev,
    label: n.id + " · " + n.uplink
  }));
  const hot = nodes.filter(n => n.step === "critical" || n.step === "high");
  const rows = nodes.slice(0, 12);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Nodes online",
    value: summary.total - summary.unk,
    spark: [44, 45, 46, 45, 47, 46, 47, 47]
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Down",
    value: summary.down,
    accent: "var(--status-critical)",
    spark: [0, 0, 0, 0, 0, 1, 1, 1],
    sparkMode: "threshold",
    crit: 1
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Alerts",
    value: summary.alert,
    accent: "var(--status-high)",
    spark: [1, 1, 2, 1, 2, 2, 2, 2]
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "p99 grid",
    value: "61ms",
    spark: [40, 42, 48, 52, 49, 55, 58, 61],
    sparkMode: "threshold",
    warn: 50,
    crit: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "var(--space-3)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Grid health \xB7 deviation from nominal",
    density: "compact",
    actions: /*#__PURE__*/React.createElement(Tag, {
      accent: true
    }, "48 nodes")
  }, /*#__PURE__*/React.createElement(Heatmap, {
    columns: 12,
    cells: cells,
    unit: "\u0394",
    onSelect: c => onSelectNode(c.id.split(" ")[0])
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Hot nodes",
    density: "compact",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      size: "sm",
      iconEnd: "m-chevron"
    }, "All")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, hot.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => onSelectNode(n.id),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "var(--space-1)",
      borderRadius: "var(--radius-md)",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    step: n.step,
    variant: "plain"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-small)",
      color: "var(--text)"
    }
  }, n.id), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-caption)",
      color: "var(--muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, n.p99, "ms"), /*#__PURE__*/React.createElement(Sparkline, {
    data: n.p99series,
    mode: "threshold",
    warn: 120,
    crit: 200,
    showEnd: false,
    width: 64,
    height: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border)",
      paddingTop: "var(--space-2)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(SequentialMeter, {
    label: "grid cpu",
    value: 64,
    warn: 75,
    crit: 90
  }), /*#__PURE__*/React.createElement(SequentialMeter, {
    label: "grid mem",
    value: 71,
    warn: 75,
    crit: 90
  }), /*#__PURE__*/React.createElement(SequentialMeter, {
    label: "grid disk",
    value: 48,
    warn: 80,
    crit: 95
  }))))), /*#__PURE__*/React.createElement(Card, {
    title: "Nodes",
    density: "compact",
    flush: true,
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-1)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      size: "sm",
      icon: "m-filter"
    }, "Filter"), /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      size: "sm",
      icon: "m-download"
    }, "Export"))
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-small)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: "left",
      color: "var(--muted)",
      fontSize: "var(--text-caption)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: th()
  }, "Node"), /*#__PURE__*/React.createElement("th", {
    style: th()
  }, "Sector"), /*#__PURE__*/React.createElement("th", {
    style: th()
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th(),
      textAlign: "right"
    }
  }, "CPU"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th(),
      textAlign: "right"
    }
  }, "p99"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th(),
      textAlign: "right"
    }
  }, "req/s"), /*#__PURE__*/React.createElement("th", {
    style: th()
  }, "Trend"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(n => /*#__PURE__*/React.createElement("tr", {
    key: n.id,
    onClick: () => onSelectNode(n.id),
    style: {
      cursor: "pointer",
      borderTop: "1px solid color-mix(in srgb, var(--border) 40%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td(),
      color: "var(--accent)"
    }
  }, n.id), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td(),
      color: "var(--muted)"
    }
  }, n.sector), /*#__PURE__*/React.createElement("td", {
    style: td()
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    step: n.step,
    variant: "plain",
    size: 13
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td(),
      textAlign: "right",
      fontVariantNumeric: "tabular-nums"
    }
  }, n.cpu, "%"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td(),
      textAlign: "right",
      fontVariantNumeric: "tabular-nums"
    }
  }, n.p99, "ms"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td(),
      textAlign: "right",
      fontVariantNumeric: "tabular-nums",
      color: "var(--muted)"
    }
  }, n.reqs.toLocaleString()), /*#__PURE__*/React.createElement("td", {
    style: td()
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: n.cpuseries,
    mode: "plain",
    showEnd: false,
    width: 72,
    height: 16
  }))))))));
}
function th() {
  return {
    padding: "var(--space-1) var(--space-2)",
    fontWeight: 500
  };
}
function td() {
  return {
    padding: "var(--space-1) var(--space-2)",
    color: "var(--text)"
  };
}
Object.assign(window, {
  GridDashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-console/GridDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-console/LoginScreen.jsx
try { (() => {
/* LoginScreen.jsx — the auth gate. Terse, operational, centered. No marketing
 * copy. Composes Input + Button; any non-empty key authenticates (mock).
 */
const {
  Input,
  Button,
  Mark,
  StatusBadge
} = window.DesignSystem_019de4;
function LoginScreen({
  onAuth
}) {
  const [op, setOp] = React.useState("ops.kestrel");
  const [key, setKey] = React.useState("");
  const submit = e => {
    e.preventDefault();
    if (key.trim()) onAuth();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      width: 380,
      maxWidth: "90vw",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-4)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)"
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    name: "m-settings",
    size: 22,
    style: {
      color: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "var(--text-h2)",
      color: "var(--accent)",
      textShadow: "var(--glow-text-ambient)"
    }
  }, "GRID\xB7OPS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-caption)",
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    name: "m-lock",
    size: 13
  }), " Operator authentication required."), /*#__PURE__*/React.createElement(Input, {
    label: "Operator",
    value: op,
    onChange: e => setOp(e.target.value),
    icon: "m-user"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Access key",
    type: "password",
    value: key,
    onChange: e => setKey(e.target.value),
    icon: "m-lock",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    helper: "Any non-empty key (mock)."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "m-upload",
    type: "submit"
  }, "Engage"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    step: "low",
    label: "GRID NOMINAL",
    variant: "plain",
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      color: "var(--muted)"
    }
  }, "\xB7 02:14Z"))));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-console/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-console/NodeDetail.jsx
try { (() => {
/* NodeDetail.jsx — detail view: breadcrumb + record header + property grid +
 * data panels, plus the destructive-confirm flow (drain node). Composes DS
 * primitives; the modal follows the destructive-confirm pattern (critical verb
 * button, names the target, states irreversibility, ghost cancel).
 */
const {
  Card,
  SequentialMeter,
  DivergingMeter,
  Sparkline,
  StatusBadge,
  Mark,
  Button,
  Tag,
  Input
} = window.DesignSystem_019de4;
function Crumb({
  node
}) {
  const sep = {
    color: "var(--muted)",
    display: "inline-flex"
  };
  const link = {
    fontFamily: "var(--font-mono)",
    fontSize: "var(--text-caption)",
    color: "var(--muted)",
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-label)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)",
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Grid"), /*#__PURE__*/React.createElement("span", {
    style: sep
  }, /*#__PURE__*/React.createElement(Mark, {
    name: "m-chevron",
    size: 12
  })), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Sector ", node.sector), /*#__PURE__*/React.createElement("span", {
    style: sep
  }, /*#__PURE__*/React.createElement(Mark, {
    name: "m-chevron",
    size: 12
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      color: "var(--text)"
    }
  }, node.id));
}
function Prop({
  k,
  v,
  mono
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-2)",
      padding: "6px 0",
      borderBottom: "1px solid color-mix(in srgb, var(--border) 35%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-caption)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      color: "var(--muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-small)",
      color: mono || "var(--text)",
      fontVariantNumeric: "tabular-nums"
    }
  }, v));
}
function DrainModal({
  node,
  onClose,
  onConfirm
}) {
  const [typed, setTyped] = React.useState("");
  const armed = typed.trim() === node.id;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: 440,
      maxWidth: "92vw",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
      padding: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)",
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    name: "m-critical",
    size: 18,
    style: {
      color: "var(--status-critical)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-h3)",
      margin: 0
    }
  }, "Drain ", node.id, "?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-small)",
      color: "var(--muted)",
      lineHeight: 1.5,
      margin: "0 0 var(--space-2)"
    }
  }, "Moves all sessions off ", node.id, " in sector ", node.sector, " and marks it offline. This can't be undone from here \u2014 re-enable requires an operator with sector access."), /*#__PURE__*/React.createElement(Input, {
    label: "Type " + node.id + " to confirm",
    value: typed,
    onChange: e => setTyped(e.target.value),
    placeholder: node.id
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-1)",
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: "m-delete",
    disabled: !armed,
    onClick: onConfirm
  }, "Drain node"))));
}
function NodeDetail({
  node,
  onBack,
  onDrain
}) {
  const [modal, setModal] = React.useState(false);
  const down = node.step === "critical";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Crumb, {
    node: node
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginBottom: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    size: "sm",
    icon: "m-chevron",
    onClick: onBack,
    style: {
      transform: "rotate(180deg)"
    },
    "aria-label": "Back"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-h1)",
      margin: 0,
      color: "var(--accent)",
      textShadow: "var(--glow-text-ambient)"
    }
  }, node.id), /*#__PURE__*/React.createElement(StatusBadge, {
    step: node.step,
    pulse: down
  }), /*#__PURE__*/React.createElement(Tag, {
    accent: true
  }, node.tlp), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-1)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "m-refresh"
  }, "Refresh"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    size: "sm",
    icon: "m-delete",
    onClick: () => setModal(true)
  }, "Drain"), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    size: "sm",
    iconEnd: "m-more",
    "aria-label": "More"
  }))), down && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-3)"
    }
  }, React.createElement(window.DesignSystem_019de4.Alert, {
    severity: "critical",
    pulse: true,
    title: "Uplink down — " + node.id + "."
  }, "Unreachable for 4m. Reroute traffic or restore the uplink.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "300px 1fr",
      gap: "var(--space-3)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Properties",
    density: "compact"
  }, /*#__PURE__*/React.createElement(Prop, {
    k: "Sector",
    v: node.sector
  }), /*#__PURE__*/React.createElement(Prop, {
    k: "Region",
    v: node.region
  }), /*#__PURE__*/React.createElement(Prop, {
    k: "Uplink",
    v: node.uplink.toUpperCase(),
    mono: down ? "var(--status-critical)" : "var(--text)"
  }), /*#__PURE__*/React.createElement(Prop, {
    k: "Uptime",
    v: node.uptime
  }), /*#__PURE__*/React.createElement(Prop, {
    k: "Requests",
    v: node.reqs.toLocaleString() + " req/s"
  }), /*#__PURE__*/React.createElement(Prop, {
    k: "Marking",
    v: node.tlp,
    mono: "var(--accent)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Resource",
    density: "compact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(SequentialMeter, {
    label: "cpu",
    value: node.cpu,
    warn: 75,
    crit: 90
  }), /*#__PURE__*/React.createElement(SequentialMeter, {
    label: "mem",
    value: node.mem,
    warn: 75,
    crit: 90
  }), /*#__PURE__*/React.createElement(SequentialMeter, {
    label: "disk",
    value: node.disk,
    warn: 80,
    crit: 95
  }), /*#__PURE__*/React.createElement(DivergingMeter, {
    label: "latency \u0394 vs baseline",
    value: Math.max(-6, Math.min(5, Math.round((node.p99 - 40) / 30))),
    range: 6,
    unit: "\u03C3"
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "p99 latency \xB7 16m",
    density: "compact",
    actions: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-caption)",
        color: "var(--muted)"
      }
    }, "threshold 120ms")
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: node.p99series,
    mode: "threshold",
    warn: 120,
    crit: 200,
    unit: "ms",
    width: 560,
    height: 64
  })))), modal && /*#__PURE__*/React.createElement(DrainModal, {
    node: node,
    onClose: () => setModal(false),
    onConfirm: () => {
      setModal(false);
      onDrain(node);
    }
  }));
}
Object.assign(window, {
  NodeDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-console/NodeDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-console/Shell.jsx
try { (() => {
/* Shell.jsx — the Operations Console chrome: top header bar + left nav rail.
 * Composes design-system primitives (Mark, StatusBadge, Button). Pure chrome;
 * the active screen is passed as children.
 */
const {
  Mark,
  StatusBadge,
  Button
} = window.DesignSystem_019de4;
const NAV = [{
  id: "grid",
  label: "Grid",
  icon: "m-menu"
}, {
  id: "alerts",
  label: "Alerts",
  icon: "m-bell"
}, {
  id: "nodes",
  label: "Nodes",
  icon: "m-user"
}, {
  id: "policy",
  label: "Policy",
  icon: "m-lock"
}, {
  id: "settings",
  label: "Settings",
  icon: "m-settings"
}];
function ThemeSwitch({
  theme,
  onTheme
}) {
  const opts = [{
    id: "tron",
    c: "#00E5FF"
  }, {
    id: "matrix",
    c: "#03A062"
  }, {
    id: "compaq",
    c: "#FF8A00"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    title: "Theme: " + o.id,
    onClick: () => onTheme(o.id),
    style: {
      width: 18,
      height: 18,
      borderRadius: 999,
      cursor: "pointer",
      background: o.c,
      border: theme === o.id ? "2px solid var(--text)" : "2px solid transparent",
      boxShadow: theme === o.id ? "0 0 8px " + o.c : "none",
      padding: 0
    }
  })));
}
function Shell({
  active,
  onNav,
  summary,
  theme,
  onTheme,
  onLogout,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      gridTemplateRows: "52px 1fr",
      height: "100%",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      gridColumn: "1 / -1",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "0 var(--space-3)",
      borderBottom: "1px solid var(--border)",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)",
      minWidth: 168
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    name: "m-settings",
    size: 18,
    style: {
      color: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "var(--text-h3)",
      color: "var(--accent)",
      textShadow: "var(--glow-text-ambient)",
      letterSpacing: "0.02em"
    }
  }, "GRID\xB7OPS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginLeft: "var(--space-2)"
    }
  }, summary.down > 0 && /*#__PURE__*/React.createElement(StatusBadge, {
    step: "critical",
    label: summary.down + " DOWN",
    pulse: true
  }), summary.alert > 0 && /*#__PURE__*/React.createElement(StatusBadge, {
    step: "high",
    label: summary.alert + " ALERT"
  }), summary.warn > 0 && /*#__PURE__*/React.createElement(StatusBadge, {
    step: "medium",
    label: summary.warn + " WARN"
  }), /*#__PURE__*/React.createElement(StatusBadge, {
    step: "low",
    label: summary.ok + " OK"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      color: "var(--muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "02:14:31Z \xB7 LIVE"), /*#__PURE__*/React.createElement(ThemeSwitch, {
    theme: theme,
    onTheme: onTheme
  }), /*#__PURE__*/React.createElement(Mark, {
    name: "m-bell",
    size: 18,
    style: {
      color: "var(--muted)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    title: "Log out",
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    name: "m-user",
    size: 18,
    style: {
      color: "var(--muted)"
    }
  })))), /*#__PURE__*/React.createElement("nav", {
    style: {
      borderRight: "1px solid var(--border)",
      background: "var(--surface)",
      padding: "var(--space-2) var(--space-1)",
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, NAV.map(n => {
    const on = active === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNav(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)",
        padding: "var(--space-1) var(--space-2)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-small)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-label)",
        cursor: "pointer",
        borderRadius: "var(--radius-md)",
        border: "none",
        textAlign: "left",
        background: on ? "var(--accent-tint)" : "transparent",
        color: on ? "var(--text)" : "var(--muted)",
        boxShadow: on ? "inset 3px 0 0 var(--accent)" : "none"
      }
    }, /*#__PURE__*/React.createElement(Mark, {
      name: n.icon,
      size: 16,
      style: {
        color: on ? "var(--accent)" : "var(--muted)"
      }
    }), n.label);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "var(--space-2)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      color: "var(--muted)",
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("div", null, summary.total, " NODES"), /*#__PURE__*/React.createElement("div", null, "4 SECTORS"))), /*#__PURE__*/React.createElement("main", {
    style: {
      overflow: "auto",
      padding: "var(--space-3)"
    }
  }, children));
}
Object.assign(window, {
  Shell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-console/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/operations-console/data.js
try { (() => {
/* data.js — synthetic telemetry for the Operations Console UI kit. Not real:
 * a fixed, deterministic snapshot so the kit reads like a live grid console.
 * Exposed as window.OPS_DATA.
 */
(function () {
  const SECTORS = ["01", "04", "07", "12"];
  const rand = seed => {
    // deterministic pseudo-random from a seed
    let x = Math.sin(seed * 99.13) * 10000;
    return x - Math.floor(x);
  };
  const series = (seed, n, base, amp) => Array.from({
    length: n
  }, (_, i) => Math.round(base + Math.sin(i * 0.6 + seed) * amp + (rand(seed + i) - 0.5) * amp));
  const nodes = Array.from({
    length: 48
  }, (_, i) => {
    const sector = SECTORS[i % SECTORS.length];
    const r = rand(i + 1);
    // a few hot nodes
    let dev, step, cpu, mem, disk, p99, uplink;
    if (i === 13) {
      dev = 5;
      step = "critical";
      cpu = 97;
      mem = 94;
      disk = 88;
      p99 = 312;
      uplink = "down";
    } else if (i === 4 || i === 27) {
      dev = 4;
      step = "high";
      cpu = 88;
      mem = 81;
      disk = 72;
      p99 = 154;
      uplink = "degraded";
    } else if (r > 0.82) {
      dev = 2;
      step = "medium";
      cpu = 74;
      mem = 69;
      disk = 63;
      p99 = 61;
      uplink = "up";
    } else if (r < 0.12) {
      dev = -3;
      step = "unknown";
      cpu = 0;
      mem = 0;
      disk = 0;
      p99 = 0;
      uplink = "unknown";
    } else {
      dev = Math.round((r - 0.5) * 4);
      step = "low";
      cpu = 30 + Math.round(r * 30);
      mem = 28 + Math.round(r * 34);
      disk = 40 + Math.round(r * 25);
      p99 = 18 + Math.round(r * 18);
      uplink = "up";
    }
    return {
      id: "node-" + String(i).padStart(2, "0"),
      sector,
      region: i % 2 ? "us-east" : "eu-west",
      step,
      dev,
      cpu,
      mem,
      disk,
      p99,
      uplink,
      reqs: step === "unknown" ? 0 : 200 + Math.round(r * 1400),
      p99series: series(i, 16, p99 * 0.7, Math.max(4, p99 * 0.25)),
      cpuseries: series(i + 5, 16, cpu, 8),
      tlp: i === 13 ? "tlp:red" : i === 4 ? "tlp:amber" : "tlp:green",
      uptime: step === "unknown" ? "—" : 90 + Math.round(r * 600) + "h"
    };
  });
  const byStep = s => nodes.filter(n => n.step === s).length;
  const alerts = [{
    id: "A-1042",
    severity: "critical",
    node: "node-13",
    sector: "12",
    title: "Uplink down — sector 12.",
    body: "4 nodes unreachable for 4m. Reroute traffic or restore the uplink.",
    ts: "02:14:08Z",
    age: "4m"
  }, {
    id: "A-1041",
    severity: "high",
    node: "node-04",
    sector: "01",
    title: "p99 154ms on node-04, above 120ms threshold.",
    body: "Sustained for 9m. Shed load or raise the threshold.",
    ts: "02:09:51Z",
    age: "9m"
  }, {
    id: "A-1039",
    severity: "high",
    node: "node-27",
    sector: "07",
    title: "Uplink degraded on node-27.",
    body: "Packet loss 3.2%. Failover armed; no action yet.",
    ts: "02:08:22Z",
    age: "11m"
  }, {
    id: "A-1037",
    severity: "medium",
    node: "node-19",
    sector: "04",
    title: "Memory 69% on node-19, above 65% threshold.",
    body: "Trending up 2%/h. Watch or scale.",
    ts: "01:58:40Z",
    age: "20m"
  }, {
    id: "A-1033",
    severity: "low",
    node: "node-12",
    sector: "12",
    title: "Rebooted node-12. Telemetry nominal.",
    body: "Recovered after 38s. No further action.",
    ts: "01:41:12Z",
    age: "38m"
  }];
  window.OPS_DATA = {
    nodes,
    alerts,
    summary: {
      total: nodes.length,
      down: byStep("critical"),
      alert: byStep("high"),
      warn: byStep("medium"),
      ok: byStep("low"),
      unk: byStep("unknown")
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/operations-console/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Mark = __ds_scope.Mark;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DivergingMeter = __ds_scope.DivergingMeter;

__ds_ns.Heatmap = __ds_scope.Heatmap;

__ds_ns.SequentialMeter = __ds_scope.SequentialMeter;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
