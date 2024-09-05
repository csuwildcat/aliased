
if (!globalThis.URLPattern) {
  await import('urlpattern-polyfill')
}

const drlCaptureRegexp = /^(?:dweb:\/\/)?(did:[^\/]+)(?:\/protocols\/([^\/]+)\/?)?/;
const hasBuffers = typeof Buffer !== 'undefined';

const natives = {
  canonicalize: function(object) {
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
  },
  deepSet(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const lastObj = keys.reduce((o, key) => o[key] = o[key] || {}, obj);
    lastObj[lastKey] = value;
  },
  unslash(str) {
    return str.endsWith('/') ? str.slice(0, -1) : str;
  },
  randomString(length = 32) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    bytes.forEach((byte) => {
        result += chars[byte % chars.length];
    });
    return result;
  },
  url: {
    encode: (str) => {
      let encoded = [hasBuffers ? Buffer.from : btoa](encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1)))
      if (hasBuffers) encoded = encoded.toString('base64');
      return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    },
    decode: (str) => {
      let decoded = str.replace(/-/g, '+').replace(/_/g, '/');
      decoded = hasBuffers ? Buffer.from(decoded, 'base64').toString() : atob(decoded);
      return decodeURIComponent(decoded.split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''));
    }
  },
  drl: {
    async cache(drl, record, blob){   
      const cache = await caches.open('drl');
      await cache.put(drl, new Response(blob || await record.data.blob(), {
        headers: {
          'Content-Type': record.dataFormat,
          'dwn-cache-time': Date.now().toString()
        }
      }));
      return drl;
    },
    async fromRecord(record, cache, blob){
      const drl = `https://dweb/${record.author}/records/${record.id}`;
      if (cache) {
        await this.cache(drl, record, blob);
      }
      return drl;
    },
    create(did, { protocol = '', action = '', path = '', params = {}, hash = '', flushCache = false }){
      let url = `https://dweb/${did}${action ? '/' + action : '' }`;
      if (protocol) {
        url += '/protocols/' + encodeURIComponent(protocol);
      }
      url += natives.unslash(path.startsWith('/') ? path : '/' + path);
      const searchParams = new URLSearchParams();
      for (let key in params) {
        const value = params[key];
        if (Array.isArray(value)) {
          value.forEach(v => searchParams.append(key, v));
        }
        else searchParams.append(key, value);
      }
      return url + searchParams.toString() + (flushCache ? '?cache-updated=' + new Date().getTime() : '') + hash;
    },
    parse(_url, pathname = '*'){
      const url = natives.unslash(_url);
      const match = new URLPattern({
        protocol: 'dweb',
        pathname
      }).exec(url)

      if (!match) return null;

      const drlMatches = url.match(drlCaptureRegexp);
      const protocol = drlMatches?.[2];
      return {
        did: drlMatches?.[1] || null,
        protocol: protocol ? decodeURIComponent(protocol) : null,
        path: match.pathname.groups,
        params: Object.fromEntries(new URLSearchParams(match.search.input)),
        hash: match.hash.input
      }
    }
  },
  worker (code, reusable = false) {
    const blob = new Blob([`
      self.onmessage = function(e) {
        const { data, code } = e.data;
        const execute = new Function('data', code);
        try {
          const result = execute(data);
          self.postMessage({ result });
        }
        catch (error) {
          self.postMessage({ error: error.message });
        }
      }
    `], { type: 'application/javascript' });
    const blobURL = URL.createObjectURL(blob);
    const worker = new Worker(blobURL);
    return {
      run: function(data){
        return new Promise((resolve, reject) => {
          worker.onmessage = function(e) {
            if (e.data.error) {
              reject(new Error(e.data.error));
            }
            else resolve(e.data.result);
            if (!reusable) this.terminate();
          };
          worker.postMessage({ data, code });
        })
      },
      terminate: function() {
        worker.terminate();
        URL.revokeObjectURL(blobURL);
      }
    }
  }
}

export { natives };
