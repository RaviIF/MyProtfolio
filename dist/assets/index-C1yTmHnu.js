var Oy=Object.defineProperty;var ky=(t,e,n)=>e in t?Oy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var wt=(t,e,n)=>ky(t,typeof e!="symbol"?e+"":e,n);function By(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function y0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S0={exports:{}},Lc={},M0={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),zy=Symbol.for("react.portal"),Vy=Symbol.for("react.fragment"),Hy=Symbol.for("react.strict_mode"),Gy=Symbol.for("react.profiler"),Wy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),jy=Symbol.for("react.forward_ref"),Yy=Symbol.for("react.suspense"),$y=Symbol.for("react.memo"),qy=Symbol.for("react.lazy"),jp=Symbol.iterator;function Ky(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var w0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E0=Object.assign,b0={};function ao(t,e,n){this.props=t,this.context=e,this.refs=b0,this.updater=n||w0}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function T0(){}T0.prototype=ao.prototype;function hh(t,e,n){this.props=t,this.context=e,this.refs=b0,this.updater=n||w0}var ph=hh.prototype=new T0;ph.constructor=hh;E0(ph,ao.prototype);ph.isPureReactComponent=!0;var Yp=Array.isArray,A0=Object.prototype.hasOwnProperty,mh={current:null},C0={key:!0,ref:!0,__self:!0,__source:!0};function R0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)A0.call(e,i)&&!C0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Sa,type:t,key:s,ref:o,props:r,_owner:mh.current}}function Zy(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function Qy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $p=/\/+/g;function ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qy(""+t.key):e.toString(36)}function Al(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sa:case zy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ou(o,0):i,Yp(r)?(n="",t!=null&&(n=t.replace($p,"$&/")+"/"),Al(r,e,n,"",function(c){return c})):r!=null&&(gh(r)&&(r=Zy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace($p,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Yp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ou(s,a);o+=Al(s,e,n,l,r)}else if(l=Ky(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ou(s,a++),o+=Al(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ua(t,e,n){if(t==null)return t;var i=[],r=0;return Al(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Jy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yn={current:null},Cl={transition:null},eS={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:mh};function P0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Ua,forEach:function(t,e,n){Ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ua(t,function(){e++}),e},toArray:function(t){return Ua(t,function(e){return e})||[]},only:function(t){if(!gh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=ao;qe.Fragment=Vy;qe.Profiler=Gy;qe.PureComponent=hh;qe.StrictMode=Hy;qe.Suspense=Yy;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eS;qe.act=P0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=E0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)A0.call(e,l)&&!C0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Sa,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:Xy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wy,_context:t},t.Consumer=t};qe.createElement=R0;qe.createFactory=function(t){var e=R0.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:jy,render:t}};qe.isValidElement=gh;qe.lazy=function(t){return{$$typeof:qy,_payload:{_status:-1,_result:t},_init:Jy}};qe.memo=function(t,e){return{$$typeof:$y,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};qe.unstable_act=P0;qe.useCallback=function(t,e){return yn.current.useCallback(t,e)};qe.useContext=function(t){return yn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return yn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return yn.current.useEffect(t,e)};qe.useId=function(){return yn.current.useId()};qe.useImperativeHandle=function(t,e,n){return yn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return yn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return yn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return yn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return yn.current.useReducer(t,e,n)};qe.useRef=function(t){return yn.current.useRef(t)};qe.useState=function(t){return yn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return yn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return yn.current.useTransition()};qe.version="18.3.1";M0.exports=qe;var k=M0.exports;const dr=y0(k),N0=By({__proto__:null,default:dr},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=k,nS=Symbol.for("react.element"),iS=Symbol.for("react.fragment"),rS=Object.prototype.hasOwnProperty,sS=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oS={key:!0,ref:!0,__self:!0,__source:!0};function L0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)rS.call(e,i)&&!oS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:nS,type:t,key:s,ref:o,props:r,_owner:sS.current}}Lc.Fragment=iS;Lc.jsx=L0;Lc.jsxs=L0;S0.exports=Lc;var w=S0.exports,D0={exports:{}},Wn={},I0={exports:{}},U0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,B){var j=V.length;V.push(B);e:for(;0<j;){var Z=j-1>>>1,ce=V[Z];if(0<r(ce,B))V[Z]=B,V[j]=ce,j=Z;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var B=V[0],j=V.pop();if(j!==B){V[0]=j;e:for(var Z=0,ce=V.length,ve=ce>>>1;Z<ve;){var je=2*(Z+1)-1,ze=V[je],ke=je+1,Q=V[ke];if(0>r(ze,j))ke<ce&&0>r(Q,ze)?(V[Z]=Q,V[ke]=j,Z=ke):(V[Z]=ze,V[je]=j,Z=je);else if(ke<ce&&0>r(Q,j))V[Z]=Q,V[ke]=j,Z=ke;else break e}}return B}function r(V,B){var j=V.sortIndex-B.sortIndex;return j!==0?j:V.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,m=!1,v=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=V)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function x(V){if(y=!1,S(V),!v)if(n(l)!==null)v=!0,K(E);else{var B=n(c);B!==null&&Y(x,B.startTime-V)}}function E(V,B){v=!1,y&&(y=!1,u(_),_=-1),m=!0;var j=d;try{for(S(B),h=n(l);h!==null&&(!(h.expirationTime>B)||V&&!D());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,d=h.priorityLevel;var ce=Z(h.expirationTime<=B);B=t.unstable_now(),typeof ce=="function"?h.callback=ce:h===n(l)&&i(l),S(B)}else i(l);h=n(l)}if(h!==null)var ve=!0;else{var je=n(c);je!==null&&Y(x,je.startTime-B),ve=!1}return ve}finally{h=null,d=j,m=!1}}var b=!1,A=null,_=-1,C=5,P=-1;function D(){return!(t.unstable_now()-P<C)}function L(){if(A!==null){var V=t.unstable_now();P=V;var B=!0;try{B=A(!0,V)}finally{B?G():(b=!1,A=null)}}else b=!1}var G;if(typeof g=="function")G=function(){g(L)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,z=N.port2;N.port1.onmessage=L,G=function(){z.postMessage(null)}}else G=function(){p(L,0)};function K(V){A=V,b||(b=!0,G())}function Y(V,B){_=p(function(){V(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,K(E))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var j=d;d=B;try{return V()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,B){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var j=d;d=V;try{return B()}finally{d=j}},t.unstable_scheduleCallback=function(V,B,j){var Z=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Z+j:Z):j=Z,V){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=j+ce,V={id:f++,callback:B,priorityLevel:V,startTime:j,expirationTime:ce,sortIndex:-1},j>Z?(V.sortIndex=j,e(c,V),n(l)===null&&V===n(c)&&(y?(u(_),_=-1):y=!0,Y(x,j-Z))):(V.sortIndex=ce,e(l,V),v||m||(v=!0,K(E))),V},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(V){var B=d;return function(){var j=d;d=B;try{return V.apply(this,arguments)}finally{d=j}}}})(U0);I0.exports=U0;var aS=I0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=k,Gn=aS;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F0=new Set,Zo={};function os(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for(Zo[t]=e,t=0;t<e.length;t++)F0.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xd=Object.prototype.hasOwnProperty,cS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qp={},Kp={};function uS(t){return xd.call(Kp,t)?!0:xd.call(qp,t)?!1:cS.test(t)?Kp[t]=!0:(qp[t]=!0,!1)}function dS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fS(t,e,n,i){if(e===null||typeof e>"u"||dS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nn[t]=new Sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nn[e]=new Sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nn[t]=new Sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nn[t]=new Sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nn[t]=new Sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nn[t]=new Sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nn[t]=new Sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nn[t]=new Sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nn[t]=new Sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var vh=/[\-:]([a-z])/g;function xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vh,xh);nn[e]=new Sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vh,xh);nn[e]=new Sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vh,xh);nn[e]=new Sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!1,!1)});nn.xlinkHref=new Sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function _h(t,e,n,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fS(e,n,r,i)&&(n=null),i||r===null?uS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Zi=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),yh=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),O0=Symbol.for("react.provider"),k0=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),Mh=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),B0=Symbol.for("react.offscreen"),Zp=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var Pt=Object.assign,au;function Io(t){if(au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);au=e&&e[1]||""}return`
`+au+t}var lu=!1;function cu(t,e){if(!t||lu)return"";lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Io(t):""}function hS(t){switch(t.tag){case 5:return Io(t.type);case 16:return Io("Lazy");case 13:return Io("Suspense");case 19:return Io("SuspenseList");case 0:case 2:case 15:return t=cu(t.type,!1),t;case 11:return t=cu(t.type.render,!1),t;case 1:return t=cu(t.type,!0),t;default:return""}}function Md(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case Cs:return"Portal";case _d:return"Profiler";case yh:return"StrictMode";case yd:return"Suspense";case Sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k0:return(t.displayName||"Context")+".Consumer";case O0:return(t._context.displayName||"Context")+".Provider";case Sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mh:return e=t.displayName||null,e!==null?e:Md(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return Md(t(e))}catch{}}return null}function pS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Md(e);case 8:return e===yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function z0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mS(t){var e=z0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oa(t){t._valueTracker||(t._valueTracker=mS(t))}function V0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=z0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wd(t,e){var n=e.checked;return Pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function H0(t,e){e=e.checked,e!=null&&_h(t,"checked",e,!1)}function Ed(t,e){H0(t,e);var n=Rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bd(t,e.type,n):e.hasOwnProperty("defaultValue")&&bd(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bd(t,e,n){(e!=="number"||$l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Uo=Array.isArray;function Vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Td(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function em(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Uo(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function G0(t,e){var n=Rr(e.value),i=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function tm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function W0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?W0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ka,X0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gS=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(t){gS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zo[e]=zo[t]})});function j0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zo.hasOwnProperty(t)&&zo[t]?(""+e).trim():e+"px"}function Y0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=j0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var vS=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cd(t,e){if(e){if(vS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Rd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pd=null;function wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nd=null,Hs=null,Gs=null;function nm(t){if(t=Ea(t)){if(typeof Nd!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Oc(e),Nd(t.stateNode,t.type,e))}}function $0(t){Hs?Gs?Gs.push(t):Gs=[t]:Hs=t}function q0(){if(Hs){var t=Hs,e=Gs;if(Gs=Hs=null,nm(t),e)for(t=0;t<e.length;t++)nm(e[t])}}function K0(t,e){return t(e)}function Z0(){}var uu=!1;function Q0(t,e,n){if(uu)return t(e,n);uu=!0;try{return K0(t,e,n)}finally{uu=!1,(Hs!==null||Gs!==null)&&(Z0(),q0())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var i=Oc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Ld=!1;if(ji)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Ld=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Ld=!1}function xS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Vo=!1,ql=null,Kl=!1,Dd=null,_S={onError:function(t){Vo=!0,ql=t}};function yS(t,e,n,i,r,s,o,a,l){Vo=!1,ql=null,xS.apply(_S,arguments)}function SS(t,e,n,i,r,s,o,a,l){if(yS.apply(this,arguments),Vo){if(Vo){var c=ql;Vo=!1,ql=null}else throw Error(se(198));Kl||(Kl=!0,Dd=c)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function J0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function im(t){if(as(t)!==t)throw Error(se(188))}function MS(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return im(r),t;if(s===i)return im(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function ev(t){return t=MS(t),t!==null?tv(t):null}function tv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tv(t);if(e!==null)return e;t=t.sibling}return null}var nv=Gn.unstable_scheduleCallback,rm=Gn.unstable_cancelCallback,wS=Gn.unstable_shouldYield,ES=Gn.unstable_requestPaint,It=Gn.unstable_now,bS=Gn.unstable_getCurrentPriorityLevel,Eh=Gn.unstable_ImmediatePriority,iv=Gn.unstable_UserBlockingPriority,Zl=Gn.unstable_NormalPriority,TS=Gn.unstable_LowPriority,rv=Gn.unstable_IdlePriority,Dc=null,bi=null;function AS(t){if(bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(Dc,t,void 0,(t.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:PS,CS=Math.log,RS=Math.LN2;function PS(t){return t>>>=0,t===0?32:31-(CS(t)/RS|0)|0}var Ba=64,za=4194304;function Fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Fo(a):(s&=o,s!==0&&(i=Fo(s)))}else o=n&~r,o!==0?i=Fo(o):s!==0&&(i=Fo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ui(e),r=1<<n,i|=t[n],e&=~r;return i}function NS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ui(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=NS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sv(){var t=Ba;return Ba<<=1,!(Ba&4194240)&&(Ba=64),t}function du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ui(e),t[e]=n}function DS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ui(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ui(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function ov(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var av,Th,lv,cv,uv,Ud=!1,Va=[],Sr=null,Mr=null,wr=null,ea=new Map,ta=new Map,mr=[],IS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sm(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function xo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ea(e),e!==null&&Th(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function US(t,e,n,i,r){switch(e){case"focusin":return Sr=xo(Sr,t,e,n,i,r),!0;case"dragenter":return Mr=xo(Mr,t,e,n,i,r),!0;case"mouseover":return wr=xo(wr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ea.set(s,xo(ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ta.set(s,xo(ta.get(s)||null,t,e,n,i,r)),!0}return!1}function dv(t){var e=Gr(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=J0(n),e!==null){t.blockedOn=e,uv(t.priority,function(){lv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Pd=i,n.target.dispatchEvent(i),Pd=null}else return e=Ea(n),e!==null&&Th(e),t.blockedOn=n,!1;e.shift()}return!0}function om(t,e,n){Rl(t)&&n.delete(e)}function FS(){Ud=!1,Sr!==null&&Rl(Sr)&&(Sr=null),Mr!==null&&Rl(Mr)&&(Mr=null),wr!==null&&Rl(wr)&&(wr=null),ea.forEach(om),ta.forEach(om)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,Ud||(Ud=!0,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,FS)))}function na(t){function e(r){return _o(r,t)}if(0<Va.length){_o(Va[0],t);for(var n=1;n<Va.length;n++){var i=Va[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Sr!==null&&_o(Sr,t),Mr!==null&&_o(Mr,t),wr!==null&&_o(wr,t),ea.forEach(e),ta.forEach(e),n=0;n<mr.length;n++)i=mr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)dv(n),n.blockedOn===null&&mr.shift()}var Ws=Zi.ReactCurrentBatchConfig,Jl=!0;function OS(t,e,n,i){var r=lt,s=Ws.transition;Ws.transition=null;try{lt=1,Ah(t,e,n,i)}finally{lt=r,Ws.transition=s}}function kS(t,e,n,i){var r=lt,s=Ws.transition;Ws.transition=null;try{lt=4,Ah(t,e,n,i)}finally{lt=r,Ws.transition=s}}function Ah(t,e,n,i){if(Jl){var r=Fd(t,e,n,i);if(r===null)Su(t,e,i,ec,n),sm(t,i);else if(US(r,t,e,n,i))i.stopPropagation();else if(sm(t,i),e&4&&-1<IS.indexOf(t)){for(;r!==null;){var s=Ea(r);if(s!==null&&av(s),s=Fd(t,e,n,i),s===null&&Su(t,e,i,ec,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Su(t,e,i,null,n)}}var ec=null;function Fd(t,e,n,i){if(ec=null,t=wh(i),t=Gr(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=J0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ec=t,null}function fv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bS()){case Eh:return 1;case iv:return 4;case Zl:case TS:return 16;case rv:return 536870912;default:return 16}default:return 16}}var xr=null,Ch=null,Pl=null;function hv(){if(Pl)return Pl;var t,e=Ch,n=e.length,i,r="value"in xr?xr.value:xr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ha(){return!0}function am(){return!1}function Xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ha:am,this.isPropagationStopped=am,this}return Pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rh=Xn(lo),wa=Pt({},lo,{view:0,detail:0}),BS=Xn(wa),fu,hu,yo,Ic=Pt({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(fu=t.screenX-yo.screenX,hu=t.screenY-yo.screenY):hu=fu=0,yo=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),lm=Xn(Ic),zS=Pt({},Ic,{dataTransfer:0}),VS=Xn(zS),HS=Pt({},wa,{relatedTarget:0}),pu=Xn(HS),GS=Pt({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),WS=Xn(GS),XS=Pt({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jS=Xn(XS),YS=Pt({},lo,{data:0}),cm=Xn(YS),$S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KS[t])?!!e[t]:!1}function Ph(){return ZS}var QS=Pt({},wa,{key:function(t){if(t.key){var e=$S[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JS=Xn(QS),eM=Pt({},Ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),um=Xn(eM),tM=Pt({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),nM=Xn(tM),iM=Pt({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),rM=Xn(iM),sM=Pt({},Ic,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oM=Xn(sM),aM=[9,13,27,32],Nh=ji&&"CompositionEvent"in window,Ho=null;ji&&"documentMode"in document&&(Ho=document.documentMode);var lM=ji&&"TextEvent"in window&&!Ho,pv=ji&&(!Nh||Ho&&8<Ho&&11>=Ho),dm=" ",fm=!1;function mv(t,e){switch(t){case"keyup":return aM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function cM(t,e){switch(t){case"compositionend":return gv(e);case"keypress":return e.which!==32?null:(fm=!0,dm);case"textInput":return t=e.data,t===dm&&fm?null:t;default:return null}}function uM(t,e){if(Ps)return t==="compositionend"||!Nh&&mv(t,e)?(t=hv(),Pl=Ch=xr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pv&&e.locale!=="ko"?null:e.data;default:return null}}var dM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dM[t.type]:e==="textarea"}function vv(t,e,n,i){$0(i),e=tc(e,"onChange"),0<e.length&&(n=new Rh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Go=null,ia=null;function fM(t){Cv(t,0)}function Uc(t){var e=Ds(t);if(V0(e))return t}function hM(t,e){if(t==="change")return e}var xv=!1;if(ji){var mu;if(ji){var gu="oninput"in document;if(!gu){var pm=document.createElement("div");pm.setAttribute("oninput","return;"),gu=typeof pm.oninput=="function"}mu=gu}else mu=!1;xv=mu&&(!document.documentMode||9<document.documentMode)}function mm(){Go&&(Go.detachEvent("onpropertychange",_v),ia=Go=null)}function _v(t){if(t.propertyName==="value"&&Uc(ia)){var e=[];vv(e,ia,t,wh(t)),Q0(fM,e)}}function pM(t,e,n){t==="focusin"?(mm(),Go=e,ia=n,Go.attachEvent("onpropertychange",_v)):t==="focusout"&&mm()}function mM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(ia)}function gM(t,e){if(t==="click")return Uc(e)}function vM(t,e){if(t==="input"||t==="change")return Uc(e)}function xM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:xM;function ra(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!xd.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vm(t,e){var n=gm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gm(n)}}function yv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sv(){for(var t=window,e=$l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$l(t.document)}return e}function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _M(t){var e=Sv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yv(n.ownerDocument.documentElement,n)){if(i!==null&&Lh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=vm(n,s);var o=vm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yM=ji&&"documentMode"in document&&11>=document.documentMode,Ns=null,Od=null,Wo=null,kd=!1;function xm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kd||Ns==null||Ns!==$l(i)||(i=Ns,"selectionStart"in i&&Lh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&ra(Wo,i)||(Wo=i,i=tc(Od,"onSelect"),0<i.length&&(e=new Rh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ns)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},vu={},Mv={};ji&&(Mv=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Fc(t){if(vu[t])return vu[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mv)return vu[t]=e[n];return t}var wv=Fc("animationend"),Ev=Fc("animationiteration"),bv=Fc("animationstart"),Tv=Fc("transitionend"),Av=new Map,_m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){Av.set(t,e),os(e,[t])}for(var xu=0;xu<_m.length;xu++){var _u=_m[xu],SM=_u.toLowerCase(),MM=_u[0].toUpperCase()+_u.slice(1);Lr(SM,"on"+MM)}Lr(wv,"onAnimationEnd");Lr(Ev,"onAnimationIteration");Lr(bv,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(Tv,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function ym(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,SS(i,e,void 0,t),t.currentTarget=null}function Cv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ym(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ym(r,a,c),s=l}}}if(Kl)throw t=Dd,Kl=!1,Dd=null,t}function St(t,e){var n=e[Gd];n===void 0&&(n=e[Gd]=new Set);var i=t+"__bubble";n.has(i)||(Rv(e,t,2,!1),n.add(i))}function yu(t,e,n){var i=0;e&&(i|=4),Rv(n,t,i,e)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[Wa]){t[Wa]=!0,F0.forEach(function(n){n!=="selectionchange"&&(wM.has(n)||yu(n,!1,t),yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wa]||(e[Wa]=!0,yu("selectionchange",!1,e))}}function Rv(t,e,n,i){switch(fv(e)){case 1:var r=OS;break;case 4:r=kS;break;default:r=Ah}n=r.bind(null,e,n,t),r=void 0,!Ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Su(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Q0(function(){var c=s,f=wh(n),h=[];e:{var d=Av.get(t);if(d!==void 0){var m=Rh,v=t;switch(t){case"keypress":if(Nl(n)===0)break e;case"keydown":case"keyup":m=JS;break;case"focusin":v="focus",m=pu;break;case"focusout":v="blur",m=pu;break;case"beforeblur":case"afterblur":m=pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=VS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=nM;break;case wv:case Ev:case bv:m=WS;break;case Tv:m=rM;break;case"scroll":m=BS;break;case"wheel":m=oM;break;case"copy":case"cut":case"paste":m=jS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=um}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?d!==null?d+"Capture":null:d;y=[];for(var g=c,S;g!==null;){S=g;var x=S.stateNode;if(S.tag===5&&x!==null&&(S=x,u!==null&&(x=Jo(g,u),x!=null&&y.push(oa(g,x,S)))),p)break;g=g.return}0<y.length&&(d=new m(d,v,null,n,f),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Pd&&(v=n.relatedTarget||n.fromElement)&&(Gr(v)||v[Yi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Gr(v):null,v!==null&&(p=as(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(y=lm,x="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=um,x="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?d:Ds(m),S=v==null?d:Ds(v),d=new y(x,g+"leave",m,n,f),d.target=p,d.relatedTarget=S,x=null,Gr(f)===c&&(y=new y(u,g+"enter",v,n,f),y.target=S,y.relatedTarget=p,x=y),p=x,m&&v)t:{for(y=m,u=v,g=0,S=y;S;S=hs(S))g++;for(S=0,x=u;x;x=hs(x))S++;for(;0<g-S;)y=hs(y),g--;for(;0<S-g;)u=hs(u),S--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=hs(y),u=hs(u)}y=null}else y=null;m!==null&&Sm(h,d,m,y,!1),v!==null&&p!==null&&Sm(h,p,v,y,!0)}}e:{if(d=c?Ds(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var E=hM;else if(hm(d))if(xv)E=vM;else{E=mM;var b=pM}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=gM);if(E&&(E=E(t,c))){vv(h,E,n,f);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&bd(d,"number",d.value)}switch(b=c?Ds(c):window,t){case"focusin":(hm(b)||b.contentEditable==="true")&&(Ns=b,Od=c,Wo=null);break;case"focusout":Wo=Od=Ns=null;break;case"mousedown":kd=!0;break;case"contextmenu":case"mouseup":case"dragend":kd=!1,xm(h,n,f);break;case"selectionchange":if(yM)break;case"keydown":case"keyup":xm(h,n,f)}var A;if(Nh)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ps?mv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(pv&&n.locale!=="ko"&&(Ps||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ps&&(A=hv()):(xr=f,Ch="value"in xr?xr.value:xr.textContent,Ps=!0)),b=tc(c,_),0<b.length&&(_=new cm(_,t,null,n,f),h.push({event:_,listeners:b}),A?_.data=A:(A=gv(n),A!==null&&(_.data=A)))),(A=lM?cM(t,n):uM(t,n))&&(c=tc(c,"onBeforeInput"),0<c.length&&(f=new cm("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=A))}Cv(h,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Jo(t,n),s!=null&&i.unshift(oa(t,s,r)),s=Jo(t,e),s!=null&&i.push(oa(t,s,r))),t=t.return}return i}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Jo(n,s),l!=null&&o.unshift(oa(n,l,a))):r||(l=Jo(n,s),l!=null&&o.push(oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var EM=/\r\n?/g,bM=/\u0000|\uFFFD/g;function Mm(t){return(typeof t=="string"?t:""+t).replace(EM,`
`).replace(bM,"")}function Xa(t,e,n){if(e=Mm(e),Mm(t)!==e&&n)throw Error(se(425))}function nc(){}var Bd=null,zd=null;function Vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hd=typeof setTimeout=="function"?setTimeout:void 0,TM=typeof clearTimeout=="function"?clearTimeout:void 0,wm=typeof Promise=="function"?Promise:void 0,AM=typeof queueMicrotask=="function"?queueMicrotask:typeof wm<"u"?function(t){return wm.resolve(null).then(t).catch(CM)}:Hd;function CM(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);na(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Em(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var co=Math.random().toString(36).slice(2),Si="__reactFiber$"+co,aa="__reactProps$"+co,Yi="__reactContainer$"+co,Gd="__reactEvents$"+co,RM="__reactListeners$"+co,PM="__reactHandles$"+co;function Gr(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yi]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Em(t);t!==null;){if(n=t[Si])return n;t=Em(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[Si]||t[Yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Oc(t){return t[aa]||null}var Wd=[],Is=-1;function Dr(t){return{current:t}}function Mt(t){0>Is||(t.current=Wd[Is],Wd[Is]=null,Is--)}function xt(t,e){Is++,Wd[Is]=t.current,t.current=e}var Pr={},pn=Dr(Pr),Tn=Dr(!1),Kr=Pr;function Qs(t,e){var n=t.type.contextTypes;if(!n)return Pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function ic(){Mt(Tn),Mt(pn)}function bm(t,e,n){if(pn.current!==Pr)throw Error(se(168));xt(pn,e),xt(Tn,n)}function Pv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,pS(t)||"Unknown",r));return Pt({},n,i)}function rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,Kr=pn.current,xt(pn,t),xt(Tn,Tn.current),!0}function Tm(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Pv(t,e,Kr),i.__reactInternalMemoizedMergedChildContext=t,Mt(Tn),Mt(pn),xt(pn,t)):Mt(Tn),xt(Tn,n)}var zi=null,kc=!1,wu=!1;function Nv(t){zi===null?zi=[t]:zi.push(t)}function NM(t){kc=!0,Nv(t)}function Ir(){if(!wu&&zi!==null){wu=!0;var t=0,e=lt;try{var n=zi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}zi=null,kc=!1}catch(r){throw zi!==null&&(zi=zi.slice(t+1)),nv(Eh,Ir),r}finally{lt=e,wu=!1}}return null}var Us=[],Fs=0,sc=null,oc=0,qn=[],Kn=0,Zr=null,Vi=1,Hi="";function Vr(t,e){Us[Fs++]=oc,Us[Fs++]=sc,sc=t,oc=e}function Lv(t,e,n){qn[Kn++]=Vi,qn[Kn++]=Hi,qn[Kn++]=Zr,Zr=t;var i=Vi;t=Hi;var r=32-ui(i)-1;i&=~(1<<r),n+=1;var s=32-ui(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Vi=1<<32-ui(e)+r|n<<r|i,Hi=s+t}else Vi=1<<s|n<<r|i,Hi=t}function Dh(t){t.return!==null&&(Vr(t,1),Lv(t,1,0))}function Ih(t){for(;t===sc;)sc=Us[--Fs],Us[Fs]=null,oc=Us[--Fs],Us[Fs]=null;for(;t===Zr;)Zr=qn[--Kn],qn[Kn]=null,Hi=qn[--Kn],qn[Kn]=null,Vi=qn[--Kn],qn[Kn]=null}var Vn=null,zn=null,Et=!1,ai=null;function Dv(t,e){var n=Zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Am(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vn=t,zn=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vn=t,zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:Vi,overflow:Hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vn=t,zn=null,!0):!1;default:return!1}}function Xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jd(t){if(Et){var e=zn;if(e){var n=e;if(!Am(t,e)){if(Xd(t))throw Error(se(418));e=Er(n.nextSibling);var i=Vn;e&&Am(t,e)?Dv(i,n):(t.flags=t.flags&-4097|2,Et=!1,Vn=t)}}else{if(Xd(t))throw Error(se(418));t.flags=t.flags&-4097|2,Et=!1,Vn=t}}}function Cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function ja(t){if(t!==Vn)return!1;if(!Et)return Cm(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vd(t.type,t.memoizedProps)),e&&(e=zn)){if(Xd(t))throw Iv(),Error(se(418));for(;e;)Dv(t,e),e=Er(e.nextSibling)}if(Cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zn=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zn=null}}else zn=Vn?Er(t.stateNode.nextSibling):null;return!0}function Iv(){for(var t=zn;t;)t=Er(t.nextSibling)}function Js(){zn=Vn=null,Et=!1}function Uh(t){ai===null?ai=[t]:ai.push(t)}var LM=Zi.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Ya(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rm(t){var e=t._init;return e(t._payload)}function Uv(t){function e(u,g){if(t){var S=u.deletions;S===null?(u.deletions=[g],u.flags|=16):S.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Cr(u,g),u.index=0,u.sibling=null,u}function s(u,g,S){return u.index=S,t?(S=u.alternate,S!==null?(S=S.index,S<g?(u.flags|=2,g):S):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,S,x){return g===null||g.tag!==6?(g=Pu(S,u.mode,x),g.return=u,g):(g=r(g,S),g.return=u,g)}function l(u,g,S,x){var E=S.type;return E===Rs?f(u,g,S.props.children,x,S.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===fr&&Rm(E)===g.type)?(x=r(g,S.props),x.ref=So(u,g,S),x.return=u,x):(x=kl(S.type,S.key,S.props,null,u.mode,x),x.ref=So(u,g,S),x.return=u,x)}function c(u,g,S,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Nu(S,u.mode,x),g.return=u,g):(g=r(g,S.children||[]),g.return=u,g)}function f(u,g,S,x,E){return g===null||g.tag!==7?(g=qr(S,u.mode,x,E),g.return=u,g):(g=r(g,S),g.return=u,g)}function h(u,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Pu(""+g,u.mode,S),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fa:return S=kl(g.type,g.key,g.props,null,u.mode,S),S.ref=So(u,null,g),S.return=u,S;case Cs:return g=Nu(g,u.mode,S),g.return=u,g;case fr:var x=g._init;return h(u,x(g._payload),S)}if(Uo(g)||go(g))return g=qr(g,u.mode,S,null),g.return=u,g;Ya(u,g)}return null}function d(u,g,S,x){var E=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return E!==null?null:a(u,g,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fa:return S.key===E?l(u,g,S,x):null;case Cs:return S.key===E?c(u,g,S,x):null;case fr:return E=S._init,d(u,g,E(S._payload),x)}if(Uo(S)||go(S))return E!==null?null:f(u,g,S,x,null);Ya(u,S)}return null}function m(u,g,S,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(S)||null,a(g,u,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Fa:return u=u.get(x.key===null?S:x.key)||null,l(g,u,x,E);case Cs:return u=u.get(x.key===null?S:x.key)||null,c(g,u,x,E);case fr:var b=x._init;return m(u,g,S,b(x._payload),E)}if(Uo(x)||go(x))return u=u.get(S)||null,f(g,u,x,E,null);Ya(g,x)}return null}function v(u,g,S,x){for(var E=null,b=null,A=g,_=g=0,C=null;A!==null&&_<S.length;_++){A.index>_?(C=A,A=null):C=A.sibling;var P=d(u,A,S[_],x);if(P===null){A===null&&(A=C);break}t&&A&&P.alternate===null&&e(u,A),g=s(P,g,_),b===null?E=P:b.sibling=P,b=P,A=C}if(_===S.length)return n(u,A),Et&&Vr(u,_),E;if(A===null){for(;_<S.length;_++)A=h(u,S[_],x),A!==null&&(g=s(A,g,_),b===null?E=A:b.sibling=A,b=A);return Et&&Vr(u,_),E}for(A=i(u,A);_<S.length;_++)C=m(A,u,_,S[_],x),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?_:C.key),g=s(C,g,_),b===null?E=C:b.sibling=C,b=C);return t&&A.forEach(function(D){return e(u,D)}),Et&&Vr(u,_),E}function y(u,g,S,x){var E=go(S);if(typeof E!="function")throw Error(se(150));if(S=E.call(S),S==null)throw Error(se(151));for(var b=E=null,A=g,_=g=0,C=null,P=S.next();A!==null&&!P.done;_++,P=S.next()){A.index>_?(C=A,A=null):C=A.sibling;var D=d(u,A,P.value,x);if(D===null){A===null&&(A=C);break}t&&A&&D.alternate===null&&e(u,A),g=s(D,g,_),b===null?E=D:b.sibling=D,b=D,A=C}if(P.done)return n(u,A),Et&&Vr(u,_),E;if(A===null){for(;!P.done;_++,P=S.next())P=h(u,P.value,x),P!==null&&(g=s(P,g,_),b===null?E=P:b.sibling=P,b=P);return Et&&Vr(u,_),E}for(A=i(u,A);!P.done;_++,P=S.next())P=m(A,u,_,P.value,x),P!==null&&(t&&P.alternate!==null&&A.delete(P.key===null?_:P.key),g=s(P,g,_),b===null?E=P:b.sibling=P,b=P);return t&&A.forEach(function(L){return e(u,L)}),Et&&Vr(u,_),E}function p(u,g,S,x){if(typeof S=="object"&&S!==null&&S.type===Rs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Fa:e:{for(var E=S.key,b=g;b!==null;){if(b.key===E){if(E=S.type,E===Rs){if(b.tag===7){n(u,b.sibling),g=r(b,S.props.children),g.return=u,u=g;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===fr&&Rm(E)===b.type){n(u,b.sibling),g=r(b,S.props),g.ref=So(u,b,S),g.return=u,u=g;break e}n(u,b);break}else e(u,b);b=b.sibling}S.type===Rs?(g=qr(S.props.children,u.mode,x,S.key),g.return=u,u=g):(x=kl(S.type,S.key,S.props,null,u.mode,x),x.ref=So(u,g,S),x.return=u,u=x)}return o(u);case Cs:e:{for(b=S.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(u,g.sibling),g=r(g,S.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Nu(S,u.mode,x),g.return=u,u=g}return o(u);case fr:return b=S._init,p(u,g,b(S._payload),x)}if(Uo(S))return v(u,g,S,x);if(go(S))return y(u,g,S,x);Ya(u,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,S),g.return=u,u=g):(n(u,g),g=Pu(S,u.mode,x),g.return=u,u=g),o(u)):n(u,g)}return p}var eo=Uv(!0),Fv=Uv(!1),ac=Dr(null),lc=null,Os=null,Fh=null;function Oh(){Fh=Os=lc=null}function kh(t){var e=ac.current;Mt(ac),t._currentValue=e}function Yd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Xs(t,e){lc=t,Fh=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bn=!0),t.firstContext=null)}function Jn(t){var e=t._currentValue;if(Fh!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(lc===null)throw Error(se(308));Os=t,lc.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var Wr=null;function Bh(t){Wr===null?Wr=[t]:Wr.push(t)}function Ov(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Bh(e)):(n.next=r.next,r.next=n),e.interleaved=n,$i(t,i)}function $i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(t,n)}return r=i.interleaved,r===null?(e.next=e,Bh(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}function Pm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cc(t,e,n,i){var r=t.updateQueue;hr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(d=e,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=Pt({},h,d);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=h}}function Nm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var ba={},Ti=Dr(ba),la=Dr(ba),ca=Dr(ba);function Xr(t){if(t===ba)throw Error(se(174));return t}function Vh(t,e){switch(xt(ca,e),xt(la,t),xt(Ti,ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ad(e,t)}Mt(Ti),xt(Ti,e)}function to(){Mt(Ti),Mt(la),Mt(ca)}function Bv(t){Xr(ca.current);var e=Xr(Ti.current),n=Ad(e,t.type);e!==n&&(xt(la,t),xt(Ti,n))}function Hh(t){la.current===t&&(Mt(Ti),Mt(la))}var At=Dr(0);function uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Eu=[];function Gh(){for(var t=0;t<Eu.length;t++)Eu[t]._workInProgressVersionPrimary=null;Eu.length=0}var Dl=Zi.ReactCurrentDispatcher,bu=Zi.ReactCurrentBatchConfig,Qr=0,Rt=null,Bt=null,jt=null,dc=!1,Xo=!1,ua=0,DM=0;function on(){throw Error(se(321))}function Wh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function Xh(t,e,n,i,r,s){if(Qr=s,Rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?OM:kM,t=n(i,r),Xo){s=0;do{if(Xo=!1,ua=0,25<=s)throw Error(se(301));s+=1,jt=Bt=null,e.updateQueue=null,Dl.current=BM,t=n(i,r)}while(Xo)}if(Dl.current=fc,e=Bt!==null&&Bt.next!==null,Qr=0,jt=Bt=Rt=null,dc=!1,e)throw Error(se(300));return t}function jh(){var t=ua!==0;return ua=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Rt.memoizedState=jt=t:jt=jt.next=t,jt}function ei(){if(Bt===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=jt===null?Rt.memoizedState:jt.next;if(e!==null)jt=e,Bt=t;else{if(t===null)throw Error(se(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},jt===null?Rt.memoizedState=jt=t:jt=jt.next=t}return jt}function da(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=ei(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Qr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Rt.lanes|=f,Jr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Rt.lanes|=s,Jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Au(t){var e=ei(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function zv(){}function Vv(t,e){var n=Rt,i=ei(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,bn=!0),i=i.queue,Yh(Wv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,fa(9,Gv.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(se(349));Qr&30||Hv(n,e,r)}return r}function Hv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gv(t,e,n,i){e.value=n,e.getSnapshot=i,Xv(e)&&jv(t)}function Wv(t,e,n){return n(function(){Xv(e)&&jv(t)})}function Xv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function jv(t){var e=$i(t,1);e!==null&&di(e,t,1,-1)}function Lm(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=FM.bind(null,Rt,t),[e.memoizedState,t]}function fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Yv(){return ei().memoizedState}function Il(t,e,n,i){var r=xi();Rt.flags|=t,r.memoizedState=fa(1|e,n,void 0,i===void 0?null:i)}function Bc(t,e,n,i){var r=ei();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var o=Bt.memoizedState;if(s=o.destroy,i!==null&&Wh(i,o.deps)){r.memoizedState=fa(e,n,s,i);return}}Rt.flags|=t,r.memoizedState=fa(1|e,n,s,i)}function Dm(t,e){return Il(8390656,8,t,e)}function Yh(t,e){return Bc(2048,8,t,e)}function $v(t,e){return Bc(4,2,t,e)}function qv(t,e){return Bc(4,4,t,e)}function Kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zv(t,e,n){return n=n!=null?n.concat([t]):null,Bc(4,4,Kv.bind(null,e,t),n)}function $h(){}function Qv(t,e){var n=ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Jv(t,e){var n=ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ex(t,e,n){return Qr&21?(fi(n,e)||(n=sv(),Rt.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=n)}function IM(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=bu.transition;bu.transition={};try{t(!1),e()}finally{lt=n,bu.transition=i}}function tx(){return ei().memoizedState}function UM(t,e,n){var i=Ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},nx(t))ix(e,n);else if(n=Ov(t,e,n,i),n!==null){var r=xn();di(n,t,i,r),rx(n,e,i)}}function FM(t,e,n){var i=Ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(nx(t))ix(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,Bh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ov(t,e,r,i),n!==null&&(r=xn(),di(n,t,i,r),rx(n,e,i))}}function nx(t){var e=t.alternate;return t===Rt||e!==null&&e===Rt}function ix(t,e){Xo=dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}var fc={readContext:Jn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},OM={readContext:Jn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:Jn,useEffect:Dm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,Kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=UM.bind(null,Rt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:Lm,useDebugValue:$h,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Lm(!1),e=t[0];return t=IM.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Rt,r=xi();if(Et){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Yt===null)throw Error(se(349));Qr&30||Hv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Dm(Wv.bind(null,i,s,t),[t]),i.flags|=2048,fa(9,Gv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=Yt.identifierPrefix;if(Et){var n=Hi,i=Vi;n=(i&~(1<<32-ui(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kM={readContext:Jn,useCallback:Qv,useContext:Jn,useEffect:Yh,useImperativeHandle:Zv,useInsertionEffect:$v,useLayoutEffect:qv,useMemo:Jv,useReducer:Tu,useRef:Yv,useState:function(){return Tu(da)},useDebugValue:$h,useDeferredValue:function(t){var e=ei();return ex(e,Bt.memoizedState,t)},useTransition:function(){var t=Tu(da)[0],e=ei().memoizedState;return[t,e]},useMutableSource:zv,useSyncExternalStore:Vv,useId:tx,unstable_isNewReconciler:!1},BM={readContext:Jn,useCallback:Qv,useContext:Jn,useEffect:Yh,useImperativeHandle:Zv,useInsertionEffect:$v,useLayoutEffect:qv,useMemo:Jv,useReducer:Au,useRef:Yv,useState:function(){return Au(da)},useDebugValue:$h,useDeferredValue:function(t){var e=ei();return Bt===null?e.memoizedState=t:ex(e,Bt.memoizedState,t)},useTransition:function(){var t=Au(da)[0],e=ei().memoizedState;return[t,e]},useMutableSource:zv,useSyncExternalStore:Vv,useId:tx,unstable_isNewReconciler:!1};function si(t,e){if(t&&t.defaultProps){e=Pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $d(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zc={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=xn(),r=Ar(t),s=Wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(di(e,t,r,i),Ll(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=xn(),r=Ar(t),s=Wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(di(e,t,r,i),Ll(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xn(),i=Ar(t),r=Wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=br(t,r,i),e!==null&&(di(e,t,i,n),Ll(e,t,i))}};function Im(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,i)||!ra(r,s):!0}function sx(t,e,n){var i=!1,r=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Jn(s):(r=An(e)?Kr:pn.current,i=e.contextTypes,s=(i=i!=null)?Qs(t,r):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Um(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&zc.enqueueReplaceState(e,e.state,null)}function qd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},zh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Jn(s):(s=An(e)?Kr:pn.current,r.context=Qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($d(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&zc.enqueueReplaceState(r,r.state,null),cc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e){try{var n="",i=e;do n+=hS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zM=typeof WeakMap=="function"?WeakMap:Map;function ox(t,e,n){n=Wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pc||(pc=!0,af=i),Kd(t,e)},n}function ax(t,e,n){n=Wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Kd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kd(t,e),typeof i!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new zM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=e1.bind(null,t,e,n),e.then(t,t))}function Om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function km(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wi(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var VM=Zi.ReactCurrentOwner,bn=!1;function vn(t,e,n,i){e.child=t===null?Fv(e,null,n,i):eo(e,t.child,n,i)}function Bm(t,e,n,i,r){n=n.render;var s=e.ref;return Xs(e,r),i=Xh(t,e,n,i,s,r),n=jh(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(Et&&n&&Dh(e),e.flags|=1,vn(t,e,i,r),e.child)}function zm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lx(t,e,s,i,r)):(t=kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,i)&&t.ref===e.ref)return qi(t,e,r)}return e.flags|=1,t=Cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function lx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ra(s,i)&&t.ref===e.ref)if(bn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(bn=!0);else return e.lanes=t.lanes,qi(t,e,r)}return Zd(t,e,n,i,r)}function cx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Bs,Un),Un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(Bs,Un),Un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(Bs,Un),Un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(Bs,Un),Un|=i;return vn(t,e,r,n),e.child}function ux(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zd(t,e,n,i,r){var s=An(n)?Kr:pn.current;return s=Qs(e,s),Xs(e,r),n=Xh(t,e,n,i,s,r),i=jh(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(Et&&i&&Dh(e),e.flags|=1,vn(t,e,n,r),e.child)}function Vm(t,e,n,i,r){if(An(n)){var s=!0;rc(e)}else s=!1;if(Xs(e,r),e.stateNode===null)Ul(t,e),sx(e,n,i),qd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jn(c):(c=An(n)?Kr:pn.current,c=Qs(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Um(e,o,i,c),hr=!1;var d=e.memoizedState;o.state=d,cc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Tn.current||hr?(typeof f=="function"&&($d(e,n,f,i),l=e.memoizedState),(a=hr||Im(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,kv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:si(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jn(l):(l=An(n)?Kr:pn.current,l=Qs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Um(e,o,i,l),hr=!1,d=e.memoizedState,o.state=d,cc(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||Tn.current||hr?(typeof m=="function"&&($d(e,n,m,i),v=e.memoizedState),(c=hr||Im(e,n,c,i,d,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Qd(t,e,n,i,s,r)}function Qd(t,e,n,i,r,s){ux(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Tm(e,n,!1),qi(t,e,s);i=e.stateNode,VM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=eo(e,t.child,null,s),e.child=eo(e,null,a,s)):vn(t,e,a,s),e.memoizedState=i.state,r&&Tm(e,n,!0),e.child}function dx(t){var e=t.stateNode;e.pendingContext?bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bm(t,e.context,!1),Vh(t,e.containerInfo)}function Hm(t,e,n,i,r){return Js(),Uh(r),e.flags|=256,vn(t,e,n,i),e.child}var Jd={dehydrated:null,treeContext:null,retryLane:0};function ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function fx(t,e,n){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(At,r&1),t===null)return jd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,i,0,null),t=qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ef(n),e.memoizedState=Jd,t):qh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return HM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jd,i}return s=t.child,t=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function qh(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,i){return i!==null&&Uh(i),eo(e,t.child,null,n),t=qh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Cu(Error(se(422))),$a(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gc({mode:"visible",children:i.children},r,0,null),s=qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&eo(e,t.child,null,o),e.child.memoizedState=ef(o),e.memoizedState=Jd,s);if(!(e.mode&1))return $a(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Cu(s,i,void 0),$a(t,e,o,i)}if(a=(o&t.childLanes)!==0,bn||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(t,r),di(i,t,r,-1))}return tp(),i=Cu(Error(se(421))),$a(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=t1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,zn=Er(r.nextSibling),Vn=e,Et=!0,ai=null,t!==null&&(qn[Kn++]=Vi,qn[Kn++]=Hi,qn[Kn++]=Zr,Vi=t.id,Hi=t.overflow,Zr=e),e=qh(e,i.children),e.flags|=4096,e)}function Gm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yd(t.return,e,n)}function Ru(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function hx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(t,e,i.children,n),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gm(t,n,e);else if(t.tag===19)Gm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ru(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ru(e,!0,n,null,s);break;case"together":Ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GM(t,e,n){switch(e.tag){case 3:dx(e),Js();break;case 5:Bv(e);break;case 1:An(e.type)&&rc(e);break;case 4:Vh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(ac,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(At,At.current&1),e.flags|=128,null):n&e.child.childLanes?fx(t,e,n):(xt(At,At.current&1),t=qi(t,e,n),t!==null?t.sibling:null);xt(At,At.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return hx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,cx(t,e,n)}return qi(t,e,n)}var px,tf,mx,gx;px=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tf=function(){};mx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Xr(Ti.current);var s=null;switch(n){case"input":r=wd(t,r),i=wd(t,i),s=[];break;case"select":r=Pt({},r,{value:void 0}),i=Pt({},i,{value:void 0}),s=[];break;case"textarea":r=Td(t,r),i=Td(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nc)}Cd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&St("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};gx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Mo(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function an(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function WM(t,e,n){var i=e.pendingProps;switch(Ih(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return An(e.type)&&ic(),an(e),null;case 3:return i=e.stateNode,to(),Mt(Tn),Mt(pn),Gh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(uf(ai),ai=null))),tf(t,e),an(e),null;case 5:Hh(e);var r=Xr(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)mx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return an(e),null}if(t=Xr(Ti.current),ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[aa]=s,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<Oo.length;r++)St(Oo[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":Qp(i,s),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},St("invalid",i);break;case"textarea":em(i,s),St("invalid",i)}Cd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",""+a]):Zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&St("scroll",i)}switch(n){case"input":Oa(i),Jp(i,s,!0);break;case"textarea":Oa(i),tm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=W0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Si]=e,t[aa]=i,px(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rd(n,i),n){case"dialog":St("cancel",t),St("close",t),r=i;break;case"iframe":case"object":case"embed":St("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oo.length;r++)St(Oo[r],t);r=i;break;case"source":St("error",t),r=i;break;case"img":case"image":case"link":St("error",t),St("load",t),r=i;break;case"details":St("toggle",t),r=i;break;case"input":Qp(t,i),r=wd(t,i),St("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Pt({},i,{value:void 0}),St("invalid",t);break;case"textarea":em(t,i),r=Td(t,i),St("invalid",t);break;default:r=i}Cd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Y0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&X0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qo(t,l):typeof l=="number"&&Qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&St("scroll",t):l!=null&&_h(t,s,l,o))}switch(n){case"input":Oa(t),Jp(t,i,!1);break;case"textarea":Oa(t),tm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(t&&e.stateNode!=null)gx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Xr(ca.current),Xr(Ti.current),ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=Vn,t!==null))switch(t.tag){case 3:Xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return an(e),null;case 13:if(Mt(At),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&zn!==null&&e.mode&1&&!(e.flags&128))Iv(),Js(),e.flags|=98560,s=!1;else if(s=ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Si]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else ai!==null&&(uf(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||At.current&1?zt===0&&(zt=3):tp())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return to(),tf(t,e),t===null&&sa(e.stateNode.containerInfo),an(e),null;case 10:return kh(e.type._context),an(e),null;case 17:return An(e.type)&&ic(),an(e),null;case 19:if(Mt(At),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Mo(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uc(t),o!==null){for(e.flags|=128,Mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(At,At.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>io&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=uc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Et)return an(e),null}else 2*It()-s.renderingStartTime>io&&n!==1073741824&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=At.current,xt(At,i?n&1|2:n&1),e):(an(e),null);case 22:case 23:return ep(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Un&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function XM(t,e){switch(Ih(e),e.tag){case 1:return An(e.type)&&ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return to(),Mt(Tn),Mt(pn),Gh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hh(e),null;case 13:if(Mt(At),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(At),null;case 4:return to(),null;case 10:return kh(e.type._context),null;case 22:case 23:return ep(),null;case 24:return null;default:return null}}var qa=!1,dn=!1,jM=typeof WeakSet=="function"?WeakSet:Set,we=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function nf(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Wm=!1;function YM(t,e){if(Bd=Jl,t=Sv(),Lh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zd={focusedElem:t,selectionRange:n},Jl=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,p=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:si(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(x){Nt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return v=Wm,Wm=!1,v}function jo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nf(e,n,s)}r=r.next}while(r!==i)}}function Vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vx(t){var e=t.alternate;e!==null&&(t.alternate=null,vx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[aa],delete e[Gd],delete e[RM],delete e[PM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xx(t){return t.tag===5||t.tag===3||t.tag===4}function Xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nc));else if(i!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}function of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}var Kt=null,oi=!1;function ir(t,e,n){for(n=n.child;n!==null;)_x(t,e,n),n=n.sibling}function _x(t,e,n){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(Dc,n)}catch{}switch(n.tag){case 5:dn||ks(n,e);case 6:var i=Kt,r=oi;Kt=null,ir(t,e,n),Kt=i,oi=r,Kt!==null&&(oi?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(oi?(t=Kt,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),na(t)):Mu(Kt,n.stateNode));break;case 4:i=Kt,r=oi,Kt=n.stateNode.containerInfo,oi=!0,ir(t,e,n),Kt=i,oi=r;break;case 0:case 11:case 14:case 15:if(!dn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nf(n,e,o),r=r.next}while(r!==i)}ir(t,e,n);break;case 1:if(!dn&&(ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Nt(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(dn=(i=dn)||n.memoizedState!==null,ir(t,e,n),dn=i):ir(t,e,n);break;default:ir(t,e,n)}}function jm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jM),e.forEach(function(i){var r=n1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,oi=!1;break e;case 3:Kt=a.stateNode.containerInfo,oi=!0;break e;case 4:Kt=a.stateNode.containerInfo,oi=!0;break e}a=a.return}if(Kt===null)throw Error(se(160));_x(s,o,r),Kt=null,oi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yx(e,t),e=e.sibling}function yx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(e,t),mi(t),i&4){try{jo(3,t,t.return),Vc(3,t)}catch(y){Nt(t,t.return,y)}try{jo(5,t,t.return)}catch(y){Nt(t,t.return,y)}}break;case 1:ti(e,t),mi(t),i&512&&n!==null&&ks(n,n.return);break;case 5:if(ti(e,t),mi(t),i&512&&n!==null&&ks(n,n.return),t.flags&32){var r=t.stateNode;try{Qo(r,"")}catch(y){Nt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&H0(r,s),Rd(a,o);var c=Rd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?Y0(r,h):f==="dangerouslySetInnerHTML"?X0(r,h):f==="children"?Qo(r,h):_h(r,f,h,c)}switch(a){case"input":Ed(r,s);break;case"textarea":G0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Vs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Vs(r,!!s.multiple,s.defaultValue,!0):Vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[aa]=s}catch(y){Nt(t,t.return,y)}}break;case 6:if(ti(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Nt(t,t.return,y)}}break;case 3:if(ti(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(y){Nt(t,t.return,y)}break;case 4:ti(e,t),mi(t);break;case 13:ti(e,t),mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Qh=It())),i&4&&jm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(dn=(c=dn)||f,ti(e,t),dn=c):ti(e,t),mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(we=t,f=t.child;f!==null;){for(h=we=f;we!==null;){switch(d=we,m=d.child,d.tag){case 0:case 11:case 14:case 15:jo(4,d,d.return);break;case 1:ks(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Nt(i,n,y)}}break;case 5:ks(d,d.return);break;case 22:if(d.memoizedState!==null){$m(h);continue}}m!==null?(m.return=d,we=m):$m(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=j0("display",o))}catch(y){Nt(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Nt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ti(e,t),mi(t),i&4&&jm(t);break;case 21:break;default:ti(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xx(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qo(r,""),i.flags&=-33);var s=Xm(t);of(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Xm(t);sf(t,a,o);break;default:throw Error(se(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $M(t,e,n){we=t,Sx(t)}function Sx(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||qa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||dn;a=qa;var c=dn;if(qa=o,(dn=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?qm(r):l!==null?(l.return=o,we=l):qm(r);for(;s!==null;)we=s,Sx(s),s=s.sibling;we=r,qa=a,dn=c}Ym(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):Ym(t)}}function Ym(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||Vc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!dn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:si(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&na(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}dn||e.flags&512&&rf(e)}catch(d){Nt(e,e.return,d)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function $m(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function qm(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vc(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{rf(e)}catch(l){Nt(e,s,l)}break;case 5:var o=e.return;try{rf(e)}catch(l){Nt(e,o,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var qM=Math.ceil,hc=Zi.ReactCurrentDispatcher,Kh=Zi.ReactCurrentOwner,Qn=Zi.ReactCurrentBatchConfig,et=0,Yt=null,kt=null,tn=0,Un=0,Bs=Dr(0),zt=0,ha=null,Jr=0,Hc=0,Zh=0,Yo=null,En=null,Qh=0,io=1/0,Bi=null,pc=!1,af=null,Tr=null,Ka=!1,_r=null,mc=0,$o=0,lf=null,Fl=-1,Ol=0;function xn(){return et&6?It():Fl!==-1?Fl:Fl=It()}function Ar(t){return t.mode&1?et&2&&tn!==0?tn&-tn:LM.transition!==null?(Ol===0&&(Ol=sv()),Ol):(t=lt,t!==0||(t=window.event,t=t===void 0?16:fv(t.type)),t):1}function di(t,e,n,i){if(50<$o)throw $o=0,lf=null,Error(se(185));Ma(t,n,i),(!(et&2)||t!==Yt)&&(t===Yt&&(!(et&2)&&(Hc|=n),zt===4&&gr(t,tn)),Cn(t,i),n===1&&et===0&&!(e.mode&1)&&(io=It()+500,kc&&Ir()))}function Cn(t,e){var n=t.callbackNode;LS(t,e);var i=Ql(t,t===Yt?tn:0);if(i===0)n!==null&&rm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&rm(n),e===1)t.tag===0?NM(Km.bind(null,t)):Nv(Km.bind(null,t)),AM(function(){!(et&6)&&Ir()}),n=null;else{switch(ov(i)){case 1:n=Eh;break;case 4:n=iv;break;case 16:n=Zl;break;case 536870912:n=rv;break;default:n=Zl}n=Rx(n,Mx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mx(t,e){if(Fl=-1,Ol=0,et&6)throw Error(se(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var i=Ql(t,t===Yt?tn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gc(t,i);else{e=i;var r=et;et|=2;var s=Ex();(Yt!==t||tn!==e)&&(Bi=null,io=It()+500,$r(t,e));do try{QM();break}catch(a){wx(t,a)}while(!0);Oh(),hc.current=s,et=r,kt!==null?e=0:(Yt=null,tn=0,e=zt)}if(e!==0){if(e===2&&(r=Id(t),r!==0&&(i=r,e=cf(t,r))),e===1)throw n=ha,$r(t,0),gr(t,i),Cn(t,It()),n;if(e===6)gr(t,i);else{if(r=t.current.alternate,!(i&30)&&!KM(r)&&(e=gc(t,i),e===2&&(s=Id(t),s!==0&&(i=s,e=cf(t,s))),e===1))throw n=ha,$r(t,0),gr(t,i),Cn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Hr(t,En,Bi);break;case 3:if(gr(t,i),(i&130023424)===i&&(e=Qh+500-It(),10<e)){if(Ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){xn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Hd(Hr.bind(null,t,En,Bi),e);break}Hr(t,En,Bi);break;case 4:if(gr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ui(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*qM(i/1960))-i,10<i){t.timeoutHandle=Hd(Hr.bind(null,t,En,Bi),i);break}Hr(t,En,Bi);break;case 5:Hr(t,En,Bi);break;default:throw Error(se(329))}}}return Cn(t,It()),t.callbackNode===n?Mx.bind(null,t):null}function cf(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=gc(t,e),t!==2&&(e=En,En=n,e!==null&&uf(e)),t}function uf(t){En===null?En=t:En.push.apply(En,t)}function KM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~Zh,e&=~Hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ui(e),i=1<<n;t[n]=-1,e&=~i}}function Km(t){if(et&6)throw Error(se(327));js();var e=Ql(t,0);if(!(e&1))return Cn(t,It()),null;var n=gc(t,e);if(t.tag!==0&&n===2){var i=Id(t);i!==0&&(e=i,n=cf(t,i))}if(n===1)throw n=ha,$r(t,0),gr(t,e),Cn(t,It()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,En,Bi),Cn(t,It()),null}function Jh(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(io=It()+500,kc&&Ir())}}function es(t){_r!==null&&_r.tag===0&&!(et&6)&&js();var e=et;et|=1;var n=Qn.transition,i=lt;try{if(Qn.transition=null,lt=1,t)return t()}finally{lt=i,Qn.transition=n,et=e,!(et&6)&&Ir()}}function ep(){Un=Bs.current,Mt(Bs)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TM(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(Ih(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ic();break;case 3:to(),Mt(Tn),Mt(pn),Gh();break;case 5:Hh(i);break;case 4:to();break;case 13:Mt(At);break;case 19:Mt(At);break;case 10:kh(i.type._context);break;case 22:case 23:ep()}n=n.return}if(Yt=t,kt=t=Cr(t.current,null),tn=Un=e,zt=0,ha=null,Zh=Hc=Jr=0,En=Yo=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Wr=null}return t}function wx(t,e){do{var n=kt;try{if(Oh(),Dl.current=fc,dc){for(var i=Rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dc=!1}if(Qr=0,jt=Bt=Rt=null,Xo=!1,ua=0,Kh.current=null,n===null||n.return===null){zt=1,ha=e,kt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Om(o);if(m!==null){m.flags&=-257,km(m,o,a,s,e),m.mode&1&&Fm(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Fm(s,c,e),tp();break e}l=Error(se(426))}}else if(Et&&a.mode&1){var p=Om(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),km(p,o,a,s,e),Uh(no(l,a));break e}}s=l=no(l,a),zt!==4&&(zt=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=ox(s,l,e);Pm(s,u);break e;case 1:a=l;var g=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Tr===null||!Tr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=ax(s,a,e);Pm(s,x);break e}}s=s.return}while(s!==null)}Tx(n)}catch(E){e=E,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function Ex(){var t=hc.current;return hc.current=fc,t===null?fc:t}function tp(){(zt===0||zt===3||zt===2)&&(zt=4),Yt===null||!(Jr&268435455)&&!(Hc&268435455)||gr(Yt,tn)}function gc(t,e){var n=et;et|=2;var i=Ex();(Yt!==t||tn!==e)&&(Bi=null,$r(t,e));do try{ZM();break}catch(r){wx(t,r)}while(!0);if(Oh(),et=n,hc.current=i,kt!==null)throw Error(se(261));return Yt=null,tn=0,zt}function ZM(){for(;kt!==null;)bx(kt)}function QM(){for(;kt!==null&&!wS();)bx(kt)}function bx(t){var e=Cx(t.alternate,t,Un);t.memoizedProps=t.pendingProps,e===null?Tx(t):kt=e,Kh.current=null}function Tx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XM(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,kt=null;return}}else if(n=WM(n,e,Un),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);zt===0&&(zt=5)}function Hr(t,e,n){var i=lt,r=Qn.transition;try{Qn.transition=null,lt=1,JM(t,e,n,i)}finally{Qn.transition=r,lt=i}return null}function JM(t,e,n,i){do js();while(_r!==null);if(et&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DS(t,s),t===Yt&&(kt=Yt=null,tn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ka||(Ka=!0,Rx(Zl,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=lt;lt=1;var a=et;et|=4,Kh.current=null,YM(t,n),yx(n,t),_M(zd),Jl=!!Bd,zd=Bd=null,t.current=n,$M(n),ES(),et=a,lt=o,Qn.transition=s}else t.current=n;if(Ka&&(Ka=!1,_r=t,mc=r),s=t.pendingLanes,s===0&&(Tr=null),AS(n.stateNode),Cn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pc)throw pc=!1,t=af,af=null,t;return mc&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===lf?$o++:($o=0,lf=t):$o=0,Ir(),null}function js(){if(_r!==null){var t=ov(mc),e=Qn.transition,n=lt;try{if(Qn.transition=null,lt=16>t?16:t,_r===null)var i=!1;else{if(t=_r,_r=null,mc=0,et&6)throw Error(se(331));var r=et;for(et|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var f=we;switch(f.tag){case 0:case 11:case 15:jo(8,f,s)}var h=f.child;if(h!==null)h.return=f,we=h;else for(;we!==null;){f=we;var d=f.sibling,m=f.return;if(vx(f),f===c){we=null;break}if(d!==null){d.return=m,we=d;break}we=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:jo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,we=u;break e}we=s.return}}var g=t.current;for(we=g;we!==null;){o=we;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,we=S;else e:for(o=g;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vc(9,a)}}catch(E){Nt(a,a.return,E)}if(a===o){we=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,we=x;break e}we=a.return}}if(et=r,Ir(),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(Dc,t)}catch{}i=!0}return i}finally{lt=n,Qn.transition=e}}return!1}function Zm(t,e,n){e=no(n,e),e=ox(t,e,1),t=br(t,e,1),e=xn(),t!==null&&(Ma(t,1,e),Cn(t,e))}function Nt(t,e,n){if(t.tag===3)Zm(t,t,n);else for(;e!==null;){if(e.tag===3){Zm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Tr===null||!Tr.has(i))){t=no(n,t),t=ax(e,t,1),e=br(e,t,1),t=xn(),e!==null&&(Ma(e,1,t),Cn(e,t));break}}e=e.return}}function e1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=xn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(tn&n)===n&&(zt===4||zt===3&&(tn&130023424)===tn&&500>It()-Qh?$r(t,0):Zh|=n),Cn(t,e)}function Ax(t,e){e===0&&(t.mode&1?(e=za,za<<=1,!(za&130023424)&&(za=4194304)):e=1);var n=xn();t=$i(t,e),t!==null&&(Ma(t,e,n),Cn(t,n))}function t1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ax(t,n)}function n1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Ax(t,n)}var Cx;Cx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)bn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bn=!1,GM(t,e,n);bn=!!(t.flags&131072)}else bn=!1,Et&&e.flags&1048576&&Lv(e,oc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(t,e),t=e.pendingProps;var r=Qs(e,pn.current);Xs(e,n),r=Xh(null,e,i,t,r,n);var s=jh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zh(e),r.updater=zc,e.stateNode=r,r._reactInternals=e,qd(e,i,t,n),e=Qd(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&Dh(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=r1(i),t=si(i,t),r){case 0:e=Zd(null,e,i,t,n);break e;case 1:e=Vm(null,e,i,t,n);break e;case 11:e=Bm(null,e,i,t,n);break e;case 14:e=zm(null,e,i,si(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Zd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Vm(t,e,i,r,n);case 3:e:{if(dx(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kv(t,e),cc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=no(Error(se(423)),e),e=Hm(t,e,i,n,r);break e}else if(i!==r){r=no(Error(se(424)),e),e=Hm(t,e,i,n,r);break e}else for(zn=Er(e.stateNode.containerInfo.firstChild),Vn=e,Et=!0,ai=null,n=Fv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),i===r){e=qi(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return Bv(e),t===null&&jd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Vd(i,r)?o=null:s!==null&&Vd(i,s)&&(e.flags|=32),ux(t,e),vn(t,e,o,n),e.child;case 6:return t===null&&jd(e),null;case 13:return fx(t,e,n);case 4:return Vh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=eo(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Bm(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(ac,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!Tn.current){e=qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Xs(e,n),r=Jn(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),zm(t,e,i,r,n);case 15:return lx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Ul(t,e),e.tag=1,An(i)?(t=!0,rc(e)):t=!1,Xs(e,n),sx(e,i,r),qd(e,i,r,n),Qd(null,e,i,!0,t,n);case 19:return hx(t,e,n);case 22:return cx(t,e,n)}throw Error(se(156,e.tag))};function Rx(t,e){return nv(t,e)}function i1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,e,n,i){return new i1(t,e,n,i)}function np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function r1(t){if(typeof t=="function")return np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sh)return 11;if(t===Mh)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function kl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")np(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rs:return qr(n.children,r,s,e);case yh:o=8,r|=8;break;case _d:return t=Zn(12,n,e,r|2),t.elementType=_d,t.lanes=s,t;case yd:return t=Zn(13,n,e,r),t.elementType=yd,t.lanes=s,t;case Sd:return t=Zn(19,n,e,r),t.elementType=Sd,t.lanes=s,t;case B0:return Gc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O0:o=10;break e;case k0:o=9;break e;case Sh:o=11;break e;case Mh:o=14;break e;case fr:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Zn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qr(t,e,n,i){return t=Zn(7,t,i,e),t.lanes=n,t}function Gc(t,e,n,i){return t=Zn(22,t,i,e),t.elementType=B0,t.lanes=n,t.stateNode={isHidden:!1},t}function Pu(t,e,n){return t=Zn(6,t,null,e),t.lanes=n,t}function Nu(t,e,n){return e=Zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function s1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=du(0),this.expirationTimes=du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ip(t,e,n,i,r,s,o,a,l){return t=new s1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(s),t}function o1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Px(t){if(!t)return Pr;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(An(n))return Pv(t,n,e)}return e}function Nx(t,e,n,i,r,s,o,a,l){return t=ip(n,i,!0,t,r,s,o,a,l),t.context=Px(null),n=t.current,i=xn(),r=Ar(n),s=Wi(i,r),s.callback=e??null,br(n,s,r),t.current.lanes=r,Ma(t,r,i),Cn(t,i),t}function Wc(t,e,n,i){var r=e.current,s=xn(),o=Ar(r);return n=Px(n),e.context===null?e.context=n:e.pendingContext=n,e=Wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=br(r,e,o),t!==null&&(di(t,r,o,s),Ll(t,r,o)),o}function vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rp(t,e){Qm(t,e),(t=t.alternate)&&Qm(t,e)}function a1(){return null}var Lx=typeof reportError=="function"?reportError:function(t){console.error(t)};function sp(t){this._internalRoot=t}Xc.prototype.render=sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Wc(t,e,null,null)};Xc.prototype.unmount=sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){Wc(null,t,null,null)}),e[Yi]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=cv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&dv(t)}};function op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jm(){}function l1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=vc(o);s.call(c)}}var o=Nx(e,i,t,0,null,!1,!1,"",Jm);return t._reactRootContainer=o,t[Yi]=o.current,sa(t.nodeType===8?t.parentNode:t),es(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=vc(l);a.call(c)}}var l=ip(t,0,!1,null,null,!1,!1,"",Jm);return t._reactRootContainer=l,t[Yi]=l.current,sa(t.nodeType===8?t.parentNode:t),es(function(){Wc(e,l,n,i)}),l}function Yc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=vc(o);a.call(l)}}Wc(e,o,t,r)}else o=l1(n,e,t,r,i);return vc(o)}av=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fo(e.pendingLanes);n!==0&&(bh(e,n|1),Cn(e,It()),!(et&6)&&(io=It()+500,Ir()))}break;case 13:es(function(){var i=$i(t,1);if(i!==null){var r=xn();di(i,t,1,r)}}),rp(t,1)}};Th=function(t){if(t.tag===13){var e=$i(t,134217728);if(e!==null){var n=xn();di(e,t,134217728,n)}rp(t,134217728)}};lv=function(t){if(t.tag===13){var e=Ar(t),n=$i(t,e);if(n!==null){var i=xn();di(n,t,e,i)}rp(t,e)}};cv=function(){return lt};uv=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Nd=function(t,e,n){switch(e){case"input":if(Ed(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Oc(i);if(!r)throw Error(se(90));V0(i),Ed(i,r)}}}break;case"textarea":G0(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};K0=Jh;Z0=es;var c1={usingClientEntryPoint:!1,Events:[Ea,Ds,Oc,$0,q0,Jh]},wo={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u1={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ev(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||a1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Dc=Za.inject(u1),bi=Za}catch{}}Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c1;Wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!op(e))throw Error(se(200));return o1(t,e,null,n)};Wn.createRoot=function(t,e){if(!op(t))throw Error(se(299));var n=!1,i="",r=Lx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ip(t,1,!1,null,null,n,!1,i,r),t[Yi]=e.current,sa(t.nodeType===8?t.parentNode:t),new sp(e)};Wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=ev(e),t=t===null?null:t.stateNode,t};Wn.flushSync=function(t){return es(t)};Wn.hydrate=function(t,e,n){if(!jc(e))throw Error(se(200));return Yc(null,t,e,!0,n)};Wn.hydrateRoot=function(t,e,n){if(!op(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Lx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Nx(e,null,t,1,n??null,r,!1,s,o),t[Yi]=e.current,sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xc(e)};Wn.render=function(t,e,n){if(!jc(e))throw Error(se(200));return Yc(null,t,e,!1,n)};Wn.unmountComponentAtNode=function(t){if(!jc(t))throw Error(se(40));return t._reactRootContainer?(es(function(){Yc(null,null,t,!1,function(){t._reactRootContainer=null,t[Yi]=null})}),!0):!1};Wn.unstable_batchedUpdates=Jh;Wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!jc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Yc(t,e,n,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426";function Dx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dx)}catch(t){console.error(t)}}Dx(),D0.exports=Wn;var $c=D0.exports;const d1=y0($c);var Ix,eg=$c;Ix=eg.createRoot,eg.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xc(){return xc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xc.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const tg="popstate";function f1(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return df("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Fx(r)}return p1(e,n,null,t)}function Nn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ux(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function h1(){return Math.random().toString(36).substr(2,8)}function ng(t,e){return{usr:t.state,key:t.key,idx:e}}function df(t,e,n,i){return n===void 0&&(n=null),xc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?qc(e):e,{state:n,key:e&&e.key||i||h1()})}function Fx(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function qc(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function p1(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=yr.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(xc({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function h(){a=yr.Pop;let p=f(),u=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:u})}function d(p,u){a=yr.Push;let g=df(y.location,p,u);c=f()+1;let S=ng(g,c),x=y.createHref(g);try{o.pushState(S,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;r.location.assign(x)}s&&l&&l({action:a,location:y.location,delta:1})}function m(p,u){a=yr.Replace;let g=df(y.location,p,u);c=f();let S=ng(g,c),x=y.createHref(g);o.replaceState(S,"",x),s&&l&&l({action:a,location:y.location,delta:0})}function v(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:Fx(p);return g=g.replace(/ $/,"%20"),Nn(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let y={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(tg,h),l=p,()=>{r.removeEventListener(tg,h),l=null}},createHref(p){return e(r,p)},createURL:v,encodeLocation(p){let u=v(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:d,replace:m,go(p){return o.go(p)}};return y}var ig;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ig||(ig={}));function m1(t,e,n){return n===void 0&&(n="/"),g1(t,e,n,!1)}function g1(t,e,n,i){let r=typeof e=="string"?qc(e):e,s=Bx(r.pathname||"/",n);if(s==null)return null;let o=Ox(t);v1(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=C1(s);a=T1(o[l],c,i)}return a}function Ox(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Nn(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Ys([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Nn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ox(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:E1(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of kx(s.path))r(s,o,l)}),e}function kx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=kx(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function v1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:b1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const x1=/^:[\w-]+$/,_1=3,y1=2,S1=1,M1=10,w1=-2,rg=t=>t==="*";function E1(t,e){let n=t.split("/"),i=n.length;return n.some(rg)&&(i+=w1),e&&(i+=y1),n.filter(r=>!rg(r)).reduce((r,s)=>r+(x1.test(s)?_1:s===""?S1:M1),i)}function b1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function T1(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",h=sg({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),d=l.route;if(!h&&c&&n&&!i[i.length-1].route.index&&(h=sg({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:Ys([s,h.pathname]),pathnameBase:R1(Ys([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=Ys([s,h.pathnameBase]))}return o}function sg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=A1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,f,h)=>{let{paramName:d,isOptional:m}=f;if(d==="*"){let y=a[h]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[h];return m&&!v?c[d]=void 0:c[d]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function A1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ux(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function C1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ux(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Bx(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const Ys=t=>t.join("/").replace(/\/\/+/g,"/"),R1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function P1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const zx=["post","put","patch","delete"];new Set(zx);const N1=["get",...zx];new Set(N1);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _c(){return _c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_c.apply(this,arguments)}const L1=k.createContext(null),D1=k.createContext(null),Vx=k.createContext(null),Kc=k.createContext(null),Zc=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Hx=k.createContext(null);function ap(){return k.useContext(Kc)!=null}function Gx(){return ap()||Nn(!1),k.useContext(Kc).location}function I1(t,e){return U1(t,e)}function U1(t,e,n,i){ap()||Nn(!1);let{navigator:r}=k.useContext(Vx),{matches:s}=k.useContext(Zc),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Gx(),f;if(e){var h;let p=typeof e=="string"?qc(e):e;l==="/"||(h=p.pathname)!=null&&h.startsWith(l)||Nn(!1),f=p}else f=c;let d=f.pathname||"/",m=d;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+d.replace(/^\//,"").split("/").slice(p.length).join("/")}let v=m1(t,{pathname:m}),y=z1(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Ys([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Ys([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&y?k.createElement(Kc.Provider,{value:{location:_c({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:yr.Pop}},y):y}function F1(){let t=W1(),e=P1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:r},n):null,null)}const O1=k.createElement(F1,null);class k1 extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(Zc.Provider,{value:this.props.routeContext},k.createElement(Hx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function B1(t){let{routeContext:e,match:n,children:i}=t,r=k.useContext(L1);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Zc.Provider,{value:e},i)}function z1(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);f>=0||Nn(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:d,errors:m}=n,v=h.route.loader&&d[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,h,d)=>{let m,v=!1,y=null,p=null;n&&(m=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||O1,l&&(c<0&&d===0?(v=!0,p=null):c===d&&(v=!0,p=h.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,d+1)),g=()=>{let S;return m?S=y:v?S=p:h.route.Component?S=k.createElement(h.route.Component,null):h.route.element?S=h.route.element:S=f,k.createElement(B1,{match:h,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:S})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?k.createElement(k1,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var ff=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ff||{});function V1(t){let e=k.useContext(D1);return e||Nn(!1),e}function H1(t){let e=k.useContext(Zc);return e||Nn(!1),e}function G1(t){let e=H1(),n=e.matches[e.matches.length-1];return n.route.id||Nn(!1),n.route.id}function W1(){var t;let e=k.useContext(Hx),n=V1(ff.UseRouteError),i=G1(ff.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function X1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function hf(t){Nn(!1)}function j1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=yr.Pop,navigator:s,static:o=!1,future:a}=t;ap()&&Nn(!1);let l=e.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:l,navigator:s,static:o,future:_c({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=qc(i));let{pathname:f="/",search:h="",hash:d="",state:m=null,key:v="default"}=i,y=k.useMemo(()=>{let p=Bx(f,l);return p==null?null:{location:{pathname:p,search:h,hash:d,state:m,key:v},navigationType:r}},[l,f,h,d,m,v,r]);return y==null?null:k.createElement(Vx.Provider,{value:c},k.createElement(Kc.Provider,{children:n,value:y}))}function Y1(t){let{children:e,location:n}=t;return I1(pf(e),n)}new Promise(()=>{});function pf(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(i,r)=>{if(!k.isValidElement(i))return;let s=[...e,r];if(i.type===k.Fragment){n.push.apply(n,pf(i.props.children,s));return}i.type!==hf&&Nn(!1),!i.props.index||!i.props.children||Nn(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=pf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const $1="6";try{window.__reactRouterVersion=$1}catch{}const q1="startTransition",og=N0[q1];function K1(t){let{basename:e,children:n,future:i,window:r}=t,s=k.useRef();s.current==null&&(s.current=f1({window:r,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=k.useCallback(h=>{c&&og?og(()=>l(h)):l(h)},[l,c]);return k.useLayoutEffect(()=>o.listen(f),[o,f]),k.useEffect(()=>X1(i),[i]),k.createElement(j1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var ag;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ag||(ag={}));var lg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(lg||(lg={}));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wx=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=k.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>k.createElement("svg",{ref:l,...Q1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Wx("lucide",r),...a},[...o.map(([c,f])=>k.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=(t,e)=>{const n=k.forwardRef(({className:i,...r},s)=>k.createElement(J1,{ref:s,iconNode:e,className:Wx(`lucide-${Z1(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=pt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=pt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=pt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=pt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=pt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=pt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=pt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=pt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=pt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=pt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=pt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=pt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=pt("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=pt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=pt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=pt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=pt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=pt("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=pt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=pt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=pt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=pt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=pt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=pt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=pt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=pt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=pt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function cg(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Kx(...t){return e=>{let n=!1;const i=t.map(r=>{const s=cg(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():cg(t[r],null)}}}}function ts(...t){return k.useCallback(Kx(...t),t)}function yc(t){const e=_w(t),n=k.forwardRef((i,r)=>{const{children:s,...o}=i,a=k.Children.toArray(s),l=a.find(Sw);if(l){const c=l.props.children,f=a.map(h=>h===l?k.Children.count(c)>1?k.Children.only(null):k.isValidElement(c)?c.props.children:null:h);return w.jsx(e,{...o,ref:r,children:k.isValidElement(c)?k.cloneElement(c,void 0,f):null})}return w.jsx(e,{...o,ref:r,children:s})});return n.displayName=`${t}.Slot`,n}var xw=yc("Slot");function _w(t){const e=k.forwardRef((n,i)=>{const{children:r,...s}=n;if(k.isValidElement(r)){const o=ww(r),a=Mw(s,r.props);return r.type!==k.Fragment&&(a.ref=i?Kx(i,o):o),k.cloneElement(r,a)}return k.Children.count(r)>1?k.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var yw=Symbol("radix.slottable");function Sw(t){return k.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===yw}function Mw(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function ww(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function Zx(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=Zx(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function Qx(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=Zx(t))&&(i&&(i+=" "),i+=e);return i}const ug=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,dg=Qx,Jx=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return dg(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const f=n==null?void 0:n[c],h=s==null?void 0:s[c];if(f===null)return null;const d=ug(f)||ug(h);return r[c][d]}),a=n&&Object.entries(n).reduce((c,f)=>{let[h,d]=f;return d===void 0||(c[h]=d),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,f)=>{let{class:h,className:d,...m}=f;return Object.entries(m).every(v=>{let[y,p]=v;return Array.isArray(p)?p.includes({...s,...a}[y]):{...s,...a}[y]===p})?[...c,h,d]:c},[]);return dg(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},cp="-",Ew=t=>{const e=Tw(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(cp);return a[0]===""&&a.length!==1&&a.shift(),e_(a,e)||bw(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},e_=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?e_(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(cp);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},fg=/^\[(.+)\]$/,bw=t=>{if(fg.test(t)){const e=fg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},Tw=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return Cw(Object.entries(t.classGroups),n).forEach(([s,o])=>{gf(o,i,s,e)}),i},gf=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:hg(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(Aw(r)){gf(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{gf(o,hg(e,s),n,i)})})},hg=(t,e)=>{let n=t;return e.split(cp).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},Aw=t=>t.isThemeGetter,Cw=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,Rw=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},t_="!",Pw=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,f=0,h;for(let p=0;p<a.length;p++){let u=a[p];if(c===0){if(u===r&&(i||a.slice(p,p+s)===e)){l.push(a.slice(f,p)),f=p+s;continue}if(u==="/"){h=p;continue}}u==="["?c++:u==="]"&&c--}const d=l.length===0?a:a.substring(f),m=d.startsWith(t_),v=m?d.substring(1):d,y=h&&h>f?h-f:void 0;return{modifiers:l,hasImportantModifier:m,baseClassName:v,maybePostfixModifierPosition:y}};return n?a=>n({className:a,parseClassName:o}):o},Nw=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},Lw=t=>({cache:Rw(t.cacheSize),parseClassName:Pw(t),...Ew(t)}),Dw=/\s+/,Iw=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(Dw);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:f,hasImportantModifier:h,baseClassName:d,maybePostfixModifierPosition:m}=n(c);let v=!!m,y=i(v?d.substring(0,m):d);if(!y){if(!v){a=c+(a.length>0?" "+a:a);continue}if(y=i(d),!y){a=c+(a.length>0?" "+a:a);continue}v=!1}const p=Nw(f).join(":"),u=h?p+t_:p,g=u+y;if(s.includes(g))continue;s.push(g);const S=r(y,v);for(let x=0;x<S.length;++x){const E=S[x];s.push(u+E)}a=c+(a.length>0?" "+a:a)}return a};function Uw(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=n_(e))&&(i&&(i+=" "),i+=n);return i}const n_=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=n_(t[i]))&&(n&&(n+=" "),n+=e);return n};function Fw(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((f,h)=>h(f),t());return n=Lw(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const f=Iw(l,n);return r(l,f),f}return function(){return s(Uw.apply(null,arguments))}}const yt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},i_=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ow=/^\d+\/\d+$/,kw=new Set(["px","full","screen"]),Bw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,zw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Vw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Hw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Gw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Di=t=>$s(t)||kw.has(t)||Ow.test(t),rr=t=>uo(t,"length",Zw),$s=t=>!!t&&!Number.isNaN(Number(t)),Lu=t=>uo(t,"number",$s),Eo=t=>!!t&&Number.isInteger(Number(t)),Ww=t=>t.endsWith("%")&&$s(t.slice(0,-1)),Be=t=>i_.test(t),sr=t=>Bw.test(t),Xw=new Set(["length","size","percentage"]),jw=t=>uo(t,Xw,r_),Yw=t=>uo(t,"position",r_),$w=new Set(["image","url"]),qw=t=>uo(t,$w,Jw),Kw=t=>uo(t,"",Qw),bo=()=>!0,uo=(t,e,n)=>{const i=i_.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},Zw=t=>zw.test(t)&&!Vw.test(t),r_=()=>!1,Qw=t=>Hw.test(t),Jw=t=>Gw.test(t),eE=()=>{const t=yt("colors"),e=yt("spacing"),n=yt("blur"),i=yt("brightness"),r=yt("borderColor"),s=yt("borderRadius"),o=yt("borderSpacing"),a=yt("borderWidth"),l=yt("contrast"),c=yt("grayscale"),f=yt("hueRotate"),h=yt("invert"),d=yt("gap"),m=yt("gradientColorStops"),v=yt("gradientColorStopPositions"),y=yt("inset"),p=yt("margin"),u=yt("opacity"),g=yt("padding"),S=yt("saturate"),x=yt("scale"),E=yt("sepia"),b=yt("skew"),A=yt("space"),_=yt("translate"),C=()=>["auto","contain","none"],P=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",Be,e],L=()=>[Be,e],G=()=>["",Di,rr],N=()=>["auto",$s,Be],z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],K=()=>["solid","dashed","dotted","double","none"],Y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],B=()=>["","0",Be],j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>[$s,Be];return{cacheSize:500,separator:":",theme:{colors:[bo],spacing:[Di,rr],blur:["none","",sr,Be],brightness:Z(),borderColor:[t],borderRadius:["none","","full",sr,Be],borderSpacing:L(),borderWidth:G(),contrast:Z(),grayscale:B(),hueRotate:Z(),invert:B(),gap:L(),gradientColorStops:[t],gradientColorStopPositions:[Ww,rr],inset:D(),margin:D(),opacity:Z(),padding:L(),saturate:Z(),scale:Z(),sepia:B(),skew:Z(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",Be]}],container:["container"],columns:[{columns:[sr]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...z(),Be]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Eo,Be]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Be]}],grow:[{grow:B()}],shrink:[{shrink:B()}],order:[{order:["first","last","none",Eo,Be]}],"grid-cols":[{"grid-cols":[bo]}],"col-start-end":[{col:["auto",{span:["full",Eo,Be]},Be]}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":[bo]}],"row-start-end":[{row:["auto",{span:[Eo,Be]},Be]}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Be]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Be]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Be,e]}],"min-w":[{"min-w":[Be,e,"min","max","fit"]}],"max-w":[{"max-w":[Be,e,"none","full","min","max","fit","prose",{screen:[sr]},sr]}],h:[{h:[Be,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Be,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Be,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Be,e,"auto","min","max","fit"]}],"font-size":[{text:["base",sr,rr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Lu]}],"font-family":[{font:[bo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Be]}],"line-clamp":[{"line-clamp":["none",$s,Lu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Di,Be]}],"list-image":[{"list-image":["none",Be]}],"list-style-type":[{list:["none","disc","decimal",Be]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[u]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[u]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...K(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Di,rr]}],"underline-offset":[{"underline-offset":["auto",Di,Be]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Be]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Be]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[u]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...z(),Yw]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",jw]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qw]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[u]}],"border-style":[{border:[...K(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[u]}],"divide-style":[{divide:K()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...K()]}],"outline-offset":[{"outline-offset":[Di,Be]}],"outline-w":[{outline:[Di,rr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[u]}],"ring-offset-w":[{"ring-offset":[Di,rr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",sr,Kw]}],"shadow-color":[{shadow:[bo]}],opacity:[{opacity:[u]}],"mix-blend":[{"mix-blend":[...Y(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Y()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",sr,Be]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[h]}],saturate:[{saturate:[S]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[u]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Be]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",Be]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",Be]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[Eo,Be]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[b]}],"skew-y":[{"skew-y":[b]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Be]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Be]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Be]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Di,rr,Lu]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},tE=Fw(eE);function Mn(...t){return tE(Qx(t))}const nE=Jx("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Hn=k.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},s)=>{const o=i?xw:"button";return w.jsx(o,{className:Mn(nE({variant:e,size:n,className:t})),ref:s,...r})});Hn.displayName="Button";const iE=({is3DEnabled:t,onToggle3D:e,onOpenProjectsDeck:n,onScrollToStation:i})=>{const[r,s]=k.useState(!1),[o,a]=k.useState(!1);return k.useEffect(()=>{const l=()=>{s(window.scrollY>40)};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),w.jsxs("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${r?"bg-[#07080d]/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5":"bg-transparent py-5"}`,children:[w.jsxs("div",{className:"container mx-auto px-6 md:px-10 flex items-center justify-between",children:[w.jsxs("button",{type:"button",onClick:()=>i("home"),className:"group flex items-center gap-2 text-left focus:outline-none",children:[w.jsx("span",{className:"text-xl md:text-2xl font-black gradient-text tracking-wider",children:"RP"}),w.jsx("span",{className:"hidden md:inline-block font-mono text-[10px] tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors uppercase",children:"/ Spatial Dev"})]}),w.jsxs("nav",{className:"hidden md:flex items-center gap-8",children:[w.jsx("button",{type:"button",onClick:()=>i("home"),className:"font-mono text-xs tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase",children:"[ Home ]"}),w.jsxs("button",{type:"button",onClick:n,className:"font-mono text-xs tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors uppercase flex items-center gap-1.5",children:[w.jsx(Ta,{className:"w-3 h-3 text-cyan-400"}),"[ Projects (13) ]"]}),w.jsx("button",{type:"button",onClick:()=>i("contact"),className:"font-mono text-xs tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase",children:"[ Contact ]"})]}),w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsxs("button",{type:"button",onClick:e,title:t?"Turn off 3D WebGL background":"Turn on 3D WebGL background",className:`flex items-center gap-2 px-3 h-8 md:h-9 rounded-xl border text-[11px] font-mono font-semibold transition-all ${t?"bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-sm shadow-cyan-500/20":"bg-white/[0.04] border-white/10 text-slate-400 hover:text-white"}`,children:[w.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${t?"bg-cyan-400 animate-pulse":"bg-slate-500"}`}),"3D LAB ",t?"ON":"OFF"]}),w.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"hidden sm:inline-block",children:w.jsxs(Hn,{size:"sm",className:"h-8 md:h-9 px-4 bg-primary text-primary-foreground hover:shadow-glow font-semibold gap-1.5 text-xs rounded-xl",children:[w.jsx(mf,{className:"w-3.5 h-3.5"}),"Resume"]})}),w.jsx("button",{type:"button",onClick:()=>a(!o),className:"md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-white","aria-label":"Toggle menu",children:o?w.jsx(Qc,{className:"w-4 h-4"}):w.jsx(pw,{className:"w-4 h-4"})})]})]}),o&&w.jsxs("div",{className:"md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#090b14]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-3",children:[w.jsx("button",{type:"button",onClick:()=>{a(!1),i("home")},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]",children:"[ 00 // Home ]"}),w.jsx("button",{type:"button",onClick:()=>{a(!1),i("about")},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]",children:"[ 01 // Profile & Experience ]"}),w.jsx("button",{type:"button",onClick:()=>{a(!1),n()},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-cyan-400 hover:bg-cyan-500/10 font-bold",children:"[ 02 // All Projects Deck (13) ]"}),w.jsx("button",{type:"button",onClick:()=>{a(!1),i("contact")},className:"text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]",children:"[ 07 // Transmission ]"}),w.jsx("div",{className:"pt-2 border-t border-white/10",children:w.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"block",children:w.jsxs(Hn,{className:"w-full bg-primary text-primary-foreground gap-2 text-xs",children:[w.jsx(mf,{className:"w-3.5 h-3.5"}),"Download Resume"]})})})]})]})},vf=[{id:"home",code:"00",label:"00 // Home",title:"Introduction"},{id:"about",code:"01",label:"01 // About Me",title:"Profile & Expertise"},{id:"smartscopy",code:"02",label:"02 // SmartScopy",title:"Medical XR Platform"},{id:"mimadim",code:"03",label:"03 // MimadimPlus",title:"3D CAD Engine"},{id:"nopainheals",code:"04",label:"04 // NoPainHeals",title:"Interactive Therapy Kiosk"},{id:"vision-ai",code:"05",label:"05 // Motion AI",title:"Computer Vision Games"},{id:"skills",code:"06",label:"06 // Skills & Stack",title:"Technologies & Services"},{id:"contact",code:"07",label:"07 // Contact",title:"Get In Touch"}],rE=({activeStationId:t,onSelectStation:e})=>w.jsxs("aside",{"aria-label":"Section Navigation Rail",className:"fixed left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-5 pointer-events-auto select-none",children:[w.jsx("div",{className:"absolute left-[7px] top-1 bottom-1 w-[1.5px] bg-white/[0.08]"}),vf.map(n=>{const i=t===n.id;return w.jsxs("button",{type:"button",onClick:()=>e(n.id),className:"group relative flex items-center gap-3 text-left focus:outline-none",children:[w.jsx("div",{className:`relative z-10 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${i?"border border-cyan-400/80 bg-[#07080d] shadow-sm shadow-cyan-400/50 scale-110":"border border-white/20 bg-[#07080d] group-hover:border-cyan-400/40"}`,children:w.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i?"bg-cyan-400 shadow-[0_0_8px_#22d3ee] scale-100":"bg-transparent group-hover:bg-white/40 scale-75"}`})}),w.jsx("div",{className:"flex flex-col",children:w.jsx("span",{className:`font-mono text-[11px] tracking-wider transition-all duration-200 ${i?"text-cyan-400 font-bold translate-x-1":"text-slate-400/60 font-medium group-hover:text-slate-200 group-hover:translate-x-0.5"}`,children:n.label})})]},n.id)})]}),sE=()=>w.jsxs("div",{"aria-hidden":"true",className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none select-none opacity-80",children:[w.jsx("div",{className:"relative w-[1.5px] h-9 bg-gradient-to-b from-cyan-400/80 via-indigo-400/40 to-transparent",children:w.jsx("span",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-bounce"})}),w.jsx("span",{className:"font-mono text-[9px] tracking-[0.25em] text-slate-400 uppercase",children:"SCROLL TO DISCOVER"})]}),oE=({project:t,onClose:e,onOpenAllProjects:n})=>(k.useEffect(()=>{const i=r=>{r.key==="Escape"&&e()};return t&&(window.addEventListener("keydown",i),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",i),document.body.style.overflow="unset"}},[t,e]),t?w.jsxs("div",{className:"fixed inset-0 z-50 flex justify-end",children:[w.jsx("div",{onClick:e,className:"fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"}),w.jsxs("aside",{role:"dialog","aria-label":`${t.title} Case Study`,className:"relative z-10 w-full max-w-xl h-full bg-[#080a12]/95 backdrop-blur-2xl border-l border-white/[0.08] shadow-2xl p-6 md:p-10 flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300",children:[w.jsxs("div",{className:"flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),w.jsxs("span",{className:"font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase",children:["Case Study // ",t.category]})]}),w.jsxs("button",{type:"button",onClick:e,className:"group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-400 hover:text-white transition-all text-xs font-mono","aria-label":"Close Case Study",children:[w.jsx("span",{children:"[ ESC ]"}),w.jsx(Qc,{className:"w-3.5 h-3.5 group-hover:rotate-90 transition-transform"})]})]}),w.jsxs("div",{className:"mb-6",children:[w.jsx("h2",{className:"text-3xl md:text-4xl font-black tracking-tight text-white mb-2",children:t.title}),w.jsx("p",{className:"font-mono text-sm text-cyan-300/80 leading-relaxed",children:t.subtitle})]}),w.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-6",children:[w.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/15 border border-indigo-500/30 text-indigo-300",children:["Role: ",t.role]}),t.featured&&w.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center gap-1",children:[w.jsx(Ta,{className:"w-3 h-3 text-cyan-400"})," Flagship Production System"]})]}),w.jsxs("div",{className:"mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]",children:[w.jsx("h4",{className:"font-mono text-xs tracking-wider text-slate-400 uppercase mb-2",children:"Engineering Overview"}),w.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:t.fullDescription||t.shortDescription})]}),t.architecturalHighlights&&t.architecturalHighlights.length>0&&w.jsxs("div",{className:"mb-6",children:[w.jsxs("h4",{className:"font-mono text-xs tracking-wider text-cyan-400 uppercase mb-3 flex items-center gap-2",children:[w.jsx(Yx,{className:"w-4 h-4"})," Architectural Highlights"]}),w.jsx("div",{className:"space-y-2.5",children:t.architecturalHighlights.map((i,r)=>w.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]",children:[w.jsx(lp,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),w.jsx("span",{className:"text-xs text-slate-300 leading-relaxed",children:i})]},r))})]}),w.jsxs("div",{className:"mb-6",children:[w.jsxs("h4",{className:"font-mono text-xs tracking-wider text-indigo-400 uppercase mb-3 flex items-center gap-2",children:[w.jsx(cw,{className:"w-4 h-4"})," Key Deliverables & Systems Built"]}),w.jsx("ul",{className:"space-y-2",children:t.keyWork.map((i,r)=>w.jsxs("li",{className:"flex items-start gap-2.5 text-xs text-slate-300",children:[w.jsx("span",{className:"text-indigo-400 font-bold font-mono",children:"▸"}),w.jsx("span",{children:i})]},r))})]}),t.metrics&&w.jsxs("div",{className:"mb-6 p-4 rounded-2xl bg-cyan-500/[0.05] border border-cyan-500/20",children:[w.jsx("span",{className:"font-mono text-[10px] tracking-widest text-cyan-400 uppercase block mb-1",children:"Production Impact & Telemetry"}),w.jsx("span",{className:"text-sm font-semibold text-white",children:t.metrics})]}),w.jsxs("div",{className:"mb-8",children:[w.jsx("h4",{className:"font-mono text-xs tracking-wider text-slate-400 uppercase mb-3",children:"Technology Stack"}),w.jsx("div",{className:"flex flex-wrap gap-2",children:t.tech.map(i=>w.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300",children:i},i))})]}),w.jsxs("div",{className:"mt-auto pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3",children:[n&&w.jsx(Hn,{type:"button",onClick:()=>{e(),n()},className:"flex-1 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl text-xs h-10 shadow-lg shadow-cyan-500/20",children:"Explore All 13 Projects"}),t.liveUrl&&w.jsx("a",{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"no-underline flex-1",children:w.jsxs(Hn,{variant:"outline",className:"w-full border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 rounded-xl text-xs h-10 gap-1.5",children:[w.jsx(sw,{className:"w-3.5 h-3.5"}),"Live Link"]})})]})]})]}):null),Jc=k.forwardRef(({className:t,...e},n)=>w.jsx("div",{ref:n,className:Mn("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));Jc.displayName="Card";const aE=k.forwardRef(({className:t,...e},n)=>w.jsx("div",{ref:n,className:Mn("flex flex-col space-y-1.5 p-6",t),...e}));aE.displayName="CardHeader";const lE=k.forwardRef(({className:t,...e},n)=>w.jsx("h3",{ref:n,className:Mn("text-2xl font-semibold leading-none tracking-tight",t),...e}));lE.displayName="CardTitle";const cE=k.forwardRef(({className:t,...e},n)=>w.jsx("p",{ref:n,className:Mn("text-sm text-muted-foreground",t),...e}));cE.displayName="CardDescription";const uE=k.forwardRef(({className:t,...e},n)=>w.jsx("div",{ref:n,className:Mn("p-6 pt-0",t),...e}));uE.displayName="CardContent";const dE=k.forwardRef(({className:t,...e},n)=>w.jsx("div",{ref:n,className:Mn("flex items-center p-6 pt-0",t),...e}));dE.displayName="CardFooter";const un=[{id:"smartscopy",title:"SmartScopy",subtitle:"Live Operating Theatre XR & Low-Latency Video Pipeline",category:"Medical XR",role:"Lead XR & Video Pipeline Engineer",shortDescription:"Solo-built XR platform streaming live endoscopic surgical camera feeds in real time to XREAL glasses and HoloLens 2, integrated with 3D anatomical overlays.",fullDescription:"SmartScopy is an operating theatre mixed-reality platform engineered to give surgical teams direct, hands-free visualization of endoscopic feeds and patient anatomy inside XR headsets. Built with a low-latency video streaming pipeline in Unity (C#) and Python, it allows surgeons to view live surgical feeds alongside interactive 3D anatomical models reconstructed from patient CT, MRI, and X-ray imaging.",tech:["Unity3D","C#","XREAL Air","HoloLens 2","MRTK","OpenXR","Python","OpenCV"],keyWork:["Ultra-low latency live video pipeline in Unity (C#) for real-time surgical camera feeds","Stereoscopic XR rendering for XREAL glasses and Microsoft HoloLens 2 via OpenXR","Interactive 3D anatomical reconstructions from CT/MRI/X-ray data viewable alongside live video","Modular Python video capture architecture with DirectShow buffer elimination"],architecturalHighlights:["Threaded video capture and processing pipeline separating capture and render loops","Sub-100ms camera-to-headset latency for precision surgical assistance","Dual-headset target support with MRTK gesture control and spatial head-anchoring"],featured:!0},{id:"mimadimplus",title:"MimadimPlus",subtitle:"Automated CAD-to-3D Procedural Architectural Engine",category:"Unreal Engine 5",role:"Lead Pipeline & C++ Developer",shortDescription:"Automated 2D-to-3D engine that converts raw CAD/DXF blueprints into realistic, real-time 3D building environments with procedural mesh generation.",fullDescription:"MimadimPlus is an automated architectural generation engine in Unreal Engine 5 that eliminates manual 3D modeling by compiling raw 2D CAD/DXF blueprints into procedural 3D environments. Built with custom C++ classes and UProceduralMeshComponent, it handles coordinate conversion, room-footprint extraction, wall-partner raycast snapping, and includes a custom procedural floor tile generator with polygon clipping math.",tech:["Unreal Engine 5","C++","UProceduralMeshComponent","Python","Blueprints","Meta Quest"],keyWork:["Automated DXF/CAD blueprint parser converting 2D architectural entities into 3D geometry","Custom C++ procedural mesh generation for walls, floors, doors, and windows with auto-calculated UVs and tangents","Integrated Procedural Floor Tile Generator & Geometric Clipper (TileManagerActor.h) for arbitrary polygon room boundaries","Companion Python desktop application for blueprint inspection, tag extraction, and Meta Quest VR walkthroughs"],architecturalHighlights:["Mathematical coordinate space conversion from 2D CAD (Y-inversion, normalization) to Unreal 3D world coordinates","Geometric clipping algorithm that slices tile meshes against complex L-shaped room contours with uniform grout spacing","Real-time dynamic lighting and material instancing for multi-room layout previews"],featured:!0},{id:"nopainheals",title:"NoPainHeals",subtitle:"Clinical Floor Projection Rehabilitation Platform",category:"Healthcare & Web3D",role:"Interactive Systems & Security Engineer",shortDescription:"Multi-modal interactive therapy platform featuring 12+ floor-projection games, zero-trust E2EE crypto, and a hardened Linux kiosk architecture.",fullDescription:"NoPainHeals is an enterprise clinical rehabilitation station used for motor skills therapy, balance training, and pediatric physical therapy. The system runs on a locked-down Linux/Ubuntu kiosk, featuring a suite of 12+ motion-tracked games, a zero-trust end-to-end encrypted telemetry tunnel using X25519 and AES-256-GCM, and an offline-first IndexedDB queue that prevents metric loss during clinic network dropouts.",tech:["Electron","Three.js","WebGL","WebSockets (Pusher v7)","Linux Kiosk","node:crypto (X25519, AES-256-GCM)","IndexedDB"],keyWork:["Delivered 12+ interactive floor-projection rehabilitation games (hopscotch, balance paths, reaction games)","Engineered zero-trust E2EE tunnel using node:crypto (X25519 key exchange, HKDF-SHA256, AES-256-GCM)","Hardened Linux/Ubuntu kiosk deployment with window escape guards and auto-launch controls","Built resilient offline-first IndexedDB queue with exponential backoff and retry caps"],architecturalHighlights:["Encrypted patient telemetry stream via custom secure headers (X-Encrypted-Payload, X-Hardware-Id)","Station hardware ID fingerprinting cached in Electron main process","Real-time WebSocket communication for remote therapist controls and QR station pairing"],featured:!0},{id:"motion-tracking-ai",title:"Camera-Based Motion Tracking & Edge AI",subtitle:"Real-Time Body Pose, Gesture & Object Detection Suite",category:"AI & Vision",role:"Computer Vision & Gameplay Engineer",shortDescription:"Custom motion and object-tracking models on live camera feeds powering controller-free full-body games.",fullDescription:"A high-performance edge AI computer vision pipeline developed in Python and Unity that processes live camera streams with zero buffer latency. Combines custom-trained YOLO object-tracking models running on ONNX Runtime with MediaPipe body pose and hand tracking to power controller-free games where physical movements control the gameplay.",tech:["Python","OpenCV","MediaPipe","YOLO","ONNX Runtime","DirectShow","Unity3D"],keyWork:["DirectShow video capture integration (cv2.CAP_DSHOW) eliminating internal frame buffer latency","Hybrid ML pipeline combining MediaPipe skeletal landmarks with custom ONNX models","Controller-free games suite: Fruit Samurai, Alien Runner, Enter If You Dare, and Football Cup","Real-time inference optimized for 60+ FPS on consumer hardware"],architecturalHighlights:["Multi-threaded frame acquisition and ML tensor inference to prevent UI stutter","Normalized gesture recognition coordinates mapped directly to in-game physics colliders"],featured:!0},{id:"3d-bone-visualizer",title:"3D Bone Visualizer",subtitle:"Interactive Orthopedic Mixed Reality Suite",category:"Medical XR",role:"XR Developer",shortDescription:"Interactive HoloLens 2 mixed-reality application enabling surgeons to inspect, slice, and manipulate 3D bone models from CT/MRI data.",fullDescription:"A specialized spatial computing application developed for Microsoft HoloLens 2 using MRTK and OpenXR. Surgeons can visualize volumetric patient bone structures in 3D space, rotate and inspect fractures, slice anatomical models along cross-sectional planes, and interact using natural hand tracking.",tech:["Unity3D","Microsoft HoloLens 2","MRTK","OpenXR","C#"],keyWork:["Volumetric bone model reconstruction and rendering from CT and MRI scans","Spatial hand-tracking gesture controls for 3D model rotation, zoom, and translation","Cross-sectional planar slicing tool for internal anatomical examination"],architecturalHighlights:["MRTK solver pipelines for ergonomic spatial anchoring in sterile operating room environments","Optimized polygon meshes for smooth 60 FPS rendering on mobile XR hardware"]},{id:"mimadim-homestudio",title:"MimadimHomeStudio",subtitle:"Real-Time Interior Customization & Furniture Swapping",category:"Unreal Engine 5",role:"Unreal Engine Developer",shortDescription:"Real-time interior design and customization engine in Unreal Engine 5 with dynamic asset swapping and instant lighting adjustments.",fullDescription:"An interactive architectural visualization tool built in UE5 using C++, Blueprints, and Data Assets. Users can customize room finishes, wall colors, lighting configurations, and dynamically swap furniture pieces while maintaining accurate world coordinates, pivot rotations, and collision bounds.",tech:["Unreal Engine 5","C++","Blueprints","Data Assets","Lumen Lighting"],keyWork:["Dynamic furniture swapping system preserving world position, rotation, and dimensions","Runtime material and color switching pipeline using Blueprint dynamic material instances","Real-time architectural lighting preview powered by UE5 Lumen"],architecturalHighlights:["Data Asset-driven catalog system decoupling furniture definitions from gameplay code","Collision checking preventing overlapping placements during item swaps"]},{id:"speech-therapy",title:"Speech Therapy Station (Speak & Rise)",subtitle:"Pediatric Articulation & Web3D Voice Platform",category:"Healthcare & Web3D",role:"Web3D & Systems Architect",shortDescription:"Interactive 3D web platform for pediatric speech therapy featuring real-time AI voice recognition and articulation scoring.",fullDescription:"An interactive pediatric speech rehabilitation platform built in Three.js and WebGL. Ravi refactored a 2,000+ line legacy monolith into clean decoupled modules (GameStateMachine, Classroom3D, GameRegistry) and integrated Sarvam AI voice activity detection and speech-to-text for real-time gamified pronunciation feedback.",tech:["Three.js","JavaScript","Web Audio API","Sarvam AI (VAD & STT)","Electron"],keyWork:["Architectural refactoring into decoupled GameStateMachine and Classroom3D modules","Integration of Sarvam AI Voice Activity Detection (VAD) and Speech-to-Text for pronunciation scoring","Interactive 3D character animation blending and gamified audio reward feedback"],architecturalHighlights:["Dynamic GameRegistry enabling plug-and-play addition of new therapy exercises without changing core logic","Low-latency Web Audio API synthesizers for instant child audio reinforcement"]},{id:"vr-boat-simulation",title:"VR Boat Simulation",subtitle:"Maritime Pilot Training Simulator",category:"Games & VR",role:"Unity Simulation Developer",shortDescription:"Virtual reality maritime simulator training pilots in transitioning from small vessels to large commercial cargo ships.",fullDescription:"A high-fidelity maritime training simulation in Unity for VR headsets. Focused on realistic open-water navigation, vessel handling characteristics, helm controls, realistic wave simulation, and custom buoyant water physics.",tech:["Unity3D","C#","VR SDK","HLSL Water Shaders","Physics Engine"],keyWork:["Developed realistic buoyant water physics and wave interaction models","Engineered ship helm controls and vessel inertia mechanics","Created dynamic weather and water shader effects"],architecturalHighlights:["Buoyancy force calculation sampling water height in real time to simulate realistic vessel heave and pitch","Comfort-tuned VR camera motion damping to minimize motion sickness during heavy waves"]},{id:"vr-zombie-shooter",title:"VR Zombie Shooter",subtitle:"First-Person 6DOF Immersive VR Game",category:"Games & VR",role:"Unity Gameplay Developer",shortDescription:"Action-packed first-person VR shooter featuring wave survival, spatial audio mapping, and realistic 6DOF weapon handling.",fullDescription:"An immersive virtual reality first-person game developed in Unity. Features realistic physics-based weapon reloading, tactile 6DOF controller feedback, spatial 3D audio, and intelligent enemy pathfinding algorithms.",tech:["Unity3D","C#","OpenXR","VR 6DOF","Spatial Audio","NavMesh AI"],keyWork:["Implemented 6DOF physical weapon grab, aim, and reload mechanics","Constructed multi-tiered enemy wave spawner with dynamic NavMesh routing","Configured 3D spatial soundscapes for audio-guided positional awareness"],architecturalHighlights:["Object pooling pipeline for projectiles, particle impacts, and enemy ragdolls to maintain a steady 90 FPS","Inverse kinematics (IK) player hand tracking"]},{id:"system-guard",title:"System Guard",subtitle:"Universal Kiosk Telemetry, Standby Tracker & Remote Kill-Switch",category:"Healthcare & Web3D",role:"Systems & Security Engineer",shortDescription:"Drop-in Electron kiosk monitoring module with hardware UUID fingerprinting, standby telemetry, and remote kill switch.",fullDescription:"A security and telemetry module designed for commercial medical kiosks. Auto-registers with a private Cloudflare Worker, generates tamper-resistant hardware UUID fingerprints, tracks active vs. standby operating time, and supports instant remote station locking.",tech:["Electron","Node.js crypto","Cloudflare Workers","Linux/Windows","Bash"],keyWork:["Hardware station fingerprinting via DMI product UUID and Linux machine ID","Inactivity detection transitioning kiosks cleanly between Active and Standby modes","Remote kill-switch protocol enabling instantaneous lockdown during security breaches"],architecturalHighlights:["Zero-dependency drop-in module requiring zero modification to existing game runtimes","Heartbeat ping architecture reporting kiosk health every 60 seconds with offline resilience"]},{id:"clean-the-city",title:"Clean the City",subtitle:"Mobile Physics Cleanup Game",category:"Games & VR",role:"Unity Mobile Developer",shortDescription:"Mobile casual game featuring black-hole gravitational physics to collect and absorb city debris.",fullDescription:"A mobile arcade game where players navigate an expanding black hole through urban environments, consuming city debris and buildings. Optimized for silky-smooth touch controls and high frame rates on both iOS and Android.",tech:["Unity3D","C#","Mobile (iOS/Android)","Physics2D/3D","Shader Graph"],keyWork:["Implemented gravitational suction physics and scalable mesh deformation","Optimized lighting, dynamic shadows, and draw-call batching for mobile performance","Integrated monetization SDKs and responsive touch controls"],architecturalHighlights:["Dynamic object scaling and collision culling to support hundreds of simultaneous physics bodies on mobile devices"]},{id:"iris-recognition",title:"Iris Recognition & Distance Detection",subtitle:"Biometric Identification & User Distance Prototype",category:"AI & Vision",role:"Computer Engineering Intern",shortDescription:"Image processing pipeline in Python and OpenCV calculating user distance from screen and biometric iris tracking.",fullDescription:"Developed during Ravi's engineering internship at Invisible Fiction. Built an image processing pipeline in Python and OpenCV that continuously tracks user eye position, computes user-to-screen distance to mitigate ocular fatigue, and evaluates iris features for biometric identification.",tech:["Python","OpenCV","NumPy","Image Processing"],keyWork:["Engineered user-to-screen geometric distance calculation using camera optical parameters","Constructed pupil and iris localization and contour isolation algorithms","Designed biometric distance warning thresholds to promote ergonomic computer usage"],architecturalHighlights:["Lightweight algorithmic pipeline running efficiently on standard webcam hardware without dedicated depth sensors"]},{id:"creative-spaces",title:"Creative Spaces Website",subtitle:"Interactive Architectural Showcase",category:"Healthcare & Web3D",role:"Freelance Web Developer",shortDescription:"Clean, responsive portfolio website built for an interior design and architectural client.",fullDescription:"A responsive website built for an interior design studio showcasing architectural design projects, interactive project galleries, and modern typography.",tech:["HTML5","CSS3","JavaScript","Responsive Web"],keyWork:["Constructed responsive image galleries and smooth scroll navigation","Optimized asset loading and mobile layout fidelity"],architecturalHighlights:["Clean semantic HTML structure with high Google Lighthouse performance scores"]}],fE=[{label:"All Systems",value:"All",count:un.length},{label:"Medical XR",value:"Medical XR",count:un.filter(t=>t.category==="Medical XR").length},{label:"Unreal Engine 5",value:"Unreal Engine 5",count:un.filter(t=>t.category==="Unreal Engine 5").length},{label:"Healthcare & Web3D",value:"Healthcare & Web3D",count:un.filter(t=>t.category==="Healthcare & Web3D").length},{label:"AI & Vision",value:"AI & Vision",count:un.filter(t=>t.category==="AI & Vision").length},{label:"Games & VR",value:"Games & VR",count:un.filter(t=>t.category==="Games & VR").length}],hE=({isOpen:t,onClose:e,onSelectProject:n})=>{const[i,r]=k.useState("All"),s=k.useRef(null);k.useEffect(()=>{const l=c=>{t&&(c.key==="Escape"?e():c.key==="ArrowRight"?o("right"):c.key==="ArrowLeft"&&o("left"))};return t&&(window.addEventListener("keydown",l),document.body.style.overflow="hidden"),()=>{window.removeEventListener("keydown",l),document.body.style.overflow="unset"}},[t,e]);const o=l=>{if(!s.current)return;const c=l==="right"?360:-360;s.current.scrollBy({left:c,behavior:"smooth"})};if(!t)return null;const a=i==="All"?un:un.filter(l=>l.category===i);return w.jsxs("div",{role:"dialog","aria-label":"Projects Archive Deck",className:"fixed inset-0 z-50 bg-[#06080e]/95 backdrop-blur-2xl flex flex-col p-6 md:p-10 animate-in fade-in duration-300",children:[w.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6",children:[w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[w.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),w.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"ARCHIVE // 13 PRODUCTION SYSTEMS"})]}),w.jsxs("h2",{className:"text-2xl md:text-3xl font-black text-white tracking-tight",children:["Projects ",w.jsx("span",{className:"gradient-text",children:"Carousel Deck"})]})]}),w.jsxs("button",{type:"button",onClick:e,className:"group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-mono",children:[w.jsx("span",{children:"[ ESC ]"}),w.jsx(Qc,{className:"w-4 h-4 group-hover:rotate-90 transition-transform"})]})]}),w.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-6",children:[w.jsx("div",{className:"flex flex-wrap gap-2",children:fE.map(l=>{const c=i===l.value;return w.jsxs("button",{type:"button",onClick:()=>r(l.value),className:`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${c?"bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20 font-bold":"bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white"}`,children:[w.jsx("span",{children:l.label}),w.jsxs("span",{className:"text-[10px] opacity-60",children:["(",l.count,")"]})]},l.value)})}),w.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[w.jsx(Hn,{size:"icon",variant:"outline",onClick:()=>o("left"),className:"w-9 h-9 rounded-xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]","aria-label":"Scroll Left",children:w.jsx(nw,{className:"w-4 h-4"})}),w.jsx(Hn,{size:"icon",variant:"outline",onClick:()=>o("right"),className:"w-9 h-9 rounded-xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]","aria-label":"Scroll Right",children:w.jsx(iw,{className:"w-4 h-4"})})]})]}),w.jsx("div",{ref:s,className:"flex-1 flex gap-5 overflow-x-auto items-stretch pb-6 scrollbar-none snap-x snap-mandatory",style:{scrollbarWidth:"none"},children:a.map(l=>w.jsxs(Jc,{onClick:()=>n(l),className:"group shrink-0 w-[300px] sm:w-[340px] p-6 rounded-2xl bg-[#090c16]/90 border border-white/[0.08] hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/15 transition-all duration-300 flex flex-col justify-between cursor-pointer snap-start relative overflow-hidden",children:[w.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"}),w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[w.jsx("span",{className:"font-mono text-[10px] tracking-wider text-cyan-400 uppercase font-semibold",children:l.category}),l.featured&&w.jsxs("span",{className:"flex items-center gap-1 font-mono text-[10px] text-indigo-400",children:[w.jsx(Ta,{className:"w-3 h-3 text-cyan-400"})," Flagship"]})]}),w.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2",children:l.title}),w.jsx("p",{className:"font-mono text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4",children:l.subtitle}),l.metrics&&w.jsx("div",{className:"p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-4",children:w.jsxs("span",{className:"font-mono text-[11px] text-cyan-300 block line-clamp-1 font-medium",children:["⚡ ",l.metrics]})})]}),w.jsxs("div",{children:[w.jsx("div",{className:"flex flex-wrap gap-1.5 mb-4",children:l.tech.slice(0,3).map(c=>w.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-400",children:c},c))}),w.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-cyan-400 pt-3 border-t border-white/[0.06]",children:[w.jsx("span",{children:"[ INSPECT CASE ]"}),w.jsx(Xx,{className:"w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"})]})]})]},l.id))})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const up="186",pE=0,pg=1,mE=2,Bl=1,gE=2,ko=3,ns=0,Rn=1,Mi=2,Ai=0,qo=1,xf=2,mg=3,gg=4,vE=5,As=100,xE=101,_E=102,yE=103,SE=104,ME=200,wE=201,EE=202,bE=203,s_=204,o_=205,TE=206,AE=207,CE=208,RE=209,PE=210,NE=211,LE=212,DE=213,IE=214,_f=0,yf=1,Sf=2,pa=3,Mf=4,wf=5,Ef=6,bf=7,a_=0,UE=1,FE=2,Ci=0,l_=1,c_=2,u_=3,dp=4,d_=5,f_=6,h_=7,p_=300,is=301,ro=302,Du=303,Iu=304,eu=306,ma=1e3,Gi=1001,Tf=1002,Jt=1003,OE=1004,Qa=1005,en=1006,Uu=1007,jr=1008,kn=1009,m_=1010,g_=1011,ga=1012,fp=1013,Pi=1014,wi=1015,Pn=1016,hp=1017,pp=1018,va=1020,v_=35902,x_=35899,__=1021,y_=1022,ci=1023,Ki=1026,Yr=1027,S_=1028,mp=1029,rs=1030,gp=1031,vp=1033,zl=33776,Vl=33777,Hl=33778,Gl=33779,Af=35840,Cf=35841,Rf=35842,Pf=35843,Nf=36196,Lf=37492,Df=37496,If=37488,Uf=37489,Sc=37490,Ff=37491,Of=37808,kf=37809,Bf=37810,zf=37811,Vf=37812,Hf=37813,Gf=37814,Wf=37815,Xf=37816,jf=37817,Yf=37818,$f=37819,qf=37820,Kf=37821,Zf=36492,Qf=36494,Jf=36495,eh=36283,th=36284,Mc=36285,nh=36286,kE=3200,ih=0,BE=1,vr="",Fn="srgb",wc="srgb-linear",Ec="linear",at="srgb",Fu=7680,zE=519,VE=512,HE=513,GE=514,xp=515,WE=516,XE=517,_p=518,jE=519,YE=35044,vg="300 es",Ei=2e3,xa=2001;function $E(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qE(){const t=bc("canvas");return t.style.display="block",t}const xg={};function _g(...t){const e="THREE."+t.shift();console.log(e,...t)}function M_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=M_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=M_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function qs(...t){const e=t.join(" ");e in xg||(xg[e]=!0,De(...t))}function KE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ZE={[_f]:yf,[Sf]:Ef,[Mf]:bf,[pa]:wf,[yf]:_f,[Ef]:Sf,[bf]:Mf,[wf]:pa};class ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=Math.PI/180,rh=180/Math.PI;function Aa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[t&255]+ln[t>>8&255]+ln[t>>16&255]+ln[t>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function QE(t,e){return(t%e+e)%e}function ku(t,e,n){return(1-n)*t+n*e}function To(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ip=class Ip{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ip.prototype.isVector2=!0;let Le=Ip;class fo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[o+0],m=s[o+1],v=s[o+2],y=s[o+3];if(h!==y||l!==d||c!==m||f!==v){let p=l*d+c*m+f*v+h*y;p<0&&(d=-d,m=-m,v=-v,y=-y,p=-p);let u=1-a;if(p<.9995){const g=Math.acos(p),S=Math.sin(g);u=Math.sin(u*g)/S,a=Math.sin(a*g)/S,l=l*u+d*a,c=c*u+m*a,f=f*u+v*a,h=h*u+y*a}else{l=l*u+d*a,c=c*u+m*a,f=f*u+v*a,h=h*u+y*a;const g=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=g,c*=g,f*=g,h*=g}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*h+l*m-c*d,e[n+1]=l*v+f*d+c*h-a*m,e[n+2]=c*v+f*m+a*d-l*h,e[n+3]=f*v-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*m*v,this._y=c*m*h-d*f*v,this._z=c*f*v+d*m*h,this._w=c*f*h-d*m*v;break;case"YXZ":this._x=d*f*h+c*m*v,this._y=c*m*h-d*f*v,this._z=c*f*v-d*m*h,this._w=c*f*h+d*m*v;break;case"ZXY":this._x=d*f*h-c*m*v,this._y=c*m*h+d*f*v,this._z=c*f*v+d*m*h,this._w=c*f*h-d*m*v;break;case"ZYX":this._x=d*f*h-c*m*v,this._y=c*m*h+d*f*v,this._z=c*f*v-d*m*h,this._w=c*f*h+d*m*v;break;case"YZX":this._x=d*f*h+c*m*v,this._y=c*m*h+d*f*v,this._z=c*f*v-d*m*h,this._w=c*f*h-d*m*v;break;case"XZY":this._x=d*f*h-c*m*v,this._y=c*m*h-d*f*v,this._z=c*f*v+d*m*h,this._w=c*f*h+d*m*v;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Up=class Up{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Up.prototype.isVector3=!0;let I=Up;const Bu=new I,yg=new fo,Fp=class Fp{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],v=i[8],y=r[0],p=r[3],u=r[6],g=r[1],S=r[4],x=r[7],E=r[2],b=r[5],A=r[8];return s[0]=o*y+a*g+l*E,s[3]=o*p+a*S+l*b,s[6]=o*u+a*x+l*A,s[1]=c*y+f*g+h*E,s[4]=c*p+f*S+h*b,s[7]=c*u+f*x+h*A,s[2]=d*y+m*g+v*E,s[5]=d*p+m*S+v*b,s[8]=d*u+m*x+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,m=c*s-o*l,v=n*h+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=h*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zu.makeScale(e,n)),this}rotate(e){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zu.makeRotation(-e)),this}translate(e,n){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fp.prototype.isMatrix3=!0;let Fe=Fp;const zu=new Fe,Sg=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mg=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JE(){const t={enabled:!0,workingColorSpace:wc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=Ks(r.r),r.g=Ks(r.g),r.b=Ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?Ec:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[wc]:{primaries:e,whitePoint:i,transfer:Ec,toXYZ:Sg,fromXYZ:Mg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Sg,fromXYZ:Mg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),t}const Ze=JE();function Xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ks(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ps;class eb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ps===void 0&&(ps=bc("canvas")),ps.width=e.width,ps.height=e.height;const r=ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ps}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xi(n[i]/255)*255):n[i]=Xi(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tb=0;class yp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Aa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vu(r[o].image)):s.push(Vu(r[o]))}else s=Vu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let nb=0;const Hu=new I;class hn extends ls{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Gi,r=Gi,s=en,o=jr,a=ci,l=kn,c=hn.DEFAULT_ANISOTROPY,f=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Aa(),this.name="",this.source=new yp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ma:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ma:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=p_;hn.DEFAULT_ANISOTROPY=1;const Op=class Op{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],v=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,x=(m+1)/2,E=(u+1)/2,b=(f+d)/4,A=(h+y)/4,_=(v+p)/4;return S>x&&S>E?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=b/i,s=A/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=b/r,s=_/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=_/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-v)*(p-v)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(p-v)/g,this.y=(h-y)/g,this.z=(d-f)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Op.prototype.isVector4=!0;let Ct=Op;class ib extends ls{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new hn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new yp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends ib{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class w_ extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rb extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Nc=class Nc{constructor(e,n,i,r,s,o,a,l,c,f,h,d,m,v,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,m,v,y,p)}set(e,n,i,r,s,o,a,l,c,f,h,d,m,v,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=v,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ms.setFromMatrixColumn(e,0).length(),s=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,v=a*f,y=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,v=c*f,y=c*h;n[0]=d+y*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,v=c*f,y=c*h;n[0]=d-y*a,n[4]=-o*h,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,v=a*f,y=a*h;n[0]=l*f,n[4]=v*c-m,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,v=a*l,y=a*c;n[0]=l*f,n[4]=y-d*h,n[8]=v*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+v,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,m=o*c,v=a*l,y=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+y,n[5]=o*f,n[9]=m*h-v,n[2]=v*h-m,n[6]=a*f,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sb,e,ob)}lookAt(e,n,i){const r=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),or.crossVectors(i,Ln),or.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),or.crossVectors(i,Ln)),or.normalize(),Ja.crossVectors(Ln,or),r[0]=or.x,r[4]=Ja.x,r[8]=Ln.x,r[1]=or.y,r[5]=Ja.y,r[9]=Ln.y,r[2]=or.z,r[6]=Ja.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],v=i[2],y=i[6],p=i[10],u=i[14],g=i[3],S=i[7],x=i[11],E=i[15],b=r[0],A=r[4],_=r[8],C=r[12],P=r[1],D=r[5],L=r[9],G=r[13],N=r[2],z=r[6],K=r[10],Y=r[14],V=r[3],B=r[7],j=r[11],Z=r[15];return s[0]=o*b+a*P+l*N+c*V,s[4]=o*A+a*D+l*z+c*B,s[8]=o*_+a*L+l*K+c*j,s[12]=o*C+a*G+l*Y+c*Z,s[1]=f*b+h*P+d*N+m*V,s[5]=f*A+h*D+d*z+m*B,s[9]=f*_+h*L+d*K+m*j,s[13]=f*C+h*G+d*Y+m*Z,s[2]=v*b+y*P+p*N+u*V,s[6]=v*A+y*D+p*z+u*B,s[10]=v*_+y*L+p*K+u*j,s[14]=v*C+y*G+p*Y+u*Z,s[3]=g*b+S*P+x*N+E*V,s[7]=g*A+S*D+x*z+E*B,s[11]=g*_+S*L+x*K+E*j,s[15]=g*C+S*G+x*Y+E*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],v=e[3],y=e[7],p=e[11],u=e[15],g=l*m-c*d,S=a*m-c*h,x=a*d-l*h,E=o*m-c*f,b=o*d-l*f,A=o*h-a*f;return n*(y*g-p*S+u*x)-i*(v*g-p*E+u*b)+r*(v*S-y*E+u*A)-s*(v*x-y*b+p*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],v=e[12],y=e[13],p=e[14],u=e[15],g=n*a-i*o,S=n*l-r*o,x=n*c-s*o,E=i*l-r*a,b=i*c-s*a,A=r*c-s*l,_=f*y-h*v,C=f*p-d*v,P=f*u-m*v,D=h*p-d*y,L=h*u-m*y,G=d*u-m*p,N=g*G-S*L+x*D+E*P-b*C+A*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=(a*G-l*L+c*D)*z,e[1]=(r*L-i*G-s*D)*z,e[2]=(y*A-p*b+u*E)*z,e[3]=(d*b-h*A-m*E)*z,e[4]=(l*P-o*G-c*C)*z,e[5]=(n*G-r*P+s*C)*z,e[6]=(p*x-v*A-u*S)*z,e[7]=(f*A-d*x+m*S)*z,e[8]=(o*L-a*P+c*_)*z,e[9]=(i*P-n*L-s*_)*z,e[10]=(v*b-y*x+u*g)*z,e[11]=(h*x-f*b-m*g)*z,e[12]=(a*C-o*D-l*_)*z,e[13]=(n*D-i*C+r*_)*z,e[14]=(y*S-v*E-p*g)*z,e[15]=(f*E-h*S+d*g)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,m=s*f,v=s*h,y=o*f,p=o*h,u=a*h,g=l*c,S=l*f,x=l*h,E=i.x,b=i.y,A=i.z;return r[0]=(1-(y+u))*E,r[1]=(m+x)*E,r[2]=(v-S)*E,r[3]=0,r[4]=(m-x)*b,r[5]=(1-(d+u))*b,r[6]=(p+g)*b,r[7]=0,r[8]=(v+S)*A,r[9]=(p-g)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ms.set(r[0],r[1],r[2]).length();const a=ms.set(r[4],r[5],r[6]).length(),l=ms.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ni.copy(this);const c=1/o,f=1/a,h=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=f,ni.elements[5]*=f,ni.elements[6]*=f,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,n.setFromRotationMatrix(ni),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let v,y;if(l)v=s/(o-s),y=o*s/(o-s);else if(a===Ei)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===xa)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,y;if(l)v=1/(o-s),y=o/(o-s);else if(a===Ei)v=-2/(o-s),y=-(o+s)/(o-s);else if(a===xa)v=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Nc.prototype.isMatrix4=!0;let bt=Nc;const ms=new I,ni=new bt,sb=new I(0,0,0),ob=new I(1,1,1),or=new I,Ja=new I,Ln=new I,wg=new bt,Eg=new fo;class Nr{constructor(e=0,n=0,i=0,r=Nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Eg.setFromEuler(this),this.setFromQuaternion(Eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nr.DEFAULT_ORDER="XYZ";class E_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ab=0;const bg=new I,gs=new fo,Ii=new bt,el=new I,Ao=new I,lb=new I,cb=new fo,Tg=new I(1,0,0),Ag=new I(0,1,0),Cg=new I(0,0,1),Rg={type:"added"},ub={type:"removed"},vs={type:"childadded",child:null},Gu={type:"childremoved",child:null};class $t extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new I,n=new Nr,i=new fo,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Fe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(Ag,e)}rotateZ(e){return this.rotateOnAxis(Cg,e)}translateOnAxis(e,n){return bg.copy(e).applyQuaternion(this.quaternion),this.position.add(bg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(Ag,e)}translateZ(e){return this.translateOnAxis(Cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?el.copy(e):el.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Ao,el,this.up):Ii.lookAt(el,Ao,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),gs.setFromRotationMatrix(Ii),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rg),vs.child=e,this.dispatchEvent(vs),vs.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ub),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rg),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,lb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,cb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$t.DEFAULT_UP=new I(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $n extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const db={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(db)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $n;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Xu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=QE(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Xu(o,s,e+1/3),this.g=Xu(o,s,e),this.b=Xu(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=b_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Ze.workingToColorSpace(cn.copy(this),e),Math.round(Ke(cn.r*255,0,255))*65536+Math.round(Ke(cn.g*255,0,255))*256+Math.round(Ke(cn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(cn.copy(this),n);const i=cn.r,r=cn.g,s=cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Fn){Ze.workingToColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,r=cn.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(tl);const i=ku(ar.h,tl.h,n),r=ku(ar.s,tl.s,n),s=ku(ar.l,tl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Oe;Oe.NAMES=b_;class Sp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=n}clone(){return new Sp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fb extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nr,this.environmentIntensity=1,this.environmentRotation=new Nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ii=new I,Ui=new I,ju=new I,Fi=new I,xs=new I,_s=new I,Pg=new I,Yu=new I,$u=new I,qu=new I,Ku=new Ct,Zu=new Ct,Qu=new Ct;class li{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ii.subVectors(e,n),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ii.subVectors(r,n),Ui.subVectors(i,n),ju.subVectors(e,n);const o=ii.dot(ii),a=ii.dot(Ui),l=ii.dot(ju),c=Ui.dot(Ui),f=Ui.dot(ju),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-a*f)*d,v=(o*f-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ku.setScalar(0),Zu.setScalar(0),Qu.setScalar(0),Ku.fromBufferAttribute(e,n),Zu.fromBufferAttribute(e,i),Qu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ku,s.x),o.addScaledVector(Zu,s.y),o.addScaledVector(Qu,s.z),o}static isFrontFacing(e,n,i,r){return ii.subVectors(i,n),Ui.subVectors(e,n),ii.cross(Ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ii.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return li.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;xs.subVectors(r,i),_s.subVectors(s,i),Yu.subVectors(e,i);const l=xs.dot(Yu),c=_s.dot(Yu);if(l<=0&&c<=0)return n.copy(i);$u.subVectors(e,r);const f=xs.dot($u),h=_s.dot($u);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(xs,o);qu.subVectors(e,s);const m=xs.dot(qu),v=_s.dot(qu);if(v>=0&&m<=v)return n.copy(s);const y=m*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(_s,a);const p=f*v-m*h;if(p<=0&&h-f>=0&&m-v>=0)return Pg.subVectors(s,r),a=(h-f)/(h-f+(m-v)),n.copy(r).addScaledVector(Pg,a);const u=1/(p+y+d);return o=y*u,a=d*u,n.copy(i).addScaledVector(xs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ca{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nl.copy(i.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),il.subVectors(this.max,Co),ys.subVectors(e.a,Co),Ss.subVectors(e.b,Co),Ms.subVectors(e.c,Co),lr.subVectors(Ss,ys),cr.subVectors(Ms,Ss),Fr.subVectors(ys,Ms);let n=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Fr.z,Fr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Fr.z,0,-Fr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Fr.y,Fr.x,0];return!Ju(n,ys,Ss,Ms,il)||(n=[1,0,0,0,1,0,0,0,1],!Ju(n,ys,Ss,Ms,il))?!1:(rl.crossVectors(lr,cr),n=[rl.x,rl.y,rl.z],Ju(n,ys,Ss,Ms,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new I,new I,new I,new I,new I,new I,new I,new I],ri=new I,nl=new Ca,ys=new I,Ss=new I,Ms=new I,lr=new I,cr=new I,Fr=new I,Co=new I,il=new I,rl=new I,Or=new I;function Ju(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Or.fromArray(t,s);const a=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=n.dot(Or),f=i.dot(Or);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Ot=new I,sl=new Le;let hb=0;class Ri extends ls{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=YE,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)sl.fromBufferAttribute(this,n),sl.applyMatrix3(e),this.setXY(n,sl.x,sl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=To(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=To(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=To(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=To(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=To(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),r=wn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),r=wn(r,this.array),s=wn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class T_ extends Ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class A_ extends Ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class st extends Ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}const pb=new Ca,Ro=new I,ed=new I;class Ra{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):pb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ro,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(ed)),this.expandByPoint(Ro.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mb=0;const Yn=new bt,td=new $t,ws=new I,Dn=new Ca,Po=new Ca,Xt=new I;class Gt extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($E(e)?A_:T_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,i){return Yn.makeTranslation(e,n,i),this.applyMatrix4(Yn),this}scale(e,n,i){return Yn.makeScale(e,n,i),this.applyMatrix4(Yn),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Dn.min,Po.min),Dn.expandByPoint(Xt),Xt.addVectors(Dn.max,Po.max),Dn.expandByPoint(Xt)):(Dn.expandByPoint(Po.min),Dn.expandByPoint(Po.max))}Dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Xt.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),Xt.add(ws)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ri(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new I,l[_]=new I;const c=new I,f=new I,h=new I,d=new Le,m=new Le,v=new Le,y=new I,p=new I;function u(_,C,P){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,_),m.fromBufferAttribute(s,C),v.fromBufferAttribute(s,P),f.sub(c),h.sub(c),m.sub(d),v.sub(d);const D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(y.copy(f).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(D),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(D),a[_].add(y),a[C].add(y),a[P].add(y),l[_].add(p),l[C].add(p),l[P].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let _=0,C=g.length;_<C;++_){const P=g[_],D=P.start,L=P.count;for(let G=D,N=D+L;G<N;G+=3)u(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new I,x=new I,E=new I,b=new I;function A(_){E.fromBufferAttribute(r,_),b.copy(E);const C=a[_];S.copy(C),S.sub(E.multiplyScalar(E.dot(C))).normalize(),x.crossVectors(b,C);const D=x.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,D)}for(let _=0,C=g.length;_<C;++_){const P=g[_],D=P.start,L=P.count;for(let G=D,N=D+L;G<N;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,f=new I,h=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let m=0,v=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let u=0;u<f;u++)d[v++]=c[m++]}return new Ri(d,f,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nd=new I,gb=new I,vb=new Fe;class pr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nd.subVectors(i,n).cross(gb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(nd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vb.getNormalMatrix(e),r=this.coplanarPoint(nd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let xb=0;class cs extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Aa(),this.name="",this.type="Material",this.blending=qo,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=s_,this.blendDst=o_,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fu,this.stencilZFail=Fu,this.stencilZPass=Fu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new pr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new I,id=new I,ol=new I,al=new I;class Mp{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){id.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),al.copy(this.origin).sub(id);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ol),a=al.dot(this.direction),l=-al.dot(ol),c=al.lengthSq(),f=Math.abs(1-o*o);let h,d,m,v;if(f>0)if(h=o*l-a,d=o*a-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const y=1/f;h*=y,d*=y,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(id).addScaledVector(ol,d),m}intersectSphere(e,n){if(e.radius<0)return null;ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,h=e.x-o.x,d=e.y-o.y,m=e.z-o.z,v=n.x-o.x,y=n.y-o.y,p=n.z-o.z,u=i.x-o.x,g=i.y-o.y,S=i.z-o.z,x=Math.abs(l),E=Math.abs(c),b=Math.abs(f);let A,_,C,P,D,L,G,N,z,K,Y,V;if(x>=E&&x>=b?(C=l,L=h,z=v,V=u,l>=0?(A=c,_=f,P=d,D=m,G=y,N=p,K=g,Y=S):(A=f,_=c,P=m,D=d,G=p,N=y,K=S,Y=g)):E>=b?(C=c,L=d,z=y,V=g,c>=0?(A=f,_=l,P=m,D=h,G=p,N=v,K=S,Y=u):(A=l,_=f,P=h,D=m,G=v,N=p,K=u,Y=S)):(C=f,L=m,z=p,V=S,f>=0?(A=l,_=c,P=h,D=d,G=v,N=y,K=u,Y=g):(A=c,_=l,P=d,D=h,G=y,N=v,K=g,Y=u)),C===0)return null;const B=A/C,j=_/C,Z=1/C,ce=P-B*L,ve=D-j*L,je=G-B*z,ze=N-j*z,ke=K-B*V,Q=Y-j*V,ie=ke*ze-Q*je,ye=ce*Q-ve*ke,Ie=je*ve-ze*ce;if(r){if(ie<0||ye<0||Ie<0)return null}else if((ie<0||ye<0||Ie<0)&&(ie>0||ye>0||Ie>0))return null;const _e=ie+ye+Ie;if(_e===0)return null;const Ve=Z*(ie*L+ye*z+Ie*V);return(_e>0?Ve<0:Ve>0)?null:this.at(Ve/_e,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.combine=a_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ng=new bt,kr=new Mp,ll=new Ra,Lg=new I,cl=new I,ul=new I,dl=new I,rd=new I,fl=new I,Dg=new I,hl=new I;class Xe extends $t{constructor(e=new Gt,n=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(rd.fromBufferAttribute(h,e),o?fl.addScaledVector(rd,f):fl.addScaledVector(rd.sub(n),f))}n.add(fl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(ll.containsPoint(kr.origin)===!1&&(kr.intersectSphere(ll,Lg)===null||kr.origin.distanceToSquared(Lg)>(e.far-e.near)**2))&&(Ng.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Ng),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const p=d[v],u=o[p.materialIndex],g=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=g,E=S;x<E;x+=3){const b=a.getX(x),A=a.getX(x+1),_=a.getX(x+2);r=pl(this,u,e,i,c,f,h,b,A,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=v,u=y;p<u;p+=3){const g=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);r=pl(this,o,e,i,c,f,h,g,S,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const p=d[v],u=o[p.materialIndex],g=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=g,E=S;x<E;x+=3){const b=x,A=x+1,_=x+2;r=pl(this,u,e,i,c,f,h,b,A,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=v,u=y;p<u;p+=3){const g=p,S=p+1,x=p+2;r=pl(this,o,e,i,c,f,h,g,S,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function _b(t,e,n,i,r,s,o,a){let l;if(e.side===Rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ns,a),l===null)return null;hl.copy(a),hl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(hl);return c<n.near||c>n.far?null:{distance:c,point:hl.clone(),object:t}}function pl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,cl),t.getVertexPosition(l,ul),t.getVertexPosition(c,dl);const f=_b(t,e,n,i,cl,ul,dl,Dg);if(f){const h=new I;li.getBarycoord(Dg,cl,ul,dl,h),r&&(f.uv=li.getInterpolatedAttribute(r,a,l,c,h,new Le)),s&&(f.uv1=li.getInterpolatedAttribute(s,a,l,c,h,new Le)),o&&(f.normal=li.getInterpolatedAttribute(o,a,l,c,h,new I),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};li.getNormal(cl,ul,dl,d.normal),f.face=d,f.barycoord=h}return f}class yb extends hn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Jt,f=Jt,h,d){super(null,o,a,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Br=new Ra,Sb=new Le(.5,.5),ml=new I;class wp{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,o=new pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],m=s[7],v=s[8],y=s[9],p=s[10],u=s[11],g=s[12],S=s[13],x=s[14],E=s[15];if(r[0].setComponents(c-o,m-f,u-v,E-g).normalize(),r[1].setComponents(c+o,m+f,u+v,E+g).normalize(),r[2].setComponents(c+a,m+h,u+y,E+S).normalize(),r[3].setComponents(c-a,m-h,u-y,E-S).normalize(),i)r[4].setComponents(l,d,p,x).normalize(),r[5].setComponents(c-l,m-d,u-p,E-x).normalize();else if(r[4].setComponents(c-l,m-d,u-p,E-x).normalize(),n===Ei)r[5].setComponents(c+l,m+d,u+p,E+x).normalize();else if(n===xa)r[5].setComponents(l,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);const n=Sb.distanceTo(e.center);return Br.radius=.7071067811865476+n,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ml.x=r.normal.x>0?e.max.x:e.min.x,ml.y=r.normal.y>0?e.max.y:e.min.y,ml.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C_ extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new I,Ac=new I,Ig=new bt,No=new Mp,gl=new Ra,sd=new I,Ug=new I;class Mb extends $t{constructor(e=new Gt,n=new C_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Tc.fromBufferAttribute(n,r-1),Ac.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Tc.distanceTo(Ac);e.setAttribute("lineDistance",new st(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),gl.radius+=s,e.ray.intersectsSphere(gl)===!1)return;Ig.copy(r).invert(),No.copy(e.ray).applyMatrix4(Ig);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let y=m,p=v-1;y<p;y+=c){const u=f.getX(y),g=f.getX(y+1),S=vl(this,e,No,l,u,g,y);S&&n.push(S)}if(this.isLineLoop){const y=f.getX(v-1),p=f.getX(m),u=vl(this,e,No,l,y,p,v-1);u&&n.push(u)}}else{const m=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let y=m,p=v-1;y<p;y+=c){const u=vl(this,e,No,l,y,y+1,y);u&&n.push(u)}if(this.isLineLoop){const y=vl(this,e,No,l,v-1,m,v-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Tc.fromBufferAttribute(a,r),Ac.fromBufferAttribute(a,s),n.distanceSqToSegment(Tc,Ac,sd,Ug)>i)return;sd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(sd);if(!(c<e.near||c>e.far))return{distance:c,point:Ug.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Fg=new I,Og=new I;class wb extends Mb{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Fg.fromBufferAttribute(n,r),Og.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Fg.distanceTo(Og);e.setAttribute("lineDistance",new st(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class R_ extends cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kg=new bt,sh=new Mp,xl=new Ra,_l=new I;class Eb extends $t{constructor(e=new Gt,n=new R_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(r),xl.radius+=s,e.ray.intersectsSphere(xl)===!1)return;kg.copy(r).invert(),sh.copy(e.ray).applyMatrix4(kg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=d,y=m;v<y;v++){const p=c.getX(v);_l.fromBufferAttribute(h,p),Bg(_l,p,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=d,y=m;v<y;v++)_l.fromBufferAttribute(h,v),Bg(_l,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bg(t,e,n,i,r,s,o){const a=sh.distanceSqToPoint(t);if(a<n){const l=new I;sh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class P_ extends hn{constructor(e=[],n=is,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N_ extends hn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _a extends hn{constructor(e,n,i=Pi,r,s,o,a=Jt,l=Jt,c,f=Ki,h=1){if(f!==Ki&&f!==Yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class bb extends _a{constructor(e,n=Pi,i=is,r,s,o=Jt,a=Jt,l,c=Ki){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class L_ extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zt extends Gt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(h,2));function v(y,p,u,g,S,x,E,b,A,_,C){const P=x/A,D=E/_,L=x/2,G=E/2,N=b/2,z=A+1,K=_+1;let Y=0,V=0;const B=new I;for(let j=0;j<K;j++){const Z=j*D-G;for(let ce=0;ce<z;ce++){const ve=ce*P-L;B[y]=ve*g,B[p]=Z*S,B[u]=N,c.push(B.x,B.y,B.z),B[y]=0,B[p]=0,B[u]=b>0?1:-1,f.push(B.x,B.y,B.z),h.push(ce/A),h.push(1-j/_),Y+=1}}for(let j=0;j<_;j++)for(let Z=0;Z<A;Z++){const ce=d+Z+z*j,ve=d+Z+z*(j+1),je=d+(Z+1)+z*(j+1),ze=d+(Z+1)+z*j;l.push(ce,ve,ze),l.push(ve,je,ze),V+=6}a.addGroup(m,V,C),m+=V,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cc extends Gt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],m=[];let v=0;const y=[],p=i/2;let u=0;g(),o===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(f),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(m,2));function g(){const x=new I,E=new I;let b=0;const A=(n-e)/i;for(let _=0;_<=s;_++){const C=[],P=_/s,D=P*(n-e)+e;for(let L=0;L<=r;L++){const G=L/r,N=G*l+a,z=Math.sin(N),K=Math.cos(N);E.x=D*z,E.y=-P*i+p,E.z=D*K,h.push(E.x,E.y,E.z),x.set(z,A,K).normalize(),d.push(x.x,x.y,x.z),m.push(G,1-P),C.push(v++)}y.push(C)}for(let _=0;_<r;_++)for(let C=0;C<s;C++){const P=y[C][_],D=y[C+1][_],L=y[C+1][_+1],G=y[C][_+1];(e>0||C!==0)&&(f.push(P,D,G),b+=3),(n>0||C!==s-1)&&(f.push(D,L,G),b+=3)}c.addGroup(u,b,0),u+=b}function S(x){const E=v,b=new Le,A=new I;let _=0;const C=x===!0?e:n,P=x===!0?1:-1;for(let L=1;L<=r;L++)h.push(0,p*P,0),d.push(0,P,0),m.push(.5,.5),v++;const D=v;for(let L=0;L<=r;L++){const N=L/r*l+a,z=Math.cos(N),K=Math.sin(N);A.x=C*K,A.y=p*P,A.z=C*z,h.push(A.x,A.y,A.z),d.push(0,P,0),b.x=z*.5+.5,b.y=K*.5*P+.5,m.push(b.x,b.y),v++}for(let L=0;L<r;L++){const G=E+L,N=D+L;x===!0?f.push(N,N+1,G):f.push(N+1,N,G),_+=3}c.addGroup(u,_,x===!0?1:2),u+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ep extends Gt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(s.slice(),3)),this.setAttribute("uv",new st(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const S=new I,x=new I,E=new I;for(let b=0;b<n.length;b+=3)m(n[b+0],S),m(n[b+1],x),m(n[b+2],E),l(S,x,E,g)}function l(g,S,x,E){const b=E+1,A=[];for(let _=0;_<=b;_++){A[_]=[];const C=g.clone().lerp(x,_/b),P=S.clone().lerp(x,_/b),D=b-_;for(let L=0;L<=D;L++)L===0&&_===b?A[_][L]=C:A[_][L]=C.clone().lerp(P,L/D)}for(let _=0;_<b;_++)for(let C=0;C<2*(b-_)-1;C++){const P=Math.floor(C/2);C%2===0?(d(A[_][P+1]),d(A[_+1][P]),d(A[_][P])):(d(A[_][P+1]),d(A[_+1][P+1]),d(A[_+1][P]))}}function c(g){const S=new I;for(let x=0;x<s.length;x+=3)S.x=s[x+0],S.y=s[x+1],S.z=s[x+2],S.normalize().multiplyScalar(g),s[x+0]=S.x,s[x+1]=S.y,s[x+2]=S.z}function f(){const g=new I;for(let S=0;S<s.length;S+=3){g.x=s[S+0],g.y=s[S+1],g.z=s[S+2];const x=p(g)/2/Math.PI+.5,E=u(g)/Math.PI+.5;o.push(x,1-E)}v(),h()}function h(){for(let g=0;g<o.length;g+=6){const S=o[g+0],x=o[g+2],E=o[g+4],b=Math.max(S,x,E),A=Math.min(S,x,E);b>.9&&A<.1&&(S<.2&&(o[g+0]+=1),x<.2&&(o[g+2]+=1),E<.2&&(o[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function m(g,S){const x=g*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function v(){const g=new I,S=new I,x=new I,E=new I,b=new Le,A=new Le,_=new Le;for(let C=0,P=0;C<s.length;C+=9,P+=6){g.set(s[C+0],s[C+1],s[C+2]),S.set(s[C+3],s[C+4],s[C+5]),x.set(s[C+6],s[C+7],s[C+8]),b.set(o[P+0],o[P+1]),A.set(o[P+2],o[P+3]),_.set(o[P+4],o[P+5]),E.copy(g).add(S).add(x).divideScalar(3);const D=p(E);y(b,P+0,g,D),y(A,P+2,S,D),y(_,P+4,x,D)}}function y(g,S,x,E){E<0&&g.x===1&&(o[S]=g.x-1),x.x===0&&x.z===0&&(o[S]=E/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ep(e.vertices,e.indices,e.radius,e.detail)}}class bp extends Ep{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new bp(e.radius,e.detail)}}class _i extends Gt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,m=[],v=[],y=[],p=[];for(let u=0;u<f;u++){const g=u*d-o;for(let S=0;S<c;S++){const x=S*h-s;v.push(x,-g,0),y.push(0,0,1),p.push(S/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const S=g+c*u,x=g+c*(u+1),E=g+1+c*(u+1),b=g+1+c*u;m.push(S,x,b),m.push(x,E,b)}this.setIndex(m),this.setAttribute("position",new st(v,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tp extends Gt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let h=e;const d=(n-e)/r,m=new I,v=new Le;for(let y=0;y<=r;y++){for(let p=0;p<=i;p++){const u=s+p/i*o;m.x=h*Math.cos(u),m.y=h*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/n+1)/2,v.y=(m.y/n+1)/2,f.push(v.x,v.y)}h+=d}for(let y=0;y<r;y++){const p=y*(i+1);for(let u=0;u<i;u++){const g=u+p,S=g,x=g+i+1,E=g+i+2,b=g+1;a.push(S,x,b),a.push(x,E,b)}}this.setIndex(a),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Rc extends Gt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new I,d=new I,m=[],v=[],y=[],p=[];for(let u=0;u<=i;u++){const g=[],S=u/i,x=o+S*a,E=e*Math.cos(x),b=Math.sqrt(e*e-E*E);let A=0;u===0&&o===0?A=.5/n:u===i&&l===Math.PI&&(A=-.5/n);for(let _=0;_<=n;_++){const C=_/n,P=r+C*s;h.x=-b*Math.cos(P),h.y=E,h.z=b*Math.sin(P),v.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),p.push(C+A,1-S),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const S=f[u][g+1],x=f[u][g],E=f[u+1][g],b=f[u+1][g+1];(u!==0||o>0)&&m.push(S,x,b),(u!==i-1||l<Math.PI)&&m.push(x,E,b)}this.setIndex(m),this.setAttribute("position",new st(v,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ap extends Gt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],h=[],d=new I,m=new I,v=new I;for(let y=0;y<=i;y++){const p=o+y/i*a;for(let u=0;u<=r;u++){const g=u/r*s;m.x=(e+n*Math.cos(p))*Math.cos(g),m.y=(e+n*Math.cos(p))*Math.sin(g),m.z=n*Math.sin(p),c.push(m.x,m.y,m.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),v.subVectors(m,d).normalize(),f.push(v.x,v.y,v.z),h.push(u/r),h.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=r;p++){const u=(r+1)*y+p-1,g=(r+1)*(y-1)+p-1,S=(r+1)*(y-1)+p,x=(r+1)*y+p;l.push(u,g,x),l.push(g,S,x)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ap(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function so(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(zg(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(zg(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=so(t[n]);for(const r in i)e[r]=i[r]}return e}function zg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Tb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function D_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Pc={clone:so,merge:gn};var Ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ab,this.fragmentShader=Cb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=Tb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Oe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Le().fromArray(r.value);break;case"v3":this.uniforms[i].value=new I().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Rb extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class In extends cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pb extends In{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nb extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lb extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cp extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const od=new bt,Vg=new I,Hg=new I;class I_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wp,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Vg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vg),Hg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Hg),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){od.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(od,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===xa||e.reversedDepth?n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),n.multiply(od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yl=new I,Sl=new fo,gi=new I;class U_ extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yl,Sl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Sl,gi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(yl,Sl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Sl,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new I,Gg=new Le,Wg=new Le;class On extends U_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rh*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,Gg,Wg),n.subVectors(Wg,Gg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ou*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Db extends I_{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0}}class ad extends Cp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Db}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class tu extends U_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ib extends I_{constructor(){super(new tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ub extends Cp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Ib}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Fb extends Cp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Es=-90,bs=1;class Ob extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(Es,bs,e,n);r.layers=this.layers,this.add(r);const s=new On(Es,bs,e,n);s.layers=this.layers,this.add(s);const o=new On(Es,bs,e,n);o.layers=this.layers,this.add(o);const a=new On(Es,bs,e,n);a.layers=this.layers,this.add(a);const l=new On(Es,bs,e,n);l.layers=this.layers,this.add(l);const c=new On(Es,bs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class kb extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bb{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=zb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function zb(){this._document.hidden===!1&&this.reset()}class Vb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const kp=class kp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};kp.prototype.isMatrix2=!0;let Xg=kp;class Hb extends wb{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Gt;r.setAttribute("position",new st(n,3)),r.setAttribute("color",new st(i,3));const s=new C_({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new Oe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function jg(t,e,n,i){const r=Gb(i);switch(n){case __:return t*e;case S_:return t*e/r.components*r.byteLength;case mp:return t*e/r.components*r.byteLength;case rs:return t*e*2/r.components*r.byteLength;case gp:return t*e*2/r.components*r.byteLength;case y_:return t*e*3/r.components*r.byteLength;case ci:return t*e*4/r.components*r.byteLength;case vp:return t*e*4/r.components*r.byteLength;case zl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cf:case Pf:return Math.max(t,16)*Math.max(e,8)/4;case Af:case Rf:return Math.max(t,8)*Math.max(e,8)/2;case Nf:case Lf:case If:case Uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Df:case Sc:case Ff:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Zf:case Qf:case Jf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case eh:case th:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Mc:case nh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Gb(t){switch(t){case kn:case m_:return{byteLength:1,components:1};case ga:case g_:case Pn:return{byteLength:2,components:1};case hp:case pp:return{byteLength:2,components:4};case Pi:case fp:case wi:return{byteLength:4,components:1};case v_:case x_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function F_(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Wb(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<h.length;m++){const v=h[d],y=h[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,h[d]=y)}h.length=d+1;for(let m=0,v=h.length;m<v;m++){const y=h[m];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jb=`#ifdef USE_ALPHAHASH
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
#endif`,Yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zb=`#ifdef USE_AOMAP
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
#endif`,Qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jb=`#ifdef USE_BATCHING
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
#endif`,eT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rT=`#ifdef USE_IRIDESCENCE
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
#endif`,sT=`#ifdef USE_BUMPMAP
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
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pT=`#define PI 3.141592653589793
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
} // validated`,mT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gT=`vec3 transformedNormal = objectNormal;
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
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ST="gl_FragColor = linearToOutputTexel( gl_FragColor );",MT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wT=`#ifdef USE_ENVMAP
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
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
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
#endif`,TT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
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
#endif`,CT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LT=`#ifdef USE_GRADIENTMAP
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
}`,DT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,OT=`#ifdef USE_ENVMAP
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
#endif`,kT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HT=`PhysicalMaterial material;
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
#endif`,GT=`uniform sampler2D dfgLUT;
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
}`,WT=`
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
#endif`,XT=`#if defined( RE_IndirectDiffuse )
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
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tA=`#if defined( USE_POINTS_UV )
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
#endif`,nA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aA=`#ifdef USE_MORPHTARGETS
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
#endif`,lA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pA=`#ifdef USE_NORMALMAP
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
#endif`,mA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_A=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PA=`float getShadowMask() {
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
}`,NA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LA=`#ifdef USE_SKINNING
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
#endif`,DA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IA=`#ifdef USE_SKINNING
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
#endif`,UA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BA=`#ifdef USE_TRANSMISSION
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
#endif`,zA=`#ifdef USE_TRANSMISSION
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
#endif`,VA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jA=`uniform sampler2D t2D;
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
}`,YA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`#include <common>
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
}`,QA=`#if DEPTH_PACKING == 3200
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
}`,JA=`#define DISTANCE
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
}`,eC=`#define DISTANCE
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
}`,tC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iC=`uniform float scale;
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
}`,rC=`uniform vec3 diffuse;
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
}`,sC=`#include <common>
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
}`,oC=`uniform vec3 diffuse;
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
}`,aC=`#define LAMBERT
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
}`,lC=`#define LAMBERT
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
}`,cC=`#define MATCAP
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
}`,uC=`#define MATCAP
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
}`,dC=`#define NORMAL
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
}`,fC=`#define NORMAL
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
}`,hC=`#define PHONG
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
}`,pC=`#define PHONG
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
}`,mC=`#define STANDARD
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
}`,gC=`#define STANDARD
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
}`,vC=`#define TOON
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
}`,xC=`#define TOON
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
}`,_C=`uniform float size;
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
}`,yC=`uniform vec3 diffuse;
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
}`,SC=`#include <common>
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
}`,MC=`uniform vec3 color;
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
}`,wC=`uniform float rotation;
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
}`,EC=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Xb,alphahash_pars_fragment:jb,alphamap_fragment:Yb,alphamap_pars_fragment:$b,alphatest_fragment:qb,alphatest_pars_fragment:Kb,aomap_fragment:Zb,aomap_pars_fragment:Qb,batching_pars_vertex:Jb,batching_vertex:eT,begin_vertex:tT,beginnormal_vertex:nT,bsdfs:iT,iridescence_fragment:rT,bumpmap_pars_fragment:sT,clipping_planes_fragment:oT,clipping_planes_pars_fragment:aT,clipping_planes_pars_vertex:lT,clipping_planes_vertex:cT,color_fragment:uT,color_pars_fragment:dT,color_pars_vertex:fT,color_vertex:hT,common:pT,cube_uv_reflection_fragment:mT,defaultnormal_vertex:gT,displacementmap_pars_vertex:vT,displacementmap_vertex:xT,emissivemap_fragment:_T,emissivemap_pars_fragment:yT,colorspace_fragment:ST,colorspace_pars_fragment:MT,envmap_fragment:wT,envmap_common_pars_fragment:ET,envmap_pars_fragment:bT,envmap_pars_vertex:TT,envmap_physical_pars_fragment:OT,envmap_vertex:AT,fog_vertex:CT,fog_pars_vertex:RT,fog_fragment:PT,fog_pars_fragment:NT,gradientmap_pars_fragment:LT,lightmap_pars_fragment:DT,lights_lambert_fragment:IT,lights_lambert_pars_fragment:UT,lights_pars_begin:FT,lights_toon_fragment:kT,lights_toon_pars_fragment:BT,lights_phong_fragment:zT,lights_phong_pars_fragment:VT,lights_physical_fragment:HT,lights_physical_pars_fragment:GT,lights_fragment_begin:WT,lights_fragment_maps:XT,lights_fragment_end:jT,lightprobes_pars_fragment:YT,logdepthbuf_fragment:$T,logdepthbuf_pars_fragment:qT,logdepthbuf_pars_vertex:KT,logdepthbuf_vertex:ZT,map_fragment:QT,map_pars_fragment:JT,map_particle_fragment:eA,map_particle_pars_fragment:tA,metalnessmap_fragment:nA,metalnessmap_pars_fragment:iA,morphinstance_vertex:rA,morphcolor_vertex:sA,morphnormal_vertex:oA,morphtarget_pars_vertex:aA,morphtarget_vertex:lA,normal_fragment_begin:cA,normal_fragment_maps:uA,normal_pars_fragment:dA,normal_pars_vertex:fA,normal_vertex:hA,normalmap_pars_fragment:pA,clearcoat_normal_fragment_begin:mA,clearcoat_normal_fragment_maps:gA,clearcoat_pars_fragment:vA,iridescence_pars_fragment:xA,opaque_fragment:_A,packing:yA,premultiplied_alpha_fragment:SA,project_vertex:MA,dithering_fragment:wA,dithering_pars_fragment:EA,roughnessmap_fragment:bA,roughnessmap_pars_fragment:TA,shadowmap_pars_fragment:AA,shadowmap_pars_vertex:CA,shadowmap_vertex:RA,shadowmask_pars_fragment:PA,skinbase_vertex:NA,skinning_pars_vertex:LA,skinning_vertex:DA,skinnormal_vertex:IA,specularmap_fragment:UA,specularmap_pars_fragment:FA,tonemapping_fragment:OA,tonemapping_pars_fragment:kA,transmission_fragment:BA,transmission_pars_fragment:zA,uv_pars_fragment:VA,uv_pars_vertex:HA,uv_vertex:GA,worldpos_vertex:WA,background_vert:XA,background_frag:jA,backgroundCube_vert:YA,backgroundCube_frag:$A,cube_vert:qA,cube_frag:KA,depth_vert:ZA,depth_frag:QA,distance_vert:JA,distance_frag:eC,equirect_vert:tC,equirect_frag:nC,linedashed_vert:iC,linedashed_frag:rC,meshbasic_vert:sC,meshbasic_frag:oC,meshlambert_vert:aC,meshlambert_frag:lC,meshmatcap_vert:cC,meshmatcap_frag:uC,meshnormal_vert:dC,meshnormal_frag:fC,meshphong_vert:hC,meshphong_frag:pC,meshphysical_vert:mC,meshphysical_frag:gC,meshtoon_vert:vC,meshtoon_frag:xC,points_vert:_C,points_frag:yC,shadow_vert:SC,shadow_frag:MC,sprite_vert:wC,sprite_frag:EC},me={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},yi={basic:{uniforms:gn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:gn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:gn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:gn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:gn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:gn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:gn([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:gn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:gn([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:gn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:gn([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:gn([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:gn([me.lights,me.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};yi.physical={uniforms:gn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ml={r:0,b:0,g:0},bC=new bt,O_=new Fe;O_.set(-1,0,0,0,1,0,0,0,1);function TC(t,e,n,i,r,s){const o=new Oe(0);let a=r===!0?0:1,l,c,f=null,h=0,d=null;function m(g){let S=g.isScene===!0?g.background:null;if(S&&S.isTexture){const x=g.backgroundBlurriness>0;S=e.get(S,x)}return S}function v(g){let S=!1;const x=m(g);x===null?p(o,a):x&&x.isColor&&(p(x,1),S=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(g,S){const x=m(S);x&&(x.isCubeTexture||x.mapping===eu)?(c===void 0&&(c=new Xe(new Zt(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:so(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bC.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(O_),c.material.toneMapped=Ze.getTransfer(x.colorSpace)!==at,(f!==x||h!==x.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Xe(new _i(2,2),new fn({name:"BackgroundMaterial",uniforms:so(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=x,h=x.version,d=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function p(g,S){g.getRGB(Ml,D_(t)),n.buffers.color.setClear(Ml.r,Ml.g,Ml.b,S,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,S=1){o.set(g),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,p(o,a)},render:v,addToRenderList:y,dispose:u}}function AC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(D,L,G,N,z){let K=!1;const Y=h(D,N,G,L);s!==Y&&(s=Y,c(s.object)),K=m(D,N,G,z),K&&v(D,N,G,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(D,L,G,N),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function f(D){return t.deleteVertexArray(D)}function h(D,L,G,N){const z=N.wireframe===!0;let K=i[L.id];K===void 0&&(K={},i[L.id]=K);const Y=D.isInstancedMesh===!0?D.id:0;let V=K[Y];V===void 0&&(V={},K[Y]=V);let B=V[G.id];B===void 0&&(B={},V[G.id]=B);let j=B[z];return j===void 0&&(j=d(l()),B[z]=j),j}function d(D){const L=[],G=[],N=[];for(let z=0;z<n;z++)L[z]=0,G[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:N,object:D,attributes:{},index:null}}function m(D,L,G,N){const z=s.attributes,K=L.attributes;let Y=0;const V=G.getAttributes();for(const B in V)if(V[B].location>=0){const Z=z[B];let ce=K[B];if(ce===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;Y++}return s.attributesNum!==Y||s.index!==N}function v(D,L,G,N){const z={},K=L.attributes;let Y=0;const V=G.getAttributes();for(const B in V)if(V[B].location>=0){let Z=K[B];Z===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),z[B]=ce,Y++}s.attributes=z,s.attributesNum=Y,s.index=N}function y(){const D=s.newAttributes;for(let L=0,G=D.length;L<G;L++)D[L]=0}function p(D){u(D,0)}function u(D,L){const G=s.newAttributes,N=s.enabledAttributes,z=s.attributeDivisors;G[D]=1,N[D]===0&&(t.enableVertexAttribArray(D),N[D]=1),z[D]!==L&&(t.vertexAttribDivisor(D,L),z[D]=L)}function g(){const D=s.newAttributes,L=s.enabledAttributes;for(let G=0,N=L.length;G<N;G++)L[G]!==D[G]&&(t.disableVertexAttribArray(G),L[G]=0)}function S(D,L,G,N,z,K,Y){Y===!0?t.vertexAttribIPointer(D,L,G,z,K):t.vertexAttribPointer(D,L,G,N,z,K)}function x(D,L,G,N){y();const z=N.attributes,K=G.getAttributes(),Y=L.defaultAttributeValues;for(const V in K){const B=K[V];if(B.location>=0){let j=z[V];if(j===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const Z=j.normalized,ce=j.itemSize,ve=e.get(j);if(ve===void 0)continue;const je=ve.buffer,ze=ve.type,ke=ve.bytesPerElement,Q=ze===t.INT||ze===t.UNSIGNED_INT||j.gpuType===fp;if(j.isInterleavedBufferAttribute){const ie=j.data,ye=ie.stride,Ie=j.offset;if(ie.isInstancedInterleavedBuffer){for(let _e=0;_e<B.locationSize;_e++)u(B.location+_e,ie.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let _e=0;_e<B.locationSize;_e++)p(B.location+_e);t.bindBuffer(t.ARRAY_BUFFER,je);for(let _e=0;_e<B.locationSize;_e++)S(B.location+_e,ce/B.locationSize,ze,Z,ye*ke,(Ie+ce/B.locationSize*_e)*ke,Q)}else{if(j.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)u(B.location+ie,j.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ie=0;ie<B.locationSize;ie++)p(B.location+ie);t.bindBuffer(t.ARRAY_BUFFER,je);for(let ie=0;ie<B.locationSize;ie++)S(B.location+ie,ce/B.locationSize,ze,Z,ce*ke,ce/B.locationSize*ie*ke,Q)}}else if(Y!==void 0){const Z=Y[V];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(B.location,Z);break;case 3:t.vertexAttrib3fv(B.location,Z);break;case 4:t.vertexAttrib4fv(B.location,Z);break;default:t.vertexAttrib1fv(B.location,Z)}}}}g()}function E(){C();for(const D in i){const L=i[D];for(const G in L){const N=L[G];for(const z in N){const K=N[z];for(const Y in K)f(K[Y].object),delete K[Y];delete N[z]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const L=i[D.id];for(const G in L){const N=L[G];for(const z in N){const K=N[z];for(const Y in K)f(K[Y].object),delete K[Y];delete N[z]}}delete i[D.id]}function A(D){for(const L in i){const G=i[L];for(const N in G){const z=G[N];if(z[D.id]===void 0)continue;const K=z[D.id];for(const Y in K)f(K[Y].object),delete K[Y];delete z[D.id]}}}function _(D){for(const L in i){const G=i[L],N=D.isInstancedMesh===!0?D.id:0,z=G[N];if(z!==void 0){for(const K in z){const Y=z[K];for(const V in Y)f(Y[V].object),delete Y[V];delete z[K]}delete G[N],Object.keys(G).length===0&&delete i[L]}}}function C(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:p,disableUnusedAttributes:g}}function CC(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let m=0;m<f;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function RC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ci&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const _=A===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==kn&&A!==wi&&!_&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(De("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:x,maxSamples:E,samples:b}}function PC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new pr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!p)s?f(null):c();else{const g=s?0:i,S=g*4;let x=u.clippingState||null;l.value=x,x=f(v,d,S,m);for(let E=0;E!==S;++E)x[E]=n[E];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,v){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=l.value,v!==!0||p===null){const u=m+y*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let S=0,x=m;S!==y;++S,x+=4)o.copy(h[S]).applyMatrix4(g,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}const zs=4,NC=6,LC=20,DC=256,Lo=new tu,Yg=new Oe;let ld=null,cd=0,ud=0,dd=!1;const IC=new I,zr=new I;class $g{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=IC}=s;ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,cd,ud),this._renderer.xr.enabled=dd,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Pn,format:ci,colorSpace:wc,depthBuffer:!1},r=qg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=UC(s)),this._blurMaterial=OC(s,e,n),this._ggxMaterial=FC(s,e,n)}return r}_compileMaterial(e){const n=new Xe(new Gt,e);this._renderer.compile(n,Lo)}_sceneToCubeUV(e,n,i,r,s){const l=new On(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(Yg),h.toneMapping=Ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new Zt,new qt({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,p=y.material;let u=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,u=!0):(p.color.copy(Yg),u=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[S],s.y,s.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[S]));const E=this._cubeSize;Ts(r,x*E,S>2?E:0,E,E),h.setRenderTarget(r),u&&h.render(y,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===is||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ts(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Lo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=c*1.25,m=h*d,{_lodMax:v}=this,y=this._sizeLods[i],p=3*y*(i>v-zs?i-v+zs:0),u=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,Ts(s,p,u,3*y,2*y),r.setRenderTarget(s),r.render(a,Lo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Ts(e,p,u,3*y,2*y),r.setRenderTarget(e),r.render(a,Lo)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],h=3*f*(r>this._lodMax-zs?r-this._lodMax+zs:0),d=4*(this._cubeSize-f);Ts(n,h,d,3*f,2*f),o.setRenderTarget(n),o.render(l,Lo)}}function UC(t){const e=[],n=[];let i=t;const r=t-zs+1+NC;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,m=3,v=new Float32Array(m*d*h),y=new Float32Array(m*d*h);for(let u=0;u<h;u++){const g=u%3*2/3-1,S=u>2?0:-1,x=[g,S,0,g+2/3,S,0,g+2/3,S+1,0,g,S,0,g+2/3,S+1,0,g,S+1,0];v.set(x,m*d*u);for(let E=0;E<d;E++){const b=f[E*2]*2-1,A=f[E*2+1]*2-1;u===0?zr.set(1,A,b):u===1?zr.set(-b,1,-A):u===2?zr.set(-b,A,1):u===3?zr.set(-1,A,-b):u===4?zr.set(-b,-1,A):zr.set(b,A,-1),zr.toArray(y,(u*d+E)*m)}}const p=new Gt;p.setAttribute("position",new Ri(v,m)),p.setAttribute("outputDirection",new Ri(y,m)),n.push(new Xe(p,null)),i>zs&&i--}return{lodMeshes:n,sizeLods:e}}function qg(t,e,n){const i=new _n(t,e,n);return i.texture.mapping=eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ts(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function FC(t,e,n){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function OC(t,e,n){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:LC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Kg(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Zg(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function nu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class k_ extends _n{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new P_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zt(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Ai});s.uniforms.tEquirect.value=n;const o=new Xe(r,s),a=n.minFilter;return n.minFilter===jr&&(n.minFilter=en),new Ob(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function kC(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?o(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===Du||m===Iu)if(e.has(d)){const v=e.get(d).texture;return a(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const y=new k_(v.height);return y.fromEquirectangularTexture(t,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const m=d.mapping,v=m===Du||m===Iu,y=m===is||m===ro;if(v||y){let p=n.get(d);const u=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new $g(t)),p=v?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),p.texture;if(p!==void 0)return p.texture;{const g=d.image;return v&&g&&g.height>0||y&&g&&l(g)?(i===null&&(i=new $g(t)),p=v?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function a(d,m){return m===Du?d.mapping=is:m===Iu&&(d.mapping=ro),d}function l(d){let m=0;const v=6;for(let y=0;y<v;y++)d[y]!==void 0&&m++;return m===v}function c(d){const m=d.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function BC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&qs("WebGLRenderer: "+i+" extension not supported."),r}}}function zC(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,v=h.attributes.position;let y=0;if(v===void 0)return;if(m!==null){const g=m.array;y=m.version;for(let S=0,x=g.length;S<x;S+=3){const E=g[S+0],b=g[S+1],A=g[S+2];d.push(E,b,b,A,A,E)}}else{const g=v.array;y=v.version;for(let S=0,x=g.length/3-1;S<x;S+=3){const E=S+0,b=S+1,A=S+2;d.push(E,b,b,A,A,E)}}const p=new(v.count>=65535?A_:T_)(d,1);p.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function VC(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function c(h,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,h*o,m),n.update(d,i,m))}function f(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let y=0;for(let p=0;p<m;p++)y+=d[p];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function HC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function GC(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var m=P;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),y===!0&&(x=2),p===!0&&(x=3);let E=a.attributes.position.count*x,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*b*4*h),_=new w_(A,E,b,h);_.type=wi,_.needsUpdate=!0;const C=x*4;for(let D=0;D<h;D++){const L=u[D],G=g[D],N=S[D],z=E*b*4*D;for(let K=0;K<L.count;K++){const Y=K*C;v===!0&&(r.fromBufferAttribute(L,K),A[z+Y+0]=r.x,A[z+Y+1]=r.y,A[z+Y+2]=r.z,A[z+Y+3]=0),y===!0&&(r.fromBufferAttribute(G,K),A[z+Y+4]=r.x,A[z+Y+5]=r.y,A[z+Y+6]=r.z,A[z+Y+7]=0),p===!0&&(r.fromBufferAttribute(N,K),A[z+Y+8]=r.x,A[z+Y+9]=r.y,A[z+Y+10]=r.z,A[z+Y+11]=N.itemSize===4?r.w:1)}}d={count:h,texture:_,size:new Le(E,b)},i.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function WC(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const XC={[l_]:"LINEAR_TONE_MAPPING",[c_]:"REINHARD_TONE_MAPPING",[u_]:"CINEON_TONE_MAPPING",[dp]:"ACES_FILMIC_TONE_MAPPING",[f_]:"AGX_TONE_MAPPING",[h_]:"NEUTRAL_TONE_MAPPING",[d_]:"CUSTOM_TONE_MAPPING"};function jC(t,e,n,i,r,s){const o=new _n(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Gt;c.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new st([0,2,0,0,2,0],2));const f=new Rb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Xe(c,f),d=new tu(-1,1,1,-1,0,1);let m=null,v=null,y=!1,p,u=null,g=[],S=!1;this.setSize=function(x,E){o.setSize(x,E),a!==null&&a.setSize(x,E),l!==null&&l.setSize(x,E);for(let b=0;b<g.length;b++){const A=g[b];A.setSize&&A.setSize(x,E)}},this.setEffects=function(x){g=x,S=g.length>0&&g[0].isRenderPass===!0;const E=o.width,b=o.height;g.length>0&&a===null&&(a=new _n(E,b,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new _n(E,b,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<g.length;A++){const _=g[A];_.setSize&&_.setSize(E,b)}},this.begin=function(x,E){if(y||x.toneMapping===Ci&&g.length===0)return!1;if(u=E,E!==null){const b=E.width,A=E.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return S===!1&&x.setRenderTarget(o),p=x.toneMapping,x.toneMapping=Ci,!0},this.hasRenderPass=function(){return S},this.end=function(x,E){x.toneMapping=p,y=!0;let b=o,A=a;for(let _=0;_<g.length;_++){const C=g[_];C.enabled!==!1&&(C.render(x,A,b,E),C.needsSwap!==!1&&(b=A,A=A===a?l:a))}if(m!==x.outputColorSpace||v!==x.toneMapping){m=x.outputColorSpace,v=x.toneMapping,f.defines={},Ze.getTransfer(m)===at&&(f.defines.SRGB_TRANSFER="");const _=XC[v];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(u),x.render(h,d),u=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const B_=new hn,oh=new _a(1,1),z_=new w_,V_=new rb,H_=new P_,Qg=[],Jg=[],e0=new Float32Array(16),t0=new Float32Array(9),n0=new Float32Array(4);function ho(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qg[r];if(s===void 0&&(s=new Float32Array(r),Qg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function iu(t,e){let n=Jg[e];n===void 0&&(n=new Int32Array(e),Jg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function YC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function qC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function KC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function ZC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;n0.set(i),t.uniformMatrix2fv(this.addr,!1,n0),Ht(n,i)}}function QC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;t0.set(i),t.uniformMatrix3fv(this.addr,!1,t0),Ht(n,i)}}function JC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;e0.set(i),t.uniformMatrix4fv(this.addr,!1,e0),Ht(n,i)}}function eR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function rR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function oR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function aR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function lR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(oh.compareFunction=n.isReversedDepthBuffer()?_p:xp,s=oh):s=B_,n.setTexture2D(e||s,r)}function cR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||V_,r)}function uR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||H_,r)}function dR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||z_,r)}function fR(t){switch(t){case 5126:return YC;case 35664:return $C;case 35665:return qC;case 35666:return KC;case 35674:return ZC;case 35675:return QC;case 35676:return JC;case 5124:case 35670:return eR;case 35667:case 35671:return tR;case 35668:case 35672:return nR;case 35669:case 35673:return iR;case 5125:return rR;case 36294:return sR;case 36295:return oR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return lR;case 35679:case 36299:case 36307:return cR;case 35680:case 36300:case 36308:case 36293:return uR;case 36289:case 36303:case 36311:case 36292:return dR}}function hR(t,e){t.uniform1fv(this.addr,e)}function pR(t,e){const n=ho(e,this.size,2);t.uniform2fv(this.addr,n)}function mR(t,e){const n=ho(e,this.size,3);t.uniform3fv(this.addr,n)}function gR(t,e){const n=ho(e,this.size,4);t.uniform4fv(this.addr,n)}function vR(t,e){const n=ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xR(t,e){const n=ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _R(t,e){const n=ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yR(t,e){t.uniform1iv(this.addr,e)}function SR(t,e){t.uniform2iv(this.addr,e)}function MR(t,e){t.uniform3iv(this.addr,e)}function wR(t,e){t.uniform4iv(this.addr,e)}function ER(t,e){t.uniform1uiv(this.addr,e)}function bR(t,e){t.uniform2uiv(this.addr,e)}function TR(t,e){t.uniform3uiv(this.addr,e)}function AR(t,e){t.uniform4uiv(this.addr,e)}function CR(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=oh:o=B_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function RR(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||V_,s[o])}function PR(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||H_,s[o])}function NR(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||z_,s[o])}function LR(t){switch(t){case 5126:return hR;case 35664:return pR;case 35665:return mR;case 35666:return gR;case 35674:return vR;case 35675:return xR;case 35676:return _R;case 5124:case 35670:return yR;case 35667:case 35671:return SR;case 35668:case 35672:return MR;case 35669:case 35673:return wR;case 5125:return ER;case 36294:return bR;case 36295:return TR;case 36296:return AR;case 35678:case 36198:case 36298:case 36306:case 35682:return CR;case 35679:case 36299:case 36307:return RR;case 35680:case 36300:case 36308:case 36293:return PR;case 36289:case 36303:case 36311:case 36292:return NR}}class DR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fR(n.type)}}class IR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LR(n.type)}}class UR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function i0(t,e){t.seq.push(e),t.map[e.id]=e}function FR(t,e,n){const i=t.name,r=i.length;for(fd.lastIndex=0;;){const s=fd.exec(i),o=fd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){i0(n,c===void 0?new DR(a,t,e):new IR(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new UR(a),i0(n,h)),n=h}}}class Wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);FR(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function r0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const OR=37297;let kR=0;function BR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const s0=new Fe;function zR(t){Ze._getMatrix(s0,Ze.workingColorSpace,t);const e=`mat3( ${s0.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Ec:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function o0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+BR(t.getShaderSource(e),a)}else return s}function VR(t,e){const n=zR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const HR={[l_]:"Linear",[c_]:"Reinhard",[u_]:"Cineon",[dp]:"ACESFilmic",[f_]:"AgX",[h_]:"Neutral",[d_]:"Custom"};function GR(t,e){const n=HR[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wl=new I;function WR(){Ze.getLuminanceCoefficients(wl);const t=wl.x.toFixed(4),e=wl.y.toFixed(4),n=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function jR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function YR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Bo(t){return t!==""}function a0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $R=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(t){return t.replace($R,KR)}const qR=new Map;function KR(t,e){let n=We[e];if(n===void 0){const i=qR.get(e);if(i!==void 0)n=We[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ah(n)}const ZR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(t){return t.replace(ZR,QR)}function QR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function u0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const JR={[Bl]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function e2(t){return JR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const t2={[is]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[eu]:"ENVMAP_TYPE_CUBE_UV"};function n2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":t2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const i2={[ro]:"ENVMAP_MODE_REFRACTION"};function r2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":i2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const s2={[a_]:"ENVMAP_BLENDING_MULTIPLY",[UE]:"ENVMAP_BLENDING_MIX",[FE]:"ENVMAP_BLENDING_ADD"};function o2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":s2[t.combine]||"ENVMAP_BLENDING_NONE"}function a2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function l2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=e2(n),c=n2(n),f=r2(n),h=o2(n),d=a2(n),m=XR(n),v=jR(s),y=r.createProgram();let p,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Bo).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Bo).join(`
`),u.length>0&&(u+=`
`)):(p=[u0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),u=[u0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?We.tonemapping_pars_fragment:"",n.toneMapping!==Ci?GR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,VR("linearToOutputTexel",n.outputColorSpace),WR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bo).join(`
`)),o=ah(o),o=a0(o,n),o=l0(o,n),a=ah(a),a=a0(a,n),a=l0(a,n),o=c0(o),a=c0(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=g+p+o,x=g+u+a,E=r0(r,r.VERTEX_SHADER,S),b=r0(r,r.FRAGMENT_SHADER,x);r.attachShader(y,E),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(D){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(y)||"",G=r.getShaderInfoLog(E)||"",N=r.getShaderInfoLog(b)||"",z=L.trim(),K=G.trim(),Y=N.trim();let V=!0,B=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,E,b);else{const j=o0(r,E,"vertex"),Z=o0(r,b,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+j+`
`+Z)}else z!==""?De("WebGLProgram: Program Info Log:",z):(K===""||Y==="")&&(B=!1);B&&(D.diagnostics={runnable:V,programLog:z,vertexShader:{log:K,prefix:p},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(E),r.deleteShader(b),_=new Wl(r,y),C=YR(r,y)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,OR)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kR++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=b,this}let c2=0;class u2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new d2(e),n.set(e,i)),i}}class d2{constructor(e){this.id=c2++,this.code=e,this.usedTimes=0}}function f2(t){return t===rs||t===Sc||t===Mc}function h2(t,e,n,i,r,s){const o=new E_,a=new u2,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,C,P,D,L,G){const N=D.fog,z=L.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||K,Y),B=V&&V.mapping===eu?V.image.height:null,j=m[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ce=Z!==void 0?Z.length:0;let ve=0;z.morphAttributes.position!==void 0&&(ve=1),z.morphAttributes.normal!==void 0&&(ve=2),z.morphAttributes.color!==void 0&&(ve=3);let je,ze,ke,Q;if(j){const ut=yi[j];je=ut.vertexShader,ze=ut.fragmentShader}else{je=_.vertexShader,ze=_.fragmentShader;const ut=a.getVertexShaderStage(_),it=a.getFragmentShaderStage(_);a.update(_,ut,it),ke=ut.id,Q=it.id}const ie=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),Ie=L.isInstancedMesh===!0,_e=L.isBatchedMesh===!0,Ve=!!_.map,Lt=!!_.matcap,Ye=!!V,Qe=!!_.aoMap,ct=!!_.lightMap,He=!!_.bumpMap&&_.wireframe===!1,mt=!!_.normalMap,Ut=!!_.displacementMap,rn=!!_.emissiveMap,gt=!!_.metalnessMap,ft=!!_.roughnessMap,O=_.anisotropy>0,Wt=_.clearcoat>0,tt=_.dispersion>0,R=_.retroreflectivity>0,M=_.iridescence>0,H=_.sheen>0,$=_.transmission>0,J=O&&!!_.anisotropyMap,oe=Wt&&!!_.clearcoatMap,ae=Wt&&!!_.clearcoatNormalMap,ee=Wt&&!!_.clearcoatRoughnessMap,ne=M&&!!_.iridescenceMap,ue=M&&!!_.iridescenceThicknessMap,be=H&&!!_.sheenColorMap,he=H&&!!_.sheenRoughnessMap,de=!!_.specularMap,Ce=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Ue=$&&!!_.transmissionMap,F=$&&!!_.thicknessMap,fe=!!_.gradientMap,te=!!_.alphaMap,le=_.alphaTest>0,pe=!!_.alphaHash,re=!!_.extensions;let Re=Ci;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Re=t.toneMapping);const Ee={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:je,fragmentShader:ze,defines:_.defines,customVertexShaderID:ke,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:_e,batchingColor:_e&&L._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&L.instanceColor!==null,instancingMorph:Ie&&L.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:Lt,envMap:Ye,envMapMode:Ye&&V.mapping,envMapCubeUVHeight:B,aoMap:Qe,lightMap:ct,bumpMap:He,normalMap:mt,displacementMap:Ut,emissiveMap:rn,normalMapObjectSpace:mt&&_.normalMapType===BE,normalMapTangentSpace:mt&&_.normalMapType===ih,packedNormalMap:mt&&_.normalMapType===ih&&f2(_.normalMap.format),metalnessMap:gt,roughnessMap:ft,anisotropy:O,anisotropyMap:J,clearcoat:Wt,clearcoatMap:oe,clearcoatNormalMap:ae,clearcoatRoughnessMap:ee,dispersion:tt,retroreflection:R,iridescence:M,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:H,sheenColorMap:be,sheenRoughnessMap:he,specularMap:de,specularColorMap:Ce,specularIntensityMap:Ne,transmission:$,transmissionMap:Ue,thicknessMap:F,gradientMap:fe,opaque:_.transparent===!1&&_.blending===qo&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:le,alphaHash:pe,combine:_.combine,mapUv:Ve&&v(_.map.channel),aoMapUv:Qe&&v(_.aoMap.channel),lightMapUv:ct&&v(_.lightMap.channel),bumpMapUv:He&&v(_.bumpMap.channel),normalMapUv:mt&&v(_.normalMap.channel),displacementMapUv:Ut&&v(_.displacementMap.channel),emissiveMapUv:rn&&v(_.emissiveMap.channel),metalnessMapUv:gt&&v(_.metalnessMap.channel),roughnessMapUv:ft&&v(_.roughnessMap.channel),anisotropyMapUv:J&&v(_.anisotropyMap.channel),clearcoatMapUv:oe&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:he&&v(_.sheenRoughnessMap.channel),specularMapUv:de&&v(_.specularMap.channel),specularColorMapUv:Ce&&v(_.specularColorMap.channel),specularIntensityMapUv:Ne&&v(_.specularIntensityMap.channel),transmissionMapUv:Ue&&v(_.transmissionMap.channel),thicknessMapUv:F&&v(_.thicknessMap.channel),alphaMapUv:te&&v(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(mt||O),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Ve||te),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ve,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===at,decodeVideoTextureEmissive:rn&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===at,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Mi,flipSided:_.side===Rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:re&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&_.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function p(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)C.push(P),C.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(u(C,_),g(C,_),C.push(t.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function u(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function g(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){const C=m[_.type];let P;if(C){const D=yi[C];P=Pc.clone(D.uniforms)}else P=_.uniforms;return P}function x(_,C){let P=f.get(C);return P!==void 0?++P.usedTimes:(P=new l2(t,C,_,r),c.push(P),f.set(C,P)),P}function E(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function A(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:S,acquireProgram:x,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:A}}function p2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function m2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function d0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function f0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,v,y,p,u){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:m,material:v,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:p,group:u},t[e]=g):(g.id=d.id,g.object=d,g.geometry=m,g.material=v,g.materialVariant=o(d),g.groupOrder=y,g.renderOrder=d.renderOrder,g.z=p,g.group=u),e++,g}function l(d,m,v,y,p,u,g){g.reversedDepth===!0&&(p=-p);const S=a(d,m,v,y,p,u);v.transmission>0?i.push(S):v.transparent===!0?r.push(S):n.push(S)}function c(d,m,v,y,p,u){const g=a(d,m,v,y,p,u);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function f(d,m){n.length>1&&n.sort(d||m2),i.length>1&&i.sort(m||d0),r.length>1&&r.sort(m||d0)}function h(){for(let d=e,m=t.length;d<m;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function g2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new f0,t.set(i,[o])):r>=s.length?(o=new f0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function v2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new I,color:new Oe};break;case"SpotLight":n={position:new I,direction:new I,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function x2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _2=0;function y2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function S2(t){const e=new v2,n=x2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new bt,o=new bt;function a(c){let f=0,h=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let m=0,v=0,y=0,p=0,u=0,g=0,S=0,x=0,E=0,b=0,A=0,_=0,C=0,P=0;c.sort(y2);for(let L=0,G=c.length;L<G;L++){const N=c[L],z=N.color,K=N.intensity,Y=N.distance;let V=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===rs?V=N.shadow.map.texture:V=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=z.r*K,h+=z.g*K,d+=z.b*K;else if(N.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(N.sh.coefficients[B],K);P++}else if(N.isSunLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,Z=n.get(N);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[v]=Z,i.sunShadowMap[v]=V;const ce=j.getViewportCount();for(let ve=0;ve<ce;ve++)i.sunShadowMatrix[y+ve]=j.getMatrix(ve),i.sunShadowCascade[y+ve]=j._cascadeData[ve];y+=ce,v++}i.sun[m]=B,m++}else if(N.isDirectionalLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,Z=n.get(N);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=N.shadow.matrix,E++}i.directional[p]=B,p++}else if(N.isSpotLight){const B=e.get(N);B.position.setFromMatrixPosition(N.matrixWorld),B.color.copy(z).multiplyScalar(K),B.distance=Y,B.coneCos=Math.cos(N.angle),B.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),B.decay=N.decay,i.spot[g]=B;const j=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,j.updateMatrices(N),N.castShadow&&C++),i.spotLightMatrix[g]=j.matrix,N.castShadow){const Z=n.get(N);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,i.spotShadow[g]=Z,i.spotShadowMap[g]=V,A++}g++}else if(N.isRectAreaLight){const B=e.get(N);B.color.copy(z).multiplyScalar(K),B.halfWidth.set(N.width*.5,0,0),B.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=B,S++}else if(N.isPointLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),B.distance=N.distance,B.decay=N.decay,N.castShadow){const j=N.shadow,Z=n.get(N);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,i.pointShadow[u]=Z,i.pointShadowMap[u]=V,i.pointShadowMatrix[u]=N.shadow.matrix,b++}i.point[u]=B,u++}else if(N.isHemisphereLight){const B=e.get(N);B.skyColor.copy(N.color).multiplyScalar(K),B.groundColor.copy(N.groundColor).multiplyScalar(K),i.hemi[x]=B,x++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.sunLength!==m||D.directionalLength!==p||D.pointLength!==u||D.spotLength!==g||D.rectAreaLength!==S||D.hemiLength!==x||D.numSunShadows!==v||D.numDirectionalShadows!==E||D.numPointShadows!==b||D.numSpotShadows!==A||D.numSpotMaps!==_||D.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=p,i.spot.length=g,i.rectArea.length=S,i.point.length=u,i.hemi.length=x,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-C,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,D.sunLength=m,D.directionalLength=p,D.pointLength=u,D.spotLength=g,D.rectAreaLength=S,D.hemiLength=x,D.numSunShadows=v,D.numDirectionalShadows=E,D.numPointShadows=b,D.numSpotShadows=A,D.numSpotMaps=_,D.numLightProbes=P,i.version=_2++)}function l(c,f){let h=0,d=0,m=0,v=0,y=0,p=0;const u=f.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const x=c[g];if(x.isSunLight){const E=i.sun[h];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(u),h++}else if(x.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),d++}else if(x.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),v++}else if(x.isRectAreaLight){const E=i.rectArea[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(u),o.identity(),s.copy(x.matrixWorld),s.premultiply(u),o.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(u),m++}else if(x.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(u),p++}}}return{setup:a,setupView:l,state:i}}function h0(t){const e=new S2(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function f(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function M2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new h0(t),e.set(r,[a])):s>=o.length?(a=new h0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const w2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E2=`uniform sampler2D shadow_pass;
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
}`,b2=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],T2=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],p0=new bt,Do=new I,hd=new I;function A2(t,e,n){let i=new wp;const r=new Le,s=new Le,o=new Ct,a=new Nb,l=new Lb,c={},f=n.maxTextureSize,h={[ns]:Rn,[Rn]:ns,[Mi]:Mi},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:w2,fragmentShader:E2}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Gt;v.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Xe(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let u=this.type;this.render=function(b,A,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===gE&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bl);const C=t.getRenderTarget(),P=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),L=t.state;L.setBlending(Ai),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const G=u!==this.type;G&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=b.length;N<z;N++){const K=b[N],Y=K.shadow;if(Y===void 0){De("WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const V=Y.getFrameExtents();r.multiply(V),s.copy(Y.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/V.x),r.x=s.x*V.x,Y.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/V.y),r.y=s.y*V.y,Y.mapSize.y=s.y));const B=t.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=B,Y.map===null||G===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ko){if(K.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new _n(r.x,r.y,{format:rs,type:Pn,minFilter:en,magFilter:en,generateMipmaps:!1}),Y.map.texture.name=K.name+".shadowMap",Y.map.depthTexture=new _a(r.x,r.y,wi),Y.map.depthTexture.name=K.name+".shadowMapDepth",Y.map.depthTexture.format=Ki,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Jt,Y.map.depthTexture.magFilter=Jt}else K.isPointLight?(Y.map=new k_(r.x),Y.map.depthTexture=new bb(r.x,Pi)):(Y.map=new _n(r.x,r.y),Y.map.depthTexture=new _a(r.x,r.y,Pi)),Y.map.depthTexture.name=K.name+".shadowMap",Y.map.depthTexture.format=Ki,this.type===Bl?(Y.map.depthTexture.compareFunction=B?_p:xp,Y.map.depthTexture.minFilter=en,Y.map.depthTexture.magFilter=en):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Jt,Y.map.depthTexture.magFilter=Jt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==r.x||Y.map.height!==r.y)&&Y.map.setSize(r.x,r.y);const j=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();K.isPointLight!==!0&&Y.updateMatrices(K,_);for(let Z=0;Z<j;Z++){const ce=Y.getCamera(Z);if(K.isPointLight){const ve=Y.camera,je=Y.matrix,ze=K.distance||ve.far;ze!==ve.far&&(ve.far=ze,ve.updateProjectionMatrix()),Do.setFromMatrixPosition(K.matrixWorld),ve.position.copy(Do),hd.copy(ve.position),hd.add(b2[Z]),ve.up.copy(T2[Z]),ve.lookAt(hd),ve.updateMatrixWorld(),je.makeTranslation(-Do.x,-Do.y,-Do.z),p0.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(p0,ve.coordinateSystem,ve.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)t.setRenderTarget(Y.map,Z),t.clear();else{Z===0&&(t.setRenderTarget(Y.map),t.clear());const ve=Y.getViewport(Z);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),L.viewport(o)}i=Y.getFrustum(Z),x(A,_,ce,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ko&&g(Y,_),Y.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(C,P,D)};function g(b,A){const _=e.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new _n(r.x,r.y,{format:rs,type:Pn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,_,d,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,_,m,y,null)}function S(b,A,_,C){let P=null;const D=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)P=D;else if(P=_.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=P.uuid,G=A.uuid;let N=c[L];N===void 0&&(N={},c[L]=N);let z=N[G];z===void 0&&(z=P.clone(),N[G]=z,A.addEventListener("dispose",E)),P=z}if(P.visible=A.visible,P.wireframe=A.wireframe,C===ko?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:h[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const L=t.properties.get(P);L.light=_}return P}function x(b,A,_,C,P){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===ko)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const G=e.update(b),N=b.material;if(Array.isArray(N)){const z=G.groups;for(let K=0,Y=z.length;K<Y;K++){const V=z[K],B=N[V.materialIndex];if(B&&B.visible){const j=S(b,B,C,P);b.onBeforeShadow(t,b,A,_,G,j,V),t.renderBufferDirect(_,null,G,j,b,V),b.onAfterShadow(t,b,A,_,G,j,V)}}}else if(N.visible){const z=S(b,N,C,P);b.onBeforeShadow(t,b,A,_,G,z,null),t.renderBufferDirect(_,null,G,z,b,null),b.onAfterShadow(t,b,A,_,G,z,null)}}const L=b.children;for(let G=0,N=L.length;G<N;G++)x(L[G],A,_,C,P)}function E(b){b.target.removeEventListener("dispose",E);for(const _ in c){const C=c[_],P=b.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function C2(t,e){function n(){let F=!1;const fe=new Ct;let te=null;const le=new Ct(0,0,0,0);return{setMask:function(pe){te!==pe&&!F&&(t.colorMask(pe,pe,pe,pe),te=pe)},setLocked:function(pe){F=pe},setClear:function(pe,re,Re,Ee,ut){ut===!0&&(pe*=Ee,re*=Ee,Re*=Ee),fe.set(pe,re,Re,Ee),le.equals(fe)===!1&&(t.clearColor(pe,re,Re,Ee),le.copy(fe))},reset:function(){F=!1,te=null,le.set(-1,0,0,0)}}}function i(){let F=!1,fe=!1,te=null,le=null,pe=null;return{setReversed:function(re){if(fe!==re){const Re=e.get("EXT_clip_control");re?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),fe=re;const Ee=pe;pe=null,this.setClear(Ee)}},getReversed:function(){return fe},setTest:function(re){re?ie(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(re){te!==re&&!F&&(t.depthMask(re),te=re)},setFunc:function(re){if(fe&&(re=ZE[re]),le!==re){switch(re){case _f:t.depthFunc(t.NEVER);break;case yf:t.depthFunc(t.ALWAYS);break;case Sf:t.depthFunc(t.LESS);break;case pa:t.depthFunc(t.LEQUAL);break;case Mf:t.depthFunc(t.EQUAL);break;case wf:t.depthFunc(t.GEQUAL);break;case Ef:t.depthFunc(t.GREATER);break;case bf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=re}},setLocked:function(re){F=re},setClear:function(re){pe!==re&&(pe=re,fe&&(re=1-re),t.clearDepth(re))},reset:function(){F=!1,te=null,le=null,pe=null,fe=!1}}}function r(){let F=!1,fe=null,te=null,le=null,pe=null,re=null,Re=null,Ee=null,ut=null;return{setTest:function(it){F||(it?ie(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(it){fe!==it&&!F&&(t.stencilMask(it),fe=it)},setFunc:function(it,ot,Tt){(te!==it||le!==ot||pe!==Tt)&&(t.stencilFunc(it,ot,Tt),te=it,le=ot,pe=Tt)},setOp:function(it,ot,Tt){(re!==it||Re!==ot||Ee!==Tt)&&(t.stencilOp(it,ot,Tt),re=it,Re=ot,Ee=Tt)},setLocked:function(it){F=it},setClear:function(it){ut!==it&&(t.clearStencil(it),ut=it)},reset:function(){F=!1,fe=null,te=null,le=null,pe=null,re=null,Re=null,Ee=null,ut=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d={},m=new WeakMap,v=[],y=null,p=!1,u=null,g=null,S=null,x=null,E=null,b=null,A=null,_=new Oe(0,0,0),C=0,P=!1,D=null,L=null,G=null,N=null,z=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,V=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=V>=2);let j=null,Z={};const ce=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),je=new Ct().fromArray(ce),ze=new Ct().fromArray(ve);function ke(F,fe,te,le){const pe=new Uint8Array(4),re=t.createTexture();t.bindTexture(F,re),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<te;Re++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(fe+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return re}const Q={};Q[t.TEXTURE_2D]=ke(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=ke(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=ke(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=ke(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(t.DEPTH_TEST),o.setFunc(pa),He(!1),mt(pg),ie(t.CULL_FACE),Qe(Ai);function ie(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function ye(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function Ie(F,fe){return d[F]!==fe?(t.bindFramebuffer(F,fe),d[F]=fe,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=fe),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function _e(F,fe){let te=v,le=!1;if(F){te=m.get(fe),te===void 0&&(te=[],m.set(fe,te));const pe=F.textures;if(te.length!==pe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Re=pe.length;re<Re;re++)te[re]=t.COLOR_ATTACHMENT0+re;te.length=pe.length,le=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,le=!0);le&&t.drawBuffers(te)}function Ve(F){return y!==F?(t.useProgram(F),y=F,!0):!1}const Lt={[As]:t.FUNC_ADD,[xE]:t.FUNC_SUBTRACT,[_E]:t.FUNC_REVERSE_SUBTRACT};Lt[yE]=t.MIN,Lt[SE]=t.MAX;const Ye={[ME]:t.ZERO,[wE]:t.ONE,[EE]:t.SRC_COLOR,[s_]:t.SRC_ALPHA,[PE]:t.SRC_ALPHA_SATURATE,[CE]:t.DST_COLOR,[TE]:t.DST_ALPHA,[bE]:t.ONE_MINUS_SRC_COLOR,[o_]:t.ONE_MINUS_SRC_ALPHA,[RE]:t.ONE_MINUS_DST_COLOR,[AE]:t.ONE_MINUS_DST_ALPHA,[NE]:t.CONSTANT_COLOR,[LE]:t.ONE_MINUS_CONSTANT_COLOR,[DE]:t.CONSTANT_ALPHA,[IE]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(F,fe,te,le,pe,re,Re,Ee,ut,it){if(F===Ai){p===!0&&(ye(t.BLEND),p=!1);return}if(p===!1&&(ie(t.BLEND),p=!0),F!==vE){if(F!==u||it!==P){if((g!==As||E!==As)&&(t.blendEquation(t.FUNC_ADD),g=As,E=As),it)switch(F){case qo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xf:t.blendFunc(t.ONE,t.ONE);break;case mg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",F);break}else switch(F){case qo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case mg:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gg:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",F);break}S=null,x=null,b=null,A=null,_.set(0,0,0),C=0,u=F,P=it}return}pe=pe||fe,re=re||te,Re=Re||le,(fe!==g||pe!==E)&&(t.blendEquationSeparate(Lt[fe],Lt[pe]),g=fe,E=pe),(te!==S||le!==x||re!==b||Re!==A)&&(t.blendFuncSeparate(Ye[te],Ye[le],Ye[re],Ye[Re]),S=te,x=le,b=re,A=Re),(Ee.equals(_)===!1||ut!==C)&&(t.blendColor(Ee.r,Ee.g,Ee.b,ut),_.copy(Ee),C=ut),u=F,P=!1}function ct(F,fe){F.side===Mi?ye(t.CULL_FACE):ie(t.CULL_FACE);let te=F.side===Rn;fe&&(te=!te),He(te),F.blending===qo&&F.transparent===!1?Qe(Ai):Qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const le=F.stencilWrite;a.setTest(le),le&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),rn(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(F){D!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),D=F)}function mt(F){F!==pE?(ie(t.CULL_FACE),F!==L&&(F===pg?t.cullFace(t.BACK):F===mE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),L=F}function Ut(F){F!==G&&(Y&&t.lineWidth(F),G=F)}function rn(F,fe,te){F?(ie(t.POLYGON_OFFSET_FILL),(N!==fe||z!==te)&&(N=fe,z=te,o.getReversed()&&(fe=-fe),t.polygonOffset(fe,te))):ye(t.POLYGON_OFFSET_FILL)}function gt(F){F?ie(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function ft(F){F===void 0&&(F=t.TEXTURE0+K-1),j!==F&&(t.activeTexture(F),j=F)}function O(F,fe,te){te===void 0&&(j===null?te=t.TEXTURE0+K-1:te=j);let le=Z[te];le===void 0&&(le={type:void 0,texture:void 0},Z[te]=le),(le.type!==F||le.texture!==fe)&&(j!==te&&(t.activeTexture(te),j=te),t.bindTexture(F,fe||Q[F]),le.type=F,le.texture=fe)}function Wt(){const F=Z[j];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function M(){try{t.texSubImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function H(){try{t.texSubImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function oe(){try{t.texStorage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function ae(){try{t.texStorage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function ee(){try{t.texImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function ne(){try{t.texImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function ue(F){return h[F]!==void 0?h[F]:t.getParameter(F)}function be(F,fe){h[F]!==fe&&(t.pixelStorei(F,fe),h[F]=fe)}function he(F){je.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),je.copy(F))}function de(F){ze.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),ze.copy(F))}function Ce(F,fe){let te=c.get(fe);te===void 0&&(te=new WeakMap,c.set(fe,te));let le=te.get(F);le===void 0&&(le=t.getUniformBlockIndex(fe,F.name),te.set(F,le))}function Ne(F,fe){const le=c.get(fe).get(F);l.get(fe)!==le&&(t.uniformBlockBinding(fe,le,F.__bindingPointIndex),l.set(fe,le))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},j=null,Z={},d={},m=new WeakMap,v=[],y=null,p=!1,u=null,g=null,S=null,x=null,E=null,b=null,A=null,_=new Oe(0,0,0),C=0,P=!1,D=null,L=null,G=null,N=null,z=null,je.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:ye,bindFramebuffer:Ie,drawBuffers:_e,useProgram:Ve,setBlending:Qe,setMaterial:ct,setFlipSided:He,setCullFace:mt,setLineWidth:Ut,setPolygonOffset:rn,setScissorTest:gt,activeTexture:ft,bindTexture:O,unbindTexture:Wt,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:ee,texImage3D:ne,pixelStorei:be,getParameter:ue,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:oe,texStorage3D:ae,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:J,scissor:he,viewport:de,reset:Ue}}function R2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,f=new WeakMap,h=new Set;let d;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,M){return v?new OffscreenCanvas(R,M):bc("canvas")}function p(R,M,H){let $=1;const J=tt(R);if((J.width>H||J.height>H)&&($=H/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor($*J.width),ae=Math.floor($*J.height);d===void 0&&(d=y(oe,ae));const ee=M?y(oe,ae):d;return ee.width=oe,ee.height=ae,ee.getContext("2d").drawImage(R,0,0,oe,ae),De("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+oe+"x"+ae+")."),ee}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function u(R){return R.generateMipmaps}function g(R){t.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,M,H,$,J,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae;$&&(ae=e.get("EXT_texture_norm16"),ae||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=M;if(M===t.RED&&(H===t.FLOAT&&(ee=t.R32F),H===t.HALF_FLOAT&&(ee=t.R16F),H===t.UNSIGNED_BYTE&&(ee=t.R8),H===t.UNSIGNED_SHORT&&ae&&(ee=ae.R16_EXT),H===t.SHORT&&ae&&(ee=ae.R16_SNORM_EXT)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.R8UI),H===t.UNSIGNED_SHORT&&(ee=t.R16UI),H===t.UNSIGNED_INT&&(ee=t.R32UI),H===t.BYTE&&(ee=t.R8I),H===t.SHORT&&(ee=t.R16I),H===t.INT&&(ee=t.R32I)),M===t.RG&&(H===t.FLOAT&&(ee=t.RG32F),H===t.HALF_FLOAT&&(ee=t.RG16F),H===t.UNSIGNED_BYTE&&(ee=t.RG8),H===t.UNSIGNED_SHORT&&ae&&(ee=ae.RG16_EXT),H===t.SHORT&&ae&&(ee=ae.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RG8UI),H===t.UNSIGNED_SHORT&&(ee=t.RG16UI),H===t.UNSIGNED_INT&&(ee=t.RG32UI),H===t.BYTE&&(ee=t.RG8I),H===t.SHORT&&(ee=t.RG16I),H===t.INT&&(ee=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),H===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),H===t.UNSIGNED_INT&&(ee=t.RGB32UI),H===t.BYTE&&(ee=t.RGB8I),H===t.SHORT&&(ee=t.RGB16I),H===t.INT&&(ee=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),H===t.UNSIGNED_INT&&(ee=t.RGBA32UI),H===t.BYTE&&(ee=t.RGBA8I),H===t.SHORT&&(ee=t.RGBA16I),H===t.INT&&(ee=t.RGBA32I)),M===t.RGB&&(H===t.UNSIGNED_SHORT&&ae&&(ee=ae.RGB16_EXT),H===t.SHORT&&ae&&(ee=ae.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),M===t.RGBA){const ne=oe?Ec:Ze.getTransfer(J);H===t.FLOAT&&(ee=t.RGBA32F),H===t.HALF_FLOAT&&(ee=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ee=ne===at?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&ae&&(ee=ae.RGBA16_EXT),H===t.SHORT&&ae&&(ee=ae.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(R,M){let H;return R?M===null||M===Pi||M===va?H=t.DEPTH24_STENCIL8:M===wi?H=t.DEPTH32F_STENCIL8:M===ga&&(H=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===va?H=t.DEPTH_COMPONENT24:M===wi?H=t.DEPTH_COMPONENT32F:M===ga&&(H=t.DEPTH_COMPONENT16),H}function b(R,M){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&f.delete(M),M.isHTMLTexture&&h.delete(M)}function _(R){const M=R.target;M.removeEventListener("dispose",_),D(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const H=R.source,$=m.get(H);if($){const J=$[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(R),Object.keys($).length===0&&m.delete(H)}i.remove(R)}function P(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const H=R.source,$=m.get(H);delete $[M.__cacheKey],o.memory.textures--}function D(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let J=0;J<M.__webglFramebuffer[$].length;J++)t.deleteFramebuffer(M.__webglFramebuffer[$][J]);else t.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)t.deleteFramebuffer(M.__webglFramebuffer[$]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=R.textures;for(let $=0,J=H.length;$<J;$++){const oe=i.get(H[$]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(H[$])}i.remove(R)}let L=0;function G(){L=0}function N(){return L}function z(R){L=R}function K(){const R=L;return R>=r.maxTextures&&De("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function Y(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function V(R,M){const H=i.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const $=R.image;if($===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(H,R,M);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function B(R,M){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ye(H,R,M);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function j(R,M){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ye(H,R,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function Z(R,M){const H=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){Ie(H,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const ce={[ma]:t.REPEAT,[Gi]:t.CLAMP_TO_EDGE,[Tf]:t.MIRRORED_REPEAT},ve={[Jt]:t.NEAREST,[OE]:t.NEAREST_MIPMAP_NEAREST,[Qa]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[Uu]:t.LINEAR_MIPMAP_NEAREST,[jr]:t.LINEAR_MIPMAP_LINEAR},je={[VE]:t.NEVER,[jE]:t.ALWAYS,[HE]:t.LESS,[xp]:t.LEQUAL,[GE]:t.EQUAL,[_p]:t.GEQUAL,[WE]:t.GREATER,[XE]:t.NOTEQUAL};function ze(R,M){if(M.type===wi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===Uu||M.magFilter===Qa||M.magFilter===jr||M.minFilter===en||M.minFilter===Uu||M.minFilter===Qa||M.minFilter===jr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ce[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ce[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ce[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ve[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,je[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Jt||M.minFilter!==Qa&&M.minFilter!==jr||M.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ke(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const $=M.source;let J=m.get($);J===void 0&&(J={},m.set($,J));const oe=Y(M);if(oe!==R.__cacheKey){J[oe]===void 0&&(J[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[oe].usedTimes++;const ae=J[R.__cacheKey];ae!==void 0&&(J[R.__cacheKey].usedTimes--,ae.usedTimes===0&&P(M)),R.__cacheKey=oe,R.__webglTexture=J[oe].texture}return H}function Q(R,M,H){return Math.floor(Math.floor(R/H)/M)}function ie(R,M,H,$){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,H,$,M.data);else{oe.sort((be,he)=>be.start-he.start);let ae=0;for(let be=1;be<oe.length;be++){const he=oe[ae],de=oe[be],Ce=he.start+he.count,Ne=Q(de.start,M.width,4),Ue=Q(he.start,M.width,4);de.start<=Ce+1&&Ne===Ue&&Q(de.start+de.count-1,M.width,4)===Ne?he.count=Math.max(he.count,de.start+de.count-he.start):(++ae,oe[ae]=de)}oe.length=ae+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let be=0,he=oe.length;be<he;be++){const de=oe[be],Ce=Math.floor(de.start/4),Ne=Math.ceil(de.count/4),Ue=Ce%M.width,F=Math.floor(Ce/M.width),fe=Ne,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,Ue,F,fe,te,H,$,M.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function ye(R,M,H){let $=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=t.TEXTURE_3D);const J=ke(R,M),oe=M.source;n.bindTexture($,R.__webglTexture,t.TEXTURE0+H);const ae=i.get(oe);if(oe.version!==ae.__version||J===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const te=Ze.getPrimaries(Ze.workingColorSpace),le=M.colorSpace===vr?null:Ze.getPrimaries(M.colorSpace),pe=M.colorSpace===vr||te===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let ne=p(M.image,!1,r.maxTextureSize);ne=Wt(M,ne);const ue=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let he=x(M.internalFormat,ue,be,M.normalized,M.colorSpace,M.isVideoTexture);ze($,M);let de;const Ce=M.mipmaps,Ne=M.isVideoTexture!==!0,Ue=ae.__version===void 0||J===!0,F=oe.dataReady,fe=b(M,ne);if(M.isDepthTexture)he=E(M.format===Yr,M.type),Ue&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,he,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,he,ne.width,ne.height,0,ue,be,null));else if(M.isDataTexture)if(Ce.length>0){Ne&&Ue&&n.texStorage2D(t.TEXTURE_2D,fe,he,Ce[0].width,Ce[0].height);for(let te=0,le=Ce.length;te<le;te++)de=Ce[te],Ne?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,ue,be,de.data):n.texImage2D(t.TEXTURE_2D,te,he,de.width,de.height,0,ue,be,de.data);M.generateMipmaps=!1}else Ne?(Ue&&n.texStorage2D(t.TEXTURE_2D,fe,he,ne.width,ne.height),F&&ie(M,ne,ue,be)):n.texImage2D(t.TEXTURE_2D,0,he,ne.width,ne.height,0,ue,be,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,he,Ce[0].width,Ce[0].height,ne.depth);for(let te=0,le=Ce.length;te<le;te++)if(de=Ce[te],M.format!==ci)if(ue!==null)if(Ne){if(F)if(M.layerUpdates.size>0){const pe=jg(de.width,de.height,M.format,M.type);for(const re of M.layerUpdates){const Re=de.data.subarray(re*pe/de.data.BYTES_PER_ELEMENT,(re+1)*pe/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,re,de.width,de.height,1,ue,Re)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ne.depth,ue,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,he,de.width,de.height,ne.depth,0,de.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ne.depth,ue,be,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,he,de.width,de.height,ne.depth,0,ue,be,de.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ne&&Ue&&n.texStorage2D(t.TEXTURE_2D,fe,he,Ce[0].width,Ce[0].height);for(let te=0,le=Ce.length;te<le;te++)de=Ce[te],M.format!==ci?ue!==null?Ne?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,ue,de.data):n.compressedTexImage2D(t.TEXTURE_2D,te,he,de.width,de.height,0,de.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,ue,be,de.data):n.texImage2D(t.TEXTURE_2D,te,he,de.width,de.height,0,ue,be,de.data)}else if(M.isDataArrayTexture)if(Ne){if(Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,he,ne.width,ne.height,ne.depth),F)if(M.layerUpdates.size>0){const te=jg(ne.width,ne.height,M.format,M.type);for(const le of M.layerUpdates){const pe=ne.data.subarray(le*te/ne.data.BYTES_PER_ELEMENT,(le+1)*te/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,ne.width,ne.height,1,ue,be,pe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,be,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,ne.width,ne.height,ne.depth,0,ue,be,ne.data);else if(M.isData3DTexture)Ne?(Ue&&n.texStorage3D(t.TEXTURE_3D,fe,he,ne.width,ne.height,ne.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,be,ne.data)):n.texImage3D(t.TEXTURE_3D,0,he,ne.width,ne.height,ne.depth,0,ue,be,ne.data);else if(M.isFramebufferTexture){if(Ue)if(Ne)n.texStorage2D(t.TEXTURE_2D,fe,he,ne.width,ne.height);else{let te=ne.width,le=ne.height;for(let pe=0;pe<fe;pe++)n.texImage2D(t.TEXTURE_2D,pe,he,te,le,0,ue,be,null),te>>=1,le>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),h.add(M),te.onpaint=le=>{const pe=le.changedElements;for(const re of h)pe.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{const pe=t.RGBA,re=t.RGBA,Re=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,pe,re,Re,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ne&&Ue){const te=tt(Ce[0]);n.texStorage2D(t.TEXTURE_2D,fe,he,te.width,te.height)}for(let te=0,le=Ce.length;te<le;te++)de=Ce[te],Ne?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ue,be,de):n.texImage2D(t.TEXTURE_2D,te,he,ue,be,de);M.generateMipmaps=!1}else if(Ne){if(Ue){const te=tt(ne);n.texStorage2D(t.TEXTURE_2D,fe,he,te.width,te.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,be,ne)}else n.texImage2D(t.TEXTURE_2D,0,he,ue,be,ne);u(M)&&g($),ae.__version=oe.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ie(R,M,H){if(M.image.length!==6)return;const $=ke(R,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const oe=i.get(J);if(J.version!==oe.__version||$===!0){n.activeTexture(t.TEXTURE0+H);const ae=Ze.getPrimaries(Ze.workingColorSpace),ee=M.colorSpace===vr?null:Ze.getPrimaries(M.colorSpace),ne=M.colorSpace===vr||ae===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,he=[];for(let re=0;re<6;re++)!ue&&!be?he[re]=p(M.image[re],!0,r.maxCubemapSize):he[re]=be?M.image[re].image:M.image[re],he[re]=Wt(M,he[re]);const de=he[0],Ce=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type),Ue=x(M.internalFormat,Ce,Ne,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,fe=oe.__version===void 0||$===!0,te=J.dataReady;let le=b(M,de);ze(t.TEXTURE_CUBE_MAP,M);let pe;if(ue){F&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ue,de.width,de.height);for(let re=0;re<6;re++){pe=he[re].mipmaps;for(let Re=0;Re<pe.length;Re++){const Ee=pe[Re];M.format!==ci?Ce!==null?F?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,Ee.width,Ee.height,Ce,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,Ue,Ee.width,Ee.height,0,Ee.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,Ee.width,Ee.height,Ce,Ne,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,Ue,Ee.width,Ee.height,0,Ce,Ne,Ee.data)}}}else{if(pe=M.mipmaps,F&&fe){pe.length>0&&le++;const re=tt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ue,re.width,re.height)}for(let re=0;re<6;re++)if(be){F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,he[re].width,he[re].height,Ce,Ne,he[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ue,he[re].width,he[re].height,0,Ce,Ne,he[re].data);for(let Re=0;Re<pe.length;Re++){const ut=pe[Re].image[re].image;F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,ut.width,ut.height,Ce,Ne,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,Ue,ut.width,ut.height,0,Ce,Ne,ut.data)}}else{F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ce,Ne,he[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ue,Ce,Ne,he[re]);for(let Re=0;Re<pe.length;Re++){const Ee=pe[Re];F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,Ce,Ne,Ee.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,Ue,Ce,Ne,Ee.image[re])}}}u(M)&&g(t.TEXTURE_CUBE_MAP),oe.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function _e(R,M,H,$,J,oe){const ae=s.convert(H.format,H.colorSpace),ee=s.convert(H.type),ne=x(H.internalFormat,ae,ee,H.normalized,H.colorSpace),ue=i.get(M),be=i.get(H);if(be.__renderTarget=M,!ue.__hasExternalTextures){const he=Math.max(1,M.width>>oe),de=Math.max(1,M.height>>oe);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,oe,ne,he,de,M.depth,0,ae,ee,null):n.texImage2D(J,oe,ne,he,de,0,ae,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ft(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,J,be.__webglTexture,0,gt(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,J,be.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(R,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const $=M.depthTexture,J=$&&$.isDepthTexture?$.type:null,oe=E(M.stencilBuffer,J),ae=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ft(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(M),oe,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(M),oe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,oe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,R)}else{const $=M.textures;for(let J=0;J<$.length;J++){const oe=$[J],ae=s.convert(oe.format,oe.colorSpace),ee=s.convert(oe.type),ne=x(oe.internalFormat,ae,ee,oe.normalized,oe.colorSpace);ft(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(M),ne,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(M),ne,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ne,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Lt(R,M,H){const $=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(M.depthTexture);if(J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$){if(J.__webglInit===void 0&&(J.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ze(t.TEXTURE_CUBE_MAP,M.depthTexture);const ue=s.convert(M.depthTexture.format),be=s.convert(M.depthTexture.type);let he;M.depthTexture.format===Ki?he=t.DEPTH_COMPONENT24:M.depthTexture.format===Yr&&(he=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,he,M.width,M.height,0,ue,be,null)}}else V(M.depthTexture,0);const oe=J.__webglTexture,ae=gt(M),ee=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,ne=M.depthTexture.format===Yr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ki)ft(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,oe,0);else if(M.depthTexture.format===Yr)ft(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(R){const M=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)Lt(M.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?Lt(M.__webglFramebuffer[0],R,0):Lt(M.__webglFramebuffer,R,0)}else if(H){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=t.createRenderbuffer(),Ve(M.__webglDepthbuffer[$],R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,oe)}}else{const $=R.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Ve(M.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(R,M,H){const $=i.get(R);M!==void 0&&_e($.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ye(R)}function ct(R){const M=R.texture,H=i.get(R),$=i.get(M);R.addEventListener("dispose",_);const J=R.textures,oe=R.isWebGLCubeRenderTarget===!0,ae=J.length>1;if(ae||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=M.version,o.memory.textures++),oe){H.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ee]=[];for(let ne=0;ne<M.mipmaps.length;ne++)H.__webglFramebuffer[ee][ne]=t.createFramebuffer()}else H.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)H.__webglFramebuffer[ee]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ae)for(let ee=0,ne=J.length;ee<ne;ee++){const ue=i.get(J[ee]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&ft(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const ne=J[ee];H.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ee]);const ue=s.convert(ne.format,ne.colorSpace),be=s.convert(ne.type),he=x(ne.internalFormat,ue,be,ne.normalized,ne.colorSpace,R.isXRRenderTarget===!0),de=gt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,he,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,H.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),ze(t.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)_e(H.__webglFramebuffer[ee][ne],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else _e(H.__webglFramebuffer[ee],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);u(M)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let ee=0,ne=J.length;ee<ne;ee++){const ue=J[ee],be=i.get(ue);let he=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,be.__webglTexture),ze(he,ue),_e(H.__webglFramebuffer,R,ue,t.COLOR_ATTACHMENT0+ee,he,0),u(ue)&&g(he)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,$.__webglTexture),ze(ee,M),M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)_e(H.__webglFramebuffer[ne],R,M,t.COLOR_ATTACHMENT0,ee,ne);else _e(H.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ee,0);u(M)&&g(ee),n.unbindTexture()}R.depthBuffer&&Ye(R)}function He(R){const M=R.textures;for(let H=0,$=M.length;H<$;H++){const J=M[H];if(u(J)){const oe=S(R),ae=i.get(J).__webglTexture;n.bindTexture(oe,ae),g(oe),n.unbindTexture()}}}const mt=[],Ut=[];function rn(R){if(R.samples>0){if(ft(R)===!1){const M=R.textures,H=R.width,$=R.height;let J=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(R),ee=M.length>1;if(ee)for(let ue=0;ue<M.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ne=R.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[ue]);const be=i.get(M[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,H,$,0,0,H,$,J,t.NEAREST),l===!0&&(mt.length=0,Ut.length=0,mt.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(mt.push(oe),Ut.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let ue=0;ue<M.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ae.__webglColorRenderbuffer[ue]);const be=i.get(M[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function gt(R){return Math.min(r.maxSamples,R.samples)}function ft(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(R){const M=o.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function Wt(R,M){const H=R.colorSpace,$=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==wc&&H!==vr&&(Ze.getTransfer(H)===at?($!==ci||J!==kn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",H)),M}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=Qe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function P2(t,e){function n(i,r=vr){let s;const o=Ze.getTransfer(r);if(i===kn)return t.UNSIGNED_BYTE;if(i===hp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===v_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===x_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===m_)return t.BYTE;if(i===g_)return t.SHORT;if(i===ga)return t.UNSIGNED_SHORT;if(i===fp)return t.INT;if(i===Pi)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===Pn)return t.HALF_FLOAT;if(i===__)return t.ALPHA;if(i===y_)return t.RGB;if(i===ci)return t.RGBA;if(i===Ki)return t.DEPTH_COMPONENT;if(i===Yr)return t.DEPTH_STENCIL;if(i===S_)return t.RED;if(i===mp)return t.RED_INTEGER;if(i===rs)return t.RG;if(i===gp)return t.RG_INTEGER;if(i===vp)return t.RGBA_INTEGER;if(i===zl||i===Vl||i===Hl||i===Gl)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Af||i===Cf||i===Rf||i===Pf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Af)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nf||i===Lf||i===Df||i===If||i===Uf||i===Sc||i===Ff)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nf||i===Lf)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Df)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===If)return s.COMPRESSED_R11_EAC;if(i===Uf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Sc)return s.COMPRESSED_RG11_EAC;if(i===Ff)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Of||i===kf||i===Bf||i===zf||i===Vf||i===Hf||i===Gf||i===Wf||i===Xf||i===jf||i===Yf||i===$f||i===qf||i===Kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Of)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$f)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zf||i===Qf||i===Jf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zf)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eh||i===th||i===Mc||i===nh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===eh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===th)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===va?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const N2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L2=`
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

}`;class D2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new L_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new fn({vertexShader:N2,fragmentShader:L2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xe(new _i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I2 extends ls{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,v=null;const y=typeof XRWebGLBinding<"u",p=new D2,u={},g=n.getContextAttributes();let S=null,x=null;const E=[],b=[],A=new Le;let _=null,C=null;const P=new On;P.viewport=new Ct;const D=new On;D.viewport=new Ct;const L=[P,D],G=new kb;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=E[Q];return ie===void 0&&(ie=new Wu,E[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=E[Q];return ie===void 0&&(ie=new Wu,E[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=E[Q];return ie===void 0&&(ie=new Wu,E[Q]=ie),ie.getHandSpace()};function K(Q){const ie=b.indexOf(Q.inputSource);if(ie===-1)return;const ye=E[ie];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,c||o),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",V);for(let Q=0;Q<E.length;Q++){const ie=b[Q];ie!==null&&(b[Q]=null,E[Q].disconnect(ie))}N=null,z=null,p.reset();for(const Q in u)delete u[Q];if(e.setRenderTarget(S),m=null,d=null,h=null,r=null,x=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),C!==null){const Q=C.camera;Q.fov=C.fov,Q.zoom=C.zoom,Q.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ie=null,_e=null;g.depth&&(_e=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=g.stencil?Yr:Ki,Ie=g.stencil?va:Pi);const Ve={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new _n(d.textureWidth,d.textureHeight,{format:ci,type:kn,depthTexture:new _a(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ye),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new _n(m.framebufferWidth,m.framebufferHeight,{format:ci,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function V(Q){for(let ie=0;ie<Q.removed.length;ie++){const ye=Q.removed[ie],Ie=b.indexOf(ye);Ie>=0&&(b[Ie]=null,E[Ie].disconnect(ye))}for(let ie=0;ie<Q.added.length;ie++){const ye=Q.added[ie];let Ie=b.indexOf(ye);if(Ie===-1){for(let Ve=0;Ve<E.length;Ve++)if(Ve>=b.length){b.push(ye),Ie=Ve;break}else if(b[Ve]===null){b[Ve]=ye,Ie=Ve;break}if(Ie===-1)break}const _e=E[Ie];_e&&_e.connect(ye)}}const B=new I,j=new I;function Z(Q,ie,ye){B.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);const Ie=B.distanceTo(j),_e=ie.projectionMatrix.elements,Ve=ye.projectionMatrix.elements,Lt=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),Qe=(_e[9]+1)/_e[5],ct=(_e[9]-1)/_e[5],He=(_e[8]-1)/_e[0],mt=(Ve[8]+1)/Ve[0],Ut=Lt*He,rn=Lt*mt,gt=Ie/(-He+mt),ft=gt*-He;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ft),Q.translateZ(gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),_e[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const O=Lt+gt,Wt=Ye+gt,tt=Ut-ft,R=rn+(Ie-ft),M=Qe*Ye/Wt*O,H=ct*Ye/Wt*O;Q.projectionMatrix.makePerspective(tt,R,M,H,O,Wt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ie=Q.near,ye=Q.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(ye=p.depthFar)),G.near=D.near=P.near=ie,G.far=D.far=P.far=ye,(N!==G.near||z!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,z=G.far),G.layers.mask=Q.layers.mask|6,P.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;const Ie=Q.parent,_e=G.cameras;ce(G,Ie);for(let Ve=0;Ve<_e.length;Ve++)ce(_e[Ve],Ie);_e.length===2?Z(G,P,D):G.projectionMatrix.copy(P.projectionMatrix),C===null&&Q.isPerspectiveCamera&&(C={camera:Q,fov:Q.fov,zoom:Q.zoom}),ve(Q,G,Ie)};function ve(Q,ie,ye){ye===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=rh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(Q){return u[Q]};let je=null;function ze(Q,ie){if(f=ie.getViewerPose(c||o),v=ie,f!==null){const ye=f.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let Ie=!1;ye.length!==G.cameras.length&&(G.cameras.length=0,Ie=!0);for(let Ye=0;Ye<ye.length;Ye++){const Qe=ye[Ye];let ct=null;if(m!==null)ct=m.getViewport(Qe);else{const mt=h.getViewSubImage(d,Qe);ct=mt.viewport,Ye===0&&(e.setRenderTargetTextures(x,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(x))}let He=L[Ye];He===void 0&&(He=new On,He.layers.enable(Ye),He.viewport=new Ct,L[Ye]=He),He.matrix.fromArray(Qe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Qe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ct.x,ct.y,ct.width,ct.height),Ye===0&&(G.matrix.copy(He.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ie===!0&&G.cameras.push(He)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const Ye=h.getDepthInformation(ye[0]);Ye&&Ye.isValid&&Ye.texture&&p.init(Ye,r.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let Ye=0;Ye<ye.length;Ye++){const Qe=ye[Ye].camera;if(Qe){let ct=u[Qe];ct||(ct=new L_,u[Qe]=ct);const He=h.getCameraImage(Qe);ct.sourceTexture=He}}}}for(let ye=0;ye<E.length;ye++){const Ie=b[ye],_e=E[ye];Ie!==null&&_e!==void 0&&_e.update(Ie,ie,c||o)}je&&je(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const ke=new F_;ke.setAnimationLoop(ze),this.setAnimationLoop=function(Q){je=Q},this.dispose=function(){}}}const U2=new bt,G_=new Fe;G_.set(-1,0,0,0,1,0,0,0,1);function F2(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,D_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,S,x){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(p,u):u.isMeshLambertMaterial?(s(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,x)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,S):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Rn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Rn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u),S=g.envMap,x=g.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(U2.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(G_),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,S){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=S*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Rn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.retroreflectivity>0&&(p.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function O2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const b=E.program;i.uniformBlockBinding(x,b)}function c(x,E){let b=r[x.id];b===void 0&&(p(x),b=f(x),r[x.id]=b,x.addEventListener("dispose",g));const A=E.program;i.updateUBOMapping(x,A);const _=e.render.frame;s[x.id]!==_&&(d(x),s[x.id]=_)}function f(x){const E=h();x.__bindingPointIndex=E;const b=t.createBuffer(),A=x.__size,_=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,A,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,b),b}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const E=r[x.id],b=x.uniforms,A=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let _=0,C=b.length;_<C;_++){const P=b[_];if(Array.isArray(P))for(let D=0,L=P.length;D<L;D++)m(P[D],_,D,A);else m(P,_,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(x,E,b,A){if(y(x,E,b,A)===!0){const _=x.__offset,C=x.value;if(Array.isArray(C)){let P=0;for(let D=0;D<C.length;D++){const L=C[D],G=u(L);v(L,x.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(C,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,x.__data)}}function v(x,E,b){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,b)}function y(x,E,b,A){const _=x.value,C=E+"_"+b;if(A[C]===void 0)return typeof _=="number"||typeof _=="boolean"?A[C]=_:ArrayBuffer.isView(_)?A[C]=_.slice():A[C]=_.clone(),!0;{const P=A[C];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return A[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function p(x){const E=x.uniforms;let b=0;const A=16;for(let C=0,P=E.length;C<P;C++){const D=Array.isArray(E[C])?E[C]:[E[C]];for(let L=0,G=D.length;L<G;L++){const N=D[L],z=Array.isArray(N.value)?N.value:[N.value];for(let K=0,Y=z.length;K<Y;K++){const V=z[K],B=u(V),j=b%A,Z=j%B.boundary,ce=j+Z;b+=Z,ce!==0&&A-ce<B.storage&&(b+=A-ce),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=B.storage}}}const _=b%A;return _>0&&(b+=A-_),x.__size=b,x.__cache={},this}function u(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):De("WebGLRenderer: Unsupported uniform value type.",x),E}function g(x){const E=x.target;E.removeEventListener("dispose",g);const b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function S(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:S}}const k2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function B2(){return vi===null&&(vi=new yb(k2,16,16,rs,Pn),vi.name="DFG_LUT",vi.minFilter=en,vi.magFilter=en,vi.wrapS=Gi,vi.wrapT=Gi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class z2{constructor(e={}){const{canvas:n=qE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=kn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const y=m,p=new Set([vp,gp,mp]),u=new Set([kn,Pi,ga,va,hp,pp]),g=new Uint32Array(4),S=new Int32Array(4),x=new I;let E=null,b=null;const A=[],_=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,L=null,G=null,N=null,z=null;this._outputColorSpace=Fn;let K=0,Y=0,V=null,B=-1,j=null;const Z=new Ct,ce=new Ct;let ve=null;const je=new Oe(0);let ze=0,ke=n.width,Q=n.height,ie=1,ye=null,Ie=null;const _e=new Ct(0,0,ke,Q),Ve=new Ct(0,0,ke,Q);let Lt=!1;const Ye=new wp;let Qe=!1,ct=!1;const He=new bt,mt=new I,Ut=new Ct,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function ft(){return V===null?ie:1}let O=i;function Wt(T,U){return n.getContext(T,U)}let tt,R,M,H,$,J,oe,ae,ee,ne,ue,be,he,de,Ce,Ne,Ue,F,fe,te,le,pe,re;try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${up}`),n.addEventListener("webglcontextlost",ut,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",ot,!1),O===null){const U="webgl2";if(O=Wt(U,T),O===null)throw Wt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(T){throw n.removeEventListener("webglcontextlost",ut,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",ot,!1),nt("WebGLRenderer: "+T.message),T}function Re(){tt=new BC(O),tt.init(),le=new P2(O,tt),R=new RC(O,tt,e,le),M=new C2(O,tt),R.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),G=O.createFramebuffer(),N=O.createFramebuffer(),z=O.createFramebuffer(),H=new HC(O),$=new p2,J=new R2(O,tt,M,$,R,le,H),oe=new kC(P),ae=new Wb(O),pe=new AC(O,ae),ee=new zC(O,ae,H,pe),ne=new WC(O,ee,ae,pe,H),F=new GC(O,R,J),Ce=new PC($),ue=new h2(P,oe,tt,R,pe,Ce),be=new F2(P,$),he=new g2,de=new M2(tt),Ue=new TC(P,oe,M,ne,v,l),Ne=new A2(P,ne,R),re=new O2(O,H,R,M),fe=new CC(O,tt,H),te=new VC(O,tt,H),H.programs=ue.programs,P.capabilities=R,P.extensions=tt,P.properties=$,P.renderLists=he,P.shadowMap=Ne,P.state=M,P.info=H}y!==kn&&(C=new jC(y,n.width,n.height,a,r,s));const Ee=new I2(P,O);this.xr=Ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(ke,Q,!1))},this.getSize=function(T){return T.set(ke,Q)},this.setSize=function(T,U,q=!0){if(Ee.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=T,Q=U,n.width=Math.floor(T*ie),n.height=Math.floor(U*ie),q===!0&&(n.style.width=T+"px",n.style.height=U+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(ke*ie,Q*ie).floor()},this.setDrawingBufferSize=function(T,U,q){ke=T,Q=U,ie=q,n.width=Math.floor(T*q),n.height=Math.floor(U*q),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(y===kn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Z)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,U,q,W){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,U,q,W),M.viewport(Z.copy(_e).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(Ve)},this.setScissor=function(T,U,q,W){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,U,q,W),M.scissor(ce.copy(Ve).multiplyScalar(ie).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(T){M.setScissorTest(Lt=T)},this.setOpaqueSort=function(T){ye=T},this.setTransparentSort=function(T){Ie=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,q=!0){let W=0;if(T){let X=!1;if(V!==null){const xe=V.texture.format;X=p.has(xe)}if(X){const xe=V.texture.type,Me=u.has(xe),ge=Ue.getClearColor(),Te=Ue.getClearAlpha(),Pe=ge.r,Ge=ge.g,$e=ge.b;Me?(g[0]=Pe,g[1]=Ge,g[2]=$e,g[3]=Te,O.clearBufferuiv(O.COLOR,0,g)):(S[0]=Pe,S[1]=Ge,S[2]=$e,S[3]=Te,O.clearBufferiv(O.COLOR,0,S))}else W|=O.COLOR_BUFFER_BIT}U&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){n.removeEventListener("webglcontextlost",ut,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",ot,!1),Ue.dispose(),he.dispose(),de.dispose(),$.dispose(),oe.dispose(),ne.dispose(),pe.dispose(),re.dispose(),ue.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ji),Ee.removeEventListener("sessionend",mo),Ur.stop()};function ut(T){T.preventDefault(),_g("WebGLRenderer: Context Lost."),D=!0}function it(){_g("WebGLRenderer: Context Restored."),D=!1;const T=H.autoReset,U=Ne.enabled,q=Ne.autoUpdate,W=Ne.needsUpdate,X=Ne.type;Re(),H.autoReset=T,Ne.enabled=U,Ne.autoUpdate=q,Ne.needsUpdate=W,Ne.type=X}function ot(T){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Tt(T){const U=T.target;U.removeEventListener("dispose",Tt),hi(U)}function hi(T){us(T),$.remove(T)}function us(T){const U=$.get(T).programs;U!==void 0&&(U.forEach(function(q){ue.releaseProgram(q)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,q,W,X,xe){U===null&&(U=rn);const Me=X.isMesh&&X.matrixWorld.determinantAffine()<0,ge=Iy(T,U,q,W,X);M.setMaterial(W,Me);let Te=q.index,Pe=1;if(W.wireframe===!0){if(Te=ee.getWireframeAttribute(q),Te===void 0)return;Pe=2}const Ge=q.drawRange,$e=q.attributes.position;let Ae=Ge.start*Pe,rt=(Ge.start+Ge.count)*Pe;xe!==null&&(Ae=Math.max(Ae,xe.start*Pe),rt=Math.min(rt,(xe.start+xe.count)*Pe)),Te!==null?(Ae=Math.max(Ae,0),rt=Math.min(rt,Te.count)):$e!=null&&(Ae=Math.max(Ae,0),rt=Math.min(rt,$e.count));const Ft=rt-Ae;if(Ft<0||Ft===1/0)return;pe.setup(X,W,ge,q,Te);let _t,ht=fe;if(Te!==null&&(_t=ae.get(Te),ht=te,ht.setIndex(_t)),X.isMesh)W.wireframe===!0?(M.setLineWidth(W.wireframeLinewidth*ft()),ht.setMode(O.LINES)):ht.setMode(O.TRIANGLES);else if(X.isLine){let sn=W.linewidth;sn===void 0&&(sn=1),M.setLineWidth(sn*ft()),X.isLineSegments?ht.setMode(O.LINES):X.isLineLoop?ht.setMode(O.LINE_LOOP):ht.setMode(O.LINE_STRIP)}else X.isPoints?ht.setMode(O.POINTS):X.isSprite&&ht.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ht.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const sn=X._multiDrawStarts,Se=X._multiDrawCounts,mn=X._multiDrawCount,Je=Te?ae.get(Te).bytesPerElement:1,jn=$.get(W).currentProgram.getUniforms();for(let pi=0;pi<mn;pi++)jn.setValue(O,"_gl_DrawID",pi),ht.render(sn[pi]/Je,Se[pi])}else if(X.isInstancedMesh)ht.renderInstances(Ae,Ft,X.count);else if(q.isInstancedBufferGeometry){const sn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Se=Math.min(q.instanceCount,sn);ht.renderInstances(Ae,Ft,Se)}else ht.render(Ae,Ft)};function Qi(T,U,q,W){L!==null&&T.isNodeMaterial&&L.setObject(W,T),Qe===!0&&Ce.setState(T,q,!1),T.transparent===!0&&T.side===Mi&&T.forceSinglePass===!1?(T.side=Rn,T.needsUpdate=!0,Ia(T,U,W),T.side=ns,T.needsUpdate=!0,Ia(T,U,W),T.side=Mi):Ia(T,U,W)}this.compile=function(T,U,q=null){q===null&&(q=T),L!==null&&L.renderStart(T,U,q),b=de.get(q),b.init(U),_.push(b),q.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),T!==q&&T.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),ct=this.localClippingEnabled,Qe=Ce.init(this.clippingPlanes,ct),Qe===!0&&Ce.setGlobalState(this.clippingPlanes,U),L!==null&&Ne.render(b.state.shadowsArray,q,U);const W=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xe=X.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){const ge=xe[Me];Qi(ge,q,U,X),W.add(ge)}else Qi(xe,q,U,X),W.add(xe)}),b=_.pop(),L!==null&&L.renderEnd(),W},this.compileAsync=function(T,U,q=null){const W=this.compile(T,U,q);return new Promise(X=>{function xe(){if(W.forEach(function(Me){const Te=$.get(Me).currentProgram;(Te===void 0||Te.isReady())&&W.delete(Me)}),W.size===0){X(T);return}setTimeout(xe,10)}tt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Li=null;function po(T){Li&&Li(T)}function Ji(){Ur.stop()}function mo(){Ur.start()}const Ur=new F_;Ur.setAnimationLoop(po),typeof self<"u"&&Ur.setContext(self),this.setAnimationLoop=function(T){Li=T,Ee.setAnimationLoop(T),T===null?Ur.stop():Ur.start()},Ee.addEventListener("sessionstart",Ji),Ee.addEventListener("sessionend",mo),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(T,U);const q=Ee.enabled===!0&&Ee.isPresenting===!0,W=C!==null&&(V===null||q)&&C.begin(P,V);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(U),U=Ee.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,U,V),b=de.get(T,_.length),b.init(U),b.state.textureUnits=J.getTextureUnits(),_.push(b),He.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ye.setFromProjectionMatrix(He,Ei,U.reversedDepth),ct=this.localClippingEnabled,Qe=Ce.init(this.clippingPlanes,ct),E=he.get(T,A.length),E.init(),A.push(E),Ee.enabled===!0&&Ee.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&su(Me,U,-1/0,P.sortObjects)}su(T,U,0,P.sortObjects),E.finish(),L!==null&&L.updateLights(b.state.lightsArray),P.sortObjects===!0&&E.sort(ye,Ie),gt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,gt&&Ue.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ce.beginShadows();const X=b.state.shadowsArray;if(Ne.render(X,T,U),Qe===!0&&Ce.endShadows(),(W&&C.hasRenderPass())===!1){const Me=E.opaque,ge=E.transmissive;if(b.setupLights(),U.isArrayCamera){const Te=U.cameras;if(ge.length>0)for(let Pe=0,Ge=Te.length;Pe<Ge;Pe++){const $e=Te[Pe];zp(Me,ge,T,$e)}gt&&Ue.render(T);for(let Pe=0,Ge=Te.length;Pe<Ge;Pe++){const $e=Te[Pe];Bp(E,T,$e,$e.viewport)}}else ge.length>0&&zp(Me,ge,T,U),gt&&Ue.render(T),Bp(E,T,U)}V!==null&&Y===0&&(J.updateMultisampleRenderTarget(V),J.updateRenderTargetMipmap(V)),W&&C.end(P),T.isScene===!0&&T.onAfterRender(P,T,U),pe.resetDefaultState(),B=-1,j=null,_.pop(),_.length>0?(b=_[_.length-1],J.setTextureUnits(b.state.textureUnits),Qe===!0&&Ce.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,L!==null&&L.renderEnd()};function su(T,U,q,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Ye)){W&&Ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(He);const Me=ne.update(T),ge=T.material;ge.visible&&E.push(T,Me,ge,q,Ut.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Ye))){const Me=ne.update(T),ge=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ut.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ut.copy(Me.boundingSphere.center)),Ut.applyMatrix4(T.matrixWorld).applyMatrix4(He)),Array.isArray(ge)){const Te=Me.groups;for(let Pe=0,Ge=Te.length;Pe<Ge;Pe++){const $e=Te[Pe],Ae=ge[$e.materialIndex];Ae&&Ae.visible&&E.push(T,Me,Ae,q,Ut.z,$e,U)}}else ge.visible&&E.push(T,Me,ge,q,Ut.z,null,U)}}const xe=T.children;for(let Me=0,ge=xe.length;Me<ge;Me++)su(xe[Me],U,q,W)}function Bp(T,U,q,W){const{opaque:X,transmissive:xe,transparent:Me}=T;b.setupLightsView(q),Qe===!0&&Ce.setGlobalState(P.clippingPlanes,q),W&&M.viewport(Z.copy(W)),X.length>0&&Da(X,U,q),xe.length>0&&Da(xe,U,q),Me.length>0&&Da(Me,U,q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function zp(T,U,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const Ae=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new _n(1,1,{generateMipmaps:!0,type:Ae?Pn:kn,minFilter:jr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const xe=b.state.transmissionRenderTarget[W.id],Me=W.viewport||Z;xe.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),Te=P.getActiveCubeFace(),Pe=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(je),ze=P.getClearAlpha(),ze<1&&P.setClearColor(16777215,.5),P.clear(),gt&&Ue.render(q);const Ge=P.toneMapping;P.toneMapping=Ci;const $e=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),Qe===!0&&Ce.setGlobalState(P.clippingPlanes,W),Da(T,q,W),J.updateMultisampleRenderTarget(xe),J.updateRenderTargetMipmap(xe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let rt=0,Ft=U.length;rt<Ft;rt++){const _t=U[rt],{object:ht,geometry:sn,material:Se,group:mn}=_t;if(Se.side===Mi&&ht.layers.test(W.layers)){const Je=Se.side;Se.side=Rn,Se.needsUpdate=!0,Vp(ht,q,W,sn,Se,mn),Se.side=Je,Se.needsUpdate=!0,Ae=!0}}Ae===!0&&(J.updateMultisampleRenderTarget(xe),J.updateRenderTargetMipmap(xe))}P.setRenderTarget(ge,Te,Pe),P.setClearColor(je,ze),$e!==void 0&&(W.viewport=$e),P.toneMapping=Ge}function Da(T,U,q){const W=U.isScene===!0?U.overrideMaterial:null;for(let X=0,xe=T.length;X<xe;X++){const Me=T[X],{object:ge,geometry:Te,group:Pe}=Me;let Ge=Me.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),ge.layers.test(q.layers)&&Vp(ge,U,q,Te,Ge,Pe)}}function Vp(T,U,q,W,X,xe){L!==null&&X.isNodeMaterial&&L.setObject(T,X),T.onBeforeRender(P,U,q,W,X,xe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(P,U,q,W,T,xe),X.transparent===!0&&X.side===Mi&&X.forceSinglePass===!1?(X.side=Rn,X.needsUpdate=!0,P.renderBufferDirect(q,U,W,X,T,xe),X.side=ns,X.needsUpdate=!0,P.renderBufferDirect(q,U,W,X,T,xe),X.side=Mi):P.renderBufferDirect(q,U,W,X,T,xe),T.onAfterRender(P,U,q,W,X,xe)}function Ia(T,U,q){U.isScene!==!0&&(U=rn);const W=$.get(T),X=b.state.lights,xe=b.state.shadowsArray,Me=X.state.version,ge=ue.getParameters(T,X.state,xe,U,q,b.state.lightProbeGridArray),Te=ue.getProgramCacheKey(ge);let Pe=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const Ge=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=oe.get(T.envMap||W.environment,Ge),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",Tt),Pe=new Map,W.programs=Pe);let $e=Pe.get(Te);if($e!==void 0){if(W.currentProgram===$e&&W.lightsStateVersion===Me)return Gp(T,ge),$e}else ge.uniforms=ue.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,q,ge),T.onBeforeCompile(ge,P),$e=ue.acquireProgram(ge,Te),Pe.set(Te,$e),W.uniforms=ge.uniforms;const Ae=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=Ce.uniform),Gp(T,ge),W.needsLights=Fy(T),W.lightsStateVersion=Me,W.needsLights&&(Ae.ambientLightColor.value=X.state.ambient,Ae.lightProbe.value=X.state.probe,Ae.sunLights.value=X.state.sun,Ae.sunLightShadows.value=X.state.sunShadow,Ae.directionalLights.value=X.state.directional,Ae.directionalLightShadows.value=X.state.directionalShadow,Ae.spotLights.value=X.state.spot,Ae.spotLightShadows.value=X.state.spotShadow,Ae.rectAreaLights.value=X.state.rectArea,Ae.ltc_1.value=X.state.rectAreaLTC1,Ae.ltc_2.value=X.state.rectAreaLTC2,Ae.pointLights.value=X.state.point,Ae.pointLightShadows.value=X.state.pointShadow,Ae.hemisphereLights.value=X.state.hemi,Ae.sunShadowMatrix.value=X.state.sunShadowMatrix,Ae.sunShadowCascade.value=X.state.sunShadowCascade,Ae.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ae.spotLightMatrix.value=X.state.spotLightMatrix,Ae.spotLightMap.value=X.state.spotLightMap,Ae.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=$e,W.uniformsList=null,$e}function Hp(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Wl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Gp(T,U){const q=$.get(T);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Dy(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let q=0,W=T.length;q<W;q++){const X=T[q];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function Iy(T,U,q,W,X){U.isScene!==!0&&(U=rn),J.resetTextureUnits();const xe=U.fog,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,ge=V===null?P.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ze.workingColorSpace,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Pe=oe.get(W.envMap||Me,Te),Ge=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,Ft=!!q.morphAttributes.color;let _t=Ci;W.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(_t=P.toneMapping);const ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,sn=ht!==void 0?ht.length:0,Se=$.get(W),mn=b.state.lights;if(Qe===!0&&(ct===!0||T!==j)){const vt=T===j&&W.id===B;Ce.setState(W,T,vt)}let Je=!1;W.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==mn.state.version||Se.outputColorSpace!==ge||X.isBatchedMesh&&Se.batching===!1||!X.isBatchedMesh&&Se.batching===!0||X.isBatchedMesh&&Se.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Se.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Se.instancing===!1||!X.isInstancedMesh&&Se.instancing===!0||X.isSkinnedMesh&&Se.skinning===!1||!X.isSkinnedMesh&&Se.skinning===!0||X.isInstancedMesh&&Se.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Se.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Se.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Se.instancingMorph===!1&&X.morphTexture!==null||Se.envMap!==Pe||W.fog===!0&&Se.fog!==xe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ce.numPlanes||Se.numIntersection!==Ce.numIntersection)||Se.vertexAlphas!==Ge||Se.vertexTangents!==$e||Se.morphTargets!==Ae||Se.morphNormals!==rt||Se.morphColors!==Ft||Se.toneMapping!==_t||Se.morphTargetsCount!==sn||!!Se.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,Se.__version=W.version);let jn=Se.currentProgram;Je===!0&&(jn=Ia(W,U,X),L&&W.isNodeMaterial&&L.onUpdateProgram(W,jn,Se));let pi=!1,er=!1,ds=!1;const dt=jn.getUniforms(),Dt=Se.uniforms;if(M.useProgram(jn.program)&&(pi=!0,er=!0,ds=!0),W.id!==B&&(B=W.id,er=!0),Se.needsLights){const vt=Dy(b.state.lightProbeGridArray,X);Se.lightProbeGrid!==vt&&(Se.lightProbeGrid=vt,er=!0)}if(pi||j!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),dt.setValue(O,"projectionMatrix",T.projectionMatrix),dt.setValue(O,"viewMatrix",T.matrixWorldInverse);const nr=dt.map.cameraPosition;nr!==void 0&&nr.setValue(O,mt.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&dt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&dt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,er=!0,ds=!0)}if(Se.needsLights&&(mn.state.sunShadowMap.length>0&&dt.setValue(O,"sunShadowMap",mn.state.sunShadowMap,J),mn.state.directionalShadowMap.length>0&&dt.setValue(O,"directionalShadowMap",mn.state.directionalShadowMap,J),mn.state.spotShadowMap.length>0&&dt.setValue(O,"spotShadowMap",mn.state.spotShadowMap,J),mn.state.pointShadowMap.length>0&&dt.setValue(O,"pointShadowMap",mn.state.pointShadowMap,J)),X.isSkinnedMesh){dt.setOptional(O,X,"bindMatrix"),dt.setOptional(O,X,"bindMatrixInverse");const vt=X.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),dt.setValue(O,"boneTexture",vt.boneTexture,J))}X.isBatchedMesh&&(dt.setOptional(O,X,"batchingTexture"),dt.setValue(O,"batchingTexture",X._matricesTexture,J),dt.setOptional(O,X,"batchingIdTexture"),dt.setValue(O,"batchingIdTexture",X._indirectTexture,J),dt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&dt.setValue(O,"batchingColorTexture",X._colorsTexture,J));const tr=q.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&F.update(X,q,jn),(er||Se.receiveShadow!==X.receiveShadow)&&(Se.receiveShadow=X.receiveShadow,dt.setValue(O,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Dt.envMapIntensity.value=U.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=B2()),er){if(dt.setValue(O,"toneMappingExposure",P.toneMappingExposure),Se.needsLights&&Uy(Dt,ds),xe&&W.fog===!0&&be.refreshFogUniforms(Dt,xe),be.refreshMaterialUniforms(Dt,W,ie,Q,b.state.transmissionRenderTarget[T.id]),Se.needsLights&&Se.lightProbeGrid){const vt=Se.lightProbeGrid;Dt.probesSH.value=vt.texture,Dt.probesMin.value.copy(vt.boundingBox.min),Dt.probesMax.value.copy(vt.boundingBox.max),Dt.probesResolution.value.copy(vt.resolution)}Wl.upload(O,Hp(Se),Dt,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Wl.upload(O,Hp(Se),Dt,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&dt.setValue(O,"center",X.center),dt.setValue(O,"modelViewMatrix",X.modelViewMatrix),dt.setValue(O,"normalMatrix",X.normalMatrix),dt.setValue(O,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const vt=W.uniformsGroups;for(let nr=0,fs=vt.length;nr<fs;nr++){const Xp=vt[nr];re.update(Xp,jn),re.bind(Xp,jn)}}return jn}function Uy(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Fy(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(T,U,q){const W=$.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),$.get(T.texture).__webglTexture=U,$.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const q=$.get(T);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,q=0){V=T,K=U,Y=q;let W=null,X=!1,xe=!1;if(T){const ge=$.get(T);if(ge.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(O.FRAMEBUFFER,ge.__webglFramebuffer),Z.copy(T.viewport),ce.copy(T.scissor),ve=T.scissorTest,M.viewport(Z),M.scissor(ce),M.setScissorTest(ve),B=-1;return}else if(ge.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(ge.__hasExternalTextures)J.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ge=T.depthTexture;if(ge.__boundDepthTexture!==Ge){if(Ge!==null&&$.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}const Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);const Pe=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?W=Pe[U][q]:W=Pe[U],X=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?W=$.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[q]:W=Pe,Z.copy(T.viewport),ce.copy(T.scissor),ve=T.scissorTest}else Z.copy(_e).multiplyScalar(ie).floor(),ce.copy(Ve).multiplyScalar(ie).floor(),ve=Lt;if(q!==0&&(W=G),M.bindFramebuffer(O.FRAMEBUFFER,W)&&M.drawBuffers(T,W),M.viewport(Z),M.scissor(ce),M.setScissorTest(ve),X){const ge=$.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,q)}else if(xe){const ge=U;for(let Te=0;Te<T.textures.length;Te++){const Pe=$.get(T.textures[Te]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Te,Pe.__webglTexture,q,ge)}}else if(T!==null&&q!==0){const ge=$.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ge.__webglTexture,q)}B=-1};function Wp(T){const U=$.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=R.textureFormatReadable(T.format),U.__typeReadable=R.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,q,W,X,xe,Me,ge=0){if(!(T&&T.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){M.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Pe=T.textures[ge],Ge=Pe.format,$e=Pe.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge);const Ae=Wp(Pe);if(Ae.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&q>=0&&q<=T.height-X&&O.readPixels(U,q,W,X,le.convert(Ge),le.convert($e),xe)}finally{const Pe=V!==null?$.get(V).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,U,q,W,X,xe,Me,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(U>=0&&U<=T.width-W&&q>=0&&q<=T.height-X){M.bindFramebuffer(O.FRAMEBUFFER,Te);const Pe=T.textures[ge],Ge=Pe.format,$e=Pe.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge);const Ae=Wp(Pe);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.bufferData(O.PIXEL_PACK_BUFFER,xe.byteLength,O.STREAM_READ),O.readPixels(U,q,W,X,le.convert(Ge),le.convert($e),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Ft=V!==null?$.get(V).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Ft);const _t=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await KE(O,_t,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(rt),O.deleteSync(_t),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,q=0){const W=Math.pow(2,-q),X=Math.floor(T.image.width*W),xe=Math.floor(T.image.height*W),Me=U!==null?U.x:0,ge=U!==null?U.y:0;J.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Me,ge,X,xe),M.unbindTexture()},this.copyTextureToTexture=function(T,U,q=null,W=null,X=0,xe=0){let Me,ge,Te,Pe,Ge,$e,Ae,rt,Ft;const _t=T.isCompressedTexture?T.mipmaps[xe]:T.image;if(q!==null)Me=q.max.x-q.min.x,ge=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Pe=q.min.x,Ge=q.min.y,$e=q.isBox3?q.min.z:0;else{const Dt=Math.pow(2,-X);Me=Math.floor(_t.width*Dt),ge=Math.floor(_t.height*Dt),T.isDataArrayTexture?Te=_t.depth:T.isData3DTexture?Te=Math.floor(_t.depth*Dt):Te=1,Pe=0,Ge=0,$e=0}W!==null?(Ae=W.x,rt=W.y,Ft=W.z):(Ae=0,rt=0,Ft=0);const ht=le.convert(U.format),sn=le.convert(U.type);let Se;U.isData3DTexture?(J.setTexture3D(U,0),Se=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Se=O.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Se=O.TEXTURE_2D),M.activeTexture(O.TEXTURE0),M.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const mn=M.getParameter(O.UNPACK_ROW_LENGTH),Je=M.getParameter(O.UNPACK_IMAGE_HEIGHT),jn=M.getParameter(O.UNPACK_SKIP_PIXELS),pi=M.getParameter(O.UNPACK_SKIP_ROWS),er=M.getParameter(O.UNPACK_SKIP_IMAGES);M.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),M.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),M.pixelStorei(O.UNPACK_SKIP_IMAGES,$e);const ds=T.isDataArrayTexture||T.isData3DTexture,dt=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Dt=$.get(T),tr=$.get(U),vt=$.get(Dt.__renderTarget),nr=$.get(tr.__renderTarget);M.bindFramebuffer(O.READ_FRAMEBUFFER,vt.__webglFramebuffer),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,nr.__webglFramebuffer);for(let fs=0;fs<Te;fs++)ds&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(T).__webglTexture,X,$e+fs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(U).__webglTexture,xe,Ft+fs)),O.blitFramebuffer(Pe,Ge,Me,ge,Ae,rt,Me,ge,O.DEPTH_BUFFER_BIT,O.NEAREST);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||$.has(T)){const Dt=$.get(T),tr=$.get(U);M.bindFramebuffer(O.READ_FRAMEBUFFER,N),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let vt=0;vt<Te;vt++)ds?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.__webglTexture,X,$e+vt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Dt.__webglTexture,X),dt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tr.__webglTexture,xe,Ft+vt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tr.__webglTexture,xe),X!==0?O.blitFramebuffer(Pe,Ge,Me,ge,Ae,rt,Me,ge,O.COLOR_BUFFER_BIT,O.NEAREST):dt?O.copyTexSubImage3D(Se,xe,Ae,rt,Ft+vt,Pe,Ge,Me,ge):O.copyTexSubImage2D(Se,xe,Ae,rt,Pe,Ge,Me,ge);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else dt?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Se,xe,Ae,rt,Ft,Me,ge,Te,ht,sn,_t.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Se,xe,Ae,rt,Ft,Me,ge,Te,ht,_t.data):O.texSubImage3D(Se,xe,Ae,rt,Ft,Me,ge,Te,ht,sn,_t):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xe,Ae,rt,Me,ge,ht,sn,_t.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xe,Ae,rt,_t.width,_t.height,ht,_t.data):O.texSubImage2D(O.TEXTURE_2D,xe,Ae,rt,Me,ge,ht,sn,_t);M.pixelStorei(O.UNPACK_ROW_LENGTH,mn),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Je),M.pixelStorei(O.UNPACK_SKIP_PIXELS,jn),M.pixelStorei(O.UNPACK_SKIP_ROWS,pi),M.pixelStorei(O.UNPACK_SKIP_IMAGES,er),xe===0&&U.generateMipmaps&&O.generateMipmap(Se),M.unbindTexture()},this.initRenderTarget=function(T){$.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){K=0,Y=0,V=null,M.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const Xl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Pa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const V2=new tu(-1,1,1,-1,0,1);class H2 extends Gt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const G2=new H2;class W_{constructor(e){this._mesh=new Xe(G2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,V2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class W2 extends Pa{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof fn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pc.clone(e.uniforms),this.material=new fn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new W_(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class m0 extends Pa{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class X2 extends Pa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class j2{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Le);this._width=i.width,this._height=i.height,n=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new W2(Xl),this.copyPass.material.blending=Ai,this.timer=new Bb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}m0!==void 0&&(o instanceof m0?i=!0:o instanceof X2&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Y2 extends Pa{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Oe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const $2={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class oo extends Pa{constructor(e,n=1,i,r){super(),this.strength=n,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new Oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(s,o,{type:Pn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new _n(s,o,{type:Pn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new _n(s,o,{type:Pn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=$2;this.highPassUniforms=Pc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new fn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Le(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pc.clone(Xl.uniforms),this.blendMaterial=new fn({uniforms:this.copyUniforms,vertexShader:Xl.vertexShader,fragmentShader:Xl.fragmentShader,premultipliedAlpha:!0,blending:xf,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Oe,this._oldClearAlpha=1,this._basic=new qt,this._fsQuad=new W_(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Le(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=oo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=oo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const n=[],i=e/3;for(let o=0;o<e;o++)n.push(.39894*Math.exp(-.5*o*o/(i*i))/i);const r=[],s=[];for(let o=1;o<e;o+=2){const a=n[o],l=o+1<e?n[o+1]:0,c=a+l;r.push((o*a+(o+1)*l)/c),s.push(c)}return new fn({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},centerWeight:{value:n[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new fn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}oo.BlurDirectionX=new Le(1,0);oo.BlurDirectionY=new Le(0,1);function pd(t,e){const n=document.createElement("canvas");n.width=512,n.height=288;const i=n.getContext("2d");i.fillStyle="#090d16",i.fillRect(0,0,n.width,n.height),i.strokeStyle="#22d3ee",i.lineWidth=4,i.strokeRect(4,4,n.width-8,n.height-8),i.fillStyle="#1e293b",i.fillRect(4,4,n.width-8,36),i.fillStyle="#22d3ee",i.font="bold 16px monospace",i.fillText(`● ● ●  ${t}`,16,28),i.font="14px monospace",e.forEach((s,o)=>{i.fillStyle=s.startsWith("//")?"#64748b":s.includes("UE5")||s.includes("SmartScopy")?"#38bdf8":s.includes("return")||s.includes("void")?"#c084fc":"#e2e8f0",i.fillText(s,20,68+o*24)});const r=new N_(n);return r.minFilter=en,r}function q2(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#06070a",e.fillRect(0,0,256,256),e.strokeStyle="rgba(34, 211, 238, 0.15)",e.lineWidth=1;for(let i=0;i<=256;i+=32)e.beginPath(),e.moveTo(i,0),e.lineTo(i,256),e.stroke(),e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke();e.fillStyle="rgba(34, 211, 238, 0.4)";for(let i=0;i<=256;i+=32)for(let r=0;r<=256;r+=32)e.fillRect(i-1.5,r-1.5,3,3);const n=new N_(t);return n.wrapS=ma,n.wrapT=ma,n.repeat.set(16,16),n}function K2(){const t=new $n;let e=null,n=null,i=null,r=null,s=[];const o=new _i(32,32),a=new In({map:q2(),roughness:.2,metalness:.85}),l=new Xe(o,a);l.rotation.x=-Math.PI/2,l.position.y=0,t.add(l);const c=new _i(32,32),f=new In({color:460813,roughness:.9,metalness:.2}),h=new Xe(c,f);h.rotation.x=Math.PI/2,h.position.y=5,t.add(h);const d=new _i(32,5),m=new In({color:592660,roughness:.8}),v=new Xe(d,m);v.position.set(0,2.5,-8),t.add(v);const y=new Zt(16,3.2,.1),p=new In({color:1119781,metalness:.8,roughness:.3}),u=new Xe(y,p);u.position.set(0,2.5,-7.95),t.add(u);const g=new _i(24,6),S=new qt({color:330782}),x=new Xe(g,S);x.position.set(0,2.8,-10),t.add(x);for(let ot=0;ot<28;ot++){const Tt=1.2+Math.random()*3.5,hi=.4+Math.random()*.8,us=new Zt(hi,Tt,.2),Qi=new qt({color:ot%3===0?726838:462372}),Li=new Xe(us,Qi);if(Li.position.set(-8+ot*.6,Tt/2,-9.8),t.add(Li),Math.random()>.4){const po=new Rc(.04,4,4),Ji=new qt({color:ot%2===0?2282478:16007006}),mo=new Xe(po,Ji);mo.position.set(Li.position.x,Tt+.05,-9.75),t.add(mo)}}const E=new $n;E.position.set(0,0,0);const b=new Zt(2.4,.08,1.1),A=new In({color:1119264,roughness:.4,metalness:.7}),_=new Xe(b,A);_.position.set(0,.76,0),E.add(_);const C=new Zt(.06,.76,.9),P=new In({color:658452,metalness:.9,roughness:.2}),D=new Xe(C,P);D.position.set(-1.1,.38,0);const L=new Xe(C,P);L.position.set(1.1,.38,0),E.add(D,L);const G=new Zt(.88,.52,.02),N=pd("UnrealEngine5 / SpatialCore.cpp",["// Low-Latency Spatial Engine","UCLASS() class ASpatialRig : public AActor {","  void Tick(float DeltaTime) override;","  FVector HeadsetPose = XRDevice->GetPose();","  return RenderStereoPass(HeadsetPose);","};"]),z=new qt({map:N}),K=new Xe(G,z);K.position.set(0,1.18,-.2),E.add(K);const Y=pd("MimadimPlus / MeshGen.cpp",["// Procedural Tile & DXF Clipper","void GenerateProceduralFloor() {","  PolygonClipper.Clip(DXFPoints);","  TriangulateMesh(FlooringMesh);","}"]),V=new qt({map:Y}),B=new Xe(G,V);B.position.set(-.9,1.18,-.05),B.rotation.y=Math.PI/8,E.add(B);const j=pd("SmartScopy / DirectShowPipeline.cs",["// Zero-Latency OT Surgical Stream","void OnDirectShowFrame(byte[] buffer) {","  YoloDetector.InferFrame(buffer);","  HoloLensStreamer.TransmitE2EE();","}"]),Z=new qt({map:j}),ce=new Xe(G,Z);ce.position.set(.9,1.18,-.05),ce.rotation.y=-Math.PI/8,E.add(ce);const ve=new $n;ve.position.set(.4,.83,.15),ve.rotation.y=-Math.PI/6;const je=new Zt(.24,.08,.12),ze=new In({color:329484,roughness:.1,metalness:.95}),ke=new Xe(je,ze);ve.add(ke);const Q=new Zt(.25,.06,.02),ie=new Pb({color:2282478,roughness:.1,transmission:.8,transparent:!0}),ye=new Xe(Q,ie);ye.position.z=.06,ve.add(ye);const Ie=new Rc(.015,8,8),_e=new qt({color:1096065});i=new Xe(Ie,_e),i.position.set(.1,.02,.065),ve.add(i),E.add(ve),t.add(E),n=new $n,n.position.set(3.2,1.1,-1.2);const Ve=new Zt(1.6,1.1,1.6),Lt=new qt({color:2282478,wireframe:!0,transparent:!0,opacity:.7}),Ye=new Xe(Ve,Lt);n.add(Ye);const Qe=new _i(1.5,1.5,6,6),ct=new qt({color:8490232,wireframe:!0,transparent:!0,opacity:.5}),He=new Xe(Qe,ct);He.rotation.x=-Math.PI/2,He.position.y=-.54,n.add(He);const mt=new Hb(.4);n.add(mt);const Ut=new Cc(.8,.9,.6,16),rn=new In({color:1119782,metalness:.8,roughness:.3}),gt=new Xe(Ut,rn);gt.position.set(3.2,.3,-1.2),t.add(gt),t.add(n);const ft=new $n;ft.position.set(-3.5,0,-2.8);const O=new Zt(1.2,.85,.8),Wt=new In({color:1317417,roughness:.3,metalness:.7}),tt=new Xe(O,Wt);tt.position.set(0,.42,0),ft.add(tt);const R=new Cc(.04,.04,.9,12),M=new In({color:9741240,metalness:.9,roughness:.2}),H=new Xe(R,M);H.position.set(.45,1.15,0),ft.add(H),e=new $n,e.position.set(0,1.45,0);const $=new bp(.38,2),J=new qt({color:1096065,wireframe:!0,transparent:!0,opacity:.85}),oe=new Xe($,J);e.add(oe);const ae=new Ap(.55,.015,16,48),ee=new qt({color:2282478,transparent:!0,opacity:.6}),ne=new Xe(ae,ee);ne.rotation.x=Math.PI/3,e.add(ne);const ue=new Xe(ae,ee);ue.rotation.y=Math.PI/4,e.add(ue),ft.add(e);const be=new $n;be.position.set(1.7,0,.6);const he=new Zt(.8,1.65,.75),de=new In({color:856346,metalness:.6,roughness:.4}),Ce=new Xe(he,de);Ce.position.set(0,.82,0),be.add(Ce);const Ne=new _i(.55,.45),Ue=new qt({color:2282478,wireframe:!0}),F=new Xe(Ne,Ue);F.position.set(0,1.15,.38),be.add(F);const fe=new Tp(.4,.9,32),te=new qt({color:1096065,side:Mi,transparent:!0,opacity:.45}),le=new Xe(fe,te);le.rotation.x=-Math.PI/2,le.position.set(0,.02,1.3),be.add(le),ft.add(be),t.add(ft);const pe=new $n;pe.position.set(-1.8,0,-6.2);for(let ot=0;ot<3;ot++){const Tt=new Zt(.9,2.6,.8),hi=new In({color:527380,metalness:.85,roughness:.25}),us=new Xe(Tt,hi);us.position.set(ot*1.05,1.3,0),pe.add(us);for(let Qi=0;Qi<12;Qi++){const Li=new Zt(.03,.02,.01),po=new qt({color:Math.random()>.3?2282478:1096065}),Ji=new Xe(Li,po);Ji.position.set(ot*1.05-.32,.4+Qi*.16,.41),pe.add(Ji),s.push(Ji)}}t.add(pe);const re=280,Re=new Gt,Ee=new Float32Array(re*3);for(let ot=0;ot<re*3;ot+=3)Ee[ot]=(Math.random()-.5)*16,Ee[ot+1]=Math.random()*4.5,Ee[ot+2]=(Math.random()-.5)*16;Re.setAttribute("position",new Ri(Ee,3));const ut=new R_({color:2282478,size:.04,transparent:!0,opacity:.6});return r=new Eb(Re,ut),t.add(r),{group:t,update:(ot,Tt)=>{if(e&&(e.rotation.y=Tt*.6,e.position.y=1.45+Math.sin(Tt*2)*.04),n&&(n.rotation.y=-Tt*.35,n.position.y=1.1+Math.cos(Tt*1.5)*.03),i){const hi=.5+Math.sin(Tt*4)*.5;i.material.color.setRGB(.06*hi,.72*hi,.5*hi)}s.length>0&&Math.random()>.88&&s[Math.floor(Math.random()*s.length)].material.color.setHex(Math.random()>.5?2282478:1096065),r&&(r.rotation.y=Tt*.02)}}}const Z2=[{sectionId:"home",scrollProgress:0,position:new I(0,1.4,3.2),target:new I(0,1.15,0)},{sectionId:"about",scrollProgress:.14,position:new I(2,1.7,1.8),target:new I(3,1.1,-1.2)},{sectionId:"smartscopy",scrollProgress:.28,position:new I(-2.4,1.6,-.6),target:new I(-3.5,1.4,-2.8)},{sectionId:"mimadim",scrollProgress:.43,position:new I(2.6,1.5,.8),target:new I(3.2,1.1,-1.2)},{sectionId:"nopainheals",scrollProgress:.57,position:new I(-1.8,1.4,-1),target:new I(-1.8,1,-2.2)},{sectionId:"vision-ai",scrollProgress:.71,position:new I(0,1.5,1.5),target:new I(0,1.15,0)},{sectionId:"skills",scrollProgress:.85,position:new I(-.6,1.4,-3.6),target:new I(-1.6,1.3,-6)},{sectionId:"contact",scrollProgress:1,position:new I(0,3,4.2),target:new I(0,1.1,-2)}];class Q2{constructor(e,n=Z2){wt(this,"camera");wt(this,"waypoints");wt(this,"currentPosition",new I);wt(this,"currentTarget",new I);wt(this,"targetPosition",new I);wt(this,"targetLookAt",new I);wt(this,"mouseOffset",new Le(0,0));wt(this,"currentMouseOffset",new Le(0,0));this.camera=e,this.waypoints=n,n.length>0&&(this.currentPosition.copy(n[0].position),this.currentTarget.copy(n[0].target),this.targetPosition.copy(n[0].position),this.targetLookAt.copy(n[0].target))}setMouseOffset(e,n){this.mouseOffset.set(e*.25,n*.15)}update(e,n){const i=Math.max(0,Math.min(1,e));let r=0;for(let m=0;m<this.waypoints.length-1;m++)if(i>=this.waypoints[m].scrollProgress&&i<=this.waypoints[m+1].scrollProgress){r=m;break}const s=Math.min(r+1,this.waypoints.length-1),o=this.waypoints[r],a=this.waypoints[s],l=a.scrollProgress-o.scrollProgress,c=l>0?(i-o.scrollProgress)/l:0,f=.5-.5*Math.cos(c*Math.PI);this.targetPosition.lerpVectors(o.position,a.position,f),this.targetLookAt.lerpVectors(o.target,a.target,f);const h=Math.min(1,n*3.5);this.currentMouseOffset.lerp(this.mouseOffset,h);const d=Math.min(1,n*4);this.currentPosition.lerp(this.targetPosition,d),this.currentTarget.lerp(this.targetLookAt,d),this.camera.position.set(this.currentPosition.x+this.currentMouseOffset.x,this.currentPosition.y-this.currentMouseOffset.y,this.currentPosition.z),this.camera.lookAt(this.currentTarget.x,this.currentTarget.y,this.currentTarget.z)}}class J2{constructor(){wt(this,"container",null);wt(this,"scene");wt(this,"camera");wt(this,"cameraController");wt(this,"renderer",null);wt(this,"composer",null);wt(this,"bloomPass",null);wt(this,"environment",null);wt(this,"animationFrameId",null);wt(this,"isDestroyed",!1);wt(this,"isIdle",!1);wt(this,"scrollProgress",0);wt(this,"lastTime",0);wt(this,"clock");wt(this,"onTick");this.scene=new fb,this.scene.fog=new Sp(460813,.05),this.camera=new On(45,1,.1,100),this.camera.position.set(0,1.4,3.2),this.cameraController=new Q2(this.camera),this.clock=new Vb}init(e,n){this.container=e,this.isDestroyed=!1;try{const i=e.clientWidth||window.innerWidth,r=e.clientHeight||window.innerHeight;this.renderer=new z2({powerPreference:"high-performance",antialias:!0,alpha:!0,stencil:!1,depth:!0}),this.renderer.setSize(i,r);const s=Math.min(window.devicePixelRatio||1,1.75);return this.renderer.setPixelRatio(s),this.renderer.toneMapping=dp,this.renderer.toneMappingExposure=1.15,this.renderer.outputColorSpace=Fn,this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",e.appendChild(this.renderer.domElement),this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.setupLighting(),this.environment=K2(),this.scene.add(this.environment.group),this.setupPostProcessing(i,r),n!=null&&n.onLoaded&&n.onLoaded(),this.startRenderLoop(),!0}catch(i){return console.warn("StudioScene: WebGL initialization failed, fallback enabled.",i),n!=null&&n.onError&&i instanceof Error&&n.onError(i),!1}}setupLighting(){const e=new Fb(791336,.9);this.scene.add(e);const n=new Ub(14219519,1.4);n.position.set(5,8,4),this.scene.add(n);const i=new ad(2282478,2.8,16);i.position.set(-1.5,2.2,.5),this.scene.add(i);const r=new ad(8490232,2.5,16);r.position.set(2.2,2.5,-1),this.scene.add(r);const s=new ad(1096065,1.8,12);s.position.set(-2.2,1.8,-2.5),this.scene.add(s)}setupPostProcessing(e,n){if(this.renderer)try{this.composer=new j2(this.renderer);const i=new Y2(this.scene,this.camera);this.composer.addPass(i),this.bloomPass=new oo(new Le(e,n),.5,.35,.75),this.composer.addPass(this.bloomPass)}catch(i){console.warn("Postprocessing bloom unsupported, using standard renderer.",i),this.composer=null}}resize(){if(!this.container||!this.renderer)return;const e=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.composer&&this.composer.setSize(e,n)}setIdle(e){this.isIdle=e}startRenderLoop(){const e=n=>{if(this.isDestroyed||(this.animationFrameId=requestAnimationFrame(e),this.isIdle&&n-this.lastTime<66))return;this.lastTime=n;const i=this.clock.getDelta(),r=this.clock.getElapsedTime();this.cameraController.update(this.scrollProgress,i),this.environment&&this.environment.update(i,r),this.onTick&&this.onTick(i,r),this.composer?this.composer.render():this.renderer&&this.renderer.render(this.scene,this.camera)};this.animationFrameId=requestAnimationFrame(e)}setScrollProgress(e){this.scrollProgress=e}setMouseOffset(e,n){this.cameraController.setMouseOffset(e,n)}destroy(){this.isDestroyed=!0,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.renderer&&this.renderer.domElement&&this.renderer.domElement.parentElement&&(this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),this.renderer.dispose(),this.renderer=null),this.composer&&(this.composer.dispose(),this.composer=null),this.scene.traverse(e=>{e instanceof Xe&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material&&e.material.dispose())}),this.environment=null,this.scene.clear()}}const eP=({progress:t,isLoaded:e})=>{const i=2*Math.PI*48,r=i-t/100*i;return w.jsxs("div",{className:`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#07080d]/90 backdrop-blur-xl transition-all duration-700 ${e?"opacity-0 pointer-events-none":"opacity-100"}`,children:[w.jsxs("div",{className:"relative flex items-center justify-center w-36 h-36",children:[w.jsx("div",{className:"absolute inset-0 rounded-full bg-cyan-500/10 blur-xl animate-pulse"}),w.jsxs("svg",{className:"w-32 h-32 -rotate-90 transform",children:[w.jsx("circle",{cx:"64",cy:"64",r:48,className:"stroke-slate-800",strokeWidth:"3",fill:"transparent"}),w.jsx("circle",{cx:"64",cy:"64",r:48,className:"stroke-cyan-400 transition-all duration-300 ease-out",strokeWidth:"3.5",strokeDasharray:i,strokeDashoffset:r,strokeLinecap:"round",fill:"transparent"})]}),w.jsxs("div",{className:"absolute flex flex-col items-center justify-center",children:[w.jsxs("span",{className:"font-mono text-xl font-bold tracking-tight text-cyan-400",children:[Math.floor(t),"%"]}),w.jsx("span",{className:"font-mono text-[9px] uppercase tracking-widest text-slate-400 mt-0.5",children:"READY"})]})]}),w.jsxs("div",{className:"mt-6 flex flex-col items-center gap-1.5 text-center",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsxs("span",{className:"relative flex h-2 w-2",children:[w.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),w.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-cyan-500"})]}),w.jsx("span",{className:"font-mono text-xs font-semibold tracking-widest text-slate-300 uppercase",children:"Initializing Spatial Lab"})]}),w.jsx("span",{className:"font-mono text-[10px] tracking-wide text-slate-500",children:"Unreal Engine 5 • Three.js • Spatial WebGL"})]})]})},tP=({isEnabled:t=!0})=>{const e=k.useRef(null),n=k.useRef(null),[i,r]=k.useState(0),[s,o]=k.useState(!1),[a,l]=k.useState(!1);return k.useEffect(()=>{if(!t||!e.current){n.current&&(n.current.destroy(),n.current=null);return}const c=new J2;n.current=c;let f=10;r(f);const h=setInterval(()=>{f+=Math.random()*25,f>=95&&(f=95,clearInterval(h)),r(Math.min(95,f))},80);if(!c.init(e.current,{onLoaded:()=>{clearInterval(h),r(100),setTimeout(()=>{o(!0)},350)},onError:g=>{console.warn("StudioCanvas: WebGL fallback activated.",g),clearInterval(h),l(!0),o(!0)}})){clearInterval(h),l(!0),o(!0);return}const m=()=>{const g=document.documentElement.scrollHeight-window.innerHeight,S=g>0?window.scrollY/g:0;c.setScrollProgress(S),p()},v=g=>{const S=g.clientX/window.innerWidth*2-1,x=g.clientY/window.innerHeight*2-1;c.setMouseOffset(S,x),p()};let y=null;const p=()=>{c.setIdle(!1),y&&clearTimeout(y),y=setTimeout(()=>{c.setIdle(!0)},3e3)};p();const u=()=>{c.resize()};return window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("mousemove",v,{passive:!0}),window.addEventListener("resize",u),m(),()=>{clearInterval(h),y&&clearTimeout(y),window.removeEventListener("scroll",m),window.removeEventListener("mousemove",v),window.removeEventListener("resize",u),c.destroy(),n.current=null}},[t]),!t||a?null:w.jsxs(w.Fragment,{children:[w.jsx(eP,{progress:i,isLoaded:s}),w.jsx("div",{ref:e,"aria-hidden":"true",className:"fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-1000",style:{opacity:s?1:0}})]})},nP=({onExploreClick:t,onOpenProjectsDeck:e})=>w.jsx("section",{id:"home",className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 pt-24 pb-20 select-none",children:w.jsxs("div",{className:"max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center",children:[w.jsxs("div",{className:"mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-lg",children:[w.jsxs("span",{className:"relative flex h-2 w-2",children:[w.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),w.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),w.jsx("span",{className:"font-mono text-xs text-slate-300 tracking-wider",children:"SOFTWARE & GAME DEVELOPER"})]}),w.jsxs("div",{className:"mb-6",children:[w.jsx("span",{className:"font-mono text-xs md:text-sm tracking-[0.3em] text-cyan-400 uppercase block mb-3",children:"Game Development • Spatial Computing (XR) • Interactive 3D"}),w.jsxs("h1",{className:"text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1.05]",children:[w.jsx("span",{className:"metallic-text",children:"RAVI "}),w.jsx("span",{className:"gradient-text",children:"PATEL"})]})]}),w.jsxs("p",{className:"max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-8",children:["Crafting high-performance games, spatial computing experiences, and interactive applications across"," ",w.jsx("span",{className:"text-cyan-400 font-semibold font-mono",children:"Unity (C#)"}),","," ",w.jsx("span",{className:"text-indigo-400 font-semibold font-mono",children:"Unreal Engine 5 (C++)"}),", and"," ",w.jsx("span",{className:"text-purple-400 font-semibold font-mono",children:"Three.js / WebGL"}),"."]}),w.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl w-full mb-10",children:[w.jsxs("div",{className:"p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center",children:[w.jsx("span",{className:"font-mono text-2xl md:text-3xl font-extrabold gradient-text block",children:"3+ Years"}),w.jsx("span",{className:"font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block",children:"Professional Experience"})]}),w.jsxs("div",{className:"p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center",children:[w.jsx("span",{className:"font-mono text-2xl md:text-3xl font-extrabold gradient-text block",children:"15+ Projects"}),w.jsx("span",{className:"font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block",children:"Shipped & Delivered"})]}),w.jsxs("div",{className:"col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center",children:[w.jsx("span",{className:"font-mono text-2xl md:text-3xl font-extrabold gradient-text block",children:"Cross-Platform"}),w.jsx("span",{className:"font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block",children:"PC, Mobile & XR Headsets"})]})]}),w.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[w.jsxs(Hn,{type:"button",onClick:t,className:"h-11 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold gap-2 shadow-lg shadow-cyan-500/25 transition-all text-xs font-mono",children:["[ EXPLORE WORK ]",w.jsx(ew,{className:"w-3.5 h-3.5"})]}),w.jsxs(Hn,{type:"button",onClick:e,variant:"outline",className:"h-11 px-6 rounded-xl border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 font-semibold gap-2 text-xs font-mono",children:[w.jsx(Ta,{className:"w-3.5 h-3.5 text-cyan-400"}),"[ ALL PROJECTS (13) ]"]}),w.jsx("a",{href:"Ravi_Patel_Resume.pdf",download:"Ravi_Patel_Resume.pdf",className:"no-underline hidden sm:inline-block",children:w.jsxs(Hn,{type:"button",variant:"outline",className:"h-11 px-5 rounded-xl border-white/10 hover:bg-white/[0.05] text-slate-300 font-semibold gap-2 text-xs font-mono",children:[w.jsx(mf,{className:"w-3.5 h-3.5"}),"[ RESUME ]"]})})]})]})}),iP=()=>{const t=[{icon:jx,title:"Game Development & 3D Systems",description:"Custom gameplay mechanics, real-time physics, and procedural 3D environments across Unreal Engine 5 and Unity."},{icon:gw,title:"Spatial Computing (XR & VR/AR)",description:"Immersive medical visualization, interactive training simulations, and stereoscopic headsets (HoloLens 2, XREAL, Meta Quest)."},{icon:qx,title:"Interactive Kiosks & Hardware",description:"Commercial touchscreen and floor-projection systems built on hardened Linux with robust offline architecture."},{icon:$x,title:"Computer Vision & Smart Motion",description:"Camera-based gesture recognition, skeletal body tracking, and real-time vision processing for controller-free gameplay."}];return w.jsx("section",{id:"about",className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none",children:w.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[w.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[w.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),w.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"STATION 01 // PROFILE & EXPERTISE"})]}),w.jsxs("div",{className:"mb-8",children:[w.jsxs("h2",{className:"text-3xl md:text-5xl font-black tracking-tight text-white mb-3",children:["Core Areas of ",w.jsx("span",{className:"gradient-text",children:"Expertise"})]}),w.jsx("p",{className:"font-mono text-xs md:text-sm text-slate-400 max-w-2xl",children:"Software & Game Developer at Invisible Fiction (May 2023 – Present). Designing and delivering robust 3D, XR, and interactive applications."})]}),w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",children:t.map((e,n)=>{const i=e.icon;return w.jsxs(Jc,{className:"p-5 md:p-6 rounded-2xl bg-[#0a0d18]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/40 transition-all shadow-lg",children:[w.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400",children:w.jsx(i,{className:"w-5 h-5"})}),w.jsx("h3",{className:"text-base font-bold text-white mb-1.5",children:e.title}),w.jsx("p",{className:"text-xs text-slate-400 leading-relaxed font-normal",children:e.description})]},n)})}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[w.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5",children:[w.jsx("div",{className:"w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0",children:w.jsx(lw,{className:"w-4 h-4"})}),w.jsxs("div",{children:[w.jsx("span",{className:"text-xs font-bold text-white block",children:"B.E. in Computer Engineering (CGPA: 8.30 / 10.0)"}),w.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:"Ipcowala Institute of Eng. & Tech. (2019 – 2023)"})]})]}),w.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5",children:[w.jsx("div",{className:"w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",children:w.jsx(tw,{className:"w-4 h-4"})}),w.jsxs("div",{children:[w.jsx("span",{className:"text-xs font-bold text-white block",children:"Anthropic & SAP Industry Certifications"}),w.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:"Claude Architecture • SAP CSR (Code Unnati)"})]})]})]})]})})},El=({stationId:t,stationCode:e,project:n,onInspectCase:i,onOpenProjectsDeck:r})=>w.jsx("section",{id:t,className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none",children:w.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[w.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[w.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),w.jsxs("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:["FEATURED PROJECT ",e," // ",n.category]})]}),w.jsxs("div",{className:"mb-6",children:[w.jsx("h2",{className:"text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-3",children:n.title.toUpperCase()}),w.jsx("p",{className:"font-mono text-xs sm:text-sm md:text-base text-cyan-300/80 max-w-3xl leading-relaxed",children:n.subtitle})]}),w.jsxs("div",{className:"p-6 md:p-8 rounded-3xl bg-[#090c16]/85 backdrop-blur-2xl border border-white/[0.08] shadow-2xl mb-8 relative overflow-hidden",children:[w.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"}),w.jsx("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed mb-6",children:n.shortDescription}),n.architecturalHighlights&&n.architecturalHighlights.length>0&&w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",children:n.architecturalHighlights.slice(0,2).map((s,o)=>w.jsxs("div",{className:"p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5",children:[w.jsx(lp,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),w.jsx("span",{className:"text-xs text-slate-300 leading-relaxed",children:s})]},o))}),w.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]",children:[n.metrics&&w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),w.jsx("span",{className:"font-mono text-xs font-semibold text-white",children:n.metrics})]}),w.jsx("div",{className:"flex flex-wrap gap-1.5",children:n.tech.slice(0,4).map(s=>w.jsx("span",{className:"px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300",children:s},s))})]})]}),w.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[w.jsxs(Hn,{type:"button",onClick:()=>i(n),className:"h-11 px-7 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold gap-2 shadow-lg shadow-cyan-500/25 transition-all text-xs font-mono",children:["[ INSPECT CASE ]",w.jsx(Xx,{className:"w-4 h-4"})]}),r&&w.jsxs(Hn,{type:"button",onClick:r,variant:"outline",className:"h-11 px-5 rounded-xl border-white/10 hover:bg-white/[0.05] text-slate-300 font-semibold gap-2 text-xs font-mono",children:[w.jsx(Ta,{className:"w-3.5 h-3.5 text-cyan-400"}),"[ ALL PROJECTS (13) ]"]})]})]})}),rP=()=>{const t=[{icon:ow,title:"Game Engines & 3D",color:"text-cyan-400 border-cyan-500/30",skills:["Unity (C#)","Unreal Engine 5 (C++)","Three.js","WebGL","Blender"]},{icon:$x,title:"Spatial Computing (XR)",color:"text-indigo-400 border-indigo-500/30",skills:["HoloLens 2 (MRTK)","XREAL Air / Light","OpenXR","WebXR","Spatial Audio"]},{icon:rw,title:"Core Languages",color:"text-purple-400 border-purple-500/30",skills:["C#","C++","TypeScript","JavaScript","Python","GLSL / HLSL"]},{icon:Yx,title:"Computer Vision & AI",color:"text-emerald-400 border-emerald-500/30",skills:["DirectShow","YOLOv8","ONNX Runtime","MediaPipe","OpenCV"]},{icon:jx,title:"Kiosks & Hardware",color:"text-blue-400 border-blue-500/30",skills:["Linux / Ubuntu","Hardened Kiosks","Floor Projectors","Sensors","WebSockets"]},{icon:qx,title:"Security & Cryptography",color:"text-amber-400 border-amber-500/30",skills:["X25519 Elliptic Curve","AES-256-GCM","HKDF-SHA256","Zero-Trust Tunnel"]}];return w.jsx("section",{id:"skills",className:"min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none",children:w.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10",children:[w.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[w.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),w.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"STATION 06 // SKILLS & ARCHITECTURE"})]}),w.jsxs("div",{className:"mb-8",children:[w.jsxs("h2",{className:"text-3xl md:text-5xl font-black tracking-tight text-white mb-3",children:["Technical Stack & ",w.jsx("span",{className:"gradient-text",children:"Architecture"})]}),w.jsx("p",{className:"font-mono text-xs md:text-sm text-slate-400 max-w-2xl",children:"Technologies and frameworks deployed across commercial games, medical XR platforms, and interactive 3D installations."})]}),w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map((e,n)=>{const i=e.icon;return w.jsxs(Jc,{className:"p-5 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/40 transition-all shadow-lg",children:[w.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[w.jsx("div",{className:`w-8 h-8 rounded-lg bg-white/[0.04] border flex items-center justify-center ${e.color}`,children:w.jsx(i,{className:"w-4 h-4"})}),w.jsx("h3",{className:"text-sm font-bold text-white tracking-wide",children:e.title})]}),w.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.skills.map(r=>w.jsx("span",{className:"px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300",children:r},r))})]},n)})})]})})},lh=k.forwardRef(({className:t,type:e,...n},i)=>w.jsx("input",{type:e,className:Mn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:i,...n}));lh.displayName="Input";const X_=k.forwardRef(({className:t,...e},n)=>w.jsx("textarea",{className:Mn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...e}));X_.displayName="Textarea";const sP=1,oP=1e6;let md=0;function aP(){return md=(md+1)%Number.MAX_SAFE_INTEGER,md.toString()}const gd=new Map,g0=t=>{if(gd.has(t))return;const e=setTimeout(()=>{gd.delete(t),Ko({type:"REMOVE_TOAST",toastId:t})},oP);gd.set(t,e)},lP=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,sP)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?g0(n):t.toasts.forEach(i=>{g0(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},jl=[];let Yl={toasts:[]};function Ko(t){Yl=lP(Yl,t),jl.forEach(e=>{e(Yl)})}function cP({...t}){const e=aP(),n=r=>Ko({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>Ko({type:"DISMISS_TOAST",toastId:e});return Ko({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function j_(){const[t,e]=k.useState(Yl);return k.useEffect(()=>(jl.push(e),()=>{const n=jl.indexOf(e);n>-1&&jl.splice(n,1)}),[t]),{...t,toast:cP,dismiss:n=>Ko({type:"DISMISS_TOAST",toastId:n})}}class Na{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const uP=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},Qt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:uP()},Rp=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},dP=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=Rp(t);Qt.publicKey=n.publicKey,Qt.blockHeadless=n.blockHeadless,Qt.storageProvider=n.storageProvider,Qt.blockList=n.blockList,Qt.limitRate=n.limitRate,Qt.origin=n.origin||e},Y_=async(t,e,n={})=>{const i=await fetch(Qt.origin+t,{method:"POST",headers:n,body:e}),r=await i.text(),s=new Na(i.status,r);if(i.ok)return s;throw s},$_=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},fP=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},q_=t=>t.webdriver||!t.languages||t.languages.length===0,K_=()=>new Na(451,"Unavailable For Headless Browser"),hP=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},pP=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},mP=(t,e)=>t instanceof FormData?t.get(e):t[e],Z_=(t,e)=>{if(pP(t))return!1;hP(t.list,t.watchVariable);const n=mP(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},Q_=()=>new Na(403,"Forbidden"),gP=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},vP=async(t,e,n)=>{const i=Number(await n.get(t)||0);return e-Date.now()+i},J_=async(t,e,n)=>{if(!e.throttle||!n)return!1;gP(e.throttle,e.id);const i=e.id||t;return await vP(i,e.throttle,n)>0?!0:(await n.set(i,Date.now().toString()),!1)},ey=()=>new Na(429,"Too Many Requests"),xP=async(t,e,n,i)=>{const r=Rp(i),s=r.publicKey||Qt.publicKey,o=r.blockHeadless||Qt.blockHeadless,a=r.storageProvider||Qt.storageProvider,l={...Qt.blockList,...r.blockList},c={...Qt.limitRate,...r.limitRate};return o&&q_(navigator)?Promise.reject(K_()):($_(s,t,e),fP(n),n&&Z_(l,n)?Promise.reject(Q_()):await J_(location.pathname,c,a)?Promise.reject(ey()):Y_("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},_P=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},yP=t=>typeof t=="string"?document.querySelector(t):t,SP=async(t,e,n,i)=>{const r=Rp(i),s=r.publicKey||Qt.publicKey,o=r.blockHeadless||Qt.blockHeadless,a=Qt.storageProvider||r.storageProvider,l={...Qt.blockList,...r.blockList},c={...Qt.limitRate,...r.limitRate};if(o&&q_(navigator))return Promise.reject(K_());const f=yP(n);$_(s,t,e),_P(f);const h=new FormData(f);return Z_(l,h)?Promise.reject(Q_()):await J_(location.pathname,c,a)?Promise.reject(ey()):(h.append("lib_version","4.4.1"),h.append("service_id",t),h.append("template_id",e),h.append("user_id",s),Y_("/api/v1.0/email/send-form",h))},MP={init:dP,send:xP,sendForm:SP,EmailJSResponseStatus:Na},wP=()=>{const{toast:t}=j_(),[e,n]=k.useState({name:"",email:"",message:""}),[i,r]=k.useState(!1),[s,o]=k.useState(!1),a=async l=>{l.preventDefault(),r(!0);try{await MP.send("service_7vljb2h","template_k3j7nfe",{from_name:e.name,reply_to:e.email,message:e.message},"GekL2x0c-5PjX33sM"),o(!0),t({title:"Transmission Received",description:"Your message was transmitted successfully. I will respond promptly."}),n({name:"",email:"",message:""})}catch(c){console.warn("Direct transmission fallback:",c),t({title:"Transmission Logged",description:"Thank you for reaching out. You can also connect via direct email or LinkedIn."})}finally{r(!1)}};return w.jsxs("section",{id:"contact",className:"min-h-screen w-full flex flex-col justify-between relative px-6 md:px-16 pt-24 pb-12 select-none",children:[w.jsxs("div",{className:"max-w-5xl mx-auto w-full relative z-10 my-auto",children:[w.jsxs("div",{className:"mb-4 flex items-center gap-2",children:[w.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),w.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"STATION 07 // GET IN TOUCH"})]}),w.jsxs("div",{className:"mb-8",children:[w.jsxs("h2",{className:"text-3xl md:text-5xl font-black tracking-tight text-white mb-2",children:["Let's Build Something ",w.jsx("span",{className:"gradient-text",children:"Exceptional"})]}),w.jsx("p",{className:"font-mono text-xs md:text-sm text-slate-400",children:"Open for Senior Software & Game Development, Spatial Computing (XR), and Interactive 3D roles."})]}),w.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[w.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[w.jsxs("div",{className:"p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5",children:[w.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",children:w.jsx(fw,{className:"w-4 h-4"})}),w.jsxs("div",{children:[w.jsx("span",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-widest block",children:"Email Address"}),w.jsx("a",{href:"mailto:patelravi28042001@gmail.com",className:"text-xs md:text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono",children:"patelravi28042001@gmail.com"})]})]}),w.jsxs("div",{className:"p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5",children:[w.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0",children:w.jsx(mw,{className:"w-4 h-4"})}),w.jsxs("div",{children:[w.jsx("span",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-widest block",children:"Phone / WhatsApp"}),w.jsx("a",{href:"tel:+919712728974",className:"text-xs md:text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono",children:"+91 97127 28974"})]})]}),w.jsxs("div",{className:"p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5",children:[w.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0",children:w.jsx(hw,{className:"w-4 h-4"})}),w.jsxs("div",{children:[w.jsx("span",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-widest block",children:"Location"}),w.jsx("span",{className:"text-xs md:text-sm font-semibold text-white font-mono",children:"Karamsad, Anand, Gujarat, India"})]})]}),w.jsxs("div",{className:"pt-2 flex gap-3",children:[w.jsxs("a",{href:"https://github.com/RaviPatel2804",target:"_blank",rel:"noopener noreferrer",className:"flex-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 transition-all flex items-center justify-center gap-2 text-xs font-mono",children:[w.jsx(aw,{className:"w-4 h-4"}),w.jsx("span",{children:"GitHub"})]}),w.jsxs("a",{href:"https://www.linkedin.com/in/ravi-patel-394939223/",target:"_blank",rel:"noopener noreferrer",className:"flex-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-400/40 text-slate-300 hover:text-indigo-400 transition-all flex items-center justify-center gap-2 text-xs font-mono",children:[w.jsx(uw,{className:"w-4 h-4"}),w.jsx("span",{children:"LinkedIn"})]})]})]}),w.jsx("div",{className:"lg:col-span-7",children:w.jsxs("form",{onSubmit:a,className:"p-6 md:p-8 rounded-3xl bg-[#080b14]/85 backdrop-blur-2xl border border-white/[0.08] shadow-2xl space-y-4",children:[w.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1.5 uppercase",children:"Your Name"}),w.jsx(lh,{required:!0,value:e.name,onChange:l=>n({...e,name:l.target.value}),placeholder:"e.g. Alex Mercer",className:"h-10 bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1.5 uppercase",children:"Email Address"}),w.jsx(lh,{type:"email",required:!0,value:e.email,onChange:l=>n({...e,email:l.target.value}),placeholder:"alex@studio.com",className:"h-10 bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400"})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1.5 uppercase",children:"Message Details"}),w.jsx(X_,{required:!0,rows:4,value:e.message,onChange:l=>n({...e,message:l.target.value}),placeholder:"Tell me about your project, team requirements, or role details...",className:"bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400 resize-none"})]}),w.jsx(Hn,{type:"submit",disabled:i,className:"w-full h-11 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl text-xs font-mono shadow-lg shadow-cyan-500/20",children:i?w.jsxs(w.Fragment,{children:[w.jsx("span",{children:"Sending..."}),w.jsx(dw,{className:"ml-2 w-3.5 h-3.5 animate-spin"})]}):s?w.jsxs(w.Fragment,{children:[w.jsx("span",{children:"Message Sent Successfully"}),w.jsx(lp,{className:"ml-2 w-3.5 h-3.5 text-emerald-400"})]}):w.jsxs(w.Fragment,{children:[w.jsx("span",{children:"[ SEND MESSAGE ]"}),w.jsx(vw,{className:"ml-2 w-3.5 h-3.5"})]})})]})})]})]}),w.jsx("footer",{className:"pt-8 border-t border-white/[0.06] text-center relative z-10",children:w.jsxs("p",{className:"font-mono text-[11px] text-slate-500",children:["© ",new Date().getFullYear()," Ravi Patel. Software & Game Developer."]})})]})},EP=()=>{const[t,e]=k.useState(()=>{try{const m=localStorage.getItem("ravi_portfolio_3d_enabled");return m!==null?m==="true":!0}catch{return!0}}),[n,i]=k.useState("home"),[r,s]=k.useState(null),[o,a]=k.useState(!1);k.useEffect(()=>{try{localStorage.setItem("ravi_portfolio_3d_enabled",String(t))}catch{}},[t]),k.useEffect(()=>{const m=()=>{const v=vf.map(p=>document.getElementById(p.id)).filter(Boolean),y=window.scrollY+window.innerHeight*.45;for(let p=v.length-1;p>=0;p--)if(v[p].offsetTop<=y){i(vf[p].id);break}};return window.addEventListener("scroll",m,{passive:!0}),m(),()=>window.removeEventListener("scroll",m)},[]);const l=m=>{const v=document.getElementById(m);v&&v.scrollIntoView({behavior:"smooth"})},c=un.find(m=>m.id==="smartscopy")||un[0],f=un.find(m=>m.id==="mimadimplus")||un[1],h=un.find(m=>m.id==="nopainheals")||un[2],d=un.find(m=>m.id==="motion-tracking-ai")||un[3];return w.jsxs("div",{className:"relative min-h-screen bg-[#06070a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-clip",children:[w.jsx(tP,{isEnabled:t}),w.jsx(rE,{activeStationId:n,onSelectStation:l}),w.jsx(iE,{is3DEnabled:t,onToggle3D:()=>e(m=>!m),onOpenProjectsDeck:()=>a(!0),onScrollToStation:l}),w.jsx(sE,{}),w.jsxs("main",{className:"relative z-10",children:[w.jsx(nP,{onExploreClick:()=>l("about"),onOpenProjectsDeck:()=>a(!0)}),w.jsx(iP,{}),w.jsx(El,{stationId:"smartscopy",stationCode:"02",project:c,onInspectCase:m=>s(m),onOpenProjectsDeck:()=>a(!0)}),w.jsx(El,{stationId:"mimadim",stationCode:"03",project:f,onInspectCase:m=>s(m),onOpenProjectsDeck:()=>a(!0)}),w.jsx(El,{stationId:"nopainheals",stationCode:"04",project:h,onInspectCase:m=>s(m),onOpenProjectsDeck:()=>a(!0)}),w.jsx(El,{stationId:"vision-ai",stationCode:"05",project:d,onInspectCase:m=>s(m),onOpenProjectsDeck:()=>a(!0)}),w.jsx(rP,{}),w.jsx(wP,{})]}),w.jsx(oE,{project:r,onClose:()=>s(null),onOpenAllProjects:()=>a(!0)}),w.jsx(hE,{isOpen:o,onClose:()=>a(!1),onSelectProject:m=>{a(!1),s(m)}})]})},bP=()=>{const t=Gx();return k.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),w.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-100",children:w.jsxs("div",{className:"text-center",children:[w.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),w.jsx("p",{className:"mb-4 text-xl text-gray-600",children:"Oops! Page not found"}),w.jsx("a",{href:"/",className:"text-blue-500 underline hover:text-blue-700",children:"Return to Home"})]})})};function Bn(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function ty(t,e=[]){let n=[];function i(s,o){const a=k.createContext(o),l=n.length;n=[...n,o];const c=h=>{var u;const{scope:d,children:m,...v}=h,y=((u=d==null?void 0:d[t])==null?void 0:u[l])||a,p=k.useMemo(()=>v,Object.values(v));return w.jsx(y.Provider,{value:p,children:m})};c.displayName=s+"Provider";function f(h,d){var y;const m=((y=d==null?void 0:d[t])==null?void 0:y[l])||a,v=k.useContext(m);if(v)return v;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return[c,f]}const r=()=>{const s=n.map(o=>k.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return k.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,TP(r,...e)]}function TP(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return k.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}function AP(t){const e=t+"CollectionProvider",[n,i]=ty(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=y=>{const{scope:p,children:u}=y,g=dr.useRef(null),S=dr.useRef(new Map).current;return w.jsx(r,{scope:p,itemMap:S,collectionRef:g,children:u})};o.displayName=e;const a=t+"CollectionSlot",l=yc(a),c=dr.forwardRef((y,p)=>{const{scope:u,children:g}=y,S=s(a,u),x=ts(p,S.collectionRef);return w.jsx(l,{ref:x,children:g})});c.displayName=a;const f=t+"CollectionItemSlot",h="data-radix-collection-item",d=yc(f),m=dr.forwardRef((y,p)=>{const{scope:u,children:g,...S}=y,x=dr.useRef(null),E=ts(p,x),b=s(f,u);return dr.useEffect(()=>(b.itemMap.set(x,{ref:x,...S}),()=>void b.itemMap.delete(x))),w.jsx(d,{[h]:"",ref:E,children:g})});m.displayName=f;function v(y){const p=s(t+"CollectionConsumer",y);return dr.useCallback(()=>{const g=p.collectionRef.current;if(!g)return[];const S=Array.from(g.querySelectorAll(`[${h}]`));return Array.from(p.itemMap.values()).sort((b,A)=>S.indexOf(b.ref.current)-S.indexOf(A.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:o,Slot:c,ItemSlot:m},v,i]}var CP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ni=CP.reduce((t,e)=>{const n=yc(`Primitive.${e}`),i=k.forwardRef((r,s)=>{const{asChild:o,...a}=r,l=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(l,{...a,ref:s})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{});function ny(t,e){t&&$c.flushSync(()=>t.dispatchEvent(e))}function ss(t){const e=k.useRef(t);return k.useEffect(()=>{e.current=t}),k.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function RP(t,e=globalThis==null?void 0:globalThis.document){const n=ss(t);k.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var PP="DismissableLayer",ch="dismissableLayer.update",NP="dismissableLayer.pointerDownOutside",LP="dismissableLayer.focusOutside",v0,iy=k.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),ry=k.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=k.useContext(iy),[f,h]=k.useState(null),d=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=k.useState({}),v=ts(e,A=>h(A)),y=Array.from(c.layers),[p]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),u=y.indexOf(p),g=f?y.indexOf(f):-1,S=c.layersWithOutsidePointerEventsDisabled.size>0,x=g>=u,E=IP(A=>{const _=A.target,C=[...c.branches].some(P=>P.contains(_));!x||C||(r==null||r(A),o==null||o(A),A.defaultPrevented||a==null||a())},d),b=UP(A=>{const _=A.target;[...c.branches].some(P=>P.contains(_))||(s==null||s(A),o==null||o(A),A.defaultPrevented||a==null||a())},d);return RP(A=>{g===c.layers.size-1&&(i==null||i(A),!A.defaultPrevented&&a&&(A.preventDefault(),a()))},d),k.useEffect(()=>{if(f)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(v0=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(f)),c.layers.add(f),x0(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=v0)}},[f,d,n,c]),k.useEffect(()=>()=>{f&&(c.layers.delete(f),c.layersWithOutsidePointerEventsDisabled.delete(f),x0())},[f,c]),k.useEffect(()=>{const A=()=>m({});return document.addEventListener(ch,A),()=>document.removeEventListener(ch,A)},[]),w.jsx(Ni.div,{...l,ref:v,style:{pointerEvents:S?x?"auto":"none":void 0,...t.style},onFocusCapture:Bn(t.onFocusCapture,b.onFocusCapture),onBlurCapture:Bn(t.onBlurCapture,b.onBlurCapture),onPointerDownCapture:Bn(t.onPointerDownCapture,E.onPointerDownCapture)})});ry.displayName=PP;var DP="DismissableLayerBranch",sy=k.forwardRef((t,e)=>{const n=k.useContext(iy),i=k.useRef(null),r=ts(e,i);return k.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),w.jsx(Ni.div,{...t,ref:r})});sy.displayName=DP;function IP(t,e=globalThis==null?void 0:globalThis.document){const n=ss(t),i=k.useRef(!1),r=k.useRef(()=>{});return k.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){oy(NP,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function UP(t,e=globalThis==null?void 0:globalThis.document){const n=ss(t),i=k.useRef(!1);return k.useEffect(()=>{const r=s=>{s.target&&!i.current&&oy(LP,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function x0(){const t=new CustomEvent(ch);document.dispatchEvent(t)}function oy(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?ny(r,s):r.dispatchEvent(s)}var FP=ry,OP=sy,ya=globalThis!=null&&globalThis.document?k.useLayoutEffect:()=>{},kP="Portal",ay=k.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,s]=k.useState(!1);ya(()=>s(!0),[]);const o=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?d1.createPortal(w.jsx(Ni.div,{...i,ref:e}),o):null});ay.displayName=kP;function BP(t,e){return k.useReducer((n,i)=>e[n][i]??n,t)}var ly=t=>{const{present:e,children:n}=t,i=zP(e),r=typeof n=="function"?n({present:i.isPresent}):k.Children.only(n),s=ts(i.ref,VP(r));return typeof n=="function"||i.isPresent?k.cloneElement(r,{ref:s}):null};ly.displayName="Presence";function zP(t){const[e,n]=k.useState(),i=k.useRef(null),r=k.useRef(t),s=k.useRef("none"),o=t?"mounted":"unmounted",[a,l]=BP(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return k.useEffect(()=>{const c=bl(i.current);s.current=a==="mounted"?c:"none"},[a]),ya(()=>{const c=i.current,f=r.current;if(f!==t){const d=s.current,m=bl(c);t?l("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(f&&d!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),ya(()=>{if(e){let c;const f=e.ownerDocument.defaultView??window,h=m=>{const y=bl(i.current).includes(m.animationName);if(m.target===e&&y&&(l("ANIMATION_END"),!r.current)){const p=e.style.animationFillMode;e.style.animationFillMode="forwards",c=f.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=p)})}},d=m=>{m.target===e&&(s.current=bl(i.current))};return e.addEventListener("animationstart",d),e.addEventListener("animationcancel",h),e.addEventListener("animationend",h),()=>{f.clearTimeout(c),e.removeEventListener("animationstart",d),e.removeEventListener("animationcancel",h),e.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:k.useCallback(c=>{i.current=c?getComputedStyle(c):null,n(c)},[])}}function bl(t){return(t==null?void 0:t.animationName)||"none"}function VP(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var HP=N0[" useInsertionEffect ".trim().toString()]||ya;function GP({prop:t,defaultProp:e,onChange:n=()=>{},caller:i}){const[r,s,o]=WP({defaultProp:e,onChange:n}),a=t!==void 0,l=a?t:r;{const f=k.useRef(t!==void 0);k.useEffect(()=>{const h=f.current;h!==a&&console.warn(`${i} is changing from ${h?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=a},[a,i])}const c=k.useCallback(f=>{var h;if(a){const d=XP(f)?f(t):f;d!==t&&((h=o.current)==null||h.call(o,d))}else s(f)},[a,t,s,o]);return[l,c]}function WP({defaultProp:t,onChange:e}){const[n,i]=k.useState(t),r=k.useRef(n),s=k.useRef(e);return HP(()=>{s.current=e},[e]),k.useEffect(()=>{var o;r.current!==n&&((o=s.current)==null||o.call(s,n),r.current=n)},[n,r]),[n,i,s]}function XP(t){return typeof t=="function"}var jP=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),YP="VisuallyHidden",Pp=k.forwardRef((t,e)=>w.jsx(Ni.span,{...t,ref:e,style:{...jP,...t.style}}));Pp.displayName=YP;var Np="ToastProvider",[Lp,$P,qP]=AP("Toast"),[cy,x3]=ty("Toast",[qP]),[KP,ru]=cy(Np),uy=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:s=50,children:o}=t,[a,l]=k.useState(null),[c,f]=k.useState(0),h=k.useRef(!1),d=k.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Np}\`. Expected non-empty \`string\`.`),w.jsx(Lp.Provider,{scope:e,children:w.jsx(KP,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:k.useCallback(()=>f(m=>m+1),[]),onToastRemove:k.useCallback(()=>f(m=>m-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:d,children:o})})};uy.displayName=Np;var dy="ToastViewport",ZP=["F8"],uh="toast.viewportPause",dh="toast.viewportResume",fy=k.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=ZP,label:r="Notifications ({hotkey})",...s}=t,o=ru(dy,n),a=$P(n),l=k.useRef(null),c=k.useRef(null),f=k.useRef(null),h=k.useRef(null),d=ts(e,h,o.onViewportChange),m=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),v=o.toastCount>0;k.useEffect(()=>{const p=u=>{var S;i.length!==0&&i.every(x=>u[x]||u.code===x)&&((S=h.current)==null||S.focus())};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[i]),k.useEffect(()=>{const p=l.current,u=h.current;if(v&&p&&u){const g=()=>{if(!o.isClosePausedRef.current){const b=new CustomEvent(uh);u.dispatchEvent(b),o.isClosePausedRef.current=!0}},S=()=>{if(o.isClosePausedRef.current){const b=new CustomEvent(dh);u.dispatchEvent(b),o.isClosePausedRef.current=!1}},x=b=>{!p.contains(b.relatedTarget)&&S()},E=()=>{p.contains(document.activeElement)||S()};return p.addEventListener("focusin",g),p.addEventListener("focusout",x),p.addEventListener("pointermove",g),p.addEventListener("pointerleave",E),window.addEventListener("blur",g),window.addEventListener("focus",S),()=>{p.removeEventListener("focusin",g),p.removeEventListener("focusout",x),p.removeEventListener("pointermove",g),p.removeEventListener("pointerleave",E),window.removeEventListener("blur",g),window.removeEventListener("focus",S)}}},[v,o.isClosePausedRef]);const y=k.useCallback(({tabbingDirection:p})=>{const g=a().map(S=>{const x=S.ref.current,E=[x,...u3(x)];return p==="forwards"?E:E.reverse()});return(p==="forwards"?g.reverse():g).flat()},[a]);return k.useEffect(()=>{const p=h.current;if(p){const u=g=>{var E,b,A;const S=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!S){const _=document.activeElement,C=g.shiftKey;if(g.target===p&&C){(E=c.current)==null||E.focus();return}const L=y({tabbingDirection:C?"backwards":"forwards"}),G=L.findIndex(N=>N===_);vd(L.slice(G+1))?g.preventDefault():C?(b=c.current)==null||b.focus():(A=f.current)==null||A.focus()}};return p.addEventListener("keydown",u),()=>p.removeEventListener("keydown",u)}},[a,y]),w.jsxs(OP,{ref:l,role:"region","aria-label":r.replace("{hotkey}",m),tabIndex:-1,style:{pointerEvents:v?void 0:"none"},children:[v&&w.jsx(fh,{ref:c,onFocusFromOutsideViewport:()=>{const p=y({tabbingDirection:"forwards"});vd(p)}}),w.jsx(Lp.Slot,{scope:n,children:w.jsx(Ni.ol,{tabIndex:-1,...s,ref:d})}),v&&w.jsx(fh,{ref:f,onFocusFromOutsideViewport:()=>{const p=y({tabbingDirection:"backwards"});vd(p)}})]})});fy.displayName=dy;var hy="ToastFocusProxy",fh=k.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,s=ru(hy,n);return w.jsx(Pp,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&i()}})});fh.displayName=hy;var La="Toast",QP="toast.swipeStart",JP="toast.swipeMove",e3="toast.swipeCancel",t3="toast.swipeEnd",py=k.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:s,...o}=t,[a,l]=GP({prop:i,defaultProp:r??!0,onChange:s,caller:La});return w.jsx(ly,{present:n||a,children:w.jsx(r3,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:ss(t.onPause),onResume:ss(t.onResume),onSwipeStart:Bn(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Bn(t.onSwipeMove,c=>{const{x:f,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:Bn(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Bn(t.onSwipeEnd,c=>{const{x:f,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),l(!1)})})})});py.displayName=La;var[n3,i3]=cy(La,{onClose(){}}),r3=k.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:f,onSwipeMove:h,onSwipeCancel:d,onSwipeEnd:m,...v}=t,y=ru(La,n),[p,u]=k.useState(null),g=ts(e,N=>u(N)),S=k.useRef(null),x=k.useRef(null),E=r||y.duration,b=k.useRef(0),A=k.useRef(E),_=k.useRef(0),{onToastAdd:C,onToastRemove:P}=y,D=ss(()=>{var z;(p==null?void 0:p.contains(document.activeElement))&&((z=y.viewport)==null||z.focus()),o()}),L=k.useCallback(N=>{!N||N===1/0||(window.clearTimeout(_.current),b.current=new Date().getTime(),_.current=window.setTimeout(D,N))},[D]);k.useEffect(()=>{const N=y.viewport;if(N){const z=()=>{L(A.current),c==null||c()},K=()=>{const Y=new Date().getTime()-b.current;A.current=A.current-Y,window.clearTimeout(_.current),l==null||l()};return N.addEventListener(uh,K),N.addEventListener(dh,z),()=>{N.removeEventListener(uh,K),N.removeEventListener(dh,z)}}},[y.viewport,E,l,c,L]),k.useEffect(()=>{s&&!y.isClosePausedRef.current&&L(E)},[s,E,y.isClosePausedRef,L]),k.useEffect(()=>(C(),()=>P()),[C,P]);const G=k.useMemo(()=>p?Sy(p):null,[p]);return y.viewport?w.jsxs(w.Fragment,{children:[G&&w.jsx(s3,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:G}),w.jsx(n3,{scope:n,onClose:D,children:$c.createPortal(w.jsx(Lp.ItemSlot,{scope:n,children:w.jsx(FP,{asChild:!0,onEscapeKeyDown:Bn(a,()=>{y.isFocusedToastEscapeKeyDownRef.current||D(),y.isFocusedToastEscapeKeyDownRef.current=!1}),children:w.jsx(Ni.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":y.swipeDirection,...v,ref:g,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:Bn(t.onKeyDown,N=>{N.key==="Escape"&&(a==null||a(N.nativeEvent),N.nativeEvent.defaultPrevented||(y.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:Bn(t.onPointerDown,N=>{N.button===0&&(S.current={x:N.clientX,y:N.clientY})}),onPointerMove:Bn(t.onPointerMove,N=>{if(!S.current)return;const z=N.clientX-S.current.x,K=N.clientY-S.current.y,Y=!!x.current,V=["left","right"].includes(y.swipeDirection),B=["left","up"].includes(y.swipeDirection)?Math.min:Math.max,j=V?B(0,z):0,Z=V?0:B(0,K),ce=N.pointerType==="touch"?10:2,ve={x:j,y:Z},je={originalEvent:N,delta:ve};Y?(x.current=ve,Tl(JP,h,je,{discrete:!1})):_0(ve,y.swipeDirection,ce)?(x.current=ve,Tl(QP,f,je,{discrete:!1}),N.target.setPointerCapture(N.pointerId)):(Math.abs(z)>ce||Math.abs(K)>ce)&&(S.current=null)}),onPointerUp:Bn(t.onPointerUp,N=>{const z=x.current,K=N.target;if(K.hasPointerCapture(N.pointerId)&&K.releasePointerCapture(N.pointerId),x.current=null,S.current=null,z){const Y=N.currentTarget,V={originalEvent:N,delta:z};_0(z,y.swipeDirection,y.swipeThreshold)?Tl(t3,m,V,{discrete:!0}):Tl(e3,d,V,{discrete:!0}),Y.addEventListener("click",B=>B.preventDefault(),{once:!0})}})})})}),y.viewport)})]}):null}),s3=t=>{const{__scopeToast:e,children:n,...i}=t,r=ru(La,e),[s,o]=k.useState(!1),[a,l]=k.useState(!1);return l3(()=>o(!0)),k.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:w.jsx(ay,{asChild:!0,children:w.jsx(Pp,{...i,children:s&&w.jsxs(w.Fragment,{children:[r.label," ",n]})})})},o3="ToastTitle",my=k.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return w.jsx(Ni.div,{...i,ref:e})});my.displayName=o3;var a3="ToastDescription",gy=k.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return w.jsx(Ni.div,{...i,ref:e})});gy.displayName=a3;var vy="ToastAction",xy=k.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?w.jsx(yy,{altText:n,asChild:!0,children:w.jsx(Dp,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${vy}\`. Expected non-empty \`string\`.`),null)});xy.displayName=vy;var _y="ToastClose",Dp=k.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=i3(_y,n);return w.jsx(yy,{asChild:!0,children:w.jsx(Ni.button,{type:"button",...i,ref:e,onClick:Bn(t.onClick,r.onClose)})})});Dp.displayName=_y;var yy=k.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return w.jsx(Ni.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function Sy(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),c3(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",s=i.dataset.radixToastAnnounceExclude==="";if(!r)if(s){const o=i.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...Sy(i))}}),e}function Tl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?ny(r,s):r.dispatchEvent(s)}var _0=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),s=i>r;return e==="left"||e==="right"?s&&i>n:!s&&r>n};function l3(t=()=>{}){const e=ss(t);ya(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function c3(t){return t.nodeType===t.ELEMENT_NODE}function u3(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function vd(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var d3=uy,My=fy,wy=py,Ey=my,by=gy,Ty=xy,Ay=Dp;const f3=d3,Cy=k.forwardRef(({className:t,...e},n)=>w.jsx(My,{ref:n,className:Mn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));Cy.displayName=My.displayName;const h3=Jx("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Ry=k.forwardRef(({className:t,variant:e,...n},i)=>w.jsx(wy,{ref:i,className:Mn(h3({variant:e}),t),...n}));Ry.displayName=wy.displayName;const p3=k.forwardRef(({className:t,...e},n)=>w.jsx(Ty,{ref:n,className:Mn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",t),...e}));p3.displayName=Ty.displayName;const Py=k.forwardRef(({className:t,...e},n)=>w.jsx(Ay,{ref:n,className:Mn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:w.jsx(Qc,{className:"h-4 w-4"})}));Py.displayName=Ay.displayName;const Ny=k.forwardRef(({className:t,...e},n)=>w.jsx(Ey,{ref:n,className:Mn("text-sm font-semibold",t),...e}));Ny.displayName=Ey.displayName;const Ly=k.forwardRef(({className:t,...e},n)=>w.jsx(by,{ref:n,className:Mn("text-sm opacity-90",t),...e}));Ly.displayName=by.displayName;function m3(){const{toasts:t}=j_();return w.jsxs(f3,{children:[t.map(function({id:e,title:n,description:i,action:r,...s}){return w.jsxs(Ry,{...s,children:[w.jsxs("div",{className:"grid gap-1",children:[n&&w.jsx(Ny,{children:n}),i&&w.jsx(Ly,{children:i})]}),r,w.jsx(Py,{})]},e)}),w.jsx(Cy,{})]})}const g3=()=>w.jsx(K1,{basename:"/MyProtfolio",children:w.jsxs(w.Fragment,{children:[w.jsxs(Y1,{children:[w.jsx(hf,{path:"/",element:w.jsx(EP,{})}),w.jsx(hf,{path:"*",element:w.jsx(bP,{})})]}),w.jsx(m3,{})]})});Ix(document.getElementById("root")).render(w.jsx(g3,{}));
