function e(){import("data:text/javascript,")}import{d as t,S as o,U as s,V as r,u as n,W as i,c as a,R as m}from"../js/@vue/@vue.54b7059a.js";import{z as c,C as l,A as d}from"../js/ant-design-vue/ant-design-vue.32ecda21.js";import{c as p,a as u}from"../js/vue-router/vue-router.776b02fb.js";import"../js/@ant-design/@ant-design.178a37db.js";import"../js/@ctrl/@ctrl.3615f45e.js";import"../js/@babel/@babel.0c9a8266.js";import"../js/resize-observer-polyfill/resize-observer-polyfill.037b8af2.js";import"../js/@emotion/@emotion.a536cd72.js";import"../js/stylis/stylis.8fbe1db9.js";import"../js/scroll-into-view-if-needed/scroll-into-view-if-needed.da7859eb.js";import"../js/compute-scroll-into-view/compute-scroll-into-view.392d72fc.js";import"../js/vue-types/vue-types.4bd1e607.js";import"../js/dom-align/dom-align.23508945.js";import"../js/lodash-es/lodash-es.b60cffc3.js";import"../js/dayjs/dayjs.986b07a2.js";import"../js/async-validator/async-validator.21881447.js";import"../js/throttle-debounce/throttle-debounce.b4a3505b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f=t({__name:"App",setup:e=>(e,t)=>{const m=i("router-view");return o(),s(n(l),{locale:n(c),theme:{token:{colorPrimary:"#00b96b"}}},{default:r((()=>[a(m)])),_:1},8,["locale"])}}),j={},_=function(e,t,o){if(!t||0===t.length)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in j)return;j[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!o)for(let o=s.length-1;o>=0;o--){const r=s[o];if(r.href===e&&(!t||"stylesheet"===r.rel))return}else if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((t,o)=>{n.addEventListener("load",t),n.addEventListener("error",(()=>o(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e()))},h=[{path:"/",name:"index",redirect:"/home",component:()=>_((()=>import("../js/views/index.5c5e1f35.js")),["js/views/index.5c5e1f35.js","js/vue-router/vue-router.776b02fb.js","js/@vue/@vue.54b7059a.js","js/@ant-design/@ant-design.178a37db.js","js/@ctrl/@ctrl.3615f45e.js","js/ant-design-vue/ant-design-vue.32ecda21.js","js/@babel/@babel.0c9a8266.js","js/resize-observer-polyfill/resize-observer-polyfill.037b8af2.js","js/@emotion/@emotion.a536cd72.js","js/stylis/stylis.8fbe1db9.js","js/scroll-into-view-if-needed/scroll-into-view-if-needed.da7859eb.js","js/compute-scroll-into-view/compute-scroll-into-view.392d72fc.js","js/vue-types/vue-types.4bd1e607.js","js/dom-align/dom-align.23508945.js","js/lodash-es/lodash-es.b60cffc3.js","js/dayjs/dayjs.986b07a2.js","js/async-validator/async-validator.21881447.js","js/throttle-debounce/throttle-debounce.b4a3505b.js","assets/ant-design-vue.913672ff.css","js/_plugin-vue_export-helper/_plugin-vue_export-helper.0ba25e0a.js","assets/index.99209665.css"]),children:[{path:"/home",name:"home",component:()=>_((()=>import("../js/home/index.45c33dc1.js")),["js/home/index.45c33dc1.js","js/@vue/@vue.54b7059a.js","js/_plugin-vue_export-helper/_plugin-vue_export-helper.0ba25e0a.js","assets/index.a96cbb67.css"])},{path:"/guestbook",name:"guestbook",component:()=>_((()=>import("../js/guestbook/index.69e58aaf.js")),["js/guestbook/index.69e58aaf.js","js/@vue/@vue.54b7059a.js"])},{path:"/message",name:"message",component:()=>_((()=>import("../js/message/index.843e7e7c.js")),["js/message/index.843e7e7c.js","js/@vue/@vue.54b7059a.js"])},{path:"/intro",name:"intro",component:()=>_((()=>import("../js/intro/index.20969b1f.js")),["js/intro/index.20969b1f.js","js/vue-router/vue-router.776b02fb.js","js/@vue/@vue.54b7059a.js","js/@ant-design/@ant-design.178a37db.js","js/@ctrl/@ctrl.3615f45e.js","js/ant-design-vue/ant-design-vue.32ecda21.js","js/@babel/@babel.0c9a8266.js","js/resize-observer-polyfill/resize-observer-polyfill.037b8af2.js","js/@emotion/@emotion.a536cd72.js","js/stylis/stylis.8fbe1db9.js","js/scroll-into-view-if-needed/scroll-into-view-if-needed.da7859eb.js","js/compute-scroll-into-view/compute-scroll-into-view.392d72fc.js","js/vue-types/vue-types.4bd1e607.js","js/dom-align/dom-align.23508945.js","js/lodash-es/lodash-es.b60cffc3.js","js/dayjs/dayjs.986b07a2.js","js/async-validator/async-validator.21881447.js","js/throttle-debounce/throttle-debounce.b4a3505b.js","assets/ant-design-vue.913672ff.css","js/_plugin-vue_export-helper/_plugin-vue_export-helper.0ba25e0a.js","assets/index.a33ca420.css"])},{path:"/community",name:"community",component:()=>_((()=>import("../js/community/index.be37f59f.js")),["js/community/index.be37f59f.js","js/@vue/@vue.54b7059a.js"])},{path:"/mine",name:"mine",component:()=>_((()=>import("../js/mine/index.a80949a3.js")),["js/mine/index.a80949a3.js","js/@vue/@vue.54b7059a.js"])}]}],b=p({history:u(),routes:h});b.beforeEach(((e,t,o)=>{o()}));m(f).use(d).use(b).mount("#app");export{e as __vite_legacy_guard};