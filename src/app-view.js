import { LitElement, css, html } from 'lit'

import litLogo from './assets/lit.svg'
import appLogo from '/favicon.svg'

import './components/pwa-badge'
import './components/shoelace';
import './components/connect-widget';


import { $App } from './app';
import { AppRouter } from './utils/router';
import { State, Query } from './components/mixins';
import { DWeb } from './utils/dweb';

import { activatePolyfills } from '@web5/api';
activatePolyfills();

import './pages/connect';
import './pages/find';
import './pages/identities';
import PageStyles from './styles/page';

export class AppView extends LitElement.with($App, State, Query) {

  static query = {
    connectModal: ['#connect_modal', true],
    nav: ['#nav', true],
    pages: ['#pages', true],
    connectPage: ['#connect', true],
    profilePage: ['#profile', true],
    directoryPage: ['#directory', true],
    identitiesPage: ['#identities', true],
    restoreIdentityModal: ['#restore_identity_modal', true],
    restoreUploader: ['#restore_uploader', true],
  }

  constructor() {
    super()

    this.router = globalThis.router = new AppRouter(this, {
      onRouteChange: async (route, path) => {
        this?.nav?.removeAttribute('open');
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
  }

  async handleRestoreUpload(e) {
    if (!this.restoreUploader || !this.restoreUploader.files.length) return;
    try {
      const restored = await DWeb.identity.restore({ from: 'file', files: this.restoreUploader.files })
      if (restored) await App.addIdentities(restored);
      this.restoreIdentityModal.hide();
    }
    catch(e){
      console.log(e);
    }
    this.restoreUploader.files = [];
  }

  render() {
    return html`

      <header id="header">
        <sl-icon id="nav_toggle" name="list" @click="${e => this.nav?.toggleAttribute('open')}"></sl-icon>
        <sl-icon id="logo_icon" name="app-logo"></sl-icon>
        <h1>Aliased</h1>
      </header>

      <nav id="nav" @click="${e => this.nav?.removeAttribute('open')}">
        <a href="/" ?active="${location.pathname === '/'}">
          <sl-icon slot="prefix" name="people"></sl-icon>
          My IDs
        </a>
        <a href="/profiles" ?active="${location.pathname.startsWith('/profiles')}">
          <sl-icon slot="prefix" name="search"></sl-icon>
          Find
        </a>
      </nav>

      <main id="pages">
        <find-page id="find" page="full-width"></find-page>
        <identities-page id="identities" page></identities-page>
        <connect-page id="connect" page></connect-page>
      </main>

      <sl-dialog id="connect_modal" label="Connect" placement="start" fit-content ?open="${this?.connectModal?.open && this.identity && false}">
        <connect-widget></connect-widget>
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
        --nav-width: 4.5rem;
        --content-height: calc(100vh - var(--header-height));
        --page-padding: 3rem 2.25rem;
      }

      #header {
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        height: var(--header-height);
        padding: 0 0.65rem;
        background: #17456d;
        box-shadow: 0 0 2px 2px rgba(0 0 0 / 25%);
        user-select: none;
        z-index: 2;
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

      #header h1 {
        margin: 0 auto -0.1rem 0.2rem;
        font-family: var(--app-font);
        font-size: 1.75rem;
        font-weight: normal
      }

      #header sl-avatar {
        --size: calc(var(--header-height) - 1rem);
      }

      :host-context(html.sl-scroll-lock) #pages {
        z-index: 3;
      } 

      #nav {
        position: fixed;
        bottom: 0;
        box-sizing: border-box;
        height: var(--content-height);
        width: var(--nav-width);
        padding: 0.6rem 0;
        background: var(--grey);
        box-shadow: 0 0 2px 1px rgba(0 0 0 / 25%);
        border-right: 1px solid rgba(0 0 0 / 60%);
        text-align: center;
        transition: transform 0.3s ease;
        z-index: 1;
      }

      #nav:before {
        content: " ";
        position: fixed;
        top: 0;
        left: 100%;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }

      #nav[open]:before { 
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
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

      #pages {
        position: relative;
        margin: 0 0 0 var(--nav-width);
      }

      #pages > * {
        display: block;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        width: 100%;
        height: var(--content-height);
        padding: var(--page-padding);
        opacity: 0;
        visibility: hidden;
        transition: visibility 0.3s, opacity 0.3s ease;
        overflow-y: clip;
        z-index: -1;
      }

      #pages > [route-state="active"] {
        position: relative;
        height: auto;
        min-height: var(--content-height);
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

      @media(max-width: 800px) {
        #nav {
          top: var(--header-height);
          width: 150px;
          transform: translateX(-100%);
          z-index: 1;
        }
        #nav[open] {
          transform: translateX(0);
        }
        #nav a {
          flex-direction: row;
          justify-content: left;
          height: 3rem;
          margin: 0.5rem 0 0;
          font-size: 1rem;
        }
        #nav a > :first-child {
          display: flex;
          justify-content: center;
          width: 2rem;
          margin: 0 0.5rem 0 1rem;
        }
        #nav sl-avatar {
          --size: 1.55rem;
        }
        #pages {
          margin: 0; 
          overflow: visible;
        }

        #nav_toggle {
          display: unset;
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
