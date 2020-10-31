# deep-state

A simple state store. Performs a deep comparison before calling the callbacks.

```ts
const state = State();

const cleanup = state.subscrube((prev, next) => {
  // stuff
});

state.value = { foo: "bar" }; // trigger callback
state.value = { foo: "bar" }; // nothing
```
