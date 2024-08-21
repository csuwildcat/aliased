import { LitElement, css, html } from 'lit'

import '../components/shoelace';
import '../components/connect-widget';
import PageStyles from '../styles/page';

import { SpinnerMixin, SpinnerStyles } from '../utils/spinner';

import { Stateful } from '../utils/state';

export class ProfilePage extends Stateful(LitElement) {

  static properties = {
    identity: { store: 'app' },
    identities: { store: 'page' },
    web5: { store: 'page' }
  }

  constructor() {
    super()

  }

  render() {
    return this.identity ? html`
      test
    ` :
    html`
      <connect-widget></connect-widget>
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

      @media(max-width: 800px) {

      }
    `
  ]
}

customElements.define('profile-page', ProfilePage)
