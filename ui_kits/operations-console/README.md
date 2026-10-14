# Operations Console — UI kit

A high-fidelity recreation of the **implied product** of this design system: a grid
operations console (NOC) for monitoring many nodes at once. The source repo is a pure
design manual with no shipping product UI — this kit composes the documented components
and patterns into the surface the manual keeps pointing at (`Grid › Sector 12 › node-13`,
`cpu [████████░░] 82% WARN`, the status-at-scale heatmap).

Everything here is built from the design-system primitives (`window.DesignSystem_019de4`)
— no component is re-implemented. Data in `data.js` is synthetic.

## Screens & patterns

- **Login** (`LoginScreen.jsx`) — the auth gate; terse, no marketing copy. Reach it via the header user icon (log out).
- **Grid dashboard** (`GridDashboard.jsx`) — the signature view: the status-at-scale **Heatmap**, stat tiles, hot-node small-multiples, grid resource meters, and a dense node table (compact density).
- **Node detail** (`NodeDetail.jsx`) — detail view: breadcrumb + record header + property grid + resource meters + p99 sparkline, plus the **destructive-confirm** flow (drain node: type-to-confirm, critical verb button).
- **Alerts** (`AlertsView.jsx`) — the alerting pattern: severity banners over an alert log; acknowledge clears a banner; empty state when clear.

## Interactions

- Click any heatmap cell, hot node, or table row → node detail.
- Top-left theme dots switch the chrome skin (Tron / Matrix / Compaq); data color stays invariant.
- Drain a node → type-to-confirm modal → success toast.
- Nav rail switches Grid / Alerts; Policy & Settings are intentionally stubbed (no source design to copy).

## Run

Open `index.html`. It loads `styles.css`, the mark sprite injector, React + Babel, the
compiled `_ds_bundle.js`, then the screen modules. Requires the bundle to be compiled
(it is regenerated automatically from the component sources).
