/* NodeDetail.jsx — detail view: breadcrumb + record header + property grid +
 * data panels, plus the destructive-confirm flow (drain node). Composes DS
 * primitives; the modal follows the destructive-confirm pattern (critical verb
 * button, names the target, states irreversibility, ghost cancel).
 */
const { Card, SequentialMeter, DivergingMeter, Sparkline, StatusBadge, Mark, Button, Tag, Input } =
  window.DesignSystem_019de4;

function Crumb({ node }) {
  const sep = { color: "var(--muted)", display: "inline-flex" };
  const link = { fontFamily: "var(--font-mono)", fontSize: "var(--text-caption)", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)" };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", marginBottom: "var(--space-2)" }}>
      <span style={link}>Grid</span>
      <span style={sep}><Mark name="m-chevron" size={12} /></span>
      <span style={link}>Sector {node.sector}</span>
      <span style={sep}><Mark name="m-chevron" size={12} /></span>
      <span style={{ ...link, color: "var(--text)" }}>{node.id}</span>
    </div>
  );
}

function Prop({ k, v, mono }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-2)", padding: "6px 0", borderBottom: "1px solid color-mix(in srgb, var(--border) 35%, transparent)" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-caption)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--muted)" }}>{k}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-small)", color: mono || "var(--text)", fontVariantNumeric: "tabular-nums" }}>{v}</span>
    </div>
  );
}

function DrainModal({ node, onClose, onConfirm }) {
  const [typed, setTyped] = React.useState("");
  const armed = typed.trim() === node.id;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
      <div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" style={{
        width: 440, maxWidth: "92vw", background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)", boxShadow: "0 24px 64px rgba(0,0,0,0.6)", padding: "var(--space-3)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", marginBottom: "var(--space-2)" }}>
          <Mark name="m-critical" size={18} style={{ color: "var(--status-critical)" }} />
          <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-h3)", margin: 0 }}>Drain {node.id}?</h3>
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-small)", color: "var(--muted)", lineHeight: 1.5, margin: "0 0 var(--space-2)" }}>
          Moves all sessions off {node.id} in sector {node.sector} and marks it offline. This can't be undone from here — re-enable requires an operator with sector access.
        </p>
        <Input label={"Type " + node.id + " to confirm"} value={typed} onChange={(e) => setTyped(e.target.value)} placeholder={node.id} />
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-1)", marginTop: "var(--space-3)" }}>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="danger" icon="m-delete" disabled={!armed} onClick={onConfirm}>Drain node</Button>
        </div>
      </div>
    </div>
  );
}

function NodeDetail({ node, onBack, onDrain }) {
  const [modal, setModal] = React.useState(false);
  const down = node.step === "critical";
  return (
    <div>
      <Crumb node={node} />
      {/* Record header */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-3)", flexWrap: "wrap" }}>
        <Button variant="text" size="sm" icon="m-chevron" onClick={onBack} style={{ transform: "rotate(180deg)" }} aria-label="Back" />
        <h1 style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-h1)", margin: 0, color: "var(--accent)", textShadow: "var(--glow-text-ambient)" }}>{node.id}</h1>
        <StatusBadge step={node.step} pulse={down} />
        <Tag accent>{node.tlp}</Tag>
        <div style={{ marginLeft: "auto", display: "flex", gap: "var(--space-1)" }}>
          <Button variant="ghost" size="sm" icon="m-refresh">Refresh</Button>
          <Button variant="danger" size="sm" icon="m-delete" onClick={() => setModal(true)}>Drain</Button>
          <Button variant="text" size="sm" iconEnd="m-more" aria-label="More" />
        </div>
      </div>

      {down && (
        <div style={{ marginBottom: "var(--space-3)" }}>
          {React.createElement(window.DesignSystem_019de4.Alert, {
            severity: "critical", pulse: true, title: "Uplink down — " + node.id + ".",
          }, "Unreachable for 4m. Reroute traffic or restore the uplink.")}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "var(--space-3)", alignItems: "start" }}>
        <Card title="Properties" density="compact">
          <Prop k="Sector" v={node.sector} />
          <Prop k="Region" v={node.region} />
          <Prop k="Uplink" v={node.uplink.toUpperCase()} mono={down ? "var(--status-critical)" : "var(--text)"} />
          <Prop k="Uptime" v={node.uptime} />
          <Prop k="Requests" v={node.reqs.toLocaleString() + " req/s"} />
          <Prop k="Marking" v={node.tlp} mono="var(--accent)" />
        </Card>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Card title="Resource" density="compact">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <SequentialMeter label="cpu" value={node.cpu} warn={75} crit={90} />
              <SequentialMeter label="mem" value={node.mem} warn={75} crit={90} />
              <SequentialMeter label="disk" value={node.disk} warn={80} crit={95} />
              <DivergingMeter label="latency Δ vs baseline" value={Math.max(-6, Math.min(5, Math.round((node.p99 - 40) / 30)))} range={6} unit="σ" />
            </div>
          </Card>
          <Card title="p99 latency · 16m" density="compact"
            actions={<span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-caption)", color: "var(--muted)" }}>threshold 120ms</span>}>
            <Sparkline data={node.p99series} mode="threshold" warn={120} crit={200} unit="ms" width={560} height={64} />
          </Card>
        </div>
      </div>

      {modal && <DrainModal node={node} onClose={() => setModal(false)} onConfirm={() => { setModal(false); onDrain(node); }} />}
    </div>
  );
}

Object.assign(window, { NodeDetail });
