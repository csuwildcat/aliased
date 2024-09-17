
import { Web5 } from '@web5/api';
import { DidJwk, DidDht, BearerDid } from '@web5/dids';
import { Web5UserAgent } from '@web5/user-agent';

import {
  storage,
  getUserDidOptions,
  registerEndpoints,
  generateGrants
} from './helpers';

import {
  triggerDownload,
  triggerForm,
  createPopup,
  createHiddenFrame
} from './dom';

let initialize;
let connectInstance;
const instances = {};
const didLabelRegex = /(?:[^@]*@)?(did:[a-z0-9]+:[a-zA-Z0-9-]+)/;

window.addEventListener('load', e => {
  const framed = window.self !== window.top;
  if (location.pathname === '/dweb-connect' && (framed || window.opener)) { 
    window.addEventListener('message', async e => {
      const { type, did, permissions } = e.data;
      if (type === 'dweb-connect-support-request' && framed) {
        const response = await DWeb.connect?.onSupportRequest?.(did).catch(e => false);
        window.parent.postMessage({
          type: 'dweb-connect-support-response',
          supported: response === false ? false : !!(await DWeb.identity.get(did))
        }, e.origin);
      }
      else if (type === 'dweb-connect-authorization-request') {
        console.log('Authorization request from: ', e.origin);
        if (!window?.opener?.closed) {
          let delegateDid, grants;
          const { authorize } = (await DWeb.connect?.onAuthorizationRequest?.(e.origin, did, permissions, e).catch(e => {})) || {};
          if (authorize) {
            try {
              const web5 = await DWeb.use(did);
              ({ delegateDid, grants } = await generateGrants(web5, permissions).catch(e => {
                console.error(e);
                return {};
              }));
              if (!grants) {
                console.error('Failed to generate grants');
              }
            }
            catch (e) {
              console.log(e)
              DWeb.connect?.onGrantError?.(e.origin, did, permissions);
            }
          }
          DWeb.connect?.onAuthorizationComplete?.(e.origin, did, permissions, grants);
          window.opener.postMessage({
            type: 'dweb-connect-authorization-response',
            delegateDid,
            grants
          }, e.origin);
          
        }
        window.close();
      }
    });
    window.opener?.postMessage({ type: 'dweb-connect-loaded' }, '*');
  }
});

window.addEventListener('beforeunload', () => DWeb.connect.abort());

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
      const list = await (await getAgent()).identity.list();
      list.forEach(item => {
        item.connectedDid = item.metadata?.connectedDid || item.did.uri;
      });
      return list;
    },
    async get(uri){
      const identity = await (await getAgent()).identity.get({ didUri: uri })
      if (!identity) return;
      identity.connectedDid = identity?.metadata?.connectedDid || identity.did.uri;
      return identity;
      // const identities = await this.list();
      // return identities.find(identity => identity.did.uri === uri);
    },
    async addAutofillDid(value){
      await triggerForm({ email: value });
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
    const delegateDid = identity?.metadata?.connectedDid ? identity.did.uri : undefined;
    const uri = identity?.metadata?.connectedDid || identity?.did?.uri || identity?.uri || identity;
    return instances[uri] || (instances[uri] = new Promise(async resolve => {
      const agent = await getAgent();
      const entry = await DWeb.identity.get(delegateDid || uri);
      if (!entry) {
        await agent.identity.manage({ portableIdentity: await getPortableDid(identity) });
      }
      const instance = new Web5({
        agent: agent,
        connectedDid: uri,
        delegateDid
      });
      if (options.sync !== false) {
        const isRegistered = await agent.sync.getIdentityOptions(uri); 
        if (!isRegistered) {
          await agent.sync.registerIdentity({ did: uri });
        }
      }
      resolve(instance);
    }));
  },
  dispose(instance){
    (instance?.agent || instance).sync.stopSync();
    delete instances[instance.connectedDid];
  },
  connect: {
    abort: (reject) => {
      if (connectInstance) {
        clearInterval(connectInstance.interval);
        window.removeEventListener('message', connectInstance.listener);
        if (reject !== false) connectInstance.reject();
        connectInstance.window.close();
        connectInstance = null;
      }
    },
    attachInput(element, options = {}){
      if (element._dweb_connect) return;
      const settings = element._dweb_connect = {
        event: options.event || 'change',
        listener: async e => {
          const input = e.target.closest('input') || e.composedPath().find(el => el.tagName === 'INPUT') || element;
          const did = input.value?.match?.(didLabelRegex)?.[1];
          if (!did) options?.onError?.('Invalid DID');
          else {
            if (connectInstance) connectInstance.window.focus();
            else {
              element.setAttribute('dweb-connect-active', '');
              try {
                const response = await DWeb.connect.webWallet(did, e, options);
                options?.onConnect?.(...response);
              }
              catch(e) {
                options?.onError?.(e);
              }
              element.removeAttribute('dweb-connect-active');
            }
          }
        }
      }
      element.addEventListener(settings.event, settings.listener)
    },
    detachInput(element){
      if (!element._dweb_connect) return;
      element.removeAttribute('dweb-connect-active');
      element.removeEventListener(element._dweb_connect.event, element._dweb_connect.listener)
      delete element._dweb_connect;
    },
    async webWallet(did, event, options = {}){
      const maxLoadTime = 10000;
      return new Promise(async (resolve, reject) => {
        if (connectInstance) {
          connectInstance.window.focus();
          throw 'An attempt to connect to a web wallet is already in progress';
        }
        if (!event.isTrusted) throw 'Connecting to a web wallet must be initiated by a user action';
        connectInstance = { window: createPopup(), reject};
        const progressCallback = options.onProgress;
        const connectData = await fetch(`https://dweb/${did}/read/protocols/${encodeURIComponent('https://areweweb5yet.com/protocols/profile')}/connect`).then(res => {
          return res.json();
        }).catch(e => {});
        const wallets = connectData?.webWallets;
        if (!wallets?.length) {
          reject('No wallets found for ' + did);
          return;
        }
        connectInstance.window.message.textContent = 'Wallets found. Attempting to connect...';
        progressCallback?.({ stage: 'wallets-found', wallets });
        const walletDomain = await Promise.any(wallets.reduce((promises, domain) => {
          const url = new URL(domain);
          if (url.protocol.match('http')) {
            promises.push(new Promise(async (resolve, reject) => {
              createHiddenFrame({
                appendTo: document.body,
                src: url.origin + '/dweb-connect',
                onLoad: iframe => {
                  window.addEventListener('message', e => {
                    if (e.origin === url.origin && e.data.type === 'dweb-connect-support-response') {
                      iframe.remove();
                      e.data.supported ? resolve(url.origin) : reject();
                    }
                  });
                  iframe.contentWindow.postMessage({ type: 'dweb-connect-support-request', did }, url.origin);
                  setTimeout(() => {
                    iframe.remove();
                    reject();
                  }, maxLoadTime);
                },
                onError: iframe => {
                  iframe.remove();
                  reject();
                }
              });
            }));
          }
          return promises;
        }, [])).catch(e => null);
        if (!walletDomain) {
          reject('No wallet was able to provide connection support for ' + did);
          return;
        }
        let loaded = false;
        async function messageListener(e){
          const { type, delegateDid, grants } = e.data;
          if (e.origin === walletDomain){
            if (type === 'dweb-connect-loaded') {
              loaded = true;
              connectInstance.window.postMessage({
                type: 'dweb-connect-authorization-request',
                did,
                permissions: options.permissions
              }, walletDomain);
            }
            else if (type === 'dweb-connect-authorization-response') {
              DWeb.connect.abort(false);
              if (grants) {
                const agent = await getAgent();
                const identity = await agent.identity.import({ portableIdentity: {
                  portableDid: delegateDid,
                  metadata    : {
                    connectedDid: did,
                    name   : 'Default',
                    tenant : delegateDid.uri,
                    uri    : delegateDid.uri,
                  }
                }});
                await agent.identity.manage({ portableIdentity: await identity.export() });
                const connectedProtocols = await Web5.processConnectedGrants({ grants, agent, delegateDid: delegateDid.uri });
                const isRegistered = await agent.sync.getIdentityOptions(did);
                if (!isRegistered) {
                  await agent.sync.registerIdentity({
                    did,
                    options : {
                      delegateDid: delegateDid.uri,
                      protocols: connectedProtocols
                    }
                  });
                }
                await agent.sync.sync('pull');
                resolve({ did, delegateDid, grants });
              }
              else reject('Authorization rejected for connection request to ' + did);
            }
          }
        }
        window.addEventListener('message', messageListener);
        let elapsedTime = 0;
        const intervalDuration = 500;
        connectInstance.interval = setInterval(() => {
          elapsedTime += intervalDuration;
          if (connectInstance?.window?.closed || !loaded && elapsedTime > maxLoadTime) {
            DWeb.connect.abort();
          }
        }, intervalDuration);
        progressCallback?.({ stage: 'requesting-authorization', walletDomain });
        connectInstance.window.location.href = walletDomain + '/dweb-connect';
      }).finally(() => {
        DWeb.connect.abort();
      })
    }
  }
}