**Tabs** is the label row over a content area — selected gets the accent underline + text color, others are muted.

```jsx
<Tabs
  defaultValue="grid"
  tabs={[
    { id: "grid", label: "Grid", icon: "m-menu" },
    { id: "alerts", label: "Alerts", count: 3 },
    { id: "audit", label: "Audit", disabled: true },
  ]}
  onChange={id => setView(id)}
/>
```
One selected at a time. Render the active panel yourself based on `onChange`/`value`.
