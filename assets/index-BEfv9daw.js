import{r as y,a2 as j,G as O,a3 as P,a4 as G,l as A,w as L,b as k,a5 as q}from"./index-DakTmPQa.js";function x(e){return P()?(G(e),!0):!1}function g(e){return typeof e=="function"?e():O(e)}const w=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const R=Object.prototype.toString,B=e=>R.call(e)==="[object Object]",D=()=>{};function F(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const r=t;t=void 0,r&&await r},n}function I(e,t,n={}){const{immediate:r=!0}=n,a=y(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function c(){a.value=!1,s()}function p(...l){s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...l)},g(t))}return r&&(a.value=!0,w&&p()),x(c),{isPending:j(a),start:p,stop:c}}function N(e){var t;const n=g(e);return(t=n==null?void 0:n.$el)!=null?t:n}const V=w?window:void 0,T=w?window.navigator:void 0;function E(...e){let t,n,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,a]=e,t=V):[t,n,r,a]=e,!t)return D;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const o=[],s=()=>{o.forEach(u=>u()),o.length=0},c=(u,f,v,m)=>(u.addEventListener(f,v,m),()=>u.removeEventListener(f,v,m)),p=L(()=>[N(t),g(a)],([u,f])=>{if(s(),!u)return;const v=B(f)?{...f}:f;o.push(...n.flatMap(m=>r.map(b=>c(u,m,b,v))))},{immediate:!0,flush:"post"}),l=()=>{p(),s()};return x(l),l}function $(){const e=y(!1),t=q();return t&&k(()=>{e.value=!0},t),e}function _(e){const t=$();return A(()=>(t.value,!!e()))}function C(e,t={}){const{controls:n=!1,navigator:r=T}=t,a=_(()=>r&&"permissions"in r);let o;const s=typeof e=="string"?{name:e}:e,c=y(),p=()=>{o&&(c.value=o.state)},l=F(async()=>{if(a.value){if(!o)try{o=await r.permissions.query(s),E(o,"change",p),p()}catch{c.value="prompt"}return o}});return l(),n?{state:c,isSupported:a,query:l}:c}function H(e={}){const{navigator:t=T,read:n=!1,source:r,copiedDuring:a=1500,legacy:o=!1}=e,s=_(()=>t&&"clipboard"in t),c=C("clipboard-read"),p=C("clipboard-write"),l=A(()=>s.value||o),u=y(""),f=y(!1),v=I(()=>f.value=!1,a);function m(){s.value&&S(c.value)?t.clipboard.readText().then(i=>{u.value=i}):u.value=W()}l.value&&n&&E(["copy","cut"],m);async function b(i=g(r)){l.value&&i!=null&&(s.value&&S(p.value)?await t.clipboard.writeText(i):M(i),u.value=i,f.value=!0,v.start())}function M(i){const d=document.createElement("textarea");d.value=i??"",d.style.position="absolute",d.style.opacity="0",document.body.appendChild(d),d.select(),document.execCommand("copy"),d.remove()}function W(){var i,d,h;return(h=(d=(i=document==null?void 0:document.getSelection)==null?void 0:i.call(document))==null?void 0:d.toString())!=null?h:""}function S(i){return i==="granted"||i==="prompt"}return{isSupported:l,text:u,copied:f,copy:b}}export{H as u};
