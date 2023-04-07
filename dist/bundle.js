(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),c=n(645),a=n.n(c)()(o());a.push([e.id,"* {\n    margin: 0px;\n    heading: 0px;\n    box-sizing: border-box;\n}\n\n#header {\n    border: 2px solid black;\n    display: flex;\n}",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],u=c[s]||0,l="".concat(s," ").concat(u);c[s]=u+1;var p=n(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var d=r(e,o),s=0;s<c.length;s++){var u=n(c[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}c=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"da0fb8d4740f14a1fe8b.jpeg";var t=n(379),r=n.n(t),o=n(795),c=n.n(o),a=n(569),i=n.n(a),d=n(565),s=n.n(d),u=n(216),l=n.n(u),p=n(589),m=n.n(p),f=n(426),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=l(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=document.querySelector("body");let y=document.createElement("div");y.setAttribute("id","content"),v.appendChild(y);const C=document.createElement("div");C.setAttribute("id","header"),v.appendChild(C);const b=()=>{document.querySelector("#content").remove(),y=document.createElement("div"),y.setAttribute("id","content"),v.appendChild(y)},g=document.createElement("button");g.textContent="Intro Page",g.addEventListener("click",(()=>{b(),(()=>{const t=document.querySelector("#content"),n=document.createElement("h1");n.textContent="OP's Only Porter Brewery";const r=document.createElement("div");r.textContent="come down and have a porter why not";const o=document.createElement("img");o.src=e,t.appendChild(n),t.appendChild(r),t.appendChild(o)})()})),C.appendChild(g);const x=document.createElement("button");x.textContent="Selection Page",x.addEventListener("click",(()=>{b(),(()=>{const e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="Check out these beers";const n=document.createElement("div");n.textContent="Beer 1";const r=document.createElement("div");r.textContent="Beer 2";const o=document.createElement("div");o.textContent="Beer 3",e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(o)})()})),C.appendChild(x);const E=document.createElement("button");E.textContent="Contact Page",E.addEventListener("click",(()=>{b(),(()=>{const e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="Contact:";const n=document.createElement("div"),r=document.createElement("div");r.classList.add("details"),r.textContent="47 beer st";const o=document.createElement("div");o.classList.add("details"),o.textContent="47-47-47",e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(o)})()})),C.appendChild(E)})()})();