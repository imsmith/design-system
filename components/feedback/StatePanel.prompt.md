**StatePanel** renders the unhappy paths every data surface must handle: empty, loading, error. **Skeleton** is the muted block stand-in for loading content.

```jsx
<StatePanel mode="empty" title="No alerts in sector 12" action={<Button variant="ghost" icon="m-add">Create rule</Button>}>
  Nothing has crossed a threshold in the last 24h.
</StatePanel>
<StatePanel mode="loading" title="Loading telemetry" />
<StatePanel mode="error" title="Telemetry unavailable" action={<Button variant="ghost" icon="m-refresh">Retry</Button>}>
  Collector db-03 timed out after 30s.
</StatePanel>
<Skeleton lines={4} />
```

Rules
- Every table, dashboard panel, and detail view defines all three. A blank, a spinner forever, or an unhandled failure is a defect.
- Error is color + glyph + text and offers a retry. Empty says why and offers the next action.
- Loading sets `aria-busy`; the spinner goes static under reduced motion.
