import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import appLogo from '/favicon.svg'
import './pwa-badge'

import './components/shoelace';

import { UseStates } from './utils/state';

export class DWebApp extends UseStates(LitElement) {

  static properties = {
    docsHint: { type: String },
    count: { type: Number }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  firstUpdated() {
    this.connectModal = this.shadowRoot.querySelector('#connect_modal');
    // console.log(this.connectModal);
  }

  render() {
    return html`

      <header id="header">
        <sl-icon id="logo_icon" name="search-square"></sl-icon>
        <h1>WhoDID</h1>
        ${
          this?.state?.connected ?
            html`
              <a href="/profiles/${this?.state?.did}">
                <sl-avatar id="header_avatar" image="${this.state?.avatar?.cache?.uri}" label="User avatar"></sl-avatar>
              </a>
            ` :
            html`
              <sl-button size="small" @click="${ e => this.connectModal.show() }">
                <sl-icon slot="prefix" name="arrow-right-to-bracket"></sl-icon>
                Connect
              </sl-button>
            `
        }
      </header>

      <sl-tab-group id="pages" placement="start">
        <sl-tab slot="nav" panel="general">Find</sl-tab>
        <sl-tab slot="nav" panel="custom">Profile</sl-tab>

        <sl-tab-panel name="general">This is the general tab panel.</sl-tab-panel>
        <sl-tab-panel name="custom" style="height: 200vh">This is the custom tab panel.</sl-tab-panel>
      </sl-tab-group>

      <sl-dialog id="connect_modal" label="Connect" placement="start">
        <section flex="column center-x center-y">
          <sl-button variant="default" size="large" @click="${ async e => {
            e.target.loading = true;
            const did = await this.loadProfile();
            e.target.loading = false;
            router.navigateTo(`/profiles/${did}`);
            this.connectModal.hide();
          }}">
            <sl-icon slot="prefix" name="user-plus"></sl-icon>
            Create a new identity
          </sl-button>
          <div break-text="OR"></div>
          <sl-button variant="default" size="large" @click="${ e => this.remoteConnect() }">
            <sl-icon slot="prefix" name="at"></sl-icon>
            Connect your identity
          </sl-button>
        </section>
      </sl-dialog>

      <pwa-badge></pwa-badge>

    `
  }


  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100%;
        --sidebar-width: 5rem;
      }

      #header {
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        height: var(--header-height);
        padding: 0 0.5rem;
        background: var(--sl-color-blue-50);
        box-shadow: 0 0 2px 2px rgba(0 0 0 / 35%);
        z-index: 1;
      }

      #logo_icon {
        margin: 0 0.25rem 0 0;
        font-size: 2rem;
      }

      #header h1 {
        margin: 0 auto 0 0;
        font-size: 1.65rem;
      }

      #header sl-avatar {
        --size: calc(var(--header-height) - 1rem);
      }

      #pages, #pages::part(base) {
        height: 100%;
      }

      #pages::part(nav) {
        position: fixed;
        top: var(--header-height);
        height: 100vh;
        width: var(--sidebar-width);
        text-align: center;
      }

      #pages::part(tabs) {
        border: none;
      }

      #pages::part(body) {
        margin-left: var(--sidebar-width); 
        overflow: visible;
      }

      #pages wa-tab::part(base) {
        padding: 1rem 0;
      }

      @media(max-width: 800px) {
        #pages::part(nav) {  
          width: 160px;
          transition: transform 0.3s ease;
          transform: translateX(-100%);
          z-index: 1;
        }
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `
  }
}

customElements.define('dweb-app', DWebApp)
