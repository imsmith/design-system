# Design system — verification and the specimen.
# Host side needs only tclsh. Node steps run inside the `design-system`
# distrobox (never on the host); create it once with:
#   distrobox create -n design-system -i docker.io/library/node:22
BOX   = distrobox enter design-system --
NODE_DIR = tools/contrast

.PHONY: check tcl-check gen-fresh apca lint css elixir gen specimen

check: tcl-check gen-fresh apca lint   ## everything; non-zero on any failure

tcl-check:                        ## edn parse, hex drift, links (host)
	tclsh tools/check.tcl

apca: $(NODE_DIR)/node_modules    ## APCA contrast on chrome + data color (distrobox)
	$(BOX) node $(NODE_DIR)/verify.mjs

lint:                             ## markdownlint (distrobox)
	$(BOX) npx --yes markdownlint-cli design.md 'manual/*.md' 'tools/*/*.md'

css:                              ## regenerate tokens/*.css from tokens/**/*.edn
	tclsh tools/css.tcl

elixir:                           ## regenerate tokens/design_system_tokens.ex from the edn
	tclsh tools/elixir.tcl

gen: css elixir                   ## all generated serializations

gen-fresh:                        ## fail if any generated file is stale vs the edn
	@rm -rf .gen-fresh && mkdir .gen-fresh && tclsh tools/css.tcl .gen-fresh >/dev/null && tclsh tools/elixir.tcl .gen-fresh >/dev/null \
	  && for f in colors.css typography.css spacing.css effects.css design_system_tokens.ex; do diff -u tokens/$$f .gen-fresh/$$f || exit 1; done \
	  && rm -rf .gen-fresh && echo "generated: fresh"

specimen:                         ## regenerate specimen.html from tokens/
	tclsh tools/specimen.tcl

$(NODE_DIR)/node_modules: $(NODE_DIR)/package-lock.json
	$(BOX) sh -c 'cd $(NODE_DIR) && npm ci'
