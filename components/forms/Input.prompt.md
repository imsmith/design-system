**Input** is the labelled text field. Mono field, caption label, focus = accent border + glow, error = critical border with the `m-critical` glyph and message.

```jsx
<Input label="Node id" placeholder="node-13" icon="m-search" />
<Input label="Threshold (ms)" defaultValue="40" helper="Warn above this latency." />
<Input label="Sector" value="" error="Sector required." />
<Input label="Region" value="us-east" readOnly />
```

Notes
- Error state is color **and** glyph **and** text — never just a red border.
- `readOnly` drops the border emphasis but stays selectable; `disabled` mutes + 0.5 opacity.
