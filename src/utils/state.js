
class AppChannel {
  static channels = {};

  constructor(name, options = {}) {
    this.name = name;
    this.sender = new BroadcastChannel(name);
    this.receiver = new BroadcastChannel(name);
    this.store = options.store || false;
    this.data = null;
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
    this.data = null;
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

export const UseStates = (superClass) => class extends superClass {
  static properties = {};

  constructor() {
    super();

    // Automatically create reactive properties and connect them to channels
    Object.entries(this.constructor.properties).forEach(([propName, options]) => {
      if (options.channel) {
        const { channelType, store } = options.channel;
        const channelSource = channelType === 'app' ? channels.app : channels.page;
        const channelName = propName.startsWith('$') ? propName : propName;
        const channel = channelSource[channelName];

        // Initialize the property with the channel's stored value if applicable
        if (store && channel.data !== undefined) {
          this[propName] = channel.data;
        }

        // Override the reactive property setter
        const originalSetter = Object.getOwnPropertyDescriptor(this.constructor.prototype, propName)?.set;
        
        Object.defineProperty(this, propName, {
          get: () => channel.data,
          set: (value) => {
            if (channel.data !== value) {
              channel.publish(value);
              if (originalSetter) {
                originalSetter.call(this, value);
              } else {
                this.requestUpdate(propName);
              }
            }
          }
        });

        // Subscribe to channel updates
        channel.subscribe((event) => {
          if (event.data !== this[propName]) {
            this[propName] = event.data;
          }
        });
      }
    });
  }
};


// export const UseStates = (superClass) => class extends superClass {
//   static state = {};
//   constructor() {
//     super();
//     this.state = {};
//     this.constructor?.state?.app?.forEach(prop => {
//       const channel = channels.app[prop];
//       Object.defineProperty(this.state.app, prop, {
//         get: () => channel.data,
//         set: value => channel.publish(value)
//       });
//       channel.subscribe(() => this.requestUpdate(`state.app.${prop}`));
//     })
//     this.constructor?.state?.page?.forEach(prop => {
//       const channel = channels.page[prop];
//       Object.defineProperty(this.state.page, prop, {
//         get: () => channel.data,
//         set: value => channel.publish(value)
//       });
//       channel.subscribe(() => this.requestUpdate(`state.page.${prop}`));
//     })
//   }
// };