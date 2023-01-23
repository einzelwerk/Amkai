(()=>{var e,t,r,n,o,i,a,s={8:()=>{document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(e.currentTarget.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))},2:()=>{document.documentElement.style.setProperty("--header-height","".concat(document.querySelector(".header").offsetHeight,"px"))},426:()=>{document.querySelectorAll(".mobile-nav__arrow").forEach((function(e){e.addEventListener("click",(function(e){e.currentTarget.closest(".mobile-nav__item").querySelector(".mobile-sub").classList.toggle("opened")}))}))},446:()=>{function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}new(function(){function t(e,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.btn=e,this.menu=r,this.state=!1,this.listener()}var r,n;return r=t,(n=[{key:"listener",value:function(){var e=this;document.addEventListener("click",(function(t){e.state&&e.btn.contains(t.target)?e.closeNav():!e.state&&e.btn.contains(t.target)&&e.openNav()}))}},{key:"openNav",value:function(){this.state=!0,this.menu.classList.add("opened"),this.btn.classList.add("opened"),this.btn.querySelector("svg use").setAttribute("xlink:href","sprite.svg#close_sprite"),this.btn.setAttribute("aria-expanded",!0),this.btn.setAttribute("aria-label","Menü schließen")}},{key:"closeNav",value:function(){this.state=!1,this.menu.classList.remove("opened"),this.btn.classList.remove("opened"),this.btn.querySelector("svg use").setAttribute("xlink:href","sprite.svg#mobile_sprite"),this.btn.setAttribute("aria-expanded",!1),this.btn.setAttribute("aria-label","Menü öffnen")}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}())(document.querySelector(".js-open-mobile-menu"),document.querySelector("#mobile-nav"))},860:()=>{var e=0,t=document.querySelector(".header");window.addEventListener("scroll",(function(){if(window.matchMedia("(min-width:1024px)").matches)if(window.scrollY>600){var r=window.pageYOffset||document.documentElement.scrollTop;r>e?(t.classList.remove("fixed"),document.documentElement.style.setProperty("--header-top-gap","0")):(t.classList.add("fixed"),document.documentElement.style.setProperty("--header-top-gap","var(--header-height)")),e=r<=0?0:r}else t.classList.remove("fixed")}))},218:()=>{document.querySelectorAll(".js-play-video").forEach((function(e){var t=e;t.addEventListener("click",(function(){var e=t.closest(".video").querySelector("video");e.paused?(e.play(),e.setAttribute("controls",!0),t.style.display="none"):(e.pause(),e.removeAttribute("controls",!0),t.style.display="")}))}))},905:(e,t,r)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r(208),r(2),r(218);var o=document.querySelector(".js-attached-files"),i=new DataTransfer,a=document.querySelector(".attached-files-area"),s=document.querySelector(".main-form__label-file");function c(e,t,r){r.stopPropagation();var n=function(e,t){var r=e.previousElementSibling;return r&&r.matches(t)?r:null}(t,".attached-files__item-name").innerHTML;t.closest(".attached-files__item").remove();for(var a=0;a<e.items.length;a+=1)n===i.items[a].getAsFile().name&&e.items.remove(a);o.files=e.files,l(e)}function l(e){e.files.length>0?(s.classList.add("has-files"),a.classList.add("has-files")):(s.classList.remove("has-files"),a.classList.remove("has-files")),document.querySelectorAll(".attached-files__item-delete").forEach((function(e){e.addEventListener("click",(function(t){return c(i,e,t)})),e.addEventListener("keydown",(function(t){" "===t.key&&(c(i,e),t.preventDefault())}))}))}null==o||o.addEventListener("change",(function(e){return function(e){for(var t=0;t<e.target.files.length;t+=1){var r="<span class='attached-files__item-name'>".concat(e.target.files[t].name,"</span>"),o=document.createElement("span");o.classList.add("attached-files__item");var a=document.querySelector(".attached-files");o.insertAdjacentHTML("beforeend",r),o.insertAdjacentHTML("beforeend",'<span class="attached-files__item-delete" role="button" tabindex="0" title="Datei löschen">'.concat('\n<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <g clip-path="url(#clip0_970_5261)">\n  <path d="M6.58691 6.74731L9.41534 9.57574" stroke="#0B0F16" stroke-linecap="round"/>\n  <path d="M9.41504 6.74731L6.58661 9.57574" stroke="#0B0F16" stroke-linecap="round"/>\n  <circle cx="8.00065" cy="7.99992" r="6.16667" stroke="#0B0F16"/>\n  </g>\n  <defs>\n  <clipPath id="clip0_970_5261">\n  <rect width="16" height="16" fill="white"/>\n  </clipPath>\n  </defs>\n</svg>      \n\n',"</span>")),a.append(o)}var s,c=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw a}}}}(e.target.files);try{for(c.s();!(s=c.n()).done;){var d=s.value;i.items.add(d)}}catch(e){c.e(e)}finally{c.f()}e.target.files=i.files,l(i)}(e)})),r(860),r(8),r(426),r(446),r(566)},783:(e,t,r)=>{"use strict";var n=r(618),o=Object.create(null),i="undefined"==typeof document,a=Array.prototype.forEach;function s(){}function c(e,t){if(!t){if(!e.href)return;t=e.href.split("?")[0]}if(d(t)&&!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var r=e.cloneNode();r.isLoaded=!1,r.addEventListener("load",(function(){r.isLoaded||(r.isLoaded=!0,e.parentNode.removeChild(e))})),r.addEventListener("error",(function(){r.isLoaded||(r.isLoaded=!0,e.parentNode.removeChild(e))})),r.href="".concat(t,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(r,e.nextSibling):e.parentNode.appendChild(r)}}function l(){var e=document.querySelectorAll("link");a.call(e,(function(e){!0!==e.visited&&c(e)}))}function d(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,t){if(i)return console.log("no window.document found, will not HMR CSS"),s;var r,u,f=function(e){var t=o[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var r=document.getElementsByTagName("script"),i=r[r.length-1];i&&(t=i.src)}o[e]=t}return function(e){if(!t)return null;var r=t.split(/([^\\/]+)\.js$/),o=r&&r[1];return o&&e?e.split(",").map((function(e){var r=new RegExp("".concat(o,"\\.js$"),"g");return n(t.replace(r,"".concat(e.replace(/{fileName}/g,o),".css")))})):[t.replace(".js",".css")]}}(e);return r=function(){var e=f(t.filename),r=function(e){if(!e)return!1;var t=document.querySelectorAll("link"),r=!1;return a.call(t,(function(t){if(t.href){var o=function(e,t){var r;return e=n(e),t.some((function(n){e.indexOf(t)>-1&&(r=n)})),r}(t.href,e);d(o)&&!0!==t.visited&&o&&(c(t,o),r=!0)}})),r}(e);if(t.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void l();r?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),l())},50,u=0,function(){var e=this,t=arguments,n=function(){return r.apply(e,t)};clearTimeout(u),u=setTimeout(n,50)}}},618:e=>{"use strict";e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var t=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",r=e.replace(new RegExp(t,"i"),"").split("/"),n=r[0].toLowerCase().replace(/\.$/,"");return r[0]="",t+n+r.reduce((function(e,t){switch(t){case"..":e.pop();break;case".":break;default:e.push(t)}return e}),[]).join("/")}},208:(e,t,r)=>{"use strict";var n=r(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},566:(e,t,r)=>{var n={"./back_sprite.svg":63,"./card_sprite.svg":180,"./caret_sprite.svg":575,"./clip_sprite.svg":702,"./close_sprite.svg":135,"./mobile_sprite.svg":450,"./play_sprite.svg":998,"./plus_sprite.svg":992,"./upload_sprite.svg":456};function o(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=566},63:(e,t,r)=>{"use strict";e.exports=r.p+"assets/icons/back_sprite.svg"},180:(e,t,r)=>{"use strict";e.exports=r.p+"assets/icons/card_sprite.svg"},575:(e,t,r)=>{"use strict";e.exports=r.p+"assets/icons/caret_sprite.svg"},702:(e,t,r)=>{"use strict";e.exports=r.p+"assets/icons/clip_sprite.svg"},135:(e,t,r)=>{"use strict";e.exports=r.p+"assets/icons/close_sprite.svg"},450:(e,t,r)=>{"use strict";e.exports=r.p+"assets/icons/mobile_sprite.svg"},998:(e,t,r)=>{"use strict";e.exports=r.p+"assets/icons/play_sprite.svg"},992:(e,t,r)=>{"use strict";e.exports=r.p+"assets/icons/plus_sprite.svg"},456:(e,t,r)=>{"use strict";e.exports=r.p+"assets/icons/upload_sprite.svg"}},c={};function l(e){var t=c[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var r=c[e]={id:e,exports:{}};try{var n={id:e,module:r,factory:s[e],require:l};l.i.forEach((function(e){e(n)})),r=n.module,n.factory.call(r.exports,r,r.exports,n.require)}catch(e){throw r.error=e,e}return r.exports}l.m=s,l.c=c,l.i=[],l.hu=e=>e+"."+l.h()+".hot-update.js",l.miniCssF=e=>{},l.hmrF=()=>"main."+l.h()+".hot-update.json",l.h=()=>"5b358a33a629810408c1",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="html-layout:",l.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var a,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+o){a=u;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[n];var f=(t,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}},(()=>{var e,t,r,n={},o=l.c,i=[],a=[],s="idle",c=0,d=[];function u(e){s=e;for(var t=[],r=0;r<a.length;r++)t[r]=a[r].call(null,e);return Promise.all(t)}function f(){0==--c&&u("ready").then((function(){if(0===c){var e=d;d=[];for(var t=0;t<e.length;t++)e[t]()}}))}function p(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return u("check").then(l.hmrM).then((function(r){return r?u("prepare").then((function(){var n=[];return t=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,o){return l.hmrC[o](r.c,r.r,r.m,e,t,n),e}),[])).then((function(){return t=function(){return e?v(e):u("ready").then((function(){return n}))},0===c?t():new Promise((function(e){d.push((function(){e(t())}))}));var t}))})):u(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+s+")")})):v(e)}function v(e){e=e||{},m();var n=t.map((function(t){return t(e)}));t=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var i=u("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var a,s=u("apply"),c=function(e){a||(a=e)},l=[];return n.forEach((function(e){if(e.apply){var t=e.apply(c);if(t)for(var r=0;r<t.length;r++)l.push(t[r])}})),Promise.all([i,s]).then((function(){return a?u("fail").then((function(){throw a})):r?v(e).then((function(e){return l.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):u("idle").then((function(){return l}))}))}function m(){if(r)return t||(t=[]),Object.keys(l.hmrI).forEach((function(e){r.forEach((function(r){l.hmrI[e](r,t)}))})),r=void 0,!0}l.hmrD=n,l.i.push((function(d){var v,m,y,g,b=d.module,_=function(t,r){var n=o[r];if(!n)return t;var a=function(a){if(n.hot.active){if(o[a]){var s=o[a].parents;-1===s.indexOf(r)&&s.push(r)}else i=[r],e=a;-1===n.children.indexOf(a)&&n.children.push(a)}else console.warn("[HMR] unexpected require("+a+") from disposed module "+r),i=[];return t(a)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var d in t)Object.prototype.hasOwnProperty.call(t,d)&&"e"!==d&&Object.defineProperty(a,d,l(d));return a.e=function(e){return function(e){switch(s){case"ready":u("prepare");case"prepare":return c++,e.then(f,f),e;default:return e}}(t.e(e))},a}(d.require,d.id);b.hot=(v=d.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){i=m.parents.slice(),e=y?void 0:v,l(v)},active:!0,accept:function(e,t,r){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)g._acceptedDependencies[e[n]]=t||function(){},g._acceptedErrorHandlers[e[n]]=r;else g._acceptedDependencies[e]=t||function(){},g._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._declinedDependencies[e[t]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=g._disposeHandlers.indexOf(e);t>=0&&g._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":t=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](v,t)})),u("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](v,t)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return s;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var t=a.indexOf(e);t>=0&&a.splice(t,1)},data:n[v]},e=void 0,g),b.parents=i,b.children=[],i=[],d.require=_})),l.hmrC={},l.hmrI={}})(),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e+"../"})(),r=(e,t,r,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,o.parentNode.removeChild(o),n(c)}},o.href=t,document.head.appendChild(o),o},n=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===e||o===t)return a}},o=[],i=[],a=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var t=o[e];t.parentNode&&t.parentNode.removeChild(t)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),l.hmrC.miniCss=(e,t,s,c,d,u)=>{d.push(a),e.forEach((e=>{var t=l.miniCssF(e),a=l.p+t,s=n(t,a);s&&c.push(new Promise(((t,n)=>{var c=r(e,a,(()=>{c.as="style",c.rel="preload",t()}),n);o.push(s),i.push(c)})))}))},(()=>{var e,t,r,n,o,i=l.hmrS_jsonp=l.hmrS_jsonp||{179:0},a={};function s(t,r){return e=r,new Promise(((e,r)=>{a[t]=e;var n=l.p+l.hu(t),o=new Error;l.l(n,(e=>{if(a[t]){a[t]=void 0;var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+t+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,r(o)}}))}))}function c(e){function a(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,a=o.chain,c=l.c[i];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var d=0;d<c.parents.length;d++){var u=c.parents[d],f=l.c[u];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(f.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),s(r[u],[i])):(delete r[u],t.push(u),n.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}l.f&&delete l.f.jsonpHmr,t=void 0;var c={},d=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(l.o(r,p)){var h,v=r[p],m=!1,y=!1,g=!1,b="";switch((h=v?a(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in u[p]=v,s(d,h.outdatedModules),h.outdatedDependencies)l.o(h.outdatedDependencies,p)&&(c[p]||(c[p]=[]),s(c[p],h.outdatedDependencies[p]));g&&(s(d,[h.moduleId]),u[p]=f)}r=void 0;for(var _,w=[],E=0;E<d.length;E++){var x=d[E],k=l.c[x];k&&(k.hot._selfAccepted||k.hot._main)&&u[x]!==f&&!k.hot._selfInvalidated&&w.push({module:x,require:k.hot._requireSelf,errorHandler:k.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var t,r=d.slice();r.length>0;){var o=r.pop(),a=l.c[o];if(a){var s={},u=a.hot._disposeHandlers;for(E=0;E<u.length;E++)u[E].call(null,s);for(l.hmrD[o]=s,a.hot.active=!1,delete l.c[o],delete c[o],E=0;E<a.children.length;E++){var f=l.c[a.children[E]];f&&(e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1)}}}for(var p in c)if(l.o(c,p)&&(a=l.c[p]))for(_=c[p],E=0;E<_.length;E++)t=_[E],(e=a.children.indexOf(t))>=0&&a.children.splice(e,1)},apply:function(t){for(var r in u)l.o(u,r)&&(l.m[r]=u[r]);for(var n=0;n<o.length;n++)o[n](l);for(var i in c)if(l.o(c,i)){var a=l.c[i];if(a){_=c[i];for(var s=[],f=[],p=[],h=0;h<_.length;h++){var v=_[h],m=a.hot._acceptedDependencies[v],y=a.hot._acceptedErrorHandlers[v];if(m){if(-1!==s.indexOf(m))continue;s.push(m),f.push(y),p.push(v)}}for(var g=0;g<s.length;g++)try{s[g].call(null,_)}catch(r){if("function"==typeof f[g])try{f[g](r,{moduleId:i,dependencyId:p[g]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[g],error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[g],error:r}),e.ignoreErrored||t(r)}}}for(var b=0;b<w.length;b++){var E=w[b],x=E.module;try{E.require(x)}catch(r){if("function"==typeof E.errorHandler)try{E.errorHandler(r,{moduleId:x,module:l.c[x]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:x,error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:x,error:r}),e.ignoreErrored||t(r)}}return d}}}self.webpackHotUpdatehtml_layout=(t,n,i)=>{for(var s in n)l.o(n,s)&&(r[s]=n[s],e&&e.push(s));i&&o.push(i),a[t]&&(a[t](),a[t]=void 0)},l.hmrI.jsonp=function(e,t){r||(r={},o=[],n=[],t.push(c)),l.o(r,e)||(r[e]=l.m[e])},l.hmrC.jsonp=function(e,a,d,u,f,p){f.push(c),t={},n=a,r=d.reduce((function(e,t){return e[t]=!1,e}),{}),o=[],e.forEach((function(e){l.o(i,e)&&void 0!==i[e]?(u.push(s(e,p)),t[e]=!0):t[e]=!1})),l.f&&(l.f.jsonpHmr=function(e,r){t&&l.o(t,e)&&!t[e]&&(r.push(s(e)),t[e]=!0)})},l.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),l(905)})();