import { LitElement, css, html } from 'lit'

import './shoelace.js';
import PageStyles from '../styles/page.js';

import { App } from '../app.js';
import { DOM } from '../utils/dom.js';
import { DWeb } from '../utils/dweb';
import { State, Query } from './mixins';

export class CreateIdentity extends LitElement.with(State, Query) {

  static properties = {
    identities: { store: 'page' }
  }

  static query = {
    createIdentityLabel: '#create_identity_label',
    createIdentityButton: '#create_identity_button'
  }

  render() {
    return html`
      <sl-input id="create_identity_label" label="Add a Label" placeholder="Ex: social, career" pattern="^[a-zA-Z0-9]{3,}$" required></sl-input>
      <sl-button id="create_identity_button" variant="success" @click="${ async e => {
        const label = this.createIdentityLabel.value || '';
        const valid = /^[a-zA-Z0-9]{3,}$/.test(label);
        if (!valid) {
          DOM.fireEvent(this, 'invalid-label');
          return;
        }
        if (this.createIdentityButton.loading) return false;
        this.createIdentityButton.loading = true;
        const identity = await DWeb.identity.create({ dwnEndpoints: ['http://localhost:3000'] });
        await DWeb.identity.addAutofillDid(label + '@' + identity.did.uri);
        App.addIdentity(identity);
        this.createIdentityButton.loading = false;
        DOM.fireEvent(this, 'identity-created', { detail: { identity } });
      }}">
        Create
      </sl-button>
    `
  }


  static styles = [
    PageStyles,
    css`
      #create_identity_button {
        display: block;
        margin: 1.5rem auto 0;
      }
    `
  ]
}

customElements.define('create-identity', CreateIdentity)
