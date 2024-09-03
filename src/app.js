

import { LitElement, html } from 'lit'

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
      //this.requestUpdate();
    });
  }

  async addIdentities(list){
    const identities = await initializeIdentities(Array.isArray(list) ? list : [list]);
    return this.identities = { ...this.identities, ...identities };
  }

  async putRecordForPath(did, protocol, path, data, options = {}){
    await this.ready;
    const identity = this.identities[did];
    let record = options.record;
    if (!record) {
      const { records } = await identity.datastore.queryProtocolRecords(protocol, path, { latestRecord: true });
      record = records[0];
    }
    data = data instanceof File ? new Blob([data], { type: options.dataFormat || data.type }) : data;
    const dataFormat = data instanceof Blob ? data.type : options.dataFormat || 'application/json';
    try {
      if (record) {
        await record.update({ data, dataFormat });
        await record.send(did);
      }
      else {
        record = await identity.datastore.createProtocolRecord(protocol, path, { data, dataFormat });
      }
    }
    catch(e) {
      console.log(e);
    }
    const drl = record.drl = natives.drl.create(did, { protocol, path });
    const blob = record.blob = record.blob || await record.data.blob();
    if (options.cache !== false) {

    }
    return record;
  }

}

export { $App, App };

// import { createContext, provide } from '@lit/context';

// import { Web5  } from '@web5/api';
// import { Datastore } from './datastore.js';

// const initialState = {
//   instance: null,
//   did: null,
//   avatar: null,
//   hero: null,
//   social: null,
//   career: null,
// };

// async function importLatestRecords(did, current, latest){
//   const filtered = new Map();
//   await Promise.all(latest.reduce((promises, record) => {
//     if (!current.has(record.id)) {
//       promises.push(record.import().then(() => record.send(did)))
//     }
//     filtered.set(record.id, record);
//     return promises;
//   }, []));
//   return filtered;
// }

// export const AppContext = createContext(initialState);

// export const AppContextMixin = (BaseClass) => class extends BaseClass {

//   constructor(){
//     super();
//     this.context = {
//       instance: this,
//       connected: false,
//       did: null,
//       avatar: null,
//       hero: null,
//       social: null,
//       career: null,
//     }
//   }

//   async getIdentity(_did, loadProfile){
//     let options = {};
//     // Literally the most janky testing hardcoded shit ever, remove soon and wash mouth out with soap
//     const isAggregator = location.host === 'localhost:5557';
//     if (!isAggregator) {
//       options = {
//         techPreview: {
//           dwnEndpoints: ['http://localhost:3000']
//         }
//       }
//     }
//     const { web5, did } = await Web5.connect(options);
//     globalThis.web5 = web5;
//     globalThis.userDID = this.context.did = did;
//     globalThis.datastore = new Datastore({
//       web5,
//       did,
//       aggregator: isAggregator
//     });
//     if (loadProfile) {
//       await this.loadProfile(did);
//     }
//     return did;
//   }

//   async loadProfile(did){
//     console.log(did);
//     did = this.context.did = localStorage.did = await this.getIdentity(did);
//     this.context.connected = localStorage.connected = true;
//     const records = await Promise.all([
//       datastore.setProfileImage('avatar', null, null, did),
//       datastore.setProfileImage('hero', null, null, did),
//       await datastore.getSocial({ from: did }) || datastore.createSocial({ data: {
//         displayName: '',
//         bio: '',
//         apps: {}
//       }, from: did }),
//       await datastore.getCareer({ from: did }) || datastore.createCareer({ data: {
//         jobs: [],
//         skills: [],
//         education: [],
//       }, from: did }),
//       await datastore.getAggregators({ from: did }) || datastore.setAggregators({
//         aggregators: ['did:dht:jmhez31aa4qauzy78ynd6ffme6hsxk8axyo9f41z67cpuj6atkro']
//       })
//     ])
//     this.updateState({
//       did,
//       connected: true,
//       avatar: records[0],
//       hero: records[1],
//       social: records[2],
//       career: records[3],
//     });
//     return did;
//   }

//   async setProfileImage(type, file){
//     const record = await datastore.setProfileImage(type, file, this.context[type], this.context.did);
//     this.updateState({ [type]: record });
//     return record;
//   }

//   async setSocial(data){
//     const record = this.context.social;
//     await record.update({ data });
//     record.send(this.context.did);
//     this.updateState({ social: record });
//     return record;
//   }

//   async setCareer(data){
//     const record = this.context.career;
//     await record.update({ data });
//     record.send(this.context.did);
//     this.updateState({ career: record });
//     return record;
//   }

//   updateState(partialState, render) {
//     this.context = { ...this.context, ...partialState };
//     if (render !== false) this.requestUpdate();
//   }
// }