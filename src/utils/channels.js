
class AppChannel {
  static channels = {};

  constructor(name, options = {}) {
    this.name = name;
    this.sender = new BroadcastChannel(name);
    this.receiver = new BroadcastChannel(name);
    this.receiver.addEventListener('message', (event) => {
      this.data = event.data;
    });
  }

  publish(data) {
    this.data = data;
    this.sender.postMessage(data);
  }

  subscribe(listener) {
    this.receiver.addEventListener('message', listener);
    if (this.data !== undefined) {
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
  }

  publish(data) {
    this.data = data;
    this.listeners.forEach(listener => listener({ data }));
  }

  subscribe(listener) {
    this.listeners.add(listener);
    if (this.data !== undefined) {
      listener({ data: this.data }); // Immediately send the last value if available
    }
  }

  unsubscribe(listener) {
    this.listeners.delete(listener);
  }
}

export const channels = {
  page: {
    get(name, options = {}) {
      return PageChannel.channels[name] || (PageChannel.channels[name] = new PageChannel(name));
    }
  },
  app: {
    get(name, options = {}) {
      return AppChannel.channels[name] || (AppChannel.channels[name] = new AppChannel(name));
    }
  }
};

