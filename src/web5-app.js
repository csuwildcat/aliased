import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import appLogo from '/favicon.svg'
import './pwa-badge'

import './components/web-awesome'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Web5App extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  firstUpdated(){
    // discover(this.shadowRoot);
  }

  render() {
    return html`
      <header id="header">
        <h1>WhoDID</h1>
        <wa-avatar></wa-avatar>
      </header>
      <wa-tab-group id="pages" placement="start">
        <wa-tab slot="nav" panel="general">Find</wa-tab>
        <wa-tab slot="nav" panel="custom">Profile</wa-tab>

        <wa-tab-panel name="general">This is the general tab panel.</wa-tab-panel>
        <wa-tab-panel name="custom" style="height: 200vh">This is the custom tab panel.</wa-tab-panel>
      </wa-tab-group>
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
        box-shadow: 0 0 2px 2px rgba(0 0 0 / 25%);
      }

      #header h1 {
        margin: 0 auto 0 0;
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
