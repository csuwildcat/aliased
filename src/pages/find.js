import { LitElement, css, html } from 'lit'

import '../components/shoelace';
import '../components/connect-widget';
import '../components/profile-view';
import { State, Spinner, SpinnerStyles } from '../components/mixins';

import PageStyles from '../styles/page';
import { min } from 'date-fns';

const didExtractionRegex = /did:[^/?]+/

export class FindPage extends LitElement.with(State, Spinner) {

  static properties = {
    identities: { store: 'page', test: true },
    did: { type: String }
  }

  constructor() {
    super();
  }

  onRouteEnter(route, path) {
    this.loadDid()
  }

  firstUpdated() {
    this.componentReady = true;
    this.loadDid();
  }

  async loadDid() {
    if (this.componentReady) {
      const did = location.pathname.match(didExtractionRegex)?.[0] || '';
      if (did && did !== this.did) {
        await this.startSpinner({ minimum: 1000, fixed: true });
        this.did = did;
      }
    }
  }

  render() {
    return html`
      <profile-view did="${this.did}" @profile-view-load-complete="${ e => this.stopSpinner() }"></profile-view>
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

      /* profile-view {
        transition: opacity 0.3s;
      }

      profile-view[loading] {
        opacity: 0;

      } */

      @media(max-width: 800px) {

      }
    `
  ]
}

customElements.define('find-page', FindPage)
