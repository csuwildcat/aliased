
const DOM = globalThis.DOM = {
  ready: new Promise(resolve => {
    document.addEventListener('DOMContentLoaded', e => {
      document.documentElement.setAttribute('ready', '');
      resolve(e)
    });
  }),
  delay: ms => new Promise(resolve => setTimeout(resolve, ms)),
  query: s => document.querySelector(s),
  queryAll: s => document.querySelectorAll(s),
  skipFrame: fn => new Promise(resolve => requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (fn) fn();
      resolve();
    })
  })),
  wait: ms => new Promise(resolve => setTimeout(() => resolve(), ms)),
  fireEvent(node, type, options = {}){
    return node.dispatchEvent(new CustomEvent(type, Object.assign({
      bubbles: true,
      composed: true
    }, options)))
  },
  addEventDelegate(type, selector, fn, options = {}){
    let listener = e => {
      const target = e.composedPath ? e.composedPath()[0] : e.target;
      let match = target.closest(selector);
      if (match && (!options.avoid || !target.closest(options.avoid))) fn(e, match);
    }
    (options.container || document).addEventListener(type, listener, options);
    return listener;
  },
  removeEventDelegate(type, listener, options = {}){
    (options.container || document).removeEventListener(type, listener);
  },
  getQueryParams(url){
    const params = {};
    new URLSearchParams(url || location.search).forEach((value, key) => {
      params[key] ? params[key].push(value) : params[key] = [value];
    })
    return params;
  },
  debounce(fn, interval = 50) {
    let timeoutId = null;
    let lastArgs = null;
    let lastThis = null;
    const call = () => {
      fn.apply(lastThis, lastArgs);
      timeoutId = null;
    };
    return function(...args) {
      lastArgs = args; // Capture the latest arguments
      lastThis = this; // Capture the correct `this` context
      timeoutId = timeoutId || setTimeout(call, interval);
    };
  }
}

const pressedElements = [];
document.addEventListener('pointerdown', e => {
  const paths = e.composedPath();
  const pressTarget = paths.find(node => node?.matches?.('[pressable]')) || paths[0];
  pressTarget.setAttribute('pressed', '');
  pressedElements.push(pressTarget);
}, { passive: true, capture: true });

window.addEventListener('pointerup', e => {
  pressedElements.forEach(node => node.removeAttribute('pressed'));
  pressedElements.length = 0;
}, { passive: true, capture: true });

export { DOM };