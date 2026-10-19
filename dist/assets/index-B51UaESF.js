var ky=Object.defineProperty;var By=(t,e,n)=>e in t?ky(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $e=(t,e,n)=>By(t,typeof e!="symbol"?e+"":e,n);function zy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function x0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _0={exports:{}},Rc={},y0={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),Vy=Symbol.for("react.portal"),Hy=Symbol.for("react.fragment"),Gy=Symbol.for("react.strict_mode"),Wy=Symbol.for("react.profiler"),Xy=Symbol.for("react.provider"),jy=Symbol.for("react.context"),Yy=Symbol.for("react.forward_ref"),$y=Symbol.for("react.suspense"),qy=Symbol.for("react.memo"),Ky=Symbol.for("react.lazy"),Hp=Symbol.iterator;function Zy(t){return t===null||typeof t!="object"?null:(t=Hp&&t[Hp]||t["@@iterator"],typeof t=="function"?t:null)}var S0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M0=Object.assign,w0={};function io(t,e,n){this.props=t,this.context=e,this.refs=w0,this.updater=n||S0}io.prototype.isReactComponent={};io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function E0(){}E0.prototype=io.prototype;function ch(t,e,n){this.props=t,this.context=e,this.refs=w0,this.updater=n||S0}var uh=ch.prototype=new E0;uh.constructor=ch;M0(uh,io.prototype);uh.isPureReactComponent=!0;var Gp=Array.isArray,b0=Object.prototype.hasOwnProperty,dh={current:null},T0={key:!0,ref:!0,__self:!0,__source:!0};function C0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)b0.call(e,i)&&!T0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:xa,type:t,key:s,ref:o,props:r,_owner:dh.current}}function Qy(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fh(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function Jy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wp=/\/+/g;function ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jy(""+t.key):e.toString(36)}function bl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xa:case Vy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ru(o,0):i,Gp(r)?(n="",t!=null&&(n=t.replace(Wp,"$&/")+"/"),bl(r,e,n,"",function(c){return c})):r!=null&&(fh(r)&&(r=Qy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Wp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Gp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ru(s,a);o+=bl(s,e,n,l,r)}else if(l=Zy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ru(s,a++),o+=bl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(t,e,n){if(t==null)return t;var i=[],r=0;return bl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function eS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Tl={transition:null},tS={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:dh};function A0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!fh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=io;qe.Fragment=Hy;qe.Profiler=Wy;qe.PureComponent=ch;qe.StrictMode=Gy;qe.Suspense=$y;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tS;qe.act=A0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=M0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)b0.call(e,l)&&!T0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:xa,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:jy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xy,_context:t},t.Consumer=t};qe.createElement=C0;qe.createFactory=function(t){var e=C0.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Yy,render:t}};qe.isValidElement=fh;qe.lazy=function(t){return{$$typeof:Ky,_payload:{_status:-1,_result:t},_init:eS}};qe.memo=function(t,e){return{$$typeof:qy,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};qe.unstable_act=A0;qe.useCallback=function(t,e){return pn.current.useCallback(t,e)};qe.useContext=function(t){return pn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return pn.current.useEffect(t,e)};qe.useId=function(){return pn.current.useId()};qe.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return pn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};qe.useRef=function(t){return pn.current.useRef(t)};qe.useState=function(t){return pn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return pn.current.useTransition()};qe.version="18.3.1";y0.exports=qe;var U=y0.exports;const rr=x0(U),R0=zy({__proto__:null,default:rr},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nS=U,iS=Symbol.for("react.element"),rS=Symbol.for("react.fragment"),sS=Object.prototype.hasOwnProperty,oS=nS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aS={key:!0,ref:!0,__self:!0,__source:!0};function P0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)sS.call(e,i)&&!aS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:iS,type:t,key:s,ref:o,props:r,_owner:oS.current}}Rc.Fragment=rS;Rc.jsx=P0;Rc.jsxs=P0;_0.exports=Rc;var M=_0.exports,N0={exports:{}},Bn={},L0={exports:{}},D0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,B){var W=z.length;z.push(B);e:for(;0<W;){var K=W-1>>>1,se=z[K];if(0<r(se,B))z[K]=B,z[W]=se,W=K;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var B=z[0],W=z.pop();if(W!==B){z[0]=W;e:for(var K=0,se=z.length,me=se>>>1;K<me;){var Ie=2*(K+1)-1,Be=z[Ie],Oe=Ie+1,Q=z[Oe];if(0>r(Be,W))Oe<se&&0>r(Q,Be)?(z[K]=Q,z[Oe]=W,K=Oe):(z[K]=Be,z[Ie]=W,K=Ie);else if(Oe<se&&0>r(Q,W))z[K]=Q,z[Oe]=W,K=Oe;else break e}}return B}function r(z,B){var W=z.sortIndex-B.sortIndex;return W!==0?W:z.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=z)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function _(z){if(x=!1,w(z),!g)if(n(l)!==null)g=!0,q(b);else{var B=n(c);B!==null&&G(_,B.startTime-z)}}function b(z,B){g=!1,x&&(x=!1,f(y),y=-1),p=!0;var W=d;try{for(w(B),h=n(l);h!==null&&(!(h.expirationTime>B)||z&&!I());){var K=h.callback;if(typeof K=="function"){h.callback=null,d=h.priorityLevel;var se=K(h.expirationTime<=B);B=t.unstable_now(),typeof se=="function"?h.callback=se:h===n(l)&&i(l),w(B)}else i(l);h=n(l)}if(h!==null)var me=!0;else{var Ie=n(c);Ie!==null&&G(_,Ie.startTime-B),me=!1}return me}finally{h=null,d=W,p=!1}}var T=!1,C=null,y=-1,A=5,N=-1;function I(){return!(t.unstable_now()-N<A)}function O(){if(C!==null){var z=t.unstable_now();N=z;var B=!0;try{B=C(!0,z)}finally{B?Y():(T=!1,C=null)}}else T=!1}var Y;if(typeof v=="function")Y=function(){v(O)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,V=P.port2;P.port1.onmessage=O,Y=function(){V.postMessage(null)}}else Y=function(){m(O,0)};function q(z){C=z,T||(T=!0,Y())}function G(z,B){y=m(function(){z(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,q(b))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var W=d;d=B;try{return z()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,B){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=d;d=z;try{return B()}finally{d=W}},t.unstable_scheduleCallback=function(z,B,W){var K=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?K+W:K):W=K,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=W+se,z={id:u++,callback:B,priorityLevel:z,startTime:W,expirationTime:se,sortIndex:-1},W>K?(z.sortIndex=W,e(c,z),n(l)===null&&z===n(c)&&(x?(f(y),y=-1):x=!0,G(_,W-K))):(z.sortIndex=se,e(l,z),g||p||(g=!0,q(b))),z},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(z){var B=d;return function(){var W=d;d=B;try{return z.apply(this,arguments)}finally{d=W}}}})(D0);L0.exports=D0;var lS=L0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cS=U,kn=lS;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I0=new Set,Yo={};function Jr(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(Yo[t]=e,t=0;t<e.length;t++)I0.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gd=Object.prototype.hasOwnProperty,uS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xp={},jp={};function dS(t){return gd.call(jp,t)?!0:gd.call(Xp,t)?!1:uS.test(t)?jp[t]=!0:(Xp[t]=!0,!1)}function fS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hS(t,e,n,i){if(e===null||typeof e>"u"||fS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var hh=/[\-:]([a-z])/g;function ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hh,ph);Yt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hh,ph);Yt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hh,ph);Yt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function mh(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hS(e,n,r,i)&&(n=null),i||r===null?dS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ji=cS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),gh=Symbol.for("react.strict_mode"),vd=Symbol.for("react.profiler"),U0=Symbol.for("react.provider"),F0=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),xd=Symbol.for("react.suspense"),_d=Symbol.for("react.suspense_list"),xh=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),O0=Symbol.for("react.offscreen"),Yp=Symbol.iterator;function fo(t){return t===null||typeof t!="object"?null:(t=Yp&&t[Yp]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,su;function Ro(t){if(su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||""}return`
`+su+t}var ou=!1;function au(t,e){if(!t||ou)return"";ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function pS(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=au(t.type,!1),t;case 11:return t=au(t.type.render,!1),t;case 1:return t=au(t.type,!0),t;default:return""}}function yd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case vd:return"Profiler";case gh:return"StrictMode";case xd:return"Suspense";case _d:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F0:return(t.displayName||"Context")+".Consumer";case U0:return(t._context.displayName||"Context")+".Provider";case vh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xh:return e=t.displayName||null,e!==null?e:yd(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return yd(t(e))}catch{}}return null}function mS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yd(e);case 8:return e===gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function k0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gS(t){var e=k0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function La(t){t._valueTracker||(t._valueTracker=gS(t))}function B0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=k0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sd(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $p(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function z0(t,e){e=e.checked,e!=null&&mh(t,"checked",e,!1)}function Md(t,e){z0(t,e);var n=wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&wd(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wd(t,e,n){(e!=="number"||Yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function Is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ed(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Po(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function V0(t,e){var n=wr(e.value),i=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function H0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?H0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,G0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vS=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(t){vS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Uo[e]=Uo[t]})});function W0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Uo.hasOwnProperty(t)&&Uo[t]?(""+e).trim():e+"px"}function X0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=W0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var xS=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Td(t,e){if(e){if(xS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Cd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ad=null;function _h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rd=null,Us=null,Fs=null;function Qp(t){if(t=Sa(t)){if(typeof Rd!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Ic(e),Rd(t.stateNode,t.type,e))}}function j0(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function Y0(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,Qp(t),e)for(t=0;t<e.length;t++)Qp(e[t])}}function $0(t,e){return t(e)}function q0(){}var lu=!1;function K0(t,e,n){if(lu)return t(e,n);lu=!0;try{return $0(t,e,n)}finally{lu=!1,(Us!==null||Fs!==null)&&(q0(),Y0())}}function qo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ic(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Pd=!1;if(Vi)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Pd=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Pd=!1}function _S(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Fo=!1,$l=null,ql=!1,Nd=null,yS={onError:function(t){Fo=!0,$l=t}};function SS(t,e,n,i,r,s,o,a,l){Fo=!1,$l=null,_S.apply(yS,arguments)}function MS(t,e,n,i,r,s,o,a,l){if(SS.apply(this,arguments),Fo){if(Fo){var c=$l;Fo=!1,$l=null}else throw Error(oe(198));ql||(ql=!0,Nd=c)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Z0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jp(t){if(es(t)!==t)throw Error(oe(188))}function wS(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Jp(r),t;if(s===i)return Jp(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Q0(t){return t=wS(t),t!==null?J0(t):null}function J0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=J0(t);if(e!==null)return e;t=t.sibling}return null}var ev=kn.unstable_scheduleCallback,em=kn.unstable_cancelCallback,ES=kn.unstable_shouldYield,bS=kn.unstable_requestPaint,At=kn.unstable_now,TS=kn.unstable_getCurrentPriorityLevel,yh=kn.unstable_ImmediatePriority,tv=kn.unstable_UserBlockingPriority,Kl=kn.unstable_NormalPriority,CS=kn.unstable_LowPriority,nv=kn.unstable_IdlePriority,Pc=null,xi=null;function AS(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:NS,RS=Math.log,PS=Math.LN2;function NS(t){return t>>>=0,t===0?32:31-(RS(t)/PS|0)|0}var Ia=64,Ua=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=No(a):(s&=o,s!==0&&(i=No(s)))}else o=n&~r,o!==0?i=No(o):s!==0&&(i=No(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function LS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-si(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=LS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ld(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iv(){var t=Ia;return Ia<<=1,!(Ia&4194240)&&(Ia=64),t}function cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function IS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Sh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function rv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sv,Mh,ov,av,lv,Dd=!1,Fa=[],mr=null,gr=null,vr=null,Ko=new Map,Zo=new Map,lr=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tm(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Sa(e),e!==null&&Mh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function FS(t,e,n,i,r){switch(e){case"focusin":return mr=po(mr,t,e,n,i,r),!0;case"dragenter":return gr=po(gr,t,e,n,i,r),!0;case"mouseover":return vr=po(vr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ko.set(s,po(Ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Zo.set(s,po(Zo.get(s)||null,t,e,n,i,r)),!0}return!1}function cv(t){var e=Or(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=Z0(n),e!==null){t.blockedOn=e,lv(t.priority,function(){ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ad=i,n.target.dispatchEvent(i),Ad=null}else return e=Sa(n),e!==null&&Mh(e),t.blockedOn=n,!1;e.shift()}return!0}function nm(t,e,n){Cl(t)&&n.delete(e)}function OS(){Dd=!1,mr!==null&&Cl(mr)&&(mr=null),gr!==null&&Cl(gr)&&(gr=null),vr!==null&&Cl(vr)&&(vr=null),Ko.forEach(nm),Zo.forEach(nm)}function mo(t,e){t.blockedOn===e&&(t.blockedOn=null,Dd||(Dd=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,OS)))}function Qo(t){function e(r){return mo(r,t)}if(0<Fa.length){mo(Fa[0],t);for(var n=1;n<Fa.length;n++){var i=Fa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(mr!==null&&mo(mr,t),gr!==null&&mo(gr,t),vr!==null&&mo(vr,t),Ko.forEach(e),Zo.forEach(e),n=0;n<lr.length;n++)i=lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)cv(n),n.blockedOn===null&&lr.shift()}var Os=ji.ReactCurrentBatchConfig,Ql=!0;function kS(t,e,n,i){var r=ot,s=Os.transition;Os.transition=null;try{ot=1,wh(t,e,n,i)}finally{ot=r,Os.transition=s}}function BS(t,e,n,i){var r=ot,s=Os.transition;Os.transition=null;try{ot=4,wh(t,e,n,i)}finally{ot=r,Os.transition=s}}function wh(t,e,n,i){if(Ql){var r=Id(t,e,n,i);if(r===null)_u(t,e,i,Jl,n),tm(t,i);else if(FS(r,t,e,n,i))i.stopPropagation();else if(tm(t,i),e&4&&-1<US.indexOf(t)){for(;r!==null;){var s=Sa(r);if(s!==null&&sv(s),s=Id(t,e,n,i),s===null&&_u(t,e,i,Jl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else _u(t,e,i,null,n)}}var Jl=null;function Id(t,e,n,i){if(Jl=null,t=_h(i),t=Or(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Z0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function uv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TS()){case yh:return 1;case tv:return 4;case Kl:case CS:return 16;case nv:return 536870912;default:return 16}default:return 16}}var dr=null,Eh=null,Al=null;function dv(){if(Al)return Al;var t,e=Eh,n=e.length,i,r="value"in dr?dr.value:dr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Al=r.slice(t,1<i?1-i:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function im(){return!1}function zn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:im,this.isPropagationStopped=im,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bh=zn(ro),ya=bt({},ro,{view:0,detail:0}),zS=zn(ya),uu,du,go,Nc=bt({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Th,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(uu=t.screenX-go.screenX,du=t.screenY-go.screenY):du=uu=0,go=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:du}}),rm=zn(Nc),VS=bt({},Nc,{dataTransfer:0}),HS=zn(VS),GS=bt({},ya,{relatedTarget:0}),fu=zn(GS),WS=bt({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),XS=zn(WS),jS=bt({},ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YS=zn(jS),$S=bt({},ro,{data:0}),sm=zn($S),qS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ZS[t])?!!e[t]:!1}function Th(){return QS}var JS=bt({},ya,{key:function(t){if(t.key){var e=qS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Th,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eM=zn(JS),tM=bt({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=zn(tM),nM=bt({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Th}),iM=zn(nM),rM=bt({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),sM=zn(rM),oM=bt({},Nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aM=zn(oM),lM=[9,13,27,32],Ch=Vi&&"CompositionEvent"in window,Oo=null;Vi&&"documentMode"in document&&(Oo=document.documentMode);var cM=Vi&&"TextEvent"in window&&!Oo,fv=Vi&&(!Ch||Oo&&8<Oo&&11>=Oo),am=" ",lm=!1;function hv(t,e){switch(t){case"keyup":return lM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function uM(t,e){switch(t){case"compositionend":return pv(e);case"keypress":return e.which!==32?null:(lm=!0,am);case"textInput":return t=e.data,t===am&&lm?null:t;default:return null}}function dM(t,e){if(Ms)return t==="compositionend"||!Ch&&hv(t,e)?(t=dv(),Al=Eh=dr=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fv&&e.locale!=="ko"?null:e.data;default:return null}}var fM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fM[t.type]:e==="textarea"}function mv(t,e,n,i){j0(i),e=ec(e,"onChange"),0<e.length&&(n=new bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ko=null,Jo=null;function hM(t){Tv(t,0)}function Lc(t){var e=bs(t);if(B0(e))return t}function pM(t,e){if(t==="change")return e}var gv=!1;if(Vi){var hu;if(Vi){var pu="oninput"in document;if(!pu){var um=document.createElement("div");um.setAttribute("oninput","return;"),pu=typeof um.oninput=="function"}hu=pu}else hu=!1;gv=hu&&(!document.documentMode||9<document.documentMode)}function dm(){ko&&(ko.detachEvent("onpropertychange",vv),Jo=ko=null)}function vv(t){if(t.propertyName==="value"&&Lc(Jo)){var e=[];mv(e,Jo,t,_h(t)),K0(hM,e)}}function mM(t,e,n){t==="focusin"?(dm(),ko=e,Jo=n,ko.attachEvent("onpropertychange",vv)):t==="focusout"&&dm()}function gM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lc(Jo)}function vM(t,e){if(t==="click")return Lc(e)}function xM(t,e){if(t==="input"||t==="change")return Lc(e)}function _M(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:_M;function ea(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!gd.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,e){var n=fm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fm(n)}}function xv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _v(){for(var t=window,e=Yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function Ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yM(t){var e=_v(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xv(n.ownerDocument.documentElement,n)){if(i!==null&&Ah(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=hm(n,s);var o=hm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SM=Vi&&"documentMode"in document&&11>=document.documentMode,ws=null,Ud=null,Bo=null,Fd=!1;function pm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fd||ws==null||ws!==Yl(i)||(i=ws,"selectionStart"in i&&Ah(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bo&&ea(Bo,i)||(Bo=i,i=ec(Ud,"onSelect"),0<i.length&&(e=new bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ws)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},mu={},yv={};Vi&&(yv=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Dc(t){if(mu[t])return mu[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yv)return mu[t]=e[n];return t}var Sv=Dc("animationend"),Mv=Dc("animationiteration"),wv=Dc("animationstart"),Ev=Dc("transitionend"),bv=new Map,mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){bv.set(t,e),Jr(e,[t])}for(var gu=0;gu<mm.length;gu++){var vu=mm[gu],MM=vu.toLowerCase(),wM=vu[0].toUpperCase()+vu.slice(1);Tr(MM,"on"+wM)}Tr(Sv,"onAnimationEnd");Tr(Mv,"onAnimationIteration");Tr(wv,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(Ev,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function gm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,MS(i,e,void 0,t),t.currentTarget=null}function Tv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;gm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;gm(r,a,c),s=l}}}if(ql)throw t=Nd,ql=!1,Nd=null,t}function gt(t,e){var n=e[Vd];n===void 0&&(n=e[Vd]=new Set);var i=t+"__bubble";n.has(i)||(Cv(e,t,2,!1),n.add(i))}function xu(t,e,n){var i=0;e&&(i|=4),Cv(n,t,i,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[Ba]){t[Ba]=!0,I0.forEach(function(n){n!=="selectionchange"&&(EM.has(n)||xu(n,!1,t),xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,xu("selectionchange",!1,e))}}function Cv(t,e,n,i){switch(uv(e)){case 1:var r=kS;break;case 4:r=BS;break;default:r=wh}n=r.bind(null,e,n,t),r=void 0,!Pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _u(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}K0(function(){var c=s,u=_h(n),h=[];e:{var d=bv.get(t);if(d!==void 0){var p=bh,g=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":p=eM;break;case"focusin":g="focus",p=fu;break;case"focusout":g="blur",p=fu;break;case"beforeblur":case"afterblur":p=fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=HS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=iM;break;case Sv:case Mv:case wv:p=XS;break;case Ev:p=sM;break;case"scroll":p=zS;break;case"wheel":p=aM;break;case"copy":case"cut":case"paste":p=YS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=om}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var v=c,w;v!==null;){w=v;var _=w.stateNode;if(w.tag===5&&_!==null&&(w=_,f!==null&&(_=qo(v,f),_!=null&&x.push(na(v,_,w)))),m)break;v=v.return}0<x.length&&(d=new p(d,g,null,n,u),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ad&&(g=n.relatedTarget||n.fromElement)&&(Or(g)||g[Hi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Or(g):null,g!==null&&(m=es(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=rm,_="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=om,_="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:bs(p),w=g==null?d:bs(g),d=new x(_,v+"leave",p,n,u),d.target=m,d.relatedTarget=w,_=null,Or(u)===c&&(x=new x(f,v+"enter",g,n,u),x.target=w,x.relatedTarget=m,_=x),m=_,p&&g)t:{for(x=p,f=g,v=0,w=x;w;w=rs(w))v++;for(w=0,_=f;_;_=rs(_))w++;for(;0<v-w;)x=rs(x),v--;for(;0<w-v;)f=rs(f),w--;for(;v--;){if(x===f||f!==null&&x===f.alternate)break t;x=rs(x),f=rs(f)}x=null}else x=null;p!==null&&vm(h,d,p,x,!1),g!==null&&m!==null&&vm(h,m,g,x,!0)}}e:{if(d=c?bs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=pM;else if(cm(d))if(gv)b=xM;else{b=gM;var T=mM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=vM);if(b&&(b=b(t,c))){mv(h,b,n,u);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&wd(d,"number",d.value)}switch(T=c?bs(c):window,t){case"focusin":(cm(T)||T.contentEditable==="true")&&(ws=T,Ud=c,Bo=null);break;case"focusout":Bo=Ud=ws=null;break;case"mousedown":Fd=!0;break;case"contextmenu":case"mouseup":case"dragend":Fd=!1,pm(h,n,u);break;case"selectionchange":if(SM)break;case"keydown":case"keyup":pm(h,n,u)}var C;if(Ch)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ms?hv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(fv&&n.locale!=="ko"&&(Ms||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ms&&(C=dv()):(dr=u,Eh="value"in dr?dr.value:dr.textContent,Ms=!0)),T=ec(c,y),0<T.length&&(y=new sm(y,t,null,n,u),h.push({event:y,listeners:T}),C?y.data=C:(C=pv(n),C!==null&&(y.data=C)))),(C=cM?uM(t,n):dM(t,n))&&(c=ec(c,"onBeforeInput"),0<c.length&&(u=new sm("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=C))}Tv(h,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=qo(t,n),s!=null&&i.unshift(na(t,s,r)),s=qo(t,e),s!=null&&i.push(na(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=qo(n,s),l!=null&&o.unshift(na(n,l,a))):r||(l=qo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bM=/\r\n?/g,TM=/\u0000|\uFFFD/g;function xm(t){return(typeof t=="string"?t:""+t).replace(bM,`
`).replace(TM,"")}function za(t,e,n){if(e=xm(e),xm(t)!==e&&n)throw Error(oe(425))}function tc(){}var Od=null,kd=null;function Bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,CM=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,AM=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(t){return _m.resolve(null).then(t).catch(RM)}:zd;function RM(t){setTimeout(function(){throw t})}function yu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Qo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Qo(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ym(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var so=Math.random().toString(36).slice(2),mi="__reactFiber$"+so,ia="__reactProps$"+so,Hi="__reactContainer$"+so,Vd="__reactEvents$"+so,PM="__reactListeners$"+so,NM="__reactHandles$"+so;function Or(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ym(t);t!==null;){if(n=t[mi])return n;t=ym(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[mi]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Ic(t){return t[ia]||null}var Hd=[],Ts=-1;function Cr(t){return{current:t}}function xt(t){0>Ts||(t.current=Hd[Ts],Hd[Ts]=null,Ts--)}function ht(t,e){Ts++,Hd[Ts]=t.current,t.current=e}var Er={},on=Cr(Er),yn=Cr(!1),Gr=Er;function Ys(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function nc(){xt(yn),xt(on)}function Sm(t,e,n){if(on.current!==Er)throw Error(oe(168));ht(on,e),ht(yn,n)}function Av(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,mS(t)||"Unknown",r));return bt({},n,i)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Gr=on.current,ht(on,t),ht(yn,yn.current),!0}function Mm(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Av(t,e,Gr),i.__reactInternalMemoizedMergedChildContext=t,xt(yn),xt(on),ht(on,t)):xt(yn),ht(yn,n)}var Li=null,Uc=!1,Su=!1;function Rv(t){Li===null?Li=[t]:Li.push(t)}function LM(t){Uc=!0,Rv(t)}function Ar(){if(!Su&&Li!==null){Su=!0;var t=0,e=ot;try{var n=Li;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,Uc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),ev(yh,Ar),r}finally{ot=e,Su=!1}}return null}var Cs=[],As=0,rc=null,sc=0,Gn=[],Wn=0,Wr=null,Ii=1,Ui="";function Ur(t,e){Cs[As++]=sc,Cs[As++]=rc,rc=t,sc=e}function Pv(t,e,n){Gn[Wn++]=Ii,Gn[Wn++]=Ui,Gn[Wn++]=Wr,Wr=t;var i=Ii;t=Ui;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-si(e)+r|n<<r|i,Ui=s+t}else Ii=1<<s|n<<r|i,Ui=t}function Rh(t){t.return!==null&&(Ur(t,1),Pv(t,1,0))}function Ph(t){for(;t===rc;)rc=Cs[--As],Cs[As]=null,sc=Cs[--As],Cs[As]=null;for(;t===Wr;)Wr=Gn[--Wn],Gn[Wn]=null,Ui=Gn[--Wn],Gn[Wn]=null,Ii=Gn[--Wn],Gn[Wn]=null}var Fn=null,Un=null,yt=!1,ii=null;function Nv(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fn=t,Un=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fn=t,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:Ii,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fn=t,Un=null,!0):!1;default:return!1}}function Gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wd(t){if(yt){var e=Un;if(e){var n=e;if(!wm(t,e)){if(Gd(t))throw Error(oe(418));e=xr(n.nextSibling);var i=Fn;e&&wm(t,e)?Nv(i,n):(t.flags=t.flags&-4097|2,yt=!1,Fn=t)}}else{if(Gd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,yt=!1,Fn=t}}}function Em(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function Va(t){if(t!==Fn)return!1;if(!yt)return Em(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bd(t.type,t.memoizedProps)),e&&(e=Un)){if(Gd(t))throw Lv(),Error(oe(418));for(;e;)Nv(t,e),e=xr(e.nextSibling)}if(Em(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Un=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Un=null}}else Un=Fn?xr(t.stateNode.nextSibling):null;return!0}function Lv(){for(var t=Un;t;)t=xr(t.nextSibling)}function $s(){Un=Fn=null,yt=!1}function Nh(t){ii===null?ii=[t]:ii.push(t)}var DM=ji.ReactCurrentBatchConfig;function vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Ha(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bm(t){var e=t._init;return e(t._payload)}function Dv(t){function e(f,v){if(t){var w=f.deletions;w===null?(f.deletions=[v],f.flags|=16):w.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=Mr(f,v),f.index=0,f.sibling=null,f}function s(f,v,w){return f.index=w,t?(w=f.alternate,w!==null?(w=w.index,w<v?(f.flags|=2,v):w):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,w,_){return v===null||v.tag!==6?(v=Au(w,f.mode,_),v.return=f,v):(v=r(v,w),v.return=f,v)}function l(f,v,w,_){var b=w.type;return b===Ss?u(f,v,w.props.children,_,w.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===sr&&bm(b)===v.type)?(_=r(v,w.props),_.ref=vo(f,v,w),_.return=f,_):(_=Fl(w.type,w.key,w.props,null,f.mode,_),_.ref=vo(f,v,w),_.return=f,_)}function c(f,v,w,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=Ru(w,f.mode,_),v.return=f,v):(v=r(v,w.children||[]),v.return=f,v)}function u(f,v,w,_,b){return v===null||v.tag!==7?(v=Hr(w,f.mode,_,b),v.return=f,v):(v=r(v,w),v.return=f,v)}function h(f,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Au(""+v,f.mode,w),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Na:return w=Fl(v.type,v.key,v.props,null,f.mode,w),w.ref=vo(f,null,v),w.return=f,w;case ys:return v=Ru(v,f.mode,w),v.return=f,v;case sr:var _=v._init;return h(f,_(v._payload),w)}if(Po(v)||fo(v))return v=Hr(v,f.mode,w,null),v.return=f,v;Ha(f,v)}return null}function d(f,v,w,_){var b=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return b!==null?null:a(f,v,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Na:return w.key===b?l(f,v,w,_):null;case ys:return w.key===b?c(f,v,w,_):null;case sr:return b=w._init,d(f,v,b(w._payload),_)}if(Po(w)||fo(w))return b!==null?null:u(f,v,w,_,null);Ha(f,w)}return null}function p(f,v,w,_,b){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(w)||null,a(v,f,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Na:return f=f.get(_.key===null?w:_.key)||null,l(v,f,_,b);case ys:return f=f.get(_.key===null?w:_.key)||null,c(v,f,_,b);case sr:var T=_._init;return p(f,v,w,T(_._payload),b)}if(Po(_)||fo(_))return f=f.get(w)||null,u(v,f,_,b,null);Ha(v,_)}return null}function g(f,v,w,_){for(var b=null,T=null,C=v,y=v=0,A=null;C!==null&&y<w.length;y++){C.index>y?(A=C,C=null):A=C.sibling;var N=d(f,C,w[y],_);if(N===null){C===null&&(C=A);break}t&&C&&N.alternate===null&&e(f,C),v=s(N,v,y),T===null?b=N:T.sibling=N,T=N,C=A}if(y===w.length)return n(f,C),yt&&Ur(f,y),b;if(C===null){for(;y<w.length;y++)C=h(f,w[y],_),C!==null&&(v=s(C,v,y),T===null?b=C:T.sibling=C,T=C);return yt&&Ur(f,y),b}for(C=i(f,C);y<w.length;y++)A=p(C,f,y,w[y],_),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?y:A.key),v=s(A,v,y),T===null?b=A:T.sibling=A,T=A);return t&&C.forEach(function(I){return e(f,I)}),yt&&Ur(f,y),b}function x(f,v,w,_){var b=fo(w);if(typeof b!="function")throw Error(oe(150));if(w=b.call(w),w==null)throw Error(oe(151));for(var T=b=null,C=v,y=v=0,A=null,N=w.next();C!==null&&!N.done;y++,N=w.next()){C.index>y?(A=C,C=null):A=C.sibling;var I=d(f,C,N.value,_);if(I===null){C===null&&(C=A);break}t&&C&&I.alternate===null&&e(f,C),v=s(I,v,y),T===null?b=I:T.sibling=I,T=I,C=A}if(N.done)return n(f,C),yt&&Ur(f,y),b;if(C===null){for(;!N.done;y++,N=w.next())N=h(f,N.value,_),N!==null&&(v=s(N,v,y),T===null?b=N:T.sibling=N,T=N);return yt&&Ur(f,y),b}for(C=i(f,C);!N.done;y++,N=w.next())N=p(C,f,y,N.value,_),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?y:N.key),v=s(N,v,y),T===null?b=N:T.sibling=N,T=N);return t&&C.forEach(function(O){return e(f,O)}),yt&&Ur(f,y),b}function m(f,v,w,_){if(typeof w=="object"&&w!==null&&w.type===Ss&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Na:e:{for(var b=w.key,T=v;T!==null;){if(T.key===b){if(b=w.type,b===Ss){if(T.tag===7){n(f,T.sibling),v=r(T,w.props.children),v.return=f,f=v;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===sr&&bm(b)===T.type){n(f,T.sibling),v=r(T,w.props),v.ref=vo(f,T,w),v.return=f,f=v;break e}n(f,T);break}else e(f,T);T=T.sibling}w.type===Ss?(v=Hr(w.props.children,f.mode,_,w.key),v.return=f,f=v):(_=Fl(w.type,w.key,w.props,null,f.mode,_),_.ref=vo(f,v,w),_.return=f,f=_)}return o(f);case ys:e:{for(T=w.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(f,v.sibling),v=r(v,w.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=Ru(w,f.mode,_),v.return=f,f=v}return o(f);case sr:return T=w._init,m(f,v,T(w._payload),_)}if(Po(w))return g(f,v,w,_);if(fo(w))return x(f,v,w,_);Ha(f,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,w),v.return=f,f=v):(n(f,v),v=Au(w,f.mode,_),v.return=f,f=v),o(f)):n(f,v)}return m}var qs=Dv(!0),Iv=Dv(!1),oc=Cr(null),ac=null,Rs=null,Lh=null;function Dh(){Lh=Rs=ac=null}function Ih(t){var e=oc.current;xt(oc),t._currentValue=e}function Xd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){ac=t,Lh=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Lh!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(ac===null)throw Error(oe(308));Rs=t,ac.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var kr=null;function Uh(t){kr===null?kr=[t]:kr.push(t)}function Uv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Uh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Gi(t,i)}function Gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Fh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gi(t,n)}return r=i.interleaved,r===null?(e.next=e,Uh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gi(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sh(t,n)}}function Tm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(d=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=bt({},h,d);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=h}}function Cm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Ma={},_i=Cr(Ma),ra=Cr(Ma),sa=Cr(Ma);function Br(t){if(t===Ma)throw Error(oe(174));return t}function Oh(t,e){switch(ht(sa,e),ht(ra,t),ht(_i,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bd(e,t)}xt(_i),ht(_i,e)}function Ks(){xt(_i),xt(ra),xt(sa)}function Ov(t){Br(sa.current);var e=Br(_i.current),n=bd(e,t.type);e!==n&&(ht(ra,t),ht(_i,n))}function kh(t){ra.current===t&&(xt(_i),xt(ra))}var wt=Cr(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mu=[];function Bh(){for(var t=0;t<Mu.length;t++)Mu[t]._workInProgressVersionPrimary=null;Mu.length=0}var Nl=ji.ReactCurrentDispatcher,wu=ji.ReactCurrentBatchConfig,Xr=0,Et=null,It=null,Vt=null,uc=!1,zo=!1,oa=0,IM=0;function Kt(){throw Error(oe(321))}function zh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Vh(t,e,n,i,r,s){if(Xr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nl.current=t===null||t.memoizedState===null?kM:BM,t=n(i,r),zo){s=0;do{if(zo=!1,oa=0,25<=s)throw Error(oe(301));s+=1,Vt=It=null,e.updateQueue=null,Nl.current=zM,t=n(i,r)}while(zo)}if(Nl.current=dc,e=It!==null&&It.next!==null,Xr=0,Vt=It=Et=null,uc=!1,e)throw Error(oe(300));return t}function Hh(){var t=oa!==0;return oa=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Et.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function qn(){if(It===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Vt===null?Et.memoizedState:Vt.next;if(e!==null)Vt=e,It=t;else{if(t===null)throw Error(oe(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Vt===null?Et.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function aa(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=qn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Xr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Et.lanes|=u,jr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ai(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bu(t){var e=qn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ai(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function kv(){}function Bv(t,e){var n=Et,i=qn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Gh(Hv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,la(9,Vv.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(oe(349));Xr&30||zv(n,e,r)}return r}function zv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vv(t,e,n,i){e.value=n,e.getSnapshot=i,Gv(e)&&Wv(t)}function Hv(t,e,n){return n(function(){Gv(e)&&Wv(t)})}function Gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function Wv(t){var e=Gi(t,1);e!==null&&oi(e,t,1,-1)}function Am(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=OM.bind(null,Et,t),[e.memoizedState,t]}function la(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Xv(){return qn().memoizedState}function Ll(t,e,n,i){var r=hi();Et.flags|=t,r.memoizedState=la(1|e,n,void 0,i===void 0?null:i)}function Fc(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&zh(i,o.deps)){r.memoizedState=la(e,n,s,i);return}}Et.flags|=t,r.memoizedState=la(1|e,n,s,i)}function Rm(t,e){return Ll(8390656,8,t,e)}function Gh(t,e){return Fc(2048,8,t,e)}function jv(t,e){return Fc(4,2,t,e)}function Yv(t,e){return Fc(4,4,t,e)}function $v(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qv(t,e,n){return n=n!=null?n.concat([t]):null,Fc(4,4,$v.bind(null,e,t),n)}function Wh(){}function Kv(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zv(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Qv(t,e,n){return Xr&21?(ai(n,e)||(n=iv(),Et.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function UM(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=wu.transition;wu.transition={};try{t(!1),e()}finally{ot=n,wu.transition=i}}function Jv(){return qn().memoizedState}function FM(t,e,n){var i=Sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ex(t))tx(e,n);else if(n=Uv(t,e,n,i),n!==null){var r=dn();oi(n,t,i,r),nx(n,e,i)}}function OM(t,e,n){var i=Sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ex(t))tx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,o)){var l=e.interleaved;l===null?(r.next=r,Uh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Uv(t,e,r,i),n!==null&&(r=dn(),oi(n,t,i,r),nx(n,e,i))}}function ex(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function tx(t,e){zo=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sh(t,n)}}var dc={readContext:$n,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},kM={readContext:$n,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:Rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,$v.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=FM.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:Am,useDebugValue:Wh,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=Am(!1),e=t[0];return t=UM.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=hi();if(yt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Ht===null)throw Error(oe(349));Xr&30||zv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Rm(Hv.bind(null,i,s,t),[t]),i.flags|=2048,la(9,Vv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=Ht.identifierPrefix;if(yt){var n=Ui,i=Ii;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BM={readContext:$n,useCallback:Kv,useContext:$n,useEffect:Gh,useImperativeHandle:qv,useInsertionEffect:jv,useLayoutEffect:Yv,useMemo:Zv,useReducer:Eu,useRef:Xv,useState:function(){return Eu(aa)},useDebugValue:Wh,useDeferredValue:function(t){var e=qn();return Qv(e,It.memoizedState,t)},useTransition:function(){var t=Eu(aa)[0],e=qn().memoizedState;return[t,e]},useMutableSource:kv,useSyncExternalStore:Bv,useId:Jv,unstable_isNewReconciler:!1},zM={readContext:$n,useCallback:Kv,useContext:$n,useEffect:Gh,useImperativeHandle:qv,useInsertionEffect:jv,useLayoutEffect:Yv,useMemo:Zv,useReducer:bu,useRef:Xv,useState:function(){return bu(aa)},useDebugValue:Wh,useDeferredValue:function(t){var e=qn();return It===null?e.memoizedState=t:Qv(e,It.memoizedState,t)},useTransition:function(){var t=bu(aa)[0],e=qn().memoizedState;return[t,e]},useMutableSource:kv,useSyncExternalStore:Bv,useId:Jv,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Oc={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Sr(t),s=Bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(oi(e,t,r,i),Pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Sr(t),s=Bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(oi(e,t,r,i),Pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=Sr(t),r=Bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=_r(t,r,i),e!==null&&(oi(e,t,i,n),Pl(e,t,i))}};function Pm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,i)||!ea(r,s):!0}function ix(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=Sn(e)?Gr:on.current,i=e.contextTypes,s=(i=i!=null)?Ys(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Oc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Oc.enqueueReplaceState(e,e.state,null)}function Yd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Fh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=Sn(e)?Gr:on.current,r.context=Ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Oc.enqueueReplaceState(r,r.state,null),lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=pS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VM=typeof WeakMap=="function"?WeakMap:Map;function rx(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hc||(hc=!0,sf=i),$d(t,e)},n}function sx(t,e,n){n=Bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){$d(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$d(t,e),typeof i!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new VM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=tw.bind(null,t,e,n),e.then(t,t))}function Dm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Im(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var HM=ji.ReactCurrentOwner,_n=!1;function un(t,e,n,i){e.child=t===null?Iv(e,null,n,i):qs(e,t.child,n,i)}function Um(t,e,n,i,r){n=n.render;var s=e.ref;return ks(e,r),i=Vh(t,e,n,i,s,r),n=Hh(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(yt&&n&&Rh(e),e.flags|=1,un(t,e,i,r),e.child)}function Fm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Qh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ox(t,e,s,i,r)):(t=Fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=Mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function ox(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ea(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return qd(t,e,n,i,r)}function ax(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Ns,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Ns,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Ns,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Ns,Pn),Pn|=i;return un(t,e,r,n),e.child}function lx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qd(t,e,n,i,r){var s=Sn(n)?Gr:on.current;return s=Ys(e,s),ks(e,r),n=Vh(t,e,n,i,s,r),i=Hh(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(yt&&i&&Rh(e),e.flags|=1,un(t,e,n,r),e.child)}function Om(t,e,n,i,r){if(Sn(n)){var s=!0;ic(e)}else s=!1;if(ks(e,r),e.stateNode===null)Dl(t,e),ix(e,n,i),Yd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=Sn(n)?Gr:on.current,c=Ys(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Nm(e,o,i,c),or=!1;var d=e.memoizedState;o.state=d,lc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||yn.current||or?(typeof u=="function"&&(jd(e,n,u,i),l=e.memoizedState),(a=or||Pm(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Fv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=Sn(n)?Gr:on.current,l=Ys(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Nm(e,o,i,l),or=!1,d=e.memoizedState,o.state=d,lc(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||yn.current||or?(typeof p=="function"&&(jd(e,n,p,i),g=e.memoizedState),(c=or||Pm(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Kd(t,e,n,i,s,r)}function Kd(t,e,n,i,r,s){lx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mm(e,n,!1),Wi(t,e,s);i=e.stateNode,HM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):un(t,e,a,s),e.memoizedState=i.state,r&&Mm(e,n,!0),e.child}function cx(t){var e=t.stateNode;e.pendingContext?Sm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sm(t,e.context,!1),Oh(t,e.containerInfo)}function km(t,e,n,i,r){return $s(),Nh(r),e.flags|=256,un(t,e,n,i),e.child}var Zd={dehydrated:null,treeContext:null,retryLane:0};function Qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ux(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(wt,r&1),t===null)return Wd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zc(o,i,0,null),t=Hr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qd(n),e.memoizedState=Zd,t):Xh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return GM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Mr(a,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Qd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zd,i}return s=t.child,t=s.sibling,i=Mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xh(t,e){return e=zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,i){return i!==null&&Nh(i),qs(e,t.child,null,n),t=Xh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Tu(Error(oe(422))),Ga(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zc({mode:"visible",children:i.children},r,0,null),s=Hr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=Qd(o),e.memoizedState=Zd,s);if(!(e.mode&1))return Ga(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=Tu(s,i,void 0),Ga(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gi(t,r),oi(i,t,r,-1))}return Zh(),i=Tu(Error(oe(421))),Ga(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=nw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Un=xr(r.nextSibling),Fn=e,yt=!0,ii=null,t!==null&&(Gn[Wn++]=Ii,Gn[Wn++]=Ui,Gn[Wn++]=Wr,Ii=t.id,Ui=t.overflow,Wr=e),e=Xh(e,i.children),e.flags|=4096,e)}function Bm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xd(t.return,e,n)}function Cu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function dx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bm(t,n,e);else if(t.tag===19)Bm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cu(e,!0,n,null,s);break;case"together":Cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WM(t,e,n){switch(e.tag){case 3:cx(e),$s();break;case 5:Ov(e);break;case 1:Sn(e.type)&&ic(e);break;case 4:Oh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?ux(t,e,n):(ht(wt,wt.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);ht(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,ax(t,e,n)}return Wi(t,e,n)}var fx,Jd,hx,px;fx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jd=function(){};hx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(_i.current);var s=null;switch(n){case"input":r=Sd(t,r),i=Sd(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=Ed(t,r),i=Ed(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tc)}Td(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};px=function(t,e,n,i){n!==i&&(e.flags|=4)};function xo(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function XM(t,e,n){var i=e.pendingProps;switch(Ph(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return Sn(e.type)&&nc(),Zt(e),null;case 3:return i=e.stateNode,Ks(),xt(yn),xt(on),Bh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(lf(ii),ii=null))),Jd(t,e),Zt(e),null;case 5:kh(e);var r=Br(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)hx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Zt(e),null}if(t=Br(_i.current),Va(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[ia]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Lo.length;r++)gt(Lo[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":$p(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Kp(i,s),gt("invalid",i)}Td(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":La(i),qp(i,s,!0);break;case"textarea":La(i),Zp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=H0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[mi]=e,t[ia]=i,fx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cd(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Lo.length;r++)gt(Lo[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":$p(t,i),r=Sd(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Kp(t,i),r=Ed(t,i),gt("invalid",t);break;default:r=i}Td(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?X0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&G0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$o(t,l):typeof l=="number"&&$o(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&mh(t,s,l,o))}switch(n){case"input":La(t),qp(t,i,!1);break;case"textarea":La(t),Zp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Is(t,!!i.multiple,s,!1):i.defaultValue!=null&&Is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)px(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Br(sa.current),Br(_i.current),Va(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Fn,t!==null))switch(t.tag){case 3:za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return Zt(e),null;case 13:if(xt(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Un!==null&&e.mode&1&&!(e.flags&128))Lv(),$s(),e.flags|=98560,s=!1;else if(s=Va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[mi]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else ii!==null&&(lf(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?Ft===0&&(Ft=3):Zh())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Ks(),Jd(t,e),t===null&&ta(e.stateNode.containerInfo),Zt(e),null;case 10:return Ih(e.type._context),Zt(e),null;case 17:return Sn(e.type)&&nc(),Zt(e),null;case 19:if(xt(wt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)xo(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cc(t),o!==null){for(e.flags|=128,xo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Qs&&(e.flags|=128,i=!0,xo(s,!1),e.lanes=4194304)}else{if(!i)if(t=cc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return Zt(e),null}else 2*At()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=wt.current,ht(wt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Kh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function jM(t,e){switch(Ph(e),e.tag){case 1:return Sn(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),xt(yn),xt(on),Bh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kh(e),null;case 13:if(xt(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(wt),null;case 4:return Ks(),null;case 10:return Ih(e.type._context),null;case 22:case 23:return Kh(),null;case 24:return null;default:return null}}var Wa=!1,tn=!1,YM=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function ef(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var zm=!1;function $M(t,e){if(Od=Ql,t=_v(),Ah(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kd={focusedElem:t,selectionRange:n},Ql=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:ti(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(_){Tt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return g=zm,zm=!1,g}function Vo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ef(e,n,s)}r=r.next}while(r!==i)}}function kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mx(t){var e=t.alternate;e!==null&&(t.alternate=null,mx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[ia],delete e[Vd],delete e[PM],delete e[NM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gx(t){return t.tag===5||t.tag===3||t.tag===4}function Vm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(i!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}function rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rf(t,e,n),t=t.sibling;t!==null;)rf(t,e,n),t=t.sibling}var Gt=null,ni=!1;function Ki(t,e,n){for(n=n.child;n!==null;)vx(t,e,n),n=n.sibling}function vx(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:tn||Ps(n,e);case 6:var i=Gt,r=ni;Gt=null,Ki(t,e,n),Gt=i,ni=r,Gt!==null&&(ni?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(ni?(t=Gt,n=n.stateNode,t.nodeType===8?yu(t.parentNode,n):t.nodeType===1&&yu(t,n),Qo(t)):yu(Gt,n.stateNode));break;case 4:i=Gt,r=ni,Gt=n.stateNode.containerInfo,ni=!0,Ki(t,e,n),Gt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ef(n,e,o),r=r.next}while(r!==i)}Ki(t,e,n);break;case 1:if(!tn&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,Ki(t,e,n),tn=i):Ki(t,e,n);break;default:Ki(t,e,n)}}function Hm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YM),e.forEach(function(i){var r=iw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,ni=!1;break e;case 3:Gt=a.stateNode.containerInfo,ni=!0;break e;case 4:Gt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Gt===null)throw Error(oe(160));vx(s,o,r),Gt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xx(e,t),e=e.sibling}function xx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),ui(t),i&4){try{Vo(3,t,t.return),kc(3,t)}catch(x){Tt(t,t.return,x)}try{Vo(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:Zn(e,t),ui(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if(Zn(e,t),ui(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{$o(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&z0(r,s),Cd(a,o);var c=Cd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?X0(r,h):u==="dangerouslySetInnerHTML"?G0(r,h):u==="children"?$o(r,h):mh(r,u,h,c)}switch(a){case"input":Md(r,s);break;case"textarea":V0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Is(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[ia]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(Zn(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(Zn(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:Zn(e,t),ui(t);break;case 13:Zn(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($h=At())),i&4&&Hm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||u,Zn(e,t),tn=c):Zn(e,t),ui(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Me=t,u=t.child;u!==null;){for(h=Me=u;Me!==null;){switch(d=Me,p=d.child,d.tag){case 0:case 11:case 14:case 15:Vo(4,d,d.return);break;case 1:Ps(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:Ps(d,d.return);break;case 22:if(d.memoizedState!==null){Wm(h);continue}}p!==null?(p.return=d,Me=p):Wm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=W0("display",o))}catch(x){Tt(t,t.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Zn(e,t),ui(t),i&4&&Hm(t);break;case 21:break;default:Zn(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gx(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($o(r,""),i.flags&=-33);var s=Vm(t);rf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Vm(t);nf(t,a,o);break;default:throw Error(oe(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qM(t,e,n){Me=t,_x(t)}function _x(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Wa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=Wa;var c=tn;if(Wa=o,(tn=l)&&!c)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?Xm(r):l!==null?(l.return=o,Me=l):Xm(r);for(;s!==null;)Me=s,_x(s),s=s.sibling;Me=r,Wa=a,tn=c}Gm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):Gm(t)}}function Gm(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Qo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}tn||e.flags&512&&tf(e)}catch(d){Tt(e,e.return,d)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Wm(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Xm(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{tf(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{tf(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var KM=Math.ceil,fc=ji.ReactCurrentDispatcher,jh=ji.ReactCurrentOwner,Yn=ji.ReactCurrentBatchConfig,Je=0,Ht=null,Lt=null,jt=0,Pn=0,Ns=Cr(0),Ft=0,ca=null,jr=0,Bc=0,Yh=0,Ho=null,xn=null,$h=0,Qs=1/0,Ni=null,hc=!1,sf=null,yr=null,Xa=!1,fr=null,pc=0,Go=0,of=null,Il=-1,Ul=0;function dn(){return Je&6?At():Il!==-1?Il:Il=At()}function Sr(t){return t.mode&1?Je&2&&jt!==0?jt&-jt:DM.transition!==null?(Ul===0&&(Ul=iv()),Ul):(t=ot,t!==0||(t=window.event,t=t===void 0?16:uv(t.type)),t):1}function oi(t,e,n,i){if(50<Go)throw Go=0,of=null,Error(oe(185));_a(t,n,i),(!(Je&2)||t!==Ht)&&(t===Ht&&(!(Je&2)&&(Bc|=n),Ft===4&&cr(t,jt)),Mn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Qs=At()+500,Uc&&Ar()))}function Mn(t,e){var n=t.callbackNode;DS(t,e);var i=Zl(t,t===Ht?jt:0);if(i===0)n!==null&&em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&em(n),e===1)t.tag===0?LM(jm.bind(null,t)):Rv(jm.bind(null,t)),AM(function(){!(Je&6)&&Ar()}),n=null;else{switch(rv(i)){case 1:n=yh;break;case 4:n=tv;break;case 16:n=Kl;break;case 536870912:n=nv;break;default:n=Kl}n=Cx(n,yx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yx(t,e){if(Il=-1,Ul=0,Je&6)throw Error(oe(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var i=Zl(t,t===Ht?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=mc(t,i);else{e=i;var r=Je;Je|=2;var s=Mx();(Ht!==t||jt!==e)&&(Ni=null,Qs=At()+500,Vr(t,e));do try{JM();break}catch(a){Sx(t,a)}while(!0);Dh(),fc.current=s,Je=r,Lt!==null?e=0:(Ht=null,jt=0,e=Ft)}if(e!==0){if(e===2&&(r=Ld(t),r!==0&&(i=r,e=af(t,r))),e===1)throw n=ca,Vr(t,0),cr(t,i),Mn(t,At()),n;if(e===6)cr(t,i);else{if(r=t.current.alternate,!(i&30)&&!ZM(r)&&(e=mc(t,i),e===2&&(s=Ld(t),s!==0&&(i=s,e=af(t,s))),e===1))throw n=ca,Vr(t,0),cr(t,i),Mn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Fr(t,xn,Ni);break;case 3:if(cr(t,i),(i&130023424)===i&&(e=$h+500-At(),10<e)){if(Zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zd(Fr.bind(null,t,xn,Ni),e);break}Fr(t,xn,Ni);break;case 4:if(cr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*KM(i/1960))-i,10<i){t.timeoutHandle=zd(Fr.bind(null,t,xn,Ni),i);break}Fr(t,xn,Ni);break;case 5:Fr(t,xn,Ni);break;default:throw Error(oe(329))}}}return Mn(t,At()),t.callbackNode===n?yx.bind(null,t):null}function af(t,e){var n=Ho;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=mc(t,e),t!==2&&(e=xn,xn=n,e!==null&&lf(e)),t}function lf(t){xn===null?xn=t:xn.push.apply(xn,t)}function ZM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~Yh,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function jm(t){if(Je&6)throw Error(oe(327));Bs();var e=Zl(t,0);if(!(e&1))return Mn(t,At()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var i=Ld(t);i!==0&&(e=i,n=af(t,i))}if(n===1)throw n=ca,Vr(t,0),cr(t,e),Mn(t,At()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,xn,Ni),Mn(t,At()),null}function qh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Qs=At()+500,Uc&&Ar())}}function Yr(t){fr!==null&&fr.tag===0&&!(Je&6)&&Bs();var e=Je;Je|=1;var n=Yn.transition,i=ot;try{if(Yn.transition=null,ot=1,t)return t()}finally{ot=i,Yn.transition=n,Je=e,!(Je&6)&&Ar()}}function Kh(){Pn=Ns.current,xt(Ns)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,CM(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Ph(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nc();break;case 3:Ks(),xt(yn),xt(on),Bh();break;case 5:kh(i);break;case 4:Ks();break;case 13:xt(wt);break;case 19:xt(wt);break;case 10:Ih(i.type._context);break;case 22:case 23:Kh()}n=n.return}if(Ht=t,Lt=t=Mr(t.current,null),jt=Pn=e,Ft=0,ca=null,Yh=Bc=jr=0,xn=Ho=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}kr=null}return t}function Sx(t,e){do{var n=Lt;try{if(Dh(),Nl.current=dc,uc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uc=!1}if(Xr=0,Vt=It=Et=null,zo=!1,oa=0,jh.current=null,n===null||n.return===null){Ft=1,ca=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Dm(o);if(p!==null){p.flags&=-257,Im(p,o,a,s,e),p.mode&1&&Lm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Lm(s,c,e),Zh();break e}l=Error(oe(426))}}else if(yt&&a.mode&1){var m=Dm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Im(m,o,a,s,e),Nh(Zs(l,a));break e}}s=l=Zs(l,a),Ft!==4&&(Ft=2),Ho===null?Ho=[s]:Ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=rx(s,l,e);Tm(s,f);break e;case 1:a=l;var v=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(yr===null||!yr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=sx(s,a,e);Tm(s,_);break e}}s=s.return}while(s!==null)}Ex(n)}catch(b){e=b,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function Mx(){var t=fc.current;return fc.current=dc,t===null?dc:t}function Zh(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Ht===null||!(jr&268435455)&&!(Bc&268435455)||cr(Ht,jt)}function mc(t,e){var n=Je;Je|=2;var i=Mx();(Ht!==t||jt!==e)&&(Ni=null,Vr(t,e));do try{QM();break}catch(r){Sx(t,r)}while(!0);if(Dh(),Je=n,fc.current=i,Lt!==null)throw Error(oe(261));return Ht=null,jt=0,Ft}function QM(){for(;Lt!==null;)wx(Lt)}function JM(){for(;Lt!==null&&!ES();)wx(Lt)}function wx(t){var e=Tx(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?Ex(t):Lt=e,jh.current=null}function Ex(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jM(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Lt=null;return}}else if(n=XM(n,e,Pn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Fr(t,e,n){var i=ot,r=Yn.transition;try{Yn.transition=null,ot=1,ew(t,e,n,i)}finally{Yn.transition=r,ot=i}return null}function ew(t,e,n,i){do Bs();while(fr!==null);if(Je&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(IS(t,s),t===Ht&&(Lt=Ht=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,Cx(Kl,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=ot;ot=1;var a=Je;Je|=4,jh.current=null,$M(t,n),xx(n,t),yM(kd),Ql=!!Od,kd=Od=null,t.current=n,qM(n),bS(),Je=a,ot=o,Yn.transition=s}else t.current=n;if(Xa&&(Xa=!1,fr=t,pc=r),s=t.pendingLanes,s===0&&(yr=null),AS(n.stateNode),Mn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hc)throw hc=!1,t=sf,sf=null,t;return pc&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===of?Go++:(Go=0,of=t):Go=0,Ar(),null}function Bs(){if(fr!==null){var t=rv(pc),e=Yn.transition,n=ot;try{if(Yn.transition=null,ot=16>t?16:t,fr===null)var i=!1;else{if(t=fr,fr=null,pc=0,Je&6)throw Error(oe(331));var r=Je;for(Je|=4,Me=t.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Me=c;Me!==null;){var u=Me;switch(u.tag){case 0:case 11:case 15:Vo(8,u,s)}var h=u.child;if(h!==null)h.return=u,Me=h;else for(;Me!==null;){u=Me;var d=u.sibling,p=u.return;if(mx(u),u===c){Me=null;break}if(d!==null){d.return=p,Me=d;break}Me=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Me=f;break e}Me=s.return}}var v=t.current;for(Me=v;Me!==null;){o=Me;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,Me=w;else e:for(o=v;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kc(9,a)}}catch(b){Tt(a,a.return,b)}if(a===o){Me=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Me=_;break e}Me=a.return}}if(Je=r,Ar(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Pc,t)}catch{}i=!0}return i}finally{ot=n,Yn.transition=e}}return!1}function Ym(t,e,n){e=Zs(n,e),e=rx(t,e,1),t=_r(t,e,1),e=dn(),t!==null&&(_a(t,1,e),Mn(t,e))}function Tt(t,e,n){if(t.tag===3)Ym(t,t,n);else for(;e!==null;){if(e.tag===3){Ym(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(yr===null||!yr.has(i))){t=Zs(n,t),t=sx(e,t,1),e=_r(e,t,1),t=dn(),e!==null&&(_a(e,1,t),Mn(e,t));break}}e=e.return}}function tw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(jt&n)===n&&(Ft===4||Ft===3&&(jt&130023424)===jt&&500>At()-$h?Vr(t,0):Yh|=n),Mn(t,e)}function bx(t,e){e===0&&(t.mode&1?(e=Ua,Ua<<=1,!(Ua&130023424)&&(Ua=4194304)):e=1);var n=dn();t=Gi(t,e),t!==null&&(_a(t,e,n),Mn(t,n))}function nw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bx(t,n)}function iw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),bx(t,n)}var Tx;Tx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,WM(t,e,n);_n=!!(t.flags&131072)}else _n=!1,yt&&e.flags&1048576&&Pv(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Dl(t,e),t=e.pendingProps;var r=Ys(e,on.current);ks(e,n),r=Vh(null,e,i,t,r,n);var s=Hh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,ic(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fh(e),r.updater=Oc,e.stateNode=r,r._reactInternals=e,Yd(e,i,t,n),e=Kd(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&Rh(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sw(i),t=ti(i,t),r){case 0:e=qd(null,e,i,t,n);break e;case 1:e=Om(null,e,i,t,n);break e;case 11:e=Um(null,e,i,t,n);break e;case 14:e=Fm(null,e,i,ti(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),qd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Om(t,e,i,r,n);case 3:e:{if(cx(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Fv(t,e),lc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(oe(423)),e),e=km(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(oe(424)),e),e=km(t,e,i,n,r);break e}else for(Un=xr(e.stateNode.containerInfo.firstChild),Fn=e,yt=!0,ii=null,n=Iv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),i===r){e=Wi(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return Ov(e),t===null&&Wd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Bd(i,r)?o=null:s!==null&&Bd(i,s)&&(e.flags|=32),lx(t,e),un(t,e,o,n),e.child;case 6:return t===null&&Wd(e),null;case 13:return ux(t,e,n);case 4:return Oh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Um(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(oc,i._currentValue),i._currentValue=o,s!==null)if(ai(s.value,o)){if(s.children===r.children&&!yn.current){e=Wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,n),r=$n(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),Fm(t,e,i,r,n);case 15:return ox(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Dl(t,e),e.tag=1,Sn(i)?(t=!0,ic(e)):t=!1,ks(e,n),ix(e,i,r),Yd(e,i,r,n),Kd(null,e,i,!0,t,n);case 19:return dx(t,e,n);case 22:return ax(t,e,n)}throw Error(oe(156,e.tag))};function Cx(t,e){return ev(t,e)}function rw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new rw(t,e,n,i)}function Qh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sw(t){if(typeof t=="function")return Qh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vh)return 11;if(t===xh)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Qh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return Hr(n.children,r,s,e);case gh:o=8,r|=8;break;case vd:return t=jn(12,n,e,r|2),t.elementType=vd,t.lanes=s,t;case xd:return t=jn(13,n,e,r),t.elementType=xd,t.lanes=s,t;case _d:return t=jn(19,n,e,r),t.elementType=_d,t.lanes=s,t;case O0:return zc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U0:o=10;break e;case F0:o=9;break e;case vh:o=11;break e;case xh:o=14;break e;case sr:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=jn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Hr(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function zc(t,e,n,i){return t=jn(22,t,i,e),t.elementType=O0,t.lanes=n,t.stateNode={isHidden:!1},t}function Au(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function Ru(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ow(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cu(0),this.expirationTimes=cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jh(t,e,n,i,r,s,o,a,l){return t=new ow(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fh(s),t}function aw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ax(t){if(!t)return Er;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(Sn(n))return Av(t,n,e)}return e}function Rx(t,e,n,i,r,s,o,a,l){return t=Jh(n,i,!0,t,r,s,o,a,l),t.context=Ax(null),n=t.current,i=dn(),r=Sr(n),s=Bi(i,r),s.callback=e??null,_r(n,s,r),t.current.lanes=r,_a(t,r,i),Mn(t,i),t}function Vc(t,e,n,i){var r=e.current,s=dn(),o=Sr(r);return n=Ax(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=_r(r,e,o),t!==null&&(oi(t,r,o,s),Pl(t,r,o)),o}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ep(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function lw(){return null}var Px=typeof reportError=="function"?reportError:function(t){console.error(t)};function tp(t){this._internalRoot=t}Hc.prototype.render=tp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Vc(t,e,null,null)};Hc.prototype.unmount=tp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){Vc(null,t,null,null)}),e[Hi]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=av();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&cv(t)}};function np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qm(){}function cw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=gc(o);s.call(c)}}var o=Rx(e,i,t,0,null,!1,!1,"",qm);return t._reactRootContainer=o,t[Hi]=o.current,ta(t.nodeType===8?t.parentNode:t),Yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=gc(l);a.call(c)}}var l=Jh(t,0,!1,null,null,!1,!1,"",qm);return t._reactRootContainer=l,t[Hi]=l.current,ta(t.nodeType===8?t.parentNode:t),Yr(function(){Vc(e,l,n,i)}),l}function Wc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=gc(o);a.call(l)}}Vc(e,o,t,r)}else o=cw(n,e,t,r,i);return gc(o)}sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=No(e.pendingLanes);n!==0&&(Sh(e,n|1),Mn(e,At()),!(Je&6)&&(Qs=At()+500,Ar()))}break;case 13:Yr(function(){var i=Gi(t,1);if(i!==null){var r=dn();oi(i,t,1,r)}}),ep(t,1)}};Mh=function(t){if(t.tag===13){var e=Gi(t,134217728);if(e!==null){var n=dn();oi(e,t,134217728,n)}ep(t,134217728)}};ov=function(t){if(t.tag===13){var e=Sr(t),n=Gi(t,e);if(n!==null){var i=dn();oi(n,t,e,i)}ep(t,e)}};av=function(){return ot};lv=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Rd=function(t,e,n){switch(e){case"input":if(Md(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ic(i);if(!r)throw Error(oe(90));B0(i),Md(i,r)}}}break;case"textarea":V0(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};$0=qh;q0=Yr;var uw={usingClientEntryPoint:!1,Events:[Sa,bs,Ic,j0,Y0,qh]},_o={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dw={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Q0(t),t===null?null:t.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{Pc=ja.inject(dw),xi=ja}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uw;Bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!np(e))throw Error(oe(200));return aw(t,e,null,n)};Bn.createRoot=function(t,e){if(!np(t))throw Error(oe(299));var n=!1,i="",r=Px;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Jh(t,1,!1,null,null,n,!1,i,r),t[Hi]=e.current,ta(t.nodeType===8?t.parentNode:t),new tp(e)};Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Q0(e),t=t===null?null:t.stateNode,t};Bn.flushSync=function(t){return Yr(t)};Bn.hydrate=function(t,e,n){if(!Gc(e))throw Error(oe(200));return Wc(null,t,e,!0,n)};Bn.hydrateRoot=function(t,e,n){if(!np(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Px;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Rx(e,null,t,1,n??null,r,!1,s,o),t[Hi]=e.current,ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hc(e)};Bn.render=function(t,e,n){if(!Gc(e))throw Error(oe(200));return Wc(null,t,e,!1,n)};Bn.unmountComponentAtNode=function(t){if(!Gc(t))throw Error(oe(40));return t._reactRootContainer?(Yr(function(){Wc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1};Bn.unstable_batchedUpdates=qh;Bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Wc(t,e,n,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function Nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nx)}catch(t){console.error(t)}}Nx(),N0.exports=Bn;var Xc=N0.exports;const fw=x0(Xc);var Lx,Km=Xc;Lx=Km.createRoot,Km.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vc(){return vc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vc.apply(this,arguments)}var hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hr||(hr={}));const Zm="popstate";function hw(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return cf("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ix(r)}return mw(e,n,null,t)}function Tn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Dx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pw(){return Math.random().toString(36).substr(2,8)}function Qm(t,e){return{usr:t.state,key:t.key,idx:e}}function cf(t,e,n,i){return n===void 0&&(n=null),vc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?jc(e):e,{state:n,key:e&&e.key||i||pw()})}function Ix(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function jc(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function mw(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=hr.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(vc({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=hr.Pop;let m=u(),f=m==null?null:m-c;c=m,l&&l({action:a,location:x.location,delta:f})}function d(m,f){a=hr.Push;let v=cf(x.location,m,f);c=u()+1;let w=Qm(v,c),_=x.createHref(v);try{o.pushState(w,"",_)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(_)}s&&l&&l({action:a,location:x.location,delta:1})}function p(m,f){a=hr.Replace;let v=cf(x.location,m,f);c=u();let w=Qm(v,c),_=x.createHref(v);o.replaceState(w,"",_),s&&l&&l({action:a,location:x.location,delta:0})}function g(m){let f=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:Ix(m);return v=v.replace(/ $/,"%20"),Tn(f,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,f)}let x={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Zm,h),l=m,()=>{r.removeEventListener(Zm,h),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let f=g(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:d,replace:p,go(m){return o.go(m)}};return x}var Jm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Jm||(Jm={}));function gw(t,e,n){return n===void 0&&(n="/"),vw(t,e,n,!1)}function vw(t,e,n,i){let r=typeof e=="string"?jc(e):e,s=Ox(r.pathname||"/",n);if(s==null)return null;let o=Ux(t);xw(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=Rw(s);a=Cw(o[l],c,i)}return a}function Ux(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Tn(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=zs([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Tn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ux(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:bw(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Fx(s.path))r(s,o,l)}),e}function Fx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Fx(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function xw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Tw(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const _w=/^:[\w-]+$/,yw=3,Sw=2,Mw=1,ww=10,Ew=-2,eg=t=>t==="*";function bw(t,e){let n=t.split("/"),i=n.length;return n.some(eg)&&(i+=Ew),e&&(i+=Sw),n.filter(r=>!eg(r)).reduce((r,s)=>r+(_w.test(s)?yw:s===""?Mw:ww),i)}function Tw(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Cw(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",h=tg({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!h&&c&&n&&!i[i.length-1].route.index&&(h=tg({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:zs([s,h.pathname]),pathnameBase:Pw(zs([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=zs([s,h.pathnameBase]))}return o}function tg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Aw(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,h)=>{let{paramName:d,isOptional:p}=u;if(d==="*"){let x=a[h]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const g=a[h];return p&&!g?c[d]=void 0:c[d]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Aw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Dx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Rw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Dx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ox(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const zs=t=>t.join("/").replace(/\/\/+/g,"/"),Pw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function Nw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const kx=["post","put","patch","delete"];new Set(kx);const Lw=["get",...kx];new Set(Lw);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xc(){return xc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xc.apply(this,arguments)}const Dw=U.createContext(null),Iw=U.createContext(null),Bx=U.createContext(null),Yc=U.createContext(null),$c=U.createContext({outlet:null,matches:[],isDataRoute:!1}),zx=U.createContext(null);function ip(){return U.useContext(Yc)!=null}function Vx(){return ip()||Tn(!1),U.useContext(Yc).location}function Uw(t,e){return Fw(t,e)}function Fw(t,e,n,i){ip()||Tn(!1);let{navigator:r}=U.useContext(Bx),{matches:s}=U.useContext($c),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Vx(),u;if(e){var h;let m=typeof e=="string"?jc(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Tn(!1),u=m}else u=c;let d=u.pathname||"/",p=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=gw(t,{pathname:p}),x=Vw(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:zs([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:zs([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&x?U.createElement(Yc.Provider,{value:{location:xc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:hr.Pop}},x):x}function Ow(){let t=Xw(),e=Nw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:r},n):null,null)}const kw=U.createElement(Ow,null);class Bw extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement($c.Provider,{value:this.props.routeContext},U.createElement(zx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zw(t){let{routeContext:e,match:n,children:i}=t,r=U.useContext(Dw);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement($c.Provider,{value:e},i)}function Vw(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);u>=0||Tn(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let h=o[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=u),h.route.id){let{loaderData:d,errors:p}=n,g=h.route.loader&&d[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,h,d)=>{let p,g=!1,x=null,m=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||kw,l&&(c<0&&d===0?(g=!0,m=null):c===d&&(g=!0,m=h.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,d+1)),v=()=>{let w;return p?w=x:g?w=m:h.route.Component?w=U.createElement(h.route.Component,null):h.route.element?w=h.route.element:w=u,U.createElement(zw,{match:h,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:w})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?U.createElement(Bw,{location:n.location,revalidation:n.revalidation,component:x,error:p,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var uf=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(uf||{});function Hw(t){let e=U.useContext(Iw);return e||Tn(!1),e}function Gw(t){let e=U.useContext($c);return e||Tn(!1),e}function Ww(t){let e=Gw(),n=e.matches[e.matches.length-1];return n.route.id||Tn(!1),n.route.id}function Xw(){var t;let e=U.useContext(zx),n=Hw(uf.UseRouteError),i=Ww(uf.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function jw(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function df(t){Tn(!1)}function Yw(t){let{basename:e="/",children:n=null,location:i,navigationType:r=hr.Pop,navigator:s,static:o=!1,future:a}=t;ip()&&Tn(!1);let l=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:l,navigator:s,static:o,future:xc({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=jc(i));let{pathname:u="/",search:h="",hash:d="",state:p=null,key:g="default"}=i,x=U.useMemo(()=>{let m=Ox(u,l);return m==null?null:{location:{pathname:m,search:h,hash:d,state:p,key:g},navigationType:r}},[l,u,h,d,p,g,r]);return x==null?null:U.createElement(Bx.Provider,{value:c},U.createElement(Yc.Provider,{children:n,value:x}))}function $w(t){let{children:e,location:n}=t;return Uw(ff(e),n)}new Promise(()=>{});function ff(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(i,r)=>{if(!U.isValidElement(i))return;let s=[...e,r];if(i.type===U.Fragment){n.push.apply(n,ff(i.props.children,s));return}i.type!==df&&Tn(!1),!i.props.index||!i.props.children||Tn(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=ff(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const qw="6";try{window.__reactRouterVersion=qw}catch{}const Kw="startTransition",ng=R0[Kw];function Zw(t){let{basename:e,children:n,future:i,window:r}=t,s=U.useRef();s.current==null&&(s.current=hw({window:r,v5Compat:!0}));let o=s.current,[a,l]=U.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=U.useCallback(h=>{c&&ng?ng(()=>l(h)):l(h)},[l,c]);return U.useLayoutEffect(()=>o.listen(u),[o,u]),U.useEffect(()=>jw(i),[i]),U.createElement(Yw,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var ig;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ig||(ig={}));var rg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rg||(rg={}));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hx=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=U.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>U.createElement("svg",{ref:l,...Jw,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Hx("lucide",r),...a},[...o.map(([c,u])=>U.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(t,e)=>{const n=U.forwardRef(({className:i,...r},s)=>U.createElement(eE,{ref:s,iconNode:e,className:Hx(`lucide-${Qw(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=ct("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=ct("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=ct("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=ct("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=ct("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=ct("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=ct("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=ct("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=ct("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=ct("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=ct("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=ct("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=ct("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=ct("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=ct("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=ct("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=ct("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=ct("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=ct("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=ct("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=ct("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=ct("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=ct("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=ct("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=ct("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function sg(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function $x(...t){return e=>{let n=!1;const i=t.map(r=>{const s=sg(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():sg(t[r],null)}}}}function $r(...t){return U.useCallback($x(...t),t)}function _c(t){const e=yE(t),n=U.forwardRef((i,r)=>{const{children:s,...o}=i,a=U.Children.toArray(s),l=a.find(ME);if(l){const c=l.props.children,u=a.map(h=>h===l?U.Children.count(c)>1?U.Children.only(null):U.isValidElement(c)?c.props.children:null:h);return M.jsx(e,{...o,ref:r,children:U.isValidElement(c)?U.cloneElement(c,void 0,u):null})}return M.jsx(e,{...o,ref:r,children:s})});return n.displayName=`${t}.Slot`,n}var _E=_c("Slot");function yE(t){const e=U.forwardRef((n,i)=>{const{children:r,...s}=n;if(U.isValidElement(r)){const o=EE(r),a=wE(s,r.props);return r.type!==U.Fragment&&(a.ref=i?$x(i,o):o),U.cloneElement(r,a)}return U.Children.count(r)>1?U.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var SE=Symbol("radix.slottable");function ME(t){return U.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===SE}function wE(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function EE(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function qx(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=qx(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function Kx(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=qx(t))&&(i&&(i+=" "),i+=e);return i}const og=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,ag=Kx,Zx=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return ag(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=n==null?void 0:n[c],h=s==null?void 0:s[c];if(u===null)return null;const d=og(u)||og(h);return r[c][d]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,d]=u;return d===void 0||(c[h]=d),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:h,className:d,...p}=u;return Object.entries(p).every(g=>{let[x,m]=g;return Array.isArray(m)?m.includes({...s,...a}[x]):{...s,...a}[x]===m})?[...c,h,d]:c},[]);return ag(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},sp="-",bE=t=>{const e=CE(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(sp);return a[0]===""&&a.length!==1&&a.shift(),Qx(a,e)||TE(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},Qx=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?Qx(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(sp);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},lg=/^\[(.+)\]$/,TE=t=>{if(lg.test(t)){const e=lg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},CE=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return RE(Object.entries(t.classGroups),n).forEach(([s,o])=>{pf(o,i,s,e)}),i},pf=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:cg(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(AE(r)){pf(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{pf(o,cg(e,s),n,i)})})},cg=(t,e)=>{let n=t;return e.split(sp).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},AE=t=>t.isThemeGetter,RE=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,PE=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},Jx="!",NE=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,u=0,h;for(let m=0;m<a.length;m++){let f=a[m];if(c===0){if(f===r&&(i||a.slice(m,m+s)===e)){l.push(a.slice(u,m)),u=m+s;continue}if(f==="/"){h=m;continue}}f==="["?c++:f==="]"&&c--}const d=l.length===0?a:a.substring(u),p=d.startsWith(Jx),g=p?d.substring(1):d,x=h&&h>u?h-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:x}};return n?a=>n({className:a,parseClassName:o}):o},LE=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},DE=t=>({cache:PE(t.cacheSize),parseClassName:NE(t),...bE(t)}),IE=/\s+/,UE=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(IE);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:u,hasImportantModifier:h,baseClassName:d,maybePostfixModifierPosition:p}=n(c);let g=!!p,x=i(g?d.substring(0,p):d);if(!x){if(!g){a=c+(a.length>0?" "+a:a);continue}if(x=i(d),!x){a=c+(a.length>0?" "+a:a);continue}g=!1}const m=LE(u).join(":"),f=h?m+Jx:m,v=f+x;if(s.includes(v))continue;s.push(v);const w=r(x,g);for(let _=0;_<w.length;++_){const b=w[_];s.push(f+b)}a=c+(a.length>0?" "+a:a)}return a};function FE(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=e_(e))&&(i&&(i+=" "),i+=n);return i}const e_=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=e_(t[i]))&&(n&&(n+=" "),n+=e);return n};function OE(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((u,h)=>h(u),t());return n=DE(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=UE(l,n);return r(l,u),u}return function(){return s(FE.apply(null,arguments))}}const mt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},t_=/^\[(?:([a-z-]+):)?(.+)\]$/i,kE=/^\d+\/\d+$/,BE=new Set(["px","full","screen"]),zE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,VE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,HE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,GE=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,WE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,bi=t=>Vs(t)||BE.has(t)||kE.test(t),Zi=t=>oo(t,"length",QE),Vs=t=>!!t&&!Number.isNaN(Number(t)),Pu=t=>oo(t,"number",Vs),yo=t=>!!t&&Number.isInteger(Number(t)),XE=t=>t.endsWith("%")&&Vs(t.slice(0,-1)),ze=t=>t_.test(t),Qi=t=>zE.test(t),jE=new Set(["length","size","percentage"]),YE=t=>oo(t,jE,n_),$E=t=>oo(t,"position",n_),qE=new Set(["image","url"]),KE=t=>oo(t,qE,e1),ZE=t=>oo(t,"",JE),So=()=>!0,oo=(t,e,n)=>{const i=t_.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},QE=t=>VE.test(t)&&!HE.test(t),n_=()=>!1,JE=t=>GE.test(t),e1=t=>WE.test(t),t1=()=>{const t=mt("colors"),e=mt("spacing"),n=mt("blur"),i=mt("brightness"),r=mt("borderColor"),s=mt("borderRadius"),o=mt("borderSpacing"),a=mt("borderWidth"),l=mt("contrast"),c=mt("grayscale"),u=mt("hueRotate"),h=mt("invert"),d=mt("gap"),p=mt("gradientColorStops"),g=mt("gradientColorStopPositions"),x=mt("inset"),m=mt("margin"),f=mt("opacity"),v=mt("padding"),w=mt("saturate"),_=mt("scale"),b=mt("sepia"),T=mt("skew"),C=mt("space"),y=mt("translate"),A=()=>["auto","contain","none"],N=()=>["auto","hidden","clip","visible","scroll"],I=()=>["auto",ze,e],O=()=>[ze,e],Y=()=>["",bi,Zi],P=()=>["auto",Vs,ze],V=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],G=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],z=()=>["start","end","center","between","around","evenly","stretch"],B=()=>["","0",ze],W=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>[Vs,ze];return{cacheSize:500,separator:":",theme:{colors:[So],spacing:[bi,Zi],blur:["none","",Qi,ze],brightness:K(),borderColor:[t],borderRadius:["none","","full",Qi,ze],borderSpacing:O(),borderWidth:Y(),contrast:K(),grayscale:B(),hueRotate:K(),invert:B(),gap:O(),gradientColorStops:[t],gradientColorStopPositions:[XE,Zi],inset:I(),margin:I(),opacity:K(),padding:O(),saturate:K(),scale:K(),sepia:B(),skew:K(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",ze]}],container:["container"],columns:[{columns:[Qi]}],"break-after":[{"break-after":W()}],"break-before":[{"break-before":W()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...V(),ze]}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",yo,ze]}],basis:[{basis:I()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ze]}],grow:[{grow:B()}],shrink:[{shrink:B()}],order:[{order:["first","last","none",yo,ze]}],"grid-cols":[{"grid-cols":[So]}],"col-start-end":[{col:["auto",{span:["full",yo,ze]},ze]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[So]}],"row-start-end":[{row:["auto",{span:[yo,ze]},ze]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ze]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ze]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...z()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...z(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...z(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ze,e]}],"min-w":[{"min-w":[ze,e,"min","max","fit"]}],"max-w":[{"max-w":[ze,e,"none","full","min","max","fit","prose",{screen:[Qi]},Qi]}],h:[{h:[ze,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ze,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ze,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ze,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Qi,Zi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Pu]}],"font-family":[{font:[So]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ze]}],"line-clamp":[{"line-clamp":["none",Vs,Pu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",bi,ze]}],"list-image":[{"list-image":["none",ze]}],"list-style-type":[{list:["none","disc","decimal",ze]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",bi,Zi]}],"underline-offset":[{"underline-offset":["auto",bi,ze]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ze]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ze]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...V(),$E]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",YE]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},KE]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...q(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:q()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...q()]}],"outline-offset":[{"outline-offset":[bi,ze]}],"outline-w":[{outline:[bi,Zi]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:Y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[bi,Zi]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Qi,ZE]}],"shadow-color":[{shadow:[So]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...G(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":G()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Qi,ze]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[w]}],sepia:[{sepia:[b]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[b]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ze]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",ze]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",ze]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[_]}],"scale-x":[{"scale-x":[_]}],"scale-y":[{"scale-y":[_]}],rotate:[{rotate:[yo,ze]}],"translate-x":[{"translate-x":[y]}],"translate-y":[{"translate-y":[y]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ze]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ze]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ze]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[bi,Zi,Pu]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},n1=OE(t1);function gn(...t){return n1(Kx(t))}const i1=Zx("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),On=U.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},s)=>{const o=i?_E:"button";return M.jsx(o,{className:gn(i1({variant:e,size:n,className:t})),ref:s,...r})});On.displayName="Button";const r1=({is3DEnabled:t,onToggle3D:e,onOpenProjectsDeck:n,onScrollToStation:i})=>{const[r,s]=U.useState(!1),[o,a]=U.useState(!1);return U.useEffect(()=>{const l=()=>{s(window.scrollY>40)};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),M.jsxs("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${r?"bg-[#07080d]/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5":"bg-transparent py-5"}`,children:[M.jsxs("div",{className:"container mx-auto px-6 md:px-10 flex items-center justify-between",children:[M.jsxs("button",{type:"button",onClick:()=>i("home"),className:"group flex items-center gap-2 text-left focus:outline-none",children:[M.jsx("span",{className:"text-xl md:text-2xl font-black gradient-text tracking-wider",children:"RP"}),M.jsx("span",{className:"hidden md:inline-block font-mono text-[10px] tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors uppercase",children:"/ Spatial Dev"})]}),M.jsxs("nav",{className:"hidden md:flex items-center gap-8",children:[M.jsx("button",{type:"button",onClick:()=>i("home"),className:"font-mono text-xs tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase",children:"[ Home ]"}),M.jsxs("button",{type:"button",onClick:n,className:"font-mono text-xs tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors uppercase flex items-center gap-1.5",children:[M.jsx(wa,{className:"w-3 h-3 text-cyan-400"}),"[ Projects (13) ]"]}),M.jsx("button",{type:"button",onClick:()=>i("contact"),className:"font-mono text-xs tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase",children:"[ Contact ]"})]}),M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsxs("button",{type:"button",onClick:e,title:t?"Turn off 3D WebGL background":"Turn on 3D WebGL background",className:`flex items-center gap-2 px-3 h-8 md:h-9 rounded-xl border text-[11px] font-mono font-semibold transition-all ${t?"bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-sm shadow-cyan-500/20":"bg-white/[0.04] border-white/10 text-slate-400 hover:text-white"}`,children:[M.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${t?"bg-cyan-400 animate-pulse":"bg-slate-500"}`}),"3D LAB ",t?"ON":"OFF"]}),M.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"hidden sm:inline-block",children:M.jsxs(On,{size:"sm",className:"h-8 md:h-9 px-4 bg-primary text-primary-foreground hover:shadow-glow font-semibold gap-1.5 text-xs rounded-xl",children:[M.jsx(hf,{className:"w-3.5 h-3.5"}),"Resume"]})}),M.jsx("button",{type:"button",onClick:()=>a(!o),className:"md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-white","aria-label":"Toggle menu",children:o?M.jsx(qc,{className:"w-4 h-4"}):M.jsx(mE,{className:"w-4 h-4"})})]})]}),o&&M.jsxs("div",{className:"md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#090b14]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-3",children:[M.jsx("button",{type:"button",onClick:()=>{a(!1),i("home")},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]",children:"[ 00 // Home ]"}),M.jsx("button",{type:"button",onClick:()=>{a(!1),i("about")},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]",children:"[ 01 // Profile & Experience ]"}),M.jsx("button",{type:"button",onClick:()=>{a(!1),n()},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-cyan-400 hover:bg-cyan-500/10 font-bold",children:"[ 02 // All Projects Deck (13) ]"}),M.jsx("button",{type:"button",onClick:()=>{a(!1),i("contact")},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]",children:"[ 07 // Transmission ]"}),M.jsx("div",{className:"pt-2 border-t border-white/10",children:M.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"block",children:M.jsxs(On,{className:"w-full bg-primary text-primary-foreground gap-2 text-xs",children:[M.jsx(hf,{className:"w-3.5 h-3.5"}),"Download Resume"]})})})]})]})},mf=[{id:"home",code:"00",label:"00 // Home",title:"Introduction"},{id:"about",code:"01",label:"01 // About Me",title:"Profile & Expertise"},{id:"smartscopy",code:"02",label:"02 // SmartScopy",title:"Medical XR Platform"},{id:"mimadim",code:"03",label:"03 // MimadimPlus",title:"3D CAD Engine"},{id:"nopainheals",code:"04",label:"04 // NoPainHeals",title:"Interactive Therapy Kiosk"},{id:"vision-ai",code:"05",label:"05 // Motion AI",title:"Computer Vision Games"},{id:"skills",code:"06",label:"06 // Skills & Stack",title:"Technologies & Services"},{id:"contact",code:"07",label:"07 // Contact",title:"Get In Touch"}],s1=({activeStationId:t,onSelectStation:e})=>M.jsxs("aside",{"aria-label":"Section Navigation Rail",className:"fixed left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-5 pointer-events-auto select-none",children:[M.jsx("div",{className:"absolute left-[7px] top-1 bottom-1 w-[1.5px] bg-white/[0.08]"}),mf.map(n=>{const i=t===n.id;return M.jsxs("button",{type:"button",onClick:()=>e(n.id),className:"group relative flex items-center gap-3 text-left focus:outline-none",children:[M.jsx("div",{className:`relative z-10 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${i?"border border-cyan-400/80 bg-[#07080d] shadow-sm shadow-cyan-400/50 scale-110":"border border-white/20 bg-[#07080d] group-hover:border-cyan-400/40"}`,children:M.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i?"bg-cyan-400 shadow-[0_0_8px_#22d3ee] scale-100":"bg-transparent group-hover:bg-white/40 scale-75"}`})}),M.jsx("div",{className:"flex flex-col",children:M.jsx("span",{className:`font-mono text-[11px] tracking-wider transition-all duration-200 ${i?"text-cyan-400 font-bold translate-x-1":"text-slate-400/60 font-medium group-hover:text-slate-200 group-hover:translate-x-0.5"}`,children:n.label})})]},n.id)})]}),o1=()=>M.jsxs("div",{"aria-hidden":"true",className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none select-none opacity-80",children:[M.jsx("div",{className:"relative w-[1.5px] h-9 bg-gradient-to-b from-cyan-400/80 via-indigo-400/40 to-transparent",children:M.jsx("span",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-bounce"})}),M.jsx("span",{className:"font-mono text-[9px] tracking-[0.25em] text-slate-400 uppercase",children:"SCROLL TO DISCOVER"})]}),a1=({project:t,onClose:e,onOpenAllProjects:n})=>(U.useEffect(()=>{const i=r=>{r.key==="Escape"&&e()};return t&&(window.addEventListener("keydown",i),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",i),document.body.style.overflow="unset"}},[t,e]),t?M.jsxs("div",{className:"fixed inset-0 z-50 flex justify-end",children:[M.jsx("div",{onClick:e,className:"fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"}),M.jsxs("aside",{role:"dialog","aria-label":`${t.title} Case Study`,className:"relative z-10 w-full max-w-xl h-full bg-[#080a12]/95 backdrop-blur-2xl border-l border-white/[0.08] shadow-2xl p-6 md:p-10 flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300",children:[M.jsxs("div",{className:"flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),M.jsxs("span",{className:"font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase",children:["Case Study // ",t.category]})]}),M.jsxs("button",{type:"button",onClick:e,className:"group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-400 hover:text-white transition-all text-xs font-mono","aria-label":"Close Case Study",children:[M.jsx("span",{children:"[ ESC ]"}),M.jsx(qc,{className:"w-3.5 h-3.5 group-hover:rotate-90 transition-transform"})]})]}),M.jsxs("div",{className:"mb-6",children:[M.jsx("h2",{className:"text-3xl md:text-4xl font-black tracking-tight text-white mb-2",children:t.title}),M.jsx("p",{className:"font-mono text-sm text-cyan-300/80 leading-relaxed",children:t.subtitle})]}),M.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-6",children:[M.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/15 border border-indigo-500/30 text-indigo-300",children:["Role: ",t.role]}),t.featured&&M.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center gap-1",children:[M.jsx(wa,{className:"w-3 h-3 text-cyan-400"})," Flagship Production System"]})]}),M.jsxs("div",{className:"mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]",children:[M.jsx("h4",{className:"font-mono text-xs tracking-wider text-slate-400 uppercase mb-2",children:"Engineering Overview"}),M.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:t.fullDescription||t.shortDescription})]}),t.architecturalHighlights&&t.architecturalHighlights.length>0&&M.jsxs("div",{className:"mb-6",children:[M.jsxs("h4",{className:"font-mono text-xs tracking-wider text-cyan-400 uppercase mb-3 flex items-center gap-2",children:[M.jsx(Xx,{className:"w-4 h-4"})," Architectural Highlights"]}),M.jsx("div",{className:"space-y-2.5",children:t.architecturalHighlights.map((i,r)=>M.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]",children:[M.jsx(rp,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),M.jsx("span",{className:"text-xs text-slate-300 leading-relaxed",children:i})]},r))})]}),M.jsxs("div",{className:"mb-6",children:[M.jsxs("h4",{className:"font-mono text-xs tracking-wider text-indigo-400 uppercase mb-3 flex items-center gap-2",children:[M.jsx(uE,{className:"w-4 h-4"})," Key Deliverables & Systems Built"]}),M.jsx("ul",{className:"space-y-2",children:t.keyWork.map((i,r)=>M.jsxs("li",{className:"flex items-start gap-2.5 text-xs text-slate-300",children:[M.jsx("span",{className:"text-indigo-400 font-bold font-mono",children:"▸"}),M.jsx("span",{children:i})]},r))})]}),t.metrics&&M.jsxs("div",{className:"mb-6 p-4 rounded-2xl bg-cyan-500/[0.05] border border-cyan-500/20",children:[M.jsx("span",{className:"font-mono text-[10px] tracking-widest text-cyan-400 uppercase block mb-1",children:"Production Impact & Telemetry"}),M.jsx("span",{className:"text-sm font-semibold text-white",children:t.metrics})]}),M.jsxs("div",{className:"mb-8",children:[M.jsx("h4",{className:"font-mono text-xs tracking-wider text-slate-400 uppercase mb-3",children:"Technology Stack"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:t.tech.map(i=>M.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300",children:i},i))})]}),M.jsxs("div",{className:"mt-auto pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3",children:[n&&M.jsx(On,{type:"button",onClick:()=>{e(),n()},className:"flex-1 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl text-xs h-10 shadow-lg shadow-cyan-500/20",children:"Explore All 13 Projects"}),t.liveUrl&&M.jsx("a",{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"no-underline flex-1",children:M.jsxs(On,{variant:"outline",className:"w-full border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 rounded-xl text-xs h-10 gap-1.5",children:[M.jsx(oE,{className:"w-3.5 h-3.5"}),"Live Link"]})})]})]})]}):null),Kc=U.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:gn("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));Kc.displayName="Card";const l1=U.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:gn("flex flex-col space-y-1.5 p-6",t),...e}));l1.displayName="CardHeader";const c1=U.forwardRef(({className:t,...e},n)=>M.jsx("h3",{ref:n,className:gn("text-2xl font-semibold leading-none tracking-tight",t),...e}));c1.displayName="CardTitle";const u1=U.forwardRef(({className:t,...e},n)=>M.jsx("p",{ref:n,className:gn("text-sm text-muted-foreground",t),...e}));u1.displayName="CardDescription";const d1=U.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:gn("p-6 pt-0",t),...e}));d1.displayName="CardContent";const f1=U.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:gn("flex items-center p-6 pt-0",t),...e}));f1.displayName="CardFooter";const en=[{id:"smartscopy",title:"SmartScopy",subtitle:"Live Operating Theatre XR & Low-Latency Video Pipeline",category:"Medical XR",role:"Lead XR & Video Pipeline Engineer",shortDescription:"Solo-built XR platform streaming live endoscopic surgical camera feeds in real time to XREAL glasses and HoloLens 2, integrated with 3D anatomical overlays.",fullDescription:"SmartScopy is an operating theatre mixed-reality platform engineered to give surgical teams direct, hands-free visualization of endoscopic feeds and patient anatomy inside XR headsets. Built with a low-latency video streaming pipeline in Unity (C#) and Python, it allows surgeons to view live surgical feeds alongside interactive 3D anatomical models reconstructed from patient CT, MRI, and X-ray imaging.",tech:["Unity3D","C#","XREAL Air","HoloLens 2","MRTK","OpenXR","Python","OpenCV"],keyWork:["Ultra-low latency live video pipeline in Unity (C#) for real-time surgical camera feeds","Stereoscopic XR rendering for XREAL glasses and Microsoft HoloLens 2 via OpenXR","Interactive 3D anatomical reconstructions from CT/MRI/X-ray data viewable alongside live video","Modular Python video capture architecture with DirectShow buffer elimination"],architecturalHighlights:["Threaded video capture and processing pipeline separating capture and render loops","Sub-100ms camera-to-headset latency for precision surgical assistance","Dual-headset target support with MRTK gesture control and spatial head-anchoring"],featured:!0},{id:"mimadimplus",title:"MimadimPlus",subtitle:"Automated CAD-to-3D Procedural Architectural Engine",category:"Unreal Engine 5",role:"Lead Pipeline & C++ Developer",shortDescription:"Automated 2D-to-3D engine that converts raw CAD/DXF blueprints into realistic, real-time 3D building environments with procedural mesh generation.",fullDescription:"MimadimPlus is an automated architectural generation engine in Unreal Engine 5 that eliminates manual 3D modeling by compiling raw 2D CAD/DXF blueprints into procedural 3D environments. Built with custom C++ classes and UProceduralMeshComponent, it handles coordinate conversion, room-footprint extraction, wall-partner raycast snapping, and includes a custom procedural floor tile generator with polygon clipping math.",tech:["Unreal Engine 5","C++","UProceduralMeshComponent","Python","Blueprints","Meta Quest"],keyWork:["Automated DXF/CAD blueprint parser converting 2D architectural entities into 3D geometry","Custom C++ procedural mesh generation for walls, floors, doors, and windows with auto-calculated UVs and tangents","Integrated Procedural Floor Tile Generator & Geometric Clipper (TileManagerActor.h) for arbitrary polygon room boundaries","Companion Python desktop application for blueprint inspection, tag extraction, and Meta Quest VR walkthroughs"],architecturalHighlights:["Mathematical coordinate space conversion from 2D CAD (Y-inversion, normalization) to Unreal 3D world coordinates","Geometric clipping algorithm that slices tile meshes against complex L-shaped room contours with uniform grout spacing","Real-time dynamic lighting and material instancing for multi-room layout previews"],featured:!0},{id:"nopainheals",title:"NoPainHeals",subtitle:"Clinical Floor Projection Rehabilitation Platform",category:"Healthcare & Web3D",role:"Interactive Systems & Security Engineer",shortDescription:"Multi-modal interactive therapy platform featuring 12+ floor-projection games, zero-trust E2EE crypto, and a hardened Linux kiosk architecture.",fullDescription:"NoPainHeals is an enterprise clinical rehabilitation station used for motor skills therapy, balance training, and pediatric physical therapy. The system runs on a locked-down Linux/Ubuntu kiosk, featuring a suite of 12+ motion-tracked games, a zero-trust end-to-end encrypted telemetry tunnel using X25519 and AES-256-GCM, and an offline-first IndexedDB queue that prevents metric loss during clinic network dropouts.",tech:["Electron","Three.js","WebGL","WebSockets (Pusher v7)","Linux Kiosk","node:crypto (X25519, AES-256-GCM)","IndexedDB"],keyWork:["Delivered 12+ interactive floor-projection rehabilitation games (hopscotch, balance paths, reaction games)","Engineered zero-trust E2EE tunnel using node:crypto (X25519 key exchange, HKDF-SHA256, AES-256-GCM)","Hardened Linux/Ubuntu kiosk deployment with window escape guards and auto-launch controls","Built resilient offline-first IndexedDB queue with exponential backoff and retry caps"],architecturalHighlights:["Encrypted patient telemetry stream via custom secure headers (X-Encrypted-Payload, X-Hardware-Id)","Station hardware ID fingerprinting cached in Electron main process","Real-time WebSocket communication for remote therapist controls and QR station pairing"],featured:!0},{id:"motion-tracking-ai",title:"Camera-Based Motion Tracking & Edge AI",subtitle:"Real-Time Body Pose, Gesture & Object Detection Suite",category:"AI & Vision",role:"Computer Vision & Gameplay Engineer",shortDescription:"Custom motion and object-tracking models on live camera feeds powering controller-free full-body games.",fullDescription:"A high-performance edge AI computer vision pipeline developed in Python and Unity that processes live camera streams with zero buffer latency. Combines custom-trained YOLO object-tracking models running on ONNX Runtime with MediaPipe body pose and hand tracking to power controller-free games where physical movements control the gameplay.",tech:["Python","OpenCV","MediaPipe","YOLO","ONNX Runtime","DirectShow","Unity3D"],keyWork:["DirectShow video capture integration (cv2.CAP_DSHOW) eliminating internal frame buffer latency","Hybrid ML pipeline combining MediaPipe skeletal landmarks with custom ONNX models","Controller-free games suite: Fruit Samurai, Alien Runner, Enter If You Dare, and Football Cup","Real-time inference optimized for 60+ FPS on consumer hardware"],architecturalHighlights:["Multi-threaded frame acquisition and ML tensor inference to prevent UI stutter","Normalized gesture recognition coordinates mapped directly to in-game physics colliders"],featured:!0},{id:"3d-bone-visualizer",title:"3D Bone Visualizer",subtitle:"Interactive Orthopedic Mixed Reality Suite",category:"Medical XR",role:"XR Developer",shortDescription:"Interactive HoloLens 2 mixed-reality application enabling surgeons to inspect, slice, and manipulate 3D bone models from CT/MRI data.",fullDescription:"A specialized spatial computing application developed for Microsoft HoloLens 2 using MRTK and OpenXR. Surgeons can visualize volumetric patient bone structures in 3D space, rotate and inspect fractures, slice anatomical models along cross-sectional planes, and interact using natural hand tracking.",tech:["Unity3D","Microsoft HoloLens 2","MRTK","OpenXR","C#"],keyWork:["Volumetric bone model reconstruction and rendering from CT and MRI scans","Spatial hand-tracking gesture controls for 3D model rotation, zoom, and translation","Cross-sectional planar slicing tool for internal anatomical examination"],architecturalHighlights:["MRTK solver pipelines for ergonomic spatial anchoring in sterile operating room environments","Optimized polygon meshes for smooth 60 FPS rendering on mobile XR hardware"]},{id:"mimadim-homestudio",title:"MimadimHomeStudio",subtitle:"Real-Time Interior Customization & Furniture Swapping",category:"Unreal Engine 5",role:"Unreal Engine Developer",shortDescription:"Real-time interior design and customization engine in Unreal Engine 5 with dynamic asset swapping and instant lighting adjustments.",fullDescription:"An interactive architectural visualization tool built in UE5 using C++, Blueprints, and Data Assets. Users can customize room finishes, wall colors, lighting configurations, and dynamically swap furniture pieces while maintaining accurate world coordinates, pivot rotations, and collision bounds.",tech:["Unreal Engine 5","C++","Blueprints","Data Assets","Lumen Lighting"],keyWork:["Dynamic furniture swapping system preserving world position, rotation, and dimensions","Runtime material and color switching pipeline using Blueprint dynamic material instances","Real-time architectural lighting preview powered by UE5 Lumen"],architecturalHighlights:["Data Asset-driven catalog system decoupling furniture definitions from gameplay code","Collision checking preventing overlapping placements during item swaps"]},{id:"speech-therapy",title:"Speech Therapy Station (Speak & Rise)",subtitle:"Pediatric Articulation & Web3D Voice Platform",category:"Healthcare & Web3D",role:"Web3D & Systems Architect",shortDescription:"Interactive 3D web platform for pediatric speech therapy featuring real-time AI voice recognition and articulation scoring.",fullDescription:"An interactive pediatric speech rehabilitation platform built in Three.js and WebGL. Ravi refactored a 2,000+ line legacy monolith into clean decoupled modules (GameStateMachine, Classroom3D, GameRegistry) and integrated Sarvam AI voice activity detection and speech-to-text for real-time gamified pronunciation feedback.",tech:["Three.js","JavaScript","Web Audio API","Sarvam AI (VAD & STT)","Electron"],keyWork:["Architectural refactoring into decoupled GameStateMachine and Classroom3D modules","Integration of Sarvam AI Voice Activity Detection (VAD) and Speech-to-Text for pronunciation scoring","Interactive 3D character animation blending and gamified audio reward feedback"],architecturalHighlights:["Dynamic GameRegistry enabling plug-and-play addition of new therapy exercises without changing core logic","Low-latency Web Audio API synthesizers for instant child audio reinforcement"]},{id:"vr-boat-simulation",title:"VR Boat Simulation",subtitle:"Maritime Pilot Training Simulator",category:"Games & VR",role:"Unity Simulation Developer",shortDescription:"Virtual reality maritime simulator training pilots in transitioning from small vessels to large commercial cargo ships.",fullDescription:"A high-fidelity maritime training simulation in Unity for VR headsets. Focused on realistic open-water navigation, vessel handling characteristics, helm controls, realistic wave simulation, and custom buoyant water physics.",tech:["Unity3D","C#","VR SDK","HLSL Water Shaders","Physics Engine"],keyWork:["Developed realistic buoyant water physics and wave interaction models","Engineered ship helm controls and vessel inertia mechanics","Created dynamic weather and water shader effects"],architecturalHighlights:["Buoyancy force calculation sampling water height in real time to simulate realistic vessel heave and pitch","Comfort-tuned VR camera motion damping to minimize motion sickness during heavy waves"]},{id:"vr-zombie-shooter",title:"VR Zombie Shooter",subtitle:"First-Person 6DOF Immersive VR Game",category:"Games & VR",role:"Unity Gameplay Developer",shortDescription:"Action-packed first-person VR shooter featuring wave survival, spatial audio mapping, and realistic 6DOF weapon handling.",fullDescription:"An immersive virtual reality first-person game developed in Unity. Features realistic physics-based weapon reloading, tactile 6DOF controller feedback, spatial 3D audio, and intelligent enemy pathfinding algorithms.",tech:["Unity3D","C#","OpenXR","VR 6DOF","Spatial Audio","NavMesh AI"],keyWork:["Implemented 6DOF physical weapon grab, aim, and reload mechanics","Constructed multi-tiered enemy wave spawner with dynamic NavMesh routing","Configured 3D spatial soundscapes for audio-guided positional awareness"],architecturalHighlights:["Object pooling pipeline for projectiles, particle impacts, and enemy ragdolls to maintain a steady 90 FPS","Inverse kinematics (IK) player hand tracking"]},{id:"system-guard",title:"System Guard",subtitle:"Universal Kiosk Telemetry, Standby Tracker & Remote Kill-Switch",category:"Healthcare & Web3D",role:"Systems & Security Engineer",shortDescription:"Drop-in Electron kiosk monitoring module with hardware UUID fingerprinting, standby telemetry, and remote kill switch.",fullDescription:"A security and telemetry module designed for commercial medical kiosks. Auto-registers with a private Cloudflare Worker, generates tamper-resistant hardware UUID fingerprints, tracks active vs. standby operating time, and supports instant remote station locking.",tech:["Electron","Node.js crypto","Cloudflare Workers","Linux/Windows","Bash"],keyWork:["Hardware station fingerprinting via DMI product UUID and Linux machine ID","Inactivity detection transitioning kiosks cleanly between Active and Standby modes","Remote kill-switch protocol enabling instantaneous lockdown during security breaches"],architecturalHighlights:["Zero-dependency drop-in module requiring zero modification to existing game runtimes","Heartbeat ping architecture reporting kiosk health every 60 seconds with offline resilience"]},{id:"clean-the-city",title:"Clean the City",subtitle:"Mobile Physics Cleanup Game",category:"Games & VR",role:"Unity Mobile Developer",shortDescription:"Mobile casual game featuring black-hole gravitational physics to collect and absorb city debris.",fullDescription:"A mobile arcade game where players navigate an expanding black hole through urban environments, consuming city debris and buildings. Optimized for silky-smooth touch controls and high frame rates on both iOS and Android.",tech:["Unity3D","C#","Mobile (iOS/Android)","Physics2D/3D","Shader Graph"],keyWork:["Implemented gravitational suction physics and scalable mesh deformation","Optimized lighting, dynamic shadows, and draw-call batching for mobile performance","Integrated monetization SDKs and responsive touch controls"],architecturalHighlights:["Dynamic object scaling and collision culling to support hundreds of simultaneous physics bodies on mobile devices"]},{id:"iris-recognition",title:"Iris Recognition & Distance Detection",subtitle:"Biometric Identification & User Distance Prototype",category:"AI & Vision",role:"Computer Engineering Intern",shortDescription:"Image processing pipeline in Python and OpenCV calculating user distance from screen and biometric iris tracking.",fullDescription:"Developed during Ravi's engineering internship at Invisible Fiction. Built an image processing pipeline in Python and OpenCV that continuously tracks user eye position, computes user-to-screen distance to mitigate ocular fatigue, and evaluates iris features for biometric identification.",tech:["Python","OpenCV","NumPy","Image Processing"],keyWork:["Engineered user-to-screen geometric distance calculation using camera optical parameters","Constructed pupil and iris localization and contour isolation algorithms","Designed biometric distance warning thresholds to promote ergonomic computer usage"],architecturalHighlights:["Lightweight algorithmic pipeline running efficiently on standard webcam hardware without dedicated depth sensors"]},{id:"creative-spaces",title:"Creative Spaces Website",subtitle:"Interactive Architectural Showcase",category:"Healthcare & Web3D",role:"Freelance Web Developer",shortDescription:"Clean, responsive portfolio website built for an interior design and architectural client.",fullDescription:"A responsive website built for an interior design studio showcasing architectural design projects, interactive project galleries, and modern typography.",tech:["HTML5","CSS3","JavaScript","Responsive Web"],keyWork:["Constructed responsive image galleries and smooth scroll navigation","Optimized asset loading and mobile layout fidelity"],architecturalHighlights:["Clean semantic HTML structure with high Google Lighthouse performance scores"]}],h1=[{label:"All Systems",value:"All",count:en.length},{label:"Medical XR",value:"Medical XR",count:en.filter(t=>t.category==="Medical XR").length},{label:"Unreal Engine 5",value:"Unreal Engine 5",count:en.filter(t=>t.category==="Unreal Engine 5").length},{label:"Healthcare & Web3D",value:"Healthcare & Web3D",count:en.filter(t=>t.category==="Healthcare & Web3D").length},{label:"AI & Vision",value:"AI & Vision",count:en.filter(t=>t.category==="AI & Vision").length},{label:"Games & VR",value:"Games & VR",count:en.filter(t=>t.category==="Games & VR").length}],p1=({isOpen:t,onClose:e,onSelectProject:n})=>{const[i,r]=U.useState("All"),s=U.useRef(null);U.useEffect(()=>{const l=c=>{t&&(c.key==="Escape"?e():c.key==="ArrowRight"?o("right"):c.key==="ArrowLeft"&&o("left"))};return t&&(window.addEventListener("keydown",l),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",l),document.body.style.overflow="unset"}},[t,e]);const o=l=>{if(!s.current)return;const c=l==="right"?360:-360;s.current.scrollBy({left:c,behavior:"smooth"})};if(!t)return null;const a=i==="All"?en:en.filter(l=>l.category===i);return M.jsxs("div",{role:"dialog","aria-label":"Projects Archive Deck",className:"fixed inset-0 z-50 bg-[#06080e]/95 backdrop-blur-2xl flex flex-col p-6 md:p-10 animate-in fade-in duration-300",children:[M.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),M.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"ARCHIVE // 13 PRODUCTION SYSTEMS"})]}),M.jsxs("h2",{className:"text-2xl md:text-3xl font-black text-white tracking-tight",children:["Projects ",M.jsx("span",{className:"gradient-text",children:"Carousel Deck"})]})]}),M.jsxs("button",{type:"button",onClick:e,className:"group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-mono",children:[M.jsx("span",{children:"[ ESC ]"}),M.jsx(qc,{className:"w-4 h-4 group-hover:rotate-90 transition-transform"})]})]}),M.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-6",children:[M.jsx("div",{className:"flex flex-wrap gap-2",children:h1.map(l=>{const c=i===l.value;return M.jsxs("button",{type:"button",onClick:()=>r(l.value),className:`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${c?"bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20 font-bold":"bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white"}`,children:[M.jsx("span",{children:l.label}),M.jsxs("span",{className:"text-[10px] opacity-60",children:["(",l.count,")"]})]},l.value)})}),M.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[M.jsx(On,{size:"icon",variant:"outline",onClick:()=>o("left"),className:"w-9 h-9 rounded-xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]","aria-label":"Scroll Left",children:M.jsx(iE,{className:"w-4 h-4"})}),M.jsx(On,{size:"icon",variant:"outline",onClick:()=>o("right"),className:"w-9 h-9 rounded-xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]","aria-label":"Scroll Right",children:M.jsx(rE,{className:"w-4 h-4"})})]})]}),M.jsx("div",{ref:s,className:"flex-1 flex gap-5 overflow-x-auto items-stretch pb-6 scrollbar-none snap-x snap-mandatory",style:{scrollbarWidth:"none"},children:a.map(l=>M.jsxs(Kc,{onClick:()=>n(l),className:"group shrink-0 w-[300px] sm:w-[340px] p-6 rounded-2xl bg-[#090c16]/90 border border-white/[0.08] hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/15 transition-all duration-300 flex flex-col justify-between cursor-pointer snap-start relative overflow-hidden",children:[M.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[M.jsx("span",{className:"font-mono text-[10px] tracking-wider text-cyan-400 uppercase font-semibold",children:l.category}),l.featured&&M.jsxs("span",{className:"flex items-center gap-1 font-mono text-[10px] text-indigo-400",children:[M.jsx(wa,{className:"w-3 h-3 text-cyan-400"})," Flagship"]})]}),M.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2",children:l.title}),M.jsx("p",{className:"font-mono text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4",children:l.subtitle}),l.metrics&&M.jsx("div",{className:"p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-4",children:M.jsxs("span",{className:"font-mono text-[11px] text-cyan-300 block line-clamp-1 font-medium",children:["⚡ ",l.metrics]})})]}),M.jsxs("div",{children:[M.jsx("div",{className:"flex flex-wrap gap-1.5 mb-4",children:l.tech.slice(0,3).map(c=>M.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-400",children:c},c))}),M.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-cyan-400 pt-3 border-t border-white/[0.06]",children:[M.jsx("span",{children:"[ INSPECT CASE ]"}),M.jsx(Gx,{className:"w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"})]})]})]},l.id))})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="186",m1=0,ug=1,g1=2,Ol=1,v1=2,Do=3,qr=0,wn=1,Di=2,yi=0,Wo=1,gf=2,dg=3,fg=4,x1=5,xs=100,_1=101,y1=102,S1=103,M1=104,w1=200,E1=201,b1=202,T1=203,i_=204,r_=205,C1=206,A1=207,R1=208,P1=209,N1=210,L1=211,D1=212,I1=213,U1=214,vf=0,xf=1,_f=2,ua=3,yf=4,Sf=5,Mf=6,wf=7,s_=0,F1=1,O1=2,Si=0,o_=1,a_=2,l_=3,ap=4,c_=5,u_=6,d_=7,f_=300,Kr=301,Js=302,Nu=303,Lu=304,Zc=306,da=1e3,Fi=1001,Ef=1002,Xt=1003,k1=1004,Ya=1005,nn=1006,Du=1007,Oi=1008,Dn=1009,h_=1010,p_=1011,fa=1012,lp=1013,wi=1014,gi=1015,En=1016,cp=1017,up=1018,ha=1020,m_=35902,g_=35899,v_=1021,x_=1022,ri=1023,Xi=1026,zr=1027,__=1028,dp=1029,Zr=1030,fp=1031,hp=1033,kl=33776,Bl=33777,zl=33778,Vl=33779,bf=35840,Tf=35841,Cf=35842,Af=35843,Rf=36196,Pf=37492,Nf=37496,Lf=37488,Df=37489,yc=37490,If=37491,Uf=37808,Ff=37809,Of=37810,kf=37811,Bf=37812,zf=37813,Vf=37814,Hf=37815,Gf=37816,Wf=37817,Xf=37818,jf=37819,Yf=37820,$f=37821,qf=36492,Kf=36494,Zf=36495,Qf=36283,Jf=36284,Sc=36285,eh=36286,B1=3200,th=0,z1=1,ur="",Nn="srgb",Mc="srgb-linear",wc="linear",st="srgb",Iu=7680,V1=519,H1=512,G1=513,W1=514,pp=515,X1=516,j1=517,mp=518,Y1=519,$1=35044,hg="300 es",vi=2e3,pa=2001;function q1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ec(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function K1(){const t=Ec("canvas");return t.style.display="block",t}const pg={};function mg(...t){const e="THREE."+t.shift();console.log(e,...t)}function y_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=y_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function tt(...t){t=y_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Hs(...t){const e=t.join(" ");e in pg||(pg[e]=!0,De(...t))}function Z1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Q1={[vf]:xf,[_f]:Mf,[yf]:wf,[ua]:Sf,[xf]:vf,[Mf]:_f,[wf]:yf,[Sf]:ua};class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gg=1234567;const Gs=Math.PI/180,ma=180/Math.PI;function ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function gp(t,e){return(t%e+e)%e}function J1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function eb(t,e,n){return t!==e?(n-t)/(e-t):0}function Xo(t,e,n){return(1-n)*t+n*e}function tb(t,e,n,i){return Xo(t,e,1-Math.exp(-n*i))}function nb(t,e=1){return e-Math.abs(gp(t,e*2)-e)}function ib(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function rb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function sb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ob(t,e){return t+Math.random()*(e-t)}function ab(t){return t*(.5-Math.random())}function lb(t){t!==void 0&&(gg=t);let e=gg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cb(t){return t*Gs}function ub(t){return t*ma}function db(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function fb(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function hb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function pb(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _s(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const mb={DEG2RAD:Gs,RAD2DEG:ma,generateUUID:ao,clamp:Xe,euclideanModulo:gp,mapLinear:J1,inverseLerp:eb,lerp:Xo,damp:tb,pingpong:nb,smoothstep:ib,smootherstep:rb,randInt:sb,randFloat:ob,randFloatSpread:ab,seededRandom:lb,degToRad:cb,radToDeg:ub,isPowerOfTwo:db,ceilPowerOfTwo:fb,floorPowerOfTwo:hb,setQuaternionFromProperEuler:pb,normalize:ln,denormalize:_s},Cp=class Cp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cp.prototype.isVector2=!0;let Ne=Cp;class lo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(h!==x||l!==d||c!==p||u!==g){let m=l*d+c*p+u*g+h*x;m<0&&(d=-d,p=-p,g=-g,x=-x,m=-m);let f=1-a;if(m<.9995){const v=Math.acos(m),w=Math.sin(v);f=Math.sin(f*v)/w,a=Math.sin(a*v)/w,l=l*f+d*a,c=c*f+p*a,u=u*f+g*a,h=h*f+x*a}else{l=l*f+d*a,c=c*f+p*a,u=u*f+g*a,h=h*f+x*a;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*h+l*p-c*d,e[n+1]=l*g+u*d+c*h-a*p,e[n+2]=c*g+u*p+a*d-l*h,e[n+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ap=class Ap{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ap.prototype.isVector3=!0;let L=Ap;const Uu=new L,vg=new lo,Rp=class Rp{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],x=r[0],m=r[3],f=r[6],v=r[1],w=r[4],_=r[7],b=r[2],T=r[5],C=r[8];return s[0]=o*x+a*v+l*b,s[3]=o*m+a*w+l*T,s[6]=o*f+a*_+l*C,s[1]=c*x+u*v+h*b,s[4]=c*m+u*w+h*T,s[7]=c*f+u*_+h*C,s[2]=d*x+p*v+g*b,s[5]=d*m+p*w+g*T,s[8]=d*f+p*_+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fu.makeScale(e,n)),this}rotate(e){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fu.makeRotation(-e)),this}translate(e,n){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rp.prototype.isMatrix3=!0;let Fe=Rp;const Fu=new Fe,xg=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_g=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gb(){const t={enabled:!0,workingColorSpace:Mc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=Ws(r.r),r.g=Ws(r.g),r.b=Ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ur?wc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Mc]:{primaries:e,whitePoint:i,transfer:wc,toXYZ:xg,fromXYZ:_g,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:xg,fromXYZ:_g,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const Ze=gb();function zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ss;class vb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=Ec("canvas")),ss.width=e.width,ss.height=e.height;const r=ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ec("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xb=0;class vp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ou(r[o].image)):s.push(Ou(r[o]))}else s=Ou(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ou(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let _b=0;const ku=new L;class sn extends ts{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Fi,r=Fi,s=nn,o=Oi,a=ri,l=Dn,c=sn.DEFAULT_ANISOTROPY,u=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=ao(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ku).x}get height(){return this.source.getSize(ku).y}get depth(){return this.source.getSize(ku).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case da:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case da:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=f_;sn.DEFAULT_ANISOTROPY=1;const Pp=class Pp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(c+1)/2,_=(p+1)/2,b=(f+1)/2,T=(u+d)/4,C=(h+x)/4,y=(g+m)/4;return w>_&&w>b?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=C/i):_>b?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=T/r,s=y/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pp.prototype.isVector4=!0;let vt=Pp;class yb extends ts{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new sn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new vp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends yb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class S_ extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sb extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ac=class Ac{constructor(e,n,i,r,s,o,a,l,c,u,h,d,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,x,m)}set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ac().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,x=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,x=c*h;n[0]=d+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,x=c*h;n[0]=d-x*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,x=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-d*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+x,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mb,e,wb)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),Ji.crossVectors(i,An),Ji.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ji.crossVectors(i,An)),Ji.normalize(),$a.crossVectors(An,Ji),r[0]=Ji.x,r[4]=$a.x,r[8]=An.x,r[1]=Ji.y,r[5]=$a.y,r[9]=An.y,r[2]=Ji.z,r[6]=$a.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],v=i[3],w=i[7],_=i[11],b=i[15],T=r[0],C=r[4],y=r[8],A=r[12],N=r[1],I=r[5],O=r[9],Y=r[13],P=r[2],V=r[6],q=r[10],G=r[14],z=r[3],B=r[7],W=r[11],K=r[15];return s[0]=o*T+a*N+l*P+c*z,s[4]=o*C+a*I+l*V+c*B,s[8]=o*y+a*O+l*q+c*W,s[12]=o*A+a*Y+l*G+c*K,s[1]=u*T+h*N+d*P+p*z,s[5]=u*C+h*I+d*V+p*B,s[9]=u*y+h*O+d*q+p*W,s[13]=u*A+h*Y+d*G+p*K,s[2]=g*T+x*N+m*P+f*z,s[6]=g*C+x*I+m*V+f*B,s[10]=g*y+x*O+m*q+f*W,s[14]=g*A+x*Y+m*G+f*K,s[3]=v*T+w*N+_*P+b*z,s[7]=v*C+w*I+_*V+b*B,s[11]=v*y+w*O+_*q+b*W,s[15]=v*A+w*Y+_*G+b*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15],v=l*p-c*d,w=a*p-c*h,_=a*d-l*h,b=o*p-c*u,T=o*d-l*u,C=o*h-a*u;return n*(x*v-m*w+f*_)-i*(g*v-m*b+f*T)+r*(g*w-x*b+f*C)-s*(g*_-x*T+m*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],v=n*a-i*o,w=n*l-r*o,_=n*c-s*o,b=i*l-r*a,T=i*c-s*a,C=r*c-s*l,y=u*x-h*g,A=u*m-d*g,N=u*f-p*g,I=h*m-d*x,O=h*f-p*x,Y=d*f-p*m,P=v*Y-w*O+_*I+b*N-T*A+C*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/P;return e[0]=(a*Y-l*O+c*I)*V,e[1]=(r*O-i*Y-s*I)*V,e[2]=(x*C-m*T+f*b)*V,e[3]=(d*T-h*C-p*b)*V,e[4]=(l*N-o*Y-c*A)*V,e[5]=(n*Y-r*N+s*A)*V,e[6]=(m*_-g*C-f*w)*V,e[7]=(u*C-d*_+p*w)*V,e[8]=(o*O-a*N+c*y)*V,e[9]=(i*N-n*O-s*y)*V,e[10]=(g*T-x*_+f*v)*V,e[11]=(h*_-u*T-p*v)*V,e[12]=(a*A-o*I-l*y)*V,e[13]=(n*I-i*A+r*y)*V,e[14]=(x*w-g*b-m*v)*V,e[15]=(u*b-h*w+d*v)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,x=o*u,m=o*h,f=a*h,v=l*c,w=l*u,_=l*h,b=i.x,T=i.y,C=i.z;return r[0]=(1-(x+f))*b,r[1]=(p+_)*b,r[2]=(g-w)*b,r[3]=0,r[4]=(p-_)*T,r[5]=(1-(d+f))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+w)*C,r[9]=(m-v)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=os.set(r[0],r[1],r[2]).length();const a=os.set(r[4],r[5],r[6]).length(),l=os.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Qn.copy(this);const c=1/o,u=1/a,h=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,n.setFromRotationMatrix(Qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=vi,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===vi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===pa)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===vi)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===pa)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ac.prototype.isMatrix4=!0;let St=Ac;const os=new L,Qn=new St,Mb=new L(0,0,0),wb=new L(1,1,1),Ji=new L,$a=new L,An=new L,yg=new St,Sg=new lo;class br{constructor(e=0,n=0,i=0,r=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class M_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Eb=0;const Mg=new L,as=new lo,Ti=new St,qa=new L,Mo=new L,bb=new L,Tb=new lo,wg=new L(1,0,0),Eg=new L(0,1,0),bg=new L(0,0,1),Tg={type:"added"},Cb={type:"removed"},ls={type:"childadded",child:null},Bu={type:"childremoved",child:null};class hn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new L,n=new br,i=new lo,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Fe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(wg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(bg,e)}translateOnAxis(e,n){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(bg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qa.copy(e):qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Mo,qa,this.up):Ti.lookAt(qa,Mo,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),as.setFromRotationMatrix(Ti),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tg),ls.child=e,this.dispatchEvent(ls),ls.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Cb),Bu.child=e,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tg),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,bb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,Tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}hn.DEFAULT_UP=new L(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ls extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ab={type:"move"};class zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ab)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Vu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=gp(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Vu(o,s,e+1/3),this.g=Vu(o,s,e),this.b=Vu(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=w_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Ze.workingToColorSpace(Jt.copy(this),e),Math.round(Xe(Jt.r*255,0,255))*65536+Math.round(Xe(Jt.g*255,0,255))*256+Math.round(Xe(Jt.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Nn){Ze.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+n,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(er),e.getHSL(Ka);const i=Xo(er.h,Ka.h,n),r=Xo(er.s,Ka.s,n),s=Xo(er.l,Ka.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ge;Ge.NAMES=w_;class xp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new xp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rb extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new L,Ci=new L,Hu=new L,Ai=new L,cs=new L,us=new L,Cg=new L,Gu=new L,Wu=new L,Xu=new L,ju=new vt,Yu=new vt,$u=new vt;class Xn{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Ci.subVectors(i,n),Hu.subVectors(e,n);const o=Jn.dot(Jn),a=Jn.dot(Ci),l=Jn.dot(Hu),c=Ci.dot(Ci),u=Ci.dot(Hu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ju.setScalar(0),Yu.setScalar(0),$u.setScalar(0),ju.fromBufferAttribute(e,n),Yu.fromBufferAttribute(e,i),$u.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ju,s.x),o.addScaledVector(Yu,s.y),o.addScaledVector($u,s.z),o}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Ci.subVectors(e,n),Jn.cross(Ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Jn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;cs.subVectors(r,i),us.subVectors(s,i),Gu.subVectors(e,i);const l=cs.dot(Gu),c=us.dot(Gu);if(l<=0&&c<=0)return n.copy(i);Wu.subVectors(e,r);const u=cs.dot(Wu),h=us.dot(Wu);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(cs,o);Xu.subVectors(e,s);const p=cs.dot(Xu),g=us.dot(Xu);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(us,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Cg.subVectors(s,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(Cg,a);const f=1/(m+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ea{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Za.copy(i.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),Qa.subVectors(this.max,wo),ds.subVectors(e.a,wo),fs.subVectors(e.b,wo),hs.subVectors(e.c,wo),tr.subVectors(fs,ds),nr.subVectors(hs,fs),Pr.subVectors(ds,hs);let n=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Pr.z,Pr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Pr.z,0,-Pr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Pr.y,Pr.x,0];return!qu(n,ds,fs,hs,Qa)||(n=[1,0,0,0,1,0,0,0,1],!qu(n,ds,fs,hs,Qa))?!1:(Ja.crossVectors(tr,nr),n=[Ja.x,Ja.y,Ja.z],qu(n,ds,fs,hs,Qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new L,new L,new L,new L,new L,new L,new L,new L],ei=new L,Za=new Ea,ds=new L,fs=new L,hs=new L,tr=new L,nr=new L,Pr=new L,wo=new L,Qa=new L,Ja=new L,Nr=new L;function qu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Nr.fromArray(t,s);const a=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),c=n.dot(Nr),u=i.dot(Nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Nt=new L,el=new Ne;let Pb=0;class Mi extends ts{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$1,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)el.fromBufferAttribute(this,n),el.applyMatrix3(e),this.setXY(n,el.x,el.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_s(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_s(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_s(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_s(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_s(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class E_ extends Mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class b_ extends Mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bn extends Mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Nb=new Ea,Eo=new L,Ku=new L;class Qc{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Nb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const n=Eo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Ku)),this.expandByPoint(Eo.copy(e.center).sub(Ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Lb=0;const Hn=new St,Zu=new hn,ps=new L,Rn=new Ea,bo=new Ea,zt=new L;class Cn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q1(e)?b_:E_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Rn.min,bo.min),Rn.expandByPoint(zt),zt.addVectors(Rn.max,bo.max),Rn.expandByPoint(zt)):(Rn.expandByPoint(bo.min),Rn.expandByPoint(bo.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),zt.add(ps)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new L,l[y]=new L;const c=new L,u=new L,h=new L,d=new Ne,p=new Ne,g=new Ne,x=new L,m=new L;function f(y,A,N){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,N),d.fromBufferAttribute(s,y),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,N),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[y].add(x),a[A].add(x),a[N].add(x),l[y].add(m),l[A].add(m),l[N].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,A=v.length;y<A;++y){const N=v[y],I=N.start,O=N.count;for(let Y=I,P=I+O;Y<P;Y+=3)f(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const w=new L,_=new L,b=new L,T=new L;function C(y){b.fromBufferAttribute(r,y),T.copy(b);const A=a[y];w.copy(A),w.sub(b.multiplyScalar(b.dot(A))).normalize(),_.crossVectors(T,A);const I=_.dot(l[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,I)}for(let y=0,A=v.length;y<A;++y){const N=v[y],I=N.start,O=N.count;for(let Y=I,P=I+O;Y<P;Y+=3)C(e.getX(Y+0)),C(e.getX(Y+1)),C(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Mi(d,u,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qu=new L,Db=new L,Ib=new Fe;class ar{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qu.subVectors(i,n).cross(Db.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Qu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ib.getNormalMatrix(e),r=this.coplanarPoint(Qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ub=0;class co extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Wo,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=i_,this.blendDst=r_,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Iu,this.stencilZFail=Iu,this.stencilZPass=Iu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ar().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pi=new L,Ju=new L,tl=new L,nl=new L;class T_{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ju.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),nl.copy(this.origin).sub(Ju);const s=e.distanceTo(n)*.5,o=-this.direction.dot(tl),a=nl.dot(this.direction),l=-nl.dot(tl),c=nl.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ju).addScaledVector(tl,d),p}intersectSphere(e,n){if(e.radius<0)return null;Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,p=e.z-o.z,g=n.x-o.x,x=n.y-o.y,m=n.z-o.z,f=i.x-o.x,v=i.y-o.y,w=i.z-o.z,_=Math.abs(l),b=Math.abs(c),T=Math.abs(u);let C,y,A,N,I,O,Y,P,V,q,G,z;if(_>=b&&_>=T?(A=l,O=h,V=g,z=f,l>=0?(C=c,y=u,N=d,I=p,Y=x,P=m,q=v,G=w):(C=u,y=c,N=p,I=d,Y=m,P=x,q=w,G=v)):b>=T?(A=c,O=d,V=x,z=v,c>=0?(C=u,y=l,N=p,I=h,Y=m,P=g,q=w,G=f):(C=l,y=u,N=h,I=p,Y=g,P=m,q=f,G=w)):(A=u,O=p,V=m,z=w,u>=0?(C=l,y=c,N=h,I=d,Y=g,P=x,q=f,G=v):(C=c,y=l,N=d,I=h,Y=x,P=g,q=v,G=f)),A===0)return null;const B=C/A,W=y/A,K=1/A,se=N-B*O,me=I-W*O,Ie=Y-B*V,Be=P-W*V,Oe=q-B*z,Q=G-W*z,ie=Oe*Be-Q*Ie,we=se*Q-me*Oe,Ue=Ie*me-Be*se;if(r){if(ie<0||we<0||Ue<0)return null}else if((ie<0||we<0||Ue<0)&&(ie>0||we>0||Ue>0))return null;const ye=ie+we+Ue;if(ye===0)return null;const We=K*(ie*O+we*V+Ue*z);return(ye>0?We<0:We>0)?null:this.at(We/ye,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xs extends co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=s_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ag=new St,Lr=new T_,il=new Qc,Rg=new L,rl=new L,sl=new L,ol=new L,ed=new L,al=new L,Pg=new L,ll=new L;class Ut extends hn{constructor(e=new Cn,n=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ed.fromBufferAttribute(h,e),o?al.addScaledVector(ed,u):al.addScaledVector(ed.sub(n),u))}n.add(al)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(il.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(il,Rg)===null||Lr.origin.distanceToSquared(Rg)>(e.far-e.near)**2))&&(Ag.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Ag),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,b=w;_<b;_+=3){const T=a.getX(_),C=a.getX(_+1),y=a.getX(_+2);r=cl(this,f,e,i,c,u,h,T,C,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);r=cl(this,o,e,i,c,u,h,v,w,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,b=w;_<b;_+=3){const T=_,C=_+1,y=_+2;r=cl(this,f,e,i,c,u,h,T,C,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=m,w=m+1,_=m+2;r=cl(this,o,e,i,c,u,h,v,w,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Fb(t,e,n,i,r,s,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===qr,a),l===null)return null;ll.copy(a),ll.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ll);return c<n.near||c>n.far?null:{distance:c,point:ll.clone(),object:t}}function cl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,rl),t.getVertexPosition(l,sl),t.getVertexPosition(c,ol);const u=Fb(t,e,n,i,rl,sl,ol,Pg);if(u){const h=new L;Xn.getBarycoord(Pg,rl,sl,ol,h),r&&(u.uv=Xn.getInterpolatedAttribute(r,a,l,c,h,new Ne)),s&&(u.uv1=Xn.getInterpolatedAttribute(s,a,l,c,h,new Ne)),o&&(u.normal=Xn.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Xn.getNormal(rl,sl,ol,d.normal),u.face=d,u.barycoord=h}return u}class Ob extends sn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Xt,u=Xt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dr=new Qc,kb=new Ne(.5,.5),ul=new L;class _p{constructor(e=new ar,n=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],x=s[9],m=s[10],f=s[11],v=s[12],w=s[13],_=s[14],b=s[15];if(r[0].setComponents(c-o,p-u,f-g,b-v).normalize(),r[1].setComponents(c+o,p+u,f+g,b+v).normalize(),r[2].setComponents(c+a,p+h,f+x,b+w).normalize(),r[3].setComponents(c-a,p-h,f-x,b-w).normalize(),i)r[4].setComponents(l,d,m,_).normalize(),r[5].setComponents(c-l,p-d,f-m,b-_).normalize();else if(r[4].setComponents(c-l,p-d,f-m,b-_).normalize(),n===vi)r[5].setComponents(c+l,p+d,f+m,b+_).normalize();else if(n===pa)r[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const n=kb.distanceTo(e.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ul.x=r.normal.x>0?e.max.x:e.min.x,ul.y=r.normal.y>0?e.max.y:e.min.y,ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hl extends co{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bc=new L,Tc=new L,Ng=new St,To=new T_,dl=new Qc,td=new L,Lg=new L;class C_ extends hn{constructor(e=new Cn,n=new Hl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)bc.fromBufferAttribute(n,r-1),Tc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=bc.distanceTo(Tc);e.setAttribute("lineDistance",new bn(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(r),dl.radius+=s,e.ray.intersectsSphere(dl)===!1)return;Ng.copy(r).invert(),To.copy(e.ray).applyMatrix4(Ng);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=u.getX(x),v=u.getX(x+1),w=fl(this,e,To,l,f,v,x);w&&n.push(w)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),f=fl(this,e,To,l,x,m,g-1);f&&n.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=fl(this,e,To,l,x,x+1,x);f&&n.push(f)}if(this.isLineLoop){const x=fl(this,e,To,l,g-1,p,g-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(bc.fromBufferAttribute(a,r),Tc.fromBufferAttribute(a,s),n.distanceSqToSegment(bc,Tc,td,Lg)>i)return;td.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(td);if(!(c<e.near||c>e.far))return{distance:c,point:Lg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Dg=new L,Ig=new L;class Ug extends C_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Dg.fromBufferAttribute(n,r),Ig.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Dg.distanceTo(Ig);e.setAttribute("lineDistance",new bn(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class A_ extends sn{constructor(e=[],n=Kr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eo extends sn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ga extends sn{constructor(e,n,i=wi,r,s,o,a=Xt,l=Xt,c,u=Xi,h=1){if(u!==Xi&&u!==zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Bb extends ga{constructor(e,n=wi,i=Kr,r,s,o=Xt,a=Xt,l,c=Xi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class R_ extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ki extends Cn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(h,2));function g(x,m,f,v,w,_,b,T,C,y,A){const N=_/C,I=b/y,O=_/2,Y=b/2,P=T/2,V=C+1,q=y+1;let G=0,z=0;const B=new L;for(let W=0;W<q;W++){const K=W*I-Y;for(let se=0;se<V;se++){const me=se*N-O;B[x]=me*v,B[m]=K*w,B[f]=P,c.push(B.x,B.y,B.z),B[x]=0,B[m]=0,B[f]=T>0?1:-1,u.push(B.x,B.y,B.z),h.push(se/C),h.push(1-W/y),G+=1}}for(let W=0;W<y;W++)for(let K=0;K<C;K++){const se=d+K+V*W,me=d+K+V*(W+1),Ie=d+(K+1)+V*(W+1),Be=d+(K+1)+V*W;l.push(se,me,Be),l.push(me,Ie,Be),z+=6}a.addGroup(p,z,A),p+=z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const hl=new L,pl=new L,nd=new L,ml=new Xn;class zb extends Cn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Gs*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:m,c:f}=ml;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),ml.getNormal(nd),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const w=(v+1)%3,_=h[v],b=h[w],T=ml[u[v]],C=ml[u[w]],y=`${_}_${b}`,A=`${b}_${_}`;A in d&&d[A]?(nd.dot(d[A].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(C.x,C.y,C.z)),d[A]=null):y in d||(d[y]={index0:c[v],index1:c[w],normal:nd.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:m}=d[g];hl.fromBufferAttribute(a,x),pl.fromBufferAttribute(a,m),p.push(hl.x,hl.y,hl.z),p.push(pl.x,pl.y,pl.z)}this.setAttribute("position",new bn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Vb{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ne:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new L,r=[],s=[],o=[],a=new L,l=new St;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Xe(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function yp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Fg=new L,Og=new L,id=new yp,rd=new yp,sd=new yp;class Hb extends Vb{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new L){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Og.subVectors(r[0],r[1]).add(r[0]),c=Og);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Fg.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Fg),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),id.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),rd.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),sd.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(id.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),rd.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),sd.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(id.calc(l),rd.calc(l),sd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class pr extends Cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const v=f*d-o;for(let w=0;w<c;w++){const _=w*h-s;g.push(_,-v,0),x.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const w=v+c*f,_=v+c*(f+1),b=v+1+c*(f+1),T=v+1+c*f;p.push(w,_,T),p.push(_,b,T)}this.setIndex(p),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(x,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.widthSegments,e.heightSegments)}}function to(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(kg(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(kg(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=to(t[n]);for(const r in i)e[r]=i[r]}return e}function kg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Gb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function P_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Cc={clone:to,merge:cn};var Wb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wb,this.fragmentShader=Xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=Gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new L().fromArray(r.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new St().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class jb extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gl extends co{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yb extends co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $b extends co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class N_ extends hn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const od=new St,Bg=new L,zg=new L;class qb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Bg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bg),zg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(zg),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){od.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(od,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===pa||e.reversedDepth?n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),n.multiply(od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vl=new L,xl=new lo,di=new L;class L_ extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vl,xl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,xl,di.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(vl,xl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,xl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ir=new L,Vg=new Ne,Hg=new Ne;class Ln extends L_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,n){return this.getViewBounds(e,Vg,Hg),n.subVectors(Hg,Vg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Kb extends qb{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0}}class _l extends N_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Kb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Sp extends L_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Zb extends N_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ms=-90,gs=1;class Qb extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new Ln(ms,gs,e,n);s.layers=this.layers,this.add(s);const o=new Ln(ms,gs,e,n);o.layers=this.layers,this.add(o);const a=new Ln(ms,gs,e,n);a.layers=this.layers,this.add(a);const l=new Ln(ms,gs,e,n);l.layers=this.layers,this.add(l);const c=new Ln(ms,gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Jb extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class eT{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=tT.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function tT(){this._document.hidden===!1&&this.reset()}class nT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Np=class Np{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Np.prototype.isMatrix2=!0;let Gg=Np;function Wg(t,e,n,i){const r=iT(i);switch(n){case v_:return t*e;case __:return t*e/r.components*r.byteLength;case dp:return t*e/r.components*r.byteLength;case Zr:return t*e*2/r.components*r.byteLength;case fp:return t*e*2/r.components*r.byteLength;case x_:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case hp:return t*e*4/r.components*r.byteLength;case kl:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tf:case Af:return Math.max(t,16)*Math.max(e,8)/4;case bf:case Cf:return Math.max(t,8)*Math.max(e,8)/2;case Rf:case Pf:case Lf:case Df:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nf:case yc:case If:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $f:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qf:case Kf:case Zf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Qf:case Jf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Sc:case eh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iT(t){switch(t){case Dn:case h_:return{byteLength:1,components:1};case fa:case p_:case En:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case wi:case lp:case gi:return{byteLength:4,components:1};case m_:case g_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function D_(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rT(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var sT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_T=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ET=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,CT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,AT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,NT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UT="gl_FragColor = linearToOutputTexel( gl_FragColor );",FT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ZT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,QT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aC=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_C=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,EC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,AC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,UC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,HC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$C=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_A=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:sT,alphahash_pars_fragment:oT,alphamap_fragment:aT,alphamap_pars_fragment:lT,alphatest_fragment:cT,alphatest_pars_fragment:uT,aomap_fragment:dT,aomap_pars_fragment:fT,batching_pars_vertex:hT,batching_vertex:pT,begin_vertex:mT,beginnormal_vertex:gT,bsdfs:vT,iridescence_fragment:xT,bumpmap_pars_fragment:_T,clipping_planes_fragment:yT,clipping_planes_pars_fragment:ST,clipping_planes_pars_vertex:MT,clipping_planes_vertex:wT,color_fragment:ET,color_pars_fragment:bT,color_pars_vertex:TT,color_vertex:CT,common:AT,cube_uv_reflection_fragment:RT,defaultnormal_vertex:PT,displacementmap_pars_vertex:NT,displacementmap_vertex:LT,emissivemap_fragment:DT,emissivemap_pars_fragment:IT,colorspace_fragment:UT,colorspace_pars_fragment:FT,envmap_fragment:OT,envmap_common_pars_fragment:kT,envmap_pars_fragment:BT,envmap_pars_vertex:zT,envmap_physical_pars_fragment:ZT,envmap_vertex:VT,fog_vertex:HT,fog_pars_vertex:GT,fog_fragment:WT,fog_pars_fragment:XT,gradientmap_pars_fragment:jT,lightmap_pars_fragment:YT,lights_lambert_fragment:$T,lights_lambert_pars_fragment:qT,lights_pars_begin:KT,lights_toon_fragment:QT,lights_toon_pars_fragment:JT,lights_phong_fragment:eC,lights_phong_pars_fragment:tC,lights_physical_fragment:nC,lights_physical_pars_fragment:iC,lights_fragment_begin:rC,lights_fragment_maps:sC,lights_fragment_end:oC,lightprobes_pars_fragment:aC,logdepthbuf_fragment:lC,logdepthbuf_pars_fragment:cC,logdepthbuf_pars_vertex:uC,logdepthbuf_vertex:dC,map_fragment:fC,map_pars_fragment:hC,map_particle_fragment:pC,map_particle_pars_fragment:mC,metalnessmap_fragment:gC,metalnessmap_pars_fragment:vC,morphinstance_vertex:xC,morphcolor_vertex:_C,morphnormal_vertex:yC,morphtarget_pars_vertex:SC,morphtarget_vertex:MC,normal_fragment_begin:wC,normal_fragment_maps:EC,normal_pars_fragment:bC,normal_pars_vertex:TC,normal_vertex:CC,normalmap_pars_fragment:AC,clearcoat_normal_fragment_begin:RC,clearcoat_normal_fragment_maps:PC,clearcoat_pars_fragment:NC,iridescence_pars_fragment:LC,opaque_fragment:DC,packing:IC,premultiplied_alpha_fragment:UC,project_vertex:FC,dithering_fragment:OC,dithering_pars_fragment:kC,roughnessmap_fragment:BC,roughnessmap_pars_fragment:zC,shadowmap_pars_fragment:VC,shadowmap_pars_vertex:HC,shadowmap_vertex:GC,shadowmask_pars_fragment:WC,skinbase_vertex:XC,skinning_pars_vertex:jC,skinning_vertex:YC,skinnormal_vertex:$C,specularmap_fragment:qC,specularmap_pars_fragment:KC,tonemapping_fragment:ZC,tonemapping_pars_fragment:QC,transmission_fragment:JC,transmission_pars_fragment:eA,uv_pars_fragment:tA,uv_pars_vertex:nA,uv_vertex:iA,worldpos_vertex:rA,background_vert:sA,background_frag:oA,backgroundCube_vert:aA,backgroundCube_frag:lA,cube_vert:cA,cube_frag:uA,depth_vert:dA,depth_frag:fA,distance_vert:hA,distance_frag:pA,equirect_vert:mA,equirect_frag:gA,linedashed_vert:vA,linedashed_frag:xA,meshbasic_vert:_A,meshbasic_frag:yA,meshlambert_vert:SA,meshlambert_frag:MA,meshmatcap_vert:wA,meshmatcap_frag:EA,meshnormal_vert:bA,meshnormal_frag:TA,meshphong_vert:CA,meshphong_frag:AA,meshphysical_vert:RA,meshphysical_frag:PA,meshtoon_vert:NA,meshtoon_frag:LA,points_vert:DA,points_frag:IA,shadow_vert:UA,shadow_frag:FA,sprite_vert:OA,sprite_frag:kA},pe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},pi={basic:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:cn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:cn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:cn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:cn([pe.points,pe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:cn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:cn([pe.common,pe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:cn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:cn([pe.sprite,pe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:cn([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:cn([pe.lights,pe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};pi.physical={uniforms:cn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const yl={r:0,b:0,g:0},BA=new St,I_=new Fe;I_.set(-1,0,0,0,1,0,0,0,1);function zA(t,e,n,i,r,s){const o=new Ge(0);let a=r===!0?0:1,l,c,u=null,h=0,d=null;function p(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const _=v.backgroundBlurriness>0;w=e.get(w,_)}return w}function g(v){let w=!1;const _=p(v);_===null?m(o,a):_&&_.isColor&&(m(_,1),w=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(v,w){const _=p(w);_&&(_.isCubeTexture||_.mapping===Zc)?(c===void 0&&(c=new Ut(new ki(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:to(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(BA.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(I_),c.material.toneMapped=Ze.getTransfer(_.colorSpace)!==st,(u!==_||h!==_.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,d=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ut(new pr(2,2),new rn({name:"BackgroundMaterial",uniforms:to(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(_.colorSpace)!==st,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,d=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(yl,P_(t)),n.buffers.color.setClear(yl.r,yl.g,yl.b,w,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:f}}function VA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(I,O,Y,P,V){let q=!1;const G=h(I,P,Y,O);s!==G&&(s=G,c(s.object)),q=p(I,P,Y,V),q&&g(I,P,Y,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(I,O,Y,P),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function u(I){return t.deleteVertexArray(I)}function h(I,O,Y,P){const V=P.wireframe===!0;let q=i[O.id];q===void 0&&(q={},i[O.id]=q);const G=I.isInstancedMesh===!0?I.id:0;let z=q[G];z===void 0&&(z={},q[G]=z);let B=z[Y.id];B===void 0&&(B={},z[Y.id]=B);let W=B[V];return W===void 0&&(W=d(l()),B[V]=W),W}function d(I){const O=[],Y=[],P=[];for(let V=0;V<n;V++)O[V]=0,Y[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:P,object:I,attributes:{},index:null}}function p(I,O,Y,P){const V=s.attributes,q=O.attributes;let G=0;const z=Y.getAttributes();for(const B in z)if(z[B].location>=0){const K=V[B];let se=q[B];if(se===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;G++}return s.attributesNum!==G||s.index!==P}function g(I,O,Y,P){const V={},q=O.attributes;let G=0;const z=Y.getAttributes();for(const B in z)if(z[B].location>=0){let K=q[B];K===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),V[B]=se,G++}s.attributes=V,s.attributesNum=G,s.index=P}function x(){const I=s.newAttributes;for(let O=0,Y=I.length;O<Y;O++)I[O]=0}function m(I){f(I,0)}function f(I,O){const Y=s.newAttributes,P=s.enabledAttributes,V=s.attributeDivisors;Y[I]=1,P[I]===0&&(t.enableVertexAttribArray(I),P[I]=1),V[I]!==O&&(t.vertexAttribDivisor(I,O),V[I]=O)}function v(){const I=s.newAttributes,O=s.enabledAttributes;for(let Y=0,P=O.length;Y<P;Y++)O[Y]!==I[Y]&&(t.disableVertexAttribArray(Y),O[Y]=0)}function w(I,O,Y,P,V,q,G){G===!0?t.vertexAttribIPointer(I,O,Y,V,q):t.vertexAttribPointer(I,O,Y,P,V,q)}function _(I,O,Y,P){x();const V=P.attributes,q=Y.getAttributes(),G=O.defaultAttributeValues;for(const z in q){const B=q[z];if(B.location>=0){let W=V[z];if(W===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){const K=W.normalized,se=W.itemSize,me=e.get(W);if(me===void 0)continue;const Ie=me.buffer,Be=me.type,Oe=me.bytesPerElement,Q=Be===t.INT||Be===t.UNSIGNED_INT||W.gpuType===lp;if(W.isInterleavedBufferAttribute){const ie=W.data,we=ie.stride,Ue=W.offset;if(ie.isInstancedInterleavedBuffer){for(let ye=0;ye<B.locationSize;ye++)f(B.location+ye,ie.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ye=0;ye<B.locationSize;ye++)m(B.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let ye=0;ye<B.locationSize;ye++)w(B.location+ye,se/B.locationSize,Be,K,we*Oe,(Ue+se/B.locationSize*ye)*Oe,Q)}else{if(W.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)f(B.location+ie,W.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ie=0;ie<B.locationSize;ie++)m(B.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let ie=0;ie<B.locationSize;ie++)w(B.location+ie,se/B.locationSize,Be,K,se*Oe,se/B.locationSize*ie*Oe,Q)}}else if(G!==void 0){const K=G[z];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(B.location,K);break;case 3:t.vertexAttrib3fv(B.location,K);break;case 4:t.vertexAttrib4fv(B.location,K);break;default:t.vertexAttrib1fv(B.location,K)}}}}v()}function b(){A();for(const I in i){const O=i[I];for(const Y in O){const P=O[Y];for(const V in P){const q=P[V];for(const G in q)u(q[G].object),delete q[G];delete P[V]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;const O=i[I.id];for(const Y in O){const P=O[Y];for(const V in P){const q=P[V];for(const G in q)u(q[G].object),delete q[G];delete P[V]}}delete i[I.id]}function C(I){for(const O in i){const Y=i[O];for(const P in Y){const V=Y[P];if(V[I.id]===void 0)continue;const q=V[I.id];for(const G in q)u(q[G].object),delete q[G];delete V[I.id]}}}function y(I){for(const O in i){const Y=i[O],P=I.isInstancedMesh===!0?I.id:0,V=Y[P];if(V!==void 0){for(const q in V){const G=V[q];for(const z in G)u(G[z].object),delete G[z];delete V[q]}delete Y[P],Object.keys(Y).length===0&&delete i[O]}}}function A(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function HA(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function GA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ri&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const y=C===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Dn&&C!==gi&&!y&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(De("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:_,maxSamples:b,samples:T}}function WA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ar,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,w=v*4;let _=f.clippingState||null;l.value=_,_=u(g,d,w,p);for(let b=0;b!==w;++b)_[b]=n[b];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,_=p;w!==x;++w,_+=4)o.copy(h[w]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Ds=4,XA=6,jA=20,YA=256,Co=new Sp,Xg=new Ge;let ad=null,ld=0,cd=0,ud=!1;const $A=new L,Ir=new L;class jg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=$A}=s;ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Kr||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:En,format:ri,colorSpace:Mc,depthBuffer:!1},r=Yg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qA(s)),this._blurMaterial=ZA(s,e,n),this._ggxMaterial=KA(s,e,n)}return r}_compileMaterial(e){const n=new Ut(new Cn,e);this._renderer.compile(n,Co)}_sceneToCubeUV(e,n,i,r,s){const l=new Ln(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Xg),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new ki,new Xs({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let f=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,f=!0):(m.color.copy(Xg),f=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const b=this._cubeSize;vs(r,_*b,w>2?b:0,b,b),h.setRenderTarget(r),f&&h.render(x,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Kr||e.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;vs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Co)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,p=h*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Ds?i-g+Ds:0),f=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,vs(s,m,f,3*x,2*x),r.setRenderTarget(s),r.render(a,Co),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,vs(e,m,f,3*x,2*x),r.setRenderTarget(e),r.render(a,Co)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],h=3*u*(r>this._lodMax-Ds?r-this._lodMax+Ds:0),d=4*(this._cubeSize-u);vs(n,h,d,3*u,2*u),o.setRenderTarget(n),o.render(l,Co)}}function qA(t){const e=[],n=[];let i=t;const r=t-Ds+1+XA;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,p=3,g=new Float32Array(p*d*h),x=new Float32Array(p*d*h);for(let f=0;f<h;f++){const v=f%3*2/3-1,w=f>2?0:-1,_=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];g.set(_,p*d*f);for(let b=0;b<d;b++){const T=u[b*2]*2-1,C=u[b*2+1]*2-1;f===0?Ir.set(1,C,T):f===1?Ir.set(-T,1,-C):f===2?Ir.set(-T,C,1):f===3?Ir.set(-1,C,-T):f===4?Ir.set(-T,-1,C):Ir.set(T,C,-1),Ir.toArray(x,(f*d+b)*p)}}const m=new Cn;m.setAttribute("position",new Mi(g,p)),m.setAttribute("outputDirection",new Mi(x,p)),n.push(new Ut(m,null)),i>Ds&&i--}return{lodMeshes:n,sizeLods:e}}function Yg(t,e,n){const i=new fn(t,e,n);return i.texture.mapping=Zc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function KA(t,e,n){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ZA(t,e,n){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:jA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function $g(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function qg(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class U_ extends fn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new A_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ki(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:yi});s.uniforms.tEquirect.value=n;const o=new Ut(r,s),a=n.minFilter;return n.minFilter===Oi&&(n.minFilter=nn),new Qb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function QA(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Nu||p===Lu)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new U_(g.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,g=p===Nu||p===Lu,x=p===Kr||p===Js;if(g||x){let m=n.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new jg(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return g&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new jg(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,p){return p===Nu?d.mapping=Kr:p===Lu&&(d.mapping=Js),d}function l(d){let p=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function JA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Hs("WebGLRenderer: "+i+" extension not supported."),r}}}function eR(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let x=0;if(g===void 0)return;if(p!==null){const v=p.array;x=p.version;for(let w=0,_=v.length;w<_;w+=3){const b=v[w+0],T=v[w+1],C=v[w+2];d.push(b,T,T,C,C,b)}}else{const v=g.array;x=g.version;for(let w=0,_=v.length/3-1;w<_;w+=3){const b=w+0,T=w+1,C=w+2;d.push(b,T,T,C,C,b)}}const m=new(g.count>=65535?b_:E_)(d,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function tR(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function c(h,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,h*o,p),n.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let x=0;for(let m=0;m<p;m++)x+=d[m];n.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function nR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function iR(t,e,n){const i=new WeakMap,r=new vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let N=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",N)};var p=N;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let b=a.attributes.position.count*_,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*T*4*h),y=new S_(C,b,T,h);y.type=gi,y.needsUpdate=!0;const A=_*4;for(let I=0;I<h;I++){const O=f[I],Y=v[I],P=w[I],V=b*T*4*I;for(let q=0;q<O.count;q++){const G=q*A;g===!0&&(r.fromBufferAttribute(O,q),C[V+G+0]=r.x,C[V+G+1]=r.y,C[V+G+2]=r.z,C[V+G+3]=0),x===!0&&(r.fromBufferAttribute(Y,q),C[V+G+4]=r.x,C[V+G+5]=r.y,C[V+G+6]=r.z,C[V+G+7]=0),m===!0&&(r.fromBufferAttribute(P,q),C[V+G+8]=r.x,C[V+G+9]=r.y,C[V+G+10]=r.z,C[V+G+11]=P.itemSize===4?r.w:1)}}d={count:h,texture:y,size:new Ne(b,T)},i.set(a,d),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function rR(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const sR={[o_]:"LINEAR_TONE_MAPPING",[a_]:"REINHARD_TONE_MAPPING",[l_]:"CINEON_TONE_MAPPING",[ap]:"ACES_FILMIC_TONE_MAPPING",[u_]:"AGX_TONE_MAPPING",[d_]:"NEUTRAL_TONE_MAPPING",[c_]:"CUSTOM_TONE_MAPPING"};function oR(t,e,n,i,r,s){const o=new fn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Cn;c.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new bn([0,2,0,0,2,0],2));const u=new jb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ut(c,u),d=new Sp(-1,1,1,-1,0,1);let p=null,g=null,x=!1,m,f=null,v=[],w=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let T=0;T<v.length;T++){const C=v[T];C.setSize&&C.setSize(_,b)}},this.setEffects=function(_){v=_,w=v.length>0&&v[0].isRenderPass===!0;const b=o.width,T=o.height;v.length>0&&a===null&&(a=new fn(b,T,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new fn(b,T,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){const y=v[C];y.setSize&&y.setSize(b,T)}},this.begin=function(_,b){if(x||_.toneMapping===Si&&v.length===0)return!1;if(f=b,b!==null){const T=b.width,C=b.height;(o.width!==T||o.height!==C)&&this.setSize(T,C)}return w===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=Si,!0},this.hasRenderPass=function(){return w},this.end=function(_,b){_.toneMapping=m,x=!0;let T=o,C=a;for(let y=0;y<v.length;y++){const A=v[y];A.enabled!==!1&&(A.render(_,C,T,b),A.needsSwap!==!1&&(T=C,C=C===a?l:a))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,u.defines={},Ze.getTransfer(p)===st&&(u.defines.SRGB_TRANSFER="");const y=sR[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(f),_.render(h,d),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const F_=new sn,nh=new ga(1,1),O_=new S_,k_=new Sb,B_=new A_,Kg=[],Zg=[],Qg=new Float32Array(16),Jg=new Float32Array(9),e0=new Float32Array(4);function uo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Kg[r];if(s===void 0&&(s=new Float32Array(r),Kg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function eu(t,e){let n=Zg[e];n===void 0&&(n=new Int32Array(e),Zg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function cR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function uR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function dR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;e0.set(i),t.uniformMatrix2fv(this.addr,!1,e0),kt(n,i)}}function fR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Jg.set(i),t.uniformMatrix3fv(this.addr,!1,Jg),kt(n,i)}}function hR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Qg.set(i),t.uniformMatrix4fv(this.addr,!1,Qg),kt(n,i)}}function pR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function gR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function vR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function xR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _R(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function yR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function SR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function MR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(nh.compareFunction=n.isReversedDepthBuffer()?mp:pp,s=nh):s=F_,n.setTexture2D(e||s,r)}function wR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||k_,r)}function ER(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||B_,r)}function bR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||O_,r)}function TR(t){switch(t){case 5126:return aR;case 35664:return lR;case 35665:return cR;case 35666:return uR;case 35674:return dR;case 35675:return fR;case 35676:return hR;case 5124:case 35670:return pR;case 35667:case 35671:return mR;case 35668:case 35672:return gR;case 35669:case 35673:return vR;case 5125:return xR;case 36294:return _R;case 36295:return yR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return wR;case 35680:case 36300:case 36308:case 36293:return ER;case 36289:case 36303:case 36311:case 36292:return bR}}function CR(t,e){t.uniform1fv(this.addr,e)}function AR(t,e){const n=uo(e,this.size,2);t.uniform2fv(this.addr,n)}function RR(t,e){const n=uo(e,this.size,3);t.uniform3fv(this.addr,n)}function PR(t,e){const n=uo(e,this.size,4);t.uniform4fv(this.addr,n)}function NR(t,e){const n=uo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LR(t,e){const n=uo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function DR(t,e){const n=uo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function IR(t,e){t.uniform1iv(this.addr,e)}function UR(t,e){t.uniform2iv(this.addr,e)}function FR(t,e){t.uniform3iv(this.addr,e)}function OR(t,e){t.uniform4iv(this.addr,e)}function kR(t,e){t.uniform1uiv(this.addr,e)}function BR(t,e){t.uniform2uiv(this.addr,e)}function zR(t,e){t.uniform3uiv(this.addr,e)}function VR(t,e){t.uniform4uiv(this.addr,e)}function HR(t,e,n){const i=this.cache,r=e.length,s=eu(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=nh:o=F_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function GR(t,e,n){const i=this.cache,r=e.length,s=eu(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||k_,s[o])}function WR(t,e,n){const i=this.cache,r=e.length,s=eu(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||B_,s[o])}function XR(t,e,n){const i=this.cache,r=e.length,s=eu(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||O_,s[o])}function jR(t){switch(t){case 5126:return CR;case 35664:return AR;case 35665:return RR;case 35666:return PR;case 35674:return NR;case 35675:return LR;case 35676:return DR;case 5124:case 35670:return IR;case 35667:case 35671:return UR;case 35668:case 35672:return FR;case 35669:case 35673:return OR;case 5125:return kR;case 36294:return BR;case 36295:return zR;case 36296:return VR;case 35678:case 36198:case 36298:case 36306:case 35682:return HR;case 35679:case 36299:case 36307:return GR;case 35680:case 36300:case 36308:case 36293:return WR;case 36289:case 36303:case 36311:case 36292:return XR}}class YR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TR(n.type)}}class $R{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jR(n.type)}}class qR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function t0(t,e){t.seq.push(e),t.map[e.id]=e}function KR(t,e,n){const i=t.name,r=i.length;for(dd.lastIndex=0;;){const s=dd.exec(i),o=dd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){t0(n,c===void 0?new YR(a,t,e):new $R(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new qR(a),t0(n,h)),n=h}}}class Gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);KR(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function n0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZR=37297;let QR=0;function JR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const i0=new Fe;function e2(t){Ze._getMatrix(i0,Ze.workingColorSpace,t);const e=`mat3( ${i0.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case wc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function r0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+JR(t.getShaderSource(e),a)}else return s}function t2(t,e){const n=e2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const n2={[o_]:"Linear",[a_]:"Reinhard",[l_]:"Cineon",[ap]:"ACESFilmic",[u_]:"AgX",[d_]:"Neutral",[c_]:"Custom"};function i2(t,e){const n=n2[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sl=new L;function r2(){Ze.getLuminanceCoefficients(Sl);const t=Sl.x.toFixed(4),e=Sl.y.toFixed(4),n=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function o2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function a2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Io(t){return t!==""}function s0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l2=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(t){return t.replace(l2,u2)}const c2=new Map;function u2(t,e){let n=He[e];if(n===void 0){const i=c2.get(e);if(i!==void 0)n=He[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ih(n)}const d2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a0(t){return t.replace(d2,f2)}function f2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function l0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const h2={[Ol]:"SHADOWMAP_TYPE_PCF",[Do]:"SHADOWMAP_TYPE_VSM"};function p2(t){return h2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const m2={[Kr]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[Zc]:"ENVMAP_TYPE_CUBE_UV"};function g2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":m2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const v2={[Js]:"ENVMAP_MODE_REFRACTION"};function x2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":v2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _2={[s_]:"ENVMAP_BLENDING_MULTIPLY",[F1]:"ENVMAP_BLENDING_MIX",[O1]:"ENVMAP_BLENDING_ADD"};function y2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":_2[t.combine]||"ENVMAP_BLENDING_NONE"}function S2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function M2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=p2(n),c=g2(n),u=x2(n),h=y2(n),d=S2(n),p=s2(n),g=o2(s),x=r.createProgram();let m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Io).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Io).join(`
`),f.length>0&&(f+=`
`)):(m=[l0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),f=[l0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?He.tonemapping_pars_fragment:"",n.toneMapping!==Si?i2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,t2("linearToOutputTexel",n.outputColorSpace),r2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Io).join(`
`)),o=ih(o),o=s0(o,n),o=o0(o,n),a=ih(a),a=s0(a,n),a=o0(a,n),o=a0(o),a=a0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=v+m+o,_=v+f+a,b=n0(r,r.VERTEX_SHADER,w),T=n0(r,r.FRAGMENT_SHADER,_);r.attachShader(x,b),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(I){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",Y=r.getShaderInfoLog(b)||"",P=r.getShaderInfoLog(T)||"",V=O.trim(),q=Y.trim(),G=P.trim();let z=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,T);else{const W=r0(r,b,"vertex"),K=r0(r,T,"fragment");tt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+W+`
`+K)}else V!==""?De("WebGLProgram: Program Info Log:",V):(q===""||G==="")&&(B=!1);B&&(I.diagnostics={runnable:z,programLog:V,vertexShader:{log:q,prefix:m},fragmentShader:{log:G,prefix:f}})}r.deleteShader(b),r.deleteShader(T),y=new Gl(r,x),A=a2(r,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(x,ZR)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}let w2=0;class E2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new b2(e),n.set(e,i)),i}}class b2{constructor(e){this.id=w2++,this.code=e,this.usedTimes=0}}function T2(t){return t===Zr||t===yc||t===Sc}function C2(t,e,n,i,r,s){const o=new M_,a=new E2,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,A,N,I,O,Y){const P=I.fog,V=O.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,z=e.get(y.envMap||q,G),B=z&&z.mapping===Zc?z.image.height:null,W=p[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&De("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=K!==void 0?K.length:0;let me=0;V.morphAttributes.position!==void 0&&(me=1),V.morphAttributes.normal!==void 0&&(me=2),V.morphAttributes.color!==void 0&&(me=3);let Ie,Be,Oe,Q;if(W){const dt=pi[W];Ie=dt.vertexShader,Be=dt.fragmentShader}else{Ie=y.vertexShader,Be=y.fragmentShader;const dt=a.getVertexShaderStage(y),nt=a.getFragmentShaderStage(y);a.update(y,dt,nt),Oe=dt.id,Q=nt.id}const ie=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),Ue=O.isInstancedMesh===!0,ye=O.isBatchedMesh===!0,We=!!y.map,Dt=!!y.matcap,je=!!z,et=!!y.aoMap,ut=!!y.lightMap,Ke=!!y.bumpMap&&y.wireframe===!1,_t=!!y.normalMap,Bt=!!y.displacementMap,vn=!!y.emissiveMap,Mt=!!y.metalnessMap,Rt=!!y.roughnessMap,k=y.anisotropy>0,$t=y.clearcoat>0,rt=y.dispersion>0,R=y.retroreflectivity>0,S=y.iridescence>0,H=y.sheen>0,$=y.transmission>0,J=k&&!!y.anisotropyMap,ae=$t&&!!y.clearcoatMap,le=$t&&!!y.clearcoatNormalMap,ee=$t&&!!y.clearcoatRoughnessMap,ne=S&&!!y.iridescenceMap,ce=S&&!!y.iridescenceThicknessMap,Ae=H&&!!y.sheenColorMap,he=H&&!!y.sheenRoughnessMap,ue=!!y.specularMap,Re=!!y.specularColorMap,Le=!!y.specularIntensityMap,ke=$&&!!y.transmissionMap,F=$&&!!y.thicknessMap,de=!!y.gradientMap,te=!!y.alphaMap,fe=y.alphaTest>0,xe=!!y.alphaHash,re=!!y.extensions;let Pe=Si;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Pe=t.toneMapping);const Te={shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:Ie,fragmentShader:Be,defines:y.defines,customVertexShaderID:Oe,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ye,batchingColor:ye&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:Dt,envMap:je,envMapMode:je&&z.mapping,envMapCubeUVHeight:B,aoMap:et,lightMap:ut,bumpMap:Ke,normalMap:_t,displacementMap:Bt,emissiveMap:vn,normalMapObjectSpace:_t&&y.normalMapType===z1,normalMapTangentSpace:_t&&y.normalMapType===th,packedNormalMap:_t&&y.normalMapType===th&&T2(y.normalMap.format),metalnessMap:Mt,roughnessMap:Rt,anisotropy:k,anisotropyMap:J,clearcoat:$t,clearcoatMap:ae,clearcoatNormalMap:le,clearcoatRoughnessMap:ee,dispersion:rt,retroreflection:R,iridescence:S,iridescenceMap:ne,iridescenceThicknessMap:ce,sheen:H,sheenColorMap:Ae,sheenRoughnessMap:he,specularMap:ue,specularColorMap:Re,specularIntensityMap:Le,transmission:$,transmissionMap:ke,thicknessMap:F,gradientMap:de,opaque:y.transparent===!1&&y.blending===Wo&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:fe,alphaHash:xe,combine:y.combine,mapUv:We&&g(y.map.channel),aoMapUv:et&&g(y.aoMap.channel),lightMapUv:ut&&g(y.lightMap.channel),bumpMapUv:Ke&&g(y.bumpMap.channel),normalMapUv:_t&&g(y.normalMap.channel),displacementMapUv:Bt&&g(y.displacementMap.channel),emissiveMapUv:vn&&g(y.emissiveMap.channel),metalnessMapUv:Mt&&g(y.metalnessMap.channel),roughnessMapUv:Rt&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:ae&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(y.sheenRoughnessMap.channel),specularMapUv:ue&&g(y.specularMap.channel),specularColorMapUv:Re&&g(y.specularColorMap.channel),specularIntensityMapUv:Le&&g(y.specularIntensityMap.channel),transmissionMapUv:ke&&g(y.transmissionMap.channel),thicknessMapUv:F&&g(y.thicknessMap.channel),alphaMapUv:te&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_t||k),vertexNormals:!!V.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(We||te),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&_t===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:we,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:me,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Pe,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:vn&&y.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Di,flipSided:y.side===wn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)A.push(N),A.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(f(A,y),v(A,y),A.push(t.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function f(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function w(y){const A=p[y.type];let N;if(A){const I=pi[A];N=Cc.clone(I.uniforms)}else N=y.uniforms;return N}function _(y,A){let N=u.get(A);return N!==void 0?++N.usedTimes:(N=new M2(t,A,y,r),c.push(N),u.set(A,N)),N}function b(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:C}}function A2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function R2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function c0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function u0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,g,x,m,f){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:f},t[e]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=g,v.materialVariant=o(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=f),e++,v}function l(d,p,g,x,m,f,v){v.reversedDepth===!0&&(m=-m);const w=a(d,p,g,x,m,f);g.transmission>0?i.push(w):g.transparent===!0?r.push(w):n.push(w)}function c(d,p,g,x,m,f){const v=a(d,p,g,x,m,f);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):n.unshift(v)}function u(d,p){n.length>1&&n.sort(d||R2),i.length>1&&i.sort(p||c0),r.length>1&&r.sort(p||c0)}function h(){for(let d=e,p=t.length;d<p;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function P2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new u0,t.set(i,[o])):r>=s.length?(o=new u0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function N2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new L,color:new Ge};break;case"SpotLight":n={position:new L,direction:new L,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function L2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let D2=0;function I2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function U2(t){const e=new N2,n=L2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new St,o=new St;function a(c){let u=0,h=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,v=0,w=0,_=0,b=0,T=0,C=0,y=0,A=0,N=0;c.sort(I2);for(let O=0,Y=c.length;O<Y;O++){const P=c[O],V=P.color,q=P.intensity,G=P.distance;let z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Zr?z=P.shadow.map.texture:z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=V.r*q,h+=V.g*q,d+=V.b*q;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],q);N++}else if(P.isSunLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,K=n.get(P);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[g]=K,i.sunShadowMap[g]=z;const se=W.getViewportCount();for(let me=0;me<se;me++)i.sunShadowMatrix[x+me]=W.getMatrix(me),i.sunShadowCascade[x+me]=W._cascadeData[me];x+=se,g++}i.sun[p]=B,p++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,K=n.get(P);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=P.shadow.matrix,b++}i.directional[m]=B,m++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(V).multiplyScalar(q),B.distance=G,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[v]=B;const W=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,W.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[v]=W.matrix,P.castShadow){const K=n.get(P);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.spotShadow[v]=K,i.spotShadowMap[v]=z,C++}v++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(V).multiplyScalar(q),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[w]=B,w++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const W=P.shadow,K=n.get(P);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,i.pointShadow[f]=K,i.pointShadowMap[f]=z,i.pointShadowMatrix[f]=P.shadow.matrix,T++}i.point[f]=B,f++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(q),B.groundColor.copy(P.groundColor).multiplyScalar(q),i.hemi[_]=B,_++}}w>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==v||I.rectAreaLength!==w||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==C||I.numSpotMaps!==y||I.numLightProbes!==N)&&(i.sun.length=p,i.directional.length=m,i.spot.length=v,i.rectArea.length=w,i.point.length=f,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=N,I.sunLength=p,I.directionalLength=m,I.pointLength=f,I.spotLength=v,I.rectAreaLength=w,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=C,I.numSpotMaps=y,I.numLightProbes=N,i.version=D2++)}function l(c,u){let h=0,d=0,p=0,g=0,x=0,m=0;const f=u.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){const _=c[v];if(_.isSunLight){const b=i.sun[h];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(f),h++}else if(_.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),d++}else if(_.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),g++}else if(_.isRectAreaLight){const b=i.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),o.identity(),s.copy(_.matrixWorld),s.premultiply(f),o.extractRotation(s),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:i}}function d0(t){const e=new U2(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function F2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new d0(t),e.set(r,[a])):s>=o.length?(a=new d0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const O2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,B2=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],z2=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],f0=new St,Ao=new L,fd=new L;function V2(t,e,n){let i=new _p;const r=new Ne,s=new Ne,o=new vt,a=new Yb,l=new $b,c={},u=n.maxTextureSize,h={[qr]:wn,[wn]:qr,[Di]:Di},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:O2,fragmentShader:k2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Cn;g.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let f=this.type;this.render=function(T,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===v1&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ol);const A=t.getRenderTarget(),N=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),O=t.state;O.setBlending(yi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Y=f!==this.type;Y&&C.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=T.length;P<V;P++){const q=T[P],G=q.shadow;if(G===void 0){De("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const z=G.getFrameExtents();r.multiply(z),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,G.mapSize.y=s.y));const B=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=B,G.map===null||Y===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Do){if(q.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new fn(r.x,r.y,{format:Zr,type:En,minFilter:nn,magFilter:nn,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new ga(r.x,r.y,gi),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=Xi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Xt,G.map.depthTexture.magFilter=Xt}else q.isPointLight?(G.map=new U_(r.x),G.map.depthTexture=new Bb(r.x,wi)):(G.map=new fn(r.x,r.y),G.map.depthTexture=new ga(r.x,r.y,wi)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=Xi,this.type===Ol?(G.map.depthTexture.compareFunction=B?mp:pp,G.map.depthTexture.minFilter=nn,G.map.depthTexture.magFilter=nn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Xt,G.map.depthTexture.magFilter=Xt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const W=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,y);for(let K=0;K<W;K++){const se=G.getCamera(K);if(q.isPointLight){const me=G.camera,Ie=G.matrix,Be=q.distance||me.far;Be!==me.far&&(me.far=Be,me.updateProjectionMatrix()),Ao.setFromMatrixPosition(q.matrixWorld),me.position.copy(Ao),fd.copy(me.position),fd.add(B2[K]),me.up.copy(z2[K]),me.lookAt(fd),me.updateMatrixWorld(),Ie.makeTranslation(-Ao.x,-Ao.y,-Ao.z),f0.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),G._frustum.setFromProjectionMatrix(f0,me.coordinateSystem,me.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,K),t.clear();else{K===0&&(t.setRenderTarget(G.map),t.clear());const me=G.getViewport(K);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),O.viewport(o)}i=G.getFrustum(K),_(C,y,se,q,this.type)}G.isPointLightShadow!==!0&&this.type===Do&&v(G,y),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(A,N,I)};function v(T,C){const y=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new fn(r.x,r.y,{format:Zr,type:En}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,y,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,y,p,x,null)}function w(T,C,y,A){let N=null;const I=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)N=I;else if(N=y.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=N.uuid,Y=C.uuid;let P=c[O];P===void 0&&(P={},c[O]=P);let V=P[Y];V===void 0&&(V=N.clone(),P[Y]=V,C.addEventListener("dispose",b)),N=V}if(N.visible=C.visible,N.wireframe=C.wireframe,A===Do?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:h[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const O=t.properties.get(N);O.light=y}return N}function _(T,C,y,A,N){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Do)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const Y=e.update(T),P=T.material;if(Array.isArray(P)){const V=Y.groups;for(let q=0,G=V.length;q<G;q++){const z=V[q],B=P[z.materialIndex];if(B&&B.visible){const W=w(T,B,A,N);T.onBeforeShadow(t,T,C,y,Y,W,z),t.renderBufferDirect(y,null,Y,W,T,z),T.onAfterShadow(t,T,C,y,Y,W,z)}}}else if(P.visible){const V=w(T,P,A,N);T.onBeforeShadow(t,T,C,y,Y,V,null),t.renderBufferDirect(y,null,Y,V,T,null),T.onAfterShadow(t,T,C,y,Y,V,null)}}const O=T.children;for(let Y=0,P=O.length;Y<P;Y++)_(O[Y],C,y,A,N)}function b(T){T.target.removeEventListener("dispose",b);for(const y in c){const A=c[y],N=T.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function H2(t,e){function n(){let F=!1;const de=new vt;let te=null;const fe=new vt(0,0,0,0);return{setMask:function(xe){te!==xe&&!F&&(t.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){F=xe},setClear:function(xe,re,Pe,Te,dt){dt===!0&&(xe*=Te,re*=Te,Pe*=Te),de.set(xe,re,Pe,Te),fe.equals(de)===!1&&(t.clearColor(xe,re,Pe,Te),fe.copy(de))},reset:function(){F=!1,te=null,fe.set(-1,0,0,0)}}}function i(){let F=!1,de=!1,te=null,fe=null,xe=null;return{setReversed:function(re){if(de!==re){const Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),de=re;const Te=xe;xe=null,this.setClear(Te)}},getReversed:function(){return de},setTest:function(re){re?ie(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(re){te!==re&&!F&&(t.depthMask(re),te=re)},setFunc:function(re){if(de&&(re=Q1[re]),fe!==re){switch(re){case vf:t.depthFunc(t.NEVER);break;case xf:t.depthFunc(t.ALWAYS);break;case _f:t.depthFunc(t.LESS);break;case ua:t.depthFunc(t.LEQUAL);break;case yf:t.depthFunc(t.EQUAL);break;case Sf:t.depthFunc(t.GEQUAL);break;case Mf:t.depthFunc(t.GREATER);break;case wf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=re}},setLocked:function(re){F=re},setClear:function(re){xe!==re&&(xe=re,de&&(re=1-re),t.clearDepth(re))},reset:function(){F=!1,te=null,fe=null,xe=null,de=!1}}}function r(){let F=!1,de=null,te=null,fe=null,xe=null,re=null,Pe=null,Te=null,dt=null;return{setTest:function(nt){F||(nt?ie(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(nt){de!==nt&&!F&&(t.stencilMask(nt),de=nt)},setFunc:function(nt,Kn,li){(te!==nt||fe!==Kn||xe!==li)&&(t.stencilFunc(nt,Kn,li),te=nt,fe=Kn,xe=li)},setOp:function(nt,Kn,li){(re!==nt||Pe!==Kn||Te!==li)&&(t.stencilOp(nt,Kn,li),re=nt,Pe=Kn,Te=li)},setLocked:function(nt){F=nt},setClear:function(nt){dt!==nt&&(t.clearStencil(nt),dt=nt)},reset:function(){F=!1,de=null,te=null,fe=null,xe=null,re=null,Pe=null,Te=null,dt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d={},p=new WeakMap,g=[],x=null,m=!1,f=null,v=null,w=null,_=null,b=null,T=null,C=null,y=new Ge(0,0,0),A=0,N=!1,I=null,O=null,Y=null,P=null,V=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=z>=1):B.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=z>=2);let W=null,K={};const se=t.getParameter(t.SCISSOR_BOX),me=t.getParameter(t.VIEWPORT),Ie=new vt().fromArray(se),Be=new vt().fromArray(me);function Oe(F,de,te,fe){const xe=new Uint8Array(4),re=t.createTexture();t.bindTexture(F,re),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<te;Pe++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(de+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return re}const Q={};Q[t.TEXTURE_2D]=Oe(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=Oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=Oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=Oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(t.DEPTH_TEST),o.setFunc(ua),Ke(!1),_t(ug),ie(t.CULL_FACE),et(yi);function ie(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function we(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function Ue(F,de){return d[F]!==de?(t.bindFramebuffer(F,de),d[F]=de,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=de),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=de),!0):!1}function ye(F,de){let te=g,fe=!1;if(F){te=p.get(de),te===void 0&&(te=[],p.set(de,te));const xe=F.textures;if(te.length!==xe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Pe=xe.length;re<Pe;re++)te[re]=t.COLOR_ATTACHMENT0+re;te.length=xe.length,fe=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,fe=!0);fe&&t.drawBuffers(te)}function We(F){return x!==F?(t.useProgram(F),x=F,!0):!1}const Dt={[xs]:t.FUNC_ADD,[_1]:t.FUNC_SUBTRACT,[y1]:t.FUNC_REVERSE_SUBTRACT};Dt[S1]=t.MIN,Dt[M1]=t.MAX;const je={[w1]:t.ZERO,[E1]:t.ONE,[b1]:t.SRC_COLOR,[i_]:t.SRC_ALPHA,[N1]:t.SRC_ALPHA_SATURATE,[R1]:t.DST_COLOR,[C1]:t.DST_ALPHA,[T1]:t.ONE_MINUS_SRC_COLOR,[r_]:t.ONE_MINUS_SRC_ALPHA,[P1]:t.ONE_MINUS_DST_COLOR,[A1]:t.ONE_MINUS_DST_ALPHA,[L1]:t.CONSTANT_COLOR,[D1]:t.ONE_MINUS_CONSTANT_COLOR,[I1]:t.CONSTANT_ALPHA,[U1]:t.ONE_MINUS_CONSTANT_ALPHA};function et(F,de,te,fe,xe,re,Pe,Te,dt,nt){if(F===yi){m===!0&&(we(t.BLEND),m=!1);return}if(m===!1&&(ie(t.BLEND),m=!0),F!==x1){if(F!==f||nt!==N){if((v!==xs||b!==xs)&&(t.blendEquation(t.FUNC_ADD),v=xs,b=xs),nt)switch(F){case Wo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gf:t.blendFunc(t.ONE,t.ONE);break;case dg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",F);break}else switch(F){case Wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case dg:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fg:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",F);break}w=null,_=null,T=null,C=null,y.set(0,0,0),A=0,f=F,N=nt}return}xe=xe||de,re=re||te,Pe=Pe||fe,(de!==v||xe!==b)&&(t.blendEquationSeparate(Dt[de],Dt[xe]),v=de,b=xe),(te!==w||fe!==_||re!==T||Pe!==C)&&(t.blendFuncSeparate(je[te],je[fe],je[re],je[Pe]),w=te,_=fe,T=re,C=Pe),(Te.equals(y)===!1||dt!==A)&&(t.blendColor(Te.r,Te.g,Te.b,dt),y.copy(Te),A=dt),f=F,N=!1}function ut(F,de){F.side===Di?we(t.CULL_FACE):ie(t.CULL_FACE);let te=F.side===wn;de&&(te=!te),Ke(te),F.blending===Wo&&F.transparent===!1?et(yi):et(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const fe=F.stencilWrite;a.setTest(fe),fe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),vn(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(F){I!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),I=F)}function _t(F){F!==m1?(ie(t.CULL_FACE),F!==O&&(F===ug?t.cullFace(t.BACK):F===g1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),O=F}function Bt(F){F!==Y&&(G&&t.lineWidth(F),Y=F)}function vn(F,de,te){F?(ie(t.POLYGON_OFFSET_FILL),(P!==de||V!==te)&&(P=de,V=te,o.getReversed()&&(de=-de),t.polygonOffset(de,te))):we(t.POLYGON_OFFSET_FILL)}function Mt(F){F?ie(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function Rt(F){F===void 0&&(F=t.TEXTURE0+q-1),W!==F&&(t.activeTexture(F),W=F)}function k(F,de,te){te===void 0&&(W===null?te=t.TEXTURE0+q-1:te=W);let fe=K[te];fe===void 0&&(fe={type:void 0,texture:void 0},K[te]=fe),(fe.type!==F||fe.texture!==de)&&(W!==te&&(t.activeTexture(te),W=te),t.bindTexture(F,de||Q[F]),fe.type=F,fe.texture=de)}function $t(){const F=K[W];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function rt(){try{t.compressedTexImage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function S(){try{t.texSubImage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function H(){try{t.texSubImage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function ae(){try{t.texStorage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function le(){try{t.texStorage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function ee(){try{t.texImage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function ne(){try{t.texImage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function ce(F){return h[F]!==void 0?h[F]:t.getParameter(F)}function Ae(F,de){h[F]!==de&&(t.pixelStorei(F,de),h[F]=de)}function he(F){Ie.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Ie.copy(F))}function ue(F){Be.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Be.copy(F))}function Re(F,de){let te=c.get(de);te===void 0&&(te=new WeakMap,c.set(de,te));let fe=te.get(F);fe===void 0&&(fe=t.getUniformBlockIndex(de,F.name),te.set(F,fe))}function Le(F,de){const fe=c.get(de).get(F);l.get(de)!==fe&&(t.uniformBlockBinding(de,fe,F.__bindingPointIndex),l.set(de,fe))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},W=null,K={},d={},p=new WeakMap,g=[],x=null,m=!1,f=null,v=null,w=null,_=null,b=null,T=null,C=null,y=new Ge(0,0,0),A=0,N=!1,I=null,O=null,Y=null,P=null,V=null,Ie.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:we,bindFramebuffer:Ue,drawBuffers:ye,useProgram:We,setBlending:et,setMaterial:ut,setFlipSided:Ke,setCullFace:_t,setLineWidth:Bt,setPolygonOffset:vn,setScissorTest:Mt,activeTexture:Rt,bindTexture:k,unbindTexture:$t,compressedTexImage2D:rt,compressedTexImage3D:R,texImage2D:ee,texImage3D:ne,pixelStorei:Ae,getParameter:ce,updateUBOMapping:Re,uniformBlockBinding:Le,texStorage2D:ae,texStorage3D:le,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:J,scissor:he,viewport:ue,reset:ke}}function G2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return g?new OffscreenCanvas(R,S):Ec("canvas")}function m(R,S,H){let $=1;const J=rt(R);if((J.width>H||J.height>H)&&($=H/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor($*J.width),le=Math.floor($*J.height);d===void 0&&(d=x(ae,le));const ee=S?x(ae,le):d;return ee.width=ae,ee.height=le,ee.getContext("2d").drawImage(R,0,0,ae,le),De("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ae+"x"+le+")."),ee}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function f(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,S,H,$,J,ae=!1){if(R!==null){if(t[R]!==void 0)return t[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le;$&&(le=e.get("EXT_texture_norm16"),le||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===t.RED&&(H===t.FLOAT&&(ee=t.R32F),H===t.HALF_FLOAT&&(ee=t.R16F),H===t.UNSIGNED_BYTE&&(ee=t.R8),H===t.UNSIGNED_SHORT&&le&&(ee=le.R16_EXT),H===t.SHORT&&le&&(ee=le.R16_SNORM_EXT)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.R8UI),H===t.UNSIGNED_SHORT&&(ee=t.R16UI),H===t.UNSIGNED_INT&&(ee=t.R32UI),H===t.BYTE&&(ee=t.R8I),H===t.SHORT&&(ee=t.R16I),H===t.INT&&(ee=t.R32I)),S===t.RG&&(H===t.FLOAT&&(ee=t.RG32F),H===t.HALF_FLOAT&&(ee=t.RG16F),H===t.UNSIGNED_BYTE&&(ee=t.RG8),H===t.UNSIGNED_SHORT&&le&&(ee=le.RG16_EXT),H===t.SHORT&&le&&(ee=le.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RG8UI),H===t.UNSIGNED_SHORT&&(ee=t.RG16UI),H===t.UNSIGNED_INT&&(ee=t.RG32UI),H===t.BYTE&&(ee=t.RG8I),H===t.SHORT&&(ee=t.RG16I),H===t.INT&&(ee=t.RG32I)),S===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),H===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),H===t.UNSIGNED_INT&&(ee=t.RGB32UI),H===t.BYTE&&(ee=t.RGB8I),H===t.SHORT&&(ee=t.RGB16I),H===t.INT&&(ee=t.RGB32I)),S===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),H===t.UNSIGNED_INT&&(ee=t.RGBA32UI),H===t.BYTE&&(ee=t.RGBA8I),H===t.SHORT&&(ee=t.RGBA16I),H===t.INT&&(ee=t.RGBA32I)),S===t.RGB&&(H===t.UNSIGNED_SHORT&&le&&(ee=le.RGB16_EXT),H===t.SHORT&&le&&(ee=le.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),S===t.RGBA){const ne=ae?wc:Ze.getTransfer(J);H===t.FLOAT&&(ee=t.RGBA32F),H===t.HALF_FLOAT&&(ee=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ee=ne===st?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&le&&(ee=le.RGBA16_EXT),H===t.SHORT&&le&&(ee=le.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(R,S){let H;return R?S===null||S===wi||S===ha?H=t.DEPTH24_STENCIL8:S===gi?H=t.DEPTH32F_STENCIL8:S===fa&&(H=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wi||S===ha?H=t.DEPTH_COMPONENT24:S===gi?H=t.DEPTH_COMPONENT32F:S===fa&&(H=t.DEPTH_COMPONENT16),H}function T(R,S){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),A(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&h.delete(S)}function y(R){const S=R.target;S.removeEventListener("dispose",y),I(S)}function A(R){const S=i.get(R);if(S.__webglInit===void 0)return;const H=R.source,$=p.get(H);if($){const J=$[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(R),Object.keys($).length===0&&p.delete(H)}i.remove(R)}function N(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const H=R.source,$=p.get(H);delete $[S.__cacheKey],o.memory.textures--}function I(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let J=0;J<S.__webglFramebuffer[$].length;J++)t.deleteFramebuffer(S.__webglFramebuffer[$][J]);else t.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)t.deleteFramebuffer(S.__webglFramebuffer[$]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=R.textures;for(let $=0,J=H.length;$<J;$++){const ae=i.get(H[$]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(H[$])}i.remove(R)}let O=0;function Y(){O=0}function P(){return O}function V(R){O=R}function q(){const R=O;return R>=r.maxTextures&&De("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function G(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function z(R,S){const H=i.get(R);if(R.isVideoTexture&&k(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const $=R.image;if($===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{we(H,R,S);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function B(R,S){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){we(H,R,S);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function W(R,S){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){we(H,R,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function K(R,S){const H=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){Ue(H,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const se={[da]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[Ef]:t.MIRRORED_REPEAT},me={[Xt]:t.NEAREST,[k1]:t.NEAREST_MIPMAP_NEAREST,[Ya]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Du]:t.LINEAR_MIPMAP_NEAREST,[Oi]:t.LINEAR_MIPMAP_LINEAR},Ie={[H1]:t.NEVER,[Y1]:t.ALWAYS,[G1]:t.LESS,[pp]:t.LEQUAL,[W1]:t.EQUAL,[mp]:t.GEQUAL,[X1]:t.GREATER,[j1]:t.NOTEQUAL};function Be(R,S){if(S.type===gi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===Du||S.magFilter===Ya||S.magFilter===Oi||S.minFilter===nn||S.minFilter===Du||S.minFilter===Ya||S.minFilter===Oi)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,se[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,se[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,se[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,me[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,me[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==Ya&&S.minFilter!==Oi||S.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Oe(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const $=S.source;let J=p.get($);J===void 0&&(J={},p.set($,J));const ae=G(S);if(ae!==R.__cacheKey){J[ae]===void 0&&(J[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[ae].usedTimes++;const le=J[R.__cacheKey];le!==void 0&&(J[R.__cacheKey].usedTimes--,le.usedTimes===0&&N(S)),R.__cacheKey=ae,R.__webglTexture=J[ae].texture}return H}function Q(R,S,H){return Math.floor(Math.floor(R/H)/S)}function ie(R,S,H,$){const ae=R.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,H,$,S.data);else{ae.sort((Ae,he)=>Ae.start-he.start);let le=0;for(let Ae=1;Ae<ae.length;Ae++){const he=ae[le],ue=ae[Ae],Re=he.start+he.count,Le=Q(ue.start,S.width,4),ke=Q(he.start,S.width,4);ue.start<=Re+1&&Le===ke&&Q(ue.start+ue.count-1,S.width,4)===Le?he.count=Math.max(he.count,ue.start+ue.count-he.start):(++le,ae[le]=ue)}ae.length=le+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Ae=0,he=ae.length;Ae<he;Ae++){const ue=ae[Ae],Re=Math.floor(ue.start/4),Le=Math.ceil(ue.count/4),ke=Re%S.width,F=Math.floor(Re/S.width),de=Le,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,ke,F,de,te,H,$,S.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function we(R,S,H){let $=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=t.TEXTURE_3D);const J=Oe(R,S),ae=S.source;n.bindTexture($,R.__webglTexture,t.TEXTURE0+H);const le=i.get(ae);if(ae.version!==le.__version||J===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const te=Ze.getPrimaries(Ze.workingColorSpace),fe=S.colorSpace===ur?null:Ze.getPrimaries(S.colorSpace),xe=S.colorSpace===ur||te===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let ne=m(S.image,!1,r.maxTextureSize);ne=$t(S,ne);const ce=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type);let he=_(S.internalFormat,ce,Ae,S.normalized,S.colorSpace,S.isVideoTexture);Be($,S);let ue;const Re=S.mipmaps,Le=S.isVideoTexture!==!0,ke=le.__version===void 0||J===!0,F=ae.dataReady,de=T(S,ne);if(S.isDepthTexture)he=b(S.format===zr,S.type),ke&&(Le?n.texStorage2D(t.TEXTURE_2D,1,he,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,he,ne.width,ne.height,0,ce,Ae,null));else if(S.isDataTexture)if(Re.length>0){Le&&ke&&n.texStorage2D(t.TEXTURE_2D,de,he,Re[0].width,Re[0].height);for(let te=0,fe=Re.length;te<fe;te++)ue=Re[te],Le?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ue.width,ue.height,ce,Ae,ue.data):n.texImage2D(t.TEXTURE_2D,te,he,ue.width,ue.height,0,ce,Ae,ue.data);S.generateMipmaps=!1}else Le?(ke&&n.texStorage2D(t.TEXTURE_2D,de,he,ne.width,ne.height),F&&ie(S,ne,ce,Ae)):n.texImage2D(t.TEXTURE_2D,0,he,ne.width,ne.height,0,ce,Ae,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Le&&ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,he,Re[0].width,Re[0].height,ne.depth);for(let te=0,fe=Re.length;te<fe;te++)if(ue=Re[te],S.format!==ri)if(ce!==null)if(Le){if(F)if(S.layerUpdates.size>0){const xe=Wg(ue.width,ue.height,S.format,S.type);for(const re of S.layerUpdates){const Pe=ue.data.subarray(re*xe/ue.data.BYTES_PER_ELEMENT,(re+1)*xe/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,re,ue.width,ue.height,1,ce,Pe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ne.depth,ce,ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,he,ue.width,ue.height,ne.depth,0,ue.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ne.depth,ce,Ae,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,he,ue.width,ue.height,ne.depth,0,ce,Ae,ue.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Le&&ke&&n.texStorage2D(t.TEXTURE_2D,de,he,Re[0].width,Re[0].height);for(let te=0,fe=Re.length;te<fe;te++)ue=Re[te],S.format!==ri?ce!==null?Le?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,ue.width,ue.height,ce,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,te,he,ue.width,ue.height,0,ue.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ue.width,ue.height,ce,Ae,ue.data):n.texImage2D(t.TEXTURE_2D,te,he,ue.width,ue.height,0,ce,Ae,ue.data)}else if(S.isDataArrayTexture)if(Le){if(ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,he,ne.width,ne.height,ne.depth),F)if(S.layerUpdates.size>0){const te=Wg(ne.width,ne.height,S.format,S.type);for(const fe of S.layerUpdates){const xe=ne.data.subarray(fe*te/ne.data.BYTES_PER_ELEMENT,(fe+1)*te/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,ne.width,ne.height,1,ce,Ae,xe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ce,Ae,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,ne.width,ne.height,ne.depth,0,ce,Ae,ne.data);else if(S.isData3DTexture)Le?(ke&&n.texStorage3D(t.TEXTURE_3D,de,he,ne.width,ne.height,ne.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ce,Ae,ne.data)):n.texImage3D(t.TEXTURE_3D,0,he,ne.width,ne.height,ne.depth,0,ce,Ae,ne.data);else if(S.isFramebufferTexture){if(ke)if(Le)n.texStorage2D(t.TEXTURE_2D,de,he,ne.width,ne.height);else{let te=ne.width,fe=ne.height;for(let xe=0;xe<de;xe++)n.texImage2D(t.TEXTURE_2D,xe,he,te,fe,0,ce,Ae,null),te>>=1,fe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),h.add(S),te.onpaint=fe=>{const xe=fe.changedElements;for(const re of h)xe.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{const xe=t.RGBA,re=t.RGBA,Pe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,re,Pe,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Le&&ke){const te=rt(Re[0]);n.texStorage2D(t.TEXTURE_2D,de,he,te.width,te.height)}for(let te=0,fe=Re.length;te<fe;te++)ue=Re[te],Le?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ce,Ae,ue):n.texImage2D(t.TEXTURE_2D,te,he,ce,Ae,ue);S.generateMipmaps=!1}else if(Le){if(ke){const te=rt(ne);n.texStorage2D(t.TEXTURE_2D,de,he,te.width,te.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Ae,ne)}else n.texImage2D(t.TEXTURE_2D,0,he,ce,Ae,ne);f(S)&&v($),le.__version=ae.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ue(R,S,H){if(S.image.length!==6)return;const $=Oe(R,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const ae=i.get(J);if(J.version!==ae.__version||$===!0){n.activeTexture(t.TEXTURE0+H);const le=Ze.getPrimaries(Ze.workingColorSpace),ee=S.colorSpace===ur?null:Ze.getPrimaries(S.colorSpace),ne=S.colorSpace===ur||le===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ce=S.isCompressedTexture||S.image[0].isCompressedTexture,Ae=S.image[0]&&S.image[0].isDataTexture,he=[];for(let re=0;re<6;re++)!ce&&!Ae?he[re]=m(S.image[re],!0,r.maxCubemapSize):he[re]=Ae?S.image[re].image:S.image[re],he[re]=$t(S,he[re]);const ue=he[0],Re=s.convert(S.format,S.colorSpace),Le=s.convert(S.type),ke=_(S.internalFormat,Re,Le,S.normalized,S.colorSpace),F=S.isVideoTexture!==!0,de=ae.__version===void 0||$===!0,te=J.dataReady;let fe=T(S,ue);Be(t.TEXTURE_CUBE_MAP,S);let xe;if(ce){F&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ke,ue.width,ue.height);for(let re=0;re<6;re++){xe=he[re].mipmaps;for(let Pe=0;Pe<xe.length;Pe++){const Te=xe[Pe];S.format!==ri?Re!==null?F?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Te.width,Te.height,Re,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,ke,Te.width,Te.height,0,Te.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Te.width,Te.height,Re,Le,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,ke,Te.width,Te.height,0,Re,Le,Te.data)}}}else{if(xe=S.mipmaps,F&&de){xe.length>0&&fe++;const re=rt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ke,re.width,re.height)}for(let re=0;re<6;re++)if(Ae){F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,he[re].width,he[re].height,Re,Le,he[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ke,he[re].width,he[re].height,0,Re,Le,he[re].data);for(let Pe=0;Pe<xe.length;Pe++){const dt=xe[Pe].image[re].image;F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,dt.width,dt.height,Re,Le,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,ke,dt.width,dt.height,0,Re,Le,dt.data)}}else{F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,Le,he[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ke,Re,Le,he[re]);for(let Pe=0;Pe<xe.length;Pe++){const Te=xe[Pe];F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Re,Le,Te.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,ke,Re,Le,Te.image[re])}}}f(S)&&v(t.TEXTURE_CUBE_MAP),ae.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ye(R,S,H,$,J,ae){const le=s.convert(H.format,H.colorSpace),ee=s.convert(H.type),ne=_(H.internalFormat,le,ee,H.normalized,H.colorSpace),ce=i.get(S),Ae=i.get(H);if(Ae.__renderTarget=S,!ce.__hasExternalTextures){const he=Math.max(1,S.width>>ae),ue=Math.max(1,S.height>>ae);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ae,ne,he,ue,S.depth,0,le,ee,null):n.texImage2D(J,ae,ne,he,ue,0,le,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Rt(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,J,Ae.__webglTexture,0,Mt(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,J,Ae.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(R,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const $=S.depthTexture,J=$&&$.isDepthTexture?$.type:null,ae=b(S.stencilBuffer,J),le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Rt(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Mt(S),ae,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Mt(S),ae,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ae,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,R)}else{const $=S.textures;for(let J=0;J<$.length;J++){const ae=$[J],le=s.convert(ae.format,ae.colorSpace),ee=s.convert(ae.type),ne=_(ae.internalFormat,le,ee,ae.normalized,ae.colorSpace);Rt(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Mt(S),ne,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Mt(S),ne,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Dt(R,S,H){const $=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Be(t.TEXTURE_CUBE_MAP,S.depthTexture);const ce=s.convert(S.depthTexture.format),Ae=s.convert(S.depthTexture.type);let he;S.depthTexture.format===Xi?he=t.DEPTH_COMPONENT24:S.depthTexture.format===zr&&(he=t.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,S.width,S.height,0,ce,Ae,null)}}else z(S.depthTexture,0);const ae=J.__webglTexture,le=Mt(S),ee=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,ne=S.depthTexture.format===zr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Xi)Rt(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,ae,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,ae,0);else if(S.depthTexture.format===zr)Rt(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,ae,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(R){const S=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)Dt(S.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?Dt(S.__webglFramebuffer[0],R,0):Dt(S.__webglFramebuffer,R,0)}else if(H){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=t.createRenderbuffer(),We(S.__webglDepthbuffer[$],R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ae)}}else{const $=R.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),We(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(R,S,H){const $=i.get(R);S!==void 0&&ye($.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&je(R)}function ut(R){const S=R.texture,H=i.get(R),$=i.get(S);R.addEventListener("dispose",y);const J=R.textures,ae=R.isWebGLCubeRenderTarget===!0,le=J.length>1;if(le||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=S.version,o.memory.textures++),ae){H.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ee]=[];for(let ne=0;ne<S.mipmaps.length;ne++)H.__webglFramebuffer[ee][ne]=t.createFramebuffer()}else H.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)H.__webglFramebuffer[ee]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(le)for(let ee=0,ne=J.length;ee<ne;ee++){const ce=i.get(J[ee]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Rt(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const ne=J[ee];H.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ee]);const ce=s.convert(ne.format,ne.colorSpace),Ae=s.convert(ne.type),he=_(ne.internalFormat,ce,Ae,ne.normalized,ne.colorSpace,R.isXRRenderTarget===!0),ue=Mt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,he,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,H.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),We(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Be(t.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)ye(H.__webglFramebuffer[ee][ne],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else ye(H.__webglFramebuffer[ee],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(S)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let ee=0,ne=J.length;ee<ne;ee++){const ce=J[ee],Ae=i.get(ce);let he=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Ae.__webglTexture),Be(he,ce),ye(H.__webglFramebuffer,R,ce,t.COLOR_ATTACHMENT0+ee,he,0),f(ce)&&v(he)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,$.__webglTexture),Be(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)ye(H.__webglFramebuffer[ne],R,S,t.COLOR_ATTACHMENT0,ee,ne);else ye(H.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,ee,0);f(S)&&v(ee),n.unbindTexture()}R.depthBuffer&&je(R)}function Ke(R){const S=R.textures;for(let H=0,$=S.length;H<$;H++){const J=S[H];if(f(J)){const ae=w(R),le=i.get(J).__webglTexture;n.bindTexture(ae,le),v(ae),n.unbindTexture()}}}const _t=[],Bt=[];function vn(R){if(R.samples>0){if(Rt(R)===!1){const S=R.textures,H=R.width,$=R.height;let J=t.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(R),ee=S.length>1;if(ee)for(let ce=0;ce<S.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const ne=R.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Ae=i.get(S[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,H,$,0,0,H,$,J,t.NEAREST),l===!0&&(_t.length=0,Bt.length=0,_t.push(t.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(_t.push(ae),Bt.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Bt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_t))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let ce=0;ce<S.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Ae=i.get(S[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Mt(R){return Math.min(r.maxSamples,R.samples)}function Rt(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function k(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function $t(R,S){const H=R.colorSpace,$=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Mc&&H!==ur&&(Ze.getTransfer(H)===st?($!==ri||J!==Dn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",H)),S}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.getTextureUnits=P,this.setTextureUnits=V,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=et,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function W2(t,e){function n(i,r=ur){let s;const o=Ze.getTransfer(r);if(i===Dn)return t.UNSIGNED_BYTE;if(i===cp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===up)return t.UNSIGNED_SHORT_5_5_5_1;if(i===m_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===g_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===h_)return t.BYTE;if(i===p_)return t.SHORT;if(i===fa)return t.UNSIGNED_SHORT;if(i===lp)return t.INT;if(i===wi)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===En)return t.HALF_FLOAT;if(i===v_)return t.ALPHA;if(i===x_)return t.RGB;if(i===ri)return t.RGBA;if(i===Xi)return t.DEPTH_COMPONENT;if(i===zr)return t.DEPTH_STENCIL;if(i===__)return t.RED;if(i===dp)return t.RED_INTEGER;if(i===Zr)return t.RG;if(i===fp)return t.RG_INTEGER;if(i===hp)return t.RGBA_INTEGER;if(i===kl||i===Bl||i===zl||i===Vl)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===kl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===kl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bf||i===Tf||i===Cf||i===Af)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Af)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rf||i===Pf||i===Nf||i===Lf||i===Df||i===yc||i===If)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rf||i===Pf)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lf)return s.COMPRESSED_R11_EAC;if(i===Df)return s.COMPRESSED_SIGNED_R11_EAC;if(i===yc)return s.COMPRESSED_RG11_EAC;if(i===If)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uf||i===Ff||i===Of||i===kf||i===Bf||i===zf||i===Vf||i===Hf||i===Gf||i===Wf||i===Xf||i===jf||i===Yf||i===$f)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ff)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Of)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$f)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qf||i===Kf||i===Zf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qf)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qf||i===Jf||i===Sc||i===eh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ha?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const X2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Y2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new R_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new rn({vertexShader:X2,fragmentShader:j2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ut(new pr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $2 extends ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Y2,f={},v=n.getContextAttributes();let w=null,_=null;const b=[],T=[],C=new Ne;let y=null,A=null;const N=new Ln;N.viewport=new vt;const I=new Ln;I.viewport=new vt;const O=[N,I],Y=new Jb;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=b[Q];return ie===void 0&&(ie=new zu,b[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=b[Q];return ie===void 0&&(ie=new zu,b[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=b[Q];return ie===void 0&&(ie=new zu,b[Q]=ie),ie.getHandSpace()};function q(Q){const ie=T.indexOf(Q.inputSource);if(ie===-1)return;const we=b[ie];we!==void 0&&(we.update(Q.inputSource,Q.frame,c||o),we.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",z);for(let Q=0;Q<b.length;Q++){const ie=T[Q];ie!==null&&(T[Q]=null,b[Q].disconnect(ie))}P=null,V=null,m.reset();for(const Q in f)delete f[Q];if(e.setRenderTarget(w),p=null,d=null,h=null,r=null,_=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),A!==null){const Q=A.camera;Q.fov=A.fov,Q.zoom=A.zoom,Q.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",G),r.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ue=null,ye=null;v.depth&&(ye=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=v.stencil?zr:Xi,Ue=v.stencil?ha:wi);const We={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(We),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new fn(d.textureWidth,d.textureHeight,{format:ri,type:Dn,depthTexture:new ga(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const we={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,we),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new fn(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(Q){for(let ie=0;ie<Q.removed.length;ie++){const we=Q.removed[ie],Ue=T.indexOf(we);Ue>=0&&(T[Ue]=null,b[Ue].disconnect(we))}for(let ie=0;ie<Q.added.length;ie++){const we=Q.added[ie];let Ue=T.indexOf(we);if(Ue===-1){for(let We=0;We<b.length;We++)if(We>=T.length){T.push(we),Ue=We;break}else if(T[We]===null){T[We]=we,Ue=We;break}if(Ue===-1)break}const ye=b[Ue];ye&&ye.connect(we)}}const B=new L,W=new L;function K(Q,ie,we){B.setFromMatrixPosition(ie.matrixWorld),W.setFromMatrixPosition(we.matrixWorld);const Ue=B.distanceTo(W),ye=ie.projectionMatrix.elements,We=we.projectionMatrix.elements,Dt=ye[14]/(ye[10]-1),je=ye[14]/(ye[10]+1),et=(ye[9]+1)/ye[5],ut=(ye[9]-1)/ye[5],Ke=(ye[8]-1)/ye[0],_t=(We[8]+1)/We[0],Bt=Dt*Ke,vn=Dt*_t,Mt=Ue/(-Ke+_t),Rt=Mt*-Ke;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Rt),Q.translateZ(Mt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ye[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const k=Dt+Mt,$t=je+Mt,rt=Bt-Rt,R=vn+(Ue-Rt),S=et*je/$t*k,H=ut*je/$t*k;Q.projectionMatrix.makePerspective(rt,R,S,H,k,$t),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ie=Q.near,we=Q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(we=m.depthFar)),Y.near=I.near=N.near=ie,Y.far=I.far=N.far=we,(P!==Y.near||V!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),P=Y.near,V=Y.far),Y.layers.mask=Q.layers.mask|6,N.layers.mask=Y.layers.mask&-5,I.layers.mask=Y.layers.mask&-3;const Ue=Q.parent,ye=Y.cameras;se(Y,Ue);for(let We=0;We<ye.length;We++)se(ye[We],Ue);ye.length===2?K(Y,N,I):Y.projectionMatrix.copy(N.projectionMatrix),A===null&&Q.isPerspectiveCamera&&(A={camera:Q,fov:Q.fov,zoom:Q.zoom}),me(Q,Y,Ue)};function me(Q,ie,we){we===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(we.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ma*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(Q){return f[Q]};let Ie=null;function Be(Q,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){const we=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Ue=!1;we.length!==Y.cameras.length&&(Y.cameras.length=0,Ue=!0);for(let je=0;je<we.length;je++){const et=we[je];let ut=null;if(p!==null)ut=p.getViewport(et);else{const _t=h.getViewSubImage(d,et);ut=_t.viewport,je===0&&(e.setRenderTargetTextures(_,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(_))}let Ke=O[je];Ke===void 0&&(Ke=new Ln,Ke.layers.enable(je),Ke.viewport=new vt,O[je]=Ke),Ke.matrix.fromArray(et.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(et.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ut.x,ut.y,ut.width,ut.height),je===0&&(Y.matrix.copy(Ke.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ue===!0&&Y.cameras.push(Ke)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const je=h.getDepthInformation(we[0]);je&&je.isValid&&je.texture&&m.init(je,r.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let je=0;je<we.length;je++){const et=we[je].camera;if(et){let ut=f[et];ut||(ut=new R_,f[et]=ut);const Ke=h.getCameraImage(et);ut.sourceTexture=Ke}}}}for(let we=0;we<b.length;we++){const Ue=T[we],ye=b[we];Ue!==null&&ye!==void 0&&ye.update(Ue,ie,c||o)}Ie&&Ie(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Oe=new D_;Oe.setAnimationLoop(Be),this.setAnimationLoop=function(Q){Ie=Q},this.dispose=function(){}}}const q2=new St,z_=new Fe;z_.set(-1,0,0,0,1,0,0,0,1);function K2(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,P_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,w,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===wn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===wn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),w=v.envMap,_=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(q2.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(z_),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=w*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Z2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){const T=b.program;i.uniformBlockBinding(_,T)}function c(_,b){let T=r[_.id];T===void 0&&(m(_),T=u(_),r[_.id]=T,_.addEventListener("dispose",v));const C=b.program;i.updateUBOMapping(_,C);const y=e.render.frame;s[_.id]!==y&&(d(_),s[_.id]=y)}function u(_){const b=h();_.__bindingPointIndex=b;const T=t.createBuffer(),C=_.__size,y=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,T),T}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const b=r[_.id],T=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let y=0,A=T.length;y<A;y++){const N=T[y];if(Array.isArray(N))for(let I=0,O=N.length;I<O;I++)p(N[I],y,I,C);else p(N,y,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,b,T,C){if(x(_,b,T,C)===!0){const y=_.__offset,A=_.value;if(Array.isArray(A)){let N=0;for(let I=0;I<A.length;I++){const O=A[I],Y=f(O);g(O,_.__data,N),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,_.__data)}}function g(_,b,T){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,T)}function x(_,b,T,C){const y=_.value,A=b+"_"+T;if(C[A]===void 0)return typeof y=="number"||typeof y=="boolean"?C[A]=y:ArrayBuffer.isView(y)?C[A]=y.slice():C[A]=y.clone(),!0;{const N=C[A];if(typeof y=="number"||typeof y=="boolean"){if(N!==y)return C[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(N.equals(y)===!1)return N.copy(y),!0}}return!1}function m(_){const b=_.uniforms;let T=0;const C=16;for(let A=0,N=b.length;A<N;A++){const I=Array.isArray(b[A])?b[A]:[b[A]];for(let O=0,Y=I.length;O<Y;O++){const P=I[O],V=Array.isArray(P.value)?P.value:[P.value];for(let q=0,G=V.length;q<G;q++){const z=V[q],B=f(z),W=T%C,K=W%B.boundary,se=W+K;T+=K,se!==0&&C-se<B.storage&&(T+=C-se),P.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=B.storage}}}const y=T%C;return y>0&&(T+=C-y),_.__size=T,_.__cache={},this}function f(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):De("WebGLRenderer: Unsupported uniform value type.",_),b}function v(_){const b=_.target;b.removeEventListener("dispose",v);const T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function w(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:w}}const Q2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function J2(){return fi===null&&(fi=new Ob(Q2,16,16,Zr,En),fi.name="DFG_LUT",fi.minFilter=nn,fi.magFilter=nn,fi.wrapS=Fi,fi.wrapT=Fi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class eP{constructor(e={}){const{canvas:n=K1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Dn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=p,m=new Set([hp,fp,dp]),f=new Set([Dn,wi,fa,ha,cp,up]),v=new Uint32Array(4),w=new Int32Array(4),_=new L;let b=null,T=null;const C=[],y=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let I=!1,O=null,Y=null,P=null,V=null;this._outputColorSpace=Nn;let q=0,G=0,z=null,B=-1,W=null;const K=new vt,se=new vt;let me=null;const Ie=new Ge(0);let Be=0,Oe=n.width,Q=n.height,ie=1,we=null,Ue=null;const ye=new vt(0,0,Oe,Q),We=new vt(0,0,Oe,Q);let Dt=!1;const je=new _p;let et=!1,ut=!1;const Ke=new St,_t=new L,Bt=new vt,vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Rt(){return z===null?ie:1}let k=i;function $t(E,D){return n.getContext(E,D)}let rt,R,S,H,$,J,ae,le,ee,ne,ce,Ae,he,ue,Re,Le,ke,F,de,te,fe,xe,re;try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${op}`),n.addEventListener("webglcontextlost",dt,!1),n.addEventListener("webglcontextrestored",nt,!1),n.addEventListener("webglcontextcreationerror",Kn,!1),k===null){const D="webgl2";if(k=$t(D,E),k===null)throw $t(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(E){throw n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",nt,!1),n.removeEventListener("webglcontextcreationerror",Kn,!1),tt("WebGLRenderer: "+E.message),E}function Pe(){rt=new JA(k),rt.init(),fe=new W2(k,rt),R=new GA(k,rt,e,fe),S=new H2(k,rt),R.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),Y=k.createFramebuffer(),P=k.createFramebuffer(),V=k.createFramebuffer(),H=new nR(k),$=new A2,J=new G2(k,rt,S,$,R,fe,H),ae=new QA(N),le=new rT(k),xe=new VA(k,le),ee=new eR(k,le,H,xe),ne=new rR(k,ee,le,xe,H),F=new iR(k,R,J),Re=new WA($),ce=new C2(N,ae,rt,R,xe,Re),Ae=new K2(N,$),he=new P2,ue=new F2(rt),ke=new zA(N,ae,S,ne,g,l),Le=new V2(N,ne,R),re=new Z2(k,H,R,S),de=new HA(k,rt,H),te=new tR(k,rt,H),H.programs=ce.programs,N.capabilities=R,N.extensions=rt,N.properties=$,N.renderLists=he,N.shadowMap=Le,N.state=S,N.info=H}x!==Dn&&(A=new oR(x,n.width,n.height,a,r,s));const Te=new $2(N,k);this.xr=Te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(Oe,Q,!1))},this.getSize=function(E){return E.set(Oe,Q)},this.setSize=function(E,D,Z=!0){if(Te.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=E,Q=D,n.width=Math.floor(E*ie),n.height=Math.floor(D*ie),Z===!0&&(n.style.width=E+"px",n.style.height=D+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(Oe*ie,Q*ie).floor()},this.setDrawingBufferSize=function(E,D,Z){Oe=E,Q=D,ie=Z,n.width=Math.floor(E*Z),n.height=Math.floor(D*Z),this.setViewport(0,0,E,D)},this.setEffects=function(E){if(x===Dn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let D=0;D<E.length;D++)if(E[D].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,D,Z,X){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,D,Z,X),S.viewport(K.copy(ye).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(We)},this.setScissor=function(E,D,Z,X){E.isVector4?We.set(E.x,E.y,E.z,E.w):We.set(E,D,Z,X),S.scissor(se.copy(We).multiplyScalar(ie).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(E){S.setScissorTest(Dt=E)},this.setOpaqueSort=function(E){we=E},this.setTransparentSort=function(E){Ue=E},this.getClearColor=function(E){return E.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(E=!0,D=!0,Z=!0){let X=0;if(E){let j=!1;if(z!==null){const ve=z.texture.format;j=m.has(ve)}if(j){const ve=z.texture.type,Se=f.has(ve),ge=ke.getClearColor(),Ee=ke.getClearAlpha(),Ce=ge.r,Ve=ge.g,Ye=ge.b;Se?(v[0]=Ce,v[1]=Ve,v[2]=Ye,v[3]=Ee,k.clearBufferuiv(k.COLOR,0,v)):(w[0]=Ce,w[1]=Ve,w[2]=Ye,w[3]=Ee,k.clearBufferiv(k.COLOR,0,w))}else X|=k.COLOR_BUFFER_BIT}D&&(X|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",nt,!1),n.removeEventListener("webglcontextcreationerror",Kn,!1),ke.dispose(),he.dispose(),ue.dispose(),$.dispose(),ae.dispose(),ne.dispose(),xe.dispose(),re.dispose(),ce.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Dp),Te.removeEventListener("sessionend",Ip),Rr.stop()};function dt(E){E.preventDefault(),mg("WebGLRenderer: Context Lost."),I=!0}function nt(){mg("WebGLRenderer: Context Restored."),I=!1;const E=H.autoReset,D=Le.enabled,Z=Le.autoUpdate,X=Le.needsUpdate,j=Le.type;Pe(),H.autoReset=E,Le.enabled=D,Le.autoUpdate=Z,Le.needsUpdate=X,Le.type=j}function Kn(E){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function li(E){const D=E.target;D.removeEventListener("dispose",li),Ny(D)}function Ny(E){Ly(E),$.remove(E)}function Ly(E){const D=$.get(E).programs;D!==void 0&&(D.forEach(function(Z){ce.releaseProgram(Z)}),E.isShaderMaterial&&ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,Z,X,j,ve){D===null&&(D=vn);const Se=j.isMesh&&j.matrixWorld.determinantAffine()<0,ge=Uy(E,D,Z,X,j);S.setMaterial(X,Se);let Ee=Z.index,Ce=1;if(X.wireframe===!0){if(Ee=ee.getWireframeAttribute(Z),Ee===void 0)return;Ce=2}const Ve=Z.drawRange,Ye=Z.attributes.position;let be=Ve.start*Ce,it=(Ve.start+Ve.count)*Ce;ve!==null&&(be=Math.max(be,ve.start*Ce),it=Math.min(it,(ve.start+ve.count)*Ce)),Ee!==null?(be=Math.max(be,0),it=Math.min(it,Ee.count)):Ye!=null&&(be=Math.max(be,0),it=Math.min(it,Ye.count));const Pt=it-be;if(Pt<0||Pt===1/0)return;xe.setup(j,X,ge,Z,Ee);let pt,lt=de;if(Ee!==null&&(pt=le.get(Ee),lt=te,lt.setIndex(pt)),j.isMesh)X.wireframe===!0?(S.setLineWidth(X.wireframeLinewidth*Rt()),lt.setMode(k.LINES)):lt.setMode(k.TRIANGLES);else if(j.isLine){let qt=X.linewidth;qt===void 0&&(qt=1),S.setLineWidth(qt*Rt()),j.isLineSegments?lt.setMode(k.LINES):j.isLineLoop?lt.setMode(k.LINE_LOOP):lt.setMode(k.LINE_STRIP)}else j.isPoints?lt.setMode(k.POINTS):j.isSprite&&lt.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,_e=j._multiDrawCounts,an=j._multiDrawCount,Qe=Ee?le.get(Ee).bytesPerElement:1,Vn=$.get(X).currentProgram.getUniforms();for(let ci=0;ci<an;ci++)Vn.setValue(k,"_gl_DrawID",ci),lt.render(qt[ci]/Qe,_e[ci])}else if(j.isInstancedMesh)lt.renderInstances(be,Pt,j.count);else if(Z.isInstancedBufferGeometry){const qt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,_e=Math.min(Z.instanceCount,qt);lt.renderInstances(be,Pt,_e)}else lt.render(be,Pt)};function Lp(E,D,Z,X){O!==null&&E.isNodeMaterial&&O.setObject(X,E),et===!0&&Re.setState(E,Z,!1),E.transparent===!0&&E.side===Di&&E.forceSinglePass===!1?(E.side=wn,E.needsUpdate=!0,Ra(E,D,X),E.side=qr,E.needsUpdate=!0,Ra(E,D,X),E.side=Di):Ra(E,D,X)}this.compile=function(E,D,Z=null){Z===null&&(Z=E),O!==null&&O.renderStart(E,D,Z),T=ue.get(Z),T.init(D),y.push(T),Z.traverseVisible(function(j){j.isLight&&j.layers.test(D.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),E!==Z&&E.traverseVisible(function(j){j.isLight&&j.layers.test(D.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),ut=this.localClippingEnabled,et=Re.init(this.clippingPlanes,ut),et===!0&&Re.setGlobalState(this.clippingPlanes,D),O!==null&&Le.render(T.state.shadowsArray,Z,D);const X=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ve=j.material;if(ve)if(Array.isArray(ve))for(let Se=0;Se<ve.length;Se++){const ge=ve[Se];Lp(ge,Z,D,j),X.add(ge)}else Lp(ve,Z,D,j),X.add(ve)}),T=y.pop(),O!==null&&O.renderEnd(),X},this.compileAsync=function(E,D,Z=null){const X=this.compile(E,D,Z);return new Promise(j=>{function ve(){if(X.forEach(function(Se){const Ee=$.get(Se).currentProgram;(Ee===void 0||Ee.isReady())&&X.delete(Se)}),X.size===0){j(E);return}setTimeout(ve,10)}rt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let nu=null;function Dy(E){nu&&nu(E)}function Dp(){Rr.stop()}function Ip(){Rr.start()}const Rr=new D_;Rr.setAnimationLoop(Dy),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(E){nu=E,Te.setAnimationLoop(E),E===null?Rr.stop():Rr.start()},Te.addEventListener("sessionstart",Dp),Te.addEventListener("sessionend",Ip),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(E,D);const Z=Te.enabled===!0&&Te.isPresenting===!0,X=A!==null&&(z===null||Z)&&A.begin(N,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(D),D=Te.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,D,z),T=ue.get(E,y.length),T.init(D),T.state.textureUnits=J.getTextureUnits(),y.push(T),Ke.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),je.setFromProjectionMatrix(Ke,vi,D.reversedDepth),ut=this.localClippingEnabled,et=Re.init(this.clippingPlanes,ut),b=he.get(E,C.length),b.init(),C.push(b),Te.enabled===!0&&Te.isPresenting===!0){const Se=N.xr.getDepthSensingMesh();Se!==null&&iu(Se,D,-1/0,N.sortObjects)}iu(E,D,0,N.sortObjects),b.finish(),O!==null&&O.updateLights(T.state.lightsArray),N.sortObjects===!0&&b.sort(we,Ue),Mt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Mt&&ke.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Re.beginShadows();const j=T.state.shadowsArray;if(Le.render(j,E,D),et===!0&&Re.endShadows(),(X&&A.hasRenderPass())===!1){const Se=b.opaque,ge=b.transmissive;if(T.setupLights(),D.isArrayCamera){const Ee=D.cameras;if(ge.length>0)for(let Ce=0,Ve=Ee.length;Ce<Ve;Ce++){const Ye=Ee[Ce];Fp(Se,ge,E,Ye)}Mt&&ke.render(E);for(let Ce=0,Ve=Ee.length;Ce<Ve;Ce++){const Ye=Ee[Ce];Up(b,E,Ye,Ye.viewport)}}else ge.length>0&&Fp(Se,ge,E,D),Mt&&ke.render(E),Up(b,E,D)}z!==null&&G===0&&(J.updateMultisampleRenderTarget(z),J.updateRenderTargetMipmap(z)),X&&A.end(N),E.isScene===!0&&E.onAfterRender(N,E,D),xe.resetDefaultState(),B=-1,W=null,y.pop(),y.length>0?(T=y[y.length-1],J.setTextureUnits(T.state.textureUnits),et===!0&&Re.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,O!==null&&O.renderEnd()};function iu(E,D,Z,X){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(je)){X&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ke);const Se=ne.update(E),ge=E.material;ge.visible&&b.push(E,Se,ge,Z,Bt.z,null,D)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(je))){const Se=ne.update(E),ge=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Bt.copy(Se.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(Ke)),Array.isArray(ge)){const Ee=Se.groups;for(let Ce=0,Ve=Ee.length;Ce<Ve;Ce++){const Ye=Ee[Ce],be=ge[Ye.materialIndex];be&&be.visible&&b.push(E,Se,be,Z,Bt.z,Ye,D)}}else ge.visible&&b.push(E,Se,ge,Z,Bt.z,null,D)}}const ve=E.children;for(let Se=0,ge=ve.length;Se<ge;Se++)iu(ve[Se],D,Z,X)}function Up(E,D,Z,X){const{opaque:j,transmissive:ve,transparent:Se}=E;T.setupLightsView(Z),et===!0&&Re.setGlobalState(N.clippingPlanes,Z),X&&S.viewport(K.copy(X)),j.length>0&&Aa(j,D,Z),ve.length>0&&Aa(ve,D,Z),Se.length>0&&Aa(Se,D,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Fp(E,D,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){const be=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new fn(1,1,{generateMipmaps:!0,type:be?En:Dn,minFilter:Oi,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ve=T.state.transmissionRenderTarget[X.id],Se=X.viewport||K;ve.setSize(Se.z*N.transmissionResolutionScale,Se.w*N.transmissionResolutionScale);const ge=N.getRenderTarget(),Ee=N.getActiveCubeFace(),Ce=N.getActiveMipmapLevel();N.setRenderTarget(ve),N.getClearColor(Ie),Be=N.getClearAlpha(),Be<1&&N.setClearColor(16777215,.5),N.clear(),Mt&&ke.render(Z);const Ve=N.toneMapping;N.toneMapping=Si;const Ye=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),et===!0&&Re.setGlobalState(N.clippingPlanes,X),Aa(E,Z,X),J.updateMultisampleRenderTarget(ve),J.updateRenderTargetMipmap(ve),rt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let it=0,Pt=D.length;it<Pt;it++){const pt=D[it],{object:lt,geometry:qt,material:_e,group:an}=pt;if(_e.side===Di&&lt.layers.test(X.layers)){const Qe=_e.side;_e.side=wn,_e.needsUpdate=!0,Op(lt,Z,X,qt,_e,an),_e.side=Qe,_e.needsUpdate=!0,be=!0}}be===!0&&(J.updateMultisampleRenderTarget(ve),J.updateRenderTargetMipmap(ve))}N.setRenderTarget(ge,Ee,Ce),N.setClearColor(Ie,Be),Ye!==void 0&&(X.viewport=Ye),N.toneMapping=Ve}function Aa(E,D,Z){const X=D.isScene===!0?D.overrideMaterial:null;for(let j=0,ve=E.length;j<ve;j++){const Se=E[j],{object:ge,geometry:Ee,group:Ce}=Se;let Ve=Se.material;Ve.allowOverride===!0&&X!==null&&(Ve=X),ge.layers.test(Z.layers)&&Op(ge,D,Z,Ee,Ve,Ce)}}function Op(E,D,Z,X,j,ve){O!==null&&j.isNodeMaterial&&O.setObject(E,j),E.onBeforeRender(N,D,Z,X,j,ve),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(N,D,Z,X,E,ve),j.transparent===!0&&j.side===Di&&j.forceSinglePass===!1?(j.side=wn,j.needsUpdate=!0,N.renderBufferDirect(Z,D,X,j,E,ve),j.side=qr,j.needsUpdate=!0,N.renderBufferDirect(Z,D,X,j,E,ve),j.side=Di):N.renderBufferDirect(Z,D,X,j,E,ve),E.onAfterRender(N,D,Z,X,j,ve)}function Ra(E,D,Z){D.isScene!==!0&&(D=vn);const X=$.get(E),j=T.state.lights,ve=T.state.shadowsArray,Se=j.state.version,ge=ce.getParameters(E,j.state,ve,D,Z,T.state.lightProbeGridArray),Ee=ce.getProgramCacheKey(ge);let Ce=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?D.environment:null,X.fog=D.fog;const Ve=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=ae.get(E.envMap||X.environment,Ve),X.envMapRotation=X.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",li),Ce=new Map,X.programs=Ce);let Ye=Ce.get(Ee);if(Ye!==void 0){if(X.currentProgram===Ye&&X.lightsStateVersion===Se)return Bp(E,ge),Ye}else ge.uniforms=ce.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,Z,ge),E.onBeforeCompile(ge,N),Ye=ce.acquireProgram(ge,Ee),Ce.set(Ee,Ye),X.uniforms=ge.uniforms;const be=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(be.clippingPlanes=Re.uniform),Bp(E,ge),X.needsLights=Oy(E),X.lightsStateVersion=Se,X.needsLights&&(be.ambientLightColor.value=j.state.ambient,be.lightProbe.value=j.state.probe,be.sunLights.value=j.state.sun,be.sunLightShadows.value=j.state.sunShadow,be.directionalLights.value=j.state.directional,be.directionalLightShadows.value=j.state.directionalShadow,be.spotLights.value=j.state.spot,be.spotLightShadows.value=j.state.spotShadow,be.rectAreaLights.value=j.state.rectArea,be.ltc_1.value=j.state.rectAreaLTC1,be.ltc_2.value=j.state.rectAreaLTC2,be.pointLights.value=j.state.point,be.pointLightShadows.value=j.state.pointShadow,be.hemisphereLights.value=j.state.hemi,be.sunShadowMatrix.value=j.state.sunShadowMatrix,be.sunShadowCascade.value=j.state.sunShadowCascade,be.directionalShadowMatrix.value=j.state.directionalShadowMatrix,be.spotLightMatrix.value=j.state.spotLightMatrix,be.spotLightMap.value=j.state.spotLightMap,be.pointShadowMatrix.value=j.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=Ye,X.uniformsList=null,Ye}function kp(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Gl.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Bp(E,D){const Z=$.get(E);Z.outputColorSpace=D.outputColorSpace,Z.batching=D.batching,Z.batchingColor=D.batchingColor,Z.instancing=D.instancing,Z.instancingColor=D.instancingColor,Z.instancingMorph=D.instancingMorph,Z.skinning=D.skinning,Z.morphTargets=D.morphTargets,Z.morphNormals=D.morphNormals,Z.morphColors=D.morphColors,Z.morphTargetsCount=D.morphTargetsCount,Z.numClippingPlanes=D.numClippingPlanes,Z.numIntersection=D.numClipIntersection,Z.vertexAlphas=D.vertexAlphas,Z.vertexTangents=D.vertexTangents,Z.toneMapping=D.toneMapping}function Iy(E,D){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(D.matrixWorld);for(let Z=0,X=E.length;Z<X;Z++){const j=E[Z];if(j.texture!==null&&j.boundingBox.containsPoint(_))return j}return null}function Uy(E,D,Z,X,j){D.isScene!==!0&&(D=vn),J.resetTextureUnits();const ve=D.fog,Se=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?D.environment:null,ge=z===null?N.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ze.workingColorSpace,Ee=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ce=ae.get(X.envMap||Se,Ee),Ve=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ye=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),be=!!Z.morphAttributes.position,it=!!Z.morphAttributes.normal,Pt=!!Z.morphAttributes.color;let pt=Si;X.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(pt=N.toneMapping);const lt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,qt=lt!==void 0?lt.length:0,_e=$.get(X),an=T.state.lights;if(et===!0&&(ut===!0||E!==W)){const ft=E===W&&X.id===B;Re.setState(X,E,ft)}let Qe=!1;X.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==an.state.version||_e.outputColorSpace!==ge||j.isBatchedMesh&&_e.batching===!1||!j.isBatchedMesh&&_e.batching===!0||j.isBatchedMesh&&_e.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&_e.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&_e.instancing===!1||!j.isInstancedMesh&&_e.instancing===!0||j.isSkinnedMesh&&_e.skinning===!1||!j.isSkinnedMesh&&_e.skinning===!0||j.isInstancedMesh&&_e.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&_e.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&_e.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&_e.instancingMorph===!1&&j.morphTexture!==null||_e.envMap!==Ce||X.fog===!0&&_e.fog!==ve||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Re.numPlanes||_e.numIntersection!==Re.numIntersection)||_e.vertexAlphas!==Ve||_e.vertexTangents!==Ye||_e.morphTargets!==be||_e.morphNormals!==it||_e.morphColors!==Pt||_e.toneMapping!==pt||_e.morphTargetsCount!==qt||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,_e.__version=X.version);let Vn=_e.currentProgram;Qe===!0&&(Vn=Ra(X,D,j),O&&X.isNodeMaterial&&O.onUpdateProgram(X,Vn,_e));let ci=!1,Yi=!1,ns=!1;const at=Vn.getUniforms(),Ct=_e.uniforms;if(S.useProgram(Vn.program)&&(ci=!0,Yi=!0,ns=!0),X.id!==B&&(B=X.id,Yi=!0),_e.needsLights){const ft=Iy(T.state.lightProbeGridArray,j);_e.lightProbeGrid!==ft&&(_e.lightProbeGrid=ft,Yi=!0)}if(ci||W!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(k,"projectionMatrix",E.projectionMatrix),at.setValue(k,"viewMatrix",E.matrixWorldInverse);const qi=at.map.cameraPosition;qi!==void 0&&qi.setValue(k,_t.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&at.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&at.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,Yi=!0,ns=!0)}if(_e.needsLights&&(an.state.sunShadowMap.length>0&&at.setValue(k,"sunShadowMap",an.state.sunShadowMap,J),an.state.directionalShadowMap.length>0&&at.setValue(k,"directionalShadowMap",an.state.directionalShadowMap,J),an.state.spotShadowMap.length>0&&at.setValue(k,"spotShadowMap",an.state.spotShadowMap,J),an.state.pointShadowMap.length>0&&at.setValue(k,"pointShadowMap",an.state.pointShadowMap,J)),j.isSkinnedMesh){at.setOptional(k,j,"bindMatrix"),at.setOptional(k,j,"bindMatrixInverse");const ft=j.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),at.setValue(k,"boneTexture",ft.boneTexture,J))}j.isBatchedMesh&&(at.setOptional(k,j,"batchingTexture"),at.setValue(k,"batchingTexture",j._matricesTexture,J),at.setOptional(k,j,"batchingIdTexture"),at.setValue(k,"batchingIdTexture",j._indirectTexture,J),at.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&at.setValue(k,"batchingColorTexture",j._colorsTexture,J));const $i=Z.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&F.update(j,Z,Vn),(Yi||_e.receiveShadow!==j.receiveShadow)&&(_e.receiveShadow=j.receiveShadow,at.setValue(k,"receiveShadow",j.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&D.environment!==null&&(Ct.envMapIntensity.value=D.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=J2()),Yi){if(at.setValue(k,"toneMappingExposure",N.toneMappingExposure),_e.needsLights&&Fy(Ct,ns),ve&&X.fog===!0&&Ae.refreshFogUniforms(Ct,ve),Ae.refreshMaterialUniforms(Ct,X,ie,Q,T.state.transmissionRenderTarget[E.id]),_e.needsLights&&_e.lightProbeGrid){const ft=_e.lightProbeGrid;Ct.probesSH.value=ft.texture,Ct.probesMin.value.copy(ft.boundingBox.min),Ct.probesMax.value.copy(ft.boundingBox.max),Ct.probesResolution.value.copy(ft.resolution)}Gl.upload(k,kp(_e),Ct,J)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Gl.upload(k,kp(_e),Ct,J),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&at.setValue(k,"center",j.center),at.setValue(k,"modelViewMatrix",j.modelViewMatrix),at.setValue(k,"normalMatrix",j.normalMatrix),at.setValue(k,"modelMatrix",j.matrixWorld),X.uniformsGroups!==void 0){const ft=X.uniformsGroups;for(let qi=0,is=ft.length;qi<is;qi++){const Vp=ft[qi];re.update(Vp,Vn),re.bind(Vp,Vn)}}return Vn}function Fy(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.sunLights.needsUpdate=D,E.sunLightShadows.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Oy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,D,Z){const X=$.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(E.texture).__webglTexture=D,$.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,D){const Z=$.get(E);Z.__webglFramebuffer=D,Z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,Z=0){z=E,q=D,G=Z;let X=null,j=!1,ve=!1;if(E){const ge=$.get(E);if(ge.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(k.FRAMEBUFFER,ge.__webglFramebuffer),K.copy(E.viewport),se.copy(E.scissor),me=E.scissorTest,S.viewport(K),S.scissor(se),S.setScissorTest(me),B=-1;return}else if(ge.__webglFramebuffer===void 0)J.setupRenderTarget(E);else if(ge.__hasExternalTextures)J.rebindTextures(E,$.get(E.texture).__webglTexture,$.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ve=E.depthTexture;if(ge.__boundDepthTexture!==Ve){if(Ve!==null&&$.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(E)}}const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ve=!0);const Ce=$.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?X=Ce[D][Z]:X=Ce[D],j=!0):E.samples>0&&J.useMultisampledRTT(E)===!1?X=$.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?X=Ce[Z]:X=Ce,K.copy(E.viewport),se.copy(E.scissor),me=E.scissorTest}else K.copy(ye).multiplyScalar(ie).floor(),se.copy(We).multiplyScalar(ie).floor(),me=Dt;if(Z!==0&&(X=Y),S.bindFramebuffer(k.FRAMEBUFFER,X)&&S.drawBuffers(E,X),S.viewport(K),S.scissor(se),S.setScissorTest(me),j){const ge=$.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,Z)}else if(ve){const ge=D;for(let Ee=0;Ee<E.textures.length;Ee++){const Ce=$.get(E.textures[Ee]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,Z,ge)}}else if(E!==null&&Z!==0){const ge=$.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ge.__webglTexture,Z)}B=-1};function zp(E){const D=$.get(E);return(D.__readFormat!==E.format||D.__readType!==E.type)&&(D.__readFormat=E.format,D.__readType=E.type,D.__formatReadable=R.textureFormatReadable(E.format),D.__typeReadable=R.textureTypeReadable(E.type)),D}this.readRenderTargetPixels=function(E,D,Z,X,j,ve,Se,ge=0){if(!(E&&E.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){S.bindFramebuffer(k.FRAMEBUFFER,Ee);try{const Ce=E.textures[ge],Ve=Ce.format,Ye=Ce.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ge);const be=zp(Ce);if(be.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-X&&Z>=0&&Z<=E.height-j&&k.readPixels(D,Z,X,j,fe.convert(Ve),fe.convert(Ye),ve)}finally{const Ce=z!==null?$.get(z).__webglFramebuffer:null;S.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,D,Z,X,j,ve,Se,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(D>=0&&D<=E.width-X&&Z>=0&&Z<=E.height-j){S.bindFramebuffer(k.FRAMEBUFFER,Ee);const Ce=E.textures[ge],Ve=Ce.format,Ye=Ce.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ge);const be=zp(Ce);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,it),k.bufferData(k.PIXEL_PACK_BUFFER,ve.byteLength,k.STREAM_READ),k.readPixels(D,Z,X,j,fe.convert(Ve),fe.convert(Ye),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Pt=z!==null?$.get(z).__webglFramebuffer:null;S.bindFramebuffer(k.FRAMEBUFFER,Pt);const pt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Z1(k,pt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,it),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ve),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(it),k.deleteSync(pt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,D=null,Z=0){const X=Math.pow(2,-Z),j=Math.floor(E.image.width*X),ve=Math.floor(E.image.height*X),Se=D!==null?D.x:0,ge=D!==null?D.y:0;J.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,Se,ge,j,ve),S.unbindTexture()},this.copyTextureToTexture=function(E,D,Z=null,X=null,j=0,ve=0){let Se,ge,Ee,Ce,Ve,Ye,be,it,Pt;const pt=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(Z!==null)Se=Z.max.x-Z.min.x,ge=Z.max.y-Z.min.y,Ee=Z.isBox3?Z.max.z-Z.min.z:1,Ce=Z.min.x,Ve=Z.min.y,Ye=Z.isBox3?Z.min.z:0;else{const Ct=Math.pow(2,-j);Se=Math.floor(pt.width*Ct),ge=Math.floor(pt.height*Ct),E.isDataArrayTexture?Ee=pt.depth:E.isData3DTexture?Ee=Math.floor(pt.depth*Ct):Ee=1,Ce=0,Ve=0,Ye=0}X!==null?(be=X.x,it=X.y,Pt=X.z):(be=0,it=0,Pt=0);const lt=fe.convert(D.format),qt=fe.convert(D.type);let _e;D.isData3DTexture?(J.setTexture3D(D,0),_e=k.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(J.setTexture2DArray(D,0),_e=k.TEXTURE_2D_ARRAY):(J.setTexture2D(D,0),_e=k.TEXTURE_2D),S.activeTexture(k.TEXTURE0),S.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,D.flipY),S.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),S.pixelStorei(k.UNPACK_ALIGNMENT,D.unpackAlignment);const an=S.getParameter(k.UNPACK_ROW_LENGTH),Qe=S.getParameter(k.UNPACK_IMAGE_HEIGHT),Vn=S.getParameter(k.UNPACK_SKIP_PIXELS),ci=S.getParameter(k.UNPACK_SKIP_ROWS),Yi=S.getParameter(k.UNPACK_SKIP_IMAGES);S.pixelStorei(k.UNPACK_ROW_LENGTH,pt.width),S.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pt.height),S.pixelStorei(k.UNPACK_SKIP_PIXELS,Ce),S.pixelStorei(k.UNPACK_SKIP_ROWS,Ve),S.pixelStorei(k.UNPACK_SKIP_IMAGES,Ye);const ns=E.isDataArrayTexture||E.isData3DTexture,at=D.isDataArrayTexture||D.isData3DTexture;if(E.isDepthTexture){const Ct=$.get(E),$i=$.get(D),ft=$.get(Ct.__renderTarget),qi=$.get($i.__renderTarget);S.bindFramebuffer(k.READ_FRAMEBUFFER,ft.__webglFramebuffer),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let is=0;is<Ee;is++)ns&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(E).__webglTexture,j,Ye+is),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(D).__webglTexture,ve,Pt+is)),k.blitFramebuffer(Ce,Ve,Se,ge,be,it,Se,ge,k.DEPTH_BUFFER_BIT,k.NEAREST);S.bindFramebuffer(k.READ_FRAMEBUFFER,null),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||$.has(E)){const Ct=$.get(E),$i=$.get(D);S.bindFramebuffer(k.READ_FRAMEBUFFER,P),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,V);for(let ft=0;ft<Ee;ft++)ns?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ct.__webglTexture,j,Ye+ft):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ct.__webglTexture,j),at?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$i.__webglTexture,ve,Pt+ft):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,$i.__webglTexture,ve),j!==0?k.blitFramebuffer(Ce,Ve,Se,ge,be,it,Se,ge,k.COLOR_BUFFER_BIT,k.NEAREST):at?k.copyTexSubImage3D(_e,ve,be,it,Pt+ft,Ce,Ve,Se,ge):k.copyTexSubImage2D(_e,ve,be,it,Ce,Ve,Se,ge);S.bindFramebuffer(k.READ_FRAMEBUFFER,null),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(_e,ve,be,it,Pt,Se,ge,Ee,lt,qt,pt.data):D.isCompressedArrayTexture?k.compressedTexSubImage3D(_e,ve,be,it,Pt,Se,ge,Ee,lt,pt.data):k.texSubImage3D(_e,ve,be,it,Pt,Se,ge,Ee,lt,qt,pt):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ve,be,it,Se,ge,lt,qt,pt.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ve,be,it,pt.width,pt.height,lt,pt.data):k.texSubImage2D(k.TEXTURE_2D,ve,be,it,Se,ge,lt,qt,pt);S.pixelStorei(k.UNPACK_ROW_LENGTH,an),S.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Qe),S.pixelStorei(k.UNPACK_SKIP_PIXELS,Vn),S.pixelStorei(k.UNPACK_SKIP_ROWS,ci),S.pixelStorei(k.UNPACK_SKIP_IMAGES,Yi),ve===0&&D.generateMipmaps&&k.generateMipmap(_e),S.unbindTexture()},this.initRenderTarget=function(E){$.get(E).__webglFramebuffer===void 0&&J.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){q=0,G=0,z=null,S.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const Wl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ba{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const tP=new Sp(-1,1,1,-1,0,1);class nP extends Cn{constructor(){super(),this.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bn([0,2,0,0,2,0],2))}}const iP=new nP;class V_{constructor(e){this._mesh=new Ut(iP,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tP)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class H_ extends ba{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cc.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new V_(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class h0 extends ba{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class rP extends ba{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sP{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ne);this._width=i.width,this._height=i.height,n=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new H_(Wl),this.copyPass.material.blending=yi,this.timer=new eT}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}h0!==void 0&&(o instanceof h0?i=!0:o instanceof rP&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class oP extends ba{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ge}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const aP={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class no extends ba{constructor(e,n=1,i,r){super(),this.strength=n,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new Ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(s,o,{type:En,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new fn(s,o,{type:En,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new fn(s,o,{type:En,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=aP;this.highPassUniforms=Cc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ne(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Cc.clone(Wl.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:Wl.vertexShader,fragmentShader:Wl.fragmentShader,premultipliedAlpha:!0,blending:gf,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ge,this._oldClearAlpha=1,this._basic=new Xs,this._fsQuad=new V_(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ne(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=no.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=no.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const n=[],i=e/3;for(let o=0;o<e;o++)n.push(.39894*Math.exp(-.5*o*o/(i*i))/i);const r=[],s=[];for(let o=1;o<e;o+=2){const a=n[o],l=o+1<e?n[o+1]:0,c=a+l;r.push((o*a+(o+1)*l)/c),s.push(c)}return new rn({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},centerWeight:{value:n[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}no.BlurDirectionX=new Ne(1,0);no.BlurDirectionY=new Ne(0,1);const lP={uniforms:{tDiffuse:{value:null},uTime:{value:0},uMouse:{value:new Ne(.5,.5)},uAspect:{value:1},uStrength:{value:0},uFrequency:{value:5.5},uSpeed:{value:3.2},uRadius:{value:.48},uClickRipple:{value:new vt(.5,.5,0,0)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uAspect;
    uniform float uStrength;
    uniform float uFrequency;
    uniform float uSpeed;
    uniform float uRadius;
    uniform vec4 uClickRipple; // xy: position, z: age, w: intensity

    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 totalWarp = vec2(0.0);

      // ==============================================================
      // 1. VERTEX3D EXACT CHROMATIC S-CURVE JELLY RIPPLE
      // ==============================================================
      if (uStrength > 0.0004) {
        vec2 dir = uv - uMouse;
        dir.x *= uAspect;
        float dist = length(dir);

        // Broad wave (frequency ~5.5 creates the broad S-curve bend across scene)
        float wave = sin(dist * uFrequency - uTime * uSpeed);

        // Diagonal swirl twist (creates the characteristic lateral S-shear)
        float twist = cos(dist * 9.0 - uTime * 2.2) * 0.55;

        // Smooth falloff mask around cursor wake
        float mask = 1.0 - smoothstep(0.0, uRadius, dist);

        // Direction vectors with perpendicular twist
        vec2 normDir = dir / max(dist, 0.001);
        vec2 twistVec = vec2(-normDir.y, normDir.x) * twist;

        // Fluid displacement
        vec2 warp = (normDir + twistVec) * wave * uStrength * mask;
        warp.x /= max(uAspect, 0.001); // restore UV coordinates

        totalWarp += warp;
      }

      // ==============================================================
      // 2. EXPANDING CLICK IMPULSE RIPPLE
      // ==============================================================
      if (uClickRipple.w > 0.005) {
        vec2 cDir = uv - uClickRipple.xy;
        cDir.x *= uAspect;
        float cDist = length(cDir);
        float ringRadius = uClickRipple.z * 0.75;
        float ringDist = abs(cDist - ringRadius);
        float ringMask = exp(-ringDist * 12.0) * exp(-cDist * 2.2) * uClickRipple.w;
        float ringWave = sin((cDist - ringRadius) * 24.0) * ringMask;
        vec2 cNormDir = cDir / max(cDist, 0.001);
        vec2 cWarp = cNormDir * ringWave * 0.025;
        cWarp.x /= max(uAspect, 0.001);
        totalWarp += cWarp;
      }

      // ==============================================================
      // 3. CHROMATIC DISPERSION (RGB SPLIT FOR "WET" REFRACTION)
      // ==============================================================
      float totalIntensity = length(totalWarp);
      float wetMask = smoothstep(0.0, 0.015, totalIntensity);

      vec2 offsetR = totalWarp;
      vec2 offsetG = totalWarp * 1.75 + vec2(0.0035 * wetMask, 0.0);
      vec2 offsetB = totalWarp * 2.70 + vec2(0.0, 0.0035 * wetMask);

      float r = texture2D(tDiffuse, clamp(uv + offsetR, 0.0, 1.0)).r;
      float g = texture2D(tDiffuse, clamp(uv + offsetG, 0.0, 1.0)).g;
      float b = texture2D(tDiffuse, clamp(uv + offsetB, 0.0, 1.0)).b;
      vec3 color = vec3(r, g, b);

      // ==============================================================
      // 4. SUBTLE 24 FPS FILM GRAIN
      // ==============================================================
      float steppedTime = floor(uTime * 24.0) / 24.0;
      float grain = fract(sin(dot(uv * 6.5 + vec2(steppedTime * 0.17, steppedTime * 0.43), vec2(12.9898, 78.233))) * 43758.5453);
      color += (grain - 0.5) * 0.022;

      // ==============================================================
      // 5. CINEMATIC VIGNETTE
      // ==============================================================
      vec2 centerDiff = uv - vec2(0.5);
      float distCenter = length(centerDiff);
      float vignette = smoothstep(1.3, 0.45, distCenter);
      color *= (0.82 + 0.18 * vignette);

      gl_FragColor = vec4(color, 1.0);
    }
  `};class cP{constructor(e,n){$e(this,"pass");$e(this,"targetMouse",new Ne(.5,.5));$e(this,"simMouse",new Ne(.5,.5));$e(this,"prevMouse",new Ne(.5,.5));$e(this,"currentStrength",0);$e(this,"targetStrength",0);$e(this,"clickRipple",new vt(.5,.5,0,0));this.pass=new H_(lP),this.updateSize(e,n)}updateSize(e,n){const i=e/Math.max(1,n);this.pass.uniforms.uAspect&&(this.pass.uniforms.uAspect.value=i)}addCursorMovement(e,n,i){const r=e-this.prevMouse.x,s=n-this.prevMouse.y,o=Math.sqrt(r*r+s*s);if(this.targetMouse.set(e,n),this.prevMouse.set(e,n),o>4e-4){const a=Math.min(.042,.016+o*.45);this.targetStrength=Math.max(this.targetStrength,a)}}spawnRipple(e,n,i=1){this.clickRipple.set(e,n,0,i),this.targetStrength=Math.max(this.targetStrength,.045),this.currentStrength=Math.max(this.currentStrength,.035)}update(e,n){this.pass.uniforms.uTime.value=n,this.simMouse.lerp(this.targetMouse,.07),this.pass.uniforms.uMouse.value.copy(this.simMouse),this.currentStrength=mb.lerp(this.currentStrength,this.targetStrength,.09),this.targetStrength*=Math.exp(-e*.95),this.pass.uniforms.uStrength.value=this.currentStrength,this.clickRipple.w>.001&&(this.clickRipple.z+=e*.75,this.clickRipple.w*=Math.exp(-e*.95),this.pass.uniforms.uClickRipple.value.copy(this.clickRipple))}}function uP(t,e,n,i,r=512,s=256){const o=document.createElement("canvas");o.width=r,o.height=s;const a=o.getContext("2d");if(!a)return new eo(o);a.fillStyle="#030408",a.fillRect(0,0,r,s),a.strokeStyle=i,a.lineWidth=6,a.shadowColor=n,a.shadowBlur=18,a.strokeRect(14,14,r-28,s-28),a.strokeStyle=n,a.lineWidth=2,a.strokeRect(22,22,r-44,s-44),a.fillStyle="#ffffff",a.font=`bold ${Math.floor(s*.28)}px "Courier New", monospace, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.shadowColor=n,a.shadowBlur=24,a.fillText(t,r/2,s*.42),e&&(a.fillStyle=n,a.font=`600 ${Math.floor(s*.14)}px monospace, sans-serif`,a.shadowBlur=14,a.fillText(e,r/2,s*.74));const l=new eo(o);return l.generateMipmaps=!0,l.minFilter=Oi,l}function dP(t,e,n,i,r,s){const o=document.createElement("canvas");o.width=640,o.height=400;const a=o.getContext("2d");if(!a)return new eo(o);a.fillStyle="rgba(4, 7, 16, 0.95)",a.fillRect(0,0,640,400),a.strokeStyle="rgba(255, 255, 255, 0.04)",a.lineWidth=1;for(let u=30;u<610;u+=30)a.beginPath(),a.moveTo(u,20),a.lineTo(u,380),a.stroke();for(let u=30;u<370;u+=30)a.beginPath(),a.moveTo(20,u),a.lineTo(620,u),a.stroke();a.strokeStyle=r,a.lineWidth=4,a.shadowColor=r,a.shadowBlur=16,a.strokeRect(16,16,608,368),a.strokeStyle="#ffffff",a.lineWidth=3,a.shadowBlur=8;const l=24;a.beginPath(),a.moveTo(12,12+l),a.lineTo(12,12),a.lineTo(12+l,12),a.moveTo(628-l,12),a.lineTo(628,12),a.lineTo(628,12+l),a.moveTo(12,388-l),a.lineTo(12,388),a.lineTo(12+l,388),a.moveTo(628-l,388),a.lineTo(628,388),a.lineTo(628,388-l),a.stroke(),a.shadowBlur=0,a.fillStyle=r,a.font='bold 22px "Courier New", monospace',a.textAlign="left",a.fillText(`// STATION ${t}`,36,56),a.fillStyle="rgba(255, 255, 255, 0.12)",a.fillRect(450,36,150,28),a.fillStyle="#ffffff",a.font='bold 14px "Courier New", monospace',a.textAlign="center",a.fillText(i,525,55),a.fillStyle="#ffffff",a.font='bold 36px "Courier New", monospace, sans-serif',a.textAlign="left",a.shadowColor=r,a.shadowBlur=16,a.fillText(e,36,120),a.fillStyle=s,a.font='600 20px "Courier New", monospace',a.shadowBlur=8,a.fillText(n,36,160),a.strokeStyle=r,a.lineWidth=2,a.beginPath(),a.moveTo(36,220);for(let u=0;u<560;u+=20){const h=220+Math.sin(u*.08)*18+(u%40===0?12:-6);a.lineTo(36+u,h)}a.stroke(),a.fillStyle="rgba(255, 255, 255, 0.45)",a.font='13px "Courier New", monospace',a.fillText(`SYS_NODE: [READY]   BUFFER: 0x${t}AA   STATUS: ACTIVE`,36,335),a.fillStyle="rgba(255, 255, 255, 0.1)",a.fillRect(36,350,560,6),a.fillStyle=r,a.fillRect(36,350,380,6);const c=new eo(o);return c.generateMipmaps=!0,c.minFilter=Oi,c}function fP(){const t=document.createElement("canvas");t.width=512,t.height=1024;const e=t.getContext("2d");if(!e)return new eo(t);e.fillStyle="#080b14",e.fillRect(0,0,512,1024);const n=16,i=40,r=18,s=14,o=14,a=12;for(let c=0;c<i;c++)for(let u=0;u<n;u++){const h=12+u*(r+o),d=14+c*(s+a),p=Math.random();p>.78?(e.fillStyle="rgba(0, 240, 255, 0.85)",e.fillRect(h,d,r,s)):p>.65?(e.fillStyle="rgba(255, 183, 3, 0.8)",e.fillRect(h,d,r,s)):p>.58?(e.fillStyle="rgba(255, 0, 128, 0.75)",e.fillRect(h,d,r,s)):(e.fillStyle="rgba(16, 22, 38, 0.6)",e.fillRect(h,d,r,s))}const l=new eo(t);return l.wrapS=da,l.wrapT=da,l.repeat.set(1,3),l}function hP(){const t=new Ls,e=[],n=new pr(60,120,1,1),i=new gl({color:263433,roughness:.18,metalness:.85,envMapIntensity:1.6}),r=new Ut(n,i);r.rotation.x=-Math.PI/2,r.position.set(0,0,-22),t.add(r),e.push(n,i);const s=new pr(14,80),o=new Xs({color:396056,transparent:!0,opacity:.7}),a=new Ut(s,o);a.rotation.x=-Math.PI/2,a.position.set(0,.02,-20),t.add(a),e.push(s,o);const l=fP();e.push(l);const c=new gl({map:l,color:2369595,roughness:.7,metalness:.3});e.push(c);const u=new ki(10,40,85),h=new Ut(u,c);h.position.set(-10,20,-22),t.add(h),e.push(u);const d=new ki(10,40,85),p=new Ut(d,c);p.position.set(10,20,-22),t.add(p),e.push(d);const g=new ki(36,60,8),x=new gl({map:l,color:856610,roughness:.85}),m=new Ut(g,x);m.position.set(0,30,-62),t.add(m),e.push(g,x);const f=[];[{index:"00",title:"RAVI PATEL",subtitle:"GAME DEV & GRAPHICS ENGINEER",tag:"OVERVIEW",color:"#00f0ff",accent:"#38bdf8",pos:new L(-2.6,2.8,3.5),rotY:.22},{index:"01",title:"ARCHITECTURE",subtitle:"UNITY • UNREAL ENGINE 5 • THREE.JS",tag:"EXPERIENCE",color:"#a855f7",accent:"#c084fc",pos:new L(2.6,2.9,-1.5),rotY:-.22},{index:"02",title:"SMARTSCOPY",subtitle:"REAL-TIME SURGICAL AR ENGINE",tag:"FLAGSHIP",color:"#00f0ff",accent:"#22d3ee",pos:new L(-2.6,3,-6.5),rotY:.22},{index:"03",title:"MIMADIM PLUS",subtitle:"PARAMETRIC CAD GENERATOR",tag:"ENGINEERING",color:"#ffb700",accent:"#fbbf24",pos:new L(2.6,3.1,-11.5),rotY:-.22},{index:"04",title:"NO PAIN HEALS",subtitle:"CLINICAL REHAB SENSOR MATRIX",tag:"MED-TECH",color:"#10b981",accent:"#34d399",pos:new L(-2.6,3.2,-16.5),rotY:.22},{index:"05",title:"MOTION AI",subtitle:"COMPUTER VISION TELEMETRY",tag:"EDGE AI",color:"#ff007f",accent:"#f43f5e",pos:new L(2.6,3.3,-21.5),rotY:-.22},{index:"06",title:"CORE SYSTEMS",subtitle:"GLSL • WEBGPU • C++ ARCHITECTURE",tag:"SKILLS",color:"#38bdf8",accent:"#7dd3fc",pos:new L(-2.6,3.4,-26.5),rotY:.22},{index:"07",title:"TRANSMISSION",subtitle:"INITIATE DIRECT COMMS LINK",tag:"CONNECT",color:"#ff007f",accent:"#00f0ff",pos:new L(0,3.6,-31.5),rotY:0}].forEach((P,V)=>{const q=new Ls;q.position.copy(P.pos),q.rotation.y=P.rotY;const G=dP(P.index,P.title,P.subtitle,P.tag,P.color,P.accent);e.push(G);const z=new pr(3.2,2),B=new Xs({map:G,transparent:!0,opacity:.94,toneMapped:!1}),W=new Ut(z,B);q.add(W),e.push(z,B);const K=new ki(3.22,2.02,.08),se=new gl({color:263694,roughness:.2,metalness:.85,transparent:!0,opacity:.88}),me=new Ut(K,se);me.position.z=-.05,q.add(me),e.push(K,se);const Ie=new zb(K),Be=new Hl({color:new Ge(P.color),linewidth:2}),Oe=new Ug(Ie,Be);Oe.position.z=-.05,q.add(Oe),e.push(Ie,Be),t.add(q),f.push({group:q,initialY:P.pos.y,bobSpeed:1.2+V*.15,bobOffset:V*.85})});const w=[];[{title:"ネオ東京",sub:"SYS-01",color:"#ff007f",glow:"#9b0050",pos:new L(-4.8,7.5,0),rot:Math.PI/2,flicker:11},{title:"SHINJUKU",sub:"ARCADE",color:"#ffb700",glow:"#b45309",pos:new L(4.8,6.5,-4),rot:-Math.PI/2,flicker:0},{title:"MATRIX",sub:"GRAPHICS",color:"#10b981",glow:"#065f46",pos:new L(-4.8,5.8,-14),rot:Math.PI/2,flicker:0},{title:"CYBER CITY",sub:"WEBGPU",color:"#ff007f",glow:"#be185d",pos:new L(4.8,8.2,-19),rot:-Math.PI/2,flicker:9},{title:"SMSY-GEN",sub:"CREATIVE",color:"#00f0ff",glow:"#0284c7",pos:new L(-4.8,6.2,-25),rot:Math.PI/2,flicker:0},{title:"OVERCLOCK",sub:"REALTIME",color:"#ffb700",glow:"#b45309",pos:new L(4.8,7.5,-30),rot:-Math.PI/2,flicker:14}].forEach(P=>{const V=uP(P.title,P.sub,P.color,P.glow,384,192);e.push(V);const q=new pr(3,1.4),G=new Xs({map:V,transparent:!0,toneMapped:!1}),z=new Ut(q,G);z.position.copy(P.pos),z.rotation.y=P.rot,t.add(z),e.push(q,G),w.push({mesh:z,flickerRate:P.flicker})});const b=new Hl({color:1317420,linewidth:1});e.push(b),[4,-2,-8,-14,-20,-26,-32,-38].forEach(P=>{const q=new Hb([new L(-4.9,9+Math.random()*2,P),new L(0,6.5+Math.random()*1.5,P+.5),new L(4.9,9+Math.random()*2,P)]).getPoints(28),G=new Cn().setFromPoints(q),z=new C_(G,b);t.add(z),e.push(G)});const C=1e3,y=new Cn,A=new Float32Array(C*6);for(let P=0;P<C;P++){const V=(Math.random()-.5)*16,q=Math.random()*22,G=(Math.random()-.5)*65-15,z=.5+Math.random()*.45,B=.08;A[P*6+0]=V,A[P*6+1]=q,A[P*6+2]=G,A[P*6+3]=V+B,A[P*6+4]=q-z,A[P*6+5]=G}y.setAttribute("position",new Mi(A,3));const N=new Hl({color:5032432,transparent:!0,opacity:.35}),I=new Ug(y,N);return t.add(I),e.push(y,N),{group:t,update:(P,V,q,G,z)=>{f.forEach(se=>{se.group.position.y=se.initialY+Math.sin(V*se.bobSpeed+se.bobOffset)*.07});const B=y.attributes.position,W=B.array,K=26*P;for(let se=0;se<C;se++)if(W[se*6+1]-=K,W[se*6+4]-=K,W[se*6+1]<0){const me=20+Math.random()*4,Ie=.5+Math.random()*.45;W[se*6+1]=me,W[se*6+4]=me-Ie}B.needsUpdate=!0,w.forEach(se=>{if(se.flickerRate>0){const me=Math.sin(V*se.flickerRate)*Math.cos(V*2.3),Ie=se.mesh.material;Ie.opacity=me>.82?.35:1}})},dispose:()=>{e.forEach(P=>{"dispose"in P&&typeof P.dispose=="function"&&P.dispose()}),t.clear()}}}const pP=[{sectionId:"home",scrollProgress:0,position:new L(.2,2.7,7.8),target:new L(-.6,2.8,3.5)},{sectionId:"about",scrollProgress:.14,position:new L(-.3,2.8,2.8),target:new L(.7,2.9,-1.5)},{sectionId:"smartscopy",scrollProgress:.28,position:new L(.4,2.9,-2.2),target:new L(-.7,3,-6.5)},{sectionId:"mimadim",scrollProgress:.43,position:new L(-.4,3,-7.2),target:new L(.7,3.1,-11.5)},{sectionId:"nopainheals",scrollProgress:.57,position:new L(.4,3.1,-12.2),target:new L(-.7,3.2,-16.5)},{sectionId:"vision-ai",scrollProgress:.71,position:new L(-.4,3.2,-17.2),target:new L(.7,3.3,-21.5)},{sectionId:"skills",scrollProgress:.85,position:new L(.3,3.3,-22.2),target:new L(-.7,3.4,-26.5)},{sectionId:"contact",scrollProgress:1,position:new L(0,3.5,-27.2),target:new L(0,3.6,-31.5)}];class mP{constructor(e,n=pP){$e(this,"camera");$e(this,"waypoints");$e(this,"currentPosition",new L);$e(this,"currentTarget",new L);$e(this,"targetPosition",new L);$e(this,"targetLookAt",new L);$e(this,"mouseOffset",new Ne(0,0));$e(this,"currentMouseOffset",new Ne(0,0));this.camera=e,this.waypoints=n,n.length>0&&(this.currentPosition.copy(n[0].position),this.currentTarget.copy(n[0].target),this.targetPosition.copy(n[0].position),this.targetLookAt.copy(n[0].target))}setMouseOffset(e,n){this.mouseOffset.set(e*.45,n*.22)}update(e,n){const i=Math.max(0,Math.min(1,e));let r=0;for(let p=0;p<this.waypoints.length-1;p++)if(i>=this.waypoints[p].scrollProgress&&i<=this.waypoints[p+1].scrollProgress){r=p;break}const s=Math.min(r+1,this.waypoints.length-1),o=this.waypoints[r],a=this.waypoints[s],l=a.scrollProgress-o.scrollProgress,c=l>0?(i-o.scrollProgress)/l:0,u=.5-.5*Math.cos(c*Math.PI);this.targetPosition.lerpVectors(o.position,a.position,u),this.targetLookAt.lerpVectors(o.target,a.target,u);const h=Math.min(1,n*5.2);this.currentMouseOffset.lerp(this.mouseOffset,h);const d=Math.min(1,n*3.8);this.currentPosition.lerp(this.targetPosition,d),this.currentTarget.lerp(this.targetLookAt,d),this.camera.position.set(this.currentPosition.x+this.currentMouseOffset.x,this.currentPosition.y-this.currentMouseOffset.y*.75,this.currentPosition.z),this.camera.lookAt(this.currentTarget.x+this.currentMouseOffset.x*.35,this.currentTarget.y-this.currentMouseOffset.y*.35,this.currentTarget.z),this.camera.rotation.z=-this.currentMouseOffset.x*.035}}class gP{constructor(){$e(this,"container",null);$e(this,"scene");$e(this,"camera");$e(this,"cameraController");$e(this,"renderer",null);$e(this,"composer",null);$e(this,"bloomPass",null);$e(this,"cinematicPass",null);$e(this,"environment",null);$e(this,"activeStationId","home");$e(this,"cursorU",.5);$e(this,"cursorV",.5);$e(this,"mouseNormX",0);$e(this,"mouseNormY",0);$e(this,"animationFrameId",null);$e(this,"isDestroyed",!1);$e(this,"isIdle",!1);$e(this,"scrollProgress",0);$e(this,"lastTime",0);$e(this,"clock");$e(this,"onTick");this.scene=new Rb,this.scene.fog=new xp(263693,.035),this.camera=new Ln(45,1,.1,100),this.camera.position.set(.2,2.7,7.8),this.cameraController=new mP(this.camera),this.clock=new nT}init(e,n){this.container=e,this.isDestroyed=!1;try{const i=e.clientWidth||window.innerWidth,r=e.clientHeight||window.innerHeight;this.renderer=new eP({powerPreference:"high-performance",antialias:!0,alpha:!0,stencil:!1,depth:!0}),this.renderer.setSize(i,r);const s=Math.min(window.devicePixelRatio||1,1.75);return this.renderer.setPixelRatio(s),this.renderer.toneMapping=ap,this.renderer.toneMappingExposure=1.2,this.renderer.outputColorSpace=Nn,this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",e.appendChild(this.renderer.domElement),this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.setupLighting(),this.environment=hP(),this.scene.add(this.environment.group),this.setupPostProcessing(i,r),n!=null&&n.onLoaded&&n.onLoaded(),this.startRenderLoop(),!0}catch(i){return console.warn("StudioScene: WebGL initialization failed, fallback enabled.",i),n!=null&&n.onError&&i instanceof Error&&n.onError(i),!1}}setupLighting(){const e=new Zb(461592,.85);this.scene.add(e);const n=new _l(16711807,2.6,25);n.position.set(-4.5,4.5,0),this.scene.add(n);const i=new _l(61695,2.8,25);i.position.set(4.5,5,-4),this.scene.add(i);const r=new _l(16758528,1.6,20);r.position.set(0,1,2),this.scene.add(r);const s=new _l(8141549,2.2,35);s.position.set(0,7,-25),this.scene.add(s)}setupPostProcessing(e,n){if(this.renderer)try{this.composer=new sP(this.renderer);const i=new oP(this.scene,this.camera);this.composer.addPass(i),this.bloomPass=new no(new Ne(e,n),.75,.42,.7),this.composer.addPass(this.bloomPass),this.cinematicPass=new cP(e,n),this.composer.addPass(this.cinematicPass.pass)}catch(i){console.warn("Postprocessing bloom unsupported, using standard renderer.",i),this.composer=null,this.cinematicPass=null}}resize(){if(!this.container||!this.renderer)return;const e=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.composer&&this.composer.setSize(e,n),this.cinematicPass&&this.cinematicPass.updateSize(e,n)}setIdle(e){this.isIdle=e}startRenderLoop(){const e=n=>{if(this.isDestroyed||(this.animationFrameId=requestAnimationFrame(e),this.isIdle&&n-this.lastTime<66))return;this.lastTime=n;const i=this.clock.getDelta(),r=this.clock.getElapsedTime();this.cameraController.update(this.scrollProgress,i),this.environment&&this.environment.update(i,r,this.mouseNormX,this.mouseNormY,this.camera),this.cinematicPass&&this.cinematicPass.update(i,r),this.onTick&&this.onTick(i,r),this.composer?this.composer.render():this.renderer&&this.renderer.render(this.scene,this.camera)};this.animationFrameId=requestAnimationFrame(e)}setActiveStation(e){this.activeStationId=e}setScrollProgress(e){this.scrollProgress=e}setMouseOffset(e,n){this.mouseNormX=e,this.mouseNormY=n,this.cameraController.setMouseOffset(e,n)}onCursorMove(e,n,i){this.cursorU=e,this.cursorV=n,this.cinematicPass&&this.cinematicPass.addCursorMovement(e,n,i)}onCursorClick(e,n){this.cinematicPass&&this.cinematicPass.spawnRipple(e,n,1)}destroy(){this.isDestroyed=!0,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.renderer&&this.renderer.domElement&&this.renderer.domElement.parentElement&&(this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),this.renderer.dispose(),this.renderer=null),this.composer&&(this.composer.dispose(),this.composer=null),this.environment&&(this.environment.dispose(),this.environment=null),this.scene.traverse(e=>{e instanceof Ut&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material&&e.material.dispose())}),this.scene.clear()}}const vP=({progress:t,isLoaded:e})=>{const i=2*Math.PI*48,r=i-t/100*i;return M.jsxs("div",{className:`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#07080d]/90 backdrop-blur-xl transition-all duration-700 ${e?"opacity-0 pointer-events-none":"opacity-100"}`,children:[M.jsxs("div",{className:"relative flex items-center justify-center w-36 h-36",children:[M.jsx("div",{className:"absolute inset-0 rounded-full bg-cyan-500/10 blur-xl animate-pulse"}),M.jsxs("svg",{className:"w-32 h-32 -rotate-90 transform",children:[M.jsx("circle",{cx:"64",cy:"64",r:48,className:"stroke-slate-800",strokeWidth:"3",fill:"transparent"}),M.jsx("circle",{cx:"64",cy:"64",r:48,className:"stroke-cyan-400 transition-all duration-300 ease-out",strokeWidth:"3.5",strokeDasharray:i,strokeDashoffset:r,strokeLinecap:"round",fill:"transparent"})]}),M.jsxs("div",{className:"absolute flex flex-col items-center justify-center",children:[M.jsxs("span",{className:"font-mono text-xl font-bold tracking-tight text-cyan-400",children:[Math.floor(t),"%"]}),M.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-slate-400 mt-0.5",children:"READY"})]})]}),M.jsxs("div",{className:"mt-6 flex flex-col items-center gap-1.5 text-center",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsxs("span",{className:"relative flex h-2 w-2",children:[M.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),M.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-cyan-500"})]}),M.jsx("span",{className:"font-mono text-xs font-semibold tracking-widest text-slate-300 uppercase",children:"Initializing Spatial Lab"})]}),M.jsx("span",{className:"font-mono text-[10px] tracking-wide text-slate-500",children:"Unreal Engine 5 • Three.js • Spatial WebGL"})]})]})},xP=({isEnabled:t=!0,activeStationId:e="home"})=>{const n=U.useRef(null),i=U.useRef(null),[r,s]=U.useState(0),[o,a]=U.useState(!1),[l,c]=U.useState(!1);return U.useEffect(()=>{i.current&&e&&i.current.setActiveStation(e)},[e]),U.useEffect(()=>{if(!t||!n.current){i.current&&(i.current.destroy(),i.current=null);return}const u=new gP;i.current=u;let h=10;s(h);const d=setInterval(()=>{h+=Math.random()*25,h>=95&&(h=95,clearInterval(d)),s(Math.min(95,h))},80);if(!u.init(n.current,{onLoaded:()=>{clearInterval(d),s(100),u.setActiveStation(e),setTimeout(()=>{a(!0)},350)},onError:_=>{console.warn("StudioCanvas: WebGL fallback activated.",_),clearInterval(d),c(!0),a(!0)}})){clearInterval(d),c(!0),a(!0);return}const g=()=>{const _=document.documentElement.scrollHeight-window.innerHeight,b=_>0?window.scrollY/_:0;u.setScrollProgress(b),v()},x=_=>{const b=_.clientX/window.innerWidth*2-1,T=_.clientY/window.innerHeight*2-1;u.setMouseOffset(b,T);const C=_.clientX/window.innerWidth,y=1-_.clientY/window.innerHeight;u.onCursorMove(C,y,performance.now()*.001),v()},m=_=>{const b=_.clientX/window.innerWidth,T=1-_.clientY/window.innerHeight;u.onCursorClick(b,T),v()};let f=null;const v=()=>{u.setIdle(!1),f&&clearTimeout(f),f=setTimeout(()=>{u.setIdle(!0)},3e3)};v();const w=()=>{u.resize()};return window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("mousemove",x,{passive:!0}),window.addEventListener("click",m,{passive:!0}),window.addEventListener("resize",w),g(),()=>{clearInterval(d),f&&clearTimeout(f),window.removeEventListener("scroll",g),window.removeEventListener("mousemove",x),window.removeEventListener("click",m),window.removeEventListener("resize",w),u.destroy(),i.current=null}},[t]),!t||l?null:M.jsxs(M.Fragment,{children:[M.jsx(vP,{progress:r,isLoaded:o}),M.jsx("div",{ref:n,"aria-hidden":"true",className:"fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-1000",style:{opacity:o?1:0}})]})},_P=({onExploreClick:t,onOpenProjectsDeck:e})=>M.jsx("section",{id:"home",className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 pt-24 pb-20 select-none",children:M.jsxs("div",{className:"max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center",children:[M.jsxs("div",{className:"mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-lg",children:[M.jsxs("span",{className:"relative flex h-2 w-2",children:[M.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),M.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),M.jsx("span",{className:"font-mono text-xs text-slate-300 tracking-wider",children:"SOFTWARE & GAME DEVELOPER"})]}),M.jsxs("div",{className:"mb-6",children:[M.jsx("span",{className:"font-mono text-xs md:text-sm tracking-[0.3em] text-cyan-400 uppercase block mb-3",children:"Game Development • Spatial Computing (XR) • Interactive 3D"}),M.jsxs("h1",{className:"text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1.05]",children:[M.jsx("span",{className:"metallic-text",children:"RAVI "}),M.jsx("span",{className:"gradient-text",children:"PATEL"})]})]}),M.jsxs("p",{className:"max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-8",children:["Crafting high-performance games, spatial computing experiences, and interactive applications across"," ",M.jsx("span",{className:"text-cyan-400 font-semibold font-mono",children:"Unity (C#)"}),","," ",M.jsx("span",{className:"text-indigo-400 font-semibold font-mono",children:"Unreal Engine 5 (C++)"}),", and"," ",M.jsx("span",{className:"text-purple-400 font-semibold font-mono",children:"Three.js / WebGL"}),"."]}),M.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl w-full mb-10",children:[M.jsxs("div",{className:"p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center",children:[M.jsx("span",{className:"font-mono text-2xl md:text-3xl font-extrabold gradient-text block",children:"3+ Years"}),M.jsx("span",{className:"font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block",children:"Professional Experience"})]}),M.jsxs("div",{className:"p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center",children:[M.jsx("span",{className:"font-mono text-2xl md:text-3xl font-extrabold gradient-text block",children:"15+ Projects"}),M.jsx("span",{className:"font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block",children:"Shipped & Delivered"})]}),M.jsxs("div",{className:"col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center",children:[M.jsx("span",{className:"font-mono text-2xl md:text-3xl font-extrabold gradient-text block",children:"Cross-Platform"}),M.jsx("span",{className:"font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block",children:"PC, Mobile & XR Headsets"})]})]}),M.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[M.jsxs(On,{type:"button",onClick:t,className:"h-11 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold gap-2 shadow-lg shadow-cyan-500/25 transition-all text-xs font-mono",children:["[ EXPLORE WORK ]",M.jsx(tE,{className:"w-3.5 h-3.5"})]}),M.jsxs(On,{type:"button",onClick:e,variant:"outline",className:"h-11 px-6 rounded-xl border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 font-semibold gap-2 text-xs font-mono",children:[M.jsx(wa,{className:"w-3.5 h-3.5 text-cyan-400"}),"[ ALL PROJECTS (13) ]"]}),M.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"no-underline hidden sm:inline-block",children:M.jsxs(On,{type:"button",variant:"outline",className:"h-11 px-5 rounded-xl border-white/10 hover:bg-white/[0.05] text-slate-300 font-semibold gap-2 text-xs font-mono",children:[M.jsx(hf,{className:"w-3.5 h-3.5"}),"[ RESUME ]"]})})]})]})}),yP=()=>{const t=[{icon:Wx,title:"Game Development & 3D Systems",description:"Custom gameplay mechanics, real-time physics, and procedural 3D environments across Unreal Engine 5 and Unity."},{icon:vE,title:"Spatial Computing (XR & VR/AR)",description:"Immersive medical visualization, interactive training simulations, and stereoscopic headsets (HoloLens 2, XREAL, Meta Quest)."},{icon:Yx,title:"Interactive Kiosks & Hardware",description:"Commercial touchscreen and floor-projection systems built on hardened Linux with robust offline architecture."},{icon:jx,title:"Computer Vision & Smart Motion",description:"Camera-based gesture recognition, skeletal body tracking, and real-time vision processing for controller-free gameplay."}];return M.jsx("section",{id:"about",className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none",children:M.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[M.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),M.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"STATION 01 // PROFILE & EXPERTISE"})]}),M.jsxs("div",{className:"mb-8",children:[M.jsxs("h2",{className:"text-3xl md:text-5xl font-black tracking-tight text-white mb-3",children:["Core Areas of ",M.jsx("span",{className:"gradient-text",children:"Expertise"})]}),M.jsx("p",{className:"font-mono text-xs md:text-sm text-slate-400 max-w-2xl",children:"Software & Game Developer at Invisible Fiction (May 2023 – Present). Designing and delivering robust 3D, XR, and interactive applications."})]}),M.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",children:t.map((e,n)=>{const i=e.icon;return M.jsxs(Kc,{className:"p-5 md:p-6 rounded-2xl bg-[#0a0d18]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/40 transition-all shadow-lg",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400",children:M.jsx(i,{className:"w-5 h-5"})}),M.jsx("h3",{className:"text-base font-bold text-white mb-1.5",children:e.title}),M.jsx("p",{className:"text-xs text-slate-400 leading-relaxed font-normal",children:e.description})]},n)})}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[M.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0",children:M.jsx(cE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"text-xs font-bold text-white block",children:"B.E. in Computer Engineering (CGPA: 8.30 / 10.0)"}),M.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:"Ipcowala Institute of Eng. & Tech. (2019 – 2023)"})]})]}),M.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",children:M.jsx(nE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"text-xs font-bold text-white block",children:"Anthropic & SAP Industry Certifications"}),M.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:"Claude Architecture • SAP CSR (Code Unnati)"})]})]})]})]})})},Ml=({stationId:t,stationCode:e,project:n,onInspectCase:i,onOpenProjectsDeck:r})=>M.jsx("section",{id:t,className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none",children:M.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[M.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),M.jsxs("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:["FEATURED PROJECT ",e," // ",n.category]})]}),M.jsxs("div",{className:"mb-6",children:[M.jsx("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-3",children:n.title.toUpperCase()}),M.jsx("p",{className:"font-mono text-xs sm:text-sm md:text-base text-cyan-300/80 max-w-3xl leading-relaxed",children:n.subtitle})]}),M.jsxs("div",{className:"p-6 md:p-8 rounded-3xl bg-[#090c16]/85 backdrop-blur-2xl border border-white/[0.08] shadow-2xl mb-8 relative overflow-hidden",children:[M.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"}),M.jsx("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed mb-6",children:n.shortDescription}),n.architecturalHighlights&&n.architecturalHighlights.length>0&&M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",children:n.architecturalHighlights.slice(0,2).map((s,o)=>M.jsxs("div",{className:"p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5",children:[M.jsx(rp,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),M.jsx("span",{className:"text-xs text-slate-300 leading-relaxed",children:s})]},o))}),M.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]",children:[n.metrics&&M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),M.jsx("span",{className:"font-mono text-xs font-semibold text-white",children:n.metrics})]}),M.jsx("div",{className:"flex flex-wrap gap-1.5",children:n.tech.slice(0,4).map(s=>M.jsx("span",{className:"px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300",children:s},s))})]})]}),M.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[M.jsxs(On,{type:"button",onClick:()=>i(n),className:"h-11 px-7 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold gap-2 shadow-lg shadow-cyan-500/25 transition-all text-xs font-mono",children:["[ INSPECT CASE ]",M.jsx(Gx,{className:"w-4 h-4"})]}),r&&M.jsxs(On,{type:"button",onClick:r,variant:"outline",className:"h-11 px-5 rounded-xl border-white/10 hover:bg-white/[0.05] text-slate-300 font-semibold gap-2 text-xs font-mono",children:[M.jsx(wa,{className:"w-3.5 h-3.5 text-cyan-400"}),"[ ALL PROJECTS (13) ]"]})]})]})}),SP=()=>{const t=[{icon:aE,title:"Game Engines & 3D",color:"text-cyan-400 border-cyan-500/30",skills:["Unity (C#)","Unreal Engine 5 (C++)","Three.js","WebGL","Blender"]},{icon:jx,title:"Spatial Computing (XR)",color:"text-indigo-400 border-indigo-500/30",skills:["HoloLens 2 (MRTK)","XREAL Air / Light","OpenXR","WebXR","Spatial Audio"]},{icon:sE,title:"Core Languages",color:"text-purple-400 border-purple-500/30",skills:["C#","C++","TypeScript","JavaScript","Python","GLSL / HLSL"]},{icon:Xx,title:"Computer Vision & AI",color:"text-emerald-400 border-emerald-500/30",skills:["DirectShow","YOLOv8","ONNX Runtime","MediaPipe","OpenCV"]},{icon:Wx,title:"Kiosks & Hardware",color:"text-blue-400 border-blue-500/30",skills:["Linux / Ubuntu","Hardened Kiosks","Floor Projectors","Sensors","WebSockets"]},{icon:Yx,title:"Security & Cryptography",color:"text-amber-400 border-amber-500/30",skills:["X25519 Elliptic Curve","AES-256-GCM","HKDF-SHA256","Zero-Trust Tunnel"]}];return M.jsx("section",{id:"skills",className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none",children:M.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[M.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),M.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"STATION 06 // SKILLS & ARCHITECTURE"})]}),M.jsxs("div",{className:"mb-8",children:[M.jsxs("h2",{className:"text-3xl md:text-5xl font-black tracking-tight text-white mb-3",children:["Technical Stack & ",M.jsx("span",{className:"gradient-text",children:"Architecture"})]}),M.jsx("p",{className:"font-mono text-xs md:text-sm text-slate-400 max-w-2xl",children:"Technologies and frameworks deployed across commercial games, medical XR platforms, and interactive 3D installations."})]}),M.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map((e,n)=>{const i=e.icon;return M.jsxs(Kc,{className:"p-5 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/40 transition-all shadow-lg",children:[M.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[M.jsx("div",{className:`w-8 h-8 rounded-lg bg-white/[0.04] border flex items-center justify-center ${e.color}`,children:M.jsx(i,{className:"w-4 h-4"})}),M.jsx("h3",{className:"text-sm font-bold text-white tracking-wide",children:e.title})]}),M.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.skills.map(r=>M.jsx("span",{className:"px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300",children:r},r))})]},n)})})]})})},rh=U.forwardRef(({className:t,type:e,...n},i)=>M.jsx("input",{type:e,className:gn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:i,...n}));rh.displayName="Input";const G_=U.forwardRef(({className:t,...e},n)=>M.jsx("textarea",{className:gn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...e}));G_.displayName="Textarea";const MP=1,wP=1e6;let hd=0;function EP(){return hd=(hd+1)%Number.MAX_SAFE_INTEGER,hd.toString()}const pd=new Map,p0=t=>{if(pd.has(t))return;const e=setTimeout(()=>{pd.delete(t),jo({type:"REMOVE_TOAST",toastId:t})},wP);pd.set(t,e)},bP=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,MP)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?p0(n):t.toasts.forEach(i=>{p0(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},Xl=[];let jl={toasts:[]};function jo(t){jl=bP(jl,t),Xl.forEach(e=>{e(jl)})}function TP({...t}){const e=EP(),n=r=>jo({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>jo({type:"DISMISS_TOAST",toastId:e});return jo({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function W_(){const[t,e]=U.useState(jl);return U.useEffect(()=>(Xl.push(e),()=>{const n=Xl.indexOf(e);n>-1&&Xl.splice(n,1)}),[t]),{...t,toast:TP,dismiss:n=>jo({type:"DISMISS_TOAST",toastId:n})}}class Ta{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const CP=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},Wt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:CP()},Mp=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},AP=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=Mp(t);Wt.publicKey=n.publicKey,Wt.blockHeadless=n.blockHeadless,Wt.storageProvider=n.storageProvider,Wt.blockList=n.blockList,Wt.limitRate=n.limitRate,Wt.origin=n.origin||e},X_=async(t,e,n={})=>{const i=await fetch(Wt.origin+t,{method:"POST",headers:n,body:e}),r=await i.text(),s=new Ta(i.status,r);if(i.ok)return s;throw s},j_=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},RP=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Y_=t=>t.webdriver||!t.languages||t.languages.length===0,$_=()=>new Ta(451,"Unavailable For Headless Browser"),PP=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},NP=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},LP=(t,e)=>t instanceof FormData?t.get(e):t[e],q_=(t,e)=>{if(NP(t))return!1;PP(t.list,t.watchVariable);const n=LP(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},K_=()=>new Ta(403,"Forbidden"),DP=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},IP=async(t,e,n)=>{const i=Number(await n.get(t)||0);return e-Date.now()+i},Z_=async(t,e,n)=>{if(!e.throttle||!n)return!1;DP(e.throttle,e.id);const i=e.id||t;return await IP(i,e.throttle,n)>0?!0:(await n.set(i,Date.now().toString()),!1)},Q_=()=>new Ta(429,"Too Many Requests"),UP=async(t,e,n,i)=>{const r=Mp(i),s=r.publicKey||Wt.publicKey,o=r.blockHeadless||Wt.blockHeadless,a=r.storageProvider||Wt.storageProvider,l={...Wt.blockList,...r.blockList},c={...Wt.limitRate,...r.limitRate};return o&&Y_(navigator)?Promise.reject($_()):(j_(s,t,e),RP(n),n&&q_(l,n)?Promise.reject(K_()):await Z_(location.pathname,c,a)?Promise.reject(Q_()):X_("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},FP=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},OP=t=>typeof t=="string"?document.querySelector(t):t,kP=async(t,e,n,i)=>{const r=Mp(i),s=r.publicKey||Wt.publicKey,o=r.blockHeadless||Wt.blockHeadless,a=Wt.storageProvider||r.storageProvider,l={...Wt.blockList,...r.blockList},c={...Wt.limitRate,...r.limitRate};if(o&&Y_(navigator))return Promise.reject($_());const u=OP(n);j_(s,t,e),FP(u);const h=new FormData(u);return q_(l,h)?Promise.reject(K_()):await Z_(location.pathname,c,a)?Promise.reject(Q_()):(h.append("lib_version","4.4.1"),h.append("service_id",t),h.append("template_id",e),h.append("user_id",s),X_("/api/v1.0/email/send-form",h))},BP={init:AP,send:UP,sendForm:kP,EmailJSResponseStatus:Ta},zP=()=>{const{toast:t}=W_(),[e,n]=U.useState({name:"",email:"",message:""}),[i,r]=U.useState(!1),[s,o]=U.useState(!1),a=async l=>{l.preventDefault(),r(!0);try{await BP.send("service_7vljb2h","template_k3j7nfe",{from_name:e.name,reply_to:e.email,message:e.message},"GekL2x0c-5PjX33sM"),o(!0),t({title:"Transmission Received",description:"Your message was transmitted successfully. I will respond promptly."}),n({name:"",email:"",message:""})}catch(c){console.warn("Direct transmission fallback:",c),t({title:"Transmission Logged",description:"Thank you for reaching out. You can also connect via direct email or LinkedIn."})}finally{r(!1)}};return M.jsxs("section",{id:"contact",className:"min-h-screen w-full flex flex-col justify-between relative px-6 md:px-16 pt-24 pb-12 select-none",children:[M.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10 my-auto",children:[M.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),M.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"STATION 07 // GET IN TOUCH"})]}),M.jsxs("div",{className:"mb-8",children:[M.jsxs("h2",{className:"text-3xl md:text-5xl font-black tracking-tight text-white mb-2",children:["Let's Build Something ",M.jsx("span",{className:"gradient-text",children:"Exceptional"})]}),M.jsx("p",{className:"font-mono text-xs md:text-sm text-slate-400",children:"Open for Senior Software & Game Development, Spatial Computing (XR), and Interactive 3D roles."})]}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[M.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[M.jsxs("div",{className:"p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",children:M.jsx(hE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-widest block",children:"Email Address"}),M.jsx("a",{href:"mailto:patelravi28042001@gmail.com",className:"text-xs md:text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono",children:"patelravi28042001@gmail.com"})]})]}),M.jsxs("div",{className:"p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0",children:M.jsx(gE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-widest block",children:"Phone / WhatsApp"}),M.jsx("a",{href:"tel:+919712728974",className:"text-xs md:text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono",children:"+91 97127 28974"})]})]}),M.jsxs("div",{className:"p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0",children:M.jsx(pE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-widest block",children:"Location"}),M.jsx("span",{className:"text-xs md:text-sm font-semibold text-white font-mono",children:"Karamsad, Anand, Gujarat, India"})]})]}),M.jsxs("div",{className:"pt-2 flex gap-3",children:[M.jsxs("a",{href:"https://github.com/RaviPatel2804",target:"_blank",rel:"noopener noreferrer",className:"flex-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 transition-all flex items-center justify-center gap-2 text-xs font-mono",children:[M.jsx(lE,{className:"w-4 h-4"}),M.jsx("span",{children:"GitHub"})]}),M.jsxs("a",{href:"https://www.linkedin.com/in/ravi-patel-394939223/",target:"_blank",rel:"noopener noreferrer",className:"flex-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-400/40 text-slate-300 hover:text-indigo-400 transition-all flex items-center justify-center gap-2 text-xs font-mono",children:[M.jsx(dE,{className:"w-4 h-4"}),M.jsx("span",{children:"LinkedIn"})]})]})]}),M.jsx("div",{className:"lg:col-span-7",children:M.jsxs("form",{onSubmit:a,className:"p-6 md:p-8 rounded-3xl bg-[#080b14]/85 backdrop-blur-2xl border border-white/[0.08] shadow-2xl space-y-4",children:[M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1.5 uppercase",children:"Your Name"}),M.jsx(rh,{required:!0,value:e.name,onChange:l=>n({...e,name:l.target.value}),placeholder:"e.g. Alex Mercer",className:"h-10 bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1.5 uppercase",children:"Email Address"}),M.jsx(rh,{type:"email",required:!0,value:e.email,onChange:l=>n({...e,email:l.target.value}),placeholder:"alex@studio.com",className:"h-10 bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400"})]})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1.5 uppercase",children:"Message Details"}),M.jsx(G_,{required:!0,rows:4,value:e.message,onChange:l=>n({...e,message:l.target.value}),placeholder:"Tell me about your project, team requirements, or role details...",className:"bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400 resize-none"})]}),M.jsx(On,{type:"submit",disabled:i,className:"w-full h-11 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl text-xs font-mono shadow-lg shadow-cyan-500/20",children:i?M.jsxs(M.Fragment,{children:[M.jsx("span",{children:"Sending..."}),M.jsx(fE,{className:"ml-2 w-3.5 h-3.5 animate-spin"})]}):s?M.jsxs(M.Fragment,{children:[M.jsx("span",{children:"Message Sent Successfully"}),M.jsx(rp,{className:"ml-2 w-3.5 h-3.5 text-emerald-400"})]}):M.jsxs(M.Fragment,{children:[M.jsx("span",{children:"[ SEND MESSAGE ]"}),M.jsx(xE,{className:"ml-2 w-3.5 h-3.5"})]})})]})})]})]}),M.jsx("footer",{className:"pt-8 border-t border-white/[0.06] text-center relative z-10",children:M.jsxs("p",{className:"font-mono text-[11px] text-slate-500",children:["© ",new Date().getFullYear()," Ravi Patel. Software & Game Developer."]})})]})},VP=()=>{const t=U.useRef(null),e=U.useRef(null),[n,i]=U.useState(!1),[r,s]=U.useState(!1),[o,a]=U.useState(!1);return U.useEffect(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let l=window.innerWidth/2,c=window.innerHeight/2,u=l,h=c,d;const p=w=>{l=w.clientX,c=w.clientY,a(!0),t.current&&(t.current.style.transform=`translate3d(${l}px, ${c}px, 0px) translate(-50%, -50%)`)},g=()=>s(!0),x=()=>s(!1),m=()=>a(!1),f=()=>{u+=(l-u)*.18,h+=(c-h)*.18,e.current&&(e.current.style.transform=`translate3d(${u}px, ${h}px, 0px) translate(-50%, -50%)`),d=requestAnimationFrame(f)},v=w=>{const _=w.target;_&&(_.closest("a")||_.closest("button")||_.closest("[role='button']")||_.closest("input")||_.closest(".carousel-3d-item")||_.closest(".clickable"))?i(!0):i(!1)};return window.addEventListener("mousemove",p,{passive:!0}),window.addEventListener("mousedown",g),window.addEventListener("mouseup",x),document.addEventListener("mouseleave",m),document.addEventListener("mouseover",v,{passive:!0}),d=requestAnimationFrame(f),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("mousedown",g),window.removeEventListener("mouseup",x),document.removeEventListener("mouseleave",m),document.removeEventListener("mouseover",v),cancelAnimationFrame(d)}},[]),M.jsxs("div",{className:"pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300",style:{opacity:o?1:0},"aria-hidden":"true",children:[M.jsx("div",{ref:t,className:"pointer-events-none fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] will-change-transform"}),M.jsx("div",{ref:e,className:`pointer-events-none fixed top-0 left-0 rounded-full border border-white/40 transition-all duration-200 ease-out will-change-transform ${n?"h-14 w-14 border-cyan-400 bg-cyan-400/10 shadow-[0_0_16px_rgba(34,211,238,0.4)]":r?"h-6 w-6 border-white/80 bg-white/20":"h-9 w-9 bg-transparent"}`})]})},HP=()=>{const[t,e]=U.useState(()=>{try{const p=localStorage.getItem("ravi_portfolio_3d_enabled");return p!==null?p==="true":!0}catch{return!0}}),[n,i]=U.useState("home"),[r,s]=U.useState(null),[o,a]=U.useState(!1);U.useEffect(()=>{try{localStorage.setItem("ravi_portfolio_3d_enabled",String(t))}catch{}},[t]),U.useEffect(()=>{const p=()=>{const g=mf.map(m=>document.getElementById(m.id)).filter(Boolean),x=window.scrollY+window.innerHeight*.45;for(let m=g.length-1;m>=0;m--)if(g[m].offsetTop<=x){i(mf[m].id);break}};return window.addEventListener("scroll",p,{passive:!0}),p(),()=>window.removeEventListener("scroll",p)},[]);const l=p=>{const g=document.getElementById(p);g&&g.scrollIntoView({behavior:"smooth"})},c=en.find(p=>p.id==="smartscopy")||en[0],u=en.find(p=>p.id==="mimadimplus")||en[1],h=en.find(p=>p.id==="nopainheals")||en[2],d=en.find(p=>p.id==="motion-tracking-ai")||en[3];return M.jsxs("div",{className:"relative min-h-screen bg-[#06070a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-clip",children:[M.jsx(VP,{}),M.jsx(xP,{isEnabled:t,activeStationId:n}),M.jsx(s1,{activeStationId:n,onSelectStation:l}),M.jsx(r1,{is3DEnabled:t,onToggle3D:()=>e(p=>!p),onOpenProjectsDeck:()=>a(!0),onScrollToStation:l}),M.jsx(o1,{}),M.jsxs("main",{className:"relative z-10",children:[M.jsx(_P,{onExploreClick:()=>l("about"),onOpenProjectsDeck:()=>a(!0)}),M.jsx(yP,{}),M.jsx(Ml,{stationId:"smartscopy",stationCode:"02",project:c,onInspectCase:p=>s(p),onOpenProjectsDeck:()=>a(!0)}),M.jsx(Ml,{stationId:"mimadim",stationCode:"03",project:u,onInspectCase:p=>s(p),onOpenProjectsDeck:()=>a(!0)}),M.jsx(Ml,{stationId:"nopainheals",stationCode:"04",project:h,onInspectCase:p=>s(p),onOpenProjectsDeck:()=>a(!0)}),M.jsx(Ml,{stationId:"vision-ai",stationCode:"05",project:d,onInspectCase:p=>s(p),onOpenProjectsDeck:()=>a(!0)}),M.jsx(SP,{}),M.jsx(zP,{})]}),M.jsx(a1,{project:r,onClose:()=>s(null),onOpenAllProjects:()=>a(!0)}),M.jsx(p1,{isOpen:o,onClose:()=>a(!1),onSelectProject:p=>{a(!1),s(p)}})]})},GP=()=>{const t=Vx();return U.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),M.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-100",children:M.jsxs("div",{className:"text-center",children:[M.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),M.jsx("p",{className:"mb-4 text-xl text-gray-600",children:"Oops! Page not found"}),M.jsx("a",{href:"/",className:"text-blue-500 underline hover:text-blue-700",children:"Return to Home"})]})})};function In(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function J_(t,e=[]){let n=[];function i(s,o){const a=U.createContext(o),l=n.length;n=[...n,o];const c=h=>{var f;const{scope:d,children:p,...g}=h,x=((f=d==null?void 0:d[t])==null?void 0:f[l])||a,m=U.useMemo(()=>g,Object.values(g));return M.jsx(x.Provider,{value:m,children:p})};c.displayName=s+"Provider";function u(h,d){var x;const p=((x=d==null?void 0:d[t])==null?void 0:x[l])||a,g=U.useContext(p);if(g)return g;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return[c,u]}const r=()=>{const s=n.map(o=>U.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return U.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,WP(r,...e)]}function WP(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return U.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}function XP(t){const e=t+"CollectionProvider",[n,i]=J_(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=x=>{const{scope:m,children:f}=x,v=rr.useRef(null),w=rr.useRef(new Map).current;return M.jsx(r,{scope:m,itemMap:w,collectionRef:v,children:f})};o.displayName=e;const a=t+"CollectionSlot",l=_c(a),c=rr.forwardRef((x,m)=>{const{scope:f,children:v}=x,w=s(a,f),_=$r(m,w.collectionRef);return M.jsx(l,{ref:_,children:v})});c.displayName=a;const u=t+"CollectionItemSlot",h="data-radix-collection-item",d=_c(u),p=rr.forwardRef((x,m)=>{const{scope:f,children:v,...w}=x,_=rr.useRef(null),b=$r(m,_),T=s(u,f);return rr.useEffect(()=>(T.itemMap.set(_,{ref:_,...w}),()=>void T.itemMap.delete(_))),M.jsx(d,{[h]:"",ref:b,children:v})});p.displayName=u;function g(x){const m=s(t+"CollectionConsumer",x);return rr.useCallback(()=>{const v=m.collectionRef.current;if(!v)return[];const w=Array.from(v.querySelectorAll(`[${h}]`));return Array.from(m.itemMap.values()).sort((T,C)=>w.indexOf(T.ref.current)-w.indexOf(C.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:o,Slot:c,ItemSlot:p},g,i]}var jP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ei=jP.reduce((t,e)=>{const n=_c(`Primitive.${e}`),i=U.forwardRef((r,s)=>{const{asChild:o,...a}=r,l=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),M.jsx(l,{...a,ref:s})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{});function ey(t,e){t&&Xc.flushSync(()=>t.dispatchEvent(e))}function Qr(t){const e=U.useRef(t);return U.useEffect(()=>{e.current=t}),U.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function YP(t,e=globalThis==null?void 0:globalThis.document){const n=Qr(t);U.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var $P="DismissableLayer",sh="dismissableLayer.update",qP="dismissableLayer.pointerDownOutside",KP="dismissableLayer.focusOutside",m0,ty=U.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),ny=U.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=U.useContext(ty),[u,h]=U.useState(null),d=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=U.useState({}),g=$r(e,C=>h(C)),x=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),f=x.indexOf(m),v=u?x.indexOf(u):-1,w=c.layersWithOutsidePointerEventsDisabled.size>0,_=v>=f,b=QP(C=>{const y=C.target,A=[...c.branches].some(N=>N.contains(y));!_||A||(r==null||r(C),o==null||o(C),C.defaultPrevented||a==null||a())},d),T=JP(C=>{const y=C.target;[...c.branches].some(N=>N.contains(y))||(s==null||s(C),o==null||o(C),C.defaultPrevented||a==null||a())},d);return YP(C=>{v===c.layers.size-1&&(i==null||i(C),!C.defaultPrevented&&a&&(C.preventDefault(),a()))},d),U.useEffect(()=>{if(u)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(m0=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),g0(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=m0)}},[u,d,n,c]),U.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),g0())},[u,c]),U.useEffect(()=>{const C=()=>p({});return document.addEventListener(sh,C),()=>document.removeEventListener(sh,C)},[]),M.jsx(Ei.div,{...l,ref:g,style:{pointerEvents:w?_?"auto":"none":void 0,...t.style},onFocusCapture:In(t.onFocusCapture,T.onFocusCapture),onBlurCapture:In(t.onBlurCapture,T.onBlurCapture),onPointerDownCapture:In(t.onPointerDownCapture,b.onPointerDownCapture)})});ny.displayName=$P;var ZP="DismissableLayerBranch",iy=U.forwardRef((t,e)=>{const n=U.useContext(ty),i=U.useRef(null),r=$r(e,i);return U.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),M.jsx(Ei.div,{...t,ref:r})});iy.displayName=ZP;function QP(t,e=globalThis==null?void 0:globalThis.document){const n=Qr(t),i=U.useRef(!1),r=U.useRef(()=>{});return U.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){ry(qP,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function JP(t,e=globalThis==null?void 0:globalThis.document){const n=Qr(t),i=U.useRef(!1);return U.useEffect(()=>{const r=s=>{s.target&&!i.current&&ry(KP,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function g0(){const t=new CustomEvent(sh);document.dispatchEvent(t)}function ry(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?ey(r,s):r.dispatchEvent(s)}var e3=ny,t3=iy,va=globalThis!=null&&globalThis.document?U.useLayoutEffect:()=>{},n3="Portal",sy=U.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,s]=U.useState(!1);va(()=>s(!0),[]);const o=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?fw.createPortal(M.jsx(Ei.div,{...i,ref:e}),o):null});sy.displayName=n3;function i3(t,e){return U.useReducer((n,i)=>e[n][i]??n,t)}var oy=t=>{const{present:e,children:n}=t,i=r3(e),r=typeof n=="function"?n({present:i.isPresent}):U.Children.only(n),s=$r(i.ref,s3(r));return typeof n=="function"||i.isPresent?U.cloneElement(r,{ref:s}):null};oy.displayName="Presence";function r3(t){const[e,n]=U.useState(),i=U.useRef(null),r=U.useRef(t),s=U.useRef("none"),o=t?"mounted":"unmounted",[a,l]=i3(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return U.useEffect(()=>{const c=wl(i.current);s.current=a==="mounted"?c:"none"},[a]),va(()=>{const c=i.current,u=r.current;if(u!==t){const d=s.current,p=wl(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&d!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),va(()=>{if(e){let c;const u=e.ownerDocument.defaultView??window,h=p=>{const x=wl(i.current).includes(p.animationName);if(p.target===e&&x&&(l("ANIMATION_END"),!r.current)){const m=e.style.animationFillMode;e.style.animationFillMode="forwards",c=u.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=m)})}},d=p=>{p.target===e&&(s.current=wl(i.current))};return e.addEventListener("animationstart",d),e.addEventListener("animationcancel",h),e.addEventListener("animationend",h),()=>{u.clearTimeout(c),e.removeEventListener("animationstart",d),e.removeEventListener("animationcancel",h),e.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:U.useCallback(c=>{i.current=c?getComputedStyle(c):null,n(c)},[])}}function wl(t){return(t==null?void 0:t.animationName)||"none"}function s3(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var o3=R0[" useInsertionEffect ".trim().toString()]||va;function a3({prop:t,defaultProp:e,onChange:n=()=>{},caller:i}){const[r,s,o]=l3({defaultProp:e,onChange:n}),a=t!==void 0,l=a?t:r;{const u=U.useRef(t!==void 0);U.useEffect(()=>{const h=u.current;h!==a&&console.warn(`${i} is changing from ${h?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=a},[a,i])}const c=U.useCallback(u=>{var h;if(a){const d=c3(u)?u(t):u;d!==t&&((h=o.current)==null||h.call(o,d))}else s(u)},[a,t,s,o]);return[l,c]}function l3({defaultProp:t,onChange:e}){const[n,i]=U.useState(t),r=U.useRef(n),s=U.useRef(e);return o3(()=>{s.current=e},[e]),U.useEffect(()=>{var o;r.current!==n&&((o=s.current)==null||o.call(s,n),r.current=n)},[n,r]),[n,i,s]}function c3(t){return typeof t=="function"}var u3=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),d3="VisuallyHidden",wp=U.forwardRef((t,e)=>M.jsx(Ei.span,{...t,ref:e,style:{...u3,...t.style}}));wp.displayName=d3;var Ep="ToastProvider",[bp,f3,h3]=XP("Toast"),[ay,F3]=J_("Toast",[h3]),[p3,tu]=ay(Ep),ly=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:s=50,children:o}=t,[a,l]=U.useState(null),[c,u]=U.useState(0),h=U.useRef(!1),d=U.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Ep}\`. Expected non-empty \`string\`.`),M.jsx(bp.Provider,{scope:e,children:M.jsx(p3,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:U.useCallback(()=>u(p=>p+1),[]),onToastRemove:U.useCallback(()=>u(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:d,children:o})})};ly.displayName=Ep;var cy="ToastViewport",m3=["F8"],oh="toast.viewportPause",ah="toast.viewportResume",uy=U.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=m3,label:r="Notifications ({hotkey})",...s}=t,o=tu(cy,n),a=f3(n),l=U.useRef(null),c=U.useRef(null),u=U.useRef(null),h=U.useRef(null),d=$r(e,h,o.onViewportChange),p=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=o.toastCount>0;U.useEffect(()=>{const m=f=>{var w;i.length!==0&&i.every(_=>f[_]||f.code===_)&&((w=h.current)==null||w.focus())};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[i]),U.useEffect(()=>{const m=l.current,f=h.current;if(g&&m&&f){const v=()=>{if(!o.isClosePausedRef.current){const T=new CustomEvent(oh);f.dispatchEvent(T),o.isClosePausedRef.current=!0}},w=()=>{if(o.isClosePausedRef.current){const T=new CustomEvent(ah);f.dispatchEvent(T),o.isClosePausedRef.current=!1}},_=T=>{!m.contains(T.relatedTarget)&&w()},b=()=>{m.contains(document.activeElement)||w()};return m.addEventListener("focusin",v),m.addEventListener("focusout",_),m.addEventListener("pointermove",v),m.addEventListener("pointerleave",b),window.addEventListener("blur",v),window.addEventListener("focus",w),()=>{m.removeEventListener("focusin",v),m.removeEventListener("focusout",_),m.removeEventListener("pointermove",v),m.removeEventListener("pointerleave",b),window.removeEventListener("blur",v),window.removeEventListener("focus",w)}}},[g,o.isClosePausedRef]);const x=U.useCallback(({tabbingDirection:m})=>{const v=a().map(w=>{const _=w.ref.current,b=[_,...A3(_)];return m==="forwards"?b:b.reverse()});return(m==="forwards"?v.reverse():v).flat()},[a]);return U.useEffect(()=>{const m=h.current;if(m){const f=v=>{var b,T,C;const w=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!w){const y=document.activeElement,A=v.shiftKey;if(v.target===m&&A){(b=c.current)==null||b.focus();return}const O=x({tabbingDirection:A?"backwards":"forwards"}),Y=O.findIndex(P=>P===y);md(O.slice(Y+1))?v.preventDefault():A?(T=c.current)==null||T.focus():(C=u.current)==null||C.focus()}};return m.addEventListener("keydown",f),()=>m.removeEventListener("keydown",f)}},[a,x]),M.jsxs(t3,{ref:l,role:"region","aria-label":r.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&M.jsx(lh,{ref:c,onFocusFromOutsideViewport:()=>{const m=x({tabbingDirection:"forwards"});md(m)}}),M.jsx(bp.Slot,{scope:n,children:M.jsx(Ei.ol,{tabIndex:-1,...s,ref:d})}),g&&M.jsx(lh,{ref:u,onFocusFromOutsideViewport:()=>{const m=x({tabbingDirection:"backwards"});md(m)}})]})});uy.displayName=cy;var dy="ToastFocusProxy",lh=U.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,s=tu(dy,n);return M.jsx(wp,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&i()}})});lh.displayName=dy;var Ca="Toast",g3="toast.swipeStart",v3="toast.swipeMove",x3="toast.swipeCancel",_3="toast.swipeEnd",fy=U.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:s,...o}=t,[a,l]=a3({prop:i,defaultProp:r??!0,onChange:s,caller:Ca});return M.jsx(oy,{present:n||a,children:M.jsx(M3,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:Qr(t.onPause),onResume:Qr(t.onResume),onSwipeStart:In(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:In(t.onSwipeMove,c=>{const{x:u,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:In(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:In(t.onSwipeEnd,c=>{const{x:u,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),l(!1)})})})});fy.displayName=Ca;var[y3,S3]=ay(Ca,{onClose(){}}),M3=U.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:u,onSwipeMove:h,onSwipeCancel:d,onSwipeEnd:p,...g}=t,x=tu(Ca,n),[m,f]=U.useState(null),v=$r(e,P=>f(P)),w=U.useRef(null),_=U.useRef(null),b=r||x.duration,T=U.useRef(0),C=U.useRef(b),y=U.useRef(0),{onToastAdd:A,onToastRemove:N}=x,I=Qr(()=>{var V;(m==null?void 0:m.contains(document.activeElement))&&((V=x.viewport)==null||V.focus()),o()}),O=U.useCallback(P=>{!P||P===1/0||(window.clearTimeout(y.current),T.current=new Date().getTime(),y.current=window.setTimeout(I,P))},[I]);U.useEffect(()=>{const P=x.viewport;if(P){const V=()=>{O(C.current),c==null||c()},q=()=>{const G=new Date().getTime()-T.current;C.current=C.current-G,window.clearTimeout(y.current),l==null||l()};return P.addEventListener(oh,q),P.addEventListener(ah,V),()=>{P.removeEventListener(oh,q),P.removeEventListener(ah,V)}}},[x.viewport,b,l,c,O]),U.useEffect(()=>{s&&!x.isClosePausedRef.current&&O(b)},[s,b,x.isClosePausedRef,O]),U.useEffect(()=>(A(),()=>N()),[A,N]);const Y=U.useMemo(()=>m?_y(m):null,[m]);return x.viewport?M.jsxs(M.Fragment,{children:[Y&&M.jsx(w3,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:Y}),M.jsx(y3,{scope:n,onClose:I,children:Xc.createPortal(M.jsx(bp.ItemSlot,{scope:n,children:M.jsx(e3,{asChild:!0,onEscapeKeyDown:In(a,()=>{x.isFocusedToastEscapeKeyDownRef.current||I(),x.isFocusedToastEscapeKeyDownRef.current=!1}),children:M.jsx(Ei.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":x.swipeDirection,...g,ref:v,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:In(t.onKeyDown,P=>{P.key==="Escape"&&(a==null||a(P.nativeEvent),P.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,I()))}),onPointerDown:In(t.onPointerDown,P=>{P.button===0&&(w.current={x:P.clientX,y:P.clientY})}),onPointerMove:In(t.onPointerMove,P=>{if(!w.current)return;const V=P.clientX-w.current.x,q=P.clientY-w.current.y,G=!!_.current,z=["left","right"].includes(x.swipeDirection),B=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,W=z?B(0,V):0,K=z?0:B(0,q),se=P.pointerType==="touch"?10:2,me={x:W,y:K},Ie={originalEvent:P,delta:me};G?(_.current=me,El(v3,h,Ie,{discrete:!1})):v0(me,x.swipeDirection,se)?(_.current=me,El(g3,u,Ie,{discrete:!1}),P.target.setPointerCapture(P.pointerId)):(Math.abs(V)>se||Math.abs(q)>se)&&(w.current=null)}),onPointerUp:In(t.onPointerUp,P=>{const V=_.current,q=P.target;if(q.hasPointerCapture(P.pointerId)&&q.releasePointerCapture(P.pointerId),_.current=null,w.current=null,V){const G=P.currentTarget,z={originalEvent:P,delta:V};v0(V,x.swipeDirection,x.swipeThreshold)?El(_3,p,z,{discrete:!0}):El(x3,d,z,{discrete:!0}),G.addEventListener("click",B=>B.preventDefault(),{once:!0})}})})})}),x.viewport)})]}):null}),w3=t=>{const{__scopeToast:e,children:n,...i}=t,r=tu(Ca,e),[s,o]=U.useState(!1),[a,l]=U.useState(!1);return T3(()=>o(!0)),U.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:M.jsx(sy,{asChild:!0,children:M.jsx(wp,{...i,children:s&&M.jsxs(M.Fragment,{children:[r.label," ",n]})})})},E3="ToastTitle",hy=U.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return M.jsx(Ei.div,{...i,ref:e})});hy.displayName=E3;var b3="ToastDescription",py=U.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return M.jsx(Ei.div,{...i,ref:e})});py.displayName=b3;var my="ToastAction",gy=U.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?M.jsx(xy,{altText:n,asChild:!0,children:M.jsx(Tp,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${my}\`. Expected non-empty \`string\`.`),null)});gy.displayName=my;var vy="ToastClose",Tp=U.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=S3(vy,n);return M.jsx(xy,{asChild:!0,children:M.jsx(Ei.button,{type:"button",...i,ref:e,onClick:In(t.onClick,r.onClose)})})});Tp.displayName=vy;var xy=U.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return M.jsx(Ei.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function _y(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),C3(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",s=i.dataset.radixToastAnnounceExclude==="";if(!r)if(s){const o=i.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(..._y(i))}}),e}function El(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?ey(r,s):r.dispatchEvent(s)}var v0=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),s=i>r;return e==="left"||e==="right"?s&&i>n:!s&&r>n};function T3(t=()=>{}){const e=Qr(t);va(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function C3(t){return t.nodeType===t.ELEMENT_NODE}function A3(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function md(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var R3=ly,yy=uy,Sy=fy,My=hy,wy=py,Ey=gy,by=Tp;const P3=R3,Ty=U.forwardRef(({className:t,...e},n)=>M.jsx(yy,{ref:n,className:gn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));Ty.displayName=yy.displayName;const N3=Zx("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Cy=U.forwardRef(({className:t,variant:e,...n},i)=>M.jsx(Sy,{ref:i,className:gn(N3({variant:e}),t),...n}));Cy.displayName=Sy.displayName;const L3=U.forwardRef(({className:t,...e},n)=>M.jsx(Ey,{ref:n,className:gn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",t),...e}));L3.displayName=Ey.displayName;const Ay=U.forwardRef(({className:t,...e},n)=>M.jsx(by,{ref:n,className:gn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:M.jsx(qc,{className:"h-4 w-4"})}));Ay.displayName=by.displayName;const Ry=U.forwardRef(({className:t,...e},n)=>M.jsx(My,{ref:n,className:gn("text-sm font-semibold",t),...e}));Ry.displayName=My.displayName;const Py=U.forwardRef(({className:t,...e},n)=>M.jsx(wy,{ref:n,className:gn("text-sm opacity-90",t),...e}));Py.displayName=wy.displayName;function D3(){const{toasts:t}=W_();return M.jsxs(P3,{children:[t.map(function({id:e,title:n,description:i,action:r,...s}){return M.jsxs(Cy,{...s,children:[M.jsxs("div",{className:"grid gap-1",children:[n&&M.jsx(Ry,{children:n}),i&&M.jsx(Py,{children:i})]}),r,M.jsx(Ay,{})]},e)}),M.jsx(Ty,{})]})}const I3=()=>M.jsx(Zw,{basename:"/MyProtfolio",children:M.jsxs(M.Fragment,{children:[M.jsxs($w,{children:[M.jsx(df,{path:"/",element:M.jsx(HP,{})}),M.jsx(df,{path:"*",element:M.jsx(GP,{})})]}),M.jsx(D3,{})]})});Lx(document.getElementById("root")).render(M.jsx(I3,{}));
