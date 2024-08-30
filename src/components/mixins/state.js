
import { channels } from '../../utils/channels'

export const State = (superClass) => class extends superClass {

  constructor() {
    super();

    this.constructor.properties = {
      ...super.constructor.properties,
      ...this.constructor.properties
    };

    Object.entries(this.constructor.properties || {}).forEach(([prop, options]) => {

      if (options.store && !options._channel) {
        
        const channel = options._channel = (options.store === 'app' ? channels.app : channels.page).get(prop, { store: true });

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

  willUpdate(props){
    if (this.constructor._willUpdateRunning) return;
    this.constructor._willUpdateRunning = true;

    props.forEach((oldValue, prop) => {
      const options = this.constructor?.properties?.[prop];
      let value = this[prop];
      if (options && options.store && value !== options._channel.data) {
        options._channel.publish(value);
      }
    });
    return super.willUpdate(props);
  }

  updated(changedProps) {
    super.updated(changedProps);
    this.constructor._willUpdateRunning = false;
  }
};