import { LitElement, css, html } from 'lit'

import '../components/shoelace.js';
import PageStyles from '../styles/page.js';

import { State, Query, Spinner, SpinnerStyles } from '../components/mixins';

export class IdentitiesPage extends LitElement.with(State, Query, Spinner) {

  static properties = {
    ready: { store: 'page' },
    identities: { store: 'page' }
  }

  static query = {
    createIdentityButton: '#create_identity_button'
  }

  constructor() {
    super()
  }

  firstUpdated() {
    if (!this.ready) {
      this.startSpinner('section', { minimum: 1200, renderImmediate: true });
    }
  }

  updated(props){
    if (props.has('ready') && this.ready) {
      this.stopSpinner();
    }
  }

  render() {
    return html`
      <section>
        ${ !this?.identities?.length ? 
          html`<connect-widget></connect-widget>` : 
          html`
            <h2>Identities</h2>
            <ul id="identity_list" limit-width>
              ${this.identities.map(identity => html`
                <li flex="center-y">
                  
                  <a href="/profiles/${identity.did.uri}">
                    <sl-avatar image="" shape="circle" size="small"></sl-avatar>
                    ${identity.did.uri}
                  </a>
                  <sl-button size="small" @click="${ e => DWeb.identity.backup(identity, { to: 'file' }) }">
                    <sl-icon slot="prefix" name="download"></sl-icon> Backup
                  </sl-button>
                </li>
              `)}
            </ul>
            <sl-button id="create_identity_button" variant="success" size="small" @click="${ async e => {
              if (this.createIdentityButton.loading) return false;
              this.createIdentityButton.loading = true;
              await DWeb.identity.create({ dwnEndpoints: ['http://localhost:3000'] });
              DWeb.identity.list().then(list => this.identities = list);
              this.createIdentityButton.loading = false;
            }}">
              Create New Identity
            </sl-button>
          `
        }
      </section>

      <sl-dialog id="create_identity_modal" label="Create an Identity" placement="start" fit-content>
        
      </sl-dialog>
    `
  }

  static styles = [
    PageStyles,
    SpinnerStyles,
    css`
      :host {
        
      }

      connect-widget {
        align-self: center;
      }

      #identity_list li {
        padding: 1rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
        cursor: pointer;
      }

      #identity_list li:first-child {
        border-top: 1px solid rgba(0, 0, 0, 0.4);
      } 

      #identity_list a {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: none;
        color: var(--sl-color-blue-700);
      }

      #identity_list sl-avatar {
        --size: 2.25rem;
        margin: 0 0.5rem 0 0;
      }

      #identity_list sl-button {
        margin: 0 0 0 0.75rem;
      }

      #create_identity_button {
        display: block;
        width: fit-content;
        margin: 3rem auto 0;
      }

      @media(max-width: 800px) {

      }
    `
  ]
}

customElements.define('identities-page', IdentitiesPage)
