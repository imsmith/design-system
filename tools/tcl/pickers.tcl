# pickers.tcl — the theme and mode pickers shared by specimen.html and gallery.html.
# Both are the segmented control (components.css .ds-seg); the theme picker reads
# its anchors and emblems from tokens/color/themes.edn so it cannot drift.
# Expects: $themes (edn::read of themes.edn), procs kw and mark.

proc pickers {} {
    global themes
    set t ""
    foreach {name th} [dict get $themes :themes] {
        set n [kw $name]
        append t "<button class=\"ds-seg__btn\" role=\"radio\" aria-checked=\"[expr {$n eq "tron" ? "true" : "false"}]\" value=\"$n\" title=\"$n\" aria-label=\"$n\" style=\"--_c:[dict get $th :anchor]\">[mark m-$n]</button>\n"
    }
    set m ""
    foreach {v id title} {system m-screen "follow the OS" light m-sun light dark m-moon dark} {
        append m "<button class=\"ds-seg__btn\" role=\"radio\" aria-checked=\"[expr {$v eq "dark" ? "true" : "false"}]\" value=\"$v\" title=\"$title\" aria-label=\"$v\">[mark $id]</button>\n"
    }
    return "<div class=\"ds-seg ds-seg--theme\" role=\"radiogroup\" aria-label=\"theme\" data-k=\"theme\">\n$t</div>\n<div class=\"ds-seg\" role=\"radiogroup\" aria-label=\"mode\" data-k=\"mode\">\n$m</div>"
}

set pickerScript {<script>
const osDark = matchMedia('(prefers-color-scheme: dark)');
function apply(k, v) {
  document.documentElement.dataset[k] = (k === 'mode' && v === 'system') ? (osDark.matches ? 'dark' : 'light') : v;
  for (const b of document.querySelectorAll('.ds-seg[data-k="' + k + '"] .ds-seg__btn')) b.setAttribute('aria-checked', b.value === v);
}
for (const seg of document.querySelectorAll('.ds-seg[data-k]')) {
  seg.onclick = e => { const b = e.target.closest('.ds-seg__btn'); if (b) apply(seg.dataset.k, b.value); };
  seg.onkeydown = e => {
    const bs = [...seg.querySelectorAll('.ds-seg__btn')], i = bs.indexOf(document.activeElement);
    const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (i < 0 || !d) return;
    e.preventDefault(); const n = bs[(i + d + bs.length) % bs.length]; n.focus(); apply(seg.dataset.k, n.value);
  };
}
osDark.onchange = () => { const b = document.querySelector('.ds-seg[data-k="mode"] [aria-checked="true"]'); if (b && b.value === 'system') apply('mode', 'system'); };
</script>}
