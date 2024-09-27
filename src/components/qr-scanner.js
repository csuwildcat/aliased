import { LitElement, css, html } from 'lit';
import '../components/shoelace';
import { Query, Spinner } from '../components/mixins';
import { DOM } from '../utils/dom.js';
import { notify } from '../utils/notifications.js';
import QrScanner from 'qr-scanner' ;


import PageStyles from '../styles/page.js';

export class QRCodeScanner extends LitElement.with(Query, Spinner){

  static query = {
    video: ['#qr_video', true],
    videoContainer: ['#video_container',true],
    camList: ['#cam_list', true],
    fileInput: ['#file_input', true],
  }

  setResult(result) {
    if (result.data) {
      this.stop();
      DOM.fireEvent(this, 'scan', { detail: { data: result.data } });
    }
  }

  start() {
    QrScanner.hasCamera().then(hasCamera => {
      if (!hasCamera) {
        notify.warning('No camera found');
      } else {
        this.scanner.start();
      }
    });
  }
  
  stop() {
    this?.scanner?.stop?.();
  }

  firstUpdated() {
    // ####### Web Cam Scanning #######
    this.scanner = new QrScanner(this.video, result => this.setResult(result), {
        onDecodeError: error => { },
        highlightScanRegion: true,
        highlightCodeOutline: true,
    });

    this.videoContainer.append(this.scanner.$canvas);
  }

  render() {
    return html`
      <div id="video_container">
        <video id="qr_video"></video>
      </div>

      <div id="options" flex="end">

        <sl-select id="cam_list" value="environment" @sl-change="${ e => this.scanner.setCamera(e.target.value) }">
          <sl-icon slot="prefix" name="camera"></sl-icon>
          <sl-option value="environment">Front</sl-option>
          <sl-option value="user">Selfie</sl-option>
        </sl-select>

        <sl-button id="file_button" @click="${() => this.fileInput.click()}">
          <sl-icon slot="prefix" name="upload"></sl-icon>
          Upload QR
          <input id="file_input" type="file" slot="suffix" @change="${ e => {
            const file = this.files[0];
            if (file) {
              QrScanner.scanImage(file, { returnDetailedScanResult: true })
                .then(result => this.setResult(result));
            }
          }}">
        </sl-button>

      </div>
    `;
  }

  static styles = [
    PageStyles,
    css`
      :host {
        display: block;
      }

      #video_container {
        width: 100%;                           
        max-width: clamp(200px, 425px, 42vh);
        aspect-ratio: 1 / 1; 
        margin: 0 auto 1rem; 
        box-sizing: border-box;
      }

      #video_container canvas {
        height: 100%;
        width: 100%;
        border-radius: 4px;
      }

      #options {
        gap: 0 1rem;
      }

      #file_button {
        margin-left: auto;
      }

      #file_input {
        display: none;
      }
    `
  ];

}

customElements.define('qrcode-scanner', QRCodeScanner);