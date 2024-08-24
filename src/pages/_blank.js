import { LitElement, css, html } from 'lit'

import '../components/shoelace';
import PageStyles from '../styles/page.js';

import { State } from '../components/mixins';

export class BlankPage extends LitElement.with(State) {

  static properties = {
    identities: { store: 'page' }
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
