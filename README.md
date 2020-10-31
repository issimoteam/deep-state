![size](https://img.shields.io/bundlephobia/minzip/@sebastbake/deep-state)
![downloads](https://img.shields.io/npm/dw/@sebastbake/deep-state)
![npm](https://img.shields.io/npm/v/@sebastbake/deep-state)
![GitHub](https://img.shields.io/github/license/sebastbake/deep-state)

# deep-state

A simple state store. Performs a deep comparison before calling the callbacks.

```ts
const state = State();

const cleanup = state.subscribe((prev, next) => {
  // stuff
});

state.value = { foo: "bar" }; // trigger callback
state.value = { foo: "bar" }; // nothing
```
