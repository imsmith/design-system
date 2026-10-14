**Alert** is the section/page banner — a CAP-severity message with the status glyph, a ramp-colored left rule, title, body, and optional actions/dismiss.

```jsx
<Alert severity="critical" pulse title="Uplink down — sector 12."
       actions={<Button variant="ghost" size="sm" icon="m-refresh">Retry</Button>}>
  4 nodes unreachable for 4m. Reroute or restore the uplink.
</Alert>
<Alert severity="medium" title="Latency 41ms on node-13, above 40ms threshold." onDismiss={() => {}} />
<Alert severity="info" title="Maintenance window 02:00–02:30 UTC." />
```

Rules
- Color + glyph + text together; placement is scope (banner = page/section), never severity.
- Wording: what happened · why · what to do — terse, no filler. Buttons are verbs.
- `critical`/`high` get `role="alert"`; the rest `role="status"`.
- The glyph sits on a fill chip (step background, on-status glyph), so the banner obeys the status treatment rule on light surfaces without a variant switch. The left rule stays in the raw step color as non-text reinforcement.
