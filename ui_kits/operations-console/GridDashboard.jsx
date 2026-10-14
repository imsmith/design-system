/* GridDashboard.jsx — the signature dashboard: status-at-scale heatmap + stat
 * tiles + a dense node table. Compact density. Composes DS data components.
 */
const { Card, Heatmap, SequentialMeter, Sparkline, StatusBadge, Mark, Button, Tag } =
  window.DesignSystem_019de4;

function StatTile({ label, value, accent, spark, sparkMode, warn, crit }) {
  return (
    <Card density="compact">
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--muted)" }}>{label}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-h1)", fontWeight: 700, color: accent || "var(--text)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{value}</span>
        {spark && <Sparkline data={spark} mode={sparkMode || "plain"} warn={warn} crit={crit} showEnd={false} width={140} height={20} />}
      </div>
    </Card>
  );
}

function GridDashboard({ data, onSelectNode }) {
  const { nodes, summary } = data;
  const cells = nodes.map((n) => ({ id: n.id, value: n.dev, label: n.id + " · " + n.uplink }));
  const hot = nodes.filter((n) => n.step === "critical" || n.step === "high");
  const rows = nodes.slice(0, 12);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      {/* Stat tiles */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-2)" }}>
        <StatTile label="Nodes online" value={summary.total - summary.unk} spark={[44,45,46,45,47,46,47,47]} />
        <StatTile label="Down" value={summary.down} accent="var(--status-critical)" spark={[0,0,0,0,0,1,1,1]} sparkMode="threshold" crit={1} />
        <StatTile label="Alerts" value={summary.alert} accent="var(--status-high)" spark={[1,1,2,1,2,2,2,2]} />
        <StatTile label="p99 grid" value="61ms" spark={[40,42,48,52,49,55,58,61]} sparkMode="threshold" warn={50} crit={120} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "var(--space-3)", alignItems: "start" }}>
        {/* Heatmap — status at scale */}
        <Card title="Grid health · deviation from nominal" density="compact"
          actions={<Tag accent>48 nodes</Tag>}>
          <Heatmap columns={12} cells={cells} unit="Δ" onSelect={(c) => onSelectNode(c.id.split(" ")[0])} />
        </Card>

        {/* Hot nodes + uplinks */}
        <Card title="Hot nodes" density="compact"
          actions={<Button variant="text" size="sm" iconEnd="m-chevron">All</Button>}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {hot.map((n) => (
              <button key={n.id} onClick={() => onSelectNode(n.id)} style={{
                display: "flex", alignItems: "center", gap: "var(--space-2)", background: "none", border: "none",
                cursor: "pointer", padding: "var(--space-1)", borderRadius: "var(--radius-md)", textAlign: "left",
              }}>
                <StatusBadge step={n.step} variant="plain" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-small)", color: "var(--text)" }}>{n.id}</span>
                <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: "var(--text-caption)", color: "var(--muted)", fontVariantNumeric: "tabular-nums" }}>{n.p99}ms</span>
                <Sparkline data={n.p99series} mode="threshold" warn={120} crit={200} showEnd={false} width={64} height={18} />
              </button>
            ))}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "var(--space-2)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <SequentialMeter label="grid cpu" value={64} warn={75} crit={90} />
              <SequentialMeter label="grid mem" value={71} warn={75} crit={90} />
              <SequentialMeter label="grid disk" value={48} warn={80} crit={95} />
            </div>
          </div>
        </Card>
      </div>

      {/* Node table */}
      <Card title="Nodes" density="compact" flush
        actions={<div style={{ display: "flex", gap: "var(--space-1)" }}>
          <Button variant="text" size="sm" icon="m-filter">Filter</Button>
          <Button variant="text" size="sm" icon="m-download">Export</Button>
        </div>}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-mono)", fontSize: "var(--text-small)" }}>
          <thead>
            <tr style={{ textAlign: "left", color: "var(--muted)", fontSize: "var(--text-caption)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)" }}>
              <th style={th()}>Node</th>
              <th style={th()}>Sector</th>
              <th style={th()}>Status</th>
              <th style={{ ...th(), textAlign: "right" }}>CPU</th>
              <th style={{ ...th(), textAlign: "right" }}>p99</th>
              <th style={{ ...th(), textAlign: "right" }}>req/s</th>
              <th style={th()}>Trend</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((n) => (
              <tr key={n.id} onClick={() => onSelectNode(n.id)} style={{ cursor: "pointer", borderTop: "1px solid color-mix(in srgb, var(--border) 40%, transparent)" }}>
                <td style={{ ...td(), color: "var(--accent)" }}>{n.id}</td>
                <td style={{ ...td(), color: "var(--muted)" }}>{n.sector}</td>
                <td style={td()}><StatusBadge step={n.step} variant="plain" size={13} /></td>
                <td style={{ ...td(), textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{n.cpu}%</td>
                <td style={{ ...td(), textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{n.p99}ms</td>
                <td style={{ ...td(), textAlign: "right", fontVariantNumeric: "tabular-nums", color: "var(--muted)" }}>{n.reqs.toLocaleString()}</td>
                <td style={td()}><Sparkline data={n.cpuseries} mode="plain" showEnd={false} width={72} height={16} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function th() { return { padding: "var(--space-1) var(--space-2)", fontWeight: 500 }; }
function td() { return { padding: "var(--space-1) var(--space-2)", color: "var(--text)" }; }

Object.assign(window, { GridDashboard });
