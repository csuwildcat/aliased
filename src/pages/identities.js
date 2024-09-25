import { LitElement, css, html, nothing, render } from 'lit';
import { Convert } from '@web5/common';

import { App } from '../app.js';
import * as protocols from '../utils/protocols.js';

import '../components/shoelace.js';
import '@vaadin/upload';

import '../components/create-identity';
import '../components/detail-box.js';
import { notify } from '../utils/notifications.js';
import PageStyles from '../styles/page.js';

import { State, Query, Spinner, SpinnerStyles } from '../components/mixins';

export class IdentitiesPage extends LitElement.with(State, Query, Spinner) {

  static properties = {
    ready: { store: 'page' },
    identities: { store: 'page' },
    identityEndpointUpdate: { type: Object }
  }

  static query = {
    createIdentityButton: '#create_identity_button',
    createIdentityModal: ['#create_identity_modal', true],
    restoreIdentityButton: '#restore_identity_button',
    modifyEndpointsModal: ['#modify_endpoints_modal', true]
  }

  constructor() {
    super();
    this.lastIdentityLabelSave = Date.now();
    this.profileProtocolEncoded = Convert.string(protocols.profile.uri).toBase64Url();
  }

  firstUpdated() {

    if (!this.ready.state) {
      this.startSpinner({ target: 'section', minimum: 500, renderImmediate: true });
    }
    this.ready.then(() => {
      this.stopSpinner();
    })
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
        if (editing) endpoints = this.identityEndpointUpdate.endpoints = this.identityEndpointUpdate.endpoints || [...endpoints];
        template = fn(endpoints, identity);
      }
      return template;
    }, null)
  }

  openEndpointModal(identity) {
    if (!this.identityEndpointUpdate || this.identityEndpointUpdate.identity !== identity) {
      this.identityEndpointUpdate = { identity };
    }
    this.modifyEndpointsModal.show();
  }

  closeEndpointModal() {
    this.modifyEndpointsModal.hide();
  }

  async updateEndpoints(autoClose) {
    if (!this.identityEndpointUpdate) return;
    const { identity, endpoints } = this.identityEndpointUpdate;
    console.log(endpoints);
    try {
      const result = await DWeb.did.update(identity, doc => {
        const entry = doc.service.find(service => service.type === 'DecentralizedWebNode');
        if (entry) {
          entry.serviceEndpoint = endpoints.reduce((filtered, endpoint) => {
            endpoint = endpoint.trim();
            if (endpoint.length) filtered.push(endpoint);
            return filtered;
          }, []);
        }
        entry.serviceEndpoint = endpoints;
      });
      if (autoClose) this.closeEndpointModal();
      return result;
    }
    catch(e){}
  }

  async saveIdentityLabel(e, identity) {
    console.log(e);
    let label = e.target.value.trim().toLowerCase();
    let currentLabel = identity.connectRecord?.cache?.json?.label || '';
    if (label && label !== currentLabel && Date.now() > this.lastIdentityLabelSave + 2000) {
      this.lastIdentityLabelSave = Date.now();
      await App.saveIdentityLabel(identity, label)
        .then(e => notify.success('Your profile info was saved'))
        .catch(e => {
          e.target.value = currentLabel;
          notify.error('There was an error saving your new label for this identity');
        });
    }
  }

  render() {
    const identities = Object.values(this.identities || {});

    return html`
      <section page-section>
        ${ !identities?.length ? 
          html`
            <connect-widget></connect-widget>
          ` : 
          html`
            <h2>Identities</h2>
            <ul id="identity_list" limit-width>
              ${identities.map(identity => {
                const did = identity.connectedDid;
                return html`
                <li>
                  <div flex="center-y">
                    <a href="/profiles/${did}">
                      <sl-avatar image="${identity.avatar || `https://dweb/${did}/read/protocols/${this.profileProtocolEncoded}/avatar`}" shape="circle" size="small"></sl-avatar>
                      ${did}
                    </a> 
                    <sl-button detail-box-toggle circle size="small" @click="${this.toggleIdentityDetails}">
                      <sl-icon name="chevron-down"></sl-icon>
                    </sl-button>
                  </div>
                  <detail-box hide-toggle>
                    <div>
                      <div columns="2 labels-right">
                        <span>Identity Label:</span>
                        <div>
                          <sl-input size="small" value="${identity?.connectRecord?.cache?.json?.label}" autocomplete="off" placeholder="Ex: social, career, family" 
                            @sl-input="${e => e.target.value = e.target.value.trim().toLowerCase()}"
                            @sl-change="${e => this.saveIdentityLabel(e, identity)}"
                          ></sl-input>
                        </div>

                        <span>Backup:</span>
                        <div>
                          <sl-button size="small" @click="${ e => DWeb.identity.backup(identity, { to: 'file' }) }">
                            <sl-icon slot="prefix" name="download"></sl-icon> Download identity backup
                          </sl-button>
                        </div>
                      </div>

                      <h3 flex="center-y">
                        <span>Datastore Locations</span>
                        <sl-icon-button name="pencil" variant="default" size="medium" @click="${ e => this.openEndpointModal(identity) }"></sl-icon-button>
                      </h3>
                      ${this.generateEndpointItems(identity, endpoints => html`<div>${endpoints.join('<br>')}</div>`)}
                    </div>
                  </detail-box>
                </li>
              `})}
            </ul>
            <div id="create_restore_buttons" flex="center-x center-y">
              <sl-button id="create_identity_button" variant="success" size="small" @click="${ e => this.createIdentityModal.show() }">
                <sl-icon slot="prefix" name="person-plus"></sl-icon> Create an Identity
              </sl-button>
              <sl-button id="restore_identity_button" variant="primary" size="small" @click="${ e => App.restoreIdentityModal.show() }">
                <sl-icon slot="prefix" name="person-up"></sl-icon> Restore an Identity
              </sl-button>
              <sl-button id="restore_identity_button" variant="primary" size="small" @click="${ e => App.qrScannerModal.show()}">
                <sl-icon slot="prefix" name="window-stack"></sl-icon> Connect an App
              </sl-button>
            </div>
          `
        }
      </section>

      <sl-dialog id="create_identity_modal" label="Create an Identity" placement="start" fit-content>
        <create-identity @identity-created="${e => this.createIdentityModal.hide() }"></create-identity>
      </sl-dialog>

      <sl-dialog id="modify_endpoints_modal" label="Modify Endpoints" placement="start" @sl-after-hide="${ e => this.identityEndpointUpdate = null }">
        <div id="modify_endpoints_identity" flex="center-y">
          ${
            this.identityEndpointUpdate ?
              html`
                <sl-avatar image="${this.identityEndpointUpdate.identity?.avatar || `https://dweb/${this.identityEndpointUpdate.identity.connectedDid}/read/protocols/${this.profileProtocolEncoded}/avatar`}" shape="circle" size="small"></sl-avatar>
                <div>${this.identityEndpointUpdate.identity.connectedDid}</div>
              ` : nothing
          }
        </div>
        <p>This is an advanced feature to edit the datastore locations of the DID above. Do not change these values unless you know what you are doing.</p>
        <section>
          ${
            this.identityEndpointUpdate ? 
              this.generateEndpointItems(this.identityEndpointUpdate.identity, (endpoints) => {
                return endpoints.map((endpoint, index) => {
                  return html`
                  <div index="${index}" class="service-endpoint-entry" flex="center-y">

                    <sl-input class="service-endpoint-input" size="small" value="${endpoint}" @input="${e => {
                      endpoints[index] = e.target.value;
                    }}"></sl-input>

                    <sl-button class="remove-endpoint-button" size="small" @click="${ e => {
                          endpoints.splice(index, 1)
                          this.identityEndpointUpdate = { ...this.identityEndpointUpdate };
                        }}">
                        <sl-icon slot="prefix" name="x-lg">
                      </sl-icon>
                    </sl-button>

                    <sl-button class="add-endpoint-button" size="small" @click="${ e => {
                        endpoints.push('');
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
        <sl-button id="close_endpoints_button" slot="footer" @click="${ async e => this.closeEndpointModal() }">Close</sl-button>
        <sl-button id="submit_endpoints_button" slot="footer" variant="success" @click="${ async e => this.updateEndpoints(true) }">Submit</sl-button>
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
        padding: 1.2rem 1.1rem;
        background: rgb(183 192 254 / 4%);
        border: 1px solid rgb(183 192 254 / 9%);
        border-radius: 5px;
      }

      #identity_list detail-box h3 {
        margin: 1.75rem 0 1rem;
        border-bottom: 1px solid rgba(255 255 255 / 8%);
        padding: 0 0 0.25rem;
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

    /* Modify Endpoints Dialog */

      #modify_endpoints_modal::part(panel) {
        max-width: 500px;
      }

      .service-endpoint-entry:not(:last-child) {
        margin-bottom: 1rem;
      }

      .service-endpoint-input {
        flex: 1;
        margin: 0;
      }

      .service-endpoint-input ~ sl-button {
        margin: 0 0 0 0.5rem;
      }

      .service-endpoint-entry sl-icon {
        stroke: currentColor;
      }

      .service-endpoint-entry .remove-endpoint-button::part(base) {
        color: #ff2e2e;
      }

      .service-endpoint-entry .add-endpoint-button::part(base) {
        color: #00ba00;
      }

      .service-endpoint-entry:not(:last-child) .add-endpoint-button {
        visibility: hidden;
        pointer-events: none;
      }

      #modify_endpoints_identity sl-avatar {
        --size: 2.25rem;
        margin: 0 0.6rem 0 0;
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
