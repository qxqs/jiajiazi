System.register(["../js/@vue-legacy/@vue.258468b2.js","../js/ant-design-vue-legacy/ant-design-vue.952c6b65.js","../js/vue-router-legacy/vue-router.70af6f07.js","../js/@ant-design-legacy/@ant-design.6849cf5b.js","../js/@ctrl-legacy/@ctrl.236e78e4.js","../js/@babel-legacy/@babel.7dbd55a0.js","../js/resize-observer-polyfill-legacy/resize-observer-polyfill.e2f9d41c.js","../js/@emotion-legacy/@emotion.e10dbee5.js","../js/stylis-legacy/stylis.b5a7da98.js","../js/scroll-into-view-if-needed-legacy/scroll-into-view-if-needed.debf9e99.js","../js/compute-scroll-into-view-legacy/compute-scroll-into-view.55d0750f.js","../js/vue-types-legacy/vue-types.7a3eb124.js","../js/dom-align-legacy/dom-align.5f515dbf.js","../js/lodash-es-legacy/lodash-es.2ccb8d50.js","../js/dayjs-legacy/dayjs.3e31b65a.js","../js/async-validator-legacy/async-validator.c0fe6c8e.js","../js/throttle-debounce-legacy/throttle-debounce.25ab1bae.js"],(function(e,n){"use strict";var t,o,s,a,i,r,m,c,l,d,u,b,y,j=document.createElement("style");return j.textContent="*{margin:0;padding:0;box-sizing:border-box}p{margin:0;line-height:30px}html,body,#app{height:100%;background-color:#f5f5f5!important}:where(.css-dev-only-do-not-override-hnzzmb).ant-menu .ant-menu-item,:where(.css-dev-only-do-not-override-hnzzmb).ant-menu .ant-menu-submenu,:where(.css-dev-only-do-not-override-hnzzmb).ant-menu .ant-menu-submenu-title{border-radius:0}:where(.css-dev-only-do-not-override-hnzzmb).ant-menu-inline .ant-menu-item,:where(.css-dev-only-do-not-override-hnzzmb).ant-menu-vertical .ant-menu-item,:where(.css-dev-only-do-not-override-hnzzmb).ant-menu-inline .ant-menu-submenu-title,:where(.css-dev-only-do-not-override-hnzzmb).ant-menu-vertical .ant-menu-submenu-title{margin:0;width:100%}:where(.css-dev-only-do-not-override-hnzzmb).ant-menu-light.ant-menu-inline .ant-menu-selected:after,:where(.css-dev-only-do-not-override-hnzzmb).ant-menu-light.ant-menu-inline .ant-menu-item-selected:after{background:#00b96b;width:2px}\n",document.head.appendChild(j),{setters:[e=>{t=e.d,o=e.S,s=e.U,a=e.V,i=e.u,r=e.W,m=e.c,c=e.R},e=>{l=e.z,d=e.C,u=e.A},e=>{b=e.c,y=e.a},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const e=t({__name:"App",setup:e=>(e,n)=>{const t=r("router-view");return o(),s(i(d),{locale:i(l),theme:{token:{colorPrimary:"#00b96b"}}},{default:a((()=>[m(t)])),_:1},8,["locale"])}}),j=function(e,n,t){return e()},g=[{path:"/",name:"index",redirect:"/home",component:()=>j((()=>n.import("../js/views/index-legacy.4565a319.js"))),children:[{path:"/home",name:"home",component:()=>j((()=>n.import("../js/home/index-legacy.457c0b9d.js")))},{path:"/guestbook",name:"guestbook",component:()=>j((()=>n.import("../js/guestbook/index-legacy.19a7479e.js")))},{path:"/message",name:"message",component:()=>j((()=>n.import("../js/message/index-legacy.52e3b73d.js")))},{path:"/intro",name:"intro",component:()=>j((()=>n.import("../js/intro/index-legacy.f76e78ec.js")))},{path:"/community",name:"community",component:()=>j((()=>n.import("../js/community/index-legacy.802d75b9.js")))},{path:"/mine",name:"mine",component:()=>j((()=>n.import("../js/mine/index-legacy.06c92e63.js")))}]}],h=b({history:y(),routes:g});h.beforeEach(((e,n,t)=>{t()})),c(e).use(u).use(h).mount("#app")}}}));