import { LitElement, css, html } from 'lit'

import { App } from '../app.js';

import './shoelace';
import PageStyles from '../styles/page.js';
import * as protocols from '../utils/protocols.js';

import { DWeb } from '../utils/dweb'; 
import { State, Query, Spinner, SpinnerStyles } from '../components/mixins';

export class ConnectWidget extends LitElement.with(State, Query, Spinner) {

  static properties = {
    identities: { store: 'page' }
  }

  static query = {
    selectDidInput: ['#select_did_input', true]
  }

  constructor() {
    super()
  }

  firstUpdated() {
    DWeb.connect.attachInput(this.selectDidInput, {
      permissions: [
        {
          protocolDefinition : protocols.profile.definition,
          permissionScopes   : 
            [
             'Query', 'Read', 'Subscribe', 'Write', 'Delete',
             'Query:Protocols',
             'Query:Messages', 'Read:Messages', 'Subscribe:Messages'
            ].map(scope => {
              scope = scope.split(':');
              return {
                protocol  : protocols.profile.uri,
                interface : scope[1] || 'Records',
                method    : scope[0]
              }
            })
        }
      ],
      onConnect: async (did, connection) => {
        console.log(did, connection);
      },
      onError: (e) => {
        console.log(e);
      },
      onProgress: (p) => {  
        console.log(p);
      }
    });
  }

  render() {
    return this.connected ? html`
      <div>connected</div>
    ` :
    html`
      <section flex="column center-x center-y">
        <sl-button variant="default" size="large" @click="${ async e => {
          e.target.loading = true;
          const identity = await DWeb.identity.create({
            //dwnEndpoints: ['http://localhost:3000']
          });
          App.addIdentity(identity);
          e.target.loading = false;
          router.navigateTo(`/profiles/${identity.did.uri}`);
        }}">
          <sl-icon slot="prefix" name="person-plus"></sl-icon>
          Create a new identity
        </sl-button>
        <div break-text="OR"></div>
        <div>
          <input id="select_did_input" name="email" type="email" label="Select a DID" placeholder="social@did:dht:..." autocomplete="on" />
        </div>
        <sl-button variant="default" size="large" @click="${ e => {} }">
          <sl-icon slot="prefix" name="wallet2"></sl-icon>
          Connect via Wallet
        </sl-button>
        <sl-button variant="default" size="large" @click="${ e => App.restoreIdentityModal.show() }">
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
    SpinnerStyles,
    css`
      :host {
        display: flex;
        justify-content: center;
      }

      sl-button {
        width: 100%;
      }

      sl-button + sl-button {
        margin: 1rem 0 0;
      }

      @media(max-width: 800px) {

      }
    `
  ]
}

customElements.define('connect-widget', ConnectWidget)
