var Gy=Object.defineProperty;var Wy=(t,e,n)=>e in t?Gy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ke=(t,e,n)=>Wy(t,typeof e!="symbol"?e+"":e,n);function Xy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function w0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E0={exports:{}},Lc={},b0={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),jy=Symbol.for("react.portal"),Yy=Symbol.for("react.fragment"),$y=Symbol.for("react.strict_mode"),qy=Symbol.for("react.profiler"),Ky=Symbol.for("react.provider"),Zy=Symbol.for("react.context"),Qy=Symbol.for("react.forward_ref"),Jy=Symbol.for("react.suspense"),eS=Symbol.for("react.memo"),tS=Symbol.for("react.lazy"),jp=Symbol.iterator;function nS(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var T0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A0=Object.assign,C0={};function io(t,e,n){this.props=t,this.context=e,this.refs=C0,this.updater=n||T0}io.prototype.isReactComponent={};io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function R0(){}R0.prototype=io.prototype;function hh(t,e,n){this.props=t,this.context=e,this.refs=C0,this.updater=n||T0}var ph=hh.prototype=new R0;ph.constructor=hh;A0(ph,io.prototype);ph.isPureReactComponent=!0;var Yp=Array.isArray,P0=Object.prototype.hasOwnProperty,mh={current:null},N0={key:!0,ref:!0,__self:!0,__source:!0};function L0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)P0.call(e,i)&&!N0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ma,type:t,key:s,ref:o,props:r,_owner:mh.current}}function iS(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function rS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $p=/\/+/g;function ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rS(""+t.key):e.toString(36)}function Tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case jy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ou(o,0):i,Yp(r)?(n="",t!=null&&(n=t.replace($p,"$&/")+"/"),Tl(r,e,n,"",function(c){return c})):r!=null&&(gh(r)&&(r=iS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace($p,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Yp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ou(s,a);o+=Tl(s,e,n,l,r)}else if(l=nS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ou(s,a++),o+=Tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ra(t,e,n){if(t==null)return t;var i=[],r=0;return Tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function sS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Al={transition:null},oS={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Al,ReactCurrentOwner:mh};function D0(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Ra,forEach:function(t,e,n){Ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ra(t,function(){e++}),e},toArray:function(t){return Ra(t,function(e){return e})||[]},only:function(t){if(!gh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=io;$e.Fragment=Yy;$e.Profiler=qy;$e.PureComponent=hh;$e.StrictMode=$y;$e.Suspense=Jy;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;$e.act=D0;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=A0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)P0.call(e,l)&&!N0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ma,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:Zy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ky,_context:t},t.Consumer=t};$e.createElement=L0;$e.createFactory=function(t){var e=L0.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:Qy,render:t}};$e.isValidElement=gh;$e.lazy=function(t){return{$$typeof:tS,_payload:{_status:-1,_result:t},_init:sS}};$e.memo=function(t,e){return{$$typeof:eS,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};$e.unstable_act=D0;$e.useCallback=function(t,e){return pn.current.useCallback(t,e)};$e.useContext=function(t){return pn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return pn.current.useEffect(t,e)};$e.useId=function(){return pn.current.useId()};$e.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return pn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};$e.useRef=function(t){return pn.current.useRef(t)};$e.useState=function(t){return pn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return pn.current.useTransition()};$e.version="18.3.1";b0.exports=$e;var k=b0.exports;const sr=w0(k),I0=Xy({__proto__:null,default:sr},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aS=k,lS=Symbol.for("react.element"),cS=Symbol.for("react.fragment"),uS=Object.prototype.hasOwnProperty,dS=aS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fS={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)uS.call(e,i)&&!fS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lS,type:t,key:s,ref:o,props:r,_owner:dS.current}}Lc.Fragment=cS;Lc.jsx=U0;Lc.jsxs=U0;E0.exports=Lc;var M=E0.exports,F0={exports:{}},Bn={},O0={exports:{}},k0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,z){var D=H.length;H.push(z);e:for(;0<D;){var $=D-1>>>1,se=H[$];if(0<r(se,z))H[$]=z,H[D]=se,D=$;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var z=H[0],D=H.pop();if(D!==z){H[0]=D;e:for(var $=0,se=H.length,ce=se>>>1;$<ce;){var Ne=2*($+1)-1,Ue=H[Ne],Oe=Ne+1,Z=H[Oe];if(0>r(Ue,D))Oe<se&&0>r(Z,Ue)?(H[$]=Z,H[Oe]=D,$=Oe):(H[$]=Ue,H[Ne]=D,$=Ne);else if(Oe<se&&0>r(Z,D))H[$]=Z,H[Oe]=D,$=Oe;else break e}}return z}function r(H,z){var D=H.sortIndex-z.sortIndex;return D!==0?D:H.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(H){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=H)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function S(H){if(x=!1,w(H),!g)if(n(l)!==null)g=!0,Q(b);else{var z=n(c);z!==null&&Y(S,z.startTime-H)}}function b(H,z){g=!1,x&&(x=!1,f(_),_=-1),p=!0;var D=d;try{for(w(z),h=n(l);h!==null&&(!(h.expirationTime>z)||H&&!U());){var $=h.callback;if(typeof $=="function"){h.callback=null,d=h.priorityLevel;var se=$(h.expirationTime<=z);z=t.unstable_now(),typeof se=="function"?h.callback=se:h===n(l)&&i(l),w(z)}else i(l);h=n(l)}if(h!==null)var ce=!0;else{var Ne=n(c);Ne!==null&&Y(S,Ne.startTime-z),ce=!1}return ce}finally{h=null,d=D,p=!1}}var T=!1,A=null,_=-1,C=5,P=-1;function U(){return!(t.unstable_now()-P<C)}function F(){if(A!==null){var H=t.unstable_now();P=H;var z=!0;try{z=A(!0,H)}finally{z?W():(T=!1,A=null)}}else T=!1}var W;if(typeof v=="function")W=function(){v(F)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,V=N.port2;N.port1.onmessage=F,W=function(){V.postMessage(null)}}else W=function(){m(F,0)};function Q(H){A=H,T||(T=!0,W())}function Y(H,z){_=m(function(){H(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Q(b))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var D=d;d=z;try{return H()}finally{d=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var D=d;d=H;try{return z()}finally{d=D}},t.unstable_scheduleCallback=function(H,z,D){var $=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?$+D:$):D=$,H){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=D+se,H={id:u++,callback:z,priorityLevel:H,startTime:D,expirationTime:se,sortIndex:-1},D>$?(H.sortIndex=D,e(c,H),n(l)===null&&H===n(c)&&(x?(f(_),_=-1):x=!0,Y(S,D-$))):(H.sortIndex=se,e(l,H),g||p||(g=!0,Q(b))),H},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(H){var z=d;return function(){var D=d;d=z;try{return H.apply(this,arguments)}finally{d=D}}}})(k0);O0.exports=k0;var hS=O0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pS=k,kn=hS;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var B0=new Set,Xo={};function es(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(Xo[t]=e,t=0;t<e.length;t++)B0.add(e[t])}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=Object.prototype.hasOwnProperty,mS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qp={},Kp={};function gS(t){return _d.call(Kp,t)?!0:_d.call(qp,t)?!1:mS.test(t)?Kp[t]=!0:(qp[t]=!0,!1)}function vS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xS(t,e,n,i){if(e===null||typeof e>"u"||vS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var vh=/[\-:]([a-z])/g;function xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vh,xh);Yt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vh,xh);Yt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vh,xh);Yt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function _h(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xS(e,n,r,i)&&(n=null),i||r===null?gS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Yi=pS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),yh=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),V0=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Md=Symbol.for("react.suspense_list"),Mh=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),H0=Symbol.for("react.offscreen"),Zp=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,au;function Co(t){if(au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);au=e&&e[1]||""}return`
`+au+t}var lu=!1;function cu(t,e){if(!t||lu)return"";lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Co(t):""}function _S(t){switch(t.tag){case 5:return Co(t.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return t=cu(t.type,!1),t;case 11:return t=cu(t.type.render,!1),t;case 1:return t=cu(t.type,!0),t;default:return""}}function wd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case Ss:return"Portal";case yd:return"Profiler";case yh:return"StrictMode";case Sd:return"Suspense";case Md:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V0:return(t.displayName||"Context")+".Consumer";case z0:return(t._context.displayName||"Context")+".Provider";case Sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mh:return e=t.displayName||null,e!==null?e:wd(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return wd(t(e))}catch{}}return null}function yS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wd(e);case 8:return e===yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function G0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SS(t){var e=G0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Na(t){t._valueTracker||(t._valueTracker=SS(t))}function W0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=G0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ed(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function X0(t,e){e=e.checked,e!=null&&_h(t,"checked",e,!1)}function bd(t,e){X0(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Td(t,e.type,n):e.hasOwnProperty("defaultValue")&&Td(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Td(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function Us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function em(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Ro(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function j0(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function tm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Y0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Y0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var La,$0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MS=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){MS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function q0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function K0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=q0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var wS=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rd(t,e){if(e){if(wS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Pd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nd=null;function wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ld=null,Fs=null,Os=null;function nm(t){if(t=xa(t)){if(typeof Ld!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Oc(e),Ld(t.stateNode,t.type,e))}}function Z0(t){Fs?Os?Os.push(t):Os=[t]:Fs=t}function Q0(){if(Fs){var t=Fs,e=Os;if(Os=Fs=null,nm(t),e)for(t=0;t<e.length;t++)nm(e[t])}}function J0(t,e){return t(e)}function ev(){}var uu=!1;function tv(t,e,n){if(uu)return t(e,n);uu=!0;try{return J0(t,e,n)}finally{uu=!1,(Fs!==null||Os!==null)&&(ev(),Q0())}}function Yo(t,e){var n=t.stateNode;if(n===null)return null;var i=Oc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Dd=!1;if(Hi)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Dd=!1}function ES(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Uo=!1,Kl=null,Zl=!1,Id=null,bS={onError:function(t){Uo=!0,Kl=t}};function TS(t,e,n,i,r,s,o,a,l){Uo=!1,Kl=null,ES.apply(bS,arguments)}function AS(t,e,n,i,r,s,o,a,l){if(TS.apply(this,arguments),Uo){if(Uo){var c=Kl;Uo=!1,Kl=null}else throw Error(oe(198));Zl||(Zl=!0,Id=c)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function im(t){if(ts(t)!==t)throw Error(oe(188))}function CS(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return im(r),t;if(s===i)return im(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function iv(t){return t=CS(t),t!==null?rv(t):null}function rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rv(t);if(e!==null)return e;t=t.sibling}return null}var sv=kn.unstable_scheduleCallback,rm=kn.unstable_cancelCallback,RS=kn.unstable_shouldYield,PS=kn.unstable_requestPaint,Ct=kn.unstable_now,NS=kn.unstable_getCurrentPriorityLevel,Eh=kn.unstable_ImmediatePriority,ov=kn.unstable_UserBlockingPriority,Ql=kn.unstable_NormalPriority,LS=kn.unstable_LowPriority,av=kn.unstable_IdlePriority,Dc=null,_i=null;function DS(t){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(Dc,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:FS,IS=Math.log,US=Math.LN2;function FS(t){return t>>>=0,t===0?32:31-(IS(t)/US|0)|0}var Da=64,Ia=4194304;function Po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Po(a):(s&=o,s!==0&&(i=Po(s)))}else o=n&~r,o!==0?i=Po(o):s!==0&&(i=Po(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function OS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-oi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=OS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ud(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lv(){var t=Da;return Da<<=1,!(Da&4194240)&&(Da=64),t}function du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function BS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function cv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uv,Th,dv,fv,hv,Fd=!1,Ua=[],gr=null,vr=null,xr=null,$o=new Map,qo=new Map,cr=[],zS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sm(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function fo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&Th(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function VS(t,e,n,i,r){switch(e){case"focusin":return gr=fo(gr,t,e,n,i,r),!0;case"dragenter":return vr=fo(vr,t,e,n,i,r),!0;case"mouseover":return xr=fo(xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return $o.set(s,fo($o.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,qo.set(s,fo(qo.get(s)||null,t,e,n,i,r)),!0}return!1}function pv(t){var e=kr(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=nv(n),e!==null){t.blockedOn=e,hv(t.priority,function(){dv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nd=i,n.target.dispatchEvent(i),Nd=null}else return e=xa(n),e!==null&&Th(e),t.blockedOn=n,!1;e.shift()}return!0}function om(t,e,n){Cl(t)&&n.delete(e)}function HS(){Fd=!1,gr!==null&&Cl(gr)&&(gr=null),vr!==null&&Cl(vr)&&(vr=null),xr!==null&&Cl(xr)&&(xr=null),$o.forEach(om),qo.forEach(om)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,Fd||(Fd=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,HS)))}function Ko(t){function e(r){return ho(r,t)}if(0<Ua.length){ho(Ua[0],t);for(var n=1;n<Ua.length;n++){var i=Ua[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gr!==null&&ho(gr,t),vr!==null&&ho(vr,t),xr!==null&&ho(xr,t),$o.forEach(e),qo.forEach(e),n=0;n<cr.length;n++)i=cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)pv(n),n.blockedOn===null&&cr.shift()}var ks=Yi.ReactCurrentBatchConfig,ec=!0;function GS(t,e,n,i){var r=ot,s=ks.transition;ks.transition=null;try{ot=1,Ah(t,e,n,i)}finally{ot=r,ks.transition=s}}function WS(t,e,n,i){var r=ot,s=ks.transition;ks.transition=null;try{ot=4,Ah(t,e,n,i)}finally{ot=r,ks.transition=s}}function Ah(t,e,n,i){if(ec){var r=Od(t,e,n,i);if(r===null)Su(t,e,i,tc,n),sm(t,i);else if(VS(r,t,e,n,i))i.stopPropagation();else if(sm(t,i),e&4&&-1<zS.indexOf(t)){for(;r!==null;){var s=xa(r);if(s!==null&&uv(s),s=Od(t,e,n,i),s===null&&Su(t,e,i,tc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Su(t,e,i,null,n)}}var tc=null;function Od(t,e,n,i){if(tc=null,t=wh(i),t=kr(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=nv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tc=t,null}function mv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NS()){case Eh:return 1;case ov:return 4;case Ql:case LS:return 16;case av:return 536870912;default:return 16}default:return 16}}var fr=null,Ch=null,Rl=null;function gv(){if(Rl)return Rl;var t,e=Ch,n=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Rl=r.slice(t,1<i?1-i:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function am(){return!1}function zn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:am,this.isPropagationStopped=am,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rh=zn(ro),va=bt({},ro,{view:0,detail:0}),XS=zn(va),fu,hu,po,Ic=bt({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(fu=t.screenX-po.screenX,hu=t.screenY-po.screenY):hu=fu=0,po=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),lm=zn(Ic),jS=bt({},Ic,{dataTransfer:0}),YS=zn(jS),$S=bt({},va,{relatedTarget:0}),pu=zn($S),qS=bt({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),KS=zn(qS),ZS=bt({},ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),QS=zn(ZS),JS=bt({},ro,{data:0}),cm=zn(JS),eM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nM[t])?!!e[t]:!1}function Ph(){return iM}var rM=bt({},va,{key:function(t){if(t.key){var e=eM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sM=zn(rM),oM=bt({},Ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),um=zn(oM),aM=bt({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),lM=zn(aM),cM=bt({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),uM=zn(cM),dM=bt({},Ic,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fM=zn(dM),hM=[9,13,27,32],Nh=Hi&&"CompositionEvent"in window,Fo=null;Hi&&"documentMode"in document&&(Fo=document.documentMode);var pM=Hi&&"TextEvent"in window&&!Fo,vv=Hi&&(!Nh||Fo&&8<Fo&&11>=Fo),dm=" ",fm=!1;function xv(t,e){switch(t){case"keyup":return hM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _v(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function mM(t,e){switch(t){case"compositionend":return _v(e);case"keypress":return e.which!==32?null:(fm=!0,dm);case"textInput":return t=e.data,t===dm&&fm?null:t;default:return null}}function gM(t,e){if(ws)return t==="compositionend"||!Nh&&xv(t,e)?(t=gv(),Rl=Ch=fr=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vv&&e.locale!=="ko"?null:e.data;default:return null}}var vM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vM[t.type]:e==="textarea"}function yv(t,e,n,i){Z0(i),e=nc(e,"onChange"),0<e.length&&(n=new Rh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oo=null,Zo=null;function xM(t){Nv(t,0)}function Uc(t){var e=Ts(t);if(W0(e))return t}function _M(t,e){if(t==="change")return e}var Sv=!1;if(Hi){var mu;if(Hi){var gu="oninput"in document;if(!gu){var pm=document.createElement("div");pm.setAttribute("oninput","return;"),gu=typeof pm.oninput=="function"}mu=gu}else mu=!1;Sv=mu&&(!document.documentMode||9<document.documentMode)}function mm(){Oo&&(Oo.detachEvent("onpropertychange",Mv),Zo=Oo=null)}function Mv(t){if(t.propertyName==="value"&&Uc(Zo)){var e=[];yv(e,Zo,t,wh(t)),tv(xM,e)}}function yM(t,e,n){t==="focusin"?(mm(),Oo=e,Zo=n,Oo.attachEvent("onpropertychange",Mv)):t==="focusout"&&mm()}function SM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(Zo)}function MM(t,e){if(t==="click")return Uc(e)}function wM(t,e){if(t==="input"||t==="change")return Uc(e)}function EM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:EM;function Qo(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_d.call(e,r)||!li(t[r],e[r]))return!1}return!0}function gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vm(t,e){var n=gm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gm(n)}}function wv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ev(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bM(t){var e=Ev(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wv(n.ownerDocument.documentElement,n)){if(i!==null&&Lh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=vm(n,s);var o=vm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TM=Hi&&"documentMode"in document&&11>=document.documentMode,Es=null,kd=null,ko=null,Bd=!1;function xm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bd||Es==null||Es!==ql(i)||(i=Es,"selectionStart"in i&&Lh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ko&&Qo(ko,i)||(ko=i,i=nc(kd,"onSelect"),0<i.length&&(e=new Rh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function Oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bs={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},vu={},bv={};Hi&&(bv=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Fc(t){if(vu[t])return vu[t];if(!bs[t])return t;var e=bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bv)return vu[t]=e[n];return t}var Tv=Fc("animationend"),Av=Fc("animationiteration"),Cv=Fc("animationstart"),Rv=Fc("transitionend"),Pv=new Map,_m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){Pv.set(t,e),es(e,[t])}for(var xu=0;xu<_m.length;xu++){var _u=_m[xu],AM=_u.toLowerCase(),CM=_u[0].toUpperCase()+_u.slice(1);Ar(AM,"on"+CM)}Ar(Tv,"onAnimationEnd");Ar(Av,"onAnimationIteration");Ar(Cv,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(Rv,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RM=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function ym(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,AS(i,e,void 0,t),t.currentTarget=null}function Nv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ym(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ym(r,a,c),s=l}}}if(Zl)throw t=Id,Zl=!1,Id=null,t}function gt(t,e){var n=e[Wd];n===void 0&&(n=e[Wd]=new Set);var i=t+"__bubble";n.has(i)||(Lv(e,t,2,!1),n.add(i))}function yu(t,e,n){var i=0;e&&(i|=4),Lv(n,t,i,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function Jo(t){if(!t[ka]){t[ka]=!0,B0.forEach(function(n){n!=="selectionchange"&&(RM.has(n)||yu(n,!1,t),yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ka]||(e[ka]=!0,yu("selectionchange",!1,e))}}function Lv(t,e,n,i){switch(mv(e)){case 1:var r=GS;break;case 4:r=WS;break;default:r=Ah}n=r.bind(null,e,n,t),r=void 0,!Dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Su(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}tv(function(){var c=s,u=wh(n),h=[];e:{var d=Pv.get(t);if(d!==void 0){var p=Rh,g=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":p=sM;break;case"focusin":g="focus",p=pu;break;case"focusout":g="blur",p=pu;break;case"beforeblur":case"afterblur":p=pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=YS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=lM;break;case Tv:case Av:case Cv:p=KS;break;case Rv:p=uM;break;case"scroll":p=XS;break;case"wheel":p=fM;break;case"copy":case"cut":case"paste":p=QS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=um}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var v=c,w;v!==null;){w=v;var S=w.stateNode;if(w.tag===5&&S!==null&&(w=S,f!==null&&(S=Yo(v,f),S!=null&&x.push(ea(v,S,w)))),m)break;v=v.return}0<x.length&&(d=new p(d,g,null,n,u),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Nd&&(g=n.relatedTarget||n.fromElement)&&(kr(g)||g[Gi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?kr(g):null,g!==null&&(m=ts(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=lm,S="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=um,S="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:Ts(p),w=g==null?d:Ts(g),d=new x(S,v+"leave",p,n,u),d.target=m,d.relatedTarget=w,S=null,kr(u)===c&&(x=new x(f,v+"enter",g,n,u),x.target=w,x.relatedTarget=m,S=x),m=S,p&&g)t:{for(x=p,f=g,v=0,w=x;w;w=os(w))v++;for(w=0,S=f;S;S=os(S))w++;for(;0<v-w;)x=os(x),v--;for(;0<w-v;)f=os(f),w--;for(;v--;){if(x===f||f!==null&&x===f.alternate)break t;x=os(x),f=os(f)}x=null}else x=null;p!==null&&Sm(h,d,p,x,!1),g!==null&&m!==null&&Sm(h,m,g,x,!0)}}e:{if(d=c?Ts(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=_M;else if(hm(d))if(Sv)b=wM;else{b=SM;var T=yM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=MM);if(b&&(b=b(t,c))){yv(h,b,n,u);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Td(d,"number",d.value)}switch(T=c?Ts(c):window,t){case"focusin":(hm(T)||T.contentEditable==="true")&&(Es=T,kd=c,ko=null);break;case"focusout":ko=kd=Es=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,xm(h,n,u);break;case"selectionchange":if(TM)break;case"keydown":case"keyup":xm(h,n,u)}var A;if(Nh)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ws?xv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(vv&&n.locale!=="ko"&&(ws||_!=="onCompositionStart"?_==="onCompositionEnd"&&ws&&(A=gv()):(fr=u,Ch="value"in fr?fr.value:fr.textContent,ws=!0)),T=nc(c,_),0<T.length&&(_=new cm(_,t,null,n,u),h.push({event:_,listeners:T}),A?_.data=A:(A=_v(n),A!==null&&(_.data=A)))),(A=pM?mM(t,n):gM(t,n))&&(c=nc(c,"onBeforeInput"),0<c.length&&(u=new cm("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=A))}Nv(h,e)})}function ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Yo(t,n),s!=null&&i.unshift(ea(t,s,r)),s=Yo(t,e),s!=null&&i.push(ea(t,s,r))),t=t.return}return i}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Yo(n,s),l!=null&&o.unshift(ea(n,l,a))):r||(l=Yo(n,s),l!=null&&o.push(ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var PM=/\r\n?/g,NM=/\u0000|\uFFFD/g;function Mm(t){return(typeof t=="string"?t:""+t).replace(PM,`
`).replace(NM,"")}function Ba(t,e,n){if(e=Mm(e),Mm(t)!==e&&n)throw Error(oe(425))}function ic(){}var zd=null,Vd=null;function Hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gd=typeof setTimeout=="function"?setTimeout:void 0,LM=typeof clearTimeout=="function"?clearTimeout:void 0,wm=typeof Promise=="function"?Promise:void 0,DM=typeof queueMicrotask=="function"?queueMicrotask:typeof wm<"u"?function(t){return wm.resolve(null).then(t).catch(IM)}:Gd;function IM(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ko(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ko(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Em(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var so=Math.random().toString(36).slice(2),gi="__reactFiber$"+so,ta="__reactProps$"+so,Gi="__reactContainer$"+so,Wd="__reactEvents$"+so,UM="__reactListeners$"+so,FM="__reactHandles$"+so;function kr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gi]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Em(t);t!==null;){if(n=t[gi])return n;t=Em(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[gi]||t[Gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Oc(t){return t[ta]||null}var Xd=[],As=-1;function Cr(t){return{current:t}}function vt(t){0>As||(t.current=Xd[As],Xd[As]=null,As--)}function ht(t,e){As++,Xd[As]=t.current,t.current=e}var br={},ln=Cr(br),Sn=Cr(!1),Wr=br;function Ys(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function rc(){vt(Sn),vt(ln)}function bm(t,e,n){if(ln.current!==br)throw Error(oe(168));ht(ln,e),ht(Sn,n)}function Dv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,yS(t)||"Unknown",r));return bt({},n,i)}function sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,Wr=ln.current,ht(ln,t),ht(Sn,Sn.current),!0}function Tm(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Dv(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,vt(Sn),vt(ln),ht(ln,t)):vt(Sn),ht(Sn,n)}var Di=null,kc=!1,wu=!1;function Iv(t){Di===null?Di=[t]:Di.push(t)}function OM(t){kc=!0,Iv(t)}function Rr(){if(!wu&&Di!==null){wu=!0;var t=0,e=ot;try{var n=Di;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Di=null,kc=!1}catch(r){throw Di!==null&&(Di=Di.slice(t+1)),sv(Eh,Rr),r}finally{ot=e,wu=!1}}return null}var Cs=[],Rs=0,oc=null,ac=0,Gn=[],Wn=0,Xr=null,Ui=1,Fi="";function Fr(t,e){Cs[Rs++]=ac,Cs[Rs++]=oc,oc=t,ac=e}function Uv(t,e,n){Gn[Wn++]=Ui,Gn[Wn++]=Fi,Gn[Wn++]=Xr,Xr=t;var i=Ui;t=Fi;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ui=1<<32-oi(e)+r|n<<r|i,Fi=s+t}else Ui=1<<s|n<<r|i,Fi=t}function Dh(t){t.return!==null&&(Fr(t,1),Uv(t,1,0))}function Ih(t){for(;t===oc;)oc=Cs[--Rs],Cs[Rs]=null,ac=Cs[--Rs],Cs[Rs]=null;for(;t===Xr;)Xr=Gn[--Wn],Gn[Wn]=null,Fi=Gn[--Wn],Gn[Wn]=null,Ui=Gn[--Wn],Gn[Wn]=null}var Fn=null,Un=null,yt=!1,ri=null;function Fv(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Am(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fn=t,Un=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fn=t,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Ui,overflow:Fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fn=t,Un=null,!0):!1;default:return!1}}function jd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yd(t){if(yt){var e=Un;if(e){var n=e;if(!Am(t,e)){if(jd(t))throw Error(oe(418));e=_r(n.nextSibling);var i=Fn;e&&Am(t,e)?Fv(i,n):(t.flags=t.flags&-4097|2,yt=!1,Fn=t)}}else{if(jd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,yt=!1,Fn=t}}}function Cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function za(t){if(t!==Fn)return!1;if(!yt)return Cm(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hd(t.type,t.memoizedProps)),e&&(e=Un)){if(jd(t))throw Ov(),Error(oe(418));for(;e;)Fv(t,e),e=_r(e.nextSibling)}if(Cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Un=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Un=null}}else Un=Fn?_r(t.stateNode.nextSibling):null;return!0}function Ov(){for(var t=Un;t;)t=_r(t.nextSibling)}function $s(){Un=Fn=null,yt=!1}function Uh(t){ri===null?ri=[t]:ri.push(t)}var kM=Yi.ReactCurrentBatchConfig;function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rm(t){var e=t._init;return e(t._payload)}function kv(t){function e(f,v){if(t){var w=f.deletions;w===null?(f.deletions=[v],f.flags|=16):w.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=wr(f,v),f.index=0,f.sibling=null,f}function s(f,v,w){return f.index=w,t?(w=f.alternate,w!==null?(w=w.index,w<v?(f.flags|=2,v):w):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,w,S){return v===null||v.tag!==6?(v=Pu(w,f.mode,S),v.return=f,v):(v=r(v,w),v.return=f,v)}function l(f,v,w,S){var b=w.type;return b===Ms?u(f,v,w.props.children,S,w.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===or&&Rm(b)===v.type)?(S=r(v,w.props),S.ref=mo(f,v,w),S.return=f,S):(S=Ol(w.type,w.key,w.props,null,f.mode,S),S.ref=mo(f,v,w),S.return=f,S)}function c(f,v,w,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=Nu(w,f.mode,S),v.return=f,v):(v=r(v,w.children||[]),v.return=f,v)}function u(f,v,w,S,b){return v===null||v.tag!==7?(v=Gr(w,f.mode,S,b),v.return=f,v):(v=r(v,w),v.return=f,v)}function h(f,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Pu(""+v,f.mode,w),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pa:return w=Ol(v.type,v.key,v.props,null,f.mode,w),w.ref=mo(f,null,v),w.return=f,w;case Ss:return v=Nu(v,f.mode,w),v.return=f,v;case or:var S=v._init;return h(f,S(v._payload),w)}if(Ro(v)||co(v))return v=Gr(v,f.mode,w,null),v.return=f,v;Va(f,v)}return null}function d(f,v,w,S){var b=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return b!==null?null:a(f,v,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Pa:return w.key===b?l(f,v,w,S):null;case Ss:return w.key===b?c(f,v,w,S):null;case or:return b=w._init,d(f,v,b(w._payload),S)}if(Ro(w)||co(w))return b!==null?null:u(f,v,w,S,null);Va(f,w)}return null}function p(f,v,w,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(w)||null,a(v,f,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Pa:return f=f.get(S.key===null?w:S.key)||null,l(v,f,S,b);case Ss:return f=f.get(S.key===null?w:S.key)||null,c(v,f,S,b);case or:var T=S._init;return p(f,v,w,T(S._payload),b)}if(Ro(S)||co(S))return f=f.get(w)||null,u(v,f,S,b,null);Va(v,S)}return null}function g(f,v,w,S){for(var b=null,T=null,A=v,_=v=0,C=null;A!==null&&_<w.length;_++){A.index>_?(C=A,A=null):C=A.sibling;var P=d(f,A,w[_],S);if(P===null){A===null&&(A=C);break}t&&A&&P.alternate===null&&e(f,A),v=s(P,v,_),T===null?b=P:T.sibling=P,T=P,A=C}if(_===w.length)return n(f,A),yt&&Fr(f,_),b;if(A===null){for(;_<w.length;_++)A=h(f,w[_],S),A!==null&&(v=s(A,v,_),T===null?b=A:T.sibling=A,T=A);return yt&&Fr(f,_),b}for(A=i(f,A);_<w.length;_++)C=p(A,f,_,w[_],S),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?_:C.key),v=s(C,v,_),T===null?b=C:T.sibling=C,T=C);return t&&A.forEach(function(U){return e(f,U)}),yt&&Fr(f,_),b}function x(f,v,w,S){var b=co(w);if(typeof b!="function")throw Error(oe(150));if(w=b.call(w),w==null)throw Error(oe(151));for(var T=b=null,A=v,_=v=0,C=null,P=w.next();A!==null&&!P.done;_++,P=w.next()){A.index>_?(C=A,A=null):C=A.sibling;var U=d(f,A,P.value,S);if(U===null){A===null&&(A=C);break}t&&A&&U.alternate===null&&e(f,A),v=s(U,v,_),T===null?b=U:T.sibling=U,T=U,A=C}if(P.done)return n(f,A),yt&&Fr(f,_),b;if(A===null){for(;!P.done;_++,P=w.next())P=h(f,P.value,S),P!==null&&(v=s(P,v,_),T===null?b=P:T.sibling=P,T=P);return yt&&Fr(f,_),b}for(A=i(f,A);!P.done;_++,P=w.next())P=p(A,f,_,P.value,S),P!==null&&(t&&P.alternate!==null&&A.delete(P.key===null?_:P.key),v=s(P,v,_),T===null?b=P:T.sibling=P,T=P);return t&&A.forEach(function(F){return e(f,F)}),yt&&Fr(f,_),b}function m(f,v,w,S){if(typeof w=="object"&&w!==null&&w.type===Ms&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Pa:e:{for(var b=w.key,T=v;T!==null;){if(T.key===b){if(b=w.type,b===Ms){if(T.tag===7){n(f,T.sibling),v=r(T,w.props.children),v.return=f,f=v;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===or&&Rm(b)===T.type){n(f,T.sibling),v=r(T,w.props),v.ref=mo(f,T,w),v.return=f,f=v;break e}n(f,T);break}else e(f,T);T=T.sibling}w.type===Ms?(v=Gr(w.props.children,f.mode,S,w.key),v.return=f,f=v):(S=Ol(w.type,w.key,w.props,null,f.mode,S),S.ref=mo(f,v,w),S.return=f,f=S)}return o(f);case Ss:e:{for(T=w.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(f,v.sibling),v=r(v,w.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=Nu(w,f.mode,S),v.return=f,f=v}return o(f);case or:return T=w._init,m(f,v,T(w._payload),S)}if(Ro(w))return g(f,v,w,S);if(co(w))return x(f,v,w,S);Va(f,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,w),v.return=f,f=v):(n(f,v),v=Pu(w,f.mode,S),v.return=f,f=v),o(f)):n(f,v)}return m}var qs=kv(!0),Bv=kv(!1),lc=Cr(null),cc=null,Ps=null,Fh=null;function Oh(){Fh=Ps=cc=null}function kh(t){var e=lc.current;vt(lc),t._currentValue=e}function $d(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){cc=t,Fh=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(Fh!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(cc===null)throw Error(oe(308));Ps=t,cc.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Br=null;function Bh(t){Br===null?Br=[t]:Br.push(t)}function zv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Bh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Wi(t,i)}function Wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(t,n)}return r=i.interleaved,r===null?(e.next=e,Bh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}function Pm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uc(t,e,n,i){var r=t.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(d=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=bt({},h,d);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=h}}function Nm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var _a={},yi=Cr(_a),na=Cr(_a),ia=Cr(_a);function zr(t){if(t===_a)throw Error(oe(174));return t}function Vh(t,e){switch(ht(ia,e),ht(na,t),ht(yi,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cd(e,t)}vt(yi),ht(yi,e)}function Ks(){vt(yi),vt(na),vt(ia)}function Hv(t){zr(ia.current);var e=zr(yi.current),n=Cd(e,t.type);e!==n&&(ht(na,t),ht(yi,n))}function Hh(t){na.current===t&&(vt(yi),vt(na))}var Mt=Cr(0);function dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Eu=[];function Gh(){for(var t=0;t<Eu.length;t++)Eu[t]._workInProgressVersionPrimary=null;Eu.length=0}var Ll=Yi.ReactCurrentDispatcher,bu=Yi.ReactCurrentBatchConfig,jr=0,Et=null,It=null,Vt=null,fc=!1,Bo=!1,ra=0,BM=0;function Kt(){throw Error(oe(321))}function Wh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function Xh(t,e,n,i,r,s){if(jr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?GM:WM,t=n(i,r),Bo){s=0;do{if(Bo=!1,ra=0,25<=s)throw Error(oe(301));s+=1,Vt=It=null,e.updateQueue=null,Ll.current=XM,t=n(i,r)}while(Bo)}if(Ll.current=hc,e=It!==null&&It.next!==null,jr=0,Vt=It=Et=null,fc=!1,e)throw Error(oe(300));return t}function jh(){var t=ra!==0;return ra=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Et.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Kn(){if(It===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Vt===null?Et.memoizedState:Vt.next;if(e!==null)Vt=e,It=t;else{if(t===null)throw Error(oe(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Vt===null?Et.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function sa(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=Kn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((jr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Et.lanes|=u,Yr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,li(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Au(t){var e=Kn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);li(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Gv(){}function Wv(t,e){var n=Et,i=Kn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,Yh(Yv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,oa(9,jv.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(oe(349));jr&30||Xv(n,e,r)}return r}function Xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jv(t,e,n,i){e.value=n,e.getSnapshot=i,$v(e)&&qv(t)}function Yv(t,e,n){return n(function(){$v(e)&&qv(t)})}function $v(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function qv(t){var e=Wi(t,1);e!==null&&ai(e,t,1,-1)}function Lm(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e.queue=t,t=t.dispatch=HM.bind(null,Et,t),[e.memoizedState,t]}function oa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Kv(){return Kn().memoizedState}function Dl(t,e,n,i){var r=pi();Et.flags|=t,r.memoizedState=oa(1|e,n,void 0,i===void 0?null:i)}function Bc(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&Wh(i,o.deps)){r.memoizedState=oa(e,n,s,i);return}}Et.flags|=t,r.memoizedState=oa(1|e,n,s,i)}function Dm(t,e){return Dl(8390656,8,t,e)}function Yh(t,e){return Bc(2048,8,t,e)}function Zv(t,e){return Bc(4,2,t,e)}function Qv(t,e){return Bc(4,4,t,e)}function Jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ex(t,e,n){return n=n!=null?n.concat([t]):null,Bc(4,4,Jv.bind(null,e,t),n)}function $h(){}function tx(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function nx(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ix(t,e,n){return jr&21?(li(n,e)||(n=lv(),Et.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function zM(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=bu.transition;bu.transition={};try{t(!1),e()}finally{ot=n,bu.transition=i}}function rx(){return Kn().memoizedState}function VM(t,e,n){var i=Mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},sx(t))ox(e,n);else if(n=zv(t,e,n,i),n!==null){var r=fn();ai(n,t,i,r),ax(n,e,i)}}function HM(t,e,n){var i=Mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(sx(t))ox(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,li(a,o)){var l=e.interleaved;l===null?(r.next=r,Bh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=zv(t,e,r,i),n!==null&&(r=fn(),ai(n,t,i,r),ax(n,e,i))}}function sx(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function ox(t,e){Bo=fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ax(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}var hc={readContext:qn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},GM={readContext:qn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:Dm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4194308,4,Jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dl(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=VM.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:Lm,useDebugValue:$h,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=Lm(!1),e=t[0];return t=zM.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=pi();if(yt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Ht===null)throw Error(oe(349));jr&30||Xv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Dm(Yv.bind(null,i,s,t),[t]),i.flags|=2048,oa(9,jv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=Ht.identifierPrefix;if(yt){var n=Fi,i=Ui;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WM={readContext:qn,useCallback:tx,useContext:qn,useEffect:Yh,useImperativeHandle:ex,useInsertionEffect:Zv,useLayoutEffect:Qv,useMemo:nx,useReducer:Tu,useRef:Kv,useState:function(){return Tu(sa)},useDebugValue:$h,useDeferredValue:function(t){var e=Kn();return ix(e,It.memoizedState,t)},useTransition:function(){var t=Tu(sa)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:Gv,useSyncExternalStore:Wv,useId:rx,unstable_isNewReconciler:!1},XM={readContext:qn,useCallback:tx,useContext:qn,useEffect:Yh,useImperativeHandle:ex,useInsertionEffect:Zv,useLayoutEffect:Qv,useMemo:nx,useReducer:Au,useRef:Kv,useState:function(){return Au(sa)},useDebugValue:$h,useDeferredValue:function(t){var e=Kn();return It===null?e.memoizedState=t:ix(e,It.memoizedState,t)},useTransition:function(){var t=Au(sa)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:Gv,useSyncExternalStore:Wv,useId:rx,unstable_isNewReconciler:!1};function ni(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zc={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Mr(t),s=zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ai(e,t,r,i),Nl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Mr(t),s=zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ai(e,t,r,i),Nl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=Mr(t),r=zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=yr(t,r,i),e!==null&&(ai(e,t,i,n),Nl(e,t,i))}};function Im(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qo(n,i)||!Qo(r,s):!0}function lx(t,e,n){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=Mn(e)?Wr:ln.current,i=e.contextTypes,s=(i=i!=null)?Ys(t,r):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Um(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&zc.enqueueReplaceState(e,e.state,null)}function Kd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},zh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=Mn(e)?Wr:ln.current,r.context=Ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&zc.enqueueReplaceState(r,r.state,null),uc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=_S(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jM=typeof WeakMap=="function"?WeakMap:Map;function cx(t,e,n){n=zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){mc||(mc=!0,lf=i),Zd(t,e)},n}function ux(t,e,n){n=zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Zd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zd(t,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new jM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ow.bind(null,t,e,n),e.then(t,t))}function Om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function km(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zi(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var YM=Yi.ReactCurrentOwner,yn=!1;function dn(t,e,n,i){e.child=t===null?Bv(e,null,n,i):qs(e,t.child,n,i)}function Bm(t,e,n,i,r){n=n.render;var s=e.ref;return Bs(e,r),i=Xh(t,e,n,i,s,r),n=jh(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(yt&&n&&Dh(e),e.flags|=1,dn(t,e,i,r),e.child)}function zm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dx(t,e,s,i,r)):(t=Ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(o,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function dx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Qo(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return Qd(t,e,n,i,r)}function fx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Ls,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Ls,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Ls,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Ls,Pn),Pn|=i;return dn(t,e,r,n),e.child}function hx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qd(t,e,n,i,r){var s=Mn(n)?Wr:ln.current;return s=Ys(e,s),Bs(e,r),n=Xh(t,e,n,i,s,r),i=jh(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(yt&&i&&Dh(e),e.flags|=1,dn(t,e,n,r),e.child)}function Vm(t,e,n,i,r){if(Mn(n)){var s=!0;sc(e)}else s=!1;if(Bs(e,r),e.stateNode===null)Il(t,e),lx(e,n,i),Kd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=Mn(n)?Wr:ln.current,c=Ys(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Um(e,o,i,c),ar=!1;var d=e.memoizedState;o.state=d,uc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Sn.current||ar?(typeof u=="function"&&(qd(e,n,u,i),l=e.memoizedState),(a=ar||Im(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Vv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ni(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=Mn(n)?Wr:ln.current,l=Ys(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Um(e,o,i,l),ar=!1,d=e.memoizedState,o.state=d,uc(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||Sn.current||ar?(typeof p=="function"&&(qd(e,n,p,i),g=e.memoizedState),(c=ar||Im(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Jd(t,e,n,i,s,r)}function Jd(t,e,n,i,r,s){hx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Tm(e,n,!1),Xi(t,e,s);i=e.stateNode,YM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):dn(t,e,a,s),e.memoizedState=i.state,r&&Tm(e,n,!0),e.child}function px(t){var e=t.stateNode;e.pendingContext?bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bm(t,e.context,!1),Vh(t,e.containerInfo)}function Hm(t,e,n,i,r){return $s(),Uh(r),e.flags|=256,dn(t,e,n,i),e.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function mx(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(Mt,r&1),t===null)return Yd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tf(n),e.memoizedState=ef,t):qh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $M(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ef,i}return s=t.child,t=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function qh(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ha(t,e,n,i){return i!==null&&Uh(i),qs(e,t.child,null,n),t=qh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $M(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Cu(Error(oe(422))),Ha(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gc({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=tf(o),e.memoizedState=ef,s);if(!(e.mode&1))return Ha(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=Cu(s,i,void 0),Ha(t,e,o,i)}if(a=(o&t.childLanes)!==0,yn||a){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(t,r),ai(i,t,r,-1))}return tp(),i=Cu(Error(oe(421))),Ha(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=aw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Un=_r(r.nextSibling),Fn=e,yt=!0,ri=null,t!==null&&(Gn[Wn++]=Ui,Gn[Wn++]=Fi,Gn[Wn++]=Xr,Ui=t.id,Fi=t.overflow,Xr=e),e=qh(e,i.children),e.flags|=4096,e)}function Gm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$d(t.return,e,n)}function Ru(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function gx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gm(t,n,e);else if(t.tag===19)Gm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&dc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ru(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&dc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ru(e,!0,n,null,s);break;case"together":Ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qM(t,e,n){switch(e.tag){case 3:px(e),$s();break;case 5:Hv(e);break;case 1:Mn(e.type)&&sc(e);break;case 4:Vh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?mx(t,e,n):(ht(Mt,Mt.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);ht(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return gx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,fx(t,e,n)}return Xi(t,e,n)}var vx,nf,xx,_x;vx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nf=function(){};xx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(yi.current);var s=null;switch(n){case"input":r=Ed(t,r),i=Ed(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=Ad(t,r),i=Ad(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ic)}Rd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};_x=function(t,e,n,i){n!==i&&(e.flags|=4)};function go(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function KM(t,e,n){var i=e.pendingProps;switch(Ih(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return Mn(e.type)&&rc(),Zt(e),null;case 3:return i=e.stateNode,Ks(),vt(Sn),vt(ln),Gh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(df(ri),ri=null))),nf(t,e),Zt(e),null;case 5:Hh(e);var r=zr(ia.current);if(n=e.type,t!==null&&e.stateNode!=null)xx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Zt(e),null}if(t=zr(yi.current),za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[ta]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<No.length;r++)gt(No[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Qp(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":em(i,s),gt("invalid",i)}Rd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ba(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ba(i.textContent,a,t),r=["children",""+a]):Xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":Na(i),Jp(i,s,!0);break;case"textarea":Na(i),tm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ic)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Y0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[gi]=e,t[ta]=i,vx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pd(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<No.length;r++)gt(No[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":Qp(t,i),r=Ed(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":em(t,i),r=Ad(t,i),gt("invalid",t);break;default:r=i}Rd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?K0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jo(t,l):typeof l=="number"&&jo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&_h(t,s,l,o))}switch(n){case"input":Na(t),Jp(t,i,!1);break;case"textarea":Na(t),tm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Us(t,!!i.multiple,s,!1):i.defaultValue!=null&&Us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ic)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)_x(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=zr(ia.current),zr(yi.current),za(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=Fn,t!==null))switch(t.tag){case 3:Ba(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ba(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return Zt(e),null;case 13:if(vt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Un!==null&&e.mode&1&&!(e.flags&128))Ov(),$s(),e.flags|=98560,s=!1;else if(s=za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[gi]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else ri!==null&&(df(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Ft===0&&(Ft=3):tp())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Ks(),nf(t,e),t===null&&Jo(e.stateNode.containerInfo),Zt(e),null;case 10:return kh(e.type._context),Zt(e),null;case 17:return Mn(e.type)&&rc(),Zt(e),null;case 19:if(vt(Mt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)go(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dc(t),o!==null){for(e.flags|=128,go(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>Qs&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304)}else{if(!i)if(t=dc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return Zt(e),null}else 2*Ct()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=Mt.current,ht(Mt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return ep(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function ZM(t,e){switch(Ih(e),e.tag){case 1:return Mn(e.type)&&rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),vt(Sn),vt(ln),Gh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hh(e),null;case 13:if(vt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(Mt),null;case 4:return Ks(),null;case 10:return kh(e.type._context),null;case 22:case 23:return ep(),null;case 24:return null;default:return null}}var Ga=!1,tn=!1,QM=typeof WeakSet=="function"?WeakSet:Set,we=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function rf(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Wm=!1;function JM(t,e){if(zd=ec,t=Ev(),Lh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vd={focusedElem:t,selectionRange:n},ec=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:ni(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return g=Wm,Wm=!1,g}function zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rf(e,n,s)}r=r.next}while(r!==i)}}function Vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yx(t){var e=t.alternate;e!==null&&(t.alternate=null,yx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[ta],delete e[Wd],delete e[UM],delete e[FM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sx(t){return t.tag===5||t.tag===3||t.tag===4}function Xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ic));else if(i!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}function af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var Gt=null,ii=!1;function Zi(t,e,n){for(n=n.child;n!==null;)Mx(t,e,n),n=n.sibling}function Mx(t,e,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(Dc,n)}catch{}switch(n.tag){case 5:tn||Ns(n,e);case 6:var i=Gt,r=ii;Gt=null,Zi(t,e,n),Gt=i,ii=r,Gt!==null&&(ii?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(ii?(t=Gt,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),Ko(t)):Mu(Gt,n.stateNode));break;case 4:i=Gt,r=ii,Gt=n.stateNode.containerInfo,ii=!0,Zi(t,e,n),Gt=i,ii=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rf(n,e,o),r=r.next}while(r!==i)}Zi(t,e,n);break;case 1:if(!tn&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Zi(t,e,n);break;case 21:Zi(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,Zi(t,e,n),tn=i):Zi(t,e,n);break;default:Zi(t,e,n)}}function jm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new QM),e.forEach(function(i){var r=lw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,ii=!1;break e;case 3:Gt=a.stateNode.containerInfo,ii=!0;break e;case 4:Gt=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(Gt===null)throw Error(oe(160));Mx(s,o,r),Gt=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wx(e,t),e=e.sibling}function wx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),di(t),i&4){try{zo(3,t,t.return),Vc(3,t)}catch(x){Tt(t,t.return,x)}try{zo(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:Qn(e,t),di(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(Qn(e,t),di(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{jo(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&X0(r,s),Pd(a,o);var c=Pd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?K0(r,h):u==="dangerouslySetInnerHTML"?$0(r,h):u==="children"?jo(r,h):_h(r,u,h,c)}switch(a){case"input":bd(r,s);break;case"textarea":j0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Us(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Us(r,!!s.multiple,s.defaultValue,!0):Us(r,!!s.multiple,s.multiple?[]:"",!1))}r[ta]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(Qn(e,t),di(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(Qn(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ko(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:Qn(e,t),di(t);break;case 13:Qn(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Qh=Ct())),i&4&&jm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||u,Qn(e,t),tn=c):Qn(e,t),di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(we=t,u=t.child;u!==null;){for(h=we=u;we!==null;){switch(d=we,p=d.child,d.tag){case 0:case 11:case 14:case 15:zo(4,d,d.return);break;case 1:Ns(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:Ns(d,d.return);break;case 22:if(d.memoizedState!==null){$m(h);continue}}p!==null?(p.return=d,we=p):$m(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=q0("display",o))}catch(x){Tt(t,t.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Qn(e,t),di(t),i&4&&jm(t);break;case 21:break;default:Qn(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sx(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(jo(r,""),i.flags&=-33);var s=Xm(t);af(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Xm(t);of(t,a,o);break;default:throw Error(oe(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ew(t,e,n){we=t,Ex(t)}function Ex(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=Ga;var c=tn;if(Ga=o,(tn=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?qm(r):l!==null?(l.return=o,we=l):qm(r);for(;s!==null;)we=s,Ex(s),s=s.sibling;we=r,Ga=a,tn=c}Ym(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):Ym(t)}}function Ym(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||Vc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Ko(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}tn||e.flags&512&&sf(e)}catch(d){Tt(e,e.return,d)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function $m(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function qm(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{sf(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{sf(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var tw=Math.ceil,pc=Yi.ReactCurrentDispatcher,Kh=Yi.ReactCurrentOwner,Yn=Yi.ReactCurrentBatchConfig,Je=0,Ht=null,Lt=null,jt=0,Pn=0,Ls=Cr(0),Ft=0,aa=null,Yr=0,Hc=0,Zh=0,Vo=null,_n=null,Qh=0,Qs=1/0,Ni=null,mc=!1,lf=null,Sr=null,Wa=!1,hr=null,gc=0,Ho=0,cf=null,Ul=-1,Fl=0;function fn(){return Je&6?Ct():Ul!==-1?Ul:Ul=Ct()}function Mr(t){return t.mode&1?Je&2&&jt!==0?jt&-jt:kM.transition!==null?(Fl===0&&(Fl=lv()),Fl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:mv(t.type)),t):1}function ai(t,e,n,i){if(50<Ho)throw Ho=0,cf=null,Error(oe(185));ga(t,n,i),(!(Je&2)||t!==Ht)&&(t===Ht&&(!(Je&2)&&(Hc|=n),Ft===4&&ur(t,jt)),wn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Qs=Ct()+500,kc&&Rr()))}function wn(t,e){var n=t.callbackNode;kS(t,e);var i=Jl(t,t===Ht?jt:0);if(i===0)n!==null&&rm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&rm(n),e===1)t.tag===0?OM(Km.bind(null,t)):Iv(Km.bind(null,t)),DM(function(){!(Je&6)&&Rr()}),n=null;else{switch(cv(i)){case 1:n=Eh;break;case 4:n=ov;break;case 16:n=Ql;break;case 536870912:n=av;break;default:n=Ql}n=Lx(n,bx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bx(t,e){if(Ul=-1,Fl=0,Je&6)throw Error(oe(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var i=Jl(t,t===Ht?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vc(t,i);else{e=i;var r=Je;Je|=2;var s=Ax();(Ht!==t||jt!==e)&&(Ni=null,Qs=Ct()+500,Hr(t,e));do try{rw();break}catch(a){Tx(t,a)}while(!0);Oh(),pc.current=s,Je=r,Lt!==null?e=0:(Ht=null,jt=0,e=Ft)}if(e!==0){if(e===2&&(r=Ud(t),r!==0&&(i=r,e=uf(t,r))),e===1)throw n=aa,Hr(t,0),ur(t,i),wn(t,Ct()),n;if(e===6)ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!nw(r)&&(e=vc(t,i),e===2&&(s=Ud(t),s!==0&&(i=s,e=uf(t,s))),e===1))throw n=aa,Hr(t,0),ur(t,i),wn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Or(t,_n,Ni);break;case 3:if(ur(t,i),(i&130023424)===i&&(e=Qh+500-Ct(),10<e)){if(Jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gd(Or.bind(null,t,_n,Ni),e);break}Or(t,_n,Ni);break;case 4:if(ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-oi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tw(i/1960))-i,10<i){t.timeoutHandle=Gd(Or.bind(null,t,_n,Ni),i);break}Or(t,_n,Ni);break;case 5:Or(t,_n,Ni);break;default:throw Error(oe(329))}}}return wn(t,Ct()),t.callbackNode===n?bx.bind(null,t):null}function uf(t,e){var n=Vo;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=vc(t,e),t!==2&&(e=_n,_n=n,e!==null&&df(e)),t}function df(t){_n===null?_n=t:_n.push.apply(_n,t)}function nw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~Zh,e&=~Hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function Km(t){if(Je&6)throw Error(oe(327));zs();var e=Jl(t,0);if(!(e&1))return wn(t,Ct()),null;var n=vc(t,e);if(t.tag!==0&&n===2){var i=Ud(t);i!==0&&(e=i,n=uf(t,i))}if(n===1)throw n=aa,Hr(t,0),ur(t,e),wn(t,Ct()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,_n,Ni),wn(t,Ct()),null}function Jh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Qs=Ct()+500,kc&&Rr())}}function $r(t){hr!==null&&hr.tag===0&&!(Je&6)&&zs();var e=Je;Je|=1;var n=Yn.transition,i=ot;try{if(Yn.transition=null,ot=1,t)return t()}finally{ot=i,Yn.transition=n,Je=e,!(Je&6)&&Rr()}}function ep(){Pn=Ls.current,vt(Ls)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LM(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Ih(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&rc();break;case 3:Ks(),vt(Sn),vt(ln),Gh();break;case 5:Hh(i);break;case 4:Ks();break;case 13:vt(Mt);break;case 19:vt(Mt);break;case 10:kh(i.type._context);break;case 22:case 23:ep()}n=n.return}if(Ht=t,Lt=t=wr(t.current,null),jt=Pn=e,Ft=0,aa=null,Zh=Hc=Yr=0,_n=Vo=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Br=null}return t}function Tx(t,e){do{var n=Lt;try{if(Oh(),Ll.current=hc,fc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fc=!1}if(jr=0,Vt=It=Et=null,Bo=!1,ra=0,Kh.current=null,n===null||n.return===null){Ft=1,aa=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Om(o);if(p!==null){p.flags&=-257,km(p,o,a,s,e),p.mode&1&&Fm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Fm(s,c,e),tp();break e}l=Error(oe(426))}}else if(yt&&a.mode&1){var m=Om(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),km(m,o,a,s,e),Uh(Zs(l,a));break e}}s=l=Zs(l,a),Ft!==4&&(Ft=2),Vo===null?Vo=[s]:Vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=cx(s,l,e);Pm(s,f);break e;case 1:a=l;var v=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Sr===null||!Sr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ux(s,a,e);Pm(s,S);break e}}s=s.return}while(s!==null)}Rx(n)}catch(b){e=b,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function Ax(){var t=pc.current;return pc.current=hc,t===null?hc:t}function tp(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Ht===null||!(Yr&268435455)&&!(Hc&268435455)||ur(Ht,jt)}function vc(t,e){var n=Je;Je|=2;var i=Ax();(Ht!==t||jt!==e)&&(Ni=null,Hr(t,e));do try{iw();break}catch(r){Tx(t,r)}while(!0);if(Oh(),Je=n,pc.current=i,Lt!==null)throw Error(oe(261));return Ht=null,jt=0,Ft}function iw(){for(;Lt!==null;)Cx(Lt)}function rw(){for(;Lt!==null&&!RS();)Cx(Lt)}function Cx(t){var e=Nx(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?Rx(t):Lt=e,Kh.current=null}function Rx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZM(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Lt=null;return}}else if(n=KM(n,e,Pn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Or(t,e,n){var i=ot,r=Yn.transition;try{Yn.transition=null,ot=1,sw(t,e,n,i)}finally{Yn.transition=r,ot=i}return null}function sw(t,e,n,i){do zs();while(hr!==null);if(Je&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BS(t,s),t===Ht&&(Lt=Ht=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,Lx(Ql,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=ot;ot=1;var a=Je;Je|=4,Kh.current=null,JM(t,n),wx(n,t),bM(Vd),ec=!!zd,Vd=zd=null,t.current=n,ew(n),PS(),Je=a,ot=o,Yn.transition=s}else t.current=n;if(Wa&&(Wa=!1,hr=t,gc=r),s=t.pendingLanes,s===0&&(Sr=null),DS(n.stateNode),wn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(mc)throw mc=!1,t=lf,lf=null,t;return gc&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===cf?Ho++:(Ho=0,cf=t):Ho=0,Rr(),null}function zs(){if(hr!==null){var t=cv(gc),e=Yn.transition,n=ot;try{if(Yn.transition=null,ot=16>t?16:t,hr===null)var i=!1;else{if(t=hr,hr=null,gc=0,Je&6)throw Error(oe(331));var r=Je;for(Je|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var u=we;switch(u.tag){case 0:case 11:case 15:zo(8,u,s)}var h=u.child;if(h!==null)h.return=u,we=h;else for(;we!==null;){u=we;var d=u.sibling,p=u.return;if(yx(u),u===c){we=null;break}if(d!==null){d.return=p,we=d;break}we=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,we=f;break e}we=s.return}}var v=t.current;for(we=v;we!==null;){o=we;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,we=w;else e:for(o=v;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vc(9,a)}}catch(b){Tt(a,a.return,b)}if(a===o){we=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,we=S;break e}we=a.return}}if(Je=r,Rr(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(Dc,t)}catch{}i=!0}return i}finally{ot=n,Yn.transition=e}}return!1}function Zm(t,e,n){e=Zs(n,e),e=cx(t,e,1),t=yr(t,e,1),e=fn(),t!==null&&(ga(t,1,e),wn(t,e))}function Tt(t,e,n){if(t.tag===3)Zm(t,t,n);else for(;e!==null;){if(e.tag===3){Zm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){t=Zs(n,t),t=ux(e,t,1),e=yr(e,t,1),t=fn(),e!==null&&(ga(e,1,t),wn(e,t));break}}e=e.return}}function ow(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(jt&n)===n&&(Ft===4||Ft===3&&(jt&130023424)===jt&&500>Ct()-Qh?Hr(t,0):Zh|=n),wn(t,e)}function Px(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=fn();t=Wi(t,e),t!==null&&(ga(t,e,n),wn(t,n))}function aw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Px(t,n)}function lw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),Px(t,n)}var Nx;Nx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,qM(t,e,n);yn=!!(t.flags&131072)}else yn=!1,yt&&e.flags&1048576&&Uv(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Il(t,e),t=e.pendingProps;var r=Ys(e,ln.current);Bs(e,n),r=Xh(null,e,i,t,r,n);var s=jh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,sc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zh(e),r.updater=zc,e.stateNode=r,r._reactInternals=e,Kd(e,i,t,n),e=Jd(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&Dh(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uw(i),t=ni(i,t),r){case 0:e=Qd(null,e,i,t,n);break e;case 1:e=Vm(null,e,i,t,n);break e;case 11:e=Bm(null,e,i,t,n);break e;case 14:e=zm(null,e,i,ni(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Qd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Vm(t,e,i,r,n);case 3:e:{if(px(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Vv(t,e),uc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(oe(423)),e),e=Hm(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(oe(424)),e),e=Hm(t,e,i,n,r);break e}else for(Un=_r(e.stateNode.containerInfo.firstChild),Fn=e,yt=!0,ri=null,n=Bv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),i===r){e=Xi(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return Hv(e),t===null&&Yd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Hd(i,r)?o=null:s!==null&&Hd(i,s)&&(e.flags|=32),hx(t,e),dn(t,e,o,n),e.child;case 6:return t===null&&Yd(e),null;case 13:return mx(t,e,n);case 4:return Vh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Bm(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(lc,i._currentValue),i._currentValue=o,s!==null)if(li(s.value,o)){if(s.children===r.children&&!Sn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$d(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$d(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,n),r=qn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),zm(t,e,i,r,n);case 15:return dx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Il(t,e),e.tag=1,Mn(i)?(t=!0,sc(e)):t=!1,Bs(e,n),lx(e,i,r),Kd(e,i,r,n),Jd(null,e,i,!0,t,n);case 19:return gx(t,e,n);case 22:return fx(t,e,n)}throw Error(oe(156,e.tag))};function Lx(t,e){return sv(t,e)}function cw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new cw(t,e,n,i)}function np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uw(t){if(typeof t=="function")return np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sh)return 11;if(t===Mh)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")np(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ms:return Gr(n.children,r,s,e);case yh:o=8,r|=8;break;case yd:return t=jn(12,n,e,r|2),t.elementType=yd,t.lanes=s,t;case Sd:return t=jn(13,n,e,r),t.elementType=Sd,t.lanes=s,t;case Md:return t=jn(19,n,e,r),t.elementType=Md,t.lanes=s,t;case H0:return Gc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z0:o=10;break e;case V0:o=9;break e;case Sh:o=11;break e;case Mh:o=14;break e;case or:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=jn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function Gc(t,e,n,i){return t=jn(22,t,i,e),t.elementType=H0,t.lanes=n,t.stateNode={isHidden:!1},t}function Pu(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function Nu(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=du(0),this.expirationTimes=du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ip(t,e,n,i,r,s,o,a,l){return t=new dw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(s),t}function fw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Dx(t){if(!t)return br;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(Mn(n))return Dv(t,n,e)}return e}function Ix(t,e,n,i,r,s,o,a,l){return t=ip(n,i,!0,t,r,s,o,a,l),t.context=Dx(null),n=t.current,i=fn(),r=Mr(n),s=zi(i,r),s.callback=e??null,yr(n,s,r),t.current.lanes=r,ga(t,r,i),wn(t,i),t}function Wc(t,e,n,i){var r=e.current,s=fn(),o=Mr(r);return n=Dx(n),e.context===null?e.context=n:e.pendingContext=n,e=zi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yr(r,e,o),t!==null&&(ai(t,r,o,s),Nl(t,r,o)),o}function xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rp(t,e){Qm(t,e),(t=t.alternate)&&Qm(t,e)}function hw(){return null}var Ux=typeof reportError=="function"?reportError:function(t){console.error(t)};function sp(t){this._internalRoot=t}Xc.prototype.render=sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Wc(t,e,null,null)};Xc.prototype.unmount=sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){Wc(null,t,null,null)}),e[Gi]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=fv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&pv(t)}};function op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jm(){}function pw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=xc(o);s.call(c)}}var o=Ix(e,i,t,0,null,!1,!1,"",Jm);return t._reactRootContainer=o,t[Gi]=o.current,Jo(t.nodeType===8?t.parentNode:t),$r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=xc(l);a.call(c)}}var l=ip(t,0,!1,null,null,!1,!1,"",Jm);return t._reactRootContainer=l,t[Gi]=l.current,Jo(t.nodeType===8?t.parentNode:t),$r(function(){Wc(e,l,n,i)}),l}function Yc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=xc(o);a.call(l)}}Wc(e,o,t,r)}else o=pw(n,e,t,r,i);return xc(o)}uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Po(e.pendingLanes);n!==0&&(bh(e,n|1),wn(e,Ct()),!(Je&6)&&(Qs=Ct()+500,Rr()))}break;case 13:$r(function(){var i=Wi(t,1);if(i!==null){var r=fn();ai(i,t,1,r)}}),rp(t,1)}};Th=function(t){if(t.tag===13){var e=Wi(t,134217728);if(e!==null){var n=fn();ai(e,t,134217728,n)}rp(t,134217728)}};dv=function(t){if(t.tag===13){var e=Mr(t),n=Wi(t,e);if(n!==null){var i=fn();ai(n,t,e,i)}rp(t,e)}};fv=function(){return ot};hv=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Ld=function(t,e,n){switch(e){case"input":if(bd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Oc(i);if(!r)throw Error(oe(90));W0(i),bd(i,r)}}}break;case"textarea":j0(t,n);break;case"select":e=n.value,e!=null&&Us(t,!!n.multiple,e,!1)}};J0=Jh;ev=$r;var mw={usingClientEntryPoint:!1,Events:[xa,Ts,Oc,Z0,Q0,Jh]},vo={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gw={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iv(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||hw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Dc=Xa.inject(gw),_i=Xa}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mw;Bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!op(e))throw Error(oe(200));return fw(t,e,null,n)};Bn.createRoot=function(t,e){if(!op(t))throw Error(oe(299));var n=!1,i="",r=Ux;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ip(t,1,!1,null,null,n,!1,i,r),t[Gi]=e.current,Jo(t.nodeType===8?t.parentNode:t),new sp(e)};Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=iv(e),t=t===null?null:t.stateNode,t};Bn.flushSync=function(t){return $r(t)};Bn.hydrate=function(t,e,n){if(!jc(e))throw Error(oe(200));return Yc(null,t,e,!0,n)};Bn.hydrateRoot=function(t,e,n){if(!op(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ux;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ix(e,null,t,1,n??null,r,!1,s,o),t[Gi]=e.current,Jo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xc(e)};Bn.render=function(t,e,n){if(!jc(e))throw Error(oe(200));return Yc(null,t,e,!1,n)};Bn.unmountComponentAtNode=function(t){if(!jc(t))throw Error(oe(40));return t._reactRootContainer?($r(function(){Yc(null,null,t,!1,function(){t._reactRootContainer=null,t[Gi]=null})}),!0):!1};Bn.unstable_batchedUpdates=Jh;Bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!jc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Yc(t,e,n,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function Fx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fx)}catch(t){console.error(t)}}Fx(),F0.exports=Bn;var $c=F0.exports;const vw=w0($c);var Ox,eg=$c;Ox=eg.createRoot,eg.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _c(){return _c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_c.apply(this,arguments)}var pr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pr||(pr={}));const tg="popstate";function xw(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return ff("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Bx(r)}return yw(e,n,null,t)}function An(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function kx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _w(){return Math.random().toString(36).substr(2,8)}function ng(t,e){return{usr:t.state,key:t.key,idx:e}}function ff(t,e,n,i){return n===void 0&&(n=null),_c({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?qc(e):e,{state:n,key:e&&e.key||i||_w()})}function Bx(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function qc(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function yw(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=pr.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(_c({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=pr.Pop;let m=u(),f=m==null?null:m-c;c=m,l&&l({action:a,location:x.location,delta:f})}function d(m,f){a=pr.Push;let v=ff(x.location,m,f);c=u()+1;let w=ng(v,c),S=x.createHref(v);try{o.pushState(w,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(S)}s&&l&&l({action:a,location:x.location,delta:1})}function p(m,f){a=pr.Replace;let v=ff(x.location,m,f);c=u();let w=ng(v,c),S=x.createHref(v);o.replaceState(w,"",S),s&&l&&l({action:a,location:x.location,delta:0})}function g(m){let f=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:Bx(m);return v=v.replace(/ $/,"%20"),An(f,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,f)}let x={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(tg,h),l=m,()=>{r.removeEventListener(tg,h),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let f=g(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:d,replace:p,go(m){return o.go(m)}};return x}var ig;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ig||(ig={}));function Sw(t,e,n){return n===void 0&&(n="/"),Mw(t,e,n,!1)}function Mw(t,e,n,i){let r=typeof e=="string"?qc(e):e,s=Hx(r.pathname||"/",n);if(s==null)return null;let o=zx(t);ww(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=Iw(s);a=Lw(o[l],c,i)}return a}function zx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(An(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Vs([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(An(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),zx(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Pw(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Vx(s.path))r(s,o,l)}),e}function Vx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Vx(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ww(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Nw(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Ew=/^:[\w-]+$/,bw=3,Tw=2,Aw=1,Cw=10,Rw=-2,rg=t=>t==="*";function Pw(t,e){let n=t.split("/"),i=n.length;return n.some(rg)&&(i+=Rw),e&&(i+=Tw),n.filter(r=>!rg(r)).reduce((r,s)=>r+(Ew.test(s)?bw:s===""?Aw:Cw),i)}function Nw(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Lw(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",h=sg({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!h&&c&&n&&!i[i.length-1].route.index&&(h=sg({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:Vs([s,h.pathname]),pathnameBase:Uw(Vs([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=Vs([s,h.pathnameBase]))}return o}function sg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Dw(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,h)=>{let{paramName:d,isOptional:p}=u;if(d==="*"){let x=a[h]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const g=a[h];return p&&!g?c[d]=void 0:c[d]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Dw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),kx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Iw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return kx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hx(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const Vs=t=>t.join("/").replace(/\/\/+/g,"/"),Uw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function Fw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Gx=["post","put","patch","delete"];new Set(Gx);const Ow=["get",...Gx];new Set(Ow);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yc(){return yc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},yc.apply(this,arguments)}const kw=k.createContext(null),Bw=k.createContext(null),Wx=k.createContext(null),Kc=k.createContext(null),Zc=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Xx=k.createContext(null);function ap(){return k.useContext(Kc)!=null}function jx(){return ap()||An(!1),k.useContext(Kc).location}function zw(t,e){return Vw(t,e)}function Vw(t,e,n,i){ap()||An(!1);let{navigator:r}=k.useContext(Wx),{matches:s}=k.useContext(Zc),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=jx(),u;if(e){var h;let m=typeof e=="string"?qc(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||An(!1),u=m}else u=c;let d=u.pathname||"/",p=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=Sw(t,{pathname:p}),x=jw(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Vs([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Vs([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&x?k.createElement(Kc.Provider,{value:{location:yc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:pr.Pop}},x):x}function Hw(){let t=Kw(),e=Fw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:r},n):null,null)}const Gw=k.createElement(Hw,null);class Ww extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(Zc.Provider,{value:this.props.routeContext},k.createElement(Xx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xw(t){let{routeContext:e,match:n,children:i}=t,r=k.useContext(kw);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Zc.Provider,{value:e},i)}function jw(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);u>=0||An(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let h=o[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=u),h.route.id){let{loaderData:d,errors:p}=n,g=h.route.loader&&d[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,h,d)=>{let p,g=!1,x=null,m=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||Gw,l&&(c<0&&d===0?(g=!0,m=null):c===d&&(g=!0,m=h.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,d+1)),v=()=>{let w;return p?w=x:g?w=m:h.route.Component?w=k.createElement(h.route.Component,null):h.route.element?w=h.route.element:w=u,k.createElement(Xw,{match:h,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:w})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?k.createElement(Ww,{location:n.location,revalidation:n.revalidation,component:x,error:p,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var hf=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hf||{});function Yw(t){let e=k.useContext(Bw);return e||An(!1),e}function $w(t){let e=k.useContext(Zc);return e||An(!1),e}function qw(t){let e=$w(),n=e.matches[e.matches.length-1];return n.route.id||An(!1),n.route.id}function Kw(){var t;let e=k.useContext(Xx),n=Yw(hf.UseRouteError),i=qw(hf.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function Zw(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function pf(t){An(!1)}function Qw(t){let{basename:e="/",children:n=null,location:i,navigationType:r=pr.Pop,navigator:s,static:o=!1,future:a}=t;ap()&&An(!1);let l=e.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:l,navigator:s,static:o,future:yc({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=qc(i));let{pathname:u="/",search:h="",hash:d="",state:p=null,key:g="default"}=i,x=k.useMemo(()=>{let m=Hx(u,l);return m==null?null:{location:{pathname:m,search:h,hash:d,state:p,key:g},navigationType:r}},[l,u,h,d,p,g,r]);return x==null?null:k.createElement(Wx.Provider,{value:c},k.createElement(Kc.Provider,{children:n,value:x}))}function Jw(t){let{children:e,location:n}=t;return zw(mf(e),n)}new Promise(()=>{});function mf(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(i,r)=>{if(!k.isValidElement(i))return;let s=[...e,r];if(i.type===k.Fragment){n.push.apply(n,mf(i.props.children,s));return}i.type!==pf&&An(!1),!i.props.index||!i.props.children||An(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=mf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const eE="6";try{window.__reactRouterVersion=eE}catch{}const tE="startTransition",og=I0[tE];function nE(t){let{basename:e,children:n,future:i,window:r}=t,s=k.useRef();s.current==null&&(s.current=xw({window:r,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=k.useCallback(h=>{c&&og?og(()=>l(h)):l(h)},[l,c]);return k.useLayoutEffect(()=>o.listen(u),[o,u]),k.useEffect(()=>Zw(i),[i]),k.createElement(Qw,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var ag;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ag||(ag={}));var lg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(lg||(lg={}));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yx=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=k.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>k.createElement("svg",{ref:l,...rE,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Yx("lucide",r),...a},[...o.map(([c,u])=>k.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(t,e)=>{const n=k.forwardRef(({className:i,...r},s)=>k.createElement(sE,{ref:s,iconNode:e,className:Yx(`lucide-${iE(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=ct("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=ct("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=ct("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=ct("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=ct("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=ct("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=ct("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=ct("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=ct("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=ct("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=ct("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=ct("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=ct("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=ct("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=ct("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=ct("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=ct("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=ct("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=ct("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=ct("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=ct("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=ct("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=ct("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=ct("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=ct("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function cg(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Jx(...t){return e=>{let n=!1;const i=t.map(r=>{const s=cg(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():cg(t[r],null)}}}}function qr(...t){return k.useCallback(Jx(...t),t)}function Sc(t){const e=bE(t),n=k.forwardRef((i,r)=>{const{children:s,...o}=i,a=k.Children.toArray(s),l=a.find(AE);if(l){const c=l.props.children,u=a.map(h=>h===l?k.Children.count(c)>1?k.Children.only(null):k.isValidElement(c)?c.props.children:null:h);return M.jsx(e,{...o,ref:r,children:k.isValidElement(c)?k.cloneElement(c,void 0,u):null})}return M.jsx(e,{...o,ref:r,children:s})});return n.displayName=`${t}.Slot`,n}var EE=Sc("Slot");function bE(t){const e=k.forwardRef((n,i)=>{const{children:r,...s}=n;if(k.isValidElement(r)){const o=RE(r),a=CE(s,r.props);return r.type!==k.Fragment&&(a.ref=i?Jx(i,o):o),k.cloneElement(r,a)}return k.Children.count(r)>1?k.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var TE=Symbol("radix.slottable");function AE(t){return k.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===TE}function CE(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function RE(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function e_(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=e_(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function t_(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=e_(t))&&(i&&(i+=" "),i+=e);return i}const ug=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,dg=t_,n_=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return dg(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=n==null?void 0:n[c],h=s==null?void 0:s[c];if(u===null)return null;const d=ug(u)||ug(h);return r[c][d]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,d]=u;return d===void 0||(c[h]=d),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:h,className:d,...p}=u;return Object.entries(p).every(g=>{let[x,m]=g;return Array.isArray(m)?m.includes({...s,...a}[x]):{...s,...a}[x]===m})?[...c,h,d]:c},[]);return dg(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},cp="-",PE=t=>{const e=LE(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(cp);return a[0]===""&&a.length!==1&&a.shift(),i_(a,e)||NE(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},i_=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?i_(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(cp);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},fg=/^\[(.+)\]$/,NE=t=>{if(fg.test(t)){const e=fg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},LE=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return IE(Object.entries(t.classGroups),n).forEach(([s,o])=>{vf(o,i,s,e)}),i},vf=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:hg(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(DE(r)){vf(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{vf(o,hg(e,s),n,i)})})},hg=(t,e)=>{let n=t;return e.split(cp).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},DE=t=>t.isThemeGetter,IE=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,UE=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},r_="!",FE=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,u=0,h;for(let m=0;m<a.length;m++){let f=a[m];if(c===0){if(f===r&&(i||a.slice(m,m+s)===e)){l.push(a.slice(u,m)),u=m+s;continue}if(f==="/"){h=m;continue}}f==="["?c++:f==="]"&&c--}const d=l.length===0?a:a.substring(u),p=d.startsWith(r_),g=p?d.substring(1):d,x=h&&h>u?h-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:x}};return n?a=>n({className:a,parseClassName:o}):o},OE=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},kE=t=>({cache:UE(t.cacheSize),parseClassName:FE(t),...PE(t)}),BE=/\s+/,zE=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(BE);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:u,hasImportantModifier:h,baseClassName:d,maybePostfixModifierPosition:p}=n(c);let g=!!p,x=i(g?d.substring(0,p):d);if(!x){if(!g){a=c+(a.length>0?" "+a:a);continue}if(x=i(d),!x){a=c+(a.length>0?" "+a:a);continue}g=!1}const m=OE(u).join(":"),f=h?m+r_:m,v=f+x;if(s.includes(v))continue;s.push(v);const w=r(x,g);for(let S=0;S<w.length;++S){const b=w[S];s.push(f+b)}a=c+(a.length>0?" "+a:a)}return a};function VE(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=s_(e))&&(i&&(i+=" "),i+=n);return i}const s_=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=s_(t[i]))&&(n&&(n+=" "),n+=e);return n};function HE(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((u,h)=>h(u),t());return n=kE(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=zE(l,n);return r(l,u),u}return function(){return s(VE.apply(null,arguments))}}const mt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},o_=/^\[(?:([a-z-]+):)?(.+)\]$/i,GE=/^\d+\/\d+$/,WE=new Set(["px","full","screen"]),XE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,jE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,YE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,$E=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,qE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,bi=t=>Hs(t)||WE.has(t)||GE.test(t),Qi=t=>oo(t,"length",i1),Hs=t=>!!t&&!Number.isNaN(Number(t)),Lu=t=>oo(t,"number",Hs),xo=t=>!!t&&Number.isInteger(Number(t)),KE=t=>t.endsWith("%")&&Hs(t.slice(0,-1)),Ve=t=>o_.test(t),Ji=t=>XE.test(t),ZE=new Set(["length","size","percentage"]),QE=t=>oo(t,ZE,a_),JE=t=>oo(t,"position",a_),e1=new Set(["image","url"]),t1=t=>oo(t,e1,s1),n1=t=>oo(t,"",r1),_o=()=>!0,oo=(t,e,n)=>{const i=o_.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},i1=t=>jE.test(t)&&!YE.test(t),a_=()=>!1,r1=t=>$E.test(t),s1=t=>qE.test(t),o1=()=>{const t=mt("colors"),e=mt("spacing"),n=mt("blur"),i=mt("brightness"),r=mt("borderColor"),s=mt("borderRadius"),o=mt("borderSpacing"),a=mt("borderWidth"),l=mt("contrast"),c=mt("grayscale"),u=mt("hueRotate"),h=mt("invert"),d=mt("gap"),p=mt("gradientColorStops"),g=mt("gradientColorStopPositions"),x=mt("inset"),m=mt("margin"),f=mt("opacity"),v=mt("padding"),w=mt("saturate"),S=mt("scale"),b=mt("sepia"),T=mt("skew"),A=mt("space"),_=mt("translate"),C=()=>["auto","contain","none"],P=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto",Ve,e],F=()=>[Ve,e],W=()=>["",bi,Qi],N=()=>["auto",Hs,Ve],V=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Q=()=>["solid","dashed","dotted","double","none"],Y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],z=()=>["","0",Ve],D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],$=()=>[Hs,Ve];return{cacheSize:500,separator:":",theme:{colors:[_o],spacing:[bi,Qi],blur:["none","",Ji,Ve],brightness:$(),borderColor:[t],borderRadius:["none","","full",Ji,Ve],borderSpacing:F(),borderWidth:W(),contrast:$(),grayscale:z(),hueRotate:$(),invert:z(),gap:F(),gradientColorStops:[t],gradientColorStopPositions:[KE,Qi],inset:U(),margin:U(),opacity:$(),padding:F(),saturate:$(),scale:$(),sepia:z(),skew:$(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",Ve]}],container:["container"],columns:[{columns:[Ji]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...V(),Ve]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",xo,Ve]}],basis:[{basis:U()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ve]}],grow:[{grow:z()}],shrink:[{shrink:z()}],order:[{order:["first","last","none",xo,Ve]}],"grid-cols":[{"grid-cols":[_o]}],"col-start-end":[{col:["auto",{span:["full",xo,Ve]},Ve]}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":[_o]}],"row-start-end":[{row:["auto",{span:[xo,Ve]},Ve]}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ve]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ve]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ve,e]}],"min-w":[{"min-w":[Ve,e,"min","max","fit"]}],"max-w":[{"max-w":[Ve,e,"none","full","min","max","fit","prose",{screen:[Ji]},Ji]}],h:[{h:[Ve,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ve,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ve,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ve,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Ji,Qi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Lu]}],"font-family":[{font:[_o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ve]}],"line-clamp":[{"line-clamp":["none",Hs,Lu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",bi,Ve]}],"list-image":[{"list-image":["none",Ve]}],"list-style-type":[{list:["none","disc","decimal",Ve]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",bi,Qi]}],"underline-offset":[{"underline-offset":["auto",bi,Ve]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ve]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ve]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...V(),JE]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",QE]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},t1]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...Q(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:Q()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...Q()]}],"outline-offset":[{"outline-offset":[bi,Ve]}],"outline-w":[{outline:[bi,Qi]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[bi,Qi]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Ji,n1]}],"shadow-color":[{shadow:[_o]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...Y(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Y()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Ji,Ve]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[w]}],sepia:[{sepia:[b]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[b]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ve]}],duration:[{duration:$()}],ease:[{ease:["linear","in","out","in-out",Ve]}],delay:[{delay:$()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ve]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[xo,Ve]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ve]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ve]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ve]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[bi,Qi,Lu]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},a1=HE(o1);function gn(...t){return a1(t_(t))}const l1=n_("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),On=k.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},s)=>{const o=i?EE:"button";return M.jsx(o,{className:gn(l1({variant:e,size:n,className:t})),ref:s,...r})});On.displayName="Button";const c1=({is3DEnabled:t,onToggle3D:e,onOpenProjectsDeck:n,onScrollToStation:i})=>{const[r,s]=k.useState(!1),[o,a]=k.useState(!1);return k.useEffect(()=>{const l=()=>{s(window.scrollY>40)};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),M.jsxs("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${r?"bg-[#07080d]/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5":"bg-transparent py-5"}`,children:[M.jsxs("div",{className:"container mx-auto px-6 md:px-10 flex items-center justify-between",children:[M.jsxs("button",{type:"button",onClick:()=>i("home"),className:"group flex items-center gap-2 text-left focus:outline-none",children:[M.jsx("span",{className:"text-xl md:text-2xl font-black gradient-text tracking-wider",children:"RP"}),M.jsx("span",{className:"hidden md:inline-block font-mono text-[10px] tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors uppercase",children:"/ Spatial Dev"})]}),M.jsxs("nav",{className:"hidden md:flex items-center gap-8",children:[M.jsx("button",{type:"button",onClick:()=>i("home"),className:"font-mono text-xs tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase",children:"[ Home ]"}),M.jsxs("button",{type:"button",onClick:n,className:"font-mono text-xs tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors uppercase flex items-center gap-1.5",children:[M.jsx(ya,{className:"w-3 h-3 text-cyan-400"}),"[ Projects (13) ]"]}),M.jsx("button",{type:"button",onClick:()=>i("contact"),className:"font-mono text-xs tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase",children:"[ Contact ]"})]}),M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsxs("button",{type:"button",onClick:e,title:t?"Turn off 3D WebGL background":"Turn on 3D WebGL background",className:`flex items-center gap-2 px-3 h-8 md:h-9 rounded-xl border text-[11px] font-mono font-semibold transition-all ${t?"bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-sm shadow-cyan-500/20":"bg-white/[0.04] border-white/10 text-slate-400 hover:text-white"}`,children:[M.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${t?"bg-cyan-400 animate-pulse":"bg-slate-500"}`}),"3D LAB ",t?"ON":"OFF"]}),M.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"hidden sm:inline-block",children:M.jsxs(On,{size:"sm",className:"h-8 md:h-9 px-4 bg-primary text-primary-foreground hover:shadow-glow font-semibold gap-1.5 text-xs rounded-xl",children:[M.jsx(gf,{className:"w-3.5 h-3.5"}),"Resume"]})}),M.jsx("button",{type:"button",onClick:()=>a(!o),className:"md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-white","aria-label":"Toggle menu",children:o?M.jsx(Qc,{className:"w-4 h-4"}):M.jsx(yE,{className:"w-4 h-4"})})]})]}),o&&M.jsxs("div",{className:"md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#090b14]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-3",children:[M.jsx("button",{type:"button",onClick:()=>{a(!1),i("home")},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]",children:"[ 00 // Home ]"}),M.jsx("button",{type:"button",onClick:()=>{a(!1),i("about")},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]",children:"[ 01 // Profile & Experience ]"}),M.jsx("button",{type:"button",onClick:()=>{a(!1),n()},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-cyan-400 hover:bg-cyan-500/10 font-bold",children:"[ 02 // All Projects Deck (13) ]"}),M.jsx("button",{type:"button",onClick:()=>{a(!1),i("contact")},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]",children:"[ 07 // Transmission ]"}),M.jsx("div",{className:"pt-2 border-t border-white/10",children:M.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"block",children:M.jsxs(On,{className:"w-full bg-primary text-primary-foreground gap-2 text-xs",children:[M.jsx(gf,{className:"w-3.5 h-3.5"}),"Download Resume"]})})})]})]})},xf=[{id:"home",code:"00",label:"00 // Home",title:"Introduction"},{id:"about",code:"01",label:"01 // About Me",title:"Profile & Expertise"},{id:"smartscopy",code:"02",label:"02 // SmartScopy",title:"Medical XR Platform"},{id:"mimadim",code:"03",label:"03 // MimadimPlus",title:"3D CAD Engine"},{id:"nopainheals",code:"04",label:"04 // NoPainHeals",title:"Interactive Therapy Kiosk"},{id:"vision-ai",code:"05",label:"05 // Motion AI",title:"Computer Vision Games"},{id:"skills",code:"06",label:"06 // Skills & Stack",title:"Technologies & Services"},{id:"contact",code:"07",label:"07 // Contact",title:"Get In Touch"}],u1=({activeStationId:t,onSelectStation:e})=>M.jsxs("aside",{"aria-label":"Section Navigation Rail",className:"fixed left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-5 pointer-events-auto select-none",children:[M.jsx("div",{className:"absolute left-[7px] top-1 bottom-1 w-[1.5px] bg-white/[0.08]"}),xf.map(n=>{const i=t===n.id;return M.jsxs("button",{type:"button",onClick:()=>e(n.id),className:"group relative flex items-center gap-3 text-left focus:outline-none",children:[M.jsx("div",{className:`relative z-10 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${i?"border border-cyan-400/80 bg-[#07080d] shadow-sm shadow-cyan-400/50 scale-110":"border border-white/20 bg-[#07080d] group-hover:border-cyan-400/40"}`,children:M.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i?"bg-cyan-400 shadow-[0_0_8px_#22d3ee] scale-100":"bg-transparent group-hover:bg-white/40 scale-75"}`})}),M.jsx("div",{className:"flex flex-col",children:M.jsx("span",{className:`font-mono text-[11px] tracking-wider transition-all duration-200 ${i?"text-cyan-400 font-bold translate-x-1":"text-slate-400/60 font-medium group-hover:text-slate-200 group-hover:translate-x-0.5"}`,children:n.label})})]},n.id)})]}),d1=()=>M.jsxs("div",{"aria-hidden":"true",className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none select-none opacity-80",children:[M.jsx("div",{className:"relative w-[1.5px] h-9 bg-gradient-to-b from-cyan-400/80 via-indigo-400/40 to-transparent",children:M.jsx("span",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-bounce"})}),M.jsx("span",{className:"font-mono text-[9px] tracking-[0.25em] text-slate-400 uppercase",children:"SCROLL TO DISCOVER"})]}),f1=({project:t,onClose:e,onOpenAllProjects:n})=>(k.useEffect(()=>{const i=r=>{r.key==="Escape"&&e()};return t&&(window.addEventListener("keydown",i),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",i),document.body.style.overflow="unset"}},[t,e]),t?M.jsxs("div",{className:"fixed inset-0 z-50 flex justify-end",children:[M.jsx("div",{onClick:e,className:"fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"}),M.jsxs("aside",{role:"dialog","aria-label":`${t.title} Case Study`,className:"relative z-10 w-full max-w-xl h-full bg-[#080a12]/95 backdrop-blur-2xl border-l border-white/[0.08] shadow-2xl p-6 md:p-10 flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300",children:[M.jsxs("div",{className:"flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),M.jsxs("span",{className:"font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase",children:["Case Study // ",t.category]})]}),M.jsxs("button",{type:"button",onClick:e,className:"group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-400 hover:text-white transition-all text-xs font-mono","aria-label":"Close Case Study",children:[M.jsx("span",{children:"[ ESC ]"}),M.jsx(Qc,{className:"w-3.5 h-3.5 group-hover:rotate-90 transition-transform"})]})]}),M.jsxs("div",{className:"mb-6",children:[M.jsx("h2",{className:"text-3xl md:text-4xl font-black tracking-tight text-white mb-2",children:t.title}),M.jsx("p",{className:"font-mono text-sm text-cyan-300/80 leading-relaxed",children:t.subtitle})]}),M.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-6",children:[M.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/15 border border-indigo-500/30 text-indigo-300",children:["Role: ",t.role]}),t.featured&&M.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center gap-1",children:[M.jsx(ya,{className:"w-3 h-3 text-cyan-400"})," Flagship Production System"]})]}),M.jsxs("div",{className:"mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]",children:[M.jsx("h4",{className:"font-mono text-xs tracking-wider text-slate-400 uppercase mb-2",children:"Engineering Overview"}),M.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:t.fullDescription||t.shortDescription})]}),t.architecturalHighlights&&t.architecturalHighlights.length>0&&M.jsxs("div",{className:"mb-6",children:[M.jsxs("h4",{className:"font-mono text-xs tracking-wider text-cyan-400 uppercase mb-3 flex items-center gap-2",children:[M.jsx(Kx,{className:"w-4 h-4"})," Architectural Highlights"]}),M.jsx("div",{className:"space-y-2.5",children:t.architecturalHighlights.map((i,r)=>M.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]",children:[M.jsx(lp,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),M.jsx("span",{className:"text-xs text-slate-300 leading-relaxed",children:i})]},r))})]}),M.jsxs("div",{className:"mb-6",children:[M.jsxs("h4",{className:"font-mono text-xs tracking-wider text-indigo-400 uppercase mb-3 flex items-center gap-2",children:[M.jsx(mE,{className:"w-4 h-4"})," Key Deliverables & Systems Built"]}),M.jsx("ul",{className:"space-y-2",children:t.keyWork.map((i,r)=>M.jsxs("li",{className:"flex items-start gap-2.5 text-xs text-slate-300",children:[M.jsx("span",{className:"text-indigo-400 font-bold font-mono",children:"▸"}),M.jsx("span",{children:i})]},r))})]}),t.metrics&&M.jsxs("div",{className:"mb-6 p-4 rounded-2xl bg-cyan-500/[0.05] border border-cyan-500/20",children:[M.jsx("span",{className:"font-mono text-[10px] tracking-widest text-cyan-400 uppercase block mb-1",children:"Production Impact & Telemetry"}),M.jsx("span",{className:"text-sm font-semibold text-white",children:t.metrics})]}),M.jsxs("div",{className:"mb-8",children:[M.jsx("h4",{className:"font-mono text-xs tracking-wider text-slate-400 uppercase mb-3",children:"Technology Stack"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:t.tech.map(i=>M.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300",children:i},i))})]}),M.jsxs("div",{className:"mt-auto pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3",children:[n&&M.jsx(On,{type:"button",onClick:()=>{e(),n()},className:"flex-1 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl text-xs h-10 shadow-lg shadow-cyan-500/20",children:"Explore All 13 Projects"}),t.liveUrl&&M.jsx("a",{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"no-underline flex-1",children:M.jsxs(On,{variant:"outline",className:"w-full border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 rounded-xl text-xs h-10 gap-1.5",children:[M.jsx(dE,{className:"w-3.5 h-3.5"}),"Live Link"]})})]})]})]}):null),Jc=k.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:gn("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));Jc.displayName="Card";const h1=k.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:gn("flex flex-col space-y-1.5 p-6",t),...e}));h1.displayName="CardHeader";const p1=k.forwardRef(({className:t,...e},n)=>M.jsx("h3",{ref:n,className:gn("text-2xl font-semibold leading-none tracking-tight",t),...e}));p1.displayName="CardTitle";const m1=k.forwardRef(({className:t,...e},n)=>M.jsx("p",{ref:n,className:gn("text-sm text-muted-foreground",t),...e}));m1.displayName="CardDescription";const g1=k.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:gn("p-6 pt-0",t),...e}));g1.displayName="CardContent";const v1=k.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:gn("flex items-center p-6 pt-0",t),...e}));v1.displayName="CardFooter";const en=[{id:"smartscopy",title:"SmartScopy",subtitle:"Live Operating Theatre XR & Low-Latency Video Pipeline",category:"Medical XR",role:"Lead XR & Video Pipeline Engineer",shortDescription:"Solo-built XR platform streaming live endoscopic surgical camera feeds in real time to XREAL glasses and HoloLens 2, integrated with 3D anatomical overlays.",fullDescription:"SmartScopy is an operating theatre mixed-reality platform engineered to give surgical teams direct, hands-free visualization of endoscopic feeds and patient anatomy inside XR headsets. Built with a low-latency video streaming pipeline in Unity (C#) and Python, it allows surgeons to view live surgical feeds alongside interactive 3D anatomical models reconstructed from patient CT, MRI, and X-ray imaging.",tech:["Unity3D","C#","XREAL Air","HoloLens 2","MRTK","OpenXR","Python","OpenCV"],keyWork:["Ultra-low latency live video pipeline in Unity (C#) for real-time surgical camera feeds","Stereoscopic XR rendering for XREAL glasses and Microsoft HoloLens 2 via OpenXR","Interactive 3D anatomical reconstructions from CT/MRI/X-ray data viewable alongside live video","Modular Python video capture architecture with DirectShow buffer elimination"],architecturalHighlights:["Threaded video capture and processing pipeline separating capture and render loops","Sub-100ms camera-to-headset latency for precision surgical assistance","Dual-headset target support with MRTK gesture control and spatial head-anchoring"],featured:!0},{id:"mimadimplus",title:"MimadimPlus",subtitle:"Automated CAD-to-3D Procedural Architectural Engine",category:"Unreal Engine 5",role:"Lead Pipeline & C++ Developer",shortDescription:"Automated 2D-to-3D engine that converts raw CAD/DXF blueprints into realistic, real-time 3D building environments with procedural mesh generation.",fullDescription:"MimadimPlus is an automated architectural generation engine in Unreal Engine 5 that eliminates manual 3D modeling by compiling raw 2D CAD/DXF blueprints into procedural 3D environments. Built with custom C++ classes and UProceduralMeshComponent, it handles coordinate conversion, room-footprint extraction, wall-partner raycast snapping, and includes a custom procedural floor tile generator with polygon clipping math.",tech:["Unreal Engine 5","C++","UProceduralMeshComponent","Python","Blueprints","Meta Quest"],keyWork:["Automated DXF/CAD blueprint parser converting 2D architectural entities into 3D geometry","Custom C++ procedural mesh generation for walls, floors, doors, and windows with auto-calculated UVs and tangents","Integrated Procedural Floor Tile Generator & Geometric Clipper (TileManagerActor.h) for arbitrary polygon room boundaries","Companion Python desktop application for blueprint inspection, tag extraction, and Meta Quest VR walkthroughs"],architecturalHighlights:["Mathematical coordinate space conversion from 2D CAD (Y-inversion, normalization) to Unreal 3D world coordinates","Geometric clipping algorithm that slices tile meshes against complex L-shaped room contours with uniform grout spacing","Real-time dynamic lighting and material instancing for multi-room layout previews"],featured:!0},{id:"nopainheals",title:"NoPainHeals",subtitle:"Clinical Floor Projection Rehabilitation Platform",category:"Healthcare & Web3D",role:"Interactive Systems & Security Engineer",shortDescription:"Multi-modal interactive therapy platform featuring 12+ floor-projection games, zero-trust E2EE crypto, and a hardened Linux kiosk architecture.",fullDescription:"NoPainHeals is an enterprise clinical rehabilitation station used for motor skills therapy, balance training, and pediatric physical therapy. The system runs on a locked-down Linux/Ubuntu kiosk, featuring a suite of 12+ motion-tracked games, a zero-trust end-to-end encrypted telemetry tunnel using X25519 and AES-256-GCM, and an offline-first IndexedDB queue that prevents metric loss during clinic network dropouts.",tech:["Electron","Three.js","WebGL","WebSockets (Pusher v7)","Linux Kiosk","node:crypto (X25519, AES-256-GCM)","IndexedDB"],keyWork:["Delivered 12+ interactive floor-projection rehabilitation games (hopscotch, balance paths, reaction games)","Engineered zero-trust E2EE tunnel using node:crypto (X25519 key exchange, HKDF-SHA256, AES-256-GCM)","Hardened Linux/Ubuntu kiosk deployment with window escape guards and auto-launch controls","Built resilient offline-first IndexedDB queue with exponential backoff and retry caps"],architecturalHighlights:["Encrypted patient telemetry stream via custom secure headers (X-Encrypted-Payload, X-Hardware-Id)","Station hardware ID fingerprinting cached in Electron main process","Real-time WebSocket communication for remote therapist controls and QR station pairing"],featured:!0},{id:"motion-tracking-ai",title:"Camera-Based Motion Tracking & Edge AI",subtitle:"Real-Time Body Pose, Gesture & Object Detection Suite",category:"AI & Vision",role:"Computer Vision & Gameplay Engineer",shortDescription:"Custom motion and object-tracking models on live camera feeds powering controller-free full-body games.",fullDescription:"A high-performance edge AI computer vision pipeline developed in Python and Unity that processes live camera streams with zero buffer latency. Combines custom-trained YOLO object-tracking models running on ONNX Runtime with MediaPipe body pose and hand tracking to power controller-free games where physical movements control the gameplay.",tech:["Python","OpenCV","MediaPipe","YOLO","ONNX Runtime","DirectShow","Unity3D"],keyWork:["DirectShow video capture integration (cv2.CAP_DSHOW) eliminating internal frame buffer latency","Hybrid ML pipeline combining MediaPipe skeletal landmarks with custom ONNX models","Controller-free games suite: Fruit Samurai, Alien Runner, Enter If You Dare, and Football Cup","Real-time inference optimized for 60+ FPS on consumer hardware"],architecturalHighlights:["Multi-threaded frame acquisition and ML tensor inference to prevent UI stutter","Normalized gesture recognition coordinates mapped directly to in-game physics colliders"],featured:!0},{id:"3d-bone-visualizer",title:"3D Bone Visualizer",subtitle:"Interactive Orthopedic Mixed Reality Suite",category:"Medical XR",role:"XR Developer",shortDescription:"Interactive HoloLens 2 mixed-reality application enabling surgeons to inspect, slice, and manipulate 3D bone models from CT/MRI data.",fullDescription:"A specialized spatial computing application developed for Microsoft HoloLens 2 using MRTK and OpenXR. Surgeons can visualize volumetric patient bone structures in 3D space, rotate and inspect fractures, slice anatomical models along cross-sectional planes, and interact using natural hand tracking.",tech:["Unity3D","Microsoft HoloLens 2","MRTK","OpenXR","C#"],keyWork:["Volumetric bone model reconstruction and rendering from CT and MRI scans","Spatial hand-tracking gesture controls for 3D model rotation, zoom, and translation","Cross-sectional planar slicing tool for internal anatomical examination"],architecturalHighlights:["MRTK solver pipelines for ergonomic spatial anchoring in sterile operating room environments","Optimized polygon meshes for smooth 60 FPS rendering on mobile XR hardware"]},{id:"mimadim-homestudio",title:"MimadimHomeStudio",subtitle:"Real-Time Interior Customization & Furniture Swapping",category:"Unreal Engine 5",role:"Unreal Engine Developer",shortDescription:"Real-time interior design and customization engine in Unreal Engine 5 with dynamic asset swapping and instant lighting adjustments.",fullDescription:"An interactive architectural visualization tool built in UE5 using C++, Blueprints, and Data Assets. Users can customize room finishes, wall colors, lighting configurations, and dynamically swap furniture pieces while maintaining accurate world coordinates, pivot rotations, and collision bounds.",tech:["Unreal Engine 5","C++","Blueprints","Data Assets","Lumen Lighting"],keyWork:["Dynamic furniture swapping system preserving world position, rotation, and dimensions","Runtime material and color switching pipeline using Blueprint dynamic material instances","Real-time architectural lighting preview powered by UE5 Lumen"],architecturalHighlights:["Data Asset-driven catalog system decoupling furniture definitions from gameplay code","Collision checking preventing overlapping placements during item swaps"]},{id:"speech-therapy",title:"Speech Therapy Station (Speak & Rise)",subtitle:"Pediatric Articulation & Web3D Voice Platform",category:"Healthcare & Web3D",role:"Web3D & Systems Architect",shortDescription:"Interactive 3D web platform for pediatric speech therapy featuring real-time AI voice recognition and articulation scoring.",fullDescription:"An interactive pediatric speech rehabilitation platform built in Three.js and WebGL. Ravi refactored a 2,000+ line legacy monolith into clean decoupled modules (GameStateMachine, Classroom3D, GameRegistry) and integrated Sarvam AI voice activity detection and speech-to-text for real-time gamified pronunciation feedback.",tech:["Three.js","JavaScript","Web Audio API","Sarvam AI (VAD & STT)","Electron"],keyWork:["Architectural refactoring into decoupled GameStateMachine and Classroom3D modules","Integration of Sarvam AI Voice Activity Detection (VAD) and Speech-to-Text for pronunciation scoring","Interactive 3D character animation blending and gamified audio reward feedback"],architecturalHighlights:["Dynamic GameRegistry enabling plug-and-play addition of new therapy exercises without changing core logic","Low-latency Web Audio API synthesizers for instant child audio reinforcement"]},{id:"vr-boat-simulation",title:"VR Boat Simulation",subtitle:"Maritime Pilot Training Simulator",category:"Games & VR",role:"Unity Simulation Developer",shortDescription:"Virtual reality maritime simulator training pilots in transitioning from small vessels to large commercial cargo ships.",fullDescription:"A high-fidelity maritime training simulation in Unity for VR headsets. Focused on realistic open-water navigation, vessel handling characteristics, helm controls, realistic wave simulation, and custom buoyant water physics.",tech:["Unity3D","C#","VR SDK","HLSL Water Shaders","Physics Engine"],keyWork:["Developed realistic buoyant water physics and wave interaction models","Engineered ship helm controls and vessel inertia mechanics","Created dynamic weather and water shader effects"],architecturalHighlights:["Buoyancy force calculation sampling water height in real time to simulate realistic vessel heave and pitch","Comfort-tuned VR camera motion damping to minimize motion sickness during heavy waves"]},{id:"vr-zombie-shooter",title:"VR Zombie Shooter",subtitle:"First-Person 6DOF Immersive VR Game",category:"Games & VR",role:"Unity Gameplay Developer",shortDescription:"Action-packed first-person VR shooter featuring wave survival, spatial audio mapping, and realistic 6DOF weapon handling.",fullDescription:"An immersive virtual reality first-person game developed in Unity. Features realistic physics-based weapon reloading, tactile 6DOF controller feedback, spatial 3D audio, and intelligent enemy pathfinding algorithms.",tech:["Unity3D","C#","OpenXR","VR 6DOF","Spatial Audio","NavMesh AI"],keyWork:["Implemented 6DOF physical weapon grab, aim, and reload mechanics","Constructed multi-tiered enemy wave spawner with dynamic NavMesh routing","Configured 3D spatial soundscapes for audio-guided positional awareness"],architecturalHighlights:["Object pooling pipeline for projectiles, particle impacts, and enemy ragdolls to maintain a steady 90 FPS","Inverse kinematics (IK) player hand tracking"]},{id:"system-guard",title:"System Guard",subtitle:"Universal Kiosk Telemetry, Standby Tracker & Remote Kill-Switch",category:"Healthcare & Web3D",role:"Systems & Security Engineer",shortDescription:"Drop-in Electron kiosk monitoring module with hardware UUID fingerprinting, standby telemetry, and remote kill switch.",fullDescription:"A security and telemetry module designed for commercial medical kiosks. Auto-registers with a private Cloudflare Worker, generates tamper-resistant hardware UUID fingerprints, tracks active vs. standby operating time, and supports instant remote station locking.",tech:["Electron","Node.js crypto","Cloudflare Workers","Linux/Windows","Bash"],keyWork:["Hardware station fingerprinting via DMI product UUID and Linux machine ID","Inactivity detection transitioning kiosks cleanly between Active and Standby modes","Remote kill-switch protocol enabling instantaneous lockdown during security breaches"],architecturalHighlights:["Zero-dependency drop-in module requiring zero modification to existing game runtimes","Heartbeat ping architecture reporting kiosk health every 60 seconds with offline resilience"]},{id:"clean-the-city",title:"Clean the City",subtitle:"Mobile Physics Cleanup Game",category:"Games & VR",role:"Unity Mobile Developer",shortDescription:"Mobile casual game featuring black-hole gravitational physics to collect and absorb city debris.",fullDescription:"A mobile arcade game where players navigate an expanding black hole through urban environments, consuming city debris and buildings. Optimized for silky-smooth touch controls and high frame rates on both iOS and Android.",tech:["Unity3D","C#","Mobile (iOS/Android)","Physics2D/3D","Shader Graph"],keyWork:["Implemented gravitational suction physics and scalable mesh deformation","Optimized lighting, dynamic shadows, and draw-call batching for mobile performance","Integrated monetization SDKs and responsive touch controls"],architecturalHighlights:["Dynamic object scaling and collision culling to support hundreds of simultaneous physics bodies on mobile devices"]},{id:"iris-recognition",title:"Iris Recognition & Distance Detection",subtitle:"Biometric Identification & User Distance Prototype",category:"AI & Vision",role:"Computer Engineering Intern",shortDescription:"Image processing pipeline in Python and OpenCV calculating user distance from screen and biometric iris tracking.",fullDescription:"Developed during Ravi's engineering internship at Invisible Fiction. Built an image processing pipeline in Python and OpenCV that continuously tracks user eye position, computes user-to-screen distance to mitigate ocular fatigue, and evaluates iris features for biometric identification.",tech:["Python","OpenCV","NumPy","Image Processing"],keyWork:["Engineered user-to-screen geometric distance calculation using camera optical parameters","Constructed pupil and iris localization and contour isolation algorithms","Designed biometric distance warning thresholds to promote ergonomic computer usage"],architecturalHighlights:["Lightweight algorithmic pipeline running efficiently on standard webcam hardware without dedicated depth sensors"]},{id:"creative-spaces",title:"Creative Spaces Website",subtitle:"Interactive Architectural Showcase",category:"Healthcare & Web3D",role:"Freelance Web Developer",shortDescription:"Clean, responsive portfolio website built for an interior design and architectural client.",fullDescription:"A responsive website built for an interior design studio showcasing architectural design projects, interactive project galleries, and modern typography.",tech:["HTML5","CSS3","JavaScript","Responsive Web"],keyWork:["Constructed responsive image galleries and smooth scroll navigation","Optimized asset loading and mobile layout fidelity"],architecturalHighlights:["Clean semantic HTML structure with high Google Lighthouse performance scores"]}],x1=[{label:"All Systems",value:"All",count:en.length},{label:"Medical XR",value:"Medical XR",count:en.filter(t=>t.category==="Medical XR").length},{label:"Unreal Engine 5",value:"Unreal Engine 5",count:en.filter(t=>t.category==="Unreal Engine 5").length},{label:"Healthcare & Web3D",value:"Healthcare & Web3D",count:en.filter(t=>t.category==="Healthcare & Web3D").length},{label:"AI & Vision",value:"AI & Vision",count:en.filter(t=>t.category==="AI & Vision").length},{label:"Games & VR",value:"Games & VR",count:en.filter(t=>t.category==="Games & VR").length}],_1=({isOpen:t,onClose:e,onSelectProject:n})=>{const[i,r]=k.useState("All"),s=k.useRef(null);k.useEffect(()=>{const l=c=>{t&&(c.key==="Escape"?e():c.key==="ArrowRight"?o("right"):c.key==="ArrowLeft"&&o("left"))};return t&&(window.addEventListener("keydown",l),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",l),document.body.style.overflow="unset"}},[t,e]);const o=l=>{if(!s.current)return;const c=l==="right"?360:-360;s.current.scrollBy({left:c,behavior:"smooth"})};if(!t)return null;const a=i==="All"?en:en.filter(l=>l.category===i);return M.jsxs("div",{role:"dialog","aria-label":"Projects Archive Deck",className:"fixed inset-0 z-50 bg-[#06080e]/95 backdrop-blur-2xl flex flex-col p-6 md:p-10 animate-in fade-in duration-300",children:[M.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),M.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"ARCHIVE // 13 PRODUCTION SYSTEMS"})]}),M.jsxs("h2",{className:"text-2xl md:text-3xl font-black text-white tracking-tight",children:["Projects ",M.jsx("span",{className:"gradient-text",children:"Carousel Deck"})]})]}),M.jsxs("button",{type:"button",onClick:e,className:"group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-mono",children:[M.jsx("span",{children:"[ ESC ]"}),M.jsx(Qc,{className:"w-4 h-4 group-hover:rotate-90 transition-transform"})]})]}),M.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-6",children:[M.jsx("div",{className:"flex flex-wrap gap-2",children:x1.map(l=>{const c=i===l.value;return M.jsxs("button",{type:"button",onClick:()=>r(l.value),className:`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${c?"bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20 font-bold":"bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white"}`,children:[M.jsx("span",{children:l.label}),M.jsxs("span",{className:"text-[10px] opacity-60",children:["(",l.count,")"]})]},l.value)})}),M.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[M.jsx(On,{size:"icon",variant:"outline",onClick:()=>o("left"),className:"w-9 h-9 rounded-xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]","aria-label":"Scroll Left",children:M.jsx(lE,{className:"w-4 h-4"})}),M.jsx(On,{size:"icon",variant:"outline",onClick:()=>o("right"),className:"w-9 h-9 rounded-xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]","aria-label":"Scroll Right",children:M.jsx(cE,{className:"w-4 h-4"})})]})]}),M.jsx("div",{ref:s,className:"flex-1 flex gap-5 overflow-x-auto items-stretch pb-6 scrollbar-none snap-x snap-mandatory",style:{scrollbarWidth:"none"},children:a.map(l=>M.jsxs(Jc,{onClick:()=>n(l),className:"group shrink-0 w-[300px] sm:w-[340px] p-6 rounded-2xl bg-[#090c16]/90 border border-white/[0.08] hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/15 transition-all duration-300 flex flex-col justify-between cursor-pointer snap-start relative overflow-hidden",children:[M.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[M.jsx("span",{className:"font-mono text-[10px] tracking-wider text-cyan-400 uppercase font-semibold",children:l.category}),l.featured&&M.jsxs("span",{className:"flex items-center gap-1 font-mono text-[10px] text-indigo-400",children:[M.jsx(ya,{className:"w-3 h-3 text-cyan-400"})," Flagship"]})]}),M.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2",children:l.title}),M.jsx("p",{className:"font-mono text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4",children:l.subtitle}),l.metrics&&M.jsx("div",{className:"p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-4",children:M.jsxs("span",{className:"font-mono text-[11px] text-cyan-300 block line-clamp-1 font-medium",children:["⚡ ",l.metrics]})})]}),M.jsxs("div",{children:[M.jsx("div",{className:"flex flex-wrap gap-1.5 mb-4",children:l.tech.slice(0,3).map(c=>M.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-400",children:c},c))}),M.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-cyan-400 pt-3 border-t border-white/[0.06]",children:[M.jsx("span",{children:"[ INSPECT CASE ]"}),M.jsx($x,{className:"w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"})]})]})]},l.id))})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const up="186",y1=0,pg=1,S1=2,kl=1,M1=2,Lo=3,Kr=0,En=1,Ii=2,Si=0,Go=1,Mc=2,mg=3,gg=4,w1=5,ys=100,E1=101,b1=102,T1=103,A1=104,C1=200,R1=201,P1=202,N1=203,l_=204,c_=205,L1=206,D1=207,I1=208,U1=209,F1=210,O1=211,k1=212,B1=213,z1=214,_f=0,yf=1,Sf=2,la=3,Mf=4,wf=5,Ef=6,bf=7,u_=0,V1=1,H1=2,Mi=0,d_=1,f_=2,h_=3,dp=4,p_=5,m_=6,g_=7,v_=300,Zr=301,Js=302,Du=303,Iu=304,eu=306,ca=1e3,Oi=1001,Tf=1002,Xt=1003,G1=1004,ja=1005,nn=1006,Uu=1007,ki=1008,Dn=1009,x_=1010,__=1011,ua=1012,fp=1013,wi=1014,vi=1015,bn=1016,hp=1017,pp=1018,da=1020,y_=35902,S_=35899,M_=1021,w_=1022,si=1023,ji=1026,Vr=1027,E_=1028,mp=1029,Qr=1030,gp=1031,vp=1033,Bl=33776,zl=33777,Vl=33778,Hl=33779,Af=35840,Cf=35841,Rf=35842,Pf=35843,Nf=36196,Lf=37492,Df=37496,If=37488,Uf=37489,wc=37490,Ff=37491,Of=37808,kf=37809,Bf=37810,zf=37811,Vf=37812,Hf=37813,Gf=37814,Wf=37815,Xf=37816,jf=37817,Yf=37818,$f=37819,qf=37820,Kf=37821,Zf=36492,Qf=36494,Jf=36495,eh=36283,th=36284,Ec=36285,nh=36286,W1=3200,ih=0,X1=1,dr="",Nn="srgb",bc="srgb-linear",Tc="linear",st="srgb",Fu=7680,j1=519,Y1=512,$1=513,q1=514,xp=515,K1=516,Z1=517,_p=518,Q1=519,J1=35044,vg="300 es",xi=2e3,fa=2001;function eb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ac(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tb(){const t=Ac("canvas");return t.style.display="block",t}const xg={};function _g(...t){const e="THREE."+t.shift();console.log(e,...t)}function b_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=b_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function tt(...t){t=b_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Gs(...t){const e=t.join(" ");e in xg||(xg[e]=!0,Ie(...t))}function nb(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ib={[_f]:yf,[Sf]:Ef,[Mf]:bf,[la]:wf,[yf]:_f,[Ef]:Sf,[bf]:Mf,[wf]:la};class ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gl=Math.PI/180,rh=180/Math.PI;function Sa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function rb(t,e){return(t%e+e)%e}function Ou(t,e,n){return(1-n)*t+n*e}function yo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Np=class Np{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Np.prototype.isVector2=!0;let Fe=Np;class ao{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(h!==x||l!==d||c!==p||u!==g){let m=l*d+c*p+u*g+h*x;m<0&&(d=-d,p=-p,g=-g,x=-x,m=-m);let f=1-a;if(m<.9995){const v=Math.acos(m),w=Math.sin(v);f=Math.sin(f*v)/w,a=Math.sin(a*v)/w,l=l*f+d*a,c=c*f+p*a,u=u*f+g*a,h=h*f+x*a}else{l=l*f+d*a,c=c*f+p*a,u=u*f+g*a,h=h*f+x*a;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*h+l*p-c*d,e[n+1]=l*g+u*d+c*h-a*p,e[n+2]=c*g+u*p+a*d-l*h,e[n+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Lp=class Lp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lp.prototype.isVector3=!0;let L=Lp;const ku=new L,yg=new ao,Dp=class Dp{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],x=r[0],m=r[3],f=r[6],v=r[1],w=r[4],S=r[7],b=r[2],T=r[5],A=r[8];return s[0]=o*x+a*v+l*b,s[3]=o*m+a*w+l*T,s[6]=o*f+a*S+l*A,s[1]=c*x+u*v+h*b,s[4]=c*m+u*w+h*T,s[7]=c*f+u*S+h*A,s[2]=d*x+p*v+g*b,s[5]=d*m+p*w+g*T,s[8]=d*f+p*S+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(e,n)),this}rotate(e){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-e)),this}translate(e,n){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dp.prototype.isMatrix3=!0;let ke=Dp;const Bu=new ke,Sg=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mg=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sb(){const t={enabled:!0,workingColorSpace:bc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=Ws(r.r),r.g=Ws(r.g),r.b=Ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===dr?Tc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[bc]:{primaries:e,whitePoint:i,transfer:Tc,toXYZ:Sg,fromXYZ:Mg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Sg,fromXYZ:Mg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const Ze=sb();function Vi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let as;class ob{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=Ac("canvas")),as.width=e.width,as.height=e.height;const r=as.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=as}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ac("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vi(n[i]/255)*255):n[i]=Vi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ab=0;class yp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Sa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zu(r[o].image)):s.push(zu(r[o]))}else s=zu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function zu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ob.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let lb=0;const Vu=new L;class sn extends ns{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Oi,r=Oi,s=nn,o=ki,a=si,l=Dn,c=sn.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Sa(),this.name="",this.source=new yp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vu).x}get height(){return this.source.getSize(Vu).y}get depth(){return this.source.getSize(Vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=v_;sn.DEFAULT_ANISOTROPY=1;const Ip=class Ip{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(c+1)/2,S=(p+1)/2,b=(f+1)/2,T=(u+d)/4,A=(h+x)/4,_=(g+m)/4;return w>S&&w>b?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=A/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=_/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=_/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ip.prototype.isVector4=!0;let wt=Ip;class cb extends ns{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new sn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new yp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends cb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class T_ extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ub extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Nc=class Nc{constructor(e,n,i,r,s,o,a,l,c,u,h,d,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,x,m)}set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,x=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,x=c*h;n[0]=d+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,x=c*h;n[0]=d-x*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,x=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-d*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+x,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(db,e,fb)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),er.crossVectors(i,Cn),er.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),er.crossVectors(i,Cn)),er.normalize(),Ya.crossVectors(Cn,er),r[0]=er.x,r[4]=Ya.x,r[8]=Cn.x,r[1]=er.y,r[5]=Ya.y,r[9]=Cn.y,r[2]=er.z,r[6]=Ya.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],v=i[3],w=i[7],S=i[11],b=i[15],T=r[0],A=r[4],_=r[8],C=r[12],P=r[1],U=r[5],F=r[9],W=r[13],N=r[2],V=r[6],Q=r[10],Y=r[14],H=r[3],z=r[7],D=r[11],$=r[15];return s[0]=o*T+a*P+l*N+c*H,s[4]=o*A+a*U+l*V+c*z,s[8]=o*_+a*F+l*Q+c*D,s[12]=o*C+a*W+l*Y+c*$,s[1]=u*T+h*P+d*N+p*H,s[5]=u*A+h*U+d*V+p*z,s[9]=u*_+h*F+d*Q+p*D,s[13]=u*C+h*W+d*Y+p*$,s[2]=g*T+x*P+m*N+f*H,s[6]=g*A+x*U+m*V+f*z,s[10]=g*_+x*F+m*Q+f*D,s[14]=g*C+x*W+m*Y+f*$,s[3]=v*T+w*P+S*N+b*H,s[7]=v*A+w*U+S*V+b*z,s[11]=v*_+w*F+S*Q+b*D,s[15]=v*C+w*W+S*Y+b*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15],v=l*p-c*d,w=a*p-c*h,S=a*d-l*h,b=o*p-c*u,T=o*d-l*u,A=o*h-a*u;return n*(x*v-m*w+f*S)-i*(g*v-m*b+f*T)+r*(g*w-x*b+f*A)-s*(g*S-x*T+m*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],v=n*a-i*o,w=n*l-r*o,S=n*c-s*o,b=i*l-r*a,T=i*c-s*a,A=r*c-s*l,_=u*x-h*g,C=u*m-d*g,P=u*f-p*g,U=h*m-d*x,F=h*f-p*x,W=d*f-p*m,N=v*W-w*F+S*U+b*P-T*C+A*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/N;return e[0]=(a*W-l*F+c*U)*V,e[1]=(r*F-i*W-s*U)*V,e[2]=(x*A-m*T+f*b)*V,e[3]=(d*T-h*A-p*b)*V,e[4]=(l*P-o*W-c*C)*V,e[5]=(n*W-r*P+s*C)*V,e[6]=(m*S-g*A-f*w)*V,e[7]=(u*A-d*S+p*w)*V,e[8]=(o*F-a*P+c*_)*V,e[9]=(i*P-n*F-s*_)*V,e[10]=(g*T-x*S+f*v)*V,e[11]=(h*S-u*T-p*v)*V,e[12]=(a*C-o*U-l*_)*V,e[13]=(n*U-i*C+r*_)*V,e[14]=(x*w-g*b-m*v)*V,e[15]=(u*b-h*w+d*v)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,x=o*u,m=o*h,f=a*h,v=l*c,w=l*u,S=l*h,b=i.x,T=i.y,A=i.z;return r[0]=(1-(x+f))*b,r[1]=(p+S)*b,r[2]=(g-w)*b,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+f))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+w)*A,r[9]=(m-v)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ls.set(r[0],r[1],r[2]).length();const a=ls.set(r[4],r[5],r[6]).length(),l=ls.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Jn.copy(this);const c=1/o,u=1/a,h=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,n.setFromRotationMatrix(Jn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=xi,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===xi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===fa)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=xi,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===xi)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===fa)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Nc.prototype.isMatrix4=!0;let xt=Nc;const ls=new L,Jn=new xt,db=new L(0,0,0),fb=new L(1,1,1),er=new L,Ya=new L,Cn=new L,wg=new xt,Eg=new ao;class Tr{constructor(e=0,n=0,i=0,r=Tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Eg.setFromEuler(this),this.setFromQuaternion(Eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tr.DEFAULT_ORDER="XYZ";class A_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hb=0;const bg=new L,cs=new ao,Ti=new xt,$a=new L,So=new L,pb=new L,mb=new ao,Tg=new L(1,0,0),Ag=new L(0,1,0),Cg=new L(0,0,1),Rg={type:"added"},gb={type:"removed"},us={type:"childadded",child:null},Hu={type:"childremoved",child:null};class on extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=Sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new L,n=new Tr,i=new ao,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new ke}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new A_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(Ag,e)}rotateZ(e){return this.rotateOnAxis(Cg,e)}translateOnAxis(e,n){return bg.copy(e).applyQuaternion(this.quaternion),this.position.add(bg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(Ag,e)}translateZ(e){return this.translateOnAxis(Cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$a.copy(e):$a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(So,$a,this.up):Ti.lookAt($a,So,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(Ti),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rg),us.child=e,this.dispatchEvent(us),us.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gb),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rg),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,mb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}on.DEFAULT_UP=new L(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ds extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vb={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const C_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=rb(e,1),n=Ye(n,0,1),i=Ye(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Wu(o,s,e+1/3),this.g=Wu(o,s,e),this.b=Wu(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=C_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Ze.workingToColorSpace(Jt.copy(this),e),Math.round(Ye(Jt.r*255,0,255))*65536+Math.round(Ye(Jt.g*255,0,255))*256+Math.round(Ye(Jt.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Nn){Ze.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(qa);const i=Ou(tr.h,qa.h,n),r=Ou(tr.s,qa.s,n),s=Ou(tr.l,qa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new He;He.NAMES=C_;class Sp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=n}clone(){return new Sp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xb extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tr,this.environmentIntensity=1,this.environmentRotation=new Tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ei=new L,Ai=new L,Xu=new L,Ci=new L,ds=new L,fs=new L,Pg=new L,ju=new L,Yu=new L,$u=new L,qu=new wt,Ku=new wt,Zu=new wt;class Xn{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Ai.subVectors(i,n),Xu.subVectors(e,n);const o=ei.dot(ei),a=ei.dot(Ai),l=ei.dot(Xu),c=Ai.dot(Ai),u=Ai.dot(Xu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return qu.setScalar(0),Ku.setScalar(0),Zu.setScalar(0),qu.fromBufferAttribute(e,n),Ku.fromBufferAttribute(e,i),Zu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(qu,s.x),o.addScaledVector(Ku,s.y),o.addScaledVector(Zu,s.z),o}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Ai.subVectors(e,n),ei.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ei.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ds.subVectors(r,i),fs.subVectors(s,i),ju.subVectors(e,i);const l=ds.dot(ju),c=fs.dot(ju);if(l<=0&&c<=0)return n.copy(i);Yu.subVectors(e,r);const u=ds.dot(Yu),h=fs.dot(Yu);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ds,o);$u.subVectors(e,s);const p=ds.dot($u),g=fs.dot($u);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(fs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Pg.subVectors(s,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(Pg,a);const f=1/(m+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector(ds,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ma{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(s,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Za.subVectors(this.max,Mo),hs.subVectors(e.a,Mo),ps.subVectors(e.b,Mo),ms.subVectors(e.c,Mo),nr.subVectors(ps,hs),ir.subVectors(ms,ps),Nr.subVectors(hs,ms);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Nr.z,Nr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Nr.z,0,-Nr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Nr.y,Nr.x,0];return!Qu(n,hs,ps,ms,Za)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,hs,ps,ms,Za))?!1:(Qa.crossVectors(nr,ir),n=[Qa.x,Qa.y,Qa.z],Qu(n,hs,ps,ms,Za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new L,new L,new L,new L,new L,new L,new L,new L],ti=new L,Ka=new Ma,hs=new L,ps=new L,ms=new L,nr=new L,ir=new L,Nr=new L,Mo=new L,Za=new L,Qa=new L,Lr=new L;function Qu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Lr.fromArray(t,s);const a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),l=e.dot(Lr),c=n.dot(Lr),u=i.dot(Lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Nt=new L,Ja=new Fe;let _b=0;class $n extends ns{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_b++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=J1,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ja.fromBufferAttribute(this,n),Ja.applyMatrix3(e),this.setXY(n,Ja.x,Ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=yo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=yo(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=yo(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=yo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=yo(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class R_ extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class P_ extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tn extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}const yb=new Ma,wo=new L,Ju=new L;class wa{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const n=wo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(wo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(Ju)),this.expandByPoint(wo.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Sb=0;const Hn=new xt,ed=new on,gs=new L,Rn=new Ma,Eo=new Ma,zt=new L;class an extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=Sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eb(e)?P_:R_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return ed.lookAt(e),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Rn.min,Eo.min),Rn.expandByPoint(zt),zt.addVectors(Rn.max,Eo.max),Rn.expandByPoint(zt)):(Rn.expandByPoint(Eo.min),Rn.expandByPoint(Eo.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),zt.add(gs)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new $n(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new L,l[_]=new L;const c=new L,u=new L,h=new L,d=new Fe,p=new Fe,g=new Fe,x=new L,m=new L;function f(_,C,P){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,_),p.fromBufferAttribute(s,C),g.fromBufferAttribute(s,P),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(U),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[_].add(x),a[C].add(x),a[P].add(x),l[_].add(m),l[C].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,C=v.length;_<C;++_){const P=v[_],U=P.start,F=P.count;for(let W=U,N=U+F;W<N;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const w=new L,S=new L,b=new L,T=new L;function A(_){b.fromBufferAttribute(r,_),T.copy(b);const C=a[_];w.copy(C),w.sub(b.multiplyScalar(b.dot(C))).normalize(),S.crossVectors(T,C);const U=S.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,U)}for(let _=0,C=v.length;_<C;++_){const P=v[_],U=P.start,F=P.count;for(let W=U,N=U+F;W<N;W+=3)A(e.getX(W+0)),A(e.getX(W+1)),A(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new $n(d,u,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new an,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new L,Mb=new L,wb=new ke;class lr{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=td.subVectors(i,n).cross(Mb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(td),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wb.getNormalMatrix(e),r=this.coplanarPoint(td).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Eb=0;class is extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Sa(),this.name="",this.type="Material",this.blending=Go,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=l_,this.blendDst=c_,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fu,this.stencilZFail=Fu,this.stencilZPass=Fu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new lr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pi=new L,nd=new L,el=new L,tl=new L;class Mp{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nd.copy(e).add(n).multiplyScalar(.5),el.copy(n).sub(e).normalize(),tl.copy(this.origin).sub(nd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(el),a=tl.dot(this.direction),l=-tl.dot(el),c=tl.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(nd).addScaledVector(el,d),p}intersectSphere(e,n){if(e.radius<0)return null;Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,p=e.z-o.z,g=n.x-o.x,x=n.y-o.y,m=n.z-o.z,f=i.x-o.x,v=i.y-o.y,w=i.z-o.z,S=Math.abs(l),b=Math.abs(c),T=Math.abs(u);let A,_,C,P,U,F,W,N,V,Q,Y,H;if(S>=b&&S>=T?(C=l,F=h,V=g,H=f,l>=0?(A=c,_=u,P=d,U=p,W=x,N=m,Q=v,Y=w):(A=u,_=c,P=p,U=d,W=m,N=x,Q=w,Y=v)):b>=T?(C=c,F=d,V=x,H=v,c>=0?(A=u,_=l,P=p,U=h,W=m,N=g,Q=w,Y=f):(A=l,_=u,P=h,U=p,W=g,N=m,Q=f,Y=w)):(C=u,F=p,V=m,H=w,u>=0?(A=l,_=c,P=h,U=d,W=g,N=x,Q=f,Y=v):(A=c,_=l,P=d,U=h,W=x,N=g,Q=v,Y=f)),C===0)return null;const z=A/C,D=_/C,$=1/C,se=P-z*F,ce=U-D*F,Ne=W-z*V,Ue=N-D*V,Oe=Q-z*H,Z=Y-D*H,ne=Oe*Ue-Z*Ne,ae=se*Z-ce*Oe,Le=Ne*ce-Ue*se;if(r){if(ne<0||ae<0||Le<0)return null}else if((ne<0||ae<0||Le<0)&&(ne>0||ae>0||Le>0))return null;const xe=ne+ae+Le;if(xe===0)return null;const ze=$*(ne*F+ae*V+Le*H);return(xe>0?ze<0:ze>0)?null:this.at(ze/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xs extends is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=u_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ng=new xt,Dr=new Mp,nl=new wa,Lg=new L,il=new L,rl=new L,sl=new L,id=new L,ol=new L,Dg=new L,al=new L;class Ut extends on{constructor(e=new an,n=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ol.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(id.fromBufferAttribute(h,e),o?ol.addScaledVector(id,u):ol.addScaledVector(id.sub(n),u))}n.add(ol)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(nl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(nl,Lg)===null||Dr.origin.distanceToSquared(Lg)>(e.far-e.near)**2))&&(Ng.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Ng),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,b=w;S<b;S+=3){const T=a.getX(S),A=a.getX(S+1),_=a.getX(S+2);r=ll(this,f,e,i,c,u,h,T,A,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);r=ll(this,o,e,i,c,u,h,v,w,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,b=w;S<b;S+=3){const T=S,A=S+1,_=S+2;r=ll(this,f,e,i,c,u,h,T,A,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const v=m,w=m+1,S=m+2;r=ll(this,o,e,i,c,u,h,v,w,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function bb(t,e,n,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Kr,a),l===null)return null;al.copy(a),al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(al);return c<n.near||c>n.far?null:{distance:c,point:al.clone(),object:t}}function ll(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,il),t.getVertexPosition(l,rl),t.getVertexPosition(c,sl);const u=bb(t,e,n,i,il,rl,sl,Dg);if(u){const h=new L;Xn.getBarycoord(Dg,il,rl,sl,h),r&&(u.uv=Xn.getInterpolatedAttribute(r,a,l,c,h,new Fe)),s&&(u.uv1=Xn.getInterpolatedAttribute(s,a,l,c,h,new Fe)),o&&(u.normal=Xn.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Xn.getNormal(il,rl,sl,d.normal),u.face=d,u.barycoord=h}return u}class Tb extends sn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Xt,u=Xt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ir=new wa,Ab=new Fe(.5,.5),cl=new L;class wp{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],x=s[9],m=s[10],f=s[11],v=s[12],w=s[13],S=s[14],b=s[15];if(r[0].setComponents(c-o,p-u,f-g,b-v).normalize(),r[1].setComponents(c+o,p+u,f+g,b+v).normalize(),r[2].setComponents(c+a,p+h,f+x,b+w).normalize(),r[3].setComponents(c-a,p-h,f-x,b-w).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,p-d,f-m,b-S).normalize();else if(r[4].setComponents(c-l,p-d,f-m,b-S).normalize(),n===xi)r[5].setComponents(c+l,p+d,f+m,b+S).normalize();else if(n===fa)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const n=Ab.distanceTo(e.center);return Ir.radius=.7071067811865476+n,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wl extends is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new L,Rc=new L,Ig=new xt,bo=new Mp,ul=new wa,rd=new L,Ug=new L;class N_ extends on{constructor(e=new an,n=new Wl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Cc.fromBufferAttribute(n,r-1),Rc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Cc.distanceTo(Rc);e.setAttribute("lineDistance",new Tn(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(r),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;Ig.copy(r).invert(),bo.copy(e.ray).applyMatrix4(Ig);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=u.getX(x),v=u.getX(x+1),w=dl(this,e,bo,l,f,v,x);w&&n.push(w)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),f=dl(this,e,bo,l,x,m,g-1);f&&n.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=dl(this,e,bo,l,x,x+1,x);f&&n.push(f)}if(this.isLineLoop){const x=dl(this,e,bo,l,g-1,p,g-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function dl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Cc.fromBufferAttribute(a,r),Rc.fromBufferAttribute(a,s),n.distanceSqToSegment(Cc,Rc,rd,Ug)>i)return;rd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(rd);if(!(c<e.near||c>e.far))return{distance:c,point:Ug.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Fg=new L,Og=new L;class kg extends N_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Fg.fromBufferAttribute(n,r),Og.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Fg.distanceTo(Og);e.setAttribute("lineDistance",new Tn(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class L_ extends is{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bg=new xt,sh=new Mp,fl=new wa,hl=new L;class Cb extends on{constructor(e=new an,n=new L_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(r),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;Bg.copy(r).invert(),sh.copy(e.ray).applyMatrix4(Bg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,x=p;g<x;g++){const m=c.getX(g);hl.fromBufferAttribute(h,m),zg(hl,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,x=p;g<x;g++)hl.fromBufferAttribute(h,g),zg(hl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zg(t,e,n,i,r,s,o){const a=sh.distanceSqToPoint(t);if(a<n){const l=new L;sh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class D_ extends sn{constructor(e=[],n=Zr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eo extends sn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ha extends sn{constructor(e,n,i=wi,r,s,o,a=Xt,l=Xt,c,u=ji,h=1){if(u!==ji&&u!==Vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Rb extends ha{constructor(e,n=wi,i=Zr,r,s,o=Xt,a=Xt,l,c=ji){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class I_ extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bi extends an{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(u,3)),this.setAttribute("uv",new Tn(h,2));function g(x,m,f,v,w,S,b,T,A,_,C){const P=S/A,U=b/_,F=S/2,W=b/2,N=T/2,V=A+1,Q=_+1;let Y=0,H=0;const z=new L;for(let D=0;D<Q;D++){const $=D*U-W;for(let se=0;se<V;se++){const ce=se*P-F;z[x]=ce*v,z[m]=$*w,z[f]=N,c.push(z.x,z.y,z.z),z[x]=0,z[m]=0,z[f]=T>0?1:-1,u.push(z.x,z.y,z.z),h.push(se/A),h.push(1-D/_),Y+=1}}for(let D=0;D<_;D++)for(let $=0;$<A;$++){const se=d+$+V*D,ce=d+$+V*(D+1),Ne=d+($+1)+V*(D+1),Ue=d+($+1)+V*D;l.push(se,ce,Ue),l.push(ce,Ne,Ue),H+=6}a.addGroup(p,H,C),p+=H,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const pl=new L,ml=new L,sd=new L,gl=new Xn;class Pb extends an{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Gl*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:m,c:f}=gl;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),gl.getNormal(sd),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const w=(v+1)%3,S=h[v],b=h[w],T=gl[u[v]],A=gl[u[w]],_=`${S}_${b}`,C=`${b}_${S}`;C in d&&d[C]?(sd.dot(d[C].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(A.x,A.y,A.z)),d[C]=null):_ in d||(d[_]={index0:c[v],index1:c[w],normal:sd.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:m}=d[g];pl.fromBufferAttribute(a,x),ml.fromBufferAttribute(a,m),p.push(pl.x,pl.y,pl.z),p.push(ml.x,ml.y,ml.z)}this.setAttribute("position",new Tn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Nb{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Fe:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new L,r=[],s=[],o=[],a=new L,l=new xt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ye(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ye(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Ep(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Vg=new L,Hg=new L,od=new Ep,ad=new Ep,ld=new Ep;class Lb extends Nb{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new L){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Hg.subVectors(r[0],r[1]).add(r[0]),c=Hg);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Vg.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Vg),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),od.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),ad.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),ld.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(od.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ad.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ld.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(od.calc(l),ad.calc(l),ld.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class mr extends an{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const v=f*d-o;for(let w=0;w<c;w++){const S=w*h-s;g.push(S,-v,0),x.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const w=v+c*f,S=v+c*(f+1),b=v+1+c*(f+1),T=v+1+c*f;p.push(w,S,T),p.push(S,b,T)}this.setIndex(p),this.setAttribute("position",new Tn(g,3)),this.setAttribute("normal",new Tn(x,3)),this.setAttribute("uv",new Tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.widthSegments,e.heightSegments)}}function to(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Gg(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Gg(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=to(t[n]);for(const r in i)e[r]=i[r]}return e}function Gg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Db(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function U_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Pc={clone:to,merge:un};var Ib=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ib,this.fragmentShader=Ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=Db(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new He().setHex(r.value);break;case"v2":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new L().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Fb extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vl extends is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ob extends is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kb extends is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class F_ extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const cd=new xt,Wg=new L,Xg=new L;class Bb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wp,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Wg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wg),Xg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Xg),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){cd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(cd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===fa||e.reversedDepth?n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),n.multiply(cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xl=new L,_l=new ao,fi=new L;class O_ extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xl,_l,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xl,_l,fi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(xl,_l,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xl,_l,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new L,jg=new Fe,Yg=new Fe;class Ln extends O_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rh*2*Math.atan(Math.tan(Gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,jg,Yg),n.subVectors(Yg,jg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class zb extends Bb{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0}}class yl extends F_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new zb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class bp extends O_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Vb extends F_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const vs=-90,xs=1;class Hb extends on{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(vs,xs,e,n);r.layers=this.layers,this.add(r);const s=new Ln(vs,xs,e,n);s.layers=this.layers,this.add(s);const o=new Ln(vs,xs,e,n);o.layers=this.layers,this.add(o);const a=new Ln(vs,xs,e,n);a.layers=this.layers,this.add(a);const l=new Ln(vs,xs,e,n);l.layers=this.layers,this.add(l);const c=new Ln(vs,xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gb extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Wb{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Xb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Xb(){this._document.hidden===!1&&this.reset()}class jb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Up=class Up{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Up.prototype.isMatrix2=!0;let $g=Up;function qg(t,e,n,i){const r=Yb(i);switch(n){case M_:return t*e;case E_:return t*e/r.components*r.byteLength;case mp:return t*e/r.components*r.byteLength;case Qr:return t*e*2/r.components*r.byteLength;case gp:return t*e*2/r.components*r.byteLength;case w_:return t*e*3/r.components*r.byteLength;case si:return t*e*4/r.components*r.byteLength;case vp:return t*e*4/r.components*r.byteLength;case Bl:case zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cf:case Pf:return Math.max(t,16)*Math.max(e,8)/4;case Af:case Rf:return Math.max(t,8)*Math.max(e,8)/2;case Nf:case Lf:case If:case Uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Df:case wc:case Ff:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Zf:case Qf:case Jf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case eh:case th:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ec:case nh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Yb(t){switch(t){case Dn:case x_:return{byteLength:1,components:1};case ua:case __:case bn:return{byteLength:2,components:1};case hp:case pp:return{byteLength:2,components:4};case wi:case fp:case vi:return{byteLength:4,components:1};case y_:case S_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function k_(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $b(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kb=`#ifdef USE_ALPHAHASH
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
#endif`,Zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tT=`#ifdef USE_AOMAP
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
#endif`,nT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iT=`#ifdef USE_BATCHING
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
#endif`,rT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lT=`#ifdef USE_IRIDESCENCE
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
#endif`,cT=`#ifdef USE_BUMPMAP
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
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xT=`#define PI 3.141592653589793
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
} // validated`,_T=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yT=`vec3 transformedNormal = objectNormal;
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
#endif`,ST=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bT="gl_FragColor = linearToOutputTexel( gl_FragColor );",TT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AT=`#ifdef USE_ENVMAP
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
#endif`,CT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
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
#endif`,PT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NT=`#ifdef USE_ENVMAP
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
#endif`,LT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FT=`#ifdef USE_GRADIENTMAP
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
}`,OT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,VT=`#ifdef USE_ENVMAP
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
#endif`,HT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jT=`PhysicalMaterial material;
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
#endif`,YT=`uniform sampler2D dfgLUT;
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
}`,$T=`
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
#endif`,qT=`#if defined( RE_IndirectDiffuse )
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
#endif`,KT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,QT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sA=`#if defined( USE_POINTS_UV )
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
#endif`,oA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dA=`#ifdef USE_MORPHTARGETS
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
#endif`,fA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xA=`#ifdef USE_NORMALMAP
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
#endif`,_A=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IA=`float getShadowMask() {
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
}`,UA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FA=`#ifdef USE_SKINNING
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
#endif`,OA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kA=`#ifdef USE_SKINNING
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
#endif`,BA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GA=`#ifdef USE_TRANSMISSION
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
#endif`,WA=`#ifdef USE_TRANSMISSION
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
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$A=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KA=`uniform sampler2D t2D;
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
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tC=`#include <common>
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
}`,nC=`#if DEPTH_PACKING == 3200
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
}`,iC=`#define DISTANCE
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
}`,rC=`#define DISTANCE
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
}`,sC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aC=`uniform float scale;
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
}`,lC=`uniform vec3 diffuse;
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
}`,cC=`#include <common>
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
}`,uC=`uniform vec3 diffuse;
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
}`,dC=`#define LAMBERT
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
}`,fC=`#define LAMBERT
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
}`,hC=`#define MATCAP
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
}`,pC=`#define MATCAP
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
}`,mC=`#define NORMAL
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
}`,gC=`#define NORMAL
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
}`,vC=`#define PHONG
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
}`,xC=`#define PHONG
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
}`,_C=`#define STANDARD
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
}`,yC=`#define STANDARD
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
}`,SC=`#define TOON
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
}`,MC=`#define TOON
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
}`,wC=`uniform float size;
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
}`,EC=`uniform vec3 diffuse;
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
}`,bC=`#include <common>
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
}`,TC=`uniform vec3 color;
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
}`,AC=`uniform float rotation;
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
}`,CC=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:qb,alphahash_pars_fragment:Kb,alphamap_fragment:Zb,alphamap_pars_fragment:Qb,alphatest_fragment:Jb,alphatest_pars_fragment:eT,aomap_fragment:tT,aomap_pars_fragment:nT,batching_pars_vertex:iT,batching_vertex:rT,begin_vertex:sT,beginnormal_vertex:oT,bsdfs:aT,iridescence_fragment:lT,bumpmap_pars_fragment:cT,clipping_planes_fragment:uT,clipping_planes_pars_fragment:dT,clipping_planes_pars_vertex:fT,clipping_planes_vertex:hT,color_fragment:pT,color_pars_fragment:mT,color_pars_vertex:gT,color_vertex:vT,common:xT,cube_uv_reflection_fragment:_T,defaultnormal_vertex:yT,displacementmap_pars_vertex:ST,displacementmap_vertex:MT,emissivemap_fragment:wT,emissivemap_pars_fragment:ET,colorspace_fragment:bT,colorspace_pars_fragment:TT,envmap_fragment:AT,envmap_common_pars_fragment:CT,envmap_pars_fragment:RT,envmap_pars_vertex:PT,envmap_physical_pars_fragment:VT,envmap_vertex:NT,fog_vertex:LT,fog_pars_vertex:DT,fog_fragment:IT,fog_pars_fragment:UT,gradientmap_pars_fragment:FT,lightmap_pars_fragment:OT,lights_lambert_fragment:kT,lights_lambert_pars_fragment:BT,lights_pars_begin:zT,lights_toon_fragment:HT,lights_toon_pars_fragment:GT,lights_phong_fragment:WT,lights_phong_pars_fragment:XT,lights_physical_fragment:jT,lights_physical_pars_fragment:YT,lights_fragment_begin:$T,lights_fragment_maps:qT,lights_fragment_end:KT,lightprobes_pars_fragment:ZT,logdepthbuf_fragment:QT,logdepthbuf_pars_fragment:JT,logdepthbuf_pars_vertex:eA,logdepthbuf_vertex:tA,map_fragment:nA,map_pars_fragment:iA,map_particle_fragment:rA,map_particle_pars_fragment:sA,metalnessmap_fragment:oA,metalnessmap_pars_fragment:aA,morphinstance_vertex:lA,morphcolor_vertex:cA,morphnormal_vertex:uA,morphtarget_pars_vertex:dA,morphtarget_vertex:fA,normal_fragment_begin:hA,normal_fragment_maps:pA,normal_pars_fragment:mA,normal_pars_vertex:gA,normal_vertex:vA,normalmap_pars_fragment:xA,clearcoat_normal_fragment_begin:_A,clearcoat_normal_fragment_maps:yA,clearcoat_pars_fragment:SA,iridescence_pars_fragment:MA,opaque_fragment:wA,packing:EA,premultiplied_alpha_fragment:bA,project_vertex:TA,dithering_fragment:AA,dithering_pars_fragment:CA,roughnessmap_fragment:RA,roughnessmap_pars_fragment:PA,shadowmap_pars_fragment:NA,shadowmap_pars_vertex:LA,shadowmap_vertex:DA,shadowmask_pars_fragment:IA,skinbase_vertex:UA,skinning_pars_vertex:FA,skinning_vertex:OA,skinnormal_vertex:kA,specularmap_fragment:BA,specularmap_pars_fragment:zA,tonemapping_fragment:VA,tonemapping_pars_fragment:HA,transmission_fragment:GA,transmission_pars_fragment:WA,uv_pars_fragment:XA,uv_pars_vertex:jA,uv_vertex:YA,worldpos_vertex:$A,background_vert:qA,background_frag:KA,backgroundCube_vert:ZA,backgroundCube_frag:QA,cube_vert:JA,cube_frag:eC,depth_vert:tC,depth_frag:nC,distance_vert:iC,distance_frag:rC,equirect_vert:sC,equirect_frag:oC,linedashed_vert:aC,linedashed_frag:lC,meshbasic_vert:cC,meshbasic_frag:uC,meshlambert_vert:dC,meshlambert_frag:fC,meshmatcap_vert:hC,meshmatcap_frag:pC,meshnormal_vert:mC,meshnormal_frag:gC,meshphong_vert:vC,meshphong_frag:xC,meshphysical_vert:_C,meshphysical_frag:yC,meshtoon_vert:SC,meshtoon_frag:MC,points_vert:wC,points_frag:EC,shadow_vert:bC,shadow_frag:TC,sprite_vert:AC,sprite_frag:CC},ge={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},mi={basic:{uniforms:un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:un([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:un([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:un([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:un([ge.points,ge.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:un([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:un([ge.common,ge.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:un([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:un([ge.sprite,ge.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:un([ge.common,ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:un([ge.lights,ge.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};mi.physical={uniforms:un([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Sl={r:0,b:0,g:0},RC=new xt,B_=new ke;B_.set(-1,0,0,0,1,0,0,0,1);function PC(t,e,n,i,r,s){const o=new He(0);let a=r===!0?0:1,l,c,u=null,h=0,d=null;function p(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const S=v.backgroundBlurriness>0;w=e.get(w,S)}return w}function g(v){let w=!1;const S=p(v);S===null?m(o,a):S&&S.isColor&&(m(S,1),w=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(v,w){const S=p(w);S&&(S.isCubeTexture||S.mapping===eu)?(c===void 0&&(c=new Ut(new Bi(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:to(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(RC.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(B_),c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==st,(u!==S||h!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ut(new mr(2,2),new rn({name:"BackgroundMaterial",uniforms:to(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(Sl,U_(t)),n.buffers.color.setClear(Sl.r,Sl.g,Sl.b,w,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:f}}function NC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(U,F,W,N,V){let Q=!1;const Y=h(U,N,W,F);s!==Y&&(s=Y,c(s.object)),Q=p(U,N,W,V),Q&&g(U,N,W,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,S(U,F,W,N),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(U){return t.bindVertexArray(U)}function u(U){return t.deleteVertexArray(U)}function h(U,F,W,N){const V=N.wireframe===!0;let Q=i[F.id];Q===void 0&&(Q={},i[F.id]=Q);const Y=U.isInstancedMesh===!0?U.id:0;let H=Q[Y];H===void 0&&(H={},Q[Y]=H);let z=H[W.id];z===void 0&&(z={},H[W.id]=z);let D=z[V];return D===void 0&&(D=d(l()),z[V]=D),D}function d(U){const F=[],W=[],N=[];for(let V=0;V<n;V++)F[V]=0,W[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:N,object:U,attributes:{},index:null}}function p(U,F,W,N){const V=s.attributes,Q=F.attributes;let Y=0;const H=W.getAttributes();for(const z in H)if(H[z].location>=0){const $=V[z];let se=Q[z];if(se===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;Y++}return s.attributesNum!==Y||s.index!==N}function g(U,F,W,N){const V={},Q=F.attributes;let Y=0;const H=W.getAttributes();for(const z in H)if(H[z].location>=0){let $=Q[z];$===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&($=U.instanceColor));const se={};se.attribute=$,$&&$.data&&(se.data=$.data),V[z]=se,Y++}s.attributes=V,s.attributesNum=Y,s.index=N}function x(){const U=s.newAttributes;for(let F=0,W=U.length;F<W;F++)U[F]=0}function m(U){f(U,0)}function f(U,F){const W=s.newAttributes,N=s.enabledAttributes,V=s.attributeDivisors;W[U]=1,N[U]===0&&(t.enableVertexAttribArray(U),N[U]=1),V[U]!==F&&(t.vertexAttribDivisor(U,F),V[U]=F)}function v(){const U=s.newAttributes,F=s.enabledAttributes;for(let W=0,N=F.length;W<N;W++)F[W]!==U[W]&&(t.disableVertexAttribArray(W),F[W]=0)}function w(U,F,W,N,V,Q,Y){Y===!0?t.vertexAttribIPointer(U,F,W,V,Q):t.vertexAttribPointer(U,F,W,N,V,Q)}function S(U,F,W,N){x();const V=N.attributes,Q=W.getAttributes(),Y=F.defaultAttributeValues;for(const H in Q){const z=Q[H];if(z.location>=0){let D=V[H];if(D===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(D=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(D=U.instanceColor)),D!==void 0){const $=D.normalized,se=D.itemSize,ce=e.get(D);if(ce===void 0)continue;const Ne=ce.buffer,Ue=ce.type,Oe=ce.bytesPerElement,Z=Ue===t.INT||Ue===t.UNSIGNED_INT||D.gpuType===fp;if(D.isInterleavedBufferAttribute){const ne=D.data,ae=ne.stride,Le=D.offset;if(ne.isInstancedInterleavedBuffer){for(let xe=0;xe<z.locationSize;xe++)f(z.location+xe,ne.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<z.locationSize;xe++)m(z.location+xe);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let xe=0;xe<z.locationSize;xe++)w(z.location+xe,se/z.locationSize,Ue,$,ae*Oe,(Le+se/z.locationSize*xe)*Oe,Z)}else{if(D.isInstancedBufferAttribute){for(let ne=0;ne<z.locationSize;ne++)f(z.location+ne,D.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ne=0;ne<z.locationSize;ne++)m(z.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let ne=0;ne<z.locationSize;ne++)w(z.location+ne,se/z.locationSize,Ue,$,se*Oe,se/z.locationSize*ne*Oe,Z)}}else if(Y!==void 0){const $=Y[H];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(z.location,$);break;case 3:t.vertexAttrib3fv(z.location,$);break;case 4:t.vertexAttrib4fv(z.location,$);break;default:t.vertexAttrib1fv(z.location,$)}}}}v()}function b(){C();for(const U in i){const F=i[U];for(const W in F){const N=F[W];for(const V in N){const Q=N[V];for(const Y in Q)u(Q[Y].object),delete Q[Y];delete N[V]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;const F=i[U.id];for(const W in F){const N=F[W];for(const V in N){const Q=N[V];for(const Y in Q)u(Q[Y].object),delete Q[Y];delete N[V]}}delete i[U.id]}function A(U){for(const F in i){const W=i[F];for(const N in W){const V=W[N];if(V[U.id]===void 0)continue;const Q=V[U.id];for(const Y in Q)u(Q[Y].object),delete Q[Y];delete V[U.id]}}}function _(U){for(const F in i){const W=i[F],N=U.isInstancedMesh===!0?U.id:0,V=W[N];if(V!==void 0){for(const Q in V){const Y=V[Q];for(const H in Y)u(Y[H].object),delete Y[H];delete V[Q]}delete W[N],Object.keys(W).length===0&&delete i[F]}}}function C(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function LC(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function DC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==si&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const _=A===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Dn&&A!==vi&&!_&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:S,maxSamples:b,samples:T}}function IC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new lr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,w=v*4;let S=f.clippingState||null;l.value=S,S=u(g,d,w,p);for(let b=0;b!==w;++b)S[b]=n[b];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,S=p;w!==x;++w,S+=4)o.copy(h[w]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Is=4,UC=6,FC=20,OC=256,To=new bp,Kg=new He;let ud=null,dd=0,fd=0,hd=!1;const kC=new L,Ur=new L;class Zg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=kC}=s;ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,dd,fd),this._renderer.xr.enabled=hd,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zr||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:bn,format:si,colorSpace:bc,depthBuffer:!1},r=Qg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=BC(s)),this._blurMaterial=VC(s,e,n),this._ggxMaterial=zC(s,e,n)}return r}_compileMaterial(e){const n=new Ut(new an,e);this._renderer.compile(n,To)}_sceneToCubeUV(e,n,i,r,s){const l=new Ln(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Kg),h.toneMapping=Mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Bi,new Xs({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let f=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,f=!0):(m.color.copy(Kg),f=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const b=this._cubeSize;_s(r,S*b,w>2?b:0,b,b),h.setRenderTarget(r),f&&h.render(x,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Zr||e.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_s(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,To)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,p=h*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Is?i-g+Is:0),f=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,_s(s,m,f,3*x,2*x),r.setRenderTarget(s),r.render(a,To),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,_s(e,m,f,3*x,2*x),r.setRenderTarget(e),r.render(a,To)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],h=3*u*(r>this._lodMax-Is?r-this._lodMax+Is:0),d=4*(this._cubeSize-u);_s(n,h,d,3*u,2*u),o.setRenderTarget(n),o.render(l,To)}}function BC(t){const e=[],n=[];let i=t;const r=t-Is+1+UC;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,p=3,g=new Float32Array(p*d*h),x=new Float32Array(p*d*h);for(let f=0;f<h;f++){const v=f%3*2/3-1,w=f>2?0:-1,S=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];g.set(S,p*d*f);for(let b=0;b<d;b++){const T=u[b*2]*2-1,A=u[b*2+1]*2-1;f===0?Ur.set(1,A,T):f===1?Ur.set(-T,1,-A):f===2?Ur.set(-T,A,1):f===3?Ur.set(-1,A,-T):f===4?Ur.set(-T,-1,A):Ur.set(T,A,-1),Ur.toArray(x,(f*d+b)*p)}}const m=new an;m.setAttribute("position",new $n(g,p)),m.setAttribute("outputDirection",new $n(x,p)),n.push(new Ut(m,null)),i>Is&&i--}return{lodMeshes:n,sizeLods:e}}function Qg(t,e,n){const i=new hn(t,e,n);return i.texture.mapping=eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function zC(t,e,n){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function VC(t,e,n){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:FC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Jg(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function e0(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class z_ extends hn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new D_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bi(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Si});s.uniforms.tEquirect.value=n;const o=new Ut(r,s),a=n.minFilter;return n.minFilter===ki&&(n.minFilter=nn),new Hb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function HC(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Du||p===Iu)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new z_(g.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,g=p===Du||p===Iu,x=p===Zr||p===Js;if(g||x){let m=n.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new Zg(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return g&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new Zg(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,p){return p===Du?d.mapping=Zr:p===Iu&&(d.mapping=Js),d}function l(d){let p=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function GC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Gs("WebGLRenderer: "+i+" extension not supported."),r}}}function WC(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let x=0;if(g===void 0)return;if(p!==null){const v=p.array;x=p.version;for(let w=0,S=v.length;w<S;w+=3){const b=v[w+0],T=v[w+1],A=v[w+2];d.push(b,T,T,A,A,b)}}else{const v=g.array;x=g.version;for(let w=0,S=v.length/3-1;w<S;w+=3){const b=w+0,T=w+1,A=w+2;d.push(b,T,T,A,A,b)}}const m=new(g.count>=65535?P_:R_)(d,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function XC(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function c(h,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,h*o,p),n.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let x=0;for(let m=0;m<p;m++)x+=d[m];n.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function jC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function YC(t,e,n){const i=new WeakMap,r=new wt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var p=P;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let b=a.attributes.position.count*S,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*T*4*h),_=new T_(A,b,T,h);_.type=vi,_.needsUpdate=!0;const C=S*4;for(let U=0;U<h;U++){const F=f[U],W=v[U],N=w[U],V=b*T*4*U;for(let Q=0;Q<F.count;Q++){const Y=Q*C;g===!0&&(r.fromBufferAttribute(F,Q),A[V+Y+0]=r.x,A[V+Y+1]=r.y,A[V+Y+2]=r.z,A[V+Y+3]=0),x===!0&&(r.fromBufferAttribute(W,Q),A[V+Y+4]=r.x,A[V+Y+5]=r.y,A[V+Y+6]=r.z,A[V+Y+7]=0),m===!0&&(r.fromBufferAttribute(N,Q),A[V+Y+8]=r.x,A[V+Y+9]=r.y,A[V+Y+10]=r.z,A[V+Y+11]=N.itemSize===4?r.w:1)}}d={count:h,texture:_,size:new Fe(b,T)},i.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function $C(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const qC={[d_]:"LINEAR_TONE_MAPPING",[f_]:"REINHARD_TONE_MAPPING",[h_]:"CINEON_TONE_MAPPING",[dp]:"ACES_FILMIC_TONE_MAPPING",[m_]:"AGX_TONE_MAPPING",[g_]:"NEUTRAL_TONE_MAPPING",[p_]:"CUSTOM_TONE_MAPPING"};function KC(t,e,n,i,r,s){const o=new hn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new an;c.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Tn([0,2,0,0,2,0],2));const u=new Fb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ut(c,u),d=new bp(-1,1,1,-1,0,1);let p=null,g=null,x=!1,m,f=null,v=[],w=!1;this.setSize=function(S,b){o.setSize(S,b),a!==null&&a.setSize(S,b),l!==null&&l.setSize(S,b);for(let T=0;T<v.length;T++){const A=v[T];A.setSize&&A.setSize(S,b)}},this.setEffects=function(S){v=S,w=v.length>0&&v[0].isRenderPass===!0;const b=o.width,T=o.height;v.length>0&&a===null&&(a=new hn(b,T,{type:bn,depthBuffer:!1,stencilBuffer:!1}),l=new hn(b,T,{type:bn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){const _=v[A];_.setSize&&_.setSize(b,T)}},this.begin=function(S,b){if(x||S.toneMapping===Mi&&v.length===0)return!1;if(f=b,b!==null){const T=b.width,A=b.height;(o.width!==T||o.height!==A)&&this.setSize(T,A)}return w===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=Mi,!0},this.hasRenderPass=function(){return w},this.end=function(S,b){S.toneMapping=m,x=!0;let T=o,A=a;for(let _=0;_<v.length;_++){const C=v[_];C.enabled!==!1&&(C.render(S,A,T,b),C.needsSwap!==!1&&(T=A,A=A===a?l:a))}if(p!==S.outputColorSpace||g!==S.toneMapping){p=S.outputColorSpace,g=S.toneMapping,u.defines={},Ze.getTransfer(p)===st&&(u.defines.SRGB_TRANSFER="");const _=qC[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(f),S.render(h,d),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const V_=new sn,oh=new ha(1,1),H_=new T_,G_=new ub,W_=new D_,t0=[],n0=[],i0=new Float32Array(16),r0=new Float32Array(9),s0=new Float32Array(4);function lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=t0[r];if(s===void 0&&(s=new Float32Array(r),t0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nu(t,e){let n=n0[e];n===void 0&&(n=new Int32Array(e),n0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ZC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function QC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function JC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function eR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function tR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;s0.set(i),t.uniformMatrix2fv(this.addr,!1,s0),kt(n,i)}}function nR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;r0.set(i),t.uniformMatrix3fv(this.addr,!1,r0),kt(n,i)}}function iR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;i0.set(i),t.uniformMatrix4fv(this.addr,!1,i0),kt(n,i)}}function rR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function oR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function aR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function lR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function uR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function dR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function fR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(oh.compareFunction=n.isReversedDepthBuffer()?_p:xp,s=oh):s=V_,n.setTexture2D(e||s,r)}function hR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||G_,r)}function pR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||W_,r)}function mR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||H_,r)}function gR(t){switch(t){case 5126:return ZC;case 35664:return QC;case 35665:return JC;case 35666:return eR;case 35674:return tR;case 35675:return nR;case 35676:return iR;case 5124:case 35670:return rR;case 35667:case 35671:return sR;case 35668:case 35672:return oR;case 35669:case 35673:return aR;case 5125:return lR;case 36294:return cR;case 36295:return uR;case 36296:return dR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return hR;case 35680:case 36300:case 36308:case 36293:return pR;case 36289:case 36303:case 36311:case 36292:return mR}}function vR(t,e){t.uniform1fv(this.addr,e)}function xR(t,e){const n=lo(e,this.size,2);t.uniform2fv(this.addr,n)}function _R(t,e){const n=lo(e,this.size,3);t.uniform3fv(this.addr,n)}function yR(t,e){const n=lo(e,this.size,4);t.uniform4fv(this.addr,n)}function SR(t,e){const n=lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function MR(t,e){const n=lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function wR(t,e){const n=lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ER(t,e){t.uniform1iv(this.addr,e)}function bR(t,e){t.uniform2iv(this.addr,e)}function TR(t,e){t.uniform3iv(this.addr,e)}function AR(t,e){t.uniform4iv(this.addr,e)}function CR(t,e){t.uniform1uiv(this.addr,e)}function RR(t,e){t.uniform2uiv(this.addr,e)}function PR(t,e){t.uniform3uiv(this.addr,e)}function NR(t,e){t.uniform4uiv(this.addr,e)}function LR(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=oh:o=V_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function DR(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||G_,s[o])}function IR(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||W_,s[o])}function UR(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||H_,s[o])}function FR(t){switch(t){case 5126:return vR;case 35664:return xR;case 35665:return _R;case 35666:return yR;case 35674:return SR;case 35675:return MR;case 35676:return wR;case 5124:case 35670:return ER;case 35667:case 35671:return bR;case 35668:case 35672:return TR;case 35669:case 35673:return AR;case 5125:return CR;case 36294:return RR;case 36295:return PR;case 36296:return NR;case 35678:case 36198:case 36298:case 36306:case 35682:return LR;case 35679:case 36299:case 36307:return DR;case 35680:case 36300:case 36308:case 36293:return IR;case 36289:case 36303:case 36311:case 36292:return UR}}class OR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=gR(n.type)}}class kR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=FR(n.type)}}class BR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const pd=/(\w+)(\])?(\[|\.)?/g;function o0(t,e){t.seq.push(e),t.map[e.id]=e}function zR(t,e,n){const i=t.name,r=i.length;for(pd.lastIndex=0;;){const s=pd.exec(i),o=pd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){o0(n,c===void 0?new OR(a,t,e):new kR(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new BR(a),o0(n,h)),n=h}}}class Xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);zR(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function a0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const VR=37297;let HR=0;function GR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const l0=new ke;function WR(t){Ze._getMatrix(l0,Ze.workingColorSpace,t);const e=`mat3( ${l0.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Tc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function c0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+GR(t.getShaderSource(e),a)}else return s}function XR(t,e){const n=WR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const jR={[d_]:"Linear",[f_]:"Reinhard",[h_]:"Cineon",[dp]:"ACESFilmic",[m_]:"AgX",[g_]:"Neutral",[p_]:"Custom"};function YR(t,e){const n=jR[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ml=new L;function $R(){Ze.getLuminanceCoefficients(Ml);const t=Ml.x.toFixed(4),e=Ml.y.toFixed(4),n=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function KR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Do(t){return t!==""}function u0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(t){return t.replace(QR,e2)}const JR=new Map;function e2(t,e){let n=We[e];if(n===void 0){const i=JR.get(e);if(i!==void 0)n=We[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ah(n)}const t2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(t){return t.replace(t2,n2)}function n2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function h0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const i2={[kl]:"SHADOWMAP_TYPE_PCF",[Lo]:"SHADOWMAP_TYPE_VSM"};function r2(t){return i2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s2={[Zr]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[eu]:"ENVMAP_TYPE_CUBE_UV"};function o2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":s2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const a2={[Js]:"ENVMAP_MODE_REFRACTION"};function l2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":a2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const c2={[u_]:"ENVMAP_BLENDING_MULTIPLY",[V1]:"ENVMAP_BLENDING_MIX",[H1]:"ENVMAP_BLENDING_ADD"};function u2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":c2[t.combine]||"ENVMAP_BLENDING_NONE"}function d2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function f2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=r2(n),c=o2(n),u=l2(n),h=u2(n),d=d2(n),p=qR(n),g=KR(s),x=r.createProgram();let m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Do).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Do).join(`
`),f.length>0&&(f+=`
`)):(m=[h0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),f=[h0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mi?"#define TONE_MAPPING":"",n.toneMapping!==Mi?We.tonemapping_pars_fragment:"",n.toneMapping!==Mi?YR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,XR("linearToOutputTexel",n.outputColorSpace),$R(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Do).join(`
`)),o=ah(o),o=u0(o,n),o=d0(o,n),a=ah(a),a=u0(a,n),a=d0(a,n),o=f0(o),a=f0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=v+m+o,S=v+f+a,b=a0(r,r.VERTEX_SHADER,w),T=a0(r,r.FRAGMENT_SHADER,S);r.attachShader(x,b),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(U){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(x)||"",W=r.getShaderInfoLog(b)||"",N=r.getShaderInfoLog(T)||"",V=F.trim(),Q=W.trim(),Y=N.trim();let H=!0,z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,T);else{const D=c0(r,b,"vertex"),$=c0(r,T,"fragment");tt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+D+`
`+$)}else V!==""?Ie("WebGLProgram: Program Info Log:",V):(Q===""||Y==="")&&(z=!1);z&&(U.diagnostics={runnable:H,programLog:V,vertexShader:{log:Q,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(b),r.deleteShader(T),_=new Xl(r,x),C=ZR(r,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(x,VR)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}let h2=0;class p2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new m2(e),n.set(e,i)),i}}class m2{constructor(e){this.id=h2++,this.code=e,this.usedTimes=0}}function g2(t){return t===Qr||t===wc||t===Ec}function v2(t,e,n,i,r,s){const o=new A_,a=new p2,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,C,P,U,F,W){const N=U.fog,V=F.geometry,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||Q,Y),z=H&&H.mapping===eu?H.image.height:null,D=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const $=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=$!==void 0?$.length:0;let ce=0;V.morphAttributes.position!==void 0&&(ce=1),V.morphAttributes.normal!==void 0&&(ce=2),V.morphAttributes.color!==void 0&&(ce=3);let Ne,Ue,Oe,Z;if(D){const dt=mi[D];Ne=dt.vertexShader,Ue=dt.fragmentShader}else{Ne=_.vertexShader,Ue=_.fragmentShader;const dt=a.getVertexShaderStage(_),nt=a.getFragmentShaderStage(_);a.update(_,dt,nt),Oe=dt.id,Z=nt.id}const ne=t.getRenderTarget(),ae=t.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,ze=!!_.map,Dt=!!_.matcap,Xe=!!H,et=!!_.aoMap,ut=!!_.lightMap,qe=!!_.bumpMap&&_.wireframe===!1,_t=!!_.normalMap,Bt=!!_.displacementMap,vn=!!_.emissiveMap,St=!!_.metalnessMap,Rt=!!_.roughnessMap,B=_.anisotropy>0,$t=_.clearcoat>0,rt=_.dispersion>0,R=_.retroreflectivity>0,y=_.iridescence>0,G=_.sheen>0,q=_.transmission>0,J=B&&!!_.anisotropyMap,le=$t&&!!_.clearcoatMap,ue=$t&&!!_.clearcoatNormalMap,ee=$t&&!!_.clearcoatRoughnessMap,ie=y&&!!_.iridescenceMap,de=y&&!!_.iridescenceThicknessMap,Ce=G&&!!_.sheenColorMap,me=G&&!!_.sheenRoughnessMap,fe=!!_.specularMap,Re=!!_.specularColorMap,De=!!_.specularIntensityMap,Be=q&&!!_.transmissionMap,O=q&&!!_.thicknessMap,he=!!_.gradientMap,te=!!_.alphaMap,pe=_.alphaTest>0,ye=!!_.alphaHash,re=!!_.extensions;let Pe=Mi;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Pe=t.toneMapping);const Te={shaderID:D,shaderType:_.type,shaderName:_.name,vertexShader:Ne,fragmentShader:Ue,defines:_.defines,customVertexShaderID:Oe,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:Dt,envMap:Xe,envMapMode:Xe&&H.mapping,envMapCubeUVHeight:z,aoMap:et,lightMap:ut,bumpMap:qe,normalMap:_t,displacementMap:Bt,emissiveMap:vn,normalMapObjectSpace:_t&&_.normalMapType===X1,normalMapTangentSpace:_t&&_.normalMapType===ih,packedNormalMap:_t&&_.normalMapType===ih&&g2(_.normalMap.format),metalnessMap:St,roughnessMap:Rt,anisotropy:B,anisotropyMap:J,clearcoat:$t,clearcoatMap:le,clearcoatNormalMap:ue,clearcoatRoughnessMap:ee,dispersion:rt,retroreflection:R,iridescence:y,iridescenceMap:ie,iridescenceThicknessMap:de,sheen:G,sheenColorMap:Ce,sheenRoughnessMap:me,specularMap:fe,specularColorMap:Re,specularIntensityMap:De,transmission:q,transmissionMap:Be,thicknessMap:O,gradientMap:he,opaque:_.transparent===!1&&_.blending===Go&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:ye,combine:_.combine,mapUv:ze&&g(_.map.channel),aoMapUv:et&&g(_.aoMap.channel),lightMapUv:ut&&g(_.lightMap.channel),bumpMapUv:qe&&g(_.bumpMap.channel),normalMapUv:_t&&g(_.normalMap.channel),displacementMapUv:Bt&&g(_.displacementMap.channel),emissiveMapUv:vn&&g(_.emissiveMap.channel),metalnessMapUv:St&&g(_.metalnessMap.channel),roughnessMapUv:Rt&&g(_.roughnessMap.channel),anisotropyMapUv:J&&g(_.anisotropyMap.channel),clearcoatMapUv:le&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(_.sheenRoughnessMap.channel),specularMapUv:fe&&g(_.specularMap.channel),specularColorMapUv:Re&&g(_.specularColorMap.channel),specularIntensityMapUv:De&&g(_.specularIntensityMap.channel),transmissionMapUv:Be&&g(_.transmissionMap.channel),thicknessMapUv:O&&g(_.thicknessMap.channel),alphaMapUv:te&&g(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_t||B),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(ze||te),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&_t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ce,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===st,decodeVideoTextureEmissive:vn&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ii,flipSided:_.side===En,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:re&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&_.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)C.push(P),C.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(f(C,_),v(C,_),C.push(t.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function f(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function v(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){const C=p[_.type];let P;if(C){const U=mi[C];P=Pc.clone(U.uniforms)}else P=_.uniforms;return P}function S(_,C){let P=u.get(C);return P!==void 0?++P.usedTimes:(P=new f2(t,C,_,r),c.push(P),u.set(C,P)),P}function b(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function x2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function _2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function p0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function m0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,g,x,m,f){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:f},t[e]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=g,v.materialVariant=o(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=f),e++,v}function l(d,p,g,x,m,f,v){v.reversedDepth===!0&&(m=-m);const w=a(d,p,g,x,m,f);g.transmission>0?i.push(w):g.transparent===!0?r.push(w):n.push(w)}function c(d,p,g,x,m,f){const v=a(d,p,g,x,m,f);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):n.unshift(v)}function u(d,p){n.length>1&&n.sort(d||_2),i.length>1&&i.sort(p||p0),r.length>1&&r.sort(p||p0)}function h(){for(let d=e,p=t.length;d<p;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function y2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new m0,t.set(i,[o])):r>=s.length?(o=new m0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function S2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new L,color:new He};break;case"SpotLight":n={position:new L,direction:new L,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function M2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let w2=0;function E2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function b2(t){const e=new S2,n=M2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new xt,o=new xt;function a(c){let u=0,h=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,v=0,w=0,S=0,b=0,T=0,A=0,_=0,C=0,P=0;c.sort(E2);for(let F=0,W=c.length;F<W;F++){const N=c[F],V=N.color,Q=N.intensity,Y=N.distance;let H=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Qr?H=N.shadow.map.texture:H=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=V.r*Q,h+=V.g*Q,d+=V.b*Q;else if(N.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(N.sh.coefficients[z],Q);P++}else if(N.isSunLight){const z=e.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const D=N.shadow,$=n.get(N);$.shadowIntensity=D.intensity,$.shadowBias=D.bias,$.shadowNormalBias=D.normalBias,$.shadowRadius=D.radius,$.shadowMapSize.copy(D.mapSize).multiply(D.getFrameExtents()),i.sunShadow[g]=$,i.sunShadowMap[g]=H;const se=D.getViewportCount();for(let ce=0;ce<se;ce++)i.sunShadowMatrix[x+ce]=D.getMatrix(ce),i.sunShadowCascade[x+ce]=D._cascadeData[ce];x+=se,g++}i.sun[p]=z,p++}else if(N.isDirectionalLight){const z=e.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const D=N.shadow,$=n.get(N);$.shadowIntensity=D.intensity,$.shadowBias=D.bias,$.shadowNormalBias=D.normalBias,$.shadowRadius=D.radius,$.shadowMapSize=D.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=N.shadow.matrix,b++}i.directional[m]=z,m++}else if(N.isSpotLight){const z=e.get(N);z.position.setFromMatrixPosition(N.matrixWorld),z.color.copy(V).multiplyScalar(Q),z.distance=Y,z.coneCos=Math.cos(N.angle),z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),z.decay=N.decay,i.spot[v]=z;const D=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,D.updateMatrices(N),N.castShadow&&C++),i.spotLightMatrix[v]=D.matrix,N.castShadow){const $=n.get(N);$.shadowIntensity=D.intensity,$.shadowBias=D.bias,$.shadowNormalBias=D.normalBias,$.shadowRadius=D.radius,$.shadowMapSize=D.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=H,A++}v++}else if(N.isRectAreaLight){const z=e.get(N);z.color.copy(V).multiplyScalar(Q),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=z,w++}else if(N.isPointLight){const z=e.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),z.distance=N.distance,z.decay=N.decay,N.castShadow){const D=N.shadow,$=n.get(N);$.shadowIntensity=D.intensity,$.shadowBias=D.bias,$.shadowNormalBias=D.normalBias,$.shadowRadius=D.radius,$.shadowMapSize=D.mapSize,$.shadowCameraNear=D.camera.near,$.shadowCameraFar=D.camera.far,i.pointShadow[f]=$,i.pointShadowMap[f]=H,i.pointShadowMatrix[f]=N.shadow.matrix,T++}i.point[f]=z,f++}else if(N.isHemisphereLight){const z=e.get(N);z.skyColor.copy(N.color).multiplyScalar(Q),z.groundColor.copy(N.groundColor).multiplyScalar(Q),i.hemi[S]=z,S++}}w>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==f||U.spotLength!==v||U.rectAreaLength!==w||U.hemiLength!==S||U.numSunShadows!==g||U.numDirectionalShadows!==b||U.numPointShadows!==T||U.numSpotShadows!==A||U.numSpotMaps!==_||U.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=m,i.spot.length=v,i.rectArea.length=w,i.point.length=f,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-C,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,U.sunLength=p,U.directionalLength=m,U.pointLength=f,U.spotLength=v,U.rectAreaLength=w,U.hemiLength=S,U.numSunShadows=g,U.numDirectionalShadows=b,U.numPointShadows=T,U.numSpotShadows=A,U.numSpotMaps=_,U.numLightProbes=P,i.version=w2++)}function l(c,u){let h=0,d=0,p=0,g=0,x=0,m=0;const f=u.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){const S=c[v];if(S.isSunLight){const b=i.sun[h];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),h++}else if(S.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),d++}else if(S.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const b=i.rectArea[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),o.identity(),s.copy(S.matrixWorld),s.premultiply(f),o.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:i}}function g0(t){const e=new b2(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function T2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new g0(t),e.set(r,[a])):s>=o.length?(a=new g0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const A2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C2=`uniform sampler2D shadow_pass;
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
}`,R2=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],P2=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],v0=new xt,Ao=new L,md=new L;function N2(t,e,n){let i=new wp;const r=new Fe,s=new Fe,o=new wt,a=new Ob,l=new kb,c={},u=n.maxTextureSize,h={[Kr]:En,[En]:Kr,[Ii]:Ii},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:A2,fragmentShader:C2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let f=this.type;this.render=function(T,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===M1&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kl);const C=t.getRenderTarget(),P=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Si),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=f!==this.type;W&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=T.length;N<V;N++){const Q=T[N],Y=Q.shadow;if(Y===void 0){Ie("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const H=Y.getFrameExtents();r.multiply(H),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,Y.mapSize.y=s.y));const z=t.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=z,Y.map===null||W===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Lo){if(Q.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new hn(r.x,r.y,{format:Qr,type:bn,minFilter:nn,magFilter:nn,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new ha(r.x,r.y,vi),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=ji,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Xt,Y.map.depthTexture.magFilter=Xt}else Q.isPointLight?(Y.map=new z_(r.x),Y.map.depthTexture=new Rb(r.x,wi)):(Y.map=new hn(r.x,r.y),Y.map.depthTexture=new ha(r.x,r.y,wi)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=ji,this.type===kl?(Y.map.depthTexture.compareFunction=z?_p:xp,Y.map.depthTexture.minFilter=nn,Y.map.depthTexture.magFilter=nn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Xt,Y.map.depthTexture.magFilter=Xt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==r.x||Y.map.height!==r.y)&&Y.map.setSize(r.x,r.y);const D=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,_);for(let $=0;$<D;$++){const se=Y.getCamera($);if(Q.isPointLight){const ce=Y.camera,Ne=Y.matrix,Ue=Q.distance||ce.far;Ue!==ce.far&&(ce.far=Ue,ce.updateProjectionMatrix()),Ao.setFromMatrixPosition(Q.matrixWorld),ce.position.copy(Ao),md.copy(ce.position),md.add(R2[$]),ce.up.copy(P2[$]),ce.lookAt(md),ce.updateMatrixWorld(),Ne.makeTranslation(-Ao.x,-Ao.y,-Ao.z),v0.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(v0,ce.coordinateSystem,ce.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)t.setRenderTarget(Y.map,$),t.clear();else{$===0&&(t.setRenderTarget(Y.map),t.clear());const ce=Y.getViewport($);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),F.viewport(o)}i=Y.getFrustum($),S(A,_,se,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===Lo&&v(Y,_),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(C,P,U)};function v(T,A){const _=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new hn(r.x,r.y,{format:Qr,type:bn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,_,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,_,p,x,null)}function w(T,A,_,C){let P=null;const U=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)P=U;else if(P=_.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=P.uuid,W=A.uuid;let N=c[F];N===void 0&&(N={},c[F]=N);let V=N[W];V===void 0&&(V=P.clone(),N[W]=V,A.addEventListener("dispose",b)),P=V}if(P.visible=A.visible,P.wireframe=A.wireframe,C===Lo?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:h[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=t.properties.get(P);F.light=_}return P}function S(T,A,_,C,P){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Lo)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const W=e.update(T),N=T.material;if(Array.isArray(N)){const V=W.groups;for(let Q=0,Y=V.length;Q<Y;Q++){const H=V[Q],z=N[H.materialIndex];if(z&&z.visible){const D=w(T,z,C,P);T.onBeforeShadow(t,T,A,_,W,D,H),t.renderBufferDirect(_,null,W,D,T,H),T.onAfterShadow(t,T,A,_,W,D,H)}}}else if(N.visible){const V=w(T,N,C,P);T.onBeforeShadow(t,T,A,_,W,V,null),t.renderBufferDirect(_,null,W,V,T,null),T.onAfterShadow(t,T,A,_,W,V,null)}}const F=T.children;for(let W=0,N=F.length;W<N;W++)S(F[W],A,_,C,P)}function b(T){T.target.removeEventListener("dispose",b);for(const _ in c){const C=c[_],P=T.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function L2(t,e){function n(){let O=!1;const he=new wt;let te=null;const pe=new wt(0,0,0,0);return{setMask:function(ye){te!==ye&&!O&&(t.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){O=ye},setClear:function(ye,re,Pe,Te,dt){dt===!0&&(ye*=Te,re*=Te,Pe*=Te),he.set(ye,re,Pe,Te),pe.equals(he)===!1&&(t.clearColor(ye,re,Pe,Te),pe.copy(he))},reset:function(){O=!1,te=null,pe.set(-1,0,0,0)}}}function i(){let O=!1,he=!1,te=null,pe=null,ye=null;return{setReversed:function(re){if(he!==re){const Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),he=re;const Te=ye;ye=null,this.setClear(Te)}},getReversed:function(){return he},setTest:function(re){re?ne(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(re){te!==re&&!O&&(t.depthMask(re),te=re)},setFunc:function(re){if(he&&(re=ib[re]),pe!==re){switch(re){case _f:t.depthFunc(t.NEVER);break;case yf:t.depthFunc(t.ALWAYS);break;case Sf:t.depthFunc(t.LESS);break;case la:t.depthFunc(t.LEQUAL);break;case Mf:t.depthFunc(t.EQUAL);break;case wf:t.depthFunc(t.GEQUAL);break;case Ef:t.depthFunc(t.GREATER);break;case bf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=re}},setLocked:function(re){O=re},setClear:function(re){ye!==re&&(ye=re,he&&(re=1-re),t.clearDepth(re))},reset:function(){O=!1,te=null,pe=null,ye=null,he=!1}}}function r(){let O=!1,he=null,te=null,pe=null,ye=null,re=null,Pe=null,Te=null,dt=null;return{setTest:function(nt){O||(nt?ne(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(nt){he!==nt&&!O&&(t.stencilMask(nt),he=nt)},setFunc:function(nt,Zn,ci){(te!==nt||pe!==Zn||ye!==ci)&&(t.stencilFunc(nt,Zn,ci),te=nt,pe=Zn,ye=ci)},setOp:function(nt,Zn,ci){(re!==nt||Pe!==Zn||Te!==ci)&&(t.stencilOp(nt,Zn,ci),re=nt,Pe=Zn,Te=ci)},setLocked:function(nt){O=nt},setClear:function(nt){dt!==nt&&(t.clearStencil(nt),dt=nt)},reset:function(){O=!1,he=null,te=null,pe=null,ye=null,re=null,Pe=null,Te=null,dt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d={},p=new WeakMap,g=[],x=null,m=!1,f=null,v=null,w=null,S=null,b=null,T=null,A=null,_=new He(0,0,0),C=0,P=!1,U=null,F=null,W=null,N=null,V=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,H=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=H>=1):z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=H>=2);let D=null,$={};const se=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),Ne=new wt().fromArray(se),Ue=new wt().fromArray(ce);function Oe(O,he,te,pe){const ye=new Uint8Array(4),re=t.createTexture();t.bindTexture(O,re),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<te;Pe++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(he+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return re}const Z={};Z[t.TEXTURE_2D]=Oe(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=Oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=Oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=Oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(la),qe(!1),_t(pg),ne(t.CULL_FACE),et(Si);function ne(O){u[O]!==!0&&(t.enable(O),u[O]=!0)}function ae(O){u[O]!==!1&&(t.disable(O),u[O]=!1)}function Le(O,he){return d[O]!==he?(t.bindFramebuffer(O,he),d[O]=he,O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=he),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=he),!0):!1}function xe(O,he){let te=g,pe=!1;if(O){te=p.get(he),te===void 0&&(te=[],p.set(he,te));const ye=O.textures;if(te.length!==ye.length||te[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Pe=ye.length;re<Pe;re++)te[re]=t.COLOR_ATTACHMENT0+re;te.length=ye.length,pe=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,pe=!0);pe&&t.drawBuffers(te)}function ze(O){return x!==O?(t.useProgram(O),x=O,!0):!1}const Dt={[ys]:t.FUNC_ADD,[E1]:t.FUNC_SUBTRACT,[b1]:t.FUNC_REVERSE_SUBTRACT};Dt[T1]=t.MIN,Dt[A1]=t.MAX;const Xe={[C1]:t.ZERO,[R1]:t.ONE,[P1]:t.SRC_COLOR,[l_]:t.SRC_ALPHA,[F1]:t.SRC_ALPHA_SATURATE,[I1]:t.DST_COLOR,[L1]:t.DST_ALPHA,[N1]:t.ONE_MINUS_SRC_COLOR,[c_]:t.ONE_MINUS_SRC_ALPHA,[U1]:t.ONE_MINUS_DST_COLOR,[D1]:t.ONE_MINUS_DST_ALPHA,[O1]:t.CONSTANT_COLOR,[k1]:t.ONE_MINUS_CONSTANT_COLOR,[B1]:t.CONSTANT_ALPHA,[z1]:t.ONE_MINUS_CONSTANT_ALPHA};function et(O,he,te,pe,ye,re,Pe,Te,dt,nt){if(O===Si){m===!0&&(ae(t.BLEND),m=!1);return}if(m===!1&&(ne(t.BLEND),m=!0),O!==w1){if(O!==f||nt!==P){if((v!==ys||b!==ys)&&(t.blendEquation(t.FUNC_ADD),v=ys,b=ys),nt)switch(O){case Go:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mc:t.blendFunc(t.ONE,t.ONE);break;case mg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",O);break}else switch(O){case Go:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mc:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case mg:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gg:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",O);break}w=null,S=null,T=null,A=null,_.set(0,0,0),C=0,f=O,P=nt}return}ye=ye||he,re=re||te,Pe=Pe||pe,(he!==v||ye!==b)&&(t.blendEquationSeparate(Dt[he],Dt[ye]),v=he,b=ye),(te!==w||pe!==S||re!==T||Pe!==A)&&(t.blendFuncSeparate(Xe[te],Xe[pe],Xe[re],Xe[Pe]),w=te,S=pe,T=re,A=Pe),(Te.equals(_)===!1||dt!==C)&&(t.blendColor(Te.r,Te.g,Te.b,dt),_.copy(Te),C=dt),f=O,P=!1}function ut(O,he){O.side===Ii?ae(t.CULL_FACE):ne(t.CULL_FACE);let te=O.side===En;he&&(te=!te),qe(te),O.blending===Go&&O.transparent===!1?et(Si):et(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const pe=O.stencilWrite;a.setTest(pe),pe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),vn(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(O){U!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),U=O)}function _t(O){O!==y1?(ne(t.CULL_FACE),O!==F&&(O===pg?t.cullFace(t.BACK):O===S1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),F=O}function Bt(O){O!==W&&(Y&&t.lineWidth(O),W=O)}function vn(O,he,te){O?(ne(t.POLYGON_OFFSET_FILL),(N!==he||V!==te)&&(N=he,V=te,o.getReversed()&&(he=-he),t.polygonOffset(he,te))):ae(t.POLYGON_OFFSET_FILL)}function St(O){O?ne(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function Rt(O){O===void 0&&(O=t.TEXTURE0+Q-1),D!==O&&(t.activeTexture(O),D=O)}function B(O,he,te){te===void 0&&(D===null?te=t.TEXTURE0+Q-1:te=D);let pe=$[te];pe===void 0&&(pe={type:void 0,texture:void 0},$[te]=pe),(pe.type!==O||pe.texture!==he)&&(D!==te&&(t.activeTexture(te),D=te),t.bindTexture(O,he||Z[O]),pe.type=O,pe.texture=he)}function $t(){const O=$[D];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function rt(){try{t.compressedTexImage2D(...arguments)}catch(O){tt("WebGLState:",O)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(O){tt("WebGLState:",O)}}function y(){try{t.texSubImage2D(...arguments)}catch(O){tt("WebGLState:",O)}}function G(){try{t.texSubImage3D(...arguments)}catch(O){tt("WebGLState:",O)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(O){tt("WebGLState:",O)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(O){tt("WebGLState:",O)}}function le(){try{t.texStorage2D(...arguments)}catch(O){tt("WebGLState:",O)}}function ue(){try{t.texStorage3D(...arguments)}catch(O){tt("WebGLState:",O)}}function ee(){try{t.texImage2D(...arguments)}catch(O){tt("WebGLState:",O)}}function ie(){try{t.texImage3D(...arguments)}catch(O){tt("WebGLState:",O)}}function de(O){return h[O]!==void 0?h[O]:t.getParameter(O)}function Ce(O,he){h[O]!==he&&(t.pixelStorei(O,he),h[O]=he)}function me(O){Ne.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Ne.copy(O))}function fe(O){Ue.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Ue.copy(O))}function Re(O,he){let te=c.get(he);te===void 0&&(te=new WeakMap,c.set(he,te));let pe=te.get(O);pe===void 0&&(pe=t.getUniformBlockIndex(he,O.name),te.set(O,pe))}function De(O,he){const pe=c.get(he).get(O);l.get(he)!==pe&&(t.uniformBlockBinding(he,pe,O.__bindingPointIndex),l.set(he,pe))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},D=null,$={},d={},p=new WeakMap,g=[],x=null,m=!1,f=null,v=null,w=null,S=null,b=null,T=null,A=null,_=new He(0,0,0),C=0,P=!1,U=null,F=null,W=null,N=null,V=null,Ne.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ae,bindFramebuffer:Le,drawBuffers:xe,useProgram:ze,setBlending:et,setMaterial:ut,setFlipSided:qe,setCullFace:_t,setLineWidth:Bt,setPolygonOffset:vn,setScissorTest:St,activeTexture:Rt,bindTexture:B,unbindTexture:$t,compressedTexImage2D:rt,compressedTexImage3D:R,texImage2D:ee,texImage3D:ie,pixelStorei:Ce,getParameter:de,updateUBOMapping:Re,uniformBlockBinding:De,texStorage2D:le,texStorage3D:ue,texSubImage2D:y,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:me,viewport:fe,reset:Be}}function D2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,y){return g?new OffscreenCanvas(R,y):Ac("canvas")}function m(R,y,G){let q=1;const J=rt(R);if((J.width>G||J.height>G)&&(q=G/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(q*J.width),ue=Math.floor(q*J.height);d===void 0&&(d=x(le,ue));const ee=y?x(le,ue):d;return ee.width=le,ee.height=ue,ee.getContext("2d").drawImage(R,0,0,le,ue),Ie("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+le+"x"+ue+")."),ee}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function f(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,y,G,q,J,le=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;q&&(ue=e.get("EXT_texture_norm16"),ue||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===t.RED&&(G===t.FLOAT&&(ee=t.R32F),G===t.HALF_FLOAT&&(ee=t.R16F),G===t.UNSIGNED_BYTE&&(ee=t.R8),G===t.UNSIGNED_SHORT&&ue&&(ee=ue.R16_EXT),G===t.SHORT&&ue&&(ee=ue.R16_SNORM_EXT)),y===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.R8UI),G===t.UNSIGNED_SHORT&&(ee=t.R16UI),G===t.UNSIGNED_INT&&(ee=t.R32UI),G===t.BYTE&&(ee=t.R8I),G===t.SHORT&&(ee=t.R16I),G===t.INT&&(ee=t.R32I)),y===t.RG&&(G===t.FLOAT&&(ee=t.RG32F),G===t.HALF_FLOAT&&(ee=t.RG16F),G===t.UNSIGNED_BYTE&&(ee=t.RG8),G===t.UNSIGNED_SHORT&&ue&&(ee=ue.RG16_EXT),G===t.SHORT&&ue&&(ee=ue.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RG8UI),G===t.UNSIGNED_SHORT&&(ee=t.RG16UI),G===t.UNSIGNED_INT&&(ee=t.RG32UI),G===t.BYTE&&(ee=t.RG8I),G===t.SHORT&&(ee=t.RG16I),G===t.INT&&(ee=t.RG32I)),y===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),G===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),G===t.UNSIGNED_INT&&(ee=t.RGB32UI),G===t.BYTE&&(ee=t.RGB8I),G===t.SHORT&&(ee=t.RGB16I),G===t.INT&&(ee=t.RGB32I)),y===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),G===t.UNSIGNED_INT&&(ee=t.RGBA32UI),G===t.BYTE&&(ee=t.RGBA8I),G===t.SHORT&&(ee=t.RGBA16I),G===t.INT&&(ee=t.RGBA32I)),y===t.RGB&&(G===t.UNSIGNED_SHORT&&ue&&(ee=ue.RGB16_EXT),G===t.SHORT&&ue&&(ee=ue.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),y===t.RGBA){const ie=le?Tc:Ze.getTransfer(J);G===t.FLOAT&&(ee=t.RGBA32F),G===t.HALF_FLOAT&&(ee=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ee=ie===st?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&ue&&(ee=ue.RGBA16_EXT),G===t.SHORT&&ue&&(ee=ue.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(R,y){let G;return R?y===null||y===wi||y===da?G=t.DEPTH24_STENCIL8:y===vi?G=t.DEPTH32F_STENCIL8:y===ua&&(G=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===wi||y===da?G=t.DEPTH_COMPONENT24:y===vi?G=t.DEPTH_COMPONENT32F:y===ua&&(G=t.DEPTH_COMPONENT16),G}function T(R,y){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){const y=R.target;y.removeEventListener("dispose",A),C(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&h.delete(y)}function _(R){const y=R.target;y.removeEventListener("dispose",_),U(y)}function C(R){const y=i.get(R);if(y.__webglInit===void 0)return;const G=R.source,q=p.get(G);if(q){const J=q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(R),Object.keys(q).length===0&&p.delete(G)}i.remove(R)}function P(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const G=R.source,q=p.get(G);delete q[y.__cacheKey],o.memory.textures--}function U(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let J=0;J<y.__webglFramebuffer[q].length;J++)t.deleteFramebuffer(y.__webglFramebuffer[q][J]);else t.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)t.deleteFramebuffer(y.__webglFramebuffer[q]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=R.textures;for(let q=0,J=G.length;q<J;q++){const le=i.get(G[q]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(G[q])}i.remove(R)}let F=0;function W(){F=0}function N(){return F}function V(R){F=R}function Q(){const R=F;return R>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,R}function Y(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function H(R,y){const G=i.get(R);if(R.isVideoTexture&&B(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const q=R.image;if(q===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(G,R,y);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+y)}function z(R,y){const G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ae(G,R,y);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+y)}function D(R,y){const G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ae(G,R,y);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+y)}function $(R,y){const G=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Le(G,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+y)}const se={[ca]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[Tf]:t.MIRRORED_REPEAT},ce={[Xt]:t.NEAREST,[G1]:t.NEAREST_MIPMAP_NEAREST,[ja]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Uu]:t.LINEAR_MIPMAP_NEAREST,[ki]:t.LINEAR_MIPMAP_LINEAR},Ne={[Y1]:t.NEVER,[Q1]:t.ALWAYS,[$1]:t.LESS,[xp]:t.LEQUAL,[q1]:t.EQUAL,[_p]:t.GEQUAL,[K1]:t.GREATER,[Z1]:t.NOTEQUAL};function Ue(R,y){if(y.type===vi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===Uu||y.magFilter===ja||y.magFilter===ki||y.minFilter===nn||y.minFilter===Uu||y.minFilter===ja||y.minFilter===ki)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,se[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,se[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,se[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ce[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ce[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Ne[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xt||y.minFilter!==ja&&y.minFilter!==ki||y.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Oe(R,y){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));const q=y.source;let J=p.get(q);J===void 0&&(J={},p.set(q,J));const le=Y(y);if(le!==R.__cacheKey){J[le]===void 0&&(J[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[le].usedTimes++;const ue=J[R.__cacheKey];ue!==void 0&&(J[R.__cacheKey].usedTimes--,ue.usedTimes===0&&P(y)),R.__cacheKey=le,R.__webglTexture=J[le].texture}return G}function Z(R,y,G){return Math.floor(Math.floor(R/G)/y)}function ne(R,y,G,q){const le=R.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,G,q,y.data);else{le.sort((Ce,me)=>Ce.start-me.start);let ue=0;for(let Ce=1;Ce<le.length;Ce++){const me=le[ue],fe=le[Ce],Re=me.start+me.count,De=Z(fe.start,y.width,4),Be=Z(me.start,y.width,4);fe.start<=Re+1&&De===Be&&Z(fe.start+fe.count-1,y.width,4)===De?me.count=Math.max(me.count,fe.start+fe.count-me.start):(++ue,le[ue]=fe)}le.length=ue+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let Ce=0,me=le.length;Ce<me;Ce++){const fe=le[Ce],Re=Math.floor(fe.start/4),De=Math.ceil(fe.count/4),Be=Re%y.width,O=Math.floor(Re/y.width),he=De,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Be,O,he,te,G,q,y.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function ae(R,y,G){let q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=t.TEXTURE_3D);const J=Oe(R,y),le=y.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+G);const ue=i.get(le);if(le.version!==ue.__version||J===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const te=Ze.getPrimaries(Ze.workingColorSpace),pe=y.colorSpace===dr?null:Ze.getPrimaries(y.colorSpace),ye=y.colorSpace===dr||te===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let ie=m(y.image,!1,r.maxTextureSize);ie=$t(y,ie);const de=s.convert(y.format,y.colorSpace),Ce=s.convert(y.type);let me=S(y.internalFormat,de,Ce,y.normalized,y.colorSpace,y.isVideoTexture);Ue(q,y);let fe;const Re=y.mipmaps,De=y.isVideoTexture!==!0,Be=ue.__version===void 0||J===!0,O=le.dataReady,he=T(y,ie);if(y.isDepthTexture)me=b(y.format===Vr,y.type),Be&&(De?n.texStorage2D(t.TEXTURE_2D,1,me,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,me,ie.width,ie.height,0,de,Ce,null));else if(y.isDataTexture)if(Re.length>0){De&&Be&&n.texStorage2D(t.TEXTURE_2D,he,me,Re[0].width,Re[0].height);for(let te=0,pe=Re.length;te<pe;te++)fe=Re[te],De?O&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,fe.width,fe.height,de,Ce,fe.data):n.texImage2D(t.TEXTURE_2D,te,me,fe.width,fe.height,0,de,Ce,fe.data);y.generateMipmaps=!1}else De?(Be&&n.texStorage2D(t.TEXTURE_2D,he,me,ie.width,ie.height),O&&ne(y,ie,de,Ce)):n.texImage2D(t.TEXTURE_2D,0,me,ie.width,ie.height,0,de,Ce,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){De&&Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,me,Re[0].width,Re[0].height,ie.depth);for(let te=0,pe=Re.length;te<pe;te++)if(fe=Re[te],y.format!==si)if(de!==null)if(De){if(O)if(y.layerUpdates.size>0){const ye=qg(fe.width,fe.height,y.format,y.type);for(const re of y.layerUpdates){const Pe=fe.data.subarray(re*ye/fe.data.BYTES_PER_ELEMENT,(re+1)*ye/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,re,fe.width,fe.height,1,de,Pe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ie.depth,de,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,me,fe.width,fe.height,ie.depth,0,fe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ie.depth,de,Ce,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,me,fe.width,fe.height,ie.depth,0,de,Ce,fe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{De&&Be&&n.texStorage2D(t.TEXTURE_2D,he,me,Re[0].width,Re[0].height);for(let te=0,pe=Re.length;te<pe;te++)fe=Re[te],y.format!==si?de!==null?De?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,fe.width,fe.height,de,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,te,me,fe.width,fe.height,0,fe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?O&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,fe.width,fe.height,de,Ce,fe.data):n.texImage2D(t.TEXTURE_2D,te,me,fe.width,fe.height,0,de,Ce,fe.data)}else if(y.isDataArrayTexture)if(De){if(Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,me,ie.width,ie.height,ie.depth),O)if(y.layerUpdates.size>0){const te=qg(ie.width,ie.height,y.format,y.type);for(const pe of y.layerUpdates){const ye=ie.data.subarray(pe*te/ie.data.BYTES_PER_ELEMENT,(pe+1)*te/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,ie.width,ie.height,1,de,Ce,ye)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,Ce,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,ie.width,ie.height,ie.depth,0,de,Ce,ie.data);else if(y.isData3DTexture)De?(Be&&n.texStorage3D(t.TEXTURE_3D,he,me,ie.width,ie.height,ie.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,Ce,ie.data)):n.texImage3D(t.TEXTURE_3D,0,me,ie.width,ie.height,ie.depth,0,de,Ce,ie.data);else if(y.isFramebufferTexture){if(Be)if(De)n.texStorage2D(t.TEXTURE_2D,he,me,ie.width,ie.height);else{let te=ie.width,pe=ie.height;for(let ye=0;ye<he;ye++)n.texImage2D(t.TEXTURE_2D,ye,me,te,pe,0,de,Ce,null),te>>=1,pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ie.parentNode!==te){te.appendChild(ie),h.add(y),te.onpaint=pe=>{const ye=pe.changedElements;for(const re of h)ye.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const ye=t.RGBA,re=t.RGBA,Pe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,re,Pe,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Re.length>0){if(De&&Be){const te=rt(Re[0]);n.texStorage2D(t.TEXTURE_2D,he,me,te.width,te.height)}for(let te=0,pe=Re.length;te<pe;te++)fe=Re[te],De?O&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,de,Ce,fe):n.texImage2D(t.TEXTURE_2D,te,me,de,Ce,fe);y.generateMipmaps=!1}else if(De){if(Be){const te=rt(ie);n.texStorage2D(t.TEXTURE_2D,he,me,te.width,te.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Ce,ie)}else n.texImage2D(t.TEXTURE_2D,0,me,de,Ce,ie);f(y)&&v(q),ue.__version=le.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Le(R,y,G){if(y.image.length!==6)return;const q=Oe(R,y),J=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const le=i.get(J);if(J.version!==le.__version||q===!0){n.activeTexture(t.TEXTURE0+G);const ue=Ze.getPrimaries(Ze.workingColorSpace),ee=y.colorSpace===dr?null:Ze.getPrimaries(y.colorSpace),ie=y.colorSpace===dr||ue===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const de=y.isCompressedTexture||y.image[0].isCompressedTexture,Ce=y.image[0]&&y.image[0].isDataTexture,me=[];for(let re=0;re<6;re++)!de&&!Ce?me[re]=m(y.image[re],!0,r.maxCubemapSize):me[re]=Ce?y.image[re].image:y.image[re],me[re]=$t(y,me[re]);const fe=me[0],Re=s.convert(y.format,y.colorSpace),De=s.convert(y.type),Be=S(y.internalFormat,Re,De,y.normalized,y.colorSpace),O=y.isVideoTexture!==!0,he=le.__version===void 0||q===!0,te=J.dataReady;let pe=T(y,fe);Ue(t.TEXTURE_CUBE_MAP,y);let ye;if(de){O&&he&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Be,fe.width,fe.height);for(let re=0;re<6;re++){ye=me[re].mipmaps;for(let Pe=0;Pe<ye.length;Pe++){const Te=ye[Pe];y.format!==si?Re!==null?O?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Te.width,Te.height,Re,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,Be,Te.width,Te.height,0,Te.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Te.width,Te.height,Re,De,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,Be,Te.width,Te.height,0,Re,De,Te.data)}}}else{if(ye=y.mipmaps,O&&he){ye.length>0&&pe++;const re=rt(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Be,re.width,re.height)}for(let re=0;re<6;re++)if(Ce){O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,me[re].width,me[re].height,Re,De,me[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Be,me[re].width,me[re].height,0,Re,De,me[re].data);for(let Pe=0;Pe<ye.length;Pe++){const dt=ye[Pe].image[re].image;O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,dt.width,dt.height,Re,De,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,Be,dt.width,dt.height,0,Re,De,dt.data)}}else{O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,De,me[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Be,Re,De,me[re]);for(let Pe=0;Pe<ye.length;Pe++){const Te=ye[Pe];O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Re,De,Te.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,Be,Re,De,Te.image[re])}}}f(y)&&v(t.TEXTURE_CUBE_MAP),le.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function xe(R,y,G,q,J,le){const ue=s.convert(G.format,G.colorSpace),ee=s.convert(G.type),ie=S(G.internalFormat,ue,ee,G.normalized,G.colorSpace),de=i.get(y),Ce=i.get(G);if(Ce.__renderTarget=y,!de.__hasExternalTextures){const me=Math.max(1,y.width>>le),fe=Math.max(1,y.height>>le);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,le,ie,me,fe,y.depth,0,ue,ee,null):n.texImage2D(J,le,ie,me,fe,0,ue,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Rt(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,J,Ce.__webglTexture,0,St(y)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,J,Ce.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(R,y,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const q=y.depthTexture,J=q&&q.isDepthTexture?q.type:null,le=b(y.stencilBuffer,J),ue=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Rt(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,St(y),le,y.width,y.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,St(y),le,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,le,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,R)}else{const q=y.textures;for(let J=0;J<q.length;J++){const le=q[J],ue=s.convert(le.format,le.colorSpace),ee=s.convert(le.type),ie=S(le.internalFormat,ue,ee,le.normalized,le.colorSpace);Rt(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,St(y),ie,y.width,y.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,St(y),ie,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ie,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Dt(R,y,G){const q=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,y.depthTexture);const de=s.convert(y.depthTexture.format),Ce=s.convert(y.depthTexture.type);let me;y.depthTexture.format===ji?me=t.DEPTH_COMPONENT24:y.depthTexture.format===Vr&&(me=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,me,y.width,y.height,0,de,Ce,null)}}else H(y.depthTexture,0);const le=J.__webglTexture,ue=St(y),ee=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,ie=y.depthTexture.format===Vr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===ji)Rt(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,le,0);else if(y.depthTexture.format===Vr)Rt(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,le,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(R){const y=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=q}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)Dt(y.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?Dt(y.__webglFramebuffer[0],R,0):Dt(y.__webglFramebuffer,R,0)}else if(G){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=t.createRenderbuffer(),ze(y.__webglDepthbuffer[q],R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,le)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),ze(y.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(R,y,G){const q=i.get(R);y!==void 0&&xe(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Xe(R)}function ut(R){const y=R.texture,G=i.get(R),q=i.get(y);R.addEventListener("dispose",_);const J=R.textures,le=R.isWebGLCubeRenderTarget===!0,ue=J.length>1;if(ue||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=y.version,o.memory.textures++),le){G.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[ee]=[];for(let ie=0;ie<y.mipmaps.length;ie++)G.__webglFramebuffer[ee][ie]=t.createFramebuffer()}else G.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)G.__webglFramebuffer[ee]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ue)for(let ee=0,ie=J.length;ee<ie;ee++){const de=i.get(J[ee]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Rt(R)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const ie=J[ee];G.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ee]);const de=s.convert(ie.format,ie.colorSpace),Ce=s.convert(ie.type),me=S(ie.internalFormat,de,Ce,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),fe=St(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,G.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ze(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)xe(G.__webglFramebuffer[ee][ie],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else xe(G.__webglFramebuffer[ee],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(y)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let ee=0,ie=J.length;ee<ie;ee++){const de=J[ee],Ce=i.get(de);let me=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Ce.__webglTexture),Ue(me,de),xe(G.__webglFramebuffer,R,de,t.COLOR_ATTACHMENT0+ee,me,0),f(de)&&v(me)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,q.__webglTexture),Ue(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)xe(G.__webglFramebuffer[ie],R,y,t.COLOR_ATTACHMENT0,ee,ie);else xe(G.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,ee,0);f(y)&&v(ee),n.unbindTexture()}R.depthBuffer&&Xe(R)}function qe(R){const y=R.textures;for(let G=0,q=y.length;G<q;G++){const J=y[G];if(f(J)){const le=w(R),ue=i.get(J).__webglTexture;n.bindTexture(le,ue),v(le),n.unbindTexture()}}}const _t=[],Bt=[];function vn(R){if(R.samples>0){if(Rt(R)===!1){const y=R.textures,G=R.width,q=R.height;let J=t.COLOR_BUFFER_BIT;const le=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(R),ee=y.length>1;if(ee)for(let de=0;de<y.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<y.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const Ce=i.get(y[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ce,0)}t.blitFramebuffer(0,0,G,q,0,0,G,q,J,t.NEAREST),l===!0&&(_t.length=0,Bt.length=0,_t.push(t.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(_t.push(le),Bt.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Bt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_t))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let de=0;de<y.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const Ce=i.get(y[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function St(R){return Math.min(r.maxSamples,R.samples)}function Rt(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(R){const y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function $t(R,y){const G=R.colorSpace,q=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==bc&&G!==dr&&(Ze.getTransfer(G)===st?(q!==si||J!==Dn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",G)),y}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=W,this.getTextureUnits=N,this.setTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=D,this.setTextureCube=$,this.rebindTextures=et,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function I2(t,e){function n(i,r=dr){let s;const o=Ze.getTransfer(r);if(i===Dn)return t.UNSIGNED_BYTE;if(i===hp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===y_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===S_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===x_)return t.BYTE;if(i===__)return t.SHORT;if(i===ua)return t.UNSIGNED_SHORT;if(i===fp)return t.INT;if(i===wi)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===bn)return t.HALF_FLOAT;if(i===M_)return t.ALPHA;if(i===w_)return t.RGB;if(i===si)return t.RGBA;if(i===ji)return t.DEPTH_COMPONENT;if(i===Vr)return t.DEPTH_STENCIL;if(i===E_)return t.RED;if(i===mp)return t.RED_INTEGER;if(i===Qr)return t.RG;if(i===gp)return t.RG_INTEGER;if(i===vp)return t.RGBA_INTEGER;if(i===Bl||i===zl||i===Vl||i===Hl)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Af||i===Cf||i===Rf||i===Pf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Af)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nf||i===Lf||i===Df||i===If||i===Uf||i===wc||i===Ff)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nf||i===Lf)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Df)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===If)return s.COMPRESSED_R11_EAC;if(i===Uf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===wc)return s.COMPRESSED_RG11_EAC;if(i===Ff)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Of||i===kf||i===Bf||i===zf||i===Vf||i===Hf||i===Gf||i===Wf||i===Xf||i===jf||i===Yf||i===$f||i===qf||i===Kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Of)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$f)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zf||i===Qf||i===Jf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zf)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eh||i===th||i===Ec||i===nh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===eh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===th)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ec)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===da?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const U2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F2=`
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

}`;class O2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new I_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new rn({vertexShader:U2,fragmentShader:F2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ut(new mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k2 extends ns{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new O2,f={},v=n.getContextAttributes();let w=null,S=null;const b=[],T=[],A=new Fe;let _=null,C=null;const P=new Ln;P.viewport=new wt;const U=new Ln;U.viewport=new wt;const F=[P,U],W=new Gb;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=b[Z];return ne===void 0&&(ne=new Gu,b[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=b[Z];return ne===void 0&&(ne=new Gu,b[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=b[Z];return ne===void 0&&(ne=new Gu,b[Z]=ne),ne.getHandSpace()};function Q(Z){const ne=T.indexOf(Z.inputSource);if(ne===-1)return;const ae=b[ne];ae!==void 0&&(ae.update(Z.inputSource,Z.frame,c||o),ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",H);for(let Z=0;Z<b.length;Z++){const ne=T[Z];ne!==null&&(T[Z]=null,b[Z].disconnect(ne))}N=null,V=null,m.reset();for(const Z in f)delete f[Z];if(e.setRenderTarget(w),p=null,d=null,h=null,r=null,S=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),C!==null){const Z=C.camera;Z.fov=C.fov,Z.zoom=C.zoom,Z.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Le=null,xe=null;v.depth&&(xe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=v.stencil?Vr:ji,Le=v.stencil?da:wi);const ze={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(ze),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new hn(d.textureWidth,d.textureHeight,{format:si,type:Dn,depthTexture:new ha(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new hn(p.framebufferWidth,p.framebufferHeight,{format:si,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(Z){for(let ne=0;ne<Z.removed.length;ne++){const ae=Z.removed[ne],Le=T.indexOf(ae);Le>=0&&(T[Le]=null,b[Le].disconnect(ae))}for(let ne=0;ne<Z.added.length;ne++){const ae=Z.added[ne];let Le=T.indexOf(ae);if(Le===-1){for(let ze=0;ze<b.length;ze++)if(ze>=T.length){T.push(ae),Le=ze;break}else if(T[ze]===null){T[ze]=ae,Le=ze;break}if(Le===-1)break}const xe=b[Le];xe&&xe.connect(ae)}}const z=new L,D=new L;function $(Z,ne,ae){z.setFromMatrixPosition(ne.matrixWorld),D.setFromMatrixPosition(ae.matrixWorld);const Le=z.distanceTo(D),xe=ne.projectionMatrix.elements,ze=ae.projectionMatrix.elements,Dt=xe[14]/(xe[10]-1),Xe=xe[14]/(xe[10]+1),et=(xe[9]+1)/xe[5],ut=(xe[9]-1)/xe[5],qe=(xe[8]-1)/xe[0],_t=(ze[8]+1)/ze[0],Bt=Dt*qe,vn=Dt*_t,St=Le/(-qe+_t),Rt=St*-qe;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Rt),Z.translateZ(St),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xe[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const B=Dt+St,$t=Xe+St,rt=Bt-Rt,R=vn+(Le-Rt),y=et*Xe/$t*B,G=ut*Xe/$t*B;Z.projectionMatrix.makePerspective(rt,R,y,G,B,$t),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ne=Z.near,ae=Z.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),W.near=U.near=P.near=ne,W.far=U.far=P.far=ae,(N!==W.near||V!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),N=W.near,V=W.far),W.layers.mask=Z.layers.mask|6,P.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;const Le=Z.parent,xe=W.cameras;se(W,Le);for(let ze=0;ze<xe.length;ze++)se(xe[ze],Le);xe.length===2?$(W,P,U):W.projectionMatrix.copy(P.projectionMatrix),C===null&&Z.isPerspectiveCamera&&(C={camera:Z,fov:Z.fov,zoom:Z.zoom}),ce(Z,W,Le)};function ce(Z,ne,ae){ae===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=rh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(Z){return f[Z]};let Ne=null;function Ue(Z,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Le=!1;ae.length!==W.cameras.length&&(W.cameras.length=0,Le=!0);for(let Xe=0;Xe<ae.length;Xe++){const et=ae[Xe];let ut=null;if(p!==null)ut=p.getViewport(et);else{const _t=h.getViewSubImage(d,et);ut=_t.viewport,Xe===0&&(e.setRenderTargetTextures(S,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(S))}let qe=F[Xe];qe===void 0&&(qe=new Ln,qe.layers.enable(Xe),qe.viewport=new wt,F[Xe]=qe),qe.matrix.fromArray(et.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(et.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ut.x,ut.y,ut.width,ut.height),Xe===0&&(W.matrix.copy(qe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Le===!0&&W.cameras.push(qe)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const Xe=h.getDepthInformation(ae[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,r.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Xe=0;Xe<ae.length;Xe++){const et=ae[Xe].camera;if(et){let ut=f[et];ut||(ut=new I_,f[et]=ut);const qe=h.getCameraImage(et);ut.sourceTexture=qe}}}}for(let ae=0;ae<b.length;ae++){const Le=T[ae],xe=b[ae];Le!==null&&xe!==void 0&&xe.update(Le,ne,c||o)}Ne&&Ne(Z,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Oe=new k_;Oe.setAnimationLoop(Ue),this.setAnimationLoop=function(Z){Ne=Z},this.dispose=function(){}}}const B2=new xt,X_=new ke;X_.set(-1,0,0,0,1,0,0,0,1);function z2(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,U_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,w,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===En&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===En&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),w=v.envMap,S=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(B2.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(X_),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=w*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function V2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const T=b.program;i.uniformBlockBinding(S,T)}function c(S,b){let T=r[S.id];T===void 0&&(m(S),T=u(S),r[S.id]=T,S.addEventListener("dispose",v));const A=b.program;i.updateUBOMapping(S,A);const _=e.render.frame;s[S.id]!==_&&(d(S),s[S.id]=_)}function u(S){const b=h();S.__bindingPointIndex=b;const T=t.createBuffer(),A=S.__size,_=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,A,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,T),T}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const b=r[S.id],T=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let _=0,C=T.length;_<C;_++){const P=T[_];if(Array.isArray(P))for(let U=0,F=P.length;U<F;U++)p(P[U],_,U,A);else p(P,_,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,b,T,A){if(x(S,b,T,A)===!0){const _=S.__offset,C=S.value;if(Array.isArray(C)){let P=0;for(let U=0;U<C.length;U++){const F=C[U],W=f(F);g(F,S.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,S.__data)}}function g(S,b,T){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,T)}function x(S,b,T,A){const _=S.value,C=b+"_"+T;if(A[C]===void 0)return typeof _=="number"||typeof _=="boolean"?A[C]=_:ArrayBuffer.isView(_)?A[C]=_.slice():A[C]=_.clone(),!0;{const P=A[C];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return A[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(S){const b=S.uniforms;let T=0;const A=16;for(let C=0,P=b.length;C<P;C++){const U=Array.isArray(b[C])?b[C]:[b[C]];for(let F=0,W=U.length;F<W;F++){const N=U[F],V=Array.isArray(N.value)?N.value:[N.value];for(let Q=0,Y=V.length;Q<Y;Q++){const H=V[Q],z=f(H),D=T%A,$=D%z.boundary,se=D+$;T+=$,se!==0&&A-se<z.storage&&(T+=A-se),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=z.storage}}}const _=T%A;return _>0&&(T+=A-_),S.__size=T,S.__cache={},this}function f(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),b}function v(S){const b=S.target;b.removeEventListener("dispose",v);const T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function w(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:w}}const H2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function G2(){return hi===null&&(hi=new Tb(H2,16,16,Qr,bn),hi.name="DFG_LUT",hi.minFilter=nn,hi.magFilter=nn,hi.wrapS=Oi,hi.wrapT=Oi,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class W2{constructor(e={}){const{canvas:n=tb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Dn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=p,m=new Set([vp,gp,mp]),f=new Set([Dn,wi,ua,da,hp,pp]),v=new Uint32Array(4),w=new Int32Array(4),S=new L;let b=null,T=null;const A=[],_=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let U=!1,F=null,W=null,N=null,V=null;this._outputColorSpace=Nn;let Q=0,Y=0,H=null,z=-1,D=null;const $=new wt,se=new wt;let ce=null;const Ne=new He(0);let Ue=0,Oe=n.width,Z=n.height,ne=1,ae=null,Le=null;const xe=new wt(0,0,Oe,Z),ze=new wt(0,0,Oe,Z);let Dt=!1;const Xe=new wp;let et=!1,ut=!1;const qe=new xt,_t=new L,Bt=new wt,vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Rt(){return H===null?ne:1}let B=i;function $t(E,I){return n.getContext(E,I)}let rt,R,y,G,q,J,le,ue,ee,ie,de,Ce,me,fe,Re,De,Be,O,he,te,pe,ye,re;try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${up}`),n.addEventListener("webglcontextlost",dt,!1),n.addEventListener("webglcontextrestored",nt,!1),n.addEventListener("webglcontextcreationerror",Zn,!1),B===null){const I="webgl2";if(B=$t(I,E),B===null)throw $t(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(E){throw n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",nt,!1),n.removeEventListener("webglcontextcreationerror",Zn,!1),tt("WebGLRenderer: "+E.message),E}function Pe(){rt=new GC(B),rt.init(),pe=new I2(B,rt),R=new DC(B,rt,e,pe),y=new L2(B,rt),R.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),W=B.createFramebuffer(),N=B.createFramebuffer(),V=B.createFramebuffer(),G=new jC(B),q=new x2,J=new D2(B,rt,y,q,R,pe,G),le=new HC(P),ue=new $b(B),ye=new NC(B,ue),ee=new WC(B,ue,G,ye),ie=new $C(B,ee,ue,ye,G),O=new YC(B,R,J),Re=new IC(q),de=new v2(P,le,rt,R,ye,Re),Ce=new z2(P,q),me=new y2,fe=new T2(rt),Be=new PC(P,le,y,ie,g,l),De=new N2(P,ie,R),re=new V2(B,G,R,y),he=new LC(B,rt,G),te=new XC(B,rt,G),G.programs=de.programs,P.capabilities=R,P.extensions=rt,P.properties=q,P.renderLists=me,P.shadowMap=De,P.state=y,P.info=G}x!==Dn&&(C=new KC(x,n.width,n.height,a,r,s));const Te=new k2(P,B);this.xr=Te,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(Oe,Z,!1))},this.getSize=function(E){return E.set(Oe,Z)},this.setSize=function(E,I,K=!0){if(Te.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=E,Z=I,n.width=Math.floor(E*ne),n.height=Math.floor(I*ne),K===!0&&(n.style.width=E+"px",n.style.height=I+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(Oe*ne,Z*ne).floor()},this.setDrawingBufferSize=function(E,I,K){Oe=E,Z=I,ne=K,n.width=Math.floor(E*K),n.height=Math.floor(I*K),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(x===Dn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy($)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,I,K,X){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,I,K,X),y.viewport($.copy(xe).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(ze)},this.setScissor=function(E,I,K,X){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,I,K,X),y.scissor(se.copy(ze).multiplyScalar(ne).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(E){y.setScissorTest(Dt=E)},this.setOpaqueSort=function(E){ae=E},this.setTransparentSort=function(E){Le=E},this.getClearColor=function(E){return E.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,K=!0){let X=0;if(E){let j=!1;if(H!==null){const _e=H.texture.format;j=m.has(_e)}if(j){const _e=H.texture.type,Me=f.has(_e),ve=Be.getClearColor(),Ee=Be.getClearAlpha(),Ae=ve.r,Ge=ve.g,je=ve.b;Me?(v[0]=Ae,v[1]=Ge,v[2]=je,v[3]=Ee,B.clearBufferuiv(B.COLOR,0,v)):(w[0]=Ae,w[1]=Ge,w[2]=je,w[3]=Ee,B.clearBufferiv(B.COLOR,0,w))}else X|=B.COLOR_BUFFER_BIT}I&&(X|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",nt,!1),n.removeEventListener("webglcontextcreationerror",Zn,!1),Be.dispose(),me.dispose(),fe.dispose(),q.dispose(),le.dispose(),ie.dispose(),ye.dispose(),re.dispose(),de.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Op),Te.removeEventListener("sessionend",kp),Pr.stop()};function dt(E){E.preventDefault(),_g("WebGLRenderer: Context Lost."),U=!0}function nt(){_g("WebGLRenderer: Context Restored."),U=!1;const E=G.autoReset,I=De.enabled,K=De.autoUpdate,X=De.needsUpdate,j=De.type;Pe(),G.autoReset=E,De.enabled=I,De.autoUpdate=K,De.needsUpdate=X,De.type=j}function Zn(E){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ci(E){const I=E.target;I.removeEventListener("dispose",ci),Fy(I)}function Fy(E){Oy(E),q.remove(E)}function Oy(E){const I=q.get(E).programs;I!==void 0&&(I.forEach(function(K){de.releaseProgram(K)}),E.isShaderMaterial&&de.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,K,X,j,_e){I===null&&(I=vn);const Me=j.isMesh&&j.matrixWorld.determinantAffine()<0,ve=zy(E,I,K,X,j);y.setMaterial(X,Me);let Ee=K.index,Ae=1;if(X.wireframe===!0){if(Ee=ee.getWireframeAttribute(K),Ee===void 0)return;Ae=2}const Ge=K.drawRange,je=K.attributes.position;let be=Ge.start*Ae,it=(Ge.start+Ge.count)*Ae;_e!==null&&(be=Math.max(be,_e.start*Ae),it=Math.min(it,(_e.start+_e.count)*Ae)),Ee!==null?(be=Math.max(be,0),it=Math.min(it,Ee.count)):je!=null&&(be=Math.max(be,0),it=Math.min(it,je.count));const Pt=it-be;if(Pt<0||Pt===1/0)return;ye.setup(j,X,ve,K,Ee);let pt,lt=he;if(Ee!==null&&(pt=ue.get(Ee),lt=te,lt.setIndex(pt)),j.isMesh)X.wireframe===!0?(y.setLineWidth(X.wireframeLinewidth*Rt()),lt.setMode(B.LINES)):lt.setMode(B.TRIANGLES);else if(j.isLine){let qt=X.linewidth;qt===void 0&&(qt=1),y.setLineWidth(qt*Rt()),j.isLineSegments?lt.setMode(B.LINES):j.isLineLoop?lt.setMode(B.LINE_LOOP):lt.setMode(B.LINE_STRIP)}else j.isPoints?lt.setMode(B.POINTS):j.isSprite&&lt.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,Se=j._multiDrawCounts,cn=j._multiDrawCount,Qe=Ee?ue.get(Ee).bytesPerElement:1,Vn=q.get(X).currentProgram.getUniforms();for(let ui=0;ui<cn;ui++)Vn.setValue(B,"_gl_DrawID",ui),lt.render(qt[ui]/Qe,Se[ui])}else if(j.isInstancedMesh)lt.renderInstances(be,Pt,j.count);else if(K.isInstancedBufferGeometry){const qt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Se=Math.min(K.instanceCount,qt);lt.renderInstances(be,Pt,Se)}else lt.render(be,Pt)};function Fp(E,I,K,X){F!==null&&E.isNodeMaterial&&F.setObject(X,E),et===!0&&Re.setState(E,K,!1),E.transparent===!0&&E.side===Ii&&E.forceSinglePass===!1?(E.side=En,E.needsUpdate=!0,Ca(E,I,X),E.side=Kr,E.needsUpdate=!0,Ca(E,I,X),E.side=Ii):Ca(E,I,X)}this.compile=function(E,I,K=null){K===null&&(K=E),F!==null&&F.renderStart(E,I,K),T=fe.get(K),T.init(I),_.push(T),K.traverseVisible(function(j){j.isLight&&j.layers.test(I.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),E!==K&&E.traverseVisible(function(j){j.isLight&&j.layers.test(I.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),ut=this.localClippingEnabled,et=Re.init(this.clippingPlanes,ut),et===!0&&Re.setGlobalState(this.clippingPlanes,I),F!==null&&De.render(T.state.shadowsArray,K,I);const X=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const _e=j.material;if(_e)if(Array.isArray(_e))for(let Me=0;Me<_e.length;Me++){const ve=_e[Me];Fp(ve,K,I,j),X.add(ve)}else Fp(_e,K,I,j),X.add(_e)}),T=_.pop(),F!==null&&F.renderEnd(),X},this.compileAsync=function(E,I,K=null){const X=this.compile(E,I,K);return new Promise(j=>{function _e(){if(X.forEach(function(Me){const Ee=q.get(Me).currentProgram;(Ee===void 0||Ee.isReady())&&X.delete(Me)}),X.size===0){j(E);return}setTimeout(_e,10)}rt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ru=null;function ky(E){ru&&ru(E)}function Op(){Pr.stop()}function kp(){Pr.start()}const Pr=new k_;Pr.setAnimationLoop(ky),typeof self<"u"&&Pr.setContext(self),this.setAnimationLoop=function(E){ru=E,Te.setAnimationLoop(E),E===null?Pr.stop():Pr.start()},Te.addEventListener("sessionstart",Op),Te.addEventListener("sessionend",kp),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(E,I);const K=Te.enabled===!0&&Te.isPresenting===!0,X=C!==null&&(H===null||K)&&C.begin(P,H);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(I),I=Te.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,I,H),T=fe.get(E,_.length),T.init(I),T.state.textureUnits=J.getTextureUnits(),_.push(T),qe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Xe.setFromProjectionMatrix(qe,xi,I.reversedDepth),ut=this.localClippingEnabled,et=Re.init(this.clippingPlanes,ut),b=me.get(E,A.length),b.init(),A.push(b),Te.enabled===!0&&Te.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&su(Me,I,-1/0,P.sortObjects)}su(E,I,0,P.sortObjects),b.finish(),F!==null&&F.updateLights(T.state.lightsArray),P.sortObjects===!0&&b.sort(ae,Le),St=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,St&&Be.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Re.beginShadows();const j=T.state.shadowsArray;if(De.render(j,E,I),et===!0&&Re.endShadows(),(X&&C.hasRenderPass())===!1){const Me=b.opaque,ve=b.transmissive;if(T.setupLights(),I.isArrayCamera){const Ee=I.cameras;if(ve.length>0)for(let Ae=0,Ge=Ee.length;Ae<Ge;Ae++){const je=Ee[Ae];zp(Me,ve,E,je)}St&&Be.render(E);for(let Ae=0,Ge=Ee.length;Ae<Ge;Ae++){const je=Ee[Ae];Bp(b,E,je,je.viewport)}}else ve.length>0&&zp(Me,ve,E,I),St&&Be.render(E),Bp(b,E,I)}H!==null&&Y===0&&(J.updateMultisampleRenderTarget(H),J.updateRenderTargetMipmap(H)),X&&C.end(P),E.isScene===!0&&E.onAfterRender(P,E,I),ye.resetDefaultState(),z=-1,D=null,_.pop(),_.length>0?(T=_[_.length-1],J.setTextureUnits(T.state.textureUnits),et===!0&&Re.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,F!==null&&F.renderEnd()};function su(E,I,K,X){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Xe)){X&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(qe);const Me=ie.update(E),ve=E.material;ve.visible&&b.push(E,Me,ve,K,Bt.z,null,I)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Xe))){const Me=ie.update(E),ve=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Bt.copy(Me.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(qe)),Array.isArray(ve)){const Ee=Me.groups;for(let Ae=0,Ge=Ee.length;Ae<Ge;Ae++){const je=Ee[Ae],be=ve[je.materialIndex];be&&be.visible&&b.push(E,Me,be,K,Bt.z,je,I)}}else ve.visible&&b.push(E,Me,ve,K,Bt.z,null,I)}}const _e=E.children;for(let Me=0,ve=_e.length;Me<ve;Me++)su(_e[Me],I,K,X)}function Bp(E,I,K,X){const{opaque:j,transmissive:_e,transparent:Me}=E;T.setupLightsView(K),et===!0&&Re.setGlobalState(P.clippingPlanes,K),X&&y.viewport($.copy(X)),j.length>0&&Aa(j,I,K),_e.length>0&&Aa(_e,I,K),Me.length>0&&Aa(Me,I,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function zp(E,I,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){const be=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new hn(1,1,{generateMipmaps:!0,type:be?bn:Dn,minFilter:ki,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const _e=T.state.transmissionRenderTarget[X.id],Me=X.viewport||$;_e.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const ve=P.getRenderTarget(),Ee=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(_e),P.getClearColor(Ne),Ue=P.getClearAlpha(),Ue<1&&P.setClearColor(16777215,.5),P.clear(),St&&Be.render(K);const Ge=P.toneMapping;P.toneMapping=Mi;const je=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),et===!0&&Re.setGlobalState(P.clippingPlanes,X),Aa(E,K,X),J.updateMultisampleRenderTarget(_e),J.updateRenderTargetMipmap(_e),rt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let it=0,Pt=I.length;it<Pt;it++){const pt=I[it],{object:lt,geometry:qt,material:Se,group:cn}=pt;if(Se.side===Ii&&lt.layers.test(X.layers)){const Qe=Se.side;Se.side=En,Se.needsUpdate=!0,Vp(lt,K,X,qt,Se,cn),Se.side=Qe,Se.needsUpdate=!0,be=!0}}be===!0&&(J.updateMultisampleRenderTarget(_e),J.updateRenderTargetMipmap(_e))}P.setRenderTarget(ve,Ee,Ae),P.setClearColor(Ne,Ue),je!==void 0&&(X.viewport=je),P.toneMapping=Ge}function Aa(E,I,K){const X=I.isScene===!0?I.overrideMaterial:null;for(let j=0,_e=E.length;j<_e;j++){const Me=E[j],{object:ve,geometry:Ee,group:Ae}=Me;let Ge=Me.material;Ge.allowOverride===!0&&X!==null&&(Ge=X),ve.layers.test(K.layers)&&Vp(ve,I,K,Ee,Ge,Ae)}}function Vp(E,I,K,X,j,_e){F!==null&&j.isNodeMaterial&&F.setObject(E,j),E.onBeforeRender(P,I,K,X,j,_e),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(P,I,K,X,E,_e),j.transparent===!0&&j.side===Ii&&j.forceSinglePass===!1?(j.side=En,j.needsUpdate=!0,P.renderBufferDirect(K,I,X,j,E,_e),j.side=Kr,j.needsUpdate=!0,P.renderBufferDirect(K,I,X,j,E,_e),j.side=Ii):P.renderBufferDirect(K,I,X,j,E,_e),E.onAfterRender(P,I,K,X,j,_e)}function Ca(E,I,K){I.isScene!==!0&&(I=vn);const X=q.get(E),j=T.state.lights,_e=T.state.shadowsArray,Me=j.state.version,ve=de.getParameters(E,j.state,_e,I,K,T.state.lightProbeGridArray),Ee=de.getProgramCacheKey(ve);let Ae=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,X.fog=I.fog;const Ge=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=le.get(E.envMap||X.environment,Ge),X.envMapRotation=X.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",ci),Ae=new Map,X.programs=Ae);let je=Ae.get(Ee);if(je!==void 0){if(X.currentProgram===je&&X.lightsStateVersion===Me)return Gp(E,ve),je}else ve.uniforms=de.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,K,ve),E.onBeforeCompile(ve,P),je=de.acquireProgram(ve,Ee),Ae.set(Ee,je),X.uniforms=ve.uniforms;const be=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(be.clippingPlanes=Re.uniform),Gp(E,ve),X.needsLights=Hy(E),X.lightsStateVersion=Me,X.needsLights&&(be.ambientLightColor.value=j.state.ambient,be.lightProbe.value=j.state.probe,be.sunLights.value=j.state.sun,be.sunLightShadows.value=j.state.sunShadow,be.directionalLights.value=j.state.directional,be.directionalLightShadows.value=j.state.directionalShadow,be.spotLights.value=j.state.spot,be.spotLightShadows.value=j.state.spotShadow,be.rectAreaLights.value=j.state.rectArea,be.ltc_1.value=j.state.rectAreaLTC1,be.ltc_2.value=j.state.rectAreaLTC2,be.pointLights.value=j.state.point,be.pointLightShadows.value=j.state.pointShadow,be.hemisphereLights.value=j.state.hemi,be.sunShadowMatrix.value=j.state.sunShadowMatrix,be.sunShadowCascade.value=j.state.sunShadowCascade,be.directionalShadowMatrix.value=j.state.directionalShadowMatrix,be.spotLightMatrix.value=j.state.spotLightMatrix,be.spotLightMap.value=j.state.spotLightMap,be.pointShadowMatrix.value=j.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=je,X.uniformsList=null,je}function Hp(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Xl.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Gp(E,I){const K=q.get(E);K.outputColorSpace=I.outputColorSpace,K.batching=I.batching,K.batchingColor=I.batchingColor,K.instancing=I.instancing,K.instancingColor=I.instancingColor,K.instancingMorph=I.instancingMorph,K.skinning=I.skinning,K.morphTargets=I.morphTargets,K.morphNormals=I.morphNormals,K.morphColors=I.morphColors,K.morphTargetsCount=I.morphTargetsCount,K.numClippingPlanes=I.numClippingPlanes,K.numIntersection=I.numClipIntersection,K.vertexAlphas=I.vertexAlphas,K.vertexTangents=I.vertexTangents,K.toneMapping=I.toneMapping}function By(E,I){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let K=0,X=E.length;K<X;K++){const j=E[K];if(j.texture!==null&&j.boundingBox.containsPoint(S))return j}return null}function zy(E,I,K,X,j){I.isScene!==!0&&(I=vn),J.resetTextureUnits();const _e=I.fog,Me=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?I.environment:null,ve=H===null?P.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ze.workingColorSpace,Ee=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ae=le.get(X.envMap||Me,Ee),Ge=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,je=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),be=!!K.morphAttributes.position,it=!!K.morphAttributes.normal,Pt=!!K.morphAttributes.color;let pt=Mi;X.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(pt=P.toneMapping);const lt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,qt=lt!==void 0?lt.length:0,Se=q.get(X),cn=T.state.lights;if(et===!0&&(ut===!0||E!==D)){const ft=E===D&&X.id===z;Re.setState(X,E,ft)}let Qe=!1;X.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==cn.state.version||Se.outputColorSpace!==ve||j.isBatchedMesh&&Se.batching===!1||!j.isBatchedMesh&&Se.batching===!0||j.isBatchedMesh&&Se.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Se.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Se.instancing===!1||!j.isInstancedMesh&&Se.instancing===!0||j.isSkinnedMesh&&Se.skinning===!1||!j.isSkinnedMesh&&Se.skinning===!0||j.isInstancedMesh&&Se.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Se.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Se.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Se.instancingMorph===!1&&j.morphTexture!==null||Se.envMap!==Ae||X.fog===!0&&Se.fog!==_e||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Re.numPlanes||Se.numIntersection!==Re.numIntersection)||Se.vertexAlphas!==Ge||Se.vertexTangents!==je||Se.morphTargets!==be||Se.morphNormals!==it||Se.morphColors!==Pt||Se.toneMapping!==pt||Se.morphTargetsCount!==qt||!!Se.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Se.__version=X.version);let Vn=Se.currentProgram;Qe===!0&&(Vn=Ca(X,I,j),F&&X.isNodeMaterial&&F.onUpdateProgram(X,Vn,Se));let ui=!1,$i=!1,rs=!1;const at=Vn.getUniforms(),At=Se.uniforms;if(y.useProgram(Vn.program)&&(ui=!0,$i=!0,rs=!0),X.id!==z&&(z=X.id,$i=!0),Se.needsLights){const ft=By(T.state.lightProbeGridArray,j);Se.lightProbeGrid!==ft&&(Se.lightProbeGrid=ft,$i=!0)}if(ui||D!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(B,"projectionMatrix",E.projectionMatrix),at.setValue(B,"viewMatrix",E.matrixWorldInverse);const Ki=at.map.cameraPosition;Ki!==void 0&&Ki.setValue(B,_t.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&at.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&at.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),D!==E&&(D=E,$i=!0,rs=!0)}if(Se.needsLights&&(cn.state.sunShadowMap.length>0&&at.setValue(B,"sunShadowMap",cn.state.sunShadowMap,J),cn.state.directionalShadowMap.length>0&&at.setValue(B,"directionalShadowMap",cn.state.directionalShadowMap,J),cn.state.spotShadowMap.length>0&&at.setValue(B,"spotShadowMap",cn.state.spotShadowMap,J),cn.state.pointShadowMap.length>0&&at.setValue(B,"pointShadowMap",cn.state.pointShadowMap,J)),j.isSkinnedMesh){at.setOptional(B,j,"bindMatrix"),at.setOptional(B,j,"bindMatrixInverse");const ft=j.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),at.setValue(B,"boneTexture",ft.boneTexture,J))}j.isBatchedMesh&&(at.setOptional(B,j,"batchingTexture"),at.setValue(B,"batchingTexture",j._matricesTexture,J),at.setOptional(B,j,"batchingIdTexture"),at.setValue(B,"batchingIdTexture",j._indirectTexture,J),at.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&at.setValue(B,"batchingColorTexture",j._colorsTexture,J));const qi=K.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&O.update(j,K,Vn),($i||Se.receiveShadow!==j.receiveShadow)&&(Se.receiveShadow=j.receiveShadow,at.setValue(B,"receiveShadow",j.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&I.environment!==null&&(At.envMapIntensity.value=I.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=G2()),$i){if(at.setValue(B,"toneMappingExposure",P.toneMappingExposure),Se.needsLights&&Vy(At,rs),_e&&X.fog===!0&&Ce.refreshFogUniforms(At,_e),Ce.refreshMaterialUniforms(At,X,ne,Z,T.state.transmissionRenderTarget[E.id]),Se.needsLights&&Se.lightProbeGrid){const ft=Se.lightProbeGrid;At.probesSH.value=ft.texture,At.probesMin.value.copy(ft.boundingBox.min),At.probesMax.value.copy(ft.boundingBox.max),At.probesResolution.value.copy(ft.resolution)}Xl.upload(B,Hp(Se),At,J)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Xl.upload(B,Hp(Se),At,J),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&at.setValue(B,"center",j.center),at.setValue(B,"modelViewMatrix",j.modelViewMatrix),at.setValue(B,"normalMatrix",j.normalMatrix),at.setValue(B,"modelMatrix",j.matrixWorld),X.uniformsGroups!==void 0){const ft=X.uniformsGroups;for(let Ki=0,ss=ft.length;Ki<ss;Ki++){const Xp=ft[Ki];re.update(Xp,Vn),re.bind(Xp,Vn)}}return Vn}function Vy(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.sunLights.needsUpdate=I,E.sunLightShadows.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Hy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,I,K){const X=q.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=I,q.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const K=q.get(E);K.__webglFramebuffer=I,K.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,K=0){H=E,Q=I,Y=K;let X=null,j=!1,_e=!1;if(E){const ve=q.get(E);if(ve.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,ve.__webglFramebuffer),$.copy(E.viewport),se.copy(E.scissor),ce=E.scissorTest,y.viewport($),y.scissor(se),y.setScissorTest(ce),z=-1;return}else if(ve.__webglFramebuffer===void 0)J.setupRenderTarget(E);else if(ve.__hasExternalTextures)J.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ge=E.depthTexture;if(ve.__boundDepthTexture!==Ge){if(Ge!==null&&q.has(Ge)&&(E.width!==Ge.image.width||E.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(E)}}const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);const Ae=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[I])?X=Ae[I][K]:X=Ae[I],j=!0):E.samples>0&&J.useMultisampledRTT(E)===!1?X=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?X=Ae[K]:X=Ae,$.copy(E.viewport),se.copy(E.scissor),ce=E.scissorTest}else $.copy(xe).multiplyScalar(ne).floor(),se.copy(ze).multiplyScalar(ne).floor(),ce=Dt;if(K!==0&&(X=W),y.bindFramebuffer(B.FRAMEBUFFER,X)&&y.drawBuffers(E,X),y.viewport($),y.scissor(se),y.setScissorTest(ce),j){const ve=q.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve.__webglTexture,K)}else if(_e){const ve=I;for(let Ee=0;Ee<E.textures.length;Ee++){const Ae=q.get(E.textures[Ee]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,K,ve)}}else if(E!==null&&K!==0){const ve=q.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ve.__webglTexture,K)}z=-1};function Wp(E){const I=q.get(E);return(I.__readFormat!==E.format||I.__readType!==E.type)&&(I.__readFormat=E.format,I.__readType=E.type,I.__formatReadable=R.textureFormatReadable(E.format),I.__typeReadable=R.textureTypeReadable(E.type)),I}this.readRenderTargetPixels=function(E,I,K,X,j,_e,Me,ve=0){if(!(E&&E.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){y.bindFramebuffer(B.FRAMEBUFFER,Ee);try{const Ae=E.textures[ve],Ge=Ae.format,je=Ae.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ve);const be=Wp(Ae);if(be.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-X&&K>=0&&K<=E.height-j&&B.readPixels(I,K,X,j,pe.convert(Ge),pe.convert(je),_e)}finally{const Ae=H!==null?q.get(H).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,I,K,X,j,_e,Me,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(I>=0&&I<=E.width-X&&K>=0&&K<=E.height-j){y.bindFramebuffer(B.FRAMEBUFFER,Ee);const Ae=E.textures[ve],Ge=Ae.format,je=Ae.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ve);const be=Wp(Ae);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,it),B.bufferData(B.PIXEL_PACK_BUFFER,_e.byteLength,B.STREAM_READ),B.readPixels(I,K,X,j,pe.convert(Ge),pe.convert(je),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Pt=H!==null?q.get(H).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Pt);const pt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await nb(B,pt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,it),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,_e),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(it),B.deleteSync(pt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,K=0){const X=Math.pow(2,-K),j=Math.floor(E.image.width*X),_e=Math.floor(E.image.height*X),Me=I!==null?I.x:0,ve=I!==null?I.y:0;J.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Me,ve,j,_e),y.unbindTexture()},this.copyTextureToTexture=function(E,I,K=null,X=null,j=0,_e=0){let Me,ve,Ee,Ae,Ge,je,be,it,Pt;const pt=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(K!==null)Me=K.max.x-K.min.x,ve=K.max.y-K.min.y,Ee=K.isBox3?K.max.z-K.min.z:1,Ae=K.min.x,Ge=K.min.y,je=K.isBox3?K.min.z:0;else{const At=Math.pow(2,-j);Me=Math.floor(pt.width*At),ve=Math.floor(pt.height*At),E.isDataArrayTexture?Ee=pt.depth:E.isData3DTexture?Ee=Math.floor(pt.depth*At):Ee=1,Ae=0,Ge=0,je=0}X!==null?(be=X.x,it=X.y,Pt=X.z):(be=0,it=0,Pt=0);const lt=pe.convert(I.format),qt=pe.convert(I.type);let Se;I.isData3DTexture?(J.setTexture3D(I,0),Se=B.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(J.setTexture2DArray(I,0),Se=B.TEXTURE_2D_ARRAY):(J.setTexture2D(I,0),Se=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,I.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,I.unpackAlignment);const cn=y.getParameter(B.UNPACK_ROW_LENGTH),Qe=y.getParameter(B.UNPACK_IMAGE_HEIGHT),Vn=y.getParameter(B.UNPACK_SKIP_PIXELS),ui=y.getParameter(B.UNPACK_SKIP_ROWS),$i=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,pt.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pt.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Ae),y.pixelStorei(B.UNPACK_SKIP_ROWS,Ge),y.pixelStorei(B.UNPACK_SKIP_IMAGES,je);const rs=E.isDataArrayTexture||E.isData3DTexture,at=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const At=q.get(E),qi=q.get(I),ft=q.get(At.__renderTarget),Ki=q.get(qi.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,ft.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let ss=0;ss<Ee;ss++)rs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(E).__webglTexture,j,je+ss),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(I).__webglTexture,_e,Pt+ss)),B.blitFramebuffer(Ae,Ge,Me,ve,be,it,Me,ve,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||q.has(E)){const At=q.get(E),qi=q.get(I);y.bindFramebuffer(B.READ_FRAMEBUFFER,N),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let ft=0;ft<Ee;ft++)rs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.__webglTexture,j,je+ft):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,At.__webglTexture,j),at?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qi.__webglTexture,_e,Pt+ft):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,qi.__webglTexture,_e),j!==0?B.blitFramebuffer(Ae,Ge,Me,ve,be,it,Me,ve,B.COLOR_BUFFER_BIT,B.NEAREST):at?B.copyTexSubImage3D(Se,_e,be,it,Pt+ft,Ae,Ge,Me,ve):B.copyTexSubImage2D(Se,_e,be,it,Ae,Ge,Me,ve);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Se,_e,be,it,Pt,Me,ve,Ee,lt,qt,pt.data):I.isCompressedArrayTexture?B.compressedTexSubImage3D(Se,_e,be,it,Pt,Me,ve,Ee,lt,pt.data):B.texSubImage3D(Se,_e,be,it,Pt,Me,ve,Ee,lt,qt,pt):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,_e,be,it,Me,ve,lt,qt,pt.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,_e,be,it,pt.width,pt.height,lt,pt.data):B.texSubImage2D(B.TEXTURE_2D,_e,be,it,Me,ve,lt,qt,pt);y.pixelStorei(B.UNPACK_ROW_LENGTH,cn),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qe),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Vn),y.pixelStorei(B.UNPACK_SKIP_ROWS,ui),y.pixelStorei(B.UNPACK_SKIP_IMAGES,$i),_e===0&&I.generateMipmaps&&B.generateMipmap(Se),y.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&J.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){Q=0,Y=0,H=null,y.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const jl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ea{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const X2=new bp(-1,1,1,-1,0,1);class j2 extends an{constructor(){super(),this.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tn([0,2,0,0,2,0],2))}}const Y2=new j2;class j_{constructor(e){this._mesh=new Ut(Y2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,X2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Y_ extends Ea{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pc.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new j_(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class x0 extends Ea{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class $2 extends Ea{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class q2{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Fe);this._width=i.width,this._height=i.height,n=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Y_(jl),this.copyPass.material.blending=Si,this.timer=new Wb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}x0!==void 0&&(o instanceof x0?i=!0:o instanceof $2&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class K2 extends Ea{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new He}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Z2={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class no extends Ea{constructor(e,n=1,i,r){super(),this.strength=n,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(s,o,{type:bn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new hn(s,o,{type:bn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new hn(s,o,{type:bn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=Z2;this.highPassUniforms=Pc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Fe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pc.clone(jl.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:jl.vertexShader,fragmentShader:jl.fragmentShader,premultipliedAlpha:!0,blending:Mc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new Xs,this._fsQuad=new j_(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Fe(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=no.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=no.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const n=[],i=e/3;for(let o=0;o<e;o++)n.push(.39894*Math.exp(-.5*o*o/(i*i))/i);const r=[],s=[];for(let o=1;o<e;o+=2){const a=n[o],l=o+1<e?n[o+1]:0,c=a+l;r.push((o*a+(o+1)*l)/c),s.push(c)}return new rn({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)},centerWeight:{value:n[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}}no.BlurDirectionX=new Fe(1,0);no.BlurDirectionY=new Fe(0,1);const Li=8,Q2={uniforms:{tDiffuse:{value:null},uTime:{value:0},uAspect:{value:1},uActiveRippleCount:{value:0},uRipples:{value:new Array(Li).fill(null).map(()=>new Fe(.5,.5))},uRippleAges:{value:new Float32Array(Li)},uRippleIntensities:{value:new Float32Array(Li)}},vertexShader:`
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
    uniform vec2 uRipples[${Li}];
    uniform float uRippleAges[${Li}];
    uniform float uRippleIntensities[${Li}];

    varying vec2 vUv;

    void main() {
      vec2 rippleOffset = vec2(0.0);

      // 1. Fluid Mouse Ripple Simulation (Vertex3D style)
      for (int i = 0; i < ${Li}; i++) {
        if (i >= uActiveRippleCount) break;

        vec2 diff = vUv - uRipples[i];
        diff.x *= uAspect; // circular wave correction
        float dist = length(diff);
        float age = uRippleAges[i];

        if (age < 0.95 && dist < 0.5) {
          // Thin, high-frequency harmonic wave (delicate water ripple)
          float wave = sin(dist * 68.0 - age * 12.5);
          // Tight spatial falloff + clean exponential decay
          float envelope = exp(-dist * 8.5) * exp(-age * 2.8);
          vec2 dir = dist > 0.0001 ? normalize(diff) : vec2(0.0);
          dir.x /= uAspect; // revert aspect scaling for UV displacement
          rippleOffset += dir * (wave * envelope * uRippleIntensities[i] * 0.016);
        }
      }

      vec2 centerDiff = vUv - vec2(0.5);
      float distCenter = length(centerDiff);
      vec2 radialDir = distCenter > 0.0001 ? normalize(centerDiff) : vec2(0.0);

      // 2. Optical Lens Chromatic Aberration (Radial + Subtle Prismatic Wave Edge)
      vec2 chromOffset = radialDir * (distCenter * distCenter * 0.004) + rippleOffset * 0.22;

      vec2 uvR = clamp(vUv + rippleOffset + chromOffset, 0.0, 1.0);
      vec2 uvG = clamp(vUv + rippleOffset, 0.0, 1.0);
      vec2 uvB = clamp(vUv + rippleOffset - chromOffset, 0.0, 1.0);

      vec4 colR = texture2D(tDiffuse, uvR);
      vec4 colG = texture2D(tDiffuse, uvG);
      vec4 colB = texture2D(tDiffuse, uvB);
      vec3 color = vec3(colR.r, colG.g, colB.b);

      // 3. Delicate Optical Refraction Sheen on Thin Wave Crests
      float rippleMag = length(rippleOffset);
      color += vec3(0.08, 0.22, 0.32) * (rippleMag * 4.2);

      // 4. Stepped 24 FPS Film Grain (Eliminates banding, adds velvety tactile texture)
      float steppedTime = floor(uTime * 24.0) / 24.0;
      float grain = fract(sin(dot(vUv * 6.5 + vec2(steppedTime * 0.17, steppedTime * 0.43), vec2(12.9898, 78.233))) * 43758.5453);
      color += (grain - 0.5) * 0.036;

      // 5. Cinematic Vignette (Darkened perimeter focusing eye on portfolio content)
      float vignette = smoothstep(1.25, 0.42, distCenter);
      color *= (0.76 + 0.24 * vignette);

      gl_FragColor = vec4(color, 1.0);
    }
  `};class J2{constructor(e,n){Ke(this,"pass");Ke(this,"ripples",[]);Ke(this,"lastSpawnTime",0);Ke(this,"lastX",-1);Ke(this,"lastY",-1);this.pass=new Y_(Q2),this.updateSize(e,n)}updateSize(e,n){const i=n>0?e/n:1;this.pass.uniforms.uAspect.value=i}addCursorMovement(e,n,i){if(this.lastX<0){this.lastX=e,this.lastY=n;return}const r=e-this.lastX,s=n-this.lastY,o=Math.sqrt(r*r+s*s);if(o>.008&&i-this.lastSpawnTime>.045){const a=Math.min(1,o*12);this.spawnRipple(e,n,.4+a*.6),this.lastSpawnTime=i,this.lastX=e,this.lastY=n}}spawnRipple(e,n,i=.8){this.ripples.length>=Li&&this.ripples.shift(),this.ripples.push({x:e,y:n,age:0,intensity:Math.min(1,i)})}update(e,n){this.pass.uniforms.uTime.value=n;for(let r=0;r<this.ripples.length;r++)this.ripples[r].age+=e;this.ripples=this.ripples.filter(r=>r.age<.95);const i=Math.min(this.ripples.length,Li);this.pass.uniforms.uActiveRippleCount.value=i;for(let r=0;r<i;r++){const s=this.ripples[r];this.pass.uniforms.uRipples.value[r].set(s.x,s.y),this.pass.uniforms.uRippleAges.value[r]=s.age,this.pass.uniforms.uRippleIntensities.value[r]=s.intensity}}}function eP(t,e,n,i,r=512,s=256){const o=document.createElement("canvas");o.width=r,o.height=s;const a=o.getContext("2d");if(!a)return new eo(o);a.fillStyle="#030408",a.fillRect(0,0,r,s),a.strokeStyle=i,a.lineWidth=6,a.shadowColor=n,a.shadowBlur=18,a.strokeRect(14,14,r-28,s-28),a.strokeStyle=n,a.lineWidth=2,a.strokeRect(22,22,r-44,s-44),a.fillStyle="#ffffff",a.font=`bold ${Math.floor(s*.28)}px "Courier New", monospace, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.shadowColor=n,a.shadowBlur=24,a.fillText(t,r/2,s*.42),e&&(a.fillStyle=n,a.font=`600 ${Math.floor(s*.14)}px monospace, sans-serif`,a.shadowBlur=14,a.fillText(e,r/2,s*.74));const l=new eo(o);return l.generateMipmaps=!0,l.minFilter=ki,l}function tP(t,e,n,i,r,s){const o=document.createElement("canvas");o.width=640,o.height=400;const a=o.getContext("2d");if(!a)return new eo(o);a.fillStyle="rgba(4, 7, 16, 0.95)",a.fillRect(0,0,640,400),a.strokeStyle="rgba(255, 255, 255, 0.04)",a.lineWidth=1;for(let u=30;u<610;u+=30)a.beginPath(),a.moveTo(u,20),a.lineTo(u,380),a.stroke();for(let u=30;u<370;u+=30)a.beginPath(),a.moveTo(20,u),a.lineTo(620,u),a.stroke();a.strokeStyle=r,a.lineWidth=4,a.shadowColor=r,a.shadowBlur=16,a.strokeRect(16,16,608,368),a.strokeStyle="#ffffff",a.lineWidth=3,a.shadowBlur=8;const l=24;a.beginPath(),a.moveTo(12,12+l),a.lineTo(12,12),a.lineTo(12+l,12),a.stroke(),a.beginPath(),a.moveTo(628-l,12),a.lineTo(628,12),a.lineTo(628,12+l),a.stroke(),a.beginPath(),a.moveTo(12,388-l),a.lineTo(12,388),a.lineTo(12+l,388),a.stroke(),a.beginPath(),a.moveTo(628-l,388),a.lineTo(628,388),a.lineTo(628,388-l),a.stroke(),a.shadowBlur=0,a.fillStyle=r,a.font='bold 22px "Courier New", monospace',a.textAlign="left",a.fillText(`// STATION ${t}`,36,56),a.fillStyle="rgba(255, 255, 255, 0.12)",a.fillRect(450,36,150,28),a.fillStyle="#ffffff",a.font='bold 14px "Courier New", monospace',a.textAlign="center",a.fillText(i,525,55),a.fillStyle="#ffffff",a.font='bold 36px "Courier New", monospace, sans-serif',a.textAlign="left",a.shadowColor=r,a.shadowBlur=16,a.fillText(e,36,120),a.fillStyle=s,a.font='600 20px "Courier New", monospace',a.shadowBlur=8,a.fillText(n,36,160),a.strokeStyle=r,a.lineWidth=2,a.beginPath(),a.moveTo(36,220);for(let u=0;u<560;u+=20){const h=220+Math.sin(u*.08)*18+(u%40===0?12:-6);a.lineTo(36+u,h)}a.stroke(),a.fillStyle="rgba(255, 255, 255, 0.45)",a.font='13px "Courier New", monospace',a.fillText(`SYS_NODE: [READY]   BUFFER: 0x${t}AA   STATUS: ACTIVE`,36,335),a.fillStyle="rgba(255, 255, 255, 0.1)",a.fillRect(36,350,560,6),a.fillStyle=r,a.fillRect(36,350,380,6);const c=new eo(o);return c.generateMipmaps=!0,c.minFilter=ki,c}function nP(){const t=document.createElement("canvas");t.width=512,t.height=1024;const e=t.getContext("2d");if(!e)return new eo(t);e.fillStyle="#080b14",e.fillRect(0,0,512,1024);const n=16,i=40,r=18,s=14,o=14,a=12;for(let c=0;c<i;c++)for(let u=0;u<n;u++){const h=12+u*(r+o),d=14+c*(s+a),p=Math.random();p>.78?(e.fillStyle="rgba(0, 240, 255, 0.85)",e.fillRect(h,d,r,s)):p>.65?(e.fillStyle="rgba(255, 183, 3, 0.8)",e.fillRect(h,d,r,s)):p>.58?(e.fillStyle="rgba(255, 0, 128, 0.75)",e.fillRect(h,d,r,s)):(e.fillStyle="rgba(16, 22, 38, 0.6)",e.fillRect(h,d,r,s))}const l=new eo(t);return l.wrapS=ca,l.wrapT=ca,l.repeat.set(1,3),l}function iP(){const t=new Ds,e=[],n=new mr(60,120,1,1),i=new vl({color:263433,roughness:.18,metalness:.85,envMapIntensity:1.6}),r=new Ut(n,i);r.rotation.x=-Math.PI/2,r.position.set(0,0,-22),t.add(r),e.push(n,i);const s=new mr(14,80),o=new Xs({color:396056,transparent:!0,opacity:.7}),a=new Ut(s,o);a.rotation.x=-Math.PI/2,a.position.set(0,.02,-20),t.add(a),e.push(s,o);const l=nP();e.push(l);const c=new vl({map:l,color:2369595,roughness:.7,metalness:.3});e.push(c);const u=new Bi(10,40,85),h=new Ut(u,c);h.position.set(-10,20,-22),t.add(h),e.push(u);const d=new Bi(10,40,85),p=new Ut(d,c);p.position.set(10,20,-22),t.add(p),e.push(d);const g=new Bi(36,60,8),x=new vl({map:l,color:856610,roughness:.85}),m=new Ut(g,x);m.position.set(0,30,-62),t.add(m),e.push(g,x);const f=[];[{index:"00",title:"RAVI PATEL",subtitle:"GAME DEV & GRAPHICS ENGINEER",tag:"OVERVIEW",color:"#00f0ff",accent:"#38bdf8",pos:new L(-2.6,2.8,3.5),rotY:.22},{index:"01",title:"ARCHITECTURE",subtitle:"UNITY • UNREAL ENGINE 5 • THREE.JS",tag:"EXPERIENCE",color:"#a855f7",accent:"#c084fc",pos:new L(2.6,2.9,-1.5),rotY:-.22},{index:"02",title:"SMARTSCOPY",subtitle:"REAL-TIME SURGICAL AR ENGINE",tag:"FLAGSHIP",color:"#00f0ff",accent:"#22d3ee",pos:new L(-2.6,3,-6.5),rotY:.22},{index:"03",title:"MIMADIM PLUS",subtitle:"PARAMETRIC CAD GENERATOR",tag:"ENGINEERING",color:"#ffb700",accent:"#fbbf24",pos:new L(2.6,3.1,-11.5),rotY:-.22},{index:"04",title:"NO PAIN HEALS",subtitle:"CLINICAL REHAB SENSOR MATRIX",tag:"MED-TECH",color:"#10b981",accent:"#34d399",pos:new L(-2.6,3.2,-16.5),rotY:.22},{index:"05",title:"MOTION AI",subtitle:"COMPUTER VISION TELEMETRY",tag:"EDGE AI",color:"#ff007f",accent:"#f43f5e",pos:new L(2.6,3.3,-21.5),rotY:-.22},{index:"06",title:"CORE SYSTEMS",subtitle:"GLSL • WEBGPU • C++ ARCHITECTURE",tag:"SKILLS",color:"#38bdf8",accent:"#7dd3fc",pos:new L(-2.6,3.4,-26.5),rotY:.22},{index:"07",title:"TRANSMISSION",subtitle:"INITIATE DIRECT COMMS LINK",tag:"CONNECT",color:"#ff007f",accent:"#00f0ff",pos:new L(0,3.6,-31.5),rotY:0}].forEach((D,$)=>{const se=new Ds;se.position.copy(D.pos),se.rotation.y=D.rotY;const ce=tP(D.index,D.title,D.subtitle,D.tag,D.color,D.accent);e.push(ce);const Ne=new mr(3.2,2),Ue=new Xs({map:ce,transparent:!0,opacity:.94,toneMapped:!1}),Oe=new Ut(Ne,Ue);se.add(Oe),e.push(Ne,Ue);const Z=new Bi(3.22,2.02,.08),ne=new vl({color:263694,roughness:.2,metalness:.85,transparent:!0,opacity:.88}),ae=new Ut(Z,ne);ae.position.z=-.05,se.add(ae),e.push(Z,ne);const Le=new Pb(Z),xe=new Wl({color:new He(D.color),linewidth:2}),ze=new kg(Le,xe);ze.position.z=-.05,se.add(ze),e.push(Le,xe),t.add(se),f.push({group:se,initialY:D.pos.y,bobSpeed:1.2+$*.15,bobOffset:$*.85})});const w=[];[{title:"ネオ東京",sub:"SYS-01",color:"#ff007f",glow:"#9b0050",pos:new L(-4.8,7.5,0),rot:Math.PI/2,flicker:11},{title:"SHINJUKU",sub:"ARCADE",color:"#ffb700",glow:"#b45309",pos:new L(4.8,6.5,-4),rot:-Math.PI/2,flicker:0},{title:"MATRIX",sub:"GRAPHICS",color:"#10b981",glow:"#065f46",pos:new L(-4.8,5.8,-14),rot:Math.PI/2,flicker:0},{title:"CYBER CITY",sub:"WEBGPU",color:"#ff007f",glow:"#be185d",pos:new L(4.8,8.2,-19),rot:-Math.PI/2,flicker:9},{title:"SMSY-GEN",sub:"CREATIVE",color:"#00f0ff",glow:"#0284c7",pos:new L(-4.8,6.2,-25),rot:Math.PI/2,flicker:0},{title:"OVERCLOCK",sub:"REALTIME",color:"#ffb700",glow:"#b45309",pos:new L(4.8,7.5,-30),rot:-Math.PI/2,flicker:14}].forEach(D=>{const $=eP(D.title,D.sub,D.color,D.glow,384,192);e.push($);const se=new mr(3,1.4),ce=new Xs({map:$,transparent:!0,toneMapped:!1}),Ne=new Ut(se,ce);Ne.position.copy(D.pos),Ne.rotation.y=D.rot,t.add(Ne),e.push(se,ce),w.push({mesh:Ne,flickerRate:D.flicker})});const b=new Wl({color:1317420,linewidth:1});e.push(b),[4,-2,-8,-14,-20,-26,-32,-38].forEach(D=>{const se=new Lb([new L(-4.9,9+Math.random()*2,D),new L(0,6.5+Math.random()*1.5,D+.5),new L(4.9,9+Math.random()*2,D)]).getPoints(28),ce=new an().setFromPoints(se),Ne=new N_(ce,b);t.add(Ne),e.push(ce)});const A=1200,_=new an,C=new Float32Array(A*6);for(let D=0;D<A;D++){const $=(Math.random()-.5)*16,se=Math.random()*22,ce=(Math.random()-.5)*65-15,Ne=.5+Math.random()*.45,Ue=.08;C[D*6+0]=$,C[D*6+1]=se,C[D*6+2]=ce,C[D*6+3]=$+Ue,C[D*6+4]=se-Ne,C[D*6+5]=ce}_.setAttribute("position",new $n(C,3));const P=new Wl({color:5032432,transparent:!0,opacity:.35}),U=new kg(_,P);t.add(U),e.push(_,P);const F=200,W=new an,N=new Float32Array(F*3),V=new Float32Array(F*3);for(let D=0;D<F;D++)N[D*3+0]=(Math.random()-.5)*11,N[D*3+1]=.5+Math.random()*14,N[D*3+2]=(Math.random()-.5)*60-15,D%2===0?(V[D*3+0]=1,V[D*3+1]=0,V[D*3+2]=.5):(V[D*3+0]=0,V[D*3+1]=.95,V[D*3+2]=1);W.setAttribute("position",new $n(N,3)),W.setAttribute("color",new $n(V,3));const Q=new L_({size:.18,vertexColors:!0,transparent:!0,opacity:.65,blending:Mc}),Y=new Cb(W,Q);return t.add(Y),e.push(W,Q),{group:t,update:(D,$,se,ce)=>{t.rotation.y=se*.035,t.rotation.x=-ce*.018,f.forEach(ae=>{ae.group.position.y=ae.initialY+Math.sin($*ae.bobSpeed+ae.bobOffset)*.07});const Ne=_.attributes.position,Ue=Ne.array,Oe=26*D;for(let ae=0;ae<A;ae++)if(Ue[ae*6+1]-=Oe,Ue[ae*6+4]-=Oe,Ue[ae*6+1]<0){const Le=20+Math.random()*4,xe=.5+Math.random()*.45;Ue[ae*6+1]=Le,Ue[ae*6+4]=Le-xe}Ne.needsUpdate=!0;const Z=W.attributes.position,ne=Z.array;for(let ae=0;ae<F;ae++)ne[ae*3+1]+=Math.sin($*1.5+ae)*.003,ne[ae*3+0]+=Math.cos($*.8+ae)*.002;Z.needsUpdate=!0,w.forEach(ae=>{if(ae.flickerRate>0){const Le=Math.sin($*ae.flickerRate)*Math.cos($*2.3),xe=ae.mesh.material;xe.opacity=Le>.82?.35:1}})},dispose:()=>{e.forEach(D=>{"dispose"in D&&typeof D.dispose=="function"&&D.dispose()}),t.clear()}}}const rP=[{sectionId:"home",scrollProgress:0,position:new L(.2,2.7,7.8),target:new L(-.6,2.8,3.5)},{sectionId:"about",scrollProgress:.14,position:new L(-.3,2.8,2.8),target:new L(.7,2.9,-1.5)},{sectionId:"smartscopy",scrollProgress:.28,position:new L(.4,2.9,-2.2),target:new L(-.7,3,-6.5)},{sectionId:"mimadim",scrollProgress:.43,position:new L(-.4,3,-7.2),target:new L(.7,3.1,-11.5)},{sectionId:"nopainheals",scrollProgress:.57,position:new L(.4,3.1,-12.2),target:new L(-.7,3.2,-16.5)},{sectionId:"vision-ai",scrollProgress:.71,position:new L(-.4,3.2,-17.2),target:new L(.7,3.3,-21.5)},{sectionId:"skills",scrollProgress:.85,position:new L(.3,3.3,-22.2),target:new L(-.7,3.4,-26.5)},{sectionId:"contact",scrollProgress:1,position:new L(0,3.5,-27.2),target:new L(0,3.6,-31.5)}];class sP{constructor(e,n=rP){Ke(this,"camera");Ke(this,"waypoints");Ke(this,"currentPosition",new L);Ke(this,"currentTarget",new L);Ke(this,"targetPosition",new L);Ke(this,"targetLookAt",new L);Ke(this,"mouseOffset",new Fe(0,0));Ke(this,"currentMouseOffset",new Fe(0,0));this.camera=e,this.waypoints=n,n.length>0&&(this.currentPosition.copy(n[0].position),this.currentTarget.copy(n[0].target),this.targetPosition.copy(n[0].position),this.targetLookAt.copy(n[0].target))}setMouseOffset(e,n){this.mouseOffset.set(e*.45,n*.22)}update(e,n){const i=Math.max(0,Math.min(1,e));let r=0;for(let p=0;p<this.waypoints.length-1;p++)if(i>=this.waypoints[p].scrollProgress&&i<=this.waypoints[p+1].scrollProgress){r=p;break}const s=Math.min(r+1,this.waypoints.length-1),o=this.waypoints[r],a=this.waypoints[s],l=a.scrollProgress-o.scrollProgress,c=l>0?(i-o.scrollProgress)/l:0,u=.5-.5*Math.cos(c*Math.PI);this.targetPosition.lerpVectors(o.position,a.position,u),this.targetLookAt.lerpVectors(o.target,a.target,u);const h=Math.min(1,n*3.5);this.currentMouseOffset.lerp(this.mouseOffset,h);const d=Math.min(1,n*4);this.currentPosition.lerp(this.targetPosition,d),this.currentTarget.lerp(this.targetLookAt,d),this.camera.position.set(this.currentPosition.x+this.currentMouseOffset.x,this.currentPosition.y-this.currentMouseOffset.y,this.currentPosition.z),this.camera.lookAt(this.currentTarget.x,this.currentTarget.y,this.currentTarget.z)}}class oP{constructor(){Ke(this,"container",null);Ke(this,"scene");Ke(this,"camera");Ke(this,"cameraController");Ke(this,"renderer",null);Ke(this,"composer",null);Ke(this,"bloomPass",null);Ke(this,"cinematicPass",null);Ke(this,"environment",null);Ke(this,"activeStationId","home");Ke(this,"cursorU",.5);Ke(this,"cursorV",.5);Ke(this,"mouseNormX",0);Ke(this,"mouseNormY",0);Ke(this,"animationFrameId",null);Ke(this,"isDestroyed",!1);Ke(this,"isIdle",!1);Ke(this,"scrollProgress",0);Ke(this,"lastTime",0);Ke(this,"clock");Ke(this,"onTick");this.scene=new xb,this.scene.fog=new Sp(263693,.035),this.camera=new Ln(45,1,.1,100),this.camera.position.set(.2,2.7,7.8),this.cameraController=new sP(this.camera),this.clock=new jb}init(e,n){this.container=e,this.isDestroyed=!1;try{const i=e.clientWidth||window.innerWidth,r=e.clientHeight||window.innerHeight;this.renderer=new W2({powerPreference:"high-performance",antialias:!0,alpha:!0,stencil:!1,depth:!0}),this.renderer.setSize(i,r);const s=Math.min(window.devicePixelRatio||1,1.75);return this.renderer.setPixelRatio(s),this.renderer.toneMapping=dp,this.renderer.toneMappingExposure=1.2,this.renderer.outputColorSpace=Nn,this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",e.appendChild(this.renderer.domElement),this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.setupLighting(),this.environment=iP(),this.scene.add(this.environment.group),this.setupPostProcessing(i,r),n!=null&&n.onLoaded&&n.onLoaded(),this.startRenderLoop(),!0}catch(i){return console.warn("StudioScene: WebGL initialization failed, fallback enabled.",i),n!=null&&n.onError&&i instanceof Error&&n.onError(i),!1}}setupLighting(){const e=new Vb(461592,.85);this.scene.add(e);const n=new yl(16711807,2.6,25);n.position.set(-4.5,4.5,0),this.scene.add(n);const i=new yl(61695,2.8,25);i.position.set(4.5,5,-4),this.scene.add(i);const r=new yl(16758528,1.6,20);r.position.set(0,1,2),this.scene.add(r);const s=new yl(8141549,2.2,35);s.position.set(0,7,-25),this.scene.add(s)}setupPostProcessing(e,n){if(this.renderer)try{this.composer=new q2(this.renderer);const i=new K2(this.scene,this.camera);this.composer.addPass(i),this.bloomPass=new no(new Fe(e,n),.75,.42,.7),this.composer.addPass(this.bloomPass),this.cinematicPass=new J2(e,n),this.composer.addPass(this.cinematicPass.pass)}catch(i){console.warn("Postprocessing bloom unsupported, using standard renderer.",i),this.composer=null,this.cinematicPass=null}}resize(){if(!this.container||!this.renderer)return;const e=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.composer&&this.composer.setSize(e,n),this.cinematicPass&&this.cinematicPass.updateSize(e,n)}setIdle(e){this.isIdle=e}startRenderLoop(){const e=n=>{if(this.isDestroyed||(this.animationFrameId=requestAnimationFrame(e),this.isIdle&&n-this.lastTime<66))return;this.lastTime=n;const i=this.clock.getDelta(),r=this.clock.getElapsedTime();this.cameraController.update(this.scrollProgress,i),this.environment&&this.environment.update(i,r,this.mouseNormX,this.mouseNormY),this.cinematicPass&&this.cinematicPass.update(i,r),this.onTick&&this.onTick(i,r),this.composer?this.composer.render():this.renderer&&this.renderer.render(this.scene,this.camera)};this.animationFrameId=requestAnimationFrame(e)}setActiveStation(e){this.activeStationId=e}setScrollProgress(e){this.scrollProgress=e}setMouseOffset(e,n){this.mouseNormX=e,this.mouseNormY=n,this.cameraController.setMouseOffset(e,n)}onCursorMove(e,n,i){this.cursorU=e,this.cursorV=n,this.cinematicPass&&this.cinematicPass.addCursorMovement(e,n,i)}onCursorClick(e,n){this.cinematicPass&&this.cinematicPass.spawnRipple(e,n,1)}destroy(){this.isDestroyed=!0,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.renderer&&this.renderer.domElement&&this.renderer.domElement.parentElement&&(this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),this.renderer.dispose(),this.renderer=null),this.composer&&(this.composer.dispose(),this.composer=null),this.environment&&(this.environment.dispose(),this.environment=null),this.scene.traverse(e=>{e instanceof Ut&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material&&e.material.dispose())}),this.scene.clear()}}const aP=({progress:t,isLoaded:e})=>{const i=2*Math.PI*48,r=i-t/100*i;return M.jsxs("div",{className:`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#07080d]/90 backdrop-blur-xl transition-all duration-700 ${e?"opacity-0 pointer-events-none":"opacity-100"}`,children:[M.jsxs("div",{className:"relative flex items-center justify-center w-36 h-36",children:[M.jsx("div",{className:"absolute inset-0 rounded-full bg-cyan-500/10 blur-xl animate-pulse"}),M.jsxs("svg",{className:"w-32 h-32 -rotate-90 transform",children:[M.jsx("circle",{cx:"64",cy:"64",r:48,className:"stroke-slate-800",strokeWidth:"3",fill:"transparent"}),M.jsx("circle",{cx:"64",cy:"64",r:48,className:"stroke-cyan-400 transition-all duration-300 ease-out",strokeWidth:"3.5",strokeDasharray:i,strokeDashoffset:r,strokeLinecap:"round",fill:"transparent"})]}),M.jsxs("div",{className:"absolute flex flex-col items-center justify-center",children:[M.jsxs("span",{className:"font-mono text-xl font-bold tracking-tight text-cyan-400",children:[Math.floor(t),"%"]}),M.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-slate-400 mt-0.5",children:"READY"})]})]}),M.jsxs("div",{className:"mt-6 flex flex-col items-center gap-1.5 text-center",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsxs("span",{className:"relative flex h-2 w-2",children:[M.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),M.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-cyan-500"})]}),M.jsx("span",{className:"font-mono text-xs font-semibold tracking-widest text-slate-300 uppercase",children:"Initializing Spatial Lab"})]}),M.jsx("span",{className:"font-mono text-[10px] tracking-wide text-slate-500",children:"Unreal Engine 5 • Three.js • Spatial WebGL"})]})]})},lP=({isEnabled:t=!0,activeStationId:e="home"})=>{const n=k.useRef(null),i=k.useRef(null),[r,s]=k.useState(0),[o,a]=k.useState(!1),[l,c]=k.useState(!1);return k.useEffect(()=>{i.current&&e&&i.current.setActiveStation(e)},[e]),k.useEffect(()=>{if(!t||!n.current){i.current&&(i.current.destroy(),i.current=null);return}const u=new oP;i.current=u;let h=10;s(h);const d=setInterval(()=>{h+=Math.random()*25,h>=95&&(h=95,clearInterval(d)),s(Math.min(95,h))},80);if(!u.init(n.current,{onLoaded:()=>{clearInterval(d),s(100),u.setActiveStation(e),setTimeout(()=>{a(!0)},350)},onError:S=>{console.warn("StudioCanvas: WebGL fallback activated.",S),clearInterval(d),c(!0),a(!0)}})){clearInterval(d),c(!0),a(!0);return}const g=()=>{const S=document.documentElement.scrollHeight-window.innerHeight,b=S>0?window.scrollY/S:0;u.setScrollProgress(b),v()},x=S=>{const b=S.clientX/window.innerWidth*2-1,T=S.clientY/window.innerHeight*2-1;u.setMouseOffset(b,T);const A=S.clientX/window.innerWidth,_=1-S.clientY/window.innerHeight;u.onCursorMove(A,_,performance.now()*.001),v()},m=S=>{const b=S.clientX/window.innerWidth,T=1-S.clientY/window.innerHeight;u.onCursorClick(b,T),v()};let f=null;const v=()=>{u.setIdle(!1),f&&clearTimeout(f),f=setTimeout(()=>{u.setIdle(!0)},3e3)};v();const w=()=>{u.resize()};return window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("mousemove",x,{passive:!0}),window.addEventListener("click",m,{passive:!0}),window.addEventListener("resize",w),g(),()=>{clearInterval(d),f&&clearTimeout(f),window.removeEventListener("scroll",g),window.removeEventListener("mousemove",x),window.removeEventListener("click",m),window.removeEventListener("resize",w),u.destroy(),i.current=null}},[t]),!t||l?null:M.jsxs(M.Fragment,{children:[M.jsx(aP,{progress:r,isLoaded:o}),M.jsx("div",{ref:n,"aria-hidden":"true",className:"fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-1000",style:{opacity:o?1:0}})]})},cP=({onExploreClick:t,onOpenProjectsDeck:e})=>M.jsx("section",{id:"home",className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 pt-24 pb-20 select-none",children:M.jsxs("div",{className:"max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center",children:[M.jsxs("div",{className:"mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-lg",children:[M.jsxs("span",{className:"relative flex h-2 w-2",children:[M.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),M.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),M.jsx("span",{className:"font-mono text-xs text-slate-300 tracking-wider",children:"SOFTWARE & GAME DEVELOPER"})]}),M.jsxs("div",{className:"mb-6",children:[M.jsx("span",{className:"font-mono text-xs md:text-sm tracking-[0.3em] text-cyan-400 uppercase block mb-3",children:"Game Development • Spatial Computing (XR) • Interactive 3D"}),M.jsxs("h1",{className:"text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1.05]",children:[M.jsx("span",{className:"metallic-text",children:"RAVI "}),M.jsx("span",{className:"gradient-text",children:"PATEL"})]})]}),M.jsxs("p",{className:"max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-8",children:["Crafting high-performance games, spatial computing experiences, and interactive applications across"," ",M.jsx("span",{className:"text-cyan-400 font-semibold font-mono",children:"Unity (C#)"}),","," ",M.jsx("span",{className:"text-indigo-400 font-semibold font-mono",children:"Unreal Engine 5 (C++)"}),", and"," ",M.jsx("span",{className:"text-purple-400 font-semibold font-mono",children:"Three.js / WebGL"}),"."]}),M.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl w-full mb-10",children:[M.jsxs("div",{className:"p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center",children:[M.jsx("span",{className:"font-mono text-2xl md:text-3xl font-extrabold gradient-text block",children:"3+ Years"}),M.jsx("span",{className:"font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block",children:"Professional Experience"})]}),M.jsxs("div",{className:"p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center",children:[M.jsx("span",{className:"font-mono text-2xl md:text-3xl font-extrabold gradient-text block",children:"15+ Projects"}),M.jsx("span",{className:"font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block",children:"Shipped & Delivered"})]}),M.jsxs("div",{className:"col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center",children:[M.jsx("span",{className:"font-mono text-2xl md:text-3xl font-extrabold gradient-text block",children:"Cross-Platform"}),M.jsx("span",{className:"font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block",children:"PC, Mobile & XR Headsets"})]})]}),M.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[M.jsxs(On,{type:"button",onClick:t,className:"h-11 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold gap-2 shadow-lg shadow-cyan-500/25 transition-all text-xs font-mono",children:["[ EXPLORE WORK ]",M.jsx(oE,{className:"w-3.5 h-3.5"})]}),M.jsxs(On,{type:"button",onClick:e,variant:"outline",className:"h-11 px-6 rounded-xl border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 font-semibold gap-2 text-xs font-mono",children:[M.jsx(ya,{className:"w-3.5 h-3.5 text-cyan-400"}),"[ ALL PROJECTS (13) ]"]}),M.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"no-underline hidden sm:inline-block",children:M.jsxs(On,{type:"button",variant:"outline",className:"h-11 px-5 rounded-xl border-white/10 hover:bg-white/[0.05] text-slate-300 font-semibold gap-2 text-xs font-mono",children:[M.jsx(gf,{className:"w-3.5 h-3.5"}),"[ RESUME ]"]})})]})]})}),uP=()=>{const t=[{icon:qx,title:"Game Development & 3D Systems",description:"Custom gameplay mechanics, real-time physics, and procedural 3D environments across Unreal Engine 5 and Unity."},{icon:ME,title:"Spatial Computing (XR & VR/AR)",description:"Immersive medical visualization, interactive training simulations, and stereoscopic headsets (HoloLens 2, XREAL, Meta Quest)."},{icon:Qx,title:"Interactive Kiosks & Hardware",description:"Commercial touchscreen and floor-projection systems built on hardened Linux with robust offline architecture."},{icon:Zx,title:"Computer Vision & Smart Motion",description:"Camera-based gesture recognition, skeletal body tracking, and real-time vision processing for controller-free gameplay."}];return M.jsx("section",{id:"about",className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none",children:M.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[M.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),M.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"STATION 01 // PROFILE & EXPERTISE"})]}),M.jsxs("div",{className:"mb-8",children:[M.jsxs("h2",{className:"text-3xl md:text-5xl font-black tracking-tight text-white mb-3",children:["Core Areas of ",M.jsx("span",{className:"gradient-text",children:"Expertise"})]}),M.jsx("p",{className:"font-mono text-xs md:text-sm text-slate-400 max-w-2xl",children:"Software & Game Developer at Invisible Fiction (May 2023 – Present). Designing and delivering robust 3D, XR, and interactive applications."})]}),M.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",children:t.map((e,n)=>{const i=e.icon;return M.jsxs(Jc,{className:"p-5 md:p-6 rounded-2xl bg-[#0a0d18]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/40 transition-all shadow-lg",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400",children:M.jsx(i,{className:"w-5 h-5"})}),M.jsx("h3",{className:"text-base font-bold text-white mb-1.5",children:e.title}),M.jsx("p",{className:"text-xs text-slate-400 leading-relaxed font-normal",children:e.description})]},n)})}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[M.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0",children:M.jsx(pE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"text-xs font-bold text-white block",children:"B.E. in Computer Engineering (CGPA: 8.30 / 10.0)"}),M.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:"Ipcowala Institute of Eng. & Tech. (2019 – 2023)"})]})]}),M.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",children:M.jsx(aE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"text-xs font-bold text-white block",children:"Anthropic & SAP Industry Certifications"}),M.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:"Claude Architecture • SAP CSR (Code Unnati)"})]})]})]})]})})},wl=({stationId:t,stationCode:e,project:n,onInspectCase:i,onOpenProjectsDeck:r})=>M.jsx("section",{id:t,className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none",children:M.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[M.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),M.jsxs("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:["FEATURED PROJECT ",e," // ",n.category]})]}),M.jsxs("div",{className:"mb-6",children:[M.jsx("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-3",children:n.title.toUpperCase()}),M.jsx("p",{className:"font-mono text-xs sm:text-sm md:text-base text-cyan-300/80 max-w-3xl leading-relaxed",children:n.subtitle})]}),M.jsxs("div",{className:"p-6 md:p-8 rounded-3xl bg-[#090c16]/85 backdrop-blur-2xl border border-white/[0.08] shadow-2xl mb-8 relative overflow-hidden",children:[M.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"}),M.jsx("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed mb-6",children:n.shortDescription}),n.architecturalHighlights&&n.architecturalHighlights.length>0&&M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",children:n.architecturalHighlights.slice(0,2).map((s,o)=>M.jsxs("div",{className:"p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5",children:[M.jsx(lp,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),M.jsx("span",{className:"text-xs text-slate-300 leading-relaxed",children:s})]},o))}),M.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]",children:[n.metrics&&M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),M.jsx("span",{className:"font-mono text-xs font-semibold text-white",children:n.metrics})]}),M.jsx("div",{className:"flex flex-wrap gap-1.5",children:n.tech.slice(0,4).map(s=>M.jsx("span",{className:"px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300",children:s},s))})]})]}),M.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[M.jsxs(On,{type:"button",onClick:()=>i(n),className:"h-11 px-7 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold gap-2 shadow-lg shadow-cyan-500/25 transition-all text-xs font-mono",children:["[ INSPECT CASE ]",M.jsx($x,{className:"w-4 h-4"})]}),r&&M.jsxs(On,{type:"button",onClick:r,variant:"outline",className:"h-11 px-5 rounded-xl border-white/10 hover:bg-white/[0.05] text-slate-300 font-semibold gap-2 text-xs font-mono",children:[M.jsx(ya,{className:"w-3.5 h-3.5 text-cyan-400"}),"[ ALL PROJECTS (13) ]"]})]})]})}),dP=()=>{const t=[{icon:fE,title:"Game Engines & 3D",color:"text-cyan-400 border-cyan-500/30",skills:["Unity (C#)","Unreal Engine 5 (C++)","Three.js","WebGL","Blender"]},{icon:Zx,title:"Spatial Computing (XR)",color:"text-indigo-400 border-indigo-500/30",skills:["HoloLens 2 (MRTK)","XREAL Air / Light","OpenXR","WebXR","Spatial Audio"]},{icon:uE,title:"Core Languages",color:"text-purple-400 border-purple-500/30",skills:["C#","C++","TypeScript","JavaScript","Python","GLSL / HLSL"]},{icon:Kx,title:"Computer Vision & AI",color:"text-emerald-400 border-emerald-500/30",skills:["DirectShow","YOLOv8","ONNX Runtime","MediaPipe","OpenCV"]},{icon:qx,title:"Kiosks & Hardware",color:"text-blue-400 border-blue-500/30",skills:["Linux / Ubuntu","Hardened Kiosks","Floor Projectors","Sensors","WebSockets"]},{icon:Qx,title:"Security & Cryptography",color:"text-amber-400 border-amber-500/30",skills:["X25519 Elliptic Curve","AES-256-GCM","HKDF-SHA256","Zero-Trust Tunnel"]}];return M.jsx("section",{id:"skills",className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none",children:M.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[M.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),M.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"STATION 06 // SKILLS & ARCHITECTURE"})]}),M.jsxs("div",{className:"mb-8",children:[M.jsxs("h2",{className:"text-3xl md:text-5xl font-black tracking-tight text-white mb-3",children:["Technical Stack & ",M.jsx("span",{className:"gradient-text",children:"Architecture"})]}),M.jsx("p",{className:"font-mono text-xs md:text-sm text-slate-400 max-w-2xl",children:"Technologies and frameworks deployed across commercial games, medical XR platforms, and interactive 3D installations."})]}),M.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map((e,n)=>{const i=e.icon;return M.jsxs(Jc,{className:"p-5 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/40 transition-all shadow-lg",children:[M.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[M.jsx("div",{className:`w-8 h-8 rounded-lg bg-white/[0.04] border flex items-center justify-center ${e.color}`,children:M.jsx(i,{className:"w-4 h-4"})}),M.jsx("h3",{className:"text-sm font-bold text-white tracking-wide",children:e.title})]}),M.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.skills.map(r=>M.jsx("span",{className:"px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300",children:r},r))})]},n)})})]})})},lh=k.forwardRef(({className:t,type:e,...n},i)=>M.jsx("input",{type:e,className:gn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:i,...n}));lh.displayName="Input";const $_=k.forwardRef(({className:t,...e},n)=>M.jsx("textarea",{className:gn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...e}));$_.displayName="Textarea";const fP=1,hP=1e6;let gd=0;function pP(){return gd=(gd+1)%Number.MAX_SAFE_INTEGER,gd.toString()}const vd=new Map,_0=t=>{if(vd.has(t))return;const e=setTimeout(()=>{vd.delete(t),Wo({type:"REMOVE_TOAST",toastId:t})},hP);vd.set(t,e)},mP=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,fP)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?_0(n):t.toasts.forEach(i=>{_0(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},Yl=[];let $l={toasts:[]};function Wo(t){$l=mP($l,t),Yl.forEach(e=>{e($l)})}function gP({...t}){const e=pP(),n=r=>Wo({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>Wo({type:"DISMISS_TOAST",toastId:e});return Wo({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function q_(){const[t,e]=k.useState($l);return k.useEffect(()=>(Yl.push(e),()=>{const n=Yl.indexOf(e);n>-1&&Yl.splice(n,1)}),[t]),{...t,toast:gP,dismiss:n=>Wo({type:"DISMISS_TOAST",toastId:n})}}class ba{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const vP=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},Wt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:vP()},Tp=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},xP=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=Tp(t);Wt.publicKey=n.publicKey,Wt.blockHeadless=n.blockHeadless,Wt.storageProvider=n.storageProvider,Wt.blockList=n.blockList,Wt.limitRate=n.limitRate,Wt.origin=n.origin||e},K_=async(t,e,n={})=>{const i=await fetch(Wt.origin+t,{method:"POST",headers:n,body:e}),r=await i.text(),s=new ba(i.status,r);if(i.ok)return s;throw s},Z_=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},_P=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Q_=t=>t.webdriver||!t.languages||t.languages.length===0,J_=()=>new ba(451,"Unavailable For Headless Browser"),yP=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},SP=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},MP=(t,e)=>t instanceof FormData?t.get(e):t[e],ey=(t,e)=>{if(SP(t))return!1;yP(t.list,t.watchVariable);const n=MP(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},ty=()=>new ba(403,"Forbidden"),wP=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},EP=async(t,e,n)=>{const i=Number(await n.get(t)||0);return e-Date.now()+i},ny=async(t,e,n)=>{if(!e.throttle||!n)return!1;wP(e.throttle,e.id);const i=e.id||t;return await EP(i,e.throttle,n)>0?!0:(await n.set(i,Date.now().toString()),!1)},iy=()=>new ba(429,"Too Many Requests"),bP=async(t,e,n,i)=>{const r=Tp(i),s=r.publicKey||Wt.publicKey,o=r.blockHeadless||Wt.blockHeadless,a=r.storageProvider||Wt.storageProvider,l={...Wt.blockList,...r.blockList},c={...Wt.limitRate,...r.limitRate};return o&&Q_(navigator)?Promise.reject(J_()):(Z_(s,t,e),_P(n),n&&ey(l,n)?Promise.reject(ty()):await ny(location.pathname,c,a)?Promise.reject(iy()):K_("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},TP=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},AP=t=>typeof t=="string"?document.querySelector(t):t,CP=async(t,e,n,i)=>{const r=Tp(i),s=r.publicKey||Wt.publicKey,o=r.blockHeadless||Wt.blockHeadless,a=Wt.storageProvider||r.storageProvider,l={...Wt.blockList,...r.blockList},c={...Wt.limitRate,...r.limitRate};if(o&&Q_(navigator))return Promise.reject(J_());const u=AP(n);Z_(s,t,e),TP(u);const h=new FormData(u);return ey(l,h)?Promise.reject(ty()):await ny(location.pathname,c,a)?Promise.reject(iy()):(h.append("lib_version","4.4.1"),h.append("service_id",t),h.append("template_id",e),h.append("user_id",s),K_("/api/v1.0/email/send-form",h))},RP={init:xP,send:bP,sendForm:CP,EmailJSResponseStatus:ba},PP=()=>{const{toast:t}=q_(),[e,n]=k.useState({name:"",email:"",message:""}),[i,r]=k.useState(!1),[s,o]=k.useState(!1),a=async l=>{l.preventDefault(),r(!0);try{await RP.send("service_7vljb2h","template_k3j7nfe",{from_name:e.name,reply_to:e.email,message:e.message},"GekL2x0c-5PjX33sM"),o(!0),t({title:"Transmission Received",description:"Your message was transmitted successfully. I will respond promptly."}),n({name:"",email:"",message:""})}catch(c){console.warn("Direct transmission fallback:",c),t({title:"Transmission Logged",description:"Thank you for reaching out. You can also connect via direct email or LinkedIn."})}finally{r(!1)}};return M.jsxs("section",{id:"contact",className:"min-h-screen w-full flex flex-col justify-between relative px-6 md:px-16 pt-24 pb-12 select-none",children:[M.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10 my-auto",children:[M.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),M.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"STATION 07 // GET IN TOUCH"})]}),M.jsxs("div",{className:"mb-8",children:[M.jsxs("h2",{className:"text-3xl md:text-5xl font-black tracking-tight text-white mb-2",children:["Let's Build Something ",M.jsx("span",{className:"gradient-text",children:"Exceptional"})]}),M.jsx("p",{className:"font-mono text-xs md:text-sm text-slate-400",children:"Open for Senior Software & Game Development, Spatial Computing (XR), and Interactive 3D roles."})]}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[M.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[M.jsxs("div",{className:"p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",children:M.jsx(xE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-widest block",children:"Email Address"}),M.jsx("a",{href:"mailto:patelravi28042001@gmail.com",className:"text-xs md:text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono",children:"patelravi28042001@gmail.com"})]})]}),M.jsxs("div",{className:"p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0",children:M.jsx(SE,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-widest block",children:"Phone / WhatsApp"}),M.jsx("a",{href:"tel:+919712728974",className:"text-xs md:text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono",children:"+91 97127 28974"})]})]}),M.jsxs("div",{className:"p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5",children:[M.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0",children:M.jsx(_E,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-widest block",children:"Location"}),M.jsx("span",{className:"text-xs md:text-sm font-semibold text-white font-mono",children:"Karamsad, Anand, Gujarat, India"})]})]}),M.jsxs("div",{className:"pt-2 flex gap-3",children:[M.jsxs("a",{href:"https://github.com/RaviPatel2804",target:"_blank",rel:"noopener noreferrer",className:"flex-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 transition-all flex items-center justify-center gap-2 text-xs font-mono",children:[M.jsx(hE,{className:"w-4 h-4"}),M.jsx("span",{children:"GitHub"})]}),M.jsxs("a",{href:"https://www.linkedin.com/in/ravi-patel-394939223/",target:"_blank",rel:"noopener noreferrer",className:"flex-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-400/40 text-slate-300 hover:text-indigo-400 transition-all flex items-center justify-center gap-2 text-xs font-mono",children:[M.jsx(gE,{className:"w-4 h-4"}),M.jsx("span",{children:"LinkedIn"})]})]})]}),M.jsx("div",{className:"lg:col-span-7",children:M.jsxs("form",{onSubmit:a,className:"p-6 md:p-8 rounded-3xl bg-[#080b14]/85 backdrop-blur-2xl border border-white/[0.08] shadow-2xl space-y-4",children:[M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1.5 uppercase",children:"Your Name"}),M.jsx(lh,{required:!0,value:e.name,onChange:l=>n({...e,name:l.target.value}),placeholder:"e.g. Alex Mercer",className:"h-10 bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1.5 uppercase",children:"Email Address"}),M.jsx(lh,{type:"email",required:!0,value:e.email,onChange:l=>n({...e,email:l.target.value}),placeholder:"alex@studio.com",className:"h-10 bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400"})]})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1.5 uppercase",children:"Message Details"}),M.jsx($_,{required:!0,rows:4,value:e.message,onChange:l=>n({...e,message:l.target.value}),placeholder:"Tell me about your project, team requirements, or role details...",className:"bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400 resize-none"})]}),M.jsx(On,{type:"submit",disabled:i,className:"w-full h-11 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl text-xs font-mono shadow-lg shadow-cyan-500/20",children:i?M.jsxs(M.Fragment,{children:[M.jsx("span",{children:"Sending..."}),M.jsx(vE,{className:"ml-2 w-3.5 h-3.5 animate-spin"})]}):s?M.jsxs(M.Fragment,{children:[M.jsx("span",{children:"Message Sent Successfully"}),M.jsx(lp,{className:"ml-2 w-3.5 h-3.5 text-emerald-400"})]}):M.jsxs(M.Fragment,{children:[M.jsx("span",{children:"[ SEND MESSAGE ]"}),M.jsx(wE,{className:"ml-2 w-3.5 h-3.5"})]})})]})})]})]}),M.jsx("footer",{className:"pt-8 border-t border-white/[0.06] text-center relative z-10",children:M.jsxs("p",{className:"font-mono text-[11px] text-slate-500",children:["© ",new Date().getFullYear()," Ravi Patel. Software & Game Developer."]})})]})},NP=()=>{const[t,e]=k.useState(()=>{try{const p=localStorage.getItem("ravi_portfolio_3d_enabled");return p!==null?p==="true":!0}catch{return!0}}),[n,i]=k.useState("home"),[r,s]=k.useState(null),[o,a]=k.useState(!1);k.useEffect(()=>{try{localStorage.setItem("ravi_portfolio_3d_enabled",String(t))}catch{}},[t]),k.useEffect(()=>{const p=()=>{const g=xf.map(m=>document.getElementById(m.id)).filter(Boolean),x=window.scrollY+window.innerHeight*.45;for(let m=g.length-1;m>=0;m--)if(g[m].offsetTop<=x){i(xf[m].id);break}};return window.addEventListener("scroll",p,{passive:!0}),p(),()=>window.removeEventListener("scroll",p)},[]);const l=p=>{const g=document.getElementById(p);g&&g.scrollIntoView({behavior:"smooth"})},c=en.find(p=>p.id==="smartscopy")||en[0],u=en.find(p=>p.id==="mimadimplus")||en[1],h=en.find(p=>p.id==="nopainheals")||en[2],d=en.find(p=>p.id==="motion-tracking-ai")||en[3];return M.jsxs("div",{className:"relative min-h-screen bg-[#06070a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-clip",children:[M.jsx(lP,{isEnabled:t,activeStationId:n}),M.jsx(u1,{activeStationId:n,onSelectStation:l}),M.jsx(c1,{is3DEnabled:t,onToggle3D:()=>e(p=>!p),onOpenProjectsDeck:()=>a(!0),onScrollToStation:l}),M.jsx(d1,{}),M.jsxs("main",{className:"relative z-10",children:[M.jsx(cP,{onExploreClick:()=>l("about"),onOpenProjectsDeck:()=>a(!0)}),M.jsx(uP,{}),M.jsx(wl,{stationId:"smartscopy",stationCode:"02",project:c,onInspectCase:p=>s(p),onOpenProjectsDeck:()=>a(!0)}),M.jsx(wl,{stationId:"mimadim",stationCode:"03",project:u,onInspectCase:p=>s(p),onOpenProjectsDeck:()=>a(!0)}),M.jsx(wl,{stationId:"nopainheals",stationCode:"04",project:h,onInspectCase:p=>s(p),onOpenProjectsDeck:()=>a(!0)}),M.jsx(wl,{stationId:"vision-ai",stationCode:"05",project:d,onInspectCase:p=>s(p),onOpenProjectsDeck:()=>a(!0)}),M.jsx(dP,{}),M.jsx(PP,{})]}),M.jsx(f1,{project:r,onClose:()=>s(null),onOpenAllProjects:()=>a(!0)}),M.jsx(_1,{isOpen:o,onClose:()=>a(!1),onSelectProject:p=>{a(!1),s(p)}})]})},LP=()=>{const t=jx();return k.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),M.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-100",children:M.jsxs("div",{className:"text-center",children:[M.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),M.jsx("p",{className:"mb-4 text-xl text-gray-600",children:"Oops! Page not found"}),M.jsx("a",{href:"/",className:"text-blue-500 underline hover:text-blue-700",children:"Return to Home"})]})})};function In(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function ry(t,e=[]){let n=[];function i(s,o){const a=k.createContext(o),l=n.length;n=[...n,o];const c=h=>{var f;const{scope:d,children:p,...g}=h,x=((f=d==null?void 0:d[t])==null?void 0:f[l])||a,m=k.useMemo(()=>g,Object.values(g));return M.jsx(x.Provider,{value:m,children:p})};c.displayName=s+"Provider";function u(h,d){var x;const p=((x=d==null?void 0:d[t])==null?void 0:x[l])||a,g=k.useContext(p);if(g)return g;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return[c,u]}const r=()=>{const s=n.map(o=>k.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return k.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,DP(r,...e)]}function DP(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return k.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}function IP(t){const e=t+"CollectionProvider",[n,i]=ry(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=x=>{const{scope:m,children:f}=x,v=sr.useRef(null),w=sr.useRef(new Map).current;return M.jsx(r,{scope:m,itemMap:w,collectionRef:v,children:f})};o.displayName=e;const a=t+"CollectionSlot",l=Sc(a),c=sr.forwardRef((x,m)=>{const{scope:f,children:v}=x,w=s(a,f),S=qr(m,w.collectionRef);return M.jsx(l,{ref:S,children:v})});c.displayName=a;const u=t+"CollectionItemSlot",h="data-radix-collection-item",d=Sc(u),p=sr.forwardRef((x,m)=>{const{scope:f,children:v,...w}=x,S=sr.useRef(null),b=qr(m,S),T=s(u,f);return sr.useEffect(()=>(T.itemMap.set(S,{ref:S,...w}),()=>void T.itemMap.delete(S))),M.jsx(d,{[h]:"",ref:b,children:v})});p.displayName=u;function g(x){const m=s(t+"CollectionConsumer",x);return sr.useCallback(()=>{const v=m.collectionRef.current;if(!v)return[];const w=Array.from(v.querySelectorAll(`[${h}]`));return Array.from(m.itemMap.values()).sort((T,A)=>w.indexOf(T.ref.current)-w.indexOf(A.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:o,Slot:c,ItemSlot:p},g,i]}var UP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ei=UP.reduce((t,e)=>{const n=Sc(`Primitive.${e}`),i=k.forwardRef((r,s)=>{const{asChild:o,...a}=r,l=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),M.jsx(l,{...a,ref:s})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{});function sy(t,e){t&&$c.flushSync(()=>t.dispatchEvent(e))}function Jr(t){const e=k.useRef(t);return k.useEffect(()=>{e.current=t}),k.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function FP(t,e=globalThis==null?void 0:globalThis.document){const n=Jr(t);k.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var OP="DismissableLayer",ch="dismissableLayer.update",kP="dismissableLayer.pointerDownOutside",BP="dismissableLayer.focusOutside",y0,oy=k.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),ay=k.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=k.useContext(oy),[u,h]=k.useState(null),d=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=k.useState({}),g=qr(e,A=>h(A)),x=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),f=x.indexOf(m),v=u?x.indexOf(u):-1,w=c.layersWithOutsidePointerEventsDisabled.size>0,S=v>=f,b=VP(A=>{const _=A.target,C=[...c.branches].some(P=>P.contains(_));!S||C||(r==null||r(A),o==null||o(A),A.defaultPrevented||a==null||a())},d),T=HP(A=>{const _=A.target;[...c.branches].some(P=>P.contains(_))||(s==null||s(A),o==null||o(A),A.defaultPrevented||a==null||a())},d);return FP(A=>{v===c.layers.size-1&&(i==null||i(A),!A.defaultPrevented&&a&&(A.preventDefault(),a()))},d),k.useEffect(()=>{if(u)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(y0=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),S0(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=y0)}},[u,d,n,c]),k.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),S0())},[u,c]),k.useEffect(()=>{const A=()=>p({});return document.addEventListener(ch,A),()=>document.removeEventListener(ch,A)},[]),M.jsx(Ei.div,{...l,ref:g,style:{pointerEvents:w?S?"auto":"none":void 0,...t.style},onFocusCapture:In(t.onFocusCapture,T.onFocusCapture),onBlurCapture:In(t.onBlurCapture,T.onBlurCapture),onPointerDownCapture:In(t.onPointerDownCapture,b.onPointerDownCapture)})});ay.displayName=OP;var zP="DismissableLayerBranch",ly=k.forwardRef((t,e)=>{const n=k.useContext(oy),i=k.useRef(null),r=qr(e,i);return k.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),M.jsx(Ei.div,{...t,ref:r})});ly.displayName=zP;function VP(t,e=globalThis==null?void 0:globalThis.document){const n=Jr(t),i=k.useRef(!1),r=k.useRef(()=>{});return k.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){cy(kP,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function HP(t,e=globalThis==null?void 0:globalThis.document){const n=Jr(t),i=k.useRef(!1);return k.useEffect(()=>{const r=s=>{s.target&&!i.current&&cy(BP,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function S0(){const t=new CustomEvent(ch);document.dispatchEvent(t)}function cy(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?sy(r,s):r.dispatchEvent(s)}var GP=ay,WP=ly,pa=globalThis!=null&&globalThis.document?k.useLayoutEffect:()=>{},XP="Portal",uy=k.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,s]=k.useState(!1);pa(()=>s(!0),[]);const o=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?vw.createPortal(M.jsx(Ei.div,{...i,ref:e}),o):null});uy.displayName=XP;function jP(t,e){return k.useReducer((n,i)=>e[n][i]??n,t)}var dy=t=>{const{present:e,children:n}=t,i=YP(e),r=typeof n=="function"?n({present:i.isPresent}):k.Children.only(n),s=qr(i.ref,$P(r));return typeof n=="function"||i.isPresent?k.cloneElement(r,{ref:s}):null};dy.displayName="Presence";function YP(t){const[e,n]=k.useState(),i=k.useRef(null),r=k.useRef(t),s=k.useRef("none"),o=t?"mounted":"unmounted",[a,l]=jP(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return k.useEffect(()=>{const c=El(i.current);s.current=a==="mounted"?c:"none"},[a]),pa(()=>{const c=i.current,u=r.current;if(u!==t){const d=s.current,p=El(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&d!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),pa(()=>{if(e){let c;const u=e.ownerDocument.defaultView??window,h=p=>{const x=El(i.current).includes(p.animationName);if(p.target===e&&x&&(l("ANIMATION_END"),!r.current)){const m=e.style.animationFillMode;e.style.animationFillMode="forwards",c=u.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=m)})}},d=p=>{p.target===e&&(s.current=El(i.current))};return e.addEventListener("animationstart",d),e.addEventListener("animationcancel",h),e.addEventListener("animationend",h),()=>{u.clearTimeout(c),e.removeEventListener("animationstart",d),e.removeEventListener("animationcancel",h),e.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:k.useCallback(c=>{i.current=c?getComputedStyle(c):null,n(c)},[])}}function El(t){return(t==null?void 0:t.animationName)||"none"}function $P(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var qP=I0[" useInsertionEffect ".trim().toString()]||pa;function KP({prop:t,defaultProp:e,onChange:n=()=>{},caller:i}){const[r,s,o]=ZP({defaultProp:e,onChange:n}),a=t!==void 0,l=a?t:r;{const u=k.useRef(t!==void 0);k.useEffect(()=>{const h=u.current;h!==a&&console.warn(`${i} is changing from ${h?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=a},[a,i])}const c=k.useCallback(u=>{var h;if(a){const d=QP(u)?u(t):u;d!==t&&((h=o.current)==null||h.call(o,d))}else s(u)},[a,t,s,o]);return[l,c]}function ZP({defaultProp:t,onChange:e}){const[n,i]=k.useState(t),r=k.useRef(n),s=k.useRef(e);return qP(()=>{s.current=e},[e]),k.useEffect(()=>{var o;r.current!==n&&((o=s.current)==null||o.call(s,n),r.current=n)},[n,r]),[n,i,s]}function QP(t){return typeof t=="function"}var JP=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),e3="VisuallyHidden",Ap=k.forwardRef((t,e)=>M.jsx(Ei.span,{...t,ref:e,style:{...JP,...t.style}}));Ap.displayName=e3;var Cp="ToastProvider",[Rp,t3,n3]=IP("Toast"),[fy,b3]=ry("Toast",[n3]),[i3,iu]=fy(Cp),hy=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:s=50,children:o}=t,[a,l]=k.useState(null),[c,u]=k.useState(0),h=k.useRef(!1),d=k.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Cp}\`. Expected non-empty \`string\`.`),M.jsx(Rp.Provider,{scope:e,children:M.jsx(i3,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:k.useCallback(()=>u(p=>p+1),[]),onToastRemove:k.useCallback(()=>u(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:d,children:o})})};hy.displayName=Cp;var py="ToastViewport",r3=["F8"],uh="toast.viewportPause",dh="toast.viewportResume",my=k.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=r3,label:r="Notifications ({hotkey})",...s}=t,o=iu(py,n),a=t3(n),l=k.useRef(null),c=k.useRef(null),u=k.useRef(null),h=k.useRef(null),d=qr(e,h,o.onViewportChange),p=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=o.toastCount>0;k.useEffect(()=>{const m=f=>{var w;i.length!==0&&i.every(S=>f[S]||f.code===S)&&((w=h.current)==null||w.focus())};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[i]),k.useEffect(()=>{const m=l.current,f=h.current;if(g&&m&&f){const v=()=>{if(!o.isClosePausedRef.current){const T=new CustomEvent(uh);f.dispatchEvent(T),o.isClosePausedRef.current=!0}},w=()=>{if(o.isClosePausedRef.current){const T=new CustomEvent(dh);f.dispatchEvent(T),o.isClosePausedRef.current=!1}},S=T=>{!m.contains(T.relatedTarget)&&w()},b=()=>{m.contains(document.activeElement)||w()};return m.addEventListener("focusin",v),m.addEventListener("focusout",S),m.addEventListener("pointermove",v),m.addEventListener("pointerleave",b),window.addEventListener("blur",v),window.addEventListener("focus",w),()=>{m.removeEventListener("focusin",v),m.removeEventListener("focusout",S),m.removeEventListener("pointermove",v),m.removeEventListener("pointerleave",b),window.removeEventListener("blur",v),window.removeEventListener("focus",w)}}},[g,o.isClosePausedRef]);const x=k.useCallback(({tabbingDirection:m})=>{const v=a().map(w=>{const S=w.ref.current,b=[S,...v3(S)];return m==="forwards"?b:b.reverse()});return(m==="forwards"?v.reverse():v).flat()},[a]);return k.useEffect(()=>{const m=h.current;if(m){const f=v=>{var b,T,A;const w=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!w){const _=document.activeElement,C=v.shiftKey;if(v.target===m&&C){(b=c.current)==null||b.focus();return}const F=x({tabbingDirection:C?"backwards":"forwards"}),W=F.findIndex(N=>N===_);xd(F.slice(W+1))?v.preventDefault():C?(T=c.current)==null||T.focus():(A=u.current)==null||A.focus()}};return m.addEventListener("keydown",f),()=>m.removeEventListener("keydown",f)}},[a,x]),M.jsxs(WP,{ref:l,role:"region","aria-label":r.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&M.jsx(fh,{ref:c,onFocusFromOutsideViewport:()=>{const m=x({tabbingDirection:"forwards"});xd(m)}}),M.jsx(Rp.Slot,{scope:n,children:M.jsx(Ei.ol,{tabIndex:-1,...s,ref:d})}),g&&M.jsx(fh,{ref:u,onFocusFromOutsideViewport:()=>{const m=x({tabbingDirection:"backwards"});xd(m)}})]})});my.displayName=py;var gy="ToastFocusProxy",fh=k.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,s=iu(gy,n);return M.jsx(Ap,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&i()}})});fh.displayName=gy;var Ta="Toast",s3="toast.swipeStart",o3="toast.swipeMove",a3="toast.swipeCancel",l3="toast.swipeEnd",vy=k.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:s,...o}=t,[a,l]=KP({prop:i,defaultProp:r??!0,onChange:s,caller:Ta});return M.jsx(dy,{present:n||a,children:M.jsx(d3,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:Jr(t.onPause),onResume:Jr(t.onResume),onSwipeStart:In(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:In(t.onSwipeMove,c=>{const{x:u,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:In(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:In(t.onSwipeEnd,c=>{const{x:u,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),l(!1)})})})});vy.displayName=Ta;var[c3,u3]=fy(Ta,{onClose(){}}),d3=k.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:u,onSwipeMove:h,onSwipeCancel:d,onSwipeEnd:p,...g}=t,x=iu(Ta,n),[m,f]=k.useState(null),v=qr(e,N=>f(N)),w=k.useRef(null),S=k.useRef(null),b=r||x.duration,T=k.useRef(0),A=k.useRef(b),_=k.useRef(0),{onToastAdd:C,onToastRemove:P}=x,U=Jr(()=>{var V;(m==null?void 0:m.contains(document.activeElement))&&((V=x.viewport)==null||V.focus()),o()}),F=k.useCallback(N=>{!N||N===1/0||(window.clearTimeout(_.current),T.current=new Date().getTime(),_.current=window.setTimeout(U,N))},[U]);k.useEffect(()=>{const N=x.viewport;if(N){const V=()=>{F(A.current),c==null||c()},Q=()=>{const Y=new Date().getTime()-T.current;A.current=A.current-Y,window.clearTimeout(_.current),l==null||l()};return N.addEventListener(uh,Q),N.addEventListener(dh,V),()=>{N.removeEventListener(uh,Q),N.removeEventListener(dh,V)}}},[x.viewport,b,l,c,F]),k.useEffect(()=>{s&&!x.isClosePausedRef.current&&F(b)},[s,b,x.isClosePausedRef,F]),k.useEffect(()=>(C(),()=>P()),[C,P]);const W=k.useMemo(()=>m?Ey(m):null,[m]);return x.viewport?M.jsxs(M.Fragment,{children:[W&&M.jsx(f3,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:W}),M.jsx(c3,{scope:n,onClose:U,children:$c.createPortal(M.jsx(Rp.ItemSlot,{scope:n,children:M.jsx(GP,{asChild:!0,onEscapeKeyDown:In(a,()=>{x.isFocusedToastEscapeKeyDownRef.current||U(),x.isFocusedToastEscapeKeyDownRef.current=!1}),children:M.jsx(Ei.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":x.swipeDirection,...g,ref:v,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:In(t.onKeyDown,N=>{N.key==="Escape"&&(a==null||a(N.nativeEvent),N.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,U()))}),onPointerDown:In(t.onPointerDown,N=>{N.button===0&&(w.current={x:N.clientX,y:N.clientY})}),onPointerMove:In(t.onPointerMove,N=>{if(!w.current)return;const V=N.clientX-w.current.x,Q=N.clientY-w.current.y,Y=!!S.current,H=["left","right"].includes(x.swipeDirection),z=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,D=H?z(0,V):0,$=H?0:z(0,Q),se=N.pointerType==="touch"?10:2,ce={x:D,y:$},Ne={originalEvent:N,delta:ce};Y?(S.current=ce,bl(o3,h,Ne,{discrete:!1})):M0(ce,x.swipeDirection,se)?(S.current=ce,bl(s3,u,Ne,{discrete:!1}),N.target.setPointerCapture(N.pointerId)):(Math.abs(V)>se||Math.abs(Q)>se)&&(w.current=null)}),onPointerUp:In(t.onPointerUp,N=>{const V=S.current,Q=N.target;if(Q.hasPointerCapture(N.pointerId)&&Q.releasePointerCapture(N.pointerId),S.current=null,w.current=null,V){const Y=N.currentTarget,H={originalEvent:N,delta:V};M0(V,x.swipeDirection,x.swipeThreshold)?bl(l3,p,H,{discrete:!0}):bl(a3,d,H,{discrete:!0}),Y.addEventListener("click",z=>z.preventDefault(),{once:!0})}})})})}),x.viewport)})]}):null}),f3=t=>{const{__scopeToast:e,children:n,...i}=t,r=iu(Ta,e),[s,o]=k.useState(!1),[a,l]=k.useState(!1);return m3(()=>o(!0)),k.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:M.jsx(uy,{asChild:!0,children:M.jsx(Ap,{...i,children:s&&M.jsxs(M.Fragment,{children:[r.label," ",n]})})})},h3="ToastTitle",xy=k.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return M.jsx(Ei.div,{...i,ref:e})});xy.displayName=h3;var p3="ToastDescription",_y=k.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return M.jsx(Ei.div,{...i,ref:e})});_y.displayName=p3;var yy="ToastAction",Sy=k.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?M.jsx(wy,{altText:n,asChild:!0,children:M.jsx(Pp,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${yy}\`. Expected non-empty \`string\`.`),null)});Sy.displayName=yy;var My="ToastClose",Pp=k.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=u3(My,n);return M.jsx(wy,{asChild:!0,children:M.jsx(Ei.button,{type:"button",...i,ref:e,onClick:In(t.onClick,r.onClose)})})});Pp.displayName=My;var wy=k.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return M.jsx(Ei.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function Ey(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),g3(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",s=i.dataset.radixToastAnnounceExclude==="";if(!r)if(s){const o=i.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...Ey(i))}}),e}function bl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?sy(r,s):r.dispatchEvent(s)}var M0=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),s=i>r;return e==="left"||e==="right"?s&&i>n:!s&&r>n};function m3(t=()=>{}){const e=Jr(t);pa(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function g3(t){return t.nodeType===t.ELEMENT_NODE}function v3(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function xd(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var x3=hy,by=my,Ty=vy,Ay=xy,Cy=_y,Ry=Sy,Py=Pp;const _3=x3,Ny=k.forwardRef(({className:t,...e},n)=>M.jsx(by,{ref:n,className:gn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));Ny.displayName=by.displayName;const y3=n_("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Ly=k.forwardRef(({className:t,variant:e,...n},i)=>M.jsx(Ty,{ref:i,className:gn(y3({variant:e}),t),...n}));Ly.displayName=Ty.displayName;const S3=k.forwardRef(({className:t,...e},n)=>M.jsx(Ry,{ref:n,className:gn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",t),...e}));S3.displayName=Ry.displayName;const Dy=k.forwardRef(({className:t,...e},n)=>M.jsx(Py,{ref:n,className:gn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:M.jsx(Qc,{className:"h-4 w-4"})}));Dy.displayName=Py.displayName;const Iy=k.forwardRef(({className:t,...e},n)=>M.jsx(Ay,{ref:n,className:gn("text-sm font-semibold",t),...e}));Iy.displayName=Ay.displayName;const Uy=k.forwardRef(({className:t,...e},n)=>M.jsx(Cy,{ref:n,className:gn("text-sm opacity-90",t),...e}));Uy.displayName=Cy.displayName;function M3(){const{toasts:t}=q_();return M.jsxs(_3,{children:[t.map(function({id:e,title:n,description:i,action:r,...s}){return M.jsxs(Ly,{...s,children:[M.jsxs("div",{className:"grid gap-1",children:[n&&M.jsx(Iy,{children:n}),i&&M.jsx(Uy,{children:i})]}),r,M.jsx(Dy,{})]},e)}),M.jsx(Ny,{})]})}const w3=()=>M.jsx(nE,{basename:"/MyProtfolio",children:M.jsxs(M.Fragment,{children:[M.jsxs(Jw,{children:[M.jsx(pf,{path:"/",element:M.jsx(NP,{})}),M.jsx(pf,{path:"*",element:M.jsx(LP,{})})]}),M.jsx(M3,{})]})});Ox(document.getElementById("root")).render(M.jsx(w3,{}));
