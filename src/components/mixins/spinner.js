import { css } from 'lit';
import { DOM } from '../../utils/dom.js';
import '../shoelace.js'

const transitionDuration = 300;

export const SpinnerStyles = css`
  .spinner-mixin {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    background: var(--body-bk);
    inset: 0;
    opacity: 0;
    transition: opacity ${transitionDuration}ms ease;
    z-index: 1000;
    pointer-events: none;
  }

  .spinner-mixin[spinner-show] {
    opacity: 1;
    pointer-events: all;
  }

  .spinner-mixin[spinner-options~="fixed"] {
    position: fixed;
    inset: 0;
  }
`;

export const Spinner = (Base) => class extends Base {

  constructor() {
    super();
    let firstUpdatedResolve;
    const original = this.firstUpdated;
    this.#firstUpdatedSpinnerPromise = new Promise(res => firstUpdatedResolve = res);
    this.firstUpdated = async (props) => {
      firstUpdatedResolve();
      await original?.call(this, props);
    };
  }

  #firstUpdatedSpinnerPromise;

  #spinnerTransitionEnd(e){
    if (e.propertyName === 'opacity' && getComputedStyle(e.target).opacity === '0') {
      e.target.remove();
    }
  }

  #createSpinnerElement() {
    const node = document.createElement('div');
          node.classList.add('spinner-mixin');
          node.ontransitionend = e => this.#spinnerTransitionEnd(e);
          node.appendChild(document.createElement('sl-spinner'));
    return node;
  }

  async startSpinner(options = { renderImmediate: false, minimum: 0, fixed: false }) {
    const styleOptions = (options.fixed ? 'fixed' : '');
    await this.#firstUpdatedSpinnerPromise;
    const host = typeof options.target === 'string' ? this.shadowRoot.querySelector(options.target) : options.target || this.shadowRoot;
    let spinner = host.querySelector('.spinner-mixin');
    if (spinner) {
      spinner.setAttribute('spinner-show', '');
      return;
    }
    spinner = this.#createSpinnerElement();
    spinner.setAttribute('spinner-options', styleOptions);
    host.append(spinner);
    if (options.minimum) spinner._spinnerMixinDelay = DOM.delay(options.minimum);
    options.renderImmediate ? spinner.setAttribute('spinner-show', '') : DOM.skipFrame(() => spinner.setAttribute('spinner-show', ''));
    await DOM.delay(transitionDuration);
  }

  async stopSpinner(options = {}){
    const host = typeof options.target === 'string' ? this.shadowRoot.querySelector(options.target) : options.target || this.shadowRoot;
    const spinner = host.querySelector('.spinner-mixin');
    await spinner?._spinnerMixinDelay;
    spinner?.removeAttribute?.('spinner-show');
    if (document.visibilityState === 'hidden') {
      spinner?.remove();
    }
  }

};