import { LitElement, css, html } from 'lit';
import { State, Query, Spinner } from '../components/mixins';
import { DOM } from '../utils/dom.js';
import QrScanner from 'qr-scanner' ;

export class QRCodeScanner extends LitElement.with(State, Query, Spinner){
  static styles = css`
    :host {
      display: block;
    }
  `;

  static query = {
    video: ['#qr-video', true],
    videoContainer: ['#video-container',true],
    camList: ['#cam-list', true],
    fileSelector: ['#file-selector', true],
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div id="video-container">
          <video id="qr-video"></video>
      </div>
      <div>
          <b>Select Camera:</b>
          <select id="cam-list">
              <option value="environment" selected>Environment Facing (default)</option>
              <option value="user">User Facing</option>
          </select>
      </div>

      <h1>Scan from File:</h1>
      <input type="file" id="file-selector">
    `;
  }

  setResult(result) {
    if (result.data) {
      this.scanner.stop();
      DOM.fireEvent(this, 'scanned-connect', { detail: { data: result.data } });
      this.parentElement.hide();
    }
  }

  startCamera() {
    QrScanner.hasCamera().then(hasCamera => {
      if (!hasCamera) {
        //TODO: Alert differently
        alert('No camera found.');
      } else {
        this.scanner.start();
      }
    });
  }

  firstUpdated() {

    // ####### Web Cam Scanning #######
    this.scanner = new QrScanner(this.video, result => this.setResult(result), {
        onDecodeError: error => { },
        highlightScanRegion: true,
        highlightCodeOutline: true,
    });

    this.videoContainer.appendChild(this.scanner.$canvas, this.videoContainer.firstChild);

    this.camList.addEventListener('change', event => {
        this.scanner.setCamera(event.target.value);
    });

    // ####### File Scanning #######

    this.fileSelector.addEventListener('change', event => {
        const file = this.fileSelector.files[0];
        if (!file) {
            return;
        }
        QrScanner.scanImage(file, { returnDetailedScanResult: true })
            .then(result => this.setResult(result));
    });
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.scanner.stop();
  }
}

customElements.define("qrcode-scanner", QRCodeScanner);