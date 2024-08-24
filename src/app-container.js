import { LitElement, css, html } from 'lit'

import litLogo from './assets/lit.svg'
import appLogo from '/favicon.svg'

import './components/pwa-badge'
import './components/shoelace';
import './components/connect-widget';

import { AppRouter } from './utils/router';
import { State, Query } from './components/mixins';
import { DWeb } from './utils/dweb';
// import { Datastore } from './utils/datastore';

import { activatePolyfills } from '@web5/api';
activatePolyfills();

import './pages/profile';
import './pages/find';
import './pages/identities';
import PageStyles from './styles/page';

export class AppContainer extends LitElement.with(State, Query) {

  static properties = {
    identities: { store: 'page' },
    ready: { store: 'page' }
  }

  static query = {
    connectModal: '#connect_modal',
    nav: '#nav',
    pages: '#pages',
    profilePage: '#profile',
    directoryPage: '#directory',
    identitiesPage: '#identities'
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
        }
      ]
    });

    DWeb.identity.list().then(async list => {
      this.identities = list;
      this.ready = true;
    })
  }

  firstUpdated() {

  }

  async willUpdate(props){
    if (props.has('identity')) { 
      const oldDid = props.get('identity')?.portableDid?.uri;
      const newDid = this?.identity?.portableDid?.uri;
      if (oldDid !== newDid && !oldDid !== !newDid) {
        if (newDid && newDid !== this.loadingDid && newDid !== this?.web5?.connectedDid) {
          this.loadingDid = newDid;
          
          
        }
        else if (this.web5) {
          
        }
      }
    }
  }

  render() {
    return html`

      <header id="header">
        <sl-icon id="nav_toggle" name="list" @click="${e => this.nav.toggleAttribute('open')}"></sl-icon>
        <sl-icon id="logo_icon" name="passport"></sl-icon>
        <h1>iPass</h1>
      </header>

      <nav id="nav" @click="${e => this.nav.removeAttribute('open')}">
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
        <find-page id="find"></find-page>
        <identities-page id="identities"></identities-page>
      </main>

      <sl-dialog id="connect_modal" label="Connect" placement="start" fit-content ?open="${this?.connectModal?.open && this.identity && false}">
        <connect-widget></connect-widget>
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
      }

      #header {
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        height: var(--header-height);
        padding: 0 0.5rem;
        background: var(--sl-color-blue-100);
        box-shadow: 0 0 2px 1px rgba(0 0 0 / 35%);
        user-select: none;
        z-index: 1;
      }

      #nav_toggle {
        display: none;
        font-size: 1.75rem;
        margin: 0 0 0 -1rem;
        padding: 0 0.15em 0 0;
        opacity: 0.5;
        transition: opacity 0.3s ease;
        cursor: pointer;
      }

      #nav_toggle:hover {
        opacity: 1;
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

      #nav {
        position: fixed;
        bottom: 0;
        box-sizing: border-box;
        height: var(--content-height);
        width: var(--nav-width);
        padding: 0.6rem 0;
        background: #1a1a1e;
        text-align: center;
        transition: transform 0.3s ease;
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
        border-right: 2px solid rgb(65 110 255);
      }

      #pages {
        position: relative;
        margin: 0 0 0 var(--nav-width);
      }

      #pages > * {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        width: 100%;
        height: var(--content-height);
        opacity: 0;
        background: var(--body-bk);
        visibility: hidden;
        transition: visibility 0.3s, opacity 0.3s ease;
        overflow: hidden;
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

      @media(max-width: 800px) {
        #nav {  
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

customElements.define('app-container', AppContainer)
