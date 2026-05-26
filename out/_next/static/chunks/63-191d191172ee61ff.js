"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63],{38028:function(e,t,n){n.d(t,{Nq:function(){return i},rg:function(){return u}});var r=n(64090);let o=(0,r.createContext)(null);function u(e){let{clientId:t,nonce:n,locale:u,onScriptLoadSuccess:i,onScriptLoadError:c,children:l}=e,a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{nonce:t,locale:n,onScriptLoadSuccess:o,onScriptLoadError:u}=e,[i,c]=(0,r.useState)(!1),l=(0,r.useRef)(o);l.current=o;let a=(0,r.useRef)(u);return a.current=u,(0,r.useEffect)(()=>{let e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",n&&(e.src+="?hl=".concat(n)),e.async=!0,e.defer=!0,e.nonce=t,e.onload=()=>{var e;c(!0),null===(e=l.current)||void 0===e||e.call(l)},e.onerror=()=>{var e;c(!1),null===(e=a.current)||void 0===e||e.call(a)},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[t]),i}({nonce:n,onScriptLoadSuccess:i,onScriptLoadError:c,locale:u}),f=(0,r.useMemo)(()=>({locale:u,clientId:t,scriptLoadedSuccessfully:a}),[t,a]);return r.createElement(o.Provider,{value:f},l)}function i(e){let{flow:t="implicit",scope:n="",onSuccess:u,onError:i,onNonOAuthError:c,overrideScope:l,state:a,...f}=e,{clientId:d,scriptLoadedSuccessfully:s}=function(){let e=(0,r.useContext)(o);if(!e)throw Error("Google OAuth components must be used within GoogleOAuthProvider");return e}(),h=(0,r.useRef)(),y=(0,r.useRef)(u);y.current=u;let p=(0,r.useRef)(i);p.current=i;let v=(0,r.useRef)(c);v.current=c,(0,r.useEffect)(()=>{var e,r;if(!s)return;let o="implicit"===t?"initTokenClient":"initCodeClient",u=null===(r=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===r?void 0:r.oauth2[o]({client_id:d,scope:l?n:"openid profile email ".concat(n),callback:e=>{var t,n;if(e.error)return null===(t=p.current)||void 0===t?void 0:t.call(p,e);null===(n=y.current)||void 0===n||n.call(y,e)},error_callback:e=>{var t;null===(t=v.current)||void 0===t||t.call(v,e)},state:a,...f});h.current=u},[d,s,t,n,a]);let k=(0,r.useCallback)(e=>{var t;return null===(t=h.current)||void 0===t?void 0:t.requestAccessToken(e)},[]),m=(0,r.useCallback)(()=>{var e;return null===(e=h.current)||void 0===e?void 0:e.requestCode()},[]);return"implicit"===t?k:m}},18025:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},95160:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]])},51472:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]])},97336:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]])},80037:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},6370:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]])},51930:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]])},37841:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},18994:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},90684:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},79744:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},78798:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]])},77326:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]])},75879:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]])},52235:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.345.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},49079:function(e,t,n){var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(13127)},13127:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function u(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===u||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:u}catch(e){t=u}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l=[],a=!1,f=-1;function d(){a&&r&&(a=!1,r.length?l=r.concat(l):f=-1,l.length&&s())}function s(){if(!a){var e=c(d);a=!0;for(var t=l.length;t;){for(r=l,l=[];++f<t;)r&&r[f].run();f=-1,t=l.length}r=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||a||c(s)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}},i=!0;try{t[e](u,u.exports,r),i=!1}finally{i&&delete n[e]}return u.exports}r.ab="//";var o=r(229);e.exports=o}()},24602:function(e,t,n){n.d(t,{f:function(){return c}});var r=n(64090),o=n(29586),u=n(3827),i=r.forwardRef((e,t)=>(0,u.jsx)(o.WV.label,{...e,ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var c=i},29586:function(e,t,n){n.d(t,{WV:function(){return c},jH:function(){return l}});var r=n(64090),o=n(89542),u=n(59143),i=n(3827),c=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let n=(0,u.Z8)("Primitive.".concat(t)),o=r.forwardRef((e,r)=>{let{asChild:o,...u}=e,c=o?n:t;return window[Symbol.for("radix-ui")]=!0,(0,i.jsx)(c,{...u,ref:r})});return o.displayName="Primitive.".concat(t),{...e,[t]:o}},{});function l(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}}}]);