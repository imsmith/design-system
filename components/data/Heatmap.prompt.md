**Heatmap** is the system's signature pattern — read the health of many entities at a glance. Each cell is a diverging-spectrum stop by its deviation from green (nominal); warm = over, cool = under, far-warm reads critical.

```jsx
<Heatmap
  columns={16}
  cells={nodes.map(n => ({ id: n.id, value: n.deviation, label: n.id }))}
  onSelect={node => inspect(node)}
/>
```

Non-color encoding is **mandatory**: the legend is required, every cell is inspectable for its value (hover/focus tooltip + accessible name), and critical-end cells carry the `m-critical` glyph. Color is the gestalt; the value is the truth — never color alone, especially at scale.
