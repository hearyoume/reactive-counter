export default (() => {
  // Private "vault" area - cannot be accessed from outside
  let state = { count: 0 };
  const listeners = [];

  // Public "teller window" - only way to interact with vault
  return {
    /**
     * These are METHODS, scoped inside of this object.
     * They enclose the state variable, making it private.
     */
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;
      listeners.forEach((listener) => listener(state));
    },
    subscribe(listener) {
      listeners.push(listener);
    },
  };
})();
