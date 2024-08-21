import { LitElement, css, html } from 'lit'

import '../components/shoelace.js';
import PageStyles from '../styles/page.js';

import { Stateful } from '../utils/state.js';

export class SettingsPage extends Stateful(LitElement) {

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
    return this.identity ? html`
      <section>
        <ul id="identity_list" limit-width>
          ${this?.identities?.map(identity => html`
            <li flex="center-y">
              <div>${identity.did.uri}</div>
              <sl-button size="small" @click="${ e => DWeb.identity.backup(identity, { to: 'file' }) }">Download</sl-button>
              <sl-button size="small">Save to Passwords</sl-button>
            </li>
          `)}
        </ul>
      </section>
    ` :
    html`
      <connect-widget></connect-widget>
    `
  }

  static styles = [
    PageStyles,
    css`
      :host {
        
      }

      #identity_list div {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
      }

      @media(max-width: 800px) {

      }
    `
  ]
}

customElements.define('settings-page', SettingsPage)
