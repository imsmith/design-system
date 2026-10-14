**Table** is the workhorse data view: muted uppercase caption header, density modes, numeric columns right-aligned in tabular mono, sortable headers with a chevron, and a selected row shown as accent tint plus a left rule.

```jsx
<Table
  density="compact"
  columns={[
    { key: "id", label: "Node", sortable: true },
    { key: "step", label: "Status", render: (r) => <StatusBadge step={r.step} variant="plain" size={13} /> },
    { key: "cpu", label: "CPU %", num: true, sortable: true },
  ]}
  rows={nodes}
  sort={{ key: "cpu", dir: "descending" }}
  onSort={setSortKey}
  selected={selectedId}
  onSelect={(r) => setSelectedId(r.id)}
/>
```

Rules
- Status cells use `StatusBadge`, never a bare color.
- Numeric columns get `num: true` so they right-align and use tabular figures.
- Density follows the spacing chapter: comfortable (default), compact (dashboards), dense (telemetry/log tables).
- Every table defines its empty, loading, and error states — see `StatePanel`.
