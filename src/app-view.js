import { LitElement, css, html } from 'lit'

import '@vaadin/app-layout';
import '@vaadin/side-nav';
import '@vaadin/scroller';
import '@vaadin/upload';

import './components/pwa-badge'
import './components/shoelace';
import './components/connect-widget';
import './components/connect-request';
import './components/qr-scanner';

import { $App } from './app';
import { AppRouter } from './utils/router';
import { State, Query } from './components/mixins';
import { DWeb } from './utils/dweb';

import { activatePolyfills } from '@web5/api';
activatePolyfills();

import { DOM } from './utils/dom.js';

import './pages/connect';
import './pages/find';
import './pages/identities';
import PageStyles from './styles/page';
import { Oidc } from '@web5/agent';


export class AppView extends LitElement.with($App, State, Query) {

  static query = {
    appLayout: ['#app_layout', true],
    connectModal: ['#connect_modal', true],
    // nav: ['#nav', true],
    pages: ['#pages', true],
    connectPage: ['#connect', true],
    connectRequestModal: ['#connect_request_modal', true],
    pinModal: ['#pin_modal', true],
    pinModalContent: ['#pin_modal_content', true],
    profilePage: ['#profile', true],
    directoryPage: ['#directory', true],
    identitiesPage: ['#identities', true],
    restoreIdentityModal: ['#restore_identity_modal', true],
    restoreUploader: ['#restore_uploader', true],
    qrScannerModal: ['#qr_scanner_modal', true],
    qrScanner: ['#qr_scanner', true]
  }

  constructor() {
    super()

    this.router = globalThis.router = new AppRouter(this, {
      onRouteChange: async (route, path) => {
        if (this.appLayout && matchMedia('(max-width: 800px)').matches) {
          this.appLayout.drawerOpened = false;
        }
      },
      routes: [
        {
          path: '/',
          component: '#identities'
        },
        {
          path: '/profiles(/)?:did?',
          component: '#find'
        },
        {
          path: '/dweb-connect(/.*)?',
          component: '#connect'
        },
      ]
    });

    DOM.addEventDelegate('sl-show', 'sl-dialog', (e, target) => {
      document.documentElement.setAttribute('overlay-active', '');
    });

    DOM.addEventDelegate('sl-hide', 'sl-dialog', (e, target) => {
      document.documentElement.removeAttribute('overlay-active');
    });
  }

  async handleWalletConnectFlow (e) {
    const connectionURI = new URL(e.detail.data);
    const request_uri = connectionURI.searchParams.get('request_uri');
    const encryption_key = connectionURI.searchParams.get('encryption_key');
    const decryptedConnectionRequest = await Oidc.getAuthRequest(
      request_uri,
      encryption_key
    );

    const connectRequest = document.createElement('connect-request');
    connectRequest.request = decryptedConnectionRequest;
    connectRequest.addEventListener('connect-pin', async (e) => {
      this.pinModalContent.innerHTML = e.detail.pin;
      this.pinModal.show();
    });
    this.connectRequestModal.appendChild(connectRequest);
    this.connectRequestModal.show();
  }

  async handleRestoreUpload(e) {
    if (!this.restoreUploader || !this.restoreUploader.files.length) return;
    try {
      const restored = await DWeb.identity.restore({ from: 'file', files: this.restoreUploader.files })
      if (restored) await App.addIdentity(restored);
      this.restoreIdentityModal.hide();
    }
    catch(e){
      console.log(e);
    }
    this.restoreUploader.files = [];
  }

  render() {
    return html`


    <vaadin-app-layout id="app_layout">
      
      <sl-icon slot="navbar" id="nav_toggle" name="list" @click="${e => this.appLayout.drawerOpened = true}"></sl-icon>
      <sl-icon slot="navbar" id="logo_icon" name="app-logo"></sl-icon>
      <h1 slot="navbar">Aliased</h1>

      <nav id="nav" slot="drawer" @click="${e => this.nav?.removeAttribute('open')}">
        <a href="/" ?active="${location.pathname === '/'}">
          <sl-icon slot="prefix" name="people"></sl-icon>
          My IDs
        </a>
        <a href="/profiles" ?active="${location.pathname.startsWith('/profiles')}">
          <sl-icon slot="prefix" name="search"></sl-icon>
          Find
        </a>
      </nav>
      <sl-button id="drawer_close_button" variant="text" @click="${e => this.appLayout.drawerOpened = false}">
        <sl-icon slot="prefix" name="x-lg" ></sl-icon>
      </sl-button>
      

      <find-page id="find" page="full-width"></find-page>
      <identities-page id="identities" page></identities-page>
      <connect-page id="connect" page></connect-page>

    </vaadin-app-layout>

      <sl-dialog id="connect_modal" label="Connect" placement="start" fit-content ?open="${this?.connectModal?.open && this.identity && false}">
        <connect-widget></connect-widget>
      </sl-dialog>

      <sl-dialog id="pin_modal" label="ConnectPin" placement="start" fit-content>
        <div id="pin_modal_content" flex="center-y column">
        </div> 
        <sl-button id="pin_close" variant="success" @click="${() => this.pinModal.hide()}">Done</sl-button>
      </sl-dialog>

      <sl-dialog id="qr_scanner_modal" label="Scan QR Code" placement="start" fit-content
        @sl-show="${() => this.qrScanner.start()}"
        @sl-hide="${() => this.qrScanner.stop()}"
        >
        <p>Scan a QR code to connect to a DWA.</p>
        <qrcode-scanner id="qr_scanner" @scan="${e => {
          this.qrScannerModal.hide();
          this.handleWalletConnectFlow(e);
        }}"></qrcode-scanner>
      </sl-dialog>

      <sl-dialog id="connect_request_modal" label="ConnectPage" placement="start" fit-content>
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

      <pwa-badge></pwa-badge>

    `
  }


  static styles = [
    PageStyles,
    css`
      :host {
        --header-height: 3rem;
        --subheader-height: 3.5rem;
        --_vaadin-app-layout-navbar-offset-size: var(--header-height);
        --nav-width: 4.5rem;
        --_vaadin-app-layout-drawer-offset-size: var(--nav-width);
        --content-height: calc(100vh - var(--header-height));
        --page-padding: var(--header-height) 0 3rem;
        height: 100%;
      }

      #app_layout {
        --vaadin-app-layout-drawer-width: var(--nav-width);
        height: 100%;
      }

      #app_layout::part(navbar){
        /* position: sticky;
        top: 0; */
        display: flex;
        align-items: center;
        height: var(--header-height);
        min-height: var(--header-height);
        padding: 0 0.65rem;
        background: #17456d;
        box-shadow: 0 0 2px 1px rgba(0 0 0 / 25%);
        user-select: none;
      }

      #nav_toggle {
        display: none;
        font-size: 1.75rem;
        margin: 0 0 0 -1.3rem;
        padding: 0 0.15em 0 0;
        opacity: 0.5;
        transition: opacity 0.3s ease;
        cursor: pointer;
      }

      #nav_toggle:hover {
        opacity: 1;
      }

      #logo_icon {
        /* Use the same hue value as the background color of the header */
        --background-color: 208; 
        font-size: 1.75rem;
      }

      #app_layout > h1 {
        margin: 0 auto -0.1rem 0.2rem;
        font-family: var(--app-font);
        font-size: 1.75rem;
        font-weight: normal
      }

      #app_layout > sl-avatar {
        --size: calc(var(--header-height) - 1rem);
      }

      :host-context(html.sl-scroll-lock) #pages {
        z-index: 3;
      } 

      #app_layout::part(drawer) {
        overflow: visible;
        padding: 0.6rem 0;
        background: var(--grey);
        border-right: 1px solid rgba(0 0 0 / 60%);
      }

      #drawer_close_button {
        position: fixed;
        top: 1rem;
        right: 1rem;
        stroke: red;
        opacity: 0;
        transition: opacity 0.2s ease;
        background: rgba(255 255 255 / 7%);
        border-radius: 100%;
        pointer-events: none;
        z-index: 2;
      }

      [drawer-opened] #drawer_close_button {
        opacity: 1;
        pointer-events: all;
      }

      #nav a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 4rem;
        margin: 0 0 0.5rem;
        font-size: 0.75rem;
        color: rgba(255,255,255,0.75);
        border-right: 2px solid transparent;
        opacity: 0.6;
        transition: opacity 0.3s ease;
        text-decoration: none;
        cursor: pointer;
      }

      #nav *:is(sl-icon, sl-avatar) {
        margin: 0 0 0.2rem;
        font-size: 1.5rem;
        color: #fff;
      }

      #nav sl-avatar {
        --size: 1.55rem;
      }

      #nav sl-icon[name="search"] {
        margin: 0 0 0.3rem;
        font-size: 1.2rem;
      }

      #nav a:hover {
        opacity: 1;
      }

      #nav a[active] {
        opacity: 1;
        color: var(--sl-color-blue-700);
        border-right: 2px solid rgb(51 117 174);
      }

      #nav a[active] sl-icon {
        color: currentColor;
      }

      #app_layout::part(backdrop) {
        background-color: rgba(0 0 0 / 75%);
      }

      #app_layout [page] {
        display: block;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        height: var(--content-height);
        min-height: 100%;
        width: calc(100% - var(--nav-width));
        padding: var(--page-padding);
        opacity: 0;
        visibility: hidden;
        transition: visibility 0.3s, opacity 0.3s ease;
        overflow-y: clip;
        z-index: -1;
      }

      #app_layout [page][route-state="active"] {
        height: auto;
        opacity: 1;
        z-index: 0;
        visibility: visible;
        overflow: visible;
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

      @media(min-width: 800px) {
        #drawer_close_button {
          display: none;
        }
      }

      @media(max-width: 800px) {

        #app_layout {
          --vaadin-app-layout-drawer-width: 200px;
        }
        
        #nav a {
          flex-direction: row;
          justify-content: left;
          height: 3rem;
          margin: 0.25rem 0 0;
          font-size: 1rem;
          padding: 0 2rem 0 1rem;
        }
        #nav a > :first-child {
          display: flex;
          justify-content: center;
          width: 2rem;
          margin: 0 0.5rem 0 0;
        }
        #nav sl-avatar {
          --size: 1.55rem;
        }

        #nav_toggle {
          display: unset;
        }

        #app_layout [page] {
          width: 100%;
        }
      }

      @media(max-width: 500px) {
        #pages > * {
          padding: 1.5rem 1.25rem 1rem;
        }

        #pages > [page~="full-width"] {
          padding: 0;
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
  ]
}

customElements.define('app-view', AppView)
