
import { DWeb } from './utils/dweb.js';
import { State } from './components/mixins/index.js';
import { Datastore } from './utils/datastore.js';

import { natives } from './utils/helpers.js';

async function initializeIdentities(list){
  const identities = {};
  list = list || await DWeb.identity.list();
  await Promise.all(list.map(async identity => {
    identities[identity.did.uri] = identity;
    if (identity.web5) return;
    const web5 = identity.web5 = await DWeb.use(identity);
    identity.datastore = new Datastore(web5);
  }));
  return identities;
}

let App;
const $App = (superClass) => class extends superClass.with(State) {

  static properties = {
    ready: { store: 'page' },
    identities: { store: 'page' },
    avatars: { store: 'page' }
  }

  constructor(){
    super();

    if (App) throw '$App is a singleton and an instance already exists.';
    else App = this;

    let ready;
    this.ready = new Promise(resolve => ready = resolve);
    initializeIdentities().then(identities => {
      this.identities = identities;
      this.ready.state = true;
      ready(true);
    });
  }

  async updateState(prop, value, merge) {
    const currentValue = this[prop];
    value = value === undefined ? currentValue : value;
    if (Array.isArray(value)) {
      this[prop] = merge && value !== currentValue ? [ ...(currentValue || []), ...(value || [])] : { ...value };
    }
    else if (typeof value === 'object' && value) {
      this[prop] = merge && value !== currentValue ? { ...(currentValue || {}), ...(value || {}) } : { ...value };
    }
    else {
      this[prop] = value;
    }
    return this[prop];
  }

  async updateProfileImage(identity, type, file){
    const record = await identity.datastore.putRecordPath('profile', type, file, { published: true });
    identity[type] = record.drl + '?cache-updated=' + new Date().getTime();
    this.updateState('identities');
    return record;
  }

  async addIdentities(list){
    const identities = await initializeIdentities(Array.isArray(list) ? list : [list]);
    return this.identities = { ...this.identities, ...identities };
  }

}

export { $App, App };