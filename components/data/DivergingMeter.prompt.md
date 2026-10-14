**DivergingMeter** shows signed deviation from a nominal center — green at 0, warm as it runs over, cool as it runs under. The fill color is the diverging spectrum stop at the signed magnitude; the signed number and a `m-warm`/`m-neutral`/`m-cool` mark are always shown.

```jsx
<DivergingMeter label="node-13 temp" value={2} unit="°" />
<DivergingMeter label="latency Δ" value={-3} range={6} />
<DivergingMeter label="baseline" value={0} />
```

Rules
- Diverging, not categorical — distance from green is magnitude of deviation.
- Never use it for 0→max magnitudes (CPU, disk) — that's `SequentialMeter`.
- Pair with the diverging mark so the sign reads without color.
