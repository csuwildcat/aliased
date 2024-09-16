
import { DwnRegistrar } from '@web5/agent';

export const storage = {
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

export function getUserDidOptions(endpoints){
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

export async function registerEndpoints(agent, identity, dwnEndpoints = [], registration){
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