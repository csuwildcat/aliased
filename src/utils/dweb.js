
import { Web5 } from '@web5/api';
import { DidJwk, DidDht, BearerDid } from '@web5/dids';
import { DwnRegistrar } from '@web5/agent';
import { Web5UserAgent } from '@web5/user-agent';

let initialize;
const instances = {};
const storage = {
  get: (key, _default) => {
    let value = JSON.parse(localStorage.getItem('web5:' + key));
    if (value) return value;
    if (_default !== undefined) {
      storage.set(key, _default);
      return _default;
    }
  },
  set: (key, value) => {
    localStorage.setItem('web5:' + key, JSON.stringify(value))
    return value;
  },
  modify: (key, fn) => {
    const value = this.get(key);
    return this.set(key, fn(value));
  }
};

function getUserDidOptions(endpoints){
  return {
    services: [
      {
        id              : 'dwn',
        type            : 'DecentralizedWebNode',
        serviceEndpoint : endpoints || ['https://dwn.tbddev.org/beta'],
        enc             : '#enc',
        sig             : '#sig',
      }
    ],
    verificationMethods: [
      {
        algorithm : 'Ed25519',
        id        : 'sig',
        purposes  : ['assertionMethod', 'authentication']
      },
      {
        algorithm : 'secp256k1',
        id        : 'enc',
        purposes  : ['keyAgreement']
      }
    ]
  }
}

async function registerEndpoints(agent, identity, dwnEndpoints = [], registration){
  try {
    for (const dwnEndpoint of dwnEndpoints) {
      // check if endpoint needs registration
      const serverInfo = await agent.rpc.getServerInfo(dwnEndpoint);
      if (serverInfo.registrationRequirements.length === 0) {
        // no registration required
        continue;
      }
      // register the agent DID
      await DwnRegistrar.registerTenant(dwnEndpoint, agent.agentDid.uri);
      // register the connected Identity DID
      await DwnRegistrar.registerTenant(dwnEndpoint, identity.did.uri);
    }
    registration.onSuccess();
  } catch(error) {
    registration.onFailure(error);
  }
}

async function getAgent(){
  return DWeb.initialize({ portableAgent: false });
}

async function getPortableDid(identity){
  await identity?.export?.() || identity;
}

export const DWeb = globalThis.DWeb = {
  storage,
  async initialize(options = {}){
    return initialize || (initialize = new Promise(async resolve => {
      let did = storage.get('agentDid');
      if (!did) {
        if (options.portableAgent !== false) {
          did = await DidDht.create({
            options: getUserDidOptions(options.dwnEndpoints)
          })
        }
        else {
          did = await DidJwk.create({
            options: {
              algorithm: 'Ed25519'
            }
          });
        }
        did = await did.export();
        storage.set('agentDid', did)
      }
      let agentDid = await BearerDid.import({ portableDid: did })
      DWeb.agent = await Web5UserAgent.create({ agentDid });
      resolve(DWeb.agent);
    }))
  },
  identity: {
    async create (options = {}){
      const agent = await getAgent();
      const dwnEndpoints = options.dwnEndpoints || ['https://dwn.tbddev.org/beta'];
      const identity = await agent.identity.create({
        didMethod  : options.method || 'dht',
        metadata   : { name: 'Default' },
        didOptions : getUserDidOptions(dwnEndpoints)
      });
      if (options.cache !== false) {
        await agent.identity.manage({ portableIdentity: await identity.export() })
      }
      if (options.registration !== undefined && dwnEndpoints) {
        await registerEndpoints(agent, identity, dwnEndpoints, options.registration)
              .catch(e => console.log('Endpoint registration failed: ', e))
      }
      return identity;
    },
    async list(){
      const agent = await getAgent();
      return agent.identity.list();
    },
    async get(uri){
      // redo this to use the agent.identity.get(uri)
      // const agent = await getAgent();
      // const result = await agent.identity.get({ didUri: uri })
      // console.log(result, await this.list())
      // return result;
      const identities = await this.list();
      return identities.find(identity => identity.did.uri === uri);
    },
    async backup (identity, options = {}){
      const portableDid = getPortableDid(identity);
      if (options.to === 'file') {
        const blob = new Blob([JSON.stringify(portableDid, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = identity.did.uri.replace(/:/g, '+');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
      else {
        // spike password manager
      }
    },
    async restore (options = {}){
      const agent = await getAgent();
      return new Promise((resolve, reject) => {
        if (options.from === 'file') {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = '.json';
          input.onchange = (event) => {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = async (e) => {
              const contents = e.target.result;
              try {
                const portableIdentity = JSON.parse(contents);
                const uri = portableIdentity?.portableDid?.uri;
                console.log(uri, portableIdentity);
                let exists = await agent.identity.get({ didUri: uri, tenant: uri })
                console.log(exists);
                if (!exists) {
                  await agent.identity.import({ portableIdentity });
                }
                resolve(portableIdentity);
              }
              catch (error) {
                reject(error)
              }
            };
            reader.readAsText(file);
          };
          input.click();
        }
        else {
          // spike password manager
        }
      })
    }
  },
  async use(identity, options = {}){
    const uri = identity?.metadata?.uri || identity?.uri || identity;
    let instance = instances[uri];
    if (instance) return instance;
    const agent = await getAgent();
    const entry = await DWeb.identity.get(uri);
    if (!entry) {
      await agent.identity.manage({ portableIdentity: await getPortableDid(identity) });
    }
    instance = new Web5({
      agent: agent,
      connectedDid: uri
    });
    instances[uri] = instance;
    if (options.sync !== false) {
      await agent.sync.registerIdentity({ did: uri });
      agent.sync.startSync({ interval: options.syncInterval || '2m' }).catch(error => {
        console.error(`Sync failed: ${error}`);
      });
    }
    return instance;
  },
  dispose(instance){
    (instance?.agent || instance).sync.stopSync();
    delete instances[instance.connectedDid];
  }
}