**Button** is the action control. Mono UPPERCASE label, crisp border, ambient glow on hover (dark only).

```jsx
<Button variant="primary" size="lg">Engage</Button>
<Button variant="ghost" icon="m-filter">Filter</Button>
<Button variant="text" iconEnd="m-chevron">Details</Button>
<Button variant="danger" icon="m-delete">Delete sector 12</Button>
<Button variant="ghost" loading>Saving</Button>
```

Rules
- **Accent-label rule:** `primary` puts body text on an accent fill — reserve it for large/heavy labels. For body-size actions use `ghost`.
- `danger` is the only place a primary action leaves accent (destructive-confirm). Label it with a verb that names the act.
- Sizes meet the 44px-preferred / 24px-min target floors (`lg` = 44px).
- `loading` sets `aria-busy` and spins `m-refresh`; the label is hidden, not removed.
