var pl=Object.defineProperty;var gs=e=>{throw TypeError(e)};var fl=(e,t,i)=>t in e?pl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var N=(e,t,i)=>fl(e,typeof t!="symbol"?t+"":t,i),Vo=(e,t,i)=>t.has(e)||gs("Cannot "+i);var pe=(e,t,i)=>(Vo(e,t,"read from private field"),i?i.call(e):t.get(e)),se=(e,t,i)=>t.has(e)?gs("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ji=(e,t,i,o)=>(Vo(e,t,"write to private field"),o?o.call(e,i):t.set(e,i),i),$e=(e,t,i)=>(Vo(e,t,"access private method"),i);import{D as bs,a as Ba,O as ml,b as vs,B as gl,W as bl,c as ys,d as cr,e as vl}from"./web-features-DfLqCzi3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=globalThis,Fr=Zi.ShadowRoot&&(Zi.ShadyCSS===void 0||Zi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Br=Symbol(),ws=new WeakMap;let Ur=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==Br)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Fr&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=ws.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&ws.set(i,t))}return t}toString(){return this.cssText}};const yl=e=>new Ur(typeof e=="string"?e:e+"",void 0,Br),P=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new Ur(i,e,Br)},Ua=(e,t)=>{if(Fr)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const o=document.createElement("style"),r=Zi.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}},_s=Fr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return yl(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wl,defineProperty:_l,getOwnPropertyDescriptor:xl,getOwnPropertyNames:Al,getOwnPropertySymbols:kl,getPrototypeOf:Cl}=Object,le=globalThis,xs=le.trustedTypes,El=xs?xs.emptyScript:"",Ho=le.reactiveElementPolyfillSupport,fi=(e,t)=>e,Be={toAttribute(e,t){switch(t){case Boolean:e=e?El:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Vr=(e,t)=>!wl(e,t),As={attribute:!0,type:String,converter:Be,reflect:!1,hasChanged:Vr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),le.litPropertyMetadata??(le.litPropertyMetadata=new WeakMap);class Me extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=As){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,i);r!==void 0&&_l(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){const{get:r,set:s}=xl(this.prototype,t)??{get(){return this[i]},set(a){this[i]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){const n=r==null?void 0:r.call(this);s.call(this,a),this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??As}static _$Ei(){if(this.hasOwnProperty(fi("elementProperties")))return;const t=Cl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(fi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fi("properties"))){const i=this.properties,o=[...Al(i),...kl(i)];for(const r of o)this.createProperty(r,i[r])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[o,r]of i)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const r=this._$Eu(i,o);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(_s(r))}else t!==void 0&&i.push(_s(t));return i}static _$Eu(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ua(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostConnected)==null?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostDisconnected)==null?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EC(t,i){var s;const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const a=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:Be).toAttribute(i,o.type);this._$Em=t,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,i){var s;const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const a=o.getPropertyOptions(r),n=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Be;this._$Em=r,this[r]=n.fromAttribute(i,a.type),this._$Em=null}}requestUpdate(t,i,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??Vr)(this[t],i))return;this.P(t,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,o){this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,a]of r)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(o=this._$EO)==null||o.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(i)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Me.elementStyles=[],Me.shadowRootOptions={mode:"open"},Me[fi("elementProperties")]=new Map,Me[fi("finalized")]=new Map,Ho==null||Ho({ReactiveElement:Me}),(le.reactiveElementVersions??(le.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi=globalThis,fo=mi.trustedTypes,ks=fo?fo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Va="$lit$",ne=`lit$${Math.random().toFixed(9).slice(2)}$`,Ha="?"+ne,Sl=`<${Ha}>`,Ae=document,xi=()=>Ae.createComment(""),Ai=e=>e===null||typeof e!="object"&&typeof e!="function",Hr=Array.isArray,Pl=e=>Hr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",jo=`[ 	
\f\r]`,Ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cs=/-->/g,Es=/>/g,fe=RegExp(`>|${jo}(?:([^\\s"'>=/]+)(${jo}*=${jo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ss=/'/g,Ps=/"/g,ja=/^(?:script|style|textarea|title)$/i,Tl=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),k=Tl(1),Tt=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),Ts=new WeakMap,ye=Ae.createTreeWalker(Ae,129);function Wa(e,t){if(!Hr(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ks!==void 0?ks.createHTML(t):t}const $l=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":t===3?"<math>":"",a=Ze;for(let n=0;n<i;n++){const l=e[n];let c,u,d=-1,p=0;for(;p<l.length&&(a.lastIndex=p,u=a.exec(l),u!==null);)p=a.lastIndex,a===Ze?u[1]==="!--"?a=Cs:u[1]!==void 0?a=Es:u[2]!==void 0?(ja.test(u[2])&&(r=RegExp("</"+u[2],"g")),a=fe):u[3]!==void 0&&(a=fe):a===fe?u[0]===">"?(a=r??Ze,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?fe:u[3]==='"'?Ps:Ss):a===Ps||a===Ss?a=fe:a===Cs||a===Es?a=Ze:(a=fe,r=void 0);const m=a===fe&&e[n+1].startsWith("/>")?" ":"";s+=a===Ze?l+Sl:d>=0?(o.push(c),l.slice(0,d)+Va+l.slice(d)+ne+m):l+ne+(d===-2?n:m)}return[Wa(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class ki{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,a=0;const n=t.length-1,l=this.parts,[c,u]=$l(t,i);if(this.el=ki.createElement(c,o),ye.currentNode=this.el.content,i===2||i===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=ye.nextNode())!==null&&l.length<n;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Va)){const p=u[a++],m=r.getAttribute(d).split(ne),g=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?Dl:g[1]==="?"?Ml:g[1]==="@"?Ol:zo}),r.removeAttribute(d)}else d.startsWith(ne)&&(l.push({type:6,index:s}),r.removeAttribute(d));if(ja.test(r.tagName)){const d=r.textContent.split(ne),p=d.length-1;if(p>0){r.textContent=fo?fo.emptyScript:"";for(let m=0;m<p;m++)r.append(d[m],xi()),ye.nextNode(),l.push({type:2,index:++s});r.append(d[p],xi())}}}else if(r.nodeType===8)if(r.data===Ha)l.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(ne,d+1))!==-1;)l.push({type:7,index:s}),d+=ne.length-1}s++}}static createElement(t,i){const o=Ae.createElement("template");return o.innerHTML=t,o}}function Ue(e,t,i=e,o){var a,n;if(t===Tt)return t;let r=o!==void 0?(a=i.o)==null?void 0:a[o]:i.l;const s=Ai(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((n=r==null?void 0:r._$AO)==null||n.call(r,!1),s===void 0?r=void 0:(r=new s(e),r._$AT(e,i,o)),o!==void 0?(i.o??(i.o=[]))[o]=r:i.l=r),r!==void 0&&(t=Ue(e,r._$AS(e,t.values),r,o)),t}class zl{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:o}=this._$AD,r=((t==null?void 0:t.creationScope)??Ae).importNode(i,!0);ye.currentNode=r;let s=ye.nextNode(),a=0,n=0,l=o[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Ii(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new Ll(s,this,t)),this._$AV.push(c),l=o[++n]}a!==(l==null?void 0:l.index)&&(s=ye.nextNode(),a++)}return ye.currentNode=Ae,r}p(t){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}}class Ii{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,i,o,r){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this.v=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Ue(this,t,i),Ai(t)?t===D||t==null||t===""?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==Tt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==D&&Ai(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ae.createTextNode(t)),this._$AH=t}$(t){var s;const{values:i,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ki.createElement(Wa(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(i);else{const a=new zl(r,this),n=a.u(this.options);a.p(i),this.T(n),this._$AH=a}}_$AC(t){let i=Ts.get(t.strings);return i===void 0&&Ts.set(t.strings,i=new ki(t)),i}k(t){Hr(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new Ii(this.O(xi()),this.O(xi()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this.v=t,(i=this._$AP)==null||i.call(this,t))}}let zo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,o,r,s){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=D}_$AI(t,i=this,o,r){const s=this.strings;let a=!1;if(s===void 0)t=Ue(this,t,i,0),a=!Ai(t)||t!==this._$AH&&t!==Tt,a&&(this._$AH=t);else{const n=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Ue(this,n[o+l],i,l),c===Tt&&(c=this._$AH[l]),a||(a=!Ai(c)||c!==this._$AH[l]),c===D?t=D:t!==D&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!r&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class Dl extends zo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}class Ml extends zo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}}class Ol extends zo{constructor(t,i,o,r,s){super(t,i,o,r,s),this.type=5}_$AI(t,i=this){if((t=Ue(this,t,i,0)??D)===Tt)return;const o=this._$AH,r=t===D&&o!==D||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==D&&(o===D||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Ll{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Ue(this,t)}}const Wo=mi.litHtmlPolyfillSupport;Wo==null||Wo(ki,Ii),(mi.litHtmlVersions??(mi.litHtmlVersions=[])).push("3.2.0");const qa=(e,t,i)=>{const o=(i==null?void 0:i.renderBefore)??t;let r=o._$litPart$;if(r===void 0){const s=(i==null?void 0:i.renderBefore)??null;o._$litPart$=r=new Ii(t.insertBefore(xi(),s),s,void 0,i??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class it extends Me{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=qa(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return Tt}}var Fa;it._$litElement$=!0,it.finalized=!0,(Fa=globalThis.litElementHydrateSupport)==null||Fa.call(globalThis,{LitElement:it});const qo=globalThis.litElementPolyfillSupport;qo==null||qo({LitElement:it});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");const Il="modulepreload",Rl=function(e){return"/"+e},$s={},Ya=function(t,i,o){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(i.map(n=>{if(n=Rl(n),n in $s)return;$s[n]=!0;const l=n.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Il,l||(u.as="script",u.crossOrigin=""),u.href=n,a&&u.setAttribute("nonce",a),document.head.appendChild(u),l)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})}))}return r.then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};function Nl(e={}){const{immediate:t=!1,onNeedRefresh:i,onOfflineReady:o,onRegistered:r,onRegisteredSW:s,onRegisterError:a}=e;let n,l;const c=async(d=!0)=>{await l};async function u(){if("serviceWorker"in navigator){if(n=await Ya(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:d}},[]).then(({Workbox:d})=>new d("/sw.js",{scope:"/",type:"classic"})).catch(d=>{a==null||a(d)}),!n)return;n.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),n.addEventListener("installed",d=>{d.isUpdate||o==null||o()}),n.register({immediate:t}).then(d=>{s?s("/sw.js",d):r==null||r(d)}).catch(d=>{a==null||a(d)})}}return l=u(),c}class Ga extends it{static get properties(){return{_period:{type:Number,state:!1},_swActivated:{type:Boolean,state:!1},_offlineReady:{type:Boolean,state:!0},_needRefresh:{type:Boolean,state:!0},_updateServiceWorker:{type:Function,state:!1}}}constructor(){super(),this._offlineReady=!1,this._needRefresh=!1,this._swActivated=!1,this._period=60*60*1e3,this._updateServiceWorker=void 0}firstUpdated(){this._updateServiceWorker=Nl({immediate:!0,onNeedRefresh:()=>this._needRefresh=!0,onRegisteredSW:this._onRegisteredSW})}render(){const t=[];this._offlineReady?t.push("show"):this._needRefresh&&t.push("show","refresh");const i=this._offlineReady?"App ready to work offline":this._needRefresh?"New content available, click on reload button to update":"";return k`
            <div
                id="pwa-toast"
                role="alert"
                aria-labelledby="toast-message"
                class=${t.join(" ")}
            >
                <div class="message">
                    <span id="toast-message">${i}</span>
                </div>
                <div class="buttons">
                    <button id="pwa-refresh" type="button" @click=${this._refreshApp}>
                        Reload
                    </button>
                    <button id="pwa-close" type="button" @click=${this._closeBadge}>
                        Close
                    </button>
                </div>
            </div>
    `}_refreshApp(){this._updateServiceWorker&&this._needRefresh&&this._updateServiceWorker()}_closeBadge(){this._offlineReady=!1,this._needRefresh=!1}_onRegisteredSW(t,i){var o;this._period<=0||(((o=i==null?void 0:i.active)==null?void 0:o.state)==="activated"?(this._swActivated=!0,this._registerPeriodicSync(t,i)):i!=null&&i.installing&&i.installing.addEventListener("statechange",r=>{const s=r.target;this._swActivated=s.state==="activated",this._swActivated&&this._registerPeriodicSync(t,i)}))}_registerPeriodicSync(t,i){this._period<=0||setInterval(async()=>{if("onLine"in navigator&&!navigator.onLine)return;const o=await fetch(t,{cache:"no-store",headers:{cache:"no-store","cache-control":"no-cache"}});(o==null?void 0:o.status)===200&&await i.update()},this._period)}}N(Ga,"styles",P`
    :host {
      max-width: 0;
      margin: 0;
      padding: 0;
    }

    #pwa-toast {
        visibility: hidden;
        position: fixed;
        right: 0;
        bottom: 0;
        margin: 16px;
        padding: 12px;
        border: 1px solid #8885;
        border-radius: 4px;
        z-index: 1;
        text-align: left;
        box-shadow: 3px 4px 5px 0 #8885;
        display: grid;
    }
    #pwa-toast .message {
        margin-bottom: 8px;
    }
    #pwa-toast .buttons {
        display: flex;
    }
    #pwa-toast button {
        border: 1px solid #8885;
        outline: none;
        margin-right: 5px;
        border-radius: 2px;
        padding: 3px 10px;
    }
    #pwa-toast.show {
        visibility: visible;
    }
    button#pwa-refresh {
        display: none;
    }
    #pwa-toast.show.refresh button#pwa-refresh {
        display: block;
    }
  `);window.customElements.define("pwa-badge",Ga);var Fl=P`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,dr="";function zs(e){dr=e}function Bl(e=""){if(!dr){const t=[...document.getElementsByTagName("script")],i=t.find(o=>o.hasAttribute("data-shoelace"));if(i)zs(i.getAttribute("data-shoelace"));else{const o=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let r="";o&&(r=o.getAttribute("src")),zs(r.split("/").slice(0,-1).join("/"))}}return dr.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Ul={name:"default",resolver:e=>Bl(`assets/icons/${e}.svg`)},Vl=Ul,Ds={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Hl={name:"system",resolver:e=>e in Ds?`data:image/svg+xml,${encodeURIComponent(Ds[e])}`:""},jl=Hl,Wl=[Vl,jl],ur=[];function ql(e){ur.push(e)}function Yl(e){ur=ur.filter(t=>t!==e)}function Ms(e){return Wl.find(t=>t.name===e)}var Gl=P`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Ka=Object.defineProperty,Kl=Object.defineProperties,Ql=Object.getOwnPropertyDescriptor,Xl=Object.getOwnPropertyDescriptors,Os=Object.getOwnPropertySymbols,Jl=Object.prototype.hasOwnProperty,Zl=Object.prototype.propertyIsEnumerable,Yo=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ls=(e,t,i)=>t in e?Ka(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,te=(e,t)=>{for(var i in t||(t={}))Jl.call(t,i)&&Ls(e,i,t[i]);if(Os)for(var i of Os(t))Zl.call(t,i)&&Ls(e,i,t[i]);return e},Ri=(e,t)=>Kl(e,Xl(t)),h=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ql(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(r=(o?a(t,i,r):a(r))||r);return o&&r&&Ka(t,i,r),r},tc=function(e,t){this[0]=e,this[1]=t},ec=e=>{var t=e[Yo("asyncIterator")],i=!1,o,r={};return t==null?(t=e[Yo("iterator")](),o=s=>r[s]=a=>t[s](a)):(t=t.call(e),o=s=>r[s]=a=>{if(i){if(i=!1,s==="throw")throw a;return a}return i=!0,{done:!1,value:new tc(new Promise(n=>{var l=t[s](a);if(!(l instanceof Object))throw TypeError("Object expected");n(l)}),1)}}),r[Yo("iterator")]=()=>r,o("next"),"throw"in t?o("throw"):r.throw=s=>{throw s},"return"in t&&o("return"),r};function O(e,t){const i=te({waitUntilFirstUpdate:!1},t);return(o,r)=>{const{update:s}=o,a=Array.isArray(e)?e:[e];o.update=function(n){a.forEach(l=>{const c=l;if(n.has(c)){const u=n.get(c),d=this[c];u!==d&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,d)}}),s.call(this,n)}}}var j=P`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ic={attribute:!0,type:String,converter:Be,reflect:!1,hasChanged:Vr},oc=(e=ic,t,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,e),o==="accessor"){const{name:a}=i;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(a,l,e)},init(n){return n!==void 0&&this.P(a,void 0,e),n}}}if(o==="setter"){const{name:a}=i;return function(n){const l=this[a];t.call(this,n),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+o)};function f(e){return(t,i)=>typeof i=="object"?oc(e,t,i):((o,r,s)=>{const a=r.hasOwnProperty(s);return r.constructor.createProperty(s,a?{...o,wrapped:!0}:o),a?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(e){return f({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rc(e){return(t,i)=>{const o=typeof t=="function"?t:t[i];Object.assign(o,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sc=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(e,t){return(i,o,r)=>{const s=a=>{var n;return((n=a.renderRoot)==null?void 0:n.querySelector(e))??null};return sc(i,o,{get(){return s(this)}})}}var F=class extends it{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const i=new CustomEvent(e,te({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,i)}catch{customElements.define(e,class extends t{},i)}return}let r=" (unknown version)",s=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in o&&o.version&&(s=" v"+o.version),!(r&&s&&r===s)&&console.warn(`Attempted to register <${e}>${r}, but <${e}>${s} has already been registered.`)}};F.version="2.16.0";F.dependencies={};h([f()],F.prototype,"dir",2);h([f()],F.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ac=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,Qa=e=>e.strings===void 0,nc={},lc=(e,t=nc)=>e._$AH=t;var ti=Symbol(),Wi=Symbol(),Go,Ko=new Map,st=class extends F{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let o;if(t!=null&&t.spriteSheet){this.svg=k`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const r=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(r),this.svg}try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?ti:Wi}catch{return Wi}try{const r=document.createElement("div");r.innerHTML=await o.text();const s=r.firstElementChild;if(((i=s==null?void 0:s.tagName)==null?void 0:i.toLowerCase())!=="svg")return ti;Go||(Go=new DOMParser);const n=Go.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):ti}catch{return ti}}connectedCallback(){super.connectedCallback(),ql(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Yl(this)}getIconSource(){const e=Ms(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:i}=this.getIconSource(),o=i?Ms(this.library):void 0;if(!t){this.svg=null;return}let r=Ko.get(t);if(r||(r=this.resolveIcon(t,o),Ko.set(t,r)),!this.initialRender)return;const s=await r;if(s===Wi&&Ko.delete(t),t===this.getIconSource().url){if(ac(s)){this.svg=s;return}switch(s){case Wi:case ti:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=o==null?void 0:o.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};st.styles=[j,Gl];h([et()],st.prototype,"svg",2);h([f({reflect:!0})],st.prototype,"name",2);h([f()],st.prototype,"src",2);h([f()],st.prototype,"label",2);h([f({reflect:!0})],st.prototype,"library",2);h([O("label")],st.prototype,"handleLabelChange",1);h([O(["name","src","library"])],st.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Do=e=>(...t)=>({_$litDirective$:e,values:t});let Mo=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this.t=t,this._$AM=i,this.i=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=Do(class extends Mo{constructor(e){var t;if(super(e),e.type!==Xt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(t)}const i=e.element.classList;for(const s of this.st)s in t||(i.remove(s),this.st.delete(s));for(const s in t){const a=!!t[s];a===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(a?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return Tt}});var jt=class extends F{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const e=k`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let t=k``;return this.initials?t=k`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=k`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,k`
      <div
        part="base"
        class=${V({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};jt.styles=[j,Fl];jt.dependencies={"sl-icon":st};h([et()],jt.prototype,"hasError",2);h([f()],jt.prototype,"image",2);h([f()],jt.prototype,"label",2);h([f()],jt.prototype,"initials",2);h([f()],jt.prototype,"loading",2);h([f({reflect:!0})],jt.prototype,"shape",2);h([O("image")],jt.prototype,"handleImageChange",1);jt.define("sl-avatar");var cc=P`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const hr=new Set,Oe=new Map;let be,jr="ltr",Wr="en";const Xa=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Xa){const e=new MutationObserver(Za);jr=document.documentElement.dir||"ltr",Wr=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ja(...e){e.map(t=>{const i=t.$code.toLowerCase();Oe.has(i)?Oe.set(i,Object.assign(Object.assign({},Oe.get(i)),t)):Oe.set(i,t),be||(be=t)}),Za()}function Za(){Xa&&(jr=document.documentElement.dir||"ltr",Wr=document.documentElement.lang||navigator.language),[...hr.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let dc=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){hr.add(this.host)}hostDisconnected(){hr.delete(this.host)}dir(){return`${this.host.dir||jr}`.toLowerCase()}lang(){return`${this.host.lang||Wr}`.toLowerCase()}getTranslationData(t){var i,o;const r=new Intl.Locale(t.replace(/_/g,"-")),s=r==null?void 0:r.language.toLowerCase(),a=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",n=Oe.get(`${s}-${a}`),l=Oe.get(s);return{locale:r,language:s,region:a,primary:n,secondary:l}}exists(t,i){var o;const{primary:r,secondary:s}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[t]||s&&s[t]||i.includeFallback&&be&&be[t])}term(t,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(r&&r[t])s=r[t];else if(be&&be[t])s=be[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...i):s}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,i)}};var tn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ja(tn);var uc=tn,bt=class extends dc{};Ja(uc);var Oo=class extends F{constructor(){super(...arguments),this.localize=new bt(this)}render(){return k`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Oo.styles=[j,cc];var ei=new WeakMap,ii=new WeakMap,oi=new WeakMap,Qo=new WeakSet,qi=new WeakMap,je=class{constructor(e,t){this.handleFormData=i=>{const o=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!a&&typeof r=="string"&&r.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(n=>{i.formData.append(r,n.toString())}):i.formData.append(r,s.toString()))},this.handleFormSubmit=i=>{var o;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=ei.get(this.form))==null||o.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),qi.set(this.host,[])},this.handleInteraction=i=>{const o=qi.get(this.host);o.includes(i.type)||o.push(i.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=te({form:i=>{const o=i.form;if(o){const s=i.getRootNode().querySelector(`#${o}`);if(s)return s}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var o;return(o=i.disabled)!=null?o:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,o)=>i.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),qi.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),qi.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,ei.has(this.form)?ei.get(this.form).add(this.host):ei.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ii.has(this.form)||(ii.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),oi.has(this.form)||(oi.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=ei.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ii.has(this.form)&&(this.form.reportValidity=ii.get(this.form),ii.delete(this.form)),oi.has(this.form)&&(this.form.checkValidity=oi.get(this.form),oi.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Qo.add(e):Qo.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&i.setAttribute(o,t.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=!!Qo.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Lo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),hc=Object.freeze(Ri(te({},Lo),{valid:!1,valueMissing:!0})),pc=Object.freeze(Ri(te({},Lo),{valid:!1,customError:!0})),en=P`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,$t=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function fc(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let i="";return[...t].forEach(o=>{o.nodeType===Node.TEXT_NODE&&(i+=o.textContent)}),i}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const on=Symbol.for(""),mc=e=>{if((e==null?void 0:e.r)===on)return e==null?void 0:e._$litStatic$},mo=(e,...t)=>({_$litStatic$:t.reduce((i,o,r)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[r+1],e[0]),r:on}),Is=new Map,gc=e=>(t,...i)=>{const o=i.length;let r,s;const a=[],n=[];let l,c=0,u=!1;for(;c<o;){for(l=t[c];c<o&&(s=i[c],(r=mc(s))!==void 0);)l+=r+t[++c],u=!0;c!==o&&n.push(s),a.push(l),c++}if(c===o&&a.push(t[o]),u){const d=a.join("$$lit$$");(t=Is.get(d))===void 0&&(a.raw=a,Is.set(d,t=a)),i=n}return e(t,...i)},gi=gc(k);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=e=>e??D;var Y=class extends F{constructor(){super(...arguments),this.formControlController=new je(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new $t(this,"[default]","prefix","suffix"),this.localize=new bt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Lo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?mo`a`:mo`button`;return gi`
      <${t}
        part="base"
        class=${V({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${$(e?void 0:this.disabled)}
        type=${$(e?void 0:this.type)}
        title=${this.title}
        name=${$(e?void 0:this.name)}
        value=${$(e?void 0:this.value)}
        href=${$(e?this.href:void 0)}
        target=${$(e?this.target:void 0)}
        download=${$(e?this.download:void 0)}
        rel=${$(e?this.rel:void 0)}
        role=${$(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?gi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?gi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};Y.styles=[j,en];Y.dependencies={"sl-icon":st,"sl-spinner":Oo};h([M(".button")],Y.prototype,"button",2);h([et()],Y.prototype,"hasFocus",2);h([et()],Y.prototype,"invalid",2);h([f()],Y.prototype,"title",2);h([f({reflect:!0})],Y.prototype,"variant",2);h([f({reflect:!0})],Y.prototype,"size",2);h([f({type:Boolean,reflect:!0})],Y.prototype,"caret",2);h([f({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);h([f({type:Boolean,reflect:!0})],Y.prototype,"loading",2);h([f({type:Boolean,reflect:!0})],Y.prototype,"outline",2);h([f({type:Boolean,reflect:!0})],Y.prototype,"pill",2);h([f({type:Boolean,reflect:!0})],Y.prototype,"circle",2);h([f()],Y.prototype,"type",2);h([f()],Y.prototype,"name",2);h([f()],Y.prototype,"value",2);h([f()],Y.prototype,"href",2);h([f()],Y.prototype,"target",2);h([f()],Y.prototype,"rel",2);h([f()],Y.prototype,"download",2);h([f()],Y.prototype,"form",2);h([f({attribute:"formaction"})],Y.prototype,"formAction",2);h([f({attribute:"formenctype"})],Y.prototype,"formEnctype",2);h([f({attribute:"formmethod"})],Y.prototype,"formMethod",2);h([f({attribute:"formnovalidate",type:Boolean})],Y.prototype,"formNoValidate",2);h([f({attribute:"formtarget"})],Y.prototype,"formTarget",2);h([O("disabled",{waitUntilFirstUpdate:!0})],Y.prototype,"handleDisabledChange",1);Y.define("sl-button");var bc=P`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,We=class extends F{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=ri(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=ri(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=ri(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=ri(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const i=e.indexOf(t),o=ri(t);o&&(o.toggleAttribute("data-sl-button-group__button",!0),o.toggleAttribute("data-sl-button-group__button--first",i===0),o.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<e.length-1),o.toggleAttribute("data-sl-button-group__button--last",i===e.length-1),o.toggleAttribute("data-sl-button-group__button--radio",o.tagName.toLowerCase()==="sl-radio-button"))})}render(){return k`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};We.styles=[j,bc];h([M("slot")],We.prototype,"defaultSlot",2);h([et()],We.prototype,"disableRole",2);h([f()],We.prototype,"label",2);function ri(e){var t;const i="sl-button, sl-radio-button";return(t=e.closest(i))!=null?t:e.querySelector(i)}We.define("sl-button-group");var vc=P`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Ni=class extends F{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return k`
      <span
        part="base"
        class=${V({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ni.styles=[j,vc];h([f({reflect:!0})],Ni.prototype,"variant",2);h([f({type:Boolean,reflect:!0})],Ni.prototype,"pill",2);h([f({type:Boolean,reflect:!0})],Ni.prototype,"pulse",2);Ni.define("sl-badge");var yc=P`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,rn=class extends F{constructor(){super(...arguments),this.hasSlotController=new $t(this,"footer","header","image")}render(){return k`
      <div
        part="base"
        class=${V({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};rn.styles=[j,yc];rn.define("sl-card");var wc=P`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,_c=P`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Vt=Math.min,wt=Math.max,go=Math.round,Yi=Math.floor,de=e=>({x:e,y:e}),xc={left:"right",right:"left",bottom:"top",top:"bottom"},Ac={start:"end",end:"start"};function pr(e,t,i){return wt(e,Vt(t,i))}function qe(e,t){return typeof e=="function"?e(t):e}function ue(e){return e.split("-")[0]}function Ye(e){return e.split("-")[1]}function sn(e){return e==="x"?"y":"x"}function qr(e){return e==="y"?"height":"width"}function ke(e){return["top","bottom"].includes(ue(e))?"y":"x"}function Yr(e){return sn(ke(e))}function kc(e,t,i){i===void 0&&(i=!1);const o=Ye(e),r=Yr(e),s=qr(r);let a=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=bo(a)),[a,bo(a)]}function Cc(e){const t=bo(e);return[fr(e),t,fr(t)]}function fr(e){return e.replace(/start|end/g,t=>Ac[t])}function Ec(e,t,i){const o=["left","right"],r=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?r:o:t?o:r;case"left":case"right":return t?s:a;default:return[]}}function Sc(e,t,i,o){const r=Ye(e);let s=Ec(ue(e),i==="start",o);return r&&(s=s.map(a=>a+"-"+r),t&&(s=s.concat(s.map(fr)))),s}function bo(e){return e.replace(/left|right|bottom|top/g,t=>xc[t])}function Pc(e){return{top:0,right:0,bottom:0,left:0,...e}}function an(e){return typeof e!="number"?Pc(e):{top:e,right:e,bottom:e,left:e}}function vo(e){const{x:t,y:i,width:o,height:r}=e;return{width:o,height:r,top:i,left:t,right:t+o,bottom:i+r,x:t,y:i}}function Rs(e,t,i){let{reference:o,floating:r}=e;const s=ke(t),a=Yr(t),n=qr(a),l=ue(t),c=s==="y",u=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,p=o[n]/2-r[n]/2;let m;switch(l){case"top":m={x:u,y:o.y-r.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:d};break;case"left":m={x:o.x-r.width,y:d};break;default:m={x:o.x,y:o.y}}switch(Ye(t)){case"start":m[a]-=p*(i&&c?-1:1);break;case"end":m[a]+=p*(i&&c?-1:1);break}return m}const Tc=async(e,t,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:a}=i,n=s.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=Rs(c,o,l),p=o,m={},g=0;for(let b=0;b<n.length;b++){const{name:w,fn:A}=n[b],{x:y,y:x,data:v,reset:_}=await A({x:u,y:d,initialPlacement:o,placement:p,strategy:r,middlewareData:m,rects:c,platform:a,elements:{reference:e,floating:t}});u=y??u,d=x??d,m={...m,[w]:{...m[w],...v}},_&&g<=50&&(g++,typeof _=="object"&&(_.placement&&(p=_.placement),_.rects&&(c=_.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:r}):_.rects),{x:u,y:d}=Rs(c,p,l)),b=-1)}return{x:u,y:d,placement:p,strategy:r,middlewareData:m}};async function Gr(e,t){var i;t===void 0&&(t={});const{x:o,y:r,platform:s,rects:a,elements:n,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:m=0}=qe(t,e),g=an(m),w=n[p?d==="floating"?"reference":"floating":d],A=vo(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(w)))==null||i?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(n.floating)),boundary:c,rootBoundary:u,strategy:l})),y=d==="floating"?{x:o,y:r,width:a.floating.width,height:a.floating.height}:a.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(n.floating)),v=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},_=vo(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:y,offsetParent:x,strategy:l}):y);return{top:(A.top-_.top+g.top)/v.y,bottom:(_.bottom-A.bottom+g.bottom)/v.y,left:(A.left-_.left+g.left)/v.x,right:(_.right-A.right+g.right)/v.x}}const $c=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:r,rects:s,platform:a,elements:n,middlewareData:l}=t,{element:c,padding:u=0}=qe(e,t)||{};if(c==null)return{};const d=an(u),p={x:i,y:o},m=Yr(r),g=qr(m),b=await a.getDimensions(c),w=m==="y",A=w?"top":"left",y=w?"bottom":"right",x=w?"clientHeight":"clientWidth",v=s.reference[g]+s.reference[m]-p[m]-s.floating[g],_=p[m]-s.reference[m],T=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c));let L=T?T[x]:0;(!L||!await(a.isElement==null?void 0:a.isElement(T)))&&(L=n.floating[x]||s.floating[g]);const S=v/2-_/2,E=L/2-b[g]/2-1,C=Vt(d[A],E),I=Vt(d[y],E),z=C,K=L-b[g]-I,X=L/2-b[g]/2+S,vt=pr(z,X,K),Dt=!l.arrow&&Ye(r)!=null&&X!==vt&&s.reference[g]/2-(X<z?C:I)-b[g]/2<0,Bt=Dt?X<z?X-z:X-K:0;return{[m]:p[m]+Bt,data:{[m]:vt,centerOffset:X-vt-Bt,...Dt&&{alignmentOffset:Bt}},reset:Dt}}}),zc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:r,middlewareData:s,rects:a,initialPlacement:n,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0,...w}=qe(e,t);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const A=ue(r),y=ke(n),x=ue(n)===n,v=await(l.isRTL==null?void 0:l.isRTL(c.floating)),_=p||(x||!b?[bo(n)]:Cc(n)),T=g!=="none";!p&&T&&_.push(...Sc(n,b,g,v));const L=[n,..._],S=await Gr(t,w),E=[];let C=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&E.push(S[A]),d){const X=kc(r,a,v);E.push(S[X[0]],S[X[1]])}if(C=[...C,{placement:r,overflows:E}],!E.every(X=>X<=0)){var I,z;const X=(((I=s.flip)==null?void 0:I.index)||0)+1,vt=L[X];if(vt)return{data:{index:X,overflows:C},reset:{placement:vt}};let Dt=(z=C.filter(Bt=>Bt.overflows[0]<=0).sort((Bt,oe)=>Bt.overflows[1]-oe.overflows[1])[0])==null?void 0:z.placement;if(!Dt)switch(m){case"bestFit":{var K;const Bt=(K=C.filter(oe=>{if(T){const re=ke(oe.placement);return re===y||re==="y"}return!0}).map(oe=>[oe.placement,oe.overflows.filter(re=>re>0).reduce((re,hl)=>re+hl,0)]).sort((oe,re)=>oe[1]-re[1])[0])==null?void 0:K[0];Bt&&(Dt=Bt);break}case"initialPlacement":Dt=n;break}if(r!==Dt)return{reset:{placement:Dt}}}return{}}}};async function Dc(e,t){const{placement:i,platform:o,elements:r}=e,s=await(o.isRTL==null?void 0:o.isRTL(r.floating)),a=ue(i),n=Ye(i),l=ke(i)==="y",c=["left","top"].includes(a)?-1:1,u=s&&l?-1:1,d=qe(t,e);let{mainAxis:p,crossAxis:m,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return n&&typeof g=="number"&&(m=n==="end"?g*-1:g),l?{x:m*u,y:p*c}:{x:p*c,y:m*u}}const Mc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var i,o;const{x:r,y:s,placement:a,middlewareData:n}=t,l=await Dc(t,e);return a===((i=n.offset)==null?void 0:i.placement)&&(o=n.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:a}}}}},Oc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:r}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:n={fn:w=>{let{x:A,y}=w;return{x:A,y}}},...l}=qe(e,t),c={x:i,y:o},u=await Gr(t,l),d=ke(ue(r)),p=sn(d);let m=c[p],g=c[d];if(s){const w=p==="y"?"top":"left",A=p==="y"?"bottom":"right",y=m+u[w],x=m-u[A];m=pr(y,m,x)}if(a){const w=d==="y"?"top":"left",A=d==="y"?"bottom":"right",y=g+u[w],x=g-u[A];g=pr(y,g,x)}const b=n.fn({...t,[p]:m,[d]:g});return{...b,data:{x:b.x-i,y:b.y-o}}}}},Lc=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:i,rects:o,platform:r,elements:s}=t,{apply:a=()=>{},...n}=qe(e,t),l=await Gr(t,n),c=ue(i),u=Ye(i),d=ke(i)==="y",{width:p,height:m}=o.floating;let g,b;c==="top"||c==="bottom"?(g=c,b=u===(await(r.isRTL==null?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(b=c,g=u==="end"?"top":"bottom");const w=m-l.top-l.bottom,A=p-l.left-l.right,y=Vt(m-l[g],w),x=Vt(p-l[b],A),v=!t.middlewareData.shift;let _=y,T=x;if(d?T=u||v?Vt(x,A):A:_=u||v?Vt(y,w):w,v&&!u){const S=wt(l.left,0),E=wt(l.right,0),C=wt(l.top,0),I=wt(l.bottom,0);d?T=p-2*(S!==0||E!==0?S+E:wt(l.left,l.right)):_=m-2*(C!==0||I!==0?C+I:wt(l.top,l.bottom))}await a({...t,availableWidth:T,availableHeight:_});const L=await r.getDimensions(s.floating);return p!==L.width||m!==L.height?{reset:{rects:!0}}:{}}}};function Ge(e){return nn(e)?(e.nodeName||"").toLowerCase():"#document"}function _t(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ee(e){var t;return(t=(nn(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function nn(e){return e instanceof Node||e instanceof _t(e).Node}function Ot(e){return e instanceof Element||e instanceof _t(e).Element}function Ht(e){return e instanceof HTMLElement||e instanceof _t(e).HTMLElement}function Ns(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof _t(e).ShadowRoot}function Fi(e){const{overflow:t,overflowX:i,overflowY:o,display:r}=Lt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(r)}function Ic(e){return["table","td","th"].includes(Ge(e))}function Io(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Kr(e){const t=Qr(),i=Ot(e)?Lt(e):e;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function Rc(e){let t=he(e);for(;Ht(t)&&!Ve(t);){if(Kr(t))return t;if(Io(t))return null;t=he(t)}return null}function Qr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ve(e){return["html","body","#document"].includes(Ge(e))}function Lt(e){return _t(e).getComputedStyle(e)}function Ro(e){return Ot(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function he(e){if(Ge(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ns(e)&&e.host||ee(e);return Ns(t)?t.host:t}function ln(e){const t=he(e);return Ve(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ht(t)&&Fi(t)?t:ln(t)}function Ci(e,t,i){var o;t===void 0&&(t=[]),i===void 0&&(i=!0);const r=ln(e),s=r===((o=e.ownerDocument)==null?void 0:o.body),a=_t(r);if(s){const n=mr(a);return t.concat(a,a.visualViewport||[],Fi(r)?r:[],n&&i?Ci(n):[])}return t.concat(r,Ci(r,[],i))}function mr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function cn(e){const t=Lt(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=Ht(e),s=r?e.offsetWidth:i,a=r?e.offsetHeight:o,n=go(i)!==s||go(o)!==a;return n&&(i=s,o=a),{width:i,height:o,$:n}}function Xr(e){return Ot(e)?e:e.contextElement}function Le(e){const t=Xr(e);if(!Ht(t))return de(1);const i=t.getBoundingClientRect(),{width:o,height:r,$:s}=cn(t);let a=(s?go(i.width):i.width)/o,n=(s?go(i.height):i.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!n||!Number.isFinite(n))&&(n=1),{x:a,y:n}}const Nc=de(0);function dn(e){const t=_t(e);return!Qr()||!t.visualViewport?Nc:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Fc(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==_t(e)?!1:t}function Ce(e,t,i,o){t===void 0&&(t=!1),i===void 0&&(i=!1);const r=e.getBoundingClientRect(),s=Xr(e);let a=de(1);t&&(o?Ot(o)&&(a=Le(o)):a=Le(e));const n=Fc(s,i,o)?dn(s):de(0);let l=(r.left+n.x)/a.x,c=(r.top+n.y)/a.y,u=r.width/a.x,d=r.height/a.y;if(s){const p=_t(s),m=o&&Ot(o)?_t(o):o;let g=p,b=mr(g);for(;b&&o&&m!==g;){const w=Le(b),A=b.getBoundingClientRect(),y=Lt(b),x=A.left+(b.clientLeft+parseFloat(y.paddingLeft))*w.x,v=A.top+(b.clientTop+parseFloat(y.paddingTop))*w.y;l*=w.x,c*=w.y,u*=w.x,d*=w.y,l+=x,c+=v,g=_t(b),b=mr(g)}}return vo({width:u,height:d,x:l,y:c})}function Bc(e){let{elements:t,rect:i,offsetParent:o,strategy:r}=e;const s=r==="fixed",a=ee(o),n=t?Io(t.floating):!1;if(o===a||n&&s)return i;let l={scrollLeft:0,scrollTop:0},c=de(1);const u=de(0),d=Ht(o);if((d||!d&&!s)&&((Ge(o)!=="body"||Fi(a))&&(l=Ro(o)),Ht(o))){const p=Ce(o);c=Le(o),u.x=p.x+o.clientLeft,u.y=p.y+o.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+u.x,y:i.y*c.y-l.scrollTop*c.y+u.y}}function Uc(e){return Array.from(e.getClientRects())}function un(e){return Ce(ee(e)).left+Ro(e).scrollLeft}function Vc(e){const t=ee(e),i=Ro(e),o=e.ownerDocument.body,r=wt(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),s=wt(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-i.scrollLeft+un(e);const n=-i.scrollTop;return Lt(o).direction==="rtl"&&(a+=wt(t.clientWidth,o.clientWidth)-r),{width:r,height:s,x:a,y:n}}function Hc(e,t){const i=_t(e),o=ee(e),r=i.visualViewport;let s=o.clientWidth,a=o.clientHeight,n=0,l=0;if(r){s=r.width,a=r.height;const c=Qr();(!c||c&&t==="fixed")&&(n=r.offsetLeft,l=r.offsetTop)}return{width:s,height:a,x:n,y:l}}function jc(e,t){const i=Ce(e,!0,t==="fixed"),o=i.top+e.clientTop,r=i.left+e.clientLeft,s=Ht(e)?Le(e):de(1),a=e.clientWidth*s.x,n=e.clientHeight*s.y,l=r*s.x,c=o*s.y;return{width:a,height:n,x:l,y:c}}function Fs(e,t,i){let o;if(t==="viewport")o=Hc(e,i);else if(t==="document")o=Vc(ee(e));else if(Ot(t))o=jc(t,i);else{const r=dn(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return vo(o)}function hn(e,t){const i=he(e);return i===t||!Ot(i)||Ve(i)?!1:Lt(i).position==="fixed"||hn(i,t)}function Wc(e,t){const i=t.get(e);if(i)return i;let o=Ci(e,[],!1).filter(n=>Ot(n)&&Ge(n)!=="body"),r=null;const s=Lt(e).position==="fixed";let a=s?he(e):e;for(;Ot(a)&&!Ve(a);){const n=Lt(a),l=Kr(a);!l&&n.position==="fixed"&&(r=null),(s?!l&&!r:!l&&n.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Fi(a)&&!l&&hn(e,a))?o=o.filter(u=>u!==a):r=n,a=he(a)}return t.set(e,o),o}function qc(e){let{element:t,boundary:i,rootBoundary:o,strategy:r}=e;const a=[...i==="clippingAncestors"?Io(t)?[]:Wc(t,this._c):[].concat(i),o],n=a[0],l=a.reduce((c,u)=>{const d=Fs(t,u,r);return c.top=wt(d.top,c.top),c.right=Vt(d.right,c.right),c.bottom=Vt(d.bottom,c.bottom),c.left=wt(d.left,c.left),c},Fs(t,n,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Yc(e){const{width:t,height:i}=cn(e);return{width:t,height:i}}function Gc(e,t,i){const o=Ht(t),r=ee(t),s=i==="fixed",a=Ce(e,!0,s,t);let n={scrollLeft:0,scrollTop:0};const l=de(0);if(o||!o&&!s)if((Ge(t)!=="body"||Fi(r))&&(n=Ro(t)),o){const d=Ce(t,!0,s,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else r&&(l.x=un(r));const c=a.left+n.scrollLeft-l.x,u=a.top+n.scrollTop-l.y;return{x:c,y:u,width:a.width,height:a.height}}function Xo(e){return Lt(e).position==="static"}function Bs(e,t){return!Ht(e)||Lt(e).position==="fixed"?null:t?t(e):e.offsetParent}function pn(e,t){const i=_t(e);if(Io(e))return i;if(!Ht(e)){let r=he(e);for(;r&&!Ve(r);){if(Ot(r)&&!Xo(r))return r;r=he(r)}return i}let o=Bs(e,t);for(;o&&Ic(o)&&Xo(o);)o=Bs(o,t);return o&&Ve(o)&&Xo(o)&&!Kr(o)?i:o||Rc(e)||i}const Kc=async function(e){const t=this.getOffsetParent||pn,i=this.getDimensions,o=await i(e.floating);return{reference:Gc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Qc(e){return Lt(e).direction==="rtl"}const to={convertOffsetParentRelativeRectToViewportRelativeRect:Bc,getDocumentElement:ee,getClippingRect:qc,getOffsetParent:pn,getElementRects:Kc,getClientRects:Uc,getDimensions:Yc,getScale:Le,isElement:Ot,isRTL:Qc};function Xc(e,t){let i=null,o;const r=ee(e);function s(){var n;clearTimeout(o),(n=i)==null||n.disconnect(),i=null}function a(n,l){n===void 0&&(n=!1),l===void 0&&(l=1),s();const{left:c,top:u,width:d,height:p}=e.getBoundingClientRect();if(n||t(),!d||!p)return;const m=Yi(u),g=Yi(r.clientWidth-(c+d)),b=Yi(r.clientHeight-(u+p)),w=Yi(c),y={rootMargin:-m+"px "+-g+"px "+-b+"px "+-w+"px",threshold:wt(0,Vt(1,l))||1};let x=!0;function v(_){const T=_[0].intersectionRatio;if(T!==l){if(!x)return a();T?a(!1,T):o=setTimeout(()=>{a(!1,1e-7)},1e3)}x=!1}try{i=new IntersectionObserver(v,{...y,root:r.ownerDocument})}catch{i=new IntersectionObserver(v,y)}i.observe(e)}return a(!0),s}function Jc(e,t,i,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:n=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=Xr(e),u=r||s?[...c?Ci(c):[],...Ci(t)]:[];u.forEach(A=>{r&&A.addEventListener("scroll",i,{passive:!0}),s&&A.addEventListener("resize",i)});const d=c&&n?Xc(c,i):null;let p=-1,m=null;a&&(m=new ResizeObserver(A=>{let[y]=A;y&&y.target===c&&m&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var x;(x=m)==null||x.observe(t)})),i()}),c&&!l&&m.observe(c),m.observe(t));let g,b=l?Ce(e):null;l&&w();function w(){const A=Ce(e);b&&(A.x!==b.x||A.y!==b.y||A.width!==b.width||A.height!==b.height)&&i(),b=A,g=requestAnimationFrame(w)}return i(),()=>{var A;u.forEach(y=>{r&&y.removeEventListener("scroll",i),s&&y.removeEventListener("resize",i)}),d==null||d(),(A=m)==null||A.disconnect(),m=null,l&&cancelAnimationFrame(g)}}const Zc=Mc,td=Oc,ed=zc,Us=Lc,id=$c,od=(e,t,i)=>{const o=new Map,r={platform:to,...i},s={...r.platform,_c:o};return Tc(e,t,{...r,platform:s})};function rd(e){return sd(e)}function Jo(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function sd(e){for(let t=e;t;t=Jo(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Jo(e);t;t=Jo(t)){if(!(t instanceof Element))continue;const i=getComputedStyle(t);if(i.display!=="contents"&&(i.position!=="static"||i.filter!=="none"||t.tagName==="BODY"))return t}return null}function ad(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var G=class extends F{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,r=0,s=0,a=0,n=0,l=0,c=0,u=0;i?e.top<t.top?(o=e.left,r=e.bottom,s=e.right,a=e.bottom,n=t.left,l=t.top,c=t.right,u=t.top):(o=t.left,r=t.bottom,s=t.right,a=t.bottom,n=e.left,l=e.top,c=e.right,u=e.top):e.left<t.left?(o=e.right,r=e.top,s=t.left,a=t.top,n=e.right,l=e.bottom,c=t.left,u=t.bottom):(o=t.right,r=t.top,s=e.left,a=e.top,n=t.right,l=t.bottom,c=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||ad(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Jc(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Zc({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Us({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=r?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(ed({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(td({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Us({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(id({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?i=>to.getOffsetParent(i,rd):to.getOffsetParent;od(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Ri(te({},to),{getOffsetParent:t})}).then(({x:i,y:o,middlewareData:r,placement:s})=>{const a=this.matches(":dir(rtl)"),n={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const l=r.arrow.x,c=r.arrow.y;let u="",d="",p="",m="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=a?g:"",m=a?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=a?"":g,m=a?g:"",p=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof l=="number"?`${l}px`:"",u=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:u,right:d,bottom:p,left:m,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return k`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${V({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${V({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?k`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};G.styles=[j,_c];h([M(".popup")],G.prototype,"popup",2);h([M(".popup__arrow")],G.prototype,"arrowEl",2);h([f()],G.prototype,"anchor",2);h([f({type:Boolean,reflect:!0})],G.prototype,"active",2);h([f({reflect:!0})],G.prototype,"placement",2);h([f({reflect:!0})],G.prototype,"strategy",2);h([f({type:Number})],G.prototype,"distance",2);h([f({type:Number})],G.prototype,"skidding",2);h([f({type:Boolean})],G.prototype,"arrow",2);h([f({attribute:"arrow-placement"})],G.prototype,"arrowPlacement",2);h([f({attribute:"arrow-padding",type:Number})],G.prototype,"arrowPadding",2);h([f({type:Boolean})],G.prototype,"flip",2);h([f({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],G.prototype,"flipFallbackPlacements",2);h([f({attribute:"flip-fallback-strategy"})],G.prototype,"flipFallbackStrategy",2);h([f({type:Object})],G.prototype,"flipBoundary",2);h([f({attribute:"flip-padding",type:Number})],G.prototype,"flipPadding",2);h([f({type:Boolean})],G.prototype,"shift",2);h([f({type:Object})],G.prototype,"shiftBoundary",2);h([f({attribute:"shift-padding",type:Number})],G.prototype,"shiftPadding",2);h([f({attribute:"auto-size"})],G.prototype,"autoSize",2);h([f()],G.prototype,"sync",2);h([f({type:Object})],G.prototype,"autoSizeBoundary",2);h([f({attribute:"auto-size-padding",type:Number})],G.prototype,"autoSizePadding",2);h([f({attribute:"hover-bridge",type:Boolean})],G.prototype,"hoverBridge",2);var fn=new Map,nd=new WeakMap;function ld(e){return e??{keyframes:[],options:{duration:0}}}function Vs(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Q(e,t){fn.set(e,ld(t))}function tt(e,t,i){const o=nd.get(e);if(o!=null&&o[t])return Vs(o[t],i.dir);const r=fn.get(t);return r?Vs(r,i.dir):{keyframes:[],options:{duration:0}}}function xt(e,t){return new Promise(i=>{function o(r){r.target===e&&(e.removeEventListener(t,o),i())}e.addEventListener(t,o)})}function rt(e,t,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,Ri(te({},i),{duration:gr()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function Hs(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function gr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ht(e){return Promise.all(e.getAnimations().map(t=>new Promise(i=>{t.cancel(),requestAnimationFrame(i)})))}function js(e,t){return e.map(i=>Ri(te({},i),{height:i.height==="auto"?`${t}px`:i.height}))}var at=class extends F{constructor(){super(),this.localize=new bt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Hs(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Hs(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ht(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:o}=tt(this,"tooltip.show",{dir:this.localize.dir()});await rt(this.popup.popup,i,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ht(this.body);const{keyframes:i,options:o}=tt(this,"tooltip.hide",{dir:this.localize.dir()});await rt(this.popup.popup,i,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}render(){return k`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${V({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};at.styles=[j,wc];at.dependencies={"sl-popup":G};h([M("slot:not([name])")],at.prototype,"defaultSlot",2);h([M(".tooltip__body")],at.prototype,"body",2);h([M("sl-popup")],at.prototype,"popup",2);h([f()],at.prototype,"content",2);h([f()],at.prototype,"placement",2);h([f({type:Boolean,reflect:!0})],at.prototype,"disabled",2);h([f({type:Number})],at.prototype,"distance",2);h([f({type:Boolean,reflect:!0})],at.prototype,"open",2);h([f({type:Number})],at.prototype,"skidding",2);h([f()],at.prototype,"trigger",2);h([f({type:Boolean})],at.prototype,"hoist",2);h([O("open",{waitUntilFirstUpdate:!0})],at.prototype,"handleOpenChange",1);h([O(["content","distance","hoist","placement","skidding"])],at.prototype,"handleOptionsChange",1);h([O("disabled")],at.prototype,"handleDisabledChange",1);Q("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Q("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var cd=P`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,nt=class extends F{constructor(){super(...arguments),this.localize=new bt(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),i=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let r=this.from,s="";i?[r,s]=this.from.trim().split("."):o&&([r,s]=this.from.trim().replace(/\]$/,"").split("["));const a="getElementById"in t?t.getElementById(r):null;a?o?e=a.getAttribute(s)||"":i?e=a[s]||"":e=a.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),r=e==="success"?this.successIcon:this.errorIcon,s=tt(this,"copy.in",{dir:"ltr"}),a=tt(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?i:o,await this.copyIcon.animate(a.keyframes,a.options).finished,this.copyIcon.hidden=!0,this.status=e,r.hidden=!1,await r.animate(s.keyframes,s.options).finished,setTimeout(async()=>{await r.animate(a.keyframes,a.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(s.keyframes,s.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return k`
      <sl-tooltip
        class=${V({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};nt.styles=[j,cd];nt.dependencies={"sl-icon":st,"sl-tooltip":at};h([M('slot[name="copy-icon"]')],nt.prototype,"copyIcon",2);h([M('slot[name="success-icon"]')],nt.prototype,"successIcon",2);h([M('slot[name="error-icon"]')],nt.prototype,"errorIcon",2);h([M("sl-tooltip")],nt.prototype,"tooltip",2);h([et()],nt.prototype,"isCopying",2);h([et()],nt.prototype,"status",2);h([f()],nt.prototype,"value",2);h([f()],nt.prototype,"from",2);h([f({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);h([f({attribute:"copy-label"})],nt.prototype,"copyLabel",2);h([f({attribute:"success-label"})],nt.prototype,"successLabel",2);h([f({attribute:"error-label"})],nt.prototype,"errorLabel",2);h([f({attribute:"feedback-duration",type:Number})],nt.prototype,"feedbackDuration",2);h([f({attribute:"tooltip-placement"})],nt.prototype,"tooltipPlacement",2);h([f({type:Boolean})],nt.prototype,"hoist",2);Q("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Q("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});nt.define("sl-copy-button");var dd=P`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,No=(e="value")=>(t,i)=>{const o=t.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,a,n){var l;const c=o.getPropertyOptions(e),u=typeof c.attribute=="string"?c.attribute:e;if(s===u){const d=c.converter||Be,m=(typeof d=="function"?d:(l=d==null?void 0:d.fromAttribute)!=null?l:Be.fromAttribute)(n,c.type);this[e]!==m&&(this[i]=m)}r.call(this,s,a,n)}},Bi=P`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei=Do(class extends Mo{constructor(e){if(super(e),e.type!==Xt.PROPERTY&&e.type!==Xt.ATTRIBUTE&&e.type!==Xt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Qa(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Tt||t===D)return t;const i=e.element,o=e.name;if(e.type===Xt.PROPERTY){if(t===i[o])return Tt}else if(e.type===Xt.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(o))return Tt}else if(e.type===Xt.ATTRIBUTE&&i.getAttribute(o)===t+"")return Tt;return lc(e),t}});var lt=class extends F{constructor(){super(...arguments),this.formControlController=new je(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new $t(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return k`
      <div
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${V({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${$(this.value)}
            .indeterminate=${Ei(this.indeterminate)}
            .checked=${Ei(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?k`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?k`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};lt.styles=[j,Bi,dd];lt.dependencies={"sl-icon":st};h([M('input[type="checkbox"]')],lt.prototype,"input",2);h([et()],lt.prototype,"hasFocus",2);h([f()],lt.prototype,"title",2);h([f()],lt.prototype,"name",2);h([f()],lt.prototype,"value",2);h([f({reflect:!0})],lt.prototype,"size",2);h([f({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);h([f({type:Boolean,reflect:!0})],lt.prototype,"checked",2);h([f({type:Boolean,reflect:!0})],lt.prototype,"indeterminate",2);h([No("checked")],lt.prototype,"defaultChecked",2);h([f({reflect:!0})],lt.prototype,"form",2);h([f({type:Boolean,reflect:!0})],lt.prototype,"required",2);h([f({attribute:"help-text"})],lt.prototype,"helpText",2);h([O("disabled",{waitUntilFirstUpdate:!0})],lt.prototype,"handleDisabledChange",1);h([O(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],lt.prototype,"handleStateChange",1);lt.define("sl-checkbox");var ud=P`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Jr=class extends F{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],i=e.composedPath(),o=i.find(n=>{var l;return t.includes(((l=n==null?void 0:n.getAttribute)==null?void 0:l.call(n,"role"))||"")});if(!o||i.find(n=>{var l;return((l=n==null?void 0:n.getAttribute)==null?void 0:l.call(n,"role"))==="menu"})!==this)return;const a=o;a.type==="checkbox"&&(a.checked=!a.checked),this.emit("sl-select",{detail:{item:a}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),i=this.getCurrentItem();let o=i?t.indexOf(i):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?o++:e.key==="ArrowUp"?o--:e.key==="Home"?o=0:e.key==="End"&&(o=t.length-1),o<0&&(o=t.length-1),o>t.length-1&&(o=0),this.setCurrentItem(t[o]),t[o].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===e?"0":"-1")})}render(){return k`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Jr.styles=[j,ud];h([M("slot")],Jr.prototype,"defaultSlot",2);Jr.define("sl-menu");var hd=P`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=(e,t)=>{var o;const i=e._$AN;if(i===void 0)return!1;for(const r of i)(o=r._$AO)==null||o.call(r,t,!1),bi(r,t);return!0},yo=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},mn=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),md(t)}};function pd(e){this._$AN!==void 0?(yo(this),this._$AM=e,mn(this)):this._$AM=e}function fd(e,t=!1,i=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let s=i;s<o.length;s++)bi(o[s],!1),yo(o[s]);else o!=null&&(bi(o,!1),yo(o));else bi(this,e)}const md=e=>{e.type==Xt.CHILD&&(e._$AP??(e._$AP=fd),e._$AQ??(e._$AQ=pd))};class gd extends Mo{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),mn(this),this.isConnected=t._$AU}_$AO(t,i=!0){var o,r;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)==null||o.call(this):(r=this.disconnected)==null||r.call(this)),i&&(bi(this,t),yo(this))}setValue(t){if(Qa(this.t))this.t._$AI(t,this);else{const i=[...this.t._$AH];i[this.i]=t,this.t._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bd=()=>new vd;class vd{}const Zo=new WeakMap,yd=Do(class extends gd{render(e){return D}update(e,[t]){var o;const i=t!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),D}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=Zo.get(t);i===void 0&&(i=new WeakMap,Zo.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=Zo.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var wd=class{constructor(e,t){this.popupRef=bd(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var o;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(o=i.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),o=i==null?void 0:i.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],r=this.host.matches(":dir(rtl)");if(!o)return;const{left:s,top:a,width:n,height:l}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?s+n:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?s+n:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+l}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const o of t.assignedElements())if(i=o.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let o=1;o!==i.length;++o)i[o].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce((r,s)=>{var a;const n=(a=t.get(s))!=null?a:new CSSUnitValue(0,"px"),c=(n instanceof CSSUnitValue?n:new CSSUnitValue(0,"px")).to("px");return r-c.value},0);this.skidding=o}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.host.matches(":dir(rtl)");return this.isConnected?k`
      <sl-popup
        ${yd(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:k` <slot name="submenu" hidden></slot> `}},At=class extends F{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new $t(this,"submenu"),this.submenuController=new wd(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return fc(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.matches(":dir(rtl)"),t=this.submenuController.isExpanded();return k`
      <div
        id="anchor"
        part="base"
        class=${V({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?k` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};At.styles=[j,hd];At.dependencies={"sl-icon":st,"sl-popup":G,"sl-spinner":Oo};h([M("slot:not([name])")],At.prototype,"defaultSlot",2);h([M(".menu-item")],At.prototype,"menuItem",2);h([f()],At.prototype,"type",2);h([f({type:Boolean,reflect:!0})],At.prototype,"checked",2);h([f()],At.prototype,"value",2);h([f({type:Boolean,reflect:!0})],At.prototype,"loading",2);h([f({type:Boolean,reflect:!0})],At.prototype,"disabled",2);h([O("checked")],At.prototype,"handleCheckedChange",1);h([O("disabled")],At.prototype,"handleDisabledChange",1);h([O("type")],At.prototype,"handleTypeChange",1);At.define("sl-menu-item");var _d=P`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Ws=new WeakMap;function gn(e){let t=Ws.get(e);return t||(t=window.getComputedStyle(e,null),Ws.set(e,t)),t}function xd(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=gn(e);return t.visibility!=="hidden"&&t.display!=="none"}function Ad(e){const t=gn(e),{overflowY:i,overflowX:o}=t;return i==="scroll"||o==="scroll"?!0:i!=="auto"||o!=="auto"?!1:e.scrollHeight>e.clientHeight&&i==="auto"||e.scrollWidth>e.clientWidth&&o==="auto"}function kd(e){const t=e.tagName.toLowerCase(),i=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!xd(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Ad(e)}function Cd(e){var t,i;const o=br(e),r=(t=o[0])!=null?t:null,s=(i=o[o.length-1])!=null?i:null;return{start:r,end:s}}function Ed(e,t){var i;return((i=e.getRootNode({composed:!0}))==null?void 0:i.host)!==t}function br(e){const t=new WeakMap,i=[];function o(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||t.has(r))return;t.set(r,!0),!i.includes(r)&&kd(r)&&i.push(r),r instanceof HTMLSlotElement&&Ed(r,e)&&r.assignedElements({flatten:!0}).forEach(s=>{o(s)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&o(r.shadowRoot)}for(const s of r.children)o(s)}return o(e),i.sort((r,s)=>{const a=Number(r.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-a})}var pt=class extends F{constructor(){super(...arguments),this.localize=new bt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var i,o,r;const s=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?(r=(o=document.activeElement)==null?void 0:o.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||(s==null?void 0:s.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const i=t.getAllItems(),o=i[0],r=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(o),o.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(o=>Cd(o).start);let i;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=t.button;break;default:i=t}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ht(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=tt(this,"dropdown.show",{dir:this.localize.dir()});await rt(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ht(this);const{keyframes:e,options:t}=tt(this,"dropdown.hide",{dir:this.localize.dir()});await rt(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return k`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${$(this.sync?this.sync:void 0)}
        class=${V({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};pt.styles=[j,_d];pt.dependencies={"sl-popup":G};h([M(".dropdown")],pt.prototype,"popup",2);h([M(".dropdown__trigger")],pt.prototype,"trigger",2);h([M(".dropdown__panel")],pt.prototype,"panel",2);h([f({type:Boolean,reflect:!0})],pt.prototype,"open",2);h([f({reflect:!0})],pt.prototype,"placement",2);h([f({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);h([f({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],pt.prototype,"stayOpenOnSelect",2);h([f({attribute:!1})],pt.prototype,"containingElement",2);h([f({type:Number})],pt.prototype,"distance",2);h([f({type:Number})],pt.prototype,"skidding",2);h([f({type:Boolean})],pt.prototype,"hoist",2);h([f({reflect:!0})],pt.prototype,"sync",2);h([O("open",{waitUntilFirstUpdate:!0})],pt.prototype,"handleOpenChange",1);Q("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Q("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});pt.define("sl-dropdown");st.define("sl-icon");var Sd=P`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,ct=class extends F{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?mo`a`:mo`button`;return gi`
      <${t}
        part="base"
        class=${V({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${$(e?void 0:this.disabled)}
        type=${$(e?void 0:"button")}
        href=${$(e?this.href:void 0)}
        target=${$(e?this.target:void 0)}
        download=${$(e?this.download:void 0)}
        rel=${$(e&&this.target?"noreferrer noopener":void 0)}
        role=${$(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${$(this.name)}
          library=${$(this.library)}
          src=${$(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};ct.styles=[j,Sd];ct.dependencies={"sl-icon":st};h([M(".icon-button")],ct.prototype,"button",2);h([et()],ct.prototype,"hasFocus",2);h([f()],ct.prototype,"name",2);h([f()],ct.prototype,"library",2);h([f()],ct.prototype,"src",2);h([f()],ct.prototype,"href",2);h([f()],ct.prototype,"target",2);h([f()],ct.prototype,"download",2);h([f()],ct.prototype,"label",2);h([f({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);ct.define("sl-icon-button");var Pd=P`
  ${en}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,It=class extends F{constructor(){super(...arguments),this.hasSlotController=new $t(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return gi`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${V({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${$(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};It.styles=[j,Pd];h([M(".button")],It.prototype,"input",2);h([M(".hidden-input")],It.prototype,"hiddenInput",2);h([et()],It.prototype,"hasFocus",2);h([f({type:Boolean,reflect:!0})],It.prototype,"checked",2);h([f()],It.prototype,"value",2);h([f({type:Boolean,reflect:!0})],It.prototype,"disabled",2);h([f({reflect:!0})],It.prototype,"size",2);h([f({type:Boolean,reflect:!0})],It.prototype,"pill",2);h([O("disabled",{waitUntilFirstUpdate:!0})],It.prototype,"handleDisabledChange",1);It.define("sl-radio-button");var Td=P`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,dt=class extends F{constructor(){super(...arguments),this.formControlController=new je(this),this.hasSlotController=new $t(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?pc:e?hc:Lo}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),o=this.value;!t||t.disabled||(this.value=t.value,i.forEach(r=>r.checked=r===t),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const i=this.getAllRadios().filter(n=>!n.disabled),o=(t=i.find(n=>n.checked))!=null?t:i[0],r=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,s=this.value;let a=i.indexOf(o)+r;a<0&&(a=i.length-1),a>i.length-1&&(a=0),this.getAllRadios().forEach(n=>{n.checked=!1,this.hasButtonGroup||n.setAttribute("tabindex","-1")}),this.value=i[a].value,i[a].checked=!0,this.hasButtonGroup?i[a].shadowRoot.querySelector("button").focus():(i[a].setAttribute("tabindex","0"),i[a].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),i=e.find(o=>o.checked)||e[0];i&&i.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const i=this.getAllRadios();if(await Promise.all(i.map(async o=>{await o.updateComplete,o.checked=o.value===this.value,o.size=this.size})),this.hasButtonGroup=i.some(o=>o.tagName.toLowerCase()==="sl-radio-button"),i.length>0&&!i.some(o=>o.checked))if(this.hasButtonGroup){const o=(e=i[0].shadowRoot)==null?void 0:e.querySelector("button");o&&o.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const o=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");o&&(o.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,o=this.helpText?!0:!!t,r=k`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return k`
      <fieldset
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?k`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};dt.styles=[j,Bi,Td];dt.dependencies={"sl-button-group":We};h([M("slot:not([name])")],dt.prototype,"defaultSlot",2);h([M(".radio-group__validation-input")],dt.prototype,"validationInput",2);h([et()],dt.prototype,"hasButtonGroup",2);h([et()],dt.prototype,"errorMessage",2);h([et()],dt.prototype,"defaultValue",2);h([f()],dt.prototype,"label",2);h([f({attribute:"help-text"})],dt.prototype,"helpText",2);h([f()],dt.prototype,"name",2);h([f({reflect:!0})],dt.prototype,"value",2);h([f({reflect:!0})],dt.prototype,"size",2);h([f({reflect:!0})],dt.prototype,"form",2);h([f({type:Boolean,reflect:!0})],dt.prototype,"required",2);h([O("size",{waitUntilFirstUpdate:!0})],dt.prototype,"handleSizeChange",1);h([O("value")],dt.prototype,"handleValueChange",1);dt.define("sl-radio-group");var $d=P`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,R=class extends F{constructor(){super(...arguments),this.formControlController=new je(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new $t(this,"help-text","label"),this.localize=new bt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,o="preserve"){const r=t??this.input.selectionStart,s=i??this.input.selectionEnd;this.input.setRangeText(e,r,s,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,o=this.helpText?!0:!!t,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return k`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${$(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${$(this.placeholder)}
              minlength=${$(this.minlength)}
              maxlength=${$(this.maxlength)}
              min=${$(this.min)}
              max=${$(this.max)}
              step=${$(this.step)}
              .value=${Ei(this.value)}
              autocapitalize=${$(this.autocapitalize)}
              autocomplete=${$(this.autocomplete)}
              autocorrect=${$(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${$(this.pattern)}
              enterkeyhint=${$(this.enterkeyhint)}
              inputmode=${$(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?k`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?k`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?k`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:k`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};R.styles=[j,Bi,$d];R.dependencies={"sl-icon":st};h([M(".input__control")],R.prototype,"input",2);h([et()],R.prototype,"hasFocus",2);h([f()],R.prototype,"title",2);h([f({reflect:!0})],R.prototype,"type",2);h([f()],R.prototype,"name",2);h([f()],R.prototype,"value",2);h([No()],R.prototype,"defaultValue",2);h([f({reflect:!0})],R.prototype,"size",2);h([f({type:Boolean,reflect:!0})],R.prototype,"filled",2);h([f({type:Boolean,reflect:!0})],R.prototype,"pill",2);h([f()],R.prototype,"label",2);h([f({attribute:"help-text"})],R.prototype,"helpText",2);h([f({type:Boolean})],R.prototype,"clearable",2);h([f({type:Boolean,reflect:!0})],R.prototype,"disabled",2);h([f()],R.prototype,"placeholder",2);h([f({type:Boolean,reflect:!0})],R.prototype,"readonly",2);h([f({attribute:"password-toggle",type:Boolean})],R.prototype,"passwordToggle",2);h([f({attribute:"password-visible",type:Boolean})],R.prototype,"passwordVisible",2);h([f({attribute:"no-spin-buttons",type:Boolean})],R.prototype,"noSpinButtons",2);h([f({reflect:!0})],R.prototype,"form",2);h([f({type:Boolean,reflect:!0})],R.prototype,"required",2);h([f()],R.prototype,"pattern",2);h([f({type:Number})],R.prototype,"minlength",2);h([f({type:Number})],R.prototype,"maxlength",2);h([f()],R.prototype,"min",2);h([f()],R.prototype,"max",2);h([f()],R.prototype,"step",2);h([f()],R.prototype,"autocapitalize",2);h([f()],R.prototype,"autocorrect",2);h([f()],R.prototype,"autocomplete",2);h([f({type:Boolean})],R.prototype,"autofocus",2);h([f()],R.prototype,"enterkeyhint",2);h([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],R.prototype,"spellcheck",2);h([f()],R.prototype,"inputmode",2);h([O("disabled",{waitUntilFirstUpdate:!0})],R.prototype,"handleDisabledChange",1);h([O("step",{waitUntilFirstUpdate:!0})],R.prototype,"handleStepChange",1);h([O("value",{waitUntilFirstUpdate:!0})],R.prototype,"handleValueChange",1);R.define("sl-input");var zd=P`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible):not([disabled]) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus-visible) {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Dd=0,Rt=class extends F{constructor(){super(...arguments),this.localize=new bt(this),this.attrId=++Dd,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,k`
      <div
        part="base"
        class=${V({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?k`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Rt.styles=[j,zd];Rt.dependencies={"sl-icon-button":ct};h([M(".tab")],Rt.prototype,"tab",2);h([f({reflect:!0})],Rt.prototype,"panel",2);h([f({type:Boolean,reflect:!0})],Rt.prototype,"active",2);h([f({type:Boolean,reflect:!0})],Rt.prototype,"closable",2);h([f({type:Boolean,reflect:!0})],Rt.prototype,"disabled",2);h([f({type:Number,reflect:!0})],Rt.prototype,"tabIndex",2);h([O("active")],Rt.prototype,"handleActiveChange",1);h([O("disabled")],Rt.prototype,"handleDisabledChange",1);Rt.define("sl-tab");var Md=P`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Od=0,Ui=class extends F{constructor(){super(...arguments),this.attrId=++Od,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return k`
      <slot
        part="base"
        class=${V({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Ui.styles=[j,Md];h([f({reflect:!0})],Ui.prototype,"name",2);h([f({type:Boolean,reflect:!0})],Ui.prototype,"active",2);h([O("active")],Ui.prototype,"handleActiveChange",1);Ui.define("sl-tab-panel");var Ld=P`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function Id(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var vr=new Set;function Rd(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Nd(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function vi(e){if(vr.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=Rd()+Nd();let i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),t<2&&(i=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",i),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function yi(e){vr.delete(e),vr.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function qs(e,t,i="vertical",o="smooth"){const r=Id(e,t),s=r.top+t.scrollTop,a=r.left+t.scrollLeft,n=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,c=t.scrollTop,u=t.scrollTop+t.offsetHeight;(i==="horizontal"||i==="both")&&(a<n?t.scrollTo({left:a,behavior:o}):a+e.clientWidth>l&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:o})),(i==="vertical"||i==="both")&&(s<c?t.scrollTo({top:s,behavior:o}):s+e.clientHeight>u&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:o}))}var kt=class extends F{constructor(){super(...arguments),this.localize=new bt(this),this.tabs=[],this.focusableTabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(i=>i.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((i,o)=>{var r;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),o.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const i=e.target.closest("sl-tab");(i==null?void 0:i.closest("sl-tab-group"))===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(e){const i=e.target.closest("sl-tab");if((i==null?void 0:i.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const r=this.tabs.find(n=>n.matches(":focus")),s=this.matches(":dir(rtl)");let a=null;if((r==null?void 0:r.tagName.toLowerCase())==="sl-tab"){if(e.key==="Home")a=this.focusableTabs[0];else if(e.key==="End")a=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const n=this.tabs.findIndex(l=>l===r);a=this.findNextFocusableTab(n,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const n=this.tabs.findIndex(l=>l===r);a=this.findNextFocusableTab(n,"forward")}if(!a)return;a.tabIndex=0,a.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(a,{scrollBehavior:"smooth"}):this.tabs.forEach(n=>{n.tabIndex=n===a?0:-1}),["top","bottom"].includes(this.placement)&&qs(a,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=te({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const i=this.activeTab;this.activeTab=e,this.tabs.forEach(o=>{o.active=o===this.activeTab,o.tabIndex=o===this.activeTab?0:-1}),this.panels.forEach(o=>{var r;return o.active=o.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&qs(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(i=>i.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,i=e.clientHeight,o=this.matches(":dir(rtl)"),r=this.getAllTabs(),a=r.slice(0,r.indexOf(e)).reduce((n,l)=>({left:n.left+l.clientWidth,top:n.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?`${-1*a.left}px`:`${a.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${a.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let i=null;const o=t==="forward"?1:-1;let r=e+o;for(;e<this.tabs.length;){if(i=this.tabs[r]||null,i===null){t==="forward"?i=this.focusableTabs[0]:i=this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;r+=o}return i}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(i=>i.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.matches(":dir(rtl)");return k`
      <div
        part="base"
        class=${V({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?k`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?k`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};kt.styles=[j,Ld];kt.dependencies={"sl-icon-button":ct};h([M(".tab-group")],kt.prototype,"tabGroup",2);h([M(".tab-group__body")],kt.prototype,"body",2);h([M(".tab-group__nav")],kt.prototype,"nav",2);h([M(".tab-group__indicator")],kt.prototype,"indicator",2);h([et()],kt.prototype,"hasScrollControls",2);h([f()],kt.prototype,"placement",2);h([f()],kt.prototype,"activation",2);h([f({attribute:"no-scroll-controls",type:Boolean})],kt.prototype,"noScrollControls",2);h([O("noScrollControls",{waitUntilFirstUpdate:!0})],kt.prototype,"updateScrollControls",1);h([O("placement",{waitUntilFirstUpdate:!0})],kt.prototype,"syncIndicator",1);kt.define("sl-tab-group");var Fd=P`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,W=class extends F{constructor(){super(...arguments),this.formControlController=new je(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new $t(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,o="preserve"){const r=t??this.input.selectionStart,s=i??this.input.selectionEnd;this.input.setRangeText(e,r,s,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,o=this.helpText?!0:!!t;return k`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${$(this.name)}
              .value=${Ei(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${$(this.placeholder)}
              rows=${$(this.rows)}
              minlength=${$(this.minlength)}
              maxlength=${$(this.maxlength)}
              autocapitalize=${$(this.autocapitalize)}
              autocorrect=${$(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${$(this.spellcheck)}
              enterkeyhint=${$(this.enterkeyhint)}
              inputmode=${$(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};W.styles=[j,Bi,Fd];h([M(".textarea__control")],W.prototype,"input",2);h([et()],W.prototype,"hasFocus",2);h([f()],W.prototype,"title",2);h([f()],W.prototype,"name",2);h([f()],W.prototype,"value",2);h([f({reflect:!0})],W.prototype,"size",2);h([f({type:Boolean,reflect:!0})],W.prototype,"filled",2);h([f()],W.prototype,"label",2);h([f({attribute:"help-text"})],W.prototype,"helpText",2);h([f()],W.prototype,"placeholder",2);h([f({type:Number})],W.prototype,"rows",2);h([f()],W.prototype,"resize",2);h([f({type:Boolean,reflect:!0})],W.prototype,"disabled",2);h([f({type:Boolean,reflect:!0})],W.prototype,"readonly",2);h([f({reflect:!0})],W.prototype,"form",2);h([f({type:Boolean,reflect:!0})],W.prototype,"required",2);h([f({type:Number})],W.prototype,"minlength",2);h([f({type:Number})],W.prototype,"maxlength",2);h([f()],W.prototype,"autocapitalize",2);h([f()],W.prototype,"autocorrect",2);h([f()],W.prototype,"autocomplete",2);h([f({type:Boolean})],W.prototype,"autofocus",2);h([f()],W.prototype,"enterkeyhint",2);h([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],W.prototype,"spellcheck",2);h([f()],W.prototype,"inputmode",2);h([No()],W.prototype,"defaultValue",2);h([O("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);h([O("rows",{waitUntilFirstUpdate:!0})],W.prototype,"handleRowsChange",1);h([O("value",{waitUntilFirstUpdate:!0})],W.prototype,"handleValueChange",1);W.define("sl-textarea");function wo(e,t,i){const o=r=>Object.is(r,-0)?0:r;return e<t?o(t):e>i?o(i):o(e)}var Bd=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Ud=P`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Vd(e,t){if(e!==void 0){let i=0;for(const o of e)yield t(o,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Hd(e,t,i=1){const o=t===void 0?0:e;t??(t=e);for(let r=o;i>0?r<t:t<r;r+=i)yield r}var jd=(e,t)=>{let i=0;return function(...o){window.clearTimeout(i),i=window.setTimeout(()=>{e.call(this,...o)},t)}},Ys=(e,t,i)=>{const o=e[t];e[t]=function(...r){o.call(this,...r),i.call(this,o,...r)}},Wd="onscrollend"in window;if(!Wd){const e=new Set,t=new WeakMap,i=r=>{for(const s of r.changedTouches)e.add(s.identifier)},o=r=>{for(const s of r.changedTouches)e.delete(s.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),Ys(EventTarget.prototype,"addEventListener",function(r,s){if(s!=="scrollend")return;const a=jd(()=>{e.size?a():this.dispatchEvent(new Event("scrollend"))},100);r.call(this,"scroll",a,{passive:!0}),t.set(this,a)}),Ys(EventTarget.prototype,"removeEventListener",function(r,s){if(s!=="scrollend")return;const a=t.get(this);a&&r.call(this,"scroll",a,{passive:!0})})}var Z=class extends F{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Bd(this,()=>this.next()),this.localize=new bt(this),this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const o=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==o||i!==r)&&(e.scrollTo({left:o,top:r,behavior:gr()?"auto":"smooth"}),await xt(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(i=>[...i.addedNodes,...i.removedNodes].some(o=>this.isCarouselItem(o)&&!o.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:i,loop:o}=this,r=o?e/i:(e-t)/i+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,i=this.matches(":dir(rtl)"),o=t.closest('[part~="pagination-item"]')!==null,r=e.key==="ArrowDown"||!i&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft",s=e.key==="ArrowUp"||!i&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight";e.preventDefault(),s&&this.previous(),r&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{var a;const n=(a=this.shadowRoot)==null?void 0:a.querySelector('[part~="pagination-item--active"]');n&&n.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const o of t){const r=o.target;r.toggleAttribute("inert",!o.isIntersecting),r.classList.toggle("--in-view",o.isIntersecting),r.setAttribute("aria-hidden",o.isIntersecting?"false":"true")}const i=t.find(o=>o.isIntersecting);if(i)if(this.loop&&i.target.hasAttribute("data-clone")){const o=Number(i.target.getAttribute("data-clone"));this.goToSlide(o,"instant")}else{const r=this.getSlides().indexOf(i.target);this.activeSlide=Math.ceil(r/this.slidesPerMove)*this.slidesPerMove}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1)}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.synchronizeSlides(),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,i=e.slice(-t),o=e.slice(0,t);i.reverse().forEach((r,s)=>{const a=r.cloneNode(!0);a.setAttribute("data-clone",String(e.length-s-1)),this.prepend(a)}),o.forEach((r,s)=>{const a=r.cloneNode(!0);a.setAttribute("data-clone",String(s)),this.append(a)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,i)=>{t.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((i,o)=>{(o+t)%t===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:i,loop:o}=this,r=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!r.length)return;const a=o?(e+r.length)%r.length:wo(e,0,r.length-1);this.activeSlide=a;const n=wo(e+(o?i:0),0,s.length-1),l=s[n];this.scrollToSlide(l,gr()?"auto":t)}scrollToSlide(e,t="smooth"){const i=this.scrollContainer,o=i.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-o.left,a=r.top-o.top;i.scrollTo({left:s+i.scrollLeft,top:a+i.scrollTop,behavior:t})}render(){const{slidesPerMove:e,scrolling:t}=this,i=this.getPageCount(),o=this.getCurrentPage(),r=this.canScrollPrev(),s=this.canScrollNext(),a=this.matches(":dir(ltr)");return k`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${V({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?k`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${V({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${a?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${V({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!s})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${a?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?k`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Vd(Hd(i),n=>{const l=n===o;return k`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${V({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",n+1,i)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(n*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};Z.styles=[j,Ud];Z.dependencies={"sl-icon":st};h([f({type:Boolean,reflect:!0})],Z.prototype,"loop",2);h([f({type:Boolean,reflect:!0})],Z.prototype,"navigation",2);h([f({type:Boolean,reflect:!0})],Z.prototype,"pagination",2);h([f({type:Boolean,reflect:!0})],Z.prototype,"autoplay",2);h([f({type:Number,attribute:"autoplay-interval"})],Z.prototype,"autoplayInterval",2);h([f({type:Number,attribute:"slides-per-page"})],Z.prototype,"slidesPerPage",2);h([f({type:Number,attribute:"slides-per-move"})],Z.prototype,"slidesPerMove",2);h([f()],Z.prototype,"orientation",2);h([f({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Z.prototype,"mouseDragging",2);h([M(".carousel__slides")],Z.prototype,"scrollContainer",2);h([M(".carousel__pagination")],Z.prototype,"paginationContainer",2);h([et()],Z.prototype,"activeSlide",2);h([et()],Z.prototype,"scrolling",2);h([et()],Z.prototype,"dragging",2);h([rc({passive:!0})],Z.prototype,"handleScroll",1);h([O("loop",{waitUntilFirstUpdate:!0}),O("slidesPerPage",{waitUntilFirstUpdate:!0})],Z.prototype,"initializeSlides",1);h([O("activeSlide")],Z.prototype,"handelSlideChange",1);h([O("slidesPerMove")],Z.prototype,"updateSlidesSnap",1);h([O("autoplay")],Z.prototype,"handleAutoplayChange",1);Z.define("sl-carousel");var qd=P`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Nt=class extends F{constructor(){super(...arguments),this.localize=new bt(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ht(this.body);const{keyframes:t,options:i}=tt(this,"details.show",{dir:this.localize.dir()});await rt(this.body,js(t,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ht(this.body);const{keyframes:t,options:i}=tt(this,"details.hide",{dir:this.localize.dir()});await rt(this.body,js(t,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,xt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,xt(this,"sl-after-hide")}render(){const e=this.matches(":dir(rtl)");return k`
      <details
        part="base"
        class=${V({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Nt.styles=[j,qd];Nt.dependencies={"sl-icon":st};h([M(".details")],Nt.prototype,"details",2);h([M(".details__header")],Nt.prototype,"header",2);h([M(".details__body")],Nt.prototype,"body",2);h([M(".details__expand-icon-slot")],Nt.prototype,"expandIconSlot",2);h([f({type:Boolean,reflect:!0})],Nt.prototype,"open",2);h([f()],Nt.prototype,"summary",2);h([f({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2);h([O("open",{waitUntilFirstUpdate:!0})],Nt.prototype,"handleOpenChange",1);Q("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});Q("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});Nt.define("sl-details");var Yd=P`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*Zr(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*ec(Zr(e.shadowRoot.activeElement))))}function Gd(){return[...Zr()].pop()}var si=[],bn=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var i;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=Gd();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const r=br(this.element);let s=r.findIndex(n=>n===o);this.previousFocus=this.currentFocus;const a=this.tabDirection==="forward"?1:-1;for(;;){s+a>=r.length?s=0:s+a<0?s=r.length-1:s+=a,this.previousFocus=this.currentFocus;const n=r[s];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||n&&this.possiblyHasTabbableChildren(n))return;t.preventDefault(),this.currentFocus=n,(i=this.currentFocus)==null||i.focus({preventScroll:!1});const l=[...Zr()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){si.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){si=si.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return si[si.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=br(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],o=this.tabDirection==="forward"?t:i;typeof(o==null?void 0:o.focus)=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};function Gs(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Ct=class extends F{constructor(){super(...arguments),this.hasSlotController=new $t(this,"footer"),this.localize=new bt(this),this.modal=new bn(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),vi(this)))}disconnectedCallback(){var e;super.disconnectedCallback(),yi(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=tt(this,"drawer.denyClose",{dir:this.localize.dir()});rt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),vi(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([ht(this.drawer),ht(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=tt(this,`drawer.show${Gs(this.placement)}`,{dir:this.localize.dir()}),i=tt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([rt(this.panel,t.keyframes,t.options),rt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),yi(this)),await Promise.all([ht(this.drawer),ht(this.overlay)]);const e=tt(this,`drawer.hide${Gs(this.placement)}`,{dir:this.localize.dir()}),t=tt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([rt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),rt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),vi(this)),this.open&&this.contained&&(this.modal.deactivate(),yi(this))}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}render(){return k`
      <div
        part="base"
        class=${V({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${$(this.noHeader?this.label:void 0)}
          aria-labelledby=${$(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":k`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Ct.styles=[j,Yd];Ct.dependencies={"sl-icon-button":ct};h([M(".drawer")],Ct.prototype,"drawer",2);h([M(".drawer__panel")],Ct.prototype,"panel",2);h([M(".drawer__overlay")],Ct.prototype,"overlay",2);h([f({type:Boolean,reflect:!0})],Ct.prototype,"open",2);h([f({reflect:!0})],Ct.prototype,"label",2);h([f({reflect:!0})],Ct.prototype,"placement",2);h([f({type:Boolean,reflect:!0})],Ct.prototype,"contained",2);h([f({attribute:"no-header",type:Boolean,reflect:!0})],Ct.prototype,"noHeader",2);h([O("open",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleOpenChange",1);h([O("contained",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleNoModalChange",1);Q("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Q("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});Q("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Q("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});Q("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Q("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});Q("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Q("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});Q("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});Q("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Q("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Ct.define("sl-drawer");var Kd=P`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Wt=class extends F{constructor(){super(...arguments),this.hasSlotController=new $t(this,"footer"),this.localize=new bt(this),this.modal=new bn(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),vi(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),yi(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=tt(this,"dialog.denyClose",{dir:this.localize.dir()});rt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),vi(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([ht(this.dialog),ht(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=tt(this,"dialog.show",{dir:this.localize.dir()}),i=tt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([rt(this.panel,t.keyframes,t.options),rt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ht(this.dialog),ht(this.overlay)]);const e=tt(this,"dialog.hide",{dir:this.localize.dir()}),t=tt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([rt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),rt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,yi(this);const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}render(){return k`
      <div
        part="base"
        class=${V({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${$(this.noHeader?this.label:void 0)}
          aria-labelledby=${$(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":k`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Wt.styles=[j,Kd];Wt.dependencies={"sl-icon-button":ct};h([M(".dialog")],Wt.prototype,"dialog",2);h([M(".dialog__panel")],Wt.prototype,"panel",2);h([M(".dialog__overlay")],Wt.prototype,"overlay",2);h([f({type:Boolean,reflect:!0})],Wt.prototype,"open",2);h([f({reflect:!0})],Wt.prototype,"label",2);h([f({attribute:"no-header",type:Boolean,reflect:!0})],Wt.prototype,"noHeader",2);h([O("open",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleOpenChange",1);Q("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Q("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Q("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Q("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Q("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Wt.define("sl-dialog");var Qd=P`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,ze=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),qt=class extends F{constructor(){super(...arguments),this.hasSlotController=new $t(this,"icon","suffix"),this.localize=new bt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ht(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=tt(this,"alert.show",{dir:this.localize.dir()});await rt(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await ht(this.base);const{keyframes:e,options:t}=tt(this,"alert.hide",{dir:this.localize.dir()});await rt(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}async toast(){return new Promise(e=>{ze.parentElement===null&&document.body.append(ze),ze.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ze.removeChild(this),e(),ze.querySelector("sl-alert")===null&&ze.remove()},{once:!0})})}render(){return k`
      <div
        part="base"
        class=${V({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?k`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};qt.styles=[j,Qd];qt.dependencies={"sl-icon-button":ct};h([M('[part~="base"]')],qt.prototype,"base",2);h([f({type:Boolean,reflect:!0})],qt.prototype,"open",2);h([f({type:Boolean,reflect:!0})],qt.prototype,"closable",2);h([f({reflect:!0})],qt.prototype,"variant",2);h([f({type:Number})],qt.prototype,"duration",2);h([O("open",{waitUntilFirstUpdate:!0})],qt.prototype,"handleOpenChange",1);h([O("duration")],qt.prototype,"handleDurationChange",1);Q("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Q("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});qt.define("sl-alert");var Xd=P`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,ts=class extends F{constructor(){super(...arguments),this.effect="none"}render(){return k`
      <div
        part="base"
        class=${V({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ts.styles=[j,Xd];h([f()],ts.prototype,"effect",2);ts.define("sl-skeleton");G.define("sl-popup");at.define("sl-tooltip");Oo.define("sl-spinner");var Jd=P`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Zd(e,t){function i(r){const s=e.getBoundingClientRect(),a=e.ownerDocument.defaultView,n=s.left+a.scrollX,l=s.top+a.scrollY,c=r.pageX-n,u=r.pageY-l;t!=null&&t.onMove&&t.onMove(c,u)}function o(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",o),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",o),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&i(t.initialEvent)}var Et=class extends F{constructor(){super(...arguments),this.localize=new bt(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.matches(":dir(rtl)");this.disabled||(e.cancelable&&e.preventDefault(),Zd(this,{onMove:(i,o)=>{let r=this.vertical?o:i;this.primary==="end"&&(r=this.size-r),this.snap&&this.snap.split(" ").forEach(a=>{let n;a.endsWith("%")?n=this.size*(parseFloat(a)/100):n=parseFloat(a),t&&!this.vertical&&(n=this.size-n),r>=n-this.snapThreshold&&r<=n+this.snapThreshold&&(r=n)}),this.position=wo(this.pixelsToPercentage(r),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const i=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=i),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=i),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=wo(t,0,100)}}handleResize(e){const{width:t,height:i}=e[0].contentRect;this.size=this.vertical?i:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.matches(":dir(rtl)"),o=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.primary==="end"?i&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${o}`:i&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${r}`,this.style[t]="",k`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${$(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Et.styles=[j,Jd];h([M(".divider")],Et.prototype,"divider",2);h([f({type:Number,reflect:!0})],Et.prototype,"position",2);h([f({attribute:"position-in-pixels",type:Number})],Et.prototype,"positionInPixels",2);h([f({type:Boolean,reflect:!0})],Et.prototype,"vertical",2);h([f({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);h([f()],Et.prototype,"primary",2);h([f()],Et.prototype,"snap",2);h([f({type:Number,attribute:"snap-threshold"})],Et.prototype,"snapThreshold",2);h([O("position")],Et.prototype,"handlePositionChange",1);h([O("positionInPixels")],Et.prototype,"handlePositionInPixelsChange",1);h([O("vertical")],Et.prototype,"handleVerticalChange",1);Et.define("sl-split-panel");var tu=P`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,ft=class extends F{constructor(){super(...arguments),this.formControlController=new je(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new $t(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return k`
      <div
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${V({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${$(this.value)}
            .checked=${Ei(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ft.styles=[j,Bi,tu];h([M('input[type="checkbox"]')],ft.prototype,"input",2);h([et()],ft.prototype,"hasFocus",2);h([f()],ft.prototype,"title",2);h([f()],ft.prototype,"name",2);h([f()],ft.prototype,"value",2);h([f({reflect:!0})],ft.prototype,"size",2);h([f({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);h([f({type:Boolean,reflect:!0})],ft.prototype,"checked",2);h([No("checked")],ft.prototype,"defaultChecked",2);h([f({reflect:!0})],ft.prototype,"form",2);h([f({type:Boolean,reflect:!0})],ft.prototype,"required",2);h([f({attribute:"help-text"})],ft.prototype,"helpText",2);h([O("checked",{waitUntilFirstUpdate:!0})],ft.prototype,"handleCheckedChange",1);h([O("disabled",{waitUntilFirstUpdate:!0})],ft.prototype,"handleDisabledChange",1);ft.define("sl-switch");var eu=P`
  :host {
    display: inline-block;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn="important",iu=" !"+vn,ou=Do(class extends Mo{constructor(e){var t;if(super(e),e.type!==Xt.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return o==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in t){const r=t[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(iu);o.includes("-")||s?i.setProperty(o,s?r.slice(0,-11):r,s?vn:""):i[o]=r}}return Tt}});let yn=null;class wn{}wn.render=function(e,t){yn(e,t)};self.QrCreator=wn;(function(e){function t(n,l,c,u){var d={},p=e(c,l);p.u(n),p.J(),u=u||0;var m=p.h(),g=p.h()+2*u;return d.text=n,d.level=l,d.version=c,d.O=g,d.a=function(b,w){return b-=u,w-=u,0>b||b>=m||0>w||w>=m?!1:p.a(b,w)},d}function i(n,l,c,u,d,p,m,g,b,w){function A(y,x,v,_,T,L,S){y?(n.lineTo(x+L,v+S),n.arcTo(x,v,_,T,p)):n.lineTo(x,v)}m?n.moveTo(l+p,c):n.moveTo(l,c),A(g,u,c,u,d,-p,0),A(b,u,d,l,d,0,-p),A(w,l,d,l,c,p,0),A(m,l,c,u,c,0,p)}function o(n,l,c,u,d,p,m,g,b,w){function A(y,x,v,_){n.moveTo(y+v,x),n.lineTo(y,x),n.lineTo(y,x+_),n.arcTo(y,x,y+v,x,p)}m&&A(l,c,p,p),g&&A(u,c,-p,p),b&&A(u,d,-p,-p),w&&A(l,d,p,-p)}function r(n,l){var c=l.fill;if(typeof c=="string")n.fillStyle=c;else{var u=c.type,d=c.colorStops;if(c=c.position.map(m=>Math.round(m*l.size)),u==="linear-gradient")var p=n.createLinearGradient.apply(n,c);else if(u==="radial-gradient")p=n.createRadialGradient.apply(n,c);else throw Error("Unsupported fill");d.forEach(([m,g])=>{p.addColorStop(m,g)}),n.fillStyle=p}}function s(n,l){t:{var c=l.text,u=l.v,d=l.N,p=l.K,m=l.P;for(d=Math.max(1,d||1),p=Math.min(40,p||40);d<=p;d+=1)try{var g=t(c,u,d,m);break t}catch{}g=void 0}if(!g)return null;for(c=n.getContext("2d"),l.background&&(c.fillStyle=l.background,c.fillRect(l.left,l.top,l.size,l.size)),u=g.O,p=l.size/u,c.beginPath(),m=0;m<u;m+=1)for(d=0;d<u;d+=1){var b=c,w=l.left+d*p,A=l.top+m*p,y=m,x=d,v=g.a,_=w+p,T=A+p,L=y-1,S=y+1,E=x-1,C=x+1,I=Math.floor(Math.min(.5,Math.max(0,l.R))*p),z=v(y,x),K=v(L,E),X=v(L,x);L=v(L,C);var vt=v(y,C);C=v(S,C),x=v(S,x),S=v(S,E),y=v(y,E),w=Math.round(w),A=Math.round(A),_=Math.round(_),T=Math.round(T),z?i(b,w,A,_,T,I,!X&&!y,!X&&!vt,!x&&!vt,!x&&!y):o(b,w,A,_,T,I,X&&y&&K,X&&vt&&L,x&&vt&&C,x&&y&&S)}return r(c,l),c.fill(),n}var a={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};yn=function(n,l){var c={};Object.assign(c,a,n),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,l instanceof HTMLCanvasElement?((l.width!==c.size||l.height!==c.size)&&(l.width=c.size,l.height=c.size),l.getContext("2d").clearRect(0,0,l.width,l.height),s(l,c)):(n=document.createElement("canvas"),n.width=c.size,n.height=c.size,c=s(n,c),l.appendChild(c))}})(function(){function e(l){var c=i.s(l);return{S:function(){return 4},b:function(){return c.length},write:function(u){for(var d=0;d<c.length;d+=1)u.put(c[d],8)}}}function t(){var l=[],c=0,u={B:function(){return l},c:function(d){return(l[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,p){for(var m=0;m<p;m+=1)u.m((d>>>p-m-1&1)==1)},f:function(){return c},m:function(d){var p=Math.floor(c/8);l.length<=p&&l.push(0),d&&(l[p]|=128>>>c%8),c+=1}};return u}function i(l,c){function u(y,x){for(var v=-1;7>=v;v+=1)if(!(-1>=y+v||g<=y+v))for(var _=-1;7>=_;_+=1)-1>=x+_||g<=x+_||(m[y+v][x+_]=0<=v&&6>=v&&(_==0||_==6)||0<=_&&6>=_&&(v==0||v==6)||2<=v&&4>=v&&2<=_&&4>=_)}function d(y,x){for(var v=g=4*l+17,_=Array(v),T=0;T<v;T+=1){_[T]=Array(v);for(var L=0;L<v;L+=1)_[T][L]=null}for(m=_,u(0,0),u(g-7,0),u(0,g-7),v=s.G(l),_=0;_<v.length;_+=1)for(T=0;T<v.length;T+=1){L=v[_];var S=v[T];if(m[L][S]==null)for(var E=-2;2>=E;E+=1)for(var C=-2;2>=C;C+=1)m[L+E][S+C]=E==-2||E==2||C==-2||C==2||E==0&&C==0}for(v=8;v<g-8;v+=1)m[v][6]==null&&(m[v][6]=v%2==0);for(v=8;v<g-8;v+=1)m[6][v]==null&&(m[6][v]=v%2==0);for(v=s.w(p<<3|x),_=0;15>_;_+=1)T=!y&&(v>>_&1)==1,m[6>_?_:8>_?_+1:g-15+_][8]=T,m[8][8>_?g-_-1:9>_?15-_:14-_]=T;if(m[g-8][8]=!y,7<=l){for(v=s.A(l),_=0;18>_;_+=1)T=!y&&(v>>_&1)==1,m[Math.floor(_/3)][_%3+g-8-3]=T;for(_=0;18>_;_+=1)T=!y&&(v>>_&1)==1,m[_%3+g-8-3][Math.floor(_/3)]=T}if(b==null){for(y=n.I(l,p),v=t(),_=0;_<w.length;_+=1)T=w[_],v.put(4,4),v.put(T.b(),s.f(4,l)),T.write(v);for(_=T=0;_<y.length;_+=1)T+=y[_].j;if(v.f()>8*T)throw Error("code length overflow. ("+v.f()+">"+8*T+")");for(v.f()+4<=8*T&&v.put(0,4);v.f()%8!=0;)v.m(!1);for(;!(v.f()>=8*T)&&(v.put(236,8),!(v.f()>=8*T));)v.put(17,8);var I=0;for(T=_=0,L=Array(y.length),S=Array(y.length),E=0;E<y.length;E+=1){var z=y[E].j,K=y[E].o-z;for(_=Math.max(_,z),T=Math.max(T,K),L[E]=Array(z),C=0;C<L[E].length;C+=1)L[E][C]=255&v.B()[C+I];for(I+=z,C=s.C(K),z=o(L[E],C.b()-1).l(C),S[E]=Array(C.b()-1),C=0;C<S[E].length;C+=1)K=C+z.b()-S[E].length,S[E][C]=0<=K?z.c(K):0}for(C=v=0;C<y.length;C+=1)v+=y[C].o;for(v=Array(v),C=I=0;C<_;C+=1)for(E=0;E<y.length;E+=1)C<L[E].length&&(v[I]=L[E][C],I+=1);for(C=0;C<T;C+=1)for(E=0;E<y.length;E+=1)C<S[E].length&&(v[I]=S[E][C],I+=1);b=v}for(y=b,v=-1,_=g-1,T=7,L=0,x=s.F(x),S=g-1;0<S;S-=2)for(S==6&&--S;;){for(E=0;2>E;E+=1)m[_][S-E]==null&&(C=!1,L<y.length&&(C=(y[L]>>>T&1)==1),x(_,S-E)&&(C=!C),m[_][S-E]=C,--T,T==-1&&(L+=1,T=7));if(_+=v,0>_||g<=_){_-=v,v=-v;break}}}var p=r[c],m=null,g=0,b=null,w=[],A={u:function(y){y=e(y),w.push(y),b=null},a:function(y,x){if(0>y||g<=y||0>x||g<=x)throw Error(y+","+x);return m[y][x]},h:function(){return g},J:function(){for(var y=0,x=0,v=0;8>v;v+=1){d(!0,v);var _=s.D(A);(v==0||y>_)&&(y=_,x=v)}d(!1,x)}};return A}function o(l,c){if(typeof l.length>"u")throw Error(l.length+"/"+c);var u=function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var m=Array(l.length-p+c),g=0;g<l.length-p;g+=1)m[g]=l[g+p];return m}(),d={c:function(p){return u[p]},b:function(){return u.length},multiply:function(p){for(var m=Array(d.b()+p.b()-1),g=0;g<d.b();g+=1)for(var b=0;b<p.b();b+=1)m[g+b]^=a.i(a.g(d.c(g))+a.g(p.c(b)));return o(m,0)},l:function(p){if(0>d.b()-p.b())return d;for(var m=a.g(d.c(0))-a.g(p.c(0)),g=Array(d.b()),b=0;b<d.b();b+=1)g[b]=d.c(b);for(b=0;b<p.b();b+=1)g[b]^=a.i(a.g(p.c(b))+m);return o(g,0).l(p)}};return d}i.s=function(l){for(var c=[],u=0;u<l.length;u++){var d=l.charCodeAt(u);128>d?c.push(d):2048>d?c.push(192|d>>6,128|d&63):55296>d||57344<=d?c.push(224|d>>12,128|d>>6&63,128|d&63):(u++,d=65536+((d&1023)<<10|l.charCodeAt(u)&1023),c.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return c};var r={L:1,M:0,Q:3,H:2},s=function(){function l(d){for(var p=0;d!=0;)p+=1,d>>>=1;return p}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],u={w:function(d){for(var p=d<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(d<<10|p)^21522},A:function(d){for(var p=d<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return d<<12|p},G:function(d){return c[d-1]},F:function(d){switch(d){case 0:return function(p,m){return(p+m)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,m){return m%3==0};case 3:return function(p,m){return(p+m)%3==0};case 4:return function(p,m){return(Math.floor(p/2)+Math.floor(m/3))%2==0};case 5:return function(p,m){return p*m%2+p*m%3==0};case 6:return function(p,m){return(p*m%2+p*m%3)%2==0};case 7:return function(p,m){return(p*m%3+(p+m)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var p=o([1],0),m=0;m<d;m+=1)p=p.multiply(o([1,a.i(m)],0));return p},f:function(d,p){if(d!=4||1>p||40<p)throw Error("mode: "+d+"; type: "+p);return 10>p?8:16},D:function(d){for(var p=d.h(),m=0,g=0;g<p;g+=1)for(var b=0;b<p;b+=1){for(var w=0,A=d.a(g,b),y=-1;1>=y;y+=1)if(!(0>g+y||p<=g+y))for(var x=-1;1>=x;x+=1)0>b+x||p<=b+x||(y!=0||x!=0)&&A==d.a(g+y,b+x)&&(w+=1);5<w&&(m+=3+w-5)}for(g=0;g<p-1;g+=1)for(b=0;b<p-1;b+=1)w=0,d.a(g,b)&&(w+=1),d.a(g+1,b)&&(w+=1),d.a(g,b+1)&&(w+=1),d.a(g+1,b+1)&&(w+=1),(w==0||w==4)&&(m+=3);for(g=0;g<p;g+=1)for(b=0;b<p-6;b+=1)d.a(g,b)&&!d.a(g,b+1)&&d.a(g,b+2)&&d.a(g,b+3)&&d.a(g,b+4)&&!d.a(g,b+5)&&d.a(g,b+6)&&(m+=40);for(b=0;b<p;b+=1)for(g=0;g<p-6;g+=1)d.a(g,b)&&!d.a(g+1,b)&&d.a(g+2,b)&&d.a(g+3,b)&&d.a(g+4,b)&&!d.a(g+5,b)&&d.a(g+6,b)&&(m+=40);for(b=w=0;b<p;b+=1)for(g=0;g<p;g+=1)d.a(g,b)&&(w+=1);return m+=Math.abs(100*w/p/p-50)/5*10}};return u}(),a=function(){for(var l=Array(256),c=Array(256),u=0;8>u;u+=1)l[u]=1<<u;for(u=8;256>u;u+=1)l[u]=l[u-4]^l[u-5]^l[u-6]^l[u-8];for(u=0;255>u;u+=1)c[l[u]]=u;return{g:function(d){if(1>d)throw Error("glog("+d+")");return c[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return l[d]}}}(),n=function(){function l(d,p){switch(p){case r.L:return c[4*(d-1)];case r.M:return c[4*(d-1)+1];case r.Q:return c[4*(d-1)+2];case r.H:return c[4*(d-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u={I:function(d,p){var m=l(d,p);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+p);d=m.length/3,p=[];for(var g=0;g<d;g+=1)for(var b=m[3*g],w=m[3*g+1],A=m[3*g+2],y=0;y<b;y+=1){var x=A,v={};v.o=w,v.j=x,p.push(v)}return p}};return u}();return i}());const ru=QrCreator;var Ft=class extends F{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&ru.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return k`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${ou({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Ft.styles=[j,eu];h([M("canvas")],Ft.prototype,"canvas",2);h([f()],Ft.prototype,"value",2);h([f()],Ft.prototype,"label",2);h([f({type:Number})],Ft.prototype,"size",2);h([f()],Ft.prototype,"fill",2);h([f()],Ft.prototype,"background",2);h([f({type:Number})],Ft.prototype,"radius",2);h([f({attribute:"error-correction"})],Ft.prototype,"errorCorrection",2);h([O(["background","errorCorrection","fill","radius","size","value"])],Ft.prototype,"generate",1);Ft.define("sl-qr-code");function tr(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=t.width?String(t.width):e.defaultWidth,o=e.formats[i]||e.formats[e.defaultWidth];return o}}function ai(e){return function(t,i){var o=i!=null&&i.context?String(i.context):"standalone",r;if(o==="formatting"&&e.formattingValues){var s=e.defaultFormattingWidth||e.defaultWidth,a=i!=null&&i.width?String(i.width):s;r=e.formattingValues[a]||e.formattingValues[s]}else{var n=e.defaultWidth,l=i!=null&&i.width?String(i.width):e.defaultWidth;r=e.values[l]||e.values[n]}var c=e.argumentCallback?e.argumentCallback(t):t;return r[c]}}function ni(e){return function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=i.width,r=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],s=t.match(r);if(!s)return null;var a=s[0],n=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(n)?au(n,function(d){return d.test(a)}):su(n,function(d){return d.test(a)}),c;c=e.valueCallback?e.valueCallback(l):l,c=i.valueCallback?i.valueCallback(c):c;var u=t.slice(a.length);return{value:c,rest:u}}}function su(e,t){for(var i in e)if(e.hasOwnProperty(i)&&t(e[i]))return i}function au(e,t){for(var i=0;i<e.length;i++)if(t(e[i]))return i}function nu(e){return function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.match(e.matchPattern);if(!o)return null;var r=o[0],s=t.match(e.parsePattern);if(!s)return null;var a=e.valueCallback?e.valueCallback(s[0]):s[0];a=i.valueCallback?i.valueCallback(a):a;var n=t.slice(r.length);return{value:a,rest:n}}}function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(e)}function ut(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function U(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function B(e){U(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||Si(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function lu(e,t){U(2,arguments);var i=B(e),o=ut(t);return isNaN(o)?new Date(NaN):(o&&i.setDate(i.getDate()+o),i)}function cu(e,t){U(2,arguments);var i=B(e),o=ut(t);if(isNaN(o))return new Date(NaN);if(!o)return i;var r=i.getDate(),s=new Date(i.getTime());s.setMonth(i.getMonth()+o+1,0);var a=s.getDate();return r>=a?s:(i.setFullYear(s.getFullYear(),s.getMonth(),r),i)}function li(e,t){if(U(2,arguments),!t||Si(t)!=="object")return new Date(NaN);var i=t.years?ut(t.years):0,o=t.months?ut(t.months):0,r=t.weeks?ut(t.weeks):0,s=t.days?ut(t.days):0,a=t.hours?ut(t.hours):0,n=t.minutes?ut(t.minutes):0,l=t.seconds?ut(t.seconds):0,c=B(e),u=o||i?cu(c,o+i*12):c,d=s||r?lu(u,s+r*7):u,p=n+a*60,m=l+p*60,g=m*1e3,b=new Date(d.getTime()+g);return b}function du(e,t){U(2,arguments);var i=B(e).getTime(),o=ut(t);return new Date(i+o)}var uu={};function Vi(){return uu}function yr(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function Ks(e){U(1,arguments);var t=B(e);return t.setHours(0,0,0,0),t}var hu=864e5;function pu(e,t){U(2,arguments);var i=Ks(e),o=Ks(t),r=i.getTime()-yr(i),s=o.getTime()-yr(o);return Math.round((r-s)/hu)}function Ie(e,t){U(2,arguments);var i=B(e),o=B(t),r=i.getTime()-o.getTime();return r<0?-1:r>0?1:r}var fu=6e4,mu=36e5;function gu(e){return U(1,arguments),e instanceof Date||Si(e)==="object"&&Object.prototype.toString.call(e)==="[object Date]"}function bu(e){if(U(1,arguments),!gu(e)&&typeof e!="number")return!1;var t=B(e);return!isNaN(Number(t))}function vu(e,t){U(2,arguments);var i=B(e),o=B(t),r=i.getFullYear()-o.getFullYear(),s=i.getMonth()-o.getMonth();return r*12+s}function yu(e,t){U(2,arguments);var i=B(e),o=B(t);return i.getFullYear()-o.getFullYear()}function Qs(e,t){var i=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return i<0?-1:i>0?1:i}function wu(e,t){U(2,arguments);var i=B(e),o=B(t),r=Qs(i,o),s=Math.abs(pu(i,o));i.setDate(i.getDate()-r*s);var a=+(Qs(i,o)===-r),n=r*(s-a);return n===0?0:n}function es(e,t){return U(2,arguments),B(e).getTime()-B(t).getTime()}var Xs={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},_u="trunc";function is(e){return e?Xs[e]:Xs[_u]}function xu(e,t,i){U(2,arguments);var o=es(e,t)/mu;return is(void 0)(o)}function Au(e,t,i){U(2,arguments);var o=es(e,t)/fu;return is(void 0)(o)}function ku(e){U(1,arguments);var t=B(e);return t.setHours(23,59,59,999),t}function Cu(e){U(1,arguments);var t=B(e),i=t.getMonth();return t.setFullYear(t.getFullYear(),i+1,0),t.setHours(23,59,59,999),t}function Eu(e){U(1,arguments);var t=B(e);return ku(t).getTime()===Cu(t).getTime()}function Su(e,t){U(2,arguments);var i=B(e),o=B(t),r=Ie(i,o),s=Math.abs(vu(i,o)),a;if(s<1)a=0;else{i.getMonth()===1&&i.getDate()>27&&i.setDate(30),i.setMonth(i.getMonth()-r*s);var n=Ie(i,o)===-r;Eu(B(e))&&s===1&&Ie(e,o)===1&&(n=!1),a=r*(s-Number(n))}return a===0?0:a}function Pu(e,t,i){U(2,arguments);var o=es(e,t)/1e3;return is(void 0)(o)}function Tu(e,t){U(2,arguments);var i=B(e),o=B(t),r=Ie(i,o),s=Math.abs(yu(i,o));i.setFullYear(1584),o.setFullYear(1584);var a=Ie(i,o)===-r,n=r*(s-Number(a));return n===0?0:n}function $u(e,t){U(2,arguments);var i=ut(t);return du(e,-i)}var zu=864e5;function Du(e){U(1,arguments);var t=B(e),i=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var o=t.getTime(),r=i-o;return Math.floor(r/zu)+1}function _o(e){U(1,arguments);var t=1,i=B(e),o=i.getUTCDay(),r=(o<t?7:0)+o-t;return i.setUTCDate(i.getUTCDate()-r),i.setUTCHours(0,0,0,0),i}function _n(e){U(1,arguments);var t=B(e),i=t.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(i+1,0,4),o.setUTCHours(0,0,0,0);var r=_o(o),s=new Date(0);s.setUTCFullYear(i,0,4),s.setUTCHours(0,0,0,0);var a=_o(s);return t.getTime()>=r.getTime()?i+1:t.getTime()>=a.getTime()?i:i-1}function Mu(e){U(1,arguments);var t=_n(e),i=new Date(0);i.setUTCFullYear(t,0,4),i.setUTCHours(0,0,0,0);var o=_o(i);return o}var Ou=6048e5;function Lu(e){U(1,arguments);var t=B(e),i=_o(t).getTime()-Mu(t).getTime();return Math.round(i/Ou)+1}function xo(e,t){var i,o,r,s,a,n,l,c;U(1,arguments);var u=Vi(),d=ut((i=(o=(r=(s=t==null?void 0:t.weekStartsOn)!==null&&s!==void 0?s:t==null||(a=t.locale)===null||a===void 0||(n=a.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&r!==void 0?r:u.weekStartsOn)!==null&&o!==void 0?o:(l=u.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&i!==void 0?i:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=B(e),m=p.getUTCDay(),g=(m<d?7:0)+m-d;return p.setUTCDate(p.getUTCDate()-g),p.setUTCHours(0,0,0,0),p}function xn(e,t){var i,o,r,s,a,n,l,c;U(1,arguments);var u=B(e),d=u.getUTCFullYear(),p=Vi(),m=ut((i=(o=(r=(s=t==null?void 0:t.firstWeekContainsDate)!==null&&s!==void 0?s:t==null||(a=t.locale)===null||a===void 0||(n=a.options)===null||n===void 0?void 0:n.firstWeekContainsDate)!==null&&r!==void 0?r:p.firstWeekContainsDate)!==null&&o!==void 0?o:(l=p.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(d+1,0,m),g.setUTCHours(0,0,0,0);var b=xo(g,t),w=new Date(0);w.setUTCFullYear(d,0,m),w.setUTCHours(0,0,0,0);var A=xo(w,t);return u.getTime()>=b.getTime()?d+1:u.getTime()>=A.getTime()?d:d-1}function Iu(e,t){var i,o,r,s,a,n,l,c;U(1,arguments);var u=Vi(),d=ut((i=(o=(r=(s=t==null?void 0:t.firstWeekContainsDate)!==null&&s!==void 0?s:t==null||(a=t.locale)===null||a===void 0||(n=a.options)===null||n===void 0?void 0:n.firstWeekContainsDate)!==null&&r!==void 0?r:u.firstWeekContainsDate)!==null&&o!==void 0?o:(l=u.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&i!==void 0?i:1),p=xn(e,t),m=new Date(0);m.setUTCFullYear(p,0,d),m.setUTCHours(0,0,0,0);var g=xo(m,t);return g}var Ru=6048e5;function Nu(e,t){U(1,arguments);var i=B(e),o=xo(i,t).getTime()-Iu(i,t).getTime();return Math.round(o/Ru)+1}function q(e,t){for(var i=e<0?"-":"",o=Math.abs(e).toString();o.length<t;)o="0"+o;return i+o}var ae={y:function(t,i){var o=t.getUTCFullYear(),r=o>0?o:1-o;return q(i==="yy"?r%100:r,i.length)},M:function(t,i){var o=t.getUTCMonth();return i==="M"?String(o+1):q(o+1,2)},d:function(t,i){return q(t.getUTCDate(),i.length)},a:function(t,i){var o=t.getUTCHours()/12>=1?"pm":"am";switch(i){case"a":case"aa":return o.toUpperCase();case"aaa":return o;case"aaaaa":return o[0];case"aaaa":default:return o==="am"?"a.m.":"p.m."}},h:function(t,i){return q(t.getUTCHours()%12||12,i.length)},H:function(t,i){return q(t.getUTCHours(),i.length)},m:function(t,i){return q(t.getUTCMinutes(),i.length)},s:function(t,i){return q(t.getUTCSeconds(),i.length)},S:function(t,i){var o=i.length,r=t.getUTCMilliseconds(),s=Math.floor(r*Math.pow(10,o-3));return q(s,i.length)}},De={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Fu={G:function(t,i,o){var r=t.getUTCFullYear()>0?1:0;switch(i){case"G":case"GG":case"GGG":return o.era(r,{width:"abbreviated"});case"GGGGG":return o.era(r,{width:"narrow"});case"GGGG":default:return o.era(r,{width:"wide"})}},y:function(t,i,o){if(i==="yo"){var r=t.getUTCFullYear(),s=r>0?r:1-r;return o.ordinalNumber(s,{unit:"year"})}return ae.y(t,i)},Y:function(t,i,o,r){var s=xn(t,r),a=s>0?s:1-s;if(i==="YY"){var n=a%100;return q(n,2)}return i==="Yo"?o.ordinalNumber(a,{unit:"year"}):q(a,i.length)},R:function(t,i){var o=_n(t);return q(o,i.length)},u:function(t,i){var o=t.getUTCFullYear();return q(o,i.length)},Q:function(t,i,o){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(i){case"Q":return String(r);case"QQ":return q(r,2);case"Qo":return o.ordinalNumber(r,{unit:"quarter"});case"QQQ":return o.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return o.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,i,o){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(i){case"q":return String(r);case"qq":return q(r,2);case"qo":return o.ordinalNumber(r,{unit:"quarter"});case"qqq":return o.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return o.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,i,o){var r=t.getUTCMonth();switch(i){case"M":case"MM":return ae.M(t,i);case"Mo":return o.ordinalNumber(r+1,{unit:"month"});case"MMM":return o.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return o.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(r,{width:"wide",context:"formatting"})}},L:function(t,i,o){var r=t.getUTCMonth();switch(i){case"L":return String(r+1);case"LL":return q(r+1,2);case"Lo":return o.ordinalNumber(r+1,{unit:"month"});case"LLL":return o.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return o.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(r,{width:"wide",context:"standalone"})}},w:function(t,i,o,r){var s=Nu(t,r);return i==="wo"?o.ordinalNumber(s,{unit:"week"}):q(s,i.length)},I:function(t,i,o){var r=Lu(t);return i==="Io"?o.ordinalNumber(r,{unit:"week"}):q(r,i.length)},d:function(t,i,o){return i==="do"?o.ordinalNumber(t.getUTCDate(),{unit:"date"}):ae.d(t,i)},D:function(t,i,o){var r=Du(t);return i==="Do"?o.ordinalNumber(r,{unit:"dayOfYear"}):q(r,i.length)},E:function(t,i,o){var r=t.getUTCDay();switch(i){case"E":case"EE":case"EEE":return o.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return o.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(r,{width:"short",context:"formatting"});case"EEEE":default:return o.day(r,{width:"wide",context:"formatting"})}},e:function(t,i,o,r){var s=t.getUTCDay(),a=(s-r.weekStartsOn+8)%7||7;switch(i){case"e":return String(a);case"ee":return q(a,2);case"eo":return o.ordinalNumber(a,{unit:"day"});case"eee":return o.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return o.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(s,{width:"short",context:"formatting"});case"eeee":default:return o.day(s,{width:"wide",context:"formatting"})}},c:function(t,i,o,r){var s=t.getUTCDay(),a=(s-r.weekStartsOn+8)%7||7;switch(i){case"c":return String(a);case"cc":return q(a,i.length);case"co":return o.ordinalNumber(a,{unit:"day"});case"ccc":return o.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return o.day(s,{width:"narrow",context:"standalone"});case"cccccc":return o.day(s,{width:"short",context:"standalone"});case"cccc":default:return o.day(s,{width:"wide",context:"standalone"})}},i:function(t,i,o){var r=t.getUTCDay(),s=r===0?7:r;switch(i){case"i":return String(s);case"ii":return q(s,i.length);case"io":return o.ordinalNumber(s,{unit:"day"});case"iii":return o.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return o.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return o.day(r,{width:"short",context:"formatting"});case"iiii":default:return o.day(r,{width:"wide",context:"formatting"})}},a:function(t,i,o){var r=t.getUTCHours(),s=r/12>=1?"pm":"am";switch(i){case"a":case"aa":return o.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return o.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return o.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,i,o){var r=t.getUTCHours(),s;switch(r===12?s=De.noon:r===0?s=De.midnight:s=r/12>=1?"pm":"am",i){case"b":case"bb":return o.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return o.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return o.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,i,o){var r=t.getUTCHours(),s;switch(r>=17?s=De.evening:r>=12?s=De.afternoon:r>=4?s=De.morning:s=De.night,i){case"B":case"BB":case"BBB":return o.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return o.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,i,o){if(i==="ho"){var r=t.getUTCHours()%12;return r===0&&(r=12),o.ordinalNumber(r,{unit:"hour"})}return ae.h(t,i)},H:function(t,i,o){return i==="Ho"?o.ordinalNumber(t.getUTCHours(),{unit:"hour"}):ae.H(t,i)},K:function(t,i,o){var r=t.getUTCHours()%12;return i==="Ko"?o.ordinalNumber(r,{unit:"hour"}):q(r,i.length)},k:function(t,i,o){var r=t.getUTCHours();return r===0&&(r=24),i==="ko"?o.ordinalNumber(r,{unit:"hour"}):q(r,i.length)},m:function(t,i,o){return i==="mo"?o.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):ae.m(t,i)},s:function(t,i,o){return i==="so"?o.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):ae.s(t,i)},S:function(t,i){return ae.S(t,i)},X:function(t,i,o,r){var s=r._originalDate||t,a=s.getTimezoneOffset();if(a===0)return"Z";switch(i){case"X":return Zs(a);case"XXXX":case"XX":return ge(a);case"XXXXX":case"XXX":default:return ge(a,":")}},x:function(t,i,o,r){var s=r._originalDate||t,a=s.getTimezoneOffset();switch(i){case"x":return Zs(a);case"xxxx":case"xx":return ge(a);case"xxxxx":case"xxx":default:return ge(a,":")}},O:function(t,i,o,r){var s=r._originalDate||t,a=s.getTimezoneOffset();switch(i){case"O":case"OO":case"OOO":return"GMT"+Js(a,":");case"OOOO":default:return"GMT"+ge(a,":")}},z:function(t,i,o,r){var s=r._originalDate||t,a=s.getTimezoneOffset();switch(i){case"z":case"zz":case"zzz":return"GMT"+Js(a,":");case"zzzz":default:return"GMT"+ge(a,":")}},t:function(t,i,o,r){var s=r._originalDate||t,a=Math.floor(s.getTime()/1e3);return q(a,i.length)},T:function(t,i,o,r){var s=r._originalDate||t,a=s.getTime();return q(a,i.length)}};function Js(e,t){var i=e>0?"-":"+",o=Math.abs(e),r=Math.floor(o/60),s=o%60;if(s===0)return i+String(r);var a=t;return i+String(r)+a+q(s,2)}function Zs(e,t){if(e%60===0){var i=e>0?"-":"+";return i+q(Math.abs(e)/60,2)}return ge(e,t)}function ge(e,t){var i=t||"",o=e>0?"-":"+",r=Math.abs(e),s=q(Math.floor(r/60),2),a=q(r%60,2);return o+s+i+a}var ta=function(t,i){switch(t){case"P":return i.date({width:"short"});case"PP":return i.date({width:"medium"});case"PPP":return i.date({width:"long"});case"PPPP":default:return i.date({width:"full"})}},An=function(t,i){switch(t){case"p":return i.time({width:"short"});case"pp":return i.time({width:"medium"});case"ppp":return i.time({width:"long"});case"pppp":default:return i.time({width:"full"})}},Bu=function(t,i){var o=t.match(/(P+)(p+)?/)||[],r=o[1],s=o[2];if(!s)return ta(t,i);var a;switch(r){case"P":a=i.dateTime({width:"short"});break;case"PP":a=i.dateTime({width:"medium"});break;case"PPP":a=i.dateTime({width:"long"});break;case"PPPP":default:a=i.dateTime({width:"full"});break}return a.replace("{{date}}",ta(r,i)).replace("{{time}}",An(s,i))},Uu={p:An,P:Bu},Vu=["D","DD"],Hu=["YY","YYYY"];function ju(e){return Vu.indexOf(e)!==-1}function Wu(e){return Hu.indexOf(e)!==-1}function ea(e,t,i){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(i,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(i,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(i,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(i,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var qu={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Yu=function(t,i,o){var r,s=qu[t];return typeof s=="string"?r=s:i===1?r=s.one:r=s.other.replace("{{count}}",i.toString()),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"in "+r:r+" ago":r},Gu={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ku={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Qu={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Xu={date:tr({formats:Gu,defaultWidth:"full"}),time:tr({formats:Ku,defaultWidth:"full"}),dateTime:tr({formats:Qu,defaultWidth:"full"})},Ju={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Zu=function(t,i,o,r){return Ju[t]},th={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},eh={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ih={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},oh={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},rh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},sh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ah=function(t,i){var o=Number(t),r=o%100;if(r>20||r<10)switch(r%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},nh={ordinalNumber:ah,era:ai({values:th,defaultWidth:"wide"}),quarter:ai({values:eh,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:ai({values:ih,defaultWidth:"wide"}),day:ai({values:oh,defaultWidth:"wide"}),dayPeriod:ai({values:rh,defaultWidth:"wide",formattingValues:sh,defaultFormattingWidth:"wide"})},lh=/^(\d+)(th|st|nd|rd)?/i,ch=/\d+/i,dh={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},uh={any:[/^b/i,/^(a|c)/i]},hh={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ph={any:[/1/i,/2/i,/3/i,/4/i]},fh={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},mh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},gh={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},bh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},vh={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},yh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},wh={ordinalNumber:nu({matchPattern:lh,parsePattern:ch,valueCallback:function(t){return parseInt(t,10)}}),era:ni({matchPatterns:dh,defaultMatchWidth:"wide",parsePatterns:uh,defaultParseWidth:"any"}),quarter:ni({matchPatterns:hh,defaultMatchWidth:"wide",parsePatterns:ph,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:ni({matchPatterns:fh,defaultMatchWidth:"wide",parsePatterns:mh,defaultParseWidth:"any"}),day:ni({matchPatterns:gh,defaultMatchWidth:"wide",parsePatterns:bh,defaultParseWidth:"any"}),dayPeriod:ni({matchPatterns:vh,defaultMatchWidth:"any",parsePatterns:yh,defaultParseWidth:"any"})},kn={code:"en-US",formatDistance:Yu,formatLong:Xu,formatRelative:Zu,localize:nh,match:wh,options:{weekStartsOn:0,firstWeekContainsDate:1}},_h=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,xh=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ah=/^'([^]*?)'?$/,kh=/''/g,Ch=/[a-zA-Z]/;function ia(e,t,i){var o,r,s,a,n,l,c,u,d,p,m,g,b,w;U(2,arguments);var A=String(t),y=Vi(),x=(o=(r=void 0)!==null&&r!==void 0?r:y.locale)!==null&&o!==void 0?o:kn,v=ut((s=(a=(n=(l=void 0)!==null&&l!==void 0?l:void 0)!==null&&n!==void 0?n:y.firstWeekContainsDate)!==null&&a!==void 0?a:(c=y.locale)===null||c===void 0||(u=c.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var _=ut((d=(p=(m=(g=void 0)!==null&&g!==void 0?g:void 0)!==null&&m!==void 0?m:y.weekStartsOn)!==null&&p!==void 0?p:(b=y.locale)===null||b===void 0||(w=b.options)===null||w===void 0?void 0:w.weekStartsOn)!==null&&d!==void 0?d:0);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!x.localize)throw new RangeError("locale must contain localize property");if(!x.formatLong)throw new RangeError("locale must contain formatLong property");var T=B(e);if(!bu(T))throw new RangeError("Invalid time value");var L=yr(T),S=$u(T,L),E={firstWeekContainsDate:v,weekStartsOn:_,locale:x,_originalDate:T},C=A.match(xh).map(function(I){var z=I[0];if(z==="p"||z==="P"){var K=Uu[z];return K(I,x.formatLong)}return I}).join("").match(_h).map(function(I){if(I==="''")return"'";var z=I[0];if(z==="'")return Eh(I);var K=Fu[z];if(K)return Wu(I)&&ea(I,t,String(e)),ju(I)&&ea(I,t,String(e)),K(S,I,x.localize,E);if(z.match(Ch))throw new RangeError("Format string contains an unescaped latin alphabet character `"+z+"`");return I}).join("");return C}function Eh(e){var t=e.match(Ah);return t?t[1].replace(kh,"'"):e}var Sh=["years","months","weeks","days","hours","minutes","seconds"];function Ph(e,t){var i,o,r,s,a;if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var n=Vi(),l=(i=(o=t==null?void 0:t.locale)!==null&&o!==void 0?o:n.locale)!==null&&i!==void 0?i:kn,c=(r=t==null?void 0:t.format)!==null&&r!==void 0?r:Sh,u=(s=t==null?void 0:t.zero)!==null&&s!==void 0?s:!1,d=(a=t==null?void 0:t.delimiter)!==null&&a!==void 0?a:" ";if(!l.formatDistance)return"";var p=c.reduce(function(m,g){var b="x".concat(g.replace(/(^.)/,function(A){return A.toUpperCase()})),w=e[g];return typeof w=="number"&&(u||e[g])?m.concat(l.formatDistance(b,w)):m},[]).join(d);return p}function Th(e){U(1,arguments);var t=B(e.start),i=B(e.end);if(isNaN(t.getTime()))throw new RangeError("Start Date is invalid");if(isNaN(i.getTime()))throw new RangeError("End Date is invalid");var o={};o.years=Math.abs(Tu(i,t));var r=Ie(i,t),s=li(t,{years:r*o.years});o.months=Math.abs(Su(i,s));var a=li(s,{months:r*o.months});o.days=Math.abs(wu(i,a));var n=li(a,{days:r*o.days});o.hours=Math.abs(xu(i,n));var l=li(n,{hours:r*o.hours});o.minutes=Math.abs(Au(i,l));var c=li(l,{minutes:r*o.minutes});return o.seconds=Math.abs(Pu(i,c)),o}function oa(e){var t="";return i(e),t;function i(o){if(o===null||typeof o!="object"||o.toJSON!=null)t+=JSON.stringify(o);else if(Array.isArray(o)){t+="[";let r=!1;o.forEach(s=>{r&&(t+=","),r=!0,i(s)}),t+="]"}else{t+="{";let r=!1;Object.keys(o).sort().forEach(s=>{r&&(t+=","),r=!0,t+=JSON.stringify(s),t+=":",i(o[s])}),t+="}"}}}const eo={get:(e,t)=>{let i=JSON.parse(localStorage.getItem("web5:"+e));if(i)return i;if(t!==void 0)return eo.set(e,t),t},set:(e,t)=>(localStorage.setItem("web5:"+e,JSON.stringify(t)),t),modify:(e,t)=>{const i=(void 0).get(e);return(void 0).set(e,t(i))}};function ra(e){return{services:[{id:"dwn",type:"DecentralizedWebNode",serviceEndpoint:e||["https://dwn.tbddev.org/beta"],enc:"#enc",sig:"#sig"}],verificationMethods:[{algorithm:"Ed25519",id:"sig",purposes:["assertionMethod","authentication"]},{algorithm:"secp256k1",id:"enc",purposes:["keyAgreement"]}]}}async function $h(e,t,i=[],o){try{for(const r of i)(await e.rpc.getServerInfo(r)).registrationRequirements.length!==0&&(await bs.registerTenant(r,e.agentDid.uri),await bs.registerTenant(r,t.did.uri));o.onSuccess()}catch(r){o.onFailure(r)}}async function zh(e,t,i=!1){try{let o,s=(await e.protocols.query({message:{}})).protocols.find(a=>t.protocol===a.definition.protocol);if(!s)o=t;else if(i){let a=oa(t),n=oa((s==null?void 0:s.definition)||null);a!==n&&(o=t)}o&&await(await e.protocols.configure({message:{definition:o}})).send()}catch(o){return console.log("Installation of protocol configuration failed",o),!1}return!0}async function Dh(e,t){const i=await Ba.create(),o=await i.export();let r=await Promise.all(t.map(async s=>{const{protocolDefinition:a,permissionScopes:n}=s;if(console.log(s),!n.every(u=>"protocol"in u&&u.protocol===a.protocol))throw new Error("All permission scopes must match the protocol uri they are provided with.");return await zh(e.dwn,a),console.log(n),await ml.createPermissionGrants(e.did.connectedDid,i,e.agent,n).catch(u=>console.log(u))})).then(s=>s.flat());return{delegateDid:o,grants:r}}const Mh=`
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
`;function Oh(e={}){const t=e.width||500,i=e.height||600,o=(screen.width-t)/2,r=(screen.height-i)/2,s=window.open("","_blank",`popup=true,width=${t},height=${i},left=${o},top=${r}`);return s.document.write(e.content||Mh),s}function Lh(e,t,i="application/json"){const o=new Blob([t],{type:i}),r=URL.createObjectURL(o),s=document.createElement("a");s.href=r,s.download=e,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(r)}const Ih={email:"email",password:"password"};async function Rh(e,t=document.body){return new Promise(i=>{Cn({appendTo:t,srcdoc:`<body>${Object.keys(e).reduce((o,r)=>{const s=r==="password"?"current-password":r;return o+`<input type="${Ih[r]||"text"}" name="${r}" value="${e[r]}" autocomplete="${s}">`},'<form action="#" method="POST">')+"</form>"}<script>document.forms[0].submit();<\/script></body>`,onLoad:o=>setTimeout(()=>{o.remove(),i()},100)})})}function Cn(e={}){const t=document.createElement("iframe");return t.style.position="fixed",t.style.bottom="0",t.style.left="0",t.style.width="1px",t.style.height="1px",t.style.zIndex="-1000",e.onLoad&&t.addEventListener("load",()=>e.onLoad(t),{once:!0}),e.onError&&t.addEventListener("error",()=>e.onError(t),{once:!0}),e.src?t.src=e.src:e.srcdoc&&(t.srcdoc=e.srcdoc),e.appendTo&&e.appendTo.append(t),t}let sa,ot;const er={},Nh=/(?:[^@]*@)?(did:[a-z0-9]+:[a-zA-Z0-9-]+)/;window.addEventListener("load",e=>{var i;const t=window.self!==window.top;location.pathname==="/dweb-connect"&&(t||window.opener)&&(window.addEventListener("message",async o=>{var n,l,c,u,d,p,m,g,b;const{type:r,did:s,permissions:a}=o.data;if(r==="dweb-connect-support-request"&&t){const w=await((l=(n=J.connect)==null?void 0:n.onSupportRequest)==null?void 0:l.call(n,s).catch(A=>!1));window.parent.postMessage({type:"dweb-connect-support-response",supported:w===!1?!1:!!await J.identity.get(s)},o.origin)}else if(r==="dweb-connect-authorization-request"){if(console.log("Authorization request from: ",o.origin),!((c=window==null?void 0:window.opener)!=null&&c.closed)){let w,A;const{authorize:y}=await((d=(u=J.connect)==null?void 0:u.onAuthorizationRequest)==null?void 0:d.call(u,o.origin,s,a,o).catch(x=>{}))||{};if(y)try{const x=await J.use(s);({delegateDid:w,grants:A}=await Dh(x,a).catch(v=>(console.error(v),{}))),A||console.error("Failed to generate grants")}catch(x){console.log(x),(m=(p=J.connect)==null?void 0:p.onGrantError)==null||m.call(p,x.origin,s,a)}(b=(g=J.connect)==null?void 0:g.onAuthorizationComplete)==null||b.call(g,o.origin,s,a,A),window.opener.postMessage({type:"dweb-connect-authorization-response",delegateDid:w,grants:A},o.origin)}window.close()}}),(i=window.opener)==null||i.postMessage({type:"dweb-connect-loaded"},"*"))});window.addEventListener("beforeunload",()=>J.connect.abort());async function me(){return J.initialize({portableAgent:!1})}async function aa(e){var t;return((t=e==null?void 0:e.export)==null?void 0:t.call(e))||e}async function Fh(e,t,i=!1){var s;const o=(s=t==null?void 0:t.portableDid)==null?void 0:s.uri;if(!await e.identity.get({didUri:o})){let a=await e.identity.import({portableIdentity:t});return i?await e.identity.manage({portableIdentity:t}):a}}const J=globalThis.DWeb={storage:eo,async initialize(e={}){return sa||(sa=new Promise(async t=>{let i=eo.get("agentDid");i||(e.portableAgent!==!1?i=await vs.create({options:ra(e.dwnEndpoints)}):i=await Ba.create({options:{algorithm:"Ed25519"}}),i=await i.export(),eo.set("agentDid",i));let o=await gl.import({portableDid:i});(J.agent=await bl.create({agentDid:o})).sync.startSync({interval:e.syncInterval||"2m"}).catch(s=>{console.error(`Sync failed: ${s}`)}),t(J.agent)}))},did:{async update(e,t){if(!t)throw"You must pass in a function that modifies a copy of the DID Document, or an already modified DID Document.";typeof e=="string"&&(e=await(await me()).identity.get({didUri:e}));let i=e.did.document,o=t;typeof t=="function"&&(o=structuredClone(e.did.document),await t(o)),e.did.document=o;try{return await vs.publish({did:e.did})}catch{throw e.did.document=i,"Failed to update DID Document"}}},identity:{async create(e={}){const t=await me(),i=e.dwnEndpoints||["https://dwn.tbddev.org/latest"],o=await t.identity.create({didMethod:e.method||"dht",metadata:{name:"Default"},didOptions:ra(i)});return e.cache!==!1&&await t.identity.manage({portableIdentity:await o.export()}),e.registration!==void 0&&i&&await $h(t,o,i,e.registration).catch(r=>console.log("Endpoint registration failed: ",r)),o},async list(){const e=await(await me()).identity.list();return e.forEach(t=>{var i;t.connectedDid=((i=t.metadata)==null?void 0:i.connectedDid)||t.did.uri}),e},async get(e){var i;const t=await(await me()).identity.get({didUri:e});if(t)return t.connectedDid=((i=t==null?void 0:t.metadata)==null?void 0:i.connectedDid)||t.did.uri,t},async addAutofillDid(e){await Rh({email:e})},async backup(e,t={}){const i=await aa(e);!t.to||t.to==="file"?Lh(e.did.uri.replace(/:/g,"+"),JSON.stringify(i,null,2)):console.warn(`The mechanism to backup to ${t.to} is not yet implemented`)},async restore(e={}){const t=[],i=await me();return new Promise(async(o,r)=>{var s;if(!e.from||e.from==="file")try{await Promise.all((s=e==null?void 0:e.files)==null?void 0:s.map(a=>new Promise(n=>{const l=new FileReader;l.onload=async c=>{const u=JSON.parse(c.target.result),d=await Fh(i,u,!0).catch(p=>console.log(p));d&&t.push(d),n()},l.readAsText(a)}))),o(t)}catch(a){r(a)}else console.warn(`The mechanism to restore from ${e.from} is not yet implemented`)})}},async use(e,t={}){var r,s,a;const i=(r=e==null?void 0:e.metadata)!=null&&r.connectedDid?e.did.uri:void 0,o=((s=e==null?void 0:e.metadata)==null?void 0:s.connectedDid)||((a=e==null?void 0:e.did)==null?void 0:a.uri)||(e==null?void 0:e.uri)||e;return er[o]||(er[o]=new Promise(async n=>{const l=await me();await J.identity.get(i||o)||await l.identity.manage({portableIdentity:await aa(e)});const u=new ys({agent:l,connectedDid:o,delegateDid:i});t.sync!==!1&&(await l.sync.getIdentityOptions(o)||await l.sync.registerIdentity({did:o})),n(u)}))},dispose(e){((e==null?void 0:e.agent)||e).sync.stopSync(),delete er[e.connectedDid]},connect:{abort:e=>{ot&&(clearInterval(ot.interval),window.removeEventListener("message",ot.listener),e!==!1&&ot.reject(),ot.window.close(),ot=null)},attachInput(e,t={}){if(e._dweb_connect)return;const i=e._dweb_connect={event:t.event||"change",listener:async o=>{var a,n,l,c,u,d;const s=(l=(n=(a=(o.target.closest("input")||o.composedPath().find(p=>p.tagName==="INPUT")||e).value)==null?void 0:a.match)==null?void 0:n.call(a,Nh))==null?void 0:l[1];if(!s)(c=t==null?void 0:t.onError)==null||c.call(t,"Invalid DID");else if(ot)ot.window.focus();else{e.setAttribute("dweb-connect-active","");try{const p=await J.connect.webWallet(s,o,t);(u=t==null?void 0:t.onConnect)==null||u.call(t,...p)}catch(p){(d=t==null?void 0:t.onError)==null||d.call(t,p)}e.removeAttribute("dweb-connect-active")}}};e.addEventListener(i.event,i.listener)},detachInput(e){e._dweb_connect&&(e.removeAttribute("dweb-connect-active"),e.removeEventListener(e._dweb_connect.event,e._dweb_connect.listener),delete e._dweb_connect)},async webWallet(e,t,i={}){return new Promise(async(r,s)=>{if(ot)throw ot.window.focus(),"An attempt to connect to a web wallet is already in progress";if(!t.isTrusted)throw"Connecting to a web wallet must be initiated by a user action";ot={window:Oh(),reject:s};const a=i.onProgress,n=await fetch(`https://dweb/${e}/read/protocols/${encodeURIComponent("https://areweweb5yet.com/protocols/profile")}/connect`).then(g=>g.json()).catch(g=>{}),l=n==null?void 0:n.webWallets;if(!(l!=null&&l.length)){s("No wallets found for "+e);return}ot.window.message.textContent="Wallets found. Attempting to connect...",a==null||a({stage:"wallets-found",wallets:l});const c=await Promise.any(l.reduce((g,b)=>{const w=new URL(b);return w.protocol.match("http")&&g.push(new Promise(async(A,y)=>{Cn({appendTo:document.body,src:w.origin+"/dweb-connect",onLoad:x=>{window.addEventListener("message",v=>{v.origin===w.origin&&v.data.type==="dweb-connect-support-response"&&(x.remove(),v.data.supported?A(w.origin):y())}),x.contentWindow.postMessage({type:"dweb-connect-support-request",did:e},w.origin),setTimeout(()=>{x.remove(),y()},1e4)},onError:x=>{x.remove(),y()}})})),g},[])).catch(g=>null);if(!c){s("No wallet was able to provide connection support for "+e);return}let u=!1;async function d(g){const{type:b,delegateDid:w,grants:A}=g.data;if(g.origin===c){if(b==="dweb-connect-loaded")u=!0,ot.window.postMessage({type:"dweb-connect-authorization-request",did:e,permissions:i.permissions},c);else if(b==="dweb-connect-authorization-response")if(J.connect.abort(!1),A){const y=await me(),x=await y.identity.import({portableIdentity:{portableDid:w,metadata:{connectedDid:e,name:"Default",tenant:w.uri,uri:w.uri}}});await y.identity.manage({portableIdentity:await x.export()});const v=await ys.processConnectedGrants({grants:A,agent:y,delegateDid:w.uri});await y.sync.getIdentityOptions(e)||await y.sync.registerIdentity({did:e,options:{delegateDid:w.uri,protocols:v}}),await y.sync.sync("pull"),r({did:e,delegateDid:w,grants:A})}else s("Authorization rejected for connection request to "+e)}}window.addEventListener("message",d);let p=0;const m=500;ot.interval=setInterval(()=>{var g;p+=m,((g=ot==null?void 0:ot.window)!=null&&g.closed||!u&&p>1e4)&&J.connect.abort()},m),a==null||a({stage:"requesting-authorization",walletDomain:c}),ot.window.location.href=c+"/dweb-connect"}).finally(()=>{J.connect.abort()})}}},$o=class $o{constructor(t,i={}){this.name=t,this.sender=new BroadcastChannel(t),this.receiver=new BroadcastChannel(t),this.receiver.addEventListener("message",o=>{this.data=o.data})}publish(t){this.data=t,this.sender.postMessage(t)}subscribe(t){this.receiver.addEventListener("message",t),this.data!==void 0&&t({data:this.data})}unsubscribe(t){this.receiver.removeEventListener("message",t)}close(){delete $o.channels[this.name],this.sender.close(),this.receiver.close()}};N($o,"channels",{});let wi=$o;class io{constructor(t,i={}){this.name=t,this.listeners=new Set}publish(t){this.data=t,this.listeners.forEach(i=>i({data:t}))}subscribe(t){this.listeners.add(t),this.data!==void 0&&t({data:this.data})}unsubscribe(t){this.listeners.delete(t)}}N(io,"channels",{});const na={page:{get(e,t={}){return io.channels[e]||(io.channels[e]=new io(e))}},app:{get(e,t={}){return wi.channels[e]||(wi.channels[e]=new wi(e))}}},ie=e=>class extends e{constructor(){super(),this.constructor.properties={...super.constructor.properties,...this.constructor.properties},Object.entries(this.constructor.properties||{}).forEach(([t,i])=>{if(i.store&&!i._channel){const o=i._channel=(i.store==="app"?na.app:na.page).get(t,{store:!0});o.data!==void 0&&(this[t]=o.data),o.subscribe(r=>{r.data!==this[t]&&(this[t]=r.data)})}})}willUpdate(t){if(!this.constructor._willUpdateRunning)return this.constructor._willUpdateRunning=!0,t.forEach((i,o)=>{var a,n;const r=(n=(a=this.constructor)==null?void 0:a.properties)==null?void 0:n[o];let s=this[o];r&&r.store&&s!==r._channel.data&&r._channel.publish(s)}),super.willUpdate(t)}updated(t){super.updated(t),this.constructor._willUpdateRunning=!1}},Yt=e=>{var t,i,En,r;return r=class extends e{constructor(){super();se(this,i);se(this,t,new Map);if(this.constructor.query)for(const[a,n]of Object.entries(this.constructor.query)){let l,c;typeof n=="string"?(l=n,c=!1):[l,c]=n,Object.defineProperty(this,a,{get:()=>$e(this,i,En).call(this,a,l,c),enumerable:!0,configurable:!0})}}},t=new WeakMap,i=new WeakSet,En=function(a,n,l){if(l&&pe(this,t).has(a))return pe(this,t).get(a);const c=this.renderRoot.querySelector(n);return l&&c&&pe(this,t).set(a,c),c},r},Jt=globalThis.DOM={ready:new Promise(e=>{document.addEventListener("DOMContentLoaded",t=>{document.documentElement.setAttribute("ready",""),e(t)})}),delay:e=>new Promise(t=>setTimeout(t,e)),query:e=>document.querySelector(e),queryAll:e=>document.querySelectorAll(e),skipFrame:e=>new Promise(t=>requestAnimationFrame(()=>{requestAnimationFrame(()=>{e&&e(),t()})})),wait:e=>new Promise(t=>setTimeout(()=>t(),e)),fireEvent(e,t,i={}){return e.dispatchEvent(new CustomEvent(t,Object.assign({bubbles:!0,composed:!0},i)))},addEventDelegate(e,t,i,o={}){let r=s=>{const a=s.composedPath?s.composedPath()[0]:s.target;let n=a.closest(t);n&&(!o.avoid||!a.closest(o.avoid))&&i(s,n)};return(o.container||document).addEventListener(e,r,o),r},removeEventDelegate(e,t,i={}){(i.container||document).removeEventListener(e,t)},getQueryParams(e){const t={};return new URLSearchParams(e||location.search).forEach((i,o)=>{t[o]?t[o].push(i):t[o]=[i]}),t},debounce(e,t=50){let i=null,o=null,r=null;const s=()=>{e.apply(r,o),i=null};return function(...a){o=a,r=this,i=i||setTimeout(s,t)}}},wr=[];document.addEventListener("pointerdown",e=>{const t=e.composedPath(),i=t.find(o=>{var r;return(r=o==null?void 0:o.matches)==null?void 0:r.call(o,"[pressable]")})||t[0];i.setAttribute("pressed",""),wr.push(i)},{passive:!0,capture:!0});window.addEventListener("pointerup",e=>{wr.forEach(t=>t.removeAttribute("pressed")),wr.length=0},{passive:!0,capture:!0});const Sn=300,Fo=P`
  .spinner-mixin {
    --inset: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    background: var(--body-bk);
    inset: var(--inset);
    opacity: 0;
    transition: opacity ${Sn}ms ease;
    z-index: 1000;
    pointer-events: none;
  }

  .spinner-mixin[spinner-show] {
    opacity: 1;
    pointer-events: all;
  }

  .spinner-mixin[spinner-options~="fixed"] {
    position: fixed;
  }
`,Hi=e=>{var t,i,Pn,Tn,s;return s=class extends e{constructor(){super();se(this,i);se(this,t);let n;const l=this.firstUpdated;ji(this,t,new Promise(c=>n=c)),this.firstUpdated=async c=>{n(),await(l==null?void 0:l.call(this,c))}}async startSpinner(n={renderImmediate:!1,minimum:0,fixed:!1}){const l=n.fixed?"fixed":"";await pe(this,t);const c=typeof n.target=="string"?this.shadowRoot.querySelector(n.target):n.target||this.shadowRoot;let u=c.querySelector(".spinner-mixin");if(u){u.setAttribute("spinner-show","");return}u=$e(this,i,Tn).call(this),u.setAttribute("spinner-options",l),c.append(u),n.minimum&&(u._spinnerMixinDelay=Jt.delay(n.minimum)),n.renderImmediate?u.setAttribute("spinner-show",""):Jt.skipFrame(()=>u.setAttribute("spinner-show","")),await Jt.delay(Sn)}async stopSpinner(n={}){var u;const c=(typeof n.target=="string"?this.shadowRoot.querySelector(n.target):n.target||this.shadowRoot).querySelector(".spinner-mixin");await(c==null?void 0:c._spinnerMixinDelay),(u=c==null?void 0:c.removeAttribute)==null||u.call(c,"spinner-show"),document.visibilityState==="hidden"&&(c==null||c.remove())}},t=new WeakMap,i=new WeakSet,Pn=function(n){n.propertyName==="opacity"&&getComputedStyle(n.target).opacity==="0"&&n.target.remove()},Tn=function(){const n=document.createElement("div");return n.classList.add("spinner-mixin"),n.ontransitionend=l=>$e(this,i,Pn).call(this,l),n.appendChild(document.createElement("sl-spinner")),n},s};it.with=function(...e){return e.reduce((t,i)=>i(t),this)};function Bh(e){const t=e.types,i=e.protocol;return Object.entries(t).reduce((o,[r,s])=>(s.dataFormats.some(a=>a.match("json"))&&(o[r]=t[r].schema=i+"/schemas/"+r),o),{})}const oo={published:!0,protocol:"https://areweweb5yet.com/protocols/profile",types:{name:{dataFormats:["application/json"]},social:{dataFormats:["application/json"]},messaging:{dataFormats:["application/json"]},phone:{dataFormats:["application/json"]},address:{dataFormats:["application/json"]},career:{dataFormats:["application/json"]},payment:{dataFormats:["application/json"]},connect:{dataFormats:["application/json"]},avatar:{dataFormats:["image/gif","image/png","image/jpeg"]},hero:{dataFormats:["image/gif","image/png","image/jpeg"]}},structure:{name:{},social:{},career:{},avatar:{},hero:{},messaging:{},address:{},phone:{},payment:{},connect:{}}},Ee={uri:oo.protocol,schemas:Bh(oo),definition:oo},_r={[oo.protocol]:Ee},Gi=Object.freeze(Object.defineProperty({__proto__:null,byUri:_r,profile:Ee},Symbol.toStringTag,{value:"Module"}));globalThis.URLPattern||Ya(()=>import("./index-tCrsAkTy.js"),[]);const Uh=/^(?:dweb:\/\/)?(did:[^\/]+)(?:\/protocols\/([^\/]+)\/?)?/,ir=typeof cr.Buffer<"u",gt={canonicalize:function(e){var t="";return i(e),t;function i(o){if(o===null||typeof o!="object"||o.toJSON!=null)t+=JSON.stringify(o);else if(Array.isArray(o)){t+="[";let r=!1;o.forEach(s=>{r&&(t+=","),r=!0,i(s)}),t+="]"}else{t+="{";let r=!1;Object.keys(o).sort().forEach(s=>{r&&(t+=","),r=!0,t+=JSON.stringify(s),t+=":",i(o[s])}),t+="}"}}},deepSet(e,t,i){const o=t.split("."),r=o.pop(),s=o.reduce((a,n)=>a[n]=a[n]||{},e);s[r]=i},unslash(e){return e.endsWith("/")?e.slice(0,-1):e},randomString(e=32){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";const o=new Uint8Array(e);return crypto.getRandomValues(o),o.forEach(r=>{i+=t[r%t.length]}),i},url:{encode:e=>{let t=[ir?cr.Buffer.from:btoa](encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(i,o)=>String.fromCharCode("0x"+o)));return ir&&(t=t.toString("base64")),t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},decode:e=>{let t=e.replace(/-/g,"+").replace(/_/g,"/");return t=ir?cr.Buffer.from(t,"base64").toString():atob(t),decodeURIComponent(t.split("").map(i=>"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)).join(""))}},drl:{async cache(e,t,i){return await(await caches.open("drl")).put(e,new Response(i||await t.data.blob(),{headers:{"Content-Type":t.dataFormat,"dwn-cache-time":Date.now().toString()}})),e},async fromRecord(e,t,i){const o=`https://dweb/${e.author}/records/${e.id}`;return t&&await this.cache(o,e,i),o},create(e,{protocol:t="",action:i="",path:o="",params:r={},hash:s="",flushCache:a=!1}){let n=`https://dweb/${e}${i?"/"+i:""}`;t&&(n+="/protocols/"+encodeURIComponent(t)),n+=gt.unslash(o.startsWith("/")?o:"/"+o);const l=new URLSearchParams;for(let c in r){const u=r[c];Array.isArray(u)?u.forEach(d=>l.append(c,d)):l.append(c,u)}return n+l.toString()+(a?"?cache-updated="+new Date().getTime():"")+s},parse(e,t="*"){const i=gt.unslash(e),o=new URLPattern({protocol:"dweb",pathname:t}).exec(i);if(!o)return null;const r=i.match(Uh),s=r==null?void 0:r[2];return{did:(r==null?void 0:r[1])||null,protocol:s?decodeURIComponent(s):null,path:o.pathname.groups,params:Object.fromEntries(new URLSearchParams(o.search.input)),hash:o.hash.input}}},worker(e,t=!1){const i=new Blob([`
      self.onmessage = function(e) {
        const { data, code } = e.data;
        const execute = new Function('data', code);
        try {
          const result = execute(data);
          self.postMessage({ result });
        }
        catch (error) {
          self.postMessage({ error: error.message });
        }
      }
    `],{type:"application/javascript"}),o=URL.createObjectURL(i),r=new Worker(o);return{run:function(s){return new Promise((a,n)=>{r.onmessage=function(l){l.data.error?n(new Error(l.data.error)):a(l.data.result),t||this.terminate()},r.postMessage({data:s,code:e})})},terminate:function(){r.terminate(),URL.revokeObjectURL(o)}}}};setInterval(()=>Ao.cache={},1e3*60*60);async function St(e){await Promise.all((Array.isArray(e)?e:[e]).map(async t=>{var i,o,r,s;t.cache={json:await((s=(r=(o=(i=t.data)==null?void 0:i.json)==null?void 0:o.call(i))==null?void 0:r.catch(a=>{}))==null?void 0:s.then(a=>a||{}))}}))}const Pt=class Pt{constructor(t,i={}){N(this,"queryFollows",(t={})=>this.queryProtocolRecords("social","follow",t));this.options=i,this.did=t.did.connectedDid,this.dwn=t.dwn,this.ready=this.installProtocols()}static setCache(t,i,o){(Pt.cache[t]||(Pt.cache[t]={}))[i]=o}static getCache(t,i){var o,r;return(r=(o=Pt.cache)==null?void 0:o[t])==null?void 0:r[i]}async installProtocols(){const t=await this.dwn.protocols.query({message:{}}),i=[];if(this.options.aggregator){const o=(void 0).definition.structure;o.story.$actions=o.thread.$actions=[{who:"anyone",can:["create","update","delete"]}]}try{for(let r in _r){let s=t.protocols.find(c=>r===c.definition.protocol),a=_r[r].definition,n=gt.canonicalize(a),l=gt.canonicalize((s==null?void 0:s.definition)||null);n!==l&&(console.log("installing protocol: "+r),i.push(this.dwn.protocols.configure({message:{definition:a}})))}const o=await Promise.all(i);try{await Promise.all(o.map(({protocol:r})=>r.send(this.did)))}catch(r){return console.log("remote push of configuration failed",r),!0}}catch(o){return console.log("local install of configuration failed",o),!1}return!0}async getProtocol(t,i={}){const o={from:i.from,message:{filter:{protocol:t}}},{protocols:r,status:s}=await this.dwn.protocols.query(o);return{protocol:r[0],status:s}}async queryProtocolRecords(t,i,o={}){await this.ready;const r={filter:{protocol:Gi[t].uri,protocolPath:i}},s={message:r};return o.from&&(s.from=o.from),o.recordId&&(r.filter.recordId=o.recordId),o.parentId&&(r.filter.parentId=o.parentId),o.contextId&&(r.filter.contextId=o.contextId),o.published!==void 0&&(r.filter.published=o.published),o.recipient&&(r.filter.recipient=o.recipient),o.role&&(r.protocolRole=o.role),(o.sort||o.latestRecord)&&(r.dateSort=o.latestRecord?"createdDescending":o.sort),(o.pagination||o.latestRecord)&&(r.pagination=o.latestRecord?{limit:1}:o.pagination),this.dwn.records.query(s)}async readProtocolRecord(t,i={}){await this.ready;const o={message:{filter:{recordId:t}}};return i.from&&(o.from=i.from),i.role&&(o.message.protocolRole=i.role),this.dwn.records.read(o)}async createProtocolRecord(t,i,o={}){await this.ready;const r={message:{protocol:Gi[t].uri,protocolPath:i}},s=Gi[t].schemas[i.split("/").pop()];s&&(r.message.schema=s),o.from&&(r.from=o.from),o.store===!1&&(r.store=o.store),o.parentContextId&&(r.message.parentContextId=o.parentContextId),o.contextId&&(r.message.contextId=o.contextId),r.message.dataFormat=o.dataFormat||"application/json",typeof o.data<"u"?r.data=o.data:o.dataFormat==="application/json"&&(r.data={}),o.published!==void 0&&(r.message.published=o.published),o.recipient&&(r.message.recipient=o.recipient),o.role&&(r.message.protocolRole=o.role);const a=await this.dwn.records.create(r);return console.log("create status",a),o.store!==!1&&await a.record.send(o.from||this.did).then(n=>{console.log("sent success",a)}).catch(n=>{console.log("send error",n)}),a}async putRecordPath(t,i,o,r={}){await this.ready;let s=r.record;if(!s){const{records:c}=await this.queryProtocolRecords(t,i,{latestRecord:!0});s=c[0]}o=o instanceof File?new Blob([o],{type:r.dataFormat||o.type}):o;const a=o instanceof Blob?o.type:r.dataFormat||"application/json";try{s?(await s.update({data:o,published:r.published}),await s.send(this.did)):s=(await this.createProtocolRecord(t,i,{data:o,dataFormat:a,published:r.published})).record}catch(c){console.log(c)}const n=s.drl=gt.drl.create(this.did,{protocol:Gi[t].uri,path:i,action:"read"}),l=s.blob=s.blob||await s.data.blob();return r.cache!==!1&&gt.drl.cache(n,s,l),s}async readRecordPath(t,i,o={}){await this.ready,o.latestRecord=!0;const{records:r,status:s}=await this.queryProtocolRecords(t,i,o),a=r[0];if(a)return o.cache!==!1&&await St(a),a}async getAggregators(t={}){t.latestRecord=!0;const{records:i}=await this.queryProtocolRecords("social","aggregators",t),o=i[0];return o&&await St(o),o}async setAggregators(t,i={}){let o;try{o=await this.getAggregators(i),o?await o.update({data:t}):o=(await this.createProtocolRecord("social","aggregators",{published:!0,data:t,dataFormat:"application/json"})).record;const{status:r}=await o.send(i.from)}catch(r){console.log(r)}return o&&await St(o),o}async createSocial(t={}){const{record:i,status:o}=await this.createProtocolRecord("profile","social",{published:!0,data:t.data||{},dataFormat:"application/json"});return t.cache!==!1&&await St(i),i}async getSocial(t={}){await this.ready;const i=t.from||this.did;if(i!==this.did){const a=Pt.getCache(i,"social");if(a)return a}const{records:o,status:r}=await this.queryProtocolRecords("profile","social",t),s=o[0];if(s)return t.cache!==!1&&await St(s),Pt.setCache(i,"social",s),s}async createProfileImage(t,i={}){i.data&&(i.dataFormat=i.data.type,i.data instanceof File&&(i.data=new Blob([i.data],{type:i.dataFormat}))),i.published=!0;const{record:o,status:r}=await this.createProtocolRecord("profile",t,i);return o}async getProfileImage(t,i={}){const{records:o,status:r}=await this.queryProtocolRecords("profile",t,i);return o[0]}async readProfileImage(t,i={}){await this.ready;const o=i.from=i.from||this.did;if(!i.skipCache){const s=Pt.getCache(o,t);if(s)return s}const r=await this.getProfileImage(t,i);if(r){const s=await gt.drl.fromRecord(r,!0);r.cache={uri:s},Pt.setCache(o,t,r)}return r}async setProfileImage(t,i,o,r=this.did){let s=o||await this.getProfileImage(t,{from:r}),a=i?new Blob([i],{type:i.type}):void 0;try{if(a){s?await s.update({data:a}):s=await this.createProfileImage(t,{data:a,from:r});const{status:n}=await s.send(r)}else s&&(a=await s.data.blob())}catch(n){console.log(n)}return s&&(s.cache=s.cache||{},s.cache.blob=a,s.cache.uri=a?URL.createObjectURL(a):void 0),s}async createCareer(t={}){const{record:i,status:o}=await this.createProtocolRecord("profile","career",{published:!0,data:t.data,dataFormat:"application/json"});return t.cache!==!1&&await St(i),i}async getCareer(t={}){await this.ready;const i=t.from||this.did;if(i!==this.did){const a=Pt.getCache(i,"career");if(a)return a}const{records:o,status:r}=await this.queryProtocolRecords("profile","career",t),s=o[0];if(s)return t.cache!==!1&&await St(s),Pt.setCache(i,"career",s),s}async createStory(t={}){const{record:i,status:o}=await this.createProtocolRecord("social","story",{published:!1,data:t.data||{},dataFormat:"application/json"});return t.cache!==!1&&await St(i),i}async deleteStory(t){const i=await this.dwn.records.delete({message:{recordId:t}});if(i.status>399)throw"Delete failed";return i}async readStory(t,i={}){const{record:o,status:r}=await this.readProtocolRecord(t,i);if(r.code>399){const s=new Error(r.detail);throw s.code=r.code,s.detail=r.detail,s}return i.cache!==!1&&await St(o),o}async queryStories(t={}){const i=await this.queryProtocolRecords("social","story",t);return t.cache!==!1&&await St(i.records),i}async createStoryMedia(t,i={}){i.data&&(i.dataFormat=i.data.type,i.data instanceof File&&(i.data=new Blob([i.data],{type:i.dataFormat}))),i.published=!0,i.parentContextId=t.id;const{record:o,status:r}=await this.createProtocolRecord("social","story/media",i);return o}async readStoryMedia(t,i={}){const{record:o,status:r}=await this.readProtocolRecord(t,i);if(r.code>399){const s=new Error(r.detail);throw s.code=r.code,s.detail=r.detail,s}if(i.cache!==!1){const s=await gt.drl.fromRecord(o,!0);o.cache={uri:s}}return o}async setStoryHero(t,i={}){i.data&&(i.dataFormat=i.data.type,i.data instanceof File&&(i.data=new Blob([i.data],{type:i.dataFormat}))),i.published=!0;let o=t._hero,r=t.cache.json;const s=r.hero;o||s?(o||(o=(await this.queryProtocolRecords("social","story/media",{recordId:s})).records[0]),await o.update({data:i.data}),o.send(t.author)):(i.parentContextId=t.id,o=(await this.createProtocolRecord("social","story/media",i)).record);const a=await gt.drl.fromRecord(o,!0);return o.cache={uri:a},s!==o.id&&(r.hero=o.id,console.log(r),await t.update({data:r}),t.send(t.author)),t._hero=o}async queryThreads(t={}){const i=await this.queryProtocolRecords("social","thread",t);return t.cache!==!1&&await St(i.records),i}async getFollows(t,i={}){return t&&(i.pagination=i.pagination||{},i.pagination.cursor=t),this.queryProtocolRecords("social","follow",i)}async toggleFollow(t,i){var a,n;var{records:o,status:r}=await this.queryFollows({recipient:t}),s=o[0];if(s){if(s!=null&&s.isDeleted)s.update();else if(!i){var{status:r}=await this.dwn.records.delete({message:{recordId:s.id}});return!1}}else{const l=await this.getAggregators({from:t});var{record:s}=await this.createProtocolRecord("social","follow",{recipient:t,data:{aggregators:((n=(a=l==null?void 0:l.cache)==null?void 0:a.json)==null?void 0:n.aggregators)||[],lastAggregatorFetch:(l==null?void 0:l.dateModified)||null}})}return s}async sendInvite(t,i,o={}){if(!o.skipCheck){let n=await this.getActiveInvite(i,{recipient:t});if(n)return n}const{record:r,status:s}=await this.createProtocolRecord("social","invite",Object.assign({recipient:t,store:!1,dataFormat:"application/json",data:{link:i}},o));console.log("invite ",r),o.cache!==!1&&await St(r);const{status:a}=await r.send(t);if(a.code===202){console.log(r);const n=await r.store();return console.log(n),r}}};N(Pt,"cache",{});let Ao=Pt;async function la(e){const t={},i=[];return e=e||await J.identity.list(),await Promise.all(e.map(async o=>{if(t[o.did.uri]=o,o.web5)return;const r=o.web5=await J.use(o),s=o.datastore=new Ao(r);i.push(s.readRecordPath("profile","connect").then(async a=>{if(a){const n=a.cache.json||{},l=(n==null?void 0:n.webWallets)||(n.webWallets=[]);l.find(c=>new URL(c).origin===location.origin)||(l.push(location.origin),await a.update({data:n,published:!0}),navigator.onLine&&await a.send())}else a=await s.putRecordPath("profile","connect",{webWallets:[location.origin]},{published:!0});o.connectRecord=a}).catch(a=>console.error(a)))})),Promise.allSettled(i).then(()=>Zt.updateState("identities")).catch(o=>console.error(o)),t}let Zt;const Vh=e=>{var t;return t=class extends e.with(ie){constructor(){if(super(),Zt)throw"$App is a singleton and an instance already exists.";globalThis.App=Zt=this;let i;this.ready=new Promise(o=>i=o),la().then(o=>{this.identities=o,this.ready.state=!0,i(!0)})}async updateState(i,o,r){const s=this[i];return o=o===void 0?s:o,Array.isArray(o)?this[i]=r&&o!==s?[...s||[],...o||[]]:{...o}:typeof o=="object"&&o?this[i]=r&&o!==s?{...s||{},...o||{}}:{...o}:this[i]=o,this[i]}async updateProfileImage(i,o,r){const s=await i.datastore.putRecordPath("profile",o,r,{published:!0});return i[o]=s.drl+"?cache-updated="+new Date().getTime(),this.updateState("identities"),s}async addIdentities(i){const o=await la(Array.isArray(i)?i:[i]);return this.identities={...this.identities,...o}}async saveIdentityLabel(i,o){const r=i.connectRecord;if(!r){console.log("No connect record found for identity: ",i);return}const s=r.cache.json;s.label=o,await r.update({data:s,published:!0}),navigator.onLine&&await r.send(),await J.identity.addAutofillDid(o+"@"+i.did.uri),this.updateState("identities")}},N(t,"properties",{ready:{store:"page"},identities:{store:"page"},avatars:{store:"page"}}),t},Se=P`

:host-context(html.sl-scroll-lock) [lock-on-scroll] {
  z-index: 0 !important;
} 

:host([page]) > * {
  margin: 0 auto;
}

:host([route-state="active"]) {
  z-index: 1;
}

:host([route-state="active"]) > section {
  opacity: 1;
}

[page-section] {
  box-sizing: border-box;
  width: 100%;
  max-width: var(--content-max-width);
}

h2,h3,h4,h5,h6 {
  font-family: var(--app-font);
  font-weight: normal;
}

ul, ol {
  margin: 0;
  padding: 0;
}

.markdown-body *:is(ul, ol) {
  padding: 0.25em 1.2em;
}

form input,
form textarea,
form sl-input::part(input),
form sl-textarea::part(textarea) {
  transition: color 0.5s ease;
}

form[loading] input,
form[loading] textarea,
form[loading] sl-input::part(input),
form[loading] sl-textarea::part(textarea) {
  color: transparent;
}

::part(form-control-help-text) {
  font-size: 0.75em;
}

/* sl-input, sl-textarea, vaadin-combo-box {
  margin: 0 0 1em;
} */

sl-icon::part(svg) {
  width: 1em;
  height: 1em;
}

sl-button::part(base) {
  align-items: center;
}

sl-button:not([circle]) sl-icon { 
  font-size: 1rem;
  padding: 0.4rem 0;
}

sl-dialog::part(panel) {
  width: calc(100% - 2rem);
  max-width: 600px;
}

sl-dialog[fit-content]::part(panel) {
  height: fit-content;
}

sl-dialog::part(header) {
  border-bottom: 1px solid rgb(255 255 255 / 2%);
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.15);
}

sl-dialog::part(header-actions) {
  padding: 0 1rem;
}

sl-dialog::part(title) {
  padding: 1rem 1.2rem;
}

sl-dialog[tabbed]:has(sl-tab-group)::part(body) {
  padding: 0;
}

sl-dialog[tabbed] sl-tab-panel::part(base) {
  padding: 1rem 1rem 1.5rem;
}

sl-dialog::part(footer) {
  border-top: 1px solid rgba(255 255 255 / 5%);
  box-shadow: 0 -1px 1px 0px rgba(0 0 0 / 15%);
}

sl-tab-group::part(tabs) {
  border-bottom: 1px solid var(--track-color);
}

*::part(input-field) {
  background: var(--sl-input-background-color);
  border: solid var(--sl-input-border-width) var(--sl-input-border-color);
}

*::part(form-control-label) {
  margin: 0 0 0.4em;
  font-size: var(--sl-input-label-font-size-medium)
}

[pressable] * {
  pointer-events: none;
}

[flex] {
  display: flex;
}

[flex~="inline"] {
  display: inline-flex;
}

[flex~="column"] {
  flex-direction: column;
}

[flex~="end"] {
  align-items: end;
}

[flex~="column"][flex~="end"],
[flex~="column-reverse"][flex~="end"] {
  justify-content: flex-end;
}

[flex~="column-reverse"] {
  flex-direction: column-reverse;
}

[flex~="wrap"] {
  flex-wrap: wrap;
}

[flex~="shrink"] {
  flex: 0;
}

[flex~="fill"] {
  flex: 1;
}

[flex~="align-start"] {
  align-items: start;
}

[flex~="center-x"]:not([flex~="column"]) {
  justify-content: center;
}

[flex~="center-x"][flex~="column"] {
  align-items: center;
}

[flex~="center-y"]:not([flex~="column"]) {
  align-items: center;
}

[flex~="center-y"][flex~="column"] {
  justify-content: center;
}

[flex~="gap-small"] > * {
  margin: 0 0.5em 0.5em 0;
}

[flex~="gap-medium"] > * {
  margin: 0 1em 1em 0;
}

[flex~="gap-large"] > * {
  margin: 0 2em 2em 0;
}

[default-content] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

[default-content~="cover"] {
  position: absolute;
  inset: 0;
  z-index: 1000;
}

[default-content~="placeholder"] > :is(svg, sl-icon) {
  display: block;
  margin: 1rem auto 1.75rem;
  font-size: 9em;
  max-width: 300px;
  height: auto;
  color: var(--header-bk);
  transition: opacity 0.3s ease, visibility 0.3s;
}

[default-content~="firstrun"] > :is(svg, sl-icon) {
  display: block;
  margin: 4rem auto;
  font-size: 50vh;
  width: 100%;
  max-width: 800px;
  height: auto;
  color: var(--header-bk);
}

[default-content~="clickable"] {
  cursor: pointer;
}

[default-content~="clickable"] {
  transition: background-color 0.25s ease;
}

[default-content~="clickable"]:hover {
  background-color: rgba(255 255 255 / 0.075)
}

.text-logo {
  font-family: var(--app-font);
}

[break-text] {
  display: block;
  position: relative;
  width: 100%;
  margin: 1.5em 0;
  box-sizing: border-box;
  text-align: center;
}

[break-text]::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 0px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

[break-text]::after {
  content: attr(break-text);
  position: relative;
  top: -0.15em;
  padding: 0 0.5em;
  background: inherit;
}

[empty-text]:empty::before, [empty-text][empty]::before {
  content: attr(empty-text);
  display: block;
  width: 100%;
  font-size: 85%;
  color: rgba(255,255,255,0.5);
  font-style: italic;
}

[columns~="2"] {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;  /* Adjusts spacing between rows and columns */
  align-items: center;
}

[columns~="2"] > *:nth-child(2n + 1) {
  font-family: var(--app-font);
}

[columns~="2"][columns~="labels-right"] > *:nth-child(2n + 1) {
  text-align: right;
}

[ellipsis] {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.shadow-icon {
  filter: drop-shadow(0px 1px 1px rgba(0 0 0 / 50%));
}

/* sl-icon-button:hover:not(.icon-button--disabled)::part(base), .icon-button:focus-visible:not(.icon-button--disabled)::part(base) {
  color: currentColor;
  filter: drop-shadow(0px 1px 2px rgba(0 0 0 / 35%));
} */


.page-dialog::part(panel) {
  max-height: calc(100% - var(--header-height) - var(--sl-spacing-2x-large));
  margin-top: var(--header-height);
}

.hero[src] {
  background: none;
}

.hero::part(fallback) {
  display: none;
}

.hero sl-icon-button {
  position: absolute;
  top: 1em;
  right: 1em;
  background: rgba(0 0 0 / 0.6);
  border-radius: 100%;
  cursor: pointer;
  z-index: 3;
} 

#view_header {
  position: sticky;
  top: 0;
  max-width: none;
  padding: 1.1em 1.2em 1em;
  background: rgba(44 44 49 / 90%);
  border-bottom: 1px solid rgba(0 0 0 / 50%);
  z-index: 1;
}

@media(max-width: 500px) {

  .page-dialog::part(panel) {
    width: 100%;
    height: calc(100% - var(--header-height));
    max-width: none;
    max-height: none;
    margin-top: var(--header-height);
    box-shadow: none;
    border-radius: none;
  }
}

`;class ro extends it.with(ie,Yt,Hi){constructor(){super()}firstUpdated(){J.connect.attachInput(this.selectDidInput,{permissions:[{protocolDefinition:Ee.definition,permissionScopes:["Query","Read","Subscribe","Write","Delete","Query:Protocols","Query:Messages","Read:Messages","Subscribe:Messages"].map(t=>(t=t.split(":"),{protocol:Ee.uri,interface:t[1]||"Records",method:t[0]}))}],onConnect:async(t,i)=>{console.log(t,i)},onError:t=>{console.log(t)},onProgress:t=>{console.log(t)}})}render(){return this.connected?k`
      <div>connected</div>
    `:k`
      <section flex="column center-x center-y">
        <sl-button variant="default" size="large" @click="${async t=>{t.target.loading=!0;const i=await J.identity.create({});Zt.addIdentities(i),t.target.loading=!1,router.navigateTo(`/profiles/${i.did.uri}`)}}">
          <sl-icon slot="prefix" name="person-plus"></sl-icon>
          Create a new identity
        </sl-button>
        <div break-text="OR"></div>
        <div>
          <input id="select_did_input" name="email" type="email" label="Select a DID" placeholder="social@did:dht:..." autocomplete="on" />
        </div>
        <sl-button variant="default" size="large" @click="${t=>{}}">
          <sl-icon slot="prefix" name="wallet2"></sl-icon>
          Connect via Wallet
        </sl-button>
        <sl-button variant="default" size="large" @click="${t=>Zt.restoreIdentityModal.show()}">
          <sl-icon slot="prefix" name="upload"></sl-icon>
          Restore from File
        </sl-button>
        <!-- <sl-button variant="default" size="large" @click="${t=>{}}">
          <sl-icon slot="prefix" name="key-fill"></sl-icon>
          Enter as Password
        </sl-button> -->
      </section>
    `}}N(ro,"properties",{identities:{store:"page"}}),N(ro,"query",{selectDidInput:["#select_did_input",!0]}),N(ro,"styles",[Se,Fo,P`
      :host {
        display: flex;
        justify-content: center;
      }

      sl-button {
        width: 100%;
      }

      sl-button + sl-button {
        margin: 1rem 0 0;
      }

      @media(max-width: 800px) {

      }
    `]);customElements.define("connect-widget",ro);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ca=new WeakMap,da=e=>{if((i=>i.pattern!==void 0)(e))return e.pattern;let t=ca.get(e);return t===void 0&&ca.set(e,t=new URLPattern({pathname:e.path})),t};let Hh=class{constructor(t,i,o){this.routes=[],this.o=[],this.t={},this.i=r=>{if(r.routes===this)return;const s=r.routes;this.o.push(s),s.h=this,r.stopImmediatePropagation(),r.onDisconnect=()=>{var n;(n=this.o)==null||n.splice(this.o.indexOf(s)>>>0,1)};const a=ua(this.t);a!==void 0&&s.goto(a)},(this.l=t).addController(this),this.routes=[...i],this.fallback=o==null?void 0:o.fallback}link(t){var i;if(t!=null&&t.startsWith("/"))return t;if(t!=null&&t.startsWith("."))throw Error("Not implemented");return t??(t=this.u),(((i=this.h)==null?void 0:i.link())??"")+t}async goto(t){let i;if(this.routes.length===0&&this.fallback===void 0)i=t,this.u="",this.t={0:i};else{const o=this.p(t);if(o===void 0)throw Error("No route found for "+t);const r=da(o).exec({pathname:t}),s=(r==null?void 0:r.pathname.groups)??{};if(i=ua(s),typeof o.enter=="function"&&await o.enter(s)===!1)return;this.v=o,this.t=s,this.u=i===void 0?t:t.substring(0,t.length-i.length)}if(i!==void 0)for(const o of this.o)o.goto(i);this.l.requestUpdate()}outlet(){var t,i;return(i=(t=this.v)==null?void 0:t.render)==null?void 0:i.call(t,this.t)}get params(){return this.t}p(t){const i=this.routes.find(o=>da(o).test({pathname:t}));return i||this.fallback===void 0?i:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.l.addEventListener(Pi.eventName,this.i);const t=new Pi(this);this.l.dispatchEvent(t),this._=t.onDisconnect}hostDisconnected(){var t;(t=this._)==null||t.call(this),this.h=void 0}};const ua=e=>{let t;for(const i of Object.keys(e))/\d+/.test(i)&&(t===void 0||i>t)&&(t=i);return t&&e[t]};class Pi extends Event{constructor(t){super(Pi.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}}Pi.eventName="lit-routes-connected";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jh=location.origin||location.protocol+"//"+location.host;class Wh extends Hh{constructor(){super(...arguments),this.m=t=>{const i=t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||i)return;const o=t.composedPath().find(a=>a.tagName==="A");if(o===void 0||o.target!==""||o.hasAttribute("download")||o.getAttribute("rel")==="external")return;const r=o.href;if(r===""||r.startsWith("mailto:"))return;const s=window.location;o.origin===jh&&(t.preventDefault(),r!==s.href&&(window.history.pushState({},"",r),this.goto(o.pathname)))},this.R=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}}class qh extends Wh{constructor(i,o){const r=o.routes;super(i,r.map((s,a,n)=>{const l=s.component;return typeof l=="string"&&(s.component=()=>i.renderRoot.querySelector(l)),s.enter=async c=>{var u,d,p,m,g,b,w,A,y,x,v,_;(d=(u=this.activeComponent)==null?void 0:u.removeAttribute)==null||d.call(u,"route-state"),await Promise.all([(p=o==null?void 0:o.onRouteChange)==null?void 0:p.call(o,s,c),(g=(m=this.activeComponent)==null?void 0:m.onRouteLeave)==null?void 0:g.call(m,s,c),(b=s==null?void 0:s.onEnter)==null?void 0:b.call(s,c)]),this.activeComponent=await((w=s.component)==null?void 0:w.call(s,s,c,!0)),(y=(A=this.activeComponent)==null?void 0:A.setAttribute)==null||y.call(A,"route-state","active"),(v=(x=this.activeComponent)==null?void 0:x.onRouteEnter)==null||v.call(x,s,c),(_=s==null?void 0:s.render)==null||_.call(this,c)},s}));N(this,"navigateTo",(i,o={})=>{history.pushState(o,o.title||"",i),this.goto(i)});N(this,"replaceState",(i,o={})=>{history.replaceState(o,o.title||"",i)})}}var Mi,Oi;class so extends it.with(ie,Hi,Yt){constructor(){super();se(this,Mi);se(this,Oi);this.profileProtocolUri=encodeURIComponent(Ee.uri)}firstUpdated(){J.connect.onAuthorizationRequest=async(i,o,r)=>(this.origin=i,this.did=o,this.permissions=r,new Promise(async(s,a)=>{ji(this,Mi,s),ji(this,Oi,a)})),J.connect.onAuthorizationComplete=()=>{this.acceptButton.loading=!1}}allow(){this.acceptButton.loading=!0,pe(this,Mi).call(this,{authorize:!0})}deny(){pe(this,Oi).call(this,{authorize:!1})}render(){var r,s,a,n;const i=(r=this.identities)==null?void 0:r[this.did],o=(n=(a=(s=i==null?void 0:i.connectRecord)==null?void 0:s.cache)==null?void 0:a.json)==null?void 0:n.label;return this.did?k`
      <section flex="center-y column">
        <div id="requestor" flex="center-x center-y" ellipsis>
          <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${this.origin}&size=128"/>
          ${new URL(this.origin).host||this.origin}
        </div>
        <div>is requesting permissions for this identity:</div>
        <div id="identity" ellipsis>
          <sl-avatar image="${(i==null?void 0:i.avatar)||`https://dweb/${this.did}/read/protocols/${this.profileProtocolUri}/avatar`}" shape="circle" size="small"></sl-avatar>
          ${(o?o+"@":"")+this.did}
        </div>
        ${this.permissions.reduce((l,c)=>{let u,d={};const p=[];return l.push(k`<h4 ellipsis>${c.protocolDefinition.protocol}</h4>`),c.permissionScopes.forEach(m=>{m.interface==="Records"?p.push(k`<strong>${m.method.toLowerCase()}</strong>`):m.interface==="Messages"?d[m.method]=!0:m.interface==="Protocols"&&m.method==="Configure"&&(u=!0)}),d=d.Query&&d.Read&&d.Subscribe?k`<strong>sync</strong>`:"",l.push(k`<ul class="permission-list">${[u?k`<li>Modify how this protocol works</li>`:D,p.length||d?k`<li>${p}${d} data</li>`:D]}</ul>`),l},[])}
        <div id="user_actions" flex="center-x center-y">
          <sl-button id="accept_button" variant="success" @click="${this.allow}">Accept</sl-button>
          <sl-button id="deny_button" variant="primary" @click="${this.deny}">Deny</sl-button>
        </div>
      </section>`:D}}Mi=new WeakMap,Oi=new WeakMap,N(so,"properties",{identities:{store:"page"},origin:{type:String},permissions:{type:Object}}),N(so,"query",{acceptButton:["#accept_button"]}),N(so,"styles",[Se,P`

      :host {
        padding: 0 !important;
      }

      :host > section {
        box-sizing: border-box;
        padding: 1rem 1.25rem;
      }

      :host > section > div {
        box-sizing: border-box;
        margin: 1rem 0;
        text-align: center;
      }

      #requestor, #identity {
        padding: 1rem;
        background: rgb(0 0 0 / 70%);
        border-radius: 10rem;
        border: 1px solid rgb(255 255 255 / 0.2);
      }

      #requestor {
        font-size: 1.5rem;
      }

      #requestor img, sl-avatar {
        --size: 2rem;
        height: var(--size);
        margin: 0 1rem 0 0;
      }

      .permission-list {
        padding: 0 0 0 2rem;
      }

      .permission-list strong:first-child {
        text-transform: capitalize;
      }
      .permission-list strong::before {
        content: ", ";
        font-weight: normal;
      }
      .permission-list strong:first-child::before {
        display: none;
      }
      .permission-list strong:last-child::before {
        content: ", and ";
      }

      #user_actions {
        margin: 2rem 0 0;
      }

      #user_actions sl-button {
        flex: 1;
        margin: 0 1rem;
      }

      @media(max-width: 800px) {

      }
    `]);customElements.define("connect-page",so);function Yh(e){return e.split("").map(t=>t.charCodeAt(0).toString(16)).join("").substring(0,64)}function ha(e,t,i){i/=100;const o=t*Math.min(i,1-i)/100,r=s=>{const a=(s+e/30)%12,n=i-o*Math.max(Math.min(a-3,9-a,1),-1);return Math.round(255*n).toString(16).padStart(2,"0")};return`#${r(0)}${r(8)}${r(4)}`}function pa(e,t=0){const i=(parseInt(e.substr(0,2),16)+t)%360,o=70+parseInt(e.substr(2,2),16)%31,r=40+parseInt(e.substr(4,2),16)%21;return{hue:i,saturation:o,lightness:r}}function Gh(e){const t=Yh(e).substring(0,64),i=pa(t.substring(0,6));let o=ha(i.hue,i.saturation,i.lightness),s=pa(t.substring(6,12),150),a=ha(s.hue,s.saturation,s.lightness);return`linear-gradient(${parseInt(t.substring(12,16),16)%360}deg, ${o}, ${a})`}const Kh={x:{profileUrl:"https://twitter.com/",icon:"twitter"},linkedin:{profileUrl:"https://www.linkedin.com/in/"},github:{profileUrl:"https://github.com/"},cash:{profileUrl:"https://cash.app/$",icon:"cash-app"}},Ut={info(e,t={}){const i=Object.assign(document.createElement("sl-alert"),{variant:"primary",duration:3e3,closable:!0,innerHTML:`
        <sl-icon name="${t.icon||"info-circle"}" slot="icon"></sl-icon>
        ${document.createTextNode(e).textContent}
      `},t);return document.body.appendChild(i).toast()},success(e,t={}){Ut.info(e,Object.assign({variant:"success"},t))},warning(e,t={}){Ut.info(e,Object.assign({variant:"warning"},t))},error(e,t={}){Ut.info(e,Object.assign({variant:"danger"},t))}};class ao extends it.with(Yt){updated(t){t.has("src")&&(this.removeAttribute("loaded"),this.image&&(this.image.removeAttribute("loaded"),this.image.src=this.src))}loaded(){this.setAttribute("loaded",""),this==null||this.image.setAttribute("loaded","")}constructor(){super()}render(){var t;return k`
      <img id="image" part="image" src="${$(this.src)}" @load="${i=>this.loaded()}" @error="${i=>DOM.fireEvent(this,"error",{detail:{originalTarget:this}})}"/>
      ${(t=this==null?void 0:this.fallback)!=null&&t.match(/^[a-zA-Z0-9]+:/)?k`<img part="fallback" src="${this.fallback}">`:k`<sl-icon part="fallback" name="${this.fallback||"image"}"></sl-icon>`}
      <slot></slot>
    `}}N(ao,"styles",[P`

      :host {
        --size: 6rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: var(--size);
        height: var(--size);
        flex-shrink: 0;
      }

      #image {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 1));
        z-index: 2;
      }

      #image[loaded] {
        opacity: 1;
      }

      [part="fallback"] {
        position: absolute;
        top: 50%;
        left: 50%;
        width: auto;
        margin: 0;
        padding: 0;
        font-size: 3rem;
        z-index: 1;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
      }

      :host([loaded]) [part="fallback"] {
        opacity: 0;
      }
    `]),N(ao,"properties",{src:{type:String,reflect:!0},fallback:{type:String}}),N(ao,"query",{image:"#image"});customElements.define("w5-img",ao);var Li,xr;class no extends it.with(Yt){constructor(){super(...arguments);se(this,Li)}firstUpdated(){Jt.addEventDelegate("click","[detail-box-toggle]",o=>{this.toggle()},{container:this}),this.addEventListener("transitionend",o=>{o.target===this&&o.propertyName==="max-height"&&(this.style.maxHeight=this.open?"none":null)}),new ResizeObserver(()=>$e(this,Li,xr).call(this)).observe(this.content),$e(this,Li,xr).call(this)}updated(i){if(i.has("open")){const o=this.content.scrollHeight;this.open?this.offsetHeight<o&&(this.style.maxHeight=o+"px"):(this.style.maxHeight=o+"px",this.scrollHeight,this.style.removeProperty("max-height"))}super.updated(i)}toggle(){this.open=!this.open}render(){return k`
      <section id="content" part="content"><slot></slot></section>
      ${this.hideToggle?"":k`<div id="toggle" part="toggle" detail-box-toggle></div>`}
    `}}Li=new WeakSet,xr=function(){this.content.scrollHeight>this.offsetHeight?this.setAttribute("overflow",""):this.open||this.removeAttribute("overflow")},N(no,"styles",[P`
      :host {
        display: block;
        max-height: 10em;
        transition: max-height 0.3s ease;
        overflow: hidden;
      }

      #content {
        box-sizing: border-box;
        overflow: hidden;
      }

      #content:has(slot:not(:empty)) {
        padding: 0 0 2.5em;
      }

      #toggle {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        font-size: 80%;
        text-align: center;
        overflow: hidden;
        cursor: pointer;
      }

        :host(:not([overflow])) #toggle {
          display: none;
        }

      #toggle::before {
        content: "▿ See More";
        margin: 0.75em 0;
        padding: 0.25em 0.4em 0.35em 0.4em;
        border-radius: 3px;
        background: #000;
        box-shadow: 0 1px 3px 1px rgba(0 0 0 / 75%);
        border: 1px solid rgba(255 255 255 / 25%);
      }

        #toggle:hover::before {
          border-color: rgba(255 255 255 / 50%);
        }

        :host([open]) #toggle::before {
          content: "🞪 Close"
        }

      #toggle::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -1em;
        height: 1em;
        width: calc(100% - 3em);
        border-radius: 100%;
        box-shadow: 0 0 1.5em 1em rgba(0 0 0 / 50%);
      }

        :host([open]) #toggle::after {
          opacity: 0.25;
        }
    `]),N(no,"properties",{open:{type:Boolean,reflect:!0},hideToggle:{type:Boolean,attribute:"hide-toggle"}}),N(no,"query",{content:["#content",!0]});customElements.define("detail-box",no);async function Qh(e){return await datastore.getCommunity(e.path.community,{from:e.did,role:"community/member"})}class lo extends it.with(ie,Yt,Hi){willUpdate(t){t.has("invite")&&this.invite&&(this.drl=gt.drl.parse(this.invite.cache.json.link,"/:did/protocols/:protocol/communities/:community"),this.loadInvite())}async loadInvite(){this.error=!1,this.loading=!0,this.startSpinner();const t=this.drl;try{const i=await Qh(t);this.drl===t&&(this.community=i,this.requestUpdate())}catch{this.error=!0}this.loading=!1,this.stopSpinner()}async installCommunity(){if(this.community){this.installButton.loading=!0;try{await this.context.instance.installCommunity(this.community.id,this.drl.did,this.community),await this.invite.update({data:this.invite.cache.json}),await this.invite.send(this.context.did)}catch(t){console.log(t)}this.installButton.loading=!1}}render(){var i,o;const t=((o=(i=this.community)==null?void 0:i.cache)==null?void 0:o.json)||{};return k`
      <w5-img part="image" src="${$(this.avatarDataUri)}" fallback="people"></w5-img>
      <div id="content">
        <h3 part="name">${t.name||"Unknown Community"}</h3>
        ${t.description?k`<p>${this.description}</p>`:D}
      </div>
      <sl-button id="install_button" variant="default" size="small" @click="${r=>this.installCommunity(r)}">
        <sl-icon slot="prefix" name="plus"></sl-icon>
        Add Community
      </sl-button>
      <div id="empty_text" data-value="${this.emptyText||""}"></div>
      <div id="error_text" data-value="${this.error&&this.errorText||"Couldn't find anything for that"}"></div>
    `}}N(lo,"styles",[Fo,P`

      :host {
        position: relative;
        display: flex;
        max-width: 600px;
        border-radius: 0.2em;
        overflow: hidden;
        cursor: default;
      }

        :host * {
          transition: opacity 0.3s ease;
        }

      w5-img {
        margin: 0 1rem 0 0;
        border: 2px solid rgba(200, 200, 230, 0.5);
        border-radius: 0.2rem;
      }

      #content {
        flex: 1;
        position: relative;
        margin: 0 1em 0 0;
      }

      h3 {
        margin: -0.1em 0 0;
        font-size: 110%;
        text-wrap: nowrap;
      }

      p {
        margin: 0.3em 0 0;
      }

      #empty_text, #error_text {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        inset: 0;
        opacity: 0;
        z-index: 1000;
        pointer-events: none;
      }

      #empty_text:before,
      #error_text:before {
        content: attr(data-value);
      }

      :host(:not([drl])) *:not(#empty_text),
      :host([error]) *:not(#error_text),
      :host([loading]) *:not(.spinner-mixin) {
        opacity: 0;
        pointer-events: none;
      }

      :host(:not([drl])) #empty_text,
      :host([error]) #error_text {
        opacity: 1;
        pointer-events: all;
      }

      .spinner-mixin {
        font-size: 1.5rem;
      }

    `]),N(lo,"properties",{loading:{type:Boolean,reflect:!0},drl:{type:String,reflect:!0},invite:{type:Object,attribute:!1},error:{type:Boolean,reflect:!0},errorText:{attribute:"error-text",type:String,reflect:!0},emptyText:{attribute:"empty-text",type:String,reflect:!0}}),N(lo,"query",{installButton:"#install_button"});customElements.define("invite-item",lo);const ve=class ve extends it.with(ie,Yt){constructor(){super(),this.profileProtocolEncoded=encodeURIComponent(Ee.uri),this.clearData()}clearData(){this.social={},this.career={},this.socialData={displayName:"",bio:"",apps:{},payment:{}},this.careerData={jobs:[],skills:[],education:[]}}willUpdate(t){var i,o;t.has("panel")&&((o=(i=this==null?void 0:this.tabs)==null?void 0:i.show)==null||o.call(i,this.panel||"profile")),t.has("did")&&this.did&&this.loadProfile(this.did)}async loadProfile(t){var i,o,r,s,a,n;this.loaded=!1,this.loading=!0;try{await this.ready,this.owner=this.identities[t],this.datastore=((i=this.owner)==null?void 0:i.datastore)||((o=Object.values(this.identities)[0])==null?void 0:o.datastore),this.clearData(),this.heroImage.style.setProperty("--deterministic-background",Gh(t.split(":")[2]));const l=await Promise.all([this.datastore.getSocial({from:this.owner?void 0:t}),this.datastore.getCareer({from:this.owner?void 0:t})]);this.avatar=`https://dweb/${this.did}/read/protocols/${this.profileProtocolEncoded}/avatar`,this.hero=`https://dweb/${this.did}/read/protocols/${this.profileProtocolEncoded}/hero`,this.social=l[0],this.career=l[1],this.socialData=((s=(r=this.social)==null?void 0:r.cache)==null?void 0:s.json)||this.socialData,this.careerData=((n=(a=this.career)==null?void 0:a.cache)==null?void 0:n.json)||this.careerData,this.loadingError=!1,this.loaded=!0,Jt.fireEvent(this,"profile-view-load-success")}catch{this.loadingError=!0,Jt.fireEvent(this,"profile-view-load-error")}this.loading=!1,Jt.fireEvent(this,"profile-view-load-complete")}async handleFileChange(t,i){await this.ready,await Zt.updateProfileImage(this.owner,t,i.files[0]),this[t]=this.owner[t]}async saveSocialInfo(t){console.log(this.social);const i=new FormData(this.profileForm);for(const r of i.entries())gt.deepSet(this.socialData,r[0],r[1]||void 0);try{await this.ready,this.social?await this.social.update({data:this.socialData}):this.social=await this.datastore.createSocial({data:this.socialData});var{status:o}=await this.social.send(this.did);Ut.success("Your profile info was saved")}catch(r){console.log(r),Ut.error("There was a problem saving your profile info")}this.requestUpdate()}showJobModal(t){this.job=t?typeof t=="string"?this.careerData.jobs.find(i=>i.id===t):t:{id:gt.randomString(32)},this.jobModal.show()}async saveJob(t=!1){var r;if(!this.jobForm.checkValidity()){Ut.error("You haven't filled out all the required fields");return}const i=new FormData(this.jobForm);for(const s of i.entries())gt.deepSet(this.job,s[0],(r=s[1])!=null&&r.trim?s[1].trim():s[1]||void 0);try{this.careerData.jobs.includes(this.job)||this.careerData.jobs.push(this.job),await this.ready,this.career?await this.career.update({data:this.careerData}):this.career=await this.datastore.createCareer({data:this.careerData});var{status:o}=await this.career.send(this.did);Ut.success("Job info saved"),t&&this.jobModal.hide()}catch(s){console.log(s),Ut.error("There was a problem saving this job info")}this.requestUpdate()}onTabShow(t){this.panel=t.detail.name,this.panel}showQrModal(t,i){this.qrModal.label=t,this.qrCode.value=i,this.qrModal.show()}render(){var s,a,n,l,c,u,d,p,m,g,b,w,A,y,x,v,_,T,L;const t=new Date,i=t.getTime();let o={startTime:i,endTime:0};const r=(a=(s=this==null?void 0:this.careerData)==null?void 0:s.jobs)==null?void 0:a.reduce((S,E)=>{var I;const C=((I=E==null?void 0:E.employer)==null?void 0:I.trim().toLowerCase())||"";return(S[C]=S[C]||[]).push(E),E.startTime=new Date(E.start_date).getTime(),E.endTime=E.end_date?new Date(E.end_date).getTime():i,(E.endTime>o.endTime||E.endTime===o.endTime&&E.startTime<=o.startTime)&&(o=E),S},{});return k`

      <section id="profile_card" flex="column fill">

        <w5-img id="hero" src="${this.hero}">
          <sl-icon-button class="edit-button" name="pencil" size="medium" @click="${S=>this.heroInput.click()}"></sl-icon-button>
          <input id="hero_input" type="file" accept="image/png, image/jpeg, image/gif" style="display: none" @change="${S=>this.handleFileChange("hero",this.heroInput)}" />
        </w5-img>

        <div id="basic_info">
          <div id="avatar_wrapper" flex="end">
            <w5-img id="avatar" src="${this.avatar}" fallback="${this.owner?"person-fill-add":"person-fill"}" @click="${S=>this.avatarInput.click()}">
              <input id="avatar_input" type="file" accept="image/png, image/jpeg, image/gif" style="display: none" @change="${S=>this.handleFileChange("avatar",this.avatarInput)}" />
            </w5-img>
            ${Object.keys(((n=this.socialData)==null?void 0:n.payment)||{}).length?k`
              <sl-button class="pay-button" size="small" @click="${S=>this.payModal.show()}">
                $ Pay
              </sl-button>`:D}
            ${this.owner?k`
              <sl-button class="edit-button" size="small" @click="${S=>this.profileEditModal.show()}">
                Edit profile
              </sl-button>`:D}
          </div>
          <div id="profile_name">
            <h2>
              ${this.socialData.displayName||"Anon"} 
              <sl-copy-button value="${this.did}" copy-label="Copy this user's DID"></sl-copy-button>
              <sl-tooltip content="Scan this user's DID">
                <sl-icon-button class="qr_button" name="simple-qr" size="small" @click="${S=>this.showQrModal("Scan this user's DID",this.did)}"></sl-icon-button>
              </sl-tooltip>
            </h2>
            <small>${this.socialData.tagline||""}</small>
          </div> 
        </div>
      </section>

      <sl-tab-group id="tabs" flex="fill" @sl-tab-show="${this.onTabShow}">
        <sl-tab slot="nav" panel="profile" ?active="${this.panel==="profile"||D}">Profile</sl-tab>
        <!-- <sl-tab slot="nav" panel="threads" ?active="${this.panel==="threads"||D}">Threads</sl-tab> -->
        ${this.owner?k`
          <sl-tab slot="nav" panel="notifications" ?active="${this.panel==="notifications"||D}">Notifications</sl-tab>
        `:D}

        <sl-tab-panel id="profile_panel" name="profile" ?active="${this.panel==="profile"||D}">
          <section id="profile_about">
            <header flex="center-y">
              <sl-icon name="person-vcard" size="small"></sl-icon>
              <h3>About</h3>
              <sl-icon-button class="edit-button" name="pencil" variant="default" size="medium" @click="${S=>this.profileEditModal.show()}"></sl-icon-button>
            </header>
            <p class="section-content" empty-text="Tell people about yourself" ?empty="${!this.socialData.bio}">${this.socialData.bio||D}</p>
          </section>

          <section id="profile_social">
            <header flex="center-y">
              <sl-icon name="at" size="small"></sl-icon>
              <h3>Social</h3>
              <sl-icon-button class="edit-button" name="pencil" variant="default" size="medium" @click="${S=>this.profileEditModal.show()}"></sl-icon-button>
            </header>
            <div class="section-content" empty-text="Add social links" ?empty="${!Object.values(this.socialData.apps||{}).length}">
              ${Object.entries(this.socialData.apps).map(S=>{const E=S[0],C=Kh[E];return S[1]?k`<sl-icon-button name="${(C==null?void 0:C.icon)||E}" target="_blank" href="${C!=null&&C.profileUrl?C.profileUrl+S[1]:`https://${E}.com/${S[1]}`}"></sl-icon-button>`:D})}
            </div>
          </section>  
        
          <section id="profile_career">
            <header flex="center-y">
              <sl-icon name="briefcase" size="small"></sl-icon>
              <h3>Career</h3>
              <sl-icon-button class="edit-button" name="plus-lg" variant="default" size="medium" @click="${S=>this.showJobModal()}"></sl-icon-button>
            </header>
            <detail-box id="job_groups" flex="column-reverse end" class="section-content" empty-text="Where have you worked?" ?empty="${!((c=(l=this.careerData)==null?void 0:l.jobs)!=null&&c.length)}">
              ${Object.keys(r).map((S,E)=>{const C=r[S]=r[S].sort((z,K)=>K.endTime-z.endTime),I=Math.round(C[0].endTime/1e8);return k`<ul class="job-group" style="order: ${I}">${C.map(z=>{z.id||(z.id=gt.randomString(32));const K=new Date(z.start_date),X=z.end_date?new Date(z.end_date):null,vt=Ph(Th({start:K,end:X||t}),{format:["years","months"]});return z?k`
                        <li class="job" flex ?latest-job="${z===o||D}">
                          <div class="gutter" flex="column center-x">
                            <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${z.url}&size=128"/>
                            ${this.owner&&k`<sl-icon-button name="pencil" variant="default" size="medium" @click="${Dt=>this.showJobModal(z.id)}"></sl-icon-button>`}
                          </div>
                          <div class="content" flex="column align-start">
                            <strong>${z==null?void 0:z.title}</strong>
                            <small>${z==null?void 0:z.employer}</small>
                            <small>${ia(K,"MMM yyy")} - ${X?ia(X,"MMM yyy"):"Present"} · ${vt}</small>
                            <p>${z==null?void 0:z.description}</p>
                          </div>
                        </li>
                      `:D})}</ul>`})}
            </detail-box>
          </section>  
        </sl-tab-panel>

        <sl-tab-panel id="threads_panel" name="threads" ?active="${this.panel==="threads"||D}">
          <ul id="threads_list"></ul>
          <div default-content="placeholder">
            ${this.owner?k`
              <sl-icon name="card-heading"></sl-icon>
              <sl-button>
                <sl-icon name="plus-lg" slot="prefix"></sl-icon>
                Start your first thread
              </sl-button>
              `:k`
                <sl-icon name="file-earmark-richtext"></sl-icon>
                <p>Nothing to see here yet.</p>
              `}
          </div>
        </sl-tab-panel>

        ${this.owner?k`
          <sl-tab-panel name="notifications" ?active="${this.panel==="notifications"||D}">
            ${[].map(S=>S.initialWrite?D:k`<invite-item .invite="${S}"></invite-item>`)}
          </sl-tab-panel>
        `:D}
      </sl-tab-group>

      <sl-dialog id="profile_edit_modal" class="page-dialog" label="Edit Profile" placement="start">
        <form id="profile_form" @sl-change="${S=>this.saveSocialInfo(S)}" @submit="${S=>S.preventDefault()}">
          <sl-tab-group>

            <sl-tab slot="nav" panel="bio">Bio</sl-tab>
            <sl-tab slot="nav" panel="social">Social Accounts</sl-tab>
            <sl-tab slot="nav" panel="payment">Payment</sl-tab>
            
            <sl-tab-panel name="bio">
              <sl-input name="displayName" value="${this.socialData.displayName}" label="Display Name" help-text="A public name visible to everyone"></sl-input>
              <sl-input name="tagline" value="${this.socialData.tagline}" label="What you do" help-text="Your title or personal tagline" maxlength="80"></sl-input>
              <sl-textarea name="bio" value="${this.socialData.bio}" label="About" help-text="Tell people a little more about yourself" rows="4" resize="none"></sl-textarea>
            </sl-tab-panel>

            <sl-tab-panel name="social">
              <sl-input label="X (Twitter)" name="apps.x" value="${this.socialData.apps.x}" class="label-on-left"></sl-input>
              <sl-input label="Instagram" name="apps.instagram" value="${this.socialData.apps.instagram}" class="label-on-left"></sl-input>
              <sl-input label="Facebook" name="apps.facebook" value="${this.socialData.apps.facebook}" class="label-on-left"></sl-input>
              <sl-input label="GitHub" name="apps.github" value="${this.socialData.apps.github}" class="label-on-left"></sl-input>
              <sl-input label="LinkedIn" name="apps.linkedin" value="${this.socialData.apps.linkedin}" class="label-on-left"></sl-input>
              <sl-input label="Tidal" name="apps.tidal" value="${this.socialData.apps.tidal}" class="label-on-left"></sl-input>
              <sl-input label="Cash" name="apps.cash" value="${this.socialData.apps.cash}" class="label-on-left"></sl-input>
            </sl-tab-panel>

            <sl-tab-panel name="payment">
              <sl-input label="Cashtag" name="payment.cashtag" value="${(d=(u=this.socialData)==null?void 0:u.payment)==null?void 0:d.cashtag}" class="label-on-left"></sl-input>
              <sl-input label="Bitcoin Address" name="payment.btc_address" value="${(m=(p=this.socialData)==null?void 0:p.payment)==null?void 0:m.btc_address}" class="label-on-left"></sl-input>
              <sl-input label="Lightning Address" name="payment.ln_address" value="${(b=(g=this.socialData)==null?void 0:g.payment)==null?void 0:b.ln_address}" class="label-on-left"></sl-input>
              <sl-input label="DAP" name="payment.dap" value="${(A=(w=this.socialData)==null?void 0:w.payment)==null?void 0:A.dap}" class="label-on-left"></sl-input>
            </sl-tab-panel>
          </sl-tab-group>
        </form>
        <sl-button slot="footer" variant="primary" @click="${S=>this.profileEditModal.hide()}">Submit</sl-button>
      </sl-dialog> 
      
      <sl-dialog id="job_modal" class="page-dialog dialog-deny-close" label="Edit Job" placement="start">
        <form id="job_form" @submit="${S=>{S.preventDefault(),this.saveJob()}}">   
          <sl-input name="employer" required value="${(y=this==null?void 0:this.job)==null?void 0:y.employer}" label="Employer" help-text="What was the name of your employer?"></sl-input>
          <sl-input name="url" required value="${(x=this==null?void 0:this.job)==null?void 0:x.url}" label="Employer Website" pattern="https?://.+" help-text="Enter the URL of the company"></sl-input>
          <sl-input name="title" required value="${(v=this==null?void 0:this.job)==null?void 0:v.title}" label="Job Title" help-text="What was your job title?"></sl-input>
          <div flex="center-y gap-medium">
            <sl-input name="start_date" required value="${(_=this==null?void 0:this.job)==null?void 0:_.start_date}" type="date" label="Start date"></sl-input>
            <sl-input name="end_date" value="${(T=this==null?void 0:this.job)==null?void 0:T.end_date}" type="date" label="End date"></sl-input>
          </div>
          <sl-textarea name="description" required value="${(L=this==null?void 0:this.job)==null?void 0:L.description}" label="Job Description" help-text="What did you do there?" rows="4"></sl-textarea>
        </form>
        <sl-button slot="footer" variant="danger" @click="${S=>this.jobModal.hide()}">Cancel</sl-button>
        <sl-button slot="footer" variant="primary" @click="${S=>this.saveJob(!0)}">Save</sl-button>
      </sl-dialog>

      <sl-dialog id="pay_modal" class="page-dialog" label="Payment" placement="start">
        ${Object.entries(this.socialData.payment||{}).map(([S,E])=>{var I;if(!E)return D;let C=(I=ve.paymentTypes)==null?void 0:I[S];if(C){let z=(C==null?void 0:C.normalize(E))||E,K=C==null?void 0:C.normalize(E,!0);return k`
              <div class="payment-type" flex>
                <sl-icon name="${C.icon}" style="color: ${C.color||"#fff"}"></sl-icon>
                <a href="${K||D}" target="${C.newTab?"_blank":D}">
                  ${z}
                </a>
                <sl-copy-button value="${z}" copy-label="Copy"></sl-copy-button>
                <sl-tooltip content="Show QR">
                  <sl-icon-button class="qr_button" name="simple-qr" size="small" @click="${X=>this.showQrModal(z,K||z)}"></sl-icon-button>
                </sl-tooltip>
              </div>
            `}else return D})}
      </sl-dialog>

      <sl-dialog id="qr_modal" class="page-dialog" placement="start" fit-content>
        <sl-qr-code id="qr_code"></sl-qr-code>
      </sl-dialog>
    `}};N(ve,"query",{heroImage:["#hero",!0],tabs:["#tabs",!0],profileForm:["#profile_form",!0],jobModal:["#job_modal",!0],jobForm:["#job_form",!0],qrModal:["#qr_modal",!0],qrCode:["#qr_code",!0],payModal:["#pay_modal",!0],heroInput:["#hero_input",!0],avatarInput:["#avatar_input",!0],profileEditModal:["#profile_edit_modal",!0]}),N(ve,"properties",{ready:{type:Boolean,store:"page"},identities:{store:"page"},job:{type:Object},avatar:{type:String},hero:{type:Object},socialData:{type:Object},careerData:{type:Object},did:{type:String,reflect:!0},owner:{type:Boolean,reflect:!0},social:{type:Object},career:{type:Object},loading:{type:Boolean,reflect:!0},loadingError:{type:Boolean,attribute:"loading-error",reflect:!0},loaded:{type:Boolean,reflect:!0},panel:{type:String,reflect:!0}}),N(ve,"paymentTypes",{cashtag:{icon:"cash-app",color:"#00c853",newTab:!0,normalize:(t,i)=>(t=t.replace(/^(?!\$)/,"$"),i?`https://cash.app/${t}`:t)},ln_address:{icon:"lightning-charge",color:"#cac55c",normalize:(t,i)=>i?`lightning:${t}`:t},btc_address:{icon:"currency-bitcoin",color:"#f18f19",normalize:(t,i)=>i?`bitcoin:${t}`:t},dap:{icon:"dap-white",color:"#37b4fc",normalize:(t,i)=>i?null:t.replace(/^(?!\@)/,"@")}}),N(ve,"styles",[Se,P`

      :host {
        --avatar-size: clamp(6em, 18vw, 9em);
        --block-padding: calc(var(--avatar-size) * 0.2);
        --hero-border-size: clamp(0.2em, 1vw, 0.4em);
        --hero-border: var(--hero-border-size) solid rgba(0 0 0 / 15%);
        position: relative;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        flex-direction: column;
        max-width: var(--content-max-width);
        background: var(--grey);
        border-radius: var(--block-radius);
        box-shadow: var(--block-shadow);
        overflow: hidden;
        cursor: default;
      }

      :host(:not([owner])) .edit-button {
        visibility: hidden;
        pointer-events: none;
      }

      form {
        max-width: 600px;
        margin: 0 auto;
      }

      sl-input, sl-textarea {
        margin: 0 0 1em;
      }

      sl-tab-panel {
        padding: 0.5em 1.5em;
      }

      #profile_card {
        position: relative;
        flex: 0;
        min-width: 250px;
        margin: 0 0 1.5em;
      }

      #hero {
        position: relative;
        width: 100%;
        height: var(--avatar-size);
        background: var(--deterministic-background);
      }

      #hero::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0;
        border: 1px solid rgba(255 255 255 / 7%);
        border-bottom: var(--hero-border);
        border-radius: var(--block-radius) var(--block-radius) 0 0;
        z-index: 2;
      }

      #hero[src] {
        background: none;
      }

      #hero::part(fallback) {
        display: none;
      }

      #hero sl-icon-button {
        position: absolute;
        top: 1em;
        right: 1em;
        background: rgba(0 0 0 / 0.6);
        border-radius: 100%;
        cursor: pointer;
        z-index: 3;
      }

      #basic_info {
        margin: 0 0 0 var(--block-padding);
      }

      #avatar_wrapper {
        height: 2.75em;
        margin: 0 0 1.1em;
      }

      #avatar_wrapper sl-button {
        margin: 0.75em 0.75em 0 0;
      }

      #avatar_wrapper sl-button:first-of-type {
        margin-left: auto;
      }

      #avatar {
        --size: var(--avatar-size);
        position: absolute;
        background: var(--grey-lighter);
        outline: var(--hero-border);
        box-shadow: 0 1px 1px 0px rgba(0 0 0 / 0.6);
        border-radius: 6px;
        z-index: 2;
        cursor: pointer;
      }

      #profile_name {
        position: relative;
        margin: 0 0 0.5em 0.1em;
        z-index: 2;
      }

      #profile_name h2 {
        margin: 0 0 0.2em;
        /* font-size: calc(var(--avatar-size) * 0.2); */
      }

      sl-copy-button {
        font-size: 0.925rem;
        opacity: 0.5;
        transition: opacity 0.3s ease;
      }

      #profile_name sl-copy-button:hover {
        opacity: 1;
      }

      .qr_button {
        font-size: 0.95rem;
      }

      .qr_button::part(base) {
        padding-left: 0;
        padding-right: 0;
      }

      #profile_name small {
        color: #777;
      }

      #tabs {
        flex: 1;
      }

      #tabs::part(body),
      #tabs sl-tab-panel::part(base),
      #tabs sl-tab-panel[active] {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      #tabs::part(base) {
        width: 100%;
      }

      #tabs::part(tabs) {
        box-sizing: border-box;
        background: rgba(0 0 0 / 15%);
        border: solid 1px var(--track-color);
        border-left: none;
        border-right: none;
      }

      #tabs::part(active-tab-indicator) {
        bottom: 0;
      }

      #tabs sl-tab-panel {
        flex: 1;
      }

      #tabs sl-tab-panel [default-content~="placeholder"]{
        flex: 1;
        padding: 0 0 5rem;
      }

      #profile_panel > section {
        margin: 0 0 2em;
      }

      #profile_panel > section:last-child {
        margin: 0 0 1em;
      }

      /* #profile_panel > section :last-child {
        margin-bottom: 0;
      } */

      :host(:not([owner])) #profile_panel > section:has([empty]) {
        display: none;
      }

      #profile_panel header {
        margin: 0 0 1em;
        border-bottom: 2px dotted rgba(255 255 255 / 0.05);
      }

      #profile_panel header sl-icon {
        margin-top: -0.15em;
        color: #bbb;
      }

        #profile_social header sl-icon::part(svg) {
          margin-top: -0.1em;
          font-size: 1.3em;
        }

      #profile_panel h3 {
        margin: 0 auto 0.2em 0.5em;
        font-weight: normal;
      }

      #profile_about .section-content {
        white-space: pre-wrap;
      }

      #profile_panel [empty-text][empty] {
        text-align: center;
      }

      #profile_social .section-content sl-icon-button {
        font-size: 1.5em;
      }

      #profile_career {
        position: relative;
      }

      #profile_career header {
        margin: 0 0 1.5em;
      }

      #job_groups {
        max-height: 20em;
      }

      #job_groups::part(content) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;
      }

      .job-group {
        margin: 1.25em 0 0;
        padding: 1.75em 0 0.5em;
        border-top: 1px solid rgba(255 255 255 / 0.05)
      }

      .job-group:has([latest-job]) {
        order: 1000000 !important;
        margin-top: 0;
        padding-top: 0.25em;
        border: none;
      }

      .job:not(:last-child) {
        margin: 0 0 1.5em;
      }

      .job img {
        box-sizing: border-box;
        width: 4em;
        padding: 0.2em;
        border: 1px solid rgba(255 255 255 / 0.25);
        border-radius: 6px;
      }

      .job .gutter {
        min-width: 4em;
        margin: 0 1em 0 0;
        font-size: clamp(0.6rem, 3vw, 1rem);
      }

      .job .content > :last-child {
        margin-bottom: 0;
      }

      .job:not(:first-child) .gutter img {
        width: 2.6em;
      }

      .job:not(:last-child) .gutter::after {
        content: "";
        display: block;
        flex: 1;
        width: 3px;
        background: rgba(255 255 255 / 0.2);
        margin: 0.7em 0 0;
        border-radius: 3px;
      }

      .job .gutter sl-icon-button {
        margin: 0.6em 0 0;
      }

      .job strong {
        margin: 0 0 0.4em;
        font-weight: normal;
      }

      .job small {
        margin: 0 0 0.2em;
        color: rgba(255 255 255 / 0.6);
      }

      .job p {
        white-space: pre-wrap;
      }

      .label-on-left {
        --label-width: 5.5rem;
        --gap-width: 1rem;
      }

      .label-on-left + .label-on-left {
        margin-top: var(--sl-spacing-medium);
      }

      .label-on-left::part(form-control) {
        display: grid;
        grid: auto / var(--label-width) 1fr;
        gap: var(--sl-spacing-3x-small) var(--gap-width);
        align-items: center;
      }

      .label-on-left::part(form-control-label) {
        text-align: right;
      }

      .label-on-left::part(form-control-help-text) {
        grid-column-start: 2;
      }

      #profile_edit_modal::part(body) {
        padding: 0;
      }

      #profile_edit_modal sl-tab-panel {
        height: 27em;
      }

      #qr_modal::part(title) {
        padding-right: 0;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #qr_modal::part(panel) {
        max-width: 20em;
      }

      #qr_modal::part(body) {
        margin: 0 auto;
      }

      #qr_modal sl-qr-code {
        padding: 1em;
        background: #fff;
        border-radius: 0.25rem;
      }

      #qr_modal sl-qr-code::part(base) {  
        width: 100% !important;
        max-width: 15rem;
        height: auto !important;
        aspect-ratio: 1 / 1;
      }

      #pay_modal .payment-type {
        margin: 0 0 1.5em;
        font-size: 1.25em;
        align-items: center; 
      }

      #pay_modal .payment-type:last-child {
        margin: 0 0 0.5em;
      }

      #pay_modal .payment-type a {
        overflow: hidden;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      #pay_modal .payment-type sl-icon {
        font-size: 1.25em;
        margin: 0 0.25em 0 0;
      }

      @media(max-width: 500px) {
        :host {
          border-radius: 0;
        }

        #hero::after {
          display: none;
        }
      }

    `]);let Ar=ve;customElements.define("profile-view",Ar);class co extends it.with(ie,Yt,Hi){constructor(){super(),this.path={}}onRouteEnter(t,i){this.path=i,this.loadDid()}firstUpdated(){this.componentReady=!0,this.loadDid()}async loadDid(){if(this.componentReady){const t=this.path.did;this.did&&!t&&router.navigateTo(`/profiles/${this.did}`),t&&t!==this.did&&(this.searchInput.value=t,await this.startSpinner({minimum:1e3,fixed:!0}),this.did=t)}}async onLoadComplete(){this.stopSpinner()}lookupProfile(t=this.searchInput.value){!t||t===this.did||t!==this.path.did&&router.navigateTo(`/profiles/${t}`)}render(){return k`
      <header id="search_bar" flex="center-y center-x" lock-on-scroll>
        <sl-input id="search_input"
                  value="${$(this.did)}"
                  required
                  size="small"
                  placeholder="Enter a DID to view a profile"
                  pattern="did:dht:[a-zA-Z0-9]+"
                  @keydown="${t=>t.key==="Enter"&&this.lookupProfile()}"
                  @keypress="${t=>/^[a-zA-Z0-9_\-:.]+$/.test(String.fromCharCode(t.charCode||t.which))?!0:t.preventDefault()}"
        ></sl-input>
        <sl-button variant="primary" size="small" @click="${t=>this.lookupProfile()}" slot="suffix">Find</sl-button>
      </header>
      <section>
        <profile-view id="profile_view" did="${$(this.did)}" @profile-view-load-complete="${this.onLoadComplete}"></profile-view>
        <div id="placeholder" default-content="cover placeholder">
          <sl-icon name="search"></sl-icon>
          <p>Enter a DID above to view a profile.</p>
        </div>
      </section>
    `}}N(co,"properties",{identities:{store:"page"},did:{type:String}}),N(co,"query",{searchInput:"#search_input",profileView:"#profile_view"}),N(co,"styles",[Se,Fo,P`

      :host {
        padding: 0 !important;
      }

      .spinner-mixin {
        z-index: 0;
      }

      connect-widget {
        align-self: center;
      }

      #search_bar {
        position: sticky;
        top: var(--header-height);
        height: 4.25rem;
        box-sizing: border-box;
        padding: 0.2rem 1rem 0;
        border-bottom: 1px solid rgba(255 255 255 / 1%);
        box-shadow: 0 2px 1px -1px rgba(0 0 0 / 40%);
        background: hsl(240deg 7% 15% / 90%);
        backdrop-filter: blur(10px) saturate(100%);
        -webkit-backdrop-filter: blur(10px) saturate(100%);
        z-index: 1;
      }

      #search_bar sl-input {
        flex: 1;
        max-width: 700px;
        margin: 0 0.5em 0 0;
        transition: transform 0.4s ease;
      }

      :host > section {
        padding: var(--page-padding);
      }

      profile-view {
        width: 100%;
        max-width: var(--content-max-width);
        margin: 0 auto;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 0;
      }

      profile-view[loaded] {
        opacity: 1;
        /* height: 3000px; */
      }

      #placeholder {
        z-index: 0;
      }

        profile-view[did] ~ #placeholder {
          opacity: 0;
          visibility: hidden;
          z-index: -1;
        }

      #placeholder sl-icon{
        color: var(--sl-color-primary-600);
      }

      .spinner-mixin {
        --inset: var(--header-height) 0 0 var(--nav-width);
      }

      @media(max-width: 800px) {
        #search_bar {
          left: 0;
        }
        .spinner-mixin {
          --inset: var(--header-height) 0 0 0;
        }
      }

      @media(max-width: 500px) {
        :host > section {
          padding: 0;
        }
      }
    `]);customElements.define("find-page",co);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Pe(e){const t=customElements.get(e.is);if(!t)Object.defineProperty(e,"version",{get(){return"24.4.6"}}),customElements.define(e.is,e);else{const i=t.version;i&&e.version&&i===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xh extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}Pe(Xh);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jh=e=>class extends e{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(i,o,r){super.attributeChangedCallback(i,o,r),i==="theme"&&this._set_theme(r)}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $n=[],kr=new Set,os=new Set;function zn(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}function Zh(e){return zn(customElements.get(e))}function tp(e=[]){return[e].flat(1/0).filter(t=>t instanceof Ur?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Dn(e,t){return(e||"").split(" ").some(i=>new RegExp(`^${i.split("*").join(".*")}$`,"u").test(t))}function Mn(e){return e.map(t=>t.cssText).join(`
`)}const ko="vaadin-themable-mixin-style";function ep(e,t){const i=document.createElement("style");i.id=ko,i.textContent=Mn(e),t.content.appendChild(i)}function ip(e){if(!e.shadowRoot)return;const t=e.constructor;if(e instanceof it)[...e.shadowRoot.querySelectorAll("style")].forEach(i=>i.remove()),Ua(e.shadowRoot,t.elementStyles);else{const i=e.shadowRoot.getElementById(ko),o=t.prototype._template;i.textContent=o.content.getElementById(ko).textContent}}function op(e){kr.forEach(t=>{const i=t.deref();i instanceof e?ip(i):i||kr.delete(t)})}function On(e){if(e.prototype instanceof it)e.elementStyles=e.finalizeStyles(e.styles);else{const t=e.prototype._template;t.content.getElementById(ko).textContent=Mn(e.getStylesForThis())}os.forEach(t=>{const i=customElements.get(t);i!==e&&i.prototype instanceof e&&On(i)})}function rp(e,t){const i=e.__themes;return!i||!t?!1:i.some(o=>o.styles.some(r=>t.some(s=>s.cssText===r.cssText)))}function zt(e,t,i={}){t=tp(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,i):$n.push({themeFor:e,styles:t,include:i.include,moduleId:i.moduleId}),e&&os.forEach(o=>{if(Dn(e,o)&&Zh(o)){const r=customElements.get(o);rp(r,t)?console.warn(`Registering styles that already exist for ${o}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${o}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),On(r),op(r)}})}function Cr(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():$n}function sp(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function Ln(e){const t=[];return e.include&&[].concat(e.include).forEach(i=>{const o=Cr().find(r=>r.moduleId===i);o?t.push(...Ln(o),...o.styles):console.warn(`Included moduleId ${i} not found in style registry`)},e.styles),t}function ap(e){const t=`${e}-default-theme`,i=Cr().filter(o=>o.moduleId!==t&&Dn(o.themeFor,e)).map(o=>({...o,styles:[...Ln(o),...o.styles],includePriority:sp(o.moduleId)})).sort((o,r)=>r.includePriority-o.includePriority);return i.length>0?i:Cr().filter(o=>o.moduleId===t)}const Ke=e=>class extends Jh(e){constructor(){super(),kr.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&os.add(this.is),this.elementStyles)return;const i=this.prototype._template;!i||zn(this)||ep(this.getStylesForThis(),i)}static finalizeStyles(i){const o=this.getStylesForThis();return i?[...[i].flat(1/0),...o]:o}static getStylesForThis(){const i=e.__themes||[],o=Object.getPrototypeOf(this.prototype),r=(o?o.constructor.__themes:[])||[];this.__themes=[...i,...r,...ap(this.is)];const s=this.__themes.flatMap(a=>a.styles);return s.filter((a,n)=>n===s.lastIndexOf(a))}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const np=(e,...t)=>{const i=document.createElement("style");i.id=e,i.textContent=t.map(o=>o.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",i)},Qe=(e,...t)=>{np(`lumo-${e}`,t)};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lp=P`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;Qe("font-icons",lp);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cp=P`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;Qe("color-props",cp);const dp=P`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;zt("",dp,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const up=P`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;Qe("sizing-props",up);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hp=P`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;Qe("spacing-props",hp);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pp=P`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;P`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;Qe("style-props",pp);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fp=P`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,mp=P`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;zt("",mp,{moduleId:"lumo-typography"});Qe("typography-props",fp);const gp=P`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: var(--vaadin-button-min-width, calc(var(--_button-size) * 2));
    height: var(--_button-size);
    padding: var(--vaadin-button-padding, 0 calc(var(--_button-size) / 3 + var(--lumo-border-radius-m) / 2));
    margin: var(--vaadin-button-margin, var(--lumo-space-xs) 0);
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--vaadin-button-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--_lumo-button-text-color);
    background: var(--_lumo-button-background);
    border: var(--vaadin-button-border, none);
    border-radius: var(--vaadin-button-border-radius, var(--lumo-border-radius-m));
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
    --_button-size: var(--vaadin-button-height, var(--lumo-button-size));
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    /* Used by notification */
    --_lumo-button-background: var(--vaadin-button-background, var(--lumo-contrast-5pct));
    --_lumo-button-text-color: var(--vaadin-button-text-color, var(--lumo-primary-text-color));
    --_lumo-button-primary-background: var(--vaadin-button-primary-background, var(--lumo-primary-color));
    --_lumo-button-primary-text-color: var(--vaadin-button-primary-text-color, var(--lumo-primary-contrast-color));
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    --_background: transparent !important;
    background: var(--vaadin-button-tertiary-background, var(--_background));
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    border: var(--vaadin-button-tertiary-border, none);
    color: var(--vaadin-button-tertiary-text-color, var(--lumo-primary-text-color));
    font-weight: var(--vaadin-button-tertiary-font-weight, 500);
    padding: var(--vaadin-button-tertiary-padding, 0 calc(var(--_button-size) / 6));
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background: var(--_lumo-button-primary-background);
    border: var(--vaadin-button-primary-border, none);
    color: var(--_lumo-button-primary-text-color);
    font-weight: var(--vaadin-button-primary-font-weight, 600);
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;zt("vaadin-button",gp,{moduleId:"lumo-button"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let bp=/(url\()([^)]*)(\))/g,vp=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ki,yt;function _i(e,t){if(e&&vp.test(e)||e==="//")return e;if(Ki===void 0){Ki=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",Ki=i.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),Ki)try{return new URL(e,t).href}catch{return e}return yt||(yt=document.implementation.createHTMLDocument("temp"),yt.base=yt.createElement("base"),yt.head.appendChild(yt.base),yt.anchor=yt.createElement("a"),yt.body.appendChild(yt.anchor)),yt.base.href=t,yt.anchor.href=e,yt.anchor.href||e}function rs(e,t){return e.replace(bp,function(i,o,r,s){return o+"'"+_i(r.replace(/["']/g,""),t)+"'"+s})}function ss(e){return e.substring(0,e.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const yp=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const wp=yp&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let _p=window.Polymer&&window.Polymer.rootPath||ss(document.baseURI||window.location.href),Co=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Er=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,xp=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Ap=window.Polymer&&window.Polymer.legacyOptimizations||!1,kp=window.Polymer&&window.Polymer.legacyWarnings||!1,Cp=window.Polymer&&window.Polymer.syncInitialRender||!1,Sr=window.Polymer&&window.Polymer.legacyUndefined||!1,Ep=window.Polymer&&window.Polymer.orderedComputed||!1,fa=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Sp=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Pp=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Tp=0;const Gt=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=Tp++;function o(r){let s=r.__mixinSet;if(s&&s[i])return r;let a=t,n=a.get(r);if(!n){n=e(r),a.set(r,n);let l=Object.create(n.__mixinSet||s||null);l[i]=!0,n.__mixinSet=l}return n}return o};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let as={},In={};function ma(e,t){as[e]=In[e.toLowerCase()]=t}function ga(e){return as[e]||In[e.toLowerCase()]}function $p(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class Ti extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,i){if(t){let o=ga(t);return o&&i?o.querySelector(i):o}return null}attributeChangedCallback(t,i,o,r){i!==o&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=_i(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=ss(i)}return this.__assetpath}register(t){if(t=t||this.id,t){if(Er&&ga(t)!==void 0)throw ma(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,ma(t,this),$p(this)}}}Ti.prototype.modules=as;customElements.define("dom-module",Ti);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const zp="link[rel=import][type~=css]",Dp="include",ba="shady-unscoped";function Rn(e){return Ti.import(e)}function va(e){let t=e.body?e.body:e;const i=rs(t.textContent,e.baseURI),o=document.createElement("style");return o.textContent=i,o}function Mp(e){const t=e.trim().split(/\s+/),i=[];for(let o=0;o<t.length;o++)i.push(...Op(t[o]));return i}function Op(e){const t=Rn(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const i=[];i.push(...Fn(t));const o=t.querySelector("template");o&&i.push(...Nn(o,t.assetpath)),t._styles=i}return t._styles}function Nn(e,t){if(!e._styles){const i=[],o=e.content.querySelectorAll("style");for(let r=0;r<o.length;r++){let s=o[r],a=s.getAttribute(Dp);a&&i.push(...Mp(a).filter(function(n,l,c){return c.indexOf(n)===l})),t&&(s.textContent=rs(s.textContent,t)),i.push(s)}e._styles=i}return e._styles}function Lp(e){let t=Rn(e);return t?Fn(t):[]}function Fn(e){const t=[],i=e.querySelectorAll(zp);for(let o=0;o<i.length;o++){let r=i[o];if(r.import){const s=r.import,a=r.hasAttribute(ba);if(a&&!s._unscopedStyle){const n=va(s);n.setAttribute(ba,""),s._unscopedStyle=n}else s._style||(s._style=va(s));t.push(a?s._unscopedStyle:s._style)}}return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _e=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Pr(e){return e.indexOf(".")>=0}function Te(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function Ip(e,t){return e.indexOf(t+".")===0}function Eo(e,t){return t.indexOf(e+".")===0}function So(e,t,i){return t+i.slice(e.length)}function hi(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let o=e[i].toString().split(".");for(let r=0;r<o.length;r++)t.push(o[r])}return t.join(".")}else return e}function Bn(e){return Array.isArray(e)?hi(e).split("."):e.toString().split(".")}function mt(e,t,i){let o=e,r=Bn(t);for(let s=0;s<r.length;s++){if(!o)return;let a=r[s];o=o[a]}return i&&(i.path=r.join(".")),o}function ya(e,t,i){let o=e,r=Bn(t),s=r[r.length-1];if(r.length>1){for(let a=0;a<r.length-1;a++){let n=r[a];if(o=o[n],!o)return}o[s]=i}else o[t]=i;return r.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Po={},Rp=/-[a-z]/g,Np=/([A-Z])/g;function Un(e){return Po[e]||(Po[e]=e.indexOf("-")<0?e:e.replace(Rp,t=>t[1].toUpperCase()))}function Bo(e){return Po[e]||(Po[e]=e.replace(Np,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Fp=0,Vn=0,Re=[],Bp=0,Tr=!1,Hn=document.createTextNode("");new window.MutationObserver(Up).observe(Hn,{characterData:!0});function Up(){Tr=!1;const e=Re.length;for(let t=0;t<e;t++){let i=Re[t];if(i)try{i()}catch(o){setTimeout(()=>{throw o})}}Re.splice(0,e),Vn+=e}const Vp={run(e){return Tr||(Tr=!0,Hn.textContent=Bp++),Re.push(e),Fp++},cancel(e){const t=e-Vn;if(t>=0){if(!Re[t])throw new Error("invalid async handle: "+e);Re[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Hp=Vp,jn=Gt(e=>{class t extends e{static createProperties(o){const r=this.prototype;for(let s in o)s in r||r._createPropertyAccessor(s)}static attributeNameForProperty(o){return o.toLowerCase()}static typeForProperty(o){}_createPropertyAccessor(o,r){this._addPropertyToAttributeMap(o),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[o]||(this.__dataHasAccessor[o]=!0,this._definePropertyAccessor(o,r))}_addPropertyToAttributeMap(o){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let r=this.__dataAttributes[o];return r||(r=this.constructor.attributeNameForProperty(o),this.__dataAttributes[r]=o),r}_definePropertyAccessor(o,r){Object.defineProperty(this,o,{get(){return this.__data[o]},set:r?function(){}:function(s){this._setPendingProperty(o,s,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let o in this.__dataHasAccessor)this.hasOwnProperty(o)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[o]=this[o],delete this[o])}_initializeInstanceProperties(o){Object.assign(this,o)}_setProperty(o,r){this._setPendingProperty(o,r)&&this._invalidateProperties()}_getProperty(o){return this.__data[o]}_setPendingProperty(o,r,s){let a=this.__data[o],n=this._shouldPropertyChange(o,r,a);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(o in this.__dataOld)&&(this.__dataOld[o]=a),this.__data[o]=r,this.__dataPending[o]=r),n}_isPropertyPending(o){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(o))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Hp.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const o=this.__data,r=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(o,r,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(o,r,s)),this.__dataCounter--}_shouldPropertiesChange(o,r,s){return!!r}_propertiesChanged(o,r,s){}_shouldPropertyChange(o,r,s){return s!==r&&(s===s||r===r)}attributeChangedCallback(o,r,s,a){r!==s&&this._attributeToProperty(o,s),super.attributeChangedCallback&&super.attributeChangedCallback(o,r,s,a)}_attributeToProperty(o,r,s){if(!this.__serializing){const a=this.__dataAttributes,n=a&&a[o]||o;this[n]=this._deserializeValue(r,s||this.constructor.typeForProperty(n))}}_propertyToAttribute(o,r,s){this.__serializing=!0,s=arguments.length<3?this[o]:s,this._valueToNodeAttribute(this,s,r||this.constructor.attributeNameForProperty(o)),this.__serializing=!1}_valueToNodeAttribute(o,r,s){const a=this._serializeValue(r);(s==="class"||s==="name"||s==="slot")&&(o=_e(o)),a===void 0?o.removeAttribute(s):o.setAttribute(s,a===""&&window.trustedTypes?window.trustedTypes.emptyScript:a)}_serializeValue(o){switch(typeof o){case"boolean":return o?"":void 0;default:return o!=null?o.toString():void 0}}_deserializeValue(o,r){switch(r){case Boolean:return o!==null;case Number:return Number(o);default:return o}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Wn={};let Qi=HTMLElement.prototype;for(;Qi;){let e=Object.getOwnPropertyNames(Qi);for(let t=0;t<e.length;t++)Wn[e[t]]=!0;Qi=Object.getPrototypeOf(Qi)}const jp=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function Wp(e,t){if(!Wn[t]){let i=e[t];i!==void 0&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}const qp=Gt(e=>{const t=jn(e);class i extends t{static createPropertiesForAttributes(){let r=this.observedAttributes;for(let s=0;s<r.length;s++)this.prototype._createPropertyAccessor(Un(r[s]))}static attributeNameForProperty(r){return Bo(r)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(r){for(let s in r)this._setProperty(s,r[s])}_ensureAttribute(r,s){const a=this;a.hasAttribute(r)||this._valueToNodeAttribute(a,s,r)}_serializeValue(r){switch(typeof r){case"object":if(r instanceof Date)return r.toString();if(r){if(jp(r))return r;try{return JSON.stringify(r)}catch{return""}}default:return super._serializeValue(r)}}_deserializeValue(r,s){let a;switch(s){case Object:try{a=JSON.parse(r)}catch{a=r}break;case Array:try{a=JSON.parse(r)}catch{a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${r}`)}break;case Date:a=isNaN(r)?String(r):Number(r),a=new Date(a);break;default:a=super._deserializeValue(r,s);break}return a}_definePropertyAccessor(r,s){Wp(this,r),super._definePropertyAccessor(r,s)}_hasAccessor(r){return this.__dataHasAccessor&&this.__dataHasAccessor[r]}_isPropertyPending(r){return!!(this.__dataPending&&r in this.__dataPending)}}return i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Yp={"dom-if":!0,"dom-repeat":!0};let wa=!1,_a=!1;function Gp(){if(!wa){wa=!0;const e=document.createElement("textarea");e.placeholder="a",_a=e.placeholder===e.textContent}return _a}function Kp(e){Gp()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const Qp=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,i,o)=>{const r=i.getAttribute(o);if(e&&o.startsWith("on-")){t.setAttribute(o,e.createScript(r,o));return}t.setAttribute(o,r)}})();function Xp(e){let t=e.getAttribute("is");if(t&&Yp[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;){const{name:o}=i.attributes[0];Qp(e,i,o),i.removeAttribute(o)}}return e}function qn(e,t){let i=t.parentInfo&&qn(e,t.parentInfo);if(i){for(let o=i.firstChild,r=0;o;o=o.nextSibling)if(t.parentIndex===r++)return o}else return e}function Jp(e,t,i,o){o.id&&(t[o.id]=i)}function Zp(e,t,i){if(i.events&&i.events.length)for(let o=0,r=i.events,s;o<r.length&&(s=r[o]);o++)e._addMethodEventListenerToNode(t,s.name,s.value,e)}function tf(e,t,i,o){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=o)}function ef(e,t,i){return e=e._methodHost||e,function(r){e[i]?e[i](r,r.detail):console.warn("listener method `"+i+"` not defined")}}const of=Gt(e=>{class t extends e{static _parseTemplate(o,r){if(!o._templateInfo){let s=o._templateInfo={};s.nodeInfoList=[],s.nestedTemplate=!!r,s.stripWhiteSpace=r&&r.stripWhiteSpace||o.hasAttribute&&o.hasAttribute("strip-whitespace"),this._parseTemplateContent(o,s,{parent:null})}return o._templateInfo}static _parseTemplateContent(o,r,s){return this._parseTemplateNode(o.content,r,s)}static _parseTemplateNode(o,r,s){let a=!1,n=o;return n.localName=="template"&&!n.hasAttribute("preserve-content")?a=this._parseTemplateNestedTemplate(n,r,s)||a:n.localName==="slot"&&(r.hasInsertionPoint=!0),Kp(n),n.firstChild&&this._parseTemplateChildNodes(n,r,s),n.hasAttributes&&n.hasAttributes()&&(a=this._parseTemplateNodeAttributes(n,r,s)||a),a||s.noted}static _parseTemplateChildNodes(o,r,s){if(!(o.localName==="script"||o.localName==="style"))for(let a=o.firstChild,n=0,l;a;a=l){if(a.localName=="template"&&(a=Xp(a)),l=a.nextSibling,a.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)a.textContent+=u.textContent,l=u.nextSibling,o.removeChild(u),u=l;if(r.stripWhiteSpace&&!a.textContent.trim()){o.removeChild(a);continue}}let c={parentIndex:n,parentInfo:s};this._parseTemplateNode(a,r,c)&&(c.infoIndex=r.nodeInfoList.push(c)-1),a.parentNode&&n++}}static _parseTemplateNestedTemplate(o,r,s){let a=o,n=this._parseTemplate(a,r);return(n.content=a.content.ownerDocument.createDocumentFragment()).appendChild(a.content),s.templateInfo=n,!0}static _parseTemplateNodeAttributes(o,r,s){let a=!1,n=Array.from(o.attributes);for(let l=n.length-1,c;c=n[l];l--)a=this._parseTemplateNodeAttribute(o,r,s,c.name,c.value)||a;return a}static _parseTemplateNodeAttribute(o,r,s,a,n){return a.slice(0,3)==="on-"?(o.removeAttribute(a),s.events=s.events||[],s.events.push({name:a.slice(3),value:n}),!0):a==="id"?(s.id=n,!0):!1}static _contentForTemplate(o){let r=o._templateInfo;return r&&r.content||o.content}_stampTemplate(o,r){o&&!o.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(o),r=r||this.constructor._parseTemplate(o);let s=r.nodeInfoList,a=r.content||o.content,n=document.importNode(a,!0);n.__noInsertionPoint=!r.hasInsertionPoint;let l=n.nodeList=new Array(s.length);n.$={};for(let c=0,u=s.length,d;c<u&&(d=s[c]);c++){let p=l[c]=qn(n,d);Jp(this,n.$,p,d),tf(this,p,d,r),Zp(this,p,d)}return n=n,n}_addMethodEventListenerToNode(o,r,s,a){a=a||o;let n=ef(a,r,s);return this._addEventListenerToNode(o,r,n),n}_addEventListenerToNode(o,r,s){o.addEventListener(r,s)}_removeEventListenerFromNode(o,r,s){o.removeEventListener(r,s)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let $i=0;const zi=[],H={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Yn="__computeInfo",rf=/[A-Z]/;function or(e,t,i){let o=e[t];if(!o)o=e[t]={};else if(!e.hasOwnProperty(t)&&(o=e[t]=Object.create(e[t]),i))for(let r in o){let s=o[r],a=o[r]=Array(s.length);for(let n=0;n<s.length;n++)a[n]=s[n]}return o}function pi(e,t,i,o,r,s){if(t){let a=!1;const n=$i++;for(let l in i){let c=r?Te(l):l,u=t[c];if(u)for(let d=0,p=u.length,m;d<p&&(m=u[d]);d++)(!m.info||m.info.lastRun!==n)&&(!r||ns(l,m.trigger))&&(m.info&&(m.info.lastRun=n),m.fn(e,l,i,o,m.info,r,s),a=!0)}return a}return!1}function sf(e,t,i,o,r,s,a,n){let l=!1,c=a?Te(o):o,u=t[c];if(u)for(let d=0,p=u.length,m;d<p&&(m=u[d]);d++)(!m.info||m.info.lastRun!==i)&&(!a||ns(o,m.trigger))&&(m.info&&(m.info.lastRun=i),m.fn(e,o,r,s,m.info,a,n),l=!0);return l}function ns(e,t){if(t){let i=t.name;return i==e||!!(t.structured&&Ip(i,e))||!!(t.wildcard&&Eo(i,e))}else return!0}function xa(e,t,i,o,r){let s=typeof r.method=="string"?e[r.method]:r.method,a=r.property;s?s.call(e,e.__data[a],o[a]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function af(e,t,i,o,r){let s=e[H.NOTIFY],a,n=$i++;for(let c in t)t[c]&&(s&&sf(e,s,n,c,i,o,r)||r&&nf(e,c,i))&&(a=!0);let l;a&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function nf(e,t,i){let o=Te(t);if(o!==t){let r=Bo(o)+"-changed";return Gn(e,r,i[t],t),!0}return!1}function Gn(e,t,i,o){let r={value:i,queueProperty:!0};o&&(r.path=o),_e(e).dispatchEvent(new CustomEvent(t,{detail:r}))}function lf(e,t,i,o,r,s){let n=(s?Te(t):t)!=t?t:null,l=n?mt(e,n):e.__data[t];n&&l===void 0&&(l=i[t]),Gn(e,r.eventName,l,n)}function cf(e,t,i,o,r){let s,a=e.detail,n=a&&a.path;n?(o=So(i,o,n),s=a&&a.value):s=e.currentTarget[i],s=r?!s:s,(!t[H.READ_ONLY]||!t[H.READ_ONLY][o])&&t._setPendingPropertyOrPath(o,s,!0,!!n)&&(!a||!a.queueProperty)&&t._invalidateProperties()}function df(e,t,i,o,r){let s=e.__data[t];Co&&(s=Co(s,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,s)}function uf(e,t,i,o){let r=e[H.COMPUTE];if(r)if(Ep){$i++;const s=pf(e),a=[];for(let l in t)Aa(l,r,a,s,o);let n;for(;n=a.shift();)Kn(e,"",t,i,n)&&Aa(n.methodInfo,r,a,s,o);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let s=t;for(;pi(e,r,s,i,o);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}const hf=(e,t,i)=>{let o=0,r=t.length-1,s=-1;for(;o<=r;){const a=o+r>>1,n=i.get(t[a].methodInfo)-i.get(e.methodInfo);if(n<0)o=a+1;else if(n>0)r=a-1;else{s=a;break}}s<0&&(s=r+1),t.splice(s,0,e)},Aa=(e,t,i,o,r)=>{const s=r?Te(e):e,a=t[s];if(a)for(let n=0;n<a.length;n++){const l=a[n];l.info.lastRun!==$i&&(!r||ns(e,l.trigger))&&(l.info.lastRun=$i,hf(l.info,i,o))}};function pf(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[H.COMPUTE];let{counts:o,ready:r,total:s}=ff(e),a;for(;a=r.shift();){t.set(a,t.size);const n=i[a];n&&n.forEach(l=>{const c=l.info.methodInfo;--s,--o[c]===0&&r.push(c)})}s!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function ff(e){const t=e[Yn],i={},o=e[H.COMPUTE],r=[];let s=0;for(let a in t){const n=t[a];s+=i[a]=n.args.filter(l=>!l.literal).length+(n.dynamicFn?1:0)}for(let a in o)t[a]||r.push(a);return{counts:i,ready:r,total:s}}function Kn(e,t,i,o,r){let s=$r(e,t,i,o,r);if(s===zi)return!1;let a=r.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[a]?e._setPendingProperty(a,s,!0):(e[a]=s,!1)}function mf(e,t,i){let o=e.__dataLinkedPaths;if(o){let r;for(let s in o){let a=o[s];Eo(s,t)?(r=So(s,a,t),e._setPendingPropertyOrPath(r,i,!0,!0)):Eo(a,t)&&(r=So(a,s,t),e._setPendingPropertyOrPath(r,i,!0,!0))}}}function rr(e,t,i,o,r,s,a){i.bindings=i.bindings||[];let n={kind:o,target:r,parts:s,literal:a,isCompound:s.length!==1};if(i.bindings.push(n),wf(n)){let{event:c,negate:u}=n.parts[0];n.listenerEvent=c||Bo(r)+"-changed",n.listenerNegate=u}let l=t.nodeInfoList.length;for(let c=0;c<n.parts.length;c++){let u=n.parts[c];u.compoundIndex=c,gf(e,t,n,u,l)}}function gf(e,t,i,o,r){if(!o.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let s=o.dependencies,a={index:r,binding:i,part:o,evaluator:e};for(let n=0;n<s.length;n++){let l=s[n];typeof l=="string"&&(l=Xn(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:bf,info:a,trigger:l})}}}function bf(e,t,i,o,r,s,a){let n=a[r.index],l=r.binding,c=r.part;if(s&&c.source&&t.length>c.source.length&&l.kind=="property"&&!l.isCompound&&n.__isPropertyEffectsClient&&n.__dataHasAccessor&&n.__dataHasAccessor[l.target]){let u=i[t];t=So(c.source,l.target,t),n._setPendingPropertyOrPath(t,u,!1,!0)&&e._enqueueClient(n)}else{let u=r.evaluator._evaluateBinding(e,c,t,i,o,s);u!==zi&&vf(e,n,l,c,u)}}function vf(e,t,i,o,r){if(r=yf(t,r,i,o),Co&&(r=Co(r,i.target,i.kind,t)),i.kind=="attribute")e._valueToNodeAttribute(t,r,i.target);else{let s=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?(!t[H.READ_ONLY]||!t[H.READ_ONLY][s])&&t._setPendingProperty(s,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,s,r)}}function yf(e,t,i,o){if(i.isCompound){let r=e.__dataCompoundStorage[i.target];r[o.compoundIndex]=t,t=r.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function wf(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function _f(e,t){let{nodeList:i,nodeInfoList:o}=t;if(o.length)for(let r=0;r<o.length;r++){let s=o[r],a=i[r],n=s.bindings;if(n)for(let l=0;l<n.length;l++){let c=n[l];xf(a,c),Af(a,e,c)}a.__dataHost=e}}function xf(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),o=t.parts,r=new Array(o.length);for(let a=0;a<o.length;a++)r[a]=o[a].literal;let s=t.target;i[s]=r,t.literal&&t.kind=="property"&&(s==="className"&&(e=_e(e)),e[s]=t.literal)}}function Af(e,t,i){if(i.listenerEvent){let o=i.parts[0];e.addEventListener(i.listenerEvent,function(r){cf(r,t,i.target,o.source,o.negate)})}}function ka(e,t,i,o,r,s){s=t.static||s&&(typeof s!="object"||s[t.methodName]);let a={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:s};for(let n=0,l;n<t.args.length&&(l=t.args[n]);n++)l.literal||e._addPropertyEffect(l.rootProperty,i,{fn:o,info:a,trigger:l});return s&&e._addPropertyEffect(t.methodName,i,{fn:o,info:a}),a}function $r(e,t,i,o,r){let s=e._methodHost||e,a=s[r.methodName];if(a){let n=e._marshalArgs(r.args,t,i);return n===zi?zi:a.apply(s,n)}else r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const kf=[],Qn="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Cf="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Ef="(?:'(?:[^'\\\\]|\\\\.)*')",Sf='(?:"(?:[^"\\\\]|\\\\.)*")',Pf="(?:"+Ef+"|"+Sf+")",Ca="(?:("+Qn+"|"+Cf+"|"+Pf+")\\s*)",Tf="(?:"+Ca+"(?:,\\s*"+Ca+")*)",$f="(?:\\(\\s*(?:"+Tf+"?)\\)\\s*)",zf="("+Qn+"\\s*"+$f+"?)",Df="(\\[\\[|{{)\\s*",Mf="(?:]]|}})",Of="(?:(!)\\s*)?",Lf=Df+Of+zf+Mf,Ea=new RegExp(Lf,"g");function Sa(e){let t="";for(let i=0;i<e.length;i++){let o=e[i].literal;t+=o||""}return t}function sr(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let o={methodName:t[1],static:!0,args:kf};if(t[2].trim()){let r=t[2].replace(/\\,/g,"&comma;").split(",");return If(r,o)}else return o}return null}function If(e,t){return t.args=e.map(function(i){let o=Xn(i);return o.literal||(t.static=!1),o},this),t}function Xn(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},o=t[0];switch(o==="-"&&(o=t[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0;break}return i.literal||(i.rootProperty=Te(t),i.structured=Pr(t),i.structured&&(i.wildcard=t.slice(-2)==".*",i.wildcard&&(i.name=t.slice(0,-2)))),i}function Pa(e,t,i){let o=mt(e,i);return o===void 0&&(o=t[i]),o}function Jn(e,t,i,o){const r={indexSplices:o};Sr&&!e._overrideLegacyUndefined&&(t.splices=r),e.notifyPath(i+".splices",r),e.notifyPath(i+".length",t.length),Sr&&!e._overrideLegacyUndefined&&(r.indexSplices=[])}function ci(e,t,i,o,r,s){Jn(e,t,i,[{index:o,addedCount:r,removed:s,object:t,type:"splice"}])}function Rf(e){return e[0].toUpperCase()+e.substring(1)}const Nf=Gt(e=>{const t=of(qp(e));class i extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return H}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(di.length){let r=di[di.length-1];r._enqueueClient(this),this.__dataHost=r}}_initializeProtoProperties(r){this.__data=Object.create(r),this.__dataPending=Object.create(r),this.__dataOld={}}_initializeInstanceProperties(r){let s=this[H.READ_ONLY];for(let a in r)(!s||!s[a])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=r[a])}_addPropertyEffect(r,s,a){this._createPropertyAccessor(r,s==H.READ_ONLY);let n=or(this,s,!0)[r];n||(n=this[s][r]=[]),n.push(a)}_removePropertyEffect(r,s,a){let n=or(this,s,!0)[r],l=n.indexOf(a);l>=0&&n.splice(l,1)}_hasPropertyEffect(r,s){let a=this[s];return!!(a&&a[r])}_hasReadOnlyEffect(r){return this._hasPropertyEffect(r,H.READ_ONLY)}_hasNotifyEffect(r){return this._hasPropertyEffect(r,H.NOTIFY)}_hasReflectEffect(r){return this._hasPropertyEffect(r,H.REFLECT)}_hasComputedEffect(r){return this._hasPropertyEffect(r,H.COMPUTE)}_setPendingPropertyOrPath(r,s,a,n){if(n||Te(Array.isArray(r)?r[0]:r)!==r){if(!n){let l=mt(this,r);if(r=ya(this,r,s),!r||!super._shouldPropertyChange(r,s,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(r,s,a))return mf(this,r,s),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[r])return this._setPendingProperty(r,s,a);this[r]=s}return!1}_setUnmanagedPropertyToNode(r,s,a){(a!==r[s]||typeof a=="object")&&(s==="className"&&(r=_e(r)),r[s]=a)}_setPendingProperty(r,s,a){let n=this.__dataHasPaths&&Pr(r),l=n?this.__dataTemp:this.__data;return this._shouldPropertyChange(r,s,l[r])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),r in this.__dataOld||(this.__dataOld[r]=this.__data[r]),n?this.__dataTemp[r]=s:this.__data[r]=s,this.__dataPending[r]=s,(n||this[H.NOTIFY]&&this[H.NOTIFY][r])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[r]=a),!0):!1}_setProperty(r,s){this._setPendingProperty(r,s,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(r){this.__dataPendingClients=this.__dataPendingClients||[],r!==this&&this.__dataPendingClients.push(r)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let r=this.__dataPendingClients;if(r){this.__dataPendingClients=null;for(let s=0;s<r.length;s++){let a=r[s];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(r,s){for(let a in r)(s||!this[H.READ_ONLY]||!this[H.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,r[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(r,s,a){let n=this.__dataHasPaths;this.__dataHasPaths=!1;let l;uf(this,s,a,n),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(s,a,n),this._flushClients(),pi(this,this[H.REFLECT],s,a,n),pi(this,this[H.OBSERVE],s,a,n),l&&af(this,l,s,a,n),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(r,s,a){this[H.PROPAGATE]&&pi(this,this[H.PROPAGATE],r,s,a),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,r,s,a)}_runEffectsForTemplate(r,s,a,n){const l=(c,u)=>{pi(this,r.propertyEffects,c,a,u,r.nodeList);for(let d=r.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,a,u)};r.runEffects?r.runEffects(l,s,n):l(s,n)}linkPaths(r,s){r=hi(r),s=hi(s),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[r]=s}unlinkPaths(r){r=hi(r),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[r]}notifySplices(r,s){let a={path:""},n=mt(this,r,a);Jn(this,n,a.path,s)}get(r,s){return mt(s||this,r)}set(r,s,a){a?ya(a,r,s):(!this[H.READ_ONLY]||!this[H.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,s,!0)&&this._invalidateProperties()}push(r,...s){let a={path:""},n=mt(this,r,a),l=n.length,c=n.push(...s);return s.length&&ci(this,n,a.path,l,s.length,[]),c}pop(r){let s={path:""},a=mt(this,r,s),n=!!a.length,l=a.pop();return n&&ci(this,a,s.path,a.length,0,[l]),l}splice(r,s,a,...n){let l={path:""},c=mt(this,r,l);s<0?s=c.length-Math.floor(-s):s&&(s=Math.floor(s));let u;return arguments.length===2?u=c.splice(s):u=c.splice(s,a,...n),(n.length||u.length)&&ci(this,c,l.path,s,n.length,u),u}shift(r){let s={path:""},a=mt(this,r,s),n=!!a.length,l=a.shift();return n&&ci(this,a,s.path,0,0,[l]),l}unshift(r,...s){let a={path:""},n=mt(this,r,a),l=n.unshift(...s);return s.length&&ci(this,n,a.path,0,s.length,[]),l}notifyPath(r,s){let a;if(arguments.length==1){let n={path:""};s=mt(this,r,n),a=n.path}else Array.isArray(r)?a=hi(r):a=r;this._setPendingPropertyOrPath(a,s,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(r,s){this._addPropertyEffect(r,H.READ_ONLY),s&&(this["_set"+Rf(r)]=function(a){this._setProperty(r,a)})}_createPropertyObserver(r,s,a){let n={property:r,method:s,dynamicFn:!!a};this._addPropertyEffect(r,H.OBSERVE,{fn:xa,info:n,trigger:{name:r}}),a&&this._addPropertyEffect(s,H.OBSERVE,{fn:xa,info:n,trigger:{name:s}})}_createMethodObserver(r,s){let a=sr(r);if(!a)throw new Error("Malformed observer expression '"+r+"'");ka(this,a,H.OBSERVE,$r,null,s)}_createNotifyingProperty(r){this._addPropertyEffect(r,H.NOTIFY,{fn:lf,info:{eventName:Bo(r)+"-changed",property:r}})}_createReflectedProperty(r){let s=this.constructor.attributeNameForProperty(r);s[0]==="-"?console.warn("Property "+r+" cannot be reflected to attribute "+s+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(r,H.REFLECT,{fn:df,info:{attrName:s}})}_createComputedProperty(r,s,a){let n=sr(s);if(!n)throw new Error("Malformed computed expression '"+s+"'");const l=ka(this,n,H.COMPUTE,Kn,r,a);or(this,Yn)[r]=l}_marshalArgs(r,s,a){const n=this.__data,l=[];for(let c=0,u=r.length;c<u;c++){let{name:d,structured:p,wildcard:m,value:g,literal:b}=r[c];if(!b)if(m){const w=Eo(d,s),A=Pa(n,a,w?s:d);g={path:w?s:d,value:A,base:w?mt(n,d):A}}else g=p?Pa(n,a,d):n[d];if(Sr&&!this._overrideLegacyUndefined&&g===void 0&&r.length>1)return zi;l[c]=g}return l}static addPropertyEffect(r,s,a){this.prototype._addPropertyEffect(r,s,a)}static createPropertyObserver(r,s,a){this.prototype._createPropertyObserver(r,s,a)}static createMethodObserver(r,s){this.prototype._createMethodObserver(r,s)}static createNotifyingProperty(r){this.prototype._createNotifyingProperty(r)}static createReadOnlyProperty(r,s){this.prototype._createReadOnlyProperty(r,s)}static createReflectedProperty(r){this.prototype._createReflectedProperty(r)}static createComputedProperty(r,s,a){this.prototype._createComputedProperty(r,s,a)}static bindTemplate(r){return this.prototype._bindTemplate(r)}_bindTemplate(r,s){let a=this.constructor._parseTemplate(r),n=this.__preBoundTemplateInfo==a;if(!n)for(let l in a.propertyEffects)this._createPropertyAccessor(l);if(s)if(a=Object.create(a),a.wasPreBound=n,!this.__templateInfo)this.__templateInfo=a;else{const l=r._parentTemplateInfo||this.__templateInfo,c=l.lastChild;a.parent=l,l.lastChild=a,a.previousSibling=c,c?c.nextSibling=a:l.firstChild=a}else this.__preBoundTemplateInfo=a;return a}static _addTemplatePropertyEffect(r,s,a){let n=r.hostProps=r.hostProps||{};n[s]=!0;let l=r.propertyEffects=r.propertyEffects||{};(l[s]=l[s]||[]).push(a)}_stampTemplate(r,s){s=s||this._bindTemplate(r,!0),di.push(this);let a=super._stampTemplate(r,s);if(di.pop(),s.nodeList=a.nodeList,!s.wasPreBound){let n=s.childNodes=[];for(let l=a.firstChild;l;l=l.nextSibling)n.push(l)}return a.templateInfo=s,_f(this,s),this.__dataClientsReady&&(this._runEffectsForTemplate(s,this.__data,null,!1),this._flushClients()),a}_removeBoundDom(r){const s=r.templateInfo,{previousSibling:a,nextSibling:n,parent:l}=s;a?a.nextSibling=n:l&&(l.firstChild=n),n?n.previousSibling=a:l&&(l.lastChild=a),s.nextSibling=s.previousSibling=null;let c=s.childNodes;for(let u=0;u<c.length;u++){let d=c[u];_e(_e(d).parentNode).removeChild(d)}}static _parseTemplateNode(r,s,a){let n=t._parseTemplateNode.call(this,r,s,a);if(r.nodeType===Node.TEXT_NODE){let l=this._parseBindings(r.textContent,s);l&&(r.textContent=Sa(l)||" ",rr(this,s,a,"text","textContent",l),n=!0)}return n}static _parseTemplateNodeAttribute(r,s,a,n,l){let c=this._parseBindings(l,s);if(c){let u=n,d="property";rf.test(n)?d="attribute":n[n.length-1]=="$"&&(n=n.slice(0,-1),d="attribute");let p=Sa(c);return p&&d=="attribute"&&(n=="class"&&r.hasAttribute("class")&&(p+=" "+r.getAttribute(n)),r.setAttribute(n,p)),d=="attribute"&&u=="disable-upgrade$"&&r.setAttribute(n,""),r.localName==="input"&&u==="value"&&r.setAttribute(u,""),r.removeAttribute(u),d==="property"&&(n=Un(n)),rr(this,s,a,d,n,c,p),!0}else return t._parseTemplateNodeAttribute.call(this,r,s,a,n,l)}static _parseTemplateNestedTemplate(r,s,a){let n=t._parseTemplateNestedTemplate.call(this,r,s,a);const l=r.parentNode,c=a.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";fa&&(u||d)&&(l.removeChild(r),a=a.parentInfo,a.templateInfo=c,a.noted=!0,n=!1);let p=c.hostProps;if(Sp&&u)p&&(s.hostProps=Object.assign(s.hostProps||{},p),fa||(a.parentInfo.noted=!0));else{let m="{";for(let g in p){let b=[{mode:m,source:g,dependencies:[g],hostProp:!0}];rr(this,s,a,"property","_host_"+g,b)}}return n}static _parseBindings(r,s){let a=[],n=0,l;for(;(l=Ea.exec(r))!==null;){l.index>n&&a.push({literal:r.slice(n,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),p=!1,m="",g=-1;c=="{"&&(g=d.indexOf("::"))>0&&(m=d.substring(g+2),d=d.substring(0,g),p=!0);let b=sr(d),w=[];if(b){let{args:A,methodName:y}=b;for(let v=0;v<A.length;v++){let _=A[v];_.literal||w.push(_)}let x=s.dynamicFns;(x&&x[y]||b.static)&&(w.push(y),b.dynamicFn=!0)}else w.push(d);a.push({source:d,mode:c,negate:u,customEvent:p,signature:b,dependencies:w,event:m}),n=Ea.lastIndex}if(n&&n<r.length){let c=r.substring(n);c&&a.push({literal:c})}return a.length?a:null}static _evaluateBinding(r,s,a,n,l,c){let u;return s.signature?u=$r(r,a,n,l,s.signature):a!=s.source?u=mt(r,s.source):c&&Pr(a)?u=mt(r,a):u=r.__data[a],s.negate&&(u=!u),u}}return i}),di=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ff(e){const t={};for(let i in e){const o=e[i];t[i]=typeof o=="function"?{type:o}:o}return t}const Bf=Gt(e=>{const t=jn(e);function i(s){const a=Object.getPrototypeOf(s);return a.prototype instanceof r?a:null}function o(s){if(!s.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",s))){let a=null;if(s.hasOwnProperty(JSCompiler_renameProperty("properties",s))){const n=s.properties;n&&(a=Ff(n))}s.__ownProperties=a}return s.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const a=this._properties;this.__observedAttributes=a?Object.keys(a).map(n=>this.prototype._addPropertyToAttributeMap(n)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const a=i(this);a&&a.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const a=o(this);a&&this.createProperties(a)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const a=i(this);this.__properties=Object.assign({},a&&a._properties,o(this))}return this.__properties}static typeForProperty(a){const n=this._properties[a];return n&&n.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Uf="3.5.1",Ta=window.ShadyCSS&&window.ShadyCSS.cssBuild,Vf=Gt(e=>{const t=Bf(Nf(e));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function o(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function r(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function s(l,c,u,d){if(!Ta){const p=c.content.querySelectorAll("style"),m=Nn(c),g=Lp(u),b=c.content.firstElementChild;for(let A=0;A<g.length;A++){let y=g[A];y.textContent=l._processStyleText(y.textContent,d),c.content.insertBefore(y,b)}let w=0;for(let A=0;A<m.length;A++){let y=m[A],x=p[w];x!==y?(y=y.cloneNode(!0),x.parentNode.insertBefore(y,x)):w++,y.textContent=l._processStyleText(y.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),Pp&&Ta&&wp){const p=c.content.querySelectorAll("style");if(p){let m="";Array.from(p).forEach(g=>{m+=g.textContent,g.parentNode.removeChild(g)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(m)}}}function a(l){let c=null;if(l&&(!Er||xp)&&(c=Ti.import(l,"template"),Er&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class n extends t{static get polymerElementVersion(){return Uf}static _finalizeClass(){t._finalizeClass.call(this);const c=o(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Ap||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)r(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let p=0;p<c.length;p++)d._createMethodObserver(c[p],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&a(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=ss(c.url);else{const u=Ti.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=_p,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let p=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,p,!0):this[u]=p}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return rs(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,p=d?_i(d):"";s(this,u,c,p),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=_e(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Cp&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=_i(this.importPath)),_i(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,t._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return kp&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,c,u,d)}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const $a=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class Zn{constructor(t,i){el(t,i);const o=i.reduce((r,s,a)=>r+tl(s)+t[a+1],t[0]);this.value=o.toString()}toString(){return this.value}}function tl(e){if(e instanceof Zn)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function Hf(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Zn)return tl(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const Xe=function(t,...i){el(t,i);const o=document.createElement("template");let r=i.reduce((s,a,n)=>s+Hf(a)+t[n+1],t[0]);return $a&&(r=$a.createHTML(r)),o.innerHTML=r,o},el=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Je=Vf(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ls=Gt(e=>typeof e.prototype.addController=="function"?e:class extends e{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(i=>{i.hostConnected&&i.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(i=>{i.hostDisconnected&&i.hostDisconnected()})}addController(i){this.__controllers.add(i),this.$!==void 0&&this.isConnected&&i.hostConnected&&i.hostConnected()}removeController(i){this.__controllers.delete(i)}}),jf=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,uo=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Wf(){function e(){return!0}return il(e)}function qf(){try{return Yf()?!0:Gf()?uo?!Kf():!Wf():!1}catch{return!1}}function Yf(){return localStorage.getItem("vaadin.developmentmode.force")}function Gf(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Kf(){return!!(uo&&Object.keys(uo).map(t=>uo[t]).filter(t=>t.productionMode).length>0)}function il(e,t){if(typeof e!="function")return;const i=jf.exec(e.toString());if(i)try{e=new Function(i[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return e(t)}window.Vaadin=window.Vaadin||{};const za=function(e,t){if(window.Vaadin.developmentMode)return il(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=qf());function Qf(){}const Xf=function(){if(typeof za=="function")return za(Qf)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Da=0,ol=0;const Ne=[];let zr=!1;function Jf(){zr=!1;const e=Ne.length;for(let t=0;t<e;t++){const i=Ne[t];if(i)try{i()}catch(o){setTimeout(()=>{throw o})}}Ne.splice(0,e),ol+=e}const Zf={run(e){return window.requestAnimationFrame(e)},cancel(e){window.cancelAnimationFrame(e)}},tm={run(e){return window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16)},cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},em={run(e){zr||(zr=!0,queueMicrotask(()=>Jf())),Ne.push(e);const t=Da;return Da+=1,t},cancel(e){const t=e-ol;if(t>=0){if(!Ne[t])throw new Error(`invalid async handle: ${e}`);Ne[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Dr=new Set;class Di{static debounce(t,i,o){return t instanceof Di?t._cancelAsync():t=new Di,t.setConfig(i,o),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,i){this._asyncModule=t,this._callback=i,this._timer=this._asyncModule.run(()=>{this._timer=null,Dr.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Dr.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function im(e){Dr.add(e)}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kt=[];function Mr(e,t,i=e.getAttribute("dir")){t?e.setAttribute("dir",t):i!=null&&e.removeAttribute("dir")}function Or(){return document.documentElement.getAttribute("dir")}function om(){const e=Or();Kt.forEach(t=>{Mr(t,e)})}const rm=new MutationObserver(om);rm.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const sm=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:i=>i||"",toAttribute:i=>i===""?null:i}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Mr(this,Or(),null))}attributeChangedCallback(i,o,r){if(super.attributeChangedCallback(i,o,r),i!=="dir")return;const s=Or(),a=r===s&&Kt.indexOf(this)===-1,n=!r&&o&&Kt.indexOf(this)===-1;a||n?(this.__subscribe(),Mr(this,s,r)):r!==s&&o===s&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=Kt.includes(this),this.__unsubscribe()}_valueToNodeAttribute(i,o,r){r==="dir"&&o===""&&!i.hasAttribute("dir")||super._valueToNodeAttribute(i,o,r)}_attributeToProperty(i,o,r){i==="dir"&&!o?this.dir="":super._attributeToProperty(i,o,r)}__subscribe(){Kt.includes(this)||Kt.push(this)}__unsubscribe(){Kt.includes(this)&&Kt.splice(Kt.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Xf()};let ar;const Ma=new Set,cs=e=>class extends sm(e){static finalize(){super.finalize();const{is:i}=this;i&&!Ma.has(i)&&(window.Vaadin.registrations.push(this),Ma.add(i),window.Vaadin.developmentModeCallback&&(ar=Di.debounce(ar,tm,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),im(ar)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function am(e){return e.nodeType===Node.TEXT_NODE&&e.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nm{constructor(t,i){this.slot=t,this.callback=i,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const t=this.slot.assignedNodes({flatten:!0});let i=[];const o=[],r=[];t.length&&(i=t.filter(s=>!this._storedNodes.includes(s))),this._storedNodes.length&&this._storedNodes.forEach((s,a)=>{const n=t.indexOf(s);n===-1?o.push(s):n!==a&&r.push(s)}),(i.length||o.length||r.length)&&this.callback({addedNodes:i,movedNodes:r,removedNodes:o}),this._storedNodes=t}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let lm=0;function cm(){return lm++}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class He extends EventTarget{static generateId(t,i){return`${i||"default"}-${t.localName}-${cm()}`}constructor(t,i,o,r={}){super();const{initializer:s,multiple:a,observe:n,useUniqueId:l}=r;this.host=t,this.slotName=i,this.tagName=o,this.observe=typeof n=="boolean"?n:!0,this.multiple=typeof a=="boolean"?a:!1,this.slotInitializer=s,a&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(t,i))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(t.length===0){const i=this.attachDefaultNode();i&&(this.nodes=[i],this.initNode(i))}else this.nodes=t,t.forEach(i=>{this.initAddedNode(i)})}attachDefaultNode(){const{host:t,slotName:i,tagName:o}=this;let r=this.defaultNode;return!r&&o&&(r=document.createElement(o),r instanceof Element&&(i!==""&&r.setAttribute("slot",i),this.defaultNode=r)),r&&(this.node=r,t.appendChild(r)),r}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(i=>i.nodeType===Node.ELEMENT_NODE&&i.slot===t||i.nodeType===Node.TEXT_NODE&&i.textContent.trim()&&t==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:i}=this;i&&i(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,i=t===""?"slot:not([name])":`slot[name=${t}]`,o=this.host.shadowRoot.querySelector(i);this.__slotObserver=new nm(o,({addedNodes:r,removedNodes:s})=>{const a=this.multiple?this.nodes:[this.node],n=r.filter(l=>!am(l)&&!a.includes(l));s.length&&(this.nodes=a.filter(l=>!s.includes(l)),s.forEach(l=>{this.teardownNode(l)})),n&&n.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...a,...n].filter(l=>l!==this.defaultNode),n.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=n[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dm extends He{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.ariaTarget!==void 0&&(t.ariaTarget=this.ariaTarget),this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(t){this.ariaTarget=t;const i=this.node;i&&(i.ariaTarget=t)}setContext(t){this.context=t;const i=this.node;i&&(i.context=t)}setManual(t){this.manual=t;const i=this.node;i&&(i.manual=t)}setOpened(t){this.opened=t;const i=this.node;i&&(i.opened=t)}setPosition(t){this.position=t;const i=this.node;i&&(i._position=t)}setShouldShow(t){this.shouldShow=t;const i=this.node;i&&(i.shouldShow=t)}setTarget(t){this.target=t;const i=this.node;i&&(i.target=t)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const um=P`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,hm=e=>e`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pm=!1,fm=e=>e,ds=typeof document.head.style.touchAction=="string",Lr="__polymerGestures",nr="__polymerGesturesHandled",Ir="__polymerGesturesTouchAction",Oa=25,La=5,mm=2,gm=["mousedown","mousemove","mouseup","click"],bm=[0,1,4,2],vm=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function us(e){return gm.indexOf(e)>-1}let rl=!1;(function(){try{const e=Object.defineProperty({},"passive",{get(){rl=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function ym(e){if(!(us(e)||e==="touchend")&&ds&&rl&&pm)return{passive:!0}}const wm=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),_m={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function xe(e){const t=e.type;if(!us(t))return!1;if(t==="mousemove"){let o=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!vm&&(o=bm[e.which]||0),!!(o&1)}return(e.button===void 0?0:e.button)===0}function xm(e){if(e.type==="click"){if(e.detail===0)return!0;const t=ce(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const i=t.getBoundingClientRect(),o=e.pageX,r=e.pageY;return!(o>=i.left&&o<=i.right&&r>=i.top&&r<=i.bottom)}return!1}const Qt={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Am(e){let t="auto";const i=al(e);for(let o=0,r;o<i.length;o++)if(r=i[o],r[Ir]){t=r[Ir];break}return t}function sl(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function Fe(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}const al=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],hs={},we=[];function km(e,t){let i=document.elementFromPoint(e,t),o=i;for(;o&&o.shadowRoot&&!window.ShadyDOM;){const r=o;if(o=o.shadowRoot.elementFromPoint(e,t),r===o)break;o&&(i=o)}return i}function ce(e){const t=al(e);return t.length>0?t[0]:e.target}function Cm(e){const t=e.type,o=e.currentTarget[Lr];if(!o)return;const r=o[t];if(!r)return;if(!e[nr]&&(e[nr]={},t.startsWith("touch"))){const a=e.changedTouches[0];if(t==="touchstart"&&e.touches.length===1&&(Qt.touch.id=a.identifier),Qt.touch.id!==a.identifier)return;ds||(t==="touchstart"||t==="touchmove")&&Em(e)}const s=e[nr];if(!s.skip){for(let a=0,n;a<we.length;a++)n=we[a],r[n.name]&&!s[n.name]&&n.flow&&n.flow.start.indexOf(e.type)>-1&&n.reset&&n.reset();for(let a=0,n;a<we.length;a++)n=we[a],r[n.name]&&!s[n.name]&&(s[n.name]=!0,n[t](e))}}function Em(e){const t=e.changedTouches[0],i=e.type;if(i==="touchstart")Qt.touch.x=t.clientX,Qt.touch.y=t.clientY,Qt.touch.scrollDecided=!1;else if(i==="touchmove"){if(Qt.touch.scrollDecided)return;Qt.touch.scrollDecided=!0;const o=Am(e);let r=!1;const s=Math.abs(Qt.touch.x-t.clientX),a=Math.abs(Qt.touch.y-t.clientY);e.cancelable&&(o==="none"?r=!0:o==="pan-x"?r=a>s:o==="pan-y"&&(r=s>a)),r?e.preventDefault():To("track")}}function Ia(e,t,i){return hs[t]?(Sm(e,t,i),!0):!1}function Sm(e,t,i){const o=hs[t],r=o.deps,s=o.name;let a=e[Lr];a||(e[Lr]=a={});for(let n=0,l,c;n<r.length;n++)l=r[n],!(wm&&us(l)&&l!=="click")&&(c=a[l],c||(a[l]=c={_count:0}),c._count===0&&e.addEventListener(l,Cm,ym(l)),c[s]=(c[s]||0)+1,c._count=(c._count||0)+1);e.addEventListener(t,i),o.touchAction&&Tm(e,o.touchAction)}function ps(e){we.push(e),e.emits.forEach(t=>{hs[t]=e})}function Pm(e){for(let t=0,i;t<we.length;t++){i=we[t];for(let o=0,r;o<i.emits.length;o++)if(r=i.emits[o],r===e)return i}return null}function Tm(e,t){ds&&e instanceof HTMLElement&&em.run(()=>{e.style.touchAction=t}),e[Ir]=t}function fs(e,t,i){const o=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=i,fm(e).dispatchEvent(o),o.defaultPrevented){const r=i.preventer||i.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function To(e){const t=Pm(e);t.info&&(t.info.prevent=!0)}ps({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Fe(this.info)},mousedown(e){if(!xe(e))return;const t=ce(e),i=this,o=s=>{xe(s)||(ui("up",t,s),Fe(i.info))},r=s=>{xe(s)&&ui("up",t,s),Fe(i.info)};sl(this.info,o,r),ui("down",t,e)},touchstart(e){ui("down",ce(e),e.changedTouches[0],e)},touchend(e){ui("up",ce(e),e.changedTouches[0],e)}});function ui(e,t,i,o){t&&fs(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:o,prevent(r){return To(r)}})}ps({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(e){this.moves.length>mm&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Fe(this.info)},mousedown(e){if(!xe(e))return;const t=ce(e),i=this,o=s=>{const a=s.clientX,n=s.clientY;Ra(i.info,a,n)&&(i.info.state=i.info.started?s.type==="mouseup"?"end":"track":"start",i.info.state==="start"&&To("tap"),i.info.addMove({x:a,y:n}),xe(s)||(i.info.state="end",Fe(i.info)),t&&lr(i.info,t,s),i.info.started=!0)},r=s=>{i.info.started&&o(s),Fe(i.info)};sl(this.info,o,r),this.info.x=e.clientX,this.info.y=e.clientY},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(e){const t=ce(e),i=e.changedTouches[0],o=i.clientX,r=i.clientY;Ra(this.info,o,r)&&(this.info.state==="start"&&To("tap"),this.info.addMove({x:o,y:r}),lr(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend(e){const t=ce(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),lr(this.info,t,i))}});function Ra(e,t,i){if(e.prevent)return!1;if(e.started)return!0;const o=Math.abs(e.x-t),r=Math.abs(e.y-i);return o>=La||r>=La}function lr(e,t,i){if(!t)return;const o=e.moves[e.moves.length-2],r=e.moves[e.moves.length-1],s=r.x-e.x,a=r.y-e.y;let n,l=0;o&&(n=r.x-o.x,l=r.y-o.y),fs(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:n,ddy:l,sourceEvent:i,hover(){return km(i.clientX,i.clientY)}})}ps({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(e){xe(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click(e){xe(e)&&Na(this.info,e)},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(e){Na(this.info,e.changedTouches[0],e)}});function Na(e,t,i){const o=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),s=ce(i||t);!s||_m[s.localName]&&s.hasAttribute("disabled")||(isNaN(o)||isNaN(r)||o<=Oa&&r<=Oa||xm(t))&&(e.prevent||fs(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nl=Gt(e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(i){this._setAriaDisabled(i)}_setAriaDisabled(i){i?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $m=Gt(e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",i=>{this._onKeyDown(i)}),this.addEventListener("keyup",i=>{this._onKeyUp(i)})}_onKeyDown(i){switch(i.key){case"Enter":this._onEnter(i);break;case"Escape":this._onEscape(i);break}}_onKeyUp(i){}_onEnter(i){}_onEscape(i){}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zm=e=>class extends nl($m(e)){get _activeKeys(){return[" "]}ready(){super.ready(),Ia(this,"down",i=>{this._shouldSetActive(i)&&this._setActive(!0)}),Ia(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(i){return!this.disabled}_onKeyDown(i){super._onKeyDown(i),this._shouldSetActive(i)&&this._activeKeys.includes(i.key)&&(this._setActive(!0),document.addEventListener("keyup",o=>{this._activeKeys.includes(o.key)&&this._setActive(!1)},{once:!0}))}_setActive(i){this.toggleAttribute("active",i)}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ms=!1;window.addEventListener("keydown",()=>{ms=!0},{capture:!0});window.addEventListener("mousedown",()=>{ms=!1},{capture:!0});function Dm(){return ms}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ll=Gt(e=>class extends e{get _keyboardActive(){return Dm()}ready(){this.addEventListener("focusin",i=>{this._shouldSetFocus(i)&&this._setFocused(!0)}),this.addEventListener("focusout",i=>{this._shouldRemoveFocus(i)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(i){this.toggleAttribute("focused",i),this.toggleAttribute("focus-ring",i&&this._keyboardActive)}_shouldSetFocus(i){return!0}_shouldRemoveFocus(i){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mm=e=>class extends nl(e){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(i,o){super._disabledChanged(i,o),i?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):o&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(i){this.disabled&&i!==-1&&(this._lastTabIndex=i,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Om=e=>class extends zm(Mm(ll(e))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(i){super._onKeyDown(i),!(i.altKey||i.shiftKey||i.ctrlKey||i.metaKey)&&this._activeKeys.includes(i.key)&&(i.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */zt("vaadin-button",um,{moduleId:"vaadin-button-styles"});class Lm extends Om(cs(Ke(ls(Je)))){static get is(){return"vaadin-button"}static get template(){return hm(Xe)}ready(){super.ready(),this._tooltipController=new dm(this),this.addController(this._tooltipController)}}Pe(Lm);zt("vaadin-progress-bar",P`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const cl=document.createElement("template");cl.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(cl.content);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Im=P`
  :host {
    display: block;
    width: 100%; /* prevent collapsing inside non-stretching column flex */
    height: 8px;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='bar'] {
    height: 100%;
  }

  [part='value'] {
    height: 100%;
    transform-origin: 0 50%;
    transform: scaleX(var(--vaadin-progress-value));
  }

  :host([dir='rtl']) [part='value'] {
    transform-origin: 100% 50%;
  }

  @media (forced-colors: active) {
    [part='bar'] {
      outline: 1px solid;
    }

    [part='value'] {
      background-color: AccentColor !important;
      forced-color-adjust: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rm=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(i,o,r){const s=this._normalizeValue(i,o,r);this.style.setProperty("--vaadin-progress-value",s)}_valueChanged(i){this.setAttribute("aria-valuenow",i)}_minChanged(i){this.setAttribute("aria-valuemin",i)}_maxChanged(i){this.setAttribute("aria-valuemax",i)}_normalizeValue(i,o,r){let s;return!i&&i!==0?s=0:o>=r?s=1:(s=(i-o)/(r-o),s=Math.min(Math.max(s,0),1)),s}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */zt("vaadin-progress-bar",Im,{moduleId:"vaadin-progress-bar-styles"});class Nm extends cs(Ke(Rm(Je))){static get is(){return"vaadin-progress-bar"}static get template(){return Xe`
      <div part="bar">
        <div part="value"></div>
      </div>
    `}}Pe(Nm);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dl=P`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;zt("",dl,{moduleId:"lumo-field-button"});zt("vaadin-upload",P`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }
  `,{moduleId:"lumo-upload"});zt("vaadin-upload-icon",P`
    :host::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }
  `,{moduleId:"lumo-upload-icon"});zt("vaadin-upload-file-list",P`
    ::slotted(li:not(:first-of-type)) {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload-file-list"});const Fm=P`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  ::slotted([slot='progress']) {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }
`;zt("vaadin-upload-file",[dl,Fm],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bm extends Ke(Je){static get is(){return"vaadin-upload-icon"}static get template(){return Xe`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}Pe(Bm);/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ul=document.createElement("template");ul.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(ul.content);/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Um=e=>class extends ll(e){static get properties(){return{complete:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},file:{type:Object},fileName:{type:String},held:{type:Boolean,value:!1},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object},progress:{type:Number},status:{type:String},tabindex:{type:Number,value:0,reflectToAttribute:!0},uploading:{type:Boolean,value:!1,reflectToAttribute:!0},_progress:{type:Object}}}static get observers(){return["__updateProgress(_progress, progress, indeterminate)"]}ready(){super.ready(),this.addController(new He(this,"progress","vaadin-progress-bar",{initializer:i=>{this._progress=i}})),this.shadowRoot.addEventListener("focusin",i=>{i.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",i=>{i.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(i){return i.composedPath()[0]===this}_errorMessageChanged(i){this.toggleAttribute("error",!!i)}__updateProgress(i,o,r){i&&(i.value=isNaN(o)?0:o/100,i.indeterminate=r)}_fireFileEvent(i){return i.preventDefault(),this.dispatchEvent(new CustomEvent(i.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vm=P`
  :host {
    display: block;
  }

  [hidden] {
    display: none;
  }

  [part='row'] {
    list-style-type: none;
  }

  button {
    background: transparent;
    padding: 0;
    border: none;
    box-shadow: none;
  }

  :host([complete]) ::slotted([slot='progress']),
  :host([error]) ::slotted([slot='progress']) {
    display: none !important;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */zt("vaadin-upload-file",Vm,{moduleId:"vaadin-upload-file-styles"});class Hm extends Um(Ke(ls(Je))){static get template(){return Xe`
      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!errorMessage]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[fileName]]</div>
            <div part="status" hidden$="[[!status]]" id="status">[[status]]</div>
            <div part="error" id="error" hidden$="[[!errorMessage]]">[[errorMessage]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!errorMessage]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <slot name="progress"></slot>
    `}static get is(){return"vaadin-upload-file"}}Pe(Hm);/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jm=e=>class extends e{static get properties(){return{items:{type:Array},i18n:{type:Object}}}static get observers(){return["__updateItems(items, i18n)"]}__updateItems(i,o){i&&o&&this.requestContentUpdate()}requestContentUpdate(){const{items:i,i18n:o}=this;qa(k`
          ${i.map(r=>k`
              <li>
                <vaadin-upload-file
                  .file="${r}"
                  .complete="${r.complete}"
                  .errorMessage="${r.error}"
                  .fileName="${r.name}"
                  .held="${r.held}"
                  .indeterminate="${r.indeterminate}"
                  .progress="${r.progress}"
                  .status="${r.status}"
                  .uploading="${r.uploading}"
                  .i18n="${o}"
                ></vaadin-upload-file>
              </li>
            `)}
        `,this)}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wm extends jm(Ke(Je)){static get is(){return"vaadin-upload-file-list"}static get template(){return Xe`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>
      <ul part="list">
        <slot></slot>
      </ul>
    `}}Pe(Wm);/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mt=document.createElement("div");Mt.style.position="fixed";Mt.style.clip="rect(0px, 0px, 0px, 0px)";Mt.setAttribute("aria-live","polite");document.body.appendChild(Mt);let Xi;function Ji(e,t={}){const i=t.mode||"polite",o=t.timeout===void 0?150:t.timeout;i==="alert"?(Mt.removeAttribute("aria-live"),Mt.removeAttribute("role"),Xi=Di.debounce(Xi,Zf,()=>{Mt.setAttribute("role","alert")})):(Xi&&Xi.cancel(),Mt.removeAttribute("role"),Mt.setAttribute("aria-live",i)),Mt.textContent="",setTimeout(()=>{Mt.textContent=e},o)}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Uo=e=>e.test(navigator.userAgent),Rr=e=>e.test(navigator.platform),qm=e=>e.test(navigator.vendor);Uo(/Android/u);Uo(/Chrome/u)&&qm(/Google Inc/u);Uo(/Firefox/u);Rr(/^iPad/u)||Rr(/^Mac/u)&&navigator.maxTouchPoints>1;Rr(/^iPhone/u);Uo(/^((?!chrome|android).)*safari/iu);const Ym=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gm extends He{constructor(t){super(t,"add-button","vaadin-button")}initNode(t){t._isDefault&&(this.defaultNode=t),t.addEventListener("touchend",i=>{this.host._onAddFilesTouchEnd(i)}),t.addEventListener("click",i=>{this.host._onAddFilesClick(i)}),this.host._addButton=t}}class Km extends He{constructor(t){super(t,"drop-label","span")}initNode(t){t._isDefault&&(this.defaultNode=t),this.host._dropLabel=t}}const Qm=e=>class extends e{static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:Ym},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[],sync:!0},maxFiles:{type:Number,value:1/0,sync:!0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}},_addButton:{type:Object},_dropLabel:{type:Object},_fileList:{type:Object},_files:{type:Array}}}static get observers(){return["__updateAddButton(_addButton, maxFiles, i18n, maxFilesReached)","__updateDropLabel(_dropLabel, maxFiles, i18n)","__updateFileList(_fileList, files, i18n)","__updateMaxFilesReached(maxFiles, files)"]}get __acceptRegexp(){if(!this.accept)return null;const i=this.accept.split(",").map(o=>{let r=o.trim();return r=r.replace(/[+.]/gu,"\\$&"),r.startsWith("\\.")&&(r=`.*${r}$`),r.replace(/\/\*/gu,"/.*")});return new RegExp(`^(${i.join("|")})$`,"iu")}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this)),this._addButtonController=new Gm(this),this.addController(this._addButtonController),this._dropLabelController=new Km(this),this.addController(this._dropLabelController),this.addController(new He(this,"file-list","vaadin-upload-file-list",{initializer:i=>{this._fileList=i}})),this.addController(new He(this,"drop-label-icon","vaadin-upload-icon"))}_formatSize(i){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(i);const o=this.i18n.units.sizeBase||1e3,r=~~(Math.log(i)/Math.log(o)),s=Math.max(0,Math.min(3,r-1));return`${parseFloat((i/o**r).toFixed(s))} ${this.i18n.units.size[r]}`}_splitTimeByUnits(i){const o=[60,60,24,1/0],r=[0];for(let s=0;s<o.length&&i>0;s++)r[s]=i%o[s],i=Math.floor(i/o[s]);return r}_formatTime(i,o){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(i,o);for(;o.length<3;)o.push(0);return o.reverse().map(r=>(r<10?"0":"")+r).join(":")}_formatFileProgress(i){const o=i.loaded>0?this.i18n.uploading.remainingTime.prefix+i.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${i.totalStr}: ${i.progress}% (${o})`}__updateMaxFilesReached(i,o){this._setMaxFilesReached(i>=0&&o.length>=i)}__updateAddButton(i,o,r,s){i&&(i.disabled=s,i===this._addButtonController.defaultNode&&(i.textContent=this._i18nPlural(o,r.addFiles)))}__updateDropLabel(i,o,r){i&&i===this._dropLabelController.defaultNode&&(i.textContent=this._i18nPlural(o,r.dropFiles))}__updateFileList(i,o,r){i&&(i.items=[...o],i.i18n=r)}_onDragover(i){i.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),i.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(i){i.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(i){this.nodrop||(i.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(i.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(i){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([o,r])=>{i.setRequestHeader(o,r)}),this.timeout&&(i.timeout=this.timeout),i.withCredentials=this.withCredentials}_setStatus(i,o,r,s){i.elapsed=s,i.elapsedStr=this._formatTime(i.elapsed,this._splitTimeByUnits(i.elapsed)),i.remaining=Math.ceil(s*(o/r-1)),i.remainingStr=this._formatTime(i.remaining,this._splitTimeByUnits(i.remaining)),i.speed=~~(o/s/1024),i.totalStr=this._formatSize(o),i.loadedStr=this._formatSize(r),i.status=this._formatFileProgress(i)}uploadFiles(i=this.files){i&&!Array.isArray(i)&&(i=[i]),i=i.filter(o=>!o.complete),Array.prototype.forEach.call(i,this._uploadFile.bind(this))}_uploadFile(i){if(i.uploading)return;const o=Date.now(),r=i.xhr=this._createXhr();let s,a;r.upload.onprogress=u=>{clearTimeout(s),a=Date.now();const d=(a-o)/1e3,p=u.loaded,m=u.total,g=~~(p/m*100);i.loaded=p,i.progress=g,i.indeterminate=p<=0||p>=m,i.error?i.indeterminate=i.status=void 0:i.abort||(g<100?(this._setStatus(i,m,p,d),s=setTimeout(()=>{i.status=this.i18n.uploading.status.stalled,this._renderFileList()},2e3)):(i.loadedStr=i.totalStr,i.status=this.i18n.uploading.status.processing)),this._renderFileList(),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:i,xhr:r}}))},r.onreadystatechange=()=>{if(r.readyState===4){if(clearTimeout(s),i.indeterminate=i.uploading=!1,i.abort||(i.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:i,xhr:r},cancelable:!0}))))return;r.status===0?i.error=this.i18n.uploading.error.serverUnavailable:r.status>=500?i.error=this.i18n.uploading.error.unexpectedServerError:r.status>=400&&(i.error=this.i18n.uploading.error.forbidden),i.complete=!i.error,this.dispatchEvent(new CustomEvent(`upload-${i.error?"error":"success"}`,{detail:{file:i,xhr:r}})),this._renderFileList()}};const n=new FormData;if(i.uploadTarget=i.uploadTarget||this.target||"",i.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:i,xhr:r},cancelable:!0})))return;n.append(i.formDataName,i,i.name),r.open(this.method,i.uploadTarget,!0),this._configureXhr(r),i.status=this.i18n.uploading.status.connecting,i.uploading=i.indeterminate=!0,i.complete=i.abort=i.error=i.held=!1,r.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:i,xhr:r}})),this._renderFileList()},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:i,xhr:r,formData:n},cancelable:!0}))&&r.send(n)}_retryFileUpload(i){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:i,xhr:i.xhr},cancelable:!0}))&&this._uploadFile(i)}_abortFileUpload(i){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:i,xhr:i.xhr},cancelable:!0}))&&(i.abort=!0,i.xhr&&i.xhr.abort(),this._removeFile(i))}_renderFileList(){this._fileList&&this._fileList.requestContentUpdate()}_addFiles(i){Array.prototype.forEach.call(i,this._addFile.bind(this))}_addFile(i){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:i,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&i.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:i,error:this.i18n.error.fileIsTooBig}}));return}const o=this.__acceptRegexp;if(o&&!(o.test(i.type)||o.test(i.name))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:i,error:this.i18n.error.incorrectFileType}}));return}i.loaded=0,i.held=!0,i.status=this.i18n.uploading.status.held,this.files=[i,...this.files],this.noAuto||this._uploadFile(i)}_removeFile(i){this.files.indexOf(i)>-1&&(this.files=this.files.filter(o=>o!==i),this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:i},bubbles:!0,composed:!0})))}_onAddFilesTouchEnd(i){i.preventDefault(),this._onAddFilesClick(i)}_onAddFilesClick(i){this.maxFilesReached||(i.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(i){this._addFiles(i.target.files)}_onFileStart(i){this._uploadFile(i.detail.file)}_onFileRetry(i){this._retryFileUpload(i.detail.file)}_onFileAbort(i){this._abortFileUpload(i.detail.file)}_onFileReject(i){Ji(`${i.detail.file.name}: ${i.detail.error}`,{mode:"alert"})}_onUploadStart(i){Ji(`${i.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(i){Ji(`${i.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(i){Ji(`${i.detail.file.name}: ${i.detail.file.error}`,{mode:"alert"})}_dragoverChanged(i){i?this.setAttribute("dragover",i):this.removeAttribute("dragover")}_dragoverValidChanged(i){i?this.setAttribute("dragover-valid",i):this.removeAttribute("dragover-valid")}_i18nPlural(i,o){return i===1?o.one:o.many}_isMultiple(i){return i!==1}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xm extends Qm(cs(Ke(ls(Je)))){static get template(){return Xe`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <div part="primary-buttons">
        <slot name="add-button"></slot>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon"></slot>
          <slot name="drop-label"></slot>
        </div>
      </div>
      <slot name="file-list"></slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}}Pe(Xm);class ho extends it.with(ie,Yt){render(){return k`
      <sl-input id="create_identity_label" label="Add a Label" placeholder="Ex: social, career" pattern="^[a-zA-Z0-9]{3,}$" required></sl-input>
      <sl-button id="create_identity_button" variant="success" @click="${async t=>{const i=this.createIdentityLabel.value||"";if(!/^[a-zA-Z0-9]{3,}$/.test(i)){Jt.fireEvent(this,"invalid-label");return}if(this.createIdentityButton.loading)return!1;this.createIdentityButton.loading=!0;const r=await J.identity.create({dwnEndpoints:["http://localhost:3000"]});await J.identity.addAutofillDid(i+"@"+r.did.uri),Zt.addIdentities(r),this.createIdentityButton.loading=!1,Jt.fireEvent(this,"identity-created",{detail:{identity:r}})}}">
        Create
      </sl-button>
    `}}N(ho,"properties",{identities:{store:"page"}}),N(ho,"query",{createIdentityLabel:"#create_identity_label",createIdentityButton:"#create_identity_button"}),N(ho,"styles",[Se,P`
      #create_identity_button {
        display: block;
        margin: 1.5rem auto 0;
      }
    `]);customElements.define("create-identity",ho);class po extends it.with(ie,Yt,Hi){constructor(){super(),this.lastIdentityLabelSave=Date.now(),this.profileProtocolUri=encodeURIComponent(Ee.uri)}firstUpdated(){this.ready.state||this.startSpinner({target:"section",minimum:500,renderImmediate:!0}),this.ready.then(()=>{this.stopSpinner()})}toggleIdentityDetails(t){const i=t.currentTarget,o=i.closest("li").querySelector("detail-box");o.toggle(),i.firstElementChild.name=o.open?"chevron-up":"chevron-down"}generateEndpointItems(t,i,o){return(t.did.document.service||[]).reduce((r,s)=>{if(!r&&s.type==="DecentralizedWebNode"){let a=s.serviceEndpoint||[];a=Array.isArray(a)?a:[a],o&&(a=this.identityEndpointUpdate.endpoints=this.identityEndpointUpdate.endpoints||[...a]),r=i(a,t)}return r},null)}openEndpointModal(t){(!this.identityEndpointUpdate||this.identityEndpointUpdate.identity!==t)&&(this.identityEndpointUpdate={identity:t}),this.modifyEndpointsModal.show()}closeEndpointModal(){this.modifyEndpointsModal.hide()}async updateEndpoints(t){if(!this.identityEndpointUpdate)return;const{identity:i,endpoints:o}=this.identityEndpointUpdate;console.log(o);try{const r=await DWeb.did.update(i,s=>{const a=s.service.find(n=>n.type==="DecentralizedWebNode");a&&(a.serviceEndpoint=o.reduce((n,l)=>(l=l.trim(),l.length&&n.push(l),n),[])),a.serviceEndpoint=o});return t&&this.closeEndpointModal(),r}catch{}}async saveIdentityLabel(t,i){var s,a,n;console.log(t);let o=t.target.value.trim().toLowerCase(),r=((n=(a=(s=i.connectRecord)==null?void 0:s.cache)==null?void 0:a.json)==null?void 0:n.label)||"";o&&o!==r&&Date.now()>this.lastIdentityLabelSave+2e3&&(this.lastIdentityLabelSave=Date.now(),await Zt.saveIdentityLabel(i,o).then(l=>Ut.success("Your profile info was saved")).catch(l=>{l.target.value=r,Ut.error("There was an error saving your new label for this identity")}))}render(){var i;const t=Object.values(this.identities||{});return k`
      <section page-section>
        ${t!=null&&t.length?k`
            <h2>Identities</h2>
            <ul id="identity_list" limit-width>
              ${t.map(o=>{var s,a,n;const r=o.connectedDid;return k`
                <li>
                  <div flex="center-y">
                    <a href="/profiles/${r}">
                      <sl-avatar image="${o.avatar||`https://dweb/${r}/read/protocols/${this.profileProtocolUri}/avatar`}" shape="circle" size="small"></sl-avatar>
                      ${r}
                    </a> 
                    <sl-button detail-box-toggle circle size="small" @click="${this.toggleIdentityDetails}">
                      <sl-icon name="chevron-down"></sl-icon>
                    </sl-button>
                  </div>
                  <detail-box hide-toggle>
                    <div>
                      <div columns="2 labels-right">
                        <span>Identity Label:</span>
                        <div>
                          <sl-input size="small" value="${(n=(a=(s=o==null?void 0:o.connectRecord)==null?void 0:s.cache)==null?void 0:a.json)==null?void 0:n.label}" autocomplete="off" placeholder="Ex: social, career, family" 
                            @sl-input="${l=>l.target.value=l.target.value.trim().toLowerCase()}"
                            @sl-change="${l=>this.saveIdentityLabel(l,o)}"
                          ></sl-input>
                        </div>

                        <span>Backup:</span>
                        <div>
                          <sl-button size="small" @click="${l=>DWeb.identity.backup(o,{to:"file"})}">
                            <sl-icon slot="prefix" name="download"></sl-icon> Download identity backup
                          </sl-button>
                        </div>
                      </div>

                      <h3 flex="center-y">
                        <span>Datastore Locations</span>
                        <sl-icon-button name="pencil" variant="default" size="medium" @click="${l=>this.openEndpointModal(o)}"></sl-icon-button>
                      </h3>
                      ${this.generateEndpointItems(o,l=>k`<div>${l.join("<br>")}</div>`)}
                    </div>
                  </detail-box>
                </li>
              `})}
            </ul>
            <div id="create_restore_buttons" flex="center-x center-y">
              <sl-button id="create_identity_button" variant="success" size="small" @click="${o=>this.createIdentityModal.show()}">
                <sl-icon slot="prefix" name="person-plus"></sl-icon> Create an Identity
              </sl-button>
              <sl-button id="restore_identity_button" variant="primary" size="small" @click="${o=>Zt.restoreIdentityModal.show()}">
                <sl-icon slot="prefix" name="person-up"></sl-icon> Restore an Identity
              </sl-button>
            </div>
          `:k`
            <connect-widget></connect-widget>
          `}
      </section>

      <sl-dialog id="create_identity_modal" label="Create an Identity" placement="start" fit-content>
        <create-identity @identity-created="${o=>this.createIdentityModal.hide()}"></create-identity>
      </sl-dialog>

      <sl-dialog id="modify_endpoints_modal" label="Modify Endpoints" placement="start" @sl-after-hide="${o=>this.identityEndpointUpdate=null}">
        <div id="modify_endpoints_identity" flex="center-y">
          ${this.identityEndpointUpdate?k`
                <sl-avatar image="${((i=this.identityEndpointUpdate.identity)==null?void 0:i.avatar)||`https://dweb/${this.identityEndpointUpdate.identity.connectedDid}/read/protocols/${this.profileProtocolUri}/avatar`}" shape="circle" size="small"></sl-avatar>
                <div>${this.identityEndpointUpdate.identity.connectedDid}</div>
              `:D}
        </div>
        <p>This is an advanced feature to edit the datastore locations of the DID above. Do not change these values unless you know what you are doing.</p>
        <section>
          ${this.identityEndpointUpdate?this.generateEndpointItems(this.identityEndpointUpdate.identity,o=>o.map((r,s)=>k`
                  <div index="${s}" class="service-endpoint-entry" flex="center-y">

                    <sl-input class="service-endpoint-input" size="small" value="${r}" @input="${a=>{o[s]=a.target.value}}"></sl-input>

                    <sl-button class="remove-endpoint-button" size="small" @click="${a=>{o.splice(s,1),this.identityEndpointUpdate={...this.identityEndpointUpdate}}}">
                        <sl-icon slot="prefix" name="x-lg">
                      </sl-icon>
                    </sl-button>

                    <sl-button class="add-endpoint-button" size="small" @click="${a=>{o.push(""),this.identityEndpointUpdate={...this.identityEndpointUpdate}}}">
                      <sl-icon slot="prefix" name="plus-lg"></sl-icon>
                    </sl-button>
                  </div>
                `),!0):D}
        </section>
        <sl-button id="close_endpoints_button" slot="footer" @click="${async o=>this.closeEndpointModal()}">Close</sl-button>
        <sl-button id="submit_endpoints_button" slot="footer" variant="success" @click="${async o=>this.updateEndpoints(!0)}">Submit</sl-button>
      </sl-dialog>

      
    `}}N(po,"properties",{ready:{store:"page"},identities:{store:"page"},identityEndpointUpdate:{type:Object}}),N(po,"query",{createIdentityButton:"#create_identity_button",createIdentityModal:["#create_identity_modal",!0],restoreIdentityButton:"#restore_identity_button",modifyEndpointsModal:["#modify_endpoints_modal",!0]}),N(po,"styles",[Se,Fo,P`
      :host > section {
        
      }

      connect-widget {
        align-self: center;
      }

      #identity_list li {
        --border: 1px solid rgb(255 255 255 / 8%);
        list-style: none;
        border-bottom: var(--border);
      }

      #identity_list li:first-child {
        border-top: var(--border);
      } 

      #identity_list a {
        width: 100%;
        padding: 1.1rem 0 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: none;
        color: var(--sl-color-blue-700);
        cursor: pointer;
      }

      #identity_list sl-avatar {
        --size: 2.25rem;
        margin: 0 0.5rem 0 0;
      }

      #identity_list [detail-box-toggle] {
        margin: 0 0 0 0.75rem;
      }

      #identity_list detail-box {
        max-height: 0;
      }

      #identity_list detail-box > :first-child {
        margin-bottom: 1rem;
        padding: 1.2rem 1.1rem;
        background: rgb(183 192 254 / 4%);
        border: 1px solid rgb(183 192 254 / 9%);
        border-radius: 5px;
      }

      #identity_list detail-box h3 {
        margin: 1.75rem 0 1rem;
        border-bottom: 1px solid rgba(255 255 255 / 8%);
        padding: 0 0 0.25rem;
      }

      #identity_list detail-box h3 :not(span) {
        margin: 0 0 0 auto;
      }

      #create_restore_buttons {
        margin: 2rem 0 0;
      }

      #create_restore_buttons sl-button {
        margin: 0 0.5rem;
      }

    /* Modify Endpoints Dialog */

      #modify_endpoints_modal::part(panel) {
        max-width: 500px;
      }

      .service-endpoint-entry:not(:last-child) {
        margin-bottom: 1rem;
      }

      .service-endpoint-input {
        flex: 1;
        margin: 0;
      }

      .service-endpoint-input ~ sl-button {
        margin: 0 0 0 0.5rem;
      }

      .service-endpoint-entry sl-icon {
        stroke: currentColor;
      }

      .service-endpoint-entry .remove-endpoint-button::part(base) {
        color: #ff2e2e;
      }

      .service-endpoint-entry .add-endpoint-button::part(base) {
        color: #00ba00;
      }

      .service-endpoint-entry:not(:last-child) .add-endpoint-button {
        visibility: hidden;
        pointer-events: none;
      }

      #modify_endpoints_identity sl-avatar {
        --size: 2.25rem;
        margin: 0 0.6rem 0 0;
      }

      #modify_endpoints_identity div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      #modify_endpoints_modal p {
        margin: 1rem 0 1.5rem;
        color: var(--sl-color-red-700);
      }

      @media(max-width: 800px) {

      }
    `]);customElements.define("identities-page",po);vl();class Nr extends it.with(Vh,ie,Yt){constructor(){super(),this.router=globalThis.router=new qh(this,{onRouteChange:async(t,i)=>{var o;(o=this==null?void 0:this.nav)==null||o.removeAttribute("open")},routes:[{path:"/",component:"#identities"},{path:"/profiles(/)?:did?",component:"#find"},{path:"/dweb-connect(/.*)?",component:"#connect"}]})}async handleRestoreUpload(t){if(!(!this.restoreUploader||!this.restoreUploader.files.length)){try{const i=await J.identity.restore({from:"file",files:this.restoreUploader.files});i&&await App.addIdentities(i),this.restoreIdentityModal.hide()}catch(i){console.log(i)}this.restoreUploader.files=[]}}render(){var t;return k`

      <header id="header">
        <sl-icon id="nav_toggle" name="list" @click="${i=>{var o;return(o=this.nav)==null?void 0:o.toggleAttribute("open")}}"></sl-icon>
        <sl-icon id="logo_icon" name="app-logo"></sl-icon>
        <h1>Aliased</h1>
      </header>

      <nav id="nav" @click="${i=>{var o;return(o=this.nav)==null?void 0:o.removeAttribute("open")}}">
        <a href="/" ?active="${location.pathname==="/"}">
          <sl-icon slot="prefix" name="people"></sl-icon>
          My IDs
        </a>
        <a href="/profiles" ?active="${location.pathname.startsWith("/profiles")}">
          <sl-icon slot="prefix" name="search"></sl-icon>
          Find
        </a>
      </nav>

      <main id="pages">
        <find-page id="find" page="full-width"></find-page>
        <identities-page id="identities" page></identities-page>
        <connect-page id="connect" page></connect-page>
      </main>

      <sl-dialog id="connect_modal" label="Connect" placement="start" fit-content ?open="${((t=this==null?void 0:this.connectModal)==null?void 0:t.open)&&this.identity&&!1}">
        <connect-widget></connect-widget>
      </sl-dialog>

      <sl-dialog id="restore_identity_modal" label="Restore an Identity" placement="start" fit-content>
        <p>Upload or drop in a backup file to restore an identity.</p>
        <vaadin-upload
          id="restore_uploader"
          no-auto
          max-files="1"
          accept="text/json,application/json,.json"
          @files-changed="${this.handleRestoreUpload}"
        ></vaadin-upload>
      </sl-dialog>

      <pwa-badge></pwa-badge>

    `}}N(Nr,"query",{connectModal:["#connect_modal",!0],nav:["#nav",!0],pages:["#pages",!0],connectPage:["#connect",!0],profilePage:["#profile",!0],directoryPage:["#directory",!0],identitiesPage:["#identities",!0],restoreIdentityModal:["#restore_identity_modal",!0],restoreUploader:["#restore_uploader",!0]}),N(Nr,"styles",[Se,P`
      :host {
        --header-height: 3rem;
        --nav-width: 4.5rem;
        --content-height: calc(100vh - var(--header-height));
        --page-padding: 3rem 2.25rem;
      }

      #header {
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        height: var(--header-height);
        padding: 0 0.65rem;
        background: #17456d;
        box-shadow: 0 0 2px 2px rgba(0 0 0 / 25%);
        user-select: none;
        z-index: 2;
      }

      #nav_toggle {
        display: none;
        font-size: 1.75rem;
        margin: 0 0 0 -1.3rem;
        padding: 0 0.15em 0 0;
        opacity: 0.5;
        transition: opacity 0.3s ease;
        cursor: pointer;
      }

      #nav_toggle:hover {
        opacity: 1;
      }

      #logo_icon {
        /* Use the same hue value as the background color of the header */
        --background-color: 208; 
        font-size: 1.75rem;
      }

      #header h1 {
        margin: 0 auto -0.1rem 0.2rem;
        font-family: var(--app-font);
        font-size: 1.75rem;
        font-weight: normal
      }

      #header sl-avatar {
        --size: calc(var(--header-height) - 1rem);
      }

      :host-context(html.sl-scroll-lock) #pages {
        z-index: 3;
      } 

      #nav {
        position: fixed;
        bottom: 0;
        box-sizing: border-box;
        height: var(--content-height);
        width: var(--nav-width);
        padding: 0.6rem 0;
        background: var(--grey);
        border-right: 1px solid rgba(0 0 0 / 60%);
        text-align: center;
        transition: transform 0.3s ease;
        z-index: 1;
      }

        #nav:before {
          content: " ";
          position: fixed;
          top: 0;
          left: 100%;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          box-shadow: 2px 0 2px 1px rgba(0 0 0 / 25%);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        #nav[open]:before { 
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

      #nav a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 4rem;
        margin: 0 0 0.5rem;
        font-size: 0.75rem;
        color: rgba(255,255,255,0.75);
        border-right: 2px solid transparent;
        opacity: 0.6;
        transition: opacity 0.3s ease;
        text-decoration: none;
        cursor: pointer;
      }

      #nav *:is(sl-icon, sl-avatar) {
        margin: 0 0 0.2rem;
        font-size: 1.5rem;
        color: #fff;
      }

      #nav sl-avatar {
        --size: 1.55rem;
      }

      #nav sl-icon[name="search"] {
        margin: 0 0 0.3rem;
        font-size: 1.2rem;
      }

      #nav a:hover {
        opacity: 1;
      }

      #nav a[active] {
        opacity: 1;
        color: var(--sl-color-blue-700);
        border-right: 2px solid rgb(51 117 174);
      }

      #nav a[active] sl-icon {
        color: currentColor;
      }

      #pages {
        position: relative;
        margin: 0 0 0 var(--nav-width);
      }

      #pages > * {
        display: block;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        width: 100%;
        height: var(--content-height);
        padding: var(--page-padding);
        opacity: 0;
        visibility: hidden;
        transition: visibility 0.3s, opacity 0.3s ease;
        overflow-y: clip;
        z-index: -1;
      }

      #pages > [route-state="active"] {
        position: relative;
        height: auto;
        min-height: var(--content-height);
        opacity: 1;
        z-index: 0;
        visibility: visible;
        overflow: visible;
      }

      /* Restore Identity Dialog */

      vaadin-upload {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 8rem;
        border: 2px dashed rgba(255,255,255,0.2);
      }

      vaadin-upload::part(drop-label) {
        color: #fff;
      }

      vaadin-upload vaadin-button {
        color: #fff;
        background: var(--_lumo-button-primary-background);
        cursor: pointer;
      }

      @media(max-width: 800px) {
        #nav {
          top: var(--header-height);
          width: 150px;
          transform: translateX(-100%);
          z-index: 1;
        }
        #nav[open] {
          transform: translateX(0);
        }
        #nav a {
          flex-direction: row;
          justify-content: left;
          height: 3rem;
          margin: 0.5rem 0 0;
          font-size: 1rem;
        }
        #nav a > :first-child {
          display: flex;
          justify-content: center;
          width: 2rem;
          margin: 0 0.5rem 0 1rem;
        }
        #nav sl-avatar {
          --size: 1.55rem;
        }
        #pages {
          margin: 0; 
          overflow: visible;
        }

        #nav_toggle {
          display: unset;
        }
      }

      @media(max-width: 500px) {
        #pages > * {
          padding: 1.5rem 1.25rem 1rem;
        }

        #pages > [page~="full-width"] {
          padding: 0;
        }
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `]);customElements.define("app-view",Nr);
