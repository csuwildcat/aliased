
import { Web5 } from '@web5/api';
import { DwnRegistrar, Oidc } from '@web5/agent';
import { DidJwk } from '@web5/dids';
import { de } from 'date-fns/locale';

export function canonicalize(object) {
  var buffer = '';
  serialize(object);
  return buffer;
  function serialize(object) {
    if (object === null || typeof object !== 'object' ||
        object.toJSON != null) {
        buffer += JSON.stringify(object);
    }
    else if (Array.isArray(object)) {
        buffer += '[';
        let next = false;
        object.forEach((element) => {
            if (next) {
                buffer += ',';
            }
            next = true;
            serialize(element);
        });
        buffer += ']';

    }
    else {
        buffer += '{';
        let next = false;
        Object.keys(object).sort().forEach((property) => {
            if (next) {
                buffer += ',';
            }
            next = true;
            buffer += JSON.stringify(property);
            buffer += ':';
            serialize(object[property]);
        });
        buffer += '}';
    }
  }
}

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

export async function installProtocol(dwn, def, overwrite = false) {
  try {
    let definition;
    const installed = await dwn.protocols.query({ message: {} });
    let record = installed.protocols.find(record => def.protocol === record.definition.protocol);
    if (!record) definition = def;
    else if (overwrite) {
      let newDef = canonicalize(def);
      let existingDef = canonicalize(record?.definition || null);
      if (newDef !== existingDef) {
        definition = def;
      }
    }
    if (definition) {
      const protocol = await dwn.protocols.configure({
        message: { definition }
      })
      await protocol.send()
    }
  }
  catch (e) {
    console.log('Installation of protocol configuration failed', e);
    return false;
  }
  return true;
}

export async function generateGrants(web5, requests){

  const delegateBearerDid = await DidJwk.create();
  const delegateDid = await delegateBearerDid.export();

  // TODO: roll back permissions and protocol configurations if an error occurs. Need a way to delete protocols to achieve this.
  let grants = await Promise.all(requests.map(async request  => {
      const { protocolDefinition, permissionScopes } = request;
      console.log(request);
      const grantsMatchProtocolUri = permissionScopes.every(scope => 'protocol' in scope && scope.protocol === protocolDefinition.protocol);
      if (!grantsMatchProtocolUri) {
        throw new Error('All permission scopes must match the protocol uri they are provided with.');
      }

      await installProtocol(web5.dwn, protocolDefinition);
      console.log(permissionScopes)
      const permissionGrants = await Oidc.createPermissionGrants(
        web5.did.connectedDid,
        delegateBearerDid,
        web5.agent,
        permissionScopes
      ).catch(e => console.log(e))

      return permissionGrants;
  })).then(grants => grants.flat());

  return {
    delegateDid,
    grants
  };

}