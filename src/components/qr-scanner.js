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

  static properties = {
    on: { type: Boolean, reflect: true }
  }

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
        <select id="cam-list" @change="${ e => this.scanner.setCamera(e.target.value) }">
          <option value="environment" selected>Environment Facing (default)</option>
          <option value="user">User Facing</option>
        </select>
      </div>

      <h1>Scan from File:</h1>
      <input type="file" id="file-selector" @change="${ e => {
        const file = this.files[0];
        if (file) {
          QrScanner.scanImage(file, { returnDetailedScanResult: true })
            .then(result => this.setResult(result));
        }
      }}">
    `;
  }

  setResult(result) {
    if (result.data) {
      this.on = false;
      DOM.fireEvent(this, 'scan', { detail: { data: result.data } });
    }
  }

  start() {
    QrScanner.hasCamera().then(hasCamera => {
      if (!hasCamera) {
        //TODO: Alert differently
        alert('No camera found.');
      } else {
        this.scanner.start();
      }
    });
  }
  
  stop() {
    if (this.scanner) {
      this.scanner.stop();
    }
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

  willUpdate(props) {
    props.has('on') && this.on ? this.start() : this.stop();
  }
}

customElements.define("qrcode-scanner", QRCodeScanner);