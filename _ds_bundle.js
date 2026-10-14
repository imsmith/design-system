/* @ds-bundle: {"format":3,"namespace":"DesignSystem_019de4","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Mark","sourcePath":"components/core/Mark.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DivergingMeter","sourcePath":"components/data/DivergingMeter.jsx"},{"name":"Heatmap","sourcePath":"components/data/Heatmap.jsx"},{"name":"SequentialMeter","sourcePath":"components/data/SequentialMeter.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"assets/marks/sprite-inject.js":"5a5d74914289","components/core/Button.jsx":"d2a980d93dc0","components/core/Card.jsx":"832042dd214f","components/core/Mark.jsx":"ae112ec59efc","components/core/StatusBadge.jsx":"742ecb90ec14","components/core/Tag.jsx":"12d61187c337","components/data/DivergingMeter.jsx":"44ee6f131060","components/data/Heatmap.jsx":"ac4ad10964ea","components/data/SequentialMeter.jsx":"a81dc6f85249","components/data/Sparkline.jsx":"69181e5ed918","components/feedback/Alert.jsx":"1b2946adb71c","components/forms/Checkbox.jsx":"03b863d69b1a","components/forms/Input.jsx":"1d17bd92be58","components/forms/Select.jsx":"dd37240a0cea","components/forms/Toggle.jsx":"8bd900ae4450","components/navigation/Tabs.jsx":"b03e369b6916","ui_kits/operations-console/AlertsView.jsx":"82da2d585bac","ui_kits/operations-console/App.jsx":"7d56c2e6f3ff","ui_kits/operations-console/GridDashboard.jsx":"a89c30b281fc","ui_kits/operations-console/LoginScreen.jsx":"c2729dc4a06f","ui_kits/operations-console/NodeDetail.jsx":"4f3574647a49","ui_kits/operations-console/Shell.jsx":"c6fdc9491548","ui_kits/operations-console/data.js":"fb919dbc6d92"},"inlinedExternals":[],"unexposedExports":[]} */

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
  const cls = [
    "ds-card",
    density === "compact" ? "ds-card--compact" : "",
    density === "dense" ? "ds-card--dense" : "",
    interactive ? "ds-card--interactive" : "",
    selected ? "ds-card--selected" : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ React.createElement(
    "section",
    {
      className: cls,
      tabIndex: interactive ? 0 : void 0,
      "aria-current": selected || void 0,
      ...rest
    },
    (title || actions) && /* @__PURE__ */ React.createElement("header", { className: "ds-card__head" }, title && /* @__PURE__ */ React.createElement("h3", { className: "ds-card__title" }, title), actions && /* @__PURE__ */ React.createElement("div", { className: "ds-card__actions" }, actions)),
    /* @__PURE__ */ React.createElement("div", { className: `ds-card__body${flush ? " ds-card__body--flush" : ""}` }, children),
    footer && /* @__PURE__ */ React.createElement("footer", { className: "ds-card__foot" }, footer)
  );
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
const { Mark } = __ds_scope;
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
  const cls = [
    "ds-btn",
    `ds-btn--${variant}`,
    size !== "md" ? `ds-btn--${size}` : "",
    className
  ].filter(Boolean).join(" ");
  const iconSize = size === "sm" ? 14 : size === "lg" ? 20 : 16;
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: cls,
      disabled: disabled || loading,
      "aria-busy": loading || void 0,
      "data-loading": loading || void 0,
      ...rest
    },
    loading && /* @__PURE__ */ React.createElement("span", { className: "ds-btn__spin", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(Mark, { name: "m-refresh", size: iconSize })),
    /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "ds-btn__label",
        style: { display: "inline-flex", alignItems: "center", gap: "var(--space-1)" }
      },
      icon && /* @__PURE__ */ React.createElement(Mark, { name: icon, size: iconSize }),
      children,
      iconEnd && /* @__PURE__ */ React.createElement(Mark, { name: iconEnd, size: iconSize })
    )
  );
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
function StatusBadge({
  step = "unknown",
  label,
  variant = "soft",
  pulse = false,
  size = 14,
  className = "",
  ...rest
}) {
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
const { Mark } = __ds_scope;
function Tag({
  children,
  icon,
  accent = false,
  onRemove,
  className = "",
  ...rest
}) {
  const cls = ["ds-tag", accent ? "ds-tag--accent" : "", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ React.createElement("span", { className: cls, ...rest }, icon && /* @__PURE__ */ React.createElement(Mark, { name: icon, size: 12 }), /* @__PURE__ */ React.createElement("span", null, children), onRemove && /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "ds-tag__x",
      "aria-label": "Remove",
      onClick: onRemove
    },
    /* @__PURE__ */ React.createElement(Mark, { name: "m-close", size: 12 })
  ));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }
// components/data/DivergingMeter.jsx
try { (() => {
const { Mark } = __ds_scope;
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
function DivergingMeter({
  value,
  range = 5,
  label,
  unit = "",
  showValue = true,
  className = "",
  ...rest
}) {
  const clamped = Math.max(-range, Math.min(range, value));
  const halfPct = Math.abs(clamped) / range * 50;
  const positive = clamped > 0;
  const zero = Math.round(clamped) === 0;
  const color = stopColor(clamped);
  const signGlyph = zero ? "m-neutral" : positive ? "m-warm" : "m-cool";
  const signStr = zero ? "\xB10" : `${positive ? "+" : "\u2212"}${Math.abs(value)}`;
  return /* @__PURE__ */ React.createElement("div", { className: `ds-dmeter ${className}`.trim(), ...rest }, /* @__PURE__ */ React.createElement("div", { className: "ds-dmeter__top" }, label && /* @__PURE__ */ React.createElement("span", { className: "ds-dmeter__label" }, label), showValue && /* @__PURE__ */ React.createElement("span", { className: "ds-dmeter__val", style: { "--_c": color } }, /* @__PURE__ */ React.createElement(Mark, { name: signGlyph, size: 14, label: zero ? "neutral" : positive ? "over" : "under" }), /* @__PURE__ */ React.createElement("span", null, signStr, unit))), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "ds-dmeter__track",
      role: "meter",
      "aria-valuenow": value,
      "aria-valuemin": -range,
      "aria-valuemax": range,
      "aria-label": label
    },
    /* @__PURE__ */ React.createElement("div", { className: "ds-dmeter__center", "aria-hidden": "true" }),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "ds-dmeter__fill",
        style: {
          "--_c": color,
          width: `${halfPct}%`,
          left: positive ? "50%" : `${50 - halfPct}%`
        }
      }
    )
  ));
}
Object.assign(__ds_scope, { DivergingMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DivergingMeter.jsx", error: String((e && e.message) || e) }); }
// components/data/Heatmap.jsx
try { (() => {
const { Mark } = __ds_scope;
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
  const cols = columns || Math.ceil(Math.sqrt(cells.length)) || 1;
  return /* @__PURE__ */ React.createElement("div", { className: `ds-heat ${className}`.trim(), ...rest }, /* @__PURE__ */ React.createElement("div", { className: "ds-heat__grid", style: { gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` } }, cells.map((c, idx) => {
    const isCrit = c.value >= criticalAt;
    const title = `${c.label || c.id || idx}: ${c.value > 0 ? "+" : c.value < 0 ? "\u2212" : "\xB1"}${Math.abs(c.value)}${unit}`;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        key: c.id || idx,
        className: "ds-heat__cell",
        style: { background: stopColor(c.value) },
        title,
        "aria-label": title,
        onClick: onSelect ? () => onSelect(c) : void 0
      },
      isCrit && /* @__PURE__ */ React.createElement(Mark, { name: "m-critical", size: 12 })
    );
  })), showLegend && /* @__PURE__ */ React.createElement("div", { className: "ds-heat__legend", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "ds-heat__legend-end" }, "cool \u2212", range), /* @__PURE__ */ React.createElement("span", { className: "ds-heat__bar" }), /* @__PURE__ */ React.createElement("span", { className: "ds-heat__legend-end" }, "warm +", range), /* @__PURE__ */ React.createElement("span", { className: "ds-heat__crit" }, /* @__PURE__ */ React.createElement(Mark, { name: "m-critical", size: 12 }), " crit")));
}
Object.assign(__ds_scope, { Heatmap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Heatmap.jsx", error: String((e && e.message) || e) }); }
// components/data/SequentialMeter.jsx
try { (() => {
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
  return /* @__PURE__ */ React.createElement("div", { className: `ds-meter ${className}`.trim(), ...rest }, /* @__PURE__ */ React.createElement("div", { className: "ds-meter__top" }, label && /* @__PURE__ */ React.createElement("span", { className: "ds-meter__label" }, label), showValue && /* @__PURE__ */ React.createElement("span", { className: "ds-meter__val", style: { "--_c": color } }, /* @__PURE__ */ React.createElement("span", null, value, unit), word && /* @__PURE__ */ React.createElement("span", { className: "ds-meter__word" }, word))), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "ds-meter__track",
      role: "meter",
      "aria-valuenow": value,
      "aria-valuemin": 0,
      "aria-valuemax": max,
      "aria-label": label
    },
    /* @__PURE__ */ React.createElement("div", { className: "ds-meter__fill", style: { width: `${pct}%`, "--_c": color } }),
    warn != null && /* @__PURE__ */ React.createElement("div", { className: "ds-meter__tick ds-meter__tick--warn", style: { left: `${warn / max * 100}%` } }),
    crit != null && /* @__PURE__ */ React.createElement("div", { className: "ds-meter__tick ds-meter__tick--crit", style: { left: `${crit / max * 100}%` } })
  ));
}
Object.assign(__ds_scope, { SequentialMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SequentialMeter.jsx", error: String((e && e.message) || e) }); }
// components/data/Sparkline.jsx
try { (() => {
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
    return /* @__PURE__ */ React.createElement("line", { x1: 0, y1: y, x2: width, y2: y, stroke: c, strokeWidth: "1", strokeDasharray: "2 2", opacity: "0.7" });
  };
  return /* @__PURE__ */ React.createElement("span", { className: `ds-spark ${className}`.trim(), ...rest }, /* @__PURE__ */ React.createElement("svg", { className: "ds-spark__svg", width, height, viewBox: `0 0 ${width} ${height}`, "aria-hidden": "true" }, mode === "threshold" && threshLine(warn, "var(--status-medium)"), mode === "threshold" && threshLine(crit, "var(--status-critical)"), /* @__PURE__ */ React.createElement("path", { d: path, fill: "none", stroke: color, strokeWidth: "1.5", strokeLinejoin: "round", strokeLinecap: "round" }), n > 0 && /* @__PURE__ */ React.createElement("circle", { cx: end[0], cy: end[1], r: "2.2", fill: color })), showEnd && /* @__PURE__ */ React.createElement("span", { className: "ds-spark__end", style: { "--_c": color } }, /* @__PURE__ */ React.createElement("span", null, last, unit), word && /* @__PURE__ */ React.createElement("span", { className: "ds-spark__word" }, word)));
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
const { Mark } = __ds_scope;
function Checkbox({ label, className = "", ...rest }) {
  return /* @__PURE__ */ React.createElement("label", { className: `ds-check ${className}`.trim() }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", className: "ds-check__input", ...rest }), /* @__PURE__ */ React.createElement("span", { className: "ds-check__box", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(Mark, { name: "m-low", size: 14, className: "ds-check__mark" })), label && /* @__PURE__ */ React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }
// components/forms/Input.jsx
try { (() => {
const { Mark } = __ds_scope;
function Input({
  label,
  icon,
  error,
  helper,
  id,
  className = "",
  ...rest
}) {
  const fid = id || (label ? `ds-${String(label).replace(/\s+/g, "-").toLowerCase()}` : void 0);
  const msg = error || helper;
  return /* @__PURE__ */ React.createElement("div", { className: `ds-field${error ? " ds-field--error" : ""} ${className}`.trim() }, label && /* @__PURE__ */ React.createElement("label", { className: "ds-field__label", htmlFor: fid }, label), /* @__PURE__ */ React.createElement("div", { className: "ds-field__wrap" }, icon && /* @__PURE__ */ React.createElement("span", { className: "ds-field__icon" }, /* @__PURE__ */ React.createElement(Mark, { name: icon, size: 16 })), /* @__PURE__ */ React.createElement(
    "input",
    {
      id: fid,
      className: `ds-input${icon ? " ds-input--has-icon" : ""}`,
      "aria-invalid": error ? "true" : void 0,
      ...rest
    }
  )), msg && /* @__PURE__ */ React.createElement("div", { className: "ds-field__msg" }, error && /* @__PURE__ */ React.createElement(Mark, { name: "m-critical", size: 12, label: "Error" }), /* @__PURE__ */ React.createElement("span", null, msg)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }
// components/forms/Select.jsx
try { (() => {
const { Mark } = __ds_scope;
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
  const fid = id || (label ? `ds-${String(label).replace(/\s+/g, "-").toLowerCase()}` : void 0);
  const msg = error || helper;
  return /* @__PURE__ */ React.createElement("div", { className: `ds-field${error ? " ds-field--error" : ""} ${className}`.trim() }, label && /* @__PURE__ */ React.createElement("label", { className: "ds-field__label", htmlFor: fid }, label), /* @__PURE__ */ React.createElement("div", { className: "ds-select__wrap" }, /* @__PURE__ */ React.createElement("select", { id: fid, className: "ds-select", "aria-invalid": error ? "true" : void 0, ...rest }, children || options.map((o) => {
    const opt = typeof o === "string" ? { value: o, label: o } : o;
    return /* @__PURE__ */ React.createElement("option", { key: opt.value, value: opt.value }, opt.label);
  })), /* @__PURE__ */ React.createElement("span", { className: "ds-select__chevron" }, /* @__PURE__ */ React.createElement(Mark, { name: "m-chevron", size: 16 }))), msg && /* @__PURE__ */ React.createElement("div", { className: "ds-field__msg" }, error && /* @__PURE__ */ React.createElement(Mark, { name: "m-critical", size: 12, label: "Error" }), /* @__PURE__ */ React.createElement("span", null, msg)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }
// components/forms/Toggle.jsx
try { (() => {
function Toggle({ label, showState = false, checked, defaultChecked, className = "", ...rest }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked != null;
  const on = isControlled ? checked : internal;
  return /* @__PURE__ */ React.createElement("label", { className: `ds-toggle ${className}`.trim() }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      role: "switch",
      className: "ds-toggle__input",
      checked: on,
      onChange: (e) => {
        if (!isControlled) setInternal(e.target.checked);
        rest.onChange && rest.onChange(e);
      },
      ...(() => {
        const { onChange, ...r } = rest;
        return r;
      })()
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "ds-toggle__track", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "ds-toggle__knob" })), showState && /* @__PURE__ */ React.createElement("span", { className: "ds-toggle__state" }, on ? "ON" : "OFF"), label && /* @__PURE__ */ React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }
// components/navigation/Tabs.jsx
try { (() => {
const { Mark } = __ds_scope;
function Tabs({ tabs = [], value, defaultValue, onChange, className = "", ...rest }) {
  const first = defaultValue ?? (tabs[0] && tabs[0].id);
  const [internal, setInternal] = React.useState(first);
  const active = value != null ? value : internal;
  const select = (id) => {
    if (value == null) setInternal(id);
    onChange && onChange(id);
  };
  return /* @__PURE__ */ React.createElement("div", { className: `ds-tabs ${className}`.trim(), ...rest }, /* @__PURE__ */ React.createElement("div", { className: "ds-tabs__list", role: "tablist" }, tabs.map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t.id,
      type: "button",
      role: "tab",
      "aria-selected": active === t.id,
      disabled: t.disabled,
      className: "ds-tab",
      onClick: () => select(t.id)
    },
    t.icon && /* @__PURE__ */ React.createElement(Mark, { name: t.icon, size: 14 }),
    /* @__PURE__ */ React.createElement("span", null, t.label),
    t.count != null && /* @__PURE__ */ React.createElement("span", { className: "ds-tab__count" }, t.count)
  ))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }
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
