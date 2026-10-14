/* LoginScreen.jsx — the auth gate. Terse, operational, centered. No marketing
 * copy. Composes Input + Button; any non-empty key authenticates (mock).
 */
const { Input, Button, Mark, StatusBadge } = window.DesignSystem_019de4;

function LoginScreen({ onAuth }) {
  const [op, setOp] = React.useState("ops.kestrel");
  const [key, setKey] = React.useState("");
  const submit = (e) => { e.preventDefault(); if (key.trim()) onAuth(); };
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)" }}>
      <form onSubmit={submit} style={{
        width: 380, maxWidth: "90vw", background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)", padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-3)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)" }}>
          <Mark name="m-settings" size={22} style={{ color: "var(--accent)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "var(--text-h2)", color: "var(--accent)", textShadow: "var(--glow-text-ambient)" }}>GRID·OPS</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", fontFamily: "var(--font-mono)", fontSize: "var(--text-caption)", color: "var(--muted)" }}>
          <Mark name="m-lock" size={13} /> Operator authentication required.
        </div>
        <Input label="Operator" value={op} onChange={(e) => setOp(e.target.value)} icon="m-user" />
        <Input label="Access key" type="password" value={key} onChange={(e) => setKey(e.target.value)} icon="m-lock" placeholder="••••••••" helper="Any non-empty key (mock)." />
        <Button variant="primary" size="lg" icon="m-upload" type="submit">Engage</Button>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", justifyContent: "center" }}>
          <StatusBadge step="low" label="GRID NOMINAL" variant="plain" size={13} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)", color: "var(--muted)" }}>· 02:14Z</span>
        </div>
      </form>
    </div>
  );
}

Object.assign(window, { LoginScreen });
