
import { channels } from '../../utils/channels'

export const State = (superClass) => class extends superClass {

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