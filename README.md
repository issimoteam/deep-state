A simple state store. Performs a deep comparison before calling the callbacks.

[![size](https://img.shields.io/bundlephobia/minzip/@issimo/deep-state)](https://bundlephobia.com/result?p=@issimo/deep-state)
[![downloads](https://img.shields.io/npm/dw/@issimo/deep-state)](https://www.npmjs.com/package/@issimo/deep-state)
[![npm](https://img.shields.io/npm/v/@issimo/deep-state)](https://www.npmjs.com/package/@issimo/deep-state)
[![GitHub](https://img.shields.io/github/license/issimoteam/deep-state)](https://github.com/issimoteam/deep-state)

```ts
const state = State();

const cleanup = state.subscribe((prev, next) => {
  // stuff
});

state.value = { foo: "bar" }; // trigger callback
state.value = { foo: "bar" }; // nothing
```
