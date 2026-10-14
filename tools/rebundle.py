#!/usr/bin/env python3
"""rebundle.py — re-transpile changed components into _ds_bundle.js.

The bundle is one try-block per component; its first line is a JSON header
listing components and source sha256 prefixes. This rebuilds only the sections
whose source hash no longer matches, splices them in place, and rewrites the
header. _ds_manifest.json carries no hashes and is left alone. Run inside the
distrobox:
    make bundle
Python because the bundle format is JSON-described; esbuild does the JSX.
"""
import hashlib, json, re, subprocess, sys, pathlib

root = pathlib.Path(__file__).resolve().parent.parent
bundle_p = root / "_ds_bundle.js"
bundle = bundle_p.read_text()
manifest = json.loads(re.match(r"/\* @ds-bundle: (.*?) \*/", bundle, re.S).group(1))
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()[:12]

def transpile(path, name):
    src = (root / path).read_text()
    imports = re.findall(r'^import\s+\{([^}]*)\}\s+from\s+"[^"]*";?\s*$', src, re.M)
    src = re.sub(r'^import[^\n]*\n', '', src, flags=re.M)
    src = re.sub(r'^export\s+(function|const|class)\b', r'\1', src, flags=re.M)
    names = [n.strip() for grp in imports for n in grp.split(",") if n.strip() and n.strip() != "React"]
    pre = f"const {{ {', '.join(names)} }} = __ds_scope;\n" if names else ""
    js = subprocess.run(["npx", "--yes", "esbuild", "--loader=jsx", "--jsx=transform", "--log-level=error"],
                        input=pre + src, capture_output=True, text=True, check=True).stdout
    return (f"// {path}\ntry {{ (() => {{\n{js}Object.assign(__ds_scope, {{ {name} }});\n"
            f"}})(); }} catch (e) {{ __ds_ns.__errors.push({{ path: \"{path}\", error: String((e && e.message) || e) }}); }}\n")

changed = []
for c in manifest["components"]:
    path, name = c["sourcePath"], c["name"]
    if manifest["sourceHashes"].get(path) == sha(path):
        continue
    start = bundle.index(f"// {path}\n")
    m = re.compile(r"\n// (?:components|assets)/|\n__ds_ns\.").search(bundle, start + 1)
    bundle = bundle[:start] + transpile(path, name) + bundle[m.start() + 1:]
    changed.append(path)

for path in manifest["sourceHashes"]:
    manifest["sourceHashes"][path] = sha(path)
header = json.dumps({k: manifest[k] for k in manifest}, separators=(",", ":"))
bundle = re.sub(r"^/\* @ds-bundle: .*? \*/", f"/* @ds-bundle: {header} */", bundle, count=1, flags=re.S)
bundle_p.write_text(bundle)
print("rebuilt:", ", ".join(changed) or "nothing (all hashes current)")
