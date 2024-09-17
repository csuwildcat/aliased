import { LitElement, css, html, nothing } from 'lit'

import '../components/shoelace';
import PageStyles from '../styles/page';
import * as protocols from '../utils/protocols.js';

import { DWeb } from '../utils/dweb';
import { State, Spinner } from '../components/mixins';

export class ConnectPage extends LitElement.with(State, Spinner) {

  static properties = {
    identities: { store: 'page' },
    origin: { type: String },
    permissions: { type: Object }
  }

  constructor() {
    super()
    this.profileProtocolUri = encodeURIComponent(protocols.profile.uri)
  }

  firstUpdated() {
    DWeb.connect.onAuthorizationRequest = async (origin, did, permissions) => {
      this.origin = origin;
      this.did = did;
      this.permissions = permissions;
      return new Promise(async (resolve, reject) => {
        this.#allow = resolve;
        this.#deny = reject;
      });
    };
  }

  #allow;
  allow() {
    this.#allow({ authorize: true });
  }

  #deny;
  deny() {
   this.#deny({ authorize: false });
  }

  render() {
    const identity = this.identities?.[this.did];
    const label = identity?.connectRecord?.cache?.json?.label;;

    return this.did ? html`
      <section flex="center-y column">
        <div id="requestor" flex="center-x center-y" ellipsis>
          <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${this.origin}&size=128"/>
          ${new URL(this.origin).host || this.origin}
        </div>
        <div>is requesting permissions for this identity:</div>
        <div id="identity" ellipsis>
          <sl-avatar image="${identity?.avatar || `https://dweb/${this.did}/read/protocols/${this.profileProtocolUri}/avatar`}" shape="circle" size="small"></sl-avatar>
          ${(label ? label + '@' : '') + this.did}
        </div>
        ${this.permissions.reduce((templates, request) => {
          let canConfigureProtocol;
          let canSync = {};
          const recordMethods = [];
          templates.push(html`<h4 ellipsis>${request.protocolDefinition.protocol}</h4>`);
          request.permissionScopes.forEach(scope => {
            if (scope.interface === 'Records') {
              recordMethods.push(html`<strong>${scope.method.toLowerCase()}</strong>`);
            }
            else if (scope.interface === 'Messages') {
              canSync[scope.method] = true;
            }
            else if (scope.interface === 'Protocols' && scope.method === 'Configure') {
              canConfigureProtocol = true;
            }
          });
          canSync = canSync.Query && canSync.Read && canSync.Subscribe ? html`<strong>sync</strong>` : '';
          templates.push(html`<ul class="permission-list">${[
            canConfigureProtocol ? html`<li>Modify how this protocol works</li>` : nothing,
            recordMethods.length || canSync ? html`<li>${recordMethods}${canSync} data</li>` : nothing
          ]}</ul>`);
          
          return templates;
        }, [])}
        <div id="user_actions" flex="center-x center-y">
          <sl-button id="accept_button" variant="success" @click="${this.allow}">Accept</sl-button>
          <sl-button id="deny_button" variant="primary" @click="${this.deny}">Deny</sl-button>
        </div>
      </section>` : nothing;
  }


  static styles = [
    PageStyles,
    css`

      :host {
        padding: 0 !important;
      }

      :host > section {
        box-sizing: border-box;
        padding: 1rem 1.25rem;
      }

      :host > section > div {
        box-sizing: border-box;
        margin: 1rem 0;
        text-align: center;
      }

      #requestor, #identity {
        padding: 1rem;
        background: rgb(0 0 0 / 70%);
        border-radius: 10rem;
        border: 1px solid rgb(255 255 255 / 0.2);
      }

      #requestor {
        font-size: 1.5rem;
      }

      #requestor img, sl-avatar {
        --size: 2rem;
        height: var(--size);
        margin: 0 1rem 0 0;
      }

      .permission-list {
        padding: 0 0 0 2rem;
      }

      .permission-list strong:first-child {
        text-transform: capitalize;
      }
      .permission-list strong::before {
        content: ", ";
        font-weight: normal;
      }
      .permission-list strong:first-child::before {
        display: none;
      }
      .permission-list strong:last-child::before {
        content: ", and ";
      }

      #user_actions {
        margin: 2rem 0 0;
      }

      #user_actions sl-button {
        flex: 1;
        margin: 0 1rem;
      }

      @media(max-width: 800px) {

      }
    `
  ]
}

customElements.define('connect-page', ConnectPage)
