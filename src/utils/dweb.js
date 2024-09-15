
import { Web5 } from '@web5/api';
import { DidJwk, DidDht, BearerDid } from '@web5/dids';
import { DwnRegistrar } from '@web5/agent';
import { Web5UserAgent } from '@web5/user-agent';

let initialize;
let connectInstance;
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

const popupContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connecting...</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      text-align: center;
      background: #000;
      color: #fff;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .text {
      font-size: 16px;
      color: #333;
    }
    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
      font-size: 2em;
    }
      .spinner div {
        position: relative;
        width: 2em;
        height: 2em;
        margin: 0.1em 0.25em 0 0;
      }
      .spinner div::after,
      .spinner div::before {
        content: '';  
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 0.1em solid #FFF;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        animation: spinner 2s linear infinite;
      }
      .spinner div::after {
        animation-delay: 1s;
      }

    @keyframes spinner {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="spinner">
      <div></div>
    </div>
    <div id="message">Locating wallets...</div>
  </div>
</body>
</html>
`;

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
    createHiddenFrame({
      appendTo: element,
      srcdoc: `<body>${
        Object.keys(fields).reduce((html, field) => {
          const autocomplete = field === 'password' ? 'current-password' : field;
          return html + `<input type="${inputTypes[field] || 'text'}" name="${field}" value="${fields[field]}" autocomplete="${autocomplete}">`;
        }, '<form action="#" method="POST">') + '</form>'
      }<script>document.forms[0].submit();</script></body>`,
      onLoad: iframe => setTimeout(() => {
        iframe.remove();
        resolve();
      }, 100)
    })
  });
}

function createHiddenFrame(options = {}){
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.bottom = '0';
  iframe.style.left = '0';
  iframe.style.width = '1px'; 
  iframe.style.height = '1px';
  iframe.style.zIndex = '-1000';
  if (options.onLoad) {
    iframe.addEventListener('load', () => options.onLoad(iframe), { once: true });
  }
  if (options.onError) {
    iframe.addEventListener('error', () => options.onError(iframe), { once: true });
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
          const { grants } = (await DWeb.connect?.onAuthorizationRequest?.(e.origin, did, permissions, e).catch(e => {})) || {};
          window.opener.postMessage({
            type: 'dweb-connect-authorization-response',
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
      if (element.__dweb_connect__) return;
      const settings = element.__dweb_connect__ = {
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
                const connection = await DWeb.connect.webWallet(did, e, options);
                options?.onConnect?.(did, connection);
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
      if (!element.__dweb_connect__) return;
      element.removeEventListener(element.__dweb_connect__.event, element.__dweb_connect__.listener)
      delete element.__dweb_connect__;
    },
    async webWallet(did, event, options = {}){
      const maxLoadTime = 10000;
      return new Promise(async (resolve, reject) => {
        if (connectInstance) {
          connectInstance.window.focus();
          throw 'An attempt to connect to a web wallet is already in progress';
        }
        if (!event.isTrusted) throw 'Connecting to a web wallet must be initiated by a user action';
        const width = 500;
        const height = 600;
        const left = (screen.width - width) / 2;
        const top = (screen.height - height) / 2;
        connectInstance = {};
        connectInstance.window = window.open('', '_blank', `popup=true,width=${width},height=${height},left=${left},top=${top}`);
        connectInstance.window.document.write(popupContent);
        connectInstance.reject = reject;
        const progressCallback = options.onProgress;
        const connectData = await fetch(`https://dweb/${did}/read/protocols/${encodeURIComponent('https://areweweb5yet.com/protocols/profile')}/connect`).then(res => {
          return res.json();
        }).catch(e => {});
        const wallets = connectData?.webWallets;
        console.log(wallets);
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
        function messageListener(e){
          const { type, grants } = e.data;
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
              if (grants) resolve({ did, grants });
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