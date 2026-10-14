#!/usr/bin/env tclsh
# check.tcl — host-side consistency checks. Run from the repo root: tclsh tools/check.tcl
#   1. every tokens/**/*.edn parses as a single map
#   2. every hex literal in markdown exists in some edn file (no value drift)
#   3. every relative link / backticked repo path in markdown resolves
#   4. no CSS file contains "**/" (closes a comment early; bit us twice)
#   5. every :id in tokens/marks.edn has a <symbol> in the sprite, and vice versa
# Exits non-zero on any failure. APCA and markdownlint live in the Makefile.

source [file join [file dirname [info script]] tcl edn.tcl]
set fails 0
proc fail {msg} { global fails; incr fails; puts "FAIL $msg" }

set edns [lsort [concat [glob tokens/*.edn] [glob tokens/color/*.edn]]]
set mds  [lsort [concat [glob *.md] [glob manual/*.md] [glob tools/*/*.md]]]
proc slurp {p} { set f [open $p r]; fconfigure $f -encoding utf-8; set s [read $f]; close $f; return $s }

# 1. parse
set hexes {}
foreach e $edns {
    if {[catch {edn::read $e} d]} { fail "edn $e: $d"; continue }
    foreach h [regexp -all -inline {#[0-9A-Fa-f]{3,6}\M} [slurp $e]] { dict set hexes [string tolower $h] 1 }
}
puts "edn: [llength $edns] files parsed, [dict size $hexes] hex values"

# 2. hex drift + 3. links
foreach m $mds {
    set text [slurp $m]
    foreach h [regexp -all -inline {#[0-9A-Fa-f]{6}\M|#[0-9A-Fa-f]{3}\M} $text] {
        if {![dict exists $hexes [string tolower $h]]} { fail "hex $m: $h not in any edn" }
    }
    # Only paths with a directory part claim a location; bare names are just names.
    foreach {_ p} [regexp -all -inline {`([A-Za-z0-9_.-]+/[A-Za-z0-9_./-]+\.(?:md|edn|svg|mjs|css|js))`} $text] {
        if {![file exists $p] && ![file exists tokens/$p] && ![file exists tokens/color/$p]} { fail "path $m: `$p` does not exist" }
    }
    foreach {_ p} [regexp -all -inline {\]\(([^)#:]+)\)} $text] {
        if {![file exists [file join [file dirname $m] $p]]} { fail "link $m: ($p) does not resolve" }
    }
}
# 4. a "**/" inside a CSS comment closes it early and silently eats the next rule
foreach c [concat [glob styles.css] [glob tokens/*.css]] {
    if {[string first "**/" [slurp $c]] >= 0} { fail "css $c: contains **/ (closes a comment early)" }
}
puts "markdown: [llength $mds] files checked"
# 5. the marks registry and the sprite must agree (ids both ways)
set ids [lsort [lmap {_ id} [regexp -all -inline {:id\s+"(m-[a-z0-9-]+)"} [slurp tokens/marks.edn]] {set id}]]
set syms [lsort [lmap {_ id} [regexp -all -inline {<symbol id="(m-[a-z0-9-]+)"} [slurp assets/marks/sprite.svg]] {set id}]]
if {$ids ne $syms} {
    set ednOnly {}; foreach i $ids  { if {$i ni $syms} { lappend ednOnly $i } }
    set svgOnly {}; foreach s $syms { if {$s ni $ids}  { lappend svgOnly $s } }
    fail "marks: registry/sprite mismatch; edn only: $ednOnly; svg only: $svgOnly"
}
puts "marks: [llength $ids] registered, [llength $syms] in sprite"
puts [expr {$fails ? "FAILURES: $fails" : "OK"}]
exit [expr {$fails > 0}]
