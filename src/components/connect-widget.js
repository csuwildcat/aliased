import { LitElement, css, html } from 'lit'

import { App } from '../app.js';

import './shoelace';
import PageStyles from '../styles/page.js';

import { DWeb } from '../utils/dweb';

export class ConnectWidget extends LitElement {

  constructor() {
    super()
  }

  render() {
    return this.connected ? html`
      <div>connected</div>
    ` :
    html`
      <section flex="column center-x center-y">
        <sl-button variant="default" size="large" @click="${ async e => {
          e.target.loading = true;
          const identity = await DWeb.identity.create({ dwnEndpoints: ['http://localhost:3000'] });
          App.addIdentities(identity);
          e.target.loading = false;
          router.navigateTo(`/profiles/${identity.did.uri}`);
        }}">
          <sl-icon slot="prefix" name="person-plus"></sl-icon>
          Create a new identity
        </sl-button>
        <div break-text="OR"></div>
        <sl-button variant="default" size="large" @click="${ e => {} }">
          <sl-icon slot="prefix" name="wallet2"></sl-icon>
          Connect via Wallet
        </sl-button>
        <sl-button variant="default" size="large" @click="${ async e => {
          try {
            const portableIdentity = await DWeb.identity.restore({ from: 'file' });
            this.identity = portableIdentity;
          }
          catch(e) {
            console.log(e)
          }
        }}">
          <sl-icon slot="prefix" name="upload"></sl-icon>
          Restore from File
        </sl-button>
        <!-- <sl-button variant="default" size="large" @click="${ e => {} }">
          <sl-icon slot="prefix" name="key-fill"></sl-icon>
          Enter as Password
        </sl-button> -->
      </section>
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

customElements.define('connect-widget', ConnectWidget)
