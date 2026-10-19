var My=Object.defineProperty;var Ey=(t,e,n)=>e in t?My(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var qe=(t,e,n)=>Ey(t,typeof e!="symbol"?e+"":e,n);function wy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function t0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n0={exports:{}},xc={},i0={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),by=Symbol.for("react.portal"),Ty=Symbol.for("react.fragment"),Cy=Symbol.for("react.strict_mode"),Ay=Symbol.for("react.profiler"),Ry=Symbol.for("react.provider"),Py=Symbol.for("react.context"),Ny=Symbol.for("react.forward_ref"),Ly=Symbol.for("react.suspense"),Dy=Symbol.for("react.memo"),Iy=Symbol.for("react.lazy"),Rp=Symbol.iterator;function Uy(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var r0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,o0={};function eo(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||r0}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a0(){}a0.prototype=eo.prototype;function Qf(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||r0}var Jf=Qf.prototype=new a0;Jf.constructor=Qf;s0(Jf,eo.prototype);Jf.isPureReactComponent=!0;var Pp=Array.isArray,l0=Object.prototype.hasOwnProperty,eh={current:null},c0={key:!0,ref:!0,__self:!0,__source:!0};function u0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)l0.call(e,i)&&!c0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ma,type:t,key:s,ref:o,props:r,_owner:eh.current}}function Fy(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function th(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function Oy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Np=/\/+/g;function $c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Oy(""+t.key):e.toString(36)}function xl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case by:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+$c(o,0):i,Pp(r)?(n="",t!=null&&(n=t.replace(Np,"$&/")+"/"),xl(r,e,n,"",function(c){return c})):r!=null&&(th(r)&&(r=Fy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Np,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+$c(s,a);o+=xl(s,e,n,l,r)}else if(l=Uy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+$c(s,a++),o+=xl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var i=[],r=0;return xl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ky(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},_l={transition:null},By={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:_l,ReactCurrentOwner:eh};function d0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=eo;Ye.Fragment=Ty;Ye.Profiler=Ay;Ye.PureComponent=Qf;Ye.StrictMode=Cy;Ye.Suspense=Ly;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;Ye.act=d0;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=s0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)l0.call(e,l)&&!c0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ma,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:Py,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ry,_context:t},t.Consumer=t};Ye.createElement=u0;Ye.createFactory=function(t){var e=u0.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Ny,render:t}};Ye.isValidElement=th;Ye.lazy=function(t){return{$$typeof:Iy,_payload:{_status:-1,_result:t},_init:ky}};Ye.memo=function(t,e){return{$$typeof:Dy,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=_l.transition;_l.transition={};try{t()}finally{_l.transition=e}};Ye.unstable_act=d0;Ye.useCallback=function(t,e){return hn.current.useCallback(t,e)};Ye.useContext=function(t){return hn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return hn.current.useEffect(t,e)};Ye.useId=function(){return hn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return hn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};Ye.useRef=function(t){return hn.current.useRef(t)};Ye.useState=function(t){return hn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return hn.current.useTransition()};Ye.version="18.3.1";i0.exports=Ye;var F=i0.exports;const ir=t0(F),f0=wy({__proto__:null,default:ir},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=F,Vy=Symbol.for("react.element"),Hy=Symbol.for("react.fragment"),Gy=Object.prototype.hasOwnProperty,Wy=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xy={key:!0,ref:!0,__self:!0,__source:!0};function h0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Gy.call(e,i)&&!Xy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Vy,type:t,key:s,ref:o,props:r,_owner:Wy.current}}xc.Fragment=Hy;xc.jsx=h0;xc.jsxs=h0;n0.exports=xc;var M=n0.exports,p0={exports:{}},On={},m0={exports:{}},g0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,z){var Y=B.length;B.push(z);e:for(;0<Y;){var Z=Y-1>>>1,fe=B[Z];if(0<r(fe,z))B[Z]=z,B[Y]=fe,Y=Z;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var z=B[0],Y=B.pop();if(Y!==z){B[0]=Y;e:for(var Z=0,fe=B.length,_e=fe>>>1;Z<_e;){var We=2*(Z+1)-1,He=B[We],Ve=We+1,Q=B[Ve];if(0>r(He,Y))Ve<fe&&0>r(Q,He)?(B[Z]=Q,B[Ve]=Y,Z=Ve):(B[Z]=He,B[We]=Y,Z=We);else if(Ve<fe&&0>r(Q,Y))B[Z]=Q,B[Ve]=Y,Z=Ve;else break e}}return z}function r(B,z){var Y=B.sortIndex-z.sortIndex;return Y!==0?Y:B.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,u=3,m=!1,v=!1,S=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(B){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=B)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function _(B){if(S=!1,E(B),!v)if(n(l)!==null)v=!0,K(b);else{var z=n(c);z!==null&&j(_,z.startTime-B)}}function b(B,z){v=!1,S&&(S=!1,d(y),y=-1),m=!0;var Y=u;try{for(E(z),h=n(l);h!==null&&(!(h.expirationTime>z)||B&&!L());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,u=h.priorityLevel;var fe=Z(h.expirationTime<=z);z=t.unstable_now(),typeof fe=="function"?h.callback=fe:h===n(l)&&i(l),E(z)}else i(l);h=n(l)}if(h!==null)var _e=!0;else{var We=n(c);We!==null&&j(_,We.startTime-z),_e=!1}return _e}finally{h=null,u=Y,m=!1}}var T=!1,C=null,y=-1,R=5,A=-1;function L(){return!(t.unstable_now()-A<R)}function D(){if(C!==null){var B=t.unstable_now();A=B;var z=!0;try{z=C(!0,B)}finally{z?H():(T=!1,C=null)}}else T=!1}var H;if(typeof g=="function")H=function(){g(D)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,k=N.port2;N.port1.onmessage=D,H=function(){k.postMessage(null)}}else H=function(){p(D,0)};function K(B){C=B,T||(T=!0,H())}function j(B,z){y=p(function(){B(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,K(b))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(u){case 1:case 2:case 3:var z=3;break;default:z=u}var Y=u;u=z;try{return B()}finally{u=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=u;u=B;try{return z()}finally{u=Y}},t.unstable_scheduleCallback=function(B,z,Y){var Z=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Z+Y:Z):Y=Z,B){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Y+fe,B={id:f++,callback:z,priorityLevel:B,startTime:Y,expirationTime:fe,sortIndex:-1},Y>Z?(B.sortIndex=Y,e(c,B),n(l)===null&&B===n(c)&&(S?(d(y),y=-1):S=!0,j(_,Y-Z))):(B.sortIndex=fe,e(l,B),v||m||(v=!0,K(b))),B},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(B){var z=u;return function(){var Y=u;u=z;try{return B.apply(this,arguments)}finally{u=Y}}}})(g0);m0.exports=g0;var jy=m0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy=F,Fn=jy;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v0=new Set,Ho={};function es(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(Ho[t]=e,t=0;t<e.length;t++)v0.add(e[t])}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rd=Object.prototype.hasOwnProperty,$y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lp={},Dp={};function qy(t){return rd.call(Dp,t)?!0:rd.call(Lp,t)?!1:$y.test(t)?Dp[t]=!0:(Lp[t]=!0,!1)}function Ky(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Zy(t,e,n,i){if(e===null||typeof e>"u"||Ky(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var nh=/[\-:]([a-z])/g;function ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nh,ih);Kt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nh,ih);Kt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nh,ih);Kt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rh(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zy(e,n,r,i)&&(n=null),i||r===null?qy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Xi=Yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),x0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),oh=Symbol.for("react.forward_ref"),od=Symbol.for("react.suspense"),ad=Symbol.for("react.suspense_list"),ah=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),y0=Symbol.for("react.offscreen"),Ip=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=Ip&&t[Ip]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,qc;function bo(t){if(qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+t}var Kc=!1;function Zc(t,e){if(!t||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function Qy(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=Zc(t.type,!1),t;case 11:return t=Zc(t.type.render,!1),t;case 1:return t=Zc(t.type,!0),t;default:return""}}function ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case sd:return"Profiler";case sh:return"StrictMode";case od:return"Suspense";case ad:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _0:return(t.displayName||"Context")+".Consumer";case x0:return(t._context.displayName||"Context")+".Provider";case oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ah:return e=t.displayName||null,e!==null?e:ld(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return ld(t(e))}catch{}}return null}function Jy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ld(e);case 8:return e===sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function S0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function eS(t){var e=S0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pa(t){t._valueTracker||(t._valueTracker=eS(t))}function M0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=S0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cd(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Up(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function E0(t,e){e=e.checked,e!=null&&rh(t,"checked",e,!1)}function ud(t,e){E0(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&dd(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dd(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var To=Array.isArray;function Is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Op(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(To(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function w0(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function b0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?b0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,T0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tS=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){tS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function C0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function A0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=C0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var nS=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pd(t,e){if(e){if(nS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function md(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gd=null;function lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vd=null,Us=null,Fs=null;function Bp(t){if(t=xa(t)){if(typeof vd!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Ec(e),vd(t.stateNode,t.type,e))}}function R0(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function P0(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,Bp(t),e)for(t=0;t<e.length;t++)Bp(e[t])}}function N0(t,e){return t(e)}function L0(){}var Qc=!1;function D0(t,e,n){if(Qc)return t(e,n);Qc=!0;try{return N0(t,e,n)}finally{Qc=!1,(Us!==null||Fs!==null)&&(L0(),P0())}}function Wo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ec(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var xd=!1;if(zi)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){xd=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{xd=!1}function iS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Lo=!1,zl=null,Vl=!1,_d=null,rS={onError:function(t){Lo=!0,zl=t}};function sS(t,e,n,i,r,s,o,a,l){Lo=!1,zl=null,iS.apply(rS,arguments)}function oS(t,e,n,i,r,s,o,a,l){if(sS.apply(this,arguments),Lo){if(Lo){var c=zl;Lo=!1,zl=null}else throw Error(se(198));Vl||(Vl=!0,_d=c)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function I0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zp(t){if(ts(t)!==t)throw Error(se(188))}function aS(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zp(r),t;if(s===i)return zp(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function U0(t){return t=aS(t),t!==null?F0(t):null}function F0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=F0(t);if(e!==null)return e;t=t.sibling}return null}var O0=Fn.unstable_scheduleCallback,Vp=Fn.unstable_cancelCallback,lS=Fn.unstable_shouldYield,cS=Fn.unstable_requestPaint,At=Fn.unstable_now,uS=Fn.unstable_getCurrentPriorityLevel,ch=Fn.unstable_ImmediatePriority,k0=Fn.unstable_UserBlockingPriority,Hl=Fn.unstable_NormalPriority,dS=Fn.unstable_LowPriority,B0=Fn.unstable_IdlePriority,_c=null,yi=null;function fS(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(_c,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:mS,hS=Math.log,pS=Math.LN2;function mS(t){return t>>>=0,t===0?32:31-(hS(t)/pS|0)|0}var La=64,Da=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Co(a):(s&=o,s!==0&&(i=Co(s)))}else o=n&~r,o!==0?i=Co(o):s!==0&&(i=Co(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function gS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-si(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=gS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function z0(){var t=La;return La<<=1,!(La&4194240)&&(La=64),t}function Jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function xS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function V0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var H0,dh,G0,W0,X0,Sd=!1,Ia=[],pr=null,mr=null,gr=null,Xo=new Map,jo=new Map,ar=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function co(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&dh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function yS(t,e,n,i,r){switch(e){case"focusin":return pr=co(pr,t,e,n,i,r),!0;case"dragenter":return mr=co(mr,t,e,n,i,r),!0;case"mouseover":return gr=co(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Xo.set(s,co(Xo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jo.set(s,co(jo.get(s)||null,t,e,n,i,r)),!0}return!1}function j0(t){var e=Or(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=I0(n),e!==null){t.blockedOn=e,X0(t.priority,function(){G0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gd=i,n.target.dispatchEvent(i),gd=null}else return e=xa(n),e!==null&&dh(e),t.blockedOn=n,!1;e.shift()}return!0}function Gp(t,e,n){yl(t)&&n.delete(e)}function SS(){Sd=!1,pr!==null&&yl(pr)&&(pr=null),mr!==null&&yl(mr)&&(mr=null),gr!==null&&yl(gr)&&(gr=null),Xo.forEach(Gp),jo.forEach(Gp)}function uo(t,e){t.blockedOn===e&&(t.blockedOn=null,Sd||(Sd=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,SS)))}function Yo(t){function e(r){return uo(r,t)}if(0<Ia.length){uo(Ia[0],t);for(var n=1;n<Ia.length;n++){var i=Ia[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&uo(pr,t),mr!==null&&uo(mr,t),gr!==null&&uo(gr,t),Xo.forEach(e),jo.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)j0(n),n.blockedOn===null&&ar.shift()}var Os=Xi.ReactCurrentBatchConfig,Wl=!0;function MS(t,e,n,i){var r=ot,s=Os.transition;Os.transition=null;try{ot=1,fh(t,e,n,i)}finally{ot=r,Os.transition=s}}function ES(t,e,n,i){var r=ot,s=Os.transition;Os.transition=null;try{ot=4,fh(t,e,n,i)}finally{ot=r,Os.transition=s}}function fh(t,e,n,i){if(Wl){var r=Md(t,e,n,i);if(r===null)cu(t,e,i,Xl,n),Hp(t,i);else if(yS(r,t,e,n,i))i.stopPropagation();else if(Hp(t,i),e&4&&-1<_S.indexOf(t)){for(;r!==null;){var s=xa(r);if(s!==null&&H0(s),s=Md(t,e,n,i),s===null&&cu(t,e,i,Xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cu(t,e,i,null,n)}}var Xl=null;function Md(t,e,n,i){if(Xl=null,t=lh(i),t=Or(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=I0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function Y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uS()){case ch:return 1;case k0:return 4;case Hl:case dS:return 16;case B0:return 536870912;default:return 16}default:return 16}}var ur=null,hh=null,Sl=null;function $0(){if(Sl)return Sl;var t,e=hh,n=e.length,i,r="value"in ur?ur.value:ur.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Sl=r.slice(t,1<i?1-i:void 0)}function Ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ua(){return!0}function Wp(){return!1}function kn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ua:Wp,this.isPropagationStopped=Wp,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=kn(to),va=bt({},to,{view:0,detail:0}),wS=kn(va),eu,tu,fo,yc=bt({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(eu=t.screenX-fo.screenX,tu=t.screenY-fo.screenY):tu=eu=0,fo=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Xp=kn(yc),bS=bt({},yc,{dataTransfer:0}),TS=kn(bS),CS=bt({},va,{relatedTarget:0}),nu=kn(CS),AS=bt({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),RS=kn(AS),PS=bt({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NS=kn(PS),LS=bt({},to,{data:0}),jp=kn(LS),DS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},US={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=US[t])?!!e[t]:!1}function mh(){return FS}var OS=bt({},va,{key:function(t){if(t.key){var e=DS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mh,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kS=kn(OS),BS=bt({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=kn(BS),zS=bt({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mh}),VS=kn(zS),HS=bt({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),GS=kn(HS),WS=bt({},yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XS=kn(WS),jS=[9,13,27,32],gh=zi&&"CompositionEvent"in window,Do=null;zi&&"documentMode"in document&&(Do=document.documentMode);var YS=zi&&"TextEvent"in window&&!Do,q0=zi&&(!gh||Do&&8<Do&&11>=Do),$p=" ",qp=!1;function K0(t,e){switch(t){case"keyup":return jS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function $S(t,e){switch(t){case"compositionend":return Z0(e);case"keypress":return e.which!==32?null:(qp=!0,$p);case"textInput":return t=e.data,t===$p&&qp?null:t;default:return null}}function qS(t,e){if(Ms)return t==="compositionend"||!gh&&K0(t,e)?(t=$0(),Sl=hh=ur=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return q0&&e.locale!=="ko"?null:e.data;default:return null}}var KS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KS[t.type]:e==="textarea"}function Q0(t,e,n,i){R0(i),e=jl(e,"onChange"),0<e.length&&(n=new ph("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Io=null,$o=null;function ZS(t){cv(t,0)}function Sc(t){var e=bs(t);if(M0(e))return t}function QS(t,e){if(t==="change")return e}var J0=!1;if(zi){var iu;if(zi){var ru="oninput"in document;if(!ru){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),ru=typeof Zp.oninput=="function"}iu=ru}else iu=!1;J0=iu&&(!document.documentMode||9<document.documentMode)}function Qp(){Io&&(Io.detachEvent("onpropertychange",ev),$o=Io=null)}function ev(t){if(t.propertyName==="value"&&Sc($o)){var e=[];Q0(e,$o,t,lh(t)),D0(ZS,e)}}function JS(t,e,n){t==="focusin"?(Qp(),Io=e,$o=n,Io.attachEvent("onpropertychange",ev)):t==="focusout"&&Qp()}function eM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sc($o)}function tM(t,e){if(t==="click")return Sc(e)}function nM(t,e){if(t==="input"||t==="change")return Sc(e)}function iM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:iM;function qo(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!rd.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function Jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function em(t,e){var n=Jp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jp(n)}}function tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nv(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rM(t){var e=nv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tv(n.ownerDocument.documentElement,n)){if(i!==null&&vh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=em(n,s);var o=em(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sM=zi&&"documentMode"in document&&11>=document.documentMode,Es=null,Ed=null,Uo=null,wd=!1;function tm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wd||Es==null||Es!==Bl(i)||(i=Es,"selectionStart"in i&&vh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Uo&&qo(Uo,i)||(Uo=i,i=jl(Ed,"onSelect"),0<i.length&&(e=new ph("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},su={},iv={};zi&&(iv=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Mc(t){if(su[t])return su[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iv)return su[t]=e[n];return t}var rv=Mc("animationend"),sv=Mc("animationiteration"),ov=Mc("animationstart"),av=Mc("transitionend"),lv=new Map,nm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){lv.set(t,e),es(e,[t])}for(var ou=0;ou<nm.length;ou++){var au=nm[ou],oM=au.toLowerCase(),aM=au[0].toUpperCase()+au.slice(1);Tr(oM,"on"+aM)}Tr(rv,"onAnimationEnd");Tr(sv,"onAnimationIteration");Tr(ov,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(av,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function im(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,oS(i,e,void 0,t),t.currentTarget=null}function cv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;im(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;im(r,a,c),s=l}}}if(Vl)throw t=_d,Vl=!1,_d=null,t}function gt(t,e){var n=e[Rd];n===void 0&&(n=e[Rd]=new Set);var i=t+"__bubble";n.has(i)||(uv(e,t,2,!1),n.add(i))}function lu(t,e,n){var i=0;e&&(i|=4),uv(n,t,i,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[Oa]){t[Oa]=!0,v0.forEach(function(n){n!=="selectionchange"&&(lM.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,lu("selectionchange",!1,e))}}function uv(t,e,n,i){switch(Y0(e)){case 1:var r=MS;break;case 4:r=ES;break;default:r=fh}n=r.bind(null,e,n,t),r=void 0,!xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}D0(function(){var c=s,f=lh(n),h=[];e:{var u=lv.get(t);if(u!==void 0){var m=ph,v=t;switch(t){case"keypress":if(Ml(n)===0)break e;case"keydown":case"keyup":m=kS;break;case"focusin":v="focus",m=nu;break;case"focusout":v="blur",m=nu;break;case"beforeblur":case"afterblur":m=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=TS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=VS;break;case rv:case sv:case ov:m=RS;break;case av:m=GS;break;case"scroll":m=wS;break;case"wheel":m=XS;break;case"copy":case"cut":case"paste":m=NS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Yp}var S=(e&4)!==0,p=!S&&t==="scroll",d=S?u!==null?u+"Capture":null:u;S=[];for(var g=c,E;g!==null;){E=g;var _=E.stateNode;if(E.tag===5&&_!==null&&(E=_,d!==null&&(_=Wo(g,d),_!=null&&S.push(Zo(g,_,E)))),p)break;g=g.return}0<S.length&&(u=new m(u,v,null,n,f),h.push({event:u,listeners:S}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",u&&n!==gd&&(v=n.relatedTarget||n.fromElement)&&(Or(v)||v[Vi]))break e;if((m||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Or(v):null,v!==null&&(p=ts(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(S=Xp,_="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=Yp,_="onPointerLeave",d="onPointerEnter",g="pointer"),p=m==null?u:bs(m),E=v==null?u:bs(v),u=new S(_,g+"leave",m,n,f),u.target=p,u.relatedTarget=E,_=null,Or(f)===c&&(S=new S(d,g+"enter",v,n,f),S.target=E,S.relatedTarget=p,_=S),p=_,m&&v)t:{for(S=m,d=v,g=0,E=S;E;E=ss(E))g++;for(E=0,_=d;_;_=ss(_))E++;for(;0<g-E;)S=ss(S),g--;for(;0<E-g;)d=ss(d),E--;for(;g--;){if(S===d||d!==null&&S===d.alternate)break t;S=ss(S),d=ss(d)}S=null}else S=null;m!==null&&rm(h,u,m,S,!1),v!==null&&p!==null&&rm(h,p,v,S,!0)}}e:{if(u=c?bs(c):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var b=QS;else if(Kp(u))if(J0)b=nM;else{b=eM;var T=JS}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(b=tM);if(b&&(b=b(t,c))){Q0(h,b,n,f);break e}T&&T(t,u,c),t==="focusout"&&(T=u._wrapperState)&&T.controlled&&u.type==="number"&&dd(u,"number",u.value)}switch(T=c?bs(c):window,t){case"focusin":(Kp(T)||T.contentEditable==="true")&&(Es=T,Ed=c,Uo=null);break;case"focusout":Uo=Ed=Es=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,tm(h,n,f);break;case"selectionchange":if(sM)break;case"keydown":case"keyup":tm(h,n,f)}var C;if(gh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ms?K0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(q0&&n.locale!=="ko"&&(Ms||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ms&&(C=$0()):(ur=f,hh="value"in ur?ur.value:ur.textContent,Ms=!0)),T=jl(c,y),0<T.length&&(y=new jp(y,t,null,n,f),h.push({event:y,listeners:T}),C?y.data=C:(C=Z0(n),C!==null&&(y.data=C)))),(C=YS?$S(t,n):qS(t,n))&&(c=jl(c,"onBeforeInput"),0<c.length&&(f=new jp("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=C))}cv(h,e)})}function Zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Wo(t,n),s!=null&&i.unshift(Zo(t,s,r)),s=Wo(t,e),s!=null&&i.push(Zo(t,s,r))),t=t.return}return i}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Wo(n,s),l!=null&&o.unshift(Zo(n,l,a))):r||(l=Wo(n,s),l!=null&&o.push(Zo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cM=/\r\n?/g,uM=/\u0000|\uFFFD/g;function sm(t){return(typeof t=="string"?t:""+t).replace(cM,`
`).replace(uM,"")}function ka(t,e,n){if(e=sm(e),sm(t)!==e&&n)throw Error(se(425))}function Yl(){}var bd=null,Td=null;function Cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ad=typeof setTimeout=="function"?setTimeout:void 0,dM=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,fM=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(t){return om.resolve(null).then(t).catch(hM)}:Ad;function hM(t){setTimeout(function(){throw t})}function uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Yo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Yo(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),vi="__reactFiber$"+no,Qo="__reactProps$"+no,Vi="__reactContainer$"+no,Rd="__reactEvents$"+no,pM="__reactListeners$"+no,mM="__reactHandles$"+no;function Or(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vi]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[vi])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[vi]||t[Vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Ec(t){return t[Qo]||null}var Pd=[],Ts=-1;function Cr(t){return{current:t}}function vt(t){0>Ts||(t.current=Pd[Ts],Pd[Ts]=null,Ts--)}function ht(t,e){Ts++,Pd[Ts]=t.current,t.current=e}var wr={},an=Cr(wr),yn=Cr(!1),Wr=wr;function Xs(t,e){var n=t.type.contextTypes;if(!n)return wr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function $l(){vt(yn),vt(an)}function lm(t,e,n){if(an.current!==wr)throw Error(se(168));ht(an,e),ht(yn,n)}function dv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Jy(t)||"Unknown",r));return bt({},n,i)}function ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Wr=an.current,ht(an,t),ht(yn,yn.current),!0}function cm(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=dv(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,vt(yn),vt(an),ht(an,t)):vt(yn),ht(yn,n)}var Ii=null,wc=!1,du=!1;function fv(t){Ii===null?Ii=[t]:Ii.push(t)}function gM(t){wc=!0,fv(t)}function Ar(){if(!du&&Ii!==null){du=!0;var t=0,e=ot;try{var n=Ii;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,wc=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),O0(ch,Ar),r}finally{ot=e,du=!1}}return null}var Cs=[],As=0,Kl=null,Zl=0,Vn=[],Hn=0,Xr=null,Ui=1,Fi="";function Ur(t,e){Cs[As++]=Zl,Cs[As++]=Kl,Kl=t,Zl=e}function hv(t,e,n){Vn[Hn++]=Ui,Vn[Hn++]=Fi,Vn[Hn++]=Xr,Xr=t;var i=Ui;t=Fi;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ui=1<<32-si(e)+r|n<<r|i,Fi=s+t}else Ui=1<<s|n<<r|i,Fi=t}function xh(t){t.return!==null&&(Ur(t,1),hv(t,1,0))}function _h(t){for(;t===Kl;)Kl=Cs[--As],Cs[As]=null,Zl=Cs[--As],Cs[As]=null;for(;t===Xr;)Xr=Vn[--Hn],Vn[Hn]=null,Fi=Vn[--Hn],Vn[Hn]=null,Ui=Vn[--Hn],Vn[Hn]=null}var In=null,Dn=null,_t=!1,ni=null;function pv(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Dn=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Ui,overflow:Fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Dn=null,!0):!1;default:return!1}}function Nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ld(t){if(_t){var e=Dn;if(e){var n=e;if(!um(t,e)){if(Nd(t))throw Error(se(418));e=vr(n.nextSibling);var i=In;e&&um(t,e)?pv(i,n):(t.flags=t.flags&-4097|2,_t=!1,In=t)}}else{if(Nd(t))throw Error(se(418));t.flags=t.flags&-4097|2,_t=!1,In=t}}}function dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function Ba(t){if(t!==In)return!1;if(!_t)return dm(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cd(t.type,t.memoizedProps)),e&&(e=Dn)){if(Nd(t))throw mv(),Error(se(418));for(;e;)pv(t,e),e=vr(e.nextSibling)}if(dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=In?vr(t.stateNode.nextSibling):null;return!0}function mv(){for(var t=Dn;t;)t=vr(t.nextSibling)}function js(){Dn=In=null,_t=!1}function yh(t){ni===null?ni=[t]:ni.push(t)}var vM=Xi.ReactCurrentBatchConfig;function ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function za(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fm(t){var e=t._init;return e(t._payload)}function gv(t){function e(d,g){if(t){var E=d.deletions;E===null?(d.deletions=[g],d.flags|=16):E.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=Sr(d,g),d.index=0,d.sibling=null,d}function s(d,g,E){return d.index=E,t?(E=d.alternate,E!==null?(E=E.index,E<g?(d.flags|=2,g):E):(d.flags|=2,g)):(d.flags|=1048576,g)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,g,E,_){return g===null||g.tag!==6?(g=xu(E,d.mode,_),g.return=d,g):(g=r(g,E),g.return=d,g)}function l(d,g,E,_){var b=E.type;return b===Ss?f(d,g,E.props.children,_,E.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===rr&&fm(b)===g.type)?(_=r(g,E.props),_.ref=ho(d,g,E),_.return=d,_):(_=Rl(E.type,E.key,E.props,null,d.mode,_),_.ref=ho(d,g,E),_.return=d,_)}function c(d,g,E,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==E.containerInfo||g.stateNode.implementation!==E.implementation?(g=_u(E,d.mode,_),g.return=d,g):(g=r(g,E.children||[]),g.return=d,g)}function f(d,g,E,_,b){return g===null||g.tag!==7?(g=Gr(E,d.mode,_,b),g.return=d,g):(g=r(g,E),g.return=d,g)}function h(d,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return g=xu(""+g,d.mode,E),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ra:return E=Rl(g.type,g.key,g.props,null,d.mode,E),E.ref=ho(d,null,g),E.return=d,E;case ys:return g=_u(g,d.mode,E),g.return=d,g;case rr:var _=g._init;return h(d,_(g._payload),E)}if(To(g)||ao(g))return g=Gr(g,d.mode,E,null),g.return=d,g;za(d,g)}return null}function u(d,g,E,_){var b=g!==null?g.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return b!==null?null:a(d,g,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ra:return E.key===b?l(d,g,E,_):null;case ys:return E.key===b?c(d,g,E,_):null;case rr:return b=E._init,u(d,g,b(E._payload),_)}if(To(E)||ao(E))return b!==null?null:f(d,g,E,_,null);za(d,E)}return null}function m(d,g,E,_,b){if(typeof _=="string"&&_!==""||typeof _=="number")return d=d.get(E)||null,a(g,d,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ra:return d=d.get(_.key===null?E:_.key)||null,l(g,d,_,b);case ys:return d=d.get(_.key===null?E:_.key)||null,c(g,d,_,b);case rr:var T=_._init;return m(d,g,E,T(_._payload),b)}if(To(_)||ao(_))return d=d.get(E)||null,f(g,d,_,b,null);za(g,_)}return null}function v(d,g,E,_){for(var b=null,T=null,C=g,y=g=0,R=null;C!==null&&y<E.length;y++){C.index>y?(R=C,C=null):R=C.sibling;var A=u(d,C,E[y],_);if(A===null){C===null&&(C=R);break}t&&C&&A.alternate===null&&e(d,C),g=s(A,g,y),T===null?b=A:T.sibling=A,T=A,C=R}if(y===E.length)return n(d,C),_t&&Ur(d,y),b;if(C===null){for(;y<E.length;y++)C=h(d,E[y],_),C!==null&&(g=s(C,g,y),T===null?b=C:T.sibling=C,T=C);return _t&&Ur(d,y),b}for(C=i(d,C);y<E.length;y++)R=m(C,d,y,E[y],_),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?y:R.key),g=s(R,g,y),T===null?b=R:T.sibling=R,T=R);return t&&C.forEach(function(L){return e(d,L)}),_t&&Ur(d,y),b}function S(d,g,E,_){var b=ao(E);if(typeof b!="function")throw Error(se(150));if(E=b.call(E),E==null)throw Error(se(151));for(var T=b=null,C=g,y=g=0,R=null,A=E.next();C!==null&&!A.done;y++,A=E.next()){C.index>y?(R=C,C=null):R=C.sibling;var L=u(d,C,A.value,_);if(L===null){C===null&&(C=R);break}t&&C&&L.alternate===null&&e(d,C),g=s(L,g,y),T===null?b=L:T.sibling=L,T=L,C=R}if(A.done)return n(d,C),_t&&Ur(d,y),b;if(C===null){for(;!A.done;y++,A=E.next())A=h(d,A.value,_),A!==null&&(g=s(A,g,y),T===null?b=A:T.sibling=A,T=A);return _t&&Ur(d,y),b}for(C=i(d,C);!A.done;y++,A=E.next())A=m(C,d,y,A.value,_),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?y:A.key),g=s(A,g,y),T===null?b=A:T.sibling=A,T=A);return t&&C.forEach(function(D){return e(d,D)}),_t&&Ur(d,y),b}function p(d,g,E,_){if(typeof E=="object"&&E!==null&&E.type===Ss&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ra:e:{for(var b=E.key,T=g;T!==null;){if(T.key===b){if(b=E.type,b===Ss){if(T.tag===7){n(d,T.sibling),g=r(T,E.props.children),g.return=d,d=g;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===rr&&fm(b)===T.type){n(d,T.sibling),g=r(T,E.props),g.ref=ho(d,T,E),g.return=d,d=g;break e}n(d,T);break}else e(d,T);T=T.sibling}E.type===Ss?(g=Gr(E.props.children,d.mode,_,E.key),g.return=d,d=g):(_=Rl(E.type,E.key,E.props,null,d.mode,_),_.ref=ho(d,g,E),_.return=d,d=_)}return o(d);case ys:e:{for(T=E.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===E.containerInfo&&g.stateNode.implementation===E.implementation){n(d,g.sibling),g=r(g,E.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=_u(E,d.mode,_),g.return=d,d=g}return o(d);case rr:return T=E._init,p(d,g,T(E._payload),_)}if(To(E))return v(d,g,E,_);if(ao(E))return S(d,g,E,_);za(d,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,E),g.return=d,d=g):(n(d,g),g=xu(E,d.mode,_),g.return=d,d=g),o(d)):n(d,g)}return p}var Ys=gv(!0),vv=gv(!1),Ql=Cr(null),Jl=null,Rs=null,Sh=null;function Mh(){Sh=Rs=Jl=null}function Eh(t){var e=Ql.current;vt(Ql),t._currentValue=e}function Dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){Jl=t,Sh=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(Sh!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(Jl===null)throw Error(se(308));Rs=t,Jl.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var kr=null;function wh(t){kr===null?kr=[t]:kr.push(t)}function xv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Hi(t,i)}function Hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(t,n)}return r=i.interleaved,r===null?(e.next=e,wh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(t,n)}function El(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}function hm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ec(t,e,n,i){var r=t.updateQueue;sr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,m=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,S=a;switch(u=e,m=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(m,h,u);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,u=typeof v=="function"?v.call(m,h,u):v,u==null)break e;h=bt({},h,u);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else m={eventTime:m,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=h}}function pm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var _a={},Si=Cr(_a),Jo=Cr(_a),ea=Cr(_a);function Br(t){if(t===_a)throw Error(se(174));return t}function Th(t,e){switch(ht(ea,e),ht(Jo,t),ht(Si,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hd(e,t)}vt(Si),ht(Si,e)}function $s(){vt(Si),vt(Jo),vt(ea)}function yv(t){Br(ea.current);var e=Br(Si.current),n=hd(e,t.type);e!==n&&(ht(Jo,t),ht(Si,n))}function Ch(t){Jo.current===t&&(vt(Si),vt(Jo))}var St=Cr(0);function tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function Ah(){for(var t=0;t<fu.length;t++)fu[t]._workInProgressVersionPrimary=null;fu.length=0}var wl=Xi.ReactCurrentDispatcher,hu=Xi.ReactCurrentBatchConfig,jr=0,Et=null,It=null,Vt=null,nc=!1,Fo=!1,ta=0,xM=0;function Jt(){throw Error(se(321))}function Rh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function Ph(t,e,n,i,r,s){if(jr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wl.current=t===null||t.memoizedState===null?MM:EM,t=n(i,r),Fo){s=0;do{if(Fo=!1,ta=0,25<=s)throw Error(se(301));s+=1,Vt=It=null,e.updateQueue=null,wl.current=wM,t=n(i,r)}while(Fo)}if(wl.current=ic,e=It!==null&&It.next!==null,jr=0,Vt=It=Et=null,nc=!1,e)throw Error(se(300));return t}function Nh(){var t=ta!==0;return ta=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Et.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Yn(){if(It===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Vt===null?Et.memoizedState:Vt.next;if(e!==null)Vt=e,It=t;else{if(t===null)throw Error(se(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Vt===null?Et.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function na(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((jr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Et.lanes|=f,Yr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sv(){}function Mv(t,e){var n=Et,i=Yn(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Lh(bv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,ia(9,wv.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(se(349));jr&30||Ev(n,e,r)}return r}function Ev(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wv(t,e,n,i){e.value=n,e.getSnapshot=i,Tv(e)&&Cv(t)}function bv(t,e,n){return n(function(){Tv(e)&&Cv(t)})}function Tv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function Cv(t){var e=Hi(t,1);e!==null&&oi(e,t,1,-1)}function mm(t){var e=mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},e.queue=t,t=t.dispatch=SM.bind(null,Et,t),[e.memoizedState,t]}function ia(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Av(){return Yn().memoizedState}function bl(t,e,n,i){var r=mi();Et.flags|=t,r.memoizedState=ia(1|e,n,void 0,i===void 0?null:i)}function bc(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&Rh(i,o.deps)){r.memoizedState=ia(e,n,s,i);return}}Et.flags|=t,r.memoizedState=ia(1|e,n,s,i)}function gm(t,e){return bl(8390656,8,t,e)}function Lh(t,e){return bc(2048,8,t,e)}function Rv(t,e){return bc(4,2,t,e)}function Pv(t,e){return bc(4,4,t,e)}function Nv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lv(t,e,n){return n=n!=null?n.concat([t]):null,bc(4,4,Nv.bind(null,e,t),n)}function Dh(){}function Dv(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Iv(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Uv(t,e,n){return jr&21?(ci(n,e)||(n=z0(),Et.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function _M(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=hu.transition;hu.transition={};try{t(!1),e()}finally{ot=n,hu.transition=i}}function Fv(){return Yn().memoizedState}function yM(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ov(t))kv(e,n);else if(n=xv(t,e,n,i),n!==null){var r=dn();oi(n,t,i,r),Bv(n,e,i)}}function SM(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ov(t))kv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,wh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=xv(t,e,r,i),n!==null&&(r=dn(),oi(n,t,i,r),Bv(n,e,i))}}function Ov(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function kv(t,e){Fo=nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}var ic={readContext:jn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},MM={readContext:jn,useCallback:function(t,e){return mi().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bl(4194308,4,Nv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return bl(4,2,t,e)},useMemo:function(t,e){var n=mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yM.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=mi();return t={current:t},e.memoizedState=t},useState:mm,useDebugValue:Dh,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=mm(!1),e=t[0];return t=_M.bind(null,t[1]),mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=mi();if(_t){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Ht===null)throw Error(se(349));jr&30||Ev(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gm(bv.bind(null,i,s,t),[t]),i.flags|=2048,ia(9,wv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=mi(),e=Ht.identifierPrefix;if(_t){var n=Fi,i=Ui;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},EM={readContext:jn,useCallback:Dv,useContext:jn,useEffect:Lh,useImperativeHandle:Lv,useInsertionEffect:Rv,useLayoutEffect:Pv,useMemo:Iv,useReducer:pu,useRef:Av,useState:function(){return pu(na)},useDebugValue:Dh,useDeferredValue:function(t){var e=Yn();return Uv(e,It.memoizedState,t)},useTransition:function(){var t=pu(na)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:Sv,useSyncExternalStore:Mv,useId:Fv,unstable_isNewReconciler:!1},wM={readContext:jn,useCallback:Dv,useContext:jn,useEffect:Lh,useImperativeHandle:Lv,useInsertionEffect:Rv,useLayoutEffect:Pv,useMemo:Iv,useReducer:mu,useRef:Av,useState:function(){return mu(na)},useDebugValue:Dh,useDeferredValue:function(t){var e=Yn();return It===null?e.memoizedState=t:Uv(e,It.memoizedState,t)},useTransition:function(){var t=mu(na)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:Sv,useSyncExternalStore:Mv,useId:Fv,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Id(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tc={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=yr(t),s=ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(oi(e,t,r,i),El(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=yr(t),s=ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(oi(e,t,r,i),El(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=yr(t),r=ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=xr(t,r,i),e!==null&&(oi(e,t,i,n),El(e,t,i))}};function vm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!qo(n,i)||!qo(r,s):!0}function zv(t,e,n){var i=!1,r=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=Sn(e)?Wr:an.current,i=e.contextTypes,s=(i=i!=null)?Xs(t,r):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function xm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tc.enqueueReplaceState(e,e.state,null)}function Ud(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=Sn(e)?Wr:an.current,r.context=Xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Id(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tc.enqueueReplaceState(r,r.state,null),ec(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",i=e;do n+=Qy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bM=typeof WeakMap=="function"?WeakMap:Map;function Vv(t,e,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){sc||(sc=!0,jd=i),Fd(t,e)},n}function Hv(t,e,n){n=ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fd(t,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _m(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new bM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=BM.bind(null,t,e,n),e.then(t,t))}function ym(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ki(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var TM=Xi.ReactCurrentOwner,_n=!1;function un(t,e,n,i){e.child=t===null?vv(e,null,n,i):Ys(e,t.child,n,i)}function Mm(t,e,n,i,r){n=n.render;var s=e.ref;return ks(e,r),i=Ph(t,e,n,i,s,r),n=Nh(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(_t&&n&&xh(e),e.flags|=1,un(t,e,i,r),e.child)}function Em(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Vh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gv(t,e,s,i,r)):(t=Rl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(o,i)&&t.ref===e.ref)return Gi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Gv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(qo(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,Gi(t,e,r)}return Od(t,e,n,i,r)}function Wv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Ns,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Ns,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Ns,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Ns,An),An|=i;return un(t,e,r,n),e.child}function Xv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Od(t,e,n,i,r){var s=Sn(n)?Wr:an.current;return s=Xs(e,s),ks(e,r),n=Ph(t,e,n,i,s,r),i=Nh(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(_t&&i&&xh(e),e.flags|=1,un(t,e,n,r),e.child)}function wm(t,e,n,i,r){if(Sn(n)){var s=!0;ql(e)}else s=!1;if(ks(e,r),e.stateNode===null)Tl(t,e),zv(e,n,i),Ud(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=Sn(n)?Wr:an.current,c=Xs(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&xm(e,o,i,c),sr=!1;var u=e.memoizedState;o.state=u,ec(e,i,o,r),l=e.memoizedState,a!==i||u!==l||yn.current||sr?(typeof f=="function"&&(Id(e,n,f,i),l=e.memoizedState),(a=sr||vm(e,n,a,i,u,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,_v(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),o.props=c,h=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=Sn(n)?Wr:an.current,l=Xs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||u!==l)&&xm(e,o,i,l),sr=!1,u=e.memoizedState,o.state=u,ec(e,i,o,r);var v=e.memoizedState;a!==h||u!==v||yn.current||sr?(typeof m=="function"&&(Id(e,n,m,i),v=e.memoizedState),(c=sr||vm(e,n,c,i,u,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return kd(t,e,n,i,s,r)}function kd(t,e,n,i,r,s){Xv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&cm(e,n,!1),Gi(t,e,s);i=e.stateNode,TM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ys(e,t.child,null,s),e.child=Ys(e,null,a,s)):un(t,e,a,s),e.memoizedState=i.state,r&&cm(e,n,!0),e.child}function jv(t){var e=t.stateNode;e.pendingContext?lm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lm(t,e.context,!1),Th(t,e.containerInfo)}function bm(t,e,n,i,r){return js(),yh(r),e.flags|=256,un(t,e,n,i),e.child}var Bd={dehydrated:null,treeContext:null,retryLane:0};function zd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yv(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(St,r&1),t===null)return Ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rc(o,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zd(n),e.memoizedState=Bd,t):Ih(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return CM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?zd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bd,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ih(t,e){return e=Rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,i){return i!==null&&yh(i),Ys(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function CM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=gu(Error(se(422))),Va(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Rc({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ys(e,t.child,null,o),e.child.memoizedState=zd(o),e.memoizedState=Bd,s);if(!(e.mode&1))return Va(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=gu(s,i,void 0),Va(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(t,r),oi(i,t,r,-1))}return zh(),i=gu(Error(se(421))),Va(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Dn=vr(r.nextSibling),In=e,_t=!0,ni=null,t!==null&&(Vn[Hn++]=Ui,Vn[Hn++]=Fi,Vn[Hn++]=Xr,Ui=t.id,Fi=t.overflow,Xr=e),e=Ih(e,i.children),e.flags|=4096,e)}function Tm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Dd(t.return,e,n)}function vu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function $v(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tm(t,n,e);else if(t.tag===19)Tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&tc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&tc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vu(e,!0,n,null,s);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AM(t,e,n){switch(e.tag){case 3:jv(e),js();break;case 5:yv(e);break;case 1:Sn(e.type)&&ql(e);break;case 4:Th(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?Yv(t,e,n):(ht(St,St.current&1),t=Gi(t,e,n),t!==null?t.sibling:null);ht(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $v(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Wv(t,e,n)}return Gi(t,e,n)}var qv,Vd,Kv,Zv;qv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vd=function(){};Kv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(Si.current);var s=null;switch(n){case"input":r=cd(t,r),i=cd(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=fd(t,r),i=fd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Yl)}pd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Zv=function(t,e,n,i){n!==i&&(e.flags|=4)};function po(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function RM(t,e,n){var i=e.pendingProps;switch(_h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return Sn(e.type)&&$l(),en(e),null;case 3:return i=e.stateNode,$s(),vt(yn),vt(an),Ah(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(qd(ni),ni=null))),Vd(t,e),en(e),null;case 5:Ch(e);var r=Br(ea.current);if(n=e.type,t!==null&&e.stateNode!=null)Kv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return en(e),null}if(t=Br(Si.current),Ba(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[Qo]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Ao.length;r++)gt(Ao[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Up(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Op(i,s),gt("invalid",i)}pd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,t),r=["children",""+a]):Ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":Pa(i),Fp(i,s,!0);break;case"textarea":Pa(i),kp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=b0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[vi]=e,t[Qo]=i,qv(t,e,!1,!1),e.stateNode=t;e:{switch(o=md(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ao.length;r++)gt(Ao[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":Up(t,i),r=cd(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Op(t,i),r=fd(t,i),gt("invalid",t);break;default:r=i}pd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?A0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&T0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Go(t,l):typeof l=="number"&&Go(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&rh(t,s,l,o))}switch(n){case"input":Pa(t),Fp(t,i,!1);break;case"textarea":Pa(t),kp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Is(t,!!i.multiple,s,!1):i.defaultValue!=null&&Is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)Zv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Br(ea.current),Br(Si.current),Ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return en(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Dn!==null&&e.mode&1&&!(e.flags&128))mv(),js(),e.flags|=98560,s=!1;else if(s=Ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[vi]=e}else js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ni!==null&&(qd(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ft===0&&(Ft=3):zh())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return $s(),Vd(t,e),t===null&&Ko(e.stateNode.containerInfo),en(e),null;case 10:return Eh(e.type._context),en(e),null;case 17:return Sn(e.type)&&$l(),en(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)po(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tc(t),o!==null){for(e.flags|=128,po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Ks&&(e.flags|=128,i=!0,po(s,!1),e.lanes=4194304)}else{if(!i)if(t=tc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return en(e),null}else 2*At()-s.renderingStartTime>Ks&&n!==1073741824&&(e.flags|=128,i=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=St.current,ht(St,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function PM(t,e){switch(_h(e),e.tag){case 1:return Sn(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),vt(yn),vt(an),Ah(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ch(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return $s(),null;case 10:return Eh(e.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var Ha=!1,sn=!1,NM=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Hd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Cm=!1;function LM(t,e){if(bd=Wl,t=nv(),vh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,u=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)u=h,h=m;for(;;){if(h===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:t,selectionRange:n},Wl=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,p=v.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:ei(e.type,S),p);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(_){Tt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return v=Cm,Cm=!1,v}function Oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hd(e,n,s)}r=r.next}while(r!==i)}}function Cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qv(t){var e=t.alternate;e!==null&&(t.alternate=null,Qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[Qo],delete e[Rd],delete e[pM],delete e[mM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jv(t){return t.tag===5||t.tag===3||t.tag===4}function Am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(i!==4&&(t=t.child,t!==null))for(Wd(t,e,n),t=t.sibling;t!==null;)Wd(t,e,n),t=t.sibling}function Xd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}var Gt=null,ti=!1;function qi(t,e,n){for(n=n.child;n!==null;)ex(t,e,n),n=n.sibling}function ex(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(_c,n)}catch{}switch(n.tag){case 5:sn||Ps(n,e);case 6:var i=Gt,r=ti;Gt=null,qi(t,e,n),Gt=i,ti=r,Gt!==null&&(ti?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(ti?(t=Gt,n=n.stateNode,t.nodeType===8?uu(t.parentNode,n):t.nodeType===1&&uu(t,n),Yo(t)):uu(Gt,n.stateNode));break;case 4:i=Gt,r=ti,Gt=n.stateNode.containerInfo,ti=!0,qi(t,e,n),Gt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hd(n,e,o),r=r.next}while(r!==i)}qi(t,e,n);break;case 1:if(!sn&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}qi(t,e,n);break;case 21:qi(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,qi(t,e,n),sn=i):qi(t,e,n);break;default:qi(t,e,n)}}function Rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NM),e.forEach(function(i){var r=VM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,ti=!1;break e;case 3:Gt=a.stateNode.containerInfo,ti=!0;break e;case 4:Gt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(Gt===null)throw Error(se(160));ex(s,o,r),Gt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tx(e,t),e=e.sibling}function tx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),fi(t),i&4){try{Oo(3,t,t.return),Cc(3,t)}catch(S){Tt(t,t.return,S)}try{Oo(5,t,t.return)}catch(S){Tt(t,t.return,S)}}break;case 1:Kn(e,t),fi(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if(Kn(e,t),fi(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{Go(r,"")}catch(S){Tt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&E0(r,s),md(a,o);var c=md(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?A0(r,h):f==="dangerouslySetInnerHTML"?T0(r,h):f==="children"?Go(r,h):rh(r,f,h,c)}switch(a){case"input":ud(r,s);break;case"textarea":w0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Is(r,!!s.multiple,m,!1):u!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[Qo]=s}catch(S){Tt(t,t.return,S)}}break;case 6:if(Kn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Tt(t,t.return,S)}}break;case 3:if(Kn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(S){Tt(t,t.return,S)}break;case 4:Kn(e,t),fi(t);break;case 13:Kn(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Oh=At())),i&4&&Rm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||f,Kn(e,t),sn=c):Kn(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Me=t,f=t.child;f!==null;){for(h=Me=f;Me!==null;){switch(u=Me,m=u.child,u.tag){case 0:case 11:case 14:case 15:Oo(4,u,u.return);break;case 1:Ps(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){Tt(i,n,S)}}break;case 5:Ps(u,u.return);break;case 22:if(u.memoizedState!==null){Nm(h);continue}}m!==null?(m.return=u,Me=m):Nm(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=C0("display",o))}catch(S){Tt(t,t.return,S)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){Tt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Kn(e,t),fi(t),i&4&&Rm(t);break;case 21:break;default:Kn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Go(r,""),i.flags&=-33);var s=Am(t);Xd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Am(t);Wd(t,a,o);break;default:throw Error(se(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DM(t,e,n){Me=t,nx(t)}function nx(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ha;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||sn;a=Ha;var c=sn;if(Ha=o,(sn=l)&&!c)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?Lm(r):l!==null?(l.return=o,Me=l):Lm(r);for(;s!==null;)Me=s,nx(s),s=s.sibling;Me=r,Ha=a,sn=c}Pm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):Pm(t)}}function Pm(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||Cc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Yo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}sn||e.flags&512&&Gd(e)}catch(u){Tt(e,e.return,u)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Nm(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Lm(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Gd(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Gd(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var IM=Math.ceil,rc=Xi.ReactCurrentDispatcher,Uh=Xi.ReactCurrentOwner,Xn=Xi.ReactCurrentBatchConfig,Je=0,Ht=null,Lt=null,$t=0,An=0,Ns=Cr(0),Ft=0,ra=null,Yr=0,Ac=0,Fh=0,ko=null,xn=null,Oh=0,Ks=1/0,Li=null,sc=!1,jd=null,_r=null,Ga=!1,dr=null,oc=0,Bo=0,Yd=null,Cl=-1,Al=0;function dn(){return Je&6?At():Cl!==-1?Cl:Cl=At()}function yr(t){return t.mode&1?Je&2&&$t!==0?$t&-$t:vM.transition!==null?(Al===0&&(Al=z0()),Al):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Y0(t.type)),t):1}function oi(t,e,n,i){if(50<Bo)throw Bo=0,Yd=null,Error(se(185));ga(t,n,i),(!(Je&2)||t!==Ht)&&(t===Ht&&(!(Je&2)&&(Ac|=n),Ft===4&&lr(t,$t)),Mn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Ks=At()+500,wc&&Ar()))}function Mn(t,e){var n=t.callbackNode;vS(t,e);var i=Gl(t,t===Ht?$t:0);if(i===0)n!==null&&Vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vp(n),e===1)t.tag===0?gM(Dm.bind(null,t)):fv(Dm.bind(null,t)),fM(function(){!(Je&6)&&Ar()}),n=null;else{switch(V0(i)){case 1:n=ch;break;case 4:n=k0;break;case 16:n=Hl;break;case 536870912:n=B0;break;default:n=Hl}n=ux(n,ix.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ix(t,e){if(Cl=-1,Al=0,Je&6)throw Error(se(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var i=Gl(t,t===Ht?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ac(t,i);else{e=i;var r=Je;Je|=2;var s=sx();(Ht!==t||$t!==e)&&(Li=null,Ks=At()+500,Hr(t,e));do try{OM();break}catch(a){rx(t,a)}while(!0);Mh(),rc.current=s,Je=r,Lt!==null?e=0:(Ht=null,$t=0,e=Ft)}if(e!==0){if(e===2&&(r=yd(t),r!==0&&(i=r,e=$d(t,r))),e===1)throw n=ra,Hr(t,0),lr(t,i),Mn(t,At()),n;if(e===6)lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!UM(r)&&(e=ac(t,i),e===2&&(s=yd(t),s!==0&&(i=s,e=$d(t,s))),e===1))throw n=ra,Hr(t,0),lr(t,i),Mn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Fr(t,xn,Li);break;case 3:if(lr(t,i),(i&130023424)===i&&(e=Oh+500-At(),10<e)){if(Gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ad(Fr.bind(null,t,xn,Li),e);break}Fr(t,xn,Li);break;case 4:if(lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*IM(i/1960))-i,10<i){t.timeoutHandle=Ad(Fr.bind(null,t,xn,Li),i);break}Fr(t,xn,Li);break;case 5:Fr(t,xn,Li);break;default:throw Error(se(329))}}}return Mn(t,At()),t.callbackNode===n?ix.bind(null,t):null}function $d(t,e){var n=ko;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=ac(t,e),t!==2&&(e=xn,xn=n,e!==null&&qd(e)),t}function qd(t){xn===null?xn=t:xn.push.apply(xn,t)}function UM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~Fh,e&=~Ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function Dm(t){if(Je&6)throw Error(se(327));Bs();var e=Gl(t,0);if(!(e&1))return Mn(t,At()),null;var n=ac(t,e);if(t.tag!==0&&n===2){var i=yd(t);i!==0&&(e=i,n=$d(t,i))}if(n===1)throw n=ra,Hr(t,0),lr(t,e),Mn(t,At()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,xn,Li),Mn(t,At()),null}function kh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Ks=At()+500,wc&&Ar())}}function $r(t){dr!==null&&dr.tag===0&&!(Je&6)&&Bs();var e=Je;Je|=1;var n=Xn.transition,i=ot;try{if(Xn.transition=null,ot=1,t)return t()}finally{ot=i,Xn.transition=n,Je=e,!(Je&6)&&Ar()}}function Bh(){An=Ns.current,vt(Ns)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dM(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(_h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$l();break;case 3:$s(),vt(yn),vt(an),Ah();break;case 5:Ch(i);break;case 4:$s();break;case 13:vt(St);break;case 19:vt(St);break;case 10:Eh(i.type._context);break;case 22:case 23:Bh()}n=n.return}if(Ht=t,Lt=t=Sr(t.current,null),$t=An=e,Ft=0,ra=null,Fh=Ac=Yr=0,xn=ko=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}kr=null}return t}function rx(t,e){do{var n=Lt;try{if(Mh(),wl.current=ic,nc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nc=!1}if(jr=0,Vt=It=Et=null,Fo=!1,ta=0,Uh.current=null,n===null||n.return===null){Ft=1,ra=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=ym(o);if(m!==null){m.flags&=-257,Sm(m,o,a,s,e),m.mode&1&&_m(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){_m(s,c,e),zh();break e}l=Error(se(426))}}else if(_t&&a.mode&1){var p=ym(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Sm(p,o,a,s,e),yh(qs(l,a));break e}}s=l=qs(l,a),Ft!==4&&(Ft=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Vv(s,l,e);hm(s,d);break e;case 1:a=l;var g=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(_r===null||!_r.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Hv(s,a,e);hm(s,_);break e}}s=s.return}while(s!==null)}ax(n)}catch(b){e=b,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function sx(){var t=rc.current;return rc.current=ic,t===null?ic:t}function zh(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Ht===null||!(Yr&268435455)&&!(Ac&268435455)||lr(Ht,$t)}function ac(t,e){var n=Je;Je|=2;var i=sx();(Ht!==t||$t!==e)&&(Li=null,Hr(t,e));do try{FM();break}catch(r){rx(t,r)}while(!0);if(Mh(),Je=n,rc.current=i,Lt!==null)throw Error(se(261));return Ht=null,$t=0,Ft}function FM(){for(;Lt!==null;)ox(Lt)}function OM(){for(;Lt!==null&&!lS();)ox(Lt)}function ox(t){var e=cx(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?ax(t):Lt=e,Uh.current=null}function ax(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PM(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Lt=null;return}}else if(n=RM(n,e,An),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Fr(t,e,n){var i=ot,r=Xn.transition;try{Xn.transition=null,ot=1,kM(t,e,n,i)}finally{Xn.transition=r,ot=i}return null}function kM(t,e,n,i){do Bs();while(dr!==null);if(Je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xS(t,s),t===Ht&&(Lt=Ht=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ga||(Ga=!0,ux(Hl,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=ot;ot=1;var a=Je;Je|=4,Uh.current=null,LM(t,n),tx(n,t),rM(Td),Wl=!!bd,Td=bd=null,t.current=n,DM(n),cS(),Je=a,ot=o,Xn.transition=s}else t.current=n;if(Ga&&(Ga=!1,dr=t,oc=r),s=t.pendingLanes,s===0&&(_r=null),fS(n.stateNode),Mn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(sc)throw sc=!1,t=jd,jd=null,t;return oc&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===Yd?Bo++:(Bo=0,Yd=t):Bo=0,Ar(),null}function Bs(){if(dr!==null){var t=V0(oc),e=Xn.transition,n=ot;try{if(Xn.transition=null,ot=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,oc=0,Je&6)throw Error(se(331));var r=Je;for(Je|=4,Me=t.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Me=c;Me!==null;){var f=Me;switch(f.tag){case 0:case 11:case 15:Oo(8,f,s)}var h=f.child;if(h!==null)h.return=f,Me=h;else for(;Me!==null;){f=Me;var u=f.sibling,m=f.return;if(Qv(f),f===c){Me=null;break}if(u!==null){u.return=m,Me=u;break}Me=m}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var p=S.sibling;S.sibling=null,S=p}while(S!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Me=d;break e}Me=s.return}}var g=t.current;for(Me=g;Me!==null;){o=Me;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,Me=E;else e:for(o=g;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cc(9,a)}}catch(b){Tt(a,a.return,b)}if(a===o){Me=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Me=_;break e}Me=a.return}}if(Je=r,Ar(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(_c,t)}catch{}i=!0}return i}finally{ot=n,Xn.transition=e}}return!1}function Im(t,e,n){e=qs(n,e),e=Vv(t,e,1),t=xr(t,e,1),e=dn(),t!==null&&(ga(t,1,e),Mn(t,e))}function Tt(t,e,n){if(t.tag===3)Im(t,t,n);else for(;e!==null;){if(e.tag===3){Im(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){t=qs(n,t),t=Hv(e,t,1),e=xr(e,t,1),t=dn(),e!==null&&(ga(e,1,t),Mn(e,t));break}}e=e.return}}function BM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&($t&n)===n&&(Ft===4||Ft===3&&($t&130023424)===$t&&500>At()-Oh?Hr(t,0):Fh|=n),Mn(t,e)}function lx(t,e){e===0&&(t.mode&1?(e=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):e=1);var n=dn();t=Hi(t,e),t!==null&&(ga(t,e,n),Mn(t,n))}function zM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lx(t,n)}function VM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),lx(t,n)}var cx;cx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,AM(t,e,n);_n=!!(t.flags&131072)}else _n=!1,_t&&e.flags&1048576&&hv(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Tl(t,e),t=e.pendingProps;var r=Xs(e,an.current);ks(e,n),r=Ph(null,e,i,t,r,n);var s=Nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,ql(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=Tc,e.stateNode=r,r._reactInternals=e,Ud(e,i,t,n),e=kd(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&xh(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Tl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=GM(i),t=ei(i,t),r){case 0:e=Od(null,e,i,t,n);break e;case 1:e=wm(null,e,i,t,n);break e;case 11:e=Mm(null,e,i,t,n);break e;case 14:e=Em(null,e,i,ei(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Od(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),wm(t,e,i,r,n);case 3:e:{if(jv(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,_v(t,e),ec(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qs(Error(se(423)),e),e=bm(t,e,i,n,r);break e}else if(i!==r){r=qs(Error(se(424)),e),e=bm(t,e,i,n,r);break e}else for(Dn=vr(e.stateNode.containerInfo.firstChild),In=e,_t=!0,ni=null,n=vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(js(),i===r){e=Gi(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return yv(e),t===null&&Ld(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Cd(i,r)?o=null:s!==null&&Cd(i,s)&&(e.flags|=32),Xv(t,e),un(t,e,o,n),e.child;case 6:return t===null&&Ld(e),null;case 13:return Yv(t,e,n);case 4:return Th(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ys(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Mm(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Ql,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!yn.current){e=Gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Dd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Dd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,n),r=jn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),Em(t,e,i,r,n);case 15:return Gv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Tl(t,e),e.tag=1,Sn(i)?(t=!0,ql(e)):t=!1,ks(e,n),zv(e,i,r),Ud(e,i,r,n),kd(null,e,i,!0,t,n);case 19:return $v(t,e,n);case 22:return Wv(t,e,n)}throw Error(se(156,e.tag))};function ux(t,e){return O0(t,e)}function HM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new HM(t,e,n,i)}function Vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GM(t){if(typeof t=="function")return Vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oh)return 11;if(t===ah)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Vh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return Gr(n.children,r,s,e);case sh:o=8,r|=8;break;case sd:return t=Wn(12,n,e,r|2),t.elementType=sd,t.lanes=s,t;case od:return t=Wn(13,n,e,r),t.elementType=od,t.lanes=s,t;case ad:return t=Wn(19,n,e,r),t.elementType=ad,t.lanes=s,t;case y0:return Rc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x0:o=10;break e;case _0:o=9;break e;case oh:o=11;break e;case ah:o=14;break e;case rr:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function Rc(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=y0,t.lanes=n,t.stateNode={isHidden:!1},t}function xu(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jc(0),this.expirationTimes=Jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hh(t,e,n,i,r,s,o,a,l){return t=new WM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),t}function XM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function dx(t){if(!t)return wr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(Sn(n))return dv(t,n,e)}return e}function fx(t,e,n,i,r,s,o,a,l){return t=Hh(n,i,!0,t,r,s,o,a,l),t.context=dx(null),n=t.current,i=dn(),r=yr(n),s=ki(i,r),s.callback=e??null,xr(n,s,r),t.current.lanes=r,ga(t,r,i),Mn(t,i),t}function Pc(t,e,n,i){var r=e.current,s=dn(),o=yr(r);return n=dx(n),e.context===null?e.context=n:e.pendingContext=n,e=ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=xr(r,e,o),t!==null&&(oi(t,r,o,s),El(t,r,o)),o}function lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gh(t,e){Um(t,e),(t=t.alternate)&&Um(t,e)}function jM(){return null}var hx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wh(t){this._internalRoot=t}Nc.prototype.render=Wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Pc(t,e,null,null)};Nc.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){Pc(null,t,null,null)}),e[Vi]=null}};function Nc(t){this._internalRoot=t}Nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=W0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&j0(t)}};function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function YM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=lc(o);s.call(c)}}var o=fx(e,i,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=o,t[Vi]=o.current,Ko(t.nodeType===8?t.parentNode:t),$r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=lc(l);a.call(c)}}var l=Hh(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=l,t[Vi]=l.current,Ko(t.nodeType===8?t.parentNode:t),$r(function(){Pc(e,l,n,i)}),l}function Dc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=lc(o);a.call(l)}}Pc(e,o,t,r)}else o=YM(n,e,t,r,i);return lc(o)}H0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(uh(e,n|1),Mn(e,At()),!(Je&6)&&(Ks=At()+500,Ar()))}break;case 13:$r(function(){var i=Hi(t,1);if(i!==null){var r=dn();oi(i,t,1,r)}}),Gh(t,1)}};dh=function(t){if(t.tag===13){var e=Hi(t,134217728);if(e!==null){var n=dn();oi(e,t,134217728,n)}Gh(t,134217728)}};G0=function(t){if(t.tag===13){var e=yr(t),n=Hi(t,e);if(n!==null){var i=dn();oi(n,t,e,i)}Gh(t,e)}};W0=function(){return ot};X0=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};vd=function(t,e,n){switch(e){case"input":if(ud(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ec(i);if(!r)throw Error(se(90));M0(i),ud(i,r)}}}break;case"textarea":w0(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};N0=kh;L0=$r;var $M={usingClientEntryPoint:!1,Events:[xa,bs,Ec,R0,P0,kh]},mo={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qM={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=U0(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||jM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{_c=Wa.inject(qM),yi=Wa}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$M;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(se(200));return XM(t,e,null,n)};On.createRoot=function(t,e){if(!Xh(t))throw Error(se(299));var n=!1,i="",r=hx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hh(t,1,!1,null,null,n,!1,i,r),t[Vi]=e.current,Ko(t.nodeType===8?t.parentNode:t),new Wh(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=U0(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return $r(t)};On.hydrate=function(t,e,n){if(!Lc(e))throw Error(se(200));return Dc(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!Xh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=hx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fx(e,null,t,1,n??null,r,!1,s,o),t[Vi]=e.current,Ko(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Nc(e)};On.render=function(t,e,n){if(!Lc(e))throw Error(se(200));return Dc(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!Lc(t))throw Error(se(40));return t._reactRootContainer?($r(function(){Dc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vi]=null})}),!0):!1};On.unstable_batchedUpdates=kh;On.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Lc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Dc(t,e,n,!1,i)};On.version="18.3.1-next-f1338f8080-20240426";function px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(px)}catch(t){console.error(t)}}px(),p0.exports=On;var Ic=p0.exports;const KM=t0(Ic);var mx,Om=Ic;mx=Om.createRoot,Om.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cc(){return cc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},cc.apply(this,arguments)}var fr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(fr||(fr={}));const km="popstate";function ZM(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Kd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:vx(r)}return JM(e,n,null,t)}function bn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QM(){return Math.random().toString(36).substr(2,8)}function Bm(t,e){return{usr:t.state,key:t.key,idx:e}}function Kd(t,e,n,i){return n===void 0&&(n=null),cc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Uc(e):e,{state:n,key:e&&e.key||i||QM()})}function vx(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Uc(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function JM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=fr.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(cc({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function h(){a=fr.Pop;let p=f(),d=p==null?null:p-c;c=p,l&&l({action:a,location:S.location,delta:d})}function u(p,d){a=fr.Push;let g=Kd(S.location,p,d);c=f()+1;let E=Bm(g,c),_=S.createHref(g);try{o.pushState(E,"",_)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(_)}s&&l&&l({action:a,location:S.location,delta:1})}function m(p,d){a=fr.Replace;let g=Kd(S.location,p,d);c=f();let E=Bm(g,c),_=S.createHref(g);o.replaceState(E,"",_),s&&l&&l({action:a,location:S.location,delta:0})}function v(p){let d=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:vx(p);return g=g.replace(/ $/,"%20"),bn(d,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,d)}let S={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(km,h),l=p,()=>{r.removeEventListener(km,h),l=null}},createHref(p){return e(r,p)},createURL:v,encodeLocation(p){let d=v(p);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:u,replace:m,go(p){return o.go(p)}};return S}var zm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zm||(zm={}));function eE(t,e,n){return n===void 0&&(n="/"),tE(t,e,n,!1)}function tE(t,e,n,i){let r=typeof e=="string"?Uc(e):e,s=yx(r.pathname||"/",n);if(s==null)return null;let o=xx(t);nE(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=hE(s);a=dE(o[l],c,i)}return a}function xx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(bn(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=zs([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(bn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xx(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:cE(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of _x(s.path))r(s,o,l)}),e}function _x(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=_x(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function nE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:uE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const iE=/^:[\w-]+$/,rE=3,sE=2,oE=1,aE=10,lE=-2,Vm=t=>t==="*";function cE(t,e){let n=t.split("/"),i=n.length;return n.some(Vm)&&(i+=lE),e&&(i+=sE),n.filter(r=>!Vm(r)).reduce((r,s)=>r+(iE.test(s)?rE:s===""?oE:aE),i)}function uE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function dE(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",h=Hm({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),u=l.route;if(!h&&c&&n&&!i[i.length-1].route.index&&(h=Hm({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:zs([s,h.pathname]),pathnameBase:pE(zs([s,h.pathnameBase])),route:u}),h.pathnameBase!=="/"&&(s=zs([s,h.pathnameBase]))}return o}function Hm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=fE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,f,h)=>{let{paramName:u,isOptional:m}=f;if(u==="*"){let S=a[h]||"";o=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const v=a[h];return m&&!v?c[u]=void 0:c[u]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function fE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),gx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function hE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yx(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const zs=t=>t.join("/").replace(/\/\/+/g,"/"),pE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function mE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Sx=["post","put","patch","delete"];new Set(Sx);const gE=["get",...Sx];new Set(gE);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uc(){return uc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},uc.apply(this,arguments)}const vE=F.createContext(null),xE=F.createContext(null),Mx=F.createContext(null),Fc=F.createContext(null),Oc=F.createContext({outlet:null,matches:[],isDataRoute:!1}),Ex=F.createContext(null);function jh(){return F.useContext(Fc)!=null}function wx(){return jh()||bn(!1),F.useContext(Fc).location}function _E(t,e){return yE(t,e)}function yE(t,e,n,i){jh()||bn(!1);let{navigator:r}=F.useContext(Mx),{matches:s}=F.useContext(Oc),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=wx(),f;if(e){var h;let p=typeof e=="string"?Uc(e):e;l==="/"||(h=p.pathname)!=null&&h.startsWith(l)||bn(!1),f=p}else f=c;let u=f.pathname||"/",m=u;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+u.replace(/^\//,"").split("/").slice(p.length).join("/")}let v=eE(t,{pathname:m}),S=bE(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:zs([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:zs([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&S?F.createElement(Fc.Provider,{value:{location:uc({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:fr.Pop}},S):S}function SE(){let t=RE(),e=mE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:r},n):null,null)}const ME=F.createElement(SE,null);class EE extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(Oc.Provider,{value:this.props.routeContext},F.createElement(Ex.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wE(t){let{routeContext:e,match:n,children:i}=t,r=F.useContext(vE);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(Oc.Provider,{value:e},i)}function bE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);f>=0||bn(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:u,errors:m}=n,v=h.route.loader&&u[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,h,u)=>{let m,v=!1,S=null,p=null;n&&(m=a&&h.route.id?a[h.route.id]:void 0,S=h.route.errorElement||ME,l&&(c<0&&u===0?(v=!0,p=null):c===u&&(v=!0,p=h.route.hydrateFallbackElement||null)));let d=e.concat(o.slice(0,u+1)),g=()=>{let E;return m?E=S:v?E=p:h.route.Component?E=F.createElement(h.route.Component,null):h.route.element?E=h.route.element:E=f,F.createElement(wE,{match:h,routeContext:{outlet:f,matches:d,isDataRoute:n!=null},children:E})};return n&&(h.route.ErrorBoundary||h.route.errorElement||u===0)?F.createElement(EE,{location:n.location,revalidation:n.revalidation,component:S,error:m,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var Zd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zd||{});function TE(t){let e=F.useContext(xE);return e||bn(!1),e}function CE(t){let e=F.useContext(Oc);return e||bn(!1),e}function AE(t){let e=CE(),n=e.matches[e.matches.length-1];return n.route.id||bn(!1),n.route.id}function RE(){var t;let e=F.useContext(Ex),n=TE(Zd.UseRouteError),i=AE(Zd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function PE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Qd(t){bn(!1)}function NE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=fr.Pop,navigator:s,static:o=!1,future:a}=t;jh()&&bn(!1);let l=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:l,navigator:s,static:o,future:uc({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Uc(i));let{pathname:f="/",search:h="",hash:u="",state:m=null,key:v="default"}=i,S=F.useMemo(()=>{let p=yx(f,l);return p==null?null:{location:{pathname:p,search:h,hash:u,state:m,key:v},navigationType:r}},[l,f,h,u,m,v,r]);return S==null?null:F.createElement(Mx.Provider,{value:c},F.createElement(Fc.Provider,{children:n,value:S}))}function LE(t){let{children:e,location:n}=t;return _E(Jd(e),n)}new Promise(()=>{});function Jd(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(i,r)=>{if(!F.isValidElement(i))return;let s=[...e,r];if(i.type===F.Fragment){n.push.apply(n,Jd(i.props.children,s));return}i.type!==Qd&&bn(!1),!i.props.index||!i.props.children||bn(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Jd(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const DE="6";try{window.__reactRouterVersion=DE}catch{}const IE="startTransition",Gm=f0[IE];function UE(t){let{basename:e,children:n,future:i,window:r}=t,s=F.useRef();s.current==null&&(s.current=ZM({window:r,v5Compat:!0}));let o=s.current,[a,l]=F.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=F.useCallback(h=>{c&&Gm?Gm(()=>l(h)):l(h)},[l,c]);return F.useLayoutEffect(()=>o.listen(f),[o,f]),F.useEffect(()=>PE(i),[i]),F.createElement(NE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var Wm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Wm||(Wm={}));var Xm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Xm||(Xm={}));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bx=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=F.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>F.createElement("svg",{ref:l,...OE,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:bx("lucide",r),...a},[...o.map(([c,f])=>F.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(t,e)=>{const n=F.forwardRef(({className:i,...r},s)=>F.createElement(kE,{ref:s,iconNode:e,className:bx(`lucide-${FE(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=ct("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=ct("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=ct("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=ct("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=ct("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=ct("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=ct("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=ct("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=ct("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=ct("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=ct("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=ct("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=ct("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=ct("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=ct("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=ct("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=ct("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=ct("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=ct("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=ct("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=ct("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=ct("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=ct("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=ct("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=ct("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function jm(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Nx(...t){return e=>{let n=!1;const i=t.map(r=>{const s=jm(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():jm(t[r],null)}}}}function qr(...t){return F.useCallback(Nx(...t),t)}function dc(t){const e=rw(t),n=F.forwardRef((i,r)=>{const{children:s,...o}=i,a=F.Children.toArray(s),l=a.find(ow);if(l){const c=l.props.children,f=a.map(h=>h===l?F.Children.count(c)>1?F.Children.only(null):F.isValidElement(c)?c.props.children:null:h);return M.jsx(e,{...o,ref:r,children:F.isValidElement(c)?F.cloneElement(c,void 0,f):null})}return M.jsx(e,{...o,ref:r,children:s})});return n.displayName=`${t}.Slot`,n}var iw=dc("Slot");function rw(t){const e=F.forwardRef((n,i)=>{const{children:r,...s}=n;if(F.isValidElement(r)){const o=lw(r),a=aw(s,r.props);return r.type!==F.Fragment&&(a.ref=i?Nx(i,o):o),F.cloneElement(r,a)}return F.Children.count(r)>1?F.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var sw=Symbol("radix.slottable");function ow(t){return F.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===sw}function aw(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function lw(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function Lx(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=Lx(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function Dx(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=Lx(t))&&(i&&(i+=" "),i+=e);return i}const Ym=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,$m=Dx,Ix=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return $m(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const f=n==null?void 0:n[c],h=s==null?void 0:s[c];if(f===null)return null;const u=Ym(f)||Ym(h);return r[c][u]}),a=n&&Object.entries(n).reduce((c,f)=>{let[h,u]=f;return u===void 0||(c[h]=u),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,f)=>{let{class:h,className:u,...m}=f;return Object.entries(m).every(v=>{let[S,p]=v;return Array.isArray(p)?p.includes({...s,...a}[S]):{...s,...a}[S]===p})?[...c,h,u]:c},[]);return $m(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},$h="-",cw=t=>{const e=dw(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split($h);return a[0]===""&&a.length!==1&&a.shift(),Ux(a,e)||uw(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},Ux=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?Ux(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join($h);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},qm=/^\[(.+)\]$/,uw=t=>{if(qm.test(t)){const e=qm.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},dw=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return hw(Object.entries(t.classGroups),n).forEach(([s,o])=>{tf(o,i,s,e)}),i},tf=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:Km(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(fw(r)){tf(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{tf(o,Km(e,s),n,i)})})},Km=(t,e)=>{let n=t;return e.split($h).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},fw=t=>t.isThemeGetter,hw=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,pw=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},Fx="!",mw=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,f=0,h;for(let p=0;p<a.length;p++){let d=a[p];if(c===0){if(d===r&&(i||a.slice(p,p+s)===e)){l.push(a.slice(f,p)),f=p+s;continue}if(d==="/"){h=p;continue}}d==="["?c++:d==="]"&&c--}const u=l.length===0?a:a.substring(f),m=u.startsWith(Fx),v=m?u.substring(1):u,S=h&&h>f?h-f:void 0;return{modifiers:l,hasImportantModifier:m,baseClassName:v,maybePostfixModifierPosition:S}};return n?a=>n({className:a,parseClassName:o}):o},gw=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},vw=t=>({cache:pw(t.cacheSize),parseClassName:mw(t),...cw(t)}),xw=/\s+/,_w=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(xw);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:f,hasImportantModifier:h,baseClassName:u,maybePostfixModifierPosition:m}=n(c);let v=!!m,S=i(v?u.substring(0,m):u);if(!S){if(!v){a=c+(a.length>0?" "+a:a);continue}if(S=i(u),!S){a=c+(a.length>0?" "+a:a);continue}v=!1}const p=gw(f).join(":"),d=h?p+Fx:p,g=d+S;if(s.includes(g))continue;s.push(g);const E=r(S,v);for(let _=0;_<E.length;++_){const b=E[_];s.push(d+b)}a=c+(a.length>0?" "+a:a)}return a};function yw(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Ox(e))&&(i&&(i+=" "),i+=n);return i}const Ox=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=Ox(t[i]))&&(n&&(n+=" "),n+=e);return n};function Sw(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((f,h)=>h(f),t());return n=vw(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const f=_w(l,n);return r(l,f),f}return function(){return s(yw.apply(null,arguments))}}const mt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},kx=/^\[(?:([a-z-]+):)?(.+)\]$/i,Mw=/^\d+\/\d+$/,Ew=new Set(["px","full","screen"]),ww=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,bw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Tw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Cw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Aw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ti=t=>Vs(t)||Ew.has(t)||Mw.test(t),Ki=t=>io(t,"length",Fw),Vs=t=>!!t&&!Number.isNaN(Number(t)),yu=t=>io(t,"number",Vs),go=t=>!!t&&Number.isInteger(Number(t)),Rw=t=>t.endsWith("%")&&Vs(t.slice(0,-1)),ke=t=>kx.test(t),Zi=t=>ww.test(t),Pw=new Set(["length","size","percentage"]),Nw=t=>io(t,Pw,Bx),Lw=t=>io(t,"position",Bx),Dw=new Set(["image","url"]),Iw=t=>io(t,Dw,kw),Uw=t=>io(t,"",Ow),vo=()=>!0,io=(t,e,n)=>{const i=kx.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},Fw=t=>bw.test(t)&&!Tw.test(t),Bx=()=>!1,Ow=t=>Cw.test(t),kw=t=>Aw.test(t),Bw=()=>{const t=mt("colors"),e=mt("spacing"),n=mt("blur"),i=mt("brightness"),r=mt("borderColor"),s=mt("borderRadius"),o=mt("borderSpacing"),a=mt("borderWidth"),l=mt("contrast"),c=mt("grayscale"),f=mt("hueRotate"),h=mt("invert"),u=mt("gap"),m=mt("gradientColorStops"),v=mt("gradientColorStopPositions"),S=mt("inset"),p=mt("margin"),d=mt("opacity"),g=mt("padding"),E=mt("saturate"),_=mt("scale"),b=mt("sepia"),T=mt("skew"),C=mt("space"),y=mt("translate"),R=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto",ke,e],D=()=>[ke,e],H=()=>["",Ti,Ki],N=()=>["auto",Vs,ke],k=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],K=()=>["solid","dashed","dotted","double","none"],j=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],z=()=>["","0",ke],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>[Vs,ke];return{cacheSize:500,separator:":",theme:{colors:[vo],spacing:[Ti,Ki],blur:["none","",Zi,ke],brightness:Z(),borderColor:[t],borderRadius:["none","","full",Zi,ke],borderSpacing:D(),borderWidth:H(),contrast:Z(),grayscale:z(),hueRotate:Z(),invert:z(),gap:D(),gradientColorStops:[t],gradientColorStopPositions:[Rw,Ki],inset:L(),margin:L(),opacity:Z(),padding:D(),saturate:Z(),scale:Z(),sepia:z(),skew:Z(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",ke]}],container:["container"],columns:[{columns:[Zi]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...k(),ke]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[S]}],"inset-x":[{"inset-x":[S]}],"inset-y":[{"inset-y":[S]}],start:[{start:[S]}],end:[{end:[S]}],top:[{top:[S]}],right:[{right:[S]}],bottom:[{bottom:[S]}],left:[{left:[S]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",go,ke]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ke]}],grow:[{grow:z()}],shrink:[{shrink:z()}],order:[{order:["first","last","none",go,ke]}],"grid-cols":[{"grid-cols":[vo]}],"col-start-end":[{col:["auto",{span:["full",go,ke]},ke]}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":[vo]}],"row-start-end":[{row:["auto",{span:[go,ke]},ke]}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ke]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ke]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ke,e]}],"min-w":[{"min-w":[ke,e,"min","max","fit"]}],"max-w":[{"max-w":[ke,e,"none","full","min","max","fit","prose",{screen:[Zi]},Zi]}],h:[{h:[ke,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ke,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ke,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ke,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Zi,Ki]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",yu]}],"font-family":[{font:[vo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ke]}],"line-clamp":[{"line-clamp":["none",Vs,yu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ti,ke]}],"list-image":[{"list-image":["none",ke]}],"list-style-type":[{list:["none","disc","decimal",ke]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[d]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[d]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...K(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ti,Ki]}],"underline-offset":[{"underline-offset":["auto",Ti,ke]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ke]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ke]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[d]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...k(),Lw]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Nw]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Iw]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[d]}],"border-style":[{border:[...K(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[d]}],"divide-style":[{divide:K()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...K()]}],"outline-offset":[{"outline-offset":[Ti,ke]}],"outline-w":[{outline:[Ti,Ki]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[d]}],"ring-offset-w":[{"ring-offset":[Ti,Ki]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Zi,Uw]}],"shadow-color":[{shadow:[vo]}],opacity:[{opacity:[d]}],"mix-blend":[{"mix-blend":[...j(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":j()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Zi,ke]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[h]}],saturate:[{saturate:[E]}],sepia:[{sepia:[b]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[d]}],"backdrop-saturate":[{"backdrop-saturate":[E]}],"backdrop-sepia":[{"backdrop-sepia":[b]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ke]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",ke]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",ke]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[_]}],"scale-x":[{"scale-x":[_]}],"scale-y":[{"scale-y":[_]}],rotate:[{rotate:[go,ke]}],"translate-x":[{"translate-x":[y]}],"translate-y":[{"translate-y":[y]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ke]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ke]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ke]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ti,Ki,yu]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},zw=Sw(Bw);function mn(...t){return zw(Dx(t))}const Vw=Ix("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Un=F.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},s)=>{const o=i?iw:"button";return M.jsx(o,{className:mn(Vw({variant:e,size:n,className:t})),ref:s,...r})});Un.displayName="Button";const Hw=({is3DEnabled:t,onToggle3D:e,onOpenProjectsDeck:n,onScrollToStation:i})=>{const[r,s]=F.useState(!1),[o,a]=F.useState(!1);return F.useEffect(()=>{const l=()=>{s(window.scrollY>40)};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),M.jsxs("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${r?"bg-[#07080d]/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5":"bg-transparent py-5"}`,children:[M.jsxs("div",{className:"container mx-auto px-6 md:px-10 flex items-center justify-between",children:[M.jsxs("button",{type:"button",onClick:()=>i("home"),className:"group flex items-center gap-2 text-left focus:outline-none",children:[M.jsx("span",{className:"text-xl md:text-2xl font-black gradient-text tracking-wider",children:"RP"}),M.jsx("span",{className:"hidden md:inline-block font-mono text-[10px] tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors uppercase",children:"/ Spatial Dev"})]}),M.jsxs("nav",{className:"hidden md:flex items-center gap-8",children:[M.jsx("button",{type:"button",onClick:()=>i("home"),className:"font-mono text-xs tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase",children:"[ Home ]"}),M.jsxs("button",{type:"button",onClick:n,className:"font-mono text-xs tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors uppercase flex items-center gap-1.5",children:[M.jsx(ya,{className:"w-3 h-3 text-cyan-400"}),"[ Projects (13) ]"]}),M.jsx("button",{type:"button",onClick:()=>i("contact"),className:"font-mono text-xs tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase",children:"[ Contact ]"})]}),M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsxs("button",{type:"button",onClick:e,title:t?"Turn off 3D WebGL background":"Turn on 3D WebGL background",className:`flex items-center gap-2 px-3 h-8 md:h-9 rounded-xl border text-[11px] font-mono font-semibold transition-all ${t?"bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-sm shadow-cyan-500/20":"bg-white/[0.04] border-white/10 text-slate-400 hover:text-white"}`,children:[M.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${t?"bg-cyan-400 animate-pulse":"bg-slate-500"}`}),"3D LAB ",t?"ON":"OFF"]}),M.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"hidden sm:inline-block",children:M.jsxs(Un,{size:"sm",className:"h-8 md:h-9 px-4 bg-primary text-primary-foreground hover:shadow-glow font-semibold gap-1.5 text-xs rounded-xl",children:[M.jsx(ef,{className:"w-3.5 h-3.5"}),"Resume"]})}),M.jsx("button",{type:"button",onClick:()=>a(!o),className:"md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-white","aria-label":"Toggle menu",children:o?M.jsx(kc,{className:"w-4 h-4"}):M.jsx(JE,{className:"w-4 h-4"})})]})]}),o&&M.jsxs("div",{className:"md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#090b14]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-3",children:[M.jsx("button",{type:"button",onClick:()=>{a(!1),i("home")},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]",children:"[ 00 // Home ]"}),M.jsx("button",{type:"button",onClick:()=>{a(!1),i("about")},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]",children:"[ 01 // Profile & Experience ]"}),M.jsx("button",{type:"button",onClick:()=>{a(!1),n()},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-cyan-400 hover:bg-cyan-500/10 font-bold",children:"[ 02 // All Projects Deck (13) ]"}),M.jsx("button",{type:"button",onClick:()=>{a(!1),i("contact")},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]",children:"[ 07 // Transmission ]"}),M.jsx("div",{className:"pt-2 border-t border-white/10",children:M.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"block",children:M.jsxs(Un,{className:"w-full bg-primary text-primary-foreground gap-2 text-xs",children:[M.jsx(ef,{className:"w-3.5 h-3.5"}),"Download Resume"]})})})]})]})},nf=[{id:"home",code:"00",label:"00 // Home",title:"Introduction"},{id:"about",code:"01",label:"01 // About Me",title:"Profile & Expertise"},{id:"smartscopy",code:"02",label:"02 // SmartScopy",title:"Medical XR Platform"},{id:"mimadim",code:"03",label:"03 // MimadimPlus",title:"3D CAD Engine"},{id:"nopainheals",code:"04",label:"04 // NoPainHeals",title:"Interactive Therapy Kiosk"},{id:"vision-ai",code:"05",label:"05 // Motion AI",title:"Computer Vision Games"},{id:"skills",code:"06",label:"06 // Skills & Stack",title:"Technologies & Services"},{id:"contact",code:"07",label:"07 // Contact",title:"Get In Touch"}],Gw=({activeStationId:t,onSelectStation:e})=>M.jsxs("aside",{"aria-label":"Section Navigation Rail",className:"fixed left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-5 pointer-events-auto select-none",children:[M.jsx("div",{className:"absolute left-[7px] top-1 bottom-1 w-[1.5px] bg-white/[0.08]"}),nf.map(n=>{const i=t===n.id;return M.jsxs("button",{type:"button",onClick:()=>e(n.id),className:"group relative flex items-center gap-3 text-left focus:outline-none",children:[M.jsx("div",{className:`relative z-10 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${i?"border border-cyan-400/80 bg-[#07080d] shadow-sm shadow-cyan-400/50 scale-110":"border border-white/20 bg-[#07080d] group-hover:border-cyan-400/40"}`,children:M.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i?"bg-cyan-400 shadow-[0_0_8px_#22d3ee] scale-100":"bg-transparent group-hover:bg-white/40 scale-75"}`})}),M.jsx("div",{className:"flex flex-col",children:M.jsx("span",{className:`font-mono text-[11px] tracking-wider transition-all duration-200 ${i?"text-cyan-400 font-bold translate-x-1":"text-slate-400/60 font-medium group-hover:text-slate-200 group-hover:translate-x-0.5"}`,children:n.label})})]},n.id)})]}),Ww=()=>M.jsxs("div",{"aria-hidden":"true",className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none select-none opacity-80",children:[M.jsx("div",{className:"relative w-[1.5px] h-9 bg-gradient-to-b from-cyan-400/80 via-indigo-400/40 to-transparent",children:M.jsx("span",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-bounce"})}),M.jsx("span",{className:"font-mono text-[9px] tracking-[0.25em] text-slate-400 uppercase",children:"SCROLL TO DISCOVER"})]}),Xw=({project:t,onClose:e,onOpenAllProjects:n})=>(F.useEffect(()=>{const i=r=>{r.key==="Escape"&&e()};return t&&(window.addEventListener("keydown",i),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",i),document.body.style.overflow="unset"}},[t,e]),t?M.jsxs("div",{className:"fixed inset-0 z-50 flex justify-end",children:[M.jsx("div",{onClick:e,className:"fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"}),M.jsxs("aside",{role:"dialog","aria-label":`${t.title} Case Study`,className:"relative z-10 w-full max-w-xl h-full bg-[#080a12]/95 backdrop-blur-2xl border-l border-white/[0.08] shadow-2xl p-6 md:p-10 flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300",children:[M.jsxs("div",{className:"flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),M.jsxs("span",{className:"font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase",children:["Case Study // ",t.category]})]}),M.jsxs("button",{type:"button",onClick:e,className:"group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-400 hover:text-white transition-all text-xs font-mono","aria-label":"Close Case Study",children:[M.jsx("span",{children:"[ ESC ]"}),M.jsx(kc,{className:"w-3.5 h-3.5 group-hover:rotate-90 transition-transform"})]})]}),M.jsxs("div",{className:"mb-6",children:[M.jsx("h2",{className:"text-3xl md:text-4xl font-black tracking-tight text-white mb-2",children:t.title}),M.jsx("p",{className:"font-mono text-sm text-cyan-300/80 leading-relaxed",children:t.subtitle})]}),M.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-6",children:[M.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/15 border border-indigo-500/30 text-indigo-300",children:["Role: ",t.role]}),t.featured&&M.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center gap-1",children:[M.jsx(ya,{className:"w-3 h-3 text-cyan-400"})," Flagship Production System"]})]}),M.jsxs("div",{className:"mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]",children:[M.jsx("h4",{className:"font-mono text-xs tracking-wider text-slate-400 uppercase mb-2",children:"Engineering Overview"}),M.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:t.fullDescription||t.shortDescription})]}),t.architecturalHighlights&&t.architecturalHighlights.length>0&&M.jsxs("div",{className:"mb-6",children:[M.jsxs("h4",{className:"font-mono text-xs tracking-wider text-cyan-400 uppercase mb-3 flex items-center gap-2",children:[M.jsx(Ax,{className:"w-4 h-4"})," Architectural Highlights"]}),M.jsx("div",{className:"space-y-2.5",children:t.architecturalHighlights.map((i,r)=>M.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]",children:[M.jsx(Yh,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),M.jsx("span",{className:"text-xs text-slate-300 leading-relaxed",children:i})]},r))})]}),M.jsxs("div",{className:"mb-6",children:[M.jsxs("h4",{className:"font-mono text-xs tracking-wider text-indigo-400 uppercase mb-3 flex items-center gap-2",children:[M.jsx($E,{className:"w-4 h-4"})," Key Deliverables & Systems Built"]}),M.jsx("ul",{className:"space-y-2",children:t.keyWork.map((i,r)=>M.jsxs("li",{className:"flex items-start gap-2.5 text-xs text-slate-300",children:[M.jsx("span",{className:"text-indigo-400 font-bold font-mono",children:"▸"}),M.jsx("span",{children:i})]},r))})]}),t.metrics&&M.jsxs("div",{className:"mb-6 p-4 rounded-2xl bg-cyan-500/[0.05] border border-cyan-500/20",children:[M.jsx("span",{className:"font-mono text-[10px] tracking-widest text-cyan-400 uppercase block mb-1",children:"Production Impact & Telemetry"}),M.jsx("span",{className:"text-sm font-semibold text-white",children:t.metrics})]}),M.jsxs("div",{className:"mb-8",children:[M.jsx("h4",{className:"font-mono text-xs tracking-wider text-slate-400 uppercase mb-3",children:"Technology Stack"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:t.tech.map(i=>M.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300",children:i},i))})]}),M.jsxs("div",{className:"mt-auto pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3",children:[n&&M.jsx(Un,{type:"button",onClick:()=>{e(),n()},className:"flex-1 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl text-xs h-10 shadow-lg shadow-cyan-500/20",children:"Explore All 13 Projects"}),t.liveUrl&&M.jsx("a",{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"no-underline flex-1",children:M.jsxs(Un,{variant:"outline",className:"w-full border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 rounded-xl text-xs h-10 gap-1.5",children:[M.jsx(WE,{className:"w-3.5 h-3.5"}),"Live Link"]})})]})]})]}):null),Bc=F.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:mn("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));Bc.displayName="Card";const jw=F.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:mn("flex flex-col space-y-1.5 p-6",t),...e}));jw.displayName="CardHeader";const Yw=F.forwardRef(({className:t,...e},n)=>M.jsx("h3",{ref:n,className:mn("text-2xl font-semibold leading-none tracking-tight",t),...e}));Yw.displayName="CardTitle";const $w=F.forwardRef(({className:t,...e},n)=>M.jsx("p",{ref:n,className:mn("text-sm text-muted-foreground",t),...e}));$w.displayName="CardDescription";const qw=F.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:mn("p-6 pt-0",t),...e}));qw.displayName="CardContent";const Kw=F.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:mn("flex items-center p-6 pt-0",t),...e}));Kw.displayName="CardFooter";const rn=[{id:"smartscopy",title:"SmartScopy",subtitle:"Live Operating Theatre XR & Low-Latency Video Pipeline",category:"Medical XR",role:"Lead XR & Video Pipeline Engineer",shortDescription:"Solo-built XR platform streaming live endoscopic surgical camera feeds in real time to XREAL glasses and HoloLens 2, integrated with 3D anatomical overlays.",fullDescription:"SmartScopy is an operating theatre mixed-reality platform engineered to give surgical teams direct, hands-free visualization of endoscopic feeds and patient anatomy inside XR headsets. Built with a low-latency video streaming pipeline in Unity (C#) and Python, it allows surgeons to view live surgical feeds alongside interactive 3D anatomical models reconstructed from patient CT, MRI, and X-ray imaging.",tech:["Unity3D","C#","XREAL Air","HoloLens 2","MRTK","OpenXR","Python","OpenCV"],keyWork:["Ultra-low latency live video pipeline in Unity (C#) for real-time surgical camera feeds","Stereoscopic XR rendering for XREAL glasses and Microsoft HoloLens 2 via OpenXR","Interactive 3D anatomical reconstructions from CT/MRI/X-ray data viewable alongside live video","Modular Python video capture architecture with DirectShow buffer elimination"],architecturalHighlights:["Threaded video capture and processing pipeline separating capture and render loops","Sub-100ms camera-to-headset latency for precision surgical assistance","Dual-headset target support with MRTK gesture control and spatial head-anchoring"],featured:!0},{id:"mimadimplus",title:"MimadimPlus",subtitle:"Automated CAD-to-3D Procedural Architectural Engine",category:"Unreal Engine 5",role:"Lead Pipeline & C++ Developer",shortDescription:"Automated 2D-to-3D engine that converts raw CAD/DXF blueprints into realistic, real-time 3D building environments with procedural mesh generation.",fullDescription:"MimadimPlus is an automated architectural generation engine in Unreal Engine 5 that eliminates manual 3D modeling by compiling raw 2D CAD/DXF blueprints into procedural 3D environments. Built with custom C++ classes and UProceduralMeshComponent, it handles coordinate conversion, room-footprint extraction, wall-partner raycast snapping, and includes a custom procedural floor tile generator with polygon clipping math.",tech:["Unreal Engine 5","C++","UProceduralMeshComponent","Python","Blueprints","Meta Quest"],keyWork:["Automated DXF/CAD blueprint parser converting 2D architectural entities into 3D geometry","Custom C++ procedural mesh generation for walls, floors, doors, and windows with auto-calculated UVs and tangents","Integrated Procedural Floor Tile Generator & Geometric Clipper (TileManagerActor.h) for arbitrary polygon room boundaries","Companion Python desktop application for blueprint inspection, tag extraction, and Meta Quest VR walkthroughs"],architecturalHighlights:["Mathematical coordinate space conversion from 2D CAD (Y-inversion, normalization) to Unreal 3D world coordinates","Geometric clipping algorithm that slices tile meshes against complex L-shaped room contours with uniform grout spacing","Real-time dynamic lighting and material instancing for multi-room layout previews"],featured:!0},{id:"nopainheals",title:"NoPainHeals",subtitle:"Clinical Floor Projection Rehabilitation Platform",category:"Healthcare & Web3D",role:"Interactive Systems & Security Engineer",shortDescription:"Multi-modal interactive therapy platform featuring 12+ floor-projection games, zero-trust E2EE crypto, and a hardened Linux kiosk architecture.",fullDescription:"NoPainHeals is an enterprise clinical rehabilitation station used for motor skills therapy, balance training, and pediatric physical therapy. The system runs on a locked-down Linux/Ubuntu kiosk, featuring a suite of 12+ motion-tracked games, a zero-trust end-to-end encrypted telemetry tunnel using X25519 and AES-256-GCM, and an offline-first IndexedDB queue that prevents metric loss during clinic network dropouts.",tech:["Electron","Three.js","WebGL","WebSockets (Pusher v7)","Linux Kiosk","node:crypto (X25519, AES-256-GCM)","IndexedDB"],keyWork:["Delivered 12+ interactive floor-projection rehabilitation games (hopscotch, balance paths, reaction games)","Engineered zero-trust E2EE tunnel using node:crypto (X25519 key exchange, HKDF-SHA256, AES-256-GCM)","Hardened Linux/Ubuntu kiosk deployment with window escape guards and auto-launch controls","Built resilient offline-first IndexedDB queue with exponential backoff and retry caps"],architecturalHighlights:["Encrypted patient telemetry stream via custom secure headers (X-Encrypted-Payload, X-Hardware-Id)","Station hardware ID fingerprinting cached in Electron main process","Real-time WebSocket communication for remote therapist controls and QR station pairing"],featured:!0},{id:"motion-tracking-ai",title:"Camera-Based Motion Tracking & Edge AI",subtitle:"Real-Time Body Pose, Gesture & Object Detection Suite",category:"AI & Vision",role:"Computer Vision & Gameplay Engineer",shortDescription:"Custom motion and object-tracking models on live camera feeds powering controller-free full-body games.",fullDescription:"A high-performance edge AI computer vision pipeline developed in Python and Unity that processes live camera streams with zero buffer latency. Combines custom-trained YOLO object-tracking models running on ONNX Runtime with MediaPipe body pose and hand tracking to power controller-free games where physical movements control the gameplay.",tech:["Python","OpenCV","MediaPipe","YOLO","ONNX Runtime","DirectShow","Unity3D"],keyWork:["DirectShow video capture integration (cv2.CAP_DSHOW) eliminating internal frame buffer latency","Hybrid ML pipeline combining MediaPipe skeletal landmarks with custom ONNX models","Controller-free games suite: Fruit Samurai, Alien Runner, Enter If You Dare, and Football Cup","Real-time inference optimized for 60+ FPS on consumer hardware"],architecturalHighlights:["Multi-threaded frame acquisition and ML tensor inference to prevent UI stutter","Normalized gesture recognition coordinates mapped directly to in-game physics colliders"],featured:!0},{id:"3d-bone-visualizer",title:"3D Bone Visualizer",subtitle:"Interactive Orthopedic Mixed Reality Suite",category:"Medical XR",role:"XR Developer",shortDescription:"Interactive HoloLens 2 mixed-reality application enabling surgeons to inspect, slice, and manipulate 3D bone models from CT/MRI data.",fullDescription:"A specialized spatial computing application developed for Microsoft HoloLens 2 using MRTK and OpenXR. Surgeons can visualize volumetric patient bone structures in 3D space, rotate and inspect fractures, slice anatomical models along cross-sectional planes, and interact using natural hand tracking.",tech:["Unity3D","Microsoft HoloLens 2","MRTK","OpenXR","C#"],keyWork:["Volumetric bone model reconstruction and rendering from CT and MRI scans","Spatial hand-tracking gesture controls for 3D model rotation, zoom, and translation","Cross-sectional planar slicing tool for internal anatomical examination"],architecturalHighlights:["MRTK solver pipelines for ergonomic spatial anchoring in sterile operating room environments","Optimized polygon meshes for smooth 60 FPS rendering on mobile XR hardware"]},{id:"mimadim-homestudio",title:"MimadimHomeStudio",subtitle:"Real-Time Interior Customization & Furniture Swapping",category:"Unreal Engine 5",role:"Unreal Engine Developer",shortDescription:"Real-time interior design and customization engine in Unreal Engine 5 with dynamic asset swapping and instant lighting adjustments.",fullDescription:"An interactive architectural visualization tool built in UE5 using C++, Blueprints, and Data Assets. Users can customize room finishes, wall colors, lighting configurations, and dynamically swap furniture pieces while maintaining accurate world coordinates, pivot rotations, and collision bounds.",tech:["Unreal Engine 5","C++","Blueprints","Data Assets","Lumen Lighting"],keyWork:["Dynamic furniture swapping system preserving world position, rotation, and dimensions","Runtime material and color switching pipeline using Blueprint dynamic material instances","Real-time architectural lighting preview powered by UE5 Lumen"],architecturalHighlights:["Data Asset-driven catalog system decoupling furniture definitions from gameplay code","Collision checking preventing overlapping placements during item swaps"]},{id:"speech-therapy",title:"Speech Therapy Station (Speak & Rise)",subtitle:"Pediatric Articulation & Web3D Voice Platform",category:"Healthcare & Web3D",role:"Web3D & Systems Architect",shortDescription:"Interactive 3D web platform for pediatric speech therapy featuring real-time AI voice recognition and articulation scoring.",fullDescription:"An interactive pediatric speech rehabilitation platform built in Three.js and WebGL. Ravi refactored a 2,000+ line legacy monolith into clean decoupled modules (GameStateMachine, Classroom3D, GameRegistry) and integrated Sarvam AI voice activity detection and speech-to-text for real-time gamified pronunciation feedback.",tech:["Three.js","JavaScript","Web Audio API","Sarvam AI (VAD & STT)","Electron"],keyWork:["Architectural refactoring into decoupled GameStateMachine and Classroom3D modules","Integration of Sarvam AI Voice Activity Detection (VAD) and Speech-to-Text for pronunciation scoring","Interactive 3D character animation blending and gamified audio reward feedback"],architecturalHighlights:["Dynamic GameRegistry enabling plug-and-play addition of new therapy exercises without changing core logic","Low-latency Web Audio API synthesizers for instant child audio reinforcement"]},{id:"vr-boat-simulation",title:"VR Boat Simulation",subtitle:"Maritime Pilot Training Simulator",category:"Games & VR",role:"Unity Simulation Developer",shortDescription:"Virtual reality maritime simulator training pilots in transitioning from small vessels to large commercial cargo ships.",fullDescription:"A high-fidelity maritime training simulation in Unity for VR headsets. Focused on realistic open-water navigation, vessel handling characteristics, helm controls, realistic wave simulation, and custom buoyant water physics.",tech:["Unity3D","C#","VR SDK","HLSL Water Shaders","Physics Engine"],keyWork:["Developed realistic buoyant water physics and wave interaction models","Engineered ship helm controls and vessel inertia mechanics","Created dynamic weather and water shader effects"],architecturalHighlights:["Buoyancy force calculation sampling water height in real time to simulate realistic vessel heave and pitch","Comfort-tuned VR camera motion damping to minimize motion sickness during heavy waves"]},{id:"vr-zombie-shooter",title:"VR Zombie Shooter",subtitle:"First-Person 6DOF Immersive VR Game",category:"Games & VR",role:"Unity Gameplay Developer",shortDescription:"Action-packed first-person VR shooter featuring wave survival, spatial audio mapping, and realistic 6DOF weapon handling.",fullDescription:"An immersive virtual reality first-person game developed in Unity. Features realistic physics-based weapon reloading, tactile 6DOF controller feedback, spatial 3D audio, and intelligent enemy pathfinding algorithms.",tech:["Unity3D","C#","OpenXR","VR 6DOF","Spatial Audio","NavMesh AI"],keyWork:["Implemented 6DOF physical weapon grab, aim, and reload mechanics","Constructed multi-tiered enemy wave spawner with dynamic NavMesh routing","Configured 3D spatial soundscapes for audio-guided positional awareness"],architecturalHighlights:["Object pooling pipeline for projectiles, particle impacts, and enemy ragdolls to maintain a steady 90 FPS","Inverse kinematics (IK) player hand tracking"]},{id:"system-guard",title:"System Guard",subtitle:"Universal Kiosk Telemetry, Standby Tracker & Remote Kill-Switch",category:"Healthcare & Web3D",role:"Systems & Security Engineer",shortDescription:"Drop-in Electron kiosk monitoring module with hardware UUID fingerprinting, standby telemetry, and remote kill switch.",fullDescription:"A security and telemetry module designed for commercial medical kiosks. Auto-registers with a private Cloudflare Worker, generates tamper-resistant hardware UUID fingerprints, tracks active vs. standby operating time, and supports instant remote station locking.",tech:["Electron","Node.js crypto","Cloudflare Workers","Linux/Windows","Bash"],keyWork:["Hardware station fingerprinting via DMI product UUID and Linux machine ID","Inactivity detection transitioning kiosks cleanly between Active and Standby modes","Remote kill-switch protocol enabling instantaneous lockdown during security breaches"],architecturalHighlights:["Zero-dependency drop-in module requiring zero modification to existing game runtimes","Heartbeat ping architecture reporting kiosk health every 60 seconds with offline resilience"]},{id:"clean-the-city",title:"Clean the City",subtitle:"Mobile Physics Cleanup Game",category:"Games & VR",role:"Unity Mobile Developer",shortDescription:"Mobile casual game featuring black-hole gravitational physics to collect and absorb city debris.",fullDescription:"A mobile arcade game where players navigate an expanding black hole through urban environments, consuming city debris and buildings. Optimized for silky-smooth touch controls and high frame rates on both iOS and Android.",tech:["Unity3D","C#","Mobile (iOS/Android)","Physics2D/3D","Shader Graph"],keyWork:["Implemented gravitational suction physics and scalable mesh deformation","Optimized lighting, dynamic shadows, and draw-call batching for mobile performance","Integrated monetization SDKs and responsive touch controls"],architecturalHighlights:["Dynamic object scaling and collision culling to support hundreds of simultaneous physics bodies on mobile devices"]},{id:"iris-recognition",title:"Iris Recognition & Distance Detection",subtitle:"Biometric Identification & User Distance Prototype",category:"AI & Vision",role:"Computer Engineering Intern",shortDescription:"Image processing pipeline in Python and OpenCV calculating user distance from screen and biometric iris tracking.",fullDescription:"Developed during Ravi's engineering internship at Invisible Fiction. Built an image processing pipeline in Python and OpenCV that continuously tracks user eye position, computes user-to-screen distance to mitigate ocular fatigue, and evaluates iris features for biometric identification.",tech:["Python","OpenCV","NumPy","Image Processing"],keyWork:["Engineered user-to-screen geometric distance calculation using camera optical parameters","Constructed pupil and iris localization and contour isolation algorithms","Designed biometric distance warning thresholds to promote ergonomic computer usage"],architecturalHighlights:["Lightweight algorithmic pipeline running efficiently on standard webcam hardware without dedicated depth sensors"]},{id:"creative-spaces",title:"Creative Spaces Website",subtitle:"Interactive Architectural Showcase",category:"Healthcare & Web3D",role:"Freelance Web Developer",shortDescription:"Clean, responsive portfolio website built for an interior design and architectural client.",fullDescription:"A responsive website built for an interior design studio showcasing architectural design projects, interactive project galleries, and modern typography.",tech:["HTML5","CSS3","JavaScript","Responsive Web"],keyWork:["Constructed responsive image galleries and smooth scroll navigation","Optimized asset loading and mobile layout fidelity"],architecturalHighlights:["Clean semantic HTML structure with high Google Lighthouse performance scores"]}],Zw=[{label:"All Systems",value:"All",count:rn.length},{label:"Medical XR",value:"Medical XR",count:rn.filter(t=>t.category==="Medical XR").length},{label:"Unreal Engine 5",value:"Unreal Engine 5",count:rn.filter(t=>t.category==="Unreal Engine 5").length},{label:"Healthcare & Web3D",value:"Healthcare & Web3D",count:rn.filter(t=>t.category==="Healthcare & Web3D").length},{label:"AI & Vision",value:"AI & Vision",count:rn.filter(t=>t.category==="AI & Vision").length},{label:"Games & VR",value:"Games & VR",count:rn.filter(t=>t.category==="Games & VR").length}],Qw=({isOpen:t,onClose:e,onSelectProject:n})=>{const[i,r]=F.useState("All"),s=F.useRef(null);F.useEffect(()=>{const l=c=>{t&&(c.key==="Escape"?e():c.key==="ArrowRight"?o("right"):c.key==="ArrowLeft"&&o("left"))};return t&&(window.addEventListener("keydown",l),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",l),document.body.style.overflow="unset"}},[t,e]);const o=l=>{if(!s.current)return;const c=l==="right"?360:-360;s.current.scrollBy({left:c,behavior:"smooth"})};if(!t)return null;const a=i==="All"?rn:rn.filter(l=>l.category===i);return M.jsxs("div",{role:"dialog","aria-label":"Projects Archive Deck",className:"fixed inset-0 z-50 bg-[#06080e]/95 backdrop-blur-2xl flex flex-col p-6 md:p-10 animate-in fade-in duration-300",children:[M.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),M.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"ARCHIVE // 13 PRODUCTION SYSTEMS"})]}),M.jsxs("h2",{className:"text-2xl md:text-3xl font-black text-white tracking-tight",children:["Projects ",M.jsx("span",{className:"gradient-text",children:"Carousel Deck"})]})]}),M.jsxs("button",{type:"button",onClick:e,className:"group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-mono",children:[M.jsx("span",{children:"[ ESC ]"}),M.jsx(kc,{className:"w-4 h-4 group-hover:rotate-90 transition-transform"})]})]}),M.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-6",children:[M.jsx("div",{className:"flex flex-wrap gap-2",children:Zw.map(l=>{const c=i===l.value;return M.jsxs("button",{type:"button",onClick:()=>r(l.value),className:`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${c?"bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20 font-bold":"bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white"}`,children:[M.jsx("span",{children:l.label}),M.jsxs("span",{className:"text-[10px] opacity-60",children:["(",l.count,")"]})]},l.value)})}),M.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[M.jsx(Un,{size:"icon",variant:"outline",onClick:()=>o("left"),className:"w-9 h-9 rounded-xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]","aria-label":"Scroll Left",children:M.jsx(VE,{className:"w-4 h-4"})}),M.jsx(Un,{size:"icon",variant:"outline",onClick:()=>o("right"),className:"w-9 h-9 rounded-xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]","aria-label":"Scroll Right",children:M.jsx(HE,{className:"w-4 h-4"})})]})]}),M.jsx("div",{ref:s,className:"flex-1 flex gap-5 overflow-x-auto items-stretch pb-6 scrollbar-none snap-x snap-mandatory",style:{scrollbarWidth:"none"},children:a.map(l=>M.jsxs(Bc,{onClick:()=>n(l),className:"group shrink-0 w-[300px] sm:w-[340px] p-6 rounded-2xl bg-[#090c16]/90 border border-white/[0.08] hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/15 transition-all duration-300 flex flex-col justify-between cursor-pointer snap-start relative overflow-hidden",children:[M.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[M.jsx("span",{className:"font-mono text-[10px] tracking-wider text-cyan-400 uppercase font-semibold",children:l.category}),l.featured&&M.jsxs("span",{className:"flex items-center gap-1 font-mono text-[10px] text-indigo-400",children:[M.jsx(ya,{className:"w-3 h-3 text-cyan-400"})," Flagship"]})]}),M.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2",children:l.title}),M.jsx("p",{className:"font-mono text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4",children:l.subtitle}),l.metrics&&M.jsx("div",{className:"p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-4",children:M.jsxs("span",{className:"font-mono text-[11px] text-cyan-300 block line-clamp-1 font-medium",children:["⚡ ",l.metrics]})})]}),M.jsxs("div",{children:[M.jsx("div",{className:"flex flex-wrap gap-1.5 mb-4",children:l.tech.slice(0,3).map(c=>M.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-400",children:c},c))}),M.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-cyan-400 pt-3 border-t border-white/[0.06]",children:[M.jsx("span",{children:"[ INSPECT CASE ]"}),M.jsx(Tx,{className:"w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"})]})]})]},l.id))})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="186",Jw=0,Zm=1,e1=2,Pl=1,t1=2,Ro=3,Kr=0,En=1,Gn=2,Mi=0,zo=1,sa=2,Qm=3,Jm=4,n1=5,_s=100,i1=101,r1=102,s1=103,o1=104,a1=200,l1=201,c1=202,u1=203,zx=204,Vx=205,d1=206,f1=207,h1=208,p1=209,m1=210,g1=211,v1=212,x1=213,_1=214,rf=0,sf=1,of=2,oa=3,af=4,lf=5,cf=6,uf=7,Hx=0,y1=1,S1=2,Ei=0,Gx=1,Wx=2,Xx=3,Kh=4,jx=5,Yx=6,$x=7,qx=300,Zr=301,Zs=302,Su=303,Mu=304,zc=306,aa=1e3,Oi=1001,df=1002,Xt=1003,M1=1004,Xa=1005,jt=1006,Eu=1007,zr=1008,Nn=1009,Kx=1010,Zx=1011,la=1012,Zh=1013,wi=1014,xi=1015,wn=1016,Qh=1017,Jh=1018,ca=1020,Qx=35902,Jx=35899,e_=1021,t_=1022,ri=1023,Wi=1026,Vr=1027,n_=1028,ep=1029,Qr=1030,tp=1031,np=1033,Nl=33776,Ll=33777,Dl=33778,Il=33779,ff=35840,hf=35841,pf=35842,mf=35843,gf=36196,vf=37492,xf=37496,_f=37488,yf=37489,fc=37490,Sf=37491,Mf=37808,Ef=37809,wf=37810,bf=37811,Tf=37812,Cf=37813,Af=37814,Rf=37815,Pf=37816,Nf=37817,Lf=37818,Df=37819,If=37820,Uf=37821,Ff=36492,Of=36494,kf=36495,Bf=36283,zf=36284,hc=36285,Vf=36286,E1=3200,Hf=0,w1=1,cr="",Rn="srgb",pc="srgb-linear",mc="linear",st="srgb",wu=7680,b1=519,T1=512,C1=513,A1=514,ip=515,R1=516,P1=517,rp=518,N1=519,L1=35044,eg="300 es",_i=2e3,ua=2001;function D1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function I1(){const t=gc("canvas");return t.style.display="block",t}const tg={};function ng(...t){const e="THREE."+t.shift();console.log(e,...t)}function i_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=i_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function tt(...t){t=i_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Hs(...t){const e=t.join(" ");e in tg||(tg[e]=!0,De(...t))}function U1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const F1={[rf]:sf,[of]:cf,[af]:uf,[oa]:lf,[sf]:rf,[cf]:of,[uf]:af,[lf]:oa};class ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bu=Math.PI/180,Gf=180/Math.PI;function Sa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function O1(t,e){return(t%e+e)%e}function Tu(t,e,n){return(1-n)*t+n*e}function xo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pp=class pp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pp.prototype.isVector2=!0;let Le=pp;class ro{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],u=s[o+0],m=s[o+1],v=s[o+2],S=s[o+3];if(h!==S||l!==u||c!==m||f!==v){let p=l*u+c*m+f*v+h*S;p<0&&(u=-u,m=-m,v=-v,S=-S,p=-p);let d=1-a;if(p<.9995){const g=Math.acos(p),E=Math.sin(g);d=Math.sin(d*g)/E,a=Math.sin(a*g)/E,l=l*d+u*a,c=c*d+m*a,f=f*d+v*a,h=h*d+S*a}else{l=l*d+u*a,c=c*d+m*a,f=f*d+v*a,h=h*d+S*a;const g=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=g,c*=g,f*=g,h*=g}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],u=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*h+l*m-c*u,e[n+1]=l*v+f*u+c*h-a*m,e[n+2]=c*v+f*m+a*u-l*h,e[n+3]=f*v-a*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),u=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=u*f*h+c*m*v,this._y=c*m*h-u*f*v,this._z=c*f*v+u*m*h,this._w=c*f*h-u*m*v;break;case"YXZ":this._x=u*f*h+c*m*v,this._y=c*m*h-u*f*v,this._z=c*f*v-u*m*h,this._w=c*f*h+u*m*v;break;case"ZXY":this._x=u*f*h-c*m*v,this._y=c*m*h+u*f*v,this._z=c*f*v+u*m*h,this._w=c*f*h-u*m*v;break;case"ZYX":this._x=u*f*h-c*m*v,this._y=c*m*h+u*f*v,this._z=c*f*v-u*m*h,this._w=c*f*h+u*m*v;break;case"YZX":this._x=u*f*h+c*m*v,this._y=c*m*h+u*f*v,this._z=c*f*v-u*m*h,this._w=c*f*h-u*m*v;break;case"XZY":this._x=u*f*h-c*m*v,this._y=c*m*h-u*f*v,this._z=c*f*v+u*m*h,this._w=c*f*h+u*m*v;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],u=i+a+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const mp=class mp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ig.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ig.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cu.copy(this).projectOnVector(e),this.sub(Cu)}reflect(e){return this.sub(Cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mp.prototype.isVector3=!0;let V=mp;const Cu=new V,ig=new ro,gp=class gp{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],m=i[5],v=i[8],S=r[0],p=r[3],d=r[6],g=r[1],E=r[4],_=r[7],b=r[2],T=r[5],C=r[8];return s[0]=o*S+a*g+l*b,s[3]=o*p+a*E+l*T,s[6]=o*d+a*_+l*C,s[1]=c*S+f*g+h*b,s[4]=c*p+f*E+h*T,s[7]=c*d+f*_+h*C,s[2]=u*S+m*g+v*b,s[5]=u*p+m*E+v*T,s[8]=u*d+m*_+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,u=a*l-f*s,m=c*s-o*l,v=n*h+i*u+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=h*S,e[1]=(r*c-f*i)*S,e[2]=(a*i-r*o)*S,e[3]=u*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Au.makeScale(e,n)),this}rotate(e){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Au.makeRotation(-e)),this}translate(e,n){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gp.prototype.isMatrix3=!0;let Ue=gp;const Au=new Ue,rg=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sg=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k1(){const t={enabled:!0,workingColorSpace:pc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=Gs(r.r),r.g=Gs(r.g),r.b=Gs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cr?mc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[pc]:{primaries:e,whitePoint:i,transfer:mc,toXYZ:rg,fromXYZ:sg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:rg,fromXYZ:sg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),t}const Ke=k1();function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let os;class B1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{os===void 0&&(os=gc("canvas")),os.width=e.width,os.height=e.height;const r=os.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=os}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z1=0;class sp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Sa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ru(r[o].image)):s.push(Ru(r[o]))}else s=Ru(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ru(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?B1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let V1=0;const Pu=new V;class on extends ns{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Oi,r=Oi,s=jt,o=zr,a=ri,l=Nn,c=on.DEFAULT_ANISOTROPY,f=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Sa(),this.name="",this.source=new sp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pu).x}get height(){return this.source.getSize(Pu).y}get depth(){return this.source.getSize(Pu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=qx;on.DEFAULT_ANISOTROPY=1;const vp=class vp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],m=l[5],v=l[9],S=l[2],p=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-S)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+S)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,_=(m+1)/2,b=(d+1)/2,T=(f+u)/4,C=(h+S)/4,y=(v+p)/4;return E>_&&E>b?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=T/i,s=C/i):_>b?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=T/r,s=y/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-v)*(p-v)+(h-S)*(h-S)+(u-f)*(u-f));return Math.abs(g)<.001&&(g=1),this.x=(p-v)/g,this.y=(h-S)/g,this.z=(u-f)/g,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vp.prototype.isVector4=!0;let Mt=vp;class H1 extends ns{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new on(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new sp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends H1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class r_ extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G1 extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const vc=class vc{constructor(e,n,i,r,s,o,a,l,c,f,h,u,m,v,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,u,m,v,S,p)}set(e,n,i,r,s,o,a,l,c,f,h,u,m,v,S,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=m,d[7]=v,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*f,m=o*h,v=a*f,S=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=u-S*c,n[9]=-a*l,n[2]=S-u*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,m=l*h,v=c*f,S=c*h;n[0]=u+S*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=S+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,m=l*h,v=c*f,S=c*h;n[0]=u-S*a,n[4]=-o*h,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=S-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,m=o*h,v=a*f,S=a*h;n[0]=l*f,n[4]=v*c-m,n[8]=u*c+S,n[1]=l*h,n[5]=S*c+u,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,v=a*l,S=a*c;n[0]=l*f,n[4]=S-u*h,n[8]=v*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+v,n[10]=u-S*h}else if(e.order==="XZY"){const u=o*l,m=o*c,v=a*l,S=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=u*h+S,n[5]=o*f,n[9]=m*h-v,n[2]=v*h-m,n[6]=a*f,n[10]=S*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W1,e,X1)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Qi.crossVectors(i,Tn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Qi.crossVectors(i,Tn)),Qi.normalize(),ja.crossVectors(Tn,Qi),r[0]=Qi.x,r[4]=ja.x,r[8]=Tn.x,r[1]=Qi.y,r[5]=ja.y,r[9]=Tn.y,r[2]=Qi.z,r[6]=ja.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],m=i[13],v=i[2],S=i[6],p=i[10],d=i[14],g=i[3],E=i[7],_=i[11],b=i[15],T=r[0],C=r[4],y=r[8],R=r[12],A=r[1],L=r[5],D=r[9],H=r[13],N=r[2],k=r[6],K=r[10],j=r[14],B=r[3],z=r[7],Y=r[11],Z=r[15];return s[0]=o*T+a*A+l*N+c*B,s[4]=o*C+a*L+l*k+c*z,s[8]=o*y+a*D+l*K+c*Y,s[12]=o*R+a*H+l*j+c*Z,s[1]=f*T+h*A+u*N+m*B,s[5]=f*C+h*L+u*k+m*z,s[9]=f*y+h*D+u*K+m*Y,s[13]=f*R+h*H+u*j+m*Z,s[2]=v*T+S*A+p*N+d*B,s[6]=v*C+S*L+p*k+d*z,s[10]=v*y+S*D+p*K+d*Y,s[14]=v*R+S*H+p*j+d*Z,s[3]=g*T+E*A+_*N+b*B,s[7]=g*C+E*L+_*k+b*z,s[11]=g*y+E*D+_*K+b*Y,s[15]=g*R+E*H+_*j+b*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],m=e[14],v=e[3],S=e[7],p=e[11],d=e[15],g=l*m-c*u,E=a*m-c*h,_=a*u-l*h,b=o*m-c*f,T=o*u-l*f,C=o*h-a*f;return n*(S*g-p*E+d*_)-i*(v*g-p*b+d*T)+r*(v*E-S*b+d*C)-s*(v*_-S*T+p*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],m=e[11],v=e[12],S=e[13],p=e[14],d=e[15],g=n*a-i*o,E=n*l-r*o,_=n*c-s*o,b=i*l-r*a,T=i*c-s*a,C=r*c-s*l,y=f*S-h*v,R=f*p-u*v,A=f*d-m*v,L=h*p-u*S,D=h*d-m*S,H=u*d-m*p,N=g*H-E*D+_*L+b*A-T*R+C*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return e[0]=(a*H-l*D+c*L)*k,e[1]=(r*D-i*H-s*L)*k,e[2]=(S*C-p*T+d*b)*k,e[3]=(u*T-h*C-m*b)*k,e[4]=(l*A-o*H-c*R)*k,e[5]=(n*H-r*A+s*R)*k,e[6]=(p*_-v*C-d*E)*k,e[7]=(f*C-u*_+m*E)*k,e[8]=(o*D-a*A+c*y)*k,e[9]=(i*A-n*D-s*y)*k,e[10]=(v*T-S*_+d*g)*k,e[11]=(h*_-f*T-m*g)*k,e[12]=(a*R-o*L-l*y)*k,e[13]=(n*L-i*R+r*y)*k,e[14]=(S*E-v*b-p*g)*k,e[15]=(f*b-h*E+u*g)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,u=s*c,m=s*f,v=s*h,S=o*f,p=o*h,d=a*h,g=l*c,E=l*f,_=l*h,b=i.x,T=i.y,C=i.z;return r[0]=(1-(S+d))*b,r[1]=(m+_)*b,r[2]=(v-E)*b,r[3]=0,r[4]=(m-_)*T,r[5]=(1-(u+d))*T,r[6]=(p+g)*T,r[7]=0,r[8]=(v+E)*C,r[9]=(p-g)*C,r[10]=(1-(u+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=as.set(r[0],r[1],r[2]).length();const a=as.set(r[4],r[5],r[6]).length(),l=as.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Zn.copy(this);const c=1/o,f=1/a,h=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=f,Zn.elements[5]*=f,Zn.elements[6]*=f,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,n.setFromRotationMatrix(Zn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=_i,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),m=(i+r)/(i-r);let v,S;if(l)v=s/(o-s),S=o*s/(o-s);else if(a===_i)v=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===ua)v=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,S;if(l)v=1/(o-s),S=o/(o-s);else if(a===_i)v=-2/(o-s),S=-(o+s)/(o-s);else if(a===ua)v=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};vc.prototype.isMatrix4=!0;let wt=vc;const as=new V,Zn=new wt,W1=new V(0,0,0),X1=new V(1,1,1),Qi=new V,ja=new V,Tn=new V,og=new wt,ag=new ro;class br{constructor(e=0,n=0,i=0,r=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(og,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ag.setFromEuler(this),this.setFromQuaternion(ag,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class s_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j1=0;const lg=new V,ls=new ro,Ci=new wt,Ya=new V,_o=new V,Y1=new V,$1=new ro,cg=new V(1,0,0),ug=new V(0,1,0),dg=new V(0,0,1),fg={type:"added"},q1={type:"removed"},cs={type:"childadded",child:null},Nu={type:"childremoved",child:null};class qt extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=Sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new V,n=new br,i=new ro,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ue}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new s_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(cg,e)}rotateY(e){return this.rotateOnAxis(ug,e)}rotateZ(e){return this.rotateOnAxis(dg,e)}translateOnAxis(e,n){return lg.copy(e).applyQuaternion(this.quaternion),this.position.add(lg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(cg,e)}translateY(e){return this.translateOnAxis(ug,e)}translateZ(e){return this.translateOnAxis(dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ya.copy(e):Ya.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(_o,Ya,this.up):Ci.lookAt(Ya,_o,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(Ci),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fg),cs.child=e,this.dispatchEvent(cs),cs.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(q1),Nu.child=e,this.dispatchEvent(Nu),Nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fg),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,Y1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,$1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}qt.DEFAULT_UP=new V(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ls extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K1={type:"move"};class Lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const p=n.getJointPose(S,i),d=this._getHandJoint(c,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&u>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Du(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=O1(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Du(o,s,e+1/3),this.g=Du(o,s,e),this.b=Du(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const i=o_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return Ke.workingToColorSpace(nn.copy(this),e),Math.round(Ze(nn.r*255,0,255))*65536+Math.round(Ze(nn.g*255,0,255))*256+Math.round(Ze(nn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Rn){Ke.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+n,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ji),e.getHSL($a);const i=Tu(Ji.h,$a.h,n),r=Tu(Ji.s,$a.s,n),s=Tu(Ji.l,$a.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Oe;Oe.NAMES=o_;class op{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=n}clone(){return new op(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Z1 extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qn=new V,Ai=new V,Iu=new V,Ri=new V,us=new V,ds=new V,hg=new V,Uu=new V,Fu=new V,Ou=new V,ku=new Mt,Bu=new Mt,zu=new Mt;class ii{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Ai.subVectors(i,n),Iu.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(Ai),l=Qn.dot(Iu),c=Ai.dot(Ai),f=Ai.dot(Iu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,m=(c*l-a*f)*u,v=(o*f-a*l)*u;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ku.setScalar(0),Bu.setScalar(0),zu.setScalar(0),ku.fromBufferAttribute(e,n),Bu.fromBufferAttribute(e,i),zu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ku,s.x),o.addScaledVector(Bu,s.y),o.addScaledVector(zu,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Ai.subVectors(e,n),Qn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;us.subVectors(r,i),ds.subVectors(s,i),Uu.subVectors(e,i);const l=us.dot(Uu),c=ds.dot(Uu);if(l<=0&&c<=0)return n.copy(i);Fu.subVectors(e,r);const f=us.dot(Fu),h=ds.dot(Fu);if(f>=0&&h<=f)return n.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(us,o);Ou.subVectors(e,s);const m=us.dot(Ou),v=ds.dot(Ou);if(v>=0&&m<=v)return n.copy(s);const S=m*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ds,a);const p=f*v-m*h;if(p<=0&&h-f>=0&&m-v>=0)return hg.subVectors(s,r),a=(h-f)/(h-f+(m-v)),n.copy(r).addScaledVector(hg,a);const d=1/(p+S+u);return o=S*d,a=u*d,n.copy(i).addScaledVector(us,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ma{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),Ka.subVectors(this.max,yo),fs.subVectors(e.a,yo),hs.subVectors(e.b,yo),ps.subVectors(e.c,yo),er.subVectors(hs,fs),tr.subVectors(ps,hs),Pr.subVectors(fs,ps);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Pr.z,Pr.y,er.z,0,-er.x,tr.z,0,-tr.x,Pr.z,0,-Pr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Pr.y,Pr.x,0];return!Vu(n,fs,hs,ps,Ka)||(n=[1,0,0,0,1,0,0,0,1],!Vu(n,fs,hs,ps,Ka))?!1:(Za.crossVectors(er,tr),n=[Za.x,Za.y,Za.z],Vu(n,fs,hs,ps,Ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new V,new V,new V,new V,new V,new V,new V,new V],Jn=new V,qa=new Ma,fs=new V,hs=new V,ps=new V,er=new V,tr=new V,Pr=new V,yo=new V,Ka=new V,Za=new V,Nr=new V;function Vu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Nr.fromArray(t,s);const a=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),c=n.dot(Nr),f=i.dot(Nr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Nt=new V,Qa=new Le;let Q1=0;class ai extends ns{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=L1,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qa.fromBufferAttribute(this,n),Qa.applyMatrix3(e),this.setXY(n,Qa.x,Qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xo(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xo(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xo(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class a_ extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class l_ extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class li extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}const J1=new Ma,So=new V,Hu=new V;class Vc{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):J1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const n=So.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(So,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(Hu)),this.expandByPoint(So.copy(e.center).sub(Hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eb=0;const zn=new wt,Gu=new qt,ms=new V,Cn=new Ma,Mo=new Ma,zt=new V;class $n extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(D1(e)?l_:a_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,n,i){return zn.makeTranslation(e,n,i),this.applyMatrix4(zn),this}scale(e,n,i){return zn.makeScale(e,n,i),this.applyMatrix4(zn),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new li(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Cn.min,Mo.min),Cn.expandByPoint(zt),zt.addVectors(Cn.max,Mo.max),Cn.expandByPoint(zt)):(Cn.expandByPoint(Mo.min),Cn.expandByPoint(Mo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)zt.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(e,c),zt.add(ms)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ai(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new V,l[y]=new V;const c=new V,f=new V,h=new V,u=new Le,m=new Le,v=new Le,S=new V,p=new V;function d(y,R,A){c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,R),h.fromBufferAttribute(i,A),u.fromBufferAttribute(s,y),m.fromBufferAttribute(s,R),v.fromBufferAttribute(s,A),f.sub(c),h.sub(c),m.sub(u),v.sub(u);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(S.copy(f).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(L),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(L),a[y].add(S),a[R].add(S),a[A].add(S),l[y].add(p),l[R].add(p),l[A].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,R=g.length;y<R;++y){const A=g[y],L=A.start,D=A.count;for(let H=L,N=L+D;H<N;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new V,_=new V,b=new V,T=new V;function C(y){b.fromBufferAttribute(r,y),T.copy(b);const R=a[y];E.copy(R),E.sub(b.multiplyScalar(b.dot(R))).normalize(),_.crossVectors(T,R);const L=_.dot(l[y])<0?-1:1;o.setXYZW(y,E.x,E.y,E.z,L)}for(let y=0,R=g.length;y<R;++y){const A=g[y],L=A.start,D=A.count;for(let H=L,N=L+D;H<N;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,f=new V,h=new V;if(e)for(let u=0,m=e.count;u<m;u+=3){const v=e.getX(u+0),S=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f);let m=0,v=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*f;for(let d=0;d<f;d++)u[v++]=c[m++]}return new ai(u,f,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const u=c[f],m=e(u,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,m=h.length;u<m;u++)f.push(h[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new V,tb=new V,nb=new Ue;class or{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wu.subVectors(i,n).cross(tb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Wu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||nb.getNormalMatrix(e),r=this.coplanarPoint(Wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ib=0;class so extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=Sa(),this.name="",this.type="Material",this.blending=zo,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zx,this.blendDst=Vx,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wu,this.stencilZFail=wu,this.stencilZPass=wu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new or().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ni=new V,Xu=new V,Ja=new V,el=new V;class c_{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xu.copy(e).add(n).multiplyScalar(.5),Ja.copy(n).sub(e).normalize(),el.copy(this.origin).sub(Xu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ja),a=el.dot(this.direction),l=-el.dot(Ja),c=el.lengthSq(),f=Math.abs(1-o*o);let h,u,m,v;if(f>0)if(h=o*l-a,u=o*a-l,v=s*f,h>=0)if(u>=-v)if(u<=v){const S=1/f;h*=S,u*=S,m=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u<=-v?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c):u<=v?(h=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xu).addScaledVector(Ja,u),m}intersectSphere(e,n){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,h=e.x-o.x,u=e.y-o.y,m=e.z-o.z,v=n.x-o.x,S=n.y-o.y,p=n.z-o.z,d=i.x-o.x,g=i.y-o.y,E=i.z-o.z,_=Math.abs(l),b=Math.abs(c),T=Math.abs(f);let C,y,R,A,L,D,H,N,k,K,j,B;if(_>=b&&_>=T?(R=l,D=h,k=v,B=d,l>=0?(C=c,y=f,A=u,L=m,H=S,N=p,K=g,j=E):(C=f,y=c,A=m,L=u,H=p,N=S,K=E,j=g)):b>=T?(R=c,D=u,k=S,B=g,c>=0?(C=f,y=l,A=m,L=h,H=p,N=v,K=E,j=d):(C=l,y=f,A=h,L=m,H=v,N=p,K=d,j=E)):(R=f,D=m,k=p,B=E,f>=0?(C=l,y=c,A=h,L=u,H=v,N=S,K=d,j=g):(C=c,y=l,A=u,L=h,H=S,N=v,K=g,j=d)),R===0)return null;const z=C/R,Y=y/R,Z=1/R,fe=A-z*D,_e=L-Y*D,We=H-z*k,He=N-Y*k,Ve=K-z*B,Q=j-Y*B,ie=Ve*He-Q*We,Ee=fe*Q-_e*Ve,Ie=We*_e-He*fe;if(r){if(ie<0||Ee<0||Ie<0)return null}else if((ie<0||Ee<0||Ie<0)&&(ie>0||Ee>0||Ie>0))return null;const ye=ie+Ee+Ie;if(ye===0)return null;const Ge=Z*(ie*D+Ee*k+Ie*B);return(ye>0?Ge<0:Ge>0)?null:this.at(Ge/ye,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class da extends so{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=Hx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pg=new wt,Lr=new c_,tl=new Vc,mg=new V,nl=new V,il=new V,rl=new V,ju=new V,sl=new V,gg=new V,ol=new V;class Ut extends qt{constructor(e=new $n,n=new da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(ju.fromBufferAttribute(h,e),o?sl.addScaledVector(ju,f):sl.addScaledVector(ju.sub(n),f))}n.add(sl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(tl.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(tl,mg)===null||Lr.origin.distanceToSquared(mg)>(e.far-e.near)**2))&&(pg.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(pg),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=u.length;v<S;v++){const p=u[v],d=o[p.materialIndex],g=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=g,b=E;_<b;_+=3){const T=a.getX(_),C=a.getX(_+1),y=a.getX(_+2);r=al(this,d,e,i,c,f,h,T,C,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let p=v,d=S;p<d;p+=3){const g=a.getX(p),E=a.getX(p+1),_=a.getX(p+2);r=al(this,o,e,i,c,f,h,g,E,_),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=u.length;v<S;v++){const p=u[v],d=o[p.materialIndex],g=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let _=g,b=E;_<b;_+=3){const T=_,C=_+1,y=_+2;r=al(this,d,e,i,c,f,h,T,C,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=v,d=S;p<d;p+=3){const g=p,E=p+1,_=p+2;r=al(this,o,e,i,c,f,h,g,E,_),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function rb(t,e,n,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Kr,a),l===null)return null;ol.copy(a),ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ol);return c<n.near||c>n.far?null:{distance:c,point:ol.clone(),object:t}}function al(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,nl),t.getVertexPosition(l,il),t.getVertexPosition(c,rl);const f=rb(t,e,n,i,nl,il,rl,gg);if(f){const h=new V;ii.getBarycoord(gg,nl,il,rl,h),r&&(f.uv=ii.getInterpolatedAttribute(r,a,l,c,h,new Le)),s&&(f.uv1=ii.getInterpolatedAttribute(s,a,l,c,h,new Le)),o&&(f.normal=ii.getInterpolatedAttribute(o,a,l,c,h,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new V,materialIndex:0};ii.getNormal(nl,il,rl,u.normal),f.face=u,f.barycoord=h}return f}class sb extends on{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Xt,f=Xt,h,u){super(null,o,a,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dr=new Vc,ob=new Le(.5,.5),ll=new V;class ap{constructor(e=new or,n=new or,i=new or,r=new or,s=new or,o=new or){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],m=s[7],v=s[8],S=s[9],p=s[10],d=s[11],g=s[12],E=s[13],_=s[14],b=s[15];if(r[0].setComponents(c-o,m-f,d-v,b-g).normalize(),r[1].setComponents(c+o,m+f,d+v,b+g).normalize(),r[2].setComponents(c+a,m+h,d+S,b+E).normalize(),r[3].setComponents(c-a,m-h,d-S,b-E).normalize(),i)r[4].setComponents(l,u,p,_).normalize(),r[5].setComponents(c-l,m-u,d-p,b-_).normalize();else if(r[4].setComponents(c-l,m-u,d-p,b-_).normalize(),n===_i)r[5].setComponents(c+l,m+u,d+p,b+_).normalize();else if(n===ua)r[5].setComponents(l,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const n=ob.distanceTo(e.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ll.x=r.normal.x>0?e.max.x:e.min.x,ll.y=r.normal.y>0?e.max.y:e.min.y,ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class u_ extends so{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vg=new wt,Wf=new c_,cl=new Vc,ul=new V;class xg extends qt{constructor(e=new $n,n=new u_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;vg.copy(r).invert(),Wf.copy(e.ray).applyMatrix4(vg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=u,S=m;v<S;v++){const p=c.getX(v);ul.fromBufferAttribute(h,p),_g(ul,p,l,r,e,n,this)}}else{const u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=u,S=m;v<S;v++)ul.fromBufferAttribute(h,v),_g(ul,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _g(t,e,n,i,r,s,o){const a=Wf.distanceSqToPoint(t);if(a<n){const l=new V;Wf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class d_ extends on{constructor(e=[],n=Zr,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f_ extends on{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fa extends on{constructor(e,n,i=wi,r,s,o,a=Xt,l=Xt,c,f=Wi,h=1){if(f!==Wi&&f!==Vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class ab extends fa{constructor(e,n=wi,i=Zr,r,s,o=Xt,a=Xt,l,c=Wi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class h_ extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mr extends $n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let u=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new li(c,3)),this.setAttribute("normal",new li(f,3)),this.setAttribute("uv",new li(h,2));function v(S,p,d,g,E,_,b,T,C,y,R){const A=_/C,L=b/y,D=_/2,H=b/2,N=T/2,k=C+1,K=y+1;let j=0,B=0;const z=new V;for(let Y=0;Y<K;Y++){const Z=Y*L-H;for(let fe=0;fe<k;fe++){const _e=fe*A-D;z[S]=_e*g,z[p]=Z*E,z[d]=N,c.push(z.x,z.y,z.z),z[S]=0,z[p]=0,z[d]=T>0?1:-1,f.push(z.x,z.y,z.z),h.push(fe/C),h.push(1-Y/y),j+=1}}for(let Y=0;Y<y;Y++)for(let Z=0;Z<C;Z++){const fe=u+Z+k*Y,_e=u+Z+k*(Y+1),We=u+(Z+1)+k*(Y+1),He=u+(Z+1)+k*Y;l.push(fe,_e,He),l.push(_e,We,He),B+=6}a.addGroup(m,B,R),m+=B,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hr extends $n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,u=n/l,m=[],v=[],S=[],p=[];for(let d=0;d<f;d++){const g=d*u-o;for(let E=0;E<c;E++){const _=E*h-s;v.push(_,-g,0),S.push(0,0,1),p.push(E/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const E=g+c*d,_=g+c*(d+1),b=g+1+c*(d+1),T=g+1+c*d;m.push(E,_,T),m.push(_,b,T)}this.setIndex(m),this.setAttribute("position",new li(v,3)),this.setAttribute("normal",new li(S,3)),this.setAttribute("uv",new li(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.widthSegments,e.heightSegments)}}function Qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(yg(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(yg(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=Qs(t[n]);for(const r in i)e[r]=i[r]}return e}function yg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function lb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function p_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const ha={clone:Qs,merge:cn};var cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends so{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cb,this.fragmentShader=ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=lb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Oe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Le().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new wt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class db extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yu extends so{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hf,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fb extends so{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hb extends so{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lp extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const $u=new wt,Sg=new V,Mg=new V;class m_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ap,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Sg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sg),Mg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Mg),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){$u.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix($u,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===ua||e.reversedDepth?n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),n.multiply($u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dl=new V,fl=new ro,hi=new V;class g_ extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,fl,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,hi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(dl,fl,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const nr=new V,Eg=new Le,wg=new Le;class Pn extends g_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gf*2*Math.atan(Math.tan(bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,n){return this.getViewBounds(e,Eg,wg),n.subVectors(wg,Eg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class pb extends m_{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}}class mb extends lp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new pb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Hc extends g_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class gb extends m_{constructor(){super(new Hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bg extends lp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new gb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class vb extends lp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const gs=-90,vs=1;class xb extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(gs,vs,e,n);r.layers=this.layers,this.add(r);const s=new Pn(gs,vs,e,n);s.layers=this.layers,this.add(s);const o=new Pn(gs,vs,e,n);o.layers=this.layers,this.add(o);const a=new Pn(gs,vs,e,n);a.layers=this.layers,this.add(a);const l=new Pn(gs,vs,e,n);l.layers=this.layers,this.add(l);const c=new Pn(gs,vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,u,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class _b extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class yb{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Sb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Sb(){this._document.hidden===!1&&this.reset()}class Mb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const xp=class xp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};xp.prototype.isMatrix2=!0;let Tg=xp;function Cg(t,e,n,i){const r=Eb(i);switch(n){case e_:return t*e;case n_:return t*e/r.components*r.byteLength;case ep:return t*e/r.components*r.byteLength;case Qr:return t*e*2/r.components*r.byteLength;case tp:return t*e*2/r.components*r.byteLength;case t_:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case np:return t*e*4/r.components*r.byteLength;case Nl:case Ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hf:case mf:return Math.max(t,16)*Math.max(e,8)/4;case ff:case pf:return Math.max(t,8)*Math.max(e,8)/2;case gf:case vf:case _f:case yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xf:case fc:case Sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Af:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Df:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case If:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ff:case Of:case kf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Bf:case zf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case hc:case Vf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Eb(t){switch(t){case Nn:case Kx:return{byteLength:1,components:1};case la:case Zx:case wn:return{byteLength:2,components:1};case Qh:case Jh:return{byteLength:2,components:4};case wi:case Zh:case xi:return{byteLength:4,components:1};case Qx:case Jx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function v_(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wb(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,v)=>m.start-v.start);let u=0;for(let m=1;m<h.length;m++){const v=h[u],S=h[m];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++u,h[u]=S)}h.length=u+1;for(let m=0,v=h.length;m<v;m++){const S=h[m];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var bb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tb=`#ifdef USE_ALPHAHASH
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
#endif`,Cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nb=`#ifdef USE_AOMAP
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
#endif`,Lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Db=`#ifdef USE_BATCHING
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
#endif`,Ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ob=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kb=`#ifdef USE_IRIDESCENCE
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
#endif`,Bb=`#ifdef USE_BUMPMAP
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
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$b=`#define PI 3.141592653589793
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
} // validated`,qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kb=`vec3 transformedNormal = objectNormal;
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
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tT="gl_FragColor = linearToOutputTexel( gl_FragColor );",nT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iT=`#ifdef USE_ENVMAP
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
#endif`,rT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sT=`#ifdef USE_ENVMAP
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
#endif`,oT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
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
#endif`,lT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fT=`#ifdef USE_GRADIENTMAP
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
}`,hT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vT=`#ifdef USE_ENVMAP
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
#endif`,xT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ST=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MT=`PhysicalMaterial material;
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
#endif`,ET=`uniform sampler2D dfgLUT;
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
}`,wT=`
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
#endif`,bT=`#if defined( RE_IndirectDiffuse )
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
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,AT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UT=`#if defined( USE_POINTS_UV )
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
#endif`,FT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`#ifdef USE_MORPHTARGETS
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
#endif`,HT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
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
#endif`,qT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uC=`float getShadowMask() {
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
}`,dC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fC=`#ifdef USE_SKINNING
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
#endif`,hC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pC=`#ifdef USE_SKINNING
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
#endif`,mC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_C=`#ifdef USE_TRANSMISSION
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
#endif`,yC=`#ifdef USE_TRANSMISSION
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
#endif`,SC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TC=`uniform sampler2D t2D;
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
}`,CC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NC=`#include <common>
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
}`,LC=`#if DEPTH_PACKING == 3200
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
}`,DC=`#define DISTANCE
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
}`,IC=`#define DISTANCE
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
}`,UC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OC=`uniform float scale;
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
}`,kC=`uniform vec3 diffuse;
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
}`,BC=`#include <common>
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
}`,zC=`uniform vec3 diffuse;
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
}`,VC=`#define LAMBERT
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
}`,HC=`#define LAMBERT
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
}`,GC=`#define MATCAP
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
}`,WC=`#define MATCAP
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
}`,XC=`#define NORMAL
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
}`,jC=`#define NORMAL
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
}`,YC=`#define PHONG
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
}`,$C=`#define PHONG
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
}`,qC=`#define STANDARD
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
}`,KC=`#define STANDARD
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
}`,ZC=`#define TOON
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
}`,QC=`#define TOON
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
}`,JC=`uniform float size;
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
}`,eA=`uniform vec3 diffuse;
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
}`,tA=`#include <common>
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
}`,nA=`uniform vec3 color;
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
}`,iA=`uniform float rotation;
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
}`,rA=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:bb,alphahash_pars_fragment:Tb,alphamap_fragment:Cb,alphamap_pars_fragment:Ab,alphatest_fragment:Rb,alphatest_pars_fragment:Pb,aomap_fragment:Nb,aomap_pars_fragment:Lb,batching_pars_vertex:Db,batching_vertex:Ib,begin_vertex:Ub,beginnormal_vertex:Fb,bsdfs:Ob,iridescence_fragment:kb,bumpmap_pars_fragment:Bb,clipping_planes_fragment:zb,clipping_planes_pars_fragment:Vb,clipping_planes_pars_vertex:Hb,clipping_planes_vertex:Gb,color_fragment:Wb,color_pars_fragment:Xb,color_pars_vertex:jb,color_vertex:Yb,common:$b,cube_uv_reflection_fragment:qb,defaultnormal_vertex:Kb,displacementmap_pars_vertex:Zb,displacementmap_vertex:Qb,emissivemap_fragment:Jb,emissivemap_pars_fragment:eT,colorspace_fragment:tT,colorspace_pars_fragment:nT,envmap_fragment:iT,envmap_common_pars_fragment:rT,envmap_pars_fragment:sT,envmap_pars_vertex:oT,envmap_physical_pars_fragment:vT,envmap_vertex:aT,fog_vertex:lT,fog_pars_vertex:cT,fog_fragment:uT,fog_pars_fragment:dT,gradientmap_pars_fragment:fT,lightmap_pars_fragment:hT,lights_lambert_fragment:pT,lights_lambert_pars_fragment:mT,lights_pars_begin:gT,lights_toon_fragment:xT,lights_toon_pars_fragment:_T,lights_phong_fragment:yT,lights_phong_pars_fragment:ST,lights_physical_fragment:MT,lights_physical_pars_fragment:ET,lights_fragment_begin:wT,lights_fragment_maps:bT,lights_fragment_end:TT,lightprobes_pars_fragment:CT,logdepthbuf_fragment:AT,logdepthbuf_pars_fragment:RT,logdepthbuf_pars_vertex:PT,logdepthbuf_vertex:NT,map_fragment:LT,map_pars_fragment:DT,map_particle_fragment:IT,map_particle_pars_fragment:UT,metalnessmap_fragment:FT,metalnessmap_pars_fragment:OT,morphinstance_vertex:kT,morphcolor_vertex:BT,morphnormal_vertex:zT,morphtarget_pars_vertex:VT,morphtarget_vertex:HT,normal_fragment_begin:GT,normal_fragment_maps:WT,normal_pars_fragment:XT,normal_pars_vertex:jT,normal_vertex:YT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:qT,clearcoat_normal_fragment_maps:KT,clearcoat_pars_fragment:ZT,iridescence_pars_fragment:QT,opaque_fragment:JT,packing:eC,premultiplied_alpha_fragment:tC,project_vertex:nC,dithering_fragment:iC,dithering_pars_fragment:rC,roughnessmap_fragment:sC,roughnessmap_pars_fragment:oC,shadowmap_pars_fragment:aC,shadowmap_pars_vertex:lC,shadowmap_vertex:cC,shadowmask_pars_fragment:uC,skinbase_vertex:dC,skinning_pars_vertex:fC,skinning_vertex:hC,skinnormal_vertex:pC,specularmap_fragment:mC,specularmap_pars_fragment:gC,tonemapping_fragment:vC,tonemapping_pars_fragment:xC,transmission_fragment:_C,transmission_pars_fragment:yC,uv_pars_fragment:SC,uv_pars_vertex:MC,uv_vertex:EC,worldpos_vertex:wC,background_vert:bC,background_frag:TC,backgroundCube_vert:CC,backgroundCube_frag:AC,cube_vert:RC,cube_frag:PC,depth_vert:NC,depth_frag:LC,distance_vert:DC,distance_frag:IC,equirect_vert:UC,equirect_frag:FC,linedashed_vert:OC,linedashed_frag:kC,meshbasic_vert:BC,meshbasic_frag:zC,meshlambert_vert:VC,meshlambert_frag:HC,meshmatcap_vert:GC,meshmatcap_frag:WC,meshnormal_vert:XC,meshnormal_frag:jC,meshphong_vert:YC,meshphong_frag:$C,meshphysical_vert:qC,meshphysical_frag:KC,meshtoon_vert:ZC,meshtoon_frag:QC,points_vert:JC,points_frag:eA,shadow_vert:tA,shadow_frag:nA,sprite_vert:iA,sprite_frag:rA},pe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},gi={basic:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:cn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:cn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:cn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:cn([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:cn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:cn([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:cn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:cn([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:cn([pe.common,pe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:cn([pe.lights,pe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};gi.physical={uniforms:cn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const hl={r:0,b:0,g:0},sA=new wt,x_=new Ue;x_.set(-1,0,0,0,1,0,0,0,1);function oA(t,e,n,i,r,s){const o=new Oe(0);let a=r===!0?0:1,l,c,f=null,h=0,u=null;function m(g){let E=g.isScene===!0?g.background:null;if(E&&E.isTexture){const _=g.backgroundBlurriness>0;E=e.get(E,_)}return E}function v(g){let E=!1;const _=m(g);_===null?p(o,a):_&&_.isColor&&(p(_,1),E=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(g,E){const _=m(E);_&&(_.isCubeTexture||_.mapping===zc)?(c===void 0&&(c=new Ut(new Mr(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Qs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sA.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(x_),c.material.toneMapped=Ke.getTransfer(_.colorSpace)!==st,(f!==_||h!==_.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,u=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ut(new hr(2,2),new Yt({name:"BackgroundMaterial",uniforms:Qs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(_.colorSpace)!==st,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,u=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function p(g,E){g.getRGB(hl,p_(t)),n.buffers.color.setClear(hl.r,hl.g,hl.b,E,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,E=1){o.set(g),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,p(o,a)},render:v,addToRenderList:S,dispose:d}}function aA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(L,D,H,N,k){let K=!1;const j=h(L,N,H,D);s!==j&&(s=j,c(s.object)),K=m(L,N,H,k),K&&v(L,N,H,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(L,D,H,N),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function f(L){return t.deleteVertexArray(L)}function h(L,D,H,N){const k=N.wireframe===!0;let K=i[D.id];K===void 0&&(K={},i[D.id]=K);const j=L.isInstancedMesh===!0?L.id:0;let B=K[j];B===void 0&&(B={},K[j]=B);let z=B[H.id];z===void 0&&(z={},B[H.id]=z);let Y=z[k];return Y===void 0&&(Y=u(l()),z[k]=Y),Y}function u(L){const D=[],H=[],N=[];for(let k=0;k<n;k++)D[k]=0,H[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:N,object:L,attributes:{},index:null}}function m(L,D,H,N){const k=s.attributes,K=D.attributes;let j=0;const B=H.getAttributes();for(const z in B)if(B[z].location>=0){const Z=k[z];let fe=K[z];if(fe===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor)),Z===void 0||Z.attribute!==fe||fe&&Z.data!==fe.data)return!0;j++}return s.attributesNum!==j||s.index!==N}function v(L,D,H,N){const k={},K=D.attributes;let j=0;const B=H.getAttributes();for(const z in B)if(B[z].location>=0){let Z=K[z];Z===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const fe={};fe.attribute=Z,Z&&Z.data&&(fe.data=Z.data),k[z]=fe,j++}s.attributes=k,s.attributesNum=j,s.index=N}function S(){const L=s.newAttributes;for(let D=0,H=L.length;D<H;D++)L[D]=0}function p(L){d(L,0)}function d(L,D){const H=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;H[L]=1,N[L]===0&&(t.enableVertexAttribArray(L),N[L]=1),k[L]!==D&&(t.vertexAttribDivisor(L,D),k[L]=D)}function g(){const L=s.newAttributes,D=s.enabledAttributes;for(let H=0,N=D.length;H<N;H++)D[H]!==L[H]&&(t.disableVertexAttribArray(H),D[H]=0)}function E(L,D,H,N,k,K,j){j===!0?t.vertexAttribIPointer(L,D,H,k,K):t.vertexAttribPointer(L,D,H,N,k,K)}function _(L,D,H,N){S();const k=N.attributes,K=H.getAttributes(),j=D.defaultAttributeValues;for(const B in K){const z=K[B];if(z.location>=0){let Y=k[B];if(Y===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){const Z=Y.normalized,fe=Y.itemSize,_e=e.get(Y);if(_e===void 0)continue;const We=_e.buffer,He=_e.type,Ve=_e.bytesPerElement,Q=He===t.INT||He===t.UNSIGNED_INT||Y.gpuType===Zh;if(Y.isInterleavedBufferAttribute){const ie=Y.data,Ee=ie.stride,Ie=Y.offset;if(ie.isInstancedInterleavedBuffer){for(let ye=0;ye<z.locationSize;ye++)d(z.location+ye,ie.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ye=0;ye<z.locationSize;ye++)p(z.location+ye);t.bindBuffer(t.ARRAY_BUFFER,We);for(let ye=0;ye<z.locationSize;ye++)E(z.location+ye,fe/z.locationSize,He,Z,Ee*Ve,(Ie+fe/z.locationSize*ye)*Ve,Q)}else{if(Y.isInstancedBufferAttribute){for(let ie=0;ie<z.locationSize;ie++)d(z.location+ie,Y.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ie=0;ie<z.locationSize;ie++)p(z.location+ie);t.bindBuffer(t.ARRAY_BUFFER,We);for(let ie=0;ie<z.locationSize;ie++)E(z.location+ie,fe/z.locationSize,He,Z,fe*Ve,fe/z.locationSize*ie*Ve,Q)}}else if(j!==void 0){const Z=j[B];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(z.location,Z);break;case 3:t.vertexAttrib3fv(z.location,Z);break;case 4:t.vertexAttrib4fv(z.location,Z);break;default:t.vertexAttrib1fv(z.location,Z)}}}}g()}function b(){R();for(const L in i){const D=i[L];for(const H in D){const N=D[H];for(const k in N){const K=N[k];for(const j in K)f(K[j].object),delete K[j];delete N[k]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const D=i[L.id];for(const H in D){const N=D[H];for(const k in N){const K=N[k];for(const j in K)f(K[j].object),delete K[j];delete N[k]}}delete i[L.id]}function C(L){for(const D in i){const H=i[D];for(const N in H){const k=H[N];if(k[L.id]===void 0)continue;const K=k[L.id];for(const j in K)f(K[j].object),delete K[j];delete k[L.id]}}}function y(L){for(const D in i){const H=i[D],N=L.isInstancedMesh===!0?L.id:0,k=H[N];if(k!==void 0){for(const K in k){const j=k[K];for(const B in j)f(j[B].object),delete j[B];delete k[K]}delete H[N],Object.keys(H).length===0&&delete i[D]}}}function R(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:p,disableUnusedAttributes:g}}function lA(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let m=0;m<f;m++)u+=c[m];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function cA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ri&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const y=C===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Nn&&C!==xi&&!y&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(De("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:g,maxVaryings:E,maxFragmentUniforms:_,maxSamples:b,samples:T}}function uA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new or,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||i!==0||r;return r=u,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=f(h,u,0)},this.setState=function(h,u,m){const v=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,d=t.get(h);if(!r||v===null||v.length===0||s&&!p)s?f(null):c();else{const g=s?0:i,E=g*4;let _=d.clippingState||null;l.value=_,_=f(v,u,E,m);for(let b=0;b!==E;++b)_[b]=n[b];d.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,m,v){const S=h!==null?h.length:0;let p=null;if(S!==0){if(p=l.value,v!==!0||p===null){const d=m+S*4,g=u.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<d)&&(p=new Float32Array(d));for(let E=0,_=m;E!==S;++E,_+=4)o.copy(h[E]).applyMatrix4(g,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}const Ds=4,dA=6,fA=20,hA=256,Eo=new Hc,Ag=new Oe;let qu=null,Ku=0,Zu=0,Qu=!1;const pA=new V,Ir=new V;class Rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=pA}=s;qu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,Ku,Zu),this._renderer.xr.enabled=Qu,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zr||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:wn,format:ri,colorSpace:pc,depthBuffer:!1},r=Pg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mA(s)),this._blurMaterial=vA(s,e,n),this._ggxMaterial=gA(s,e,n)}return r}_compileMaterial(e){const n=new Ut(new $n,e);this._renderer.compile(n,Eo)}_sceneToCubeUV(e,n,i,r,s){const l=new Pn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(Ag),h.toneMapping=Ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Mr,new da({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,p=S.material;let d=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,d=!0):(p.color.copy(Ag),d=!0);for(let E=0;E<6;E++){const _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[E],s.y,s.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[E]));const b=this._cubeSize;xs(r,_*b,E>2?b:0,b,b),h.setRenderTarget(r),d&&h.render(S,l),h.render(e,l)}h.toneMapping=m,h.autoClear=u,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Zr||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ng());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Eo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,m=h*u,{_lodMax:v}=this,S=this._sizeLods[i],p=3*S*(i>v-Ds?i-v+Ds:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,xs(s,p,d,3*S,2*S),r.setRenderTarget(s),r.render(a,Eo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,xs(e,p,d,3*S,2*S),r.setRenderTarget(e),r.render(a,Eo)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],h=3*f*(r>this._lodMax-Ds?r-this._lodMax+Ds:0),u=4*(this._cubeSize-f);xs(n,h,u,3*f,2*f),o.setRenderTarget(n),o.render(l,Eo)}}function mA(t){const e=[],n=[];let i=t;const r=t-Ds+1+dA;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,m=3,v=new Float32Array(m*u*h),S=new Float32Array(m*u*h);for(let d=0;d<h;d++){const g=d%3*2/3-1,E=d>2?0:-1,_=[g,E,0,g+2/3,E,0,g+2/3,E+1,0,g,E,0,g+2/3,E+1,0,g,E+1,0];v.set(_,m*u*d);for(let b=0;b<u;b++){const T=f[b*2]*2-1,C=f[b*2+1]*2-1;d===0?Ir.set(1,C,T):d===1?Ir.set(-T,1,-C):d===2?Ir.set(-T,C,1):d===3?Ir.set(-1,C,-T):d===4?Ir.set(-T,-1,C):Ir.set(T,C,-1),Ir.toArray(S,(d*u+b)*m)}}const p=new $n;p.setAttribute("position",new ai(v,m)),p.setAttribute("outputDirection",new ai(S,m)),n.push(new Ut(p,null)),i>Ds&&i--}return{lodMeshes:n,sizeLods:e}}function Pg(t,e,n){const i=new fn(t,e,n);return i.texture.mapping=zc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gA(t,e,n){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function vA(t,e,n){return new Yt({name:"SphericalGaussianBlur",defines:{SAMPLES:fA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ng(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Lg(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class __ extends fn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new d_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mr(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Mi});s.uniforms.tEquirect.value=n;const o=new Ut(r,s),a=n.minFilter;return n.minFilter===zr&&(n.minFilter=jt),new xb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function xA(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?o(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Su||m===Mu)if(e.has(u)){const v=e.get(u).texture;return a(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const S=new __(v.height);return S.fromEquirectangularTexture(t,u),e.set(u,S),u.addEventListener("dispose",c),a(S.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const m=u.mapping,v=m===Su||m===Mu,S=m===Zr||m===Zs;if(v||S){let p=n.get(u);const d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Rg(t)),p=v?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,n.set(u,p),p.texture;if(p!==void 0)return p.texture;{const g=u.image;return v&&g&&g.height>0||S&&g&&l(g)?(i===null&&(i=new Rg(t)),p=v?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,n.set(u,p),u.addEventListener("dispose",f),p.texture):null}}}return u}function a(u,m){return m===Su?u.mapping=Zr:m===Mu&&(u.mapping=Zs),u}function l(u){let m=0;const v=6;for(let S=0;S<v;S++)u[S]!==void 0&&m++;return m===v}function c(u){const m=u.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function _A(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Hs("WebGLRenderer: "+i+" extension not supported."),r}}}function yA(t,e,n,i){const r={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function c(h){const u=[],m=h.index,v=h.attributes.position;let S=0;if(v===void 0)return;if(m!==null){const g=m.array;S=m.version;for(let E=0,_=g.length;E<_;E+=3){const b=g[E+0],T=g[E+1],C=g[E+2];u.push(b,T,T,C,C,b)}}else{const g=v.array;S=v.version;for(let E=0,_=g.length/3-1;E<_;E+=3){const b=E+0,T=E+1,C=E+2;u.push(b,T,T,C,C,b)}}const p=new(v.count>=65535?l_:a_)(u,1);p.version=S;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function f(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function SA(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,u){t.drawElements(i,u,s,h*o),n.update(u,i,1)}function c(h,u,m){m!==0&&(t.drawElementsInstanced(i,u,s,h*o,m),n.update(u,i,m))}function f(h,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,m);let S=0;for(let p=0;p<m;p++)S+=u[p];n.update(S,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function MA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function EA(t,e,n){const i=new WeakMap,r=new Mt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let A=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var m=A;u!==void 0&&u.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let _=0;v===!0&&(_=1),S===!0&&(_=2),p===!0&&(_=3);let b=a.attributes.position.count*_,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*T*4*h),y=new r_(C,b,T,h);y.type=xi,y.needsUpdate=!0;const R=_*4;for(let L=0;L<h;L++){const D=d[L],H=g[L],N=E[L],k=b*T*4*L;for(let K=0;K<D.count;K++){const j=K*R;v===!0&&(r.fromBufferAttribute(D,K),C[k+j+0]=r.x,C[k+j+1]=r.y,C[k+j+2]=r.z,C[k+j+3]=0),S===!0&&(r.fromBufferAttribute(H,K),C[k+j+4]=r.x,C[k+j+5]=r.y,C[k+j+6]=r.z,C[k+j+7]=0),p===!0&&(r.fromBufferAttribute(N,K),C[k+j+8]=r.x,C[k+j+9]=r.y,C[k+j+10]=r.z,C[k+j+11]=N.itemSize===4?r.w:1)}}u={count:h,texture:y,size:new Le(b,T)},i.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function wA(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const bA={[Gx]:"LINEAR_TONE_MAPPING",[Wx]:"REINHARD_TONE_MAPPING",[Xx]:"CINEON_TONE_MAPPING",[Kh]:"ACES_FILMIC_TONE_MAPPING",[Yx]:"AGX_TONE_MAPPING",[$x]:"NEUTRAL_TONE_MAPPING",[jx]:"CUSTOM_TONE_MAPPING"};function TA(t,e,n,i,r,s){const o=new fn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new $n;c.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new li([0,2,0,0,2,0],2));const f=new db({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ut(c,f),u=new Hc(-1,1,1,-1,0,1);let m=null,v=null,S=!1,p,d=null,g=[],E=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let T=0;T<g.length;T++){const C=g[T];C.setSize&&C.setSize(_,b)}},this.setEffects=function(_){g=_,E=g.length>0&&g[0].isRenderPass===!0;const b=o.width,T=o.height;g.length>0&&a===null&&(a=new fn(b,T,{type:wn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(b,T,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<g.length;C++){const y=g[C];y.setSize&&y.setSize(b,T)}},this.begin=function(_,b){if(S||_.toneMapping===Ei&&g.length===0)return!1;if(d=b,b!==null){const T=b.width,C=b.height;(o.width!==T||o.height!==C)&&this.setSize(T,C)}return E===!1&&_.setRenderTarget(o),p=_.toneMapping,_.toneMapping=Ei,!0},this.hasRenderPass=function(){return E},this.end=function(_,b){_.toneMapping=p,S=!0;let T=o,C=a;for(let y=0;y<g.length;y++){const R=g[y];R.enabled!==!1&&(R.render(_,C,T,b),R.needsSwap!==!1&&(T=C,C=C===a?l:a))}if(m!==_.outputColorSpace||v!==_.toneMapping){m=_.outputColorSpace,v=_.toneMapping,f.defines={},Ke.getTransfer(m)===st&&(f.defines.SRGB_TRANSFER="");const y=bA[v];y&&(f.defines[y]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(d),_.render(h,u),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const y_=new on,Xf=new fa(1,1),S_=new r_,M_=new G1,E_=new d_,Dg=[],Ig=[],Ug=new Float32Array(16),Fg=new Float32Array(9),Og=new Float32Array(4);function oo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Dg[r];if(s===void 0&&(s=new Float32Array(r),Dg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Wc(t,e){let n=Ig[e];n===void 0&&(n=new Int32Array(e),Ig[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function CA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function RA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function PA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function NA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Og.set(i),t.uniformMatrix2fv(this.addr,!1,Og),kt(n,i)}}function LA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Fg.set(i),t.uniformMatrix3fv(this.addr,!1,Fg),kt(n,i)}}function DA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Ug.set(i),t.uniformMatrix4fv(this.addr,!1,Ug),kt(n,i)}}function IA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function FA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function OA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function kA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function HA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Xf.compareFunction=n.isReversedDepthBuffer()?rp:ip,s=Xf):s=y_,n.setTexture2D(e||s,r)}function GA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||M_,r)}function WA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||E_,r)}function XA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||S_,r)}function jA(t){switch(t){case 5126:return CA;case 35664:return AA;case 35665:return RA;case 35666:return PA;case 35674:return NA;case 35675:return LA;case 35676:return DA;case 5124:case 35670:return IA;case 35667:case 35671:return UA;case 35668:case 35672:return FA;case 35669:case 35673:return OA;case 5125:return kA;case 36294:return BA;case 36295:return zA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return HA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return WA;case 36289:case 36303:case 36311:case 36292:return XA}}function YA(t,e){t.uniform1fv(this.addr,e)}function $A(t,e){const n=oo(e,this.size,2);t.uniform2fv(this.addr,n)}function qA(t,e){const n=oo(e,this.size,3);t.uniform3fv(this.addr,n)}function KA(t,e){const n=oo(e,this.size,4);t.uniform4fv(this.addr,n)}function ZA(t,e){const n=oo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function QA(t,e){const n=oo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JA(t,e){const n=oo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eR(t,e){t.uniform1iv(this.addr,e)}function tR(t,e){t.uniform2iv(this.addr,e)}function nR(t,e){t.uniform3iv(this.addr,e)}function iR(t,e){t.uniform4iv(this.addr,e)}function rR(t,e){t.uniform1uiv(this.addr,e)}function sR(t,e){t.uniform2uiv(this.addr,e)}function oR(t,e){t.uniform3uiv(this.addr,e)}function aR(t,e){t.uniform4uiv(this.addr,e)}function lR(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Xf:o=y_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function cR(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||M_,s[o])}function uR(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||E_,s[o])}function dR(t,e,n){const i=this.cache,r=e.length,s=Wc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||S_,s[o])}function fR(t){switch(t){case 5126:return YA;case 35664:return $A;case 35665:return qA;case 35666:return KA;case 35674:return ZA;case 35675:return QA;case 35676:return JA;case 5124:case 35670:return eR;case 35667:case 35671:return tR;case 35668:case 35672:return nR;case 35669:case 35673:return iR;case 5125:return rR;case 36294:return sR;case 36295:return oR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return lR;case 35679:case 36299:case 36307:return cR;case 35680:case 36300:case 36308:case 36293:return uR;case 36289:case 36303:case 36311:case 36292:return dR}}class hR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jA(n.type)}}class pR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fR(n.type)}}class mR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function kg(t,e){t.seq.push(e),t.map[e.id]=e}function gR(t,e,n){const i=t.name,r=i.length;for(Ju.lastIndex=0;;){const s=Ju.exec(i),o=Ju.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){kg(n,c===void 0?new hR(a,t,e):new pR(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new mR(a),kg(n,h)),n=h}}}class Ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);gR(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Bg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const vR=37297;let xR=0;function _R(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const zg=new Ue;function yR(t){Ke._getMatrix(zg,Ke.workingColorSpace,t);const e=`mat3( ${zg.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case mc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Vg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+_R(t.getShaderSource(e),a)}else return s}function SR(t,e){const n=yR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const MR={[Gx]:"Linear",[Wx]:"Reinhard",[Xx]:"Cineon",[Kh]:"ACESFilmic",[Yx]:"AgX",[$x]:"Neutral",[jx]:"Custom"};function ER(t,e){const n=MR[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pl=new V;function wR(){Ke.getLuminanceCoefficients(pl);const t=pl.x.toFixed(4),e=pl.y.toFixed(4),n=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function TR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function CR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Po(t){return t!==""}function Hg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AR=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(t){return t.replace(AR,PR)}const RR=new Map;function PR(t,e){let n=ze[e];if(n===void 0){const i=RR.get(e);if(i!==void 0)n=ze[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jf(n)}const NR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(t){return t.replace(NR,LR)}function LR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const DR={[Pl]:"SHADOWMAP_TYPE_PCF",[Ro]:"SHADOWMAP_TYPE_VSM"};function IR(t){return DR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UR={[Zr]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[zc]:"ENVMAP_TYPE_CUBE_UV"};function FR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":UR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const OR={[Zs]:"ENVMAP_MODE_REFRACTION"};function kR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":OR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const BR={[Hx]:"ENVMAP_BLENDING_MULTIPLY",[y1]:"ENVMAP_BLENDING_MIX",[S1]:"ENVMAP_BLENDING_ADD"};function zR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":BR[t.combine]||"ENVMAP_BLENDING_NONE"}function VR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function HR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=IR(n),c=FR(n),f=kR(n),h=zR(n),u=VR(n),m=bR(n),v=TR(s),S=r.createProgram();let p,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Po).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Po).join(`
`),d.length>0&&(d+=`
`)):(p=[Xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),d=[Xg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?ze.tonemapping_pars_fragment:"",n.toneMapping!==Ei?ER("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,SR("linearToOutputTexel",n.outputColorSpace),wR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Po).join(`
`)),o=jf(o),o=Hg(o,n),o=Gg(o,n),a=jf(a),a=Hg(a,n),a=Gg(a,n),o=Wg(o),a=Wg(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",n.glslVersion===eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=g+p+o,_=g+d+a,b=Bg(r,r.VERTEX_SHADER,E),T=Bg(r,r.FRAGMENT_SHADER,_);r.attachShader(S,b),r.attachShader(S,T),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(L){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(S)||"",H=r.getShaderInfoLog(b)||"",N=r.getShaderInfoLog(T)||"",k=D.trim(),K=H.trim(),j=N.trim();let B=!0,z=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,b,T);else{const Y=Vg(r,b,"vertex"),Z=Vg(r,T,"fragment");tt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Y+`
`+Z)}else k!==""?De("WebGLProgram: Program Info Log:",k):(K===""||j==="")&&(z=!1);z&&(L.diagnostics={runnable:B,programLog:k,vertexShader:{log:K,prefix:p},fragmentShader:{log:j,prefix:d}})}r.deleteShader(b),r.deleteShader(T),y=new Ul(r,S),R=CR(r,S)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(S,vR)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xR++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=T,this}let GR=0;class WR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new XR(e),n.set(e,i)),i}}class XR{constructor(e){this.id=GR++,this.code=e,this.usedTimes=0}}function jR(t){return t===Qr||t===fc||t===hc}function YR(t,e,n,i,r,s){const o=new s_,a=new WR,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function S(y,R,A,L,D,H){const N=L.fog,k=D.geometry,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=e.get(y.envMap||K,j),z=B&&B.mapping===zc?B.image.height:null,Y=m[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&De("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const Z=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=Z!==void 0?Z.length:0;let _e=0;k.morphAttributes.position!==void 0&&(_e=1),k.morphAttributes.normal!==void 0&&(_e=2),k.morphAttributes.color!==void 0&&(_e=3);let We,He,Ve,Q;if(Y){const dt=gi[Y];We=dt.vertexShader,He=dt.fragmentShader}else{We=y.vertexShader,He=y.fragmentShader;const dt=a.getVertexShaderStage(y),nt=a.getFragmentShaderStage(y);a.update(y,dt,nt),Ve=dt.id,Q=nt.id}const ie=t.getRenderTarget(),Ee=t.state.buffers.depth.getReversed(),Ie=D.isInstancedMesh===!0,ye=D.isBatchedMesh===!0,Ge=!!y.map,Dt=!!y.matcap,Xe=!!B,et=!!y.aoMap,ut=!!y.lightMap,$e=!!y.bumpMap&&y.wireframe===!1,xt=!!y.normalMap,Bt=!!y.displacementMap,gn=!!y.emissiveMap,yt=!!y.metalnessMap,Rt=!!y.roughnessMap,O=y.anisotropy>0,Zt=y.clearcoat>0,rt=y.dispersion>0,P=y.retroreflectivity>0,x=y.iridescence>0,G=y.sheen>0,$=y.transmission>0,J=O&&!!y.anisotropyMap,oe=Zt&&!!y.clearcoatMap,ae=Zt&&!!y.clearcoatNormalMap,ee=Zt&&!!y.clearcoatRoughnessMap,ne=x&&!!y.iridescenceMap,le=x&&!!y.iridescenceThicknessMap,Ae=G&&!!y.sheenColorMap,he=G&&!!y.sheenRoughnessMap,ce=!!y.specularMap,Re=!!y.specularColorMap,Ne=!!y.specularIntensityMap,Fe=$&&!!y.transmissionMap,U=$&&!!y.thicknessMap,ue=!!y.gradientMap,te=!!y.alphaMap,de=y.alphaTest>0,ve=!!y.alphaHash,re=!!y.extensions;let Pe=Ei;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Pe=t.toneMapping);const Te={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:We,fragmentShader:He,defines:y.defines,customVertexShaderID:Ve,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:ye,batchingColor:ye&&D._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&D.instanceColor!==null,instancingMorph:Ie&&D.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:Dt,envMap:Xe,envMapMode:Xe&&B.mapping,envMapCubeUVHeight:z,aoMap:et,lightMap:ut,bumpMap:$e,normalMap:xt,displacementMap:Bt,emissiveMap:gn,normalMapObjectSpace:xt&&y.normalMapType===w1,normalMapTangentSpace:xt&&y.normalMapType===Hf,packedNormalMap:xt&&y.normalMapType===Hf&&jR(y.normalMap.format),metalnessMap:yt,roughnessMap:Rt,anisotropy:O,anisotropyMap:J,clearcoat:Zt,clearcoatMap:oe,clearcoatNormalMap:ae,clearcoatRoughnessMap:ee,dispersion:rt,retroreflection:P,iridescence:x,iridescenceMap:ne,iridescenceThicknessMap:le,sheen:G,sheenColorMap:Ae,sheenRoughnessMap:he,specularMap:ce,specularColorMap:Re,specularIntensityMap:Ne,transmission:$,transmissionMap:Fe,thicknessMap:U,gradientMap:ue,opaque:y.transparent===!1&&y.blending===zo&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:de,alphaHash:ve,combine:y.combine,mapUv:Ge&&v(y.map.channel),aoMapUv:et&&v(y.aoMap.channel),lightMapUv:ut&&v(y.lightMap.channel),bumpMapUv:$e&&v(y.bumpMap.channel),normalMapUv:xt&&v(y.normalMap.channel),displacementMapUv:Bt&&v(y.displacementMap.channel),emissiveMapUv:gn&&v(y.emissiveMap.channel),metalnessMapUv:yt&&v(y.metalnessMap.channel),roughnessMapUv:Rt&&v(y.roughnessMap.channel),anisotropyMapUv:J&&v(y.anisotropyMap.channel),clearcoatMapUv:oe&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:he&&v(y.sheenRoughnessMap.channel),specularMapUv:ce&&v(y.specularMap.channel),specularColorMapUv:Re&&v(y.specularColorMap.channel),specularIntensityMapUv:Ne&&v(y.specularIntensityMap.channel),transmissionMapUv:Fe&&v(y.transmissionMap.channel),thicknessMapUv:U&&v(y.thicknessMap.channel),alphaMapUv:te&&v(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(xt||O),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Ge||te),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&xt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:_e,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:gn&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Gn,flipSided:y.side===En,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function p(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)R.push(A),R.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(d(R,y),g(R,y),R.push(t.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function d(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function g(y,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function E(y){const R=m[y.type];let A;if(R){const L=gi[R];A=ha.clone(L.uniforms)}else A=y.uniforms;return A}function _(y,R){let A=f.get(R);return A!==void 0?++A.usedTimes:(A=new HR(t,R,y,r),c.push(A),f.set(R,A)),A}function b(y){if(--y.usedTimes===0){const R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function C(){a.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:E,acquireProgram:_,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:C}}function $R(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function qR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function jg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,v,S,p,d){let g=t[e];return g===void 0?(g={id:u.id,object:u,geometry:m,material:v,materialVariant:o(u),groupOrder:S,renderOrder:u.renderOrder,z:p,group:d},t[e]=g):(g.id=u.id,g.object=u,g.geometry=m,g.material=v,g.materialVariant=o(u),g.groupOrder=S,g.renderOrder=u.renderOrder,g.z=p,g.group=d),e++,g}function l(u,m,v,S,p,d,g){g.reversedDepth===!0&&(p=-p);const E=a(u,m,v,S,p,d);v.transmission>0?i.push(E):v.transparent===!0?r.push(E):n.push(E)}function c(u,m,v,S,p,d){const g=a(u,m,v,S,p,d);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function f(u,m){n.length>1&&n.sort(u||qR),i.length>1&&i.sort(m||jg),r.length>1&&r.sort(m||jg)}function h(){for(let u=e,m=t.length;u<m;u++){const v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function KR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Yg,t.set(i,[o])):r>=s.length?(o=new Yg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ZR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new V,color:new Oe};break;case"SpotLight":n={position:new V,direction:new V,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function QR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let JR=0;function e2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function t2(t){const e=new ZR,n=QR(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new wt,o=new wt;function a(c){let f=0,h=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,v=0,S=0,p=0,d=0,g=0,E=0,_=0,b=0,T=0,C=0,y=0,R=0,A=0;c.sort(e2);for(let D=0,H=c.length;D<H;D++){const N=c[D],k=N.color,K=N.intensity,j=N.distance;let B=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Qr?B=N.shadow.map.texture:B=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=k.r*K,h+=k.g*K,u+=k.b*K;else if(N.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(N.sh.coefficients[z],K);A++}else if(N.isSunLight){const z=e.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Y=N.shadow,Z=n.get(N);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[v]=Z,i.sunShadowMap[v]=B;const fe=Y.getViewportCount();for(let _e=0;_e<fe;_e++)i.sunShadowMatrix[S+_e]=Y.getMatrix(_e),i.sunShadowCascade[S+_e]=Y._cascadeData[_e];S+=fe,v++}i.sun[m]=z,m++}else if(N.isDirectionalLight){const z=e.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Y=N.shadow,Z=n.get(N);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=N.shadow.matrix,b++}i.directional[p]=z,p++}else if(N.isSpotLight){const z=e.get(N);z.position.setFromMatrixPosition(N.matrixWorld),z.color.copy(k).multiplyScalar(K),z.distance=j,z.coneCos=Math.cos(N.angle),z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),z.decay=N.decay,i.spot[g]=z;const Y=N.shadow;if(N.map&&(i.spotLightMap[y]=N.map,y++,Y.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[g]=Y.matrix,N.castShadow){const Z=n.get(N);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,i.spotShadow[g]=Z,i.spotShadowMap[g]=B,C++}g++}else if(N.isRectAreaLight){const z=e.get(N);z.color.copy(k).multiplyScalar(K),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),i.rectArea[E]=z,E++}else if(N.isPointLight){const z=e.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),z.distance=N.distance,z.decay=N.decay,N.castShadow){const Y=N.shadow,Z=n.get(N);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,Z.shadowCameraNear=Y.camera.near,Z.shadowCameraFar=Y.camera.far,i.pointShadow[d]=Z,i.pointShadowMap[d]=B,i.pointShadowMatrix[d]=N.shadow.matrix,T++}i.point[d]=z,d++}else if(N.isHemisphereLight){const z=e.get(N);z.skyColor.copy(N.color).multiplyScalar(K),z.groundColor.copy(N.groundColor).multiplyScalar(K),i.hemi[_]=z,_++}}E>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const L=i.hash;(L.sunLength!==m||L.directionalLength!==p||L.pointLength!==d||L.spotLength!==g||L.rectAreaLength!==E||L.hemiLength!==_||L.numSunShadows!==v||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==C||L.numSpotMaps!==y||L.numLightProbes!==A)&&(i.sun.length=m,i.directional.length=p,i.spot.length=g,i.rectArea.length=E,i.point.length=d,i.hemi.length=_,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-R,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,L.sunLength=m,L.directionalLength=p,L.pointLength=d,L.spotLength=g,L.rectAreaLength=E,L.hemiLength=_,L.numSunShadows=v,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=C,L.numSpotMaps=y,L.numLightProbes=A,i.version=JR++)}function l(c,f){let h=0,u=0,m=0,v=0,S=0,p=0;const d=f.matrixWorldInverse;for(let g=0,E=c.length;g<E;g++){const _=c[g];if(_.isSunLight){const b=i.sun[h];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(d),h++}else if(_.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),u++}else if(_.isSpotLight){const b=i.spot[v];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),v++}else if(_.isRectAreaLight){const b=i.rectArea[S];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(d),o.identity(),s.copy(_.matrixWorld),s.premultiply(d),o.extractRotation(s),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),S++}else if(_.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(d),m++}else if(_.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(d),p++}}}return{setup:a,setupView:l,state:i}}function $g(t){const e=new t2(t),n=[],i=[],r=[];function s(u){h.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function n2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new $g(t),e.set(r,[a])):s>=o.length?(a=new $g(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const i2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r2=`uniform sampler2D shadow_pass;
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
}`,s2=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],o2=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],qg=new wt,wo=new V,ed=new V;function a2(t,e,n){let i=new ap;const r=new Le,s=new Le,o=new Mt,a=new fb,l=new hb,c={},f=n.maxTextureSize,h={[Kr]:En,[En]:Kr,[Gn]:Gn},u=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:i2,fragmentShader:r2}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const v=new $n;v.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ut(v,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let d=this.type;this.render=function(T,C,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===t1&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pl);const R=t.getRenderTarget(),A=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Mi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=d!==this.type;H&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=T.length;N<k;N++){const K=T[N],j=K.shadow;if(j===void 0){De("WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const B=j.getFrameExtents();r.multiply(B),s.copy(j.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/B.x),r.x=s.x*B.x,j.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/B.y),r.y=s.y*B.y,j.mapSize.y=s.y));const z=t.state.buffers.depth.getReversed();if(j.camera._reversedDepth=z,j.map===null||H===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ro){if(K.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new fn(r.x,r.y,{format:Qr,type:wn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),j.map.texture.name=K.name+".shadowMap",j.map.depthTexture=new fa(r.x,r.y,xi),j.map.depthTexture.name=K.name+".shadowMapDepth",j.map.depthTexture.format=Wi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Xt,j.map.depthTexture.magFilter=Xt}else K.isPointLight?(j.map=new __(r.x),j.map.depthTexture=new ab(r.x,wi)):(j.map=new fn(r.x,r.y),j.map.depthTexture=new fa(r.x,r.y,wi)),j.map.depthTexture.name=K.name+".shadowMap",j.map.depthTexture.format=Wi,this.type===Pl?(j.map.depthTexture.compareFunction=z?rp:ip,j.map.depthTexture.minFilter=jt,j.map.depthTexture.magFilter=jt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Xt,j.map.depthTexture.magFilter=Xt);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==r.x||j.map.height!==r.y)&&j.map.setSize(r.x,r.y);const Y=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();K.isPointLight!==!0&&j.updateMatrices(K,y);for(let Z=0;Z<Y;Z++){const fe=j.getCamera(Z);if(K.isPointLight){const _e=j.camera,We=j.matrix,He=K.distance||_e.far;He!==_e.far&&(_e.far=He,_e.updateProjectionMatrix()),wo.setFromMatrixPosition(K.matrixWorld),_e.position.copy(wo),ed.copy(_e.position),ed.add(s2[Z]),_e.up.copy(o2[Z]),_e.lookAt(ed),_e.updateMatrixWorld(),We.makeTranslation(-wo.x,-wo.y,-wo.z),qg.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),j._frustum.setFromProjectionMatrix(qg,_e.coordinateSystem,_e.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)t.setRenderTarget(j.map,Z),t.clear();else{Z===0&&(t.setRenderTarget(j.map),t.clear());const _e=j.getViewport(Z);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),D.viewport(o)}i=j.getFrustum(Z),_(C,y,fe,K,this.type)}j.isPointLightShadow!==!0&&this.type===Ro&&g(j,y),j.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(R,A,L)};function g(T,C){const y=e.update(S);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new fn(r.x,r.y,{format:Qr,type:wn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,y,u,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,y,m,S,null)}function E(T,C,y,R){let A=null;const L=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)A=L;else if(A=y.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=A.uuid,H=C.uuid;let N=c[D];N===void 0&&(N={},c[D]=N);let k=N[H];k===void 0&&(k=A.clone(),N[H]=k,C.addEventListener("dispose",b)),A=k}if(A.visible=C.visible,A.wireframe=C.wireframe,R===Ro?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:h[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const D=t.properties.get(A);D.light=y}return A}function _(T,C,y,R,A){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===Ro)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const H=e.update(T),N=T.material;if(Array.isArray(N)){const k=H.groups;for(let K=0,j=k.length;K<j;K++){const B=k[K],z=N[B.materialIndex];if(z&&z.visible){const Y=E(T,z,R,A);T.onBeforeShadow(t,T,C,y,H,Y,B),t.renderBufferDirect(y,null,H,Y,T,B),T.onAfterShadow(t,T,C,y,H,Y,B)}}}else if(N.visible){const k=E(T,N,R,A);T.onBeforeShadow(t,T,C,y,H,k,null),t.renderBufferDirect(y,null,H,k,T,null),T.onAfterShadow(t,T,C,y,H,k,null)}}const D=T.children;for(let H=0,N=D.length;H<N;H++)_(D[H],C,y,R,A)}function b(T){T.target.removeEventListener("dispose",b);for(const y in c){const R=c[y],A=T.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function l2(t,e){function n(){let U=!1;const ue=new Mt;let te=null;const de=new Mt(0,0,0,0);return{setMask:function(ve){te!==ve&&!U&&(t.colorMask(ve,ve,ve,ve),te=ve)},setLocked:function(ve){U=ve},setClear:function(ve,re,Pe,Te,dt){dt===!0&&(ve*=Te,re*=Te,Pe*=Te),ue.set(ve,re,Pe,Te),de.equals(ue)===!1&&(t.clearColor(ve,re,Pe,Te),de.copy(ue))},reset:function(){U=!1,te=null,de.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,te=null,de=null,ve=null;return{setReversed:function(re){if(ue!==re){const Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ue=re;const Te=ve;ve=null,this.setClear(Te)}},getReversed:function(){return ue},setTest:function(re){re?ie(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(re){te!==re&&!U&&(t.depthMask(re),te=re)},setFunc:function(re){if(ue&&(re=F1[re]),de!==re){switch(re){case rf:t.depthFunc(t.NEVER);break;case sf:t.depthFunc(t.ALWAYS);break;case of:t.depthFunc(t.LESS);break;case oa:t.depthFunc(t.LEQUAL);break;case af:t.depthFunc(t.EQUAL);break;case lf:t.depthFunc(t.GEQUAL);break;case cf:t.depthFunc(t.GREATER);break;case uf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=re}},setLocked:function(re){U=re},setClear:function(re){ve!==re&&(ve=re,ue&&(re=1-re),t.clearDepth(re))},reset:function(){U=!1,te=null,de=null,ve=null,ue=!1}}}function r(){let U=!1,ue=null,te=null,de=null,ve=null,re=null,Pe=null,Te=null,dt=null;return{setTest:function(nt){U||(nt?ie(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!U&&(t.stencilMask(nt),ue=nt)},setFunc:function(nt,qn,ui){(te!==nt||de!==qn||ve!==ui)&&(t.stencilFunc(nt,qn,ui),te=nt,de=qn,ve=ui)},setOp:function(nt,qn,ui){(re!==nt||Pe!==qn||Te!==ui)&&(t.stencilOp(nt,qn,ui),re=nt,Pe=qn,Te=ui)},setLocked:function(nt){U=nt},setClear:function(nt){dt!==nt&&(t.clearStencil(nt),dt=nt)},reset:function(){U=!1,ue=null,te=null,de=null,ve=null,re=null,Pe=null,Te=null,dt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},u={},m=new WeakMap,v=[],S=null,p=!1,d=null,g=null,E=null,_=null,b=null,T=null,C=null,y=new Oe(0,0,0),R=0,A=!1,L=null,D=null,H=null,N=null,k=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,B=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(z)[1]),j=B>=1):z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),j=B>=2);let Y=null,Z={};const fe=t.getParameter(t.SCISSOR_BOX),_e=t.getParameter(t.VIEWPORT),We=new Mt().fromArray(fe),He=new Mt().fromArray(_e);function Ve(U,ue,te,de){const ve=new Uint8Array(4),re=t.createTexture();t.bindTexture(U,re),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<te;Pe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(ue+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return re}const Q={};Q[t.TEXTURE_2D]=Ve(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=Ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=Ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=Ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(t.DEPTH_TEST),o.setFunc(oa),$e(!1),xt(Zm),ie(t.CULL_FACE),et(Mi);function ie(U){f[U]!==!0&&(t.enable(U),f[U]=!0)}function Ee(U){f[U]!==!1&&(t.disable(U),f[U]=!1)}function Ie(U,ue){return u[U]!==ue?(t.bindFramebuffer(U,ue),u[U]=ue,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ue),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function ye(U,ue){let te=v,de=!1;if(U){te=m.get(ue),te===void 0&&(te=[],m.set(ue,te));const ve=U.textures;if(te.length!==ve.length||te[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Pe=ve.length;re<Pe;re++)te[re]=t.COLOR_ATTACHMENT0+re;te.length=ve.length,de=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,de=!0);de&&t.drawBuffers(te)}function Ge(U){return S!==U?(t.useProgram(U),S=U,!0):!1}const Dt={[_s]:t.FUNC_ADD,[i1]:t.FUNC_SUBTRACT,[r1]:t.FUNC_REVERSE_SUBTRACT};Dt[s1]=t.MIN,Dt[o1]=t.MAX;const Xe={[a1]:t.ZERO,[l1]:t.ONE,[c1]:t.SRC_COLOR,[zx]:t.SRC_ALPHA,[m1]:t.SRC_ALPHA_SATURATE,[h1]:t.DST_COLOR,[d1]:t.DST_ALPHA,[u1]:t.ONE_MINUS_SRC_COLOR,[Vx]:t.ONE_MINUS_SRC_ALPHA,[p1]:t.ONE_MINUS_DST_COLOR,[f1]:t.ONE_MINUS_DST_ALPHA,[g1]:t.CONSTANT_COLOR,[v1]:t.ONE_MINUS_CONSTANT_COLOR,[x1]:t.CONSTANT_ALPHA,[_1]:t.ONE_MINUS_CONSTANT_ALPHA};function et(U,ue,te,de,ve,re,Pe,Te,dt,nt){if(U===Mi){p===!0&&(Ee(t.BLEND),p=!1);return}if(p===!1&&(ie(t.BLEND),p=!0),U!==n1){if(U!==d||nt!==A){if((g!==_s||b!==_s)&&(t.blendEquation(t.FUNC_ADD),g=_s,b=_s),nt)switch(U){case zo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sa:t.blendFunc(t.ONE,t.ONE);break;case Qm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",U);break}else switch(U){case zo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Qm:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jm:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",U);break}E=null,_=null,T=null,C=null,y.set(0,0,0),R=0,d=U,A=nt}return}ve=ve||ue,re=re||te,Pe=Pe||de,(ue!==g||ve!==b)&&(t.blendEquationSeparate(Dt[ue],Dt[ve]),g=ue,b=ve),(te!==E||de!==_||re!==T||Pe!==C)&&(t.blendFuncSeparate(Xe[te],Xe[de],Xe[re],Xe[Pe]),E=te,_=de,T=re,C=Pe),(Te.equals(y)===!1||dt!==R)&&(t.blendColor(Te.r,Te.g,Te.b,dt),y.copy(Te),R=dt),d=U,A=!1}function ut(U,ue){U.side===Gn?Ee(t.CULL_FACE):ie(t.CULL_FACE);let te=U.side===En;ue&&(te=!te),$e(te),U.blending===zo&&U.transparent===!1?et(Mi):et(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const de=U.stencilWrite;a.setTest(de),de&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),gn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){L!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),L=U)}function xt(U){U!==Jw?(ie(t.CULL_FACE),U!==D&&(U===Zm?t.cullFace(t.BACK):U===e1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),D=U}function Bt(U){U!==H&&(j&&t.lineWidth(U),H=U)}function gn(U,ue,te){U?(ie(t.POLYGON_OFFSET_FILL),(N!==ue||k!==te)&&(N=ue,k=te,o.getReversed()&&(ue=-ue),t.polygonOffset(ue,te))):Ee(t.POLYGON_OFFSET_FILL)}function yt(U){U?ie(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function Rt(U){U===void 0&&(U=t.TEXTURE0+K-1),Y!==U&&(t.activeTexture(U),Y=U)}function O(U,ue,te){te===void 0&&(Y===null?te=t.TEXTURE0+K-1:te=Y);let de=Z[te];de===void 0&&(de={type:void 0,texture:void 0},Z[te]=de),(de.type!==U||de.texture!==ue)&&(Y!==te&&(t.activeTexture(te),Y=te),t.bindTexture(U,ue||Q[U]),de.type=U,de.texture=ue)}function Zt(){const U=Z[Y];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function rt(){try{t.compressedTexImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function x(){try{t.texSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function G(){try{t.texSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function oe(){try{t.texStorage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function ae(){try{t.texStorage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function ee(){try{t.texImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function ne(){try{t.texImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function le(U){return h[U]!==void 0?h[U]:t.getParameter(U)}function Ae(U,ue){h[U]!==ue&&(t.pixelStorei(U,ue),h[U]=ue)}function he(U){We.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),We.copy(U))}function ce(U){He.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),He.copy(U))}function Re(U,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let de=te.get(U);de===void 0&&(de=t.getUniformBlockIndex(ue,U.name),te.set(U,de))}function Ne(U,ue){const de=c.get(ue).get(U);l.get(ue)!==de&&(t.uniformBlockBinding(ue,de,U.__bindingPointIndex),l.set(ue,de))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},Y=null,Z={},u={},m=new WeakMap,v=[],S=null,p=!1,d=null,g=null,E=null,_=null,b=null,T=null,C=null,y=new Oe(0,0,0),R=0,A=!1,L=null,D=null,H=null,N=null,k=null,We.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:Ee,bindFramebuffer:Ie,drawBuffers:ye,useProgram:Ge,setBlending:et,setMaterial:ut,setFlipSided:$e,setCullFace:xt,setLineWidth:Bt,setPolygonOffset:gn,setScissorTest:yt,activeTexture:Rt,bindTexture:O,unbindTexture:Zt,compressedTexImage2D:rt,compressedTexImage3D:P,texImage2D:ee,texImage3D:ne,pixelStorei:Ae,getParameter:le,updateUBOMapping:Re,uniformBlockBinding:Ne,texStorage2D:oe,texStorage3D:ae,texSubImage2D:x,texSubImage3D:G,compressedTexSubImage2D:$,compressedTexSubImage3D:J,scissor:he,viewport:ce,reset:Fe}}function c2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,f=new WeakMap,h=new Set;let u;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,x){return v?new OffscreenCanvas(P,x):gc("canvas")}function p(P,x,G){let $=1;const J=rt(P);if((J.width>G||J.height>G)&&($=G/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const oe=Math.floor($*J.width),ae=Math.floor($*J.height);u===void 0&&(u=S(oe,ae));const ee=x?S(oe,ae):u;return ee.width=oe,ee.height=ae,ee.getContext("2d").drawImage(P,0,0,oe,ae),De("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+oe+"x"+ae+")."),ee}else return"data"in P&&De("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function d(P){return P.generateMipmaps}function g(P){t.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(P,x,G,$,J,oe=!1){if(P!==null){if(t[P]!==void 0)return t[P];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae;$&&(ae=e.get("EXT_texture_norm16"),ae||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=x;if(x===t.RED&&(G===t.FLOAT&&(ee=t.R32F),G===t.HALF_FLOAT&&(ee=t.R16F),G===t.UNSIGNED_BYTE&&(ee=t.R8),G===t.UNSIGNED_SHORT&&ae&&(ee=ae.R16_EXT),G===t.SHORT&&ae&&(ee=ae.R16_SNORM_EXT)),x===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.R8UI),G===t.UNSIGNED_SHORT&&(ee=t.R16UI),G===t.UNSIGNED_INT&&(ee=t.R32UI),G===t.BYTE&&(ee=t.R8I),G===t.SHORT&&(ee=t.R16I),G===t.INT&&(ee=t.R32I)),x===t.RG&&(G===t.FLOAT&&(ee=t.RG32F),G===t.HALF_FLOAT&&(ee=t.RG16F),G===t.UNSIGNED_BYTE&&(ee=t.RG8),G===t.UNSIGNED_SHORT&&ae&&(ee=ae.RG16_EXT),G===t.SHORT&&ae&&(ee=ae.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RG8UI),G===t.UNSIGNED_SHORT&&(ee=t.RG16UI),G===t.UNSIGNED_INT&&(ee=t.RG32UI),G===t.BYTE&&(ee=t.RG8I),G===t.SHORT&&(ee=t.RG16I),G===t.INT&&(ee=t.RG32I)),x===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),G===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),G===t.UNSIGNED_INT&&(ee=t.RGB32UI),G===t.BYTE&&(ee=t.RGB8I),G===t.SHORT&&(ee=t.RGB16I),G===t.INT&&(ee=t.RGB32I)),x===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),G===t.UNSIGNED_INT&&(ee=t.RGBA32UI),G===t.BYTE&&(ee=t.RGBA8I),G===t.SHORT&&(ee=t.RGBA16I),G===t.INT&&(ee=t.RGBA32I)),x===t.RGB&&(G===t.UNSIGNED_SHORT&&ae&&(ee=ae.RGB16_EXT),G===t.SHORT&&ae&&(ee=ae.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),x===t.RGBA){const ne=oe?mc:Ke.getTransfer(J);G===t.FLOAT&&(ee=t.RGBA32F),G===t.HALF_FLOAT&&(ee=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ee=ne===st?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&ae&&(ee=ae.RGBA16_EXT),G===t.SHORT&&ae&&(ee=ae.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(P,x){let G;return P?x===null||x===wi||x===ca?G=t.DEPTH24_STENCIL8:x===xi?G=t.DEPTH32F_STENCIL8:x===la&&(G=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wi||x===ca?G=t.DEPTH_COMPONENT24:x===xi?G=t.DEPTH_COMPONENT32F:x===la&&(G=t.DEPTH_COMPONENT16),G}function T(P,x){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xt&&P.minFilter!==jt?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function C(P){const x=P.target;x.removeEventListener("dispose",C),R(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&h.delete(x)}function y(P){const x=P.target;x.removeEventListener("dispose",y),L(x)}function R(P){const x=i.get(P);if(x.__webglInit===void 0)return;const G=P.source,$=m.get(G);if($){const J=$[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(P),Object.keys($).length===0&&m.delete(G)}i.remove(P)}function A(P){const x=i.get(P);t.deleteTexture(x.__webglTexture);const G=P.source,$=m.get(G);delete $[x.__cacheKey],o.memory.textures--}function L(P){const x=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let J=0;J<x.__webglFramebuffer[$].length;J++)t.deleteFramebuffer(x.__webglFramebuffer[$][J]);else t.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)t.deleteFramebuffer(x.__webglFramebuffer[$]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=P.textures;for(let $=0,J=G.length;$<J;$++){const oe=i.get(G[$]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(G[$])}i.remove(P)}let D=0;function H(){D=0}function N(){return D}function k(P){D=P}function K(){const P=D;return P>=r.maxTextures&&De("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function j(P){const x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function B(P,x){const G=i.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const $=P.image;if($===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(G,P,x);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+x)}function z(P,x){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Ee(G,P,x);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+x)}function Y(P,x){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Ee(G,P,x);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+x)}function Z(P,x){const G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){Ie(G,P,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+x)}const fe={[aa]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[df]:t.MIRRORED_REPEAT},_e={[Xt]:t.NEAREST,[M1]:t.NEAREST_MIPMAP_NEAREST,[Xa]:t.NEAREST_MIPMAP_LINEAR,[jt]:t.LINEAR,[Eu]:t.LINEAR_MIPMAP_NEAREST,[zr]:t.LINEAR_MIPMAP_LINEAR},We={[T1]:t.NEVER,[N1]:t.ALWAYS,[C1]:t.LESS,[ip]:t.LEQUAL,[A1]:t.EQUAL,[rp]:t.GEQUAL,[R1]:t.GREATER,[P1]:t.NOTEQUAL};function He(P,x){if(x.type===xi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===jt||x.magFilter===Eu||x.magFilter===Xa||x.magFilter===zr||x.minFilter===jt||x.minFilter===Eu||x.minFilter===Xa||x.minFilter===zr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,fe[x.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,fe[x.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,fe[x.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,_e[x.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,We[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xt||x.minFilter!==Xa&&x.minFilter!==zr||x.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ve(P,x){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",C));const $=x.source;let J=m.get($);J===void 0&&(J={},m.set($,J));const oe=j(x);if(oe!==P.__cacheKey){J[oe]===void 0&&(J[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[oe].usedTimes++;const ae=J[P.__cacheKey];ae!==void 0&&(J[P.__cacheKey].usedTimes--,ae.usedTimes===0&&A(x)),P.__cacheKey=oe,P.__webglTexture=J[oe].texture}return G}function Q(P,x,G){return Math.floor(Math.floor(P/G)/x)}function ie(P,x,G,$){const oe=P.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,G,$,x.data);else{oe.sort((Ae,he)=>Ae.start-he.start);let ae=0;for(let Ae=1;Ae<oe.length;Ae++){const he=oe[ae],ce=oe[Ae],Re=he.start+he.count,Ne=Q(ce.start,x.width,4),Fe=Q(he.start,x.width,4);ce.start<=Re+1&&Ne===Fe&&Q(ce.start+ce.count-1,x.width,4)===Ne?he.count=Math.max(he.count,ce.start+ce.count-he.start):(++ae,oe[ae]=ce)}oe.length=ae+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),le=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Ae=0,he=oe.length;Ae<he;Ae++){const ce=oe[Ae],Re=Math.floor(ce.start/4),Ne=Math.ceil(ce.count/4),Fe=Re%x.width,U=Math.floor(Re/x.width),ue=Ne,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Fe,U,ue,te,G,$,x.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,le)}}function Ee(P,x,G){let $=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=t.TEXTURE_3D);const J=Ve(P,x),oe=x.source;n.bindTexture($,P.__webglTexture,t.TEXTURE0+G);const ae=i.get(oe);if(oe.version!==ae.__version||J===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const te=Ke.getPrimaries(Ke.workingColorSpace),de=x.colorSpace===cr?null:Ke.getPrimaries(x.colorSpace),ve=x.colorSpace===cr||te===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let ne=p(x.image,!1,r.maxTextureSize);ne=Zt(x,ne);const le=s.convert(x.format,x.colorSpace),Ae=s.convert(x.type);let he=_(x.internalFormat,le,Ae,x.normalized,x.colorSpace,x.isVideoTexture);He($,x);let ce;const Re=x.mipmaps,Ne=x.isVideoTexture!==!0,Fe=ae.__version===void 0||J===!0,U=oe.dataReady,ue=T(x,ne);if(x.isDepthTexture)he=b(x.format===Vr,x.type),Fe&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,he,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,he,ne.width,ne.height,0,le,Ae,null));else if(x.isDataTexture)if(Re.length>0){Ne&&Fe&&n.texStorage2D(t.TEXTURE_2D,ue,he,Re[0].width,Re[0].height);for(let te=0,de=Re.length;te<de;te++)ce=Re[te],Ne?U&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ce.width,ce.height,le,Ae,ce.data):n.texImage2D(t.TEXTURE_2D,te,he,ce.width,ce.height,0,le,Ae,ce.data);x.generateMipmaps=!1}else Ne?(Fe&&n.texStorage2D(t.TEXTURE_2D,ue,he,ne.width,ne.height),U&&ie(x,ne,le,Ae)):n.texImage2D(t.TEXTURE_2D,0,he,ne.width,ne.height,0,le,Ae,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ne&&Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,he,Re[0].width,Re[0].height,ne.depth);for(let te=0,de=Re.length;te<de;te++)if(ce=Re[te],x.format!==ri)if(le!==null)if(Ne){if(U)if(x.layerUpdates.size>0){const ve=Cg(ce.width,ce.height,x.format,x.type);for(const re of x.layerUpdates){const Pe=ce.data.subarray(re*ve/ce.data.BYTES_PER_ELEMENT,(re+1)*ve/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,re,ce.width,ce.height,1,le,Pe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,ne.depth,le,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,he,ce.width,ce.height,ne.depth,0,ce.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,ne.depth,le,Ae,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,he,ce.width,ce.height,ne.depth,0,le,Ae,ce.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ne&&Fe&&n.texStorage2D(t.TEXTURE_2D,ue,he,Re[0].width,Re[0].height);for(let te=0,de=Re.length;te<de;te++)ce=Re[te],x.format!==ri?le!==null?Ne?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,ce.width,ce.height,le,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,te,he,ce.width,ce.height,0,ce.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?U&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ce.width,ce.height,le,Ae,ce.data):n.texImage2D(t.TEXTURE_2D,te,he,ce.width,ce.height,0,le,Ae,ce.data)}else if(x.isDataArrayTexture)if(Ne){if(Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,he,ne.width,ne.height,ne.depth),U)if(x.layerUpdates.size>0){const te=Cg(ne.width,ne.height,x.format,x.type);for(const de of x.layerUpdates){const ve=ne.data.subarray(de*te/ne.data.BYTES_PER_ELEMENT,(de+1)*te/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,ne.width,ne.height,1,le,Ae,ve)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,le,Ae,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,ne.width,ne.height,ne.depth,0,le,Ae,ne.data);else if(x.isData3DTexture)Ne?(Fe&&n.texStorage3D(t.TEXTURE_3D,ue,he,ne.width,ne.height,ne.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,le,Ae,ne.data)):n.texImage3D(t.TEXTURE_3D,0,he,ne.width,ne.height,ne.depth,0,le,Ae,ne.data);else if(x.isFramebufferTexture){if(Fe)if(Ne)n.texStorage2D(t.TEXTURE_2D,ue,he,ne.width,ne.height);else{let te=ne.width,de=ne.height;for(let ve=0;ve<ue;ve++)n.texImage2D(t.TEXTURE_2D,ve,he,te,de,0,le,Ae,null),te>>=1,de>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),h.add(x),te.onpaint=de=>{const ve=de.changedElements;for(const re of h)ve.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{const ve=t.RGBA,re=t.RGBA,Pe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ve,re,Pe,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ne&&Fe){const te=rt(Re[0]);n.texStorage2D(t.TEXTURE_2D,ue,he,te.width,te.height)}for(let te=0,de=Re.length;te<de;te++)ce=Re[te],Ne?U&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,le,Ae,ce):n.texImage2D(t.TEXTURE_2D,te,he,le,Ae,ce);x.generateMipmaps=!1}else if(Ne){if(Fe){const te=rt(ne);n.texStorage2D(t.TEXTURE_2D,ue,he,te.width,te.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,Ae,ne)}else n.texImage2D(t.TEXTURE_2D,0,he,le,Ae,ne);d(x)&&g($),ae.__version=oe.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Ie(P,x,G){if(x.image.length!==6)return;const $=Ve(P,x),J=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+G);const oe=i.get(J);if(J.version!==oe.__version||$===!0){n.activeTexture(t.TEXTURE0+G);const ae=Ke.getPrimaries(Ke.workingColorSpace),ee=x.colorSpace===cr?null:Ke.getPrimaries(x.colorSpace),ne=x.colorSpace===cr||ae===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,Ae=x.image[0]&&x.image[0].isDataTexture,he=[];for(let re=0;re<6;re++)!le&&!Ae?he[re]=p(x.image[re],!0,r.maxCubemapSize):he[re]=Ae?x.image[re].image:x.image[re],he[re]=Zt(x,he[re]);const ce=he[0],Re=s.convert(x.format,x.colorSpace),Ne=s.convert(x.type),Fe=_(x.internalFormat,Re,Ne,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,ue=oe.__version===void 0||$===!0,te=J.dataReady;let de=T(x,ce);He(t.TEXTURE_CUBE_MAP,x);let ve;if(le){U&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Fe,ce.width,ce.height);for(let re=0;re<6;re++){ve=he[re].mipmaps;for(let Pe=0;Pe<ve.length;Pe++){const Te=ve[Pe];x.format!==ri?Re!==null?U?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Te.width,Te.height,Re,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,Fe,Te.width,Te.height,0,Te.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Te.width,Te.height,Re,Ne,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,Fe,Te.width,Te.height,0,Re,Ne,Te.data)}}}else{if(ve=x.mipmaps,U&&ue){ve.length>0&&de++;const re=rt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Fe,re.width,re.height)}for(let re=0;re<6;re++)if(Ae){U?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,he[re].width,he[re].height,Re,Ne,he[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Fe,he[re].width,he[re].height,0,Re,Ne,he[re].data);for(let Pe=0;Pe<ve.length;Pe++){const dt=ve[Pe].image[re].image;U?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,dt.width,dt.height,Re,Ne,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,Fe,dt.width,dt.height,0,Re,Ne,dt.data)}}else{U?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,Ne,he[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Fe,Re,Ne,he[re]);for(let Pe=0;Pe<ve.length;Pe++){const Te=ve[Pe];U?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Re,Ne,Te.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,Fe,Re,Ne,Te.image[re])}}}d(x)&&g(t.TEXTURE_CUBE_MAP),oe.__version=J.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function ye(P,x,G,$,J,oe){const ae=s.convert(G.format,G.colorSpace),ee=s.convert(G.type),ne=_(G.internalFormat,ae,ee,G.normalized,G.colorSpace),le=i.get(x),Ae=i.get(G);if(Ae.__renderTarget=x,!le.__hasExternalTextures){const he=Math.max(1,x.width>>oe),ce=Math.max(1,x.height>>oe);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,oe,ne,he,ce,x.depth,0,ae,ee,null):n.texImage2D(J,oe,ne,he,ce,0,ae,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Rt(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,J,Ae.__webglTexture,0,yt(x)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,J,Ae.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(P,x,G){if(t.bindRenderbuffer(t.RENDERBUFFER,P),x.depthBuffer){const $=x.depthTexture,J=$&&$.isDepthTexture?$.type:null,oe=b(x.stencilBuffer,J),ae=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Rt(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(x),oe,x.width,x.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(x),oe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,oe,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,P)}else{const $=x.textures;for(let J=0;J<$.length;J++){const oe=$[J],ae=s.convert(oe.format,oe.colorSpace),ee=s.convert(oe.type),ne=_(oe.internalFormat,ae,ee,oe.normalized,oe.colorSpace);Rt(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(x),ne,x.width,x.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(x),ne,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ne,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Dt(P,x,G){const $=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),He(t.TEXTURE_CUBE_MAP,x.depthTexture);const le=s.convert(x.depthTexture.format),Ae=s.convert(x.depthTexture.type);let he;x.depthTexture.format===Wi?he=t.DEPTH_COMPONENT24:x.depthTexture.format===Vr&&(he=t.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,he,x.width,x.height,0,le,Ae,null)}}else B(x.depthTexture,0);const oe=J.__webglTexture,ae=yt(x),ee=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,ne=x.depthTexture.format===Vr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Wi)Rt(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,oe,0);else if(x.depthTexture.format===Vr)Rt(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(P){const x=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=$}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(G)for(let $=0;$<6;$++)Dt(x.__webglFramebuffer[$],P,$);else{const $=P.texture.mipmaps;$&&$.length>0?Dt(x.__webglFramebuffer[0],P,0):Dt(x.__webglFramebuffer,P,0)}else if(G){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=t.createRenderbuffer(),Ge(x.__webglDepthbuffer[$],P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,oe)}}else{const $=P.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Ge(x.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(P,x,G){const $=i.get(P);x!==void 0&&ye($.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Xe(P)}function ut(P){const x=P.texture,G=i.get(P),$=i.get(x);P.addEventListener("dispose",y);const J=P.textures,oe=P.isWebGLCubeRenderTarget===!0,ae=J.length>1;if(ae||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=x.version,o.memory.textures++),oe){G.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[ee]=[];for(let ne=0;ne<x.mipmaps.length;ne++)G.__webglFramebuffer[ee][ne]=t.createFramebuffer()}else G.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let ee=0;ee<x.mipmaps.length;ee++)G.__webglFramebuffer[ee]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ae)for(let ee=0,ne=J.length;ee<ne;ee++){const le=i.get(J[ee]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&Rt(P)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const ne=J[ee];G.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ee]);const le=s.convert(ne.format,ne.colorSpace),Ae=s.convert(ne.type),he=_(ne.internalFormat,le,Ae,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),ce=yt(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,he,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,G.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Ge(G.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),He(t.TEXTURE_CUBE_MAP,x);for(let ee=0;ee<6;ee++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)ye(G.__webglFramebuffer[ee][ne],P,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else ye(G.__webglFramebuffer[ee],P,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);d(x)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let ee=0,ne=J.length;ee<ne;ee++){const le=J[ee],Ae=i.get(le);let he=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Ae.__webglTexture),He(he,le),ye(G.__webglFramebuffer,P,le,t.COLOR_ATTACHMENT0+ee,he,0),d(le)&&g(he)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,$.__webglTexture),He(ee,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)ye(G.__webglFramebuffer[ne],P,x,t.COLOR_ATTACHMENT0,ee,ne);else ye(G.__webglFramebuffer,P,x,t.COLOR_ATTACHMENT0,ee,0);d(x)&&g(ee),n.unbindTexture()}P.depthBuffer&&Xe(P)}function $e(P){const x=P.textures;for(let G=0,$=x.length;G<$;G++){const J=x[G];if(d(J)){const oe=E(P),ae=i.get(J).__webglTexture;n.bindTexture(oe,ae),g(oe),n.unbindTexture()}}}const xt=[],Bt=[];function gn(P){if(P.samples>0){if(Rt(P)===!1){const x=P.textures,G=P.width,$=P.height;let J=t.COLOR_BUFFER_BIT;const oe=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(P),ee=x.length>1;if(ee)for(let le=0;le<x.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ne=P.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let le=0;le<x.length;le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const Ae=i.get(x[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,G,$,0,0,G,$,J,t.NEAREST),l===!0&&(xt.length=0,Bt.length=0,xt.push(t.COLOR_ATTACHMENT0+le),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(xt.push(oe),Bt.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Bt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,xt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let le=0;le<x.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const Ae=i.get(x[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const x=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function yt(P){return Math.min(r.maxSamples,P.samples)}function Rt(P){const x=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(P){const x=o.render.frame;f.get(P)!==x&&(f.set(P,x),P.update())}function Zt(P,x){const G=P.colorSpace,$=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==pc&&G!==cr&&(Ke.getTransfer(G)===st?($!==ri||J!==Nn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",G)),x}function rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=et,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function u2(t,e){function n(i,r=cr){let s;const o=Ke.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===Qh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Qx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Jx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kx)return t.BYTE;if(i===Zx)return t.SHORT;if(i===la)return t.UNSIGNED_SHORT;if(i===Zh)return t.INT;if(i===wi)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===wn)return t.HALF_FLOAT;if(i===e_)return t.ALPHA;if(i===t_)return t.RGB;if(i===ri)return t.RGBA;if(i===Wi)return t.DEPTH_COMPONENT;if(i===Vr)return t.DEPTH_STENCIL;if(i===n_)return t.RED;if(i===ep)return t.RED_INTEGER;if(i===Qr)return t.RG;if(i===tp)return t.RG_INTEGER;if(i===np)return t.RGBA_INTEGER;if(i===Nl||i===Ll||i===Dl||i===Il)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ff||i===hf||i===pf||i===mf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ff)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gf||i===vf||i===xf||i===_f||i===yf||i===fc||i===Sf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gf||i===vf)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_f)return s.COMPRESSED_R11_EAC;if(i===yf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===fc)return s.COMPRESSED_RG11_EAC;if(i===Sf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mf||i===Ef||i===wf||i===bf||i===Tf||i===Cf||i===Af||i===Rf||i===Pf||i===Nf||i===Lf||i===Df||i===If||i===Uf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ef)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Af)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Df)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===If)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ff||i===Of||i===kf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ff)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bf||i===zf||i===hc||i===Vf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ca?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const d2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f2=`
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

}`;class h2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new h_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yt({vertexShader:d2,fragmentShader:f2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ut(new hr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p2 extends ns{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,m=null,v=null;const S=typeof XRWebGLBinding<"u",p=new h2,d={},g=n.getContextAttributes();let E=null,_=null;const b=[],T=[],C=new Le;let y=null,R=null;const A=new Pn;A.viewport=new Mt;const L=new Pn;L.viewport=new Mt;const D=[A,L],H=new _b;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=b[Q];return ie===void 0&&(ie=new Lu,b[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=b[Q];return ie===void 0&&(ie=new Lu,b[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=b[Q];return ie===void 0&&(ie=new Lu,b[Q]=ie),ie.getHandSpace()};function K(Q){const ie=T.indexOf(Q.inputSource);if(ie===-1)return;const Ee=b[ie];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,c||o),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",B);for(let Q=0;Q<b.length;Q++){const ie=T[Q];ie!==null&&(T[Q]=null,b[Q].disconnect(ie))}N=null,k=null,p.reset();for(const Q in d)delete d[Q];if(e.setRenderTarget(E),m=null,u=null,h=null,r=null,_=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),R!==null){const Q=R.camera;Q.fov=R.fov,Q.zoom=R.zoom,Q.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",j),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ie=null,ye=null;g.depth&&(ye=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=g.stencil?Vr:Wi,Ie=g.stencil?ca:wi);const Ge={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Ge),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new fn(u.textureWidth,u.textureHeight,{format:ri,type:Nn,depthTexture:new fa(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new fn(m.framebufferWidth,m.framebufferHeight,{format:ri,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(Q){for(let ie=0;ie<Q.removed.length;ie++){const Ee=Q.removed[ie],Ie=T.indexOf(Ee);Ie>=0&&(T[Ie]=null,b[Ie].disconnect(Ee))}for(let ie=0;ie<Q.added.length;ie++){const Ee=Q.added[ie];let Ie=T.indexOf(Ee);if(Ie===-1){for(let Ge=0;Ge<b.length;Ge++)if(Ge>=T.length){T.push(Ee),Ie=Ge;break}else if(T[Ge]===null){T[Ge]=Ee,Ie=Ge;break}if(Ie===-1)break}const ye=b[Ie];ye&&ye.connect(Ee)}}const z=new V,Y=new V;function Z(Q,ie,Ee){z.setFromMatrixPosition(ie.matrixWorld),Y.setFromMatrixPosition(Ee.matrixWorld);const Ie=z.distanceTo(Y),ye=ie.projectionMatrix.elements,Ge=Ee.projectionMatrix.elements,Dt=ye[14]/(ye[10]-1),Xe=ye[14]/(ye[10]+1),et=(ye[9]+1)/ye[5],ut=(ye[9]-1)/ye[5],$e=(ye[8]-1)/ye[0],xt=(Ge[8]+1)/Ge[0],Bt=Dt*$e,gn=Dt*xt,yt=Ie/(-$e+xt),Rt=yt*-$e;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Rt),Q.translateZ(yt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ye[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const O=Dt+yt,Zt=Xe+yt,rt=Bt-Rt,P=gn+(Ie-Rt),x=et*Xe/Zt*O,G=ut*Xe/Zt*O;Q.projectionMatrix.makePerspective(rt,P,x,G,O,Zt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function fe(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ie=Q.near,Ee=Q.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(Ee=p.depthFar)),H.near=L.near=A.near=ie,H.far=L.far=A.far=Ee,(N!==H.near||k!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,k=H.far),H.layers.mask=Q.layers.mask|6,A.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;const Ie=Q.parent,ye=H.cameras;fe(H,Ie);for(let Ge=0;Ge<ye.length;Ge++)fe(ye[Ge],Ie);ye.length===2?Z(H,A,L):H.projectionMatrix.copy(A.projectionMatrix),R===null&&Q.isPerspectiveCamera&&(R={camera:Q,fov:Q.fov,zoom:Q.zoom}),_e(Q,H,Ie)};function _e(Q,ie,Ee){Ee===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Gf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(Q){return d[Q]};let We=null;function He(Q,ie){if(f=ie.getViewerPose(c||o),v=ie,f!==null){const Ee=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Ie=!1;Ee.length!==H.cameras.length&&(H.cameras.length=0,Ie=!0);for(let Xe=0;Xe<Ee.length;Xe++){const et=Ee[Xe];let ut=null;if(m!==null)ut=m.getViewport(et);else{const xt=h.getViewSubImage(u,et);ut=xt.viewport,Xe===0&&(e.setRenderTargetTextures(_,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(_))}let $e=D[Xe];$e===void 0&&($e=new Pn,$e.layers.enable(Xe),$e.viewport=new Mt,D[Xe]=$e),$e.matrix.fromArray(et.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(et.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ut.x,ut.y,ut.width,ut.height),Xe===0&&(H.matrix.copy($e.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ie===!0&&H.cameras.push($e)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const Xe=h.getDepthInformation(Ee[0]);Xe&&Xe.isValid&&Xe.texture&&p.init(Xe,r.renderState)}if(ye&&ye.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let Xe=0;Xe<Ee.length;Xe++){const et=Ee[Xe].camera;if(et){let ut=d[et];ut||(ut=new h_,d[et]=ut);const $e=h.getCameraImage(et);ut.sourceTexture=$e}}}}for(let Ee=0;Ee<b.length;Ee++){const Ie=T[Ee],ye=b[Ee];Ie!==null&&ye!==void 0&&ye.update(Ie,ie,c||o)}We&&We(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Ve=new v_;Ve.setAnimationLoop(He),this.setAnimationLoop=function(Q){We=Q},this.dispose=function(){}}}const m2=new wt,w_=new Ue;w_.set(-1,0,0,0,1,0,0,0,1);function g2(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,p_(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,g,E,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(p,d):d.isMeshLambertMaterial?(s(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),f(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,_)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),S(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,g,E):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===En&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===En&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d),E=g.envMap,_=g.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(m2.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(w_),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,g,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=E*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===En&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){const g=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function v2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){const T=b.program;i.uniformBlockBinding(_,T)}function c(_,b){let T=r[_.id];T===void 0&&(p(_),T=f(_),r[_.id]=T,_.addEventListener("dispose",g));const C=b.program;i.updateUBOMapping(_,C);const y=e.render.frame;s[_.id]!==y&&(u(_),s[_.id]=y)}function f(_){const b=h();_.__bindingPointIndex=b;const T=t.createBuffer(),C=_.__size,y=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,T),T}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const b=r[_.id],T=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let y=0,R=T.length;y<R;y++){const A=T[y];if(Array.isArray(A))for(let L=0,D=A.length;L<D;L++)m(A[L],y,L,C);else m(A,y,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,b,T,C){if(S(_,b,T,C)===!0){const y=_.__offset,R=_.value;if(Array.isArray(R)){let A=0;for(let L=0;L<R.length;L++){const D=R[L],H=d(D);v(D,_.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(R,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,_.__data)}}function v(_,b,T){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,T)}function S(_,b,T,C){const y=_.value,R=b+"_"+T;if(C[R]===void 0)return typeof y=="number"||typeof y=="boolean"?C[R]=y:ArrayBuffer.isView(y)?C[R]=y.slice():C[R]=y.clone(),!0;{const A=C[R];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return C[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function p(_){const b=_.uniforms;let T=0;const C=16;for(let R=0,A=b.length;R<A;R++){const L=Array.isArray(b[R])?b[R]:[b[R]];for(let D=0,H=L.length;D<H;D++){const N=L[D],k=Array.isArray(N.value)?N.value:[N.value];for(let K=0,j=k.length;K<j;K++){const B=k[K],z=d(B),Y=T%C,Z=Y%z.boundary,fe=Y+Z;T+=Z,fe!==0&&C-fe<z.storage&&(T+=C-fe),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=z.storage}}}const y=T%C;return y>0&&(T+=C-y),_.__size=T,_.__cache={},this}function d(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):De("WebGLRenderer: Unsupported uniform value type.",_),b}function g(_){const b=_.target;b.removeEventListener("dispose",g);const T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function E(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:E}}const x2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pi=null;function _2(){return pi===null&&(pi=new sb(x2,16,16,Qr,wn),pi.name="DFG_LUT",pi.minFilter=jt,pi.magFilter=jt,pi.wrapS=Oi,pi.wrapT=Oi,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class y2{constructor(e={}){const{canvas:n=I1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Nn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const S=m,p=new Set([np,tp,ep]),d=new Set([Nn,wi,la,ca,Qh,Jh]),g=new Uint32Array(4),E=new Int32Array(4),_=new V;let b=null,T=null;const C=[],y=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1,D=null,H=null,N=null,k=null;this._outputColorSpace=Rn;let K=0,j=0,B=null,z=-1,Y=null;const Z=new Mt,fe=new Mt;let _e=null;const We=new Oe(0);let He=0,Ve=n.width,Q=n.height,ie=1,Ee=null,Ie=null;const ye=new Mt(0,0,Ve,Q),Ge=new Mt(0,0,Ve,Q);let Dt=!1;const Xe=new ap;let et=!1,ut=!1;const $e=new wt,xt=new V,Bt=new Mt,gn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Rt(){return B===null?ie:1}let O=i;function Zt(w,I){return n.getContext(w,I)}let rt,P,x,G,$,J,oe,ae,ee,ne,le,Ae,he,ce,Re,Ne,Fe,U,ue,te,de,ve,re;try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qh}`),n.addEventListener("webglcontextlost",dt,!1),n.addEventListener("webglcontextrestored",nt,!1),n.addEventListener("webglcontextcreationerror",qn,!1),O===null){const I="webgl2";if(O=Zt(I,w),O===null)throw Zt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(w){throw n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",nt,!1),n.removeEventListener("webglcontextcreationerror",qn,!1),tt("WebGLRenderer: "+w.message),w}function Pe(){rt=new _A(O),rt.init(),de=new u2(O,rt),P=new cA(O,rt,e,de),x=new l2(O,rt),P.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),H=O.createFramebuffer(),N=O.createFramebuffer(),k=O.createFramebuffer(),G=new MA(O),$=new $R,J=new c2(O,rt,x,$,P,de,G),oe=new xA(A),ae=new wb(O),ve=new aA(O,ae),ee=new yA(O,ae,G,ve),ne=new wA(O,ee,ae,ve,G),U=new EA(O,P,J),Re=new uA($),le=new YR(A,oe,rt,P,ve,Re),Ae=new g2(A,$),he=new KR,ce=new n2(rt),Fe=new oA(A,oe,x,ne,v,l),Ne=new a2(A,ne,P),re=new v2(O,G,P,x),ue=new lA(O,rt,G),te=new SA(O,rt,G),G.programs=le.programs,A.capabilities=P,A.extensions=rt,A.properties=$,A.renderLists=he,A.shadowMap=Ne,A.state=x,A.info=G}S!==Nn&&(R=new TA(S,n.width,n.height,a,r,s));const Te=new p2(A,O);this.xr=Te,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=rt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=rt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(Ve,Q,!1))},this.getSize=function(w){return w.set(Ve,Q)},this.setSize=function(w,I,q=!0){if(Te.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=w,Q=I,n.width=Math.floor(w*ie),n.height=Math.floor(I*ie),q===!0&&(n.style.width=w+"px",n.style.height=I+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(Ve*ie,Q*ie).floor()},this.setDrawingBufferSize=function(w,I,q){Ve=w,Q=I,ie=q,n.width=Math.floor(w*q),n.height=Math.floor(I*q),this.setViewport(0,0,w,I)},this.setEffects=function(w){if(S===Nn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let I=0;I<w.length;I++)if(w[I].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Z)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,I,q,W){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,I,q,W),x.viewport(Z.copy(ye).multiplyScalar(ie).round())},this.getScissor=function(w){return w.copy(Ge)},this.setScissor=function(w,I,q,W){w.isVector4?Ge.set(w.x,w.y,w.z,w.w):Ge.set(w,I,q,W),x.scissor(fe.copy(Ge).multiplyScalar(ie).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(w){x.setScissorTest(Dt=w)},this.setOpaqueSort=function(w){Ee=w},this.setTransparentSort=function(w){Ie=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(w=!0,I=!0,q=!0){let W=0;if(w){let X=!1;if(B!==null){const ge=B.texture.format;X=p.has(ge)}if(X){const ge=B.texture.type,Se=d.has(ge),me=Fe.getClearColor(),we=Fe.getClearAlpha(),Ce=me.r,Be=me.g,je=me.b;Se?(g[0]=Ce,g[1]=Be,g[2]=je,g[3]=we,O.clearBufferuiv(O.COLOR,0,g)):(E[0]=Ce,E[1]=Be,E[2]=je,E[3]=we,O.clearBufferiv(O.COLOR,0,E))}else W|=O.COLOR_BUFFER_BIT}I&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",nt,!1),n.removeEventListener("webglcontextcreationerror",qn,!1),Fe.dispose(),he.dispose(),ce.dispose(),$.dispose(),oe.dispose(),ne.dispose(),ve.dispose(),re.dispose(),le.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",yp),Te.removeEventListener("sessionend",Sp),Rr.stop()};function dt(w){w.preventDefault(),ng("WebGLRenderer: Context Lost."),L=!0}function nt(){ng("WebGLRenderer: Context Restored."),L=!1;const w=G.autoReset,I=Ne.enabled,q=Ne.autoUpdate,W=Ne.needsUpdate,X=Ne.type;Pe(),G.autoReset=w,Ne.enabled=I,Ne.autoUpdate=q,Ne.needsUpdate=W,Ne.type=X}function qn(w){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ui(w){const I=w.target;I.removeEventListener("dispose",ui),my(I)}function my(w){gy(w),$.remove(w)}function gy(w){const I=$.get(w).programs;I!==void 0&&(I.forEach(function(q){le.releaseProgram(q)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,q,W,X,ge){I===null&&(I=gn);const Se=X.isMesh&&X.matrixWorld.determinantAffine()<0,me=_y(w,I,q,W,X);x.setMaterial(W,Se);let we=q.index,Ce=1;if(W.wireframe===!0){if(we=ee.getWireframeAttribute(q),we===void 0)return;Ce=2}const Be=q.drawRange,je=q.attributes.position;let be=Be.start*Ce,it=(Be.start+Be.count)*Ce;ge!==null&&(be=Math.max(be,ge.start*Ce),it=Math.min(it,(ge.start+ge.count)*Ce)),we!==null?(be=Math.max(be,0),it=Math.min(it,we.count)):je!=null&&(be=Math.max(be,0),it=Math.min(it,je.count));const Pt=it-be;if(Pt<0||Pt===1/0)return;ve.setup(X,W,me,q,we);let pt,lt=ue;if(we!==null&&(pt=ae.get(we),lt=te,lt.setIndex(pt)),X.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*Rt()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if(X.isLine){let Qt=W.linewidth;Qt===void 0&&(Qt=1),x.setLineWidth(Qt*Rt()),X.isLineSegments?lt.setMode(O.LINES):X.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else X.isPoints?lt.setMode(O.POINTS):X.isSprite&&lt.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Qt=X._multiDrawStarts,xe=X._multiDrawCounts,ln=X._multiDrawCount,Qe=we?ae.get(we).bytesPerElement:1,Bn=$.get(W).currentProgram.getUniforms();for(let di=0;di<ln;di++)Bn.setValue(O,"_gl_DrawID",di),lt.render(Qt[di]/Qe,xe[di])}else if(X.isInstancedMesh)lt.renderInstances(be,Pt,X.count);else if(q.isInstancedBufferGeometry){const Qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,xe=Math.min(q.instanceCount,Qt);lt.renderInstances(be,Pt,xe)}else lt.render(be,Pt)};function _p(w,I,q,W){D!==null&&w.isNodeMaterial&&D.setObject(W,w),et===!0&&Re.setState(w,q,!1),w.transparent===!0&&w.side===Gn&&w.forceSinglePass===!1?(w.side=En,w.needsUpdate=!0,Ca(w,I,W),w.side=Kr,w.needsUpdate=!0,Ca(w,I,W),w.side=Gn):Ca(w,I,W)}this.compile=function(w,I,q=null){q===null&&(q=w),D!==null&&D.renderStart(w,I,q),T=ce.get(q),T.init(I),y.push(T),q.traverseVisible(function(X){X.isLight&&X.layers.test(I.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),w!==q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(I.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),ut=this.localClippingEnabled,et=Re.init(this.clippingPlanes,ut),et===!0&&Re.setGlobalState(this.clippingPlanes,I),D!==null&&Ne.render(T.state.shadowsArray,q,I);const W=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const me=ge[Se];_p(me,q,I,X),W.add(me)}else _p(ge,q,I,X),W.add(ge)}),T=y.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(w,I,q=null){const W=this.compile(w,I,q);return new Promise(X=>{function ge(){if(W.forEach(function(Se){const we=$.get(Se).currentProgram;(we===void 0||we.isReady())&&W.delete(Se)}),W.size===0){X(w);return}setTimeout(ge,10)}rt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let jc=null;function vy(w){jc&&jc(w)}function yp(){Rr.stop()}function Sp(){Rr.start()}const Rr=new v_;Rr.setAnimationLoop(vy),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(w){jc=w,Te.setAnimationLoop(w),w===null?Rr.stop():Rr.start()},Te.addEventListener("sessionstart",yp),Te.addEventListener("sessionend",Sp),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(w,I);const q=Te.enabled===!0&&Te.isPresenting===!0,W=R!==null&&(B===null||q)&&R.begin(A,B);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(I),I=Te.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,I,B),T=ce.get(w,y.length),T.init(I),T.state.textureUnits=J.getTextureUnits(),y.push(T),$e.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Xe.setFromProjectionMatrix($e,_i,I.reversedDepth),ut=this.localClippingEnabled,et=Re.init(this.clippingPlanes,ut),b=he.get(w,C.length),b.init(),C.push(b),Te.enabled===!0&&Te.isPresenting===!0){const Se=A.xr.getDepthSensingMesh();Se!==null&&Yc(Se,I,-1/0,A.sortObjects)}Yc(w,I,0,A.sortObjects),b.finish(),D!==null&&D.updateLights(T.state.lightsArray),A.sortObjects===!0&&b.sort(Ee,Ie),yt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,yt&&Fe.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Re.beginShadows();const X=T.state.shadowsArray;if(Ne.render(X,w,I),et===!0&&Re.endShadows(),(W&&R.hasRenderPass())===!1){const Se=b.opaque,me=b.transmissive;if(T.setupLights(),I.isArrayCamera){const we=I.cameras;if(me.length>0)for(let Ce=0,Be=we.length;Ce<Be;Ce++){const je=we[Ce];Ep(Se,me,w,je)}yt&&Fe.render(w);for(let Ce=0,Be=we.length;Ce<Be;Ce++){const je=we[Ce];Mp(b,w,je,je.viewport)}}else me.length>0&&Ep(Se,me,w,I),yt&&Fe.render(w),Mp(b,w,I)}B!==null&&j===0&&(J.updateMultisampleRenderTarget(B),J.updateRenderTargetMipmap(B)),W&&R.end(A),w.isScene===!0&&w.onAfterRender(A,w,I),ve.resetDefaultState(),z=-1,Y=null,y.pop(),y.length>0?(T=y[y.length-1],J.setTextureUnits(T.state.textureUnits),et===!0&&Re.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,D!==null&&D.renderEnd()};function Yc(w,I,q,W){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Xe)){W&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4($e);const Se=ne.update(w),me=w.material;me.visible&&b.push(w,Se,me,q,Bt.z,null,I)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Xe))){const Se=ne.update(w),me=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Bt.copy(Se.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4($e)),Array.isArray(me)){const we=Se.groups;for(let Ce=0,Be=we.length;Ce<Be;Ce++){const je=we[Ce],be=me[je.materialIndex];be&&be.visible&&b.push(w,Se,be,q,Bt.z,je,I)}}else me.visible&&b.push(w,Se,me,q,Bt.z,null,I)}}const ge=w.children;for(let Se=0,me=ge.length;Se<me;Se++)Yc(ge[Se],I,q,W)}function Mp(w,I,q,W){const{opaque:X,transmissive:ge,transparent:Se}=w;T.setupLightsView(q),et===!0&&Re.setGlobalState(A.clippingPlanes,q),W&&x.viewport(Z.copy(W)),X.length>0&&Ta(X,I,q),ge.length>0&&Ta(ge,I,q),Se.length>0&&Ta(Se,I,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ep(w,I,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const be=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new fn(1,1,{generateMipmaps:!0,type:be?wn:Nn,minFilter:zr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const ge=T.state.transmissionRenderTarget[W.id],Se=W.viewport||Z;ge.setSize(Se.z*A.transmissionResolutionScale,Se.w*A.transmissionResolutionScale);const me=A.getRenderTarget(),we=A.getActiveCubeFace(),Ce=A.getActiveMipmapLevel();A.setRenderTarget(ge),A.getClearColor(We),He=A.getClearAlpha(),He<1&&A.setClearColor(16777215,.5),A.clear(),yt&&Fe.render(q);const Be=A.toneMapping;A.toneMapping=Ei;const je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),et===!0&&Re.setGlobalState(A.clippingPlanes,W),Ta(w,q,W),J.updateMultisampleRenderTarget(ge),J.updateRenderTargetMipmap(ge),rt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let it=0,Pt=I.length;it<Pt;it++){const pt=I[it],{object:lt,geometry:Qt,material:xe,group:ln}=pt;if(xe.side===Gn&&lt.layers.test(W.layers)){const Qe=xe.side;xe.side=En,xe.needsUpdate=!0,wp(lt,q,W,Qt,xe,ln),xe.side=Qe,xe.needsUpdate=!0,be=!0}}be===!0&&(J.updateMultisampleRenderTarget(ge),J.updateRenderTargetMipmap(ge))}A.setRenderTarget(me,we,Ce),A.setClearColor(We,He),je!==void 0&&(W.viewport=je),A.toneMapping=Be}function Ta(w,I,q){const W=I.isScene===!0?I.overrideMaterial:null;for(let X=0,ge=w.length;X<ge;X++){const Se=w[X],{object:me,geometry:we,group:Ce}=Se;let Be=Se.material;Be.allowOverride===!0&&W!==null&&(Be=W),me.layers.test(q.layers)&&wp(me,I,q,we,Be,Ce)}}function wp(w,I,q,W,X,ge){D!==null&&X.isNodeMaterial&&D.setObject(w,X),w.onBeforeRender(A,I,q,W,X,ge),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(A,I,q,W,w,ge),X.transparent===!0&&X.side===Gn&&X.forceSinglePass===!1?(X.side=En,X.needsUpdate=!0,A.renderBufferDirect(q,I,W,X,w,ge),X.side=Kr,X.needsUpdate=!0,A.renderBufferDirect(q,I,W,X,w,ge),X.side=Gn):A.renderBufferDirect(q,I,W,X,w,ge),w.onAfterRender(A,I,q,W,X,ge)}function Ca(w,I,q){I.isScene!==!0&&(I=gn);const W=$.get(w),X=T.state.lights,ge=T.state.shadowsArray,Se=X.state.version,me=le.getParameters(w,X.state,ge,I,q,T.state.lightProbeGridArray),we=le.getProgramCacheKey(me);let Ce=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?I.environment:null,W.fog=I.fog;const Be=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=oe.get(w.envMap||W.environment,Be),W.envMapRotation=W.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Ce===void 0&&(w.addEventListener("dispose",ui),Ce=new Map,W.programs=Ce);let je=Ce.get(we);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===Se)return Tp(w,me),je}else me.uniforms=le.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,q,me),w.onBeforeCompile(me,A),je=le.acquireProgram(me,we),Ce.set(we,je),W.uniforms=me.uniforms;const be=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=Re.uniform),Tp(w,me),W.needsLights=Sy(w),W.lightsStateVersion=Se,W.needsLights&&(be.ambientLightColor.value=X.state.ambient,be.lightProbe.value=X.state.probe,be.sunLights.value=X.state.sun,be.sunLightShadows.value=X.state.sunShadow,be.directionalLights.value=X.state.directional,be.directionalLightShadows.value=X.state.directionalShadow,be.spotLights.value=X.state.spot,be.spotLightShadows.value=X.state.spotShadow,be.rectAreaLights.value=X.state.rectArea,be.ltc_1.value=X.state.rectAreaLTC1,be.ltc_2.value=X.state.rectAreaLTC2,be.pointLights.value=X.state.point,be.pointLightShadows.value=X.state.pointShadow,be.hemisphereLights.value=X.state.hemi,be.sunShadowMatrix.value=X.state.sunShadowMatrix,be.sunShadowCascade.value=X.state.sunShadowCascade,be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,be.spotLightMatrix.value=X.state.spotLightMatrix,be.spotLightMap.value=X.state.spotLightMap,be.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=je,W.uniformsList=null,je}function bp(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Ul.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Tp(w,I){const q=$.get(w);q.outputColorSpace=I.outputColorSpace,q.batching=I.batching,q.batchingColor=I.batchingColor,q.instancing=I.instancing,q.instancingColor=I.instancingColor,q.instancingMorph=I.instancingMorph,q.skinning=I.skinning,q.morphTargets=I.morphTargets,q.morphNormals=I.morphNormals,q.morphColors=I.morphColors,q.morphTargetsCount=I.morphTargetsCount,q.numClippingPlanes=I.numClippingPlanes,q.numIntersection=I.numClipIntersection,q.vertexAlphas=I.vertexAlphas,q.vertexTangents=I.vertexTangents,q.toneMapping=I.toneMapping}function xy(w,I){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(I.matrixWorld);for(let q=0,W=w.length;q<W;q++){const X=w[q];if(X.texture!==null&&X.boundingBox.containsPoint(_))return X}return null}function _y(w,I,q,W,X){I.isScene!==!0&&(I=gn),J.resetTextureUnits();const ge=I.fog,Se=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?I.environment:null,me=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ke.workingColorSpace,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ce=oe.get(W.envMap||Se,we),Be=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!q.morphAttributes.position,it=!!q.morphAttributes.normal,Pt=!!q.morphAttributes.color;let pt=Ei;W.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(pt=A.toneMapping);const lt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Qt=lt!==void 0?lt.length:0,xe=$.get(W),ln=T.state.lights;if(et===!0&&(ut===!0||w!==Y)){const ft=w===Y&&W.id===z;Re.setState(W,w,ft)}let Qe=!1;W.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==ln.state.version||xe.outputColorSpace!==me||X.isBatchedMesh&&xe.batching===!1||!X.isBatchedMesh&&xe.batching===!0||X.isBatchedMesh&&xe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&xe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&xe.instancing===!1||!X.isInstancedMesh&&xe.instancing===!0||X.isSkinnedMesh&&xe.skinning===!1||!X.isSkinnedMesh&&xe.skinning===!0||X.isInstancedMesh&&xe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&xe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&xe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&xe.instancingMorph===!1&&X.morphTexture!==null||xe.envMap!==Ce||W.fog===!0&&xe.fog!==ge||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Re.numPlanes||xe.numIntersection!==Re.numIntersection)||xe.vertexAlphas!==Be||xe.vertexTangents!==je||xe.morphTargets!==be||xe.morphNormals!==it||xe.morphColors!==Pt||xe.toneMapping!==pt||xe.morphTargetsCount!==Qt||!!xe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,xe.__version=W.version);let Bn=xe.currentProgram;Qe===!0&&(Bn=Ca(W,I,X),D&&W.isNodeMaterial&&D.onUpdateProgram(W,Bn,xe));let di=!1,ji=!1,is=!1;const at=Bn.getUniforms(),Ct=xe.uniforms;if(x.useProgram(Bn.program)&&(di=!0,ji=!0,is=!0),W.id!==z&&(z=W.id,ji=!0),xe.needsLights){const ft=xy(T.state.lightProbeGridArray,X);xe.lightProbeGrid!==ft&&(xe.lightProbeGrid=ft,ji=!0)}if(di||Y!==w){x.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),at.setValue(O,"projectionMatrix",w.projectionMatrix),at.setValue(O,"viewMatrix",w.matrixWorldInverse);const $i=at.map.cameraPosition;$i!==void 0&&$i.setValue(O,xt.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&at.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&at.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,ji=!0,is=!0)}if(xe.needsLights&&(ln.state.sunShadowMap.length>0&&at.setValue(O,"sunShadowMap",ln.state.sunShadowMap,J),ln.state.directionalShadowMap.length>0&&at.setValue(O,"directionalShadowMap",ln.state.directionalShadowMap,J),ln.state.spotShadowMap.length>0&&at.setValue(O,"spotShadowMap",ln.state.spotShadowMap,J),ln.state.pointShadowMap.length>0&&at.setValue(O,"pointShadowMap",ln.state.pointShadowMap,J)),X.isSkinnedMesh){at.setOptional(O,X,"bindMatrix"),at.setOptional(O,X,"bindMatrixInverse");const ft=X.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),at.setValue(O,"boneTexture",ft.boneTexture,J))}X.isBatchedMesh&&(at.setOptional(O,X,"batchingTexture"),at.setValue(O,"batchingTexture",X._matricesTexture,J),at.setOptional(O,X,"batchingIdTexture"),at.setValue(O,"batchingIdTexture",X._indirectTexture,J),at.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&at.setValue(O,"batchingColorTexture",X._colorsTexture,J));const Yi=q.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&U.update(X,q,Bn),(ji||xe.receiveShadow!==X.receiveShadow)&&(xe.receiveShadow=X.receiveShadow,at.setValue(O,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&I.environment!==null&&(Ct.envMapIntensity.value=I.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=_2()),ji){if(at.setValue(O,"toneMappingExposure",A.toneMappingExposure),xe.needsLights&&yy(Ct,is),ge&&W.fog===!0&&Ae.refreshFogUniforms(Ct,ge),Ae.refreshMaterialUniforms(Ct,W,ie,Q,T.state.transmissionRenderTarget[w.id]),xe.needsLights&&xe.lightProbeGrid){const ft=xe.lightProbeGrid;Ct.probesSH.value=ft.texture,Ct.probesMin.value.copy(ft.boundingBox.min),Ct.probesMax.value.copy(ft.boundingBox.max),Ct.probesResolution.value.copy(ft.resolution)}Ul.upload(O,bp(xe),Ct,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ul.upload(O,bp(xe),Ct,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&at.setValue(O,"center",X.center),at.setValue(O,"modelViewMatrix",X.modelViewMatrix),at.setValue(O,"normalMatrix",X.normalMatrix),at.setValue(O,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const ft=W.uniformsGroups;for(let $i=0,rs=ft.length;$i<rs;$i++){const Ap=ft[$i];re.update(Ap,Bn),re.bind(Ap,Bn)}}return Bn}function yy(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.sunLights.needsUpdate=I,w.sunLightShadows.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function Sy(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(w,I,q){const W=$.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),$.get(w.texture).__webglTexture=I,$.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,I){const q=$.get(w);q.__webglFramebuffer=I,q.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,q=0){B=w,K=I,j=q;let W=null,X=!1,ge=!1;if(w){const me=$.get(w);if(me.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),Z.copy(w.viewport),fe.copy(w.scissor),_e=w.scissorTest,x.viewport(Z),x.scissor(fe),x.setScissorTest(_e),z=-1;return}else if(me.__webglFramebuffer===void 0)J.setupRenderTarget(w);else if(me.__hasExternalTextures)J.rebindTextures(w,$.get(w.texture).__webglTexture,$.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Be=w.depthTexture;if(me.__boundDepthTexture!==Be){if(Be!==null&&$.has(Be)&&(w.width!==Be.image.width||w.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(w)}}const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ge=!0);const Ce=$.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?W=Ce[I][q]:W=Ce[I],X=!0):w.samples>0&&J.useMultisampledRTT(w)===!1?W=$.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?W=Ce[q]:W=Ce,Z.copy(w.viewport),fe.copy(w.scissor),_e=w.scissorTest}else Z.copy(ye).multiplyScalar(ie).floor(),fe.copy(Ge).multiplyScalar(ie).floor(),_e=Dt;if(q!==0&&(W=H),x.bindFramebuffer(O.FRAMEBUFFER,W)&&x.drawBuffers(w,W),x.viewport(Z),x.scissor(fe),x.setScissorTest(_e),X){const me=$.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,q)}else if(ge){const me=I;for(let we=0;we<w.textures.length;we++){const Ce=$.get(w.textures[we]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+we,Ce.__webglTexture,q,me)}}else if(w!==null&&q!==0){const me=$.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,q)}z=-1};function Cp(w){const I=$.get(w);return(I.__readFormat!==w.format||I.__readType!==w.type)&&(I.__readFormat=w.format,I.__readType=w.type,I.__formatReadable=P.textureFormatReadable(w.format),I.__typeReadable=P.textureTypeReadable(w.type)),I}this.readRenderTargetPixels=function(w,I,q,W,X,ge,Se,me=0){if(!(w&&w.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){x.bindFramebuffer(O.FRAMEBUFFER,we);try{const Ce=w.textures[me],Be=Ce.format,je=Ce.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);const be=Cp(Ce);if(be.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-W&&q>=0&&q<=w.height-X&&O.readPixels(I,q,W,X,de.convert(Be),de.convert(je),ge)}finally{const Ce=B!==null?$.get(B).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(w,I,q,W,X,ge,Se,me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we)if(I>=0&&I<=w.width-W&&q>=0&&q<=w.height-X){x.bindFramebuffer(O.FRAMEBUFFER,we);const Ce=w.textures[me],Be=Ce.format,je=Ce.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);const be=Cp(Ce);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.bufferData(O.PIXEL_PACK_BUFFER,ge.byteLength,O.STREAM_READ),O.readPixels(I,q,W,X,de.convert(Be),de.convert(je),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Pt=B!==null?$.get(B).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Pt);const pt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await U1(O,pt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ge),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(it),O.deleteSync(pt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,I=null,q=0){const W=Math.pow(2,-q),X=Math.floor(w.image.width*W),ge=Math.floor(w.image.height*W),Se=I!==null?I.x:0,me=I!==null?I.y:0;J.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Se,me,X,ge),x.unbindTexture()},this.copyTextureToTexture=function(w,I,q=null,W=null,X=0,ge=0){let Se,me,we,Ce,Be,je,be,it,Pt;const pt=w.isCompressedTexture?w.mipmaps[ge]:w.image;if(q!==null)Se=q.max.x-q.min.x,me=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Ce=q.min.x,Be=q.min.y,je=q.isBox3?q.min.z:0;else{const Ct=Math.pow(2,-X);Se=Math.floor(pt.width*Ct),me=Math.floor(pt.height*Ct),w.isDataArrayTexture?we=pt.depth:w.isData3DTexture?we=Math.floor(pt.depth*Ct):we=1,Ce=0,Be=0,je=0}W!==null?(be=W.x,it=W.y,Pt=W.z):(be=0,it=0,Pt=0);const lt=de.convert(I.format),Qt=de.convert(I.type);let xe;I.isData3DTexture?(J.setTexture3D(I,0),xe=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(J.setTexture2DArray(I,0),xe=O.TEXTURE_2D_ARRAY):(J.setTexture2D(I,0),xe=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);const ln=x.getParameter(O.UNPACK_ROW_LENGTH),Qe=x.getParameter(O.UNPACK_IMAGE_HEIGHT),Bn=x.getParameter(O.UNPACK_SKIP_PIXELS),di=x.getParameter(O.UNPACK_SKIP_ROWS),ji=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,pt.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(O.UNPACK_SKIP_ROWS,Be),x.pixelStorei(O.UNPACK_SKIP_IMAGES,je);const is=w.isDataArrayTexture||w.isData3DTexture,at=I.isDataArrayTexture||I.isData3DTexture;if(w.isDepthTexture){const Ct=$.get(w),Yi=$.get(I),ft=$.get(Ct.__renderTarget),$i=$.get(Yi.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,ft.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let rs=0;rs<we;rs++)is&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(w).__webglTexture,X,je+rs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(I).__webglTexture,ge,Pt+rs)),O.blitFramebuffer(Ce,Be,Se,me,be,it,Se,me,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||$.has(w)){const Ct=$.get(w),Yi=$.get(I);x.bindFramebuffer(O.READ_FRAMEBUFFER,N),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let ft=0;ft<we;ft++)is?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.__webglTexture,X,je+ft):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ct.__webglTexture,X),at?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Yi.__webglTexture,ge,Pt+ft):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Yi.__webglTexture,ge),X!==0?O.blitFramebuffer(Ce,Be,Se,me,be,it,Se,me,O.COLOR_BUFFER_BIT,O.NEAREST):at?O.copyTexSubImage3D(xe,ge,be,it,Pt+ft,Ce,Be,Se,me):O.copyTexSubImage2D(xe,ge,be,it,Ce,Be,Se,me);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else at?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(xe,ge,be,it,Pt,Se,me,we,lt,Qt,pt.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(xe,ge,be,it,Pt,Se,me,we,lt,pt.data):O.texSubImage3D(xe,ge,be,it,Pt,Se,me,we,lt,Qt,pt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ge,be,it,Se,me,lt,Qt,pt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ge,be,it,pt.width,pt.height,lt,pt.data):O.texSubImage2D(O.TEXTURE_2D,ge,be,it,Se,me,lt,Qt,pt);x.pixelStorei(O.UNPACK_ROW_LENGTH,ln),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qe),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Bn),x.pixelStorei(O.UNPACK_SKIP_ROWS,di),x.pixelStorei(O.UNPACK_SKIP_IMAGES,ji),ge===0&&I.generateMipmaps&&O.generateMipmap(xe),x.unbindTexture()},this.initRenderTarget=function(w){$.get(w).__webglFramebuffer===void 0&&J.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?J.setTextureCube(w,0):w.isData3DTexture?J.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?J.setTexture2DArray(w,0):J.setTexture2D(w,0),x.unbindTexture()},this.resetState=function(){K=0,j=0,B=null,x.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}const Fl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ea{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const S2=new Hc(-1,1,1,-1,0,1);class M2 extends $n{constructor(){super(),this.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new li([0,2,0,0,2,0],2))}}const E2=new M2;class b_{constructor(e){this._mesh=new Ut(E2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,S2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class T_ extends Ea{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ha.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new b_(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Kg extends Ea{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class w2 extends Ea{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class b2{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Le);this._width=i.width,this._height=i.height,n=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new T_(Fl),this.copyPass.material.blending=Mi,this.timer=new yb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kg!==void 0&&(o instanceof Kg?i=!0:o instanceof w2&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class T2 extends Ea{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Oe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const C2={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Js extends Ea{constructor(e,n=1,i,r){super(),this.strength=n,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new Oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(s,o,{type:wn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new fn(s,o,{type:wn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const u=new fn(s,o,{type:wn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}const a=C2;this.highPassUniforms=ha.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Le(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ha.clone(Fl.uniforms),this.blendMaterial=new Yt({uniforms:this.copyUniforms,vertexShader:Fl.vertexShader,fragmentShader:Fl.fragmentShader,premultipliedAlpha:!0,blending:sa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Oe,this._oldClearAlpha=1,this._basic=new da,this._fsQuad=new b_(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Le(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Js.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Js.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const n=[],i=e/3;for(let o=0;o<e;o++)n.push(.39894*Math.exp(-.5*o*o/(i*i))/i);const r=[],s=[];for(let o=1;o<e;o+=2){const a=n[o],l=o+1<e?n[o+1]:0,c=a+l;r.push((o*a+(o+1)*l)/c),s.push(c)}return new Yt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},centerWeight:{value:n[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Js.BlurDirectionX=new Le(1,0);Js.BlurDirectionY=new Le(0,1);const Di=8,A2={uniforms:{tDiffuse:{value:null},uTime:{value:0},uAspect:{value:1},uActiveRippleCount:{value:0},uRipples:{value:new Array(Di).fill(null).map(()=>new Le(.5,.5))},uRippleAges:{value:new Float32Array(Di)},uRippleIntensities:{value:new Float32Array(Di)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uAspect;
    uniform int uActiveRippleCount;
    uniform vec2 uRipples[${Di}];
    uniform float uRippleAges[${Di}];
    uniform float uRippleIntensities[${Di}];

    varying vec2 vUv;

    void main() {
      vec2 rippleOffset = vec2(0.0);

      // 1. Fluid Mouse Ripple Simulation (Vertex3D style)
      for (int i = 0; i < ${Di}; i++) {
        if (i >= uActiveRippleCount) break;

        vec2 diff = vUv - uRipples[i];
        diff.x *= uAspect; // circular wave correction
        float dist = length(diff);
        float age = uRippleAges[i];

        if (age < 1.2 && dist < 0.65) {
          // Outward expanding harmonic wave
          float wave = sin(dist * 26.0 - age * 8.5);
          // Spatial falloff + exponential time decay
          float envelope = exp(-dist * 5.2) * exp(-age * 2.1);
          vec2 dir = dist > 0.0001 ? normalize(diff) : vec2(0.0);
          dir.x /= uAspect; // revert aspect scaling for UV displacement
          rippleOffset += dir * (wave * envelope * uRippleIntensities[i] * 0.042);
        }
      }

      vec2 centerDiff = vUv - vec2(0.5);
      float distCenter = length(centerDiff);
      vec2 radialDir = distCenter > 0.0001 ? normalize(centerDiff) : vec2(0.0);

      // 2. Optical Lens Chromatic Aberration (Radial + Ripple Smear)
      vec2 chromOffset = radialDir * (distCenter * distCenter * 0.0055) + rippleOffset * 0.38;

      vec2 uvR = clamp(vUv + rippleOffset + chromOffset, 0.0, 1.0);
      vec2 uvG = clamp(vUv + rippleOffset, 0.0, 1.0);
      vec2 uvB = clamp(vUv + rippleOffset - chromOffset, 0.0, 1.0);

      vec4 colR = texture2D(tDiffuse, uvR);
      vec4 colG = texture2D(tDiffuse, uvG);
      vec4 colB = texture2D(tDiffuse, uvB);
      vec3 color = vec3(colR.r, colG.g, colB.b);

      // 3. Optical Refraction Cyan/White Glow on Fluid Crests
      float rippleMag = length(rippleOffset);
      color += vec3(0.12, 0.28, 0.36) * (rippleMag * 6.8);

      // 4. Stepped 24 FPS Film Grain (Eliminates banding, adds velvety tactile texture)
      float steppedTime = floor(uTime * 24.0) / 24.0;
      float grain = fract(sin(dot(vUv * 6.5 + vec2(steppedTime * 0.17, steppedTime * 0.43), vec2(12.9898, 78.233))) * 43758.5453);
      color += (grain - 0.5) * 0.036;

      // 5. Cinematic Vignette (Darkened perimeter focusing eye on portfolio content)
      float vignette = smoothstep(1.25, 0.42, distCenter);
      color *= (0.76 + 0.24 * vignette);

      gl_FragColor = vec4(color, 1.0);
    }
  `};class R2{constructor(e,n){qe(this,"pass");qe(this,"ripples",[]);qe(this,"lastSpawnTime",0);qe(this,"lastX",-1);qe(this,"lastY",-1);this.pass=new T_(A2),this.updateSize(e,n)}updateSize(e,n){const i=n>0?e/n:1;this.pass.uniforms.uAspect.value=i}addCursorMovement(e,n,i){if(this.lastX<0){this.lastX=e,this.lastY=n;return}const r=e-this.lastX,s=n-this.lastY,o=Math.sqrt(r*r+s*s);if(o>.008&&i-this.lastSpawnTime>.045){const a=Math.min(1,o*12);this.spawnRipple(e,n,.4+a*.6),this.lastSpawnTime=i,this.lastX=e,this.lastY=n}}spawnRipple(e,n,i=.8){this.ripples.length>=Di&&this.ripples.shift(),this.ripples.push({x:e,y:n,age:0,intensity:Math.min(1,i)})}update(e,n){this.pass.uniforms.uTime.value=n;for(let r=0;r<this.ripples.length;r++)this.ripples[r].age+=e;this.ripples=this.ripples.filter(r=>r.age<1.2);const i=Math.min(this.ripples.length,Di);this.pass.uniforms.uActiveRippleCount.value=i;for(let r=0;r<i;r++){const s=this.ripples[r];this.pass.uniforms.uRipples.value[r].set(s.x,s.y),this.pass.uniforms.uRippleAges.value[r]=s.age,this.pass.uniforms.uRippleIntensities.value[r]=s.intensity}}}function P2(t,e){const n=document.createElement("canvas");n.width=512,n.height=256;const i=n.getContext("2d");i.fillStyle="rgba(10, 15, 26, 0.9)",i.fillRect(0,0,n.width,n.height),i.strokeStyle="rgba(34, 211, 238, 0.2)",i.lineWidth=1;for(let s=0;s<=n.width;s+=32)i.beginPath(),i.moveTo(s,0),i.lineTo(s,n.height),i.stroke();for(let s=0;s<=n.height;s+=32)i.beginPath(),i.moveTo(0,s),i.lineTo(n.width,s),i.stroke();i.strokeStyle="#22d3ee",i.lineWidth=2,i.strokeRect(8,8,n.width-16,n.height-16),i.fillStyle="#22d3ee",i.fillRect(4,4,12,12),i.fillRect(n.width-16,4,12,12),i.fillRect(4,n.height-16,12,12),i.fillRect(n.width-16,n.height-16,12,12),i.font="bold 20px monospace",i.fillStyle="#38bdf8",i.fillText(`■ ${t}`,24,52),i.font="14px monospace",i.fillStyle="#94a3b8",i.fillText(e,24,96),i.fillText("CAD / DXF ELEVATION // LEVEL +120m",24,132),i.strokeStyle="rgba(56, 189, 248, 0.7)",i.beginPath(),i.moveTo(24,180),i.lineTo(n.width-24,180),i.stroke(),i.fillStyle="#38bdf8",i.fillText("◄── 24.8m ──►",n.width/2-50,174);const r=new f_(n);return r.minFilter=jt,r}function N2(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#080b12",e.fillRect(0,0,512,512),e.strokeStyle="rgba(255, 255, 255, 0.05)",e.lineWidth=2;for(let i=0;i<=512;i+=64)e.beginPath(),e.moveTo(i,0),e.lineTo(i,512),e.stroke(),e.beginPath(),e.moveTo(0,i),e.lineTo(512,i),e.stroke();for(let i=0;i<8;i++){const r=Math.random()*400+50,s=Math.random()*400+50,o=Math.random()*60+30,a=e.createRadialGradient(r,s,0,r,s,o);a.addColorStop(0,"rgba(245, 158, 11, 0.08)"),a.addColorStop(1,"rgba(8, 11, 18, 0)"),e.fillStyle=a,e.beginPath(),e.arc(r,s,o,0,Math.PI*2),e.fill()}const n=new f_(t);return n.wrapS=aa,n.wrapT=aa,n.repeat.set(12,12),n}function L2(){const t=new Ls,e=new Ls;let n=null;const i=[],r=new hr(64,64),s=N2(),o=new Yu({map:s,color:395536,metalness:.85,roughness:.18}),a=new Ut(r,o);a.rotation.x=-Math.PI/2,a.position.y=0,t.add(a);const l=new Yu({color:1119780,metalness:.35,roughness:.75}),c=new Yu({color:790554,metalness:.5,roughness:.6});[{w:4.5,h:28,d:4.5,x:-7.5,z:8,ry:.08},{w:4.5,h:32,d:4.5,x:7.5,z:8,ry:-.08},{w:5.5,h:36,d:5.5,x:-9,z:-2,ry:.12},{w:6,h:42,d:6,x:9.5,z:-3,ry:-.15},{w:2.2,h:18,d:2.2,x:-4.5,z:-10,ry:0},{w:2.2,h:18,d:2.2,x:4.5,z:-10,ry:0},{w:2.2,h:18,d:2.2,x:-4.5,z:-18,ry:0},{w:2.2,h:18,d:2.2,x:4.5,z:-18,ry:0},{w:8,h:56,d:8,x:-14,z:-28,ry:.2},{w:10,h:64,d:10,x:12,z:-32,ry:-.18},{w:9,h:72,d:9,x:-2,z:-38,ry:.05},{w:7,h:48,d:7,x:16,z:-20,ry:-.25},{w:7,h:52,d:7,x:-18,z:-16,ry:.22}].forEach(A=>{const L=new Mr(A.w,A.h,A.d);L.translate(0,A.h/2,0);const D=A.h>40?c:l,H=new Ut(L,D);H.position.set(A.x,0,A.z),H.rotation.y=A.ry,t.add(H);const N=new Mr(A.w*1.05,.8,A.d*1.05),k=new Ut(N,c);k.position.set(A.x,A.h,A.z),k.rotation.y=A.ry,t.add(k)}),[{w:15,h:2.2,d:3.5,x:0,y:16,z:8},{w:18.5,h:2.5,d:4,x:.2,y:22,z:-2.5},{w:16,h:3,d:4.5,x:-1,y:28,z:-24}].forEach(A=>{const L=new Mr(A.w,A.h,A.d),D=new Ut(L,l);D.position.set(A.x,A.y,A.z),t.add(D);const H=new hr(A.w*.9,.4),N=new da({color:3718648,side:Gn}),k=new Ut(H,N);k.rotation.x=Math.PI/2,k.position.set(A.x,A.y-A.h/2-.02,A.z),t.add(k)}),[{title:"SMARTSCOPY // XR DOCK",spec:"LATENCY < 100MS // STEREO OT",x:-5.2,y:6,z:7.9,ry:0},{title:"MIMADIM // CAD ENGINE",spec:"PROCEDURAL DXF-TO-3D // UE5",x:5.2,y:7.5,z:7.9,ry:0},{title:"NOPAINHEALS // SENSORS",spec:"CLINICAL GAIT REHAB // E2EE",x:-6.7,y:5,z:-2.1,ry:Math.PI/2},{title:"VISION-AI // DIRECTSHOW",spec:"YOLOv8 + ONNX // MOTION 60FPS",x:6.7,y:6.5,z:-3.1,ry:-Math.PI/2}].forEach(A=>{const L=P2(A.title,A.spec),D=new da({map:L,transparent:!0,opacity:.85,side:Gn}),H=new Ut(new hr(3.6,1.8),D);H.position.set(A.x,A.y,A.z),H.rotation.y=A.ry,t.add(H),i.push(H)});const m={uniforms:{uColor:{value:new Oe(16096779)},uIntensity:{value:.38},uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uIntensity;
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        // Vertical beam falloff (brightest at top sky entrance)
        float topFade = pow(1.0 - vUv.y, 1.6);
        // Edge horizontal soft fade
        float edgeFade = sin(vUv.x * 3.14159);
        // Atmospheric shimmer wave
        float shimmer = sin(vUv.y * 14.0 - uTime * 1.8) * 0.08 + 0.92;

        float alpha = topFade * edgeFade * shimmer * uIntensity;
        gl_FragColor = vec4(uColor, alpha);
      }
    `},v=new Yt({vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,uniforms:ha.clone(m.uniforms),transparent:!0,blending:sa,side:Gn,depthWrite:!1});[{w:7,h:32,x:-1,y:15,z:4,rz:.38,rx:.15},{w:9,h:36,x:2.5,y:18,z:-5,rz:.42,rx:.1},{w:6.5,h:28,x:-4,y:14,z:-14,rz:.35,rx:.2},{w:10,h:42,x:1,y:22,z:-22,rz:.45,rx:.12},{w:8,h:34,x:-2.5,y:16,z:12,rz:.36,rx:.18}].forEach(A=>{const L=new hr(A.w,A.h),D=new Ut(L,v);D.position.set(A.x,A.y,A.z),D.rotation.z=A.rz,D.rotation.x=A.rx,e.add(D)}),t.add(e);const p=500,d=new $n,g=new Float32Array(p*3),E=new Float32Array(p*3),_=new Float32Array(p),b=new Oe(16096779),T=new Oe(3718648);for(let A=0;A<p;A++){const L=A*3;g[L]=(Math.random()-.5)*28,g[L+1]=Math.random()*24,g[L+2]=(Math.random()-.5)*48-6;const H=Math.random()>.4?b:T;E[L]=H.r,E[L+1]=H.g,E[L+2]=H.b,_[A]=.08+Math.random()*.16}d.setAttribute("position",new ai(g,3)),d.setAttribute("color",new ai(E,3));const C=new u_({size:.055,vertexColors:!0,transparent:!0,opacity:.75,blending:sa,depthWrite:!1});return n=new xg(d,C),t.add(n),{group:t,update:(A,L,D,H)=>{e.rotation.y=D*.06,e.rotation.z=H*.04,v.uniforms.uTime.value=L;const N=.75+Math.sin(L*2.2)*.15;if(i.forEach(k=>{k.material.opacity=N}),n){const k=n.geometry.attributes.position,K=k.array;for(let j=0;j<p;j++){const B=j*3;K[B+1]-=A*_[j],K[B+1]<.2&&(K[B+1]=24,K[B]=(Math.random()-.5)*28,K[B+2]=(Math.random()-.5)*48-6),K[B]+=Math.sin(L*.75+j*.5)*A*.04,K[B+2]+=Math.cos(L*.65+j*.5)*A*.04}k.needsUpdate=!0}},dispose:()=>{t.traverse(A=>{(A instanceof Ut||A instanceof xg)&&(A.geometry.dispose(),Array.isArray(A.material)?A.material.forEach(L=>L.dispose()):A.material&&A.material.dispose())}),t.clear()}}}const D2=[{sectionId:"home",scrollProgress:0,position:new V(0,14,18),target:new V(0,4,0)},{sectionId:"about",scrollProgress:.14,position:new V(3.5,7.5,10),target:new V(-1,2.5,0)},{sectionId:"smartscopy",scrollProgress:.28,position:new V(-4.5,3.2,5),target:new V(0,2.8,-2)},{sectionId:"mimadim",scrollProgress:.43,position:new V(4.2,2.8,1),target:new V(-.5,1.5,-4)},{sectionId:"nopainheals",scrollProgress:.57,position:new V(-3.2,2.2,-3.5),target:new V(1,1.8,-7)},{sectionId:"vision-ai",scrollProgress:.71,position:new V(2.8,4.5,-7.5),target:new V(-1.5,3,-11)},{sectionId:"skills",scrollProgress:.85,position:new V(-1,6,-12),target:new V(0,3.5,-16)},{sectionId:"contact",scrollProgress:1,position:new V(0,12,-16),target:new V(0,14,-32)}];class I2{constructor(e,n=D2){qe(this,"camera");qe(this,"waypoints");qe(this,"currentPosition",new V);qe(this,"currentTarget",new V);qe(this,"targetPosition",new V);qe(this,"targetLookAt",new V);qe(this,"mouseOffset",new Le(0,0));qe(this,"currentMouseOffset",new Le(0,0));this.camera=e,this.waypoints=n,n.length>0&&(this.currentPosition.copy(n[0].position),this.currentTarget.copy(n[0].target),this.targetPosition.copy(n[0].position),this.targetLookAt.copy(n[0].target))}setMouseOffset(e,n){this.mouseOffset.set(e*.6,n*.3)}update(e,n){const i=Math.max(0,Math.min(1,e));let r=0;for(let m=0;m<this.waypoints.length-1;m++)if(i>=this.waypoints[m].scrollProgress&&i<=this.waypoints[m+1].scrollProgress){r=m;break}const s=Math.min(r+1,this.waypoints.length-1),o=this.waypoints[r],a=this.waypoints[s],l=a.scrollProgress-o.scrollProgress,c=l>0?(i-o.scrollProgress)/l:0,f=.5-.5*Math.cos(c*Math.PI);this.targetPosition.lerpVectors(o.position,a.position,f),this.targetLookAt.lerpVectors(o.target,a.target,f);const h=Math.min(1,n*3.5);this.currentMouseOffset.lerp(this.mouseOffset,h);const u=Math.min(1,n*4);this.currentPosition.lerp(this.targetPosition,u),this.currentTarget.lerp(this.targetLookAt,u),this.camera.position.set(this.currentPosition.x+this.currentMouseOffset.x,this.currentPosition.y-this.currentMouseOffset.y,this.currentPosition.z),this.camera.lookAt(this.currentTarget.x,this.currentTarget.y,this.currentTarget.z)}}class U2{constructor(){qe(this,"container",null);qe(this,"scene");qe(this,"camera");qe(this,"cameraController");qe(this,"renderer",null);qe(this,"composer",null);qe(this,"bloomPass",null);qe(this,"cinematicPass",null);qe(this,"environment",null);qe(this,"activeStationId","home");qe(this,"cursorU",.5);qe(this,"cursorV",.5);qe(this,"mouseNormX",0);qe(this,"mouseNormY",0);qe(this,"animationFrameId",null);qe(this,"isDestroyed",!1);qe(this,"isIdle",!1);qe(this,"scrollProgress",0);qe(this,"lastTime",0);qe(this,"clock");qe(this,"onTick");this.scene=new Z1,this.scene.fog=new op(395282,.038),this.camera=new Pn(45,1,.1,100),this.camera.position.set(0,14,18),this.cameraController=new I2(this.camera),this.clock=new Mb}init(e,n){this.container=e,this.isDestroyed=!1;try{const i=e.clientWidth||window.innerWidth,r=e.clientHeight||window.innerHeight;this.renderer=new y2({powerPreference:"high-performance",antialias:!0,alpha:!0,stencil:!1,depth:!0}),this.renderer.setSize(i,r);const s=Math.min(window.devicePixelRatio||1,1.75);return this.renderer.setPixelRatio(s),this.renderer.toneMapping=Kh,this.renderer.toneMappingExposure=1.15,this.renderer.outputColorSpace=Rn,this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",e.appendChild(this.renderer.domElement),this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.setupLighting(),this.environment=L2(),this.scene.add(this.environment.group),this.setupPostProcessing(i,r),n!=null&&n.onLoaded&&n.onLoaded(),this.startRenderLoop(),!0}catch(i){return console.warn("StudioScene: WebGL initialization failed, fallback enabled.",i),n!=null&&n.onError&&i instanceof Error&&n.onError(i),!1}}setupLighting(){const e=new vb(725280,1.1);this.scene.add(e);const n=new bg(16096779,2.2);n.position.set(8,16,10),this.scene.add(n);const i=new bg(2282478,1.8);i.position.set(-6,8,-4),this.scene.add(i);const r=new mb(16498468,1.4,25);r.position.set(6,4,-8),this.scene.add(r)}setupPostProcessing(e,n){if(this.renderer)try{this.composer=new b2(this.renderer);const i=new T2(this.scene,this.camera);this.composer.addPass(i),this.bloomPass=new Js(new Le(e,n),.5,.35,.75),this.composer.addPass(this.bloomPass),this.cinematicPass=new R2(e,n),this.composer.addPass(this.cinematicPass.pass)}catch(i){console.warn("Postprocessing bloom unsupported, using standard renderer.",i),this.composer=null,this.cinematicPass=null}}resize(){if(!this.container||!this.renderer)return;const e=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.composer&&this.composer.setSize(e,n),this.cinematicPass&&this.cinematicPass.updateSize(e,n)}setIdle(e){this.isIdle=e}startRenderLoop(){const e=n=>{if(this.isDestroyed||(this.animationFrameId=requestAnimationFrame(e),this.isIdle&&n-this.lastTime<66))return;this.lastTime=n;const i=this.clock.getDelta(),r=this.clock.getElapsedTime();this.cameraController.update(this.scrollProgress,i),this.environment&&this.environment.update(i,r,this.mouseNormX,this.mouseNormY),this.cinematicPass&&this.cinematicPass.update(i,r),this.onTick&&this.onTick(i,r),this.composer?this.composer.render():this.renderer&&this.renderer.render(this.scene,this.camera)};this.animationFrameId=requestAnimationFrame(e)}setActiveStation(e){this.activeStationId=e}setScrollProgress(e){this.scrollProgress=e}setMouseOffset(e,n){this.mouseNormX=e,this.mouseNormY=n,this.cameraController.setMouseOffset(e,n)}onCursorMove(e,n,i){this.cursorU=e,this.cursorV=n,this.cinematicPass&&this.cinematicPass.addCursorMovement(e,n,i)}onCursorClick(e,n){this.cinematicPass&&this.cinematicPass.spawnRipple(e,n,1)}destroy(){this.isDestroyed=!0,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.renderer&&this.renderer.domElement&&this.renderer.domElement.parentElement&&(this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),this.renderer.dispose(),this.renderer=null),this.composer&&(this.composer.dispose(),this.composer=null),this.environment&&(this.environment.dispose(),this.environment=null),this.scene.traverse(e=>{e instanceof Ut&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material&&e.material.dispose())}),this.scene.clear()}}const F2=({progress:t,isLoaded:e})=>{const i=2*Math.PI*48,r=i-t/100*i;return M.jsxs("div",{className:`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#07080d]/90 backdrop-blur-xl transition-all duration-700 ${e?"opacity-0 pointer-events-none":"opacity-100"}`,children:[M.jsxs("div",{className:"relative flex items-center justify-center w-36 h-36",children:[M.jsx("div",{className:"absolute inset-0 rounded-full bg-cyan-500/10 blur-xl animate-pulse"}),M.jsxs("svg",{className:"w-32 h-32 -rotate-90 transform",children:[M.jsx("circle",{cx:"64",cy:"64",r:48,className:"stroke-slate-800",strokeWidth:"3",fill:"transparent"}),M.jsx("circle",{cx:"64",cy:"64",r:48,className:"stroke-cyan-400 transition-all duration-300 ease-out",strokeWidth:"3.5",strokeDasharray:i,strokeDashoffset:r,strokeLinecap:"round",fill:"transparent"})]}),M.jsxs("div",{className:"absolute flex flex-col items-center justify-center",children:[M.jsxs("span",{className:"font-mono text-xl font-bold tracking-tight text-cyan-400",children:[Math.floor(t),"%"]}),M.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-slate-400 mt-0.5",children:"READY"})]})]}),M.jsxs("div",{className:"mt-6 flex flex-col items-center gap-1.5 text-center",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsxs("span",{className:"relative flex h-2 w-2",children:[M.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),M.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-cyan-500"})]}),M.jsx("span",{className:"font-mono text-xs font-semibold tracking-widest text-slate-300 uppercase",children:"Initializing Spatial Lab"})]}),M.jsx("span",{className:"font-mono text-[10px] tracking-wide text-slate-500",children:"Unreal Engine 5 • Three.js • Spatial WebGL"})]})]})},O2=({isEnabled:t=!0,activeStationId:e="home"})=>{const n=F.useRef(null),i=F.useRef(null),[r,s]=F.useState(0),[o,a]=F.useState(!1),[l,c]=F.useState(!1);return F.useEffect(()=>{i.current&&e&&i.current.setActiveStation(e)},[e]),F.useEffect(()=>{if(!t||!n.current){i.current&&(i.current.destroy(),i.current=null);return}const f=new U2;i.current=f;let h=10;s(h);const u=setInterval(()=>{h+=Math.random()*25,h>=95&&(h=95,clearInterval(u)),s(Math.min(95,h))},80);if(!f.init(n.current,{onLoaded:()=>{clearInterval(u),s(100),f.setActiveStation(e),setTimeout(()=>{a(!0)},350)},onError:_=>{console.warn("StudioCanvas: WebGL fallback activated.",_),clearInterval(u),c(!0),a(!0)}})){clearInterval(u),c(!0),a(!0);return}const v=()=>{const _=document.documentElement.scrollHeight-window.innerHeight,b=_>0?window.scrollY/_:0;f.setScrollProgress(b),g()},S=_=>{const b=_.clientX/window.innerWidth*2-1,T=_.clientY/window.innerHeight*2-1;f.setMouseOffset(b,T);const C=_.clientX/window.innerWidth,y=1-_.clientY/window.innerHeight;f.onCursorMove(C,y,performance.now()*.001),g()},p=_=>{const b=_.clientX/window.innerWidth,T=1-_.clientY/window.innerHeight;f.onCursorClick(b,T),g()};let d=null;const g=()=>{f.setIdle(!1),d&&clearTimeout(d),d=setTimeout(()=>{f.setIdle(!0)},3e3)};g();const E=()=>{f.resize()};return window.addEventListener("scroll",v,{passive:!0}),window.addEventListener("mousemove",S,{passive:!0}),window.addEventListener("click",p,{passive:!0}),window.addEventListener("resize",E),v(),()=>{clearInterval(u),d&&clearTimeout(d),window.removeEventListener("scroll",v),window.removeEventListener("mousemove",S),window.removeEventListener("click",p),window.removeEventListener("resize",E),f.destroy(),i.current=null}},[t]),!t||l?null:M.jsxs(M.Fragment,{children:[M.jsx(F2,{progress:r,isLoaded:o}),M.jsx("div",{ref:n,"aria-hidden":"true",className:"fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-1000",style:{opacity:o?1:0}})]})},k2=({onExploreClick:t,onOpenProjectsDeck:e})=>M.jsx("section",{id:"home",className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 pt-24 pb-20 select-none",children:M.jsxs("div",{className:"max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center",children:[M.jsxs("div",{className:"mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-lg",children:[M.jsxs("span",{className:"relative flex h-2 w-2",children:[M.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),M.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),M.jsx("span",{className:"font-mono text-xs text-slate-300 tracking-wider",children:"SOFTWARE & GAME DEVELOPER"})]}),M.jsxs("div",{className:"mb-6",children:[M.jsx("span",{className:"font-mono text-xs md:text-sm tracking-[0.3em] text-cyan-400 uppercase block mb-3",children:"Game Development • Spatial Computing (XR) • Interactive 3D"}),M.jsxs("h1",{className:"text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1.05]",children:[M.jsx("span",{className:"metallic-text",children:"RAVI "}),M.jsx("span",{className:"gradient-text",children:"PATEL"})]})]}),M.jsxs("p",{className:"max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-8",children:["Crafting high-performance games, spatial computing experiences, and interactive applications across"," ",M.jsx("span",{className:"text-cyan-400 font-semibold font-mono",children:"Unity (C#)"}),","," ",M.jsx("span",{className:"text-indigo-400 font-semibold font-mono",children:"Unreal Engine 5 (C++)"}),", and"," ",M.jsx("span",{className:"text-purple-400 font-semibold font-mono",children:"Three.js / WebGL"}),"."]}),M.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl w-full mb-10",children:[M.jsxs("div",{className:"p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center",children:[M.jsx("span",{className:"font-mono text-2xl md:text-3xl font-extrabold gradient-text block",children:"3+ Years"}),M.jsx("span",{className:"font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block",children:"Professional Experience"})]}),M.jsxs("div",{className:"p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center",children:[M.jsx("span",{className:"font-mono text-2xl md:text-3xl font-extrabold gradient-text block",children:"15+ Projects"}),M.jsx("span",{className:"font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block",children:"Shipped & Delivered"})]}),M.jsxs("div",{className:"col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center",children:[M.jsx("span",{className:"font-mono text-2xl md:text-3xl font-extrabold gradient-text block",children:"Cross-Platform"}),M.jsx("span",{className:"font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block",children:"PC, Mobile & XR Headsets"})]})]}),M.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[M.jsxs(Un,{type:"button",onClick:t,className:"h-11 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold gap-2 shadow-lg shadow-cyan-500/25 transition-all text-xs font-mono",children:["[ EXPLORE WORK ]",M.jsx(BE,{className:"w-3.5 h-3.5"})]}),M.jsxs(Un,{type:"button",onClick:e,variant:"outline",className:"h-11 px-6 rounded-xl border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 font-semibold gap-2 text-xs font-mono",children:[M.jsx(ya,{className:"w-3.5 h-3.5 text-cyan-400"}),"[ ALL PROJECTS (13) ]"]}),M.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"no-underline hidden sm:inline-block",children:M.jsxs(Un,{type:"button",variant:"outline",className:"h-11 px-5 rounded-xl border-white/10 hover:bg-white/[0.05] text-slate-300 font-semibold gap-2 text-xs font-mono",children:[M.jsx(ef,{className:"w-3.5 h-3.5"}),"[ RESUME ]"]})})]})]})}),B2=()=>{const t=[{icon:Cx,title:"Game Development & 3D Systems",description:"Custom gameplay mechanics, real-time physics, and procedural 3D environments across Unreal Engine 5 and Unity."},{icon:tw,title:"Spatial Computing (XR & VR/AR)",description:"Immersive medical visualization, interactive training simulations, and stereoscopic headsets (HoloLens 2, XREAL, Meta Quest)."},{icon:Px,title:"Interactive Kiosks & Hardware",description:"Commercial touchscreen and floor-projection systems built on hardened Linux with robust offline architecture."},{icon:Rx,title:"Computer Vision & Smart Motion",description:"Camera-based gesture recognition, skeletal body tracking, and real-time vision processing for controller-free gameplay."}];return M.jsx("section",{id:"about",className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none",children:M.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[M.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),M.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"STATION 01 // PROFILE & EXPERTISE"})]}),M.jsxs("div",{className:"mb-8",children:[M.jsxs("h2",{className:"text-3xl md:text-5xl font-black tracking-tight text-white mb-3",children:["Core Areas of ",M.jsx("span",{className:"gradient-text",children:"Expertise"})]}),M.jsx("p",{className:"font-mono text-xs md:text-sm text-slate-400 max-w-2xl",children:"Software & Game Developer at Invisible Fiction (May 2023 – Present). Designing and delivering robust 3D, XR, and interactive applications."})]}),M.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",children:t.map((e,n)=>{const i=e.icon;return M.jsxs(Bc,{className:"p-5 md:p-6 rounded-2xl bg-[#0a0d18]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/40 transition-all shadow-lg",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400",children:M.jsx(i,{className:"w-5 h-5"})}),M.jsx("h3",{className:"text-base font-bold text-white mb-1.5",children:e.title}),M.jsx("p",{className:"text-xs text-slate-400 leading-relaxed font-normal",children:e.description})]},n)})}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[M.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0",children:M.jsx(YE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"text-xs font-bold text-white block",children:"B.E. in Computer Engineering (CGPA: 8.30 / 10.0)"}),M.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:"Ipcowala Institute of Eng. & Tech. (2019 – 2023)"})]})]}),M.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",children:M.jsx(zE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"text-xs font-bold text-white block",children:"Anthropic & SAP Industry Certifications"}),M.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:"Claude Architecture • SAP CSR (Code Unnati)"})]})]})]})]})})},ml=({stationId:t,stationCode:e,project:n,onInspectCase:i,onOpenProjectsDeck:r})=>M.jsx("section",{id:t,className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none",children:M.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[M.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),M.jsxs("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:["FEATURED PROJECT ",e," // ",n.category]})]}),M.jsxs("div",{className:"mb-6",children:[M.jsx("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-3",children:n.title.toUpperCase()}),M.jsx("p",{className:"font-mono text-xs sm:text-sm md:text-base text-cyan-300/80 max-w-3xl leading-relaxed",children:n.subtitle})]}),M.jsxs("div",{className:"p-6 md:p-8 rounded-3xl bg-[#090c16]/85 backdrop-blur-2xl border border-white/[0.08] shadow-2xl mb-8 relative overflow-hidden",children:[M.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"}),M.jsx("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed mb-6",children:n.shortDescription}),n.architecturalHighlights&&n.architecturalHighlights.length>0&&M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",children:n.architecturalHighlights.slice(0,2).map((s,o)=>M.jsxs("div",{className:"p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5",children:[M.jsx(Yh,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),M.jsx("span",{className:"text-xs text-slate-300 leading-relaxed",children:s})]},o))}),M.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]",children:[n.metrics&&M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),M.jsx("span",{className:"font-mono text-xs font-semibold text-white",children:n.metrics})]}),M.jsx("div",{className:"flex flex-wrap gap-1.5",children:n.tech.slice(0,4).map(s=>M.jsx("span",{className:"px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300",children:s},s))})]})]}),M.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[M.jsxs(Un,{type:"button",onClick:()=>i(n),className:"h-11 px-7 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold gap-2 shadow-lg shadow-cyan-500/25 transition-all text-xs font-mono",children:["[ INSPECT CASE ]",M.jsx(Tx,{className:"w-4 h-4"})]}),r&&M.jsxs(Un,{type:"button",onClick:r,variant:"outline",className:"h-11 px-5 rounded-xl border-white/10 hover:bg-white/[0.05] text-slate-300 font-semibold gap-2 text-xs font-mono",children:[M.jsx(ya,{className:"w-3.5 h-3.5 text-cyan-400"}),"[ ALL PROJECTS (13) ]"]})]})]})}),z2=()=>{const t=[{icon:XE,title:"Game Engines & 3D",color:"text-cyan-400 border-cyan-500/30",skills:["Unity (C#)","Unreal Engine 5 (C++)","Three.js","WebGL","Blender"]},{icon:Rx,title:"Spatial Computing (XR)",color:"text-indigo-400 border-indigo-500/30",skills:["HoloLens 2 (MRTK)","XREAL Air / Light","OpenXR","WebXR","Spatial Audio"]},{icon:GE,title:"Core Languages",color:"text-purple-400 border-purple-500/30",skills:["C#","C++","TypeScript","JavaScript","Python","GLSL / HLSL"]},{icon:Ax,title:"Computer Vision & AI",color:"text-emerald-400 border-emerald-500/30",skills:["DirectShow","YOLOv8","ONNX Runtime","MediaPipe","OpenCV"]},{icon:Cx,title:"Kiosks & Hardware",color:"text-blue-400 border-blue-500/30",skills:["Linux / Ubuntu","Hardened Kiosks","Floor Projectors","Sensors","WebSockets"]},{icon:Px,title:"Security & Cryptography",color:"text-amber-400 border-amber-500/30",skills:["X25519 Elliptic Curve","AES-256-GCM","HKDF-SHA256","Zero-Trust Tunnel"]}];return M.jsx("section",{id:"skills",className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none",children:M.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[M.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),M.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"STATION 06 // SKILLS & ARCHITECTURE"})]}),M.jsxs("div",{className:"mb-8",children:[M.jsxs("h2",{className:"text-3xl md:text-5xl font-black tracking-tight text-white mb-3",children:["Technical Stack & ",M.jsx("span",{className:"gradient-text",children:"Architecture"})]}),M.jsx("p",{className:"font-mono text-xs md:text-sm text-slate-400 max-w-2xl",children:"Technologies and frameworks deployed across commercial games, medical XR platforms, and interactive 3D installations."})]}),M.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map((e,n)=>{const i=e.icon;return M.jsxs(Bc,{className:"p-5 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/40 transition-all shadow-lg",children:[M.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[M.jsx("div",{className:`w-8 h-8 rounded-lg bg-white/[0.04] border flex items-center justify-center ${e.color}`,children:M.jsx(i,{className:"w-4 h-4"})}),M.jsx("h3",{className:"text-sm font-bold text-white tracking-wide",children:e.title})]}),M.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.skills.map(r=>M.jsx("span",{className:"px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300",children:r},r))})]},n)})})]})})},Yf=F.forwardRef(({className:t,type:e,...n},i)=>M.jsx("input",{type:e,className:mn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:i,...n}));Yf.displayName="Input";const C_=F.forwardRef(({className:t,...e},n)=>M.jsx("textarea",{className:mn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...e}));C_.displayName="Textarea";const V2=1,H2=1e6;let td=0;function G2(){return td=(td+1)%Number.MAX_SAFE_INTEGER,td.toString()}const nd=new Map,Zg=t=>{if(nd.has(t))return;const e=setTimeout(()=>{nd.delete(t),Vo({type:"REMOVE_TOAST",toastId:t})},H2);nd.set(t,e)},W2=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,V2)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?Zg(n):t.toasts.forEach(i=>{Zg(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},Ol=[];let kl={toasts:[]};function Vo(t){kl=W2(kl,t),Ol.forEach(e=>{e(kl)})}function X2({...t}){const e=G2(),n=r=>Vo({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>Vo({type:"DISMISS_TOAST",toastId:e});return Vo({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function A_(){const[t,e]=F.useState(kl);return F.useEffect(()=>(Ol.push(e),()=>{const n=Ol.indexOf(e);n>-1&&Ol.splice(n,1)}),[t]),{...t,toast:X2,dismiss:n=>Vo({type:"DISMISS_TOAST",toastId:n})}}class wa{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const j2=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},Wt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:j2()},cp=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},Y2=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=cp(t);Wt.publicKey=n.publicKey,Wt.blockHeadless=n.blockHeadless,Wt.storageProvider=n.storageProvider,Wt.blockList=n.blockList,Wt.limitRate=n.limitRate,Wt.origin=n.origin||e},R_=async(t,e,n={})=>{const i=await fetch(Wt.origin+t,{method:"POST",headers:n,body:e}),r=await i.text(),s=new wa(i.status,r);if(i.ok)return s;throw s},P_=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},$2=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},N_=t=>t.webdriver||!t.languages||t.languages.length===0,L_=()=>new wa(451,"Unavailable For Headless Browser"),q2=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},K2=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},Z2=(t,e)=>t instanceof FormData?t.get(e):t[e],D_=(t,e)=>{if(K2(t))return!1;q2(t.list,t.watchVariable);const n=Z2(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},I_=()=>new wa(403,"Forbidden"),Q2=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},J2=async(t,e,n)=>{const i=Number(await n.get(t)||0);return e-Date.now()+i},U_=async(t,e,n)=>{if(!e.throttle||!n)return!1;Q2(e.throttle,e.id);const i=e.id||t;return await J2(i,e.throttle,n)>0?!0:(await n.set(i,Date.now().toString()),!1)},F_=()=>new wa(429,"Too Many Requests"),eP=async(t,e,n,i)=>{const r=cp(i),s=r.publicKey||Wt.publicKey,o=r.blockHeadless||Wt.blockHeadless,a=r.storageProvider||Wt.storageProvider,l={...Wt.blockList,...r.blockList},c={...Wt.limitRate,...r.limitRate};return o&&N_(navigator)?Promise.reject(L_()):(P_(s,t,e),$2(n),n&&D_(l,n)?Promise.reject(I_()):await U_(location.pathname,c,a)?Promise.reject(F_()):R_("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},tP=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},nP=t=>typeof t=="string"?document.querySelector(t):t,iP=async(t,e,n,i)=>{const r=cp(i),s=r.publicKey||Wt.publicKey,o=r.blockHeadless||Wt.blockHeadless,a=Wt.storageProvider||r.storageProvider,l={...Wt.blockList,...r.blockList},c={...Wt.limitRate,...r.limitRate};if(o&&N_(navigator))return Promise.reject(L_());const f=nP(n);P_(s,t,e),tP(f);const h=new FormData(f);return D_(l,h)?Promise.reject(I_()):await U_(location.pathname,c,a)?Promise.reject(F_()):(h.append("lib_version","4.4.1"),h.append("service_id",t),h.append("template_id",e),h.append("user_id",s),R_("/api/v1.0/email/send-form",h))},rP={init:Y2,send:eP,sendForm:iP,EmailJSResponseStatus:wa},sP=()=>{const{toast:t}=A_(),[e,n]=F.useState({name:"",email:"",message:""}),[i,r]=F.useState(!1),[s,o]=F.useState(!1),a=async l=>{l.preventDefault(),r(!0);try{await rP.send("service_7vljb2h","template_k3j7nfe",{from_name:e.name,reply_to:e.email,message:e.message},"GekL2x0c-5PjX33sM"),o(!0),t({title:"Transmission Received",description:"Your message was transmitted successfully. I will respond promptly."}),n({name:"",email:"",message:""})}catch(c){console.warn("Direct transmission fallback:",c),t({title:"Transmission Logged",description:"Thank you for reaching out. You can also connect via direct email or LinkedIn."})}finally{r(!1)}};return M.jsxs("section",{id:"contact",className:"min-h-screen w-full flex flex-col justify-between relative px-6 md:px-16 pt-24 pb-12 select-none",children:[M.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10 my-auto",children:[M.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),M.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"STATION 07 // GET IN TOUCH"})]}),M.jsxs("div",{className:"mb-8",children:[M.jsxs("h2",{className:"text-3xl md:text-5xl font-black tracking-tight text-white mb-2",children:["Let's Build Something ",M.jsx("span",{className:"gradient-text",children:"Exceptional"})]}),M.jsx("p",{className:"font-mono text-xs md:text-sm text-slate-400",children:"Open for Senior Software & Game Development, Spatial Computing (XR), and Interactive 3D roles."})]}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[M.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[M.jsxs("div",{className:"p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",children:M.jsx(ZE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-widest block",children:"Email Address"}),M.jsx("a",{href:"mailto:patelravi28042001@gmail.com",className:"text-xs md:text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono",children:"patelravi28042001@gmail.com"})]})]}),M.jsxs("div",{className:"p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0",children:M.jsx(ew,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-widest block",children:"Phone / WhatsApp"}),M.jsx("a",{href:"tel:+919712728974",className:"text-xs md:text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono",children:"+91 97127 28974"})]})]}),M.jsxs("div",{className:"p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0",children:M.jsx(QE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-widest block",children:"Location"}),M.jsx("span",{className:"text-xs md:text-sm font-semibold text-white font-mono",children:"Karamsad, Anand, Gujarat, India"})]})]}),M.jsxs("div",{className:"pt-2 flex gap-3",children:[M.jsxs("a",{href:"https://github.com/RaviPatel2804",target:"_blank",rel:"noopener noreferrer",className:"flex-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 transition-all flex items-center justify-center gap-2 text-xs font-mono",children:[M.jsx(jE,{className:"w-4 h-4"}),M.jsx("span",{children:"GitHub"})]}),M.jsxs("a",{href:"https://www.linkedin.com/in/ravi-patel-394939223/",target:"_blank",rel:"noopener noreferrer",className:"flex-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-400/40 text-slate-300 hover:text-indigo-400 transition-all flex items-center justify-center gap-2 text-xs font-mono",children:[M.jsx(qE,{className:"w-4 h-4"}),M.jsx("span",{children:"LinkedIn"})]})]})]}),M.jsx("div",{className:"lg:col-span-7",children:M.jsxs("form",{onSubmit:a,className:"p-6 md:p-8 rounded-3xl bg-[#080b14]/85 backdrop-blur-2xl border border-white/[0.08] shadow-2xl space-y-4",children:[M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1.5 uppercase",children:"Your Name"}),M.jsx(Yf,{required:!0,value:e.name,onChange:l=>n({...e,name:l.target.value}),placeholder:"e.g. Alex Mercer",className:"h-10 bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1.5 uppercase",children:"Email Address"}),M.jsx(Yf,{type:"email",required:!0,value:e.email,onChange:l=>n({...e,email:l.target.value}),placeholder:"alex@studio.com",className:"h-10 bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400"})]})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1.5 uppercase",children:"Message Details"}),M.jsx(C_,{required:!0,rows:4,value:e.message,onChange:l=>n({...e,message:l.target.value}),placeholder:"Tell me about your project, team requirements, or role details...",className:"bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400 resize-none"})]}),M.jsx(Un,{type:"submit",disabled:i,className:"w-full h-11 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl text-xs font-mono shadow-lg shadow-cyan-500/20",children:i?M.jsxs(M.Fragment,{children:[M.jsx("span",{children:"Sending..."}),M.jsx(KE,{className:"ml-2 w-3.5 h-3.5 animate-spin"})]}):s?M.jsxs(M.Fragment,{children:[M.jsx("span",{children:"Message Sent Successfully"}),M.jsx(Yh,{className:"ml-2 w-3.5 h-3.5 text-emerald-400"})]}):M.jsxs(M.Fragment,{children:[M.jsx("span",{children:"[ SEND MESSAGE ]"}),M.jsx(nw,{className:"ml-2 w-3.5 h-3.5"})]})})]})})]})]}),M.jsx("footer",{className:"pt-8 border-t border-white/[0.06] text-center relative z-10",children:M.jsxs("p",{className:"font-mono text-[11px] text-slate-500",children:["© ",new Date().getFullYear()," Ravi Patel. Software & Game Developer."]})})]})},oP=()=>{const[t,e]=F.useState(()=>{try{const m=localStorage.getItem("ravi_portfolio_3d_enabled");return m!==null?m==="true":!0}catch{return!0}}),[n,i]=F.useState("home"),[r,s]=F.useState(null),[o,a]=F.useState(!1);F.useEffect(()=>{try{localStorage.setItem("ravi_portfolio_3d_enabled",String(t))}catch{}},[t]),F.useEffect(()=>{const m=()=>{const v=nf.map(p=>document.getElementById(p.id)).filter(Boolean),S=window.scrollY+window.innerHeight*.45;for(let p=v.length-1;p>=0;p--)if(v[p].offsetTop<=S){i(nf[p].id);break}};return window.addEventListener("scroll",m,{passive:!0}),m(),()=>window.removeEventListener("scroll",m)},[]);const l=m=>{const v=document.getElementById(m);v&&v.scrollIntoView({behavior:"smooth"})},c=rn.find(m=>m.id==="smartscopy")||rn[0],f=rn.find(m=>m.id==="mimadimplus")||rn[1],h=rn.find(m=>m.id==="nopainheals")||rn[2],u=rn.find(m=>m.id==="motion-tracking-ai")||rn[3];return M.jsxs("div",{className:"relative min-h-screen bg-[#06070a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-clip",children:[M.jsx(O2,{isEnabled:t,activeStationId:n}),M.jsx(Gw,{activeStationId:n,onSelectStation:l}),M.jsx(Hw,{is3DEnabled:t,onToggle3D:()=>e(m=>!m),onOpenProjectsDeck:()=>a(!0),onScrollToStation:l}),M.jsx(Ww,{}),M.jsxs("main",{className:"relative z-10",children:[M.jsx(k2,{onExploreClick:()=>l("about"),onOpenProjectsDeck:()=>a(!0)}),M.jsx(B2,{}),M.jsx(ml,{stationId:"smartscopy",stationCode:"02",project:c,onInspectCase:m=>s(m),onOpenProjectsDeck:()=>a(!0)}),M.jsx(ml,{stationId:"mimadim",stationCode:"03",project:f,onInspectCase:m=>s(m),onOpenProjectsDeck:()=>a(!0)}),M.jsx(ml,{stationId:"nopainheals",stationCode:"04",project:h,onInspectCase:m=>s(m),onOpenProjectsDeck:()=>a(!0)}),M.jsx(ml,{stationId:"vision-ai",stationCode:"05",project:u,onInspectCase:m=>s(m),onOpenProjectsDeck:()=>a(!0)}),M.jsx(z2,{}),M.jsx(sP,{})]}),M.jsx(Xw,{project:r,onClose:()=>s(null),onOpenAllProjects:()=>a(!0)}),M.jsx(Qw,{isOpen:o,onClose:()=>a(!1),onSelectProject:m=>{a(!1),s(m)}})]})},aP=()=>{const t=wx();return F.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),M.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-100",children:M.jsxs("div",{className:"text-center",children:[M.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),M.jsx("p",{className:"mb-4 text-xl text-gray-600",children:"Oops! Page not found"}),M.jsx("a",{href:"/",className:"text-blue-500 underline hover:text-blue-700",children:"Return to Home"})]})})};function Ln(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function O_(t,e=[]){let n=[];function i(s,o){const a=F.createContext(o),l=n.length;n=[...n,o];const c=h=>{var d;const{scope:u,children:m,...v}=h,S=((d=u==null?void 0:u[t])==null?void 0:d[l])||a,p=F.useMemo(()=>v,Object.values(v));return M.jsx(S.Provider,{value:p,children:m})};c.displayName=s+"Provider";function f(h,u){var S;const m=((S=u==null?void 0:u[t])==null?void 0:S[l])||a,v=F.useContext(m);if(v)return v;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return[c,f]}const r=()=>{const s=n.map(o=>F.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return F.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,lP(r,...e)]}function lP(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return F.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}function cP(t){const e=t+"CollectionProvider",[n,i]=O_(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=S=>{const{scope:p,children:d}=S,g=ir.useRef(null),E=ir.useRef(new Map).current;return M.jsx(r,{scope:p,itemMap:E,collectionRef:g,children:d})};o.displayName=e;const a=t+"CollectionSlot",l=dc(a),c=ir.forwardRef((S,p)=>{const{scope:d,children:g}=S,E=s(a,d),_=qr(p,E.collectionRef);return M.jsx(l,{ref:_,children:g})});c.displayName=a;const f=t+"CollectionItemSlot",h="data-radix-collection-item",u=dc(f),m=ir.forwardRef((S,p)=>{const{scope:d,children:g,...E}=S,_=ir.useRef(null),b=qr(p,_),T=s(f,d);return ir.useEffect(()=>(T.itemMap.set(_,{ref:_,...E}),()=>void T.itemMap.delete(_))),M.jsx(u,{[h]:"",ref:b,children:g})});m.displayName=f;function v(S){const p=s(t+"CollectionConsumer",S);return ir.useCallback(()=>{const g=p.collectionRef.current;if(!g)return[];const E=Array.from(g.querySelectorAll(`[${h}]`));return Array.from(p.itemMap.values()).sort((T,C)=>E.indexOf(T.ref.current)-E.indexOf(C.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:o,Slot:c,ItemSlot:m},v,i]}var uP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],bi=uP.reduce((t,e)=>{const n=dc(`Primitive.${e}`),i=F.forwardRef((r,s)=>{const{asChild:o,...a}=r,l=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),M.jsx(l,{...a,ref:s})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{});function k_(t,e){t&&Ic.flushSync(()=>t.dispatchEvent(e))}function Jr(t){const e=F.useRef(t);return F.useEffect(()=>{e.current=t}),F.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function dP(t,e=globalThis==null?void 0:globalThis.document){const n=Jr(t);F.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var fP="DismissableLayer",$f="dismissableLayer.update",hP="dismissableLayer.pointerDownOutside",pP="dismissableLayer.focusOutside",Qg,B_=F.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),z_=F.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=F.useContext(B_),[f,h]=F.useState(null),u=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=F.useState({}),v=qr(e,C=>h(C)),S=Array.from(c.layers),[p]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),d=S.indexOf(p),g=f?S.indexOf(f):-1,E=c.layersWithOutsidePointerEventsDisabled.size>0,_=g>=d,b=gP(C=>{const y=C.target,R=[...c.branches].some(A=>A.contains(y));!_||R||(r==null||r(C),o==null||o(C),C.defaultPrevented||a==null||a())},u),T=vP(C=>{const y=C.target;[...c.branches].some(A=>A.contains(y))||(s==null||s(C),o==null||o(C),C.defaultPrevented||a==null||a())},u);return dP(C=>{g===c.layers.size-1&&(i==null||i(C),!C.defaultPrevented&&a&&(C.preventDefault(),a()))},u),F.useEffect(()=>{if(f)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Qg=u.body.style.pointerEvents,u.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(f)),c.layers.add(f),Jg(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(u.body.style.pointerEvents=Qg)}},[f,u,n,c]),F.useEffect(()=>()=>{f&&(c.layers.delete(f),c.layersWithOutsidePointerEventsDisabled.delete(f),Jg())},[f,c]),F.useEffect(()=>{const C=()=>m({});return document.addEventListener($f,C),()=>document.removeEventListener($f,C)},[]),M.jsx(bi.div,{...l,ref:v,style:{pointerEvents:E?_?"auto":"none":void 0,...t.style},onFocusCapture:Ln(t.onFocusCapture,T.onFocusCapture),onBlurCapture:Ln(t.onBlurCapture,T.onBlurCapture),onPointerDownCapture:Ln(t.onPointerDownCapture,b.onPointerDownCapture)})});z_.displayName=fP;var mP="DismissableLayerBranch",V_=F.forwardRef((t,e)=>{const n=F.useContext(B_),i=F.useRef(null),r=qr(e,i);return F.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),M.jsx(bi.div,{...t,ref:r})});V_.displayName=mP;function gP(t,e=globalThis==null?void 0:globalThis.document){const n=Jr(t),i=F.useRef(!1),r=F.useRef(()=>{});return F.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){H_(hP,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function vP(t,e=globalThis==null?void 0:globalThis.document){const n=Jr(t),i=F.useRef(!1);return F.useEffect(()=>{const r=s=>{s.target&&!i.current&&H_(pP,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Jg(){const t=new CustomEvent($f);document.dispatchEvent(t)}function H_(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?k_(r,s):r.dispatchEvent(s)}var xP=z_,_P=V_,pa=globalThis!=null&&globalThis.document?F.useLayoutEffect:()=>{},yP="Portal",G_=F.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,s]=F.useState(!1);pa(()=>s(!0),[]);const o=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?KM.createPortal(M.jsx(bi.div,{...i,ref:e}),o):null});G_.displayName=yP;function SP(t,e){return F.useReducer((n,i)=>e[n][i]??n,t)}var W_=t=>{const{present:e,children:n}=t,i=MP(e),r=typeof n=="function"?n({present:i.isPresent}):F.Children.only(n),s=qr(i.ref,EP(r));return typeof n=="function"||i.isPresent?F.cloneElement(r,{ref:s}):null};W_.displayName="Presence";function MP(t){const[e,n]=F.useState(),i=F.useRef(null),r=F.useRef(t),s=F.useRef("none"),o=t?"mounted":"unmounted",[a,l]=SP(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return F.useEffect(()=>{const c=gl(i.current);s.current=a==="mounted"?c:"none"},[a]),pa(()=>{const c=i.current,f=r.current;if(f!==t){const u=s.current,m=gl(c);t?l("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(f&&u!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),pa(()=>{if(e){let c;const f=e.ownerDocument.defaultView??window,h=m=>{const S=gl(i.current).includes(m.animationName);if(m.target===e&&S&&(l("ANIMATION_END"),!r.current)){const p=e.style.animationFillMode;e.style.animationFillMode="forwards",c=f.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=p)})}},u=m=>{m.target===e&&(s.current=gl(i.current))};return e.addEventListener("animationstart",u),e.addEventListener("animationcancel",h),e.addEventListener("animationend",h),()=>{f.clearTimeout(c),e.removeEventListener("animationstart",u),e.removeEventListener("animationcancel",h),e.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:F.useCallback(c=>{i.current=c?getComputedStyle(c):null,n(c)},[])}}function gl(t){return(t==null?void 0:t.animationName)||"none"}function EP(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var wP=f0[" useInsertionEffect ".trim().toString()]||pa;function bP({prop:t,defaultProp:e,onChange:n=()=>{},caller:i}){const[r,s,o]=TP({defaultProp:e,onChange:n}),a=t!==void 0,l=a?t:r;{const f=F.useRef(t!==void 0);F.useEffect(()=>{const h=f.current;h!==a&&console.warn(`${i} is changing from ${h?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=a},[a,i])}const c=F.useCallback(f=>{var h;if(a){const u=CP(f)?f(t):f;u!==t&&((h=o.current)==null||h.call(o,u))}else s(f)},[a,t,s,o]);return[l,c]}function TP({defaultProp:t,onChange:e}){const[n,i]=F.useState(t),r=F.useRef(n),s=F.useRef(e);return wP(()=>{s.current=e},[e]),F.useEffect(()=>{var o;r.current!==n&&((o=s.current)==null||o.call(s,n),r.current=n)},[n,r]),[n,i,s]}function CP(t){return typeof t=="function"}var AP=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),RP="VisuallyHidden",up=F.forwardRef((t,e)=>M.jsx(bi.span,{...t,ref:e,style:{...AP,...t.style}}));up.displayName=RP;var dp="ToastProvider",[fp,PP,NP]=cP("Toast"),[X_,e3]=O_("Toast",[NP]),[LP,Xc]=X_(dp),j_=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:s=50,children:o}=t,[a,l]=F.useState(null),[c,f]=F.useState(0),h=F.useRef(!1),u=F.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${dp}\`. Expected non-empty \`string\`.`),M.jsx(fp.Provider,{scope:e,children:M.jsx(LP,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:F.useCallback(()=>f(m=>m+1),[]),onToastRemove:F.useCallback(()=>f(m=>m-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:u,children:o})})};j_.displayName=dp;var Y_="ToastViewport",DP=["F8"],qf="toast.viewportPause",Kf="toast.viewportResume",$_=F.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=DP,label:r="Notifications ({hotkey})",...s}=t,o=Xc(Y_,n),a=PP(n),l=F.useRef(null),c=F.useRef(null),f=F.useRef(null),h=F.useRef(null),u=qr(e,h,o.onViewportChange),m=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),v=o.toastCount>0;F.useEffect(()=>{const p=d=>{var E;i.length!==0&&i.every(_=>d[_]||d.code===_)&&((E=h.current)==null||E.focus())};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[i]),F.useEffect(()=>{const p=l.current,d=h.current;if(v&&p&&d){const g=()=>{if(!o.isClosePausedRef.current){const T=new CustomEvent(qf);d.dispatchEvent(T),o.isClosePausedRef.current=!0}},E=()=>{if(o.isClosePausedRef.current){const T=new CustomEvent(Kf);d.dispatchEvent(T),o.isClosePausedRef.current=!1}},_=T=>{!p.contains(T.relatedTarget)&&E()},b=()=>{p.contains(document.activeElement)||E()};return p.addEventListener("focusin",g),p.addEventListener("focusout",_),p.addEventListener("pointermove",g),p.addEventListener("pointerleave",b),window.addEventListener("blur",g),window.addEventListener("focus",E),()=>{p.removeEventListener("focusin",g),p.removeEventListener("focusout",_),p.removeEventListener("pointermove",g),p.removeEventListener("pointerleave",b),window.removeEventListener("blur",g),window.removeEventListener("focus",E)}}},[v,o.isClosePausedRef]);const S=F.useCallback(({tabbingDirection:p})=>{const g=a().map(E=>{const _=E.ref.current,b=[_,...jP(_)];return p==="forwards"?b:b.reverse()});return(p==="forwards"?g.reverse():g).flat()},[a]);return F.useEffect(()=>{const p=h.current;if(p){const d=g=>{var b,T,C;const E=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!E){const y=document.activeElement,R=g.shiftKey;if(g.target===p&&R){(b=c.current)==null||b.focus();return}const D=S({tabbingDirection:R?"backwards":"forwards"}),H=D.findIndex(N=>N===y);id(D.slice(H+1))?g.preventDefault():R?(T=c.current)==null||T.focus():(C=f.current)==null||C.focus()}};return p.addEventListener("keydown",d),()=>p.removeEventListener("keydown",d)}},[a,S]),M.jsxs(_P,{ref:l,role:"region","aria-label":r.replace("{hotkey}",m),tabIndex:-1,style:{pointerEvents:v?void 0:"none"},children:[v&&M.jsx(Zf,{ref:c,onFocusFromOutsideViewport:()=>{const p=S({tabbingDirection:"forwards"});id(p)}}),M.jsx(fp.Slot,{scope:n,children:M.jsx(bi.ol,{tabIndex:-1,...s,ref:u})}),v&&M.jsx(Zf,{ref:f,onFocusFromOutsideViewport:()=>{const p=S({tabbingDirection:"backwards"});id(p)}})]})});$_.displayName=Y_;var q_="ToastFocusProxy",Zf=F.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,s=Xc(q_,n);return M.jsx(up,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&i()}})});Zf.displayName=q_;var ba="Toast",IP="toast.swipeStart",UP="toast.swipeMove",FP="toast.swipeCancel",OP="toast.swipeEnd",K_=F.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:s,...o}=t,[a,l]=bP({prop:i,defaultProp:r??!0,onChange:s,caller:ba});return M.jsx(W_,{present:n||a,children:M.jsx(zP,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:Jr(t.onPause),onResume:Jr(t.onResume),onSwipeStart:Ln(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Ln(t.onSwipeMove,c=>{const{x:f,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:Ln(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Ln(t.onSwipeEnd,c=>{const{x:f,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),l(!1)})})})});K_.displayName=ba;var[kP,BP]=X_(ba,{onClose(){}}),zP=F.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:f,onSwipeMove:h,onSwipeCancel:u,onSwipeEnd:m,...v}=t,S=Xc(ba,n),[p,d]=F.useState(null),g=qr(e,N=>d(N)),E=F.useRef(null),_=F.useRef(null),b=r||S.duration,T=F.useRef(0),C=F.useRef(b),y=F.useRef(0),{onToastAdd:R,onToastRemove:A}=S,L=Jr(()=>{var k;(p==null?void 0:p.contains(document.activeElement))&&((k=S.viewport)==null||k.focus()),o()}),D=F.useCallback(N=>{!N||N===1/0||(window.clearTimeout(y.current),T.current=new Date().getTime(),y.current=window.setTimeout(L,N))},[L]);F.useEffect(()=>{const N=S.viewport;if(N){const k=()=>{D(C.current),c==null||c()},K=()=>{const j=new Date().getTime()-T.current;C.current=C.current-j,window.clearTimeout(y.current),l==null||l()};return N.addEventListener(qf,K),N.addEventListener(Kf,k),()=>{N.removeEventListener(qf,K),N.removeEventListener(Kf,k)}}},[S.viewport,b,l,c,D]),F.useEffect(()=>{s&&!S.isClosePausedRef.current&&D(b)},[s,b,S.isClosePausedRef,D]),F.useEffect(()=>(R(),()=>A()),[R,A]);const H=F.useMemo(()=>p?iy(p):null,[p]);return S.viewport?M.jsxs(M.Fragment,{children:[H&&M.jsx(VP,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:H}),M.jsx(kP,{scope:n,onClose:L,children:Ic.createPortal(M.jsx(fp.ItemSlot,{scope:n,children:M.jsx(xP,{asChild:!0,onEscapeKeyDown:Ln(a,()=>{S.isFocusedToastEscapeKeyDownRef.current||L(),S.isFocusedToastEscapeKeyDownRef.current=!1}),children:M.jsx(bi.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":S.swipeDirection,...v,ref:g,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:Ln(t.onKeyDown,N=>{N.key==="Escape"&&(a==null||a(N.nativeEvent),N.nativeEvent.defaultPrevented||(S.isFocusedToastEscapeKeyDownRef.current=!0,L()))}),onPointerDown:Ln(t.onPointerDown,N=>{N.button===0&&(E.current={x:N.clientX,y:N.clientY})}),onPointerMove:Ln(t.onPointerMove,N=>{if(!E.current)return;const k=N.clientX-E.current.x,K=N.clientY-E.current.y,j=!!_.current,B=["left","right"].includes(S.swipeDirection),z=["left","up"].includes(S.swipeDirection)?Math.min:Math.max,Y=B?z(0,k):0,Z=B?0:z(0,K),fe=N.pointerType==="touch"?10:2,_e={x:Y,y:Z},We={originalEvent:N,delta:_e};j?(_.current=_e,vl(UP,h,We,{discrete:!1})):e0(_e,S.swipeDirection,fe)?(_.current=_e,vl(IP,f,We,{discrete:!1}),N.target.setPointerCapture(N.pointerId)):(Math.abs(k)>fe||Math.abs(K)>fe)&&(E.current=null)}),onPointerUp:Ln(t.onPointerUp,N=>{const k=_.current,K=N.target;if(K.hasPointerCapture(N.pointerId)&&K.releasePointerCapture(N.pointerId),_.current=null,E.current=null,k){const j=N.currentTarget,B={originalEvent:N,delta:k};e0(k,S.swipeDirection,S.swipeThreshold)?vl(OP,m,B,{discrete:!0}):vl(FP,u,B,{discrete:!0}),j.addEventListener("click",z=>z.preventDefault(),{once:!0})}})})})}),S.viewport)})]}):null}),VP=t=>{const{__scopeToast:e,children:n,...i}=t,r=Xc(ba,e),[s,o]=F.useState(!1),[a,l]=F.useState(!1);return WP(()=>o(!0)),F.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:M.jsx(G_,{asChild:!0,children:M.jsx(up,{...i,children:s&&M.jsxs(M.Fragment,{children:[r.label," ",n]})})})},HP="ToastTitle",Z_=F.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return M.jsx(bi.div,{...i,ref:e})});Z_.displayName=HP;var GP="ToastDescription",Q_=F.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return M.jsx(bi.div,{...i,ref:e})});Q_.displayName=GP;var J_="ToastAction",ey=F.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?M.jsx(ny,{altText:n,asChild:!0,children:M.jsx(hp,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${J_}\`. Expected non-empty \`string\`.`),null)});ey.displayName=J_;var ty="ToastClose",hp=F.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=BP(ty,n);return M.jsx(ny,{asChild:!0,children:M.jsx(bi.button,{type:"button",...i,ref:e,onClick:Ln(t.onClick,r.onClose)})})});hp.displayName=ty;var ny=F.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return M.jsx(bi.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function iy(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),XP(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",s=i.dataset.radixToastAnnounceExclude==="";if(!r)if(s){const o=i.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...iy(i))}}),e}function vl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?k_(r,s):r.dispatchEvent(s)}var e0=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),s=i>r;return e==="left"||e==="right"?s&&i>n:!s&&r>n};function WP(t=()=>{}){const e=Jr(t);pa(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function XP(t){return t.nodeType===t.ELEMENT_NODE}function jP(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function id(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var YP=j_,ry=$_,sy=K_,oy=Z_,ay=Q_,ly=ey,cy=hp;const $P=YP,uy=F.forwardRef(({className:t,...e},n)=>M.jsx(ry,{ref:n,className:mn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));uy.displayName=ry.displayName;const qP=Ix("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),dy=F.forwardRef(({className:t,variant:e,...n},i)=>M.jsx(sy,{ref:i,className:mn(qP({variant:e}),t),...n}));dy.displayName=sy.displayName;const KP=F.forwardRef(({className:t,...e},n)=>M.jsx(ly,{ref:n,className:mn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",t),...e}));KP.displayName=ly.displayName;const fy=F.forwardRef(({className:t,...e},n)=>M.jsx(cy,{ref:n,className:mn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:M.jsx(kc,{className:"h-4 w-4"})}));fy.displayName=cy.displayName;const hy=F.forwardRef(({className:t,...e},n)=>M.jsx(oy,{ref:n,className:mn("text-sm font-semibold",t),...e}));hy.displayName=oy.displayName;const py=F.forwardRef(({className:t,...e},n)=>M.jsx(ay,{ref:n,className:mn("text-sm opacity-90",t),...e}));py.displayName=ay.displayName;function ZP(){const{toasts:t}=A_();return M.jsxs($P,{children:[t.map(function({id:e,title:n,description:i,action:r,...s}){return M.jsxs(dy,{...s,children:[M.jsxs("div",{className:"grid gap-1",children:[n&&M.jsx(hy,{children:n}),i&&M.jsx(py,{children:i})]}),r,M.jsx(fy,{})]},e)}),M.jsx(uy,{})]})}const QP=()=>M.jsx(UE,{basename:"/MyProtfolio",children:M.jsxs(M.Fragment,{children:[M.jsxs(LE,{children:[M.jsx(Qd,{path:"/",element:M.jsx(oP,{})}),M.jsx(Qd,{path:"*",element:M.jsx(aP,{})})]}),M.jsx(ZP,{})]})});mx(document.getElementById("root")).render(M.jsx(QP,{}));
