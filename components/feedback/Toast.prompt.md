**Toast** is the transient notification; **ToastStack** is the fixed corner it lives in.

```jsx
<ToastStack>
  <Toast severity="critical" title="Uplink down — sector 12." onDismiss={ack}>Acknowledge to clear.</Toast>
  <Toast severity="low" title="Rebooted node-12." onDismiss={clear} />
</ToastStack>
```

Rules
- Auto-dismiss grows with severity (low 5s, medium 8s, high 12s); **critical persists** until acknowledged.
- `aria-live` is polite, assertive for critical; critical/high use `role="alert"`.
- Wording follows the voice rules: what happened · why · what to do. Never the only place a critical state is shown.
