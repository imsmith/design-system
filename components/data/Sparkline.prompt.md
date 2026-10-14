**Sparkline** is the inline, axis-less trend — for table cells, stat tiles, and small multiples. Tufte by default (no gridlines, no legend); the latest point is marked and labelled.

```jsx
<Sparkline data={[4,5,6,5,7,9,12,18]} mode="threshold" warn={10} crit={16} unit="ms" />
<Sparkline data={[20,22,21,23,22,24]} mode="plain" />
```

Notes
- `threshold` mode colors the endpoint + word when the latest value crosses warn/crit; the thresholds draw as dashed ramp lines.
- For many entities prefer a grid of single-series sparklines (small multiples) over one multi-line chart — the spectrum is diverging, not categorical.
