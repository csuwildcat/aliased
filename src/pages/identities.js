import { LitElement, css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { App } from '../app.js';
import * as protocols from '../utils/protocols.js';

import '../components/shoelace.js';
import '@vaadin/upload';

import '../components/create-identity';
import PageStyles from '../styles/page.js';

import { State, Query, Spinner, SpinnerStyles } from '../components/mixins';

export class IdentitiesPage extends LitElement.with(State, Query, Spinner) {

  static properties = {
    ready: { store: 'page', test: true },
    identities: { store: 'page' }
  }

  static query = {
    createIdentityButton: '#create_identity_button',
    createIdentityModal: ['#create_identity_modal', true],
    restoreIdentityModal: ['#restore_identity_modal', true],
    restoreIdentityButton: '#restore_identity_button',
    restoreUploader: ['#restore_uploader', true]
  }

  constructor() {
    super()
  }

  firstUpdated() {
    if (!this.ready.state) {
      this.startSpinner({ target: 'section', minimum: 500, renderImmediate: true });
    }
    this.ready.then(() => {
      this.stopSpinner();
    })
  }

  async handleRestoreUpload(e) {
    if (!this.restoreUploader || !this.restoreUploader.files.length) return;
    try {
      const restored = await DWeb.identity.restore({ from: 'file', files: this.restoreUploader.files })
      console.log(restored);
      await App.addIdentities(restored);
      this.restoreIdentityModal.hide();
    }
    catch(e){
      console.log(e);
    }
    this.restoreUploader.files = [];
  }

  render() {
    const identities = Object.values(this.identities || NaN);
    return html`
      <section page-section>
        ${ !identities?.length ? 
          html`<connect-widget></connect-widget>` : 
          html`
            <h2>Identities</h2>
            <ul id="identity_list" limit-width>
              ${identities.map(identity => html`
                <li flex="center-y">
                  
                  <a href="/profiles/${identity.did.uri}">
                    <sl-avatar image="${identity.avatar || `https://dweb/${identity.did.uri}/read/protocols/${encodeURIComponent(protocols.profile.uri)}/avatar`}" shape="circle" size="small"></sl-avatar>
                    ${identity.did.uri}
                  </a>
                  <sl-button size="small" @click="${ e => DWeb.identity.backup(identity, { to: 'file' }) }">
                    <sl-icon slot="prefix" name="download"></sl-icon> Backup
                  </sl-button>
                </li>
              `)}
            </ul>
            <div id="create_restore_buttons" flex="center-x center-y">
              <sl-button id="create_identity_button" variant="success" size="small" @click="${ async e => this.createIdentityModal.show() }">
                <sl-icon slot="prefix" name="person-plus"></sl-icon> Create an Identity
              </sl-button>
              <sl-button id="restore_identity_button" variant="primary" size="small" @click="${ async e => this.restoreIdentityModal.show() }">
                <sl-icon slot="prefix" name="person-up"></sl-icon> Restore an Identity
              </sl-button>
            </div>
          `
        }
      </section>

      <sl-dialog id="create_identity_modal" label="Create an Identity" placement="start" fit-content>
        <create-identity @identity-created="${e => this.createIdentityModal.hide() }"></create-identity>
      </sl-dialog>

      <sl-dialog id="restore_identity_modal" label="Restore an Identity" placement="start" fit-content>
        <p>Upload or drop in a backup file to restore an identity.</p>
        <vaadin-upload
          id="restore_uploader"
          no-auto
          max-files="1"
          accept="text/json,application/json,.json"
          @files-changed="${this.handleRestoreUpload}"
        ></vaadin-upload>
      </sl-dialog>

      
    `
  }

  static styles = [
    PageStyles,
    SpinnerStyles,
    css`
      :host > section {
        
      }



      connect-widget {
        align-self: center;
      }

      #identity_list li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      }

      #identity_list li:first-child {
        border-top: 1px solid rgba(0, 0, 0, 0.4);
      } 

      #identity_list a {
        width: 100%;
        padding: 1.1rem 0 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: none;
        color: var(--sl-color-blue-700);
        cursor: pointer;
      }

      #identity_list sl-avatar {
        --size: 2.25rem;
        margin: 0 0.5rem 0 0;
      }

      #identity_list sl-button {
        margin: 0 0 0 0.75rem;
      }

      #create_restore_buttons {
        margin: 2rem 0 0;
      }

      #create_restore_buttons sl-button {
        margin: 0 0.5rem;
      }

      vaadin-upload {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 8rem;
        border: 2px dashed rgba(255,255,255,0.2);
      }

      vaadin-upload::part(drop-label) {
        color: #fff;
      }

      vaadin-upload vaadin-button {
        color: #fff;
        background: var(--_lumo-button-primary-background);
        cursor: pointer;
      }

      @media(max-width: 800px) {

      }
    `
  ]
}

customElements.define('identities-page', IdentitiesPage)
