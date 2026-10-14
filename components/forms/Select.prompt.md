**Select** is the dropdown — an Input-like trigger with a trailing `m-chevron`, wrapping a native `<select>` for real behavior.

```jsx
<Select label="Density" options={["comfortable", "compact", "dense"]} />
<Select label="Severity" options={[{value:"crit",label:"Critical"},{value:"warn",label:"Warn"}]} />
```
Shares the Input field anatomy (label, error, helper) and state set.
