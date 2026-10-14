# edn.tcl — read an edn file into a Tcl dict.
#
# edn maps are braces, which Tcl already parses as lists; this just strips
# comments and commas (outside strings) and turns vectors into lists.
# ponytail: no sets (#{}), tagged literals, or escaped quotes in strings —
# the token files use none; add a real tokenizer when one appears.

namespace eval edn {}

# With -mark, every string value is prefixed with \x01 and every vector gets a
# leading \x02 element, so a consumer can tell "a b" from [a b] and [x] from x —
# Tcl list parsing erases both distinctions otherwise. The default (unmarked)
# is what css.tcl/specimen.tcl want.
proc edn::read {path {flag ""}} {
    set f [open $path r]; fconfigure $f -encoding utf-8
    set text [::read $f]; close $f
    set out ""
    set mark [expr {$flag eq "-mark" ? "\x01" : ""}]
    set vec  [expr {$flag eq "-mark" ? "\x02 " : ""}]
    # Tokenize left to right: comment | string | code. Rewrite only code.
    foreach {_ str code} [regexp -all -inline {;[^\n]*|("[^"]*")|([^";]+)} $text] {
        if {$str ne ""} { set str "\"$mark[string range $str 1 end]" }
        append out $str [string map [list "\[" "\{$vec" "\]" "\}" "," " "] $code]
    }
    set d [lindex $out 0]
    if {[llength $out] != 1 || [llength $d] % 2} { error "$path: not a single edn map" }
    return $d
}
