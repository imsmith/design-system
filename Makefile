# Design system — verification and the specimen.
# Host side needs only tclsh. Node steps run inside the `design-system`
# distrobox (never on the host); create it once with:
#   distrobox create -n design-system -i docker.io/library/node:22
BOX   = distrobox enter design-system --
NODE_DIR = tools/contrast

.PHONY: check tcl-check apca lint specimen

check: tcl-check apca lint        ## everything; non-zero on any failure

tcl-check:                        ## edn parse, hex drift, links (host)
	tclsh tools/check.tcl

apca: $(NODE_DIR)/node_modules    ## APCA contrast on chrome + data color (distrobox)
	$(BOX) node $(NODE_DIR)/verify.mjs

lint:                             ## markdownlint on authored docs (distrobox); the GRID·OPS bundle is excluded
	$(BOX) npx --yes markdownlint-cli design.md 'manual/*.md' 'tools/*/*.md'

specimen:                         ## regenerate specimen.html from tokens/
	tclsh tools/specimen.tcl

$(NODE_DIR)/node_modules: $(NODE_DIR)/package-lock.json
	$(BOX) sh -c 'cd $(NODE_DIR) && npm ci'
