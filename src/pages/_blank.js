import { LitElement, css, html } from 'lit'

import '../components/shoelace';
import PageStyles from '../styles/page.js';

import { Stateful } from '../utils/state';

export class BlankPage extends Stateful(LitElement) {

  static properties = {
    identity: { store: 'app' },
    identities: { store: 'page' },
    web5: { store: 'page' }
  }

  constructor() {
    super()

  }

  firstUpdated() {

  }

  render() {
    return html`

    `
  }


  static styles = [
    PageStyles,
    css`
      :host {
        
      }

      @media(max-width: 800px) {

      }
    `
  ]
}

customElements.define('blank-page', BlankPage)
