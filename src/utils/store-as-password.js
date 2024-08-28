

const keyMap = {
  Ed25519: {
    kty: 'OKP',
    alg: 'EdDSA'
  },
  secp256k1: {
    kty: 'EC',
    alg: 'ES256K'
  }
}

function deflate(json){
  json = structuredClone(json);
  const did = json.portableDid;
  const doc = did.document;
  delete doc.id;
  delete json.metadata;
  doc.verificationMethod = doc.verificationMethod.map(jwk => {
    return { id: jwk.id }
  })
  did.privateKeys.forEach(jwk => {
    delete jwk.kty;
    delete jwk.kid;
    delete jwk.alg;
  })
  let result = JSON.stringify(json).replace(new RegExp(did.uri, 'g'), '');
  result = JSON.parse(result)
  result.portableDid.uri = did.uri;
  // gzip zip up
  return JSON.stringify(result);
}

function inflate(string){
  // gzip unzip
  let json = JSON.parse(string);
  const uri = json.portableDid.uri;
  const did = json.portableDid;
  const doc = did.document;
  
  doc.id = uri;
  
  json.metadata = {
    name: uri,
    uri: uri,
    tenant: uri
  }
  did.privateKeys = did.privateKeys.map(jwk => Object.assign(jwk, keyMap[jwk.crv]))
  
  doc.verificationMethod = doc.verificationMethod.map((jwk, i) => {
    let key = JSON.parse(JSON.stringify(did.privateKeys[i]))
    delete key.d;
    return {
      id: uri + jwk.id,
      type: 'JsonWebKey',
      controller: uri,
      publicKeyJwk: key
    }
  });

  ['authentication', 'assertionMethod', 'capabilityDelegation', 'capabilityInvocation', 'keyAgreement'].forEach(purpose => {
    let ids = doc[purpose];
    if (ids) doc[purpose] = ids.map(id => uri + id)
  })
  
  doc?.service.forEach(service => {
    if (service.type === 'DecentralizedWebNode') {
      service.id = uri + service.id;
      service.enc = uri + service.enc || '';
      service.sig = uri + service.sig || '';
    }
  }) 
  return json;
}

async function getAgent(){
  return DWeb.initialize({ portableAgent: false });
}

async function getPortableDid(identity){
  return identity?.export?.() || identity;
}

const methods = {
  backup: async function (identity, options = {}){
    const portableDid = await getPortableDid(identity);
    if (options.to === 'file') {
      triggerDownload(identity.did.uri.replace(/:/g, '+'), JSON.stringify(portableDid, null, 2))
    }
    else {
      triggerForm({
        username: (options.name ? options.name + '@' : '') + identity.did.uri,
        password: deflate(portableDid)
      });
    }
  },
  restore: async function (options = {}){
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
              importIdentity(agent, portableIdentity);
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
        let portableIdentity = typeof options.backup === 'string' ? JSON.parse(options.backup) : this.backup;
        importIdentity(agent, portableIdentity);
        resolve(portableIdentity);
      }
    })
  }
}