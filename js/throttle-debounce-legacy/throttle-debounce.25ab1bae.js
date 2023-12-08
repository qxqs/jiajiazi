System.register([],(function(n,o){"use strict";return{execute:function(){n("d",(/* eslint-disable no-undefined */
/**
       * Debounce execution of a function. Debouncing, unlike throttling,
       * guarantees that a function is only executed a single time, either at the
       * very beginning of a series of calls, or at the very end.
       *
       * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
       * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
       *                                        to `callback` when the debounced-function is executed.
       * @param {object} [options] -           An object to configure options.
       * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
       *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
       *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
       *
       * @returns {Function} A new, debounced function.
       */
function(n,o,e){var i=(e||{}).atBegin;/* eslint-disable no-undefined,no-param-reassign,no-shadow */
/**
       * Throttle execution of a function. Especially useful for rate limiting
       * execution of handlers on events like resize and scroll.
       *
       * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
       *                                            are most useful.
       * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
       *                                            as-is, to `callback` when the throttled-function is executed.
       * @param {object} [options] -              An object to configure options.
       * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
       *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
       *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
       *                                            `delay` milliseconds, the internal counter is reset).
       * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
       *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
       *                                            callback will never executed if both noLeading = true and noTrailing = true.
       * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
       *                                            false (at end), schedule `callback` to execute after `delay` ms.
       *
       * @returns {Function} A new, throttled, function.
       */return function(n,o,e){var i,t=e||{},u=t.noTrailing,r=void 0!==u&&u,c=t.noLeading,a=void 0!==c&&c,d=t.debounceMode,v=void 0===d?void 0:d,f=!1,s=0;
/*
         * After wrapper has stopped being called, this timeout ensures that
         * `callback` is executed at the proper times in `throttle` and `end`
         * debounce modes.
         */ // Function to clear existing timeout
function g(){i&&clearTimeout(i)}// Function to cancel next exec
function l(n){var o=(n||{}).upcomingOnly,e=void 0!==o&&o;g(),f=!e}
/*
         * The `wrapper` function encapsulates all of the throttling / debouncing
         * functionality and when executed will limit the rate at which `callback`
         * is executed.
         */function m(){for(var e=arguments.length,t=new Array(e),u=0;u<e;u++)t[u]=arguments[u];var c=this,d=Date.now()-s;// Execute `callback` and update the `lastExec` timestamp.
function l(){s=Date.now(),o.apply(c,t)}
/*
           * If `debounceMode` is true (at begin) this is used to clear the flag
           * to allow future `callback` executions.
           */function m(){i=void 0}f||(a||!v||i||
/*
             * Since `wrapper` is being called for the first time and
             * `debounceMode` is true (at begin), execute `callback`
             * and noLeading != true.
             */
l(),g(),void 0===v&&d>n?a?(
/*
               * In throttle mode with noLeading, if `delay` time has
               * been exceeded, update `lastExec` and schedule `callback`
               * to execute after `delay` ms.
               */
s=Date.now(),r||(i=setTimeout(v?m:l,n))):
/*
               * In throttle mode without noLeading, if `delay` time has been exceeded, execute
               * `callback`.
               */
l():!0!==r&&(
/*
             * In trailing throttle mode, since `delay` time has not been
             * exceeded, schedule `callback` to execute `delay` ms after most
             * recent execution.
             *
             * If `debounceMode` is true (at begin), schedule `clear` to execute
             * after `delay` ms.
             *
             * If `debounceMode` is false (at end), schedule `callback` to
             * execute after `delay` ms.
             */
i=setTimeout(v?m:l,void 0===v?n-d:n)))}// Return the wrapper function.
return m.cancel=l,m}(n,o,{debounceMode:!1!==(void 0!==i&&i)})}))}}}));
