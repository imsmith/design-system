#!/usr/bin/env tclsh
# specimen.tcl — render specimen.html from tokens/**/*.edn.
# Run from the repo root: tclsh tools/specimen.tcl   (writes ./specimen.html)
#
# This is the first consumer of the token backbone: every value in the page is
# read from the edn, so if the page looks wrong the tokens are wrong. The HTML
# skeleton below is the only hand-authored part. No build step, no JS beyond
# the theme switch.

source [file join [file dirname [info script]] tcl edn.tcl]
foreach {var file} {themes color/themes spectrum color/spectrum status color/status
                    opinion color/opinion tlp color/markings type typography
                    space space motion motion material material marks marks
                    voice voice comps components} {
    set $var [edn::read tokens/$file.edn]
}
proc esc {s} { string map {& &amp; < &lt; > &gt; \" &quot;} $s }
proc kw  {k} { string range $k 1 end }   ;# :foo -> foo
proc css_list {l} { join [lmap x $l {expr {[string match "* *" $x] ? "\"$x\"" : $x}}] ", "}
proc shadow {kind entries} {
    join [lmap e $entries {
        lassign [list [dict get $e :x] [dict get $e :y] [dict get $e :blur] [dict get $e :alpha]] x y blur alpha
        set c "color-mix(in srgb, var(--glow) [expr {int($alpha*100)}]%, transparent)"
        expr {$kind eq ":text" ? "${x}px ${y}px ${blur}px $c" : "${x}px ${y}px ${blur}px $c"}
    }] ", "
}

# ---------- CSS custom properties from the edn ----------
set css ""
foreach {name t} [dict get $themes :themes] {
    foreach mode {:dark :light} {
        append css "\[data-theme=\"[kw $name]\"\]\[data-mode=\"[kw $mode]\"\] \{"
        foreach {role hex} [dict get $t $mode] { append css " --[kw $role]: $hex;" }
        append css " color-scheme: [kw $mode]; \}\n"
    }
}
append css ":root {\n"
foreach s [dict get $spectrum :stops] { append css "  --spectrum-[kw [dict get $s :name]]: [dict get $s :hex24];\n" }
foreach s [dict get $status :ramp]    { append css "  --status-[kw [dict get $s :step]]: [dict get $s :hex24];\n" }
foreach s [dict get $tlp :markings]   { append css "  --tlp-[string tolower [string map {TLP: {} + -} [dict get $s :name]]]: [dict get $s :hex24];\n" }
append css "  --tlp-bg: [dict get $tlp :meta :background];\n"
append css "  --font-mono: [css_list [dict get $type :families :mono :stack]];\n"
append css "  --font-prose: [css_list [dict get $type :families :prose :stack]];\n"
foreach s [dict get $type :scale] { append css "  --fs-[kw [dict get $s :token]]: [dict get $s :rem]rem;\n" }
foreach {k v} [dict get $type :weights]     { append css "  --fw-[kw $k]: $v;\n" }
foreach {k v} [dict get $type :line-height] { append css "  --lh-[kw $k]: $v;\n" }
foreach s [dict get $space :scale] { append css "  --[kw [dict get $s :token]]: [dict get $s :rem]rem;\n" }
foreach s [dict get $motion :duration] { append css "  --dur-[kw [dict get $s :token]]: [dict get $s :ms]ms;\n" }
foreach {k v} [dict get $motion :easing] { append css "  --ease-[kw $k]: $v;\n" }
append css "  --pulse-period: [dict get $motion :pulse :period-ms]ms;\n"
foreach {lvl kinds} [dict get $material :glow] {
    foreach {kind entries} $kinds { append css "  --glow-[kw $lvl]-[kw $kind]: [shadow $kind $entries];\n" }
}
append css "\}\n"

# ---------- body fragments ----------
proc swatch {var label {hex ""}} {
    return "<div class=\"sw\"><span class=\"chip\" style=\"background:var($var)\"></span><code>$label</code>[expr {$hex ne "" ? "<code class=hex>$hex</code>" : ""}]</div>"
}
proc mark {id} { return "<svg class=\"mark\" aria-hidden=\"true\"><use href=\"#$id\"/></svg>" }

set chrome ""
foreach role [dict get $themes :meta :roles] { append chrome [swatch --[kw $role] [kw $role]] }
set chromeHex ""
foreach {name t} [dict get $themes :themes] { foreach mode {:dark :light} {
    append chromeHex "<tr><th>[kw $name] [kw $mode]</th>"
    foreach {role hex} [dict get $t $mode] { append chromeHex "<td><span class=chip style=\"background:$hex\"></span><code>$hex</code></td>" }
    append chromeHex "</tr>\n"
}}
set spec ""
foreach s [dict get $spectrum :stops] { append spec [swatch --spectrum-[kw [dict get $s :name]] "[kw [dict get $s :name]] [format %+d [dict get $s :index]]" [dict get $s :hex24]] }
set lex {}; foreach l [dict get $voice :status-lexicon] { dict set lex [dict get $l :step] $l }
set stat ""
foreach s [dict get $status :ramp] {
    set step [dict get $s :step]; set l [dict get $lex $step]
    append stat "<span class=\"badge\" style=\"--c:var(--status-[kw $step])\">[mark [dict get $l :glyph]] [dict get $l :display]<code class=hex>[dict get $s :hex24]</code></span>"
}
set opin ""
foreach o [dict get $opinion :map] { append opin [swatch --spectrum-[kw [dict get $o :stop]] [dict get $o :value] [dict get $o :hex24]] }
set tlpRow ""
foreach s [dict get $tlp :markings] { append tlpRow "<span class=tlp style=\"color:[dict get $s :hex24]\">[esc [dict get $s :name]]</span>" }
set typeRows ""
foreach s [dict get $type :scale] { append typeRows "<div class=trow><code>[kw [dict get $s :token]] · [dict get $s :px]px</code><span style=\"font-size:var(--fs-[kw [dict get $s :token]])\">The quick brown fox — 0123456789</span></div>\n" }
set spaceRows ""
foreach s [dict get $space :scale] { append spaceRows "<div class=trow><code>[kw [dict get $s :token]] · [dict get $s :px]px</code><span class=bar style=\"width:var(--[kw [dict get $s :token]])\"></span></div>\n" }
set markRows ""
foreach group {:status :diverging :ui} { foreach m [dict get $marks $group] {
    set id [dict get $m :id]
    append markRows "<div class=mk>[mark $id]<code>$id</code><small>[esc [expr {[dict get $m :unicode] eq "nil" ? "" : [dict get $m :unicode]}]] [esc [expr {[dict get $m :ascii] eq "nil" ? "" : [dict get $m :ascii]}]]</small></div>\n"
}}
set states ""
foreach st [dict get $comps :meta :states] { append states "<button class=\"btn [kw $st]\" [expr {$st eq ":disabled" ? "disabled" : ""}]>[kw $st]</button>\n" }
set sprite [string map {<?xml {<!--} ?> -->} [string trim [exec cat assets/marks/sprite.svg]]]
regsub {<svg\s} $sprite {<svg style="display:none" } sprite

# ---------- page ----------
set mcrit [mark m-critical]; set mwarm [mark m-warm]; set mhigh [mark m-high]
set html [subst -nocommands -nobackslashes {<!doctype html>
<html lang="en" data-theme="tron" data-mode="dark">
<head>
<meta charset="utf-8">
<title>Design system — specimen</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
<style>
/* generated from tokens/ by tools/specimen.tcl — do not edit by hand */
$css
* { box-sizing: border-box }
html { background: var(--bg); color: var(--text); font: var(--fw-regular) var(--fs-body)/var(--lh-snug) var(--font-mono) }
body { margin: 0 auto; max-width: 72rem; padding: var(--space-3) }
h1, h2, h3 { line-height: var(--lh-tight); margin: var(--space-4) 0 var(--space-2); text-transform: uppercase; letter-spacing: .04em }
h1 { font-size: var(--fs-h1) } h2 { font-size: var(--fs-h2); border-bottom: 1px solid var(--border); padding-bottom: var(--space-half) } h3 { font-size: var(--fs-h3) }
[data-mode="dark"] h1 { text-shadow: var(--glow-ambient-text); color: var(--accent) }
p.prose { font-family: var(--font-prose); line-height: var(--lh-normal); max-width: 72ch }
code { font-family: var(--font-mono); font-size: var(--fs-small) } code.hex { color: var(--muted); margin-left: var(--space-1) }
small { color: var(--muted); font-size: var(--fs-caption) }
header { display: flex; gap: var(--space-2); align-items: center; flex-wrap: wrap }
select { font: inherit; background: var(--surface); color: var(--text); border: 1px solid var(--border); padding: var(--space-half) var(--space-1) }
.row { display: flex; flex-wrap: wrap; gap: var(--space-2) }
.sw { display: flex; flex-direction: column; gap: var(--space-half); min-width: 7rem }
.chip { display: inline-block; width: 3rem; height: 3rem; border: 1px solid var(--border) }
td .chip { width: 1rem; height: 1rem; vertical-align: middle; margin-right: var(--space-half) }
table { border-collapse: collapse; font-size: var(--fs-small) } th, td { text-align: left; padding: var(--space-half) var(--space-1); border-bottom: 1px solid var(--border) }
.trow { display: grid; grid-template-columns: 12rem 1fr; align-items: center; gap: var(--space-2); padding: var(--space-half) 0 }
.bar { display: block; height: var(--space-1); background: var(--accent) }
.mark { width: 1.5rem; height: 1.5rem; stroke: currentColor; fill: none; vertical-align: middle }
.mk { display: inline-flex; flex-direction: column; align-items: center; gap: var(--space-half); width: 7rem; padding: var(--space-1); border: 1px solid var(--border); background: var(--surface) }
.badge { display: inline-flex; align-items: center; gap: var(--space-half); color: var(--c); border: 1px solid var(--c); padding: var(--space-half) var(--space-1); font-weight: var(--fw-medium) }
.badge.pulse { animation: pulse var(--pulse-period) var(--ease-standard) infinite }
@keyframes pulse { 50% { opacity: .5 } }
@media (prefers-reduced-motion: reduce) { .badge.pulse { animation: none } }
.tlp { background: var(--tlp-bg); padding: var(--space-half) var(--space-1); font-weight: var(--fw-bold) }
.btn { font: inherit; background: var(--surface); color: var(--text); border: 1px solid var(--border); padding: var(--space-1) var(--space-2); cursor: pointer; transition: all var(--dur-fast) var(--ease-standard) }
.btn.hover, .btn:hover { border-color: var(--accent) } [data-mode="dark"] .btn.hover, [data-mode="dark"] .btn:hover { box-shadow: var(--glow-ambient-box) }
.btn.focus, .btn:focus-visible { outline: 2px solid var(--text); outline-offset: var(--space-half) } [data-mode="dark"] .btn.focus, [data-mode="dark"] .btn:focus-visible { box-shadow: var(--glow-active-box) }
.btn.active, .btn:active { background: var(--accent); color: var(--on-accent); border-color: var(--accent); transform: translateY(1px) }
.btn.disabled, .btn:disabled { color: var(--muted); opacity: .5; cursor: not-allowed; box-shadow: none }
.btn.loading { color: transparent; position: relative } .btn.loading::after { content: "↻"; color: var(--text); position: absolute; inset: 0; display: grid; place-items: center; animation: spin 1s linear infinite }
@keyframes spin { to { transform: rotate(360deg) } } @media (prefers-reduced-motion: reduce) { .btn.loading::after { animation: none } }
.btn.error { border-color: var(--status-critical); color: var(--status-critical) }
.btn.selected { background: color-mix(in srgb, var(--accent) 15%, transparent); box-shadow: inset 3px 0 0 var(--accent) }
.btn.read-only { border-color: transparent; cursor: text }
.btn.destructive { background: var(--status-critical); color: #000; border-color: var(--status-critical) }
.btn.ghost { background: transparent; border-color: transparent; color: var(--muted) }
.gauge { height: var(--space-2); background: var(--surface); border: 1px solid var(--border); position: relative; margin: var(--space-half) 0 }
.gauge .fill { position: absolute; top: 0; bottom: 0 }
.gauge .tick { position: absolute; top: -4px; bottom: -4px; width: 2px }
.toast { display: inline-flex; gap: var(--space-1); align-items: flex-start; background: var(--surface); border: 1px solid var(--border); border-left: 4px solid var(--c); padding: var(--space-2); max-width: 32rem }
.field { display: flex; flex-direction: column; gap: var(--space-half); max-width: 24rem }
.field input { font: inherit; background: var(--surface); color: var(--text); border: 1px solid var(--status-critical); padding: var(--space-1) }
.field .msg { color: var(--status-critical); display: flex; gap: var(--space-half); align-items: center; font-size: var(--fs-small) }
</style>
</head>
<body>
$sprite
<header>
  <h1>Specimen</h1>
  <label>theme <select id="theme"><option>tron</option><option>matrix</option><option>compaq</option></select></label>
  <label>mode <select id="mode"><option>dark</option><option>light</option></select></label>
</header>
<p class="prose">Every value on this page is read from <code>tokens/</code> by <code>tools/specimen.tcl</code>. Chrome follows the selected theme. Data color does not: the spectrum, status ramp, and TLP markings are identical in every theme and mode. This paragraph is prose set in the proportional family; everything else is the mono voice.</p>

<h2>Chrome</h2>
<div class="row">$chrome</div>
<details><summary>all six variants</summary><table>$chromeHex</table></details>

<h2>Data color</h2>
<h3>Spectrum — diverging, green center</h3>
<div class="row">$spec</div>
<h3>Status ramp — OASIS CAP severity</h3>
<div class="row">$stat</div>
<h3>STIX opinion — on the muted spectrum</h3>
<div class="row">$opin</div>
<h3>STIX TLP — prescribed, on black</h3>
<div class="row">$tlpRow</div>

<h2>Typography</h2>
$typeRows

<h2>Space</h2>
$spaceRows

<h2>Marks</h2>
<div class="row">$markRows</div>

<h2>Components</h2>
<h3>State matrix</h3>
<div class="row">$states</div>
<h3>Status badge</h3>
<div class="row"><span class="badge pulse" style="--c:var(--status-critical)">$mcrit DOWN <small>pulse: critical/live only</small></span></div>
<h3>Gauge — diverging (signed value always shown)</h3>
<div class="gauge"><span class="fill" style="left:50%;width:30%;background:var(--spectrum-orange)"></span><span class="tick" style="left:50%;background:var(--spectrum-green)"></span></div>
<code>$mwarm +2.0 σ above baseline</code>
<h3>Gauge — sequential (accent fill, alert thresholds)</h3>
<div class="gauge"><span class="fill" style="left:0;width:82%;background:var(--accent)"></span><span class="tick" style="left:70%;background:var(--status-medium)"></span><span class="tick" style="left:90%;background:var(--status-critical)"></span></div>
<code>82% · WARN (70) · DOWN (90)</code>
<h3>Error state — color + glyph + text</h3>
<div class="field"><label for="port">port</label><input id="port" value="99999" aria-invalid="true" aria-describedby="port-msg"><span class="msg" id="port-msg">$mcrit Port out of range. Use 1–65535.</span></div>
<h3>Toast — what happened · why · what to do</h3>
<div class="toast" role="status" style="--c:var(--status-high)">$mhigh<div><strong>ALERT</strong> Replica lag 42 s. Primary under write burst. Check <code>db-03</code> before failover.</div></div>
<h3>Destructive confirm</h3>
<div class="row"><button class="btn destructive">Delete cluster prod-east</button><button class="btn ghost">Cancel</button></div>
<p class="prose">Deletes 14 nodes and their volumes. This cannot be undone.</p>

<h2>Motion</h2>
<p>durations: <code>instant</code> <code>fast</code> <code>moderate</code> <code>deliberate</code> — hover a button to see <code>fast</code>. The critical badge pulses; under <code>prefers-reduced-motion</code> it is static.</p>

<script>
for (const k of ['theme', 'mode']) {
  const el = document.getElementById(k);
  el.onchange = () => document.documentElement.dataset[k] = el.value;
}
</script>
</body>
</html>
}]
set f [open specimen.html w]; fconfigure $f -encoding utf-8; puts -nonewline $f $html; close $f
puts "wrote specimen.html ([string length $html] bytes)"
