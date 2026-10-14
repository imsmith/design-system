**Card / Panel** is the surface container — the dashboard panel building block. Border, density-based padding, optional caption header and footer.

```jsx
<Card title="Uplink telemetry" density="compact"
      actions={<Button variant="text" size="sm" iconEnd="m-more" />}>
  …content…
</Card>

<Card interactive selected title="node-13">…</Card>
```

Notes
- `density` follows the spacing scale — dashboards use `compact`; telemetry/log tables use `dense`.
- Non-interactive by default. `interactive` adds hover (accent border + ambient glow) and focus; `selected` is the accent-tint + left-rule treatment.
- Use `flush` when the body is an edge-to-edge table.
- Compose, don't restyle: put `StatusBadge`, meters, sparklines, or tables inside.
