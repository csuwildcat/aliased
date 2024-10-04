import { LitElement, css, html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js';

import '../components/shoelace';
import '../components/connect-widget';
import '../components/profile-view';
import { State, Query, Spinner, SpinnerStyles } from '../components/mixins';

import PageStyles from '../styles/page';
import { profile } from '../utils/protocols';

const didExtractionRegex = /did:[^/?]+/

export class FindPage extends LitElement.with(State, Query, Spinner) {

  static properties = {
    identities: { store: 'page' },
    did: { type: String }
  }

  static query = {
    searchInput: '#search_input',
    profileView: '#profile_view'
  }

  constructor() {
    super();
    this.path = {};
  }

  onRouteEnter(route, path){
    this.path = path;
    this.loadDid()
  }

  firstUpdated() {
    this.componentReady = true;
    this.loadDid();
  }

  async loadDid() {
    if (this.componentReady) {
      const did = this.path.did;
      if (this.did && !did) {
        router.navigateTo(`/profiles/${this.did}`);
      }
      if (did && did !== this.did) {
        this.searchInput.value = did;
        await this.startSpinner({ minimum: 1000, fixed: true });
        this.did = did;
      }
    }
  }

  async onLoadComplete() {
    this.stopSpinner()
  }

  lookupProfile(did = this.searchInput.value){
    if (!did || did === this.did) {
      return;
    }
    if (did !== this.path.did) {
      router.navigateTo(`/profiles/${did}`);
    }
  }

  //did:dht:af8pitiscusuemezfznbk1gg36fywxxrxu1kjms4fxifbhkeaozo

  render() {
    return html`
      <header id="search_bar" flex="center-y center-x" hide-on-overlay>
        <sl-input id="search_input"
                  clearable
                  value="${ifDefined(this.did)}"
                  required
                  size="small"
                  placeholder="Enter a DID to view a profile"
                  pattern="did:dht:[a-zA-Z0-9]+"
                  @sl-clear="${ e => this.did = '' }"
                  @keydown="${ e => e.key === 'Enter' && this.lookupProfile() }"
                  @keypress="${ e => {
                    return !(/^[a-zA-Z0-9_\-:.]+$/.test(String.fromCharCode(e.charCode || e.which))) ? e.preventDefault() : true
                  }}"
        ></sl-input>
        <sl-button variant="primary" size="small" @click="${ e => this.lookupProfile() }" slot="suffix">Find</sl-button>
      </header>
      <section>
        <profile-view id="profile_view" did="${ifDefined(this.did)}" @profile-view-load-complete="${this.onLoadComplete}"></profile-view>
        <div id="placeholder" default-content="cover placeholder">
          <sl-icon name="search"></sl-icon>
          <p>Enter a DID above to view a profile.</p>
        </div>
      </section>
    `
  }


  static styles = [
    PageStyles,
    SpinnerStyles,
    css`

      /* :host {
        padding: 0 !important;
      } */

      .spinner-mixin {
        z-index: 0;
      }

      connect-widget {
        align-self: center;
      }

      #search_bar {
        position: sticky;
        top: var(--header-height);
        height: var(--subheader-height);
        box-sizing: border-box;
        padding: 0 0.8rem 0;
        border-bottom: 1px solid rgba(255 255 255 / 1%);
        box-shadow: 0 2px 1px -1px rgba(0 0 0 / 40%);
        background: hsl(240deg 7% 15% / 90%);
        backdrop-filter: blur(10px) saturate(100%);
        -webkit-backdrop-filter: blur(10px) saturate(100%);
        z-index: 1;
      }

      #search_bar sl-input {
        flex: 1;
        max-width: 700px;
        margin: 0 0.5em 0 0;
        transition: transform 0.4s ease;
      }
      
      profile-view {
        width: 100%;
        max-width: var(--content-max-width);
        margin: 0 auto;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 0;
      }

      profile-view[loaded] {
        opacity: 1;
        /* height: 3000px; */
      }

      #placeholder {
        z-index: 0;
      }

        profile-view[did] ~ #placeholder {
          opacity: 0;
          visibility: hidden;
          z-index: -1;
        }

      #placeholder sl-icon{
        color: var(--sl-color-primary-600);
      }

      .spinner-mixin {
        --inset: var(--header-height) 0 0 var(--nav-width);
      }

      @media(max-width: 800px) {
        #search_bar {
          left: 0;
        }
        .spinner-mixin {
          --inset: var(--header-height) 0 0 0;
        }
      }  

      @media(max-width: 500px) {

        :host {
          background: var(--grey);
        }

        :host > section {
          padding: 0;
        }

        profile-view {
          border: none;
          box-shadow: none;
          background: none;
        }
      }
    `
  ]
}

customElements.define('find-page', FindPage)
