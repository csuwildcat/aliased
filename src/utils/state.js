
class AppChannel {
  static channels = {};

  constructor(name, options = {}) {
    this.name = name;
    this.sender = new BroadcastChannel(name);
    this.receiver = new BroadcastChannel(name);
    this.store = options.store || false;
    this.receiver.addEventListener('message', (event) => {
      if (this.store) {
        this.data = event.data;
      }
    });
  }

  publish(data) {
    if (this.store) {
      this.data = data;
    }
    this.sender.postMessage(data);
  }

  subscribe(listener) {
    this.receiver.addEventListener('message', listener);
    if (this.store && this.data !== null) {
      listener({ data: this.data }); // Immediately send the last value if available
    }
  }

  unsubscribe(listener) {
    this.receiver.removeEventListener('message', listener);
  }

  close() {
    delete AppChannel.channels[this.name];
    this.sender.close();
    this.receiver.close();
  }
}

class PageChannel {
  static channels = {};

  constructor(name, options = {}) {
    this.name = name;
    this.listeners = new Set();
    this.store = options.store || false;
  }

  publish(data) {
    if (this.store) {
      this.data = data;
    }
    this.listeners.forEach(listener => listener({ data }));
  }

  subscribe(listener) {
    this.listeners.add(listener);
    if (this.store && this.data !== null) {
      listener({ data: this.data }); // Immediately send the last value if available
    }
  }

  unsubscribe(listener) {
    this.listeners.delete(listener);
  }
}

export const channels = {
  page: new Proxy(PageChannel.channels, {
    get(target, name) {
      return PageChannel.channels[name] || (PageChannel.channels[name] = new PageChannel(name, { store: name.startsWith('$') }));
    }
  }),
  app: new Proxy(AppChannel.channels, {
    get(target, name) {
      return AppChannel.channels[name] || (AppChannel.channels[name] = new AppChannel(name, { store: name.startsWith('$') }));
    }
  })
};

export const Stateful = (superClass) => class extends superClass {

  constructor() {
    super();

    Object.entries(this.constructor.properties || {}).forEach(([prop, options]) => {
      if (options.store) {
        const channel = options.channel = (options.store === 'app' ? channels.app : channels.page)['$' + prop];

        if (channel.data !== undefined) {
          this[prop] = channel.data;
        }

        channel.subscribe(event => {
          if (event.data !== this[prop]) {
            this[prop] = event.data;
          }
        });
      }
    });
  }

  updated(props){
    props.forEach((oldValue, prop) => {
      const options = this.constructor?.properties?.[prop];
      if (options && options.store && this[prop] !== options.channel.data) {
        options.channel.publish(this[prop]);
      }
    });
    if (super.updated) {
      super.updated(props);
    }
  }
};