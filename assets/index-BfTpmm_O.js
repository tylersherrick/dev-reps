var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function E(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=E,D=function(){ne.postMessage(null)}}else D=function(){_(E,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function A(e,t){ue++,le[ue]=e.current,e.current=t}var pe=de(null),me=de(null),he=de(null),ge=de(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function ve(){fe(pe),fe(me),fe(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),Qf._currentValue=ce)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function j(e){e[xt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return Oe.call(Nt,e)?!0:Oe.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=h({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(h({},Pn,{dataTransfer:0})),Ln=En(h({},kn,{relatedTarget:0})),Rn=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(h({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(h({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(h({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Sn(),xn=bn=yn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Ht(Tt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(gn){var yr;if(gn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,ln(e)),mn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=gn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Ut(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};gn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),kt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=hi(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=hi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=hi(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case E:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-Ge(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=de(null),Qi=null,$i=null;function ea(e,t,n){A(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,fe(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=O.S;O.S=function(e,t){eu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=de(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?A(Ca,Ca.current):A(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case D:return t=Na(t),f(e,t,n)}if(se(t)||ie(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===C)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Na(n),p(e,t,n,r)}if(se(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===C)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Na(r),m(e,t,n,r,i)}if(se(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===C)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Na(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===C)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=de(null),io=de(0);function ao(e,t){e=Wl,A(io,e),A(ro,t),Wl=e|t.baseLanes}function oo(){A(io,Wl),A(ro,ro.current)}function so(){Wl=io.current,fe(ro),fe(io)}var co=de(null),lo=null;function uo(e){var t=e.alternate;A(F,F.current&1),A(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){A(F,F.current),A(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(A(F,F.current),A(co,e),lo===null&&(lo=e)):mo(e)}function mo(){A(F,F.current),A(co,co.current)}function ho(e){fe(co),lo===e&&(lo=null),fe(F)}var F=de(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){O.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===C)return sa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Ls(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,ce,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(V||ia(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(F.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(N){if(a?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&aa(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=sc(null,t,e,r,n);break a}else if(a===E){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==o.cache&&ra(t,[P],n,!0),$a(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==a){a=Ti(Error(i(424)),t),Xi(a),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),j(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ea(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Pa=Aa,Oa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=pe.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=pe.current,qi(t))Gi(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(fe(F),r=t.memoizedState,r===null)return H(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return A(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return H(t),null}else 2*Ne()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=F.current,A(F,a?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(F),null;case 4:return ve(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&fe(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:fe(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&fe(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[mt]=e,j(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,j(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:O.T===null?dt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||N){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Jl=e}else Jl=536870912;return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),it(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ne(),10<a)){if(yu(r,t,Jl,!Vl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?$l-Ne():(a&4194048)===a?eu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=et(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,O.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=O.H;return O.H=Vs,e===null?Vs:e}function Eu(){var e=O.A;return O.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,O.H=i,O.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Ne()+500,Su(e,t)):Hl=et(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,O.H=r,O.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!je();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,at(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ne()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=ui(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=$e(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=$e(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?ke(Fe,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case qr:case Jr:case Yr:l=Rn;break;case $r:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(dr(c))if(vr)v=Dr;else{v=Tr;var y=wr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),j(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),j(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),j(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);j(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),j(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),j(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),j(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,j(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),j(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,j(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),j(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,j(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),j(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,j(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),j(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g();function y({id:e,language:t,category:n,difficulty:r,title:i,description:a,fileName:o,code:s}){return{id:e,language:t,category:n,difficulty:r,title:i,description:a,fileName:o,code:s}}var b=[y({id:1,language:`JavaScript`,category:`Variables`,difficulty:`Beginner`,title:`String Variables`,description:`Learn how to create variables that store text values using strings. Variables allow you to save information and reuse it throughout your program.`,fileName:`variables.js`,code:`const firstName = "John";
const lastName = "Doe";
let age = 25;`}),y({id:2,language:`JavaScript`,category:`Variables`,difficulty:`Beginner`,title:`Number Variables`,description:`Learn how to store numeric values inside variables. Numbers are commonly used for calculations, measurements, counters, and other data in applications.`,fileName:`numbers.js`,code:`const width = 1920;
const height = 1080;
let scale = 1;`}),y({id:3,language:`JavaScript`,category:`Variables`,difficulty:`Beginner`,title:`Boolean Variables`,description:`Learn how to store true or false values using booleans. Boolean variables are commonly used to track states like whether a user is logged in or an action is completed.`,fileName:`boolean.js`,code:`const loggedIn = true;
let isAdmin = false;`}),y({id:4,language:`JavaScript`,category:`Variables`,difficulty:`Beginner`,title:`Template Literals`,description:"Learn how to create dynamic strings using template literals. Template literals allow you to insert variable values directly into text using ${} syntax.",fileName:`template.js`,code:'const firstName = "John";\nconst greeting = `Hello ${firstName}`;'}),y({id:5,language:`JavaScript`,category:`Arrays`,difficulty:`Beginner`,title:`Simple Array`,description:`Learn how to create arrays that store multiple values inside a single variable. Arrays are commonly used to organize collections of related data.`,fileName:`array.js`,code:`const colors = ["red", "green", "blue"];`}),y({id:6,language:`JavaScript`,category:`Arrays`,difficulty:`Beginner`,title:`Numbers Array`,description:`Learn how to store multiple numeric values inside an array. Arrays allow programs to work with groups of related information efficiently.`,fileName:`numbersArray.js`,code:`const scores = [90, 84, 76, 100];`}),y({id:7,language:`JavaScript`,category:`Objects`,difficulty:`Beginner`,title:`Object Literal`,description:`Learn how to create objects that store related information using key-value pairs. Objects are commonly used to represent real-world data like users, products, and settings.`,fileName:`object.js`,code:`const user = {
  name: "John",
  age: 25,
  admin: false,
};`}),y({id:8,language:`JavaScript`,category:`Objects`,difficulty:`Beginner`,title:`Nested Object`,description:`Learn how objects can contain other objects as values. Nested objects help organize more complex data structures by grouping related information together.`,fileName:`nestedObject.js`,code:`const player = {
  name: "Bryce",
  team: {
    city: "Philadelphia",
    mascot: "Phillies",
  },
};`}),y({id:9,language:`JavaScript`,category:`Functions`,difficulty:`Beginner`,title:`Basic Function`,description:`Learn how to create reusable blocks of code with functions. Functions allow you to group instructions together and run them whenever they are needed.`,fileName:`function.js`,code:"function greet(name) {\n  return `Hello ${name}`;\n}"}),y({id:10,language:`JavaScript`,category:`Functions`,difficulty:`Beginner`,title:`Arrow Function`,description:`Learn how to write functions using modern arrow function syntax. Arrow functions provide a shorter way to create functions and are commonly used in modern JavaScript applications.`,fileName:`arrow.js`,code:"const greet = (name) => {\n  return `Hello ${name}`;\n};"}),y({id:11,language:`JavaScript`,category:`Functions`,difficulty:`Beginner`,title:`Multiple Parameters`,description:`Learn how to pass multiple values into a function using parameters. Parameters allow functions to receive information and use that data when performing a task.`,fileName:`parameters.js`,code:`function add(a, b) {
  return a + b;
}`}),y({id:12,language:`JavaScript`,category:`Conditionals`,difficulty:`Beginner`,title:`If Statement`,description:`Learn how to make decisions in your code using if statements. Conditional logic allows programs to run specific code only when a condition is true.`,fileName:`if.js`,code:`if (age >= 18) {
  console.log("Adult");
}`}),y({id:13,language:`JavaScript`,category:`Conditionals`,difficulty:`Beginner`,title:`If Else`,description:`Learn how to handle two possible outcomes using if and else statements. This allows your program to choose between different paths based on a condition.`,fileName:`ifElse.js`,code:`if (loggedIn) {
  console.log("Welcome");
} else {
  console.log("Please log in");
}`}),y({id:14,language:`JavaScript`,category:`Conditionals`,difficulty:`Beginner`,title:`Else If`,description:`Learn how to check multiple conditions using else if statements. This allows programs to evaluate several possibilities and respond with the correct result.`,fileName:`elseIf.js`,code:`if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}`}),y({id:15,language:`JavaScript`,category:`Conditionals`,difficulty:`Beginner`,title:`Switch Statement`,description:`Learn how to handle multiple possible values using a switch statement. Switch statements are useful when comparing one value against several different cases.`,fileName:`switch.js`,code:`switch (day) {
  case "Monday":
    console.log("Start");
    break;
  default:
    console.log("Other");
}`}),y({id:16,language:`JavaScript`,category:`Loops`,difficulty:`Beginner`,title:`For Loop`,description:`Learn how to repeat code a specific number of times using a for loop. Loops help automate repeated actions and are commonly used when working with collections of data.`,fileName:`forLoop.js`,code:`for (let i = 0; i < 10; i++) {
  console.log(i);
}`}),y({id:17,language:`JavaScript`,category:`Loops`,difficulty:`Beginner`,title:`While Loop`,description:`Learn how to repeat code while a condition remains true using a while loop. This type of loop is useful when you do not know exactly how many times code needs to run.`,fileName:`while.js`,code:`let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}`}),y({id:18,language:`JavaScript`,category:`Loops`,difficulty:`Beginner`,title:`For Of Loop`,description:`Learn how to loop through values inside an iterable collection using a for of loop. This is commonly used when working with arrays.`,fileName:`forOf.js`,code:`for (const team of teams) {
  console.log(team);
}`}),y({id:19,language:`JavaScript`,category:`Loops`,difficulty:`Beginner`,title:`For In Loop`,description:`Learn how to loop through the keys of an object using a for in loop. This is useful when you need to access object properties dynamically.`,fileName:`forIn.js`,code:`for (const key in user) {
  console.log(key);
}`}),y({id:20,language:`JavaScript`,category:`Arrays`,difficulty:`Beginner`,title:`Push Method`,description:`Learn how to add new values to an existing array using the push method. Array methods like push allow you to modify and manage collections of data.`,fileName:`push.js`,code:`const teams = ["Phillies", "Yankees"];

teams.push("Dodgers");`}),y({id:21,language:`JavaScript`,category:`Arrays`,difficulty:`Beginner`,title:`Pop Method`,description:`Learn how to remove the last item from an array using the pop method. Array methods like pop allow you to modify collections by adding or removing values.`,fileName:`pop.js`,code:`const teams = ["Phillies", "Yankees"];

teams.pop();`}),y({id:22,language:`JavaScript`,category:`Arrays`,difficulty:`Beginner`,title:`Shift Method`,description:`Learn how to remove the first item from an array using the shift method. Shift is useful when working with ordered lists where the first value needs to be removed.`,fileName:`shift.js`,code:`const teams = ["Phillies", "Yankees"];

teams.shift();`}),y({id:23,language:`JavaScript`,category:`Arrays`,difficulty:`Beginner`,title:`Unshift Method`,description:`Learn how to add a new value to the beginning of an array using the unshift method. This allows you to insert new data while keeping the existing values.`,fileName:`unshift.js`,code:`const teams = ["Yankees", "Dodgers"];

teams.unshift("Phillies");`}),y({id:24,language:`JavaScript`,category:`Strings`,difficulty:`Beginner`,title:`Uppercase Method`,description:`Learn how to transform text into uppercase using the toUpperCase method. String methods allow you to modify and analyze text values in your applications.`,fileName:`uppercase.js`,code:`const team = "phillies";

const upper = team.toUpperCase();`}),y({id:25,language:`JavaScript`,category:`Strings`,difficulty:`Beginner`,title:`Split Method`,description:`Learn how to convert a string into an array using the split method. This is useful when breaking apart text into smaller pieces that can be processed individually.`,fileName:`split.js`,code:`const sentence = "Learn JavaScript Today";

const words = sentence.split(" ");`}),y({id:26,language:`JavaScript`,category:`Strings`,difficulty:`Beginner`,title:`Replace Method`,description:`Learn how to replace part of a string using the replace method. String replacement is commonly used when updating text or modifying user input.`,fileName:`replace.js`,code:`const team = "Phillies";

const updated = team.replace("Phillies", "Eagles");`}),y({id:27,language:`JavaScript`,category:`Strings`,difficulty:`Beginner`,title:`Includes Method`,description:`Learn how to check whether a string contains specific text using the includes method. This is useful when searching for keywords or validating user input.`,fileName:`includes.js`,code:`const sentence = "Learn JavaScript";

const hasJavaScript = sentence.includes("JavaScript");`}),y({id:28,language:`JavaScript`,category:`Numbers`,difficulty:`Beginner`,title:`Math.max`,description:`Learn how to find the largest value from a group of numbers using Math.max. Built-in Math methods help perform common calculations without writing the logic yourself.`,fileName:`mathMax.js`,code:`const highest = Math.max(12, 44, 18, 99);`}),y({id:29,language:`JavaScript`,category:`Numbers`,difficulty:`Beginner`,title:`Random Number`,description:`Learn how to generate random values using Math.random and convert them into usable numbers. Random values are commonly used in games, testing, and applications.`,fileName:`random.js`,code:`const randomNumber = Math.floor(Math.random() * 100);`}),y({id:30,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Map Method`,description:`Learn how to create a new array by transforming each item in an existing array using the map method. Map is one of the most commonly used array methods in modern JavaScript development.`,fileName:`map.js`,code:`const doubled = numbers.map((number) => {
  return number * 2;
});`}),y({id:31,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Filter Method`,description:`Learn how to create a new array containing only values that match a condition using the filter method. Filter is commonly used when searching, sorting, and displaying specific data in applications.`,fileName:`filter.js`,code:`const adults = users.filter((user) => {
  return user.age >= 18;
});`}),y({id:32,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Find Method`,description:`Learn how to search through an array and return the first item that matches a condition using the find method. Find is useful when locating a specific object from a collection.`,fileName:`find.js`,code:`const player = players.find((player) => {
  return player.id === 7;
});`}),y({id:33,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Some Method`,description:`Learn how to check whether at least one item in an array meets a condition using the some method. This is useful when you only need to know if a matching value exists.`,fileName:`some.js`,code:`const hasWinner = teams.some((team) => {
  return team.wins > 100;
});`}),y({id:34,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Every Method`,description:`Learn how to check whether every item in an array passes a condition using the every method. This is useful when validating that all values meet a requirement.`,fileName:`every.js`,code:`const allAdults = users.every((user) => {
  return user.age >= 18;
});`}),y({id:35,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Reduce Method`,description:`Learn how to combine values from an array into a single result using the reduce method. Reduce is commonly used for totals, calculations, and transforming collections into new values.`,fileName:`reduce.js`,code:`const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);`}),y({id:36,language:`JavaScript`,category:`Objects`,difficulty:`Intermediate`,title:`Object Destructuring`,description:`Learn how to extract values from objects using destructuring. Destructuring makes it easier to access properties without repeatedly writing the object name.`,fileName:`destructure.js`,code:`const user = {
  name: "John",
  age: 28,
};

const { name, age } = user;`}),y({id:37,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Array Destructuring`,description:`Learn how to extract values from arrays using destructuring. This allows you to quickly store array elements into separate variables.`,fileName:`arrayDestructure.js`,code:`const scores = [95, 88, 76];

const [first, second] = scores;`}),y({id:38,language:`JavaScript`,category:`Operators`,difficulty:`Intermediate`,title:`Spread Operator`,description:`Learn how to copy and expand arrays using the spread operator. The spread operator is commonly used when creating updated versions of existing data without modifying the original.`,fileName:`spread.js`,code:`const updatedTeams = [...teams, "Mets"];`}),y({id:39,language:`JavaScript`,category:`Functions`,difficulty:`Intermediate`,title:`Rest Parameters`,description:`Learn how to collect multiple function arguments into a single array using rest parameters. Rest parameters make functions more flexible by allowing them to accept any number of values.`,fileName:`rest.js`,code:`function total(...numbers) {
  return numbers.reduce(
    (sum, number) => sum + number,
    0
  );
}`}),y({id:40,language:`JavaScript`,category:`Functions`,difficulty:`Intermediate`,title:`Default Parameters`,description:`Learn how to provide fallback values for function parameters using default parameters. Default values help prevent errors when a function is called without all expected arguments.`,fileName:`default.js`,code:'function greet(name = "Guest") {\n  return `Hello ${name}`;\n}'}),y({id:41,language:`JavaScript`,category:`Objects`,difficulty:`Intermediate`,title:`Object Keys`,description:`Learn how to retrieve all property names from an object using Object.keys. This is useful when you need to loop through or inspect the structure of an object.`,fileName:`keys.js`,code:`const keys = Object.keys(user);`}),y({id:42,language:`JavaScript`,category:`Objects`,difficulty:`Intermediate`,title:`Object Values`,description:`Learn how to retrieve all values from an object using Object.values. This allows you to work directly with the data stored inside an object.`,fileName:`values.js`,code:`const values = Object.values(user);`}),y({id:43,language:`JavaScript`,category:`Objects`,difficulty:`Intermediate`,title:`Object Entries`,description:`Learn how to retrieve an object's key-value pairs using Object.entries. This is useful when you need to loop through both property names and their values together.`,fileName:`entries.js`,code:`const entries = Object.entries(user);`}),y({id:44,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Sort Numbers`,description:`Learn how to organize array values using the sort method. JavaScript requires a comparison function when sorting numbers so values are arranged correctly.`,fileName:`sort.js`,code:`numbers.sort((a, b) => {
  return a - b;
});`}),y({id:45,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Reverse Method`,description:`Learn how to reverse the order of values inside an array using the reverse method. This is useful when you need to display data in the opposite order.`,fileName:`reverse.js`,code:`const reversed = numbers.reverse();`}),y({id:46,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Slice Method`,description:`Learn how to copy a portion of an array using the slice method. Slice creates a new array without changing the original data.`,fileName:`slice.js`,code:`const firstThree = numbers.slice(0, 3);`}),y({id:47,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Splice Method`,description:`Learn how to modify an array by adding or removing values using the splice method. Unlike slice, splice changes the original array.`,fileName:`splice.js`,code:`numbers.splice(2, 1);`}),y({id:48,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Join Method`,description:`Learn how to combine array values into a single string using the join method. This is useful when formatting lists of data for display.`,fileName:`join.js`,code:`const result = teams.join(", ");`}),y({id:49,language:`JavaScript`,category:`Strings`,difficulty:`Intermediate`,title:`Trim Method`,description:`Learn how to remove extra whitespace from the beginning and end of a string using the trim method. This is commonly used when cleaning user input from forms.`,fileName:`trim.js`,code:`const username = input.trim();`}),y({id:50,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Chaining Methods`,description:`Learn how to combine multiple array methods together to transform data. Method chaining allows you to filter, modify, and format data in a clean and readable way.`,fileName:`chain.js`,code:`const names = users
  .filter((user) => user.active)
  .map((user) => user.name);`}),y({id:51,language:`JavaScript`,category:`Functions`,difficulty:`Intermediate`,title:`Callback Function`,description:`Learn how to pass a function as an argument to another function using callbacks. Callbacks are commonly used when you want code to run after another action has completed.`,fileName:`callback.js`,code:`function greet(name, callback) {
  callback(name);
}

greet("John", console.log);`}),y({id:52,language:`JavaScript`,category:`Functions`,difficulty:`Intermediate`,title:`Anonymous Callback`,description:`Learn how to create inline callback functions without giving them a name. Anonymous callbacks are commonly used with array methods like forEach, map, and filter.`,fileName:`anonymousCallback.js`,code:`numbers.forEach((number) => {
  console.log(number);
});`}),y({id:53,language:`JavaScript`,category:`Timing`,difficulty:`Intermediate`,title:`setTimeout`,description:`Learn how to delay the execution of code using setTimeout. Timers are commonly used for delayed actions, notifications, animations, and asynchronous behavior.`,fileName:`timeout.js`,code:`setTimeout(() => {
  console.log("Done");
}, 1000);`}),y({id:54,language:`JavaScript`,category:`Timing`,difficulty:`Intermediate`,title:`setInterval`,description:`Learn how to repeatedly run code at a set time interval using setInterval. Intervals are commonly used for clocks, polling data, and recurring updates.`,fileName:`interval.js`,code:`const interval = setInterval(() => {
  console.log("Tick");
}, 1000);`}),y({id:55,language:`JavaScript`,category:`JSON`,difficulty:`Intermediate`,title:`JSON Parse`,description:`Learn how to convert JSON formatted text into a JavaScript object using JSON.parse. This is commonly used when receiving data from APIs or external sources.`,fileName:`jsonParse.js`,code:`const json = '{"name":"John"}';

const user = JSON.parse(json);`}),y({id:56,language:`JavaScript`,category:`JSON`,difficulty:`Intermediate`,title:`JSON Stringify`,description:`Learn how to convert JavaScript objects into JSON text using JSON.stringify. This is commonly used when sending data to APIs or storing information.`,fileName:`jsonStringify.js`,code:`const json = JSON.stringify(user);`}),y({id:57,language:`JavaScript`,category:`Promises`,difficulty:`Intermediate`,title:`Create a Promise`,description:`Learn how to create promises that represent operations that may complete in the future. Promises are a core part of handling asynchronous JavaScript code.`,fileName:`promise.js`,code:`const promise = new Promise((resolve) => {
  resolve("Success");
});`}),y({id:58,language:`JavaScript`,category:`Promises`,difficulty:`Intermediate`,title:`Promise Then`,description:`Learn how to handle the result of a promise using the then method. The then method allows code to run after an asynchronous operation successfully completes.`,fileName:`then.js`,code:`promise.then((result) => {
  console.log(result);
});`}),y({id:59,language:`JavaScript`,category:`Async`,difficulty:`Intermediate`,title:`Async Function`,description:`Learn how to create asynchronous functions using the async keyword. Async functions allow you to work with promises using cleaner and more readable syntax.`,fileName:`async.js`,code:`async function loadData() {
  return "Loaded";
}`}),y({id:60,language:`JavaScript`,category:`Async`,difficulty:`Intermediate`,title:`Await`,description:`Learn how to pause an async function until a promise is completed using await. Await makes asynchronous code easier to read by allowing it to be written in a more sequential style.`,fileName:`await.js`,code:`async function getData() {
  const data = await promise;

  return data;
}`}),y({id:61,language:`JavaScript`,category:`Fetch`,difficulty:`Intermediate`,title:`Fetch Request`,description:`Learn how to request data from an API using fetch. Fetch is commonly used in frontend applications to communicate with backend servers and retrieve information.`,fileName:`fetch.js`,code:`const response = await fetch("/api/users");`}),y({id:62,language:`JavaScript`,category:`Fetch`,difficulty:`Intermediate`,title:`Read JSON Response`,description:`Learn how to convert an API response into usable JavaScript data using response.json. Most APIs return JSON data that needs to be parsed before it can be used.`,fileName:`responseJson.js`,code:`const users = await response.json();`}),y({id:63,language:`JavaScript`,category:`Errors`,difficulty:`Intermediate`,title:`Try Catch`,description:`Learn how to handle unexpected errors using try and catch blocks. Error handling helps applications continue running and provide better feedback when something goes wrong.`,fileName:`tryCatch.js`,code:`try {
  console.log(user.name);
} catch (error) {
  console.error(error);
}`}),y({id:64,language:`JavaScript`,category:`Errors`,difficulty:`Intermediate`,title:`Throw Error`,description:`Learn how to create custom errors using throw. Throwing errors allows you to stop execution and communicate when something does not meet the expected requirements.`,fileName:`throw.js`,code:`throw new Error("Something went wrong");`}),y({id:65,language:`JavaScript`,category:`Sets`,difficulty:`Intermediate`,title:`Create Set`,description:`Learn how to create a Set, a collection that only stores unique values. Sets are useful when you need to remove duplicates or quickly check whether a value exists.`,fileName:`set.js`,code:`const ids = new Set([1, 2, 3]);`}),y({id:66,language:`JavaScript`,category:`Sets`,difficulty:`Intermediate`,title:`Add to Set`,description:`Learn how to add new values to a Set using the add method. Sets automatically prevent duplicate values from being stored.`,fileName:`setAdd.js`,code:`ids.add(4);`}),y({id:67,language:`JavaScript`,category:`Maps`,difficulty:`Intermediate`,title:`Create Map`,description:`Learn how to create a Map collection for storing key-value pairs. Maps are useful when you need keys that can be different data types or need more control than regular objects.`,fileName:`mapObject.js`,code:`const scores = new Map();`}),y({id:68,language:`JavaScript`,category:`Maps`,difficulty:`Intermediate`,title:`Map Set`,description:`Learn how to add values to a Map using the set method. Maps store information by connecting a unique key with a related value.`,fileName:`mapSet.js`,code:`scores.set("John", 98);`}),y({id:69,language:`JavaScript`,category:`Dates`,difficulty:`Intermediate`,title:`Current Date`,description:`Learn how to create a Date object representing the current time. JavaScript dates are used for timestamps, scheduling, and working with time-based data.`,fileName:`date.js`,code:`const today = new Date();`}),y({id:70,language:`JavaScript`,category:`Dates`,difficulty:`Intermediate`,title:`Current Year`,description:`Learn how to extract the current year from a Date object using getFullYear. Date methods allow applications to display and work with specific parts of a date.`,fileName:`year.js`,code:`const year = today.getFullYear();`}),y({id:71,language:`JavaScript`,category:`Strings`,difficulty:`Intermediate`,title:`Pad Start`,description:`Learn how to add characters to the beginning of a string using padStart. This is commonly used when formatting values like numbers, dates, or IDs with consistent lengths.`,fileName:`padStart.js`,code:`const number = "7".padStart(2, "0");`}),y({id:72,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Flat Method`,description:`Learn how to flatten nested arrays into a single array using the flat method. This is useful when working with data structures that contain multiple levels of arrays.`,fileName:`flat.js`,code:`const values = [[1, 2], [3, 4]];

const result = values.flat();`}),y({id:73,language:`JavaScript`,category:`Operators`,difficulty:`Intermediate`,title:`Nullish Coalescing`,description:`Learn how to provide fallback values using the nullish coalescing operator. This operator returns a default value when the original value is null or undefined.`,fileName:`nullish.js`,code:`const username = user.name ?? "Guest";`}),y({id:74,language:`JavaScript`,category:`Operators`,difficulty:`Intermediate`,title:`Optional Chaining`,description:`Learn how to safely access nested properties using optional chaining. This prevents errors when trying to access values that may not exist.`,fileName:`optionalChaining.js`,code:`const city = user.address?.city;`}),y({id:75,language:`JavaScript`,category:`Arrays`,difficulty:`Intermediate`,title:`Find Index`,description:`Learn how to find the position of an item in an array using findIndex. This is useful when you need the location of a value instead of the value itself.`,fileName:`findIndex.js`,code:`const index = users.findIndex((user) => {
  return user.id === 5;
});`}),y({id:76,language:`JavaScript`,category:`Classes`,difficulty:`Advanced`,title:`Basic Class`,description:`Learn how to create classes that define reusable object blueprints. Classes are used to create objects with shared properties and behaviors.`,fileName:`class.js`,code:`class User {
  constructor(name) {
    this.name = name;
  }
}`}),y({id:77,language:`JavaScript`,category:`Classes`,difficulty:`Advanced`,title:`Class Method`,description:`Learn how to add methods to classes. Methods define actions that objects created from a class can perform.`,fileName:`classMethod.js`,code:`class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return \`Hello \${this.name}\`;
  }
}`}),y({id:78,language:`JavaScript`,category:`Modules`,difficulty:`Advanced`,title:`Export Function`,description:`Learn how to export functions from a JavaScript module. Exports allow you to organize code into separate files and reuse functionality throughout an application.`,fileName:`math.js`,code:`export function add(a, b) {
  return a + b;
}`}),y({id:79,language:`JavaScript`,category:`Modules`,difficulty:`Advanced`,title:`Import Function`,description:`Learn how to import functions from another JavaScript module. Imports allow applications to bring reusable code into different files.`,fileName:`app.js`,code:`import { add } from "./math";

console.log(add(2, 3));`}),y({id:80,language:`JavaScript`,category:`DOM`,difficulty:`Advanced`,title:`Query Selector`,description:`Learn how to select HTML elements using querySelector. Selecting elements allows JavaScript to interact with and modify content on a webpage.`,fileName:`dom.js`,code:`const button = document.querySelector("button");`}),y({id:81,language:`JavaScript`,category:`DOM`,difficulty:`Advanced`,title:`Add Event Listener`,description:`Learn how to respond to user actions by adding event listeners. Event listeners allow JavaScript to run code when events like clicks, typing, or submissions occur.`,fileName:`event.js`,code:`button.addEventListener("click", () => {
  console.log("Clicked");
});`}),y({id:82,language:`JavaScript`,category:`DOM`,difficulty:`Advanced`,title:`Change Text`,description:`Learn how to update webpage content using textContent. Changing text dynamically allows JavaScript to modify what users see without refreshing the page.`,fileName:`text.js`,code:`const heading = document.querySelector("h1");

heading.textContent = "Welcome";`}),y({id:83,language:`JavaScript`,category:`DOM`,difficulty:`Advanced`,title:`Toggle Class`,description:`Learn how to add or remove CSS classes dynamically using classList.toggle. This is commonly used for changing styles, showing content, and creating interactive user interfaces.`,fileName:`toggle.js`,code:`button.classList.toggle("active");`}),y({id:84,language:`JavaScript`,category:`DOM`,difficulty:`Advanced`,title:`Create Element`,description:`Learn how to create new HTML elements with JavaScript using createElement. Creating elements dynamically allows applications to build and update page content.`,fileName:`create.js`,code:`const li = document.createElement("li");

li.textContent = "Phillies";`}),y({id:85,language:`JavaScript`,category:`DOM`,difficulty:`Advanced`,title:`Append Child`,description:`Learn how to add newly created elements to a webpage using appendChild. This allows JavaScript to insert content into the existing DOM structure.`,fileName:`append.js`,code:`list.appendChild(li);`}),y({id:86,language:`JavaScript`,category:`Storage`,difficulty:`Advanced`,title:`Save Local Storage`,description:`Learn how to save data in the browser using localStorage. Local storage allows applications to remember information even after the user closes the page.`,fileName:`save.js`,code:`localStorage.setItem("theme", "dark");`}),y({id:87,language:`JavaScript`,category:`Storage`,difficulty:`Advanced`,title:`Read Local Storage`,description:`Learn how to retrieve saved browser data using localStorage.getItem. Reading stored values allows applications to restore previous user settings or preferences.`,fileName:`read.js`,code:`const theme = localStorage.getItem("theme");`}),y({id:88,language:`JavaScript`,category:`Storage`,difficulty:`Advanced`,title:`Remove Local Storage`,description:`Learn how to delete saved browser data using localStorage.removeItem. Removing stored values is useful when resetting preferences or clearing saved information.`,fileName:`remove.js`,code:`localStorage.removeItem("theme");`}),y({id:89,language:`JavaScript`,category:`Forms`,difficulty:`Advanced`,title:`Prevent Default`,description:`Learn how to prevent the browser's default behavior when handling forms. Preventing default actions allows JavaScript to control submissions and create custom user experiences.`,fileName:`form.js`,code:`form.addEventListener("submit", (event) => {
  event.preventDefault();
});`}),y({id:90,language:`JavaScript`,category:`Forms`,difficulty:`Advanced`,title:`Read Input Value`,description:`Learn how to access values entered by users in form inputs. Reading input values is a key part of handling forms, validation, and user interactions.`,fileName:`input.js`,code:`const username = input.value;`}),y({id:91,language:`JavaScript`,category:`Fetch`,difficulty:`Advanced`,title:`POST Request`,description:`Learn how to send data to an API using a POST request with fetch. POST requests are commonly used when creating new records, submitting forms, or sending user information to a backend server.`,fileName:`post.js`,code:`await fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
});`}),y({id:92,language:`JavaScript`,category:`Async`,difficulty:`Advanced`,title:`Promise.all`,description:`Learn how to run multiple asynchronous operations at the same time using Promise.all. This allows applications to wait for multiple requests to finish before continuing.`,fileName:`promiseAll.js`,code:`const results = await Promise.all([
  getUsers(),
  getTeams(),
]);`}),y({id:93,language:`JavaScript`,category:`Arrays`,difficulty:`Advanced`,title:`Flat Map`,description:`Learn how to transform and flatten arrays at the same time using flatMap. This method is useful when working with nested data that needs to become a single list.`,fileName:`flatMap.js`,code:`const words = sentences.flatMap((sentence) => {
  return sentence.split(" ");
});`}),y({id:94,language:`JavaScript`,category:`Objects`,difficulty:`Advanced`,title:`Merge Objects`,description:`Learn how to combine multiple objects together using the spread operator. Merging objects is commonly used when creating updated versions of data without changing the originals.`,fileName:`merge.js`,code:`const settings = {
  ...defaults,
  ...userSettings,
};`}),y({id:95,language:`JavaScript`,category:`Functions`,difficulty:`Advanced`,title:`Higher Order Function`,description:`Learn how functions can return other functions. Higher order functions are a powerful JavaScript concept commonly used with callbacks, array methods, and functional programming patterns.`,fileName:`higherOrder.js`,code:`function multiply(multiplier) {
  return (number) => {
    return number * multiplier;
  };
}`}),y({id:96,language:`JavaScript`,category:`Functions`,difficulty:`Advanced`,title:`Closure`,description:`Learn how closures allow functions to remember variables from their outer scope even after the outer function has finished running. Closures are commonly used for private data and state management.`,fileName:`closure.js`,code:`function counter() {
  let count = 0;

  return () => {
    count++;
    return count;
  };
}`}),y({id:97,language:`JavaScript`,category:`Errors`,difficulty:`Advanced`,title:`Finally Block`,description:`Learn how to run cleanup code with the finally block. Finally executes whether an error occurs or not and is useful for closing connections, resetting states, or finishing tasks.`,fileName:`finally.js`,code:`try {
  await getUsers();
} catch (error) {
  console.error(error);
} finally {
  console.log("Finished");
}`}),y({id:98,language:`JavaScript`,category:`Objects`,difficulty:`Advanced`,title:`Freeze Object`,description:`Learn how to prevent changes to an object using Object.freeze. Freezing objects helps protect important configuration values from being accidentally modified.`,fileName:`freeze.js`,code:`const config = {
  theme: "dark",
};

Object.freeze(config);`}),y({id:99,language:`JavaScript`,category:`Arrays`,difficulty:`Advanced`,title:`Remove Duplicates`,description:`Learn how to remove duplicate values from an array using a Set. This is a common technique for cleaning data and ensuring collections only contain unique values.`,fileName:`duplicates.js`,code:`const uniqueNumbers = [
  ...new Set(numbers),
];`}),y({id:100,language:`JavaScript`,category:`Interview`,difficulty:`Advanced`,title:`Frequency Counter`,description:`Learn how to count how often values appear in a collection using an object as a frequency counter. This pattern is commonly used in coding interviews and data processing problems.`,fileName:`frequency.js`,code:`const counts = {};

for (const word of words) {
  counts[word] =
    (counts[word] || 0) + 1;
}`})],x=[y({id:1001,language:`React`,category:`Components`,difficulty:`Beginner`,title:`Basic Component`,description:`A React component is a reusable piece of your user interface. Components allow you to split an application into smaller, organized pieces that each have a single responsibility. Most React applications are built by combining many small components together.`,fileName:`App.jsx`,code:`function App() {
  return (
    <h1>Hello World</h1>
  );
}

export default App;`}),y({id:1002,language:`React`,category:`Props`,difficulty:`Beginner`,title:`Props`,description:`Props are how a parent component passes data to a child component. They allow the same component to display different information without rewriting the component itself. Props are read-only, meaning the receiving component should use them but never change them.`,fileName:`Greeting.jsx`,code:`function Greeting({ name }) {
  return (
    <h1>Hello {name}</h1>
  );
}

export default Greeting;`}),y({id:1003,language:`React`,category:`State`,difficulty:`Beginner`,title:`useState`,description:`useState gives a component memory by storing values between renders. Whenever the setter function is called, React updates the state and automatically re-renders the component so the page reflects the latest data. State should be used for values that change while the application is running.`,fileName:`Counter.jsx`,code:`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default Counter;`}),y({id:1004,language:`React`,category:`State`,difficulty:`Beginner`,title:`Multiple State`,description:`A component can have as many pieces of state as it needs. Each call to useState creates an independent value with its own setter function. Keeping related values in separate state variables often makes components easier to read and maintain.`,fileName:`Profile.jsx`,code:`import { useState } from "react";

function Profile() {
  const [name, setName] = useState("Tyler");
  const [age, setAge] = useState(27);

  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}

export default Profile;`}),y({id:1005,language:`React`,category:`Events`,difficulty:`Beginner`,title:`Button Click`,description:`React uses event handlers to respond to user interactions like clicks, typing, and form submissions. Event handlers are functions that run when an event occurs. In this example, clicking the button calls the handleClick function and displays an alert.`,fileName:`Button.jsx`,code:`function Button() {
  function handleClick() {
    alert("Clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default Button;`}),y({id:1006,language:`React`,category:`Conditional Rendering`,difficulty:`Beginner`,title:`Ternary`,description:`Conditional rendering allows your UI to change based on data or state. The ternary operator works like an if/else statement inside JSX, making it useful when you want to display one thing if a condition is true and something else if it is false.`,fileName:`Status.jsx`,code:`function Status({ loggedIn }) {
  return (
    <h1>
      {loggedIn ? "Welcome!" : "Please Log In"}
    </h1>
  );
}

export default Status;`}),y({id:1007,language:`React`,category:`Conditional Rendering`,difficulty:`Beginner`,title:`Logical &&`,description:`Sometimes you only want to display something when a condition is true. The && operator tells React to render the code on the right only if the value on the left is true. This pattern is commonly used for buttons, messages, and sections that should only appear in certain situations.`,fileName:`Dashboard.jsx`,code:`function Dashboard({ isAdmin }) {
  return (
    <>
      <h1>Dashboard</h1>

      {isAdmin && <button>Delete User</button>}
    </>
  );
}

export default Dashboard;`}),y({id:1008,language:`React`,category:`Lists`,difficulty:`Beginner`,title:`Render List`,description:`React can render collections of data by using JavaScript's map() method. Each item in the array is transformed into JSX that React displays on the page. Every rendered item should have a unique key so React can efficiently track changes to the list.`,fileName:`FruitList.jsx`,code:`const fruits = [
  "Apple",
  "Banana",
  "Orange",
];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitList;`}),y({id:1009,language:`React`,category:`Forms`,difficulty:`Beginner`,title:`Controlled Input`,description:`A controlled input is an input whose value is managed by React state instead of the browser. Every time the user types, the state updates, and React immediately re-renders the input with the latest value. This gives your application complete control over the form data.`,fileName:`Search.jsx`,code:`import { useState } from "react";

function Search() {
  const [text, setText] = useState("");

  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default Search;`}),y({id:1010,language:`React`,category:`Effects`,difficulty:`Beginner`,title:`useEffect`,description:`useEffect is used for work that happens after React finishes rendering the page. Common examples include fetching data, starting timers, listening for browser events, or updating the document title. The empty dependency array tells React to run this effect only once when the component first mounts.`,fileName:`App.jsx`,code:`import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Mounted");
  }, []);

  return <h1>Hello React</h1>;
}

export default App;`}),y({id:1011,language:`React`,category:`Effects`,difficulty:`Beginner`,title:`Fetch Data`,description:`One of the most common uses of useEffect is fetching data from an API. The effect runs after the component mounts, sends a request to the server, and can then store the returned data in state. Separating data fetching from rendering keeps components organized and easier to understand.`,fileName:`Users.jsx`,code:`import { useEffect } from "react";

function Users() {
  useEffect(() => {
    fetch("/api/users");
  }, []);

  return <h1>Users</h1>;
}

export default Users;`}),y({id:1012,language:`React`,category:`State`,difficulty:`Beginner`,title:`Update Object`,description:`Objects stored in state should never be changed directly. Instead, create a new object that copies the existing values and updates only the properties you want to change. The spread operator (...) makes this pattern simple and is used throughout React applications.`,fileName:`Profile.jsx`,code:`import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "Tyler",
    age: 27,
  });

  function birthday() {
    setUser({
      ...user,
      age: user.age + 1,
    });
  }

  return (
    <button onClick={birthday}>
      {user.age}
    </button>
  );
}

export default Profile;`}),y({id:1013,language:`React`,category:`State`,difficulty:`Beginner`,title:`Update Array`,description:`Arrays in React state should also be treated as immutable, meaning you create a new array instead of modifying the existing one. Using the spread operator creates a copy of the current array and allows you to add new items while keeping the original state unchanged.`,fileName:`Todo.jsx`,code:`import { useState } from "react";

function Todo() {
  const [items, setItems] = useState([
    "React",
  ]);

  function addItem() {
    setItems([
      ...items,
      "JavaScript",
    ]);
  }

  return (
    <button onClick={addItem}>
      Add Item
    </button>
  );
}

export default Todo;`}),y({id:1014,language:`React`,category:`State`,difficulty:`Beginner`,title:`Previous State`,description:`Sometimes a new state value depends on the current state value. In those situations, React recommends using the callback form of the setter function. React passes the previous state into the callback, ensuring your update always uses the latest value, even if multiple updates happen quickly.`,fileName:`Counter.jsx`,code:`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      {count}
    </button>
  );
}

export default Counter;`}),y({id:1015,language:`React`,category:`State`,difficulty:`Beginner`,title:`Remove Item`,description:`Removing items from an array in React is commonly done with the filter() method. Rather than changing the original array, filter() creates a new array containing only the items you want to keep. Returning a new array allows React to detect the state change and update the UI.`,fileName:`Todo.jsx`,code:`import { useState } from "react";

function Todo() {
  const [items, setItems] = useState([
    "React",
    "CSS",
  ]);

  function removeItem() {
    setItems(items.filter((item) => item !== "CSS"));
  }

  return <button onClick={removeItem}>Remove</button>;
}

export default Todo;`}),y({id:1016,language:`React`,category:`State`,difficulty:`Beginner`,title:`Update Array Item`,description:`The map() method is commonly used to update a single item inside an array. It loops through every item and returns a new array, replacing only the item that matches your condition. This lets you update state without modifying the original array.`,fileName:`Todo.jsx`,code:`import { useState } from "react";

function Todo() {
  const [items, setItems] = useState([
    "React",
    "CSS",
  ]);

  function updateItem() {
    setItems(items.map((item) =>
      item === "CSS" ? "JavaScript" : item
    ));
  }

  return <button onClick={updateItem}>Update</button>;
}

export default Todo;`}),y({id:1017,language:`React`,category:`Props`,difficulty:`Beginner`,title:`Multiple Props`,description:`Components can receive as many props as they need. Passing multiple props allows a component to display or use several pieces of related information without hardcoding values. This keeps components flexible and reusable throughout an application.`,fileName:`User.jsx`,code:`function User({ name, age }) {
  return (
    <p>
      {name} - {age}
    </p>
  );
}

export default User;`}),y({id:1018,language:`React`,category:`Props`,difficulty:`Beginner`,title:`Children`,description:`The special children prop represents whatever JSX is placed between a component's opening and closing tags. It allows you to build wrapper or layout components that can display different content without knowing what that content will be ahead of time.`,fileName:`Card.jsx`,code:`function Card({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

export default Card;`}),y({id:1019,language:`React`,category:`Styling`,difficulty:`Beginner`,title:`Conditional Class`,description:`React makes it easy to change CSS classes based on state or props. By choosing different class names conditionally, your components can change their appearance without changing the underlying HTML structure. This is commonly used for active buttons, validation, and themes.`,fileName:`Button.jsx`,code:`function Button({ active }) {
  return (
    <button
      className={active ? "active" : "inactive"}
    >
      Save
    </button>
  );
}

export default Button;`}),y({id:1020,language:`React`,category:`Styling`,difficulty:`Beginner`,title:`Inline Styles`,description:`React allows CSS to be applied directly using the style prop. Instead of a CSS string, the style prop receives a JavaScript object where property names use camelCase. Inline styles are useful for dynamic styling, but reusable styles are usually better placed in CSS files.`,fileName:`Title.jsx`,code:`function Title() {
  return (
    <h1 style={{ color: "blue" }}>
      Hello
    </h1>
  );
}

export default Title;`}),y({id:1021,language:`React`,category:`Forms`,difficulty:`Beginner`,title:`Form Submit`,description:`Forms allow users to send information such as login credentials, search terms, or profile updates. React listens for the form's submit event using the onSubmit prop. Calling preventDefault() stops the browser from refreshing the page so React can handle the submission instead.`,fileName:`Login.jsx`,code:`function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>Submit</button>
    </form>
  );
}

export default Login;`}),y({id:1022,language:`React`,category:`Forms`,difficulty:`Beginner`,title:`Checkbox`,description:`Checkboxes are controlled the same way as other form inputs, but they use the checked property instead of value. React stores whether the checkbox is checked in state, keeping the UI and your application data synchronized.`,fileName:`Checkbox.jsx`,code:`import { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}

export default Checkbox;`}),y({id:1023,language:`React`,category:`Forms`,difficulty:`Beginner`,title:`Select Menu`,description:`Select elements allow users to choose one option from a list. Just like text inputs, React controls the selected value through state. Whenever the user chooses a new option, the state updates and React re-renders the component with the latest selection.`,fileName:`Select.jsx`,code:`import { useState } from "react";

function Select() {
  const [color, setColor] = useState("");

  return (
    <select
      value={color}
      onChange={(e) => setColor(e.target.value)}
    >
      <option>Red</option>
      <option>Blue</option>
    </select>
  );
}

export default Select;`}),y({id:1024,language:`React`,category:`Forms`,difficulty:`Beginner`,title:`Textarea`,description:`A textarea works almost exactly like a controlled text input, except it allows users to enter multiple lines of text. React stores the current contents in state, making it easy to validate, save, or display the user's input elsewhere in the application.`,fileName:`Message.jsx`,code:`import { useState } from "react";

function Message() {
  const [text, setText] = useState("");

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default Message;`}),y({id:1025,language:`React`,category:`Lists`,difficulty:`Beginner`,title:`Render Users`,description:`The map() method can render any collection of data, not just simple strings or numbers. As your applications grow, you'll often receive arrays of objects from an API and use map() to create a component for each item. This is one of the most common rendering patterns in React.`,fileName:`Users.jsx`,code:`const users = [
  "Tyler",
  "Sarah",
  "Mike",
];

function Users() {
  return (
    <>
      {users.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </>
  );
}

export default Users;`}),y({id:1026,language:`React`,category:`Lists`,difficulty:`Beginner`,title:`Keys`,description:`Keys help React identify which items in a list have changed, been added, or been removed. This allows React to update only the necessary parts of the page instead of re-rendering everything. Keys should be unique and stable, which is why IDs are usually the best choice instead of array indexes.`,fileName:`Users.jsx`,code:`const users = [
  { id: 1, name: "Tyler" },
  { id: 2, name: "Sarah" },
];

function Users() {
  return (
    <>
      {users.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </>
  );
}

export default Users;`}),y({id:1027,language:`React`,category:`Components`,difficulty:`Beginner`,title:`Nested Components`,description:`React applications are built by combining components together like building blocks. A parent component can render one or many child components to organize the user interface into smaller, reusable pieces. This approach makes large applications much easier to manage and maintain.`,fileName:`App.jsx`,code:`function Header() {
  return <h1>My Website</h1>;
}

function App() {
  return (
    <>
      <Header />
      <p>Welcome!</p>
    </>
  );
}

export default App;`}),y({id:1028,language:`React`,category:`Components`,difficulty:`Beginner`,title:`Component Composition`,description:`Component composition means building larger components by combining smaller ones. Instead of creating one huge component that does everything, React encourages splitting your UI into focused pieces that each have a single responsibility. This makes code easier to reuse, test, and understand.`,fileName:`App.jsx`,code:`function Button() {
  return <button>Save</button>;
}

function Card() {
  return (
    <div>
      <Button />
    </div>
  );
}

export default Card;`}),y({id:1029,language:`React`,category:`Props`,difficulty:`Beginner`,title:`Default Props`,description:`Sometimes a prop is optional, and a component should still work even if one isn't provided. Default parameter values allow your component to fall back to a predefined value when a prop is missing. This makes components more flexible and prevents unexpected empty content.`,fileName:`Greeting.jsx`,code:`function Greeting({ name = "Guest" }) {
  return (
    <h1>Hello {name}</h1>
  );
}

export default Greeting;`}),y({id:1030,language:`React`,category:`Events`,difficulty:`Beginner`,title:`Passing Arguments`,description:`Event handlers often need additional information when they run. By wrapping the handler in an arrow function, you can pass arguments while still waiting until the user actually performs the event. This pattern is commonly used when working with lists of buttons or items.`,fileName:`Button.jsx`,code:`function Button() {
  function handleClick(message) {
    alert(message);
  }

  return (
    <button
      onClick={() => handleClick("Hello!")}
    >
      Click Me
    </button>
  );
}

export default Button;`}),y({id:1031,language:`React`,category:`Events`,difficulty:`Beginner`,title:`Event Object`,description:`When an event occurs, React automatically passes an event object to the event handler. This object contains useful information about what happened, such as which element triggered the event or what value was entered into an input. Understanding the event object is essential when working with forms and user interactions.`,fileName:`Input.jsx`,code:`function Input() {
  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <input onChange={handleChange} />
  );
}

export default Input;`}),y({id:1032,language:`React`,category:`Conditional Rendering`,difficulty:`Beginner`,title:`Return Early`,description:`Sometimes the simplest way to conditionally render something is to return early from the component. If a condition isn't met, the component can immediately return different JSX without rendering the rest of the code. This pattern often makes components easier to read than deeply nested conditions.`,fileName:`Profile.jsx`,code:`function Profile({ user }) {
  if (!user) {
    return <h1>Please Log In</h1>;
  }

  return <h1>{user.name}</h1>;
}

export default Profile;`}),y({id:1033,language:`React`,category:`State`,difficulty:`Beginner`,title:`Toggle State`,description:`Boolean state is commonly used to turn features on and off. Rather than setting a specific value, you can switch between true and false by using the opposite of the current value. This pattern is frequently used for menus, modals, dropdowns, and dark mode toggles.`,fileName:`Toggle.jsx`,code:`import { useState } from "react";

function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <button onClick={() => setOn(!on)}>
      {on ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;`}),y({id:1034,language:`React`,category:`State`,difficulty:`Beginner`,title:`Counter Reset`,description:`State can be updated to any value, not just incremented or decremented. Sometimes you'll want to restore state back to its original value, such as clearing a form or resetting a counter. Resetting state is a common feature in interactive applications.`,fileName:`Counter.jsx`,code:`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  return (
    <button onClick={() => setCount(0)}>
      Reset
    </button>
  );
}

export default Counter;`}),y({id:1035,language:`React`,category:`Lists`,difficulty:`Beginner`,title:`Filter Before Render`,description:`Arrays can be filtered before they are rendered to display only the items you want. The filter() method creates a new array that matches a condition, and map() then converts those items into JSX. Combining filter() and map() is a very common pattern when displaying dynamic data.`,fileName:`Users.jsx`,code:`const users = [
  { id: 1, name: "Tyler", active: true },
  { id: 2, name: "Sarah", active: false },
];

function Users() {
  return (
    <>
      {users
        .filter((user) => user.active)
        .map((user) => (
          <p key={user.id}>
            {user.name}
          </p>
        ))}
    </>
  );
}

export default Users;`}),y({id:1036,language:`React`,category:`State`,difficulty:`Beginner`,title:`Counter Decrement`,description:`State can move in either direction depending on your application's needs. Just as you can increase a value, you can also decrease it by updating the current state. Counters like this are useful for inventory, pagination, timers, and many other real-world features.`,fileName:`Counter.jsx`,code:`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  return (
    <button onClick={() => setCount(count - 1)}>
      {count}
    </button>
  );
}

export default Counter;`}),y({id:1037,language:`React`,category:`State`,difficulty:`Beginner`,title:`Input Mirror`,description:`One advantage of controlled inputs is that the value stored in state can be displayed anywhere in the component. As the user types, React updates the state and immediately reflects those changes throughout the UI. This creates a single source of truth for your data.`,fileName:`Mirror.jsx`,code:`import { useState } from "react";

function Mirror() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </>
  );
}

export default Mirror;`}),y({id:1038,language:`React`,category:`Conditional Rendering`,difficulty:`Beginner`,title:`Loading State`,description:`Applications often need to show different content while waiting for data to load. A loading state lets users know that work is happening in the background instead of leaving the page blank. Once the data is ready, the loading message is replaced with the normal content.`,fileName:`App.jsx`,code:`function App({ loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <h1>Data Loaded</h1>;
}

export default App;`}),y({id:1039,language:`React`,category:`Props`,difficulty:`Beginner`,title:`Passing Functions`,description:`Props are not limited to data—they can also contain functions. Passing a function from a parent to a child allows the child component to communicate back to the parent. This is one of the most common patterns for handling user interactions in React.`,fileName:`Button.jsx`,code:`function Button({ onSave }) {
  return (
    <button onClick={onSave}>
      Save
    </button>
  );
}

export default Button;`}),y({id:1040,language:`React`,category:`Effects`,difficulty:`Beginner`,title:`Effect Cleanup`,description:`Some effects create resources that should be cleaned up when a component is removed. Returning a cleanup function from useEffect allows React to stop timers, remove event listeners, or cancel subscriptions. Cleaning up effects helps prevent memory leaks and unexpected behavior.`,fileName:`Timer.jsx`,code:`import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>Timer</h1>;
}

export default Timer;`}),y({id:1041,language:`React`,category:`Effects`,difficulty:`Beginner`,title:`Effect Dependencies`,description:`The dependency array controls when a useEffect runs. React compares the values in the array after each render and only runs the effect if one of them has changed. Choosing the correct dependencies is important because it keeps your component up to date without running unnecessary code.`,fileName:`Profile.jsx`,code:`import { useEffect } from "react";

function Profile({ user }) {
  useEffect(() => {
    console.log(user.name);
  }, [user]);

  return <h1>{user.name}</h1>;
}

export default Profile;`}),y({id:1042,language:`React`,category:`Forms`,difficulty:`Beginner`,title:`Multiple Inputs`,description:`Many forms contain more than one input, and React can manage all of them using state. Each input updates only the piece of state it is responsible for, allowing the form to stay synchronized with what the user enters. This pattern is used in login, registration, and profile forms.`,fileName:`Form.jsx`,code:`import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
}

export default Form;`}),y({id:1043,language:`React`,category:`State`,difficulty:`Beginner`,title:`Derived State`,description:`Not every value needs to be stored in state. If a value can be calculated from existing state or props, it is usually better to compute it during rendering instead of creating additional state. This keeps components simpler and avoids unnecessary updates.`,fileName:`Counter.jsx`,code:`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(5);

  const doubled = count * 2;

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <p>{doubled}</p>
    </>
  );
}

export default Counter;`}),y({id:1044,language:`React`,category:`Events`,difficulty:`Beginner`,title:`Multiple Event Handlers`,description:`A component can respond to many different user events, not just clicks. React provides event handlers for keyboard input, mouse movement, focus changes, and much more. Learning these events allows you to build rich, interactive user interfaces.`,fileName:`Input.jsx`,code:`function Input() {
  return (
    <input
      onFocus={() => console.log("Focused")}
      onBlur={() => console.log("Blurred")}
    />
  );
}

export default Input;`}),y({id:1045,language:`React`,category:`Components`,difficulty:`Beginner`,title:`Reusable Component`,description:`One of React's biggest strengths is creating components that can be reused throughout an application. Instead of copying the same JSX multiple times, you can build one component and render it wherever it is needed. This reduces duplicated code and makes future updates much easier.`,fileName:`App.jsx`,code:`function Button() {
  return <button>Click Me</button>;
}

function App() {
  return (
    <>
      <Button />
      <Button />
      <Button />
    </>
  );
}

export default App;`}),y({id:1046,language:`React`,category:`Props`,difficulty:`Beginner`,title:`Prop Destructuring`,description:`Props are passed into a component as a single object, but you'll usually access them using object destructuring. Destructuring lets you pull out only the values you need, making your code shorter and easier to read. This has become the standard way of working with props in modern React.`,fileName:`User.jsx`,code:`function User({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}

export default User;`}),y({id:1047,language:`React`,category:`State`,difficulty:`Beginner`,title:`Disable Button`,description:`State is often used to control whether an element should be interactive. The disabled prop allows React to enable or disable buttons based on the current state of the application. This pattern is commonly used while loading data, validating forms, or preventing duplicate submissions.`,fileName:`Button.jsx`,code:`import { useState } from "react";

function Button() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <button disabled={disabled}>
        Submit
      </button>

      <button onClick={() => setDisabled(!disabled)}>
        Toggle
      </button>
    </>
  );
}

export default Button;`}),y({id:1048,language:`React`,category:`Lists`,difficulty:`Beginner`,title:`Empty List`,description:`It's common for an array to be empty when an application first loads or when no results are found. Before rendering a list, you can check whether it contains any items and display a helpful message if it doesn't. This creates a better user experience than showing an empty page.`,fileName:`Users.jsx`,code:`function Users({ users }) {
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <>
      {users.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </>
  );
}

export default Users;`}),y({id:1049,language:`React`,category:`State Management`,difficulty:`Intermediate`,title:`Lifting State Up`,description:`Sometimes multiple components need access to the same piece of data. Instead of giving each component its own state, React encourages moving that state to their closest common parent and passing it down through props. This pattern, called lifting state up, keeps your data synchronized and creates a single source of truth.`,fileName:`App.jsx`,code:`import { useState } from "react";

function Child({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Child
      count={count}
      setCount={setCount}
    />
  );
}

export default App;`}),y({id:1050,language:`React`,category:`State Management`,difficulty:`Intermediate`,title:`Prop Drilling`,description:`Prop drilling happens when data must be passed through several components that don't actually use it, just so a deeper component can receive it. While props are the normal way to share data, repeatedly passing them through many levels can make an application harder to maintain. This problem is one reason React provides the Context API.`,fileName:`App.jsx`,code:`function Grandchild({ name }) {
  return <h2>{name}</h2>;
}

function Child({ name }) {
  return <Grandchild name={name} />;
}

function App() {
  return <Child name="Tyler" />;
}

export default App;`}),y({id:1051,language:`React`,category:`Refs`,difficulty:`Intermediate`,title:`useRef`,description:`The useRef hook stores a value that persists between renders without causing the component to re-render when it changes. It is most commonly used to directly access DOM elements, such as focusing an input or measuring an element. Refs are useful when you need to interact with the browser outside of React's normal rendering process.`,fileName:`Input.jsx`,code:`import { useRef } from "react";

function Input() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>
        Focus
      </button>
    </>
  );
}

export default Input;`}),y({id:1052,language:`React`,category:`Refs`,difficulty:`Intermediate`,title:`Access DOM Element`,description:`Unlike state and props, refs allow you to work directly with a DOM element after React has rendered it. This is helpful when focusing inputs, scrolling to elements, or reading measurements that React doesn't manage automatically. Direct DOM access should be used only when necessary.`,fileName:`App.jsx`,code:`import { useRef } from "react";

function App() {
  const headingRef = useRef(null);

  function logElement() {
    console.log(headingRef.current);
  }

  return (
    <>
      <h1 ref={headingRef}>Hello</h1>
      <button onClick={logElement}>
        Log
      </button>
    </>
  );
}

export default App;`}),y({id:1053,language:`React`,category:`Context`,difficulty:`Intermediate`,title:`Create Context`,description:`The Context API allows data to be shared across many components without passing props through every level of the component tree. It is useful for information that many parts of an application need, such as the current user, theme, or authentication status. Creating a context is the first step toward eliminating unnecessary prop drilling.`,fileName:`ThemeContext.jsx`,code:`import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;`}),y({id:1054,language:`React`,category:`Context`,difficulty:`Intermediate`,title:`Context Provider`,description:`A Context Provider makes a value available to every component inside of it. Instead of passing data through multiple layers of props, the provider shares the value directly with any component that needs it. Most React applications wrap providers near the top of the component tree.`,fileName:`App.jsx`,code:`import ThemeContext from "./ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Home />
    </ThemeContext.Provider>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default App;`}),y({id:1055,language:`React`,category:`Context`,difficulty:`Intermediate`,title:`useContext`,description:`The useContext hook allows a component to read data from a Context Provider. This removes the need to pass props through intermediate components that don't use the data themselves. It is commonly used for themes, authentication, language settings, and user information.`,fileName:`Home.jsx`,code:`import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Home() {
  const theme = useContext(ThemeContext);

  return <h1>{theme}</h1>;
}

export default Home;`}),y({id:1056,language:`React`,category:`Custom Hooks`,difficulty:`Intermediate`,title:`Custom Hook`,description:`Custom hooks let you reuse stateful logic between multiple components. Instead of copying the same useState or useEffect code into different files, you can place it inside a custom hook and use it wherever it's needed. A custom hook is simply a JavaScript function whose name starts with 'use'.`,fileName:`useCounter.js`,code:`import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
}

export default useCounter;`}),y({id:1057,language:`React`,category:`Custom Hooks`,difficulty:`Intermediate`,title:`Using a Custom Hook`,description:`Once you've created a custom hook, any component can use it just like React's built-in hooks. This keeps your components focused on rendering while moving reusable logic into one central location. Custom hooks are a great way to reduce duplicated code across an application.`,fileName:`Counter.jsx`,code:`import useCounter from "./useCounter";

function Counter() {
  const { count, setCount } = useCounter();

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default Counter;`}),y({id:1058,language:`React`,category:`State Management`,difficulty:`Intermediate`,title:`useReducer`,description:`The useReducer hook is an alternative to useState for managing more complex state. Instead of updating state directly, you dispatch actions to a reducer function that decides how the state should change. This pattern becomes especially useful as your application grows and state updates become more complicated.`,fileName:`Counter.jsx`,code:`import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <button
      onClick={() => dispatch({ type: "increment" })}
    >
      {count}
    </button>
  );
}

export default Counter;`}),y({id:1059,language:`React`,category:`Performance`,difficulty:`Intermediate`,title:`useMemo`,description:`The useMemo hook remembers the result of an expensive calculation so it doesn't have to run on every render. React only recalculates the value when one of its dependencies changes. This can improve performance when working with large datasets or complex computations.`,fileName:`Numbers.jsx`,code:`import { useMemo } from "react";

function Numbers({ numbers }) {
  const total = useMemo(() => {
    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]);

  return <h1>{total}</h1>;
}

export default Numbers;`}),y({id:1060,language:`React`,category:`Performance`,difficulty:`Intermediate`,title:`useCallback`,description:`The useCallback hook remembers a function between renders. This prevents React from creating a brand new function every time the component renders, which can improve performance when passing functions to child components. It is most useful in combination with memoized components.`,fileName:`App.jsx`,code:`import { useCallback } from "react";

function App() {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}

export default App;`}),y({id:1061,language:`React`,category:`Performance`,difficulty:`Intermediate`,title:`React.memo`,description:`React.memo prevents a component from re-rendering when its props have not changed. This can improve performance in larger applications where rendering is expensive. It should only be used when unnecessary re-renders are actually causing a performance problem.`,fileName:`Greeting.jsx`,code:`import { memo } from "react";

function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}

export default memo(Greeting);`}),y({id:1062,language:`React`,category:`Effects`,difficulty:`Intermediate`,title:`Loading and Error State`,description:`When fetching data, applications should handle more than just the successful response. Users should know when data is loading and be informed if something goes wrong. Managing loading, success, and error states creates a much better user experience and is considered a best practice.`,fileName:`Users.jsx`,code:`import { useState, useEffect } from "react";

function Users() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .catch(() => setError("Failed"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <h1>Users</h1>;
}

export default Users;`}),y({id:1063,language:`React`,category:`Effects`,difficulty:`Intermediate`,title:`Fetch JSON Data`,description:`Most APIs return data in JSON format, so fetching data usually involves converting the response before using it. After calling fetch(), the response is typically transformed with response.json() and then stored in state. This is one of the most common workflows in modern React applications.`,fileName:`Users.jsx`,code:`import { useEffect } from "react";

function Users() {
  useEffect(() => {
    async function loadUsers() {
      const response = await fetch("/api/users");
      const users = await response.json();
      console.log(users);
    }

    loadUsers();
  }, []);

  return <h1>Users</h1>;
}

export default Users;`}),y({id:1064,language:`React`,category:`State Management`,difficulty:`Intermediate`,title:`Search Filter`,description:`Searching through a list is a common feature in React applications. As the user types, React updates the search text in state and filters the data before rendering it. This creates a responsive interface where the displayed results update immediately without reloading the page.`,fileName:`Users.jsx`,code:`import { useState } from "react";

const users = [
  "Tyler",
  "Sarah",
  "Mike",
];

function Users() {
  const [search, setSearch] = useState("");

  const filtered = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </>
  );
}

export default Users;`}),y({id:1065,language:`React`,category:`State Management`,difficulty:`Intermediate`,title:`Sort a List`,description:`Displaying data in different orders is another common requirement in React. Before rendering a list, you can create a copy of the array and sort it based on your desired criteria. Creating a copy first prevents you from accidentally modifying the original data.`,fileName:`Users.jsx`,code:`const users = [
  "Sarah",
  "Tyler",
  "Mike",
];

function Users() {
  const sorted = [...users].sort();

  return (
    <>
      {sorted.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </>
  );
}

export default Users;`}),y({id:1066,language:`React`,category:`State Management`,difficulty:`Intermediate`,title:`Pagination`,description:`Large collections of data are often split into smaller pages instead of displaying everything at once. Pagination improves performance and makes information easier for users to browse. React typically stores the current page in state and calculates which items should be displayed.`,fileName:`Users.jsx`,code:`import { useState } from "react";

const users = [
  "Tyler",
  "Sarah",
  "Mike",
  "Emily",
];

function Users() {
  const [page] = useState(1);

  const pageSize = 2;

  const currentUsers = users.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <>
      {currentUsers.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </>
  );
}

export default Users;`}),y({id:1067,language:`React`,category:`Browser APIs`,difficulty:`Intermediate`,title:`Local Storage`,description:`Local Storage allows your application to save small amounts of data inside the user's browser. Information stored there remains available even after the page is refreshed or the browser is closed. React commonly uses Local Storage to remember settings, themes, or authentication tokens.`,fileName:`App.jsx`,code:`function App() {
  function saveTheme() {
    localStorage.setItem("theme", "dark");
  }

  return (
    <button onClick={saveTheme}>
      Save Theme
    </button>
  );
}

export default App;`}),y({id:1068,language:`React`,category:`Browser APIs`,difficulty:`Intermediate`,title:`Read Local Storage`,description:`Data saved in Local Storage can be retrieved whenever your application starts. This allows users to keep preferences such as themes or language settings between visits. Reading from Local Storage is often done when a component first loads.`,fileName:`App.jsx`,code:`function App() {
  const theme = localStorage.getItem("theme");

  return <h1>{theme}</h1>;
}

export default App;`}),y({id:1069,language:`React`,category:`Browser APIs`,difficulty:`Intermediate`,title:`Save with useEffect`,description:`A common React pattern is automatically saving data whenever state changes. By combining useEffect with Local Storage, your application can persist information without requiring the user to click a save button. This technique is frequently used for settings, drafts, and user preferences.`,fileName:`App.jsx`,code:`import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme("dark")}>
      Dark Mode
    </button>
  );
}

export default App;`}),y({id:1070,language:`React`,category:`State Management`,difficulty:`Intermediate`,title:`Lifted Form State`,description:`When multiple components need access to the same form data, the state should live in their closest shared parent. Child components receive both the current value and the setter through props. This keeps every part of the interface synchronized with the same data.`,fileName:`App.jsx`,code:`import { useState } from "react";

function Input({ value, setValue }) {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

function App() {
  const [text, setText] = useState("");

  return (
    <Input
      value={text}
      setValue={setText}
    />
  );
}

export default App;`}),y({id:1071,language:`React`,category:`State Management`,difficulty:`Intermediate`,title:`Derived Filtered List`,description:`Some values should be calculated from existing state instead of being stored separately. In this example, the filtered list is derived from the search text and the original data each time the component renders. This avoids duplicated state and keeps your data consistent.`,fileName:`Users.jsx`,code:`import { useState } from "react";

const users = [
  "Tyler",
  "Sarah",
  "Mike",
];

function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </>
  );
}

export default Users;`}),y({id:1072,language:`React`,category:`Performance`,difficulty:`Intermediate`,title:`Memoized Filter`,description:`Filtering large collections on every render can become expensive as your application grows. The useMemo hook can cache the filtered results so React only recalculates them when the search term or data changes. This helps improve performance when working with large datasets.`,fileName:`Users.jsx`,code:`import { useMemo, useState } from "react";

const users = [
  "Tyler",
  "Sarah",
  "Mike",
];

function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </>
  );
}

export default Users;`}),y({id:1073,language:`React`,category:`Effects`,difficulty:`Intermediate`,title:`Debounced Search`,description:`Some actions, like searching an API, shouldn't happen every time the user presses a key. Debouncing waits until the user stops typing before running the action, reducing unnecessary work and network requests. This pattern is commonly used in search bars and autocomplete fields.`,fileName:`Search.jsx`,code:`import { useEffect, useState } from "react";

function Search() {
  const [text, setText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(text);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default Search;`}),y({id:1074,language:`React`,category:`State Management`,difficulty:`Intermediate`,title:`Toggle Theme`,description:`Many applications allow users to switch between light and dark mode. React can store the current theme in state and update the interface whenever it changes. This is a practical example of using state to control the appearance of an application.`,fileName:`App.jsx`,code:`import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>

      <h1>{theme}</h1>
    </>
  );
}

export default App;`}),y({id:1075,language:`React`,category:`Custom Hooks`,difficulty:`Intermediate`,title:`useLocalStorage Hook`,description:`As applications grow, you'll often reuse the same Local Storage logic in multiple places. Creating a custom hook keeps that logic in one location while making it easy for any component to save and load persistent values. This is a common real-world use case for custom hooks.`,fileName:`useLocalStorage.js`,code:`import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  return [value, setValue];
}

export default useLocalStorage;`}),y({id:1076,language:`React`,category:`React Router`,difficulty:`Advanced`,title:`BrowserRouter`,description:`React Router allows a single-page application to display different pages without performing a full page refresh. BrowserRouter provides the routing system that keeps the URL and your React components synchronized. It is typically wrapped around your entire application near the root.`,fileName:`main.jsx`,code:`import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);`}),y({id:1077,language:`React`,category:`React Router`,difficulty:`Advanced`,title:`Routes and Route`,description:`Routes connect specific URL paths to the components that should be displayed. When the browser's URL matches a route, React Router renders the associated component without reloading the page. This is the foundation of navigation in modern React applications.`,fileName:`App.jsx`,code:`import {
  Routes,
  Route,
} from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;`}),y({id:1078,language:`React`,category:`React Router`,difficulty:`Advanced`,title:`Link`,description:`The Link component lets users navigate between pages without refreshing the browser. Unlike a normal HTML anchor tag, Link works with React Router to update the URL while keeping your single-page application running. Nearly every multi-page React application uses Link for navigation.`,fileName:`Navbar.jsx`,code:`import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
}

export default Navbar;`}),y({id:1079,language:`React`,category:`React Router`,difficulty:`Advanced`,title:`useNavigate`,description:`The useNavigate hook allows your code to change pages programmatically instead of waiting for the user to click a link. This is commonly used after actions like logging in, registering, submitting a form, or deleting an item. It gives your application full control over navigation.`,fileName:`Login.jsx`,code:`import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}

export default Login;`}),y({id:1080,language:`React`,category:`React Router`,difficulty:`Advanced`,title:`useParams`,description:`Dynamic routes allow part of the URL to change while still using the same component. The useParams hook reads those values from the URL, making it possible to display information for a specific user, product, task, or article. This pattern is extremely common when building CRUD applications.`,fileName:`User.jsx`,code:`import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h1>User {id}</h1>;
}

export default User;`}),y({id:1081,language:`React`,category:`React Router`,difficulty:`Advanced`,title:`Nested Routes`,description:`Nested routes allow related pages to share a common layout while displaying different content inside of it. Instead of rebuilding the same navigation or sidebar for every page, React Router renders child routes inside a shared parent component. This keeps your application organized and reduces duplicated code.`,fileName:`App.jsx`,code:`import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Outlet />
    </>
  );
}

function Settings() {
  return <h2>Settings</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="settings"
          element={<Settings />}
        />
      </Route>
    </Routes>
  );
}

export default App;`}),y({id:1082,language:`React`,category:`Authentication`,difficulty:`Advanced`,title:`Protected Route`,description:`Some pages should only be available to authenticated users. A protected route checks whether the user is logged in before rendering the page, redirecting them somewhere else if they are not. This is a standard pattern in applications with user accounts.`,fileName:`ProtectedRoute.jsx`,code:`import { Navigate } from "react-router-dom";

function ProtectedRoute({
  isLoggedIn,
  children,
}) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;`}),y({id:1083,language:`React`,category:`Authentication`,difficulty:`Advanced`,title:`Authentication Context`,description:`Authentication information is needed throughout most applications, making it a perfect use case for React Context. Instead of passing the current user and login status through props, a context provider makes that information available anywhere in the application. This keeps authentication logic centralized and easy to access.`,fileName:`AuthContext.jsx`,code:`import { createContext } from "react";

const AuthContext = createContext();

export default AuthContext;`}),y({id:1084,language:`React`,category:`Authentication`,difficulty:`Advanced`,title:`useAuth Hook`,description:`As applications grow, accessing authentication data directly with useContext everywhere can become repetitive. A custom useAuth hook wraps that logic into a single reusable function, making your components cleaner and easier to read. This is the pattern you'll see in many production React applications.`,fileName:`useAuth.js`,code:`import { useContext } from "react";
import AuthContext from "./AuthContext";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;`}),y({id:1085,language:`React`,category:`API`,difficulty:`Advanced`,title:`Fetch on Mount`,description:`Many pages load data as soon as they appear on the screen. By combining useEffect with state, a component can request information from an API after it mounts and display the results when they arrive. This pattern is used throughout dashboards, profile pages, and data-driven applications.`,fileName:`Users.jsx`,code:`import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    }

    loadUsers();
  }, []);

  return (
    <>
      {users.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </>
  );
}

export default Users;`}),y({id:1086,language:`React`,category:`API`,difficulty:`Advanced`,title:`POST Request`,description:`React applications don't just display data—they also send it to servers. POST requests are commonly used to create new resources such as users, tasks, or comments. After submitting data, applications often refresh the displayed information or navigate the user to another page.`,fileName:`CreateUser.jsx`,code:`async function createUser() {
  await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Tyler",
    }),
  });
}

export default createUser;`}),y({id:1087,language:`React`,category:`API`,difficulty:`Advanced`,title:`PUT Request`,description:`PUT requests are used to update existing data on a server. After a user edits information such as a profile or task, React sends the updated values to the backend so they can be saved permanently. Updating server data is one of the core pieces of CRUD applications.`,fileName:`UpdateUser.jsx`,code:`async function updateUser(id) {
  await fetch(\`/api/users/\${id}\`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Updated Name",
    }),
  });
}

export default updateUser;`}),y({id:1088,language:`React`,category:`API`,difficulty:`Advanced`,title:`DELETE Request`,description:`DELETE requests remove data from a server, such as deleting a task or user account. After a successful request, React usually updates its local state so the deleted item disappears immediately from the page. This completes the final operation of the CRUD workflow.`,fileName:`DeleteUser.jsx`,code:`async function deleteUser(id) {
  await fetch(\`/api/users/\${id}\`, {
    method: "DELETE",
  });
}

export default deleteUser;`}),y({id:1089,language:`React`,category:`API`,difficulty:`Advanced`,title:`Optimistic UI`,description:`Optimistic UI updates the interface before the server responds, making an application feel much faster. React immediately updates the local state and assumes the request will succeed, then corrects the UI if the request fails. This technique is commonly used in professional applications to create a smoother user experience.`,fileName:`Todo.jsx`,code:`import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState(["React"]);

  function addTask() {
    setTasks([...tasks, "JavaScript"]);
  }

  return (
    <>
      <button onClick={addTask}>
        Add Task
      </button>

      {tasks.map((task) => (
        <p key={task}>{task}</p>
      ))}
    </>
  );
}

export default Todo;`}),y({id:1090,language:`React`,category:`Performance`,difficulty:`Advanced`,title:`Lazy Loading`,description:`Large applications don't need to download every page immediately. React.lazy allows components to be loaded only when they are actually needed, reducing the initial bundle size and helping pages load faster. This technique is known as code splitting.`,fileName:`App.jsx`,code:`import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

export default Dashboard;`}),y({id:1091,language:`React`,category:`Performance`,difficulty:`Advanced`,title:`Suspense`,description:`When a lazily loaded component is still being downloaded, React needs something to display in the meantime. Suspense provides a fallback interface, such as a loading spinner or message, until the component is ready. It works together with React.lazy to improve the loading experience.`,fileName:`App.jsx`,code:`import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;`}),y({id:1092,language:`React`,category:`Error Handling`,difficulty:`Advanced`,title:`Error Boundary`,description:`Error boundaries prevent your entire application from crashing when a component throws an error. Instead of displaying a blank screen, they catch rendering errors and show a fallback interface. They are an important tool for making production applications more reliable.`,fileName:`ErrorBoundary.jsx`,code:`import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;`}),y({id:1093,language:`React`,category:`Components`,difficulty:`Advanced`,title:`Reusable Modal`,description:`Modal windows are one of the most common reusable UI components in React applications. Rather than creating a different modal for every feature, developers typically build one flexible component that displays different content using props or children. This keeps applications organized and greatly reduces duplicated code.`,fileName:`Modal.jsx`,code:`function Modal({ children }) {
  return (
    <div className="modal">
      {children}
    </div>
  );
}

export default Modal;`}),y({id:1094,language:`React`,category:`Components`,difficulty:`Advanced`,title:`Portal`,description:`Sometimes a component needs to render outside of its normal position in the React component tree. React Portals make this possible while still allowing the component to behave like part of the same application. Portals are commonly used for modals, tooltips, and dropdown menus that should appear above the rest of the page.`,fileName:`Modal.jsx`,code:`import { createPortal } from "react-dom";

function Modal() {
  return createPortal(
    <h1>Hello Portal</h1>,
    document.body
  );
}

export default Modal;`}),y({id:1095,language:`React`,category:`State Management`,difficulty:`Advanced`,title:`Complex Reducer`,description:`As state becomes more complex, useReducer helps organize multiple types of updates into a single reducer function. Instead of scattering update logic throughout your component, each action describes what happened and the reducer determines the next state. This approach makes larger applications easier to understand and maintain.`,fileName:`Counter.jsx`,code:`import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "reset":
      return {
        count: 0,
      };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: "increment" })
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch({ type: "reset" })
        }
      >
        Reset
      </button>

      <p>{state.count}</p>
    </>
  );
}

export default Counter;`}),y({id:1096,language:`React`,category:`Custom Hooks`,difficulty:`Advanced`,title:`Window Width Hook`,description:`Custom hooks can also wrap browser events to make them reusable across your application. In this example, the hook listens for window resize events and provides the current browser width to any component that needs it. This keeps event listener logic in one reusable location.`,fileName:`useWindowWidth.js`,code:`import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return width;
}

export default useWindowWidth;`}),y({id:1097,language:`React`,category:`Performance`,difficulty:`Advanced`,title:`Infinite Scroll`,description:`Instead of loading every item at once, many applications load additional content as the user scrolls. Infinite scrolling improves performance by requesting only the data that is currently needed. You'll commonly see this pattern in social media feeds, product listings, and news websites.`,fileName:`Feed.jsx`,code:`import { useEffect } from "react";

function Feed() {
  useEffect(() => {
    function handleScroll() {
      console.log("Load more...");
    }

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return <h1>Feed</h1>;
}

export default Feed;`}),y({id:1098,language:`React`,category:`Components`,difficulty:`Advanced`,title:`Compound Components`,description:`Compound components are a pattern where multiple components work together to build a larger feature while sharing a common purpose. Instead of one giant component with dozens of props, each smaller component has a focused responsibility. This pattern is used by many popular React component libraries.`,fileName:`Card.jsx`,code:`function Card({ children }) {
  return <div>{children}</div>;
}

Card.Header = function Header({ children }) {
  return <h2>{children}</h2>;
};

Card.Body = function Body({ children }) {
  return <p>{children}</p>;
};

export default Card;`}),y({id:1099,language:`React`,category:`Architecture`,difficulty:`Advanced`,title:`Folder Structure`,description:`As React applications grow, organizing files becomes just as important as writing code. Separating components, pages, hooks, contexts, and utilities into their own folders makes projects easier to navigate and maintain. A well-organized folder structure also makes it easier for teams to collaborate on the same codebase.`,fileName:`src/`,code:`src/
├── components/
├── pages/
├── hooks/
├── context/
├── api/
├── assets/
├── App.jsx
└── main.jsx`}),y({id:1100,language:`React`,category:`Architecture`,difficulty:`Advanced`,title:`Feature-Based Structure`,description:`Many larger React applications organize files by feature instead of by file type. Each feature contains its own components, hooks, styles, and utilities, making related code easy to find. This approach scales well as applications become larger and more complex.`,fileName:`src/`,code:`src/
├── features/
│   ├── auth/
│   ├── dashboard/
│   └── projects/
├── components/
├── App.jsx
└── main.jsx`}),y({id:1101,language:`React`,category:`Architecture`,difficulty:`Advanced`,title:`Lifting vs Context`,description:`Both lifting state and Context help components share data, but they solve different problems. Lifting state is usually the best choice when only a few related components need the data, while Context is better for information used throughout the application. Choosing the right approach keeps your code simpler and easier to maintain.`,fileName:`App.jsx`,code:`function App() {
  return (
    <h1>
      Lift state for nearby components.
      Use Context for global data.
    </h1>
  );
}

export default App;`}),y({id:1102,language:`React`,category:`Best Practices`,difficulty:`Advanced`,title:`Single Responsibility`,description:`A React component should ideally have one clear responsibility. Components that become too large are harder to understand, test, and reuse. Breaking large components into smaller ones is one of the most important habits for writing clean React code.`,fileName:`Dashboard.jsx`,code:`function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
}

export default Dashboard;`}),y({id:1103,language:`React`,category:`Best Practices`,difficulty:`Advanced`,title:`Thinking in React`,description:`Building React applications starts by breaking the interface into small reusable components. Once the components are identified, determine which data belongs in state and where that state should live. Thinking this way helps you design applications that are easier to build, understand, and maintain.`,fileName:`App.jsx`,code:`function App() {
  return (
    <h1>
      Build small components.
      Share state wisely.
      Reuse everything possible.
    </h1>
  );
}

export default App;`})],S=[y({id:2001,language:`Express`,category:`Server`,difficulty:`Beginner`,title:`Basic Express Server`,description:`Learn how to create the foundation of an Express application. A server listens for incoming requests and provides a place to define routes and backend logic.`,fileName:`server.js`,code:`import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});`}),y({id:2002,language:`Express`,category:`Routes`,difficulty:`Beginner`,title:`GET Route`,description:`Learn how to create a GET route that sends data back to a client. GET routes are commonly used when retrieving information from an API.`,fileName:`server.js`,code:`import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);`}),y({id:2003,language:`Express`,category:`Middleware`,difficulty:`Beginner`,title:`JSON Middleware`,description:`Learn how Express middleware processes incoming requests. express.json allows your server to read JSON data sent from a frontend application.`,fileName:`server.js`,code:`import express from "express";

const app = express();

app.use(express.json());

app.listen(3000);`}),y({id:2004,language:`Express`,category:`Routes`,difficulty:`Intermediate`,title:`Route Parameters`,description:`Learn how to capture dynamic values from URLs using route parameters. Route parameters are commonly used when requesting specific resources like users, projects, or tasks.`,fileName:`server.js`,code:`app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  res.send(id);
});`}),y({id:2005,language:`Express`,category:`Routes`,difficulty:`Intermediate`,title:`POST Route`,description:`Learn how to create a POST route for receiving new data from a client. POST routes are commonly used when creating users, projects, tasks, or other database records.`,fileName:`server.js`,code:`app.post("/users", (req, res) => {
  const user = req.body;

  res.status(201).send(user);
});`}),y({id:2006,language:`Express`,category:`Routes`,difficulty:`Intermediate`,title:`GET Single Resource`,description:`Learn how to create a route that retrieves one specific resource. This pattern is commonly used for endpoints like getting one user, project, task, or product by its ID.`,fileName:`server.js`,code:`app.get("/users/:id", async (req, res) => {
  const user = await getUserById(req.params.id);

  res.send(user);
});`}),y({id:2007,language:`Express`,category:`Routes`,difficulty:`Intermediate`,title:`DELETE Route`,description:`Learn how to create a DELETE route for removing data. DELETE endpoints are commonly used when deleting users, tasks, projects, or other database records.`,fileName:`server.js`,code:`app.delete("/users/:id", async (req, res) => {
  await deleteUser(req.params.id);

  res.sendStatus(204);
});`}),y({id:2008,language:`Express`,category:`Routes`,difficulty:`Intermediate`,title:`PUT Route`,description:`Learn how to update existing data with a PUT route. PUT requests are commonly used when editing complete records like user profiles or project information.`,fileName:`server.js`,code:`app.put("/users/:id", async (req, res) => {
  const updatedUser = await updateUser(req.params.id, req.body);

  res.send(updatedUser);
});`}),y({id:2009,language:`Express`,category:`Routes`,difficulty:`Intermediate`,title:`Router File`,description:`Learn how to organize Express routes into separate files using routers. Splitting routes keeps larger applications easier to maintain and is common in production projects.`,fileName:`users.js`,code:`import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users");
});

export default router;`}),y({id:2010,language:`Express`,category:`Routes`,difficulty:`Intermediate`,title:`Mount Router`,description:`Learn how to connect a router file to your main Express application. Mounting routers allows different sections of an API to have their own route files.`,fileName:`server.js`,code:`import userRouter from "./users.js";

app.use("/users", userRouter);`}),y({id:2011,language:`Express`,category:`Middleware`,difficulty:`Intermediate`,title:`Custom Middleware`,description:`Learn how to create your own middleware functions. Middleware runs between the request and response cycle and is commonly used for logging, authentication, and validation.`,fileName:`middleware.js`,code:`function logger(req, res, next) {
  console.log(req.method, req.url);

  next();
}

app.use(logger);`}),y({id:2012,language:`Express`,category:`Middleware`,difficulty:`Intermediate`,title:`Request Validation`,description:`Learn how middleware can validate incoming request data before it reaches your route. Validation helps prevent invalid data from being stored in your database.`,fileName:`validation.js`,code:`function requireBody(req, res, next) {
  if (!req.body.name) {
    return res.status(400).send("Missing name");
  }

  next();
}`}),y({id:2013,language:`Express`,category:`Middleware`,difficulty:`Intermediate`,title:`Error Middleware`,description:`Learn how Express handles errors with special middleware. Centralized error handling keeps routes cleaner and provides consistent responses when problems occur.`,fileName:`error.js`,code:`function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).send("Server Error");
}

app.use(errorHandler);`}),y({id:2014,language:`Express`,category:`Middleware`,difficulty:`Intermediate`,title:`Authentication Middleware`,description:`Learn how middleware can protect routes by checking whether a user is authenticated. Protected routes are commonly used for accounts, dashboards, and private data.`,fileName:`auth.js`,code:`function requireUser(req, res, next) {
  if (!req.user) {
    return res.sendStatus(401);
  }

  next();
}

app.get("/profile", requireUser, (req, res) => {
  res.send(req.user);
});`}),y({id:2015,language:`Express`,category:`Middleware`,difficulty:`Intermediate`,title:`Middleware Order`,description:`Learn why the order of Express middleware matters. Middleware runs from top to bottom, so placing authentication, JSON parsing, or logging in the correct order affects how your application works.`,fileName:`server.js`,code:`app.use(express.json());

app.use(logger);

app.use("/users", userRouter);`}),y({id:2016,language:`Express`,category:`Authentication`,difficulty:`Intermediate`,title:`Hash Password`,description:`Learn how to securely store user passwords using bcrypt. Passwords should never be saved as plain text, so applications hash them before storing them in a database.`,fileName:`auth.js`,code:`import bcrypt from "bcrypt";

const hashedPassword = await bcrypt.hash(password, 10);`}),y({id:2017,language:`Express`,category:`Authentication`,difficulty:`Intermediate`,title:`Compare Password`,description:`Learn how to compare a user's password with a stored hash during login. bcrypt compares the values securely without exposing the original password.`,fileName:`auth.js`,code:`const valid = const valid = await bcrypt.compare(password, user.password);`}),y({id:2018,language:`Express`,category:`Authentication`,difficulty:`Intermediate`,title:`Create JWT Token`,description:`Learn how to create authentication tokens using JSON Web Tokens. JWTs allow servers to identify logged-in users without storing session information on the server.`,fileName:`jwt.js`,code:`const token = jwt.sign(
  { id: user.id },
  process.env.JWT_SECRET
);`}),y({id:2019,language:`Express`,category:`Authentication`,difficulty:`Intermediate`,title:`Verify JWT Token`,description:`Learn how to verify a JWT token sent by a client. Verification allows protected routes to confirm that a request comes from an authenticated user.`,fileName:`jwt.js`,code:`const payload = jwt.verify(token, process.env.JWT_SECRET);`}),y({id:2020,language:`Express`,category:`Authentication`,difficulty:`Intermediate`,title:`Bearer Token`,description:`Learn how authenticated requests send JWT tokens using the Authorization header. Bearer tokens are commonly used when connecting React applications to Express APIs.`,fileName:`auth.js`,code:`const auth = req.headers.authorization;

const token = auth.replace("Bearer ", "");`}),y({id:2021,language:`Express`,category:`Database`,difficulty:`Intermediate`,title:`Get All Records`,description:`Learn how to connect an Express route to a database query. This pattern is commonly used for retrieving lists of records like users, projects, tasks, or products.`,fileName:`users.js`,code:`app.get("/users", async (req, res) => {
  const users = await getUsers();

  res.send(users);
});`}),y({id:2022,language:`Express`,category:`Database`,difficulty:`Intermediate`,title:`Handle Missing Record`,description:`Learn how to check whether a database result exists before sending a response. Handling missing records prevents errors and allows APIs to return proper status codes.`,fileName:`users.js`,code:`const user = await getUserById(id);

if (!user) {
  return res.sendStatus(404);
}

res.send(user);`}),y({id:2023,language:`Express`,category:`Database`,difficulty:`Intermediate`,title:`Create Database Record`,description:`Learn how POST routes connect incoming request data to database creation functions. This pattern is used when creating users, tasks, projects, and other resources.`,fileName:`users.js`,code:`const user = await createUser(req.body);

res.status(201).send(user);`}),y({id:2024,language:`Express`,category:`Database`,difficulty:`Intermediate`,title:`Update Database Record`,description:`Learn how to update existing records through an API route. Update routes commonly receive an ID and new data, then save the changes to the database.`,fileName:`users.js`,code:`const user = await updateUser(req.params.id, req.body);

res.send(user);`}),y({id:2025,language:`Express`,category:`Database`,difficulty:`Intermediate`,title:`Delete Database Record`,description:`Learn how DELETE routes remove records from a database. This pattern is commonly used for deleting accounts, tasks, projects, or other stored information.`,fileName:`users.js`,code:`await deleteUser(req.params.id);

res.sendStatus(204);`}),y({id:2026,language:`Express`,category:`API Design`,difficulty:`Intermediate`,title:`REST Resource Naming`,description:`Learn how to design API routes using REST conventions. REST APIs use clear resource names like users, projects, and tasks instead of describing actions in the URL.`,fileName:`routes.js`,code:`app.get("/projects", getProjects);

app.get("/projects/:id", getProject);`}),y({id:2027,language:`Express`,category:`API Design`,difficulty:`Intermediate`,title:`HTTP Status Codes`,description:`Learn how to send the correct HTTP status codes from your API. Status codes communicate whether a request succeeded, failed, or needs additional action.`,fileName:`status.js`,code:`res.status(201).send(newUser);

res.status(404).send("Not Found");`}),y({id:2028,language:`Express`,category:`API Design`,difficulty:`Intermediate`,title:`Controller Function`,description:`Learn how to separate route logic into controller functions. Controllers keep route files clean by moving database and business logic into organized functions.`,fileName:`controllers.js`,code:`async function getUsers(req, res) {
  const users = await findUsers();

  res.send(users);
}`}),y({id:2029,language:`Express`,category:`API Design`,difficulty:`Intermediate`,title:`Async Route Error Handling`,description:`Learn how to handle errors inside asynchronous routes. Database calls and API requests can fail, so proper error handling prevents unexpected server crashes.`,fileName:`routes.js`,code:`app.get("/users", async (req, res) => {
  try {
    const users = await getUsers();

    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});`}),y({id:2030,language:`Express`,category:`API Design`,difficulty:`Intermediate`,title:`Request Validation Pattern`,description:`Learn how APIs validate incoming data before creating or updating records. Validation protects your database by ensuring required information is provided.`,fileName:`validation.js`,code:`if (!req.body.email) {
  return res.status(400).send("Email required");
}

next();`}),y({id:2031,language:`Express`,category:`Authentication`,difficulty:`Advanced`,title:`Register User Flow`,description:`Learn the typical process for creating a user account. Registration usually includes validating input, hashing the password, saving the user, and returning a safe response without exposing sensitive information.`,fileName:`register.js`,code:`const hashedPassword = await bcrypt.hash(password, 10);

const user = await createUser({ email, password: hashedPassword, });

res.status(201).send(user);`}),y({id:2032,language:`Express`,category:`Authentication`,difficulty:`Advanced`,title:`Login User Flow`,description:`Learn the typical login process in an Express application. Login routes verify credentials, create authentication tokens, and return information needed by the frontend.`,fileName:`login.js`,code:`const valid = await bcrypt.compare(password, user.password);

const token = jwt.sign({ id: user.id }, secret);

res.send({ token });`}),y({id:2033,language:`Express`,category:`Authorization`,difficulty:`Advanced`,title:`Admin Middleware`,description:`Learn how to restrict routes based on user permissions. Authorization checks whether an authenticated user has the correct role before allowing access.`,fileName:`admin.js`,code:`function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.sendStatus(403);
  }

  next();
}`}),y({id:2034,language:`Express`,category:`Authorization`,difficulty:`Advanced`,title:`Owner Check`,description:`Learn how APIs verify that a user owns the resource they are trying to modify. Ownership checks prevent users from editing or deleting someone else's data.`,fileName:`owner.js`,code:`if (task.created_by !== req.user.id) {
  return res.sendStatus(403);
}

next();`}),y({id:2035,language:`Express`,category:`Projects`,difficulty:`Advanced`,title:`Create Project Route`,description:`Learn how a real application creates a new resource. This pattern combines authentication, request data, database creation, and sending a response back to the frontend.`,fileName:`projects.js`,code:`app.post("/projects", requireUser, async (req, res) => {
  const project = await createProject(req.body);

  res.status(201).send(project);
});`}),y({id:2036,language:`Express`,category:`Projects`,difficulty:`Advanced`,title:`Get Project By ID`,description:`Learn how to retrieve a single resource using an ID parameter. This pattern is used throughout APIs when loading details for a specific project, task, user, or other record.`,fileName:`projects.js`,code:`app.get("/projects/:id", async (req, res) => {
  const project = await getProjectById(req.params.id);

  res.send(project);
});`}),y({id:2037,language:`Express`,category:`Relationships`,difficulty:`Advanced`,title:`Add Project Member`,description:`Learn how APIs handle relationships between database records. Many applications use routes like this to connect users, projects, teams, or other related resources.`,fileName:`projectMembers.js`,code:`app.post("/projects/:id/members", async (req, res) => {
  const member = await addMember(req.params.id, req.body.userId);

  res.status(201).send(member);
});`}),y({id:2038,language:`Express`,category:`Tasks`,difficulty:`Advanced`,title:`Create Task Route`,description:`Learn how task creation works in a project management API. This pattern combines request validation, authentication, and database creation to add new work items.`,fileName:`tasks.js`,code:`app.post("/tasks", requireUser, async (req, res) => {
  const task = await createTask(req.body);

  res.status(201).send(task);
});`}),y({id:2039,language:`Express`,category:`Tasks`,difficulty:`Advanced`,title:`Update Task Status`,description:`Learn how APIs update specific fields on existing records. Status updates are common in applications like project trackers, ticket systems, and workflow tools.`,fileName:`tasks.js`,code:`app.put("/tasks/:id", async (req, res) => {
  const task = await updateTask(req.params.id, req.body.status);

  res.send(task);
});`}),y({id:2040,language:`Express`,category:`Tasks`,difficulty:`Advanced`,title:`Task Notes Route`,description:`Learn how applications create related records connected to a main resource. Task updates, comments, and notes are commonly stored separately and linked with IDs.`,fileName:`taskUpdates.js`,code:`app.post("/tasks/:id/updates", async (req, res) => {
  const update = await createUpdate(req.params.id, req.body.note);

  res.status(201).send(update);
});`}),y({id:2041,language:`Express`,category:`Routes`,difficulty:`Advanced`,title:`Query Parameters`,description:`Learn how to read query parameters from a request URL. Query parameters are commonly used for filtering, searching, sorting, and pagination in APIs.`,fileName:`routes.js`,code:`app.get("/tasks", async (req, res) => {
  const { status } = req.query;

  const tasks = await getTasks(status);

  res.send(tasks);
});`}),y({id:2042,language:`Express`,category:`API Design`,difficulty:`Advanced`,title:`API Filtering`,description:`Learn how APIs filter data based on user requests. Filtering allows clients to request only the information they need instead of loading everything.`,fileName:`tasks.js`,code:`const tasks = await getTasks({
    status: req.query.status,
  });

res.send(tasks);`}),y({id:2043,language:`Express`,category:`API Design`,difficulty:`Advanced`,title:`Pagination`,description:`Learn how APIs limit large amounts of data using pagination. Pagination improves performance by loading smaller groups of records instead of everything at once.`,fileName:`users.js`,code:`const page = Number(req.query.page) || 1;

const users = await getUsers(page);

res.send(users);`}),y({id:2044,language:`Express`,category:`Server`,difficulty:`Advanced`,title:`Environment Variables`,description:`Learn how applications store sensitive configuration values outside the code using environment variables. This is commonly used for database URLs, API keys, and authentication secrets.`,fileName:`.env`,code:`const secret = process.env.JWT_SECRET;`}),y({id:2045,language:`Express`,category:`Server`,difficulty:`Advanced`,title:`CORS Middleware`,description:`Learn how CORS allows frontend applications and backend servers to communicate when they run on different domains or ports. This is commonly needed when connecting React apps to Express APIs.`,fileName:`server.js`,code:`import cors from "cors";

app.use(cors());`}),y({id:2046,language:`Express`,category:`Database`,difficulty:`Advanced`,title:`Include Related Data`,description:`Learn how APIs return related information from connected database tables. Many applications combine data like users with projects or tasks with their updates before sending a response.`,fileName:`projects.js`,code:`const project = await getProjectWithMembers(req.params.id);

res.send(project);`}),y({id:2047,language:`Express`,category:`Database`,difficulty:`Advanced`,title:`Database Error Handling`,description:`Learn how to safely handle database failures inside API routes. Proper error handling prevents crashes and allows your API to return useful responses.`,fileName:`database.js`,code:`try {
  const users = await getUsers();

  res.send(users);
} catch (error) {
  res.status(500).send(error);
}`}),y({id:2048,language:`Express`,category:`API Design`,difficulty:`Advanced`,title:`Nested Resource Route`,description:`Learn how to design routes for related resources. Nested routes clearly represent relationships, such as projects containing tasks or users belonging to workspaces.`,fileName:`routes.js`,code:`app.get("/projects/:id/tasks", getProjectTasks);`}),y({id:2049,language:`Express`,category:`Architecture`,difficulty:`Advanced`,title:`Service Function Pattern`,description:`Learn how to separate business logic from route handlers. Service functions keep Express routes smaller and make code easier to test and maintain.`,fileName:`services.js`,code:`async function createNewTask(data) {
  return await createTask(data);
}`}),y({id:2050,language:`Express`,category:`Architecture`,difficulty:`Advanced`,title:`Complete CRUD Feature`,description:`Learn how a complete Express feature is structured. Real applications combine routes, middleware, database functions, validation, and responses into one working feature.`,fileName:`tasks.js`,code:`router.get("/tasks", getTasks);

router.post("/tasks", createTask);

router.delete("/tasks/:id", deleteTask);`})],C=[y({id:3001,language:`HTML`,category:`Structure`,difficulty:`Beginner`,title:`Basic HTML Document`,description:``,fileName:`index.html`,code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>

</body>
</html>`}),y({id:3002,language:`HTML`,category:`Elements`,difficulty:`Beginner`,title:`Heading and Paragraph`,description:``,fileName:`index.html`,code:`<h1>Welcome</h1>

<p>
  This is my website.
</p>`}),y({id:3003,language:`HTML`,category:`Links`,difficulty:`Beginner`,title:`Anchor Tag`,description:``,fileName:`index.html`,code:`<a
  href="https://google.com"
  target="_blank"
>
  Google
</a>`}),y({id:3004,language:`HTML`,category:`Images`,difficulty:`Beginner`,title:`Image`,description:``,fileName:`index.html`,code:`<img
  src="./images/logo.png"
  alt="Company Logo"
/>`}),y({id:3005,language:`HTML`,category:`Lists`,difficulty:`Beginner`,title:`Unordered List`,description:``,fileName:`index.html`,code:`<ul>
  <li>JavaScript</li>
  <li>React</li>
  <li>Express</li>
</ul>`})],w=[y({id:4001,language:`CSS`,category:`Selectors`,difficulty:`Beginner`,title:`Class Selector`,description:``,fileName:`styles.css`,code:`.card {
  background: white;
  border-radius: 8px;
  padding: 16px;
}`}),y({id:4002,language:`CSS`,category:`Flexbox`,difficulty:`Beginner`,title:`Centered Flexbox`,description:``,fileName:`styles.css`,code:`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}),y({id:4003,language:`CSS`,category:`Grid`,difficulty:`Intermediate`,title:`Three Column Grid`,description:``,fileName:`styles.css`,code:`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`}),y({id:4004,language:`CSS`,category:`Pseudo Classes`,difficulty:`Intermediate`,title:`Button Hover`,description:``,fileName:`styles.css`,code:`button {
  background: royalblue;
  color: white;
}

button:hover {
  background: navy;
}`}),y({id:4005,language:`CSS`,category:`Positioning`,difficulty:`Intermediate`,title:`Fixed Header`,description:``,fileName:`styles.css`,code:`.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}`})],ee=[y({id:1,language:`SQL`,category:`Queries`,difficulty:`Beginner`,title:`Select All`,description:`Learn how to retrieve every record from a database table. SELECT is the foundation of reading data in SQL and is used constantly in backend applications.`,fileName:`queries.sql`,code:`SELECT *
FROM users;`}),y({id:2,language:`SQL`,category:`Filtering`,difficulty:`Beginner`,title:`WHERE Clause`,description:`Learn how to filter database results based on conditions. WHERE allows applications to find only the records that match specific requirements.`,fileName:`queries.sql`,code:`SELECT *
FROM users
WHERE age >= 18;`}),y({id:3,language:`SQL`,category:`Sorting`,difficulty:`Beginner`,title:`ORDER BY`,description:`Learn how to sort query results. ORDER BY is commonly used to display newest records, highest values, or alphabetical results.`,fileName:`queries.sql`,code:`SELECT *
FROM products
ORDER BY price DESC;`}),y({id:4,language:`SQL`,category:`Joining`,difficulty:`Intermediate`,title:`INNER JOIN`,description:`Learn how to combine related data from multiple tables. JOINs are essential for working with relational databases where information is separated across tables.`,fileName:`queries.sql`,code:`SELECT users.name, orders.total
FROM users
JOIN orders
ON users.id = orders.user_id;`}),y({id:5,language:`SQL`,category:`Grouping`,difficulty:`Intermediate`,title:`GROUP BY`,description:`Learn how to group records together to perform calculations. GROUP BY is commonly used with COUNT, SUM, and AVG to create reports and summaries.`,fileName:`queries.sql`,code:`SELECT department, COUNT(*) AS employees
FROM staff
GROUP BY department;`}),y({id:6,language:`SQL`,category:`Aggregations`,difficulty:`Intermediate`,title:`COUNT Function`,description:`Use COUNT to determine how many rows exist in a table or match a condition. Aggregate functions are commonly used for reports and analyzing stored data.`,fileName:`queries.sql`,code:`SELECT COUNT(*) AS total_users
FROM users;`}),y({id:7,language:`SQL`,category:`Aggregations`,difficulty:`Intermediate`,title:`SUM Function`,description:`Use SUM to calculate the total value of a numeric column. This is useful for calculating totals such as revenue, expenses, or quantities.`,fileName:`queries.sql`,code:`SELECT SUM(total) AS total_revenue
FROM orders;`}),y({id:8,language:`SQL`,category:`Aggregations`,difficulty:`Intermediate`,title:`AVG Function`,description:`Use AVG to calculate the average value from a column. This is commonly used for statistics and performance metrics.`,fileName:`queries.sql`,code:`SELECT AVG(price) AS average_price
FROM products;`}),y({id:9,language:`SQL`,category:`Filtering`,difficulty:`Intermediate`,title:`Multiple Conditions`,description:`Combine multiple conditions using AND and OR to create more specific filters when querying database records.`,fileName:`queries.sql`,code:`SELECT *
FROM users
WHERE age >= 18
AND active = true;`}),y({id:10,language:`SQL`,category:`Filtering`,difficulty:`Intermediate`,title:`LIKE Operator`,description:`Use LIKE to search for patterns inside text fields. This allows partial matching instead of requiring an exact value.`,fileName:`queries.sql`,code:`SELECT *
FROM users
WHERE name LIKE 'A%';`}),y({id:11,language:`SQL`,category:`Filtering`,difficulty:`Intermediate`,title:`IN Operator`,description:`Use IN to match a column against multiple possible values. This is a cleaner alternative to writing several OR conditions.`,fileName:`queries.sql`,code:`SELECT *
FROM products
WHERE category IN ('Phone', 'Laptop', 'Tablet');`}),y({id:12,language:`SQL`,category:`Filtering`,difficulty:`Intermediate`,title:`BETWEEN Operator`,description:`Use BETWEEN to filter values within a specific range. It is commonly used with numbers, dates, and other ordered values.`,fileName:`queries.sql`,code:`SELECT *
FROM orders
WHERE total BETWEEN 100 AND 500;`}),y({id:13,language:`SQL`,category:`Joining`,difficulty:`Intermediate`,title:`LEFT JOIN`,description:`Use LEFT JOIN to return every record from the first table while including matching records from a related table when available.`,fileName:`queries.sql`,code:`SELECT users.name, orders.total
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;`}),y({id:14,language:`SQL`,category:`Joining`,difficulty:`Advanced`,title:`Multiple Table JOIN`,description:`Combine information from multiple related tables by chaining JOIN statements together using matching keys.`,fileName:`queries.sql`,code:`SELECT users.name, orders.total, products.name
FROM users
JOIN orders
ON users.id = orders.user_id
JOIN products
ON orders.product_id = products.id;`}),y({id:15,language:`SQL`,category:`Grouping`,difficulty:`Advanced`,title:`HAVING Clause`,description:`Use HAVING to filter grouped results after aggregate calculations have been performed. HAVING is used with GROUP BY when filtering summary data.`,fileName:`queries.sql`,code:`SELECT department, COUNT(*) AS employees
FROM staff
GROUP BY department
HAVING COUNT(*) > 5;`}),y({id:16,language:`SQL`,category:`Subqueries`,difficulty:`Advanced`,title:`Basic Subquery`,description:`Use a query inside another query to retrieve data based on the result of a separate query.`,fileName:`queries.sql`,code:`SELECT *
FROM users
WHERE id IN (
  SELECT user_id
  FROM orders
);`}),y({id:17,language:`SQL`,category:`Subqueries`,difficulty:`Advanced`,title:`Subquery With Aggregate`,description:`Use a subquery with aggregate functions to compare values against calculated results.`,fileName:`queries.sql`,code:`SELECT *
FROM products
WHERE price > (
  SELECT AVG(price)
  FROM products
);`}),y({id:18,language:`SQL`,category:`Inserting Data`,difficulty:`Beginner`,title:`INSERT INTO`,description:`Add new records to a database table using INSERT INTO. This is commonly used when creating new application data.`,fileName:`queries.sql`,code:`INSERT INTO users (name, email)
VALUES ('John Smith', 'john@example.com');`}),y({id:19,language:`SQL`,category:`Updating Data`,difficulty:`Beginner`,title:`UPDATE Statement`,description:`Modify existing records in a database using UPDATE with a WHERE condition to target specific rows.`,fileName:`queries.sql`,code:`UPDATE users
SET active = true
WHERE id = 1;`}),y({id:20,language:`SQL`,category:`Deleting Data`,difficulty:`Beginner`,title:`DELETE Statement`,description:`Remove existing records from a table using DELETE. Always use WHERE conditions carefully to avoid deleting unwanted data.`,fileName:`queries.sql`,code:`DELETE FROM users
WHERE id = 1;`}),y({id:21,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`CREATE TABLE`,description:`Create a new database table by defining columns, data types, and constraints that control stored data.`,fileName:`schema.sql`,code:`CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE
);`}),y({id:22,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`Foreign Key`,description:`Create relationships between tables using foreign keys. Foreign keys connect records and maintain data integrity.`,fileName:`schema.sql`,code:`CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total DECIMAL
);`}),y({id:23,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`NOT NULL Constraint`,description:`Require a column to always contain a value by using the NOT NULL constraint.`,fileName:`schema.sql`,code:`CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL NOT NULL
);`}),y({id:24,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`UNIQUE Constraint`,description:`Prevent duplicate values in a column by adding a UNIQUE constraint. This is commonly used for emails and usernames.`,fileName:`schema.sql`,code:`CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE
);`}),y({id:25,language:`SQL`,category:`Transactions`,difficulty:`Advanced`,title:`BEGIN Transaction`,description:`Use transactions to group multiple database operations together so changes can be committed or rolled back safely.`,fileName:`transactions.sql`,code:`BEGIN;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;

COMMIT;`}),y({id:26,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`ALTER TABLE Add Column`,description:`Modify an existing table structure by adding new columns. ALTER TABLE is used when database requirements change after creation.`,fileName:`schema.sql`,code:`ALTER TABLE users
ADD COLUMN phone TEXT;`}),y({id:27,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`ALTER TABLE Rename Column`,description:`Rename existing columns in a table while preserving the stored data.`,fileName:`schema.sql`,code:`ALTER TABLE users
RENAME COLUMN name TO full_name;`}),y({id:28,language:`SQL`,category:`Conditional Logic`,difficulty:`Intermediate`,title:`CASE Statement`,description:`Use CASE statements to create conditional logic inside SQL queries. This is useful for transforming or categorizing data.`,fileName:`queries.sql`,code:`SELECT name,
CASE
  WHEN age >= 18 THEN 'Adult'
  ELSE 'Minor'
END AS age_group
FROM users;`}),y({id:29,language:`SQL`,category:`Pagination`,difficulty:`Intermediate`,title:`LIMIT Clause`,description:`Use LIMIT to control how many rows are returned from a query. This is commonly used for pagination and displaying smaller result sets.`,fileName:`queries.sql`,code:`SELECT *
FROM products
LIMIT 10;`}),y({id:30,language:`SQL`,category:`Pagination`,difficulty:`Intermediate`,title:`OFFSET Clause`,description:`Use OFFSET to skip a specific number of rows. OFFSET is commonly paired with LIMIT to build paginated results.`,fileName:`queries.sql`,code:`SELECT *
FROM products
LIMIT 10
OFFSET 20;`}),y({id:31,language:`SQL`,category:`Indexes`,difficulty:`Advanced`,title:`CREATE INDEX`,description:`Create indexes to improve query performance on frequently searched columns.`,fileName:`schema.sql`,code:`CREATE INDEX idx_users_email
ON users(email);`}),y({id:32,language:`SQL`,category:`Indexes`,difficulty:`Advanced`,title:`DROP INDEX`,description:`Remove an existing index from a database when it is no longer needed or negatively impacts performance.`,fileName:`schema.sql`,code:`DROP INDEX idx_users_email;`}),y({id:33,language:`SQL`,category:`Views`,difficulty:`Advanced`,title:`CREATE VIEW`,description:`Create reusable virtual tables based on saved queries. Views simplify complex queries and improve maintainability.`,fileName:`schema.sql`,code:`CREATE VIEW active_users AS
SELECT *
FROM users
WHERE active = true;`}),y({id:34,language:`SQL`,category:`Transactions`,difficulty:`Advanced`,title:`ROLLBACK Transaction`,description:`Use ROLLBACK to undo changes made during a transaction when an operation fails or should not be saved.`,fileName:`transactions.sql`,code:`BEGIN;

DELETE FROM users
WHERE id = 1;

ROLLBACK;`}),y({id:35,language:`SQL`,category:`Transactions`,difficulty:`Advanced`,title:`COMMIT Transaction`,description:`Use COMMIT to permanently save changes made during a transaction after all operations complete successfully.`,fileName:`transactions.sql`,code:`BEGIN;

UPDATE accounts
SET balance = balance + 500
WHERE id = 1;

COMMIT;`}),y({id:36,language:`SQL`,category:`Common Table Expressions`,difficulty:`Advanced`,title:`Basic CTE`,description:`Use a Common Table Expression (CTE) to create a temporary result set that can make complex queries easier to read and maintain.`,fileName:`queries.sql`,code:`WITH active_users AS (
  SELECT *
  FROM users
  WHERE active = true
)
SELECT *
FROM active_users;`}),y({id:37,language:`SQL`,category:`Common Table Expressions`,difficulty:`Advanced`,title:`CTE With Aggregation`,description:`Use a CTE with aggregate functions to organize calculations before using the results in a final query.`,fileName:`queries.sql`,code:`WITH order_totals AS (
  SELECT user_id, SUM(total) AS spending
  FROM orders
  GROUP BY user_id
)
SELECT *
FROM order_totals;`}),y({id:38,language:`SQL`,category:`Window Functions`,difficulty:`Advanced`,title:`ROW_NUMBER Function`,description:`Use ROW_NUMBER to assign a unique sequential number to each row within a result set.`,fileName:`queries.sql`,code:`SELECT name,
ROW_NUMBER() OVER (
  ORDER BY created_at
) AS row_number
FROM users;`}),y({id:39,language:`SQL`,category:`Window Functions`,difficulty:`Advanced`,title:`RANK Function`,description:`Use RANK to assign rankings based on ordered values while allowing duplicate ranking positions.`,fileName:`queries.sql`,code:`SELECT name, score, RANK() OVER (ORDER BY score DESC) AS ranking
FROM players;`}),y({id:40,language:`SQL`,category:`Window Functions`,difficulty:`Advanced`,title:`PARTITION BY`,description:`Use PARTITION BY to divide rows into groups before applying window functions and performing calculations within each group.`,fileName:`queries.sql`,code:`SELECT department, name, salary, AVG(salary) OVER (PARTITION BY department) AS department_average
FROM employees;`}),y({id:41,language:`SQL`,category:`Handling Data`,difficulty:`Intermediate`,title:`COALESCE Function`,description:`Use COALESCE to replace NULL values with a default value. This helps prevent missing data from causing issues in results.`,fileName:`queries.sql`,code:`SELECT name, COALESCE(phone, 'No Phone') AS phone
FROM users;`}),y({id:42,language:`SQL`,category:`String Functions`,difficulty:`Intermediate`,title:`CONCAT Function`,description:`Use CONCAT to combine multiple text values together inside a query.`,fileName:`queries.sql`,code:`SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM users;`}),y({id:43,language:`SQL`,category:`String Functions`,difficulty:`Intermediate`,title:`UPPER Function`,description:`Use string functions to transform text values. UPPER converts text into uppercase formatting.`,fileName:`queries.sql`,code:`SELECT UPPER(name) AS uppercase_name
FROM users;`}),y({id:44,language:`SQL`,category:`Date Functions`,difficulty:`Intermediate`,title:`Extract Date Values`,description:`Extract specific parts of date values such as years, months, or days for filtering and reporting.`,fileName:`queries.sql`,code:`SELECT EXTRACT(YEAR FROM created_at) AS signup_year
FROM users;`}),y({id:45,language:`SQL`,category:`Data Analysis`,difficulty:`Advanced`,title:`Finding Duplicate Records`,description:`Use GROUP BY and HAVING to identify duplicate values stored in a table.`,fileName:`queries.sql`,code:`SELECT email, COUNT(*) AS duplicates
FROM users
GROUP BY email
HAVING COUNT(*) > 1;`}),y({id:46,language:`SQL`,category:`Subqueries`,difficulty:`Advanced`,title:`Basic Subquery`,description:`Use a subquery to run an additional query inside another query and use its result in the outer query.`,fileName:`queries.sql`,code:`SELECT name
FROM users
WHERE id IN (
  SELECT user_id
  FROM orders
);`}),y({id:47,language:`SQL`,category:`Subqueries`,difficulty:`Advanced`,title:`Scalar Subquery`,description:`Use a scalar subquery that returns a single value and include that value as part of the query result.`,fileName:`queries.sql`,code:`SELECT name,
(
  SELECT COUNT(*)
  FROM orders
) AS total_orders
FROM users;`}),y({id:48,language:`SQL`,category:`Subqueries`,difficulty:`Advanced`,title:`Correlated Subquery`,description:`Use a correlated subquery that references values from the outer query to compare related records.`,fileName:`queries.sql`,code:`SELECT name
FROM users u
WHERE EXISTS (
  SELECT *
  FROM orders o
  WHERE o.user_id = u.id
);`}),y({id:49,language:`SQL`,category:`Common Table Expressions`,difficulty:`Advanced`,title:`Basic CTE`,description:`Use a Common Table Expression to create a temporary result set that can be referenced inside a query.`,fileName:`queries.sql`,code:`WITH active_users AS (
  SELECT *
  FROM users
  WHERE active = true
)
SELECT *
FROM active_users;`}),y({id:50,language:`SQL`,category:`Common Table Expressions`,difficulty:`Advanced`,title:`Multiple CTEs`,description:`Use multiple Common Table Expressions to organize complex queries into smaller reusable sections.`,fileName:`queries.sql`,code:`WITH user_orders AS (
  SELECT user_id, COUNT(*) AS total
  FROM orders
  GROUP BY user_id
),
high_value_users AS (
  SELECT *
  FROM user_orders
  WHERE total > 5
)
SELECT *
FROM high_value_users;`}),y({id:51,language:`SQL`,category:`Window Functions`,difficulty:`Advanced`,title:`ROW_NUMBER Function`,description:`Use ROW_NUMBER to assign a unique sequential number to rows within a result set.`,fileName:`queries.sql`,code:`SELECT name,
ROW_NUMBER() OVER (
  ORDER BY created_at
) AS row_number
FROM users;`}),y({id:52,language:`SQL`,category:`Window Functions`,difficulty:`Advanced`,title:`RANK Function`,description:`Use RANK to assign rankings while allowing tied values to share the same rank.`,fileName:`queries.sql`,code:`SELECT name, score,
RANK() OVER (
  ORDER BY score DESC
) AS ranking
FROM players;`}),y({id:53,language:`SQL`,category:`Window Functions`,difficulty:`Advanced`,title:`PARTITION BY`,description:`Use PARTITION BY to divide rows into groups while applying window functions independently to each group.`,fileName:`queries.sql`,code:`SELECT department, name,
ROW_NUMBER() OVER (
  PARTITION BY department
  ORDER BY name
) AS row_number
FROM employees;`}),y({id:54,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`Create Table`,description:`Create a new database table by defining columns, data types, and basic constraints.`,fileName:`queries.sql`,code:`CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255)
);`}),y({id:55,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`Adding Constraints`,description:`Add constraints to enforce rules on stored data and maintain database integrity.`,fileName:`queries.sql`,code:`CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL NOT NULL
);`}),y({id:56,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`ALTER TABLE Add Column`,description:`Modify an existing table by adding a new column to store additional information.`,fileName:`queries.sql`,code:`ALTER TABLE users
ADD COLUMN phone VARCHAR(20);`}),y({id:57,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`ALTER TABLE Remove Column`,description:`Remove an existing column from a table when the stored data is no longer needed.`,fileName:`queries.sql`,code:`ALTER TABLE users
DROP COLUMN phone;`}),y({id:58,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`Create Index`,description:`Create an index to improve query performance when searching or filtering large tables.`,fileName:`queries.sql`,code:`CREATE INDEX idx_users_email
ON users(email);`}),y({id:59,language:`SQL`,category:`Database Design`,difficulty:`Advanced`,title:`Composite Index`,description:`Create an index using multiple columns to optimize queries that filter by more than one value.`,fileName:`queries.sql`,code:`CREATE INDEX idx_orders_user_date
ON orders(user_id, created_at);`}),y({id:60,language:`SQL`,category:`Transactions`,difficulty:`Advanced`,title:`Basic Transaction`,description:`Use transactions to group multiple database operations together so they succeed or fail as one unit.`,fileName:`queries.sql`,code:`BEGIN;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;

COMMIT;`}),y({id:61,language:`SQL`,category:`Transactions`,difficulty:`Advanced`,title:`Rollback Transaction`,description:`Use ROLLBACK to undo changes made during a transaction when an operation fails.`,fileName:`queries.sql`,code:`BEGIN;

DELETE FROM orders
WHERE id = 10;

ROLLBACK;`}),y({id:62,language:`SQL`,category:`Views`,difficulty:`Intermediate`,title:`Create View`,description:`Create a reusable virtual table based on the result of a stored query.`,fileName:`queries.sql`,code:`CREATE VIEW active_users AS
SELECT id, name
FROM users
WHERE active = true;`}),y({id:63,language:`SQL`,category:`Views`,difficulty:`Intermediate`,title:`Query a View`,description:`Retrieve data from a view the same way you would query a normal table.`,fileName:`queries.sql`,code:`SELECT *
FROM active_users;`}),y({id:64,language:`SQL`,category:`Data Modification`,difficulty:`Intermediate`,title:`UPDATE Multiple Columns`,description:`Update multiple column values in a record using a single UPDATE statement.`,fileName:`queries.sql`,code:`UPDATE users
SET name = 'John Smith', email = 'john@example.com'
WHERE id = 1;`}),y({id:65,language:`SQL`,category:`Data Modification`,difficulty:`Intermediate`,title:`DELETE With Conditions`,description:`Delete specific records safely by using conditions that identify the rows to remove.`,fileName:`queries.sql`,code:`DELETE FROM users
WHERE active = false;`}),y({id:66,language:`SQL`,category:`Data Modification`,difficulty:`Advanced`,title:`INSERT Multiple Rows`,description:`Insert multiple records into a table using a single INSERT statement with multiple value sets.`,fileName:`queries.sql`,code:`INSERT INTO users (name, email)
VALUES ('John', 'john@example.com'),
('Sarah', 'sarah@example.com');`}),y({id:67,language:`SQL`,category:`Data Modification`,difficulty:`Advanced`,title:`INSERT From SELECT`,description:`Insert data into one table by selecting records from another existing table.`,fileName:`queries.sql`,code:`INSERT INTO archived_users (name, email)
SELECT name, email
FROM users
WHERE active = false;`}),y({id:68,language:`SQL`,category:`Constraints`,difficulty:`Advanced`,title:`Foreign Key Constraint`,description:`Use foreign keys to create relationships between tables and enforce valid references.`,fileName:`queries.sql`,code:`CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total DECIMAL
);`}),y({id:69,language:`SQL`,category:`Constraints`,difficulty:`Advanced`,title:`Unique Constraint`,description:`Use UNIQUE constraints to prevent duplicate values from being stored in specific columns.`,fileName:`queries.sql`,code:`CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE
);`}),y({id:70,language:`SQL`,category:`Constraints`,difficulty:`Advanced`,title:`CHECK Constraint`,description:`Use CHECK constraints to enforce rules that data must follow before being stored.`,fileName:`queries.sql`,code:`CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  price DECIMAL CHECK(price > 0)
);`}),y({id:71,language:`SQL`,category:`Aggregate Functions`,difficulty:`Intermediate`,title:`AVG Function`,description:`Use AVG to calculate the average value from a numeric column.`,fileName:`queries.sql`,code:`SELECT AVG(price) AS average_price
FROM products;`}),y({id:72,language:`SQL`,category:`Aggregate Functions`,difficulty:`Intermediate`,title:`MIN and MAX Functions`,description:`Use MIN and MAX to find the smallest and largest values stored in a column.`,fileName:`queries.sql`,code:`SELECT MIN(price) AS lowest_price, MAX(price) AS highest_price
FROM products;`}),y({id:73,language:`SQL`,category:`Aggregate Functions`,difficulty:`Intermediate`,title:`SUM Function`,description:`Use SUM to calculate the total value of numeric data across multiple records.`,fileName:`queries.sql`,code:`SELECT SUM(total) AS revenue
FROM orders;`}),y({id:74,language:`SQL`,category:`Conditional Logic`,difficulty:`Intermediate`,title:`CASE Statement`,description:`Use CASE statements to create conditional logic inside SQL queries.`,fileName:`queries.sql`,code:`SELECT name,
CASE
  WHEN age >= 18 THEN 'Adult'
  ELSE 'Minor'
END AS age_group
FROM users;`}),y({id:75,language:`SQL`,category:`Conditional Logic`,difficulty:`Advanced`,title:`CASE With Aggregates`,description:`Combine CASE statements with aggregate functions to create conditional summaries.`,fileName:`queries.sql`,code:`SELECT COUNT(*) AS total,
SUM(CASE WHEN active = true THEN 1 ELSE 0 END) AS active_users
FROM users;`}),y({id:76,language:`SQL`,category:`Views`,difficulty:`Advanced`,title:`Create View`,description:`Create a reusable virtual table based on the results of a query using a database view.`,fileName:`queries.sql`,code:`CREATE VIEW active_users AS
SELECT *
FROM users
WHERE active = true;`}),y({id:77,language:`SQL`,category:`Views`,difficulty:`Advanced`,title:`Query A View`,description:`Retrieve data from a view the same way you would query a regular table.`,fileName:`queries.sql`,code:`SELECT *
FROM active_users;`}),y({id:78,language:`SQL`,category:`Subqueries`,difficulty:`Advanced`,title:`Basic Subquery`,description:`Use a query inside another query to retrieve filtered or calculated results.`,fileName:`queries.sql`,code:`SELECT name
FROM users
WHERE id IN (
  SELECT user_id
  FROM orders
);`}),y({id:79,language:`SQL`,category:`Subqueries`,difficulty:`Advanced`,title:`Scalar Subquery`,description:`Use a subquery that returns a single value and include it as part of the main query result.`,fileName:`queries.sql`,code:`SELECT name,
(
  SELECT COUNT(*)
  FROM orders
) AS total_orders
FROM users;`}),y({id:80,language:`SQL`,category:`Subqueries`,difficulty:`Advanced`,title:`EXISTS Subquery`,description:`Use EXISTS to check whether a subquery returns any matching records.`,fileName:`queries.sql`,code:`SELECT name
FROM users
WHERE EXISTS (
  SELECT *
  FROM orders
  WHERE orders.user_id = users.id
);`}),y({id:81,language:`SQL`,category:`Transactions`,difficulty:`Advanced`,title:`BEGIN Transaction`,description:`Start a transaction to group multiple database operations into a single unit of work.`,fileName:`queries.sql`,code:`BEGIN;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;`}),y({id:82,language:`SQL`,category:`Transactions`,difficulty:`Advanced`,title:`COMMIT Transaction`,description:`Commit a transaction to permanently save changes made during the transaction.`,fileName:`queries.sql`,code:`BEGIN;

UPDATE accounts
SET balance = balance + 100
WHERE id = 2;

COMMIT;`}),y({id:83,language:`SQL`,category:`Transactions`,difficulty:`Advanced`,title:`ROLLBACK Transaction`,description:`Rollback a transaction to undo changes when an operation fails or should not be saved.`,fileName:`queries.sql`,code:`BEGIN;

DELETE FROM users
WHERE id = 10;

ROLLBACK;`}),y({id:84,language:`SQL`,category:`Indexes`,difficulty:`Advanced`,title:`Create Index`,description:`Create an index to improve query performance when searching or filtering large tables.`,fileName:`queries.sql`,code:`CREATE INDEX idx_users_email
ON users(email);`}),y({id:85,language:`SQL`,category:`Indexes`,difficulty:`Advanced`,title:`Composite Index`,description:`Create an index across multiple columns to optimize queries that filter using multiple values.`,fileName:`queries.sql`,code:`CREATE INDEX idx_orders_user_date
ON orders(user_id, created_at);`}),y({id:86,language:`SQL`,category:`Indexes`,difficulty:`Advanced`,title:`Drop Index`,description:`Remove an index from a table when it is no longer needed or negatively impacts performance.`,fileName:`queries.sql`,code:`DROP INDEX idx_users_email;`}),y({id:87,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`One To Many Relationship`,description:`Create relationships where one record in a table can be connected to many records in another table.`,fileName:`queries.sql`,code:`CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title TEXT
);`}),y({id:88,language:`SQL`,category:`Database Design`,difficulty:`Intermediate`,title:`Many To Many Relationship`,description:`Create a junction table to connect records where multiple items can relate to multiple other items.`,fileName:`queries.sql`,code:`CREATE TABLE users_roles (
  user_id INTEGER REFERENCES users(id),
  role_id INTEGER REFERENCES roles(id),
  PRIMARY KEY(user_id, role_id)
);`}),y({id:89,language:`SQL`,category:`Database Design`,difficulty:`Advanced`,title:`Normalize Data`,description:`Separate repeated data into related tables to reduce duplication and improve database structure.`,fileName:`queries.sql`,code:`CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id)
);`}),y({id:90,language:`SQL`,category:`Database Design`,difficulty:`Advanced`,title:`Cascade Delete`,description:`Use cascading deletes to automatically remove related records when a parent record is deleted.`,fileName:`queries.sql`,code:`CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id)
  ON DELETE CASCADE
);`}),y({id:91,language:`SQL`,category:`Database Administration`,difficulty:`Advanced`,title:`Rename Table`,description:`Rename an existing database table while preserving its stored data.`,fileName:`queries.sql`,code:`ALTER TABLE users
RENAME TO customers;`}),y({id:92,language:`SQL`,category:`Database Administration`,difficulty:`Advanced`,title:`Add Column`,description:`Add a new column to an existing table when additional data needs to be stored.`,fileName:`queries.sql`,code:`ALTER TABLE users
ADD COLUMN phone VARCHAR(20);`}),y({id:93,language:`SQL`,category:`Database Administration`,difficulty:`Advanced`,title:`Modify Column`,description:`Change the definition of an existing column to adjust its data type or constraints.`,fileName:`queries.sql`,code:`ALTER TABLE users
ALTER COLUMN name TYPE VARCHAR(100);`}),y({id:94,language:`SQL`,category:`Database Administration`,difficulty:`Advanced`,title:`Drop Column`,description:`Remove an unused column from an existing table when the data is no longer required.`,fileName:`queries.sql`,code:`ALTER TABLE users
DROP COLUMN phone;`}),y({id:95,language:`SQL`,category:`Query Optimization`,difficulty:`Advanced`,title:`EXPLAIN Query Plan`,description:`Use EXPLAIN to inspect how the database executes a query and identify possible performance improvements.`,fileName:`queries.sql`,code:`EXPLAIN
SELECT *
FROM users
WHERE email = 'test@example.com';`}),y({id:96,language:`SQL`,category:`Query Optimization`,difficulty:`Advanced`,title:`LIMIT Query Results`,description:`Use LIMIT to restrict the number of rows returned from a query and improve efficiency when working with large datasets.`,fileName:`queries.sql`,code:`SELECT *
FROM users
LIMIT 10;`}),y({id:97,language:`SQL`,category:`Query Optimization`,difficulty:`Advanced`,title:`OFFSET Query Results`,description:`Use OFFSET to skip a specific number of rows, commonly used when creating pagination systems.`,fileName:`queries.sql`,code:`SELECT *
FROM users
LIMIT 10
OFFSET 20;`}),y({id:98,language:`SQL`,category:`Advanced Queries`,difficulty:`Advanced`,title:`Common Table Expression`,description:`Use a Common Table Expression (CTE) to create temporary named query results that make complex queries easier to read.`,fileName:`queries.sql`,code:`WITH active_users AS (
  SELECT *
  FROM users
  WHERE active = true
)
SELECT *
FROM active_users;`}),y({id:99,language:`SQL`,category:`Advanced Queries`,difficulty:`Advanced`,title:`Recursive CTE`,description:`Use recursive Common Table Expressions to query hierarchical data such as organizational structures or category trees.`,fileName:`queries.sql`,code:`WITH RECURSIVE employee_tree AS (
  SELECT id, name
  FROM employees
  WHERE manager_id IS NULL

  UNION ALL

  SELECT e.id, e.name
  FROM employees e
  JOIN employee_tree t
  ON e.manager_id = t.id
)
SELECT *
FROM employee_tree;`}),y({id:100,language:`SQL`,category:`Advanced Queries`,difficulty:`Advanced`,title:`Rank Results With Window Function`,description:`Use ranking window functions to assign positions to rows based on sorted values while keeping the original data available.`,fileName:`queries.sql`,code:`SELECT name, salary,
RANK() OVER (
  ORDER BY salary DESC
) AS salary_rank
FROM employees;`})],T=[...b,...x,...S,...C,...w,...ee],E=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),D=o(((e,t)=>{t.exports=E()}))();function te(){return(0,D.jsxs)(`header`,{children:[(0,D.jsx)(`h1`,{children:`Dev Reps`}),(0,D.jsx)(`p`,{children:`Build coding muscle memory by typing real code.`})]})}var ne=[`All`,`JavaScript`,`React`,`Express`,`HTML`,`CSS`,`SQL`],re=[`All`,`Beginner`,`Intermediate`,`Advanced`];function ie({language:e,setLanguage:t,difficulty:n,setDifficulty:r,questions:i,question:a,setQuestion:o}){return(0,D.jsxs)(`section`,{className:`filters`,children:[(0,D.jsx)(`select`,{id:`language`,value:e,onChange:e=>t(e.target.value),children:ne.map(e=>(0,D.jsx)(`option`,{value:e,children:e===`All`?`Language`:e},e))}),(0,D.jsx)(`select`,{id:`difficulty`,value:n,onChange:e=>r(e.target.value),children:re.map(e=>(0,D.jsx)(`option`,{value:e,children:e===`All`?`Difficulty`:e},e))}),(0,D.jsxs)(`select`,{id:`question`,value:a,disabled:e===`All`,onChange:e=>o(e.target.value),children:[(0,D.jsx)(`option`,{value:`All`,children:e===`All`?`Select Language First`:`Question`}),i.map((t,n)=>(0,D.jsxs)(`option`,{value:t.value,children:[e,` #`,n+1]},t.value))]})]})}function ae({current:e,total:t,typedCharacters:n,totalCharacters:r}){let i=t===0?0:Math.round(e/t*100);return(0,D.jsxs)(`section`,{className:`progress`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h3`,{children:`Exercise`}),(0,D.jsxs)(`p`,{children:[e,` / `,t]})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h3`,{children:`Course`}),(0,D.jsxs)(`p`,{children:[i,`%`]})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h3`,{children:`Characters`}),(0,D.jsxs)(`p`,{children:[n,` / `,r]})]})]})}function oe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function se(e){if(Array.isArray(e))return e}function O(e,t,n){return(t=me(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ce(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?le(Object(n),!0).forEach(function(t){O(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function de(e,t){if(e==null)return{};var n,r,i=fe(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function fe(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function A(e,t){return se(e)||k(e,t)||he(e,t)||ce()}function pe(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function me(e){var t=pe(e,`string`);return typeof t==`symbol`?t:t+``}function he(e,t){if(e){if(typeof e==`string`)return oe(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?oe(e,t):void 0}}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?_e(Object(n),!0).forEach(function(t){ge(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ye(){var e=[...arguments];return function(t){return e.reduceRight(function(e,t){return t(e)},t)}}function be(e){return function t(){var n=this,r=[...arguments];return r.length>=e.length?e.apply(this,r):function(){var e=[...arguments];return t.apply(n,[].concat(r,e))}}}function xe(e){return{}.toString.call(e).includes(`Object`)}function Se(e){return!Object.keys(e).length}function Ce(e){return typeof e==`function`}function we(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Te(e,t){return xe(t)||Ae(`changeType`),Object.keys(t).some(function(t){return!we(e,t)})&&Ae(`changeField`),t}function Ee(e){Ce(e)||Ae(`selectorType`)}function De(e){Ce(e)||xe(e)||Ae(`handlerType`),xe(e)&&Object.values(e).some(function(e){return!Ce(e)})&&Ae(`handlersType`)}function Oe(e){e||Ae(`initialIsRequired`),xe(e)||Ae(`initialType`),Se(e)&&Ae(`initialContent`)}function ke(e,t){throw Error(e[t]||e.default)}var Ae=be(ke)({initialIsRequired:`initial state is required`,initialType:`initial state should be an object`,initialContent:`initial state shouldn't be an empty object`,handlerType:`handler should be an object or a function`,handlersType:`all handlers should be a functions`,selectorType:`selector should be a function`,changeType:`provided value of changes should be an object`,changeField:`it seams you want to change a field in the state which is not specified in the "initial" state`,default:"an unknown error accured in `state-local` package"}),je={changes:Te,selector:Ee,handler:De,initial:Oe};function Me(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};je.initial(e),je.handler(t);var n={current:e},r=be(Fe)(n,t),i=be(Pe)(n),a=be(je.changes)(e),o=be(Ne)(n);function s(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(e){return e};return je.selector(e),e(n.current)}function c(e){ye(r,i,a,o)(e)}return[s,c]}function Ne(e,t){return Ce(t)?t(e.current):t}function Pe(e,t){return e.current=ve(ve({},e.current),t),t}function Fe(e,t,n){return Ce(t)?t(e.current):Object.keys(n).forEach(function(n){return t[n]?.call(t,e.current[n])}),n}var Ie={create:Me},Le={paths:{vs:`https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs`}};function Re(e){return function t(){var n=this,r=[...arguments];return r.length>=e.length?e.apply(this,r):function(){var e=[...arguments];return t.apply(n,[].concat(r,e))}}}function ze(e){return{}.toString.call(e).includes(`Object`)}function Be(e){return e||We(`configIsRequired`),ze(e)||We(`configType`),e.urls?(Ve(),{paths:{vs:e.urls.monacoBase}}):e}function Ve(){console.warn(Ue.deprecation)}function He(e,t){throw Error(e[t]||e.default)}var Ue={configIsRequired:`the configuration object is required`,configType:`the configuration object should be an object`,default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},We=Re(He)(Ue),Ge={config:Be},Ke=function(){var e=[...arguments];return function(t){return e.reduceRight(function(e,t){return t(e)},t)}};function qe(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],qe(e[n],t[n]))}),ue(ue({},e),t)}var Je={type:`cancelation`,msg:`operation is manually canceled`};function Ye(e){var t=!1,n=new Promise(function(n,r){e.then(function(e){return t?r(Je):n(e)}),e.catch(r)});return n.cancel=function(){return t=!0},n}var Xe=[`monaco`],Ze=A(Ie.create({config:Le,isInitialized:!1,resolve:null,reject:null,monaco:null}),2),Qe=Ze[0],$e=Ze[1];function et(e){var t=Ge.config(e),n=t.monaco,r=de(t,Xe);$e(function(e){return{config:qe(e.config,r),monaco:n}})}function tt(){var e=Qe(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if($e({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Ye(ct);if(window.monaco&&window.monaco.editor)return ot(window.monaco),e.resolve(window.monaco),Ye(ct);Ke(nt,it)(at)}return Ye(ct)}function nt(e){return document.body.appendChild(e)}function rt(e){var t=document.createElement(`script`);return e&&(t.src=e),t}function it(e){var t=Qe(function(e){return{config:e.config,reject:e.reject}}),n=rt(`${t.config.paths.vs}/loader.js`);return n.onload=function(){return e()},n.onerror=t.reject,n}function at(){var e=Qe(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t([`vs/editor/editor.main`],function(t){var n=t.m||t;ot(n),e.resolve(n)},function(t){e.reject(t)})}function ot(e){Qe().monaco||$e({monaco:e})}function st(){return Qe(function(e){return e.monaco})}var ct=new Promise(function(e,t){return $e({resolve:e,reject:t})}),lt={config:et,init:tt,__getMonacoInstance:st},ut={wrapper:{display:`flex`,position:`relative`,textAlign:`initial`},fullWidth:{width:`100%`},hide:{display:`none`}},dt={container:{display:`flex`,height:`100%`,width:`100%`,justifyContent:`center`,alignItems:`center`}};function ft({children:e}){return _.createElement(`div`,{style:dt.container},e)}var pt=ft;function mt({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:a,wrapperProps:o}){return _.createElement(`section`,{style:{...ut.wrapper,width:e,height:t},...o},!n&&_.createElement(pt,null,r),_.createElement(`div`,{ref:i,style:{...ut.fullWidth,...!n&&ut.hide},className:a}))}var ht=(0,_.memo)(mt);function gt(e){(0,_.useEffect)(e,[])}var _t=gt;function vt(e,t,n=!0){let r=(0,_.useRef)(!0);(0,_.useEffect)(r.current||!n?()=>{r.current=!1}:e,t)}var yt=vt;function bt(){}function xt(e,t,n,r){return St(e,r)||Ct(e,t,n,r)}function St(e,t){return e.editor.getModel(wt(e,t))}function Ct(e,t,n,r){return e.editor.createModel(t,n,r?wt(e,r):void 0)}function wt(e,t){return e.Uri.parse(t)}function Tt({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:a,modifiedModelPath:o,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:c=!1,theme:l=`light`,loading:u=`Loading...`,options:d={},height:f=`100%`,width:p=`100%`,className:m,wrapperProps:h={},beforeMount:g=bt,onMount:v=bt}){let[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!0),C=(0,_.useRef)(null),w=(0,_.useRef)(null),ee=(0,_.useRef)(null),T=(0,_.useRef)(v),E=(0,_.useRef)(g),D=(0,_.useRef)(!1);_t(()=>{let e=lt.init();return e.then(e=>(w.current=e)&&S(!1)).catch(e=>e?.type!==`cancelation`&&console.error(`Monaco initialization: error:`,e)),()=>C.current?re():e.cancel()}),yt(()=>{if(C.current&&w.current){let t=C.current.getOriginalEditor(),i=xt(w.current,e||``,r||n||`text`,a||``);i!==t.getModel()&&t.setModel(i)}},[a],y),yt(()=>{if(C.current&&w.current){let e=C.current.getModifiedEditor(),r=xt(w.current,t||``,i||n||`text`,o||``);r!==e.getModel()&&e.setModel(r)}},[o],y),yt(()=>{let e=C.current.getModifiedEditor();e.getOption(w.current.editor.EditorOption.readOnly)?e.setValue(t||``):t!==e.getValue()&&(e.executeEdits(``,[{range:e.getModel().getFullModelRange(),text:t||``,forceMoveMarkers:!0}]),e.pushUndoStop())},[t],y),yt(()=>{C.current?.getModel()?.original.setValue(e||``)},[e],y),yt(()=>{let{original:e,modified:t}=C.current.getModel();w.current.editor.setModelLanguage(e,r||n||`text`),w.current.editor.setModelLanguage(t,i||n||`text`)},[n,r,i],y),yt(()=>{w.current?.editor.setTheme(l)},[l],y),yt(()=>{C.current?.updateOptions(d)},[d],y);let te=(0,_.useCallback)(()=>{if(!w.current)return;E.current(w.current);let s=xt(w.current,e||``,r||n||`text`,a||``),c=xt(w.current,t||``,i||n||`text`,o||``);C.current?.setModel({original:s,modified:c})},[n,t,i,e,r,a,o]),ne=(0,_.useCallback)(()=>{!D.current&&ee.current&&(C.current=w.current.editor.createDiffEditor(ee.current,{automaticLayout:!0,...d}),te(),w.current?.editor.setTheme(l),b(!0),D.current=!0)},[d,l,te]);(0,_.useEffect)(()=>{y&&T.current(C.current,w.current)},[y]),(0,_.useEffect)(()=>{!x&&!y&&ne()},[x,y,ne]);function re(){let e=C.current?.getModel();s||e?.original?.dispose(),c||e?.modified?.dispose(),C.current?.dispose()}return _.createElement(ht,{width:p,height:f,isEditorReady:y,loading:u,_ref:ee,className:m,wrapperProps:h})}(0,_.memo)(Tt);function Et(e){let t=(0,_.useRef)();return(0,_.useEffect)(()=>{t.current=e},[e]),t.current}var j=Et,Dt=new Map;function Ot({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:a,theme:o=`light`,line:s,loading:c=`Loading...`,options:l={},overrideServices:u={},saveViewState:d=!0,keepCurrentModel:f=!1,width:p=`100%`,height:m=`100%`,className:h,wrapperProps:g={},beforeMount:v=bt,onMount:y=bt,onChange:b,onValidate:x=bt}){let[S,C]=(0,_.useState)(!1),[w,ee]=(0,_.useState)(!0),T=(0,_.useRef)(null),E=(0,_.useRef)(null),D=(0,_.useRef)(null),te=(0,_.useRef)(y),ne=(0,_.useRef)(v),re=(0,_.useRef)(),ie=(0,_.useRef)(r),ae=j(a),oe=(0,_.useRef)(!1),se=(0,_.useRef)(!1);_t(()=>{let e=lt.init();return e.then(e=>(T.current=e)&&ee(!1)).catch(e=>e?.type!==`cancelation`&&console.error(`Monaco initialization: error:`,e)),()=>E.current?k():e.cancel()}),yt(()=>{let o=xt(T.current,e||r||``,t||i||``,a||n||``);o!==E.current?.getModel()&&(d&&Dt.set(ae,E.current?.saveViewState()),E.current?.setModel(o),d&&E.current?.restoreViewState(Dt.get(a)))},[a],S),yt(()=>{E.current?.updateOptions(l)},[l],S),yt(()=>{!E.current||r===void 0||(E.current.getOption(T.current.editor.EditorOption.readOnly)?E.current.setValue(r):r!==E.current.getValue()&&(se.current=!0,E.current.executeEdits(``,[{range:E.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),E.current.pushUndoStop(),se.current=!1))},[r],S),yt(()=>{let e=E.current?.getModel();e&&i&&T.current?.editor.setModelLanguage(e,i)},[i],S),yt(()=>{s!==void 0&&E.current?.revealLine(s)},[s],S),yt(()=>{T.current?.editor.setTheme(o)},[o],S);let O=(0,_.useCallback)(()=>{if(!(!D.current||!T.current)&&!oe.current){ne.current(T.current);let c=a||n,f=xt(T.current,r||e||``,t||i||``,c||``);E.current=T.current?.editor.create(D.current,{model:f,automaticLayout:!0,...l},u),d&&E.current.restoreViewState(Dt.get(c)),T.current.editor.setTheme(o),s!==void 0&&E.current.revealLine(s),C(!0),oe.current=!0}},[e,t,n,r,i,a,l,u,d,o,s]);(0,_.useEffect)(()=>{S&&te.current(E.current,T.current)},[S]),(0,_.useEffect)(()=>{!w&&!S&&O()},[w,S,O]),ie.current=r,(0,_.useEffect)(()=>{S&&b&&(re.current?.dispose(),re.current=E.current?.onDidChangeModelContent(e=>{se.current||b(E.current.getValue(),e)}))},[S,b]),(0,_.useEffect)(()=>{if(S){let e=T.current.editor.onDidChangeMarkers(e=>{let t=E.current.getModel()?.uri;if(t&&e.find(e=>e.path===t.path)){let e=T.current.editor.getModelMarkers({resource:t});x?.(e)}});return()=>{e?.dispose()}}return()=>{}},[S,x]);function k(){re.current?.dispose(),f?d&&Dt.set(a,E.current.saveViewState()):E.current.getModel()?.dispose(),E.current.dispose()}return _.createElement(ht,{width:p,height:m,isEditorReady:S,loading:c,_ref:D,className:h,wrapperProps:g})}var kt=(0,_.memo)(Ot);function At({value:e,setValue:t,disabled:n,onPause:r}){let i=(0,_.useRef)(null);function a(e,t){i.current=e,n||e.focus(),e.addCommand(t.KeyMod.CtrlCmd|t.KeyCode.Enter,()=>{r?.()})}return(0,_.useEffect)(()=>{n||i.current?.focus()},[n]),(0,D.jsx)(kt,{height:`280px`,defaultLanguage:`javascript`,theme:`vs-dark`,value:e,onChange:e=>t(e??``),onMount:a,options:{minimap:{enabled:!1},lineNumbers:`off`,glyphMargin:!1,folding:!1,scrollBeyondLastLine:!1,wordWrap:`on`,automaticLayout:!0,tabSize:2,insertSpaces:!0,fontSize:15,fontFamily:`Fira Code, monospace`,padding:{top:16,bottom:16},readOnly:n,quickSuggestions:!1,suggestOnTriggerCharacters:!1,parameterHints:{enabled:!1},hover:{enabled:!1},contextmenu:!1}})}function jt({exercise:e}){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`h2`,{children:e.title}),(0,D.jsxs)(`p`,{children:[(0,D.jsx)(`strong`,{children:e.language}),` •`,` `,e.category,` •`,` `,e.difficulty]}),(0,D.jsx)(`div`,{className:`exercise-description`,children:(0,D.jsx)(`p`,{children:e.description})})]})}function Mt({expected:e,typed:t}){let n=`pending`;return t!==void 0&&(n=t===e?`correct`:`incorrect`),e===`
`?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`span`,{className:n,children:` `}),(0,D.jsx)(`br`,{})]}):e===` `?(0,D.jsx)(`span`,{className:n,children:`\xA0`}):(0,D.jsx)(`span`,{className:n,children:e})}function Nt({code:e,typed:t}){let n=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!n.current)return;let e=t.split(`
`).length;n.current.scrollTo({top:Math.max(0,(e-4)*24),behavior:`smooth`})},[t]),(0,D.jsx)(`pre`,{ref:n,children:(0,D.jsx)(`code`,{children:e.split(``).map((e,n)=>(0,D.jsx)(Mt,{expected:e,typed:t[n]},n))})})}function Pt({correctCharacters:e,totalCharacters:t,mistakes:n,accuracy:r,seconds:i,wpm:a}){return(0,D.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,marginTop:`20px`,flexWrap:`wrap`},children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`Correct:`}),` `,e,` / `,t]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`Mistakes:`}),` `,n]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`Accuracy:`}),` `,r,`%`]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`Time:`}),` `,i,`s`]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`WPM:`}),` `,a]})]})}function Ft({paused:e,completed:t,correctCharacters:n,totalCharacters:r,mistakes:i,accuracy:a,seconds:o,wpm:s,onResume:c,onNext:l}){if(!e)return null;let u=Math.round(n/r*100);return(0,D.jsx)(`div`,{className:`modal-backdrop`,children:(0,D.jsxs)(`div`,{className:`modal`,children:[(0,D.jsx)(`h2`,{children:t?`Exercise Complete!`:`Exercise Paused`}),(0,D.jsxs)(`div`,{className:`results-grid`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`Time`}),(0,D.jsxs)(`p`,{children:[o,`s`]})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`WPM`}),(0,D.jsx)(`p`,{children:s})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`Accuracy`}),(0,D.jsxs)(`p`,{children:[a,`%`]})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`Correct`}),(0,D.jsxs)(`p`,{children:[n,` / `,r]})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`Remaining`}),(0,D.jsx)(`p`,{children:r-n})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`Mistakes`}),(0,D.jsx)(`p`,{children:i})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`Progress`}),(0,D.jsxs)(`p`,{children:[u,`%`]})]})]}),(0,D.jsxs)(`div`,{className:`button-row`,children:[(0,D.jsx)(`button`,{onClick:c,children:`Resume`}),(0,D.jsx)(`button`,{disabled:!t,onClick:l,children:`Next Exercise`})]})]})})}function It({completed:e,onNext:t,onSkip:n}){return(0,D.jsxs)(`div`,{className:`button-row`,children:[(0,D.jsx)(`button`,{disabled:!e,onClick:t,children:`Next Exercise`}),(0,D.jsx)(`button`,{onClick:n,children:`Skip`})]})}function Lt(e,t){let n=0,r=Math.min(e.length,t.length);for(let i=0;i<r;i++)e[i]===t[i]&&n++;return n}function Rt(e,t){let n=0,r=Math.min(e.length,t.length);for(let i=0;i<r;i++)e[i]!==t[i]&&n++;return n}function zt(e,t){if(t.length===0)return 100;let n=Lt(e,t);return Math.round(n/t.length*100)}function Bt(e,t){if(t<=0)return 0;let n=t/60;return Math.round(e/5/n)}function Vt(){let[e,t]=(0,_.useState)(`All`),[n,r]=(0,_.useState)(`All`),[i,a]=(0,_.useState)(`All`),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(0),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),g=(0,_.useMemo)(()=>T.filter(t=>{let r=e===`All`||t.language===e,i=n===`All`||t.difficulty===n;return r&&i}),[e,n]),v=(0,_.useMemo)(()=>g.map((e,t)=>({label:`${e.language} #${t+1}`,value:t})),[g]);(0,_.useEffect)(()=>{if(!f||m)return;let e=setInterval(()=>{d(e=>e+1)},1e3);return()=>clearInterval(e)},[f,m]),(0,_.useEffect)(()=>{c.length>0&&!f&&p(!0)},[c,f]),(0,_.useEffect)(()=>{if(i===`All`&&g.length>0)if(e===`All`){let e=g[Math.floor(Math.random()*g.length)];s(e.id)}else s(g[0].id)},[e,n,g.length,i]);let y=g.find(e=>e.id===o)||g[0];function b(){l(``),d(0),p(!1),h(!1)}function x(){if(!y||c!==y.code)return;b();let e=g.findIndex(e=>e.id===y.id),t=e+1>=g.length?0:e+1,n=g[t];s(n.id),a(String(t))}function S(){if(!y)return;if(b(),e===`All`&&i===`All`){if(g.length<=1)return;let e;do e=g[Math.floor(Math.random()*g.length)];while(e.id===y.id);s(e.id);return}let t=g.findIndex(e=>e.id===y.id),n=t+1>=g.length?0:t+1,r=g[n];s(r.id),a(String(n))}function C(e){t(e),r(`All`),a(`All`),s(null),b()}function w(e){r(e),a(`All`),s(null),b()}function ee(e){if(a(e),e===`All`){b();return}let t=g[Number(e)];s(t.id),b()}if(!y)return(0,D.jsxs)(`main`,{children:[(0,D.jsx)(te,{}),(0,D.jsx)(ie,{language:e,setLanguage:C,difficulty:n,setDifficulty:w,questions:v,question:i,setQuestion:ee}),(0,D.jsx)(`h2`,{children:`No exercises found.`})]});let E=Lt(y.code,c),ne=Rt(y.code,c),re=zt(y.code,c),oe=Bt(E,u),se=c===y.code,O=c.length/y.code.length*100,k=g.findIndex(e=>e.id===y.id)+1;return(0,D.jsxs)(`main`,{children:[(0,D.jsxs)(`div`,{className:`exercise-content`,children:[(0,D.jsx)(te,{}),(0,D.jsxs)(`div`,{className:`top-toolbar`,children:[(0,D.jsx)(ie,{language:e,setLanguage:C,difficulty:n,setDifficulty:w,questions:v,question:i,setQuestion:ee}),(0,D.jsx)(ae,{current:k,total:g.length,typedCharacters:c.length,totalCharacters:y.code.length})]}),(0,D.jsxs)(`div`,{className:`exercise-progress-bar`,children:[(0,D.jsx)(`div`,{className:`exercise-progress-fill`,style:{width:`${O}%`}}),(0,D.jsxs)(`div`,{className:`exercise-progress-marker`,style:{left:`${O}%`},children:[Math.round(O),`%`]})]}),(0,D.jsx)(jt,{exercise:y}),(0,D.jsx)(Nt,{code:y.code,typed:c}),(0,D.jsx)(At,{value:c,setValue:l,disabled:m,onPause:()=>h(!0)}),(0,D.jsx)(Pt,{correctCharacters:E,totalCharacters:y.code.length,mistakes:ne,accuracy:re,seconds:u,wpm:oe}),(0,D.jsx)(Ft,{paused:m,completed:se,correctCharacters:E,totalCharacters:y.code.length,mistakes:ne,accuracy:re,seconds:u,wpm:oe,onResume:()=>h(!1),onSkip:S,onNext:x})]}),!m&&(0,D.jsx)(It,{completed:se,onNext:x,onSkip:S})]})}function Ht(){return(0,D.jsx)(Vt,{})}(0,v.createRoot)(document.getElementById(`root`)).render((0,D.jsx)(_.StrictMode,{children:(0,D.jsx)(Ht,{})}));