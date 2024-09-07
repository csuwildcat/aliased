import { LitElement, css, html, nothing, render } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { App } from '../app.js';
import * as protocols from '../utils/protocols.js';

import '../components/shoelace.js';
import '@vaadin/upload';

import '../components/create-identity';
import '../components/detail-box.js';
import { DOM } from '../utils/dom.js';
import PageStyles from '../styles/page.js';

import { State, Query, Spinner, SpinnerStyles } from '../components/mixins';

export class IdentitiesPage extends LitElement.with(State, Query, Spinner) {

  static properties = {
    ready: { store: 'page', test: true },
    identities: { store: 'page' },
    identityEndpointUpdate: { type: Object }
  }

  static query = {
    createIdentityButton: '#create_identity_button',
    createIdentityModal: ['#create_identity_modal', true],
    restoreIdentityModal: ['#restore_identity_modal', true],
    restoreIdentityButton: '#restore_identity_button',
    restoreUploader: ['#restore_uploader', true],
    modifyEndpointsModal: ['#modify_endpoints_modal', true]
  }

  constructor() {
    super();
    this.inputCounter = 0;
    this.profileProtocolUri = encodeURIComponent(protocols.profile.uri)
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

  toggleIdentityDetails(e){
    const toggle = e.currentTarget;
    const target = toggle.closest('li').querySelector('detail-box');
    target.toggle();
    toggle.firstElementChild.name = target.open ? 'chevron-up' : 'chevron-down';
  }

  generateEndpointItems(identity, fn, editing) {
    return (identity.did.document.service || []).reduce((template, service) => {
      if (!template && service.type === 'DecentralizedWebNode') {
        let endpoints = service.serviceEndpoint || [];
        endpoints = Array.isArray(endpoints) ? endpoints : [endpoints];
        if (editing) this.identityEndpointUpdate.endpoints = [...endpoints];
        template = fn(endpoints, identity);
      }
      return template;
    }, null)
  }

  showEndpointModal(identity) {
    if (!this.identityEndpointUpdate || this.identityEndpointUpdate.identity !== identity) {
      this.identityEndpointUpdate = { identity };
    }
    this.modifyEndpointsModal.show();
  }

  updateEndpoints() {
    if (!this.identityEndpointUpdate) return;
    const { identity, endpoints } = this.identityEndpointUpdate;
    const did = identity.did.uri;
    const service = identity.did.document.service.find(service => service.type === 'DecentralizedWebNode');
    service.serviceEndpoint = endpoints;
    DWeb.identity.update({ did, service }).then(() => {
      this.identityEndpointUpdate = null;
    })
  }

  render() {
    const identities = Object.values(this.identities || {});

    console.log(this.identityEndpointUpdate);
    return html`
      <section page-section>
        ${ !identities?.length ? 
          html`<connect-widget></connect-widget>` : 
          html`
            <h2>Identities</h2>
            <ul id="identity_list" limit-width>
              ${identities.map(identity => {
                const did = identity.did.uri;
                return html`
                <li>
                  <div flex="center-y">
                    <a href="/profiles/${did}">
                      <sl-avatar image="${identity.avatar || `https://dweb/${did}/read/protocols/${this.profileProtocolUri}/avatar`}" shape="circle" size="small"></sl-avatar>
                      ${did}
                    </a> 
                    <sl-button detail-box-toggle circle size="small" @click="${this.toggleIdentityDetails}">
                      <sl-icon name="chevron-down"></sl-icon>
                    </sl-button>
                  </div>
                  <detail-box hide-toggle>
                    <div>
                      <h3>Actions</h3>
                      <sl-button size="small" @click="${ e => DWeb.identity.backup(identity, { to: 'file' }) }">
                        <sl-icon slot="prefix" name="download"></sl-icon> Backup
                      </sl-button>

                      <h3 flex="center-y">
                        <span>Service Endpoints</span>
                        <sl-icon-button name="pencil" variant="default" size="medium" @click="${ e => this.showEndpointModal(identity) }"></sl-icon-button>
                      </h3>
                      ${this.generateEndpointItems(identity, endpoints => html`<div>${endpoints.join('<br>')}</div>`)}
                    </div>
                  </detail-box>
                </li>
              `})}
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

      <sl-dialog id="modify_endpoints_modal" label="Modify Endpoints" placement="start">
        <div id="modify_endpoints_identity" flex="center-y">
          ${
            this.identityEndpointUpdate ?
              html`
                <sl-avatar image="${this.identityEndpointUpdate.identity?.avatar || `https://dweb/${this.identityEndpointUpdate.identity.did.uri}/read/protocols/${this.profileProtocolUri}/avatar`}" shape="circle" size="small"></sl-avatar>
                <div>${this.identityEndpointUpdate.identity.did.uri}</div>
              ` : nothing
          }
        </div>
        <p>This is an advanced feature to edit the datastore locations of the DID above. Do not change these values unless you know what you are doing.</p>
        <section>
          ${
            this.identityEndpointUpdate ? 
              this.generateEndpointItems(this.identityEndpointUpdate.identity, (endpoints, identity) => {
                console.log(endpoints);
                return endpoints.map((endpoint, index) => {
                  console.log(index);
                  return html`
                  <div index="${index}" class="service-endpoint-entry" flex="center-y">

                    <sl-input class="service-endpoint-input" size="small" value="${endpoint}" @input="${e => {
                      endpoints[index] = e.target.value;
                    }}"></sl-input>

                    <sl-button size="small" variant="danger" @click="${ e => {
                          endpoints.splice(index, 1)
                          this.identityEndpointUpdate = { ...this.identityEndpointUpdate };
                        }}">
                        <sl-icon slot="prefix" name="x-lg">
                      </sl-icon>
                    </sl-button>

                    <sl-button size="small" variant="success" @click="${ e => {
                        endpoints.push('')
                        this.identityEndpointUpdate = { ...this.identityEndpointUpdate };
                      }}">
                      <sl-icon slot="prefix" name="plus-lg"></sl-icon>
                    </sl-button>
                  </div>
                `})
              }, true) :
              nothing
          }
        </section>
        <sl-button id="close_endpoints_button" slot="footer" variant="primary" size="small" @click="${ async e => this.modifyEndpointsModal.close() }">Close</sl-button>
        <sl-button id="submit_endpoints_button" slot="footer" variant="success" size="small" @click="${ async e => this.updateEndpoints() }">Submit</sl-button>
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
        --border: 1px solid rgb(255 255 255 / 8%);
        list-style: none;
        border-bottom: var(--border);
      }

      #identity_list li:first-child {
        border-top: var(--border);
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

      #identity_list [detail-box-toggle] {
        margin: 0 0 0 0.75rem;
      }

      #identity_list detail-box {
        max-height: 0;
      }

      #identity_list detail-box > :first-child {
        margin-bottom: 1rem;
        padding: 0 0.85rem 1rem;
        background: rgba(255 255 255 / 4%);
        border: 1px solid rgba(255 255 255 / 5%);
        border-radius: 5px;
      }

      #identity_list detail-box h3 {
        margin: 1.75rem 0 1rem;
        border-bottom: 1px solid rgba(255 255 255 / 8%);
        padding: 0 0 0.25rem;
      }

      #identity_list detail-box h3:first-of-type {
        margin-top: 0.75rem
      }

      #identity_list detail-box h3 :not(span) {
        margin: 0 0 0 auto;
      }

      #create_restore_buttons {
        margin: 2rem 0 0;
      }

      #create_restore_buttons sl-button {
        margin: 0 0.5rem;
      }
      
    /* Restore Identity Dialog */

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

    /* Modify Endpoints Dialog */

      #modify_endpoints_modal::part(panel) {
        max-width: 500px;
      }

      .service-endpoint-entry:not(:last-child) {
        margin-bottom: 1rem;
      }

      .service-endpoint-input {
        margin: 0;
      }

      .service-endpoint-input ~ sl-button {
        margin: 0 0 0 0.5rem;
      }

      .service-endpoint-entry:not(:last-child) sl-button[variant="success"] {
        display: none;
      }

      #modify_endpoints_identity sl-avatar {
        --size: 2.25rem;
        margin: 0 0.5rem 0 0;
      }

      #modify_endpoints_identity div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      #modify_endpoints_modal p {
        margin: 1rem 0 1.5rem;
        color: var(--sl-color-red-700);
      }

      @media(max-width: 800px) {

      }
    `
  ]
}

customElements.define('identities-page', IdentitiesPage)
