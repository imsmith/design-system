**Menu** is the surface list for popovers and sidebar nav: leading mark, label, muted hint, trailing chevron for submenus; selected = accent tint plus left rule.

```jsx
<Menu variant="sidebar" label="Sections" selected="grid" onSelect={(it) => nav(it.id)}
      items={[
        { heading: "Grid" },
        { id: "grid", label: "Dashboard", icon: "m-menu" },
        { id: "alerts", label: "Alerts", icon: "m-bell", hint: 3 },
        { separator: true },
        { id: "settings", label: "Settings", icon: "m-settings", submenu: true },
      ]} />
```

Rules
- Arrow keys move, Enter/Space select, Esc calls `onClose`.
- Selected uses the accent tint and rule, the same selected treatment as table rows and cards.
