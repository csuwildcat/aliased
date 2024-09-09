
import { Web5 } from '@web5/api';
import { DidJwk, DidDht, BearerDid } from '@web5/dids';
import { DwnRegistrar } from '@web5/agent';
import { Web5UserAgent } from '@web5/user-agent';
import { ca } from 'date-fns/locale';

let initialize;
const instances = {};
const didLabelRegex = /(?:[^@]*@)?(did:[a-z0-9]+:[a-zA-Z0-9-]+)/;
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
    for (const endpoint of dwnEndpoints) {
      const serverInfo = await agent.rpc.getServerInfo(endpoint);
      if (serverInfo.registrationRequirements.length === 0) {
        continue;
      }
      // register agent DID
      await DwnRegistrar.registerTenant(endpoint, agent.agentDid.uri);
      // register connected Identity DID
      await DwnRegistrar.registerTenant(endpoint, identity.did.uri);
    }
    registration.onSuccess();
  } catch(error) {
    registration.onFailure(error);
  }
}

function triggerDownload(filename, data, type = 'application/json'){
  const blob = new Blob([data], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.append(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const inputTypes = { email: 'email', password: 'password' };
async function triggerForm(fields, element = document.body) {
  return new Promise(resolve => {
    const iframe = createHiddenFrame({
      appendTo: element,
      srcdoc: `<body>${
        Object.keys(fields).reduce((html, field) => {
          const autocomplete = field === 'password' ? 'current-password' : field;
          return html + `<input type="${inputTypes[field] || 'text'}" name="${field}" value="${fields[field]}" autocomplete="${autocomplete}">`;
        }, '<form action="#" method="POST">') + '</form>'
      }<script>document.forms[0].submit();</script></body>`,
      onLoad: setTimeout(() => {
        iframe.remove();
        resolve();
      }, 100)
    })
  });
}

function createHiddenFrame(options = {}){
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '1px'; 
  iframe.style.height = '1px';
  iframe.style.zIndex = '-1000';
  if (options.onLoad) {
    iframe.addEventListener('load', options.onLoad, { once: true });
  }
  if (options.src) iframe.src = options.src;
  else if (options.srcdoc) iframe.srcdoc = options.srcdoc;
  if (options.appendTo) options.appendTo.append(iframe);
  return iframe;
}

async function getAgent(){
  return DWeb.initialize({ portableAgent: false });
}

async function getPortableDid(identity){
  return identity?.export?.() || identity;
}

async function importIdentity(agent, portableIdentity, manage = false){
  const uri = portableIdentity?.portableDid?.uri;
  let exists = await agent.identity.get({ didUri: uri });
  if (!exists) {
    let identity = await agent.identity.import({ portableIdentity });
    if (manage) {
      return await agent.identity.manage({ portableIdentity })
    }
    return identity;
  }
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
      const agent = DWeb.agent = await Web5UserAgent.create({ agentDid });
      agent.sync.startSync({ interval: options.syncInterval || '2m' }).catch(error => {
        console.error(`Sync failed: ${error}`);
      });

      resolve(DWeb.agent);
    }))
  },
  did: {
    async update(identity, modifier){
      if (!modifier) throw 'You must pass in a function that modifies a copy of the DID Document, or an already modified DID Document.';
      if (typeof identity === 'string') {
        const agent = await getAgent();
        identity = await agent.identity.get({ didUri: identity });
      }
      let currentDoc = identity.did.document;
      let updatedDoc = modifier;
      if (typeof modifier === 'function') {
        updatedDoc = structuredClone(identity.did.document);
        await modifier(updatedDoc);
      }
      identity.did.document = updatedDoc;
      try {
        const result = await DidDht.publish({ did: identity.did });
        return result;
      }
      catch(e) {
        identity.did.document = currentDoc;
        throw 'Failed to update DID Document';
      }
    }
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
      // return result;
      const identities = await this.list();
      return identities.find(identity => identity.did.uri === uri);
    },
    async addAutofillDid(value){
      triggerForm({ email: value });
    },
    async backup (identity, options = {}){
      const portableDid = await getPortableDid(identity);
      if (!options.to || options.to === 'file') {
        triggerDownload(identity.did.uri.replace(/:/g, '+'), JSON.stringify(portableDid, null, 2))
      }
      else {
        console.warn(`The mechanism to backup to ${options.to} is not yet implemented`);
      }
    },
    async restore (options = {}){
      const restored = [];
      const agent = await getAgent();
      return new Promise(async (resolve, reject) => {
        if (!options.from || options.from === 'file') {
          try {
            await Promise.all(options?.files?.map(file => {
              return new Promise(resolve => {
                const reader = new FileReader();
                reader.onload = async (e) => {
                  const portableIdentity = JSON.parse(e.target.result);
                  const identity = await importIdentity(agent, portableIdentity, true).catch(e => console.log(e));
                  if (identity) restored.push(identity);
                  resolve();
                }
                reader.readAsText(file);
              })
            }))
            resolve(restored);
          }
          catch(e) {
            reject(e);
          }
        }
        else {
          console.warn(`The mechanism to restore from ${options.from} is not yet implemented`);
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
    }
    return instance;
  },
  dispose(instance){
    (instance?.agent || instance).sync.stopSync();
    delete instances[instance.connectedDid];
  },
  connect: {
    fromInput(input, config = {}){
      input.addEventListener('input', async e => {
        const input = e.target;
        const did = input.value?.match?.(didLabelRegex)?.[1];
        if (did && !input.hasAttribute('dweb-connect-active')) {
          input.setAttribute('dweb-connect-active');
          try {
            const request = DWeb.connect.webWallet(did, config.permissions)
            config?.onRequest?.(request);
            const connection = await request;
            config.onConnect(connection);
          }
          catch(e) {
            config?.onError?.(e);
          }
        }
      })
    },
    async webWallet(did, options = {}){
      new Promise(async (resolve, reject) => {
        const connectDetails = await fetch(`https://dweb/${did}/read/protocols/${encodeURIComponent('https://areweweb5yet.com/protocols/profile')}/connect`).then(res => res.json());
        const wallets = connectDetails?.webWallets;
        if (!wallets?.length) reject(`No wallets found for ${did}`);
        Promise.race(wallets.reduce(domain => {
          const url = new URL(domain);
          if (url.protocol.match('http')) {
            const iframe = createHiddenFrame({
              appendTo: document.body,
              src: url.origin + '/dweb-connect',
              onLoad: () => {
                window.addEventListener('message', e => {
                  if (e.origin === url.origin && e.data.type === 'dweb-connect-response') {
                    resolve(e.data);
                  }
                });
                iframe.contentWindow.postMessage({ type: 'dweb-connect-request', did, options }, url.origin);
              }
            });
          }
        }, []))
      })
    }
  }
}