**SequentialMeter** shows magnitude from 0→max (CPU, disk, memory, quota). Accent fill until it crosses a threshold, then the fill **and** value adopt the alert-ramp color and a word (WARN / CRIT).

```jsx
<SequentialMeter label="cpu" value={82} warn={70} crit={90} />
<SequentialMeter label="disk" value={41} unit="%" warn={80} crit={95} />
<SequentialMeter label="throughput" value={1204} max={2000} unit=" req/s" showValue />
```

Rules
- This is **not** the diverging spectrum — green-at-zero is meaningless here. Use `DivergingMeter` for signed deviation.
- Thresholds are per-instance domain config, not system tokens.
- The threshold state is always echoed in words, never color alone.
