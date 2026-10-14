/* App.jsx — Operations Console orchestrator. Fake auth + nav + theme state ties
 * the screens together. Mounts into #root.
 */
const { Card, Button, Mark, StatusBadge } = window.DesignSystem_019de4;

function Placeholder({ title, line }) {
  return (
    <Card density="comfortable">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-1)", padding: "var(--space-5)", color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
        <Mark name="m-unknown" size={28} />
        <span style={{ fontSize: "var(--text-h3)", color: "var(--text)" }}>{title}</span>
        <span style={{ fontSize: "var(--text-small)" }}>{line}</span>
      </div>
    </Card>
  );
}

function Toast({ toast, onClose }) {
  if (!toast) return null;
  return (
    <div style={{ position: "fixed", right: "var(--space-3)", bottom: "var(--space-3)", zIndex: 60, width: 320 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--status-low)", borderRadius: "var(--radius-md)", padding: "var(--space-2)" }}>
        <Mark name="m-low" size={16} style={{ color: "var(--status-low)" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-small)", color: "var(--text)" }}>{toast}</span>
        <button onClick={onClose} style={{ marginLeft: "auto", background: "none", border: "none", color: "var(--muted)", cursor: "pointer", display: "inline-flex" }}>
          <Mark name="m-close" size={14} />
        </button>
      </div>
    </div>
  );
}

function App() {
  const data = window.OPS_DATA;
  const [authed, setAuthed] = React.useState(true);
  const [theme, setTheme] = React.useState("tron");
  const [nav, setNav] = React.useState("grid");
  const [sel, setSel] = React.useState(null);
  const [toast, setToast] = React.useState(null);

  React.useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]);
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  if (!authed) return <window.LoginScreen onAuth={() => setAuthed(true)} />;

  const selectNode = (id) => { setSel(id); setNav("grid"); };
  const node = sel && data.nodes.find((n) => n.id === sel);

  let screen;
  if (nav === "grid") {
    screen = node
      ? <window.NodeDetail node={node} onBack={() => setSel(null)} onDrain={(n) => { setSel(null); setToast("Drained " + n.id + "."); }} />
      : <window.GridDashboard data={data} onSelectNode={selectNode} />;
  } else if (nav === "alerts") {
    screen = <window.AlertsView data={data} onSelectNode={selectNode} />;
  } else if (nav === "nodes") {
    screen = <window.GridDashboard data={data} onSelectNode={selectNode} />;
  } else if (nav === "policy") {
    screen = <Placeholder title="Policy" line="No policy changes in window. Pattern omitted from this kit." />;
  } else {
    screen = <Placeholder title="Settings" line="Sectioned key-value editor. Pattern omitted from this kit." />;
  }

  return (
    <window.Shell active={nav} onNav={(n) => { setNav(n); if (n !== "grid") setSel(null); }} summary={data.summary} theme={theme} onTheme={setTheme} onLogout={() => { setAuthed(false); setSel(null); setNav("grid"); }}>
      {screen}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </window.Shell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
