
const notify = {
  info (message, options = {}){
    const alert = Object.assign(document.createElement('sl-alert'), {
      variant: 'primary',
      duration: 3000,
      closable: true,
      innerHTML: `
        <sl-icon name="${options.icon || 'info-circle'}" slot="icon"></sl-icon>
        ${document.createTextNode(message).textContent}
      `
    }, options);
    return document.body.appendChild(alert).toast();
  },
  success(message, options = {}){
    notify.info(message, Object.assign({
      variant: 'success'
    }, options))
  },
  warning(message, options = {}){
    notify.info(message, Object.assign({
      variant: 'warning'
    }, options))
  },
  error(message, options = {}){
    notify.info(message, Object.assign({
      variant: 'danger'
    }, options))
  }
}

export { notify };
