System.register([],(function(t,e){"use strict";return{execute:function(){
/**
             * A collection of shims that provide minimal functionality of the ES6 collections.
             *
             * These implementations are not meant to be used outside of the ResizeObserver
             * modules as they cover only a limited range of use cases.
             */
/* eslint-disable require-jsdoc, valid-jsdoc */var e=function(){if("undefined"!=typeof Map)return Map;
/**
                 * Returns index in provided array that matches the specified key.
                 *
                 * @param {Array<Array>} arr
                 * @param {*} key
                 * @returns {number}
                 */function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}/** @class */return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{
/**
                         * @returns {boolean}
                         */
get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),
/**
                     * @param {*} key
                     * @returns {*}
                     */
e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},
/**
                     * @param {*} key
                     * @param {*} value
                     * @returns {void}
                     */
e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},
/**
                     * @param {*} key
                     * @returns {void}
                     */
e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},
/**
                     * @param {*} key
                     * @returns {void}
                     */
e.prototype.has=function(e){return!!~t(this.__entries__,e)},
/**
                     * @returns {void}
                     */
e.prototype.clear=function(){this.__entries__.splice(0)},
/**
                     * @param {Function} callback
                     * @param {*} [ctx=null]
                     * @returns {void}
                     */
e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),n="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,r="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),i="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(r):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},o=["top","right","bottom","left","width","height","size","weight"],s="undefined"!=typeof MutationObserver,c=/** @class */function(){
/**
                 * Creates a new instance of ResizeObserverController.
                 *
                 * @private
                 */
function t(){
/**
                     * Indicates whether DOM listeners have been added.
                     *
                     * @private {boolean}
                     */
this.connected_=!1,
/**
                     * Tells that controller has subscribed for Mutation Events.
                     *
                     * @private {boolean}
                     */
this.mutationEventsAdded_=!1,
/**
                     * Keeps reference to the instance of MutationObserver.
                     *
                     * @private {MutationObserver}
                     */
this.mutationsObserver_=null,
/**
                     * A list of connected observers.
                     *
                     * @private {Array<ResizeObserverSPI>}
                     */
this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=
/**
             * Creates a wrapper function which ensures that provided callback will be
             * invoked only once during the specified delay period.
             *
             * @param {Function} callback - Function to be invoked after the delay period.
             * @param {number} delay - Delay after which to invoke callback.
             * @returns {Function}
             */
function(t,e){var n=!1,r=!1,o=0;
/**
                 * Invokes the original callback function and schedules new invocation if
                 * the "proxy" was called during current request.
                 *
                 * @returns {void}
                 */function s(){n&&(n=!1,t()),r&&a()}
/**
                 * Callback invoked after the specified delay. It will further postpone
                 * invocation of the original function delegating it to the
                 * requestAnimationFrame.
                 *
                 * @returns {void}
                 */function c(){i(s)}
/**
                 * Schedules invocation of the original function.
                 *
                 * @returns {void}
                 */function a(){var t=Date.now();if(n){// Reject immediately following calls.
if(t-o<2)return;// Schedule new call to be in invoked when the pending one is resolved.
// This is important for "transitions" which never actually start
// immediately so there is a chance that we might miss one if change
// happens amids the pending invocation.
r=!0}else n=!0,r=!1,setTimeout(c,e);o=t}return a}// Minimum delay before invoking the update of observers.
(this.refresh.bind(this),20)}
/**
                 * Adds observer to observers list.
                 *
                 * @param {ResizeObserverSPI} observer - Observer to be added.
                 * @returns {void}
                 */return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),// Add listeners if they haven't been added yet.
this.connected_||this.connect_()},
/**
                 * Removes observer from observers list.
                 *
                 * @param {ResizeObserverSPI} observer - Observer to be removed.
                 * @returns {void}
                 */
t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);// Remove observer if it's present in registry.
~n&&e.splice(n,1),// Remove listeners if controller has no connected observers.
!e.length&&this.connected_&&this.disconnect_()},
/**
                 * Invokes the update of observers. It will continue running updates insofar
                 * it detects changes.
                 *
                 * @returns {void}
                 */
t.prototype.refresh=function(){// Continue running updates if changes have been detected as there might
// be future ones caused by CSS transitions.
this.updateObservers_()&&this.refresh()},
/**
                 * Updates every observer from observers list and notifies them of queued
                 * entries.
                 *
                 * @private
                 * @returns {boolean} Returns "true" if any observer has detected changes in
                 *      dimensions of it's elements.
                 */
t.prototype.updateObservers_=function(){// Collect observers that have active observations.
var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));// Deliver notifications in a separate cycle in order to avoid any
// collisions between observers, e.g. when multiple instances of
// ResizeObserver are tracking the same element and the callback of one
// of them changes content dimensions of the observed target. Sometimes
// this may result in notifications being blocked for the rest of observers.
return t.forEach((function(t){return t.broadcastActive()})),t.length>0},
/**
                 * Initializes DOM listeners.
                 *
                 * @private
                 * @returns {void}
                 */
t.prototype.connect_=function(){// Do nothing if running in a non-browser environment or if listeners
// have been already added.
n&&!this.connected_&&(// Subscription to the "Transitionend" event is used as a workaround for
// delayed transitions. This way it's possible to capture at least the
// final state of an element.
document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},
/**
                 * Removes DOM listeners.
                 *
                 * @private
                 * @returns {void}
                 */
t.prototype.disconnect_=function(){// Do nothing if running in a non-browser environment or if listeners
// have been already removed.
n&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},
/**
                 * "Transitionend" event handler.
                 *
                 * @private
                 * @param {TransitionEvent} event
                 * @returns {void}
                 */
t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;// Detect whether transition may affect dimensions of an element.
o.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},
/**
                 * Returns instance of the ResizeObserverController.
                 *
                 * @returns {ResizeObserverController}
                 */
t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},
/**
                 * Holds reference to the controller's instance.
                 *
                 * @private {ResizeObserverController}
                 */
t.instance_=null,t}(),a=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},h=function(t){// Return the local global object if it's not possible extract one from
// provided element.
return t&&t.ownerDocument&&t.ownerDocument.defaultView||r},u=_(0,0,0,0);
/**
             * Detects whether window and document objects are available in current environment.
             */
/**
             * Converts provided string to a number.
             *
             * @param {number|string} value
             * @returns {number}
             */
function f(t){return parseFloat(t)||0}
/**
             * Extracts borders size from provided styles.
             *
             * @param {CSSStyleDeclaration} styles
             * @param {...string} positions - Borders positions (top, right, ...)
             * @returns {number}
             */function d(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+f(t["border-"+n+"-width"])}),0)}
/**
             * Extracts paddings sizes from provided styles.
             *
             * @param {CSSStyleDeclaration} styles
             * @returns {Object} Paddings box.
             */
/**
             * Calculates content rectangle of provided HTMLElement.
             *
             * @param {HTMLElement} target - Element for which to calculate the content rectangle.
             * @returns {DOMRectInit}
             */
function p(t){// Client width & height properties can't be
// used exclusively as they provide rounded values.
var e=t.clientWidth,n=t.clientHeight;// By this condition we can catch all non-replaced inline, hidden and
// detached elements. Though elements with width & height properties less
// than 0.5 will be discarded as well.

// Without it we would need to implement separate methods for each of
// those cases and it's not possible to perform a precise and performance
// effective test for hidden elements. E.g. even jQuery's ':visible' filter
// gives wrong results for elements with width & height less than 0.5.
if(!e&&!n)return u;var r=h(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=f(o)}return e}
/**
             * Calculates content rectangle of provided SVG element.
             *
             * @param {SVGGraphicsElement} target - Element content rectangle of which needs
             *      to be calculated.
             * @returns {DOMRectInit}
             */(r),o=i.left+i.right,s=i.top+i.bottom,c=f(r.width),a=f(r.height);// Following steps can't be applied to the document's root element as its
// client[Width/Height] properties represent viewport area of the window.
// Besides, it's as well not necessary as the <html> itself neither has
// rendered scroll bars nor it can be clipped.
if(// Width & height include paddings and borders when the 'border-box' box
// model is applied (except for IE).
"border-box"===r.boxSizing&&(// Following conditions are required to handle Internet Explorer which
// doesn't include paddings and borders to computed CSS dimensions.
// We can say that if CSS dimensions + paddings are equal to the "client"
// properties then it's either IE, and thus we don't need to subtract
// anything, or an element merely doesn't have paddings/borders styles.
Math.round(c+o)!==e&&(c-=d(r,"left","right")+o),Math.round(a+s)!==n&&(a-=d(r,"top","bottom")+s)),!
/**
             * Checks whether provided element is a document element (<html>).
             *
             * @param {Element} target - Element to be checked.
             * @returns {boolean}
             */
function(t){return t===h(t).document.documentElement}
/**
             * Calculates an appropriate content rectangle for provided html or svg element.
             *
             * @param {Element} target - Element content rectangle of which needs to be calculated.
             * @returns {DOMRectInit}
             */(t)){// In some browsers (only in Firefox, actually) CSS width & height
// include scroll bars size which can be removed at this step as scroll
// bars are the only difference between rounded dimensions + paddings
// and "client" properties, though that is not always true in Chrome.
var p=Math.round(c+o)-e,v=Math.round(a+s)-n;// Chrome has a rather weird rounding of "client" properties.
// E.g. for an element with content width of 314.2px it sometimes gives
// the client width of 315px and for the width of 314.7px it may give
// 314px. And it doesn't happen all the time. So just ignore this delta
// as a non-relevant.
1!==Math.abs(p)&&(c-=p),1!==Math.abs(v)&&(a-=v)}return _(i.left,i.top,c,a)}
/**
             * Checks whether provided element is an instance of the SVGGraphicsElement.
             *
             * @param {Element} target - Element to be checked.
             * @returns {boolean}
             */var v=// Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
// interface.
"undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof h(t).SVGGraphicsElement}:function(t){return t instanceof h(t).SVGElement&&"function"==typeof t.getBBox};function l(t){return n?v(t)?function(t){var e=t.getBBox();return _(0,0,e.width,e.height)}(t):p(t):u}
/**
             * Creates rectangle with an interface of the DOMRectReadOnly.
             * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
             *
             * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
             * @returns {DOMRectReadOnly}
             */
/**
             * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
             * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
             *
             * @param {number} x - X coordinate.
             * @param {number} y - Y coordinate.
             * @param {number} width - Rectangle's width.
             * @param {number} height - Rectangle's height.
             * @returns {DOMRectInit}
             */
function _(t,e,n,r){return{x:t,y:e,width:n,height:r}}
/**
             * Class that is responsible for computations of the content rectangle of
             * provided DOM element and for keeping track of it's changes.
             */var b=/** @class */function(){
/**
                 * Creates an instance of ResizeObservation.
                 *
                 * @param {Element} target - Element to be observed.
                 */
function t(t){
/**
                     * Broadcasted width of content rectangle.
                     *
                     * @type {number}
                     */
this.broadcastWidth=0,
/**
                     * Broadcasted height of content rectangle.
                     *
                     * @type {number}
                     */
this.broadcastHeight=0,
/**
                     * Reference to the last observed content rectangle.
                     *
                     * @private {DOMRectInit}
                     */
this.contentRect_=_(0,0,0,0),this.target=t}
/**
                 * Updates content rectangle and tells whether it's width or height properties
                 * have changed since the last broadcast.
                 *
                 * @returns {boolean}
                 */return t.prototype.isActive=function(){var t=l(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},
/**
                 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
                 * from the corresponding properties of the last observed content rectangle.
                 *
                 * @returns {DOMRectInit} Last observed content rectangle.
                 */
t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),m=
/**
                 * Creates an instance of ResizeObserverEntry.
                 *
                 * @param {Element} target - Element that is being observed.
                 * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
                 */
function(t,e){var n,r,i,o,s,c,h,u=(r=(n=e).x,i=n.y,o=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,h=Object.create(c.prototype),// Rectangle's properties are not writable and non-enumerable.
a(h,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),h);// According to the specification following properties are not writable
// and are also not enumerable in the native implementation.

// Property accessors are not being used as they'd require to define a
// private WeakMap storage which may cause memory leaks in browsers that
// don't support this type of collections.
a(this,{target:t,contentRect:u})},y=/** @class */function(){
/**
                 * Creates a new instance of ResizeObserver.
                 *
                 * @param {ResizeObserverCallback} callback - Callback function that is invoked
                 *      when one of the observed elements changes it's content dimensions.
                 * @param {ResizeObserverController} controller - Controller instance which
                 *      is responsible for the updates of observer.
                 * @param {ResizeObserver} callbackCtx - Reference to the public
                 *      ResizeObserver instance which will be passed to callback function.
                 */
function t(t,n,r){if(
/**
                     * Collection of resize observations that have detected changes in dimensions
                     * of elements.
                     *
                     * @private {Array<ResizeObservation>}
                     */
this.activeObservations_=[],
/**
                     * Registry of the ResizeObservation instances.
                     *
                     * @private {Map<Element, ResizeObservation>}
                     */
this.observations_=new e,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}
/**
                 * Starts observing provided element.
                 *
                 * @param {Element} target - Element to be observed.
                 * @returns {void}
                 */return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");// Do nothing if current environment doesn't have the Element interface.
if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;// Do nothing if element is already being observed.
e.has(t)||(e.set(t,new b(t)),this.controller_.addObserver(this),// Force the update of observations.
this.controller_.refresh())}},
/**
                 * Stops observing provided element.
                 *
                 * @param {Element} target - Element to stop observing.
                 * @returns {void}
                 */
t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");// Do nothing if current environment doesn't have the Element interface.
if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;// Do nothing if element is not being observed.
e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},
/**
                 * Stops observing all elements.
                 *
                 * @returns {void}
                 */
t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},
/**
                 * Collects observation instances the associated element of which has changed
                 * it's content rectangle.
                 *
                 * @returns {void}
                 */
t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},
/**
                 * Invokes initial callback function with a list of ResizeObserverEntry
                 * instances collected from active resize observations.
                 *
                 * @returns {void}
                 */
t.prototype.broadcastActive=function(){// Do nothing if observer doesn't have active observations.
if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new m(t.target,t.broadcastRect())}));// Create ResizeObserverEntry instance for every active observation.
this.callback_.call(t,e,t),this.clearActive()}},
/**
                 * Clears the collection of active observations.
                 *
                 * @returns {void}
                 */
t.prototype.clearActive=function(){this.activeObservations_.splice(0)},
/**
                 * Tells whether observer has active observations.
                 *
                 * @returns {boolean}
                 */
t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),g="undefined"!=typeof WeakMap?new WeakMap:new e,w=
/**
                 * Creates a new instance of ResizeObserver.
                 *
                 * @param {ResizeObserverCallback} callback - Callback that is invoked when
                 *      dimensions of the observed elements change.
                 */
function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),r=new y(e,n,this);g.set(this,r)};// Expose public methods of ResizeObserver.
["observe","unobserve","disconnect"].forEach((function(t){w.prototype[t]=function(){var e;return(e=g.get(this))[t].apply(e,arguments)}}));var E=// Export existing implementation if available.
void 0!==r.ResizeObserver?r.ResizeObserver:w;t("R",E)}}}));
