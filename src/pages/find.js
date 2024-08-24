import { LitElement, css, html } from 'lit'

import '../components/shoelace';
import '../components/connect-widget';
import PageStyles from '../styles/page';

import { State, Spinner } from '../components/mixins';

export class FindPage extends LitElement.with(State, Spinner) {

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
      <div>directory</div>
    `
  }


  static styles = [
    PageStyles,
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

customElements.define('find-page', FindPage)
