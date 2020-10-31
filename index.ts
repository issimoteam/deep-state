import deepEqual from "fast-deep-equal";

export type Callback<T> = (prev: T, next: T) => void;
export type Store<T> = { value: T; subscribe: (cb: Callback<T>) => () => void };

function State<T>(initialValue: T) {
  let value = initialValue;

  const subscribers = new Set<Callback<T>>();

  return {
    /**
     * Get the current value of the sture
     */
    get value() {
      return value;
    },

    /**
     * Set the value of the store
     */
    set value(newVal: T) {
      if (!deepEqual(value, newVal)) {
        value = newVal;
        subscribers.forEach((cb) => cb(value, newVal));
      }
    },

    /**
     * Subscribe to the store.
     * @returns a cleanup function.
     * @param cb will be called whenever the value is updated.
     */
    subscribe(cb: Callback<T>) {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },
  };
}

export default State;
