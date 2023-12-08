System.register([],(function(t,e){"use strict";return{execute:function(){function e(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function o(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?e(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var i;t({a:it,b:
/**
       * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
       * If client position provided, will internal convert to page position.
       */
function(t,e,n){var r,i,a=I.getDocument(t),f=a.defaultView||a.parentWindow,l=I.getWindowScrollLeft(f),u=I.getWindowScrollTop(f),c=I.viewportWidth(f),s=I.viewportHeight(f);r="pageX"in e?e.pageX:l+e.clientX,i="pageY"in e?e.pageY:u+e.clientY;var p={left:r,top:i,width:0,height:0},d=r>=0&&r<=l+c&&i>=0&&i<=u+s,h=[n.points[0],"cc"];return rt(t,p,o(o({},n),{},{points:h}),d)}});var a={Webkit:"-webkit-",Moz:"-moz-",// IE did it wrong again ...
ms:"-ms-",O:"-o-"};function f(){if(void 0!==i)return i;i="";var t=document.createElement("p").style;for(var e in a)e+"Transform"in t&&(i=e);return i}function l(){return f()?"".concat(f(),"TransitionProperty"):"transitionProperty"}function u(){return f()?"".concat(f(),"Transform"):"transform"}function c(t,e){var o=l();o&&(t.style[o]=e,"transitionProperty"!==o&&(t.style.transitionProperty=e))}function s(t,e){var o=u();o&&(t.style[o]=e,"transform"!==o&&(t.style.transform=e))}var p,d=/matrix\((.*)\)/,h=/matrix3d\((.*)\)/;// https://stackoverflow.com/a/3485654/3040605
function g(t){var e=t.style.display;t.style.display="none",t.offsetHeight,// eslint-disable-line
t.style.display=e}function v(t,e,o){var r=o;if("object"!==n(e))return void 0!==r?("number"==typeof r&&(r="".concat(r,"px")),void(t.style[e]=r)):p(t,e);for(var i in e)e.hasOwnProperty(i)&&v(t,i,e[i])}function m(t,e){var o=t["page".concat(e?"Y":"X","Offset")],n="scroll".concat(e?"Top":"Left");if("number"!=typeof o){var r=t.document;// ie6,7,8 standard mode
"number"!=typeof(o=r.documentElement[n])&&(// quirks mode
o=r.body[n])}return o}function y(t){return m(t)}function w(t){return m(t,!0)}function b(t){var e=function(t){var e,o,n,r=t.ownerDocument,i=r.body,a=r&&r.documentElement;// 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
return e=t.getBoundingClientRect(),// 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
// 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
// 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
o=Math.floor(e.left),n=Math.floor(e.top),{left:// In IE, most of the time, 2 extra pixels are added to the top and left
// due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
// IE6 standards mode, this border can be overridden by setting the
// document element's border to zero -- thus, we cannot rely on the
// offset always being 2 pixels.
// In quirks mode, the offset can be determined by querying the body's
// clientLeft/clientTop, but in standards mode, it is found by querying
// the document element's clientLeft/clientTop.  Since we already called
// getClientBoundingRect we have already forced a reflow, so it is not
// too expensive just to query them all.
// ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
// 窗口边框标准是设 documentElement ,quirks 时设置 body
// 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
// 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
// 标准 ie 下 docElem.clientTop 就是 border-top
// ie7 html 即窗口边框改变不了。永远为 2
// 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
o-=a.clientLeft||i.clientLeft||0,top:n-=a.clientTop||i.clientTop||0}}(t),o=t.ownerDocument,n=o.defaultView||o.parentWindow;return e.left+=y(n),e.top+=w(n),e}
/**
       * A crude way of determining if an object is a window
       * @member util
       */function x(t){// must use == for ie8
/* eslint eqeqeq:0 */return null!=t&&t==t.window}function W(t){return x(t)?t.document:9===t.nodeType?t:t.ownerDocument}var O=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),P=/^(top|right|bottom|left)$/,S="currentStyle",j="runtimeStyle",T="left";function M(t,e){return"left"===t?e.useCssRight?"right":t:e.useCssBottom?"bottom":t}function C(t){return"left"===t?"right":"right"===t?"left":"top"===t?"bottom":"bottom"===t?"top":void 0}// 设置 elem 相对 elem.ownerDocument 的坐标
function D(t,e,o){// set position first, in-case top/left are set even on static elem
"static"===v(t,"position")&&(t.style.position="relative");var n=-999,r=-999,i=M("left",o),a=M("top",o),f=C(i),u=C(a);"left"!==i&&(n=999),"top"!==a&&(r=999);var s,p="",d=b(t);("left"in e||"top"in e)&&(p=(s=t).style.transitionProperty||s.style[l()]||"",c(t,"none")),"left"in e&&(t.style[f]="",t.style[i]="".concat(n,"px")),"top"in e&&(t.style[u]="",t.style[a]="".concat(r,"px")),// force relayout
g(t);var h=b(t),m={};for(var y in e)if(e.hasOwnProperty(y)){var w=M(y,o),x="left"===y?n:r,W=d[y]-h[y];m[w]=w===y?x+W:x-W}v(t,m),// force relayout
g(t),("left"in e||"top"in e)&&c(t,p);var O={};for(var P in e)if(e.hasOwnProperty(P)){var S=M(P,o),j=e[P]-d[P];O[S]=P===S?m[S]+j:m[S]-j}v(t,O)}function H(t,e){var o=b(t),n=function(t){var e=window.getComputedStyle(t,null),o=e.getPropertyValue("transform")||e.getPropertyValue(u());if(o&&"none"!==o){var n=o.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(n[12]||n[4],0),y:parseFloat(n[13]||n[5],0)}}return{x:0,y:0}}(t),r={x:n.x,y:n.y};"left"in e&&(r.x=n.x+e.left-o.left),"top"in e&&(r.y=n.y+e.top-o.top),function(t,e){var o=window.getComputedStyle(t,null),n=o.getPropertyValue("transform")||o.getPropertyValue(u());if(n&&"none"!==n){var r,i=n.match(d);i?((r=(i=i[1]).split(",").map((function(t){return parseFloat(t,10)})))[4]=e.x,r[5]=e.y,s(t,"matrix(".concat(r.join(","),")"))):((r=n.match(h)[1].split(",").map((function(t){return parseFloat(t,10)})))[12]=e.x,r[13]=e.y,s(t,"matrix3d(".concat(r.join(","),")")))}else s(t,"translateX(".concat(e.x,"px) translateY(").concat(e.y,"px) translateZ(0)"))}(t,r)}function V(t,e){for(var o=0;o<t.length;o++)e(t[o])}function X(t){return"border-box"===p(t,"boxSizing")}"undefined"!=typeof window&&(p=window.getComputedStyle?function(t,e,o){var n=o,r="",i=W(t);// https://github.com/kissyteam/kissy/issues/61
return(n=n||i.defaultView.getComputedStyle(t,null))&&(r=n.getPropertyValue(e)||n[e]),r}:function(t,e){// currentStyle maybe null
// http://msdn.microsoft.com/en-us/library/ms535231.aspx
var o=t[S]&&t[S][e];// 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
// 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
// 在 ie 下不对，需要直接用 offset 方式
// borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
// From the awesome hack by Dean Edwards
// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
// If we're not dealing with a regular pixel number
// but a number that has a weird ending, we need to convert it to pixels
// exclude left right for relativity
if(O.test(o)&&!P.test(e)){// Remember the original values
var n=t.style,r=n[T],i=t[j][T];// prevent flashing of content
t[j][T]=t[S][T],// Put in the new values to get a computed value out
n[T]="fontSize"===e?"1em":o||0,o=n.pixelLeft+"px",// Revert the changed values
n[T]=r,t[j][T]=i}return""===o?"auto":o});var Y=["margin","border","padding"],E=-1,L=2,B=1;function F(t,e,o){var n,r,i,a=0;for(r=0;r<e.length;r++)if(n=e[r])for(i=0;i<o.length;i++){var f=void 0;f="border"===n?"".concat(n).concat(o[i],"Width"):n+o[i],a+=parseFloat(p(t,f))||0}return a}var R={getParent:function(t){var e=t;do{e=11===e.nodeType&&e.host?e.host:e.parentNode}while(e&&1!==e.nodeType&&9!==e.nodeType);return e}};
/*
       得到元素的大小信息
       @param elem
       @param name
       @param {String} [extra]  'padding' : (css width) + padding
       'border' : (css width) + padding + border
       'margin' : (css width) + padding + border + margin
       */
function k(t,e,o){var n=o;if(x(t))return"width"===e?R.viewportWidth(t):R.viewportHeight(t);if(9===t.nodeType)return"width"===e?R.docWidth(t):R.docHeight(t);var r="width"===e?["Left","Right"]:["Top","Bottom"],i="width"===e?Math.floor(t.getBoundingClientRect().width):Math.floor(t.getBoundingClientRect().height),a=X(t),f=0;(null==i||i<=0)&&(i=void 0,(null==(// Fall back to computed then un computed css if necessary
f=p(t,e))||Number(f)<0)&&(f=t.style[e]||0),// Normalize '', auto, and prepare for extra
f=Math.floor(parseFloat(f))||0),void 0===n&&(n=a?B:E);var l=void 0!==i||a,u=i||f;return n===E?l?u-F(t,["border","padding"],r):f:l?n===B?u:u+(n===L?-F(t,["border"],r):F(t,["margin"],r)):f+F(t,Y.slice(n),r)}V(["Width","Height"],(function(t){R["doc".concat(t)]=function(e){var o=e.document;return Math.max(// firefox chrome documentElement.scrollHeight< body.scrollHeight
// ie standard mode : documentElement.scrollHeight> body.scrollHeight
o.documentElement["scroll".concat(t)],// quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
o.body["scroll".concat(t)],R["viewport".concat(t)](o))},R["viewport".concat(t)]=function(e){// pc browser includes scrollbar in window.innerWidth
var o="client".concat(t),n=e.document,r=n.body,i=n.documentElement[o];// 标准模式取 documentElement
// backcompat 取 body
return"CSS1Compat"===n.compatMode&&i||r&&r[o]||i}}));var z={position:"absolute",visibility:"hidden",display:"block"};// fix #119 : https://github.com/kissyteam/kissy/issues/119
function A(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var n,r=e[0];// in case elem is window
// elem.offsetWidth === undefined
return 0!==r.offsetWidth?n=k.apply(void 0,e):function(t,e,o){var n,r={},i=t.style;// Remember the old values, and insert the new ones
for(n in e)e.hasOwnProperty(n)&&(r[n]=i[n],i[n]=e[n]);// Revert the old values
for(n in o.call(t),e)e.hasOwnProperty(n)&&(i[n]=r[n])}(r,z,(function(){n=k.apply(void 0,e)})),n}function _(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t}V(["width","height"],(function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);R["outer".concat(e)]=function(e,o){return e&&A(e,t,o?0:B)};var o="width"===t?["Left","Right"]:["Top","Bottom"];R[t]=function(e,n){var r=n;return void 0!==r?e?(X(e)&&(r+=F(e,["padding","border"],o)),v(e,t,r)):void 0:e&&A(e,t,E)}}));var I={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var e=t.ownerDocument||t;return e.defaultView||e.parentWindow},getDocument:W,offset:function(t,e,o){if(void 0===e)return b(t);!function(t,e,o){if(o.ignoreShake){var n=b(t),r=n.left.toFixed(0),i=n.top.toFixed(0),a=e.left.toFixed(0),f=e.top.toFixed(0);if(r===a&&i===f)return}o.useCssRight||o.useCssBottom?D(t,e,o):o.useCssTransform&&u()in document.body.style?H(t,e):D(t,e,o)}(t,e,o||{})},isWindow:x,each:V,css:v,clone:function(t){var e,o={};for(e in t)t.hasOwnProperty(e)&&(o[e]=t[e]);if(t.overflow)for(e in t)t.hasOwnProperty(e)&&(o.overflow[e]=t.overflow[e]);return o},mix:_,getWindowScrollLeft:function(t){return y(t)},getWindowScrollTop:function(t){return w(t)},merge:function(){for(var t={},e=0;e<arguments.length;e++)I.mix(t,e<0||arguments.length<=e?void 0:arguments[e]);return t},viewportWidth:0,viewportHeight:0};_(I,R);
/**
       * 得到会导致元素显示不全的祖先元素
       */
var N=I.getParent;function $(t){if(I.isWindow(t)||9===t.nodeType)return null;// ie 这个也不是完全可行
/*
         <div style="width: 50px;height: 100px;overflow: hidden">
         <div style="width: 50px;height: 100px;position: relative;" id="d6">
         元素 6 高 100px 宽 50px<br/>
         </div>
         </div>
         */
// element.offsetParent does the right thing in ie7 and below. Return parent with layout!
//  In other browsers it only includes elements with position absolute, relative or
// fixed, not elements with overflow set to auto or scroll.
//        if (UA.ie && ieMode < 8) {
//            return element.offsetParent;
//        }
// 统一的 offsetParent 方法
var e,o=I.getDocument(t).body,n=I.css(t,"position");if("fixed"!==n&&"absolute"!==n)return"html"===t.nodeName.toLowerCase()?null:N(t);for(e=N(t);e&&e!==o&&9!==e.nodeType;e=N(e))if("static"!==(n=I.css(e,"position")))return e;return null}var U=I.getParent;
/**
       * 获得元素的显示部分的区域
       */
function Z(t,e){// Determine the size of the visible rect by climbing the dom accounting for
// all scrollable containers.
for(var o={left:0,right:1/0,top:0,bottom:1/0},n=$(t),r=I.getDocument(t),i=r.defaultView||r.parentWindow,a=r.body,f=r.documentElement;n;){// clientWidth is zero for inline block elements in ie.
if(-1!==navigator.userAgent.indexOf("MSIE")&&0===n.clientWidth||// body may have overflow set on it, yet we still get the entire
// viewport. In some browsers, el.offsetParent may be
// document.documentElement, so check for that too.
n===a||n===f||"visible"===I.css(n,"overflow")){if(n===a||n===f)break}else{var l=I.offset(n);// add border
l.left+=n.clientLeft,l.top+=n.clientTop,o.top=Math.max(o.top,l.top),o.right=Math.min(o.right,// consider area without scrollBar
l.left+n.clientWidth),o.bottom=Math.min(o.bottom,l.top+n.clientHeight),o.left=Math.max(o.left,l.left)}n=$(n)}// Set element position to fixed
// make sure absolute element itself don't affect it's visible area
// https://github.com/ant-design/ant-design/issues/7601
var u=null;I.isWindow(t)||9===t.nodeType||(u=t.style.position,"absolute"===I.css(t,"position")&&(t.style.position="fixed"));var c=I.getWindowScrollLeft(i),s=I.getWindowScrollTop(i),p=I.viewportWidth(i),d=I.viewportHeight(i),h=f.scrollWidth,g=f.scrollHeight,v=window.getComputedStyle(a);if("hidden"===v.overflowX&&(h=i.innerWidth),"hidden"===v.overflowY&&(g=i.innerHeight),// Reset element position after calculate the visible area
t.style&&(t.style.position=u),e||function(t){if(I.isWindow(t)||9===t.nodeType)return!1;var e=I.getDocument(t),o=e.body,n=null;for(n=U(t);// 修复元素位于 document.documentElement 下导致崩溃问题
n&&n!==o&&n!==e;n=U(n))if("fixed"===I.css(n,"position"))return!0;return!1}(t))// Clip by viewport's size.
o.left=Math.max(o.left,c),o.top=Math.max(o.top,s),o.right=Math.min(o.right,c+p),o.bottom=Math.min(o.bottom,s+d);else{// Clip by document's size.
var m=Math.max(h,c+p);o.right=Math.min(o.right,m);var y=Math.max(g,s+d);o.bottom=Math.min(o.bottom,y)}return o.top>=0&&o.left>=0&&o.bottom>o.top&&o.right>o.left?o:null}function q(t){var e,o,n;if(I.isWindow(t)||9===t.nodeType){var r=I.getWindow(t);e={left:I.getWindowScrollLeft(r),top:I.getWindowScrollTop(r)},o=I.viewportWidth(r),n=I.viewportHeight(r)}else e=I.offset(t),o=I.outerWidth(t),n=I.outerHeight(t);return e.width=o,e.height=n,e}
/**
       * 获取 node 上的 align 对齐点 相对于页面的坐标
       */function G(t,e){var o=e.charAt(0),n=e.charAt(1),r=t.width,i=t.height,a=t.left,f=t.top;return"c"===o?f+=i/2:"b"===o&&(f+=i),"c"===n?a+=r/2:"r"===n&&(a+=r),{left:a,top:f}}function J(t,e,o,n,r){var i=G(e,o[1]),a=G(t,o[0]),f=[a.left-i.left,a.top-i.top];return{left:Math.round(t.left-f[0]+n[0]-r[0]),top:Math.round(t.top-f[1]+n[1]-r[1])}}
/**
       * align dom node flexibly
       * @author yiminghe@gmail.com
       */
// http://yiminghe.iteye.com/blog/1124720
function K(t,e,o){return t.left<o.left||t.left+e.width>o.right}function Q(t,e,o){return t.top<o.top||t.top+e.height>o.bottom}function tt(t,e,o){var n=[];return I.each(t,(function(t){n.push(t.replace(e,(function(t){return o[t]})))})),n}function et(t,e){return t[e]=-t[e],t}function ot(t,e){return(/%$/.test(t)?parseInt(t.substring(0,t.length-1),10)/100*e:parseInt(t,10))||0}function nt(t,e){t[0]=ot(t[0],e.width),t[1]=ot(t[1],e.height)}
/**
       * @param el
       * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
       * @param align
       */function rt(t,e,o,n){var r=o.points,i=o.offset||[0,0],a=o.targetOffset||[0,0],f=o.overflow,l=o.source||t;i=[].concat(i),a=[].concat(a);var u={},c=0,s=Z(l,!(!(f=f||{})||!f.alwaysByViewport)),p=q(l);// 将 offset 转换成数值，支持百分比
nt(i,p),nt(a,e);// 当前节点将要被放置的位置
var d=J(p,e,r,i,a),h=I.merge(p,d);// 当前节点将要所处的区域
// 如果可视区域不能完全放置当前节点时允许调整
if(s&&(f.adjustX||f.adjustY)&&n){if(f.adjustX&&K(d,p,s)){// 对齐位置反下
var g=tt(r,/[lr]/gi,{l:"r",r:"l"}),v=et(i,0),m=et(a,0);// 偏移量也反下
(function(t,e,o){return t.left>o.right||t.left+e.width<o.left})(J(p,e,g,v,m),p,s)||(c=1,r=g,i=v,a=m)}if(f.adjustY&&Q(d,p,s)){// 对齐位置反下
var y=tt(r,/[tb]/gi,{t:"b",b:"t"}),w=et(i,1),b=et(a,1);// 偏移量也反下
(function(t,e,o){return t.top>o.bottom||t.top+e.height<o.top})(J(p,e,y,w,b),p,s)||(c=1,r=y,i=w,a=b)}// 如果失败，重新计算当前节点将要被放置的位置
c&&(d=J(p,e,r,i,a),I.mix(h,d));var x=K(d,p,s),W=Q(d,p,s);// 检查反下后的位置是否可以放下了，如果仍然放不下：
// 1. 复原修改过的定位参数
if(x||W){var O=r;// 重置对应部分的翻转逻辑
x&&(O=tt(r,/[lr]/gi,{l:"r",r:"l"})),W&&(O=tt(r,/[tb]/gi,{t:"b",b:"t"})),r=O,i=o.offset||[0,0],a=o.targetOffset||[0,0]}// 2. 只有指定了可以调整当前方向才调整
u.adjustX=f.adjustX&&x,u.adjustY=f.adjustY&&W,// 确实要调整，甚至可能会调整高度宽度
(u.adjustX||u.adjustY)&&(h=function(t,e,o,n){var r=I.clone(t),i={width:e.width,height:e.height};return n.adjustX&&r.left<o.left&&(r.left=o.left),// Left edge inside and right edge outside viewport, try to resize it.
n.resizeWidth&&r.left>=o.left&&r.left+i.width>o.right&&(i.width-=r.left+i.width-o.right),// Right edge outside viewport, try to move it.
n.adjustX&&r.left+i.width>o.right&&(// 保证左边界和可视区域左边界对齐
r.left=Math.max(o.right-i.width,o.left)),// Top edge outside viewport, try to move it.
n.adjustY&&r.top<o.top&&(r.top=o.top),// Top edge inside and bottom edge outside viewport, try to resize it.
n.resizeHeight&&r.top>=o.top&&r.top+i.height>o.bottom&&(i.height-=r.top+i.height-o.bottom),// Bottom edge outside viewport, try to move it.
n.adjustY&&r.top+i.height>o.bottom&&(// 保证上边界和可视区域上边界对齐
r.top=Math.max(o.bottom-i.height,o.top)),I.mix(r,i)}(d,p,s,u))}// need judge to in case set fixed with in css on height auto element
return h.width!==p.width&&I.css(l,"width",I.width(l)+h.width-p.width),h.height!==p.height&&I.css(l,"height",I.height(l)+h.height-p.height),// https://github.com/kissyteam/kissy/issues/190
// 相对于屏幕位置没变，而 left/top 变了
// 例如 <div 'relative'><el absolute></div>
I.offset(l,{left:h.left,top:h.top},{useCssRight:o.useCssRight,useCssBottom:o.useCssBottom,useCssTransform:o.useCssTransform,ignoreShake:o.ignoreShake}),{points:r,offset:i,targetOffset:a,overflow:u}}
/**
       *  2012-04-26 yiminghe@gmail.com
       *   - 优化智能对齐算法
       *   - 慎用 resizeXX
       *
       *  2011-07-13 yiminghe@gmail.com note:
       *   - 增加智能对齐，以及大小调整选项
       **/function it(t,e,o){var n=o.target||e,r=q(n),i=!function(t,e){var o=Z(t,e),n=q(t);return!o||n.left+n.width<=o.left||n.top+n.height<=o.top||n.left>=o.right||n.top>=o.bottom}(n,o.overflow&&o.overflow.alwaysByViewport);return rt(t,r,o,i)}it.__getOffsetParent=$,it.__getVisibleRectForElement=Z}}}));
