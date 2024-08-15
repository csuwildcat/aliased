import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import appLogo from '/favicon.svg'
import './pwa-badge'

import './components/shoelace';
import './components/web-awesome';

import { UseStates } from './utils/state';

export class Web5App extends UseStates(LitElement) {

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
        <sl-icon name="search-square"></sl-icon>
        <h1>WhoDID</h1>
        ${
          this?.state?.connected ?
            html`
              <a href="/profiles/${this?.state?.did}">
                <wa-avatar id="header_avatar" image="${this.state?.avatar?.cache?.uri}" label="User avatar"></wa-avatar>
              </a>
            ` :
            html`
              <wa-button size="small" @click="${ e => this.connectModal.show() }">
                <wa-icon slot="prefix" name="arrow-right-to-bracket"></wa-icon>
                Connect
              </wa-button>
            `
        }
      </header>

      <wa-tab-group id="pages" placement="start">
        <wa-tab slot="nav" panel="general">Find</wa-tab>
        <wa-tab slot="nav" panel="custom">Profile</wa-tab>

        <wa-tab-panel name="general">This is the general tab panel.</wa-tab-panel>
        <wa-tab-panel name="custom" style="height: 200vh">This is the custom tab panel.</wa-tab-panel>
      </wa-tab-group>

      <sl-dialog id="connect_modal" label="Connect" placement="start">
        <section flex="column center-x center-y">
          <wa-button variant="default" size="large" @click="${ async e => {
            e.target.loading = true;
            const did = await this.loadProfile();
            e.target.loading = false;
            router.navigateTo(`/profiles/${did}`);
            this.connectModal.hide();
          }}">
            <wa-icon slot="prefix" name="user-plus"></wa-icon>
            Create a new identity
          </wa-button>
          <div break-text="OR"></div>
          <wa-button variant="default" size="large" @click="${ e => this.remoteConnect() }">
            <wa-icon slot="prefix" name="at"></wa-icon>
            Connect your identity
          </wa-button>
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
        background: var(--wa-color-blue-50);
        box-shadow: 0 0 2px 2px rgba(0 0 0 / 35%);
        z-index: 1;
      }

      #header h1 {
        margin: 0 auto 0 0;
        font-size: 1.65rem;
      }

      #header wa-avatar {
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

customElements.define('web5-app', Web5App)
