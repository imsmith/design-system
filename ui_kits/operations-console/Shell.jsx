/* Shell.jsx — the Operations Console chrome: top header bar + left nav rail.
 * Composes design-system primitives (Mark, StatusBadge, Button). Pure chrome;
 * the active screen is passed as children.
 */
const { Mark, StatusBadge, Button } = window.DesignSystem_019de4;

const NAV = [
  { id: "grid", label: "Grid", icon: "m-menu" },
  { id: "alerts", label: "Alerts", icon: "m-bell" },
  { id: "nodes", label: "Nodes", icon: "m-user" },
  { id: "policy", label: "Policy", icon: "m-lock" },
  { id: "settings", label: "Settings", icon: "m-settings" },
];

function ThemeSwitch({ theme, onTheme }) {
  const opts = [
    { id: "tron", c: "#00E5FF" },
    { id: "matrix", c: "#03A062" },
    { id: "compaq", c: "#FF8A00" },
  ];
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {opts.map((o) => (
        <button
          key={o.id}
          title={"Theme: " + o.id}
          onClick={() => onTheme(o.id)}
          style={{
            width: 18, height: 18, borderRadius: 999, cursor: "pointer",
            background: o.c, border: theme === o.id ? "2px solid var(--text)" : "2px solid transparent",
            boxShadow: theme === o.id ? "0 0 8px " + o.c : "none", padding: 0,
          }}
        />
      ))}
    </div>
  );
}

function Shell({ active, onNav, summary, theme, onTheme, onLogout, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gridTemplateRows: "52px 1fr", height: "100%", background: "var(--bg)" }}>
      {/* Header */}
      <header style={{
        gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: "var(--space-3)",
        padding: "0 var(--space-3)", borderBottom: "1px solid var(--border)", background: "var(--surface)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", minWidth: 168 }}>
          <Mark name="m-settings" size={18} style={{ color: "var(--accent)" }} />
          <span style={{
            fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "var(--text-h3)",
            color: "var(--accent)", textShadow: "var(--glow-text-ambient)", letterSpacing: "0.02em",
          }}>GRID·OPS</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginLeft: "var(--space-2)" }}>
          {summary.down > 0 && <StatusBadge step="critical" label={summary.down + " DOWN"} pulse />}
          {summary.alert > 0 && <StatusBadge step="high" label={summary.alert + " ALERT"} />}
          {summary.warn > 0 && <StatusBadge step="medium" label={summary.warn + " WARN"} />}
          <StatusBadge step="low" label={summary.ok + " OK"} />
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)", color: "var(--muted)", fontVariantNumeric: "tabular-nums" }}>
            02:14:31Z · LIVE
          </span>
          <ThemeSwitch theme={theme} onTheme={onTheme} />
          <Mark name="m-bell" size={18} style={{ color: "var(--muted)" }} />
          <button onClick={onLogout} title="Log out" style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "inline-flex" }}>
            <Mark name="m-user" size={18} style={{ color: "var(--muted)" }} />
          </button>
        </div>
      </header>

      {/* Nav rail */}
      <nav style={{ borderRight: "1px solid var(--border)", background: "var(--surface)", padding: "var(--space-2) var(--space-1)", display: "flex", flexDirection: "column", gap: 2 }}>
        {NAV.map((n) => {
          const on = active === n.id;
          return (
            <button key={n.id} onClick={() => onNav(n.id)} style={{
              display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "var(--space-1) var(--space-2)",
              fontFamily: "var(--font-mono)", fontSize: "var(--text-small)", textTransform: "uppercase",
              letterSpacing: "var(--tracking-label)", cursor: "pointer", borderRadius: "var(--radius-md)",
              border: "none", textAlign: "left",
              background: on ? "var(--accent-tint)" : "transparent",
              color: on ? "var(--text)" : "var(--muted)",
              boxShadow: on ? "inset 3px 0 0 var(--accent)" : "none",
            }}>
              <Mark name={n.icon} size={16} style={{ color: on ? "var(--accent)" : "var(--muted)" }} />
              {n.label}
            </button>
          );
        })}
        <div style={{ marginTop: "auto", padding: "var(--space-2)", fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)", color: "var(--muted)", lineHeight: 1.6 }}>
          <div>{summary.total} NODES</div>
          <div>4 SECTORS</div>
        </div>
      </nav>

      {/* Content */}
      <main style={{ overflow: "auto", padding: "var(--space-3)" }}>{children}</main>
    </div>
  );
}

Object.assign(window, { Shell });
