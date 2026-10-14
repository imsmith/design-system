/* AlertsView.jsx — the alerting pattern: active alerts as severity banners over
 * a dense alert table. Wording follows the voice rules (what happened · why ·
 * what to do). Acknowledge clears a banner.
 */
const { Card, Alert, Button, StatusBadge, Mark, Tag } = window.DesignSystem_019de4;

function AlertsView({ data, onSelectNode }) {
  const [acked, setAcked] = React.useState([]);
  const active = data.alerts.filter((a) => !acked.includes(a.id));
  const ack = (id) => setAcked((x) => [...x, id]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
        <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-h2)", margin: 0 }}>Active alerts</h2>
        <Tag accent>{active.length}</Tag>
        <div style={{ marginLeft: "auto" }}>
          <Button variant="ghost" size="sm" icon="m-bell">Mute 30m</Button>
        </div>
      </div>

      {active.length === 0 ? (
        <Card density="comfortable">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-1)", padding: "var(--space-4)", color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
            <Mark name="m-low" size={28} style={{ color: "var(--status-low)" }} />
            <span style={{ fontSize: "var(--text-small)" }}>No active alerts. Grid nominal.</span>
          </div>
        </Card>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          {active.map((a) => (
            <Alert key={a.id} severity={a.severity} pulse={a.severity === "critical"} title={a.title}
              onDismiss={() => ack(a.id)}
              actions={
                <React.Fragment>
                  <Button variant="ghost" size="sm" icon="m-search" onClick={() => onSelectNode(a.node)}>Inspect {a.node}</Button>
                  <Button variant="text" size="sm" onClick={() => ack(a.id)}>Acknowledge</Button>
                </React.Fragment>
              }>
              {a.body}
            </Alert>
          ))}
        </div>
      )}

      <Card title="Alert log" density="compact" flush>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-mono)", fontSize: "var(--text-small)" }}>
          <thead>
            <tr style={{ textAlign: "left", color: "var(--muted)", fontSize: "var(--text-caption)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)" }}>
              <th style={c()}>ID</th>
              <th style={c()}>Severity</th>
              <th style={c()}>Node</th>
              <th style={c()}>Message</th>
              <th style={{ ...c(), textAlign: "right" }}>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.alerts.map((a) => (
              <tr key={a.id} style={{ borderTop: "1px solid color-mix(in srgb, var(--border) 40%, transparent)" }}>
                <td style={{ ...d(), color: "var(--muted)" }}>{a.id}</td>
                <td style={d()}><StatusBadge step={a.severity} variant="plain" size={13} /></td>
                <td style={{ ...d(), color: "var(--accent)", cursor: "pointer" }} onClick={() => onSelectNode(a.node)}>{a.node}</td>
                <td style={{ ...d(), color: "var(--text)", maxWidth: 360, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.title}</td>
                <td style={{ ...d(), textAlign: "right", color: "var(--muted)", fontVariantNumeric: "tabular-nums" }}>{a.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function c() { return { padding: "var(--space-1) var(--space-2)", fontWeight: 500 }; }
function d() { return { padding: "var(--space-1) var(--space-2)" }; }

Object.assign(window, { AlertsView });
