# Design system — verification and the specimen.
# Host side needs only tclsh. Node steps run inside the `design-system`
# distrobox (never on the host); create it once with:
#   distrobox create -n design-system -i docker.io/library/node:22
BOX   = distrobox enter design-system --
NODE_DIR = tools/contrast

.PHONY: check tcl-check css-fresh apca lint css specimen

check: tcl-check css-fresh apca lint   ## everything; non-zero on any failure

tcl-check:                        ## edn parse, hex drift, links (host)
	tclsh tools/check.tcl

apca: $(NODE_DIR)/node_modules    ## APCA contrast on chrome + data color (distrobox)
	$(BOX) node $(NODE_DIR)/verify.mjs

lint:                             ## markdownlint on authored docs (distrobox); the GRID·OPS bundle is excluded
	$(BOX) npx --yes markdownlint-cli design.md 'manual/*.md' 'tools/*/*.md'

css:                              ## regenerate tokens/*.css from tokens/**/*.edn
	tclsh tools/css.tcl

css-fresh:                        ## fail if tokens/*.css is stale vs the edn
	@rm -rf .css-fresh && mkdir .css-fresh && tclsh tools/css.tcl .css-fresh >/dev/null \
	  && for f in colors typography spacing effects; do diff -u tokens/$$f.css .css-fresh/$$f.css || exit 1; done \
	  && rm -rf .css-fresh && echo "css: fresh"

specimen:                         ## regenerate specimen.html from tokens/
	tclsh tools/specimen.tcl

$(NODE_DIR)/node_modules: $(NODE_DIR)/package-lock.json
	$(BOX) sh -c 'cd $(NODE_DIR) && npm ci'
