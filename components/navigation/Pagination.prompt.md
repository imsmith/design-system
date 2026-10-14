**Pagination** — prev/next `m-chevron` controls and numbered pages; the current page is accent-tinted, long ranges elide with `…`, prev/next disable at the ends.

```jsx
<Pagination page={page} total={9} onChange={setPage} />
```

Terminal form: `‹ 1 ·2· 3 … 9 ›`.
