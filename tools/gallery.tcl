#!/usr/bin/env tclsh
# gallery.tcl — render gallery.html: every component in tokens/components.css,
# one card each, on the real classes. Run from the repo root: tclsh tools/gallery.tcl
#
# A consumer of styles.css. The page carries no component CSS of its own — only
# the grid and a few overrides that pin fixed-position overlays into their cards.
# The sprite is inlined so <use href="#m-*"> works from file://.

source [file join [file dirname [info script]] tcl edn.tcl]
source [file join [file dirname [info script]] tcl pickers.tcl]
set themes [edn::read tokens/color/themes.edn]
proc kw {k} { string range $k 1 end }
proc mark {id} { return "<svg class=\"mark\" aria-hidden=\"true\"><use href=\"#$id\"/></svg>" }
set sprite [string map {<?xml {<!--} ?> -->} [string trim [exec cat assets/marks/sprite.svg]]]
regsub {<svg\s} $sprite {<svg style="display:none" } sprite

# {id title description manual-anchor html}
set cards {}
proc card {id title desc anchor html} {
    global cards
    lappend cards [list $id $title $desc $anchor $html]
}

card button "Button" "The one way to trigger an action. One primary per view; destructive breaks the accent norm." button {
<div class="row">
<button class="ds-btn ds-btn--primary">Primary</button>
<button class="ds-btn ds-btn--ghost">Ghost</button>
<button class="ds-btn ds-btn--text">Text</button>
<button class="ds-btn ds-btn--danger">Delete</button>
<button class="ds-btn ds-btn--ghost" disabled>Disabled</button>
<button class="ds-btn ds-btn--primary" data-loading="true" aria-busy="true"><span class="ds-btn__spin">[mark m-refresh]</span><span class="ds-btn__label">Saving</span></button>
</div>
<div class="row">
<button class="ds-btn ds-btn--ghost ds-btn--sm">Small</button>
<button class="ds-btn ds-btn--ghost">Default</button>
<button class="ds-btn ds-btn--ghost ds-btn--lg">Large</button>
</div>}

card input "Input (text field)" "Single-line text entry. Label above, message below; error is color + glyph + text." input-text-field {
<div class="ds-field"><label class="ds-field__label" for="g-host">host</label><div class="ds-field__wrap"><span class="ds-field__icon">[mark m-search]</span><input class="ds-input ds-input--has-icon" id="g-host" placeholder="db-03.prod"></div></div>
<div class="ds-field ds-field--error"><label class="ds-field__label" for="g-port">port</label><div class="ds-field__wrap"><input class="ds-input" id="g-port" value="99999" aria-invalid="true" aria-describedby="g-port-msg"></div><span class="ds-field__msg" id="g-port-msg">[mark m-critical] Port out of range. Use 1–65535.</span></div>
<div class="ds-field"><label class="ds-field__label" for="g-ro">region</label><div class="ds-field__wrap"><input class="ds-input" id="g-ro" value="us-east-1" readonly></div></div>}

card textarea "Textarea" "Multi-line text entry. The input, taller, vertically resizable." textarea-fieldset {
<div class="ds-field"><label class="ds-field__label" for="g-ta">runbook note</label><div class="ds-field__wrap"><textarea class="ds-input ds-textarea" id="g-ta">Failover rehearsed 2026-10-12. Replica lag stayed under 2 s.</textarea></div></div>}

card select "Select" "Pick one from a short, known list. Native element, styled; the chevron is a mark." select {
<div class="ds-field"><label class="ds-field__label" for="g-sel">environment</label><div class="ds-select__wrap"><select class="ds-select" id="g-sel"><option>prod-east</option><option>prod-west</option><option>staging</option></select><span class="ds-select__chevron">[mark m-chevron]</span></div></div>}

card checkbox "Checkbox" "Independent yes/no choices. Native input, custom box, accent when checked." checkbox-radio-toggle {
<div class="col">
<label class="ds-check"><input class="ds-check__input" type="checkbox" checked><span class="ds-check__box"><span class="ds-check__mark">[mark m-low]</span></span>Alert on warn</label>
<label class="ds-check"><input class="ds-check__input" type="checkbox"><span class="ds-check__box"><span class="ds-check__mark">[mark m-low]</span></span>Page on-call</label>
<label class="ds-check"><input class="ds-check__input" type="checkbox" disabled><span class="ds-check__box"><span class="ds-check__mark">[mark m-low]</span></span>Escalate (locked)</label>
</div>}

card radio "Radio" "One of a few mutually exclusive choices, all visible." checkbox-radio-toggle {
<div class="col">
<label class="ds-radio"><input class="ds-radio__input" type="radio" name="g-r" checked><span class="ds-radio__dot"></span><span>Rolling</span></label>
<label class="ds-radio"><input class="ds-radio__input" type="radio" name="g-r"><span class="ds-radio__dot"></span><span>Blue/green</span></label>
<label class="ds-radio"><input class="ds-radio__input" type="radio" name="g-r" disabled><span class="ds-radio__dot"></span><span>Canary</span></label>
</div>}

card toggle "Toggle" "An on/off switch that takes effect immediately. Not a checkbox: no submit." checkbox-radio-toggle {
<div class="col">
<label class="ds-toggle"><input class="ds-toggle__input" type="checkbox" checked><span class="ds-toggle__track"><span class="ds-toggle__knob"></span></span>Live tail<span class="ds-toggle__state">on</span></label>
<label class="ds-toggle"><input class="ds-toggle__input" type="checkbox"><span class="ds-toggle__track"><span class="ds-toggle__knob"></span></span>Mute<span class="ds-toggle__state">off</span></label>
</div>}

card fieldset "Fieldset" "Groups related fields under one legend and an optional hint." textarea-fieldset {
<fieldset class="ds-fieldset"><legend class="ds-fieldset__legend">Notification</legend><p class="ds-fieldset__hint">Who hears about it and how loud.</p>
<div class="ds-field"><label class="ds-field__label" for="g-fs-ch">channel</label><div class="ds-field__wrap"><input class="ds-input" id="g-fs-ch" value="#ops-prod"></div></div>
<label class="ds-check"><input class="ds-check__input" type="checkbox" checked><span class="ds-check__box"><span class="ds-check__mark">[mark m-low]</span></span>Also page</label>
</fieldset>}

card card "Card / Panel" "A bounded surface: head, body, foot. Interactive and selected variants." card-panel {
<div class="row">
<div class="ds-card" style="flex:1;min-width:14rem"><div class="ds-card__head"><h4 class="ds-card__title">db-03</h4><div class="ds-card__actions"><button class="ds-btn ds-btn--text ds-btn--sm">[mark m-more]</button></div></div><div class="ds-card__body">Primary, 14 replicas. Last failover 3 d ago.</div><div class="ds-card__foot"><span class="ds-fresh ds-fresh--live"><span class="ds-fresh__dot"></span>live</span></div></div>
<div class="ds-card ds-card--interactive ds-card--selected ds-card--compact" tabindex="0" style="flex:1;min-width:14rem"><div class="ds-card__head"><h4 class="ds-card__title">db-04 · selected</h4></div><div class="ds-card__body">Replica. Compact density, interactive.</div></div>
</div>}

card table "Table" "Rows of like things. Sortable headers, numeric columns right-aligned, three densities." table {
<table class="ds-table ds-table--compact"><thead><tr><th class="ds-table__th" aria-sort="descending"><button class="ds-table__sort">host [mark m-chevron]</button></th><th class="ds-table__th">status</th><th class="ds-table__th ds-table__th--num">lag</th></tr></thead>
<tbody>
<tr class="ds-table__row ds-table__row--interactive" aria-selected="true"><td class="ds-table__td">db-03</td><td class="ds-table__td"><span class="ds-badge" style="--_c:var(--status-low);--_on:var(--on-status-low)">[mark m-low] OK</span></td><td class="ds-table__td ds-table__td--num">0.8 s</td></tr>
<tr class="ds-table__row ds-table__row--interactive"><td class="ds-table__td">db-04</td><td class="ds-table__td"><span class="ds-badge" style="--_c:var(--status-high);--_on:var(--on-status-high)">[mark m-high] ALERT</span></td><td class="ds-table__td ds-table__td--num">42.0 s</td></tr>
<tr class="ds-table__row ds-table__row--interactive"><td class="ds-table__td">db-05</td><td class="ds-table__td"><span class="ds-badge" style="--_c:var(--status-unknown);--_on:var(--on-status-unknown)">[mark m-unknown] UNK</span></td><td class="ds-table__td ds-table__td--num">—</td></tr>
</tbody></table>}

card badge "Status badge" "Severity as glyph + word + color, on the OASIS CAP ramp. Never color alone." status-badge {
<div class="row">
<span class="ds-badge" style="--_c:var(--status-critical);--_on:var(--on-status-critical)">[mark m-critical] DOWN</span>
<span class="ds-badge" style="--_c:var(--status-high);--_on:var(--on-status-high)">[mark m-high] ALERT</span>
<span class="ds-badge" style="--_c:var(--status-medium);--_on:var(--on-status-medium)">[mark m-medium] WARN</span>
<span class="ds-badge" style="--_c:var(--status-low);--_on:var(--on-status-low)">[mark m-low] OK</span>
<span class="ds-badge" style="--_c:var(--status-unknown);--_on:var(--on-status-unknown)">[mark m-unknown] UNK</span>
</div>
<div class="row">
<span class="ds-badge ds-badge--solid" style="--_c:var(--status-critical);--_on:var(--on-status-critical)">[mark m-critical] solid</span>
<span class="ds-badge ds-badge--plain" style="--_c:var(--status-low);--_on:var(--on-status-low)">[mark m-low] plain</span>
</div>}

card tag "Tag" "A label or filter chip. Neutral by default; accent when it is a live filter." status-badge {
<div class="row">
<span class="ds-tag">region:us-east</span>
<span class="ds-tag ds-tag--accent">env:prod <button class="ds-tag__x" aria-label="remove">[mark m-close]</button></span>
<span class="ds-tag">tier:db</span>
</div>}

card alert "Alert / banner" "Inline, persistent notice tied to the content below it. What happened, why, what to do." alert-banner {
<div class="ds-alert" style="--_c:var(--status-high);--_on:var(--on-status-high)"><span class="ds-alert__icon">[mark m-high]</span><div class="ds-alert__body"><div class="ds-alert__title">Replica lag 42 s</div><div class="ds-alert__msg">Primary under write burst. Check db-03 before failover.</div><div class="ds-alert__actions"><button class="ds-btn ds-btn--ghost ds-btn--sm">Open db-03</button></div></div><button class="ds-alert__x" aria-label="dismiss">[mark m-close]</button></div>}

card toast "Toast / notification" "Transient, stacked, bottom-right. Auto-dismisses by severity; critical persists." toast-notification {
<div class="ds-toasts ds-toasts--bottom-right">
<div class="ds-toast" role="status" style="--_c:var(--status-low);--_on:var(--on-status-low)"><span class="ds-toast__icon">[mark m-low]</span><div class="ds-toast__body"><div class="ds-toast__title">Deploy complete</div>api v2.14.0 on 12 nodes.</div><button class="ds-toast__x" aria-label="dismiss">[mark m-close]</button></div>
<div class="ds-toast" role="alert" style="--_c:var(--status-critical);--_on:var(--on-status-critical)"><span class="ds-toast__icon">[mark m-critical]</span><div class="ds-toast__body"><div class="ds-toast__title">db-03 DOWN</div>No heartbeat 30 s. Failover armed.</div><button class="ds-toast__x" aria-label="dismiss">[mark m-close]</button></div>
</div>}

card modal "Modal / dialog" "Blocks the page for one decision. Focus-trapped; Esc or scrim dismisses. Destructive variant shown." modal-dialog {
<div class="ds-scrim"><div class="ds-modal ds-modal--sm ds-modal--destructive" role="dialog" aria-modal="true" aria-labelledby="g-modal-t"><div class="ds-modal__head"><h4 class="ds-modal__title" id="g-modal-t">Delete cluster prod-east</h4><button class="ds-modal__x" aria-label="close">[mark m-close]</button></div><div class="ds-modal__body">Deletes 14 nodes and their volumes. This cannot be undone.</div><div class="ds-modal__foot"><button class="ds-btn ds-btn--ghost">Cancel</button><button class="ds-btn ds-btn--danger">Delete</button></div></div></div>}

card drawer "Drawer" "A side panel for detail or a secondary task, over the page, not instead of it." drawer {
<div class="ds-scrim ds-scrim--drawer"><div class="ds-drawer" role="dialog" aria-labelledby="g-drawer-t"><div class="ds-drawer__head"><h4 class="ds-drawer__title" id="g-drawer-t">db-03 · detail</h4><button class="ds-modal__x" aria-label="close">[mark m-close]</button></div><div class="ds-drawer__body"><dl class="ds-kv"><dt class="ds-kv__k">role</dt><dd class="ds-kv__v">primary</dd><dt class="ds-kv__k">lag</dt><dd class="ds-kv__v ds-kv__v--num">0.8 s</dd></dl></div><div class="ds-drawer__foot"><button class="ds-btn ds-btn--ghost">Close</button></div></div></div>}

card tooltip "Tooltip" "Supplementary text on hover or focus. Never the sole carrier of essential information." tooltip {
<p>Replica lag is <span class="ds-tip" tabindex="0">0.8 s<span class="ds-tip__bubble" role="tooltip">Seconds behind primary, sampled every 5 s.</span></span> — hover or focus the value.</p>}

card tabs "Tabs" "Switch between peer views of one thing. Accent underline marks the selected tab." tabs {
<div class="ds-tabs"><div class="ds-tabs__list" role="tablist"><button class="ds-tab" role="tab" aria-selected="true">Overview</button><button class="ds-tab" role="tab" aria-selected="false">Logs <span class="ds-tab__count">1.2k</span></button><button class="ds-tab" role="tab" aria-selected="false">Metrics</button><button class="ds-tab" role="tab" aria-selected="false" disabled>Audit</button></div></div>}

card menu "Menu / nav" "A list of actions or destinations. Popover for actions, sidebar for navigation." menu-nav {
<div class="row">
<ul class="ds-menu ds-menu--popover"><li class="ds-menu__heading">cluster</li><li><button class="ds-menu__item">[mark m-refresh]<span class="ds-menu__label">Restart</span><span class="ds-menu__hint">⌘R</span></button></li><li><button class="ds-menu__item">[mark m-edit]<span class="ds-menu__label">Edit config</span></button></li><li class="ds-menu__sep"></li><li><button class="ds-menu__item" disabled>[mark m-delete]<span class="ds-menu__label">Delete</span></button></li></ul>
<ul class="ds-menu ds-menu--sidebar" style="min-width:10rem"><li><a class="ds-menu__item" href="#" aria-current="page">[mark m-hub]<span class="ds-menu__label">Fleet</span></a></li><li><a class="ds-menu__item" href="#">[mark m-event]<span class="ds-menu__label">Events</span></a></li><li><a class="ds-menu__item" href="#">[mark m-settings]<span class="ds-menu__label">Settings</span></a></li></ul>
</div>}

card breadcrumb "Breadcrumb" "Where you are in a hierarchy; every ancestor is a link." breadcrumb {
<ol class="ds-crumbs"><li class="ds-crumb"><a href="#">Fleet</a><span class="ds-crumb__sep">[mark m-chevron]</span></li><li class="ds-crumb"><a href="#">prod-east</a><span class="ds-crumb__sep">[mark m-chevron]</span></li><li class="ds-crumb" aria-current="page">db-03</li></ol>}

card pagination "Pagination" "Move through a long list a page at a time. Current page is accent-tinted." pagination {
<nav class="ds-pager" aria-label="pages"><button class="ds-pager__btn ds-pager__btn--prev" disabled>[mark m-chevron]</button><button class="ds-pager__page" aria-current="page">1</button><button class="ds-pager__page">2</button><button class="ds-pager__page">3</button><span class="ds-pager__gap">…</span><button class="ds-pager__page">12</button><button class="ds-pager__btn ds-pager__btn--next">[mark m-chevron]</button></nav>}

card stepper "Stepper" "Progress through ordered steps. Done, current, blocked are distinct." stepper {
<ol class="ds-stepper"><li class="ds-step ds-step--done"><span class="ds-step__disc">[mark m-low]</span>Plan</li><li class="ds-step__connector"></li><li class="ds-step ds-step--current"><span class="ds-step__disc">2</span>Apply</li><li class="ds-step__connector"></li><li class="ds-step ds-step--blocked"><span class="ds-step__disc">[mark m-critical]</span>Verify</li><li class="ds-step__connector"></li><li class="ds-step"><span class="ds-step__disc">4</span>Done</li></ol>}

card meter "Gauge / meter — sequential" "One quantity against capacity. Accent fill; warn and crit thresholds are per-instance." gauge-meter {
<div class="ds-meter" style="--_c:var(--status-medium)"><div class="ds-meter__top"><span class="ds-meter__label">disk · /var</span><span class="ds-meter__val">82% <span class="ds-meter__word">WARN</span></span></div><div class="ds-meter__track"><span class="ds-meter__fill" style="width:82%"></span><span class="ds-meter__tick ds-meter__tick--warn" style="left:70%"></span><span class="ds-meter__tick ds-meter__tick--crit" style="left:90%"></span></div></div>
<div class="ds-meter"><div class="ds-meter__top"><span class="ds-meter__label">cpu</span><span class="ds-meter__val">41% <span class="ds-meter__word">OK</span></span></div><div class="ds-meter__track"><span class="ds-meter__fill" style="width:41%"></span><span class="ds-meter__tick ds-meter__tick--warn" style="left:70%"></span><span class="ds-meter__tick ds-meter__tick--crit" style="left:90%"></span></div></div>}

card dmeter "Gauge / meter — diverging" "Signed deviation from a green center on the spectrum. The signed value is always shown." gauge-meter {
<div class="ds-dmeter" style="--_c:var(--spectrum-orange)"><div class="ds-dmeter__top"><span class="ds-dmeter__label">error vs baseline</span><span class="ds-dmeter__val">[mark m-warm] +2.0 σ</span></div><div class="ds-dmeter__track"><span class="ds-dmeter__center"></span><span class="ds-dmeter__fill" style="left:50%;width:30%"></span></div></div>
<div class="ds-dmeter" style="--_c:var(--spectrum-teal)"><div class="ds-dmeter__top"><span class="ds-dmeter__label">temp vs nominal</span><span class="ds-dmeter__val">[mark m-cool] −0.8 σ</span></div><div class="ds-dmeter__track"><span class="ds-dmeter__center"></span><span class="ds-dmeter__fill" style="left:38%;width:12%"></span></div></div>}

card sparkline "Chart / sparkline" "A series at word size. Line in text color; the end value carries the status word." chart-sparkline {
<div class="row">
<span class="ds-spark" style="--_c:var(--status-high)"><svg class="ds-spark__svg" width="96" height="24" viewBox="0 0 96 24"><polyline fill="none" stroke="currentColor" stroke-width="1.5" points="0,18 12,16 24,17 36,12 48,14 60,9 72,10 84,4 96,2"/></svg><span class="ds-spark__end">42 s <span class="ds-spark__word">ALERT</span></span></span>
<span class="ds-spark"><svg class="ds-spark__svg" width="96" height="24" viewBox="0 0 96 24"><polyline fill="none" stroke="currentColor" stroke-width="1.5" points="0,12 12,10 24,13 36,11 48,12 60,10 72,12 84,11 96,12"/></svg><span class="ds-spark__end">0.8 s <span class="ds-spark__word">OK</span></span></span>
</div>}

card heatmap "Heatmap" "A grid of cells colored on the spectrum. Legend runs the full ramp; critical cells are called out." chart-sparkline {
<div class="ds-heat"><div class="ds-heat__grid" style="grid-template-columns:repeat(8,1.5rem)">
<button class="ds-heat__cell" style="background:var(--spectrum-teal)"></button><button class="ds-heat__cell" style="background:var(--spectrum-green)"></button><button class="ds-heat__cell" style="background:var(--spectrum-green)"></button><button class="ds-heat__cell" style="background:var(--spectrum-yellow)"></button><button class="ds-heat__cell" style="background:var(--spectrum-green)"></button><button class="ds-heat__cell" style="background:var(--spectrum-orange)"></button><button class="ds-heat__cell" style="background:var(--spectrum-red)"></button><button class="ds-heat__cell" style="background:var(--spectrum-green)"></button>
<button class="ds-heat__cell" style="background:var(--spectrum-purple)"></button><button class="ds-heat__cell" style="background:var(--spectrum-teal)"></button><button class="ds-heat__cell" style="background:var(--spectrum-green)"></button><button class="ds-heat__cell" style="background:var(--spectrum-green)"></button><button class="ds-heat__cell" style="background:var(--spectrum-yellow)"></button><button class="ds-heat__cell" style="background:var(--spectrum-green)"></button><button class="ds-heat__cell" style="background:var(--spectrum-green)"></button><button class="ds-heat__cell" style="background:var(--spectrum-plumb)">[mark m-critical]</button>
</div><div class="ds-heat__legend"><span class="ds-heat__legend-end">cold</span><span class="ds-heat__bar"></span><span class="ds-heat__legend-end">hot</span><span class="ds-heat__crit">[mark m-critical] 1 critical</span></div></div>}

card stat "Stat tile" "One number that matters, with unit, delta, and a sparkline or freshness in the foot." stat-tile {
<div class="row">
<div class="ds-stat" style="flex:1;--_c:var(--status-high)"><span class="ds-stat__label">replica lag</span><span class="ds-stat__value">42 <span class="ds-stat__unit">s</span></span><span class="ds-stat__delta">[mark m-warm] +38 s / 5 min</span><div class="ds-stat__foot"><span class="ds-fresh ds-fresh--live"><span class="ds-fresh__dot"></span>live</span></div></div>
<div class="ds-stat" style="flex:1"><span class="ds-stat__label">nodes</span><span class="ds-stat__value">14</span><span class="ds-stat__delta">[mark m-neutral] no change</span><div class="ds-stat__foot"><span class="ds-fresh"><span class="ds-fresh__dot"></span>12:04:10</span></div></div>
</div>}

card kv "Key-value list" "Facts about one thing, label then value. Two-column and three densities." key-value-list {
<dl class="ds-kv ds-kv--2col"><dt class="ds-kv__k">host</dt><dd class="ds-kv__v">db-03.prod</dd><dt class="ds-kv__k">role</dt><dd class="ds-kv__v">primary</dd><dt class="ds-kv__k">uptime</dt><dd class="ds-kv__v ds-kv__v--num">31 d 4 h</dd><dt class="ds-kv__k">lag</dt><dd class="ds-kv__v ds-kv__v--num">0.8 s</dd></dl>}

card log "Log view" "Streaming lines: timestamp, severity, message. Critical lines tint; scroll pauses the tail." log-view {
<div class="ds-log" style="--_h:9rem">
<div class="ds-log__line"><span class="ds-log__ts">12:04:08.112</span><span class="ds-log__sev" style="--_c:var(--status-low);--_on:var(--on-status-low)">[mark m-low] info</span><span>replication: applied 1024 wal segments</span></div>
<div class="ds-log__line"><span class="ds-log__ts">12:04:09.004</span><span class="ds-log__sev" style="--_c:var(--status-medium);--_on:var(--on-status-medium)">[mark m-medium] warn</span><span>replication: lag 12 s exceeds 10 s</span></div>
<div class="ds-log__line ds-log__line--critical"><span class="ds-log__ts">12:04:10.771</span><span class="ds-log__sev" style="--_c:var(--status-critical);--_on:var(--on-status-critical)">[mark m-critical] crit</span><span>heartbeat: no response from db-03 (30 s)</span></div>
<div class="ds-log__line"><span class="ds-log__ts">12:04:11.002</span><span class="ds-log__sev" style="--_c:var(--status-high);--_on:var(--on-status-high)">[mark m-high] alert</span><span>failover: armed, awaiting quorum</span></div>
<button class="ds-log__paused">[mark m-run] paused · 3 new</button>
</div>}

card freshness "Freshness indicator" "How current the data is: live, a timestamp, stale, or offline." freshness-indicator {
<div class="row">
<span class="ds-fresh ds-fresh--live"><span class="ds-fresh__dot"></span>live</span>
<span class="ds-fresh"><span class="ds-fresh__dot"></span>as of <span class="ds-fresh__at">12:04:10</span></span>
<span class="ds-fresh ds-fresh--stale"><span class="ds-fresh__dot"></span>stale · 6 min</span>
<span class="ds-fresh ds-fresh--offline"><span class="ds-fresh__dot"></span>offline</span>
</div>}

card timeline "Timeline" "Events in order, newest first or last, each with a time and a severity dot." timeline {
<ol class="ds-timeline">
<li class="ds-event" style="--_c:var(--status-critical);--_on:var(--on-status-critical)"><span class="ds-event__dot">[mark m-critical]</span><div class="ds-event__time">12:04:10</div><div class="ds-event__title">db-03 lost heartbeat</div><div class="ds-event__body">Failover armed, awaiting quorum.</div></li>
<li class="ds-event" style="--_c:var(--status-medium);--_on:var(--on-status-medium)"><span class="ds-event__dot">[mark m-medium]</span><div class="ds-event__time">12:04:09</div><div class="ds-event__title">Lag over threshold</div></li>
<li class="ds-event"><span class="ds-event__dot"></span><div class="ds-event__time">11:58:00</div><div class="ds-event__title">Deploy api v2.14.0</div></li>
</ol>}

card state "State panel" "Empty, loading, and error states for a region that has no content yet." catalog-specs-to-follow {
<div class="row">
<div class="ds-state" style="flex:1;min-height:8rem"><span class="ds-state__mark">[mark m-search]</span><span class="ds-state__title">No matches</span><span class="ds-state__msg">Nothing matches "db-9". Clear the filter.</span><button class="ds-btn ds-btn--ghost ds-btn--sm ds-state__action">Clear filter</button></div>
<div class="ds-state ds-state--loading" style="flex:1;min-height:8rem"><span class="ds-state__mark">[mark m-refresh]</span><span class="ds-state__title">Loading</span></div>
<div class="ds-state ds-state--error" style="flex:1;min-height:8rem"><span class="ds-state__mark">[mark m-critical]</span><span class="ds-state__title">Could not load</span><span class="ds-state__msg">Metrics API timed out.</span><button class="ds-btn ds-btn--ghost ds-btn--sm ds-state__action">Retry</button></div>
</div>
<div><span class="ds-skeleton ds-skeleton--text"></span><span class="ds-skeleton ds-skeleton--text"></span><span class="ds-skeleton ds-skeleton--text"></span></div>}

card shell "App shell" "The frame: brand and summary in the head, nav at left, main content." app-shell {
<div class="ds-shell" style="height:14rem;border:var(--border-width) solid var(--border)"><div class="ds-shell__head"><span class="ds-shell__brand">[mark m-hub] OPS</span><div class="ds-shell__summary"><span class="ds-badge" style="--_c:var(--status-critical);--_on:var(--on-status-critical)">[mark m-critical] 1</span><span class="ds-badge" style="--_c:var(--status-medium);--_on:var(--on-status-medium)">[mark m-medium] 3</span></div><div class="ds-shell__meta"><span class="ds-fresh ds-fresh--live"><span class="ds-fresh__dot"></span>live</span><div class="ds-shell__actions"><button class="ds-btn ds-btn--text ds-btn--sm">[mark m-bell]</button><button class="ds-btn ds-btn--text ds-btn--sm">[mark m-user]</button></div></div></div><nav class="ds-shell__nav"><ul class="ds-menu ds-menu--sidebar"><li><a class="ds-menu__item" href="#" aria-current="page">[mark m-hub]<span class="ds-menu__label">Fleet</span></a></li><li><a class="ds-menu__item" href="#">[mark m-event]<span class="ds-menu__label">Events</span></a></li></ul></nav><main class="ds-shell__main">Main content.</main></div>}

card seg "Segmented control · Theme · Mode" "A pill radio group. The theme picker draws each theme's emblem in its own accent; the mode picker follows the OS or forces light/dark." segmented-control-theme-picker-mode-picker {
<div class="row">
<div class="ds-seg ds-seg--theme" role="radiogroup" aria-label="theme (demo)"><button class="ds-seg__btn" role="radio" aria-checked="true" style="--_c:#00E5FF" aria-label="tron">[mark m-tron]</button><button class="ds-seg__btn" role="radio" aria-checked="false" style="--_c:#03A062" aria-label="matrix">[mark m-matrix]</button><button class="ds-seg__btn" role="radio" aria-checked="false" style="--_c:#FF8A00" aria-label="compaq">[mark m-compaq]</button></div>
<div class="ds-seg" role="radiogroup" aria-label="mode (demo)"><button class="ds-seg__btn" role="radio" aria-checked="false" aria-label="system">[mark m-screen]</button><button class="ds-seg__btn" role="radio" aria-checked="false" aria-label="light">[mark m-sun]</button><button class="ds-seg__btn" role="radio" aria-checked="true" aria-label="dark">[mark m-moon]</button></div>
<div class="ds-seg" role="radiogroup" aria-label="density"><button class="ds-seg__btn" role="radio" aria-checked="false">Compact</button><button class="ds-seg__btn" role="radio" aria-checked="true">Comfortable</button><button class="ds-seg__btn" role="radio" aria-checked="false" disabled>Dense</button></div>
</div>
<p class="prose" style="margin:0">The live pickers in the sidebar are this component.</p>}

card range "Slider (range)" "The native range input, styled. Always pair it with a visible value." slider-range {
<div class="ds-field"><label class="ds-field__label" for="g-rng">alert threshold · <output id="g-rng-out">70</output>%</label><input class="ds-range" id="g-rng" type="range" min="0" max="100" value="70" style="--_v:70%" oninput="this.style.setProperty('--_v', this.value + '%'); document.getElementById('g-rng-out').value = this.value"></div>
<div class="ds-field"><label class="ds-field__label" for="g-rng2">locked</label><input class="ds-range" id="g-rng2" type="range" value="40" style="--_v:40%" disabled></div>}

card rating "Rating · Bookmark" "Stars are a radio group that fills to the chosen one; bookmark is a pressed toggle. Fill is never the only readout." rating-bookmark {
<div class="row">
<span class="ds-rating" role="radiogroup" aria-label="rate">
<label class="ds-rating__star"><input class="ds-rating__input" type="radio" name="g-rate" value="1">[mark m-star]</label><label class="ds-rating__star"><input class="ds-rating__input" type="radio" name="g-rate" value="2">[mark m-star]</label><label class="ds-rating__star"><input class="ds-rating__input" type="radio" name="g-rate" value="3" checked>[mark m-star]</label><label class="ds-rating__star"><input class="ds-rating__input" type="radio" name="g-rate" value="4">[mark m-star]</label><label class="ds-rating__star"><input class="ds-rating__input" type="radio" name="g-rate" value="5">[mark m-star]</label>
<span class="ds-rating__count">3/5</span></span>
<span class="ds-rating ds-rating--readonly" aria-label="4 of 5">
<label class="ds-rating__star"><input class="ds-rating__input" type="radio" disabled>[mark m-star]</label><label class="ds-rating__star"><input class="ds-rating__input" type="radio" disabled>[mark m-star]</label><label class="ds-rating__star"><input class="ds-rating__input" type="radio" disabled>[mark m-star]</label><label class="ds-rating__star"><input class="ds-rating__input" type="radio" disabled checked>[mark m-star]</label><label class="ds-rating__star"><input class="ds-rating__input" type="radio" disabled>[mark m-star]</label>
<span class="ds-rating__count">4.0 · 128</span></span>
</div>
<div class="row">
<button class="ds-bookmark" aria-pressed="true" onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') !== 'true')">[mark m-bookmark] Saved</button>
<button class="ds-bookmark" aria-pressed="false" onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') !== 'true')">[mark m-bookmark] Save</button>
</div>}

card share "Share" "A ghost button that opens a popover menu of destinations. An action, never a state." share {
<div class="row" style="align-items:flex-start">
<button class="ds-btn ds-btn--ghost ds-btn--sm">[mark m-share] Share</button>
<ul class="ds-menu ds-menu--popover"><li class="ds-menu__heading">share dashboard</li><li><button class="ds-menu__item">[mark m-external]<span class="ds-menu__label">Copy link</span><span class="ds-menu__hint">⌘C</span></button></li><li><button class="ds-menu__item">[mark m-download]<span class="ds-menu__label">Export PNG</span></button></li><li><button class="ds-menu__item">[mark m-send]<span class="ds-menu__label">Send to #ops-prod</span></button></li></ul>
</div>}

card tree "Tree view" "Nested disclosure. Branches are summaries with a twist; the current node is selected." tree-view {
<ul class="ds-tree">
<li><details open><summary><span class="ds-tree__twist">[mark m-chevron]</span>[mark m-hub] prod-east<span class="ds-tree__hint">14</span></summary>
<ul>
<li><details open><summary><span class="ds-tree__twist">[mark m-chevron]</span>[mark m-system] db<span class="ds-tree__hint">3</span></summary>
<ul><li><a class="ds-tree__leaf" href="#" aria-current="true">db-03 · primary</a></li><li><a class="ds-tree__leaf" href="#">db-04</a></li><li><a class="ds-tree__leaf" href="#">db-05</a></li></ul></details></li>
<li><details><summary><span class="ds-tree__twist">[mark m-chevron]</span>[mark m-system] api<span class="ds-tree__hint">11</span></summary><ul><li><a class="ds-tree__leaf" href="#">api-01</a></li></ul></details></li>
</ul></details></li>
<li><details><summary><span class="ds-tree__twist">[mark m-chevron]</span>[mark m-hub] prod-west<span class="ds-tree__hint">9</span></summary><ul><li><a class="ds-tree__leaf" href="#">db-11</a></li></ul></details></li>
</ul>}

card accordion "Accordion" "A stack of disclosures on one surface. Any number open; use tabs when exactly one should show." accordion {
<div class="ds-acc">
<details open><summary><span class="ds-tree__twist">[mark m-chevron]</span>What happened</summary><div class="ds-acc__body">db-03 stopped answering heartbeats at 12:04:10. Replicas are serving reads.</div></details>
<details><summary><span class="ds-tree__twist">[mark m-chevron]</span>Why</summary><div class="ds-acc__body">Write burst from the batch importer saturated the WAL volume.</div></details>
<details><summary><span class="ds-tree__twist">[mark m-chevron]</span>What to do</summary><div class="ds-acc__body">Pause the importer, then promote db-04 if db-03 is not back within 5 min.</div></details>
</div>}

card skip "Skip link" "First focusable element on the page; visible only on focus. Shown pinned here." skip-link-kbd {
<a class="ds-skip" href="#main">Skip to content</a>}

card kbd "Kbd" "A key or chord, as keycaps." skip-link-kbd {
<p>Open the palette with <span class="ds-kbd"><kbd>⌘</kbd><span class="ds-kbd__plus">+</span><kbd>K</kbd></span>, search with <span class="ds-kbd"><kbd>/</kbd></span>.</p>}

# ---------- page ----------
set pickersHtml [pickers]
set index ""; set body ""
foreach c $cards {
    lassign $c id title desc anchor html
    append index "<li><a href=\"#$id\">$title</a></li>\n"
    append body "<section class=\"g\" id=\"$id\"><h2>$title</h2><p class=\"prose\">$desc <a href=\"manual/06-components-states.md#$anchor\">manual §</a></p><div class=\"ex\">[subst -novariables $html]</div></section>\n"
}
set n [llength $cards]

set html [subst -nocommands -nobackslashes {<!doctype html>
<html lang="en" data-theme="tron" data-mode="dark">
<head>
<meta charset="utf-8">
<title>Design system — component gallery</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="styles.css">
<style>
/* page layout only — components come from styles.css */
* { box-sizing: border-box }
html { background: var(--bg); color: var(--text); font: var(--weight-regular) var(--text-body)/var(--leading-snug) var(--font-mono) }
body { margin: 0; display: grid; grid-template-columns: 14rem 1fr; min-height: 100vh }
aside { position: sticky; top: 0; height: 100vh; overflow: auto; padding: var(--space-3) var(--space-2); border-right: var(--border-width) solid var(--edge); background: var(--surface) }
aside h1 { font-size: var(--text-h3); text-transform: uppercase; letter-spacing: var(--tracking-label); margin: 0 0 var(--space-2); color: var(--accent) }
[data-mode="dark"] aside h1 { text-shadow: var(--glow-text-ambient) }
aside .ds-seg { margin-bottom: var(--space-1) }
aside ol { list-style: none; margin: var(--space-2) 0 0; padding: 0; font-size: var(--text-caption) }
aside li a { display: block; color: var(--muted); text-decoration: none; padding: 2px 0 } aside li a:hover { color: var(--text) }
main { padding: var(--space-3); display: grid; grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr)); gap: var(--space-3); align-content: start }
.g { background: var(--surface); border: var(--border-width) solid var(--edge); border-radius: var(--radius-lg); padding: var(--space-3); min-width: 0; scroll-margin-top: var(--space-3); transition: border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard) }
.g:hover { border-color: var(--accent); box-shadow: var(--glow-box-ambient) }
.g h2 { font-size: var(--text-h3); text-transform: uppercase; letter-spacing: var(--tracking-label); margin: 0 0 var(--space-1) }
.prose { font-family: var(--font-prose); font-size: var(--text-small); line-height: var(--leading-normal); color: var(--muted); margin: 0 0 var(--space-2) }
.prose a { color: var(--accent) }
.ex { background: var(--bg); border: var(--border-width) dashed var(--edge); border-radius: var(--radius-md); padding: var(--space-3); display: flex; flex-direction: column; gap: var(--space-2); position: relative; overflow: hidden }
.row { display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center }
.col { display: flex; flex-direction: column; gap: var(--space-1) }
.mark { width: 1em; height: 1em; stroke: currentColor; fill: none; vertical-align: -0.15em }
.ds-btn__spin .mark, .ds-state__mark .mark { width: 1.25em; height: 1.25em }
/* pin fixed-position overlays into their card */
.ex .ds-scrim { position: relative; inset: auto; height: 16rem; animation: none; z-index: auto }
.ex .ds-modal, .ex .ds-drawer { animation: none }
.ex .ds-toasts { position: static; width: 100%; pointer-events: auto }
.ex .ds-skip { position: static; transform: none; opacity: 1; align-self: flex-start }
</style>
</head>
<body>
$sprite
<aside>
<h1>Gallery</h1>
$pickersHtml
<ol>$index</ol>
<p class="prose">$n components · <a href="specimen.html">specimen</a></p>
</aside>
<main>
$body
</main>
$pickerScript
</body>
</html>
}]
set f [open gallery.html w]; puts -nonewline $f $html; close $f
puts "wrote gallery.html ($n components)"
