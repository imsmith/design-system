**Breadcrumb** shows the location trail: muted ancestor links separated by `m-chevron`, the current page in text color and not a link.

```jsx
<Breadcrumb items={[{ label: "Grid", href: "/" }, { label: "Sector 12", href: "/s/12" }, { label: "node-13" }]} />
```

Rules
- The last item is the current page: plain text, `aria-current="page"`.
- Terminal form: `Grid › Sector 12 › node-13`.
