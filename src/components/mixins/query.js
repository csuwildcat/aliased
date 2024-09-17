
export const Query = (Base) => class extends Base {
  #queryCache = new Map();

  constructor() {
    super();
    if (this.constructor.query) {
      for (const [key, value] of Object.entries(this.constructor.query)) {
        let selector, cache;

        if (typeof value === 'string') {
          selector = value;
          cache = false; // No caching by default when a string is provided
        }
        else {
          [selector, cache] = value;
        }

        Object.defineProperty(this, key, {
          get: () => this.#getCachedElement(key, selector, cache),
          enumerable: true,
          configurable: true,
        });
      }
    }
  }

  #getCachedElement(key, selector, cache) {
    if (cache && this.#queryCache.has(key)) {
      return this.#queryCache.get(key);
    }
    const element = this.renderRoot.querySelector(selector);
    if (cache && element) {
      this.#queryCache.set(key, element);
    }
    return element;
  }
};