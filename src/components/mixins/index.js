import { LitElement } from 'lit'

LitElement.with = function(...mixins) {
  return mixins.reduce((Base, mixin) => mixin(Base), this);
};

export { State } from './state.js';
export { Query } from './query.js';
export { Spinner, SpinnerStyles } from './spinner.js';