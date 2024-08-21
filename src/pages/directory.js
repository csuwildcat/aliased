import { LitElement, css, html } from 'lit'

import '../components/shoelace';
import '../components/connect-widget';
import PageStyles from '../styles/page';

import { SpinnerMixin, SpinnerStyles } from '../utils/spinner';

import { Stateful } from '../utils/state';

export class DirectoryPage extends Stateful(LitElement) {

  static properties = {
    identity: { store: 'app' },
    web5: { store: 'page' }
  }

  constructor() {
    super()

  }

  firstUpdated() {

  }

  render() {
    return html`
      <div>directory</div>
    `
  }


  static styles = [
    PageStyles,
    SpinnerStyles,
    css`
      :host {
        
      }

      connect-widget {
        align-self: center;
      }

      @media(max-width: 800px) {

      }
    `
  ]
}

customElements.define('directory-page', DirectoryPage)
