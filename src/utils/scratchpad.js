

async function triggerForm(fields, element = document.body) {
  new Promise(resolve => {
    const iframe = document.createElement('iframe');
    iframe.src = location.origin;
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.style.zIndex = '-1000';

    iframe.addEventListener('load', function() {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      const form = iframeDoc.createElement('form');
      form.action = '#';
      form.method = 'POST';

      for (let field in fields) {
        const input = iframeDoc.createElement('input');
        input.type = 'text';
        input.name = field;
        input.value = fields[field];
        input.autocomplete = field === 'password' ? 'current-password' : field;
        form.append(input);
      }

      iframeDoc.body.append(form);
      form.submit();

      setTimeout(() => {
        iframe.remove();
        resolve();
      }, 100);

    }, { once: true });

    element.append(iframe);
  });
}