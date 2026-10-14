**StatusBadge** is the load-bearing status control — it always pairs alert-ramp color with the status glyph and a word, so status survives for colorblind readers, in print, and in terminals.

```jsx
<StatusBadge step="critical" pulse />     {/* ✖ DOWN, pulsing */}
<StatusBadge step="high" />               {/* ▲ ALERT */}
<StatusBadge step="medium" />             {/* ◆ WARN */}
<StatusBadge step="low" />                {/* ● OK */}
<StatusBadge step="unknown" />            {/* □ UNK */}
<StatusBadge step="high" label="DEGRADED" variant="solid" />
```

Rules
- `step` is the single source of truth — color, glyph, and word are derived; never set them to disagree (a green badge never says WARN).
- The OASIS value (Extreme/Severe/Moderate/Minor/Unknown) is the data; the display word is the chrome. Override `label` per domain (e.g. OFFLINE) but keep it mapped to the step.
- `pulse` is reinforcement for critical/live only — color + glyph already signal.
- Treatment rule (manual/01 §3): `solid` is the **fill** treatment and is legal everywhere; `soft` and `plain` are **outline** treatments and are dark-surface only. On `[data-mode="light"]` the component renders every variant as fill, and `critical` is always fill. You do not have to switch variants per mode.
