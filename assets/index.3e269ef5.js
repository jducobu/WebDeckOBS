var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,s=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,o=(e,o)=>{for(var c in o||(o={}))t.call(o,c)&&s(e,c,o[c]);if(n)for(var c of n(o))r.call(o,c)&&s(e,c,o[c]);return e};import{r as c,a}from"./vendor.de62f314.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,o)=>{const c=new URL(e,r);if(self[t].moduleMap[c])return n(self[t].moduleMap[c]);const a=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){o(new Error(`Failed to import: ${e}`)),s(l)},onload(){n(self[t].moduleMap[c]),s(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("assets/");var l,i;async function u(e){const t=crypto.subtle||crypto.webkitSubtle,n=(new TextEncoder).encode(e),r=await t.digest("SHA-256",n),s=Array.from(new Uint8Array(r));return String.fromCharCode.apply(null,s)}(i=l||(l={})).OK="ok",i.ERROR="error";let m=1;class d extends class{constructor(){this.listeners={}}on(e,t){const n=this.listeners[e]||[];this.listeners[e]=[...n,t]}off(e,t){const n=this.listeners[e]||[];this.listeners[e]=n.filter((e=>e!==t))}emit(e,t){(this.listeners[e]||[]).forEach((e=>e(t)))}destroy(){this.listeners={}}}{constructor(){super(...arguments),this.messageCallbacks={}}connect(e="localhost:4444",t=""){const n=this;return new Promise((function(r,s){n.ws=new WebSocket(`ws://${e}`),n.ws.onopen=()=>{n.send("GetAuthRequired",{},(async function(e){const o=t+e.salt,c=btoa(await u(o)),a=btoa(await u(c+e.challenge));n.send("Authenticate",{auth:a},(e=>{e.status===l.ERROR&&s(e.error),r()}))}))},n.ws.onerror=e=>{s(e)},n.ws.onmessage=e=>{const t=JSON.parse(e.data),r=n.messageCallbacks[t["message-id"]];r&&r(t),t["update-type"]&&n.emit(t["update-type"],t)}}))}on(e,t){return super.on(e,t),()=>{super.off(e,t)}}send(e,t,n){const r=m++;n&&(this.messageCallbacks[r]=n),this.ws.send(JSON.stringify(o({"request-type":e,"message-id":r.toString()},t)))}destroy(){this.ws.close(),super.destroy()}}const f=c.createContext({scenes:[],obsRef:{current:new d},currentScene:""});function p(e,t){var n,r;let s=(null==(n=function(e){return c.useContext(f).scenes.find((t=>t.name===e))}(e))?void 0:n.sources)||[];return t&&(s=(null==(r=s.find((e=>e.name===t)))?void 0:r.groupChildren)||[]),s}function g(){return c.useContext(f).obsRef.current}function h({children:e,hostname:t,password:n}){const[r,s]=c.useState([]),[o,a]=c.useState(""),l=c.useRef(new d);return c.useEffect((function(){const e=l.current,r=e=>{a(e["scene-name"])};return e.connect(t,n).then((()=>{e.send("GetSceneList",{},(e=>{s(e.scenes),a(e["current-scene"])}))})),e.on("SwitchScenes",r),()=>{e.off("SwitchScenes",r)}}),[]),c.createElement(f.Provider,{value:{scenes:r,obsRef:l,currentScene:o}},e)}function b({children:e}){return c.createElement("div",{className:"grid"},e)}var y,w,E,v;function S(e){var{color:s=y.grey,children:a}=e,l=((e,s)=>{var o={};for(var c in e)t.call(e,c)&&s.indexOf(c)<0&&(o[c]=e[c]);if(null!=e&&n)for(var c of n(e))s.indexOf(c)<0&&r.call(e,c)&&(o[c]=e[c]);return o})(e,["color","children"]);const i=s!==y.grey?{background:`var(--${s})`}:void 0;return c.createElement("button",o({className:"button",style:i},l),a)}function R({name:e}){return c.createElement("ion-icon",{name:e})}function C({ignore:e="📦"}){const t=c.useContext(f).scenes;return c.createElement(c.Fragment,null,t.filter((t=>!t.name.startsWith(e))).map((e=>c.createElement(O,{key:e.name,scene:e.name}))))}function O({scene:e}){const t=c.useContext(f).currentScene,n=g();return c.createElement(S,{color:t===e?y.blue:void 0,onClick:()=>{n.send("SetCurrentScene",{"scene-name":e})}},c.createElement(R,{name:E.scene}),e)}(w=y||(y={})).blue="blue",w.red="red",w.yellow="yellow",w.purple="purple",w.green="green",w.grey="grey",(v=E||(E={})).scene="tv-outline",v.sound="musical-note-outline",v.music="musical-notes-outline";const j={"C'est nul":"assets/cest-nul.3d0c5824.jpg",Travail:"assets/travail.5d4d612e.jpg","ah !":"assets/denis.00354ae5.jpg",sad:"assets/sad.29e5cf6c.jpg",Ascenseur:"assets/elevator.ca4ce089.jpg"};function k({scene:e,group:t,icon:n}){const r=p(e,t);return c.createElement(c.Fragment,null,r.map((e=>c.createElement(x,{name:e.name,key:e.name,icon:n}))))}function x({name:e,icon:t=E.sound}){const n=g(),[r,s]=c.useState(!1);c.useEffect((()=>{const t=n.on("MediaRestarted",(t=>{t.sourceName===e&&s(!0)})),r=n.on("MediaEnded",(t=>{t.sourceName===e&&(s(!1),n.send("SetSceneItemProperties",{item:e,visible:!1}))}));return()=>{t(),r()}}));const o=j[e];return c.createElement(S,{color:r?y.green:y.purple,onClick:()=>{n.send("SetSceneItemProperties",{item:e,visible:!r})}},c.createElement(R,{name:t}),e,c.createElement("img",{src:o,alt:""}))}a.render(c.createElement(c.StrictMode,null,c.createElement(h,{hostname:"192.168.0.50:4444",password:"obscontrol"},c.createElement(b,null,c.createElement(C,null),c.createElement(k,{scene:"📦 Sounds",group:"Sounds"}),c.createElement(k,{scene:"📦 Sounds",group:"Music",icon:E.music})))),document.getElementById("root"));