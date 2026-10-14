**Modal** is the behavior-heavy overlay: scrim, focus trap with return-to-trigger, Esc and scrim-click dismissal, header with `m-close`, body, right-aligned footer actions.

```jsx
<Modal open={open} onClose={close} title="Delete cluster prod-east" destructive
       footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button variant="danger" icon="m-delete" onClick={del}>Delete cluster</Button></>}>
  Deletes 14 nodes and their volumes. This cannot be undone.
</Modal>
```

Rules
- Destructive confirm is the one place a primary action leaves the accent: `variant="danger"`, a verb label naming the act, the target named, irreversibility stated, Cancel as the ghost.
- `size="sm"` for confirms, `"md"` for forms; never full-bleed on desktop.
- `blocking` removes every dismissal except the footer actions; use it only when leaving would lose data.
